import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores piscinas desmontables grandes para adultos 2025 | Guía del Piscina",
  description:
    "Las mejores piscinas desmontables grandes para adultos en 2025: Intex Ultra XTR y Bestway Power Steel. Comparativa por tamaño, capacidad, materiales y precio.",
  keywords:
    "piscina desmontable grande adultos, intex ultra xtr, bestway power steel, piscina desmontable 488",
  alternates: { canonical: "https://www.guiadelpiscina.com/piscina-desmontable-grande-adultos" },
  openGraph: {
    title: "Las mejores piscinas desmontables grandes para adultos en 2025",
    description:
      "Comparativa de piscinas desmontables grandes Intex Ultra XTR y Bestway Power Steel por tamaño, capacidad y precio.",
    url: "https://www.guiadelpiscina.com/piscina-desmontable-grande-adultos",
  },
};

const products = [
  {
    name: "Intex 55216 — Ultra XTR Frame Ø488x122 cm",
    asin: "B07FB827CP",
    shape: "Redonda",
    size: "Ø488x122 cm",
    volume: "≈19.000 L",
    filter: "Depuradora de arena incluida",
    price: "≈650€",
  },
  {
    name: "Intex 28324NP — Ultra Frame Ø488x122 cm",
    asin: "B01B19V58E",
    shape: "Redonda",
    size: "Ø488x122 cm",
    volume: "≈19.000 L",
    filter: "Depuradora incluida",
    price: "≈550€",
  },
  {
    name: "Bestway Power Steel Elite 732x366 cm",
    asin: "B0CFFSJ556",
    shape: "Rectangular",
    size: "732x366x132 cm",
    volume: "≈28.620 L",
    filter: "Depuradora (9.463 l/h) + bomba de calor",
    price: "≈700€",
  },
];

const sizeGuide = [
  { use: "Familia de 4 personas", size: "366x122 cm" },
  { use: "Familia de 6 personas", size: "457x122 cm" },
  { use: "Nadar (adultos)", size: "488x122 cm o más" },
];

const included = [
  { incluye: "Depuradora de arena o cartucho", noIncluye: "Sal (si usas clorador salino)" },
  { incluye: "Escalera de seguridad", noIncluye: "Tratamiento químico inicial (cloro, pH)" },
  { incluye: "Tapiz de suelo protector", noIncluye: "Arena de sílex para la depuradora de arena" },
  { incluye: "Cobertor de protección", noIncluye: "Productos de mantenimiento del agua" },
];

const faqs = [
  {
    q: "¿Cuántos litros tiene una piscina desmontable de 488x122 cm?",
    a: "Aproximadamente 19.000 litros llenada al 90%. Necesitarás entre 4 y 6 horas con una manguera estándar para llenarla.",
  },
  {
    q: "¿Se puede montar la piscina en una terraza?",
    a: "Depende de la resistencia estructural de la terraza. Una piscina de 488x122 cm llena pesa más de 20.000 kg. Consulta siempre con un arquitecto antes de instalar en un terrado o terraza.",
  },
  {
    q: "¿Cuánto consume la depuradora de arena que incluye?",
    a: "Las depuradoras de arena que incluyen estos modelos consumen entre 80 y 200 W. Con 8 horas de funcionamiento diario, el coste eléctrico es de 0,10-0,25€/día a tarifas medias españolas.",
  },
  {
    q: "¿Se puede dejar la piscina montada todo el año?",
    a: "No es recomendable en España. El frío puede dañar la lona y la estructura. Lo ideal es desmontarla y guardarla limpia y seca entre noviembre y marzo.",
  },
  {
    q: "¿Qué diferencia hay entre la depuradora de cartucho y la de arena que incluyen estos modelos?",
    a: "La depuradora de arena filtra mejor (partículas hasta 20 micras vs 40 micras del cartucho) y tiene menor coste de mantenimiento a largo plazo. El cartucho hay que cambiarlo cada temporada; la arena dura 5 años.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las mejores piscinas desmontables grandes para adultos en 2025",
  description:
    "Las mejores piscinas desmontables grandes para adultos en 2025: Intex Ultra XTR y Bestway Power Steel. Comparativa por tamaño, capacidad, materiales y precio.",
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
  mainEntityOfPage: "https://www.guiadelpiscina.com/piscina-desmontable-grande-adultos",
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
      name: "Piscina desmontable grande adultos",
      item: "https://www.guiadelpiscina.com/piscina-desmontable-grande-adultos",
    },
  ],
};

