import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Agua piscina verde: causas y solución definitiva 2025 | Guía del Piscina",
  description:
    "¿El agua de tu piscina se ha puesto verde? Descubre las causas, el protocolo de choque para recuperarla en 24-48h y cómo evitar que vuelva a ocurrir.",
  keywords:
    "agua piscina verde, piscina verde solucion, cloro de choque piscina, antialgas piscina, algas piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/agua-piscina-verde" },
  openGraph: {
    title: "Agua de la piscina verde: causas, solución paso a paso y cómo evitarlo",
    description:
      "Causas del agua verde, protocolo de choque para recuperarla en 24-48h y cómo prevenir que vuelva.",
    url: "https://www.guiadelpiscina.com/agua-piscina-verde",
  },
};

const products = [
  {
    name: "Tamar Cloro 5 Acciones — Pastillas multifunción 5kg",
    asin: "B0797MNJMY",
    use: "Elimina algas y bacterias de golpe",
    when: "Al inicio del tratamiento de choque",
  },
  {
    name: "Algicida Extra Sunclor 5L — Antialgas piscina",
    asin: "B0BYT9PMX4",
    use: "Remata las algas y previene su reaparición",
    when: "Tras el cloro de choque",
  },
  {
    name: "Intex 26670 — Clorador salino ECO 12 g/h",
    asin: "B07C9JL6RZ",
    use: "Desinfección automática y continua",
    when: "Como prevención a largo plazo",
  },
];

const greenTypes = [
  { color: "Verde claro / turquesa", meaning: "Algas al inicio", time: "Tratable en 24 h" },
  { color: "Verde oscuro / opaco", meaning: "Colonia de algas avanzada", time: "48-72 h de tratamiento" },
  { color: "Verde-negro en paredes", meaning: "Algas adheridas", time: "Requiere cepillado intenso" },
];

const faqs = [
  {
    q: "¿Cuánto tarda en recuperarse una piscina verde?",
    a: "Con tratamiento de choque correcto, entre 24 y 72 horas según la gravedad. Mantén la depuradora funcionando continuamente durante ese periodo.",
  },
  {
    q: "¿Es peligroso bañarse en una piscina verde?",
    a: "Sí. Las algas pueden albergar bacterias perjudiciales. Espera a que el agua esté transparente y el cloro en rango (1-3 ppm) antes de bañarte.",
  },
  {
    q: "¿Por qué el agua se vuelve verde aunque eche cloro?",
    a: "Probablemente el pH está fuera de rango. Con pH alto (>7,8), el cloro pierde hasta el 80% de su eficacia. Ajusta siempre el pH antes de añadir cloro.",
  },
  {
    q: "¿Puedo usar lejía doméstica para tratar el agua verde?",
    a: "No es recomendable. La lejía doméstica no está formulada para piscinas y puede dañar el liner. Usa siempre productos específicos de piscina.",
  },
  {
    q: "¿El clorador salino previene el agua verde?",
    a: "Sí, si está bien dimensionado para tu piscina. Al generar cloro de forma continua, mantiene niveles estables y reduce drásticamente las probabilidades de proliferación de algas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Agua de la piscina verde: causas, solución paso a paso y cómo evitarlo",
  description:
    "¿El agua de tu piscina se ha puesto verde? Descubre las causas, el protocolo de choque para recuperarla en 24-48h y cómo evitar que vuelva a ocurrir.",
  datePublished: "2025-07-05",
  dateModified: "2025-07-05",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/agua-piscina-verde",
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
      name: "Agua piscina verde",
      item: "https://www.guiadelpiscina.com/agua-piscina-verde",
    },
  ],
};

