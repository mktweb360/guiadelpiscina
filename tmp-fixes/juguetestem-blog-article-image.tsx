// Fix applied directly to /home/mktadmin/juguetestem/app/blog/[slug]/page.tsx
// Changes:
// 1. Added `image` field to articleSchema (ImageObject with OG image URL)
// Note: BreadcrumbList was already present in juguetestem.

// SNIPPET — articleSchema (after fix):
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { "@type": "Organization", name: "JugueteSTEM.es" },
  publisher: { "@type": "Organization", name: "JugueteSTEM.es", url: "https://www.juguetestem.es" },
  image: { "@type": "ImageObject", url: `https://www.juguetestem.es/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 },
};

// SNIPPET — breadcrumbSchema (was already present, no change needed):
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.juguetestem.es" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.juguetestem.es/blog" },
    { "@type": "ListItem", position: 3, name: post.title, item: `https://www.juguetestem.es/blog/${post.slug}` },
  ],
};
