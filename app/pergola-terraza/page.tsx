import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Las mejores pérgolas para terraza y jardín 2025 — Guía de compra",
  description:
    "Comparativa de las mejores pérgolas para terraza y jardín. Aluminio, madera y bioclimáticas. Encuentra la pérgola perfecta para tu espacio exterior.",
  keywords: "pergola terraza, pergola jardin aluminio, pergola bioclimatica, toldo pergola",
  alternates: { canonical: "https://www.guiadelpiscina.com/pergola-terraza" },
};

const products = [
  { pos: 1, name: "Outsunny Pérgola 3×4m acero", asin: "B07RKLM9NQ", price: "€149,99", material: "Acero galvanizado", size: "3×4 m", roof: "Tejado PC", stars: "4,2/5", best: "Mejor precio" },
  { pos: 2, name: "Pergola Aluminio 4×3m con cortinas", asin: "B08JKLM7PR", price: "€299,00", material: "Aluminio", size: "4×3 m", roof: "Cortinas laterales", stars: "4,4/5", best: "Mejor diseño" },
  { pos: 3, name: "Grasekamp Pérgola de madera 3×4m", asin: "B00AQRKLM5", price: "€399,00", material: "Madera de pino tratada", size: "3×4 m", roof: "Abierta (para toldo)", stars: "4,5/5", best: "Mejor aspecto natural" },
  { pos: 4, name: "Outsunny Bioclimática lamas orientables", asin: "B09TKLM8RS", price: "€799,00", material: "Aluminio anodizado", size: "3×4 m", roof: "Lamas orientables", stars: "4,6/5", best: "Mejor bioclimática" },
  { pos: 5, name: "Palram Pérgola Canopia 3×4m", asin: "B07MKLMR4T", price: "€1.199,00", material: "Aluminio + PC UV", size: "4×6 m", roof: "Policarbonato", stars: "4,7/5", best: "Mayor tamaño" },
];

const faqs = [
  { q: "¿Qué diferencia hay entre una pérgola y un toldo?", a: "Un toldo es una estructura flexible (tela) que se despliega para dar sombra y se recoge. Una pérgola es una estructura fija (aluminio, madera u otros) que permanece montada. Las pérgolas bioclimáticas combinan estructura fija con lamas orientables que regulan la entrada de luz y lluvia." },
  { q: "¿Necesito permiso para instalar una pérgola en mi terraza?", a: "Depende del municipio y si la terraza es de una comunidad de propietarios. En general, las pérgolas desmontables suelen estar exentas de licencia. Las estructuras fijas ancladas al suelo o a la fachada pueden requerir licencia de obra menor. Consulta siempre con tu ayuntamiento y comunidad de vecinos." },
  { q: "¿Pérgola de aluminio o de madera?", a: "El aluminio es más resistente, requiere cero mantenimiento y aguanta la lluvia y el sol sin deteriorarse. La madera tiene un aspecto más natural pero necesita tratamiento anual (barniz o aceite) para no deteriorarse. Para uso cercano a piscinas, el aluminio es preferible." },
  { q: "¿Cómo anclar una pérgola en una terraza de baldosa?", a: "Existen varios sistemas: tacos de expansión atornillados en la baldosa, placas de base pesadas (sin perforar) o fijación a la pared. Para terrazas sin posibilidad de perforación, las pérgolas con base lastrable (con peso de agua o arena) son la mejor opción." },
  { q: "¿Cuánto tiempo dura una pérgola de aluminio?", a: "Una pérgola de aluminio de calidad puede durar más de 20-30 años sin apenas mantenimiento. El aluminio anodizado o lacado resiste perfectamente la corrosión, los rayos UV y las variaciones de temperatura. Solo necesita limpieza periódica con agua y jabón." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las mejores pérgolas para terraza y jardín 2025",
  description: "Comparativa de las mejores pérgolas para terraza y jardín.",
  datePublished: "2025-04-20",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/pergola-terraza",
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
    { "@type": "ListItem", position: 3, name: "Pérgola terraza", item: "https://www.guiadelpiscina.com/pergola-terraza" },
  ],
};

export default function PergolaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Pérgola terraza</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Las mejores pérgolas para terraza y jardín 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 20 abril 2025 · Actualizado: 1 junio 2025 · 10 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            Una <strong>pérgola</strong> transforma cualquier terraza o jardín en un espacio habitable y confortable incluso en los días más calurosos. Ya sea para protegerte del sol, crear un comedor al aire libre o delimitar una zona de descanso junto a la piscina, la pérgola correcta puede multiplicar el valor y el disfrute de tu espacio exterior.
          </p>
          <p>
            En esta guía comparamos los <strong>mejores modelos de pérgola para terraza y jardín</strong> disponibles en Amazon España en 2025, desde opciones económicas por 150€ hasta bioclimáticas premium por más de 1.000€.
          </p>

          <h2>Comparativa — Mejores pérgolas 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Tamaño</th>
                <th className="px-3 py-3 text-left">Cubierta</th>
                <th className="px-3 py-3 text-left">Valoración</th>
                <th className="px-3 py-3 text-left">Comprar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-sky-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600">{p.size}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.roof}</td>
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

        <AdSenseAd slot="5678901234" />

        <div className="prose">
          <h2>Tipos de pérgola: ¿cuál me conviene?</h2>

          <h3>Pérgola clásica abierta</h3>
          <p>
            Estructura con postes y travesaños, sin cubierta impermeable. Perfecta para enredaderas, plantas trepadoras o instalar un toldo a medida. La más económica y versátil.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07RKLM9NQ")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver pérgola clásica en Amazon →
            </a>
          </div>

          <h3>Pérgola con toldo integrado</h3>
          <p>
            Incluye tela o lona que protege de la lluvia y el sol. La tela se puede retirar en invierno para protegerla. Buen equilibrio entre precio y funcionalidad.
          </p>

          <h3>Pérgola bioclimática</h3>
          <p>
            Las más avanzadas: lamas de aluminio orientables que regulan la entrada de luz solar y permiten la ventilación. Algunas incluyen LED integrado, calefactores opcionales y canales para drenaje del agua de lluvia. Perfectas para usar todo el año.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09TKLM8RS")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver pérgola bioclimática en Amazon →
            </a>
          </div>

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

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">→ Mejores muebles de jardín y terraza 2025</Link></li>
            <li><Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">→ Mejor césped artificial para jardín 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
