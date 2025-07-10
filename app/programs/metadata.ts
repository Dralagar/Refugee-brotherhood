import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Refugee Programs & Initiatives | Refugee Brotherhood RLO Kenya',
  description: 'Explore Refugee Brotherhood\'s innovative programs in livelihood development, psychosocial support, peace building, and advocacy. Leading refugee-led initiatives in Kenya and East Africa for sustainable self-reliance and integration.',
  keywords: 'refugee programs Kenya, RLO initiatives, refugee livelihood development, refugee psychosocial support, refugee peace building, refugee advocacy, refugee self-reliance, refugee integration, refugee empowerment, refugee-led solutions, refugee community development, refugee vocational training, refugee mental health, refugee rights, refugee sustainable development, East Africa refugee programs',
  openGraph: {
    type: 'website',
    siteName: 'Refugee Brotherhood',
    locale: 'en_US',
  },
};

export const programMetadata = {
  livelihood: {
    title: 'Livelihood Program | Refugee Brotherhood RLO Kenya',
    description: 'Empowering refugees through vocational training, micro-enterprise development, and sustainable income generation. Join our mission to create lasting economic opportunities.',
    keywords: 'refugee livelihood, vocational training, micro-enterprise, income generation, refugee economic empowerment, refugee skills development, refugee business training',
    openGraph: {
      type: 'website',
      siteName: 'Refugee Brotherhood',
      locale: 'en_US',
    },
  },
  psychosocial: {
    title: 'Psychosocial Support | Refugee Brotherhood RLO Kenya',
    description: 'Providing comprehensive mental health support and counseling services to help refugees rebuild their lives. Access trauma-informed care and community integration programs.',
    keywords: 'refugee mental health, psychosocial support, trauma counseling, refugee counseling, mental health services, refugee trauma support, community integration',
  },
  peace: {
    title: 'Peace Building | Refugee Brotherhood RLO Kenya',
    description: 'Fostering peace and understanding between refugee and host communities through dialogue, cultural exchange, and youth programs.',
    keywords: 'refugee peace building, community dialogue, conflict resolution, cultural exchange, refugee-host relations, peace initiatives, community harmony',
  },
  advocacy: {
    title: 'Advocacy | Refugee Brotherhood RLO Kenya',
    description: 'Advancing refugee rights and self-reliance through policy advocacy, community engagement, and strategic partnerships.',
    keywords: 'refugee advocacy, policy change, refugee rights, community engagement, refugee policy, rights awareness, legal support',
  },
};

export const metadata = {
  title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Embakasi, Patanisho, Kayole",
  description: "Refugee Brotherhood is a refugee-led organisation empowering communities in Nairobi, Embakasi, Patanisho, and Kayole through livelihood, psychosocial support, peace building, and advocacy programs.",
  keywords: [
    "refugee led organisation",
    "Nairobi",
    "Embakasi",
    "Patanisho",
    "Kayole",
    "refugee programs",
    "livelihood",
    "psychosocial support",
    "peace building",
    "advocacy",
    "Refugee Brotherhood"
  ].join(", "),
  openGraph: {
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Embakasi, Patanisho, Kayole",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    url: "https://www.refugeebrotherhood.org/programs",
    siteName: "Refugee Brotherhood",
    images: [
      {
        url: "https://www.refugeebrotherhood.org/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Refugee Brotherhood Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Embakasi, Patanisho, Kayole",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    images: ["https://www.refugeebrotherhood.org/images/logo.jpg"],
  },
}; 