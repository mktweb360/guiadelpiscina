import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 04/11/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Fuentes leídas el 04/11/2026: IDAE, Pliego de Condiciones Técnicas de Instalaciones de Baja Temperatura (PET-REV octubre 2002, anexo IV y VII); IDAE, Guía 013 (2017); Real Decreto 742/2013. Sin cifras de ahorro de fabricantes. Sin precios.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Cómo ahorrar agua y energía en la piscina: horas de filtrado, cubierta y bomba";
const SEO_TITLE = "Cómo ahorrar agua y energía en la piscina";
const H1 = "Ahorrar agua y energía en la piscina: horas de filtrado, cubierta y bomba, con números";
const URL = "https://www.guiadelpiscina.com/ahorrar-agua-energia-piscina";
const DESCRIPTION =
  "Cómo gastar menos luz y menos agua en la piscina: calcular el consumo de la bomba, ajustar las horas de filtrado al caudal, cubrir el agua, bombas de velocidad variable y qué dice el IDAE.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "ahorrar energia piscina, ahorrar agua piscina, horas de filtrado piscina, consumo depuradora piscina, bomba velocidad variable piscina, cubierta piscina ahorro, manta termica ahorro energia",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Consumo de la depuradora, horas de filtrado según el caudal, cubierta para evitar pérdidas y bomba de velocidad variable: cómo ahorrar luz y agua en la piscina.",
    url: URL,
  },
};

const quickPicks = [
  {
    "slug": "arebos-cubierta-solar-piscina-450x220-120um",
    "note": "Para piscinas pequeñas: 4,5 × 2,2 m, recortable, para tapar el agua cuando no se usa."
  },
  {
    "slug": "arebos-cubierta-solar-piscina-500x800-400um",
    "note": "Cubierta de 500 × 800 cm y 400 micras, rectangular y acortable, para piscinas grandes."
  },
  {
    "slug": "intex-c2500-depuradora-cartucho",
    "note": "Depuradora de cartucho con temporizador, para programar las horas de filtrado en piscinas grandes."
  }
];

const faqs = [
  {
    "q": "¿Cuántas horas al día debo tener el filtro en marcha?",
    "a": "El Real Decreto 742/2013 no fija un número: pide recirculación suficiente para cumplir los parámetros de calidad. Calcula cuánto tarda tu depuradora en pasar todo el volumen (litros ÷ l/h) y ajusta mirando el agua: si se mantiene clara y con valores en rango, no hace falta más."
  },
  {
    "q": "¿Cuánto gasta la depuradora de una piscina?",
    "a": "Se calcula con la potencia de la bomba (kW) por las horas de uso. Una bomba de 300 W funcionando 8 horas gasta 2,4 kWh al día. Para el euro por kWh, usa el de tu factura."
  },
  {
    "q": "¿Merece la pena una bomba de velocidad variable?",
    "a": "Depende del equipo y de las horas de uso. El IDAE indica que en los circuitos de climatización de edificios, funcionar a caudal variable puede reducir hasta un 70 % la energía de bombeo, pero ese dato no es de piscinas domésticas. Pide al fabricante la curva de consumo antes de decidir."
  },
  {
    "q": "¿Ahorra de verdad una manta térmica?",
    "a": "Una cubierta actúa sobre las pérdidas por radiación nocturna, evaporación y convección que enumera el IDAE para piscinas exteriores. No damos un porcentaje porque no hay un dato oficial para una piscina doméstica. Ten en cuenta que puede acumular microorganismos y debe limpiarse."
  },
  {
    "q": "¿Cómo sé si mi piscina pierde agua por una fuga?",
    "a": "Con el test del cubo: un cubo con agua en el primer escalón, marcas el nivel de dentro y de fuera y comparas a las 24 horas. Si el nivel de la piscina baja más que el del cubo, además de la evaporación hay una pérdida."
  },
  {
    "q": "¿Conviene vaciar la piscina cada temporada?",
    "a": "No suele hacer falta si el agua se mantiene tratada y cubierta. Vaciar y volver a llenar gasta mucha agua. Las guías de cierre e invernaje explican cómo conservarla."
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
    knowsAbout: ["eficiencia energética en piscinas","depuración de piscinas","ahorro de agua"],
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
    { "@type": "ListItem", position: 3, name: "Ahorrar agua y energía en la piscina", item: URL },
  ],
};

