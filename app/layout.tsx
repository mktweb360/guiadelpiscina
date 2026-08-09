import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.guiadelpiscina.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guía del Piscina — Piscinas, Jardín y Terraza",
    template: "%s | Guía del Piscina",
  },
  description:
    "Análisis y guías de compra de productos para piscinas, jardín y terraza. Comparativas, precios y recomendaciones para propietarios españoles.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Guía del Piscina",
  },
  twitter: {
    card: "summary_large_image",
    site: "@guiadelpiscina",
  },
  verification: {
    google: "rw79NmsZG6imEcrmUUkBXvJG5AJppQ0BfvCS0Igh0Lg",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guía del Piscina",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mkt Web 360 SLU",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Portal especializado en mantenimiento y equipamiento de piscinas en España. Guías técnicas, comparativas de depuradoras, robots limpiafondos y productos de tratamiento del agua.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras de piscina", "robots limpiafondos", "piscinas desmontables"],
  sameAs: ["https://www.instagram.com/guiadelpiscina", "https://www.facebook.com/guiadelpiscina"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@guiadelpiscina.com",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {/* CWV: Preconnect to AdSense — opens TCP early so the script loads
            faster the moment the user gives consent in the cookie banner.      */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* Google Consent Mode v2 — todo denegado por defecto hasta que el
            usuario decida en el banner de cookies (CookieBanner) */}
        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        {/* AdSense site verification only — the ad script itself is loaded
            conditionally by CookieBanner after consent (GDPR) */}
        <meta name="google-adsense-account" content="ca-pub-6063067965030118" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
