import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "AIPER Scuba SE: análisis completo y opinión 2026 | Guía del Piscina",
  description:
    "Análisis a fondo del robot limpiafondos AIPER Scuba SE: autonomía de 90 minutos, cobertura, comparativa con otros robots del catálogo (AIPER Scuba S1, WYBOT C2 Vision) y opinión final.",
  keywords:
    "aiper scuba se opinion, mejor robot limpiafondos precio, aiper scuba se analisis, robot piscina inalambrico barato",
  alternates: { canonical: "https://www.guiadelpiscina.com/aiper-scuba-se-analisis" },
  openGraph: {
    title: "AIPER Scuba SE: análisis completo y opinión 2026",
    description:
      "Autonomía, cobertura y comparativa con otros robots limpiafondos del catálogo.",
    url: "https://www.guiadelpiscina.com/aiper-scuba-se-analisis",
  },
};

const comparison = [
  {
    name: "AIPER Scuba SE",
    positioning: "Económico",
    highlight: "El más económico, 90 min de autonomía",
    href: "/tienda/robots-limpiafondos/aiper-scuba-se-robot-piscina",
  },
  {
    name: "Pooleco 10",
    positioning: "Económico, similar",
    highlight: "Mismo rango de precio, autoaparcamiento, marca menos consolidada",
    href: "/tienda/robots-limpiafondos/pooleco-10-robot-limpiafondos-90min",
  },
  {
    name: "AIPER Scuba S1 (2026 Upgrade)",
    positioning: "Alto",
    highlight: "270 min de autonomía, gama alta AIPER",
    href: "/tienda/robots-limpiafondos/aiper-scuba-s1-robot-piscina",
  },
  {
    name: "WYBOT C2 Vision Plus",
    positioning: "Alto",
    highlight: "Cámara con IA, cobertura 210 m²",
    href: "/tienda/robots-limpiafondos/wybot-c2-vision-robot-piscina",
  },
];

const pros = [
  "El robot limpiafondos más económico del catálogo",
  "Un volumen alto de reseñas verificadas con valoración sólida — dato consolidado, no una ficha nueva sin recorrido",
  "90 minutos de autonomía, suficiente para piscinas medianas",
  "Inalámbrico: sin cable que enredar ni necesidad de conexión a la depuradora",
  "Misma marca (AIPER) que el modelo de gama alta del catálogo, con recorrido probado",
];

const cons = [
  "90 minutos de autonomía por debajo de los 270 min del AIPER Scuba S1 (2026 Upgrade)",
  "No incluye cámara con IA ni navegación mapeada como el WYBOT C2 Vision Plus",
  "Para piscinas grandes o muy irregulares, puede necesitar más de un ciclo de carga",
];

const faqs = [
  {
    q: "¿El AIPER Scuba SE limpia paredes o solo el fondo?",
    a: "El Scuba SE está diseñado principalmente para el fondo de la piscina. Para limpieza combinada de fondo y paredes con más potencia de succión, el AIPER Scuba S1 (2026 Upgrade) del catálogo es la opción a considerar, con mayor autonomía y prestaciones.",
  },
  {
    q: "¿Merece la pena pagar más por el AIPER Scuba S1 en vez del SE?",
    a: "Depende del tamaño de la piscina y del uso. Para piscinas desmontables medianas, el SE con sus 90 minutos suele ser suficiente y ofrece la mejor relación calidad-precio del catálogo. Para piscinas grandes o con mucha suciedad acumulada, la autonomía de 270 minutos del S1 evita tener que recargar a mitad de la limpieza.",
  },
  {
    q: "¿Cómo se compara con el Pooleco 10, que tiene el mismo precio?",
    a: "Ambos están en un rango de precio muy similar. El Pooleco 10 tiene, en el momento de esta comparativa, una valoración muy alta pero basada en un volumen de reseñas bajo — insuficiente para sacar conclusiones firmes. El AIPER Scuba SE tiene un volumen de reseñas mucho mayor y una valoración sólida, un dato mucho más consolidado y una marca con más recorrido en el catálogo.",
  },
  {
    q: "¿Necesito palo o red para sacarlo del agua?",
    a: "No: es un robot autónomo que se recoge directamente por su asa una vez terminado el ciclo de limpieza, sin necesidad de un palo telescópico adicional.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AIPER Scuba SE: análisis completo y opinión 2026",
  description:
    "Análisis a fondo del robot limpiafondos AIPER Scuba SE: autonomía, cobertura y comparativa con otros robots del catálogo.",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Comparamos especificaciones técnicas, precios y opiniones verificadas, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["robots limpiafondos", "mantenimiento de piscinas", "depuradoras"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/aiper-scuba-se-analisis",
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
      name: "AIPER Scuba SE análisis",
      item: "https://www.guiadelpiscina.com/aiper-scuba-se-analisis",
    },
  ],
};

