import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 18/10/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Volúmenes de piscina y datos de depuradoras: fichas y títulos de producto de Amazon.es consultados el 18/10/2026 (y data/products.ts).
// Los caudales necesarios, tiempos de renovación y consumos son cálculos nuestros a partir de esos datos.
// Complementa (no sustituye) a /mejores-depuradoras-piscina, que es la guía general de «depuradora de piscina».

const URL = "https://www.guiadelpiscina.com/depuradora-piscina-pequena";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Depuradora para piscina pequeña: cuál elegir";
const H1 = "Depuradora para piscina pequeña: qué caudal necesitas, cartucho o arena y modelos para menos de 10.000 litros";
const DESCRIPTION =
  "Qué depuradora poner en una piscina pequeña: caudal según los litros, cartucho o arena, conexiones de 32 mm, consumo y modelos para piscinas desmontables.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "depuradora piscina pequeña, depuradora pequeña piscina, depuradora para piscina pequeña, depuradora piscina desmontable pequeña, depuradora cartucho piscina pequeña, depuradora piscina 32 mm",
  alternates: { canonical: URL },
  openGraph: {
    title: "Depuradora para piscina pequeña: caudal y modelos",
    description:
      "Cuánto caudal necesita una piscina de 2.000 a 10.000 litros, cartucho o arena, conexiones de 32 mm y las depuradoras pequeñas de nuestra selección.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "intex-c330-depuradora-cartucho-1250", note: "Cartucho tipo H para piscinas de hasta 7.900 litros, con mangueras de 32 mm incluidas. Pesa 2,26 kg." },
  { slug: "intex-55249-depuradora-arena-3500", note: "Si prefieres arena: 3.500 l/h, 90 W, mangueras de 32 mm y manómetro, para piscinas de hasta 17.000 litros." },
  { slug: "gre-ar125-depuradora-cartucho-3800", note: "Cartucho de 3.800 l/h y solo 70 W que hace también de skimmer. Confirma el diámetro de conexión antes de pedirla." },
];

// Volúmenes según las fichas/títulos de Amazon.es. Caudal = litros ÷ 6 (mínimo) y ÷ 4 (recomendable).
const piscinas = [
  { piscina: "Small Frame 260 × 160 × 65 cm", litros: "2.282 L", caudal: "380-571 l/h" },
  { piscina: "Small Frame 300 × 200 × 75 cm", litros: "3.834 L", caudal: "639-959 l/h" },
  { piscina: "Metal Frame Ø305 × 76 cm", litros: "4.485 L", caudal: "748-1.121 l/h" },
  { piscina: "Metal Frame Ø366 × 76 cm", litros: "6.503 L", caudal: "1.084-1.626 l/h" },
  { piscina: "Small Frame 450 × 220 × 84 cm", litros: "7.127 L", caudal: "1.188-1.782 l/h" },
];

const faqs = [
  {
    q: "¿Qué depuradora necesita una piscina pequeña?",
    a: "Una que pase todo el agua por el filtro en 4 a 6 horas: divide los litros entre 6 y entre 4. Una piscina de 3.834 litros necesita entre 639 y 959 l/h, y una de 7.127 litros, entre unos 1.190 y 1.780 l/h. Comprueba además que la depuradora tenga mangueras del mismo diámetro que las boquillas de tu piscina, normalmente 32 mm en las pequeñas.",
  },
  {
    q: "¿Es mejor una depuradora de cartucho o de arena para una piscina pequeña?",
    a: "Para piscinas de hasta unos 8.000 litros, una de cartucho suele bastar: es ligera, se conecta en minutos y el mantenimiento es lavar o cambiar el cartucho. Si la piscina está montada todo el verano y no quieres cambiar cartuchos a menudo, una de arena compacta como la Intex 55249 (6,5 kg de arena, mangueras de 32 mm) aguanta mucho más entre limpiezas.",
  },
  {
    q: "¿Puedo poner una depuradora grande en una piscina pequeña?",
    a: "Funcionar, funciona, pero no compensa: consume más electricidad, ocupa más y no deja el agua más limpia que una del tamaño correcto. Además, las depuradoras grandes suelen llevar mangueras de 38 mm y las piscinas pequeñas, boquillas de 32 mm, así que necesitarías adaptadores. Intex indica en cada ficha con qué piscinas es compatible cada depuradora.",
  },
  {
    q: "¿Cuántas horas al día tiene que funcionar la depuradora de una piscina pequeña?",
    a: "Las suficientes para que todo el agua pase por el filtro al menos una vez al día, y en pleno verano, dos o más. Con la Intex C330 (1.250 l/h) en una piscina de 3.834 litros, cada pasada completa son unas 3 horas, así que en verano lo razonable es filtrar 6 horas o más, repartidas si quieres en dos tandas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["depuradoras", "filtración de piscinas", "piscinas desmontables", "mantenimiento de piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: URL,
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/opengraph-image", width: 1200, height: 630 },
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
    { "@type": "ListItem", position: 3, name: "Depuradora para piscina pequeña", item: URL },
  ],
};

