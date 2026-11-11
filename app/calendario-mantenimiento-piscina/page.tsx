import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 04/11/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Rangos del agua: Real Decreto 742/2013 (BOE-A-2013-10580), anexos I y III y arts. 6 y 11, texto leído el 04/11/2026. Calendario orientativo para clima peninsular.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Calendario de mantenimiento de la piscina: qué hacer cada semana y cada mes";
const SEO_TITLE = "Calendario de mantenimiento de la piscina";
const H1 = "Calendario de mantenimiento de la piscina: tareas por semana y mes a mes del año";
const URL = "https://www.guiadelpiscina.com/calendario-mantenimiento-piscina";
const DESCRIPTION =
  "Qué hacer en la piscina cada día, cada semana, cada mes y en cada estación: calendario mes a mes, rangos del Real Decreto 742/2013 como referencia y errores que hacen perder el agua.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "calendario mantenimiento piscina, mantenimiento piscina mes a mes, tareas semanales piscina, mantenimiento piscina semanal, cuidados piscina temporada, mantenimiento piscina invierno",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Calendario de mantenimiento de la piscina: tareas diarias, semanales y mensuales, mes a mes del año, con los rangos del Real Decreto 742/2013 como referencia.",
    url: URL,
  },
};

const quickPicks = [
  {
    "slug": "easytest-tiras-reactivas-7-en-1-piscina-150",
    "note": "Siete parámetros con una sola tira: pH, cloro libre y total, alcalinidad, dureza, ácido cianúrico y bromo."
  },
  {
    "slug": "aquachek-tiras-4-en-1-cloro-ph",
    "note": "Cuatro parámetros (cloro libre, pH, alcalinidad y estabilizador) para la comprobación semanal."
  },
  {
    "slug": "intex-29003-cartuchos-tipo-a-3",
    "note": "Recambio de cartuchos tipo A para tener a mano cuando toque cambiar el del filtro."
  }
];

const faqs = [
  {
    "q": "¿Cada cuánto hay que medir el pH y el cloro de la piscina?",
    "a": "En verano, lo razonable es dos o tres veces por semana y siempre después de tormentas o de días de mucho uso. El Real Decreto 742/2013 exige un control diario antes de abrir al público en las piscinas públicas; en una piscina familiar no es obligatorio, pero es un buen ritmo en plena temporada. Fuera de temporada, con la piscina cubierta y parada, basta con mirar el nivel y el estado de la cubierta."
  },
  {
    "q": "¿Cuántas horas al día debe funcionar el filtro?",
    "a": "Depende del volumen de la piscina y del caudal de la depuradora. Una forma de calcularlo es dividir los litros entre el caudal en litros por hora: una piscina de 9.150 litros con una depuradora de 2.006 l/h necesita unas 4,6 horas para pasar todo el volumen una vez. El Real Decreto 742/2013 no fija un número de horas: pide tiempos de recirculación adecuados para cumplir los parámetros de calidad."
  },
  {
    "q": "¿Qué rango de pH y cloro es el correcto?",
    "a": "El anexo I del Real Decreto 742/2013 indica un pH de 7,2 a 8,0 y un cloro libre residual de 0,5 a 2,0 mg/L. Es una norma para piscinas públicas, pero sirve de referencia. Para ajustar el producto concreto que uses, sigue siempre la etiqueta."
  },
  {
    "q": "¿Hay que mantener la piscina en invierno?",
    "a": "Algo sí, aunque mucho menos. Con invernaje pasivo se deja el agua tratada y cubierta, y se revisa el nivel y la cubierta tras lluvias fuertes. Con invernaje activo el filtro sigue funcionando algunas horas. En las guías de cierre y de invernaje explicamos las dos opciones."
  },
  {
    "q": "¿Cuándo se cambia el cartucho o la arena del filtro?",
    "a": "Cuando lo indique el manual de tu depuradora y cuando el manómetro o el estado del cartucho lo pidan. No hay una fecha que valga para todos los modelos; la frecuencia depende del uso, del tipo de filtro y de la suciedad que entre en la piscina."
  },
  {
    "q": "¿Qué pasa si no hago el mantenimiento semanal una semana?",
    "a": "Con tiempo fresco y poco uso, normalmente nada grave. En pleno calor, el cloro baja más rápido y las algas aparecen en pocos días. Si te saltas una semana, mide al volver y corrige antes de bañarte."
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
    "@type": "Person",
    name: "José Marcos Galindo Sánchez",
    jobTitle: "Editor responsable",
    worksFor: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description:
      "Editor responsable de Guía del Piscina (Mkt Web 360 SLU). Contrasta especificaciones técnicas y fichas de fabricante, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["mantenimiento de piscinas","calidad del agua de piscinas","depuración de piscinas"],
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
    { "@type": "ListItem", position: 3, name: "Calendario de mantenimiento de la piscina", item: URL },
  ],
};

