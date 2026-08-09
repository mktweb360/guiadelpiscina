import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Las mejores tumbonas de jardín en 2025 — Comparativa y análisis | Guía del Piscina",
  description:
    "Análisis de las 3 mejores tumbonas de jardín para piscina y terraza en 2025. Comparativa por material, comodidad, resistencia y precio.",
  keywords:
    "mejores tumbonas jardin, tumbona piscina, tumbona aluminio, tumbona plegable jardin",
  alternates: { canonical: "https://www.guiadelpiscina.com/mejores-tumbonas-jardin" },
  openGraph: {
    title: "Las mejores tumbonas de jardín en 2025 — Análisis completo",
    description:
      "Comparativa de las mejores tumbonas de jardín por material, comodidad, resistencia y precio.",
    url: "https://www.guiadelpiscina.com/mejores-tumbonas-jardin",
  },
};

const products = [
  {
    name: "SONGMICS GCB19UV1 — Tumbona reclinable 193 cm",
    asin: "B07M9BG6ZR",
    material: "Acero + textileno",
    cushion: "Sin colchón (textileno)",
    load: "150 kg",
    folding: "Sí",
    price: "≈80€",
  },
  {
    name: "SONGMICS GCB24GY — Tumbona aluminio con colchón",
    asin: "B07LF2FWGR",
    material: "Aluminio",
    cushion: "Colchón 6 cm",
    load: "150 kg",
    folding: "Sí",
    price: "≈130€",
  },
  {
    name: "Keter Jaipur — Tumbona plegable con cojín",
    asin: "B07HP94QTN",
    material: "Resina/plástico",
    cushion: "Cojín gris incluido",
    load: "110 kg",
    folding: "Sí",
    price: "≈110€",
  },
];

const faqs = [
  {
    q: "¿Se pueden dejar las tumbonas de jardín fuera todo el año?",
    a: "Las de aluminio con textileno sí aguantan la intemperie, pero la vida útil se alarga significativamente si se guardan o cubren en invierno. Las de acero sin tratamiento anticorrosión no deben exponerse a la lluvia continuamente.",
  },
  {
    q: "¿Cuántos kilos aguanta una tumbona de jardín?",
    a: "La mayoría de modelos domésticos aguantan entre 100 y 150 kg. Comprueba siempre la especificación de carga máxima antes de comprar.",
  },
  {
    q: "¿Cómo limpiar una tumbona de jardín?",
    a: "Con agua jabonosa y un paño suave. Evita productos abrasivos o disolventes que puedan dañar el tejido y la estructura. Aclara bien y deja secar al aire.",
  },
  {
    q: "¿Qué diferencia hay entre una tumbona y una hamaca de jardín?",
    a: "La tumbona tiene estructura rígida propia y se apoya en el suelo. La hamaca se cuelga entre dos puntos. La tumbona es más versátil y se puede colocar en cualquier lugar.",
  },
  {
    q: "¿Merece la pena una tumbona con parasol integrado?",
    a: "Sí en España, especialmente en verano. El parasol integrado evita tener que comprar una sombrilla aparte y es más práctico al poder orientarlo según el sol sin mover la tumbona.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las mejores tumbonas de jardín en 2025 — Análisis completo",
  description:
    "Análisis de las 3 mejores tumbonas de jardín para piscina y terraza en 2025. Comparativa por material, comodidad, resistencia y precio.",
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/mejores-tumbonas-jardin",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Mejores tumbonas jardín",
      item: "https://www.guiadelpiscina.com/mejores-tumbonas-jardin",
    },
  ],
};