export default function AiperScubaSeAnalisisPage() {
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
          <span className="text-gray-600">AIPER Scuba SE análisis</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          AIPER Scuba SE: análisis completo y opinión 2026
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 8 septiembre 2026 · Actualizado: 8 septiembre 2026 · 6 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              El AIPER Scuba SE es el robot limpiafondos <strong>más económico del catálogo</strong> (€149,00) y, con <strong>301 reseñas verificadas y 4,0★</strong>, también el que tiene el dato más consolidado dentro de su rango de precio. Ofrece 90 minutos de autonomía inalámbrica, suficiente para la mayoría de piscinas desmontables y medianas. Si tu piscina es grande o quieres más autonomía, el AIPER Scuba S1 (2026 Upgrade) del mismo catálogo sube a 270 minutos, a un precio bastante superior.
            </p>
          </div>

          <h2>Por qué destaca este producto</h2>
          <p>
            El catálogo de robots limpiafondos de esta web incluye cuatro opciones con enfoques distintos: el Scuba SE (entrada de gama, precio ajustado), el Pooleco 10 (mismo precio, marca menos consolidada), el AIPER Scuba S1 (gama alta de la misma marca, mucha más autonomía) y el WYBOT C2 Vision Plus (tecnología de cámara con IA, el más caro). El Scuba SE es la recomendación por defecto para quien busca automatizar la limpieza del fondo sin gastar de más, con el respaldo de un volumen de reseñas muy superior a las alternativas de precio similar.
          </p>

          <h2>Pros y contras</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-green-50 border border-green-100 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3">✓ A favor</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {pros.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3">✗ En contra</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {cons.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-red-500 shrink-0">✗</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="prose">
          <h2>Comparativa con el resto de robots limpiafondos del catálogo</h2>
          <p>Precio, volumen de reseñas y rating de los cuatro robots limpiafondos disponibles, para decidir con datos y no solo por precio:</p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Producto</th>
                <th className="px-3 py-3 text-left">Posicionamiento de precio</th>
                <th className="px-3 py-3 text-left">Lo que ofrece</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? "bg-sky-50" : "bg-white"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">
                    <Link href={c.href} className="hover:underline hover:text-sky-700">{c.name}</Link>
                  </td>
                  <td className="px-3 py-3 font-bold text-sky-600">{c.positioning}</td>
                  <td className="px-3 py-3 text-gray-600">{c.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="5678901236" />

        <div className="prose">
          <h2>¿Para quién es este robot?</h2>
          <p>
            El AIPER Scuba SE es la opción recomendada para piscinas desmontables o enterradas de tamaño medio, para quien prioriza precio y quiere un robot con reseñas reales que lo respalden. Si tu piscina es grande o tiene mucha suciedad acumulada, la mayor autonomía del{" "}
            <Link href="/tienda/robots-limpiafondos/aiper-scuba-s1-robot-piscina" className="text-sky-600 hover:underline">AIPER Scuba S1</Link>{" "}
            evitará tener que recargarlo a mitad del ciclo. Si además quieres navegación mapeada por cámara, el{" "}
            <Link href="/tienda/robots-limpiafondos/wybot-c2-vision-robot-piscina" className="text-sky-600 hover:underline">WYBOT C2 Vision Plus</Link>{" "}
            es la opción de tecnología más avanzada del catálogo.
          </p>
        </div>

        <div className="not-prose my-6">
          <a
            href={amazonLink("B0D58DGSZK")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver precio actual →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el AIPER Scuba SE</h2>
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
          <p className="text-sm text-gray-600 mb-4">Descubre el resto de robots limpiafondos de nuestra selección.</p>
          <Link href="/tienda/robots-limpiafondos" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver robots limpiafondos →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">→ Mejores robots limpiafondos para piscina 2025</Link></li>
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las 5 mejores depuradoras para piscina 2025</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/robots-limpiafondos" ctaText="Ver robots limpiafondos" />
      </div>
    </div>
    </>
  );
}
