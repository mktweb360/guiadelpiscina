import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "¿Cuánto cloro echar en piscina? Dosis exactas por litros (2025) | Guía del Piscina",
  description:
    "Calcula exactamente cuánto cloro echar en tu piscina según sus litros: dosis de mantenimiento, choque y corrección. Guía práctica con tablas.",
  keywords:
    "cuanto cloro echar piscina, dosis cloro piscina, cloro piscina litros, choque cloro piscina, cloro granulado piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/cuanto-cloro-echar-piscina" },
  openGraph: {
    title: "¿Cuánto cloro echar en piscina? Dosis exactas por litros (2025)",
    description:
      "Calcula exactamente cuánto cloro echar en tu piscina según sus litros: dosis de mantenimiento, choque y corrección.",
    url: "https://www.guiadelpiscina.com/cuanto-cloro-echar-piscina",
  },
};

const volumenTable = [
  { dim: "3 × 2 m", litros: "9.000 L" },
  { dim: "4 × 2 m", litros: "12.000 L" },
  { dim: "5 × 3 m", litros: "22.500 L" },
  { dim: "6 × 4 m", litros: "36.000 L" },
  { dim: "8 × 4 m", litros: "48.000 L" },
];

const dosisTable = [
  {
    tipo: "Granulado 56% activo",
    mantenimiento: "2–3 g/m³",
    choque: "8–10 g/m³",
  },
  {
    tipo: "Tabletas tricloro 90%",
    mantenimiento: "1–2 g/m³/semana",
    choque: "4–6 g/m³",
  },
  {
    tipo: "Líquido hipoclorito 14%",
    mantenimiento: "20–30 ml/m³",
    choque: "80–100 ml/m³",
  },
];

const faqs = [
  {
    q: "¿Cuánto cloro echar en una piscina de 10.000 litros?",
    a: "Para mantenimiento, entre 20 y 30 g de cloro granulado al 56% activo (equivale a 2-3 g/m³). Para un tratamiento de choque, entre 80 y 100 g.",
  },
  {
    q: "¿Cuánto cloro echar en una piscina de 20.000 litros?",
    a: "Para mantenimiento, entre 40 y 60 g de cloro granulado al 56%. Para un tratamiento de choque, entre 160 y 200 g. Disuelve siempre el granulado en un cubo con agua de la piscina antes de añadirlo.",
  },
  {
    q: "¿Cada cuánto hay que echar cloro en la piscina?",
    a: "En verano, cada 2-3 días para mantenimiento. Con altas temperaturas, uso intensivo o muchas horas de sol, puede ser necesario hacerlo diariamente. Mide el cloro libre antes de añadir para no pasarte.",
  },
  {
    q: "¿Cuánto tiempo hay que esperar para bañarse después de echar cloro?",
    a: "Al menos 4 horas tras un tratamiento de mantenimiento, y entre 12 y 24 horas si has hecho un choque de cloro. Comprueba que el cloro libre está entre 1 y 3 ppm antes de bañarte.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Cuánto cloro echar en piscina? Dosis exactas por litros (2025)",
  description:
    "Calcula exactamente cuánto cloro echar en tu piscina según sus litros: dosis de mantenimiento, choque y corrección. Guía práctica con tablas.",
  datePublished: "2025-08-01",
  dateModified: "2025-08-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/cuanto-cloro-echar-piscina",
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/og-image.png", width: 1200, height: 630 },
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
      name: "Cuánto cloro echar en piscina",
      item: "https://www.guiadelpiscina.com/cuanto-cloro-echar-piscina",
    },
  ],
};

