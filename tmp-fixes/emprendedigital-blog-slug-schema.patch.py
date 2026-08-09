#!/usr/bin/env python3
"""
Patch: add Article + FAQPage + BreadcrumbList schema to emprendedigital blog/[slug]/page.tsx
Run from the emprendedigital repo root: python3 emprendedigital-blog-slug-schema.patch.py
"""
import sys

BLOG_SLUG_PATH = "app/blog/[slug]/page.tsx"

SCHEMA_BLOCK = '''
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.emprendedigital.es/blog/${slug}`,
    mainEntityOfPage: `https://www.emprendedigital.es/blog/${slug}`,
    author: { "@type": "Organization", name: "Emprende Digital" },
    publisher: {
      "@type": "Organization",
      name: "Mkt Web 360 SLU",
      url: "https://www.emprendedigital.es",
      logo: { "@type": "ImageObject", url: "https://www.emprendedigital.es/logo.png" },
    },
    inLanguage: "es",
  };

  const faqItems = content?.faqs ?? [];
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.emprendedigital.es/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.emprendedigital.es/blog/${slug}` },
    ],
  };

  const schemaScripts = (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
'''

RETURN_ANCHOR = "  return ("

with open(BLOG_SLUG_PATH, "r", encoding="utf-8") as f:
    content = f.read()

last_return = content.rfind(RETURN_ANCHOR)
if last_return == -1:
    print("ERROR: could not find 'return (' in blog slug page")
    sys.exit(1)

if '"@type": "Article"' in content:
    print("INFO: Article schema already present — skipping")
    sys.exit(0)

patched = content[:last_return] + SCHEMA_BLOCK + content[last_return:]

RETURN_OPEN = RETURN_ANCHOR + "\n    <>\n"
RETURN_OPEN_PATCHED = RETURN_ANCHOR + "\n    <>\n      {schemaScripts}\n"

if RETURN_OPEN in patched:
    patched = patched.replace(RETURN_OPEN, RETURN_OPEN_PATCHED, 1)
else:
    print("WARN: could not auto-inject {schemaScripts} — add manually after opening <>")

with open(BLOG_SLUG_PATH, "w", encoding="utf-8") as f:
    f.write(patched)

print(f"OK: {BLOG_SLUG_PATH} patched with Article + FAQPage + BreadcrumbList schema")
