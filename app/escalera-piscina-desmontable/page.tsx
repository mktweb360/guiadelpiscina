import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejor escalera piscina desmontable 2025 — Guía de compra | Guía del Piscina",
  description:
    "Las 3 mejores escaleras para piscina desmontable en 2025. Comparativa Intex vs Bestway por altura, seguridad, materiales y precio.",
  keywords:
    "escalera piscina desmontable, escalera intex, escalera bestway, escalera seguridad piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/escalera-piscina-desmontable" },
  openGraph: {
    title: "Mejor escalera para piscina desmontable en 2025 — Comparativa completa",
    description:
      "Comparativa Intex vs Bestway de escaleras para piscina desmontable por altura, seguridad y precio.",
    url: "https://www.guiadelpiscina.com/escalera-piscina-desmontable",
  },
};

const products = [
  {
    name: "Intex 55058 — Escalera acero 122 cm",
    asin: "B0195A925O",
    height: "Hasta 122 cm",
    material: "Acero",
    safety: "Peldaños antideslizantes",
    steps: "2 x 3 peldaños",
    price: "≈45€",
  },
  {
    name: "Bestway Flowclear — Escalera seguridad 84 cm",
    asin: "B08CB3VBRJ",
    height: "Hasta 84 cm",
    material: "Acero + resina",
    safety: "Peldaños antideslizantes",
    steps: "2 x 2 peldaños",
    price: "≈35€",
  },
  {
    name: "Bestway Flowclear — Escalera Flip&Lock 107 cm",
    asin: "B095XPMKPX",
    height: "Hasta 107 cm",
    material: "Acero + resina",
    safety: "Flip&Lock (bloqueo infantil)",
    steps: "2 x 3 peldaños",
    price: "≈55€",
  },
];

const faqs = [
  {
    q: "¿Puedo poner una escalera Intex en una piscina Bestway?",
    a: "No directamente. Los tubos tienen diámetros distintos (32 mm vs 38 mm). Existen adaptadores, pero no siempre encajan bien. Lo más seguro es usar la escalera de la misma marca que la piscina.",
  },
  {
    q: "¿Cuánto peso aguanta una escalera de piscina desmontable?",
    a: "La mayoría aguantan entre 80 y 120 kg. Comprueba siempre la especificación del fabricante antes de comprarla.",
  },
  {
    q: "¿Hay que quitar la escalera cuando no se usa la piscina?",
    a: "Sí, es recomendable retirarla para evitar que los niños accedan solos a la piscina. Los modelos con sistema Flip&Lock permiten bloquear los escalones exteriores sin desmontar la escalera completa.",
  },
  {
    q: "¿Las escaleras de piscina tienen los peldaños antideslizantes?",
    a: "La mayoría sí, especialmente las de marcas reconocidas como Intex y Bestway. Es un requisito de seguridad importante: comprueba que lo mencione en las especificaciones.",
  },
  {
    q: "¿Qué pasa si mi piscina tiene 100 cm de alto y la escalera llega a 107 cm?",
    a: "Funciona perfectamente. Lo importante es que la escalera llegue al menos a la altura del borde. Si es unos centímetros más alta, simplemente ajusta los pies o la posición de enganche.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejor escalera para piscina desmontable en 2025 — Comparativa completa",
  description:
    "Las 3 mejores escaleras para piscina desmontable en 2025. Comparativa Intex vs Bestway por altura, seguridad, materiales y precio.",
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/escalera-piscina-desmontable",
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
      name: "Escalera piscina desmontable",
      item: "https://www.guiadelpiscina.com/escalera-piscina-desmontable",
    },
  ],
};

