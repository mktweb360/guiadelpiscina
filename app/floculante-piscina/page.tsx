import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Floculante para piscina: cuándo usarlo y cómo aplicarlo (2025) | Guía del Piscina",
  description:
    "Qué es el floculante para piscina, cuándo usarlo, cómo aplicarlo paso a paso y diferencia con el clarificante. Agua cristalina en 48h.",
  keywords:
    "floculante piscina, como usar floculante piscina, floculante vs clarificante, piscina turbia floculante, aplicar floculante piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/floculante-piscina" },
  openGraph: {
    title: "Floculante para piscina: cuándo usarlo y cómo aplicarlo (2025)",
    description:
      "Qué es el floculante para piscina, cuándo usarlo, cómo aplicarlo paso a paso y diferencia con el clarificante. Agua cristalina en 48h.",
    url: "https://www.guiadelpiscina.com/floculante-piscina",
  },
};

const comparativaRows = [
  {
    producto: "Floculante",
    cuando: "Turbidez grave",
    metodo: "Recirculación + aspiración al desagüe",
    tiempo: "24–48 h",
  },
  {
    producto: "Clarificante",
    cuando: "Turbidez leve",
    metodo: "Filtración normal",
    tiempo: "3–5 días (gradual)",
  },
];

const faqs = [
  {
    q: "¿Cuánto floculante echar en una piscina de 30.000 litros?",
    a: "Unos 300 ml de floculante líquido (a razón de 100 ml por cada 10 m³). Si usas tabletas de floculante, una tableta por cada 25 m³, es decir, algo más de una tableta para 30.000 litros.",
  },
  {
    q: "¿Cuántas horas necesita el floculante para actuar?",
    a: "Tras añadir el floculante en modo recirculación y circular 2 horas, necesitas un reposo de 24 a 48 horas sin mover el agua para que los grumos sedimenten completamente en el fondo.",
  },
  {
    q: "¿Puedo bañarme después de usar floculante?",
    a: "Sí, una vez que el agua esté visualmente cristalina y hayas completado el proceso (aspirado al desagüe, retrolavado y vuelta a filtración normal). Comprueba también que el cloro libre está entre 1 y 3 ppm.",
  },
  {
    q: "¿Puedo usar floculante y cloro juntos?",
    a: "Sí, pero el orden importa. Ajusta primero el pH a 7,2-7,6, luego aplica el cloro si es necesario y por último el floculante. El floculante no interfiere con el cloro, pero trabaja mejor con el pH ajustado.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Floculante para piscina: cuándo usarlo y cómo aplicarlo (2025)",
  description:
    "Qué es el floculante para piscina, cuándo usarlo, cómo aplicarlo paso a paso y diferencia con el clarificante. Agua cristalina en 48h.",
  datePublished: "2025-08-01",
  dateModified: "2025-08-01",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/floculante-piscina",
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
      name: "Floculante para piscina",
      item: "https://www.guiadelpiscina.com/floculante-piscina",
    },
  ],
};

