import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Las 5 mejores depuradoras para piscina en 2025 — Análisis y comparativa",
  description:
    "Comparativa de las mejores depuradoras para piscina del mercado español. Analizamos rendimiento, consumo y precio para que elijas la mejor opción.",
  keywords: "mejores depuradoras piscina, depuradora piscina precio, depuradora arena piscina, filtro piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/mejores-depuradoras-piscina" },
  openGraph: {
    title: "Las 5 mejores depuradoras para piscina en 2025",
    description: "Comparativa completa de depuradoras para piscina con análisis de pros y contras.",
    url: "https://www.guiadelpiscina.com/mejores-depuradoras-piscina",
  },
};

const products = [
  { pos: 1, name: "Intex 28636 — Depuradora de arena", asin: "B074W7D3KJ", price: "€159,99", flow: "8.000 l/h", motor: "0,75 CV", pool: "Hasta 26.500 l", stars: "4,5/5", best: "Mejor calidad-precio" },
  { pos: 2, name: "Bestway Flowclear 58496 — Depuradora arena", asin: "B07CQGQM3P", price: "€179,99", flow: "9.463 l/h", motor: "0,80 CV", pool: "Hasta 30.000 l", stars: "4,3/5", best: "Mejor para piscinas medianas" },
  { pos: 3, name: "Gre AR450 — Depuradora arena profesional", asin: "B001DQKUV6", price: "€249,00", flow: "11.000 l/h", motor: "1,00 CV", pool: "Hasta 40.000 l", stars: "4,6/5", best: "Mejor rendimiento" },
  { pos: 4, name: "Hayward S180T — Depuradora arena premium", asin: "B000BG2J3Q", price: "€329,00", flow: "14.000 l/h", motor: "1,25 CV", pool: "Hasta 55.000 l", stars: "4,7/5", best: "Mejor piscinas grandes" },
  { pos: 5, name: "Intex 28648 — Depuradora cartucho compacta", asin: "B00AHZXZPU", price: "€89,99", flow: "3.785 l/h", motor: "0,35 CV", pool: "Hasta 15.000 l", stars: "4,1/5", best: "Mejor precio absoluto" },
];

const faqs = [
  { q: "¿Qué tamaño de depuradora necesito para mi piscina?", a: "El caudal de la depuradora debe procesar todo el volumen de agua de la piscina en 4-6 horas. Divide el volumen en litros entre 6 para obtener el caudal mínimo necesario en l/h. Por ejemplo, una piscina de 30.000 litros necesita una depuradora de al menos 5.000 l/h." },
  { q: "¿Cuántas horas al día debe funcionar la depuradora?", a: "En verano, con temperaturas superiores a 25°C, se recomienda que la depuradora funcione entre 8 y 12 horas diarias. En primavera y otoño, con 4-6 horas es suficiente. Programa el funcionamiento en las horas de menor coste eléctrico." },
  { q: "¿Depuradora de arena o de cartucho?", a: "Las depuradoras de arena son más eficientes y duraderas para piscinas medianas y grandes. Las de cartucho son más económicas y fáciles de mantener, pero adecuadas solo para piscinas pequeñas. Si tu piscina tiene más de 10.000 litros, elige arena." },
  { q: "¿Con qué frecuencia hay que cambiar la arena?", a: "La arena de sílex de las depuradoras suele durar entre 3 y 5 años si se mantiene correctamente. Señales de que hay que cambiarla: el agua no se clarifica bien incluso con el cloro en niveles correctos, o la presión del filtro sube mucho." },
  { q: "¿Qué consumo eléctrico tiene una depuradora de piscina?", a: "Depende del motor. Una depuradora de 0,75 CV consume aproximadamente 550 vatios por hora. Si funciona 8 horas al día, supone unos 4,4 kWh diarios. Con un precio de 0,15€/kWh, el coste sería de aproximadamente 0,66€ al día o 60€ en una temporada de 90 días." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las 5 mejores depuradoras para piscina en 2025 — Análisis y comparativa",
  description: "Comparativa de las mejores depuradoras para piscina del mercado español.",
  datePublished: "2025-05-15",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/mejores-depuradoras-piscina",
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
    { "@type": "ListItem", position: 3, name: "Mejores depuradoras piscina", item: "https://www.guiadelpiscina.com/mejores-depuradoras-piscina" },
  ],
};