export default function AhorrarAguaEnergiaPiscinaPage() {
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
              <span className="text-gray-600">Ahorrar agua y energía en la piscina</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
            <p className="text-gray-400 text-sm mb-6">Publicado: 4 noviembre 2026 · Actualizado: 4 noviembre 2026 · 7 min lectura</p>
            <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
              <span>✍️</span>
              <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
            </span>

            <AffiliateDisclosure />

            <div className="prose">
              <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  La luz de la piscina se va en dos sitios: la <strong>bomba del filtro</strong> y, si calientas el agua, el <strong>calor que se pierde</strong>. El consumo de la bomba es sencillo: <strong>kW × horas</strong>. Puedes reducirlo ajustando las horas de filtrado al caudal de tu depuradora, programando el temporizador y, si tu equipo lo permite, con una bomba de velocidad variable. El calor y el agua se conservan tapando la piscina cuando no se usa, porque la evaporación figura entre las pérdidas que el IDAE enumera para una piscina exterior.
                </p>
              </div>

              <p>
                Esta guía va de ahorrar sin renunciar al agua limpia. Para elegir equipo, tienes las guías de <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">depuradoras</Link> y de <Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">bombas de calor</Link>; aquí nos centramos en cómo usar lo que ya tienes y en qué cifras hay detrás de cada consejo. Donde no hay una fuente oficial que dé un porcentaje de ahorro, no lo damos.
              </p>

              <h2>Material que ayuda a gastar menos</h2>
            </div>

            {picks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                {picks.map(({ pk, product }) => (
                  <GuideProductPick key={pk.slug} product={product} note={pk.note} />
                ))}
              </div>
            )}

<div className="prose">

              <h2>Cuánto consume la bomba del filtro</h2>
              <p>
                La energía eléctrica en kWh es la potencia en kW multiplicada por las horas de funcionamiento. La potencia viene en la placa del equipo o en su manual (en vatios: divide entre 1.000 para tener kW). Con un ejemplo inventado para mostrar el cálculo, una bomba de 300 W:
              </p>
              <ul>
                <li><strong>8 horas al día:</strong> 0,3 kW × 8 h = 2,4 kWh al día, unos 72 kWh al mes.</li>
                <li><strong>5 horas al día:</strong> 0,3 kW × 5 h = 1,5 kWh al día, unos 45 kWh al mes.</li>
              </ul>
              <p>
                La diferencia son 27 kWh al mes. Para pasarlo a euros, multiplica por el precio del kWh de tu factura. No ponemos precios porque cambian cada mes y cada tarifa es distinta.
              </p>

              <h2>Cuántas horas de filtrado necesitas de verdad</h2>
              <p>
                El <a href="https://www.boe.es/eli/es/rd/2013/09/27/742" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013</a> no fija un número de horas: pide tiempos de recirculación «según las especificaciones y necesidades de la piscina» para cumplir los parámetros de calidad. Una forma de partir de datos es calcular cuánto tarda la depuradora en pasar todo el volumen por el filtro:
              </p>
              <p>
                <strong>horas por ciclo = litros de la piscina ÷ caudal de la depuradora (l/h)</strong>
              </p>
              <ul>
                <li>Bestway Steel Pro MAX Ø366 × 100 cm: 9.150 litros ÷ 2.006 l/h = 4,6 horas por ciclo completo.</li>
                <li>Intex Easy Set Ø457 × 107 cm: 12.430 litros ÷ 3.785 l/h = 3,3 horas por ciclo completo.</li>
              </ul>
              <p>
                Como criterio editorial, no oficial: empieza con un ciclo completo al día en temporada fresca y sube a dos en plena ola de calor o con mucho uso, vigilando el agua. Si el agua se mantiene clara y los valores en rango, no hace falta más; si se enturbia, antes de alargar horas revisa el filtro, el desinfectante y el pH. El calendario de <Link href="/calendario-mantenimiento-piscina" className="text-sky-600 hover:underline">mantenimiento</Link> incluye esta comprobación semanal, y puedes calcular tus litros con <Link href="/calcular-litros-piscina" className="text-sky-600 hover:underline">esta guía</Link>.
              </p>
              <p>
                Dos ajustes más que cuestan poco: programar el temporizador del equipo (o un enchufe programable) en lugar de dejar la bomba a mano, y, si tu tarifa tiene franjas con distinto precio, poner las horas de filtrado en las más baratas. Eso lo puedes ver en tu propia factura.
              </p>

              <h2>Bombas de velocidad variable</h2>
              <p>
                Las bombas fijas de las piscinas desmontables, integradas en la depuradora, no tienen esta opción. Sí la tienen muchas bombas para piscinas de obra: se programan varias velocidades y una baja consume bastante menos que una alta. El IDAE explica el principio en su <a href="https://www.idae.es/publicaciones/medidas-de-ahorro-energetico-en-los-circuitos-hidraulicos-guias-idae-013" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Guía 013, Medidas de ahorro energético en los circuitos hidráulicos</a>: la energía de bombeo en los circuitos de calefacción y climatización de edificios puede reducirse hasta un 70 % si la instalación trabaja a caudal variable, aunque el ahorro depende de la bomba, de las válvulas de control y de las de equilibrado.
              </p>
              <p>
                Ese 70 % es una cifra para circuitos de edificios, no para una piscina doméstica. Lo que sí te dice es la lógica: moverse más despacio cuesta menos energía que moverse deprisa. Antes de cambiar de bomba, pide al fabricante su curva de consumo por velocidad y comprueba que la velocidad baja sigue haciendo pasar suficiente agua para tu volumen con la fórmula de arriba.
              </p>
