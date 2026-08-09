import type { Metadata } from "next";
import Link from "next/link";
import { categories, getFeaturedProducts, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Tienda — Los mejores productos para tu piscina y jardín | Guía del Piscina",
  description:
    "Encuentra los mejores productos para piscina y jardín. Depuradoras, robots limpiafondos, bombas de calor, muebles y más. Comparativas honestas y precios actualizados.",
  alternates: { canonical: "https://www.guiadelpiscina.com/tienda" },
  openGraph: {
    title: "Tienda — Los mejores productos para tu piscina y jardín",
    description: "Comparativas y análisis de los mejores productos para piscina y jardín.",
    url: "https://www.guiadelpiscina.com/tienda",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tienda — Los mejores productos para tu piscina y jardín",
  description: "Encuentra los mejores productos para piscina y jardín con comparativas honestas.",
  url: "https://www.guiadelpiscina.com/tienda",
  publisher: { "@type": "Organization", name: "Guía del Piscina", url: "https://www.guiadelpiscina.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.guiadelpiscina.com/tienda" },
  ],
};

export default function TiendaPage() {
  const featured = getFeaturedProducts(6);

  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count: getProductsByCategory(cat.slug).length,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-sky-600">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Tienda</span>
      </nav>

      {/* Mobile: category pills */}
      <div className="md:hidden px-4 pb-4 overflow-x-auto">
        <div className="flex gap-2 w-max">
          {categoriesWithCount.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda/${cat.slug}`}
              className="flex items-center gap-1.5 whitespace-nowrap bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-sky-400 hover:text-sky-600 transition-colors"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-xs text-gray-400">({cat.count})</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 pb-12 flex gap-8 items-start">

        {/* Sidebar */}
        <aside className="hidden md:block w-56 lg:w-64 flex-shrink-0 sticky top-4">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-sky-600 px-4 py-3">
              <span className="text-white font-semibold text-sm uppercase tracking-wide">Categorías</span>
            </div>
            <nav className="divide-y divide-gray-50">
              {categoriesWithCount.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/tienda/${cat.slug}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50 hover:text-sky-700 transition-colors group"
                >
                  <span className="text-xl leading-none">{cat.icon}</span>
                  <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-sky-700 leading-tight">
                    {cat.name}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
              Productos para piscina y jardín
            </h1>
            <p className="text-gray-500 text-sm">
              Comparativas honestas y análisis detallados. Elige con confianza.
            </p>
          </div>

          {/* Category cards grid */}
          <section className="mb-10">
            <h2 className="text-base font-bold text-gray-700 uppercase tracking-wide mb-4">Todas las categorías</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {categoriesWithCount.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/tienda/${cat.slug}`}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-sky-200 transition-all group flex items-start gap-3"
                >
                  <span className="text-2xl leading-none mt-0.5">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-sky-600 transition-colors mb-0.5">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-sky-600">
                        Ver categoría →
                      </span>
                      <span className="text-xs text-gray-400">{cat.count} productos</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured products */}
          <section>
            <h2 className="text-base font-bold text-gray-700 uppercase tracking-wide mb-4">Productos destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {featured.map((product) => (
                <div
                  key={product.slug}
                  className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all flex flex-col bg-white"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {product.categoryName}
                    </span>
                    {product.badge && (
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 leading-snug text-sm">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 flex-grow">{product.shortDescription}</p>
                  <div className="pt-3 border-t border-gray-50 flex items-center justify-end">
                    <Link
                      href={`/tienda/${product.categorySlug}/${product.slug}`}
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                    >
                      Ver producto →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate footnote */}
          <p className="text-xs text-gray-400 mt-10 pl-3 border-l-2 border-gray-200">
            Como Asociado de Amazon obtenemos una pequeña comisión en cada compra realizada a través de nuestros enlaces, sin coste adicional para ti. Los precios y disponibilidad se muestran directamente en Amazon.
          </p>
        </main>
      </div>
    </>
  );
}
