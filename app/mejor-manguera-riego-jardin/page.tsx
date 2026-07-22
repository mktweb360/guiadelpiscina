import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejor manguera de riego para jardín 2025 — Guía de compra | Guía del Piscina",
  description:
    "Las 3 mejores mangueras de jardín en 2025: extensibles y de calidad. Comparativa por longitud, material, funciones y precio para elegir la ideal.",
  keywords:
    "mejor manguera riego jardin, manguera extensible, manguera jardin, hozelock superhoze",
  alternates: { canonical: "https://www.guiadelpiscina.com/mejor-manguera-riego-jardin" },
  openGraph: {
    title: "Mejor manguera de riego para jardín en 2025 — Comparativa completa",
    description:
      "Comparativa de las mejores mangueras de jardín por longitud, material, funciones y precio.",
    url: "https://www.guiadelpiscina.com/mejor-manguera-riego-jardin",
  },
};

const products = [
  {
    name: "HOMEPROTEK Manguera extensible 15 m",
    asin: "B09JWV7TDS",
    length: "15 m (extensible)",
    material: "Látex 3 capas + tejido",
    functions: "9 funciones",
    connectors: "1/2\" y 3/4\" incluidos",
    price: "≈25€",
  },
  {
    name: "HOMEPROTEK Manguera extensible 30 m",
    asin: "B09JWRSCGJ",
    length: "30 m (extensible)",
    material: "Látex 3 capas + tejido",
    functions: "9 funciones",
    connectors: "1/2\" y 3/4\" incluidos",
    price: "≈35€",
  },
  {
    name: "Hozelock SuperHoze Extensible 15 m",
    asin: "B07KQG1XYR",
    length: "15 m (extensible)",
    material: "TPC de alta resistencia",
    functions: "Pistola no incluida",
    connectors: "Sistema Hozelock",
    price: "≈45€",
  },
];

const gardenSizeTable = [
  { size: "Jardín < 80 m²", hose: "15 m suficiente" },
  { size: "Jardín 80-200 m²", hose: "20-25 m" },
  { size: "Jardín > 200 m²", hose: "30 m o más" },
];

const faqs = [
  {
    q: "¿Cuánto dura una manguera extensible de jardín?",
    a: "Con uso habitual y almacenamiento correcto (sin agua bajo presión cuando no se usa), entre 2 y 4 temporadas. Las de calidad con núcleo de látex de 3 capas duran más que las de una sola capa.",
  },
  {
    q: "¿Qué significa el número de funciones de la pistola de riego?",
    a: "Indica cuántos patrones de riego tiene la boquilla: ducha, chorro, niebla, cono, etc. Con 7-9 funciones tienes todas las opciones para regar plantas, lavar el coche y limpiar suelos.",
  },
  {
    q: "¿Se puede dejar la manguera extensible llena de agua?",
    a: "No. Cuando termines de usarla, desconéctala del grifo y deja que el agua salga. Si la dejas a presión al sol, el calor puede dañar el látex interior y acortar su vida útil significativamente.",
  },
  {
    q: "¿Qué conector necesito para conectar la manguera a mi grifo?",
    a: "La mayoría de mangueras incluyen adaptadores de 1/2\" y 3/4\", que son los tamaños estándar de grifos exteriores en España. Si tu grifo tiene rosca diferente, busca un adaptador universal.",
  },
  {
    q: "¿Puedo usar la manguera de jardín para llenar la piscina?",
    a: "Sí, es el método más habitual. Para piscinas grandes, ten en cuenta que una manguera de 15 mm a presión estándar tarda en llenar: una piscina de 10.000 litros puede tardar 4-6 horas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejor manguera de riego para jardín en 2025 — Comparativa completa",
  description:
    "Las 3 mejores mangueras de jardín en 2025: extensibles y de calidad. Comparativa por longitud, material, funciones y precio para elegir la ideal.",
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/mejor-manguera-riego-jardin",
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
      name: "Mejor manguera riego jardín",
      item: "https://www.guiadelpiscina.com/mejor-manguera-riego-jardin",
    },
  ],
};

