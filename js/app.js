(function () {
  const cfg = window.IASE_CONFIG;
  const data = window.IASE_DATA;

  // ---------- helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => n == null ? "Price on request" : new Intl.NumberFormat("en-US", { style: "currency", currency: cfg.currency, maximumFractionDigits: 0 }).format(n);
  const fmtDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const sampleBadge = (item) => (item.sample ? '<span class="badge-sample" title="Placeholder listing">Sample</span>' : "");
  const countries = () => [...new Set([...data.spots, ...data.instructors, ...data.shops].map((x) => x.country))].sort();
  const spotById = (id) => data.spots.find((s) => s.id === id);
  const courseById = (id) => data.courses.find((c) => c.id === id);
  const upcoming = (spot) => spot.sessions.filter((d) => new Date(d + "T00:00:00") >= new Date(new Date().toDateString()));

  // Sends a form to the configured endpoint, or reports demo mode when none is set.
  async function submitForm(kind, payload) {
    if (!cfg.formEndpoint) return { demo: true };
    const res = await fetch(cfg.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ form: kind, submittedAt: new Date().toISOString(), ...payload }),
    });
    if (!res.ok) throw new Error("Server responded " + res.status);
    return { demo: false };
  }

  function bindForm(form, kind, buildPayload, successHtml) {
    const out = form.querySelector(".form-result");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const payload = buildPayload(Object.fromEntries(new FormData(form)));
      if (!payload) return;
      const btn = form.querySelector('[type="submit"]');
      btn.disabled = true;
      try {
        const { demo } = await submitForm(kind, payload);
        out.innerHTML =
          `<div class="notice ok">${successHtml(payload)}</div>` +
          (demo ? '<div class="notice warn"><strong>Demo mode:</strong> no form endpoint is configured in <code>js/config.js</code>, so this submission was not sent anywhere.</div>' : "");
        form.reset();
        form.dispatchEvent(new Event("reset-ui"));
      } catch (err) {
        out.innerHTML = `<div class="notice err">Sorry, we couldn't send this right now (${esc(err.message)}). Please try again or email <a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a>.</div>`;
      } finally {
        btn.disabled = false;
        out.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // ---------- layout ----------
  function renderChrome() {
    const page = document.body.dataset.page;
    const links = [
      ["index.html", "Home", "home"],
      ["courses.html", "Book a Course", "courses"],
      ["directory.html", "Instructors & Shops", "directory"],
      [cfg.mainSiteUrl + "/iase/certificate/index", "Find My Certification", "cert"],
      ["join.html", "Join IASE", "join", "cta"],
    ];
    $("#site-header").innerHTML = `
      <div class="container">
        <a class="brand" href="index.html"><span class="brand-mark">🌊</span>${esc(cfg.orgShortName)} <small>${esc(cfg.orgFullName)}</small></a>
        <nav class="nav" aria-label="Main">
          ${links.map(([href, label, id, cls]) => `<a href="${href}" class="${cls || ""}" ${id === page ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
      </div>`;
    $("#site-footer").innerHTML = `
      <div class="container">
        <div><strong style="color:#fff">${esc(cfg.orgShortName)} · ${esc(cfg.orgFullName)}</strong><br>Surf education and certification for ${esc(cfg.yearsActive)} years.</div>
        <div><a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a> · <a href="${esc(cfg.mainSiteUrl)}">${esc(cfg.mainSiteUrl.replace(/^https?:\/\//, ""))}</a><br>© ${new Date().getFullYear()} ${esc(cfg.orgShortName)}</div>
      </div>`;
    document.querySelectorAll("[data-org]").forEach((el) => (el.textContent = cfg[el.dataset.org]));
  }

  // ---------- home ----------
  function initHome() {
    $("#stat-spots").textContent = data.spots.length;
    $("#stat-countries").textContent = countries().length;
    $("#stat-instructors").textContent = data.instructors.length;
    $("#stat-shops").textContent = data.shops.length;
    $("#featured-spots").innerHTML = data.spots.slice(0, 6).map((s) => {
      const next = upcoming(s)[0];
      return `<div class="card">${sampleBadge(s)}
        <h3>${esc(s.name)}</h3>
        <div class="meta">${esc(s.country)} · Season: ${esc(s.season)}</div>
        <div class="tags">${s.courses.map((c) => `<span class="tag">${esc(courseById(c).name)}</span>`).join("")}</div>
        <p class="meta">${next ? "Next session: " + fmtDate(next) : "New dates coming soon"}</p>
        <a class="btn btn-outline" href="courses.html?spot=${s.id}">Book here</a>
      </div>`;
    }).join("");
  }

  // ---------- booking ----------
  function initCourses() {
    const params = new URLSearchParams(location.search);
    const form = $("#booking-form");
    const state = { course: params.get("course"), spot: params.get("spot") };
    if (state.course && !courseById(state.course)) state.course = null;
    if (state.spot && !spotById(state.spot)) state.spot = null;
    if (state.course && state.spot && !spotById(state.spot).courses.includes(state.course)) state.course = null;

    function renderCourses() {
      $("#course-list").innerHTML = data.courses.map((c) => `
        <div class="card selectable ${state.course === c.id ? "selected" : ""}" data-course="${c.id}" tabindex="0" role="button" aria-pressed="${state.course === c.id}">
          <h3>${esc(c.name)}</h3>
          <div class="meta">${esc(c.audience)} · ${esc(c.duration)}</div>
          <p>${esc(c.summary)}</p>
          <p class="hint">Prerequisites: ${esc(c.prerequisites)}</p>
          <div class="price">${money(c.price)}</div>
        </div>`).join("");
    }

    function renderSpots() {
      const sel = $("#spot");
      const spots = data.spots.filter((s) => !state.course || s.courses.includes(state.course));
      if (state.spot && !spots.some((s) => s.id === state.spot)) state.spot = null;
      sel.innerHTML = '<option value="">Choose a surf spot…</option>' +
        spots.map((s) => `<option value="${s.id}" ${s.id === state.spot ? "selected" : ""}>${esc(s.name)}, ${esc(s.country)}</option>`).join("");
      renderSessions();
    }

    function renderSessions() {
      const sel = $("#session");
      const spot = state.spot && spotById(state.spot);
      const dates = spot ? upcoming(spot) : [];
      sel.disabled = !dates.length;
      sel.innerHTML = !spot ? '<option value="">Pick a spot first</option>'
        : !dates.length ? '<option value="">No upcoming sessions — contact us</option>'
        : '<option value="">Choose a start date…</option>' + dates.map((d) => `<option value="${d}">${fmtDate(d)}</option>`).join("");
      $("#spot-info").textContent = spot ? `Season: ${spot.season}` : "";
      renderSummary();
    }

    function renderSummary() {
      const c = state.course && courseById(state.course);
      const n = Math.max(1, parseInt($("#participants").value, 10) || 1);
      $("#summary-text").innerHTML = c ? `<strong>${esc(c.name)}</strong> × ${n}` : "Select a course to see the total";
      $("#summary-total").textContent = !c ? "" : c.price == null ? "Price confirmed by IASE" : money(c.price * n);
    }

    $("#course-list").addEventListener("click", (e) => {
      const card = e.target.closest("[data-course]");
      if (!card) return;
      state.course = card.dataset.course;
      renderCourses();
      renderSpots();
    });
    $("#course-list").addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.dataset.course) { e.preventDefault(); e.target.click(); }
    });
    $("#spot").addEventListener("change", (e) => { state.spot = e.target.value || null; renderSessions(); });
    $("#participants").addEventListener("input", renderSummary);
    form.addEventListener("reset-ui", () => { state.course = null; state.spot = null; renderCourses(); renderSpots(); });

    bindForm(form, "booking", (f) => {
      if (!state.course) {
        $("#form-result").innerHTML = '<div class="notice err">Please select a course in step 1.</div>';
        $("#course-list").scrollIntoView({ behavior: "smooth" });
        return null;
      }
      const c = courseById(state.course), s = spotById(f.spot);
      const n = Math.max(1, parseInt(f.participants, 10) || 1);
      return { ...f, participants: n, course: c.name, courseId: c.id, spot: `${s.name}, ${s.country}`, spotId: s.id, estimatedTotal: c.price == null ? null : c.price * n, currency: cfg.currency };
    }, (p) => `<strong>Booking request received!</strong> ${esc(p.course)} at ${esc(p.spot)}, starting ${fmtDate(p.session)}, for ${p.participants} participant(s). ${p.estimatedTotal == null ? "We'll confirm the price." : "Estimated total " + money(p.estimatedTotal) + "."} Our team will email <strong>${esc(p.email)}</strong> within 48 hours to confirm your place and arrange payment.`);

    renderCourses();
    renderSpots();
  }

  // ---------- directory ----------
  function initDirectory() {
    const entries = [
      ...data.instructors.map((i) => ({ ...i, type: "instructor", place: spotById(i.spot)?.name || "", details: [...i.certs, ...i.languages.map((l) => "Speaks " + l)] })),
      ...data.shops.map((s) => ({ ...s, type: "shop", place: s.city, details: s.services })),
    ];
    const params = new URLSearchParams(location.search);
    $("#f-country").innerHTML = '<option value="">All countries</option>' + countries().map((c) => `<option>${esc(c)}</option>`).join("");
    if (params.get("type")) $("#f-type").value = params.get("type");

    let map, layer;
    if (window.L) {
      map = L.map("map", { worldCopyJump: true, scrollWheelZoom: false }).setView([20, 0], 2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OpenStreetMap contributors" }).addTo(map);
      layer = L.layerGroup().addTo(map);
    } else {
      $("#map").innerHTML = '<div class="empty">Map unavailable offline.</div>';
    }

    function render() {
      const q = $("#f-search").value.trim().toLowerCase();
      const type = $("#f-type").value, country = $("#f-country").value;
      const list = entries.filter((e) =>
        (!type || e.type === type) && (!country || e.country === country) &&
        (!q || [e.name, e.place, e.country, ...e.details].join(" ").toLowerCase().includes(q)));
      $("#result-count").textContent = `${list.length} result${list.length === 1 ? "" : "s"}`;
      $("#directory-list").innerHTML = list.length ? list.map((e) => `
        <div class="card">${sampleBadge(e)}
          <div class="meta">${e.type === "shop" ? "🏄 Surf shop" : "🎓 Certified instructor"}</div>
          <h3>${esc(e.name)}</h3>
          <div class="meta">📍 ${esc(e.place)}, ${esc(e.country)}</div>
          <div class="tags">${e.details.map((d) => `<span class="tag">${esc(d)}</span>`).join("")}</div>
          ${e.type === "instructor" && e.spot ? `<p><a href="courses.html?spot=${e.spot}">Book a course at ${esc(e.place)} →</a></p>` : ""}
          ${e.website ? `<p><a href="${esc(e.website)}" target="_blank" rel="noopener">Visit website →</a></p>` : ""}
        </div>`).join("") : '<div class="empty">No matches. Try another filter.</div>';

      if (layer) {
        layer.clearLayers();
        // Shops first and larger, so instructors in the same town stay visible on top.
        [...list].sort((a, b) => (a.type === "shop" ? -1 : 1) - (b.type === "shop" ? -1 : 1)).forEach((e) => L.circleMarker([e.lat, e.lng], {
          radius: e.type === "shop" ? 10 : 6, weight: 2, color: "#fff", fillOpacity: 0.95, fillColor: e.type === "shop" ? "#e8613c" : "#0b6e99",
        }).bindPopup(`<strong>${esc(e.name)}</strong><br>${e.type === "shop" ? "Surf shop" : "Instructor"} · ${esc(e.place)}, ${esc(e.country)}`).addTo(layer));
      }
    }
    ["#f-search", "#f-type", "#f-country"].forEach((s) => $(s).addEventListener("input", render));
    render();
  }

  // ---------- join ----------
  function initJoin() {
    const tabs = document.querySelectorAll(".tabs button");
    const show = (id) => {
      tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === id));
      document.querySelectorAll("[data-panel]").forEach((p) => (p.hidden = p.dataset.panel !== id));
    };
    tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.tab)));
    const initial = new URLSearchParams(location.search).get("as");
    show(["instructor", "shop", "refer"].includes(initial) ? initial : "instructor");

    const countryOpts = countries().map((c) => `<option>${esc(c)}</option>`).join("");
    document.querySelectorAll("datalist.countries").forEach((d) => (d.innerHTML = countryOpts));

    bindForm($("#instructor-form"), "instructor-application", (f) => f,
      (p) => `<strong>Thank you, ${esc(p.name)}!</strong> Your instructor application has been received. We'll review your experience and email <strong>${esc(p.email)}</strong> about recognition of prior certifications or a recommended course.`);
    bindForm($("#shop-form"), "shop-application", (f) => f,
      (p) => `<strong>Thank you!</strong> ${esc(p.shopName)}'s application to become an IASE partner shop has been received. We'll contact <strong>${esc(p.email)}</strong> about the next steps.`);
    bindForm($("#refer-form"), "referral", (f) => f,
      (p) => `<strong>Thanks for spreading the word!</strong> We'll send ${esc(p.inviteeName)} a personal invitation to join IASE on your behalf.`);
  }

  renderChrome();
  ({ home: initHome, courses: initCourses, directory: initDirectory, join: initJoin }[document.body.dataset.page] || (() => {}))();
})();
