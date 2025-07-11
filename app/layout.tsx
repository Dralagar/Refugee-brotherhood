import type { Metadata } from "next";
import Footer from "./Footer/page";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Kenya",
    template: "%s | Refugee Brotherhood"
  },
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
    "refugee support Kenya",
    "USLA",
    "Urban saving and loan association",
    "Mr Green Africa",
    "waste management",
    "Nairobi Industrial Institute",
    "refugee led organizations",
    "community social cohesion",
    "peace cup",
    "refugee advocacy",
    "refugee rights Kenya"
  ].join(", "),
  authors: [{ name: "Refugee Brotherhood" }],
  creator: "Refugee Brotherhood",
  publisher: "Refugee Brotherhood",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.refugeebrotherhood.org"),
  alternates: {
    canonical: "https://www.refugeebrotherhood.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.refugeebrotherhood.org",
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Kenya",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    siteName: "Refugee Brotherhood",
    images: [
      {
        url: "https://www.refugeebrotherhood.org/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Refugee Brotherhood - Empowering Refugees in Nairobi, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Kenya",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    images: ["https://www.refugeebrotherhood.org/images/logo.jpg"],
    creator: "@RefugeeBrotherhood",
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "Non-Profit Organization",
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
              "@type": "NonProfit",
              "name": "Refugee Brotherhood",
              "url": "https://www.refugeebrotherhood.org",
              "logo": "https://www.refugeebrotherhood.org/images/logo.jpg",
              "description": "Refugee Brotherhood is a refugee-led organisation empowering communities in Nairobi, Embakasi, Patanisho, and Kayole through livelihood, psychosocial support, peace building, and advocacy programs.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Swahili"]
              },
              "sameAs": [
                "https://www.facebook.com/RefugeeBrotherhood/",
                "https://www.instagram.com/RefugeeBrotherhood/"
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Nairobi"
                },
                {
                  "@type": "City", 
                  "name": "Embakasi"
                },
                {
                  "@type": "City",
                  "name": "Patanisho"
                },
                {
                  "@type": "City",
                  "name": "Kayole"
                }
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Kenya"
              },
              "program": [
                {
                  "@type": "Service",
                  "name": "Livelihood Program",
                  "description": "USLA- Urban saving and loan association, waste management, vocational training"
                },
                {
                  "@type": "Service", 
                  "name": "Psychosocial Support",
                  "description": "Mental health support and counseling for refugees and host communities"
                },
                {
                  "@type": "Service",
                  "name": "Peace Building", 
                  "description": "Community social cohesion and peace building through sports and awareness"
                },
                {
                  "@type": "Service",
                  "name": "Advocacy",
                  "description": "Policy advocacy for refugee rights and integration"
                }
              ]
            })
          }}
        />
        
        {/* JSON-LD Structured Data for Website */}
        <Script
          id="website-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Refugee Brotherhood",
              "url": "https://www.refugeebrotherhood.org",
              "description": "Refugee Brotherhood is a refugee-led organisation empowering communities in Nairobi through sustainable programs.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.refugeebrotherhood.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Additional Meta Tags for Better SEO */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Refugee Brotherhood" />
        <meta name="application-name" content="Refugee Brotherhood" />
        <meta name="msapplication-TileColor" content="#3674B5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#3674B5" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="google-site-verification" content="4mJ8j2dSbExbW-RSv5jo2mqOYzyeEKRRdeaa-t8G5U8" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Refugee Brotherhood" />
        <meta name="copyright" content="Refugee Brotherhood" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:site_name" content="Refugee Brotherhood" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="sw_KE" />
        
        {/* Twitter Additional Tags */}
        <meta name="twitter:site" content="@RefugeeBrotherhood" />
        <meta name="twitter:creator" content="@RefugeeBrotherhood" />
        
        {/* Mobile and Performance Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3674B5" />
        <meta name="msapplication-TileColor" content="#3674B5" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/logo.jpg" as="image" />
        
        {/* Canonical and Alternate Links */}
        <link rel="canonical" href="https://www.refugeebrotherhood.org" />
        <link rel="alternate" href="https://www.refugeebrotherhood.org" hrefLang="en" />
        <link rel="alternate" href="https://www.refugeebrotherhood.org" hrefLang="x-default" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
