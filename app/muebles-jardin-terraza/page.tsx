import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Mejores muebles de jardín y terraza 2025 — Guía completa",
  description:
    "Comparativa de los mejores muebles de jardín y terraza para 2025. Conjuntos, sillas, mesas y tumbonas para todos los presupuestos.",
  keywords: "muebles jardin, muebles terraza baratos, conjunto jardin, sillas jardin, mesa jardin",
  alternates: { canonical: "https://www.guiadelpiscina.com/muebles-jardin-terraza" },
};

const products = [
  { pos: 1, name: "Outsunny Conjunto Muebles Ratán 4 Piezas Sofá 2 Plazas 2 Sillones Mesa", asin: "B0CR6BVF58", price: "€129,99", material: "Rattan sintético", pieces: "2 sillones + mesa", weatherproof: "Sí", stars: "4,3/5", best: "Mejor precio" },
  { pos: 2, name: "Outsunny Conjunto 4 piezas aluminio", asin: "B08548WV3T", price: "€279,00", material: "Aluminio + Textileno", pieces: "2 sof + mesa + banco", weatherproof: "Sí", stars: "4,4/5", best: "Mejor calidad-precio" },
  { pos: 3, name: "Tectake Conjunto 8 piezas polyrattan", asin: "B09TW67DSC", price: "€399,00", material: "Polyrattan", pieces: "6 sillas + mesa + 2 pufs", weatherproof: "Sí", stars: "4,5/5", best: "Mejor para 6+ personas" },
  { pos: 4, name: "Hartman Sophie Studio Conjunto", asin: "B06X9FJVFD", price: "€649,00", material: "Aluminio premium", pieces: "4 sillas + mesa grande", weatherproof: "Sí", stars: "4,7/5", best: "Mejor calidad" },
  { pos: 5, name: "Keter Montreal Conjunto resina", asin: "B0F3XCC24F", price: "€199,00", material: "Resina inyectada", pieces: "4 sillas + mesa", weatherproof: "Total", stars: "4,4/5", best: "Más resistente a lluvia" },
];

const faqs = [
  { q: "¿Qué material es mejor para muebles de jardín en España?", a: "En climas mediterráneos, el aluminio con cojines de tejido técnico es la mejor opción: no se oxida, no pesa demasiado y aguanta el calor extremo. El rattan sintético (polyrattan) es también excelente y más económico. Evita la madera sin tratar si la piscina está cerca (el agua y el cloro la deterioran rápido)." },
  { q: "¿Los muebles de jardín pueden quedarse fuera toda la noche?", a: "Depende del material. El aluminio y la resina aguantan perfectamente a la intemperie todo el año. El rattan sintético aguanta bien pero conviene cubrirlo en invierno. Los cojines siempre deben guardarse cuando no se usen o ante lluvia, aunque sean impermeables." },
  { q: "¿Cuándo es mejor comprar muebles de jardín?", a: "Los mejores precios suelen ser en el Black Friday (noviembre) y en las rebajas de fin de temporada (agosto-septiembre). Si compras en primavera o principios de verano pagarás el precio máximo." },
  { q: "¿Los muebles de jardín baratos de Amazon son de calidad?", a: "En general sí, especialmente los de marcas como Outsunny, Tectake y Keter. La relación calidad-precio suele ser buena para uso doméstico. Para uso intensivo o profesional, merece la pena invertir en marcas premium como Hartman o Kettler." },
  { q: "¿Cómo limpiar muebles de jardín de rattan o aluminio?", a: "Para el rattan sintético, agua tibia con jabón neutro y un cepillo suave. Para el aluminio, agua con jabón y un paño suave. Enjuaga bien y deja secar al aire. Nunca uses productos abrasivos ni estropajos de metal." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores muebles de jardín y terraza 2025 — Guía completa",
  description: "Comparativa de los mejores muebles de jardín y terraza para 2025.",
  datePublished: "2025-04-10",
  dateModified: "2025-06-01",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/muebles-jardin-terraza",
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/og-image.png", width: 1200, height: 630 },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#respuesta-directa", "h1"] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.guiadelpiscina.com/blog" },
    { "@type": "ListItem", position: 3, name: "Muebles jardín terraza", item: "https://www.guiadelpiscina.com/muebles-jardin-terraza" },
  ],
};

