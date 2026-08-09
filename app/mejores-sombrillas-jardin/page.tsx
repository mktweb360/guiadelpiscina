import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Las mejores sombrillas de jardín en 2025 — Guía de compra | Guía del Piscina",
  description:
    "Las 3 mejores sombrillas de jardín en 2025: análisis de sombrillas de palo central y excéntricas para terraza y jardín. Comparativa por tamaño, material y precio.",
  keywords:
    "mejores sombrillas jardin, sombrilla terraza, sombrilla excentrica, sombrilla palo central",
  alternates: { canonical: "https://www.guiadelpiscina.com/mejores-sombrillas-jardin" },
  openGraph: {
    title: "Las mejores sombrillas de jardín en 2025 — Análisis completo",
    description:
      "Comparativa de las mejores sombrillas de jardín por tipo, tamaño, material y precio.",
    url: "https://www.guiadelpiscina.com/mejores-sombrillas-jardin",
  },
};

const products = [
  {
    name: "Outsunny Sombrilla Jardín Ø250 cm — Marco de madera, 6 varillas, Anti-UV",
    asin: "B07VFN5WM6",
    type: "Palo central",
    size: "Ø250 cm",
    material: "Madera",
    opening: "Manual",
    uv: "Anti-UV",
    price: "≈60€",
  },
  {
    name: "Outsunny Sombrilla Jardín Ø300 cm — Polea, 8 varillas, marco madera",
    asin: "B00NP2LJBO",
    type: "Palo central",
    size: "Ø300 cm",
    material: "Madera",
    opening: "Sistema de poleas",
    uv: "Anti-UV",
    price: "≈80€",
  },
  {
    name: "Aktive Sombrilla Rectangular Pared 160x100 cm — UV50, para balcón y terraza",
    asin: "B09T4XVWM9",
    type: "Pared (rectangular)",
    size: "160x100 cm",
    material: "Acero",
    opening: "Manual",
    uv: "UV50+",
    price: "≈48€",
  },
];

const spaceGuide = [
  { space: "Terraza / balcón < 6 m²", umbrella: "Rectangular de pared o Ø180-200 cm" },
  { space: "Terraza / jardín 6-20 m²", umbrella: "Ø250 cm de palo central" },
  { space: "Jardín familiar > 20 m²", umbrella: "Ø300 cm o excéntrica Ø300-350 cm" },
  { space: "Zona de tumbonas", umbrella: "Excéntrica Ø300 cm+ (sin mástil central molesto)" },
];

const materials = [
  { material: "Tela poliéster básica", life: "2-3 temporadas" },
  { material: "Poliéster con tratamiento PA (impermeabilización)", life: "3-5 temporadas" },
  { material: "Estructura de aluminio", life: "10+ años sin óxido" },
  { material: "Estructura de madera tratada", life: "5-8 años con mantenimiento anual" },
  { material: "Estructura de acero", life: "3-5 años (se oxida si no se protege)" },
];

const faqs = [
  {
    q: "¿Qué tamaño de sombrilla necesito para una mesa de jardín de 6 personas?",
    a: "Para una mesa de 150-180 cm de diámetro, lo ideal es una sombrilla de Ø250-300 cm. La sombrilla debe sobresalir al menos 50 cm por cada lado de la mesa para dar sombra efectiva a todos los comensales.",
  },
  {
    q: "¿Cuánto dura una sombrilla de jardín?",
    a: "La tela dura entre 2 y 5 temporadas según la calidad y la exposición UV de la zona. La estructura de aluminio dura más de 10 años. Es más económico cambiar solo la tela cuando se deteriora que sustituir toda la sombrilla.",
  },
  {
    q: "¿Qué base necesita una sombrilla de jardín?",
    a: "Para sombrillas de Ø250 cm, una base de 15-20 kg es suficiente en días sin viento fuerte. Para Ø300 cm o modelos excéntricos, se recomiendan bases de 25-40 kg. Sin base adecuada, el viento puede derribarla y causar daños.",
  },
  {
    q: "¿Se puede dejar la sombrilla montada toda la noche?",
    a: "Sí si no hay previsión de viento. Con viento fuerte (más de 40 km/h), cierra siempre la sombrilla para evitar daños en la tela y la estructura. La mayoría de sombrillas domésticas no están diseñadas para aguantar vendavales en posición abierta.",
  },
  {
    q: "¿Qué diferencia hay entre una sombrilla de palo central y una excéntrica?",
    a: "La de palo central tiene el mástil en el medio de la tela, lo que puede molestar en mesas con agujero central. La excéntrica tiene el mástil en el lateral, liberando todo el espacio bajo la sombrilla — ideal para tumbonas y zonas sin mesa. La excéntrica requiere una base más pesada para compensar el desequilibrio.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las mejores sombrillas de jardín en 2025 — Análisis completo",
  description:
    "Las 3 mejores sombrillas de jardín en 2025: análisis de sombrillas de palo central y excéntricas para terraza y jardín. Comparativa por tamaño, material y precio.",
  datePublished: "2025-07-20",
  dateModified: "2025-07-20",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/mejores-sombrillas-jardin",
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
      name: "Mejores sombrillas jardín",
      item: "https://www.guiadelpiscina.com/mejores-sombrillas-jardin",
    },
  ],
};

