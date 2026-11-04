import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

// Artículo 04/11/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Fórmulas: geometría estándar (sin fuente normativa). Capacidades declaradas: fichas de Intex y Bestway en Amazon.es (data/products.ts), consultadas el 04/11/2026. Sin dosis de producto: se remite a la etiqueta.

const TITLE = "Cuántos litros tiene tu piscina: fórmulas para calcular el volumen con ejemplos";
const SEO_TITLE = "Cómo calcular los litros de una piscina";
const H1 = "Cómo calcular los litros de una piscina rectangular, redonda u ovalada (con ejemplos resueltos)";
const URL = "https://www.guiadelpiscina.com/calcular-litros-piscina";
const DESCRIPTION =
  "Fórmulas para calcular el volumen de una piscina rectangular, redonda, ovalada o con fondo inclinado, con ejemplos resueltos, por qué la capacidad real es menor que la bruta y qué cálculos dependen de los litros.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "calcular litros piscina, volumen piscina, cuantos litros tiene mi piscina, calcular volumen piscina redonda, calcular volumen piscina rectangular, piscina ovalada litros, metros cúbicos piscina",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Cómo calcular los litros de una piscina rectangular, redonda u ovalada, con ejemplos resueltos y los errores más comunes al medirla.",
    url: URL,
  },
};

const faqs = [
  {
    "q": "¿Cómo se calculan los litros de una piscina?",
    "a": "Multiplica la superficie del agua por su profundidad, todo en metros, y el resultado (m³) por 1.000. En una rectangular, largo × ancho × profundidad; en una redonda, 3,1416 × radio × radio × profundidad; en una ovalada, 3,1416 × (largo ÷ 2) × (ancho ÷ 2) × profundidad."
  },
  {
    "q": "¿Se usa la altura de la pared o la del agua?",
    "a": "La del agua. Si calculas con la altura de la pared obtendrás un volumen bruto mayor que el real: en las piscinas desmontables de nuestro catálogo, la capacidad declarada ronda el 85 % del bruto en las tubulares y baja a cerca del 69 % en las de aro hinchable."
  },
  {
    "q": "¿Cuántos litros hay en un metro cúbico?",
    "a": "1.000 litros. Una piscina de 12,7 m³ tiene 12.700 litros."
  },
  {
    "q": "¿Cómo calculo el volumen de una piscina con forma irregular?",
    "a": "Divide la forma en rectángulos y círculos, calcula cada parte y suma, o mide con el contador de agua al llenarla. La diferencia entre la lectura inicial y final es el volumen real."
  },
  {
    "q": "¿Para qué sirve conocer los litros?",
    "a": "Para elegir la depuradora y la bomba de calor y para adaptar las cantidades de producto de la etiqueta a tu piscina. Para los productos, usa siempre la dosis que figure en la etiqueta del fabricante."
  },
  {
    "q": "¿Los litros de la caja de la piscina son fiables?",
    "a": "Son el dato del fabricante y es el que debes usar para dosificar y elegir equipo, siempre que el agua llegue al nivel recomendado. Si la llenas menos, tendrás menos litros que los declarados."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description:
      "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["piscinas desmontables","volumen de piscinas","mantenimiento de piscinas"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: URL,
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/opengraph-image", width: 1200, height: 630 },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#respuesta-directa", "h1"] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.guiadelpiscina.com/blog" },
    { "@type": "ListItem", position: 3, name: "Calcular los litros de una piscina", item: URL },
  ],
};

export default function CalcularLitrosPiscinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:items-start">
          <article>
            <nav className="text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-sky-600">Inicio</Link>
              {" › "}
              <Link href="/blog" className="hover:text-sky-600">Blog</Link>
              {" › "}
              <span className="text-gray-600">Calcular los litros de una piscina</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
            <p className="text-gray-400 text-sm mb-6">Publicado: 4 noviembre 2026 · Actualizado: 4 noviembre 2026 · 6 min lectura</p>
            <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
              <span>✍️</span>
              <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
            </span>

            <AffiliateDisclosure />

            <div className="prose">
              <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  El volumen es <strong>superficie × profundidad del agua</strong>, en metros, y el resultado en m³ se multiplica por 1.000 para tener litros. En una <strong>rectangular</strong>: largo × ancho × profundidad. En una <strong>redonda</strong>: 3,1416 × radio × radio × profundidad. En una <strong>ovalada</strong>: 3,1416 × (largo ÷ 2) × (ancho ÷ 2) × profundidad. Usa siempre la altura del <strong>agua</strong>, no la de la pared, y el <strong>radio</strong>, no el diámetro.
                </p>
              </div>

              <p>
                Los litros condicionan casi todo: el tamaño de la depuradora, la bomba de calor y la cantidad de producto que se echa. Esta guía sirve para quien tiene una piscina sin datos del fabricante, una de obra o una desmontable con el agua a otra altura de la que marca la caja. Si estás eligiendo piscina, mira antes las de <Link href="/piscina-desmontable-redonda" className="text-sky-600 hover:underline">forma redonda</Link> y <Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">rectangulares</Link>; si lo que buscas es la dosis de cloro, la guía de <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">cuánto cloro echar</Link> parte de este mismo cálculo.
              </p>
            </div>