export default function CalendarioMantenimientoPiscinaPage() {
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
              <span className="text-gray-600">Calendario de mantenimiento de la piscina</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
            <p className="text-gray-400 text-sm mb-6">Publicado: 4 noviembre 2026 · Actualizado: 4 noviembre 2026 · 7 min lectura</p>
            <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
              <span>✍️</span>
              <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">José Marcos Galindo Sánchez · Editor responsable</a>
            </span>

            <AffiliateDisclosure />

            <div className="prose">
              <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  Una piscina se mantiene con tres ritmos: <strong>a diario</strong> (cesta del skimmer, filtro en marcha, vistazo al agua), <strong>cada semana</strong> (medir pH y cloro, cepillar, aspirar) y <strong>cada mes</strong> (alcalinidad, estabilizador, filtro). Las estaciones solo cambian el reparto: más medición en verano, menos horas de filtro en invierno y una apertura y un cierre bien hechos. Como referencia de agua sana, el Real Decreto 742/2013 fija un <strong>pH de 7,2 a 8,0</strong> y un <strong>cloro libre de 0,5 a 2,0 mg/L</strong>.
                </p>
              </div>

              <p>
                Esta guía junta en un solo calendario lo que en otras páginas del blog aparece por separado. Para el detalle de cada tarea, enlazamos la guía correspondiente: {" "}
                <Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">abrir la piscina</Link>, <Link href="/ph-piscina" className="text-sky-600 hover:underline">ajustar el pH</Link>, <Link href="/alcalinidad-piscina" className="text-sky-600 hover:underline">la alcalinidad</Link> y <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cerrarla en invierno</Link>. Los meses son orientativos para clima peninsular: en el norte la temporada empieza más tarde y en Canarias casi no se interrumpe.
              </p>

              <h2>Material para el calendario</h2>
            </div>

            {picks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                {picks.map(({ pk, product }) => (
                  <GuideProductPick key={pk.slug} product={product} note={pk.note} />
                ))}
              </div>
            )}

