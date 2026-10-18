import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Guía de temporada (13/10/2026) para Black Friday 2026 (27/11) y Cyber Monday (30/11).
// Cumplimiento Amazon: sin precios, rangos en euros, porcentajes de descuento ni valoraciones escritos a mano.
// Los productos salen de data/products.ts por slug y se descartan solos si se marcan `unavailable`.

const URL = "https://www.guiadelpiscina.com/black-friday-piscina-jardin";
const TITLE = "Black Friday 2026 en piscina y jardín: qué comprar en temporada baja";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Black Friday piscina y jardín: qué comprar";
const DESCRIPTION =
  "Qué merece la pena comprar en Black Friday para la piscina y el jardín (invernaje, robots, depuradoras, bombas de calor, muebles, pérgolas y riego), cómo elegir y qué evitar.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "black friday piscina, black friday jardín, black friday robot limpiafondos, black friday depuradora, black friday bomba de calor piscina, comprar piscina en invierno, muebles de jardín black friday",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Comprar en noviembre lo que usarás en primavera: qué compensa, cómo acertar con el tamaño y los errores que conviene evitar.",
    url: URL,
  },
};

type Bloque = {
  id: string;
  titulo: string;
  intro: ReactNode;
  claves: string[];
  picks: { slug: string; note: string }[];
};

