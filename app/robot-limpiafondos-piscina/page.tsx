import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores robots limpiafondos para piscina 2025 — Guía de compra",
  description:
    "Comparativa de los mejores robots limpiafondos para piscina. Analizamos funciones, autonomía y precio para que elijas el robot perfecto para tu piscina.",
  keywords: "robot limpiafondos, limpiafondos automatico piscina, robot piscina, limpiafondos electrico",
  alternates: { canonical: "https://www.guiadelpiscina.com/robot-limpiafondos-piscina" },
  openGraph: {
    title: "Mejores robots limpiafondos para piscina 2025",
    description: "Comparativa completa de robots limpiafondos con análisis de pros y contras.",
    url: "https://www.guiadelpiscina.com/robot-limpiafondos-piscina",
  },
};

const products = [
  { pos: 1, name: "Dolphin Nauty — Robot compacto", asin: "B07MQDKQ9D", price: "€249,99", coverage: "Fondo", pool: "Hasta 7,5 m", cycle: "2,5 horas", stars: "4,4/5", best: "Mejor precio" },
  { pos: 2, name: "Bestway Flowclear AquaGlide", asin: "B08F5K4L3N", price: "€329,00", coverage: "Fondo + Paredes", pool: "Hasta 12 m", cycle: "2 horas", stars: "4,3/5", best: "Mejor calidad-precio" },
  { pos: 3, name: "Dolphin Sigma — Robot premium", asin: "B07BFKPDXC", price: "€449,99", coverage: "Fondo + Paredes + Línea de agua", pool: "Hasta 15 m", cycle: "2,5 horas", stars: "4,6/5", best: "Mejor rendimiento" },
  { pos: 4, name: "Zodiac Vortex 3 4WD", asin: "B08KJ4H7PR", price: "€529,00", coverage: "Fondo + Paredes + Línea de agua", pool: "Hasta 12 m", cycle: "3 horas", stars: "4,5/5", best: "Mejor tracción" },
  { pos: 5, name: "Dolphin Poolstyle 35 Plus", asin: "B07C6MX4QP", price: "€599,99", coverage: "Fondo + Paredes completas", pool: "Hasta 12 m", cycle: "2 horas", stars: "4,7/5", best: "Mejor limpieza de paredes" },
];

const faqs = [
  { q: "¿Merece la pena un robot limpiafondos eléctrico?", a: "Sí, especialmente si tienes una piscina de más de 30 m². El ahorro de tiempo es enorme (2-3 horas de limpieza manual vs. 2-3 horas automáticas mientras haces otra cosa) y la limpieza es más profunda. En piscinas pequeñas puede ser excesivo; valora un limpiafondos hidráulico." },
  { q: "¿Cuántas veces a la semana debe limpiar el robot?", a: "Lo ideal es usarlo 2-3 veces por semana en temporada alta (julio-agosto) y 1 vez por semana en primavera y otoño. Con hojas cerca de la piscina, puede ser necesario a diario." },
  { q: "¿Robot limpiafondos o limpiafondos hidráulico?", a: "Los robots eléctricos son más eficaces (limpian fondo, paredes y línea de agua) y no dependen de la depuradora. Los hidráulicos son más baratos pero necesitan la bomba encendida y solo limpian el fondo. Para piscinas de más de 40 m², el robot merece la inversión." },
  { q: "¿Qué pasa con las hojas y el pelo?", a: "La mayoría de robots tienen cesta o bolsa de filtrado que recoge hojas, pelo y suciedad fina. Asegúrate de vaciarla después de cada uso. Los modelos premium tienen filtros de doble etapa que recogen partículas muy pequeñas." },
  { q: "¿Cuánto consume un robot limpiafondos?", a: "El consumo es muy bajo, entre 150 y 250 vatios por hora. Un ciclo de 2,5 horas supone apenas 0,4-0,6 kWh, menos de 0,10€ al precio actual de la electricidad. Son notablemente más eficientes que la bomba de la depuradora." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores robots limpiafondos para piscina 2025 — Guía de compra",
  description: "Comparativa de los mejores robots limpiafondos para piscina.",
  datePublished: "2025-05-20",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/robot-limpiafondos-piscina",
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
    { "@type": "ListItem", position: 3, name: "Robot limpiafondos piscina", item: "https://www.guiadelpiscina.com/robot-limpiafondos-piscina" },
  ],
};

