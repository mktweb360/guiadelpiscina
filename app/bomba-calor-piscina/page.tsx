import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Bomba de calor para piscina: las mejores opciones y cómo elegir | 2025",
  description:
    "Las mejores bombas de calor para piscina en España. Comparativa por potencia, COP y precio. Aprende a elegir la bomba perfecta para alargar la temporada de baño.",
  keywords: "bomba calor piscina, calentador piscina, bomba calor piscina precio, calentar piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/bomba-calor-piscina" },
  openGraph: {
    title: "Bomba de calor para piscina: las mejores opciones 2025",
    description: "Comparativa de bombas de calor para piscina con análisis de potencia, COP y precio.",
    url: "https://www.guiadelpiscina.com/bomba-calor-piscina",
  },
};

const products = [
  { pos: 1, name: "Bestway Flowclear — 2.200 W", asin: "B07JKXL9G3", price: "€499,99", power: "2,2 kW (calor 12 kW)", cop: "5,5", pool: "Hasta 30 m³", stars: "4,2/5", best: "Mejor precio" },
  { pos: 2, name: "Hayward HeatPro HP50 — 5.600 W", asin: "B002P6QUTM", price: "€849,00", power: "5,6 kW (calor 14 kW)", cop: "5,5", pool: "Hasta 50 m³", stars: "4,5/5", best: "Mejor calidad-precio" },
  { pos: 3, name: "Zodiac ZS500 Pro Inverter — 6.000 W", asin: "B08TH3BKGK", price: "€1.199,00", power: "6 kW (calor 16 kW)", cop: "6,2", pool: "Hasta 60 m³", stars: "4,6/5", best: "Mejor eficiencia" },
  { pos: 4, name: "Gre HPM35 — Inverter silenciosa", asin: "B07DKXR8JS", price: "€1.499,00", power: "3,5 kW (calor 14 kW)", cop: "6,8", pool: "Hasta 50 m³", stars: "4,7/5", best: "Más silenciosa" },
  { pos: 5, name: "Hayward HP21004T Pro Logic — 2.100 W", asin: "B00AFZQR9E", price: "€1.899,00", power: "21 kW (calor 105 kW)", cop: "5,0", pool: "Hasta 200 m³", stars: "4,8/5", best: "Mejor piscinas grandes" },
];

const faqs = [
  { q: "¿Cuánto ahorra una bomba de calor frente a una resistencia eléctrica?", a: "Mucho. Una bomba de calor con COP 5 produce 5 kWh de calor por cada 1 kWh consumido. Una resistencia eléctrica produce 1 kWh por 1 kWh consumido. Esto supone un ahorro del 80% en el coste de calentamiento. Con la electricidad a 0,15€/kWh, calentar una piscina de 50 m³ puede costar unos 150€ la temporada con bomba de calor vs. 750€ con resistencia." },
  { q: "¿A qué temperatura puede calentar el agua?", a: "La mayoría de bombas de calor domésticas pueden calentar el agua hasta 35-40°C, más que suficiente para nadar cómodamente. La temperatura ideal para bañarse es entre 26 y 29°C." },
  { q: "¿Funciona la bomba de calor en invierno?", a: "Las bombas de calor convencionales funcionan con temperaturas exteriores por encima de 10-15°C. Los modelos inverter de última generación pueden operar hasta con temperaturas de 5°C. En invierno en el norte de España puede ser insuficiente; en el sur y en piscinas cubiertas funciona bien durante gran parte del año." },
  { q: "¿Cuánto tiempo tarda en calentar la piscina?", a: "Depende de la potencia de la bomba y del volumen de agua. Una bomba de 14 kW calienta una piscina de 50 m³ a 3-4°C por día en condiciones ideales (temperatura exterior 25°C). Para pasar de 20°C a 27°C necesitarías entre 2 y 3 días. Las de mayor potencia lo hacen más rápido." },
  { q: "¿Qué tamaño de bomba de calor necesito?", a: "La regla general es calcular entre 0,2 y 0,4 kW de potencia por m³ de agua, dependiendo de las pérdidas de calor (temperatura exterior, viento, cubierta). Para una piscina de 50 m³, necesitas entre 10 y 20 kW de potencia térmica. Consulta siempre el COP del equipo para calcular el consumo real." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bomba de calor para piscina: las mejores opciones y cómo elegir",
  description: "Las mejores bombas de calor para piscina en España, comparativa por potencia y precio.",
  datePublished: "2025-06-01",
  dateModified: "2025-06-09",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/bomba-calor-piscina",
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
    { "@type": "ListItem", position: 3, name: "Bomba de calor piscina", item: "https://www.guiadelpiscina.com/bomba-calor-piscina" },
  ],
};