const bloques: Bloque[] = [
  {
    id: "invernaje",
    titulo: "Invernaje y cuidado del agua: lo que necesitas ya",
    intro: (
      <>
        Es lo único de esta lista que no puede esperar a primavera. Si todavía no has cerrado la piscina, repasa{" "}
        <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrar la piscina para el invierno</Link> y decide entre{" "}
        <Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">invernaje activo o pasivo</Link> antes de comprar nada: el pasivo pide choque y alguicida de invierno; el activo, test frecuentes y algo de corrector.
      </>
    ),
    claves: [
      "Mide antes de comprar: con unas tiras que incluyan ácido cianúrico sabrás si te sobra estabilizador antes de añadir más cloro.",
      "Compra el químico que vayas a gastar en una temporada. Se guarda en un sitio fresco, seco, ventilado y separado de otros productos.",
      "Una manta térmica de burbujas no es una cubierta de invierno: sirve para conservar calor y frenar suciedad, no para pasar meses a la intemperie ni para soportar peso.",
    ],
    picks: [
      { slug: "diaquat-spa-alguicida-ultraconcentrado-1l", note: "Alguicida no espumante, compatible con cloro, bromo y sal. Es el producto que más se usa al cerrar la piscina." },
      { slug: "diaclor-gr-60-cloro-choque-granulado-5kg", note: "Dicloro granulado de disolución rápida para el choque previo al cierre. Aporta cianúrico: mídelo antes." },
      { slug: "aquachek-tiras-4-en-1-cloro-ph", note: "Cloro libre, pH, alcalinidad y ácido cianúrico en una inmersión. Útil todo el año, también en invierno activo." },
      { slug: "easytest-tiras-reactivas-7-en-1-piscina-150", note: "Siete parámetros por tira, incluido el estabilizador. Una vez abierto conviene gastarlo en unos 90 días." },
      { slug: "vevor-cubierta-solar-piscina-732x366", note: "Manta térmica de burbujas recortable. Pensada para la temporada de baño y para alargarla, no como cubierta de invierno." },
    ],
  },
  {
    id: "robots",
    titulo: "Robots limpiafondos: buena compra si eliges bien el tamaño",
    intro: (
      <>
        Un robot no se usa hasta la apertura, pero en Black Friday suele ser uno de los productos de piscina con más movimiento. La clave es no pasarse ni quedarse corto: superficie de la piscina, si quieres que suba por paredes y línea de agua, y autonomía. Tienes el detalle en la{" "}
        <Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">guía de robots limpiafondos</Link> y en nuestro{" "}
        <Link href="/aiper-scuba-se-analisis" className="text-sky-600 hover:underline">análisis del AIPER Scuba SE</Link>.
      </>
    ),
    claves: [
      "Piscina desmontable o elevada y solo te preocupa el fondo: un robot de fondo sin cable es suficiente.",
      "Piscina enterrada o con paredes que ensucian: busca uno que limpie fondo, paredes y línea de flotación.",
      "Si lo compras ahora, guárdalo seco y sigue las indicaciones del fabricante para almacenar la batería hasta primavera.",
    ],
    picks: [
      { slug: "aiper-scuba-se-robot-piscina", note: "Robot de fondo sin cable para piscinas elevadas de hasta 80 m², con aparcamiento automático en el borde." },
      { slug: "wybot-c1-robot-piscina-155min", note: "Fondo, paredes y línea de agua, con modo cíclico de 7 días. Para piscinas de hasta 155 m²." },
      { slug: "wybot-c2-robot-piscina-180min", note: "Doble filtrado de 180 y 10 micras, 7 modos y programación desde la app. Hasta 200 m²." },
      { slug: "aiper-scuba-s1-2026-robot-piscina", note: "Gama alta: fondo, paredes, línea de agua y escalones, con la mayor autonomía de la selección en modo Eco." },
    ],
  },
  {
    id: "depuradoras",
    titulo: "Depuradoras: renovar la que falló en verano",
    intro: (
      <>
        Si tu depuradora dio guerra este verano, el invierno es buen momento para sustituirla con calma. La regla que usamos en la{" "}
        <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">guía de depuradoras</Link>: que pueda filtrar todo el volumen de la piscina en unas 4 a 6 horas. Si piensas pasarte a sal, mira antes la guía de{" "}
        <Link href="/mejor-clorador-salino-piscina" className="text-sky-600 hover:underline">cloradores salinos</Link>.
      </>
    ),
    claves: [
      "Comprueba el diámetro de las conexiones de tu piscina (32 o 38 mm): algunas depuradoras necesitan adaptadores aparte.",
      "La carga filtrante (arena, vidrio o bolas) normalmente no viene incluida: cuéntala en la compra.",
      "Arena para piscinas medianas y grandes; cartucho si buscas sencillez y no te importa limpiar o cambiar el filtro a menudo.",
    ],
    picks: [
      { slug: "intex-55249-depuradora-arena-3500", note: "Arena compacta para piscinas de hasta 17.000 litros, con programación diaria y manómetro." },
      { slug: "intex-55225-depuradora-arena-5700", note: "Arena para piscinas de hasta 29.100 litros, válvula de 6 funciones y admite arena, vidrio o bolas." },
      { slug: "intex-c2500-depuradora-cartucho", note: "Cartucho tipo B con mucho caudal para piscinas Intex grandes, con indicador de filtro y temporizador." },
      { slug: "intex-28648-depuradora-arena-14", note: "Arena con tanque de 14 pulgadas y 10.500 l/h para piscinas de hasta 57.500 litros. Sobredimensionada para una desmontable pequeña." },
    ],
  },
  {
    id: "bombas-calor",
    titulo: "Bombas de calor: para alargar la próxima temporada",
    intro: (
      <>
        Es una compra para la primavera, pero tiene sentido decidirla ahora: hay que elegir bien el volumen y, en piscinas de obra, prever la instalación en el circuito de filtración. Toda la explicación en la{" "}
        <Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">guía de bombas de calor</Link>.
      </>
    ),
    claves: [
      "Elige por el volumen real de agua (m³), no por el tamaño aparente de la piscina.",
      "Sin cubierta nocturna, buena parte del calor se pierde: cuenta con una manta térmica.",
      "Las inverter suelen ser más silenciosas; útil si la máquina va cerca de dormitorios o de vecinos.",
    ],
    picks: [
      { slug: "poolex-nano-3kw-wifi-bomba-calor", note: "Compacta para piscinas elevadas de hasta 20 m³, con Wi-Fi y función frío y calor." },
      { slug: "gre-mini-bomba-calor-30m3", note: "Para desmontables de hasta 30 m³, sin bypass: se instala con las propias mangueras." },
      { slug: "gre-inverter-bomba-calor-wifi-30m3", note: "Full Inverter con Wi-Fi y tres modos de funcionamiento, para piscinas de hasta 30 m³." },
      { slug: "poolex-silverline-inverter-70-bomba-calor", note: "Inverter para piscinas de hasta 45 m³, intercambiador de titanio y control por app. Requiere instalación en el circuito." },
    ],
  },
  {
    id: "piscinas",
    titulo: "Piscinas desmontables: comprar en invierno, montar en mayo",
    intro: (
      <>
        Comprar la piscina con meses de margen te deja preparar el terreno sin prisas, que es lo que más problemas evita. Antes de elegir, lee la guía de{" "}
        <Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">piscinas desmontables grandes</Link> o la de{" "}
        <Link href="/piscina-desmontable-grande-adultos" className="text-sky-600 hover:underline">piscinas desmontables para adultos</Link>, y el{" "}
        <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento que vas a necesitar</Link>.
      </>
    ),
    claves: [
      "El suelo debe quedar perfectamente nivelado; mide el hueco y deja espacio alrededor para la depuradora y la escalera.",
      "Si el modelo no incluye depuradora, súmala desde el principio y elígela por el volumen de agua.",
      "Revisa la altura de la pared antes de comprar la escalera: cada modelo cubre un rango concreto.",
    ],
    picks: [
      { slug: "intex-28166-easy-set-457x107", note: "Set completo de aro hinchable con depuradora de cartucho, escalera, tapiz y cobertor." },
      { slug: "intex-28273np-piscina-small-frame-450x220", note: "Rectangular tubular de 7.127 litros para familias, con depuradora de cartucho y cobertor." },
      { slug: "intex-ultra-xtr-549x274-depuradora", note: "La más grande de la selección: 549 × 274 × 132 cm con depuradora de arena, escalera, tapiz y cobertor." },
      { slug: "intex-28075-escalera-piscina-91-107cm", note: "Escalera de acero para paredes de 91 a 107 cm, con peldaños exteriores extraíbles." },
    ],
  },
  {
    id: "muebles",
    titulo: "Muebles de jardín: el invierno es buen momento para renovar",
    intro: (
      <>
        Cuando nadie piensa en la terraza es cuando se puede elegir con tranquilidad. Si dudas entre materiales o tamaños, la{" "}
        <Link href="/muebles-jardin-terraza" className="text-sky-600 hover:underline">guía de muebles de jardín</Link> y la de{" "}
        <Link href="/mejores-tumbonas-jardin" className="text-sky-600 hover:underline">tumbonas</Link> te ayudan a decidir.
      </>
    ),
    claves: [
      "Si los compras ahora, ten pensado dónde guardar los cojines hasta primavera; las fundas lavables ayudan.",
      "Mide la zona: una mesa baja de conjunto no sirve como mesa de comedor.",
      "Aluminio y ratán sintético soportan mejor la intemperie que el hierro sin tratar.",
    ],
    picks: [
      { slug: "casaria-conjunto-jardin-poliratan-4-piezas", note: "Banco, dos sillones y mesa con cristal de seguridad sobre acero galvanizado. Cuatro plazas en poco espacio." },
      { slug: "yaheetech-conjunto-jardin-ratan-cojines", note: "Ratán de polietileno con fundas de cojín lavables a máquina y patas regulables." },
      { slug: "outsunny-2-tumbonas-plegables-aluminio", note: "Pareja de tumbonas de aluminio con respaldo en 5 posiciones. Plegadas ocupan muy poco." },
      { slug: "pack-2-tumbonas-gravedad-cero-bandeja", note: "Dos sillas reclinables de gravedad cero con bandeja lateral desmontable." },
    ],
  },
  {
    id: "pergolas",
    titulo: "Pérgolas y cenadores: montarlos antes de que llegue el sol",
    intro: (
      <>
        Una pérgola se monta mejor con tiempo templado que en pleno junio. Repasa los tipos en la{" "}
        <Link href="/pergola-terraza" className="text-sky-600 hover:underline">guía de pérgolas para terraza</Link>, y si va adosada a la fachada consulta antes con tu ayuntamiento o tu comunidad de vecinos.
      </>
    ),
    claves: [
      "Bioclimática de lamas, toldo retráctil o carpa temporal: son productos distintos aunque se anuncien con nombres parecidos.",
      "Todas necesitan anclaje; con viento fuerte, recoge toldos y paneles.",
      "Comprueba el peso y si hace falta más de una persona para el montaje.",
    ],
    picks: [
      { slug: "devoko-pergola-3x3-aluminio-techo-retractil", note: "Pérgola independiente de aluminio con toldo ajustable. No es bioclimática de lamas." },
      { slug: "cazeboo-pergola-bioclimatica-adosada-3x3", note: "Bioclimática adosada con lamas orientables de 0 a 110°. Requiere fachada resistente." },
      { slug: "toolport-cenador-3x4-aluminio-paneles", note: "Cenador fijo de 3 × 4 m con lona impermeable, paneles laterales y mosquiteras." },
    ],
  },
  {
    id: "riego",
    titulo: "Riego y césped: dejar el jardín listo para la primavera",
    intro: (
      <>
        Instalar el riego en invierno, con el jardín parado, es más cómodo que hacerlo con calor. Si no sabes qué programador necesitas, empieza por{" "}
        <Link href="/como-elegir-programador-riego" className="text-sky-600 hover:underline">cómo elegir programador de riego</Link>, el{" "}
        <Link href="/gardena-flex-1890-20-analisis" className="text-sky-600 hover:underline">análisis del GARDENA Flex 1890-20</Link> y la guía de{" "}
        <Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">riego automático</Link>. Para el césped, la guía de{" "}
        <Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">césped artificial</Link>.
      </>
    ),
    claves: [
      "Con heladas, desmonta el programador del grifo y guárdalo sin agua hasta primavera.",
      "Si riegas desde un depósito sin presión, necesitas un programador que abra a 0 bar.",
      "El kit de goteo no incluye programador: compra los dos a la vez si quieres automatizar.",
    ],
    picks: [
      { slug: "gardena-flexcontrol-programador-riego", note: "Programador de grifo con función Water Now para regar a mano sin borrar el programa." },
      { slug: "aqua-control-c4099n-programador-riego-grifo", note: "Abre a 0 bar, así que sirve para regar desde depósito. Programación sencilla con ruedas." },
      { slug: "forever-speed-kit-riego-goteo-315-piezas", note: "Kit de goteo y nebulización con 75 m de tubo y 315 piezas. No incluye programador." },
      { slug: "jardin202-premium-40mm-4x2m", note: "Césped artificial de 40 mm con cuatro tonalidades y protección anti-UV, en rollo de 4 × 2 m." },
    ],
  },
];

