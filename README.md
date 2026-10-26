# IASE · American Surf Association website

A static website (plain HTML/CSS/JavaScript, with no build step and no server) with:

| Page | What it does |
|---|---|
| `index.html` | Home: mission, stats, featured surf spots, calls to join |
| `courses.html` | **Book a certification course**: pick a course, a surf spot worldwide, a start date and the number of participants, then send a booking request |
| `directory.html` | **Instructors & shops**: a world map plus a searchable, filterable directory of IASE instructors and partner shops |
| `join.html` | **Join IASE**: application forms for instructors and surf shops, and a referral form so members can invite others |
| `docs/outreach-kit.md` | Invitation emails (several languages) and a plan for recruiting instructors and shops internationally |

## Before launch: three things to change

1. **Replace the sample data.** Every course location, instructor and shop in `data/data.js` is a placeholder marked `sample: true`, and each one shows a yellow "Sample" badge on the site. Replace them with real IASE records, and remove `sample: true` from each real entry. Prices and course levels in that file are placeholders too.
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

## Publish free with GitHub Pages

Push this repository to GitHub, then go to **Settings → Pages → Deploy from branch** and select the main branch and the `/ (root)` folder.

## How bookings work, and what to add later

A booking is a *request*: the student picks a course, spot and date, and the IASE office receives an email (through the form service) to confirm the place and arrange payment. That is enough to get started. Natural next steps as volume grows:

- **Online payment:** for example Stripe Payment Links per course, linked from the confirmation email.
- **Seat limits and live availability:** this needs a small backend or a booking platform.
- **Translations:** Spanish, Portuguese, French, Japanese and Chinese versions of the site would help international reach most.