export default function FloculantePiscinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10 lg:items-start">
        <article>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Floculante para piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Floculante para piscina: cuándo usarlo y cómo aplicarlo (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 agosto 2025 · Actualizado: 1 agosto 2025 · 8 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>
        <img
          src="/images/blog/floculante-piscina.jpg"
          alt="Floculante para piscina: cuándo usarlo y cómo aplicarlo"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <div className="prose">
                    <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">El floculante es un producto que <strong>agrupa las partículas en suspensión</strong> —las que enturbian el agua pero son demasiado pequeñas para que el filtro las retenga— en grumos más grandes que sí pueden sedimentar o ser capturados. Es necesario cuando el agua está turbia pero el cloro ya está en niveles correctos: el problema no es bacteriológico, sino de partículas finas que el filtro no puede atrapar solo.</p>
          </div>

          <h2>Floculante vs clarificante: cuál usar en cada caso</h2>
          <p>
            Son productos distintos para grados distintos de turbidez. Confundirlos es el error más habitual:
          </p>
        </div>

        {/* Comparativa table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Producto</th>
                <th className="px-3 py-3 text-left">Cuándo usarlo</th>
                <th className="px-3 py-3 text-left">Método</th>
                <th className="px-3 py-3 text-left">Tiempo</th>
              </tr>
            </thead>
            <tbody>
              {comparativaRows.map((row, i) => (
                <tr key={row.producto} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.producto}</td>
                  <td className="px-3 py-3 text-gray-600">{row.cuando}</td>
                  <td className="px-3 py-3 text-gray-600">{row.metodo}</td>
                  <td className="px-3 py-3 text-sky-700 font-medium">{row.tiempo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Cuándo usar floculante en tu piscina</h2>
          <p>Recurre al floculante cuando se den estas situaciones:</p>
          <ul>
            <li>El agua está <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">turbia</Link> y no mejora tras 48 horas con los niveles de cloro correctos</li>
            <li>Después de una tormenta o lluvia fuerte que haya arrastrado tierra y materia orgánica</li>
            <li>Al principio de temporada, si la piscina ha estado mucho tiempo sin agua limpia</li>
            <li>Cuando el <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">filtro de arena</Link> está desgastado y no filtra bien partículas finas</li>
          </ul>

          <h2>Cómo aplicar floculante: paso a paso</h2>
          <p>El proceso es más delicado que el del clarificante. Sigue este orden exacto para que funcione:</p>
          <ol>
            <li><strong>Comprueba el <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH</Link>:</strong> debe estar entre 7,2 y 7,6. Si está fuera de rango, ajústalo antes de continuar.</li>
            <li><strong>Retrolavado del filtro:</strong> limpia el filtro antes de empezar para que trabaje en óptimas condiciones.</li>
            <li><strong>Añade el floculante:</strong> floculante líquido, 100 ml por cada 10 m³; tabletas de floculante, 1 tableta por cada 25 m³. Viértelo por el prefiltro de la bomba o directamente en el agua.</li>
            <li><strong>Pon la bomba en posición RECIRCULACIÓN</strong> (no en filtración). Esta posición hace circular el agua sin que pase por el lecho de arena, evitando que los grumos queden atrapados en el filtro antes de sedimentar.</li>
            <li><strong>Circula 2 horas</strong> con la bomba en recirculación.</li>
            <li><strong>Para la bomba y deja reposar 24–48 horas</strong> sin tocar el agua. No entres a la piscina, no la cepilles. Los grumos necesitan sedimentar completamente en el fondo.</li>
            <li><strong>Aspira el fondo manualmente</strong> con la válvula del filtro en posición DESAGÜE (no en filtración). Esto elimina los grumos directamente sin que vuelvan al agua.</li>
            <li><strong>Retrolavado final</strong> y vuelta a filtración normal. Comprueba pH y cloro antes de bañarte.</li>
          </ol>

          <h2>Errores que arruinan el floculante</h2>
          <ul>
            <li><strong>pH superior a 7,8:</strong> el floculante no trabaja correctamente. El pH es el paso previo obligatorio.</li>
            <li><strong>Filtrar en vez de recircular:</strong> si pones la bomba en filtración, los grumos quedan atrapados en la arena del filtro antes de sedimentar y el tratamiento falla.</li>
            <li><strong>No aspirar al desagüe:</strong> si aspiras en modo filtración, los grumos se rompen al pasar por la bomba y vuelven al agua. Siempre en posición desagüe.</li>
          </ul>
          <p>
            Si el agua sigue turbia después del proceso, revisa las <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">dosis de cloro</Link> y el estado del filtro, y repite si es necesario.
          </p>

          <h2>Preguntas frecuentes sobre el floculante</h2>
        </div>

        <AdSenseAd slot="6789012345" />

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

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver también</h3>
          <ul className="space-y-2">
            <li><Link href="/tienda/depuradoras" className="text-sky-600 hover:underline font-medium">→ Las mejores depuradoras de piscina</Link></li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: valores ideales y cómo corregirlo</Link></li>
            <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ ¿Cuánto cloro echar en la piscina? Dosis exactas</Link></li>
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/algas-piscina" className="text-sky-600 hover:underline">→ Algas en la piscina: cómo eliminarlas y evitar que vuelvan</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda" ctaText="Ver productos recomendados" />
      </div>
    </div>
    </>
  );
}