export default function SombrillasJardinPage() {
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
          <span className="text-gray-600">Mejores sombrillas jardín</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Las mejores sombrillas de jardín en 2025 — Análisis completo
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 20 julio 2025 · Actualizado: 20 julio 2025 · 9 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>
        <img
          src="/images/blog/mejores-sombrillas-jardin.jpg"
          alt="Las mejores sombrillas de jardín en 2025 — Guía de compra"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <AffiliateDisclosure />

        <div className="prose">
          <h2>Tipos de sombrilla de jardín — ¿cuál te conviene?</h2>
                    <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">La sombrilla adecuada depende del espacio del que dispongas y de cómo lo uses. Estos son los tres tipos principales que encontrarás en el mercado:</p>
          </div>

          <h3>Sombrilla de palo central — La más clásica y estable</h3>
          <p>
            El poste se sitúa en el centro y se inserta en el agujero de una mesa de jardín o en una base independiente. Es la opción ideal para <strong>mesas de 4-6 personas</strong> y la más vendida en España por su sencillez y estabilidad.
          </p>

          <h3>Sombrilla excéntrica o de brazo lateral — La más versátil</h3>
          <p>
            El mástil se coloca en un lateral, de modo que <strong>no bloquea el espacio bajo la sombrilla</strong>. Muchos modelos giran 360°. Es perfecta para dar sombra a tumbonas, hamacas y zonas donde no hay una mesa central.
          </p>

          <h3>Sombrilla rectangular de pared — Para espacios reducidos</h3>
          <p>
            Se fija a la pared o a la barandilla, por lo que <strong>no ocupa suelo</strong>. Es especialmente práctica para balcones y terrazas urbanas de tamaño pequeño.
          </p>

          <h2>Comparativa de las 3 mejores sombrillas de jardín</h2>
          <p>Estas son las tres sombrillas que recomendamos según tu espacio y presupuesto:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Medida</th>
                <th className="px-3 py-3 text-left">Material estructura</th>
                <th className="px-3 py-3 text-left">Mecanismo apertura</th>
                <th className="px-3 py-3 text-left">Protección UV</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.type}</td>
                  <td className="px-3 py-3 text-gray-600">{p.size}</td>
                  <td className="px-3 py-3 text-gray-600">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600">{p.opening}</td>
                  <td className="px-3 py-3 text-gray-600">{p.uv}</td>
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

        <AdSenseAd slot="3344556677" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>Outsunny Ø250 cm — La mejor para mesa de jardín estándar</h3>
          <p>
            La <strong>Outsunny de Ø250 cm</strong> combina un marco de madera de aspecto natural con 6 varillas y apertura manual. Su tela de poliéster con tratamiento Anti-UV protege del sol y es ideal para mesas de hasta 150 cm de diámetro. Ligera y fácil de manejar, es la sombrilla perfecta para la mayoría de mesas de jardín.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07VFN5WM6")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Outsunny Ø250 cm en Amazon →
            </a>
          </div>

          <h3>Outsunny Ø300 cm — La más completa para familias</h3>
          <p>
            La <strong>Outsunny de Ø300 cm</strong> incorpora un sistema de poleas que permite abrirla sin esfuerzo y 8 varillas para una mayor resistencia al viento. Con 3 metros de diámetro, cubre cómodamente mesas de 6-8 personas. Es la opción premium dentro del rango de 70-90€.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B00NP2LJBO")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Outsunny Ø300 cm en Amazon →
            </a>
          </div>

          <h3>Aktive rectangular — La mejor para terraza pequeña</h3>
          <p>
            La <strong>Aktive rectangular de pared</strong> (160x100 cm) tiene un diseño que se fija a la pared y no ocupa suelo, cubriendo a 2-3 personas. Con protección UV50+, es la solución ideal para apartamentos y terrazas con espacio limitado donde una sombrilla de suelo no cabe.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09T4XVWM9")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Aktive rectangular en Amazon →
            </a>
          </div>

          <h2>Guía de elección por tamaño de espacio</h2>
          <p>Elige el tamaño de la sombrilla en función del espacio que quieras cubrir:</p>
        </div>

        {/* Space guide table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Espacio disponible</th>
                <th className="px-3 py-3 text-left">Sombrilla recomendada</th>
              </tr>
            </thead>
            <tbody>
              {spaceGuide.map((row, i) => (
                <tr key={row.space} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.space}</td>
                  <td className="px-3 py-3 font-bold text-sky-600">{row.umbrella}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Materiales — qué duran realmente</h2>
          <p>La durabilidad depende tanto de la tela como de la estructura. Esta es la vida útil orientativa de cada material:</p>
        </div>

        {/* Materials table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Durabilidad</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((row, i) => (
                <tr key={row.material} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.material}</td>
                  <td className="px-3 py-3 text-gray-600">{row.life}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <p>
            Como referencia, la <strong>protección UV mínima recomendable es UV50+</strong>: por debajo de ese nivel, la tela no bloquea suficiente radiación ni dura tanto expuesta al sol del verano español.
          </p>

          <h2>Preguntas frecuentes sobre sombrillas de jardín</h2>
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
          <p className="text-sm text-gray-600 mb-4">Completa tu espacio exterior con los mejores muebles de jardín.</p>
          <Link href="/tienda/muebles-jardin" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Complementa tu zona de descanso →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mejores-tumbonas-jardin" className="text-sky-600 hover:underline">→ Las mejores tumbonas de jardín en 2025</Link></li>
            <li><Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">→ Mejores muebles de jardín y terraza 2025</Link></li>
            <li><Link href="/pergola-terraza" className="text-sky-600 hover:underline">→ Las mejores pérgolas para terraza y jardín 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