export default function TumbonasJardinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Mejores tumbonas jardín</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Las mejores tumbonas de jardín en 2025 — Análisis completo
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 julio 2025 · Actualizado: 15 julio 2025 · 9 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>Cómo elegir una tumbona de jardín — Guía de compra</h2>
                    <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">Una buena tumbona es la diferencia entre disfrutar del jardín o la piscina y acabar con dolor de espalda. Antes de comprar, fíjate en estos cinco factores:</p>
          </div>
          <ul>
            <li><strong>Material de la estructura:</strong> el <strong>aluminio</strong> es ligero y no se oxida; el <strong>acero</strong> es más barato pero más pesado y necesita tratamiento anticorrosión; el <strong>ratán sintético</strong> es el más estético.</li>
            <li><strong>Capacidad de carga:</strong> busca un mínimo de 100 kg para uso adulto; 150 kg si quieres un margen de seguridad.</li>
            <li><strong>Respaldo regulable:</strong> al menos 4 posiciones para poder pasar de sentado a completamente tumbado.</li>
            <li><strong>Plegable:</strong> imprescindible si vas a guardarla en invierno o tienes espacio limitado.</li>
            <li><strong>Parasol integrado:</strong> un extra muy útil en el verano español para tener sombra sin depender de una sombrilla aparte.</li>
          </ul>

          <h2>Comparativa de las 3 mejores tumbonas</h2>
          <p>Estas son las tres tumbonas que mejor combinan comodidad, resistencia y precio:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Material estructura</th>
                <th className="px-3 py-3 text-left">Colchón/Cojín</th>
                <th className="px-3 py-3 text-left">Carga máx.</th>
                <th className="px-3 py-3 text-left">Plegable</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600">{p.cushion}</td>
                  <td className="px-3 py-3 text-gray-600">{p.load}</td>
                  <td className="px-3 py-3 text-gray-600">{p.folding}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="nofollow noopener noreferrer sponsored"
                      className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                      Ver precio →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="8901234567" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>SONGMICS GCB19UV1 — La más vendida en España</h3>
          <p>
            La <strong>SONGMICS GCB19UV1</strong> es la tumbona más vendida por una razón: ofrece lo esencial a un precio imbatible. Con 193 cm de longitud, estructura de acero robusta y tejido textileno transpirable, aguanta hasta 150 kg y se reclina en varias posiciones. Se pliega fácilmente para guardarla en invierno.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07M9BG6ZR")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver SONGMICS GCB19UV1 en Amazon →
            </a>
          </div>

          <h3>SONGMICS GCB24GY — La más cómoda (colchón 6 cm)</h3>
          <p>
            La <strong>SONGMICS GCB24GY</strong> sube el nivel de confort con un colchón acolchado de 6 cm y estructura de aluminio que no se oxida ni pesa. Es la elección ideal si buscas comodidad para siestas largas junto a la piscina y no te importa invertir algo más.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07LF2FWGR")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver SONGMICS GCB24GY en Amazon →
            </a>
          </div>

          <h3>Keter Jaipur — La más resistente</h3>
          <p>
            La <strong>Keter Jaipur</strong> apuesta por la resina de alta resistencia con acabado tipo ratán, muy resistente a la intemperie y con un mantenimiento mínimo. Incluye cojín gris y se pliega para guardarla. Perfecta para quien prioriza durabilidad y estética sobre el precio más bajo.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07HP94QTN")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Keter Jaipur en Amazon →
            </a>
          </div>

          <h2>¿Tumbona de aluminio o de plástico?</h2>
          <p>Es la duda más habitual. Aquí tienes la comparativa rápida:</p>
          <ul>
            <li><strong>Aluminio:</strong> dura más de 10 años, no se oxida y es ligero. Es más caro, pero la mejor inversión a largo plazo.</li>
            <li><strong>Plástico/resina:</strong> más económico y con menos mantenimiento, pero estéticamente menos cuidado y con una vida útil de 3-5 años si se expone mucho al sol.</li>
          </ul>

          <h2>Cómo proteger tu tumbona en invierno</h2>
          <ol>
            <li><strong>Limpia</strong> la estructura y el tejido con agua jabonosa y deja secar por completo.</li>
            <li><strong>Pliega</strong> la tumbona para reducir el espacio que ocupa.</li>
            <li><strong>Guárdala</strong> en un lugar cubierto o cúbrela con una funda impermeable si tiene que quedarse a la intemperie.</li>
          </ol>

          <h2>Preguntas frecuentes sobre tumbonas de jardín</h2>
        </div>

        {/* FAQ */}
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
          <p className="text-sm text-gray-600 mb-4">Las mejores tumbonas y muebles de jardín para tu terraza o piscina.</p>
          <Link href="/tienda/muebles-jardin" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver tumbonas y muebles de jardín →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">→ Mejores muebles de jardín y terraza 2025</Link></li>
            <li><Link href="/pergola-terraza" className="text-sky-600 hover:underline">→ Las mejores pérgolas para terraza y jardín 2025</Link></li>
            <li><Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">→ Mejor césped artificial para jardín 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
