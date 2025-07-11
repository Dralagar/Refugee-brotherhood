import type { Metadata } from "next";
import Footer from "./Footer/page";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Kenya",
  description: "Refugee Brotherhood is a refugee-led organisation empowering communities in Nairobi, Embakasi, Patanisho, and Kayole through livelihood, psychosocial support, peace building, and advocacy programs.",
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
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Kenya",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    url: "https://www.refugeebrotherhood.org/",
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
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Kenya",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    images: ["https://www.refugeebrotherhood.org/images/logo.jpg"],
  },
  metadataBase: new URL("https://www.refugeebrotherhood.org/"),
  alternates: {
    canonical: "https://www.refugeebrotherhood.org/",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for Organization */}
        <Script
          id="organization-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Refugee Brotherhood",
              "url": "https://www.refugeebrotherhood.org/",
              "logo": "https://www.refugeebrotherhood.org/images/logo.jpg",
              "description": "Refugee Brotherhood is a refugee-led organisation empowering communities in Nairobi, Embakasi, Patanisho, and Kayole through livelihood, psychosocial support, peace building, and advocacy programs.",
              "sameAs": [
                "https://www.facebook.com/RefugeeBrotherhood/",
                "https://www.instagram.com/RefugeeBrotherhood/"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
