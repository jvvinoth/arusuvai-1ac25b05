export const siteContent = {
  meta: {
    title: "Arusuvai — Contemporary Dining with Traditional Roots",
    description: "Where tradition meets the art of modern flavor. Arusuvai offers culinary craft rooted in heritage, elevated by modern technique, featuring seasonal ingredients and precision plating in an intimate dining atmosphere.",
  },
  
  nav: {
    brand: "Arusuvai",
    links: [
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Atmosphere", href: "#atmosphere" },
      { label: "Visit", href: "#visit" },
    ],
    cta: "Reserve",
  },
  
  hero: {
    badge: "Contemporary Dining",
    headline: "Where tradition meets the art of modern flavor",
    subtext: "Every dish at Arusuvai tells a story — crafted with seasonal ingredients, plated with precision, and served in an atmosphere that honors both heritage and innovation.",
    cta: "Explore our menu",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  },
  
  about: {
    label: "Our Story",
    heading: "Culinary craft rooted in tradition, elevated by modern technique",
    paragraphs: [
      "Arusuvai was born from a simple belief: that the most memorable meals honor their origins while embracing the possibilities of contemporary craft. Our kitchen is a place where grandmother's recipes meet precision technique, where market-fresh ingredients are transformed into dishes that surprise and satisfy.",
      "Chef Priya Krishnan brings fifteen years of culinary exploration to every plate — trained in classical methods, inspired by global flavors, devoted to showcasing the natural beauty of seasonal produce. Each dish is an expression of balance: bold and subtle, familiar and unexpected, comforting and refined.",
      "We source from local farms and trusted purveyors who share our commitment to quality. Our menu changes with the seasons, ensuring that every visit offers something new to discover. This is dining as it should be: intentional, flavorful, and unforgettable.",
    ],
  },
  
  menu: {
    label: "Signature Dishes",
    heading: "A menu that honors seasons and celebrates flavor",
    dishes: [
      {
        name: "Seared Scallops with Cauliflower Purée",
        description: "Diver scallops crisped to golden, resting on silky cauliflower, finished with brown butter and micro herbs.",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=80",
        badge: "Signature",
      },
      {
        name: "Slow-Braised Short Rib",
        description: "Fork-tender beef short rib glazed with tamarind and palm sugar, served over coconut jasmine rice with crispy shallots.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
        badge: null,
      },
      {
        name: "Heirloom Tomato & Burrata",
        description: "Peak-season tomatoes with hand-pulled burrata, basil oil, preserved lemon, and sourdough crumble.",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1600&q=80",
        badge: "Seasonal",
      },
      {
        name: "Miso-Glazed Black Cod",
        description: "Buttery black cod marinated in white miso and mirin, broiled until caramelized, with charred bok choy and ginger rice.",
        image: "https://images.unsplash.com/photo-1580959375944-1ab5b8c75f02?auto=format&fit=crop&w=1600&q=80",
        badge: "Signature",
      },
      {
        name: "Spiced Duck Breast",
        description: "Seared duck breast with five-spice glaze, roasted root vegetables, and cherry reduction.",
        image: "https://images.unsplash.com/photo-1612518091829-1047cee8a6f8?auto=format&fit=crop&w=1600&q=80",
        badge: null,
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice with foraged mushrooms, aged parmesan, truffle oil, and crispy sage.",
        image: "https://images.unsplash.com/photo-1476124369491-c0df53db5a95?auto=format&fit=crop&w=1600&q=80",
        badge: "Seasonal",
      },
    ],
  },
  
  atmosphere: {
    label: "Atmosphere",
    heading: "A space designed for savoring the moment",
    description: "Our dining room balances warmth and refinement — natural materials, soft lighting, and an open kitchen that invites you into the heart of the experience. Every detail is intentional, from the hand-thrown ceramics to the curated soundtrack.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        alt: "Intimate dining room with warm lighting",
      },
      {
        url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
        alt: "Open kitchen with chef plating dishes",
      },
      {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
        alt: "Elegant table setting with natural light",
      },
    ],
  },
  
  visit: {
    label: "Visit Us",
    heading: "We look forward to welcoming you",
    location: {
      title: "Location",
      address: "123 Heritage Lane",
      city: "Chennai, Tamil Nadu 600001",
      country: "India",
    },
    hours: {
      title: "Hours",
      schedule: [
        { days: "Tuesday – Thursday", time: "5:00 PM – 10:00 PM" },
        { days: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
        { days: "Sunday", time: "12:00 PM – 9:00 PM" },
        { days: "Monday", time: "Closed" },
      ],
    },
    reservation: {
      title: "Reservations",
      description: "We accept reservations for parties of 2-8 guests. For larger groups or private events, please contact us directly.",
      cta: "Reserve via WhatsApp",
      whatsappNumber: "+911234567890",
      whatsappMessage: "Hello, I'd like to make a reservation at Arusuvai.",
    },
  },
  
  footer: {
    tagline: "Where tradition meets the art of modern flavor",
    contact: {
      email: "hello@arusuvai.com",
      phone: "+91 123 456 7890",
    },
    social: [
      { platform: "Instagram", url: "#", handle: "@arusuvai" },
      { platform: "Facebook", url: "#", handle: "Arusuvai" },
    ],
    legal: "© 2024 Arusuvai. All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