const errores = [
  {
    titulo: "Comprar por el porcentaje, no por la necesidad",
    texto: "Una rebaja en un robot demasiado pequeño para tu piscina o en una bomba de calor para un volumen que no es el tuyo sigue siendo una mala compra. Decide el modelo antes del día y compra solo si encaja.",
  },
  {
    titulo: "No vigilar el precio en los días previos",
    texto: "Si un producto te interesa, consulta su precio en Amazon unos días antes del Black Friday. Así sabrás si la oferta del día lo es de verdad.",
  },
  {
    titulo: "No mirar quién vende y envía",
    texto: "En la ficha de Amazon se indica si vende y envía Amazon o un vendedor externo. Revisa plazos de entrega y condiciones de devolución, sobre todo en productos voluminosos.",
  },
  {
    titulo: "Acumular productos químicos",
    texto: "Cloro, alguicidas y correctores necesitan un almacén fresco, seco y separado. Comprar para varias temporadas solo traslada el problema al garaje.",
  },
  {
    titulo: "Olvidar las medidas",
    texto: "Volumen de agua, superficie del fondo, altura de pared, diámetro de conexiones, rosca del grifo: cada categoría tiene su medida clave y casi todas las devoluciones vienen de ahí.",
  },
];

const checklist = [
  "Volumen de la piscina calculado en litros o m³",
  "Superficie del fondo y tipo de piscina (elevada, enterrada) anotados para el robot",
  "Diámetro de conexiones (32 o 38 mm) comprobado para depuradora o bomba de calor",
  "Altura de pared medida para la escalera",
  "Espacio de la terraza medido para muebles o pérgola",
  "Lista corta de modelos decidida antes del 27 de noviembre",
  "Precio de cada modelo consultado unos días antes",
  "Vendedor, plazo de entrega y devolución revisados en la ficha de Amazon",
];

