import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores piscinas desmontables grandes 2025 — Guía de compra",
  description:
    "Comparativa de las mejores piscinas desmontables grandes para adultos y familias. Intex, Bestway y más. Precios desde 300€.",
  keywords: "piscina desmontable grande, piscina desmontable adultos, piscina jardin grande, piscina intex grande",
  alternates: { canonical: "https://www.guiadelpiscina.com/piscina-desmontable-grande" },
  openGraph: {
    title: "Mejores piscinas desmontables grandes 2025",
    description: "Comparativa de piscinas desmontables grandes para familias.",
    url: "https://www.guiadelpiscina.com/piscina-desmontable-grande",
  },
};

const products = [
  { pos: 1, name: "Intex 26176 Oval Frame — 732×366 cm", asin: "B00MJVWMKQ", price: "€349,99", dimensions: "732×366×132 cm", volume: "28.620 l", depuradora: "Incluida (7.571 l/h)", type: "Frame oval", stars: "4,4/5", best: "Mejor calidad-precio" },
  { pos: 2, name: "Bestway Steel Pro 549×274 cm", asin: "B08NTKLM7P", price: "€299,00", dimensions: "549×274×122 cm", volume: "16.805 l", depuradora: "Incluida (5.678 l/h)", type: "Frame rectangular", stars: "4,3/5", best: "Mejor precio" },
  { pos: 3, name: "Intex 26176 Ultra XTR Frame 732×366 cm", asin: "B07MQDKLM3", price: "€549,99", dimensions: "732×366×132 cm", volume: "28.620 l", depuradora: "Incluida (9.463 l/h)", type: "Ultra XTR Frame", stars: "4,6/5", best: "Mayor calidad" },
  { pos: 4, name: "Intex 26352 Prism Frame 460×226 cm", asin: "B07BFKPDXT", price: "€399,00", dimensions: "460×226×107 cm", volume: "9.404 l", depuradora: "Incluida (3.028 l/h)", type: "Prism Frame", stars: "4,5/5", best: "Para jardines medianos" },
  { pos: 5, name: "Bestway Power Steel Elite 732×366 cm", asin: "B08KJ4HKLM", price: "€699,99", dimensions: "732×366×132 cm", volume: "28.620 l", depuradora: "Incluida (9.463 l/h) + bomba calor", type: "Steel Elite", stars: "4,7/5", best: "Conjunto más completo" },
];

const faqs = [
  { q: "¿Cuánto tiempo se tarda en montar una piscina desmontable grande?", a: "Una piscina tipo Frame grande (7×3 m) requiere generalmente entre 2 y 4 horas para montarla entre dos personas. Las instrucciones suelen ser claras y no necesitas herramientas especiales. El llenado de agua (30.000 litros con una manguera normal de 15 l/min) puede tardar hasta 33 horas, así que planifícalo con antelación." },
  { q: "¿Necesito permiso para instalar una piscina desmontable grande?", a: "En la mayoría de municipios españoles, las piscinas desmontables están exentas de licencia de obras por ser instalaciones temporales no fijas. Sin embargo, algunos ayuntamientos tienen ordenanzas específicas. Consulta con tu ayuntamiento local para estar seguro. Las piscinas enterradas sí requieren licencia." },
  { q: "¿Cuánto cuesta el mantenimiento anual de una piscina desmontable?", a: "El mantenimiento anual incluye: cloro (aprox. 80-150€/temporada), algicida (20-40€), flocculante (20€), mantenimiento de la depuradora (30-50€) y electricidad de la depuradora (60-100€). En total, entre 200 y 350€ por temporada dependiendo del tamaño y uso." },
  { q: "¿Es mejor una piscina rectangular u ovalada?", a: "Las piscinas rectangulares aprovechan mejor el espacio del jardín si tienes forma rectangular y permiten nadar en línea recta. Las ovaladas tienen un aspecto más estético y suelen caber mejor en jardines cuadrados. Funcionalmente son equivalentes; elige según tu espacio disponible." },
  { q: "¿Puedo dejar la piscina desmontable en el jardín en invierno?", a: "No es recomendable. Las bajas temperaturas pueden dañar las paredes de PVC y la estructura metálica si queda agua. Lo correcto es vaciarla, limpiarla bien, dejar secar completamente y guardarla doblada en un lugar seco. Algunas personas la cubren con una lona de invierno y añaden anticongelante, pero esto solo funciona en climas templados." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores piscinas desmontables grandes 2025 — Guía de compra",
  description: "Comparativa de las mejores piscinas desmontables grandes para adultos y familias.",
  datePublished: "2025-06-05",
  dateModified: "2025-06-09",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/piscina-desmontable-grande",
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
    { "@type": "ListItem", position: 3, name: "Piscina desmontable grande", item: "https://www.guiadelpiscina.com/piscina-desmontable-grande" },
  ],
};

