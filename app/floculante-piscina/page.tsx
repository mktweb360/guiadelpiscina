import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Reescrita 19/10/2026 (ronda 3, palabra clave «floculante piscina»). Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Dosis, formatos y modo de empleo: fichas de Amazon.es de cada producto consultadas el 19/10/2026. No damos dosis propias.
// Normativa: RD 742/2013 (BOE-A-2013-10580), artículos 2, 3, 6, 7 y 13 y anexo I; etiquetado CLP: página de EU-OSHA.

const URL = "https://www.guiadelpiscina.com/floculante-piscina";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Floculante piscina: tipos, dosis y cómo usarlo";
const H1 = "Floculante para piscina: qué es, cuándo usarlo y cómo aplicarlo sin atascar el filtro";
const DESCRIPTION =
  "Floculante para piscina: líquido, en cartuchos o pastillas, diferencia con el clarificante, cómo usarlo con la depuradora parada y según tu filtro.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "floculante piscina, floculante para piscinas, floculantes piscina, floculante líquido piscina, floculante en cartuchos, floculante pastillas piscina, cómo usar floculante piscina, floculante o clarificante",
  alternates: { canonical: URL },
  openGraph: {
    title: "Floculante para piscina: cuándo usarlo y cómo aplicarlo",
    description:
      "Floculante líquido, en cartuchos o en pastillas: cuándo usar cada uno, diferencia con el clarificante y paso a paso con aspirado a desagüe.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "gre-floculante-liquido-5l", note: "Floculante líquido de decantación: con la depuradora parada, los flóculos caen al fondo y se aspiran. La ficha da dosis para agua muy turbia y de mantenimiento." },
  { slug: "bayrol-quickflock-super-floculante-liquido-1l", note: "Para filtro de arena: flocula dentro del filtro, sin aspirar el fondo a desagüe. Después, contralavado." },
  { slug: "bayrol-superklar-clarificante-liquido-05l", note: "Si tu depuradora es de cartucho: clarificante de uso semanal que Bayrol indica en especial para ese tipo de filtro." },
  { slug: "astralpool-floculante-solido-saquitos-8x125g", note: "Floculante en cartuchos para el skimmer, de mantenimiento continuo con filtro de arena o vidrio. Dosis por volumen en la ficha." },
];

// Datos de las fichas de Amazon.es (19/10/2026)
const comparativa = [
  { slug: "gre-floculante-liquido-5l", producto: "Gre floculante líquido 5 L", formato: "Líquido", metodo: "Decantación y aspirado", filtro: "Cualquiera (se aspira a desagüe)", dosis: "100-200 ml por cada 10 m³ (agua muy turbia)" },
  { slug: "bayrol-quickflock-super-floculante-liquido-1l", producto: "Bayrol Quickflock Super 1 L", formato: "Líquido", metodo: "Floculación en el filtro", filtro: "Arena", dosis: "100-200 ml por el skimmer" },
  { slug: "diafloc-floculante-liquido-superconcentrado-piscina", producto: "DIAFLOC superconcentrado 5 L", formato: "Líquido", metodo: "Filtro o limpiafondos", filtro: "No lo detalla", dosis: "Ver etiqueta (no sobredosificar)" },
  { slug: "astralpool-floculante-solido-saquitos-8x125g", producto: "AstralPool sólido 8 × 125 g", formato: "Cartuchos (skimmer)", metodo: "Floculación continua", filtro: "Arena o vidrio", dosis: "1 tableta cada 10 días (10-50 m³)" },
  { slug: "ctx-floculante-cartuchos-8x125g", producto: "CTX Flocculant Deluxe 8 × 125 g", formato: "Cartuchos (skimmer)", metodo: "Floculación continua", filtro: "No lo detalla", dosis: "Ver etiqueta" },
  { slug: "bayrol-superklar-clarificante-liquido-05l", producto: "Bayrol Superklar 0,5 L (clarificante)", formato: "Líquido", metodo: "Clarificación con filtración", filtro: "Todos; indicado para cartucho", dosis: "10 ml por cada 10 m³ a la semana" },
];

