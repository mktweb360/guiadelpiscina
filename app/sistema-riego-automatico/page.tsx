import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Sistemas de riego automático para jardín — Comparativa 2025",
  description:
    "Los mejores sistemas de riego automático para jardín. Programadores, aspersores y riego por goteo. Comparativa actualizada para 2025.",
  keywords: "riego automatico jardin, programador riego, sistema riego goteo, aspersores jardin",
  alternates: { canonical: "https://www.guiadelpiscina.com/sistema-riego-automatico" },
};

const products = [
  { pos: 1, name: "Gardena Kit riego básico 75 m²", asin: "B001DQKUV7", price: "€34,99", coverage: "75 m²", zones: "1 zona", smart: "No", stars: "4,4/5", best: "Mejor precio" },
  { pos: 2, name: "Rain Bird Kit completo goteo", asin: "B002P6QU8M", price: "€59,99", coverage: "200 m² jardín", zones: "1 zona goteo", smart: "No", stars: "4,5/5", best: "Mejor para huerto" },
  { pos: 3, name: "Gardena smart system 9V", asin: "B007BFKPDT", price: "€89,99", coverage: "250 m²", zones: "2 zonas", smart: "Bluetooth", stars: "4,4/5", best: "Mejor calidad-precio" },
  { pos: 4, name: "Orbit B-hyve 4 zonas WiFi", asin: "B08KJTKLM5", price: "€129,00", coverage: "Múltiple", zones: "4 zonas", smart: "WiFi + App", stars: "4,5/5", best: "Mejor inteligente" },
  { pos: 5, name: "Rachio 3 Smart Sprinkler 8 zonas", asin: "B07C6MXKLM", price: "€199,00", coverage: "Múltiple", zones: "8 zonas", smart: "WiFi + IA", stars: "4,7/5", best: "Más avanzado" },
];

const faqs = [
  { q: "¿Cuánto ahorra un sistema de riego automático?", a: "Los sistemas de riego automático, especialmente los de goteo, pueden reducir el consumo de agua entre un 30% y un 60% comparado con el riego manual con manguera. Los sistemas inteligentes con sensores meteorológicos ajustan automáticamente el riego según la lluvia y la temperatura, ahorrando hasta un 50% adicional." },
  { q: "¿Riego por goteo o aspersores?", a: "El riego por goteo es más eficiente (el agua va directamente a las raíces, sin pérdidas por evaporación) y es ideal para jardines con plantas, huertos y setos. Los aspersores son mejores para céspedes y superficies amplias donde necesitas mojar una zona grande uniformemente." },
  { q: "¿Es difícil instalar un sistema de riego automático?", a: "Los kits de riego domésticos de marcas como Gardena o Rain Bird están diseñados para la instalación por el propio usuario. Un sistema básico para jardín pequeño-mediano puede instalarse en 2-3 horas sin herramientas especiales. Los sistemas con varias zonas o aspersores soterrados son más complejos y pueden requerir un instalador." },
  { q: "¿Qué es un programador de riego inteligente?", a: "Un programador inteligente (como Orbit B-hyve o Rachio) se conecta a tu WiFi y puede consultar la previsión meteorológica local para no regar cuando va a llover, ajustar la duración según la temperatura y el tipo de suelo, y controlar todo desde el móvil. Supone un ahorro significativo de agua y tiempo." },
  { q: "¿Puedo conectar el riego automático a mi piscina o depuradora?", a: "No directamente: el riego jardín y el circuito de piscina son sistemas separados. El riego automático se conecta directamente a la red de agua doméstica, con un programador instalado entre el grifo y las tuberías de riego." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sistemas de riego automático para jardín — Comparativa 2025",
  description: "Los mejores sistemas de riego automático para jardín.",
  datePublished: "2025-03-15",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/sistema-riego-automatico",
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
    { "@type": "ListItem", position: 3, name: "Sistema riego automático", item: "https://www.guiadelpiscina.com/sistema-riego-automatico" },
  ],
};

export default function SistemaRiegoPage() {
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
          <span className="text-gray-600">Sistema riego automático</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Sistemas de riego automático para jardín — Comparativa 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 marzo 2025 · Actualizado: 1 junio 2025 · 9 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            Un <strong>sistema de riego automático</strong> libera al propietario de la obligación de regar el jardín manualmente y, lo más importante, garantiza que las plantas reciban el agua adecuada en el momento adecuado. Con los sistemas inteligentes actuales, puedes ahorrar hasta un 50% de agua frente al riego manual.
          </p>
          <p>
            En esta guía comparamos los <strong>mejores sistemas de riego automático para jardín</strong> disponibles en Amazon España en 2025, desde kits básicos por 35€ hasta controladores inteligentes por 200€.
          </p>

          <h2>Comparativa — Mejores sistemas de riego 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Cobertura</th>
                <th className="px-3 py-3 text-left">Zonas</th>
                <th className="px-3 py-3 text-left">Inteligente</th>
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
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.coverage}</td>
                  <td className="px-3 py-3 text-gray-600">{p.zones}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.smart}</td>
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

        <AdSenseAd slot="6789012345" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Gardena Kit básico 75 m² — Mejor para jardines pequeños (★★★★)</h3>
          <p>
            El <strong>kit de Gardena</strong> es el punto de entrada perfecto para quien quiere automatizar el riego por primera vez. Incluye todo lo necesario: programador, tuberías, goteros y conectores para cubrir hasta 75 m² de jardín. La calidad Gardena es garantía de durabilidad.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B001DQKUV7")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Gardena Kit en Amazon →
            </a>
          </div>

          <h3>2. Orbit B-hyve WiFi 4 zonas — Mejor controlador inteligente (★★★★½)</h3>
          <p>
            El <strong>Orbit B-hyve</strong> es la opción ideal para quienes ya tienen infraestructura de riego y quieren hacerla inteligente. Controla 4 zonas por WiFi desde el móvil, consulta la meteorología local y puede ajustar automáticamente el riego según la previsión de lluvia.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08KJTKLM5")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Orbit B-hyve en Amazon →
            </a>
          </div>

          <h3>3. Rachio 3 de 8 zonas — Más avanzado (★★★★★)</h3>
          <p>
            El <strong>Rachio 3</strong> es el Rolls-Royce del riego inteligente. Con IA integrada, aprende los patrones de tu jardín, integra datos meteorológicos en tiempo real y puede controlarse desde Alexa, Google Assistant y Apple HomeKit. Ideal para jardines complejos con múltiples zonas.
          </p>

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
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">→ Mejor césped artificial para jardín 2025</Link></li>
            <li><Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">→ Mejores muebles de jardín y terraza 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
