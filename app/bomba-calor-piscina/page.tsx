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
  { pos: 1, name: "Gre HPM20 — Mini Bomba de Calor hasta 20 m³", asin: "B07L491GK5", price: "€499,00", power: "2,5 kW", type: "On/Off", pool: "Hasta 20 m³", stars: "4,2/5", best: "Piscinas pequeñas" },
  { pos: 2, name: "Gre HPM30 — Mini Bomba de Calor hasta 30 m³", asin: "B07L489LBM", price: "€599,00", power: "4,2 kW", type: "On/Off (COP 4)", pool: "Hasta 30 m³", stars: "4,3/5", best: "Mejor precio" },
  { pos: 3, name: "Gre HPGIC30 — Full Inverter hasta 30 m³", asin: "B0CPR89ZNR", price: "€999,00", power: "—", type: "Full Inverter", pool: "Hasta 30 m³", stars: "4,5/5", best: "Mejor conectada (WiFi)" },
  { pos: 4, name: "Gre HPGI50 — Inverter hasta 50 m³", asin: "B08V567FFN", price: "€1.349,00", power: "—", type: "Inverter", pool: "Hasta 50 m³", stars: "4,5/5", best: "Piscinas medianas" },
  { pos: 5, name: "Poolex Q-Line 7 Full Inverter 7 kW", asin: "B08WH533W5", price: "€1.249,00", power: "7 kW", type: "Full Inverter", pool: "30-45 m³", stars: "4,6/5", best: "Mejor eficiencia" },
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
            Las <strong>bombas de calor para piscina</strong> son la forma más eficiente de calentar el agua. Aprovechan la energía del aire exterior para producir hasta 6 veces más calor que el que consumen en electricidad. En esta guía analizamos las mejores opciones del mercado español para 2025, con precios entre 500 y 1.500€. Consulta nuestra <Link href="/tienda/bombas-calor" className="text-sky-600 hover:underline font-medium">comparativa completa de bombas de calor</Link> para ver todos los modelos disponibles.
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
                <th className="px-3 py-3 text-left">Potencia</th>
                <th className="px-3 py-3 text-left">Tipo</th>
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
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.power}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{p.type}</td>
                  <td className="px-3 py-3 text-gray-600">{p.pool}</td>
                  <td className="px-3 py-3 text-yellow-500 font-semibold">⭐ {p.stars}</td>
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

        <AdSenseAd slot="3456789012" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Gre HPM30 — Mejor precio para piscinas hasta 30 m³ (★★★★)</h3>
          <p>
            La <strong>Gre HPM30</strong> es la mini bomba de calor más equilibrada para piscinas desmontables de hasta 30 m³. Funciona en modo <strong>Plug &amp; Play</strong>, sin necesidad de bypass, con conexiones de 32/38 mm compatibles con la mayoría de depuradoras. Con 4,2 kW de potencia y un COP en torno a 4, calienta el agua de forma económica y con una instalación al alcance de cualquiera.
          </p>
          <ul>
            <li><strong>Pros:</strong> Plug &amp; Play sin bypass, conexiones 32/38 mm, marca española (Gre / Fluidra)</li>
            <li><strong>Contras:</strong> Tecnología On/Off (no inverter), para piscinas de hasta 30 m³</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B07L489LBM")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Gre HPM30 en Amazon →
            </a>
          </div>

          <h3>2. Gre HPGIC30 — Full Inverter con WiFi (★★★★½)</h3>
          <p>
            La <strong>Gre HPGIC30</strong> da el salto a la tecnología <strong>Full Inverter</strong>: el compresor regula su velocidad según la demanda, reduciendo el consumo y el ruido. Se controla desde la <strong>app Fluidra</strong> por WiFi y ofrece tres modos de funcionamiento (Boost, Smart y EcoSilence). Incluye cubierta de invierno y está pensada para piscinas de hasta 30 m³.
          </p>
          <ul>
            <li><strong>Pros:</strong> Full Inverter, control WiFi con app Fluidra, 3 modos (Boost/Smart/EcoSilence), cubierta de invierno incluida</li>
            <li><strong>Contras:</strong> Precio superior a los modelos On/Off, requiere red WiFi cercana</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B0CPR89ZNR")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="btn-primary">
              Ver Gre HPGIC30 en Amazon →
            </a>
          </div>

          <h3>3. <Link href="/tienda/bombas-calor/poolex-nano-action-5-bomba-calor" className="text-sky-700 hover:underline">Poolex Q-Line 7 Full Inverter</Link> — La más eficiente (★★★★½)</h3>
          <p>
            La <strong>Poolex Q-Line 7</strong> es una bomba de calor <strong>Full Inverter</strong> de 7 kW para piscinas de 30 a 45 m³. Monta compresor <strong>Toshiba</strong> e intercambiador de titanio, con ventilación vertical, WiFi integrado y LEDs de estado. Es la opción más eficiente y silenciosa del comparativo, con garantía de 3 años en la bomba y 5 años en el compresor.
          </p>
          <ul>
            <li><strong>Pros:</strong> Full Inverter, compresor Toshiba, intercambiador de titanio, WiFi integrado, garantía 5 años compresor</li>
            <li><strong>Contras:</strong> Precio elevado, instalación recomendada por técnico</li>
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

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Las mejores bombas de calor para piscina, comparadas y analizadas.</p>
          <Link href="/tienda/bombas-calor" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver bombas de calor →
          </Link>
        </div>

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