const faqs = [
  {
    q: "¿Cuánto floculante hay que echar en la piscina?",
    a: "La que indique la etiqueta de tu producto, porque cada fabricante usa una concentración distinta. Como referencia, Gre indica para su floculante líquido de 100 a 200 ml por cada 10 m³ cuando el agua está muy turbia y 5 ml por cada 10 m³ como mantenimiento semanal; AstralPool, para sus saquitos de 125 g, una tableta cada 10 días en piscinas de 10 a 50 m³. Echar más no aclara antes: algún fabricante advierte de que una sobredosis puede enturbiar el agua.",
  },
  {
    q: "¿Qué es mejor, floculante o clarificante?",
    a: "Depende de lo turbia que esté el agua y del filtro. El floculante forma grumos grandes que caen al fondo o quedan en el filtro y sirve para agua muy turbia, pero exige parar la depuradora y aspirar, o hacer un contralavado. El clarificante agrupa las partículas en tamaños que el filtro retiene con la depuradora en marcha: es más lento, sirve para turbidez ligera o como mantenimiento y es la opción habitual con depuradoras de cartucho.",
  },
  {
    q: "¿Se puede usar floculante con una depuradora de cartucho?",
    a: "Con un floculante de decantación, sí, siempre que retires los flóculos del fondo con un aspirador o limpiafondos que no los mande al cartucho, porque lo atascan enseguida. Los floculantes que actúan dentro del filtro, como el Bayrol Quickflock Super o los saquitos de AstralPool, están indicados para filtros de arena o vidrio. Para mantenimiento con cartucho es más práctico un clarificante.",
  },
  {
    q: "¿Cuándo me puedo bañar después de echar floculante?",
    a: "Cuando hayas terminado todo el proceso (reposo, aspirado del fondo y limpieza o contralavado del filtro), el agua se vea transparente y el pH y el cloro estén en rango. Respeta también el plazo de seguridad de la etiqueta, si lo indica. Mientras los flóculos están en el fondo no hay que bañarse: se deshacen y vuelven a enturbiar el agua.",
  },
  {
    q: "¿Floculante líquido, en cartuchos o en pastillas?",
    a: "El líquido es el de choque: se dosifica según el volumen, actúa en horas y sirve para recuperar agua muy turbia. Los cartuchos o pastillas se dejan en el cesto del skimmer y sueltan producto poco a poco: son de mantenimiento y suelen estar pensados para filtros de arena o vidrio. Las pastillas de cloro multiacción que dicen llevar floculante no sustituyen a un floculante cuando el agua ya está turbia.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  datePublished: "2025-08-01",
  dateModified: "2026-10-19",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
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
    { "@type": "ListItem", position: 3, name: "Floculante para piscina", item: URL },
  ],
};