<div className="prose">

              <h2>Qué hay que medir y con qué</h2>
              <p>
                Un metro o una cinta de obra, y mide en metros con dos decimales (1,07 m, no «un metro y pico»). Lo que importa es el agua, no la estructura:
              </p>
              <ul>
                <li><strong>Largo y ancho (o diámetro):</strong> medidas interiores en la superficie del agua. En una piscina desmontable, la lona se curva con el peso del agua y la medida de la caja es un valor nominal.</li>
                <li><strong>Profundidad:</strong> desde el fondo hasta la línea del agua, no hasta el borde. Si la piscina está llena al nivel de funcionamiento del skimmer, esa es tu altura.</li>
                <li><strong>Profundidad media:</strong> si el fondo tiene pendiente, suma la parte menos profunda y la más profunda y divide entre dos. Solo vale si la pendiente es uniforme.</li>
              </ul>

              <h2>Fórmulas por forma de piscina</h2>
              <p>Con todas las medidas en metros, el resultado sale en metros cúbicos. Un m³ son 1.000 litros.</p>
</div>

            <AdSenseAd placement="contenido" />

<div className="overflow-x-auto my-6">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="bg-sky-600 text-white">
        <th className="px-3 py-3 text-left">Forma</th>
        <th className="px-3 py-3 text-left">Fórmula</th>
        <th className="px-3 py-3 text-left">Ejemplo resuelto</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Rectangular</td>
        <td className="px-3 py-3 text-gray-600">largo × ancho × profundidad</td>
        <td className="px-3 py-3 text-gray-600">4,00 × 2,00 × 0,75 = 6,00 m³ = 6.000 litros</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Redonda</td>
        <td className="px-3 py-3 text-gray-600">3,1416 × radio × radio × profundidad</td>
        <td className="px-3 py-3 text-gray-600">Diámetro 3,60 m (radio 1,80) y agua a 0,90 m: 3,1416 × 1,80 × 1,80 × 0,90 = 9,16 m³ = unos 9.160 litros</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Ovalada</td>
        <td className="px-3 py-3 text-gray-600">3,1416 × (largo ÷ 2) × (ancho ÷ 2) × profundidad</td>
        <td className="px-3 py-3 text-gray-600">5,40 × 3,00 m y agua a 1,00 m: 3,1416 × 2,70 × 1,50 × 1,00 = 12,72 m³ = unos 12.720 litros</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Fondo inclinado</td>
        <td className="px-3 py-3 text-gray-600">largo × ancho × (mínima + máxima) ÷ 2</td>
        <td className="px-3 py-3 text-gray-600">8,00 × 4,00 m, de 0,90 a 1,70 m: profundidad media 1,30 m; 8 × 4 × 1,30 = 41,6 m³ = 41.600 litros</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Forma de riñón o irregular</td>
        <td className="px-3 py-3 text-gray-600">dividir en rectángulos y círculos, calcular cada uno y sumar</td>
        <td className="px-3 py-3 text-gray-600">Si no sale claro, mide con el contador (ver más abajo)</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="prose">

              <p>
                La fórmula de la ovalada es una aproximación: da el volumen de una elipse perfecta. Muchas piscinas «ovaladas» tienen extremos curvos y lados rectos y tienen algo más de volumen; el error suele ser pequeño, pero conviene saberlo.
              </p>

              <h2>Por qué tu piscina desmontable tiene menos litros de los que salen</h2>
              <p>
                Si calculas con las medidas de la caja (largo × ancho × altura de la pared), obtienes el volumen bruto, y las fichas declaran siempre un número menor, porque el agua no llega al borde y la lona no es una caja perfecta. Con las piscinas de nuestro catálogo, el patrón es este:
              </p>
              <ul>
                <li><strong>Intex rectangular 300 × 200 × 75 cm:</strong> bruto 3,00 × 2,00 × 0,75 = 4.500 litros; declarados 3.834, un 85 %.</li>
                <li><strong>Intex rectangular 488 × 244 × 107 cm:</strong> bruto 4,88 × 2,44 × 1,07 = 12.741 litros; declarados 10.874, un 85 %.</li>
                <li><strong>Intex redonda Prism Frame Ø457 × 122 cm:</strong> bruto 3,1416 × 2,285 × 2,285 × 1,22 = 20.012 litros; declarados 16.805, un 84 %.</li>
                <li><strong>Intex redonda de aro hinchable Ø305 × 76 cm:</strong> bruto 3,1416 × 1,525 × 1,525 × 0,76 = 5.553 litros; declarados 3.853, un 69 %. En las de aro, el agua queda más abajo del borde y la proporción es menor.</li>
              </ul>
              <p>
                Para dosificar o elegir equipo, usa el dato del fabricante si lo tienes. Si no, calcula con la altura real del agua y no con la de la pared: es la única forma de no pasarte por exceso.
              </p>

              <h2>Un método sin fórmulas: el contador de agua</h2>
              <p>
                Si llenas la piscina con manguera y tienes contador, apunta la lectura antes y después. La diferencia en m³ es tu volumen real, con la piscina de la forma que sea. Funciona para una piscina irregular y para comprobar que las fórmulas no se equivocan. Si la piscina ya está llena, anótalo la próxima vez que la rellenes.
              </p>

              <h2>Qué depende de los litros (y qué no te decimos aquí)</h2>
              <ul>
                <li><strong>Productos químicos.</strong> La cantidad depende de los litros, pero también del producto y de cómo esté el agua. No damos dosis por litro: las fija el fabricante en la etiqueta. Lo que sí puedes hacer con tu volumen es adaptar la etiqueta: si indica una cantidad para cada 10 m³ y tu piscina tiene 12,7 m³, multiplicas esa cantidad por 1,27. Con 9,2 m³ la multiplicas por 0,92.</li>
                <li><strong>Depuradora.</strong> El caudal en litros por hora marca cuánto tarda en pasar toda el agua por el filtro. Con 9.150 litros y una depuradora de 2.006 l/h salen unas 4,6 horas por ciclo completo. <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">Elegir depuradora</Link> empieza por los litros reales, y <Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">en piscinas pequeñas</Link> el margen es más estrecho.</li>
                <li><strong>Calefacción.</strong> Las bombas de calor indican en su ficha el volumen máximo de piscina para el que sirven: <Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">la guía de bombas de calor</Link> explica cómo compararlos.</li>
                <li><strong>Agua de llenado y vaciado.</strong> Saber que tu piscina tiene 9 m³ y no 12 te evita comprar de más o vaciar de más.</li>
              </ul>

              <h2>Errores frecuentes al calcular</h2>
              <ul>
                <li><strong>Usar el diámetro en lugar del radio.</strong> Es el fallo más grave: el resultado sale cuatro veces mayor. Con Ø3,60 m a 0,90 m de agua, usar 3,60 en lugar de 1,80 daría unos 36.640 litros en vez de 9.160.</li>
                <li>Medir la altura de la pared y no la del agua.</li>
                <li>Mezclar centímetros y metros: pasa todo a metros antes de multiplicar.</li>
                <li>Aplicar la fórmula de la rectangular a una piscina con esquinas muy redondeadas.</li>
                <li>Olvidar que la profundidad media de una piscina con pendiente no es la máxima.</li>
              </ul>
