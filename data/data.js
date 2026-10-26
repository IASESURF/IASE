// Courses, surf spots, instructors and shops shown on the site.
// Everything marked `sample: true` is placeholder content: replace it with real
// IASE records (or delete it) before launch. Sample entries show a "Sample" badge.
window.IASE_DATA = {
  // IASE levels as published on iase-surf.com. `price: null` shows "Price on request".
  courses: [
    { id: "l1", name: "IASE Level 1 · Basic Understanding", audience: "Beginners, no experience needed", duration: "10–15 hours", price: 110, prerequisites: "None", summary: "Board knowledge, ocean safety and first wave rides with an instructor. About 15–20 successful rides to certify." },
    { id: "l2", name: "IASE Level 2 · Refined Movements", audience: "Beginners", duration: "Multi-day", price: 500, prerequisites: "None (Level 1 recommended)", summary: "Catch white-water waves on your own and ride with a stable stance, without instructor help." },
    { id: "l3", name: "IASE Level 3 · Riding Green Waves", audience: "Beginners", duration: "3 days", price: null, prerequisites: "None (Level 2 recommended)", summary: "Steady pop-ups on green waves, reading waves, surf etiquette and safe surfing practice." },
    { id: "l4", name: "IASE Level 4 · Reinforcing Basics", audience: "Intermediate", duration: "5 days", price: 700, prerequisites: "IASE Level 3", summary: "Diagonal runs, speed control and sturdier maneuvers. 25–30 hours and 35–40 successful rides." },
    { id: "l5", name: "IASE Level 5 · Advanced Skills", audience: "Intermediate", duration: "5 days", price: null, prerequisites: "IASE Level 4", summary: "Bottom turn, top turn and cutback: board control and holding position at the wave's peak." },
    { id: "l6", name: "IASE Level 6 · Mastery of Techniques", audience: "Advanced", duration: "On request", price: null, prerequisites: "IASE Level 5", summary: "Cutbacks, cross-stepping and nose-riding maneuvers with full wave-peak control." },
    { id: "l7", name: "IASE Level 7 · Competition Level", audience: "Advanced", duration: "On request", price: null, prerequisites: "IASE Level 6", summary: "High-difficulty maneuvers and personal style at competition standard." },
    { id: "instructor", name: "IASE Instructor Training", audience: "Future instructors", duration: "On request", price: null, prerequisites: "IASE Level 4 + first aid training", summary: "Become an IASE-certified instructor: teach at IASE schools worldwide and certify your own students." },
  ],

  // `courses` lists course ids offered at the spot; `sessions` lists start dates (YYYY-MM-DD).
  spots: [
    { id: "huntington", name: "Huntington Beach", country: "United States", lat: 33.655, lng: -118.003, season: "Year-round", courses: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "instructor"], sessions: ["2026-11-14", "2026-12-05", "2027-01-16", "2027-02-20"], sample: true },
    { id: "oahu", name: "Waikiki, Oʻahu", country: "United States", lat: 21.276, lng: -157.827, season: "Year-round", courses: ["l1", "l2", "l3", "l4", "l5"], sessions: ["2026-11-21", "2027-01-09", "2027-03-06"], sample: true },
    { id: "ericeira", name: "Ericeira", country: "Portugal", lat: 38.963, lng: -9.418, season: "Sep–Jun", courses: ["l1", "l2", "l3", "l4", "l5", "instructor"], sessions: ["2026-11-07", "2027-03-13", "2027-04-17"], sample: true },
    { id: "biarritz", name: "Biarritz", country: "France", lat: 43.483, lng: -1.559, season: "Apr–Oct", courses: ["l1", "l2", "l3", "l5"], sessions: ["2027-04-24", "2027-05-22"], sample: true },
    { id: "taghazout", name: "Taghazout", country: "Morocco", lat: 30.545, lng: -9.710, season: "Oct–Apr", courses: ["l1", "l2", "l3", "l4", "l5"], sessions: ["2026-11-28", "2027-01-23", "2027-02-27"], sample: true },
    { id: "jbay", name: "Jeffreys Bay", country: "South Africa", lat: -34.050, lng: 24.931, season: "Mar–Sep", courses: ["l4", "l5", "instructor"], sessions: ["2027-03-20", "2027-05-15"], sample: true },
    { id: "bali", name: "Canggu, Bali", country: "Indonesia", lat: -8.650, lng: 115.130, season: "Year-round", courses: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "instructor"], sessions: ["2026-11-09", "2026-12-14", "2027-02-08"], sample: true },
    { id: "goldcoast", name: "Gold Coast", country: "Australia", lat: -28.017, lng: 153.431, season: "Year-round", courses: ["l1", "l2", "l3", "l4", "l5", "instructor"], sessions: ["2026-12-01", "2027-01-26", "2027-03-02"], sample: true },
    { id: "chiba", name: "Ichinomiya, Chiba", country: "Japan", lat: 35.373, lng: 140.390, season: "May–Oct", courses: ["l1", "l2", "l3", "l5"], sessions: ["2027-05-08", "2027-06-12"], sample: true },
    { id: "santateresa", name: "Santa Teresa", country: "Costa Rica", lat: 9.643, lng: -85.170, season: "Year-round", courses: ["l1", "l2", "l3", "l4", "l5", "instructor"], sessions: ["2026-11-16", "2027-01-11", "2027-02-15"], sample: true },
    { id: "floripa", name: "Florianópolis", country: "Brazil", lat: -27.595, lng: -48.548, season: "Year-round", courses: ["l1", "l2", "l3", "l5"], sessions: ["2026-12-07", "2027-03-08"], sample: true },
    { id: "hainan", name: "Riyue Bay, Hainan", country: "China", lat: 18.670, lng: 110.160, season: "Oct–Apr", courses: ["l1", "l2", "l3", "l4", "l5"], sessions: ["2026-11-23", "2027-01-18"], sample: true },
  ],

  instructors: [
    { name: "Jordan Reyes", spot: "huntington", country: "United States", lat: 33.66, lng: -118.00, certs: ["IASE Instructor", "IASE Level 7", "First aid"], languages: ["English", "Spanish"], sample: true },
    { name: "Kai Nakoa", spot: "oahu", country: "United States", lat: 21.28, lng: -157.83, certs: ["IASE Instructor", "IASE Level 6"], languages: ["English"], sample: true },
    { name: "Inês Duarte", spot: "ericeira", country: "Portugal", lat: 38.96, lng: -9.42, certs: ["IASE Instructor", "IASE Level 6", "First aid"], languages: ["Portuguese", "English", "French"], sample: true },
    { name: "Youssef Amrani", spot: "taghazout", country: "Morocco", lat: 30.54, lng: -9.71, certs: ["IASE Instructor"], languages: ["Arabic", "French", "English"], sample: true },
    { name: "Thandi Mokoena", spot: "jbay", country: "South Africa", lat: -34.05, lng: 24.93, certs: ["IASE Instructor", "IASE Level 6"], languages: ["English", "Afrikaans", "Xhosa"], sample: true },
    { name: "Wayan Putra", spot: "bali", country: "Indonesia", lat: -8.65, lng: 115.13, certs: ["IASE Instructor", "IASE Level 7"], languages: ["Indonesian", "English"], sample: true },
    { name: "Mia Thompson", spot: "goldcoast", country: "Australia", lat: -28.02, lng: 153.43, certs: ["IASE Instructor", "IASE Level 6", "First aid"], languages: ["English"], sample: true },
    { name: "Haruto Sato", spot: "chiba", country: "Japan", lat: 35.37, lng: 140.39, certs: ["IASE Instructor"], languages: ["Japanese", "English"], sample: true },
    { name: "Valentina Mora", spot: "santateresa", country: "Costa Rica", lat: 9.64, lng: -85.17, certs: ["IASE Instructor", "IASE Level 6"], languages: ["Spanish", "English"], sample: true },
    { name: "Lucas Almeida", spot: "floripa", country: "Brazil", lat: -27.60, lng: -48.55, certs: ["IASE Instructor"], languages: ["Portuguese", "Spanish"], sample: true },
    { name: "Chen Lin", spot: "hainan", country: "China", lat: 18.67, lng: 110.16, certs: ["IASE Instructor", "First aid"], languages: ["Mandarin", "English"], sample: true },
  ],

  shops: [
    { name: "Pier Line Surf Co.", city: "Huntington Beach", country: "United States", lat: 33.657, lng: -118.000, services: ["Lessons", "Rentals", "Retail", "IASE school"], website: "", sample: true },
    { name: "Atlântico Surf House", city: "Ericeira", country: "Portugal", lat: 38.965, lng: -9.415, services: ["Lessons", "Rentals", "Surf camp"], website: "", sample: true },
    { name: "Côte Basque Board Room", city: "Biarritz", country: "France", lat: 43.485, lng: -1.556, services: ["Retail", "Repairs", "Rentals"], website: "", sample: true },
    { name: "Anchor Point Surf Shop", city: "Taghazout", country: "Morocco", lat: 30.547, lng: -9.708, services: ["Lessons", "Rentals", "Surf camp"], website: "", sample: true },
    { name: "Batu Bolong Surf Shack", city: "Canggu", country: "Indonesia", lat: -8.659, lng: 115.128, services: ["Lessons", "Rentals", "IASE school"], website: "", sample: true },
    { name: "Point Break Boards", city: "Gold Coast", country: "Australia", lat: -28.010, lng: 153.430, services: ["Retail", "Repairs", "Lessons"], website: "", sample: true },
    { name: "Tsurigasaki Surf Base", city: "Ichinomiya", country: "Japan", lat: 35.375, lng: 140.392, services: ["Rentals", "Retail"], website: "", sample: true },
    { name: "Pura Ola Surf School", city: "Santa Teresa", country: "Costa Rica", lat: 9.645, lng: -85.168, services: ["Lessons", "Surf camp", "IASE school"], website: "", sample: true },
  ],
};