</div>

            <AdSenseAd placement="contenido" />

<div className="prose">

              <h2>Tapar la piscina: la medida con menos coste</h2>
              <p>
                En una piscina exterior, el calor y el agua se pierden por varias vías. El <a href="https://www.idae.es/uploads/documentos/documentos_11209_4e8ace1b.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Pliego de Condiciones Técnicas del IDAE para instalaciones solares térmicas de baja temperatura</a> (octubre de 2002) enumera las pérdidas de una piscina al aire libre: radiación del agua hacia la atmósfera, más acentuada por la noche; evaporación; convección, influida por el viento; conducción por las paredes; y arrastre y salpicaduras de agua. Una cubierta actúa sobre varias a la vez. El mismo pliego menciona la manta térmica para evitar las pérdidas nocturnas, con un aviso práctico: pueden proliferar microorganismos en ella, así que hay que limpiarla periódicamente.
              </p>
              <p>
                Si calientas el agua con una bomba de calor o con energía solar, tapar de noche es lo que más fácilmente evita perder lo que has ganado de día; si no la calientas, reduce la evaporación y la suciedad. Cómo elegirla y ponerla está en <Link href="/manta-termica-piscina" className="text-sky-600 hover:underline">la guía de la manta térmica</Link>. Recuerda que no es una cubierta de seguridad: eso lo explicamos en <Link href="/seguridad-infantil-piscina" className="text-sky-600 hover:underline">seguridad infantil en la piscina</Link>.
              </p>

              <h2>Gastar menos agua</h2>
              <ul>
                <li><strong>Cubrir.</strong> Menos evaporación significa menos agua de reposición.</li>
                <li><strong>Cortar el viento.</strong> El pliego del IDAE cita el viento entre los factores de pérdida; un seto o una pantalla del lado del que sopla reduce la convección y las hojas que caen al agua.</li>
                <li><strong>Evitar el sobrellenado y las salpicaduras.</strong> Rellena hasta la altura de uso, no más, y no dejes la manguera abierta sin controlar el tiempo.</li>
                <li><strong>Buscar fugas.</strong> Un test sencillo: pon un cubo con agua en el primer escalón, marca el nivel dentro y fuera, y compara a las 24 horas. Si baja más fuera que dentro, hay pérdida además de la evaporación.</li>
                <li><strong>No vaciar sin necesidad.</strong> Mantener el agua tratada fuera de temporada gasta menos que llenar de nuevo cada año. Mira <Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">invernaje activo o pasivo</Link> y <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrar la piscina</Link>.</li>
                <li><strong>Lavar el filtro cuando toca.</strong> En filtros de arena, el contralavado gasta agua; hazlo cuando el manómetro o el manual lo indiquen, no por calendario.</li>
              </ul>

              <h2>Resumen de medidas</h2>
</div>

