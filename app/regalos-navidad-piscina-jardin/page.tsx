import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Guía de temporada (13/10/2026) para Navidad (25/12/2026) y Reyes (06/01/2027).
// Cumplimiento Amazon: sin precios, rangos en euros ni valoraciones escritos a mano.
// Los productos salen de data/products.ts por slug y se descartan solos si se marcan `unavailable`.

const URL = "https://www.guiadelpiscina.com/regalos-navidad-piscina-jardin";
const TITLE = "Regalos de Navidad y Reyes para amantes del jardín y la piscina (2026)";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Regalos de Navidad y Reyes: jardín y piscina";
const DESCRIPTION =
  "Ideas de regalo para Navidad y Reyes para quien tiene jardín, terraza o piscina: descanso al aire libre, riego, robots, accesorios y regalos para toda la familia. Qué acertar y qué evitar.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "regalos jardín navidad, regalos para amantes del jardín, regalos piscina, regalos reyes jardín, regalo programador riego, regalo hamaca jardín, regalo robot piscina",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Regalos útiles para quien disfruta del jardín o de la piscina, ordenados por tipo de persona, con lo que conviene saber antes de comprar.",
    url: URL,
  },
};

type Grupo = {
  id: string;
  titulo: string;
  intro: ReactNode;
  acierto: string;
  picks: { slug: string; note: string }[];
};