const faqs = [
  {
    q: "¿Cuándo es el Black Friday 2026?",
    a: "El Black Friday cae el viernes 27 de noviembre de 2026 y el Cyber Monday, el lunes 30 de noviembre. Las ofertas suelen empezar unos días antes, así que conviene tener decidido qué quieres comprar antes de esa semana.",
  },
  {
    q: "¿Tiene sentido comprar cosas de piscina en noviembre?",
    a: "Sí, si son compras que ibas a hacer igualmente: un robot, una depuradora que hay que renovar, una piscina para el próximo verano o una bomba de calor. Lo que no compensa es comprar por impulso algo que no necesitas o acumular productos químicos para varias temporadas.",
  },
  {
    q: "¿Habrá descuentos en todos los productos de esta guía?",
    a: "No lo sabemos y no lo prometemos. Las ofertas las decide cada vendedor y cambian de un día para otro. Por eso esta guía se centra en qué modelo encaja con tu caso; el precio del momento lo verás siempre en Amazon.",
  },
  {
    q: "Si compro un robot o una bomba de calor ahora, ¿pierdo garantía hasta el verano?",
    a: "La garantía legal en España para productos nuevos es de tres años desde la entrega, así que unos meses sin uso no suponen gran diferencia. Lo importante es probar el producto al recibirlo, dentro del plazo de devolución, aunque no lo vayas a usar hasta primavera.",
  },
  {
    q: "¿Qué compro primero si mi piscina aún no está cerrada?",
    a: "Lo necesario para el invernaje: tiras de análisis, cloro de choque y alguicida, y una cubierta adecuada. El resto puede esperar a las ofertas sin problema.",
  },
];

