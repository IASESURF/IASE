# IASE · International Association of Surfing Education: new site pages

A static website (plain HTML/CSS/JavaScript, with no build step and no server) with:

| Page | What it does |
|---|---|
| `index.html` | Home: mission, stats, featured surf spots, calls to join |
| `courses.html` | **Book a certification course**: pick a course, a surf spot worldwide, a start date and the number of participants, then send a booking request |
| `directory.html` | **Instructors & shops**: a world map plus a searchable, filterable directory of IASE instructors and partner shops |
| `join.html` | **Join IASE**: application forms for instructors and surf shops, and a referral form so members can invite others |
| `docs/outreach-kit.md` | Invitation emails (several languages) and a plan for recruiting instructors and shops internationally |

## Before launch: three things to change

1. **Replace the sample data.** Every course location, instructor and shop in `data/data.js` is a placeholder marked `sample: true`, and each one shows a yellow "Sample" badge on the site. Replace them with real IASE records, and remove `sample: true` from each real entry. Course levels and the Level 1, 2 and 4 prices (GBP) come from the current iase-surf.com course page; other prices show "Price on request" until you add them.
2. **Connect the forms.** In `js/config.js`, set `formEndpoint` to a form-handling service URL (for example a free [Formspree](https://formspree.io) form). Until you do, the forms run in *demo mode*: they confirm on screen but **nothing is sent**, and they show a warning saying so.
3. **Set the contact email** in `js/config.js`.

## Editing content

All content lives in `data/data.js`:

- **Add a course location:** add an entry to `spots`, listing the course ids it offers and its session start dates (`"YYYY-MM-DD"`). Past dates hide automatically.
- **Add an instructor or shop:** add an entry to `instructors` or `shops`. Get latitude/longitude by right-clicking the place in Google Maps.
- **Approve an applicant:** when an application from `join.html` arrives, check it, then add the person or shop to `data.js`. Only list instructors who ticked the directory-listing consent box.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Putting these pages on iase-surf.com

The existing site at https://www.iase-surf.com is a PHP application (login, "Find my certification", school applications, surf-spot contributions). Its source code is **not** in this repository. These new pages are designed to sit **alongside** it, not replace it; they link back to its certification lookup, school application and spot-contribution pages.

Options, simplest first:

1. **Upload as a folder on the existing server.** Copy every file in this repository into a folder such as `/surf/` on the iase-surf.com web server, and the pages are live at `https://www.iase-surf.com/surf/`. Then add "Book a Course" and "Instructors & Shops" links to the existing site's menu. Whoever manages the hosting can do this in a few minutes by FTP or the hosting control panel.
2. **Subdomain.** Publish this repository with GitHub Pages (**Settings → Pages → Deploy from branch**), then point a DNS record such as `book.iase-surf.com` (CNAME to `iasesurf.github.io`) at it.
3. **Integrate into the PHP application.** Rebuild these pages as part of the existing app, so bookings and applications land in its database and admin area. This needs the existing source code.

## How bookings work, and what to add later

A booking is a *request*: the student picks a course, spot and date, and the IASE office receives an email (through the form service) to confirm the place and arrange payment. That is enough to get started. Natural next steps as volume grows:

- **Online payment:** for example Stripe Payment Links per course, linked from the confirmation email.
- **Seat limits and live availability:** this needs a small backend or a booking platform.
- **Translations:** Spanish, Portuguese, French, Japanese and Chinese versions of the site would help international reach most.