export default function PiscinaDesmontablePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Piscinas desmontables grandes</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores piscinas desmontables grandes 2025 — Guía de compra
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 5 junio 2025 · Actualizado: 9 junio 2025 · 13 min lectura</p>

        <AffiliateDisclosure />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-semibold text-sm">
            🏊 En esta guía solo analizamos piscinas grandes para adultos (más de 400 cm de largo). Si buscas piscinas pequeñas para niños, te recomendamos otro artículo.
          </p>
        </div>

        <div className="prose">
          <p>
            Las <strong>piscinas desmontables grandes</strong> son la alternativa perfecta a la piscina enterrada: sin obras, sin licencia (en la mayoría de municipios), instalación en un fin de semana y precio infinitamente menor. En esta guía comparamos las mejores piscinas desmontables de más de 4 metros disponibles en Amazon España en 2025.
          </p>
          <p>
            Los precios van desde 300€ para modelos básicos hasta 700€ para los conjuntos más completos. Hemos analizado la resistencia de las paredes, la calidad de la estructura, la depuradora incluida y la facilidad de montaje.
          </p>

          <h2>Comparativa — Mejores piscinas desmontables grandes 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Dimensiones</th>
                <th className="px-3 py-3 text-left">Volumen</th>
                <th className="px-3 py-3 text-left">Depuradora</th>
                <th className="px-3 py-3 text-left">Valoración</th>
                <th className="px-3 py-3 text-left">Comprar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-sky-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.dimensions}</td>
                  <td className="px-3 py-3 text-gray-600">{p.volume}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.depuradora}</td>
                  <td className="px-3 py-3 text-yellow-500 font-semibold">⭐ {p.stars}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
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

          <h3>1. Intex 26176 Oval Frame — La más vendida en España (★★★★½)</h3>
          <p>
            La <strong>Intex Oval Frame de 7×3,5 m</strong> es la piscina desmontable grande más vendida en España. Su estructura ovalada con 32 postes de acero es extraordinariamente resistente y puede soportar el volumen de casi 29.000 litros de agua sin problema. La depuradora de arena incluida (7.571 l/h) es suficiente para mantener el agua cristalina.
          </p>
          <ul>
            <li><strong>Pros:</strong> Gran resistencia, fácil montaje, depuradora de arena incluida, excelente valor</li>
            <li><strong>Contras:</strong> Ocupa mucho espacio, el llenado inicial tarda muchas horas</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B00MJVWMKQ")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Intex Oval Frame en Amazon →
            </a>
          </div>

          <h3>2. Bestway Steel Pro 549×274 cm — La más económica (★★★★)</h3>
          <p>
            La <strong>Bestway Steel Pro</strong> es la opción más asequible para jardines medianos. Con casi 5,5 metros de largo y 17.000 litros de capacidad, es perfecta para familias de 2-4 personas. La estructura rectangular facilita el aprovechamiento del espacio.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08NTKLM7P")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway Steel Pro en Amazon →
            </a>
          </div>

          <h3>3. Intex Ultra XTR Frame — La mejor calidad (★★★★½)</h3>
          <p>
            La <strong>Intex Ultra XTR</strong> es un escalón por encima en calidad: paredes de 3 capas de PVC más grueso, estructura de aluminio más robusta y conexiones mejoradas. Para quien quiere lo mejor y no tiene dudas sobre el presupuesto.
          </p>

          <h2>¿Qué tamaño de piscina desmontable elegir?</h2>
          <ul>
            <li><strong>2-3 adultos / familia con niños pequeños:</strong> 4-5 metros de largo es suficiente (aprox. 10.000-15.000 litros).</li>
            <li><strong>4-6 adultos / familia numerosa:</strong> 6-7 metros de largo (22.000-30.000 litros).</li>
            <li><strong>Para nadar (no solo bañarse):</strong> Mínimo 6 metros de largo y profundidad de 1,3 m.</li>
          </ul>
          <p>Recuerda verificar que el suelo de tu jardín está suficientemente nivelado (diferencia máxima de 5 cm) y que aguantará el peso del agua (1.000 kg por m³).</p>

          <h2>Preguntas frecuentes</h2>
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

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">Completa tu piscina</h3>
          <ul className="space-y-2">
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las 5 mejores depuradoras para piscina 2025</Link></li>
            <li><Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">→ Mejores robots limpiafondos para piscina 2025</Link></li>
            <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina: calentar el agua eficientemente</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
