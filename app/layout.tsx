import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        {/* CWV: preconexión a los dominios de AdSense */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* AdSense: el script se carga siempre; el consentimiento (RGPD / TCF v2.2) lo gestiona el
            mensaje certificado de Google configurado en AdSense > Privacidad y mensajes. */}
        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6063067965030118"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Analytics />
        {/* AdSense: verificación de la propiedad del sitio */}
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
      </body>
    </html>
  );
}
