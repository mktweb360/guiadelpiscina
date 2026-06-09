import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Guía del Piscina — Todo lo que necesitas para tu piscina y jardín",
  description:
    "Guías de compra, análisis y comparativas de productos para piscinas, jardín y terraza. Encuentra los mejores productos al mejor precio en Amazon España.",
  alternates: { canonical: "https://www.guiadelpiscina.com" },
  openGraph: {
    title: "Guía del Piscina — Todo lo que necesitas para tu piscina y jardín",
    description:
      "Guías de compra y comparativas de productos para piscinas, jardín y terraza.",
    url: "https://www.guiadelpiscina.com",
  },
};

const categories = [
  {
    href: "/mejores-depuradoras-piscina",
    icon: "💧",
    title: "Depuradoras de piscina",
    desc: "Las mejores depuradoras para mantener el agua limpia y cristalina",
    price: "Desde 150€",
  },
  {
    href: "/robot-limpiafondos-piscina",
    icon: "🤖",
    title: "Robots limpiafondos",
    desc: "Limpieza automática del fondo y paredes sin esfuerzo",
    price: "Desde 200€",
  },
  {
    href: "/bomba-calor-piscina",
    icon: "🌡️",
    title: "Bombas de calor",
    desc: "Extiende la temporada de baño calentando el agua de tu piscina",
    price: "Desde 500€",
  },
  {
    href: "/muebles-jardin-terraza",
    icon: "🪑",
    title: "Muebles de jardín",
    desc: "Conjuntos y sillas para disfrutar del exterior todo el verano",
    price: "Desde 99€",
  },
  {
    href: "/pergola-terraza",
    icon: "🏠",
    title: "Pérgolas",
    desc: "Protégete del sol con las mejores pérgolas para terraza y jardín",
    price: "Desde 150€",
  },
  {
    href: "/sistema-riego-automatico",
    icon: "🌱",
    title: "Riego automático",
    desc: "Sistemas de riego inteligentes para un jardín siempre verde",
    price: "Desde 30€",
  },
  {
    href: "/cesped-artificial-jardin",
    icon: "🌿",
    title: "Césped artificial",
    desc: "Césped sintético de alta calidad sin mantenimiento",
    price: "Desde 5€/m²",
  },
  {
    href: "/piscina-desmontable-grande",
    icon: "🏊",
    title: "Piscinas desmontables",
    desc: "Las mejores piscinas desmontables para toda la familia",
    price: "Desde 300€",
  },
];

const articles = [
  {
    href: "/mejores-depuradoras-piscina",
    title: "Las 5 mejores depuradoras para piscina en 2025",
    excerpt:
      "Comparativa completa de las depuradoras más vendidas en España. Analizamos rendimiento, consumo y precio.",
    date: "2025-05-15",
  },
  {
    href: "/robot-limpiafondos-piscina",
    title: "Mejores robots limpiafondos para piscina 2025",
    excerpt:
      "Guía de compra completa: qué robot elegir según el tamaño de tu piscina y tu presupuesto.",
    date: "2025-05-20",
  },
  {
    href: "/bomba-calor-piscina",
    title: "Bomba de calor para piscina: las mejores opciones",
    excerpt:
      "Cómo elegir la bomba de calor perfecta y cuánto puedes ahorrar frente a otros sistemas.",
    date: "2025-06-01",
  },
  {
    href: "/piscina-desmontable-grande",
    title: "Mejores piscinas desmontables grandes 2025",
    excerpt:
      "Las piscinas desmontables más grandes y resistentes para disfrutar en familia este verano.",
    date: "2025-06-05",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.guiadelpiscina.com",
    },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Guía del Piscina — Todo lo que necesitas para tu piscina y jardín
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Comparativas, análisis y guías de compra para que elijas el mejor producto sin perder tiempo ni dinero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="px-8 py-3 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-colors text-lg"
            >
              Ver todos los artículos
            </Link>
            <Link
              href="/mejores-depuradoras-piscina"
              className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors text-lg"
            >
              Depuradoras 2025 →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Categorías destacadas
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Elige tu categoría y encuentra el producto perfecto
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-sky-200 transition-all group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{cat.desc}</p>
                <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-1 rounded-full">
                  {cat.price}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured store products */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold text-gray-900">Tienda destacada</h2>
            <Link href="/tienda" className="text-sky-600 font-semibold hover:underline text-sm">
              Ver todos →
            </Link>
          </div>
          <p className="text-gray-500 mb-8">Los productos mejor valorados por nuestros lectores</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <div key={product.slug} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{product.categoryName}</span>
                  {product.badge && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3 flex-grow">{product.shortDescription}</p>
                <StarRating rating={product.rating} />
                <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className="font-extrabold text-gray-900">{product.price}</span>
                  <Link
                    href={`/tienda/${product.categorySlug}/${product.slug}`}
                    className="text-xs font-semibold text-sky-600 hover:text-sky-700"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Últimos artículos
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Análisis actualizados para la temporada 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-sky-200 transition-all group"
              >
                <time className="text-xs text-gray-400 mb-2 block">{art.date}</time>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{art.excerpt}</p>
                <span className="mt-4 inline-block text-sky-600 text-sm font-semibold">
                  Leer artículo →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="px-8 py-3 border-2 border-sky-500 text-sky-600 font-bold rounded-xl hover:bg-sky-50 transition-colors"
            >
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué confiar en nosotros?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            En <strong>Guía del Piscina</strong> analizamos cada producto con criterio y honestidad. Comparamos precios, leemos cientos de opiniones y consultamos con expertos para darte la información que necesitas antes de comprar. No publicamos contenido patrocinado: nuestros ingresos provienen de comisiones de afiliado de Amazon, lo que no afecta a nuestras valoraciones.
          </p>
          <Link href="/sobre-nosotros" className="text-sky-600 font-semibold hover:underline">
            Saber más sobre nosotros →
          </Link>
        </div>
      </section>
    </>
  );
}