const allPicks = bloques.flatMap((b) => availableBySlug(b.picks.map((p) => p.slug)));

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
    knowsAbout: ["mantenimiento de piscinas", "invernaje de piscinas", "robots limpiafondos", "depuradoras", "muebles de jardín", "riego"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: URL,
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/opengraph-image", width: 1200, height: 630 },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#respuesta-directa", "h1"] },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Productos de piscina y jardín para comprar en Black Friday",
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
    { "@type": "ListItem", position: 3, name: "Black Friday en piscina y jardín", item: URL },
  ],
};

export default function BlackFridayPiscinaJardinPage() {
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
              <span className="text-gray-600">Black Friday en piscina y jardín</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Black Friday 2026 en piscina y jardín: qué comprar en temporada baja y qué evitar
            </h1>
            <p className="text-gray-400 text-sm mb-6">Publicado: 13 octubre 2026 · Actualizado: 13 octubre 2026 · 10 min lectura</p>
            <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
              <Link href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</Link>
            </span>

            <AffiliateDisclosure />

            <div className="prose">
              <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  El Black Friday (27 de noviembre de 2026) llega con la piscina cerrada y el jardín parado, y eso es una ventaja: puedes comprar con calma lo que usarás en primavera. Lo que más sentido tiene es lo que ibas a comprar igualmente: <strong>robot limpiafondos, depuradora, bomba de calor, piscina desmontable, muebles, pérgola o riego</strong>. Lo que no puede esperar es el <strong>material de invernaje</strong>. Y lo que conviene evitar es comprar por el porcentaje sin haber medido antes tu piscina o tu terraza.
                </p>
              </div>

              <p>
                Esta guía no anuncia descuentos: no sabemos qué rebajará cada vendedor, y los precios cambian cada día. Lo que sí podemos decirte es qué modelos de nuestra selección encajan con cada caso, qué medir antes de comprar y qué errores vemos cada año. Si llegas al día 27 con la lista hecha, solo tendrás que comprobar el precio.
              </p>

              <h2>Índice</h2>
              <ul>
                {bloques.map((b) => (
                  <li key={b.id}><a href={`#${b.id}`} className="text-sky-600 hover:underline">{b.titulo}</a></li>
                ))}
                <li><a href="#que-evitar" className="text-sky-600 hover:underline">Qué evitar en Black Friday</a></li>
                <li><a href="#preguntas" className="text-sky-600 hover:underline">Preguntas frecuentes</a></li>
              </ul>
            </div>

            {bloques.map((b, i) => {
              const picks = b.picks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
              return (
                <section key={b.id} id={b.id} className="scroll-mt-24">
                  <div className="prose">
                    <h2>{b.titulo}</h2>
                    <p>{b.intro}</p>
                    <p><strong>Cómo elegir:</strong></p>
                    <ul>
                      {b.claves.map((c) => <li key={c}>{c}</li>)}
                    </ul>
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
              <h2 id="que-evitar" className="scroll-mt-24">Qué evitar en Black Friday</h2>
              {errores.map((e) => (
                <div key={e.titulo}>
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                </div>
              ))}

              <h2>Nuestra valoración</h2>
              <p>
                Si solo vas a hacer una compra de piscina este Black Friday, que sea la que más trabajo te quite el verano que viene: para la mayoría, un robot limpiafondos del tamaño adecuado. Si tu depuradora ya dio problemas, va por delante. Y si tienes que regalar algo a alguien con jardín, tienes ideas en nuestra guía de{" "}
                <Link href="/regalos-navidad-piscina-jardin" className="text-sky-600 hover:underline">regalos de Navidad y Reyes para el jardín y la piscina</Link>.
              </p>
            </div>

            <div className="my-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Checklist antes del 27 de noviembre</h2>
              <ul className="space-y-2">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose">
              <h2 id="preguntas" className="scroll-mt-24">Preguntas frecuentes sobre el Black Friday de piscina y jardín</h2>
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
                <li><Link href="/tienda/robots-limpiafondos" className="text-sky-600 hover:underline font-medium">→ Robots limpiafondos</Link></li>
                <li><Link href="/tienda/depuradoras" className="text-sky-600 hover:underline font-medium">→ Depuradoras</Link></li>
                <li><Link href="/tienda/bombas-calor" className="text-sky-600 hover:underline font-medium">→ Bombas de calor</Link></li>
                <li><Link href="/tienda/piscinas-desmontables" className="text-sky-600 hover:underline font-medium">→ Piscinas desmontables y accesorios</Link></li>
                <li><Link href="/tienda/tratamiento-agua" className="text-sky-600 hover:underline font-medium">→ Tratamiento del agua</Link></li>
                <li><Link href="/tienda/muebles-jardin" className="text-sky-600 hover:underline font-medium">→ Muebles de jardín</Link></li>
                <li><Link href="/tienda/pergolas" className="text-sky-600 hover:underline font-medium">→ Pérgolas</Link></li>
                <li><Link href="/tienda/riego-automatico" className="text-sky-600 hover:underline font-medium">→ Riego automático</Link></li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/regalos-navidad-piscina-jardin" className="text-sky-600 hover:underline">→ Regalos de Navidad y Reyes para amantes del jardín y la piscina</Link></li>
                <li><Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">→ Cómo cerrar la piscina para el invierno</Link></li>
                <li><Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">→ Invernaje activo o pasivo: cuál elegir</Link></li>
                <li><Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">→ Mejor cubierta para piscina desmontable</Link></li>
                <li><Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">→ Cómo abrir la piscina para el verano</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/robots-limpiafondos" ctaText="Ver robots limpiafondos" />
        </div>
      </div>
    </>
  );
}
