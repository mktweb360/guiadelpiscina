import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Algas en la piscina: cómo eliminarlas y evitar que vuelvan (2025) | Guía del Piscina",
  description:
    "Identifica y elimina algas verdes, negras y mostaza de tu piscina paso a paso. Tratamiento de choque + prevención definitiva.",
  keywords:
    "algas piscina, eliminar algas piscina, algas verdes piscina, algas negras piscina, piscina con algas tratamiento",
  alternates: { canonical: "https://www.guiadelpiscina.com/algas-piscina" },
  openGraph: {
    title: "Algas en la piscina: cómo eliminarlas y evitar que vuelvan (2025)",
    description:
      "Identifica y elimina algas verdes, negras y mostaza de tu piscina paso a paso. Tratamiento de choque + prevención definitiva.",
    url: "https://www.guiadelpiscina.com/algas-piscina",
  },
};

const tiposAlgas = [
  {
    tipo: "Verdes",
    descripcion: "Agua verde esmeralda uniforme",
    dificultad: "Fácil",
    tratamiento: "Choque de cloro estándar (10 g/m³)",
  },
  {
    tipo: "Mostaza / Amarillas",
    descripcion: "Manchas en paredes y esquinas",
    dificultad: "Media",
    tratamiento: "Algicida específico para mostaza + choque",
  },
  {
    tipo: "Negras",
    descripcion: "Puntos negros en grietas y rugosidades",
    dificultad: "Difícil",
    tratamiento: "Cepillado intenso + algicida de penetración",
  },
];

const faqs = [
  {
    q: "¿Cuánto tardan en desaparecer las algas con el tratamiento de choque?",
    a: "Con un choque de cloro correcto (pH ajustado a 7,2-7,4 y dosis de 10 g/m³), las algas verdes mueren en 12-24 horas. El agua puede tardar 24-72 horas en volver a ser cristalina, dependiendo del grado de infestación y del filtrado posterior.",
  },
  {
    q: "¿Me puedo bañar en una piscina con algas?",
    a: "No es recomendable. Las aguas con proliferación de algas suelen tener también niveles bajos de cloro, lo que permite la presencia de bacterias. Espera a completar el tratamiento y a que el agua esté visualmente limpia y el cloro libre entre 1-3 ppm.",
  },
  {
    q: "¿Puede el agua de la piscina volver a ser cristalina después de las algas?",
    a: "Sí, completamente. Con el protocolo correcto (choque de cloro + floculante + aspiración al desagüe + retrolavado), el agua puede quedar cristalina en 48-72 horas incluso en los casos más graves.",
  },
  {
    q: "¿Qué pasa si no trato las algas?",
    a: "En 48-72 horas sin tratamiento, la piscina puede pasar de agua ligeramente verde a verde oscuro opaco. Las algas consumen el cloro residual, lo que facilita la proliferación bacteriana. El proceso de recuperación es más largo y costoso cuanto más se deja avanzar.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Algas en la piscina: cómo eliminarlas y evitar que vuelvan (2025)",
  description:
    "Identifica y elimina algas verdes, negras y mostaza de tu piscina paso a paso. Tratamiento de choque + prevención definitiva.",
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
  mainEntityOfPage: "https://www.guiadelpiscina.com/algas-piscina",
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
      name: "Algas en la piscina",
      item: "https://www.guiadelpiscina.com/algas-piscina",
    },
  ],
};

