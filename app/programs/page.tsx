import type { Metadata } from 'next';
import ProgramsClient from '../components/ProgramsClient';

const programData = {
  livelihood: {
    id: 'livelihood',
    title: 'Livelihood Program',
    description:
      'Empowering refugees through vocational training, micro-enterprise development, and sustainable income generation.',
    image: '/images/programs/rb1.jpg',
    stats: {
      beneficiaries: '500+',
      successRate: '85%',
      partnerships: '10+',
    },
    features: [
      'Vocational Training',
      'Business Development',
      'Market Access',
      'Financial Literacy',
    ],
  },
  psychosocial: {
    id: 'psychosocial',
    title: 'Psychosocial Support',
    description:
      'Providing mental health support and counseling services to help refugees rebuild their lives.',
    image: '/images/programs/Mental.jpg',
    stats: {
      beneficiaries: '200+',
      successRate: '90%',
      partnerships: '10+',
    },
    features: [
      'Mental Health Counseling',
      'Group Therapy',
      'Trauma Support',
      'Community Integration',
    ],
  },
  peace: {
    id: 'peace',
    title: 'Peace Building',
    description:
      'Fostering peace and understanding between refugee and host communities.',
    image: '/images/programs/rb66.jpg',
    stats: {
      beneficiaries: '1000+',
      successRate: '80%',
      partnerships: '15+',
    },
    features: [
      'Community Dialogues',
      'Conflict Resolution',
      'Cultural Exchange',
      'Youth Programs',
    ],
  },
  advocacy: {
    id: 'advocacy',
    title: 'Advocacy',
    description:
      'Advocating for refugee rights and policy changes at local and international levels.',
    image: '/images/programs/Advocate.jpg',
    stats: {
      beneficiaries: '1000+',
      successRate: '75%',
      partnerships: '5+',
    },
    features: [
      'Policy Advocacy',
      'Rights Awareness',
      'Legal Support',
      'Community Mobilization',
    ],
  },
};

export const metadata: Metadata = {
  title: "Our Programs | Refugee Brotherhood",
  description: "Discover Refugee Brotherhood's four core programs: Livelihood (USLA, waste management, vocational training), Psychosocial Support, Peace Building, and Advocacy. Empowering refugees in Nairobi, Kenya.",
  keywords: [
    "refugee programs",
    "livelihood program",
    "USLA",
    "Urban saving and loan association", 
    "psychosocial support",
    "peace building",
    "refugee advocacy",
    "waste management",
    "vocational training",
    "refugee empowerment",
    "community development",
    "Nairobi refugee programs",
    "Refugee Brotherhood programs"
  ].join(", "),
  openGraph: {
    title: "Our Programs | Refugee Brotherhood",
    description: "Discover Refugee Brotherhood's four core programs: Livelihood, Psychosocial Support, Peace Building, and Advocacy. Empowering refugees in Nairobi, Kenya.",
    url: "https://www.refugeebrotherhood.org/programs",
    siteName: "Refugee Brotherhood",
    images: [
      {
        url: "https://www.refugeebrotherhood.org/images/programs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Refugee Brotherhood Programs - Livelihood, Psychosocial Support, Peace Building, Advocacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Programs | Refugee Brotherhood",
    description: "Discover Refugee Brotherhood's four core programs empowering refugees in Nairobi, Kenya.",
    images: ["https://www.refugeebrotherhood.org/images/programs-og.jpg"],
  },
  alternates: {
    canonical: "https://www.refugeebrotherhood.org/programs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function Programs() {
  return <ProgramsClient />;
}