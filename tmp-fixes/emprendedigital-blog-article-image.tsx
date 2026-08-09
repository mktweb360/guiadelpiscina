// Fix applied directly to /home/mktadmin/emprendedigital/app/blog/[slug]/page.tsx
// Changes:
// 1. Added `image` field to articleSchema (ImageObject with OG image URL)
// 2. Added BreadcrumbList schema
// 3. Added breadcrumbSchema script tag to JSX return

// SNIPPET — articleSchema (after fix):
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { "@type": "Organization", name: "EmprendeDigital.es", url: "https://www.emprendedigital.es" },
  publisher: {
    "@type": "Organization",
    name: "EmprendeDigital.es",
    logo: { "@type": "ImageObject", url: "https://www.emprendedigital.es/logo.png", width: 200, height: 200 },
  },
  image: { "@type": "ImageObject", url: `https://www.emprendedigital.es/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 },
};

// SNIPPET — breadcrumbSchema (after fix):
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.emprendedigital.es/blog" },
    { "@type": "ListItem", position: 3, name: post.title, item: `https://www.emprendedigital.es/blog/${post.slug}` },
  ],
};

// SNIPPET — JSX return (after fix):
// <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
// {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
// <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
