
export const COLORS = {
  primary: "#003399", // Deep blue from PDF
  secondary: "#F27D26", // Orange from PDF
  accent: "#E4E3E0", // Light gray/beige
  ink: "#141414",
  bg: "#FFFFFF",
};

export const NAVIGATION = [
  { name: "About", href: "/" },
  {
    name: "INAMICE 2026",
    href: "/inamice-2026",
    subItems: [
      { name: "Main Event", href: "/inamice-2026/main-event" },
      { name: "Awarding Session", href: "/inamice-2026/awarding-session" },
    ]
  },
  { name: "Article", href: "/article" },
  { name: "More", href: "/more", seoSuffix: " About INAMICE" },
  { name: "Registration", href: "/registration", isButton: true },
];

export const THROWBACK_EVENTS = [
  {
    year: "2023",
    title: "6th INAMICE 2023",
    theme: "Optimizing MICE Development Strategy in Indonesia",
    image: "/img/6th-inamice.jpg",
  },
  {
    year: "2024",
    title: "7th INAMICE 2024",
    theme: "Repositioning Jakarta to Become a Leading Global Business Tourism Destination",
    image: "/img/7th-inamice.jpg",
  },
  {
    year: "2025",
    title: "8th INAMICE 2025",
    theme: "Achieving Sustainable Development Goals 2030 in Jakarta through Sustainable MICE Practices",
    image: "/img/8th-inamice.jpg",
  },
];

export const SPEAKERS = [
  {
    name: "PRAMONO ANUNG WIBOWO",
    role: "Governor of Jakarta for 2024-2029 period",
    topic: "Jakarta's Commitment to a Sustainable and Inclusive Global City",
    type: "KEYNOTE SPEECH",
    image: "/img/pramono.jpg",
  },
  {
    name: "RIZKI HANDAYANI MUSTAFA",
    role: "Deputy for Industry and Investment, Ministry of Tourism of the Republic of Indonesia",
    topic: "Understanding Digital Transformation as the Foundation of Smart Economy",
    type: "PLENARY SESSION 1",
    image: "/img/rizky-handayani.jpg",
  },
  {
    name: "CYRIL RAOUL HAKIM",
    role: "Special Staff to the Governor of DKI Jakarta",
    topic: "Translating Smart Economy Vision Into Strategic Sector Direction",
    type: "PLENARY SESSION 1",
    image: "/img/cyril-raoul.jpg",
  },
  {
    name: "MICHAEL BAYU A. S.",
    role: "Sales Director, Dyandra Promosindo",
    topic: "Defining Smart Economy Metrics: Indicators and the Economic Contributions of MICE",
    type: "PLENARY SESSION 1",
    image: "/img/michael-bayu.jpg",
  },
  {
    name: "DEDY SAHAT",
    role: "EVP - Head of Digital Economy, CIMB Niaga",
    topic: "Understanding Industry Realities and Digital Transformation Opportunities in the MICE Ecosystem",
    type: "PLENARY SESSION 2",
    image: "/img/dedy-sahat.jpg",
  },
  {
    name: "MR. CHI CHUAN POH",
    role: "Executive Director, Singapore Tourism Board (STB)",
    topic: "Implementing Financial and Digital Transformation in MICE Practices",
    type: "PLENARY SESSION 2",
    image: "/img/chi-chuan-poh.jpg"
  },
  {
    name: "TBA",
    role: "Jakarta Smart City Representative",
    topic: "Benchmarking Thailand’s National MICE Governance Model to Strengthen Jakarta’s Strategic Direction",
    type: "PLENARY SESSION 2",
    image: "/img/speakers/tba.png"
  },
];

export const RUNDOWN = [
  { time: "7:30 - 8:15", duration: "0:45:00", activity: "Re-registration Delegates" },
  { time: "8:15 - 8:45", duration: "0:30:00", activity: "Opening Ceremony" },
  { time: "8:45 - 8:55", duration: "0:10:00", activity: "Keynote Speech 'Positioning MICE as a Strategic Lever for Jakarta's Urban Economy'" },
  { time: "8:55 - 10:15", duration: "1:20:00", activity: "Plenary Session 1 — 'Reframing MICE as a Strategic Driver of Urban Economic Growth'" },
  { time: "10:15 - 10:35", duration: "0:20:00", activity: "Coffee Break & Brand Presentation by Sponsor" },
  { time: "10:35 - 11:55", duration: "1:20:00", activity: "Plenary Session 2 — 'Implementing Smart Economy through MICE: Moving from Concept to Practice'" },
  { time: "11:55 - 12:15", duration: "0:20:00", activity: "Brand Presentation by Sponsor" },
  { time: "12:15 - 13:15", duration: "1:00:00", activity: "Lunch & Networking Session (Business Talk)" },
  { time: "13:15 - 13:35", duration: "0:20:00", activity: "Brand Presentation by Sponsor" },
  { time: "13:35 - 13:50", duration: "0:15:00", activity: "Awarding Session" },
  { time: "13:50 - 14:05", duration: "0:15:00", activity: "Closing Ceremony" },
];

export const AWARDS = [
  {
    title: "Innovation in MICE Technology Award",
    description: "Awarded to a MICE organizer that has implemented the most impactful digital innovations, such as data-driven event systems, hybrid event platforms, or AI-based attendee engagement solutions.",
  },
  {
    title: "Jakarta Tech-Ready Venue Award",
    description: "Honors a Jakarta-based venue that has adopted technology integration to enhance delegate experience and operational efficiency.",
  },
  {
    title: "Digital Ticketing Excellence Award",
    description: "Awarded to a digital ticketing platform that offers a seamless purchasing journey, stable transaction security, and an intuitive user experience that simplifies event management for organizers.",
  },
];

export const ARTICLES = [
  {
    date: "24/2/2025",
    title: "The Road to INAMICE 2025: Mendorong Keberlanjutan MICE Bersama Perserikatan Bangsa-bangsa Indonesia",
    source: "Media Indonesia",
    image: "/img/article-1.jpg",
  },
  {
    date: "24/2/2025",
    title: "The Road to INAMICE 2025: Dorong Keberlanjutan MICE Bersama Perserikatan Bangsa-Bangsa Indonesia",
    source: "Medcom.id",
    image: "/img/article-2.jpg",
  },
  {
    date: "26/2/2025",
    title: "The Road to INAMICE 2025: Promoting MICE Sustainability with UN Indonesia",
    source: "Netralnews.com",
    image: "/img/article-3.jpg",
  },
  {
    date: "25/6/2025",
    title: "Sponsors Play an Active Role in Supporting the Success of a Sustainable Event: The 8th INAMICE 2025",
    source: "INAMICE",
    image: "/img/article-4.jpg",
  },
  {
    date: "22/6/2024",
    title: "INAMICE 2024: Saatnya Optimalkan Posisi Strategis Jakarta di Persimpangan Asia Tenggara",
    source: "National Geographic",
    image: "/img/article-5.jpg",
  },
  {
    date: "25/6/2024",
    title: "Rampung Digelar, Konferensi The 7th INAMICE 2024 Bahas Potensi Jakarta Jadi Destinasi Wisata Bisnis Unggulan",
    source: "Medcom.id",
    image: "/img/article-6.jpg",
  },
];