const grupos: Grupo[] = [
  {
    id: "descanso",
    titulo: "Para quien vive en el jardín: hamacas, sillones y tumbonas",
    intro: (
      <>
        Es el regalo más fácil de acertar: no depende del tamaño de la piscina ni del tipo de grifo, y se nota desde el primer día de sol. Si quieres comparar más modelos, mira la guía de{" "}
        <Link href="/mejores-tumbonas-jardin" className="text-sky-600 hover:underline">tumbonas de jardín</Link> o la de{" "}
        <Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">muebles de jardín y terraza</Link>.
      </>
    ),
    acierto: "Pregunta con disimulo cuánto espacio libre hay: una hamaca doble con soporte o un sillón colgante ocupan bastante más que una tumbona plegada.",
    picks: [
      { slug: "vivere-hamaca-doble-con-soporte", note: "Hamaca doble con soporte metálico: no necesita árboles. Trae bolsa para guardarla en invierno." },
      { slug: "tectake-silla-colgante-jardin-con-soporte", note: "Sillón colgante tipo huevo con soporte propio, cojín extragrueso y funda protectora." },
      { slug: "outsunny-2-tumbonas-plegables-aluminio", note: "Pareja de tumbonas de aluminio con respaldo en 5 posiciones. Plegadas apenas ocupan." },
      { slug: "pack-2-tumbonas-gravedad-cero-bandeja", note: "Dos sillas reclinables de gravedad cero con bandeja lateral. Regalo para dos." },
      { slug: "quechua-tumbona-relax-plegable-acolchada", note: "Tumbona reclinable de Decathlon con reposacabezas y reposapiés. Plegada mide 104 × 23 × 23 cm y trae funda: también sirve para camping." },
    ],
  },
  {
    id: "riego",
    titulo: "Para quien riega a mano: programadores y riego por goteo",
    intro: (
      <>
        Un programador de grifo es un regalo útil y que se agradece cada verano, sobre todo si la persona se va de vacaciones. Antes de elegir, echa un vistazo a{" "}
        <Link href="/como-elegir-programador-riego" className="text-sky-600 hover:underline">cómo elegir programador de riego</Link> y al{" "}
        <Link href="/gardena-flex-1890-20-analisis" className="text-sky-600 hover:underline">análisis del GARDENA Flex 1890-20</Link>.
      </>
    ),
    acierto: "Si riega desde un depósito o un bidón sin presión, necesita un programador que abra a 0 bar. Si tiene huerto o macetas, el kit de goteo completa el regalo.",
    picks: [
      { slug: "gardena-flexcontrol-programador-riego", note: "Electrónico de grifo con Water Now: riega a mano sin borrar el programa. Funciona con pila de 9 V." },
      { slug: "gardena-select-programador-riego-1891-20", note: "Tres programaciones independientes para quien quiere regar distinto según la zona o la época." },
      { slug: "johgee-programador-riego-pantalla-lcd", note: "Pantalla grande, retraso por lluvia y bloqueo infantil. Fácil de programar." },
      { slug: "aqua-control-c4099n-programador-riego-grifo", note: "Abre a 0 bar: sirve para regar desde depósito. Programación sencilla con ruedas." },
      { slug: "gardena-temporizador-estandar-riego", note: "Temporizador mecánico de rueda: corta el agua solo. Detalle pequeño y práctico." },
      { slug: "forever-speed-kit-riego-goteo-315-piezas", note: "Kit de goteo y nebulización con 315 piezas para huerto, jardineras y macetas. No incluye programador." },
    ],
  },
  {
    id: "tecnologia",
    titulo: "Para quien disfruta con la tecnología: riego con app y robots",
    intro: (
      <>
        Para la persona que todo lo controla desde el móvil. Un set de riego con app o un robot limpiafondos son regalos de los que se habla todo el verano. Repasa la{" "}
        <Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">guía de robots limpiafondos</Link> y la de{" "}
        <Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">riego automático</Link>.
      </>
    ),
    acierto: "Un robot depende del tipo y tamaño de la piscina (elevada o enterrada, superficie del fondo). Si no lo sabes seguro, mejor otro regalo.",
    picks: [
      { slug: "gardena-smart-set-riego-gateway", note: "Riego desde la app con sensor de humedad y temperatura. Necesita conexión a internet y pilas aparte." },
      { slug: "wybot-c1-robot-piscina-155min", note: "Limpia fondo, paredes y línea de agua, con modo cíclico de 7 días. Para piscinas de hasta 155 m²." },
      { slug: "aiper-scuba-s1-2026-robot-piscina", note: "Gama alta: fondo, paredes, línea de agua y escalones, con control desde la app." },
      { slug: "poolex-nano-3kw-wifi-bomba-calor", note: "Bomba de calor compacta con Wi-Fi para piscinas elevadas de hasta 20 m³. Regalo grande para alargar el baño." },
    ],
  },
  {
    id: "piscina",
    titulo: "Para quien tiene piscina desmontable: regalos prácticos",
    intro: (
      <>
        Quien tiene una piscina desmontable siempre echa algo en falta: una escalera más segura, una manta para conservar el calor, un robot que le ahorre la limpieza o un buen kit de análisis. Para saber qué necesita cada piscina, consulta el{" "}
        <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link>, la guía de{" "}
        <Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">escaleras</Link> y la de{" "}
        <Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">cubiertas</Link>.
      </>
    ),
    acierto: "Para la escalera necesitas la altura de la pared; para la manta térmica, las medidas de la piscina (se puede recortar, pero no estirar).",
    picks: [
      { slug: "aiper-scuba-se-robot-piscina", note: "Robot de fondo sin cable para piscinas elevadas de hasta 80 m². Se pone en marcha con un botón." },
      { slug: "intex-28075-escalera-piscina-91-107cm", note: "Escalera de acero para paredes de 91 a 107 cm con peldaños exteriores extraíbles para más seguridad." },
      { slug: "vevor-cubierta-solar-piscina-732x366", note: "Manta térmica de burbujas recortable: conserva el calor y frena la suciedad durante la temporada." },
      { slug: "aquachek-tiras-4-en-1-cloro-ph", note: "Tiras que miden cloro libre, pH, alcalinidad y estabilizador en una inmersión." },
      { slug: "quechua-ducha-solar-presion-10l", note: "Ducha solar de Decathlon de 10 litros con bomba de presión: no hay que colgarla. Para enjuagarse antes de entrar al agua." },
    ],
  },
  {
    id: "familia",
    titulo: "Regalo de Reyes para toda la familia: la piscina del verano",
    intro: (
      <>
        Una piscina desmontable como regalo de Reyes da para meses de ilusión hasta que llega el calor. Tiene dos condiciones: un hueco nivelado en el jardín o el patio y alguien dispuesto a montarla. Antes de decidir, lee la guía de{" "}
        <Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">piscinas desmontables grandes</Link> y{" "}
        <Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">cómo poner la piscina en marcha</Link>.
      </>
    ),
    acierto: "Son cajas grandes y pesadas: piensa dónde guardarla hasta primavera y comprueba si incluye depuradora o hay que comprarla aparte.",
    picks: [
      { slug: "intex-28272np-piscina-small-frame-300x200", note: "Rectangular de 300 × 200 cm para patios y espacios pequeños. No incluye depuradora." },
      { slug: "bestway-steel-pro-max-305x76-depuradora", note: "Redonda de 305 cm con bomba de filtración incluida. Formato compacto." },
      { slug: "intex-28166-easy-set-457x107", note: "Set completo con depuradora, escalera, tapiz y cobertor, y 107 cm de profundidad." },
    ],
  },
  {
    id: "terraza",
    titulo: "Para estrenar terraza: cenadores y conjuntos de exterior",
    intro: (
      <>
        Regalos grandes para compartir entre varios o para la casa familiar. Más opciones en la guía de{" "}
        <Link href="/pergola-terraza" className="text-sky-600 hover:underline">pérgolas para terraza</Link> y en la de{" "}
        <Link href="/mejores-sombrillas-jardin" className="text-sky-600 hover:underline">sombrillas de jardín</Link>.
      </>
    ),
    acierto: "Mide la zona antes de elegir y, si es una estructura fija, confirma que se puede anclar al suelo.",
    picks: [
      { slug: "songmics-cenador-plegable-3x3-paneles", note: "Carpa plegable de 3 × 3 m con paneles laterales y bolsa de transporte. Se monta y se recoge según la ocasión." },
      { slug: "casaria-conjunto-jardin-poliratan-4-piezas", note: "Conjunto de cuatro plazas en poliratán sobre acero galvanizado, con fundas de cojín lavables." },
      { slug: "yaheetech-conjunto-jardin-ratan-cojines", note: "Conjunto de ratán con cojines de fundas lavables y mesa auxiliar de cristal templado." },
    ],
  },
  {
    id: "natacion",
    titulo: "Para quien nada: material de piscina de Decathlon",
    intro: (
      <>
        Para quien nada en una piscina cubierta durante el invierno o quiere aprender en verano, el material de natación es un regalo pequeño que se usa cada semana. Lo tienes reunido en la{" "}
        <Link href="/tienda/natacion" className="text-sky-600 hover:underline">categoría de natación</Link>.
      </>
    ),
    acierto: "En gafas y aletas, la talla importa: las Xbase se venden por tallas de cara y las aletas Silifins van del 33-34 al 45-46.",
    picks: [
      { slug: "decathlon-bfit-gafas-natacion-antivaho-ahumadas", note: "Antivaho de larga duración, cristales ahumados y tres puentes nasales intercambiables para ajustarlas a cada cara." },
      { slug: "decathlon-silifins-500-aletas-cortas", note: "Aletas cortas y blandas de silicona para entrenar piernas y técnica sin cargar los tobillos." },
      { slug: "nabaiji-tabla-natacion-piscina", note: "Tabla de 48 × 28 cm con agarre ergonómico para trabajar las piernas." },
      { slug: "decathlon-easybreath-mascara-snorkel-ninos", note: "Máscara de snorkel de cara completa para niños de 6 a 10 años, con tubo seco. Regalo para el verano." },
    ],
  },
];

