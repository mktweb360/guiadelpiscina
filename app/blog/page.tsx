import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Guías de compra y análisis de productos",
  description:
    "Todos nuestros artículos sobre piscinas, jardín y terraza. Comparativas, análisis y guías de compra actualizadas para 2025.",
  alternates: { canonical: "https://www.guiadelpiscina.com/blog" },
  openGraph: {
    title: "Blog — Guías de compra y análisis de productos | Guía del Piscina",
    description: "Todos nuestros artículos sobre piscinas, jardín y terraza.",
    url: "https://www.guiadelpiscina.com/blog",
  },
};

const articles = [
  {
    href: "/mejores-depuradoras-piscina",
    icon: "💧",
    title: "Las 5 mejores depuradoras para piscina en 2025 — Análisis y comparativa",
    excerpt:
      "Comparativa completa de las depuradoras más vendidas en España. Analizamos rendimiento, consumo y precio para ayudarte a elegir.",
    date: "2025-05-15",
    price: "150–400€",
    category: "Piscinas",
  },
  {
    href: "/robot-limpiafondos-piscina",
    icon: "🤖",
    title: "Mejores robots limpiafondos para piscina 2025 — Guía de compra",
    excerpt:
      "Guía de compra completa: qué robot elegir según el tamaño de tu piscina y tu presupuesto. Comparamos los modelos más populares.",
    date: "2025-05-20",
    price: "200–600€",
    category: "Piscinas",
  },
  {
    href: "/bomba-calor-piscina",
    icon: "🌡️",
    title: "Bomba de calor para piscina: las mejores opciones y cómo elegir",
    excerpt:
      "Cómo elegir la bomba de calor perfecta, ahorro vs resistencia eléctrica y los mejores modelos del mercado.",
    date: "2025-06-01",
    price: "500–2000€",
    category: "Piscinas",
  },
  {
    href: "/piscina-desmontable-grande",
    icon: "🏊",
    title: "Mejores piscinas desmontables grandes 2025 — Guía de compra",
    excerpt:
      "Las piscinas desmontables más grandes y resistentes para disfrutar en familia este verano sin obras.",
    date: "2025-06-05",
    price: "300–800€",
    category: "Piscinas",
  },
  {
    href: "/muebles-jardin-terraza",
    icon: "🪑",
    title: "Mejores muebles de jardín y terraza 2025 — Guía completa",
    excerpt:
      "Conjuntos de jardín, sillas, mesas y tumbonas. Los mejores muebles de exterior para cada presupuesto.",
    date: "2025-04-10",
    price: "99–800€",
    category: "Jardín",
  },
  {
    href: "/pergola-terraza",
    icon: "🏠",
    title: "Las mejores pérgolas para terraza y jardín 2025",
    excerpt:
      "Pérgolas de aluminio, madera y bioclimáticas. Guía completa para elegir la pérgola perfecta para tu espacio exterior.",
    date: "2025-04-20",
    price: "150–1500€",
    category: "Jardín",
  },
  {
    href: "/sistema-riego-automatico",
    icon: "🌱",
    title: "Sistemas de riego automático para jardín — Comparativa 2025",
    excerpt:
      "Los mejores programadores, aspersores y sistemas de riego por goteo para mantener tu jardín siempre verde.",
    date: "2025-03-15",
    price: "30–300€",
    category: "Jardín",
  },
  {
    href: "/cesped-artificial-jardin",
    icon: "🌿",
    title: "Mejor césped artificial para jardín 2025 — Análisis y precios",
    excerpt:
      "Comparativa de césped artificial por densidad, altura y precio. Cuál elegir y cómo instalarlo correctamente.",
    date: "2025-03-28",
    price: "5–25€/m²",
    category: "Jardín",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.guiadelpiscina.com/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500 mb-10">
          Guías de compra y análisis actualizados para la temporada 2025
        </p>
        <div className="grid grid-cols-1 gap-6">
          {articles.map((art) => (
            <Link
              key={art.href}
              href={art.href}
              className="flex flex-col sm:flex-row gap-4 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-sky-200 transition-all group"
            >
              <div className="text-5xl shrink-0">{art.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                    {art.category}
                  </span>
                  <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-medium">
                    {art.price}
                  </span>
                </div>
                <h2 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                  {art.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{art.excerpt}</p>
                <time className="text-xs text-gray-400">{art.date}</time>
              </div>
              <div className="shrink-0 self-center">
                <span className="text-sky-600 font-semibold text-sm whitespace-nowrap">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