</div>

            <div className="prose">
              <h2>Preguntas frecuentes sobre el volumen de la piscina</h2>
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

            <div className="prose">
              <p className="text-sm text-gray-500">
                Fuentes: fórmulas geométricas estándar (superficie × profundidad); capacidades declaradas en las fichas de Intex (300 × 200 × 75, 488 × 244 × 107, Prism Frame Ø457 × 122 y Easy Set Ø305 × 76) y Bestway (Steel Pro MAX 366 × 100, depuradora de 2.006 l/h) en Amazon.es, consultadas el 4 de noviembre de 2026. Las dosis de productos químicos no se incluyen: las determina la etiqueta de cada producto.
              </p>
            </div>

            <AffiliateDisclosure />

            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
              <p className="text-sm text-gray-600 mb-4">Piscinas desmontables de nuestra selección, con su capacidad en litros.</p>
              <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
                Ver piscinas desmontables →
              </Link>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ Cuánto cloro echar a la piscina</Link></li>
                <li><Link href="/piscina-desmontable-redonda" className="text-sky-600 hover:underline">→ Piscina desmontable redonda</Link></li>
                <li><Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">→ Piscina desmontable rectangular</Link></li>
                <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Mejores depuradoras de piscina</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/piscinas-desmontables" ctaText="Ver piscinas desmontables" />
        </div>
      </div>
    </>
  );
}