export default function BombaCalorPage() {
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
          <span className="text-gray-600">Bomba de calor piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Bomba de calor para piscina: las mejores opciones y cómo elegir
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 junio 2025 · Actualizado: 9 junio 2025 · 14 min lectura</p>

        <AffiliateDisclosure />

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-semibold text-sm">
            💡 Dato clave: Una bomba de calor puede suponer un ahorro del 75-80% en el coste de calentamiento frente a una resistencia eléctrica tradicional.
          </p>
        </div>

        <div className="prose">
          <p>
            Las <strong>bombas de calor para piscina</strong> son la forma más eficiente de calentar el agua. Aprovechan la energía del aire exterior para producir hasta 6 veces más calor que el que consumen en electricidad. En esta guía analizamos las mejores opciones del mercado español para 2025, con precios entre 500 y 1.900€.
          </p>
          <p>
            Una buena bomba de calor puede alargar la temporada de baño de junio-septiembre a mayo-octubre o incluso todo el año en climas templados del sur de España. La inversión inicial se recupera en 2-3 temporadas gracias al ahorro en la factura eléctrica.
          </p>

          <h2>Comparativa — Mejores bombas de calor para piscina 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Potencia</th>
                <th className="px-3 py-3 text-left">COP</th>
                <th className="px-3 py-3 text-left">Piscina</th>
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
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.power}</td>
                  <td className="px-3 py-3 text-gray-600">{p.cop}</td>
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

        <AdSenseAd slot="3456789012" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Bestway Flowclear 2.200 W — La más asequible (★★★★)</h3>
          <p>
            La <strong>Bestway Flowclear</strong> es la opción de entrada más popular en España. Con 2.200 W de consumo y una potencia térmica de 12 kW (COP 5,5), es ideal para piscinas de hasta 30 m³. Su instalación es sencilla y se conecta directamente al sistema de filtración existente.
          </p>
          <ul>
            <li><strong>Pros:</strong> Precio accesible, fácil instalación, buen COP para su precio</li>
            <li><strong>Contras:</strong> No apta para grandes piscinas, sin función inverter</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B07JKXL9G3")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Bestway Flowclear en Amazon →
            </a>
          </div>

          <h3>2. Hayward HeatPro HP50 — Mejor calidad-precio (★★★★½)</h3>
          <p>
            La <strong>Hayward HeatPro</strong> es la más vendida en el segmento profesional residencial. Su COP de 5,5 y la potencia de 14 kW la hacen perfecta para piscinas de 40-60 m³. Hayward es sinónimo de calidad y durabilidad en el sector de las piscinas.
          </p>
          <ul>
            <li><strong>Pros:</strong> Marca de referencia, buena relación potencia-precio, durabilidad contrastada</li>
            <li><strong>Contras:</strong> Precio medio-alto, sin control remoto incluido</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B002P6QUTM")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Hayward HeatPro en Amazon →
            </a>
          </div>

          <h3>3. Zodiac ZS500 Pro Inverter — La más eficiente (★★★★½)</h3>
          <p>
            La <strong>Zodiac ZS500</strong> introduce la tecnología <strong>inverter</strong> en el rango doméstico: el compresor regula su velocidad según la demanda, lo que reduce el consumo hasta un 30% adicional. Con COP 6,2, es el modelo más eficiente del comparativo.
          </p>
          <ul>
            <li><strong>Pros:</strong> Tecnología inverter, máxima eficiencia, silenciosa en funcionamiento parcial</li>
            <li><strong>Contras:</strong> Precio elevado, requiere instalación por técnico certificado</li>
          </ul>

          <h2>Guía de compra: cómo elegir bomba de calor para piscina</h2>
          <ul>
            <li><strong>Calcula el volumen:</strong> Largo × ancho × profundidad media × 1.000 = litros.</li>
            <li><strong>Potencia necesaria:</strong> Aproximadamente 0,2-0,4 kW por m³ de agua.</li>
            <li><strong>COP:</strong> Busca mínimo COP 5. Un COP 6 significa 40% menos consumo que COP 4.</li>
            <li><strong>Inverter vs. On-Off:</strong> Los inverter son más caros pero más silenciosos y eficientes a largo plazo.</li>
            <li><strong>Temperatura de funcionamiento:</strong> Comprueba hasta qué temperatura exterior funciona correctamente.</li>
            <li><strong>Instalación:</strong> Conecta siempre después de la depuradora y antes del clorador.</li>
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
            <li><Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">→ Mejores robots limpiafondos para piscina 2025</Link></li>
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