export default function RobotLimpiafondosPage() {
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
          <span className="text-gray-600">Robot limpiafondos</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores robots limpiafondos para piscina 2025 — Guía de compra
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 20 mayo 2025 · Actualizado: 1 junio 2025 · 11 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            Un <strong>robot limpiafondos</strong> transforma el mantenimiento de la piscina: en lugar de pasar horas con el aspirador manual, el robot limpia el fondo, las paredes e incluso la línea de agua mientras tú disfrutas. En esta guía analizamos los <strong>5 mejores robots limpiafondos</strong> para piscina disponibles en Amazon España en 2025.
          </p>
          <p>
            Los precios oscilan entre 250 y 600€, una inversión que se amortiza rápidamente si consideras el tiempo y el esfuerzo que ahorras durante toda la temporada.
          </p>

          <h2>Comparativa — Mejores robots limpiafondos 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Cobertura</th>
                <th className="px-3 py-3 text-left">Piscina</th>
                <th className="px-3 py-3 text-left">Ciclo</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.pool}</td>
                  <td className="px-3 py-3 text-gray-600">{p.cycle}</td>
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

        <AdSenseAd slot="2345678901" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Dolphin Nauty — El más asequible (★★★★)</h3>
          <p>
            El <strong>Dolphin Nauty</strong> es el punto de entrada ideal si quieres un robot de calidad sin gastar demasiado. Solo limpia el fondo, pero lo hace muy bien: doble cepillo de PVC que se adapta a cualquier superficie, filtro de doble paso y ciclo de 2,5 horas.
          </p>
          <ul>
            <li><strong>Pros:</strong> Precio accesible, fácil de usar, buena limpieza de fondo</li>
            <li><strong>Contras:</strong> No sube paredes, cable de 12 metros (limita en piscinas largas)</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B07MQDKQ9D")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Dolphin Nauty en Amazon →
            </a>
          </div>

          <h3>2. Bestway Flowclear AquaGlide — Mejor calidad-precio (★★★★)</h3>
          <p>
            El <strong>Bestway AquaGlide</strong> da el salto a la limpieza de paredes a un precio muy competitivo. Su sistema de navegación por giroscopio cubre la piscina de forma eficiente y los filtros son fáciles de limpiar.
          </p>
          <ul>
            <li><strong>Pros:</strong> Limpia fondo y paredes, buen precio, fácil mantenimiento</li>
            <li><strong>Contras:</strong> No alcanza la línea de agua, menos potente en paredes muy inclinadas</li>
          </ul>

          <h3>3. Dolphin Sigma — El más completo (★★★★½)</h3>
          <p>
            El <strong>Dolphin Sigma</strong> es el preferido de los usuarios con piscinas medianas-grandes. Limpia fondo, paredes y línea de agua con su cepillo de cobertura total, y el carrito de transporte incluido facilita mucho el almacenamiento.
          </p>
          <ul>
            <li><strong>Pros:</strong> Cobertura total, excelente filtración, carrito incluido, app Wi-Fi</li>
            <li><strong>Contras:</strong> Precio elevado, el cable puede enredarse en piscinas con muchas esquinas</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B07BFKPDXC")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Dolphin Sigma en Amazon →
            </a>
          </div>

          <h2>¿Cómo elegir el robot limpiafondos adecuado?</h2>
          <ul>
            <li><strong>Tamaño de la piscina:</strong> Verifica que el cable llega a todos los rincones.</li>
            <li><strong>Tipo de superficie:</strong> Liner, hormigón, gresite — cada material necesita el tipo de cepillo adecuado.</li>
            <li><strong>Cobertura:</strong> ¿Solo fondo, o también paredes y línea de agua?</li>
            <li><strong>Filtración:</strong> Los filtros finos (50-100 micras) recogen incluso polvo y algas.</li>
            <li><strong>Conectividad:</strong> Algunos modelos tienen app para programar ciclos de limpieza.</li>
          </ul>

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
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las 5 mejores depuradoras para piscina 2025</Link></li>
            <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina: las mejores opciones</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
