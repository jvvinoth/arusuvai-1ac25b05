export const siteContent = {
  meta: {
    title: "Arusuvai Restaurant Chennai | Best Biryani & Thokku Biryani in Chennai",
    description: "Arusuvai Restaurant in Chennai serves the best biryani in Chennai. Famous for authentic thokku biryani Chennai and traditional biryani varieties. Experience exceptional flavors at the best biryani restaurant in Chennai.",
  },
  
  nav: {
    brand: "Arusuvai",
    links: [
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Atmosphere", href: "#atmosphere" },
      { label: "Visit", href: "#visit" },
    ],
    cta: "Order Now",
  },
  
  hero: {
    badge: "Chennai's Biryani Destination",
    headline: "Experience the best biryani in Chennai",
    subtext: "Arusuvai Restaurant brings you authentic Chennai biryani crafted with traditional spices and the finest ingredients. Home of the legendary thokku biryani Chennai — a flavor experience you won't forget.",
    cta: "Explore our biryani menu",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1600&q=80",
  },
  
  about: {
    label: "Our Story",
    heading: "Chennai's destination for authentic biryani & thokku biryani",
    paragraphs: [
      "Arusuvai Restaurant has become synonymous with the best biryani in Chennai. Our journey began with a passion for preserving traditional biryani-making techniques while creating something truly unique — our signature thokku biryani Chennai.",
      "Every biryani at Arusuvai is cooked with meticulous attention to detail. We use premium basmati rice, hand-selected spices, and slow-cooking methods that allow flavors to develop fully. Our thokku biryani Chennai features a rich, spiced meat preparation that's become legendary among biryani lovers in Chennai.",
      "From our classic chicken biryani to our famous mutton thokku biryani, each dish reflects our commitment to quality and authenticity. Whether you're a Chennai local or visiting our city, Arusuvai Restaurant offers a biryani experience that stands apart.",
    ],
  },
  
  menu: {
    label: "Biryani Specialties",
    heading: "Our signature biryani collection",
    dishes: [
      {
        name: "Thokku Biryani Chennai Special",
        description: "Our legendary thokku biryani — tender meat cooked in rich, spiced gravy with fragrant basmati rice. The signature dish that made us Chennai's favorite.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1600&q=80",
        badge: "Signature",
      },
      {
        name: "Mutton Thokku Biryani",
        description: "Premium mutton pieces slow-cooked in aromatic thokku masala, layered with aged basmati rice and traditional spices.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1600&q=80",
        badge: "Best Seller",
      },
      {
        name: "Chicken Biryani",
        description: "Classic Chennai-style chicken biryani with succulent pieces, aromatic spices, and perfectly cooked basmati rice.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
        badge: "Popular",
      },
      {
        name: "Mutton Biryani",
        description: "Traditional mutton biryani with tender meat, fragrant rice, and our secret blend of Chennai spices.",
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=1600&q=80",
        badge: null,
      },
      {
        name: "Chicken Thokku Biryani",
        description: "Flavorful chicken in spiced thokku preparation, creating layers of taste in every bite of this Chennai specialty.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1600&q=80",
        badge: "Signature",
      },
      {
        name: "Vegetable Biryani",
        description: "Fresh vegetables and aromatic spices layered with premium basmati rice for a delightful vegetarian option.",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=1600&q=80",
        badge: null,
      },
    ],
  },
  
  atmosphere: {
    label: "Atmosphere",
    heading: "Modern ambiance, authentic Chennai flavors",
    description: "Arusuvai Restaurant combines contemporary design with warm hospitality. Our modern, sleek interiors create the perfect setting to enjoy the best biryani in Chennai. Whether dining in or taking away, we ensure every guest experiences the authentic taste of Chennai biryani.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        alt: "Modern interior of Arusuvai Restaurant Chennai",
      },
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
        alt: "Chefs preparing biryani at Arusuvai",
      },
      {
        url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
        alt: "Dining experience at best biryani restaurant Chennai",
      },
    ],
  },
  
  visit: {
    label: "Visit Us",
    heading: "Find the best biryani in Chennai at Arusuvai",
    location: {
      title: "Location",
      address: "123 Mount Road",
      city: "Chennai, Tamil Nadu 600002",
      country: "India",
    },
    hours: {
      title: "Hours",
      schedule: [
        { days: "Monday – Thursday", time: "11:00 AM – 10:00 PM" },
        { days: "Friday – Saturday", time: "11:00 AM – 11:00 PM" },
        { days: "Sunday", time: "11:00 AM – 10:00 PM" },
      ],
    },
    reservation: {
      title: "Order & Reservations",
      description: "Visit us for dine-in or order our famous thokku biryani for delivery. We also accept reservations for groups and special occasions.",
      cta: "Order via WhatsApp",
      whatsappNumber: "+917550292783",
      whatsappMessage: "Hello, I'd like to order from Arusuvai Restaurant Chennai.",
    },
  },
  
  footer: {
    tagline: "Chennai's destination for authentic biryani & thokku biryani",
    contact: {
      email: "hello@arusuvai.com",
      phone: "+91 755 029 2783",
    },
    social: [
      { platform: "Instagram", url: "#", handle: "@arusuvai" },
      { platform: "Facebook", url: "#", handle: "Arusuvai" },
    ],
    legal: "© 2024 Arusuvai Restaurant Chennai. All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
