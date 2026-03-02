// src/config.js
// ⚠️ ALL website data lives here. Never hardcode values in components.

export const EVENT_CONFIG = {
  name:            "Hack O Holic 4.0",
  tagline:         "Code at the Speed of Sound",
  edition:         "4.0",
  startDate:       "2026-03-28T10:00:00+05:30",
  endDate:         "2026-03-29T10:00:00+05:30",
  duration:        "24 Hours",
  format:          "Offline — On Campus",
  venue:           "Graphic Era Hill University, Dehradun",
  teamSize:        "2 – 4 Members",
  totalSlots:       250,
  finaleTeams:      110,
  registrationUrl: "https://forms.google.com/YOUR_FORM_ID_HERE",
  instagram:       "https://www.instagram.com/codev.gehu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  linkedin:        "https://www.linkedin.com/company/co-dev-club/posts/?feedView=images",
};

// Image mapping — maps logical names to actual filenames in src/assets/images/
export const IMAGES = {
  sonicRun:        "sonic-run.png",
  sonicHero:       "sonic-standing.png",
  superSonic:      "sonic-thumbsup.png",
  tailsFly:        "TSR_Tails.webp",
  knucklesFist:    "standing-knuckles.png",
  shadowStand:     "d6f03178b8d393be10ffd7c236cfa554.png",
  amyCheer:        "82896-sonic-toy-allstars-racing-character-chaos-fictional.png",
  eggmanVillain:   "dr.-eggman.png",
  sonicTeam:       "landing page pic.png",
  heroImage:       "hack o holic hero.png",
  chaosEmeraldGold: "99d1436d833ca363e61d1f7b16b358a5.png",
  chaosEmeraldBlue: "1956c9da8ab1ac6aa8e2449bcf655638.png",
  chaosEmeraldRed:  "8b5a31f326cde2dc6aba43994097e8d9.png",
  goldRing:        "82a816006d261306e0c1a896573115f3.png",
  trophySonic:     "32c292540a1c6c4924c364e4c0a6761c.png",
  logoEvent:       "hack o holic logo.jpeg",
  logoUniversity:  "Gemini_Generated_Image_4fcelg4fcelg4fce.png",
  logoClub:        "d4e0d8bfd8835a805ae47681e48a79ef.png",
};

export const ORGANIZERS = [
  {
    name:      "[Organizer 1 Name]",
    role:      "Event Head",
    phone:     "+91 XXXXXXXXXX",
    character: "sonicHero",
  },
  {
    name:      "[Organizer 2 Name]",
    role:      "Tech Lead",
    phone:     "+91 XXXXXXXXXX",
    character: "tailsFly",
  },
  {
    name:      "[Organizer 3 Name]",
    role:      "Coordinator",
    phone:     "+91 XXXXXXXXXX",
    character: "knucklesFist",
  },
];

export const STAGES = [
  {
    id: 1,
    label:       "STAGE 1",
    zone:        "Green Hill Zone",
    title:       "Registration Opens",
    description: "Form your squad of 2–4. Secure your slot before all 250 fill up!",
    date:        "[Insert Date]",
    mode:        "Online",
    character:   "tailsFly",
    borderColor: "#00E5FF",
  },
  {
    id: 2,
    label:       "STAGE 2",
    zone:        "Chemical Plant Zone",
    title:       "Problem Statements Released",
    description: "Choose your domain. Study the challenge. Plan your attack.",
    date:        "[Insert Date]",
    mode:        "Online",
    character:   "knucklesFist",
    borderColor: "#FFD700",
  },
  {
    id: 3,
    label:       "STAGE 3",
    zone:        "Final Fortress",
    title:       "110 Teams Shortlisted",
    description: "Selected squads announced. Check your email for confirmation.",
    date:        "[Insert Date]",
    mode:        "Online Announcement",
    character:   "shadowStand",
    borderColor: "#FF3B3B",
  },
  {
    id: 4,
    label:       "STAGE 4",
    zone:        "Death Egg — Grand Finale",
    title:       "24-Hour Hack Begins",
    description: "March 28, 10 AM IST. Build. Deploy. Dominate. 24 hours. No sleep.",
    date:        "28 March 2026, 10:00 AM IST",
    mode:        "Offline — On Campus",
    character:   "superSonic",
    borderColor: "#FFD700",
  },
];

export const TRACKS = [
  { zone: "Chemical Plant Zone", domain: "AI / ML",          icon: "🤖", desc: "Train models and solve intelligence challenges at the cutting edge" },
  { zone: "Green Hill Zone",     domain: "Open Innovation",  icon: "💡", desc: "Think beyond boundaries and create solutions that break the mold" },
  { zone: "Hydrocity Zone",      domain: "Cyber Security",   icon: "🔐", desc: "Defend the network, crack the cipher, protect the digital world" },
  { zone: "Death Egg Zone",      domain: "IoT",              icon: "📡", desc: "Connect devices and build smart solutions for the physical world" },
  { zone: "Sky Sanctuary",       domain: "Cloud",            icon: "☁️", desc: "Build and deploy scalable solutions in the cloud" },
];

export const PRIZES = {
  pool: "₹1,00,000+",
  tiers: [
    {
      place:       "Winner",
      reward:      "iPads for Each Member",
      description: "One iPad mini per team member + cash + mentorship",
      emerald:     "chaosEmeraldGold",
      glowColor:   "#FFD700",
    },
    {
      place:       "1st Runner Up",
      reward:      "₹60,000",
      description: "Cash prize + certificate + swag kit",
      emerald:     "chaosEmeraldBlue",
      glowColor:   "#00E5FF",
    },
    {
      place:       "2nd Runner Up",
      reward:      "₹30,000",
      description: "Cash prize + certificate + swag kit",
      emerald:     "chaosEmeraldRed",
      glowColor:   "#FF3B3B",
    },
  ],
  perks: [
    "Certificates for all participants",
    "Mentorship sessions with industry experts",
    "Swag kits for finalists",
    "Meals & refreshments included",
    "Accommodation for outstation teams",
    "LinkedIn recommendations",
  ],
};

export const FAQS = [
  {
    q: "Who can participate?",
    a: "All currently enrolled UG/PG students across India. Inter-college teams are allowed and encouraged!"
  },
  {
    q: "What is the team size?",
    a: "2 to 4 members per team. Solo participation is not allowed — form your squad!"
  },
  {
    q: "How many teams can register?",
    a: "Only 250 teams total. Once all slots fill, registration closes automatically. Register early!"
  },
  {
    q: "How many teams reach the finale?",
    a: "110 out of 250 registered teams will be shortlisted for the 24-hour offline grand finale."
  },
  {
    q: "Is there a registration fee?",
    a: "Initial registration is free. A nominal participation fee may apply for the offline finale round."
  },
  {
    q: "When are problem statements released?",
    a: "After shortlisting. Domains include AI/ML, Web Dev, Cybersecurity, Blockchain, IoT, and more."
  },
  {
    q: "Is food and accommodation provided?",
    a: "Yes — meals and overnight stay are arranged for all outstation participants in the finale."
  },
  {
    q: "What do winners get?",
    a: "iPads for each winner, cash prizes, Chaos Emerald trophies, certificates, mentorship, and swag kits."
  },
];

export const SPONSORS = [];

export const GALLERY_IMAGES = [];