export default function AguaPiscinaVerdePage() {
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
          <span className="text-gray-600">Agua piscina verde</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Agua de la piscina verde: causas, solución paso a paso y cómo evitarlo
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 5 julio 2025 · Actualizado: 5 julio 2025 · 8 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>Por qué se pone verde el agua de la piscina</h2>
          <p>
            El agua verde tiene un único culpable: las <strong>algas</strong>. Estos microorganismos están siempre presentes en pequeñas cantidades, pero proliferan de forma explosiva cuando encuentran las condiciones adecuadas. La causa principal es casi siempre la misma: <strong>falta de cloro, pH incorrecto o filtración insuficiente</strong>, que permiten a las algas multiplicarse sin freno.
          </p>
          <p>Existen también causas secundarias que aceleran el proceso:</p>
          <ul>
            <li><strong>Calor extremo:</strong> las altas temperaturas aceleran el crecimiento de las algas y consumen el cloro más rápido.</li>
            <li><strong>Lluvia intensa:</strong> diluye el cloro y aporta materia orgánica y nutrientes al agua.</li>
            <li><strong>Falta de filtración:</strong> si la depuradora no funciona las horas suficientes, el agua se estanca.</li>
            <li><strong>Piscina tapada sin circulación:</strong> el agua sin movimiento y con calor es el escenario perfecto para las algas.</li>
          </ul>

          <h2>Tipos de verde: diagnóstico rápido</h2>
          <p>El color y la intensidad del verde te dicen cómo de avanzado está el problema y cuánto tardarás en resolverlo:</p>
        </div>

        {/* Green diagnosis table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Aspecto del agua</th>
                <th className="px-3 py-3 text-left">Qué significa</th>
                <th className="px-3 py-3 text-left">Tiempo de recuperación</th>
              </tr>
            </thead>
            <tbody>
              {greenTypes.map((g, i) => (
                <tr key={g.color} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-green-700">{g.color}</td>
                  <td className="px-3 py-3 text-gray-600">{g.meaning}</td>
                  <td className="px-3 py-3 font-bold text-sky-600">{g.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Protocolo de choque: recupera tu piscina en 48 horas</h2>
          <p>Sigue estos pasos en orden. No te saltes el primero: sin el pH ajustado, el resto del tratamiento pierde casi toda su eficacia.</p>
          <ol>
            <li><strong>Mide y ajusta el pH</strong> con objetivo de 7,2-7,4, el rango en el que el cloro actúa al máximo de su potencia.</li>
            <li><strong>Aplica cloro de choque</strong> (hipoclorito cálcico o pastillas de choque) hasta alcanzar 3-5 ppm de cloro libre.</li>
            <li><strong>Activa la <Link href="/tienda/depuradoras" className="text-sky-700 hover:underline">depuradora de arena</Link> al máximo</strong>, 24 horas continuas, para hacer circular y filtrar todo el agua.</li>
            <li><strong>Cepilla paredes y fondo</strong> para desprender las algas adheridas y exponerlas al cloro.</li>
            <li><strong>Añade algicida (antialgas)</strong> para rematar las algas y frenar su reaparición.</li>
            <li><strong>Espera 24-48 h y comprueba.</strong> Si el agua está turbia pero ya no verde, el tratamiento está funcionando: las algas han muerto y solo falta filtrarlas.</li>
            <li><strong>Limpia o retrolava el filtro</strong> para expulsar las algas muertas acumuladas.</li>
          </ol>
        </div>

        {/* Recommended products table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Producto</th>
                <th className="px-3 py-3 text-left">Para qué sirve</th>
                <th className="px-3 py-3 text-left">Cuándo usarlo</th>
                <th className="px-3 py-3 text-left">Ver en Amazon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.use}</td>
                  <td className="px-3 py-3 text-gray-600">{p.when}</td>
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

        <AdSenseAd slot="5678901234" />

        <div className="prose">
          <h2>Cómo evitar que vuelva a ocurrir</h2>
          <p>
            Recuperar una piscina verde cuesta tiempo, productos y dinero. Prevenir es mucho más fácil y barato. Con estas cuatro reglas es prácticamente imposible que el agua se vuelva a poner verde:
          </p>
          <ul>
            <li><strong>Mantén el pH estable</strong> entre 7,2 y 7,6.</li>
            <li><strong>Mantén el cloro libre</strong> entre 1 y 3 ppm en todo momento.</li>
            <li><strong>Filtra al menos 8-12 horas diarias</strong> en verano.</li>
            <li><strong>Instala un clorador salino</strong> para automatizar la desinfección y olvidarte de las pastillas.</li>
          </ul>
          <p>
            La mejor prevención es una buena rutina. Te la explicamos completa en nuestra{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">
              guía de mantenimiento de piscinas desmontables
            </Link>
            .
          </p>
        </div>

        <div className="not-prose my-6">
          <Link
            href="/mantenimiento-piscina-desmontable"
            className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl transition-colors"
          >
            Ver guía de mantenimiento paso a paso →
          </Link>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el agua verde de la piscina</h2>
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
          <p className="text-sm text-gray-600 mb-4">Una buena depuradora es la mejor prevención contra el agua verde.</p>
          <Link href="/tienda/depuradoras" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver depuradoras de piscina →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: cómo medirlo y corregirlo</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las 5 mejores depuradoras para piscina 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