export default function AlgasPiscinaPage() {
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
          <span className="text-gray-600">Algas en la piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Algas en la piscina: cómo eliminarlas y evitar que vuelvan (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 agosto 2025 · Actualizado: 1 agosto 2025 · 9 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>
        <img
          src="/images/blog/algas-piscina.jpg"
          alt="Algas en la piscina: cómo eliminarlas y evitar que vuelvan"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <div className="prose">
                    <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">Las algas proliferan cuando el cloro cae por debajo de <strong>1 ppm</strong>, el <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH</Link> sube por encima de 7,8 o la circulación del agua es insuficiente. Son distintas de la turbidez por partículas: mientras que el agua turbia sin algas puede ser blanca o grisácea, las algas tiñen el agua de <strong>verde intenso</strong> o dejan <strong>manchas visibles</strong> en paredes y fondo. Identificar el tipo correcto es el primer paso para tratarlas eficazmente.</p>
          </div>

          <h2>Tipos de algas en piscinas</h2>
        </div>

        {/* Tipos de algas table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Aspecto</th>
                <th className="px-3 py-3 text-left">Dificultad</th>
                <th className="px-3 py-3 text-left">Tratamiento</th>
              </tr>
            </thead>
            <tbody>
              {tiposAlgas.map((row, i) => (
                <tr key={row.tipo} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.tipo}</td>
                  <td className="px-3 py-3 text-gray-600">{row.descripcion}</td>
                  <td className={`px-3 py-3 font-medium ${row.dificultad === "Fácil" ? "text-green-600" : row.dificultad === "Media" ? "text-orange-500" : "text-red-600"}`}>
                    {row.dificultad}
                  </td>
                  <td className="px-3 py-3 text-gray-600">{row.tratamiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Tratamiento paso a paso (algas verdes)</h2>
          <p>Las algas verdes son las más comunes y responden bien al choque de cloro si se aplica correctamente:</p>
          <ol>
            <li><strong>Para la bomba y mide el pH:</strong> ajusta a 7,2-7,4 antes de cualquier cosa. Con pH alto el cloro no funciona. Usa <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH minus</Link> si es necesario.</li>
            <li><strong>Cepilla todas las paredes y el fondo:</strong> esto suelta las algas adheridas y las pone en suspensión donde el cloro puede alcanzarlas.</li>
            <li><strong>Choque de cloro:</strong> añade 10 g/m³ de cloro granulado, disuelto previamente en un cubo. Con la bomba en marcha.</li>
            <li><strong>Deja la bomba 24 horas continuas:</strong> la circulación constante distribuye el cloro y acelera la eliminación.</li>
            <li><strong>A las 12 horas, añade <Link href="/floculante-piscina" className="text-sky-600 hover:underline">floculante</Link>:</strong> pon la bomba en recirculación durante 2 horas para que agrupe los restos de algas muertas.</li>
            <li><strong>Reposo de 24 horas:</strong> deja sedimentar sin mover el agua.</li>
            <li><strong>Aspira el fondo al desagüe:</strong> elimina todos los restos sedimentados. No uses filtración para esta operación.</li>
            <li><strong>Retrolavado del <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">filtro</Link>:</strong> limpia a fondo el filtro de arena para eliminar los restos que hayan pasado.</li>
            <li><strong>Algicida preventivo:</strong> añade 100 ml por cada 30 m³ una vez a la semana para evitar que vuelvan.</li>
          </ol>

          <h2>Por qué vuelven las algas</h2>
          <p>Si las algas aparecen una y otra vez, el problema es estructural. Las causas más comunes:</p>
          <ul>
            <li><strong>Cloro por debajo de 1 ppm:</strong> mantén siempre entre 1 y 3 ppm con mediciones regulares. Revisa las <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">dosis de cloro correctas</Link> para tu piscina.</li>
            <li><strong>pH alto (por encima de 7,8):</strong> con pH 8,0, el cloro pierde hasta el 90% de su eficacia como desinfectante.</li>
            <li><strong>Menos de 8 horas de filtración diaria en verano:</strong> el agua estancada favorece la proliferación.</li>
            <li><strong>Sin algicida preventivo:</strong> el algicida semanal crea una barrera química que dificulta el anclaje de las algas.</li>
            <li><strong>Cremas solares y protectores:</strong> reducen el cloro disponible; compensa con una medición más frecuente en días de mucho baño.</li>
          </ul>

          <h2>Algas vs turbidez por calcio: cómo distinguirlas</h2>
          <ul>
            <li><strong>Algas:</strong> color verde intenso, paredes resbaladizas al tacto, olor a lago o estanque.</li>
            <li><strong>Turbidez por calcio o partículas:</strong> color blanco-grisáceo o lechoso, paredes no resbaladizas, sin olor característico.</li>
          </ul>
          <p>
            Si el agua es blanca o grisácea pero no huele a lago y las paredes no resbalan, el problema puede ser de alcalinidad o de partículas finas. En ese caso, el <Link href="/floculante-piscina" className="text-sky-600 hover:underline">floculante</Link> es más apropiado que el choque de cloro.
          </p>
          <p>
            Para más información sobre agua de color verde, consulta nuestra guía sobre <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">agua de la piscina verde</Link>.
          </p>

          <h2>Preguntas frecuentes sobre las algas en la piscina</h2>
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
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: valores ideales y cómo corregirlo</Link></li>
            <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ ¿Cuánto cloro echar en la piscina? Dosis exactas</Link></li>
            <li><Link href="/floculante-piscina" className="text-sky-600 hover:underline">→ Floculante para piscina: cuándo usarlo y cómo aplicarlo</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