<div className="prose">

              <h2>Qué mide el Real Decreto 742/2013 y cómo usarlo en casa</h2>
              <p>
                El <Link href="https://www.boe.es/eli/es/rd/2013/09/27/742" className="text-sky-600 hover:underline">Real Decreto 742/2013</Link> fija los criterios técnico-sanitarios de las piscinas. Obliga por completo a las de uso público; a las de comunidades de propietarios les exige como mínimo parte de sus artículos, y a las unifamiliares solo el artículo 13, el de las situaciones de incidencia. Aun así, su anexo I es una referencia razonable para cualquier piscina doméstica:
              </p>
              <ul>
                <li><strong>pH:</strong> de 7,2 a 8,0. En la guía de pH apuntamos a la parte baja, de 7,2 a 7,6.</li>
                <li><strong>Cloro libre residual:</strong> de 0,5 a 2,0 mg/L, cuando se desinfecta con cloro o derivados.</li>
                <li><strong>Cloro combinado:</strong> hasta 0,6 mg/L.</li>
                <li><strong>Ácido isocianúrico:</strong> hasta 75 mg/L en piscinas públicas, cuando se usan derivados del ácido tricloroisocianúrico (las pastillas de cloro lento). En una piscina privada la guía de ácido cianúrico recomienda mantenerlo más bajo.</li>
                <li><strong>Turbidez:</strong> hasta 5 UNF. Si no se ve el desagüe del fondo, el agua no está en condiciones.</li>
              </ul>
              <p>
                La norma también marca el ritmo para las piscinas públicas: control de rutina a diario, antes de abrir al público, y control periódico una vez al mes. De ahí sale el esquema de este calendario. Y de su artículo 6 sale una regla útil: los productos químicos no se echan directamente en el vaso con gente dentro, sino que el agua pasa por el tratamiento o, si no hay más remedio, se trata con el vaso cerrado y sin bañistas.
              </p>
              <p>
                Para saber en qué punto está tu agua necesitas medir. Unas tiras reactivas bastan para el día a día, aunque son orientativas y no sustituyen a un fotómetro ni a un análisis profesional.
              </p>

              <h2>Tareas diarias y semanales</h2>
              <p>
                <strong>A diario (cinco minutos).</strong> Vaciar la cesta del skimmer si hay hojas o insectos, comprobar que el filtro está funcionando y que el nivel del agua cubre la boca del skimmer, y mirar el agua: si pierde transparencia o huele, adelanta la medición.
              </p>
              <p>
                <strong>Cada semana (media hora).</strong>
              </p>
              <ol>
                <li>Mide pH y cloro libre antes del baño y apunta los valores, aunque sea en el móvil. Una tabla con fechas enseña más que cualquier consejo.</li>
                <li>Corrige solo lo que se salga del rango y de uno en uno: primero alcalinidad si hace falta y después pH (la explicación está en <Link href="/alcalinidad-piscina" className="text-sky-600 hover:underline">la guía de alcalinidad</Link>).</li>
                <li>Cepilla paredes y fondo, sobre todo los rincones y la línea del agua, donde empiezan las algas.</li>
                <li>Aspira el fondo con el limpiafondos manual o pon a trabajar el robot (<Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">guía de robots limpiafondos</Link>).</li>
                <li>Revisa el manómetro del filtro de arena o el estado del cartucho. Cuándo y cómo limpiarlos lo marca el manual de tu equipo; en <Link href="/arena-depuradora-piscina" className="text-sky-600 hover:underline">esta guía</Link> explicamos la carga de arena y los cartuchos.</li>
              </ol>
              <p>
                Si el agua se ha puesto turbia o verdosa entre dos mediciones, no esperes a la siguiente: la guía de <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">agua verde</Link> describe el orden de actuación.
              </p>

              <h2>Tareas mensuales</h2>
              <ul>
                <li><strong>Alcalinidad y estabilizador.</strong> Cambian despacio, así que una vez al mes basta. Si usas pastillas de cloro lento, el ácido isocianúrico sube con cada una y no se elimina evaporando (<Link href="/acido-cianurico-piscina" className="text-sky-600 hover:underline">ácido cianúrico en la piscina</Link>).</li>
                <li><strong>Filtro a fondo.</strong> Lavado completo del cartucho o revisión de la arena según el manual del fabricante. El recambio de cartuchos tiene la frecuencia que indique el fabricante de tu depuradora, no una fecha universal.</li>
                <li><strong>Equipos.</strong> Mira juntas, mangueras, conexiones y la escalera. Una fuga pequeña se nota antes en el nivel del agua que en la factura.</li>
                <li><strong>Productos.</strong> Revisa cuánto te queda y la fecha de caducidad; comprar a mitad de temporada con la piscina ya turbia es lo que más caro sale.</li>
              </ul>
</div>

            <AdSenseAd placement="contenido" />

<div className="prose">

              <h2>Calendario mes a mes</h2>
              <p>Pensado para una piscina exterior en la península, usada de junio a septiembre. Ajusta uno o dos meses según tu zona.</p>
</div>

<div className="overflow-x-auto my-6">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="bg-sky-600 text-white">
        <th className="px-3 py-3 text-left">Mes</th>
        <th className="px-3 py-3 text-left">Qué toca</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Enero y febrero</td>
        <td className="px-3 py-3 text-gray-600">Invernaje pasivo o activo. Retirar de la cubierta el agua de lluvia y las hojas, mirar el nivel y no hacer más. Revisar y comprar material para la apertura.</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Marzo</td>
        <td className="px-3 py-3 text-gray-600">Preparar la apertura: limpiar y probar equipos, comprobar estado del cartucho o la arena y cargar productos nuevos.</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Abril</td>
        <td className="px-3 py-3 text-gray-600">Abrir cuando el tiempo lo permita (guía de apertura). Con el vaso cerrado más de dos semanas, el Real Decreto exige un control inicial completo en las piscinas públicas; en casa, mide todo antes del primer baño.</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Mayo</td>
        <td className="px-3 py-3 text-gray-600">Filtro en marcha y rutina semanal. Es el mes para poner a punto la alcalinidad y el estabilizador, antes de la subida de temperatura.</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Junio</td>
        <td className="px-3 py-3 text-gray-600">Empieza el uso intenso: medición dos o tres veces por semana y cepillado semanal. Manta térmica si quieres adelantar el baño.</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Julio y agosto</td>
        <td className="px-3 py-3 text-gray-600">Máxima exigencia. Más horas de filtrado, medición frecuente, cesta limpia, nivel vigilado. Tras días de mucha gente o de tormenta, medir antes de volver a bañarse.</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Septiembre</td>
        <td className="px-3 py-3 text-gray-600">Mantener la rutina mientras haya baños. Reducir poco a poco las horas de filtro si baja la temperatura.</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Octubre</td>
        <td className="px-3 py-3 text-gray-600">Último baño: limpieza a fondo, ajuste de pH, alcalinidad y estabilizador y preparar el cierre.</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Noviembre</td>
        <td className="px-3 py-3 text-gray-600">Cerrar la piscina para el invierno (guía de cierre). Elegir entre invernaje activo y pasivo.</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Diciembre</td>
        <td className="px-3 py-3 text-gray-600">Comprobar la cubierta y el nivel tras las primeras lluvias y vientos.</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="prose">

              <p>
                La parte de apertura y cierre tiene su propia lista paso a paso en <Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">cómo abrir la piscina</Link> y <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrarla en invierno</Link>; si dudas entre las dos formas de pasar el invierno, mira <Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">invernaje activo o pasivo</Link>.
              </p>

              <h2>Un ejemplo de semana en pleno verano</h2>
              <p>
                Piscina desmontable de 9.000 litros con depuradora de cartucho. Lunes: pH y cloro con tiras, cesta, cepillado de la línea del agua. Miércoles: medición rápida y, si ha habido mucho uso, vistazo al cartucho. Viernes: medición, aspirado o robot, nivel. Domingo: lectura del fin de semana y compra de lo que falte. En total, unas tres comprobaciones cortas y una limpieza más larga. No es más trabajo que otra rutina; la diferencia es que está escrita y se hace aunque el agua parezca limpia.
              </p>

              <h2>Errores que estropean el calendario</h2>
              <ul>
                <li>Medir solo cuando el agua ya se ve mal: llegas tarde y el tratamiento es más largo.</li>
                <li>Corregir el pH sin mirar la alcalinidad y volver a corregirlo a los dos días.</li>
                <li>Echar los productos con la gente dentro del agua. La norma lo desaconseja incluso para las piscinas públicas, salvo causa justificada y con el vaso cerrado.</li>
                <li>Seguir una fecha fija de cambio de cartucho o de arena en lugar del manual de tu equipo.</li>
                <li>Cerrar la piscina sin ajustar antes el agua, creyendo que en invierno «no pasa nada».</li>
              </ul>
</div>

            <div className="prose">
              <h2>Preguntas frecuentes sobre el mantenimiento de la piscina</h2>
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
                Fuentes: <a href="https://www.boe.es/eli/es/rd/2013/09/27/742" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013, de 27 de septiembre, criterios técnico-sanitarios de las piscinas (BOE núm. 244, 11/10/2013)</a>: anexo I (valores paramétricos), anexo III (frecuencia de controles), artículos 3, 6 y 11. Cálculo del filtrado: aritmética a partir del caudal y la capacidad de la ficha de la Bestway Steel Pro MAX 366 × 100 (Amazon.es, consultada el 4 de noviembre de 2026). Los meses del calendario son una propuesta editorial para clima peninsular, no un dato oficial.
              </p>
            </div>

            <AffiliateDisclosure />

            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
              <p className="text-sm text-gray-600 mb-4">Tiras reactivas, productos de tratamiento y depuradoras de nuestra selección.</p>
              <Link href="/tienda/tratamiento-agua" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
                Ver tratamiento del agua →
              </Link>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
                <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: valor ideal y cómo ajustarlo</Link></li>
                <li><Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">→ Cómo abrir la piscina en primavera</Link></li>
                <li><Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">→ Cómo cerrar la piscina en invierno</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/tratamiento-agua" ctaText="Ver tratamiento del agua" />
        </div>
      </div>
    </>
  );
}