<div className="overflow-x-auto my-6">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="bg-sky-600 text-white">
        <th className="px-3 py-3 text-left">Medida</th>
        <th className="px-3 py-3 text-left">Qué ahorra</th>
        <th className="px-3 py-3 text-left">Cómo comprobarlo</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Ajustar horas de filtrado</td>
        <td className="px-3 py-3 text-gray-600">Electricidad de la bomba</td>
        <td className="px-3 py-3 text-gray-600">kWh = kW × horas; cuánto tarda un ciclo con litros ÷ l/h</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Temporizador o enchufe programable</td>
        <td className="px-3 py-3 text-gray-600">Electricidad (evita olvidos)</td>
        <td className="px-3 py-3 text-gray-600">Mira que el equipo arranca y para a la hora fijada</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Filtrar en franjas baratas</td>
        <td className="px-3 py-3 text-gray-600">Coste de la electricidad</td>
        <td className="px-3 py-3 text-gray-600">Franjas de tu tarifa en la factura</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Bomba de velocidad variable</td>
        <td className="px-3 py-3 text-gray-600">Electricidad, según equipo</td>
        <td className="px-3 py-3 text-gray-600">Curva de consumo del fabricante por velocidad</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Cubrir de noche o sin uso</td>
        <td className="px-3 py-3 text-gray-600">Calor y agua evaporada</td>
        <td className="px-3 py-3 text-gray-600">Temperatura y nivel con y sin cubierta</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900">Cortar el viento</td>
        <td className="px-3 py-3 text-gray-600">Agua y calor</td>
        <td className="px-3 py-3 text-gray-600">Comparar el nivel tras unos días ventosos</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Test del cubo</td>
        <td className="px-3 py-3 text-gray-600">Agua perdida por fugas</td>
        <td className="px-3 py-3 text-gray-600">Diferencia de nivel entre el cubo y la piscina a las 24 h</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="prose">

              <h2>Errores frecuentes</h2>
              <ul>
                <li>Recortar horas de filtrado hasta que el agua se enturbia: el ahorro de luz no compensa el gasto en productos para recuperarla.</li>
                <li>Dar por buena una cifra de ahorro de un fabricante sin comprobar para qué instalación se midió.</li>
                <li>Dejar la manta térmica puesta mientras alguien se baña o se tratan los productos.</li>
                <li>Cubrir con una manta sucia, que acaba ensuciando el agua.</li>
                <li>Cambiar de bomba sin conocer los litros ni el caudal que necesita la piscina.</li>
              </ul>
</div>

            <div className="prose">
              <h2>Preguntas frecuentes sobre ahorro en la piscina</h2>
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
                Fuentes: IDAE, <a href="https://www.idae.es/uploads/documentos/documentos_11209_4e8ace1b.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Instalaciones de Energía Solar Térmica, Pliego de Condiciones Técnicas de Instalaciones de Baja Temperatura</a> (PET-REV, octubre de 2002), anexo IV (pérdidas de piscinas al aire libre) y anexo VII (aislamientos y manta térmica); IDAE, <a href="https://www.idae.es/publicaciones/medidas-de-ahorro-energetico-en-los-circuitos-hidraulicos-guias-idae-013" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Guía 013, Medidas de ahorro energético en los circuitos hidráulicos</a> (2017); <a href="https://www.boe.es/eli/es/rd/2013/09/27/742" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013</a>, anexo I (tiempo de recirculación). Capacidades y caudales de las fichas de Bestway e Intex en Amazon.es (consultadas el 4 de noviembre de 2026). El ejemplo de 300 W es un cálculo ilustrativo, no el dato de un equipo concreto. El criterio de un ciclo diario es editorial.
              </p>
            </div>

            <AffiliateDisclosure />

            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
              <p className="text-sm text-gray-600 mb-4">Cubiertas solares, depuradoras y bombas de calor de nuestra selección.</p>
              <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
                Ver piscinas desmontables →
              </Link>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/manta-termica-piscina" className="text-sky-600 hover:underline">→ Manta térmica para piscina</Link></li>
                <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina</Link></li>
                <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Mejores depuradoras de piscina</Link></li>
                <li><Link href="/calcular-litros-piscina" className="text-sky-600 hover:underline">→ Cómo calcular los litros de una piscina</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/piscinas-desmontables" ctaText="Ver piscinas desmontables" />
        </div>
      </div>
    </>
  );
}