export default function MueblesJardinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10 lg:items-start">
        <article>
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Muebles jardín y terraza</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores muebles de jardín y terraza 2025 — Guía completa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 10 abril 2025 · Actualizado: 1 junio 2025 · 10 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
                    <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">Los <strong>muebles de jardín</strong> son la clave para disfrutar al máximo de la terraza o el jardín en verano. Elegir bien marca la diferencia entre un espacio que se deteriora en dos temporadas y uno que dura décadas. En esta guía analizamos los <strong>mejores conjuntos de muebles de jardín y terraza</strong> disponibles en Amazon España en 2025, con precios entre 130 y 650€. Puedes <Link href="/tienda/muebles-jardin" className="text-sky-600 hover:underline font-medium">ver conjuntos de jardín en nuestra tienda</Link> con selección actualizada y precios comparados.</p>
          </div>

          <h2>Comparativa — Mejores muebles de jardín 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Piezas</th>
                <th className="px-3 py-3 text-left">Intemperie</th>
                <th className="px-3 py-3 text-left">Valoración</th>
                <th className="px-3 py-3 text-left">Comprar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-sky-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.pieces}</td>
                  <td className="px-3 py-3 text-green-600 font-medium">{p.weatherproof}</td>
                  <td className="px-3 py-3 text-yellow-500 font-semibold">⭐ {p.stars}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
                      className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                      Ver precio →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="4567890123" />

        <div className="prose">
          <h2>Los mejores muebles de jardín — Análisis detallado</h2>

          <h3>1. Conjunto de rattan 3 piezas — Mejor precio (★★★★)</h3>
          <p>
            Para terrazas pequeñas o presupuestos ajustados, un conjunto de 3 piezas en rattan sintético por menos de 130€ es una opción muy sólida. El rattan sintético imita la estética del natural pero es mucho más resistente a la humedad y los rayos UV.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07YXBFJKL")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver conjunto 3 piezas en Amazon →
            </a>
          </div>

          <h3>2. Outsunny Conjunto aluminio 4 piezas — Mejor calidad-precio (★★★★)</h3>
          <p>
            El aluminio con textileno es la combinación perfecta para uso cercano a la piscina: no se oxida, no pesa y el tejido técnico es resistente al cloro y la humedad. El conjunto de <strong><Link href="/tienda/muebles-jardin/outsunny-conjunto-ratan-4-piezas" className="text-sky-700 hover:underline">Outsunny</Link></strong> ofrece un sofá de 2 plazas, dos sillones y una mesa central por menos de 280€.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08PQJKL3M")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Outsunny en Amazon →
            </a>
          </div>

          <h3>3. Tectake 8 piezas polyrattan — Mejor para grupos (★★★★½)</h3>
          <p>
            Para familias numerosas o quien quiera montar un comedor de jardín completo, el conjunto de 8 piezas de <strong>Tectake</strong> incluye 6 sillas, mesa grande y 2 pufs por menos de 400€. Ideal para terrazas amplias.
          </p>

          <h2>Guía de compra: qué tener en cuenta</h2>
          <ul>
            <li><strong>Espacio disponible:</strong> Mide tu terraza y deja al menos 60 cm de paso entre muebles y paredes.</li>
            <li><strong>Número de personas:</strong> Un conjunto para 2-4 personas suele ser suficiente para uso familiar.</li>
            <li><strong>Material:</strong> Aluminio o polyrattan para máxima durabilidad; resina para mayor resistencia a lluvias fuertes.</li>
            <li><strong>Cojines:</strong> Elige tejidos con tratamiento antimanchas y secado rápido para uso en exterior.</li>
            <li><strong>Almacenamiento:</strong> Si no tienes trastero, busca muebles apilables o plegables.</li>
          </ul>

          <h2>Preguntas frecuentes</h2>
        </div>

        <div className="space-y-4 my-8">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>{faq.q}</span>
                <span className="text-sky-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-600 leading-relaxed bg-gray-50">{faq.a}</div>
            </details>
          ))}
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Los mejores conjuntos de muebles de jardín, seleccionados por calidad y precio.</p>
          <Link href="/tienda/muebles-jardin" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver muebles de jardín →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/pergola-terraza" className="text-sky-600 hover:underline">→ Las mejores pérgolas para terraza y jardín 2025</Link></li>
            <li><Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">→ Mejor césped artificial para jardín 2025</Link></li>
            <li><Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">→ Sistemas de riego automático para jardín 2025</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda" ctaText="Ver productos recomendados" />
      </div>
    </div>
    </>
  );
}