const evitar = [
  {
    titulo: "Productos químicos como regalo",
    texto: "Cloro, alguicidas o correctores de pH son consumibles que cada uno compra según su agua y su piscina. Además, necesitan un almacén seguro. Como regalo, mejor unas tiras de análisis.",
  },
  {
    titulo: "Un robot sin conocer la piscina",
    texto: "Si no sabes si es elevada o enterrada, ni su superficie, es fácil equivocarse. En ese caso, un programador de riego o una hamaca son apuestas más seguras.",
  },
  {
    titulo: "Estructuras que necesitan permiso",
    texto: "Una pérgola adosada a la fachada puede requerir consulta al ayuntamiento o a la comunidad de vecinos. Mejor que lo decida quien vive en la casa.",
  },
  {
    titulo: "Dejarlo para la última semana",
    texto: "Los productos voluminosos y los que envía un vendedor externo pueden tardar más. Consulta la fecha estimada de entrega en la ficha de Amazon antes de pedir.",
  },
];

const fechas = [
  "Black Friday: viernes 27 de noviembre de 2026 (Cyber Monday, lunes 30). Buen momento para adelantar los regalos grandes.",
  "Navidad: 25 de diciembre de 2026. Pide con margen y revisa la fecha de entrega estimada de cada producto.",
  "Reyes: 6 de enero de 2027. En los días previos hay mucho volumen de pedidos: no lo apures.",
];

