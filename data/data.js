// Courses, surf spots, instructors and shops shown on the site.
// Everything marked `sample: true` is placeholder content: replace it with real
// IASE records (or delete it) before launch. Sample entries show a "Sample" badge.
window.IASE_DATA = {
  courses: [
    {
      id: "learn",
      name: "Learn to Surf Certificate",
      audience: "Students",
      days: 2,
      price: 220,
      prerequisites: "Comfortable swimming 50 m",
      summary: "Ocean safety, paddling, pop-up and riding white water to a certified standard.",
    },
    {
      id: "safety",
      name: "Surf Water Safety & Rescue",
      audience: "Instructors & lifeguards",
      days: 2,
      price: 390,
      prerequisites: "Swim 400 m under 10 min",
      summary: "Rip-current awareness, board rescue, CPR/first aid in a surf environment.",
    },
    {
      id: "l1",
      name: "Level 1 Surf Instructor",
      audience: "New instructors",
      days: 5,
      price: 950,
      prerequisites: "Water Safety & Rescue; confident green-wave surfer",
      summary: "Teach beginners safely: lesson planning, group management, coaching the pop-up.",
    },
    {
      id: "l2",
      name: "Level 2 Surf Instructor",
      audience: "Experienced instructors",
      days: 5,
      price: 1250,
      prerequisites: "Level 1 + 100 logged teaching hours",
      summary: "Coach intermediate surfers: wave selection, turns, video analysis.",
    },
    {
      id: "coach",
      name: "Surf Coach Level 3",
      audience: "Head coaches",
      days: 7,
      price: 1800,
      prerequisites: "Level 2 + 2 years teaching",
      summary: "Performance coaching, athlete development and running a surf school program.",
    },
  ],

  // `courses` lists course ids offered at the spot; `sessions` lists start dates (YYYY-MM-DD).
  spots: [
    { id: "huntington", name: "Huntington Beach", country: "United States", lat: 33.655, lng: -118.003, season: "Year-round", courses: ["learn", "safety", "l1", "l2", "coach"], sessions: ["2026-11-14", "2026-12-05", "2027-01-16", "2027-02-20"], sample: true },
    { id: "oahu", name: "Waikiki, Oʻahu", country: "United States", lat: 21.276, lng: -157.827, season: "Year-round", courses: ["learn", "safety", "l1"], sessions: ["2026-11-21", "2027-01-09", "2027-03-06"], sample: true },
    { id: "ericeira", name: "Ericeira", country: "Portugal", lat: 38.963, lng: -9.418, season: "Sep–Jun", courses: ["learn", "safety", "l1", "l2"], sessions: ["2026-11-07", "2027-03-13", "2027-04-17"], sample: true },
    { id: "biarritz", name: "Biarritz", country: "France", lat: 43.483, lng: -1.559, season: "Apr–Oct", courses: ["learn", "l1"], sessions: ["2027-04-24", "2027-05-22"], sample: true },
    { id: "taghazout", name: "Taghazout", country: "Morocco", lat: 30.545, lng: -9.710, season: "Oct–Apr", courses: ["learn", "safety", "l1"], sessions: ["2026-11-28", "2027-01-23", "2027-02-27"], sample: true },
    { id: "jbay", name: "Jeffreys Bay", country: "South Africa", lat: -34.050, lng: 24.931, season: "Mar–Sep", courses: ["safety", "l1", "l2"], sessions: ["2027-03-20", "2027-05-15"], sample: true },
    { id: "bali", name: "Canggu, Bali", country: "Indonesia", lat: -8.650, lng: 115.130, season: "Year-round", courses: ["learn", "safety", "l1", "l2", "coach"], sessions: ["2026-11-09", "2026-12-14", "2027-02-08"], sample: true },
    { id: "goldcoast", name: "Gold Coast", country: "Australia", lat: -28.017, lng: 153.431, season: "Year-round", courses: ["learn", "safety", "l1", "l2"], sessions: ["2026-12-01", "2027-01-26", "2027-03-02"], sample: true },
    { id: "chiba", name: "Ichinomiya, Chiba", country: "Japan", lat: 35.373, lng: 140.390, season: "May–Oct", courses: ["learn", "l1"], sessions: ["2027-05-08", "2027-06-12"], sample: true },
    { id: "santateresa", name: "Santa Teresa", country: "Costa Rica", lat: 9.643, lng: -85.170, season: "Year-round", courses: ["learn", "safety", "l1", "l2"], sessions: ["2026-11-16", "2027-01-11", "2027-02-15"], sample: true },
    { id: "floripa", name: "Florianópolis", country: "Brazil", lat: -27.595, lng: -48.548, season: "Year-round", courses: ["learn", "l1"], sessions: ["2026-12-07", "2027-03-08"], sample: true },
    { id: "hainan", name: "Riyue Bay, Hainan", country: "China", lat: 18.670, lng: 110.160, season: "Oct–Apr", courses: ["learn", "safety", "l1"], sessions: ["2026-11-23", "2027-01-18"], sample: true },
  ],

  instructors: [
    { name: "Jordan Reyes", spot: "huntington", country: "United States", lat: 33.66, lng: -118.00, certs: ["Surf Coach Level 3", "Water Safety & Rescue"], languages: ["English", "Spanish"], sample: true },
    { name: "Kai Nakoa", spot: "oahu", country: "United States", lat: 21.28, lng: -157.83, certs: ["Level 2 Surf Instructor"], languages: ["English"], sample: true },
    { name: "Inês Duarte", spot: "ericeira", country: "Portugal", lat: 38.96, lng: -9.42, certs: ["Level 2 Surf Instructor", "Water Safety & Rescue"], languages: ["Portuguese", "English", "French"], sample: true },
    { name: "Youssef Amrani", spot: "taghazout", country: "Morocco", lat: 30.54, lng: -9.71, certs: ["Level 1 Surf Instructor"], languages: ["Arabic", "French", "English"], sample: true },
    { name: "Thandi Mokoena", spot: "jbay", country: "South Africa", lat: -34.05, lng: 24.93, certs: ["Level 2 Surf Instructor"], languages: ["English", "Afrikaans", "Xhosa"], sample: true },
    { name: "Wayan Putra", spot: "bali", country: "Indonesia", lat: -8.65, lng: 115.13, certs: ["Surf Coach Level 3"], languages: ["Indonesian", "English"], sample: true },
    { name: "Mia Thompson", spot: "goldcoast", country: "Australia", lat: -28.02, lng: 153.43, certs: ["Level 2 Surf Instructor", "Water Safety & Rescue"], languages: ["English"], sample: true },
    { name: "Haruto Sato", spot: "chiba", country: "Japan", lat: 35.37, lng: 140.39, certs: ["Level 1 Surf Instructor"], languages: ["Japanese", "English"], sample: true },
    { name: "Valentina Mora", spot: "santateresa", country: "Costa Rica", lat: 9.64, lng: -85.17, certs: ["Level 2 Surf Instructor"], languages: ["Spanish", "English"], sample: true },
    { name: "Lucas Almeida", spot: "floripa", country: "Brazil", lat: -27.60, lng: -48.55, certs: ["Level 1 Surf Instructor"], languages: ["Portuguese", "Spanish"], sample: true },
    { name: "Chen Lin", spot: "hainan", country: "China", lat: 18.67, lng: 110.16, certs: ["Level 1 Surf Instructor", "Water Safety & Rescue"], languages: ["Mandarin", "English"], sample: true },
  ],

  shops: [
    { name: "Pier Line Surf Co.", city: "Huntington Beach", country: "United States", lat: 33.657, lng: -118.000, services: ["Lessons", "Rentals", "Retail", "Exam center"], website: "", sample: true },
    { name: "Atlântico Surf House", city: "Ericeira", country: "Portugal", lat: 38.965, lng: -9.415, services: ["Lessons", "Rentals", "Surf camp"], website: "", sample: true },
    { name: "Côte Basque Board Room", city: "Biarritz", country: "France", lat: 43.485, lng: -1.556, services: ["Retail", "Repairs", "Rentals"], website: "", sample: true },
    { name: "Anchor Point Surf Shop", city: "Taghazout", country: "Morocco", lat: 30.547, lng: -9.708, services: ["Lessons", "Rentals", "Surf camp"], website: "", sample: true },
    { name: "Batu Bolong Surf Shack", city: "Canggu", country: "Indonesia", lat: -8.659, lng: 115.128, services: ["Lessons", "Rentals", "Exam center"], website: "", sample: true },
    { name: "Point Break Boards", city: "Gold Coast", country: "Australia", lat: -28.010, lng: 153.430, services: ["Retail", "Repairs", "Lessons"], website: "", sample: true },
    { name: "Tsurigasaki Surf Base", city: "Ichinomiya", country: "Japan", lat: 35.375, lng: 140.392, services: ["Rentals", "Retail"], website: "", sample: true },
    { name: "Pura Ola Surf School", city: "Santa Teresa", country: "Costa Rica", lat: 9.645, lng: -85.168, services: ["Lessons", "Surf camp", "Exam center"], website: "", sample: true },
  ],
};