export default function FloculantePiscinaPage() {
  const picks = quickPicks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
  const rows = comparativa.filter((r) => availableBySlug([r.slug]).length > 0);

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
          <span className="text-gray-600">Floculante para piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 agosto 2025 · Actualizado: 19 octubre 2026 · 8 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>
        <img
          src="/images/blog/floculante-piscina.jpg"
          alt="Floculante para piscina: cuándo usarlo y cómo aplicarlo"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              El <strong>floculante para piscina</strong> une las partículas finas que enturbian el agua, demasiado pequeñas para que el filtro las retenga, en grumos más grandes (flóculos). Esos grumos caen al fondo y se aspiran a desagüe con la depuradora parada, o quedan atrapados en un filtro de arena. Se usa cuando el agua sigue turbia con el pH y el cloro en rango. Si la turbidez es ligera o tu depuradora es de cartucho, suele bastar un <strong>clarificante</strong>, que trabaja con la filtración en marcha.
            </p>
          </div>

          <p>
            En esta guía tienes los tres formatos (floculante líquido, en cartuchos y en pastillas), cuándo conviene cada uno según tu filtro y el procedimiento completo. Las dosis que citamos son las del fabricante de cada producto: no hay una dosis universal, porque cada marca usa una concentración distinta. Todos los productos están en nuestra sección de{" "}
            <Link href="/tienda/tratamiento-agua" className="text-sky-600 hover:underline">tratamiento del agua</Link>.
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
          <h2>Qué es el floculante y cuándo usarlo</h2>
          <p>
            El agua turbia o lechosa con el cloro bien suele deberse a partículas coloidales: polvo, calima, restos de algas muertas tras un choque de cloro o materia orgánica que arrastra la lluvia. Son tan finas que atraviesan la arena o el cartucho y siguen en suspensión. El floculante neutraliza la carga eléctrica que las mantiene separadas y hace que se agrupen.
          </p>
          <p>Tiene sentido usarlo en estos casos:</p>
          <ul>
            <li>El agua sigue turbia después de filtrar con normalidad, con el pH y el cloro libre en rango.</li>
            <li>Tras un <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">tratamiento del agua verde</Link>: las algas ya están muertas, pero el agua queda turbia y el filtro no da abasto.</li>
            <li>Después de una tormenta, un episodio de calima o un llenado con agua de pozo.</li>
            <li>Al <Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">abrir la piscina en temporada</Link>, si el agua del invierno está muy sucia.</li>
          </ul>
          <p>
            Antes de echar floculante, mide el pH y la <Link href="/alcalinidad-piscina" className="text-sky-600 hover:underline">alcalinidad de la piscina</Link>. Un agua desequilibrada también se enturbia, y en ese caso el floculante no resuelve la causa.
          </p>

          <h2>Floculante o clarificante: la diferencia</h2>
          <p>
            Los dos agrupan partículas, pero en distinto grado. El <strong>floculante</strong> forma grumos grandes y pesados que hay que retirar del fondo o del filtro; actúa en horas y está pensado para agua muy turbia. El <strong>clarificante</strong> forma agregados más pequeños que el filtro retiene en su funcionamiento normal: es más lento, no obliga a parar la depuradora y sirve para turbidez ligera o como mantenimiento semanal. Bayrol, por ejemplo, indica su Superklar en especial para filtros de cartucho, con 10 ml por cada 10 m³ a la semana.
          </p>
          <p>
            Hay productos que se venden como «floculante clarificante» o con las dos palabras en el nombre. Lo que te dice cómo usarlos es el modo de empleo: si pide parar la bomba y aspirar el fondo, funciona como floculante de decantación; si pide dejar la filtración en marcha, como clarificante.
          </p>

          <h2>Líquido, en cartuchos o en pastillas</h2>
          <p>
            El <strong>floculante líquido</strong> es el de choque. Se dosifica según el volumen de la piscina y, según el producto, decanta al fondo (el de Gre habla de aspirar tras 8 horas de reposo) o se queda en el filtro de arena (el Bayrol Quickflock Super pide apagar la bomba unos 15 minutos y luego filtrar con normalidad).
          </p>
          <p>
            El <strong>floculante en cartuchos</strong> o saquitos, que muchos llaman en pastillas, se deja en el cesto del skimmer y se disuelve poco a poco. Va formando flóculos a la entrada del filtro, que quedan sobre la carga filtrante. Sirve para mantener el agua transparente, no para rescatar una piscina muy turbia, y AstralPool lo indica para filtros de arena o vidrio. Las pastillas de cloro multiacción que anuncian efecto floculante son otra cosa: desinfectan y ayudan en el mantenimiento, pero no sustituyen a un floculante cuando el agua ya se ha enturbiado.
          </p>
        </div>

        <div className="prose">
          <h2>Comparativa de floculantes para piscina</h2>
          <p>Datos de las fichas de Amazon.es de cada producto, consultadas el 19 de octubre de 2026:</p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Producto</th>
                <th className="px-3 py-3 text-left">Formato</th>
                <th className="px-3 py-3 text-left">Cómo actúa</th>
                <th className="px-3 py-3 text-left">Filtro</th>
                <th className="px-3 py-3 text-left">Dosis del fabricante</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.slug} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">
                    <Link href={`/tienda/tratamiento-agua/${r.slug}`} className="hover:text-sky-700">{r.producto}</Link>
                  </td>
                  <td className="px-3 py-3 text-gray-600">{r.formato}</td>
                  <td className="px-3 py-3 text-gray-600">{r.metodo}</td>
                  <td className="px-3 py-3 text-gray-600">{r.filtro}</td>
                  <td className="px-3 py-3 text-gray-600">{r.dosis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Cómo usar floculante: depuradora parada y aspirado a desagüe</h2>
          <p>Este es el procedimiento con un floculante líquido de decantación. Si el tuyo actúa en el filtro o va en el skimmer, sigue su etiqueta.</p>
          <ol>
            <li><strong>Equilibra el agua.</strong> pH y alcalinidad en rango y cloro libre correcto. Si tienes dudas, consulta la guía de <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH de la piscina</Link>.</li>
            <li><strong>Limpia el filtro.</strong> Contralavado en el de arena; lavado o cambio en el de cartucho.</li>
            <li><strong>Calcula la dosis con la etiqueta</strong> y el volumen real de tu piscina. Dilúyela en un cubo de agua si el fabricante lo indica y repártela por la superficie o por el skimmer.</li>
            <li><strong>Haz circular el agua</strong> el tiempo que diga el fabricante para repartir el producto. Con válvula selectora, en la posición que indique la etiqueta (algunas piden recirculación para no pasar por el filtro).</li>
            <li><strong>Para la depuradora y deja reposar</strong> sin bañistas ni robot limpiafondos, el tiempo que marque la etiqueta. Gre, por ejemplo, habla de 8 horas.</li>
            <li><strong>Aspira el fondo a desagüe.</strong> En una depuradora de arena, válvula en vaciado o desagüe: el agua sale sin pasar por la arena y los flóculos no vuelven al vaso. Aspira despacio para no levantarlos.</li>
            <li><strong>Repón el agua perdida</strong>, haz un contralavado, vuelve a filtración y mide otra vez pH y cloro.</li>
          </ol>
          <p>
            Si aspiras en posición de filtración, los flóculos se rompen en la bomba, colmatan la arena y parte vuelve a la piscina. Es el fallo más habitual: el agua se aclara un día y se enturbia al siguiente.
          </p>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Compatibilidad con filtros de arena o cartucho</h2>
          <p>
            Con <strong>filtro de arena o vidrio</strong> valen todos los formatos: los floculantes de decantación (aspirando a desagüe), los que actúan en el filtro como el Quickflock Super y los cartuchos de skimmer. Después toca contralavado, porque la carga retiene muchos flóculos.
          </p>
          <p>
            Con <strong>filtro de cartucho</strong> hay que tener más cuidado. Los flóculos forman una capa pegajosa que tapona los pliegues y el caudal cae enseguida. Muchas depuradoras de cartucho de piscinas desmontables no tienen válvula selectora ni posición de desagüe, así que un floculante que actúe en el filtro no conviene. Te quedan dos opciones: un floculante de decantación, retirando el fondo con un aspirador o limpiafondos que no devuelva el agua al cartucho, o un clarificante indicado para cartucho como mantenimiento. Si tu piscina es pequeña, en la guía de{" "}
            <Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">depuradora para piscina pequeña</Link> verás qué filtro lleva cada modelo, y en la de{" "}
            <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">depuradora de piscina</Link>, cómo se hace el contralavado.
          </p>

          <h2>Seguridad química: biocidas y etiquetado CLP</h2>
          <p>
            Un floculante no desinfecta: no mata bacterias ni algas, así que el cloro sigue haciendo falta. Los productos que sí desinfectan, como el cloro o las pastillas multiacción, son biocidas y llevan en la etiqueta su número de registro; las pastillas Tamar de nuestro catálogo, por ejemplo, el 21-60-11249.
          </p>
          <p>
            Si el producto es una mezcla peligrosa, su etiqueta sigue el reglamento europeo CLP: pictogramas con marco rojo, una palabra de advertencia («Peligro» o «Atención»), indicaciones de peligro y consejos de prudencia, tal como lo resume la{" "}
            <a href="https://osha.europa.eu/es/themes/dangerous-substances/clp-classification-labelling-and-packaging-of-substances-and-mixtures" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Agencia Europea para la Seguridad y la Salud en el Trabajo</a>. Léela antes de abrir el envase. Las normas básicas valen para cualquier producto de piscina: guantes y gafas, nunca mezclar productos entre sí ni en el mismo cubo, echar el producto sobre el agua y no al revés, y guardarlo cerrado, a la sombra y lejos de los niños.
          </p>
          <p>
            En España, el{" "}
            <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2013-10580" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013</a>{" "}
            fija los criterios técnico-sanitarios de las piscinas de uso público y de comunidades. Exige que los biocidas del agua del vaso sean del tipo de producto 2 y que las demás sustancias químicas cumplan el reglamento REACH, y prohíbe los tratamientos químicos directamente en el vaso salvo en situaciones justificadas, sin bañistas y con un plazo de seguridad. Para la turbidez fija un máximo de 5 UNF, y para la transparencia, que el desagüe de fondo se vea bien. A una piscina unifamiliar solo le aplica su artículo 13, sobre incidencias, aunque ver con claridad el desagüe del fondo es un buen criterio para cualquier piscina. El{" "}
            <a href="https://www.sanidad.gob.es/areas/sanidadAmbiental/calidadAguas/piscinas/home.htm" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Ministerio de Sanidad</a>{" "}
            reúne la información sobre la calidad sanitaria de las piscinas.
          </p>

          <h2>Errores habituales con el floculante</h2>
          <p>
            El más frecuente es usarlo para tapar otro problema: si el agua está turbia por un pH alto, por falta de cloro o porque el filtro lleva semanas sin limpiar, el floculante la aclara un tiempo y la turbidez vuelve. Pasarse de dosis tampoco ayuda, porque el exceso queda en suspensión y enturbia; DIAFLOC lo advierte en su ficha. Bañarse o encender el limpiafondos automático con los flóculos en el fondo los deshace. Y con depuradora de cartucho, mandar los flóculos al cartucho obliga a lavarlo o cambiarlo enseguida.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B01CGKC8QU")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver floculante Gre en Amazon →
          </a>
          <a
            href={amazonLink("B01M678EP4")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver clarificante Bayrol en Amazon →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el floculante para piscinas</h2>
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
            Fuentes: Real Decreto 742/2013, de 27 de septiembre, por el que se establecen los criterios técnico-sanitarios de las piscinas (BOE, texto consolidado; artículos 2, 3, 6, 7 y 13 y anexo I); página «CLP: clasificación, etiquetado y envasado de sustancias y mezclas químicas» de EU-OSHA; página de piscinas del Ministerio de Sanidad; fichas de Gre, Bayrol, AstralPool, CTX y DIASA en Amazon.es (dosis, modo de empleo y compatibilidad con filtros), consultadas el 19 de octubre de 2026.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Floculantes, clarificantes, cloro, correctores de pH y tiras de control de nuestra selección.</p>
          <Link href="/tienda/tratamiento-agua" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver productos de tratamiento del agua →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/alcalinidad-piscina" className="text-sky-600 hover:underline">→ Alcalinidad de la piscina: valor ideal y cómo corregirla</Link></li>
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Depuradora de piscina: tipos, caudal y comparativa</Link></li>
            <li><Link href="/algas-piscina" className="text-sky-600 hover:underline">→ Algas en la piscina: cómo eliminarlas y evitar que vuelvan</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/tratamiento-agua" ctaText="Ver productos de tratamiento del agua" />
      </div>
    </div>
    </>
  );
}