const faqs = [
  {
    q: "¿Qué regalar a alguien que tiene jardín y no sé qué necesita?",
    a: "Algo que no dependa de medidas: una hamaca con soporte, un sillón colgante o una pareja de tumbonas. Si sabes que riega a mano con manguera, un programador de grifo es un regalo útil que se usa cada verano.",
  },
  {
    q: "¿Es buena idea regalar una piscina desmontable en Reyes?",
    a: "Sí, si hay un sitio nivelado donde montarla y espacio para guardar la caja hasta primavera. Comprueba si incluye depuradora; si no la trae, conviene regalarla junto con una adecuada a su volumen.",
  },
  {
    q: "¿Qué regalo de piscina es seguro aunque no conozca bien la instalación?",
    a: "Unas tiras de análisis de agua sirven para cualquier piscina. Una manta térmica o una escalera también, siempre que sepas las medidas de la piscina o la altura de la pared.",
  },
  {
    q: "¿Llegará a tiempo para Navidad o Reyes?",
    a: "Depende del producto y del vendedor. La ficha de Amazon muestra la fecha estimada de entrega antes de pagar: compruébala, sobre todo en artículos voluminosos o que no envía Amazon.",
  },
  {
    q: "¿Y si no acierto?",
    a: "Revisa en la ficha de Amazon las condiciones de devolución del producto y quién lo vende. Guarda el embalaje original hasta que la persona lo haya probado.",
  },
];

const allPicks = grupos.flatMap((g) => availableBySlug(g.picks.map((p) => p.slug)));

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    knowsAbout: ["piscinas desmontables", "robots limpiafondos", "riego", "muebles de jardín", "pérgolas"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: URL,
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/opengraph-image", width: 1200, height: 630 },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#respuesta-directa", "h1"] },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Regalos de Navidad y Reyes para el jardín y la piscina",
  itemListElement: allPicks.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `https://www.guiadelpiscina.com/tienda/${p.categorySlug}/${p.slug}`,
  })),
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
    { "@type": "ListItem", position: 3, name: "Regalos de Navidad y Reyes para jardín y piscina", item: URL },
  ],
};

export default function RegalosNavidadPiscinaJardinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
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
              <span className="text-gray-600">Regalos de Navidad y Reyes</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Regalos de Navidad y Reyes para amantes del jardín y la piscina (2026)
            </h1>
            <p className="text-gray-400 text-sm mb-6">Publicado: 13 octubre 2026 · Actualizado: 13 octubre 2026 · 8 min lectura</p>
            <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
              <Link href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</Link>
            </span>

            <AffiliateDisclosure />

            <div className="prose">
              <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  Para acertar con alguien que disfruta del jardín o de la piscina, piensa en cómo usa ese espacio. Si lo usa para descansar, una <strong>hamaca, un sillón colgante o unas tumbonas</strong>. Si riega a mano, un <strong>programador de grifo</strong>. Si tiene piscina desmontable, una <strong>escalera, una manta térmica o un robot</strong>, siempre que conozcas sus medidas. Y para Reyes en familia, la <strong>piscina del próximo verano</strong>.
                </p>
              </div>

              <p>
                Hemos ordenado las ideas por tipo de persona, no por importe. Todos los productos son de nuestra selección y en cada grupo te contamos qué dato necesitas saber para no equivocarte, que en jardín y piscina suele ser una medida.
              </p>

              <h2>Fechas que conviene tener en cuenta</h2>
              <ul>
                {fechas.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <p>
                Si quieres aprovechar para comprar también para tu casa, tienes nuestra guía de{" "}
                <Link href="/black-friday-piscina-jardin" className="text-sky-600 hover:underline">Black Friday en piscina y jardín</Link>.
              </p>
            </div>

            {grupos.map((g, i) => {
              const picks = g.picks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
              return (
                <section key={g.id} id={g.id} className="scroll-mt-24">
                  <div className="prose">
                    <h2>{g.titulo}</h2>
                    <p>{g.intro}</p>
                    <p><strong>Para acertar:</strong> {g.acierto}</p>
                  </div>
                  {picks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                      {picks.map(({ pk, product }) => (
                        <GuideProductPick key={pk.slug} product={product} note={pk.note} />
                      ))}
                    </div>
                  )}
                  {i === 1 && <AdSenseAd placement="contenido" />}
                </section>
              );
            })}

            <div className="prose">
              <h2>Regalos que conviene evitar</h2>
              {evitar.map((e) => (
                <div key={e.titulo}>
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                </div>
              ))}

              <h2>Nuestra valoración</h2>
              <p>
                Si no conoces bien la instalación, quédate con los regalos que no dependen de medidas: la hamaca con soporte, el sillón colgante o un programador de grifo. Si sabes cómo es su piscina, un robot limpiafondos del tamaño adecuado es de los regalos que más se agradecen cuando llega el verano.
              </p>
            </div>

            <div className="prose">
              <h2>Preguntas frecuentes sobre regalos de jardín y piscina</h2>
            </div>

            <div className="space-y-4 my-8">
              {faqs.map((faq) => (
                <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{faq.q}</span>
                    <span className="text-sky-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 leading-relaxed bg-gray-50">{faq.a}</div>
                </details>
              ))}
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
              <ul className="space-y-2">
                <li><Link href="/tienda/muebles-jardin" className="text-sky-600 hover:underline font-medium">→ Muebles de jardín</Link></li>
                <li><Link href="/tienda/riego-automatico" className="text-sky-600 hover:underline font-medium">→ Riego automático</Link></li>
                <li><Link href="/tienda/robots-limpiafondos" className="text-sky-600 hover:underline font-medium">→ Robots limpiafondos</Link></li>
                <li><Link href="/tienda/piscinas-desmontables" className="text-sky-600 hover:underline font-medium">→ Piscinas desmontables y accesorios</Link></li>
                <li><Link href="/tienda/pergolas" className="text-sky-600 hover:underline font-medium">→ Pérgolas y cenadores</Link></li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/black-friday-piscina-jardin" className="text-sky-600 hover:underline">→ Black Friday 2026 en piscina y jardín</Link></li>
                <li><Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">→ Cómo cerrar la piscina para el invierno</Link></li>
                <li><Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">→ Invernaje activo o pasivo: cuál elegir</Link></li>
                <li><Link href="/mejor-manguera-riego-jardin" className="text-sky-600 hover:underline">→ Mejor manguera de riego para el jardín</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/muebles-jardin" ctaText="Ver muebles de jardín" />
        </div>
      </div>
    </>
  );
}