export default function EscaleraPiscinaPage() {
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
          <span className="text-gray-600">Escalera piscina desmontable</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejor escalera para piscina desmontable en 2025 — Comparativa completa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 julio 2025 · Actualizado: 15 julio 2025 · 8 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>¿Por qué es imprescindible una escalera en la piscina desmontable?</h2>
          <p>
            Una escalera no es un accesorio opcional: es un elemento de <strong>seguridad</strong> imprescindible en cualquier piscina desmontable. Permite entrar y salir del agua sin riesgo de caídas, y es prácticamente obligatoria en piscinas de más de 60 cm de altura, especialmente si hay niños.
          </p>
          <p>
            Además, evita un problema muy común: <strong>apoyarse en el borde de la piscina para salir</strong>, lo que fuerza la estructura y puede dañar el liner con el tiempo. Con una buena escalera, la piscina dura más y el baño es mucho más seguro.
          </p>

          <h2>Cómo elegir la escalera correcta para tu piscina</h2>
          <ol>
            <li><strong>Mide la altura exacta de tu piscina.</strong> La escalera debe llegar al menos a la altura del borde.</li>
            <li><strong>Comprueba el diámetro del tubo.</strong> Intex usa 32 mm y Bestway 38 mm: <strong>no son compatibles entre sí</strong>.</li>
            <li><strong>Valora el sistema de seguridad infantil.</strong> Los escalones interiores desmontables o el bloqueo Flip&amp;Lock impiden que los niños suban solos.</li>
            <li><strong>Fíjate en el material.</strong> El acero galvanizado dura mucho más que el plástico y aguanta más peso.</li>
          </ol>

          <h2>Comparativa de las 3 mejores escaleras</h2>
          <p>Estas son las tres escaleras que recomendamos según la altura de tu piscina y tus necesidades de seguridad:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Altura piscina compatible</th>
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Sistema seguridad niños</th>
                <th className="px-3 py-3 text-left">Peldaños</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.height}</td>
                  <td className="px-3 py-3 text-gray-600">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600">{p.safety}</td>
                  <td className="px-3 py-3 text-gray-600">{p.steps}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
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

        <AdSenseAd slot="0123456789" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>Intex 55058 — Para piscinas hasta 122 cm (la más alta)</h3>
          <p>
            La <strong>Intex 55058</strong> es la escalera de mayor altura del comparativo, apta para piscinas de hasta 122 cm. Fabricada en acero con peldaños anchos antideslizantes, es robusta y estable. Es la elección para las piscinas desmontables Intex más altas, como las de la gama Ultra o Prism Frame.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B0195A925O")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Intex 55058 en Amazon →
            </a>
          </div>

          <h3>Bestway Flowclear 84 cm — Para piscinas estándar, mejor precio</h3>
          <p>
            La <strong>Bestway Flowclear de 84 cm</strong> es la opción más económica, perfecta para piscinas Bestway de altura estándar. Combina estructura de acero con peldaños de resina antideslizante, y su precio ajustado la convierte en la mejor compra para piscinas de tamaño medio.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08CB3VBRJ")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway Flowclear 84 cm en Amazon →
            </a>
          </div>

          <h3>Bestway Flip&amp;Lock 107 cm — La más segura para niños</h3>
          <p>
            La <strong>Bestway Flip&amp;Lock de 107 cm</strong> destaca por su sistema de seguridad: los escalones exteriores se pueden plegar y bloquear para impedir que los niños accedan a la piscina sin supervisión, sin necesidad de desmontar toda la escalera. Es la opción más segura para familias con niños pequeños.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B095XPMKPX")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway Flip&amp;Lock en Amazon →
            </a>
          </div>

          <h2>Intex vs Bestway — ¿Son compatibles las escaleras?</h2>
          <p>
            Es la duda más frecuente, y la respuesta corta es <strong>no</strong>. Los tubos de las escaleras Intex y Bestway tienen diámetros diferentes: la escalera <strong>Intex usa tubo de 32 mm</strong> y solo encaja bien en piscinas Intex, mientras que la <strong>Bestway usa 38 mm</strong> y está pensada para piscinas Bestway. Existen adaptadores en el mercado, pero no siempre funcionan bien ni ofrecen la misma estabilidad. La recomendación es clara: usa siempre la escalera de la misma marca que tu piscina.
          </p>

          <h2>Cómo instalar la escalera en la piscina desmontable</h2>
          <ol>
            <li><strong>Monta la estructura</strong> siguiendo las instrucciones, uniendo los peldaños al bastidor.</li>
            <li><strong>Engancha la escalera al borde exterior</strong> de la piscina, apoyando los tramos interior y exterior.</li>
            <li><strong>Ajusta la altura</strong> con los pies regulables para que quede firme y a nivel.</li>
            <li><strong>Comprueba la estabilidad</strong> ejerciendo peso antes del primer uso: no debe moverse ni bascular.</li>
          </ol>

          <h2>Preguntas frecuentes sobre escaleras de piscina desmontable</h2>
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

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes 2025</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las 5 mejores depuradoras para piscina 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