export default function MangueraRiegoPage() {
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
          <span className="text-gray-600">Mejor manguera riego jardín</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejor manguera de riego para jardín en 2025 — Comparativa completa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 julio 2025 · Actualizado: 15 julio 2025 · 8 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <h2>Tipos de manguera de jardín — ¿Cuál te conviene?</h2>
          <p>Antes de elegir un modelo concreto, conviene saber qué tipo de manguera se ajusta mejor a tu jardín y a tu uso:</p>

          <h3>Manguera extensible — La más práctica</h3>
          <p>
            Se estira hasta el triple de su longitud con la presión del agua y se comprime al vaciarla, por lo que ocupa muy poco y es ligerísima. Es la opción ideal para jardines pequeños y medianos y para quien valora la comodidad de almacenamiento.
          </p>

          <h3>Manguera trenzada — La más duradera</h3>
          <p>
            Fabricada en PVC multicapa o goma EPDM, es más pesada pero mucho más resistente: puede durar más de 10 años. Es la elección para uso intensivo y jardines grandes donde la manguera está expuesta a roces y sol constante.
          </p>

          <h3>Manguera en espiral — Para balcón y terraza</h3>
          <p>
            Se enrolla sola sobre sí misma y se guarda sin esfuerzo. Viene en longitudes cortas (5-10 m), por lo que es perfecta para balcones, terrazas y patios donde el espacio manda.
          </p>

          <h2>Comparativa de las 3 mejores mangueras</h2>
          <p>Estas son las tres mangueras extensibles que mejor relación calidad-precio ofrecen:</p>
        </div>

        {/* Products comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Longitud</th>
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Funciones pistola</th>
                <th className="px-3 py-3 text-left">Conectores</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 text-gray-600">{p.length}</td>
                  <td className="px-3 py-3 text-gray-600">{p.material}</td>
                  <td className="px-3 py-3 text-gray-600">{p.functions}</td>
                  <td className="px-3 py-3 text-gray-600">{p.connectors}</td>
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

        <AdSenseAd slot="9012345678" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>HOMEPROTEK 15 m — La más vendida relación calidad-precio</h3>
          <p>
            La <strong>HOMEPROTEK de 15 m</strong> es la manguera extensible más popular por su equilibrio entre precio y prestaciones. Su núcleo de látex de 3 capas la hace resistente a la presión, y la pistola de 9 funciones cubre todas las necesidades: regar, lavar el coche o limpiar el suelo. Perfecta para la mayoría de jardines domésticos.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09JWV7TDS")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver HOMEPROTEK 15 m en Amazon →
            </a>
          </div>

          <h3>HOMEPROTEK 30 m — Para jardines grandes</h3>
          <p>
            La versión de <strong>30 m</strong> ofrece las mismas prestaciones que la de 15 m pero con el doble de alcance, ideal para jardines grandes o cuando el grifo está lejos de la zona a regar. Sigue comprimiéndose para guardarse sin ocupar espacio.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09JWRSCGJ")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver HOMEPROTEK 30 m en Amazon →
            </a>
          </div>

          <h3>Hozelock SuperHoze — La más duradera</h3>
          <p>
            La <strong>Hozelock SuperHoze</strong> es la apuesta premium. Fabricada en TPC de alta resistencia (más duradero que el látex convencional) y con la garantía de una marca de referencia en riego, es la opción para quien quiere una manguera extensible que aguante temporada tras temporada.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B07KQG1XYR")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Hozelock SuperHoze en Amazon →
            </a>
          </div>

          <h2>Guía de elección por tamaño de jardín</h2>
          <p>La longitud de la manguera debe ajustarse a la superficie de tu jardín:</p>
        </div>

        {/* Garden size table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Tamaño del jardín</th>
                <th className="px-3 py-3 text-left">Longitud recomendada</th>
              </tr>
            </thead>
            <tbody>
              {gardenSizeTable.map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{row.size}</td>
                  <td className="px-3 py-3 font-bold text-sky-600">{row.hose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Cómo conectar la manguera al grifo exterior</h2>
          <ol>
            <li><strong>Coloca el adaptador de rosca</strong> adecuado al tamaño de tu grifo (1/2\" o 3/4\").</li>
            <li><strong>Conecta el racor rápido</strong> de la manguera al adaptador hasta que haga clic.</li>
            <li><strong>Abre el grifo y comprueba que no hay fugas.</strong> Si gotea por la conexión, aprieta bien la rosca o añade cinta de teflón.</li>
          </ol>
          <p>
            Si además quieres automatizar el riego, echa un vistazo a nuestra{" "}
            <Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">
              comparativa de sistemas de riego automático
            </Link>
            .
          </p>

          <h2>Preguntas frecuentes sobre mangueras de jardín</h2>
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
            <li><Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">→ Sistemas de riego automático para jardín 2025</Link></li>
            <li><Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">→ Mejor césped artificial para jardín 2025</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