export default function PiscinaGrandeAdultosPage() {
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
          <span className="text-gray-600">Piscina desmontable grande adultos</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Las mejores piscinas desmontables grandes para adultos en 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 20 julio 2025 · Actualizado: 20 julio 2025 · 10 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>¿Qué hace grande a una piscina desmontable para adultos?</h2>
                    <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">No es lo mismo una piscina para que los niños chapoteen que una en la que un adulto pueda refrescarse o incluso nadar. Para poder <strong>nadar</strong>, busca al menos 4 m de longitud y 1 m de profundidad. Para <strong>refrescarse cómodamente</strong> entre varios adultos, un diámetro de 3,5-4 m y 90-120 cm de profundidad es suficiente. Esta tabla te orienta según el uso:</p>
          </div>
        </div>

        {/* Size guide table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Uso previsto</th>
                <th className="px-3 py-3 text-left">Tamaño recomendado</th>
              </tr>
            </thead>
            <tbody>
              {sizeGuide.map((row, i) => (
                <tr key={row.use} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.use}</td>
                  <td className="px-3 py-3 font-bold text-sky-600">{row.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Intex Ultra XTR vs Ultra Frame — ¿Cuál es la diferencia?</h2>
          <p>
            Ambas gamas comparten la misma estructura metálica robusta, pero se diferencian en la lona:
          </p>
          <ul>
            <li><strong>Ultra XTR:</strong> lona tricapa Super-Tough de 0,68 mm en la pared y 0,55 mm en el fondo, con estructura reforzada anticorrosión. Es la versión premium, la más resistente del mercado.</li>
            <li><strong>Ultra Frame:</strong> lona estándar sobre la misma estructura metálica. Más económica y, para un uso normal, igual de resistente.</li>
          </ul>

          <h2>Comparativa de las 3 mejores piscinas grandes para adultos</h2>
          <p>Estas son las tres piscinas desmontables grandes que recomendamos:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Forma</th>
                <th className="px-3 py-3 text-left">Medidas</th>
                <th className="px-3 py-3 text-left">Capacidad</th>
                <th className="px-3 py-3 text-left">Depuradora incluida</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.shape}</td>
                  <td className="px-3 py-3 text-gray-600">{p.size}</td>
                  <td className="px-3 py-3 text-gray-600">{p.volume}</td>
                  <td className="px-3 py-3 text-gray-600">{p.filter}</td>
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

        <AdSenseAd slot="2233445566" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>Intex Ultra XTR 488x122 cm — La más resistente del mercado</h3>
          <p>
            La <strong>Intex Ultra XTR</strong> redonda de Ø488x122 cm es la piscina desmontable más robusta que puedes comprar. Su lona tricapa Super-Tough y su estructura anticorrosión están pensadas para durar temporada tras temporada. Con unos 19.000 litros, es perfecta para que los adultos se refresquen e incluso naden en círculos. Incluye depuradora de arena, escalera, tapiz y cobertor.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07FB827CP")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Intex Ultra XTR en Amazon →
            </a>
          </div>

          <h3>Intex Ultra Frame 488x122 cm — La relación calidad-precio líder</h3>
          <p>
            La <strong>Intex Ultra Frame</strong> ofrece las mismas dimensiones y la misma estructura metálica que la XTR, con una lona estándar que cumple perfectamente para un uso doméstico normal. Es la opción más inteligente si quieres el tamaño de la XTR ahorrando en la lona premium.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B01B19V58E")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Intex Ultra Frame en Amazon →
            </a>
          </div>

          <h3>Bestway Power Steel rectangular — Para familias con espacio</h3>
          <p>
            La <strong>Bestway Power Steel Elite</strong> rectangular de 732x366 cm es la opción para quien tiene espacio de sobra y quiere una piscina en la que nadar de verdad. Con casi 28.620 litros de capacidad y un conjunto muy completo (depuradora de 9.463 l/h más bomba de calor), es la más ambiciosa del comparativo.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B0CFFSJ556")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway Power Steel en Amazon →
            </a>
          </div>

          <h2>Lo que incluyen y lo que no incluyen</h2>
          <p>Estos conjuntos vienen muy completos, pero hay extras que tendrás que comprar aparte:</p>
        </div>

        {/* Included / not included table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">✅ Incluye</th>
                <th className="px-3 py-3 text-left">❌ No incluye</th>
              </tr>
            </thead>
            <tbody>
              {included.map((row, i) => (
                <tr key={row.incluye} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 text-green-800">{row.incluye}</td>
                  <td className="px-3 py-3 text-red-800">{row.noIncluye}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Instalación: cuánto tiempo y qué necesitas</h2>
          <ul>
            <li><strong>Tiempo:</strong> entre 45 y 90 minutos con 2 personas.</li>
            <li><strong>Superficie:</strong> completamente plana, sin piedras ni raíces y sin pendiente.</li>
            <li><strong>Llenado:</strong> con una{" "}
              <Link href="/mejor-manguera-riego-jardin" className="text-sky-600 hover:underline">manguera de jardín</Link>{" "}
              estándar. Una piscina de 19.000 L a presión normal tarda entre 4 y 6 horas en llenarse.</li>
          </ul>
          <p>
            Una vez montada, mantén el agua en perfecto estado siguiendo nuestra{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">
              guía de mantenimiento de piscinas desmontables
            </Link>
            .
          </p>

          <h2>Preguntas frecuentes sobre piscinas desmontables grandes</h2>
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
          <p className="text-sm text-gray-600 mb-4">Las mejores piscinas desmontables grandes para adultos, comparadas y analizadas.</p>
          <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver piscinas desmontables grandes →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes 2025</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">→ Mejor escalera para piscina desmontable</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
