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
  {
    href: "/agua-piscina-verde",
    icon: "💚",
    title: "Agua de la piscina verde: causas y solución definitiva 2025",
    excerpt:
      "¿El agua se ha puesto verde? Protocolo de choque paso a paso para recuperarla en 24-48 h y cómo evitar que vuelva a ocurrir.",
    date: "2025-07-05",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/ph-piscina",
    icon: "🧪",
    title: "pH piscina: valores ideales, cómo medirlo y corregirlo",
    excerpt:
      "Rango ideal de pH (7,2-7,6), cómo medirlo con tiras o medidor digital y cómo subir o bajar el pH de forma segura.",
    date: "2025-07-10",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/mantenimiento-piscina-desmontable",
    icon: "🔧",
    title: "Mantenimiento piscina desmontable: guía paso a paso 2025",
    excerpt:
      "Todo lo que necesitas para mantener tu piscina desmontable limpia: pH, cloro, filtro, limpieza y preparación para el invierno.",
    date: "2025-07-01",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/mejor-clorador-salino-piscina",
    icon: "🧂",
    title: "Mejor clorador salino para piscina 2025 — Guía completa",
    excerpt:
      "Los 3 mejores cloradores salinos para piscina desmontable en 2025: Intex, Bestway y Gre. Comparativa, instalación y mantenimiento.",
    date: "2025-07-15",
    price: "100–300€",
    category: "Piscinas",
  },
  {
    href: "/escalera-piscina-desmontable",
    icon: "🪜",
    title: "Mejor escalera piscina desmontable 2025 — Guía de compra",
    excerpt:
      "Las 3 mejores escaleras para piscina desmontable en 2025. Comparativa Intex vs Bestway por altura, seguridad y precio.",
    date: "2025-07-15",
    price: "30–80€",
    category: "Piscinas",
  },
  {
    href: "/cubierta-piscina-desmontable",
    icon: "🏗️",
    title: "Mejor cubierta para piscina desmontable 2025 — Guía completa",
    excerpt:
      "Cobertores de invierno, solares y mantas térmicas para piscina desmontable. Qué tipo elegir según tu necesidad y presupuesto.",
    date: "2025-07-20",
    price: "20–80€",
    category: "Piscinas",
  },
  {
    href: "/mejores-tumbonas-jardin",
    icon: "🌴",
    title: "Las mejores tumbonas de jardín en 2025 — Comparativa y análisis",
    excerpt:
      "Análisis de las mejores tumbonas de jardín para piscina y terraza. Comparativa por material, comodidad y precio.",
    date: "2025-07-15",
    price: "40–200€",
    category: "Jardín",
  },
  {
    href: "/mejores-sombrillas-jardin",
    icon: "☂️",
    title: "Las mejores sombrillas de jardín en 2025 — Guía de compra",
    excerpt:
      "Las mejores sombrillas de jardín: de palo central y excéntricas para terraza y piscina. Guía de compra con precios y análisis.",
    date: "2025-07-20",
    price: "30–150€",
    category: "Jardín",
  },
  {
    href: "/mejor-manguera-riego-jardin",
    icon: "💦",
    title: "Mejor manguera de riego para jardín 2025 — Guía de compra",
    excerpt:
      "Las mejores mangueras extensibles y de calidad para jardín en 2025. Comparativa por longitud, material y precio.",
    date: "2025-07-15",
    price: "15–60€",
    category: "Jardín",
  },
  {
    href: "/piscina-desmontable-grande-adultos",
    icon: "🏊",
    title: "Mejores piscinas desmontables grandes para adultos 2025",
    excerpt:
      "Las mejores piscinas desmontables grandes para adultos: Intex Ultra XTR y Bestway Power Steel. Comparativa completa 2025.",
    date: "2025-07-20",
    price: "400–900€",
    category: "Piscinas",
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
