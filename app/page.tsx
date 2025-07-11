import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: "Refugee Brotherhood | Empowering Refugees in Nairobi, Kenya",
  description: "Refugee Brotherhood is a refugee-led organization empowering refugees and host communities in Nairobi, Embakasi, Patanisho, and Kayole through livelihood, psychosocial support, peace building, and advocacy programs.",
  keywords: [
    "refugee led organisation",
    "refugee-led organization", 
    "Nairobi",
    "Embakasi",
    "Patanisho",
    "Kayole",
    "Kenya",
    "refugee empowerment",
    "community development",
    "sustainable programs",
    "refugee support",
    "refugee community",
    "refugee assistance",
    "refugee integration",
    "refugee rights",
    "refugee services",
    "refugee programs",
    "livelihood",
    "psychosocial support",
    "peace building",
    "advocacy",
    "Refugee Brotherhood",
    "refugee empowerment",
    "refugee community development",
    "refugee support Kenya"
  ].join(", "),
  openGraph: {
    title: "Refugee Brotherhood | Empowering Refugees in Nairobi, Kenya",
    description: "Empowering refugees and host communities in Nairobi through sustainable livelihood, psychosocial support, peace building, and advocacy programs.",
    url: "https://refugeebrotherhood.org/",
    siteName: "Refugee Brotherhood",
    images: [
      {
        url: "https://refugeebrotherhood.org/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Refugee Brotherhood - Empowering Refugees in Nairobi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refugee Brotherhood | Empowering Refugees in Nairobi, Kenya",
    description: "Empowering refugees and host communities in Nairobi through sustainable programs.",
    images: ["https://refugeebrotherhood.org/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://refugeebrotherhood.org/",
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

export default function Home() {
  return <HomeClient />;
}