export default function DepuradorasPage() {
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
          <span className="text-gray-600">Depuradoras piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Las 5 mejores depuradoras para piscina en 2025 — Análisis y comparativa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 mayo 2025 · Actualizado: 1 junio 2025 · 12 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            La depuradora es el corazón de cualquier piscina. Sin una buena filtración, el agua se vuelve turbia y proliferan algas y bacterias que hacen que bañarse sea un riesgo para la salud. En esta guía analizamos las <strong>5 mejores depuradoras de piscina</strong> disponibles en Amazon España en 2025, con precios entre 90 y 330€.
          </p>
          <p>
            Hemos analizado más de 20 modelos, comparado especificaciones técnicas y revisado miles de reseñas de usuarios para darte las recomendaciones más fiables del mercado.
          </p>

          <h2>Tabla comparativa — Las mejores depuradoras 2025</h2>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Caudal</th>
                <th className="px-3 py-3 text-left">Motor</th>
                <th className="px-3 py-3 text-left">Piscina max.</th>
                <th className="px-3 py-3 text-left">Valoración</th>
                <th className="px-3 py-3 text-left">Ver en Amazon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-sky-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3 text-gray-600">{p.flow}</td>
                  <td className="px-3 py-3 text-gray-600">{p.motor}</td>
                  <td className="px-3 py-3 text-gray-600">{p.pool}</td>
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

        <AdSenseAd slot="1234567890" />

        <div className="prose">
          <h2>Análisis detallado de cada depuradora</h2>

          <h3>1. Intex 28636 — Mejor calidad-precio (★★★★½)</h3>
          <p>
            La <strong>Intex 28636</strong> es la depuradora de arena más vendida en España y con razón. Ofrece un caudal de 8.000 l/h con un motor de 0,75 CV, suficiente para piscinas de hasta 26.500 litros. Su montaje es sencillo y viene con una válvula multiposición de 6 vías que facilita el lavado, enjuague y vaciado.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>Excelente relación calidad-precio</li>
            <li>Fácil de montar (instrucciones claras)</li>
            <li>Silenciosa en funcionamiento</li>
            <li>Recambios fáciles de encontrar</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>Para piscinas de más de 30.000 litros se queda corta</li>
            <li>El temporizador integrado es básico</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B074W7D3KJ")} target="_blank" rel="noopener noreferrer sponsored"
              className="btn-primary">
              Ver Intex 28636 en Amazon →
            </a>
          </div>

          <h3>2. Bestway Flowclear 58496 — Mejor para piscinas medianas (★★★★)</h3>
          <p>
            La <strong>Bestway Flowclear 58496</strong> es ideal para piscinas de entre 15.000 y 30.000 litros. Con 9.463 l/h de caudal y un diseño compacto, es perfecta para espacios con poco margen. Su sistema de filtrado de arena es altamente eficaz y el mantenimiento es mínimo.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>Gran caudal para su tamaño</li>
            <li>Construcción robusta</li>
            <li>Compatible con dosificadores de cloro</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>Algo más ruidosa que la Intex</li>
            <li>Manual de instrucciones mejorable</li>
          </ul>

          <h3>3. Gre AR450 — Mejor rendimiento (★★★★½)</h3>
          <p>
            La <strong>Gre AR450</strong> da un salto de calidad importante. Con 11.000 l/h y motor de 1 CV, es capaz de mantener perfectamente una piscina de 40.000 litros. Su construcción es más robusta y la válvula de 6 vías es de mejor calidad que en los modelos anteriores.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>Construida para durar (calidad profesional)</li>
            <li>Fácil mantenimiento y limpieza</li>
            <li>Bajo nivel de ruido</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>Precio más elevado</li>
            <li>Requiere espacio para instalación</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B001DQKUV6")} target="_blank" rel="noopener noreferrer sponsored"
              className="btn-primary">
              Ver Gre AR450 en Amazon →
            </a>
          </div>

          <h3>4. Hayward S180T — Mejor para piscinas grandes (★★★★★)</h3>
          <p>
            Si tienes una piscina grande o semiprofesional, la <strong>Hayward S180T</strong> es la elección correcta. Con 14.000 l/h y fabricación de primera calidad, esta depuradora tiene una vida útil de más de 10 años con un mantenimiento adecuado.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>Calidad y durabilidad excepcionales</li>
            <li>Ideal para piscinas enterradas grandes</li>
            <li>Excelente soporte técnico de la marca</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>Precio más alto del comparativo</li>
            <li>Instalación recomendada por profesional</li>
          </ul>

          <h3>5. Intex 28648 — Mejor precio absoluto (★★★★)</h3>
          <p>
            Para piscinas pequeñas de hasta 15.000 litros, la <strong>Intex 28648 de cartucho</strong> es la opción más económica y fácil de usar. Sin arena que gestionar, el mantenimiento se reduce a lavar el cartucho con la manguera.
          </p>

          <h2>Guía de compra: cómo elegir la mejor depuradora</h2>
          <p>Antes de comprar, considera estos factores clave:</p>
          <ul>
            <li><strong>Volumen de tu piscina:</strong> El caudal debe filtrar todo el agua en máximo 6 horas.</li>
            <li><strong>Tipo de filtro:</strong> Arena para piscinas medianas-grandes, cartucho para pequeñas.</li>
            <li><strong>Consumo eléctrico:</strong> Busca motores eficientes. La diferencia entre marcas puede ser de 100€/año.</li>
            <li><strong>Ruido:</strong> Si la piscina está cerca de la casa o de los vecinos, prioritiza modelos silenciosos.</li>
            <li><strong>Garantía y recambios:</strong> Elige marcas con buena red de servicio técnico en España.</li>
          </ul>

          <h2>Preguntas frecuentes sobre depuradoras de piscina</h2>
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
            <li><Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">→ Mejores robots limpiafondos para piscina 2025</Link></li>
            <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina: las mejores opciones</Link></li>
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