export default function CuantoCloroPage() {
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
          <span className="text-gray-600">Cuánto cloro echar en piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          ¿Cuánto cloro echar en piscina? Dosis exactas por litros (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 agosto 2025 · Actualizado: 1 agosto 2025 · 8 min lectura</p>

        <div className="prose">
          <p>
            El cloro es el <strong>desinfectante principal</strong> de cualquier piscina. Sin él, las bacterias y las algas proliferan en horas. Pero echar demasiado irrita la piel y los ojos; echar poco deja el agua sin protección. La clave está en calcular la <strong>dosis correcta según el volumen de tu piscina</strong>, el tipo de cloro que uses y si se trata de mantenimiento rutinario o de un tratamiento de choque.
          </p>
        </div>

        <AdSenseAd slot="6789012345" />

        <div className="prose">
          <h2>Cómo calcular el volumen de tu piscina</h2>
          <p>Antes de saber cuánto cloro echar, necesitas conocer el volumen en litros. Usa estas fórmulas:</p>
          <ul>
            <li><strong>Rectangular:</strong> largo × ancho × profundidad media × 1.000</li>
            <li><strong>Circular:</strong> radio² × π × profundidad media × 1.000</li>
            <li><strong>Ovalada:</strong> largo × ancho × 0,785 × profundidad media × 1.000</li>
          </ul>
        </div>

        {/* Volumen table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Dimensiones (rectangular)</th>
                <th className="px-3 py-3 text-left">Volumen aprox. (prof. media 1,5 m)</th>
              </tr>
            </thead>
            <tbody>
              {volumenTable.map((row, i) => (
                <tr key={row.dim} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.dim}</td>
                  <td className="px-3 py-3 text-gray-600">{row.litros}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Dosis de cloro según el tipo de producto</h2>
          <p>
            No todos los productos de cloro tienen la misma concentración de principio activo. Ajusta siempre la dosis al tipo que uses:
          </p>
        </div>

        {/* Dosis table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Tipo de cloro</th>
                <th className="px-3 py-3 text-left">Mantenimiento</th>
                <th className="px-3 py-3 text-left">Choque</th>
              </tr>
            </thead>
            <tbody>
              {dosisTable.map((row, i) => (
                <tr key={row.tipo} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.tipo}</td>
                  <td className="px-3 py-3 text-sky-700 font-medium">{row.mantenimiento}</td>
                  <td className="px-3 py-3 text-orange-600 font-medium">{row.choque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Niveles óptimos de cloro libre en el agua</h2>
          <ul>
            <li><strong>Mantenimiento normal:</strong> 1–3 ppm (mg/L)</li>
            <li><strong>Piscina muy soleada o con mucho uso:</strong> mantener en 2–3 ppm</li>
            <li><strong>Máximo tolerable para bañarse:</strong> 5 ppm</li>
          </ul>
          <p>
            Mide el cloro libre con tiras reactivas o un kit de análisis antes de cada tratamiento. Si ya estás en 2 ppm, no añadas más: podrías superar el límite tolerable.
          </p>

          <h2>Cuándo hacer un tratamiento de choque</h2>
          <p>El choque de cloro consiste en añadir entre 3 y 5 veces la dosis normal para eliminar contaminación masiva. Hazlo cuando:</p>
          <ul>
            <li>El agua aparece <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">turbia o verde</Link></li>
            <li>Ha habido lluvias fuertes que diluyeron el cloro</li>
            <li>La piscina ha estado una semana sin bañistas (estancamiento)</li>
            <li>Al inicio y al final de la temporada</li>
          </ul>
          <p>
            Aplica siempre el choque con la <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">depuradora</Link> en marcha durante al menos 8 horas y por la noche, ya que el sol degrada el cloro rápidamente.
          </p>

          <h2>Errores comunes al echar cloro</h2>
          <ul>
            <li><strong>Echar cloro con gente en el agua:</strong> nunca añadas productos con la piscina en uso.</li>
            <li><strong>No medir el pH antes:</strong> el cloro pierde eficacia con <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH</Link> superior a 7,6. Ajusta siempre el pH primero.</li>
            <li><strong>Tabletas directamente en el skimmer:</strong> el cloro concentrado deteriora la bomba y el filtro; usa un dosificador flotante.</li>
            <li><strong>No agitar el agua tras añadir granulado:</strong> el granulado puede decolorar el liner si se deposita en el fondo sin diluir. Disuelve primero en un cubo con agua de la piscina.</li>
          </ul>
          <p>
            Recuerda que la cloración es solo una parte del{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">
              mantenimiento de tu piscina
            </Link>
            . Combínala con una depuración correcta y el control del pH para resultados óptimos.
          </p>

          <h2>Preguntas frecuentes sobre el cloro en la piscina</h2>
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
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/floculante-piscina" className="text-sky-600 hover:underline">→ Floculante para piscina: cuándo usarlo y cómo aplicarlo</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Guía de mantenimiento de piscinas desmontables</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