export default function DepuradoraPiscinaPequenaPage() {
  const picks = quickPicks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));

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
          <span className="text-gray-600">Depuradora para piscina pequeña</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 18 octubre 2026 · Actualizado: 18 octubre 2026 · 6 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Una <strong>piscina pequeña</strong> (de 2.000 a 8.000 litros) necesita una depuradora de entre <strong>unos 350 y 2.000 l/h</strong>: divide sus litros entre 6 para el mínimo y entre 4 para lo recomendable. Lo más práctico suele ser una <strong>depuradora de cartucho</strong> con <strong>mangueras de 32 mm</strong>, que es el diámetro habitual de las boquillas en las desmontables pequeñas. Si quieres menos mantenimiento, hay depuradoras de arena compactas con ese mismo diámetro.
            </p>
          </div>

          <p>
            Esta guía es para piscinas desmontables pequeñas: Small Frame, Easy Set y Metal Frame de hasta unos 3,66 m, o rectangulares de hasta 4,5 m con poca altura. Si tu piscina es mayor, o quieres el detalle de arena frente a cristal, el contralavado y la comparativa completa, tienes la guía general de{" "}
            <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">depuradora de piscina</Link>. Todos los modelos están en nuestra sección de{" "}
            <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">depuradoras</Link>.
          </p>

          <h2>Nuestras recomendaciones rápidas</h2>
        </div>

        {picks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
            {picks.map(({ pk, product }) => (
              <GuideProductPick key={pk.slug} product={product} note={pk.note} />
            ))}
          </div>
        )}

        <div className="prose">
          <h2>Qué caudal necesita tu piscina pequeña</h2>
          <p>
            La depuradora tiene que hacer pasar <strong>todo el agua por el filtro en 4 a 6 horas</strong>. Estos son los caudales para algunas piscinas pequeñas habituales, con los litros que indica el fabricante:
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Piscina</th>
                <th className="px-3 py-3 text-left">Litros</th>
                <th className="px-3 py-3 text-left">Caudal necesario (6 h - 4 h)</th>
              </tr>
            </thead>
            <tbody>
              {piscinas.map((p, i) => (
                <tr key={p.piscina} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{p.piscina}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{p.litros}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{p.caudal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <p>
            Con esos números, la <strong>Intex C330</strong> (1.250 l/h, para piscinas de hasta 7.900 litros) cubre las cuatro primeras: renueva los 3.834 litros de una Small Frame de 300 × 200 en unas 3 horas y los 6.503 de una Metal Frame de Ø366 en unas 5 horas y 12 minutos. Para la rectangular de 450 × 220 (7.127 litros) se queda en unas 5 horas y 42 minutos, dentro del rango pero al límite: ahí compensa algo más de caudal, como los 3.500 l/h de la Intex 55249, que la renueva en algo más de 2 horas.
          </p>
          <p>
            Recuerda que el caudal anunciado es el máximo de la bomba; con el cartucho sucio baja. Por eso conviene no ir justo.
          </p>

          <h2>Cartucho o arena en una piscina pequeña</h2>
          <ul>
            <li>
              <strong>Cartucho:</strong> es lo que traen de serie muchos sets pequeños (la Intex Small Frame de 450 × 220 del catálogo, por ejemplo, viene con una de 2.006 l/h). Es ligera y se instala en minutos. A cambio, el cartucho se lava con la manguera cada pocos días en verano y se cambia cuando ya no queda limpio. La C330 usa el cartucho tipo H mejorado, con más pliegues y papel más grueso, según Intex; el recambio tipo H se vende suelto (Intex 29007).
            </li>
            <li>
              <strong>Arena:</strong> aguanta mucho más entre limpiezas, porque se limpia con un contralavado sin abrir el filtro. La <strong>Intex 55249</strong> es de las más compactas: tanque de 20,3 cm para 6,5 kg de arena de sílice (o 5 kg de vidrio, o 200 g de bolas), válvula de 4 funciones, manómetro y programación diaria de 1 a 12 horas. Intex la indica para piscinas Easy Set y Metal Frame de hasta 17.000 litros.
            </li>
          </ul>
          <p>
            Regla práctica: si montas la piscina solo unas semanas, cartucho; si está montada todo el verano y te molesta cambiar filtros, arena compacta.
          </p>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Conexiones de 32 mm: el detalle que más falla</h2>
          <p>
            Las piscinas desmontables pequeñas suelen llevar boquillas de 32 mm, y muchas depuradoras de más caudal vienen con mangueras de 38 mm. Las dos de Intex que recomendamos traen mangueras de 32 mm de serie: la C330 (para boquillas de 38 mm hay adaptadores, que se venden aparte) y la 55249. Intex indica que la C330 es compatible con Small Frame de hasta 300 × 200 cm, Easy Set de hasta 305 × 76 cm, Metal Frame de hasta Ø305 cm y Prism Frame circulares de hasta Ø305 cm.
          </p>
          <p>
            La ficha de la Gre AR125 no indica el diámetro de conexión ni el volumen máximo de piscina, así que confírmalo con Gre antes de comprarla para una piscina concreta.
          </p>

          <h2>Consumo: lo que gasta una depuradora pequeña</h2>
          <p>
            Las depuradoras pequeñas consumen poco. La Intex 55249 tiene un motor de 90 W y la Gre AR125, de 70 W: filtrando 6 horas al día, son unos 0,54 y 0,42 kWh diarios. Multiplica por el precio del kWh de tu tarifa y por los días de uso. Por comparación, una depuradora grande como la Intex 55227 (0,60 HP, unos 450 W) gastaría unas cinco veces más en el mismo tiempo, sin dejar el agua de una piscina pequeña más limpia.
          </p>

          <h2>Errores típicos con piscinas pequeñas</h2>
          <ul>
            <li><strong>Comprar una depuradora grande «por si acaso».</strong> Consume más, ocupa más y probablemente necesite adaptadores de 38 a 32 mm.</li>
            <li><strong>No limpiar el cartucho.</strong> Un cartucho sucio reduce mucho el caudal real y el agua se enturbia aunque la bomba esté en marcha.</li>
            <li><strong>Filtrar pocas horas.</strong> Que la piscina sea pequeña no significa que se ensucie menos: el agua se calienta antes y necesita filtración diaria.</li>
            <li><strong>Guardarla con agua en invierno.</strong> Vacía la depuradora y las mangueras y guárdalas secas donde no hiele.</li>
          </ul>
          <p>
            Para el resto de la rutina (cloro, pH y limpieza), tienes la guía de{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link>. Y si aún no has elegido piscina, la guía de{" "}
            <Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">piscina desmontable rectangular</Link> indica qué depuradora trae cada modelo.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B0DSPYGS9Z")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver Intex C330 en Amazon →
          </a>
          <a
            href={amazonLink("B09M5S8BXB")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver Intex 55249 en Amazon →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre depuradoras para piscina pequeña</h2>
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
            Fuentes: fichas y títulos de producto de Intex y Gre en Amazon.es (litros de cada piscina, caudal, compatibilidad, diámetro de mangueras, carga filtrante y potencia), consultados el 18 de octubre de 2026. Los caudales necesarios, los tiempos de renovación y los consumos son cálculos nuestros a partir de esos datos.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Depuradoras de cartucho y de arena para piscinas pequeñas, medianas y grandes.</p>
          <Link href="/tienda/depuradoras" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver todas las depuradoras →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Depuradora de piscina: tipos, caudal y comparativa</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">→ Piscina desmontable rectangular: cómo elegir</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/depuradoras" ctaText="Ver depuradoras" />
      </div>
    </div>
    </>
  );
}
