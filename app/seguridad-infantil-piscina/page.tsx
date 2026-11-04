import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 04/11/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Fuentes leídas el 04/11/2026: Comité de Seguridad de la AEP (An Pediatr 2015;82:43.e1-5), CTE DB SUA (texto consolidado 14/06/2022), Real Decreto 742/2013 (BOE-A-2013-10580). Normas autonómicas y municipales: no verificadas.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Seguridad infantil en la piscina: vallado, cubiertas y vigilancia, qué recomiendan los pediatras";
const SEO_TITLE = "Seguridad infantil en la piscina: guía para familias";
const H1 = "Seguridad infantil en la piscina: vallado, cubierta, vigilancia y qué dice la normativa";
const URL = "https://www.guiadelpiscina.com/seguridad-infantil-piscina";
const DESCRIPTION =
  "Cómo proteger a los niños en la piscina de casa: vallado, puerta con cierre, cubierta, vigilancia al alcance del brazo, flotadores y qué dicen los pediatras (AEP), el Código Técnico y el Real Decreto 742/2013.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "seguridad infantil piscina, vallado piscina niños, prevenir ahogamientos piscina, valla piscina privada, cubierta seguridad piscina, vigilancia niños piscina, piscina desmontable niños seguridad",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Vallado, cubierta, vigilancia y flotadores: las recomendaciones de los pediatras para evitar ahogamientos en la piscina de casa y qué obliga la norma.",
    url: URL,
  },
};

const quickPicks = [
  {
    "slug": "nabaiji-swimvest-chaleco-flotador-ninos",
    "note": "Ayuda de flotación para aprender a nadar (EN 13138-1), no un chaleco salvavidas: el niño debe estar siempre vigilado."
  }
];

const faqs = [
  {
    "q": "¿Es obligatorio vallar una piscina privada?",
    "a": "El Código Técnico (DB SUA, sección SUA 6) pide barreras de al menos 1,20 m en piscinas de uso colectivo y excluye de forma expresa las de viviendas unifamiliares. El Real Decreto 742/2013 no regula vallados. Algunas normas autonómicas o municipales sí pueden exigirlo: consulta la de tu comunidad y tu ayuntamiento."
  },
  {
    "q": "¿Qué altura debe tener la valla de una piscina?",
    "a": "El CTE fija 1,20 m como mínimo para las barreras de piscinas de uso colectivo. La AEP recomienda que sea lo bastante alta para que un niño no pueda trepar ni saltarla, con menos de 10 cm de hueco por abajo y una puerta que se cierre y se bloquee sola."
  },
  {
    "q": "¿Sirve de algo una manta térmica o un cobertor como protección?",
    "a": "No como protección frente a caídas. La AEP pide cubiertas rígidas que cubran toda la piscina y soporten el peso de un adulto; una manta de burbujas o un cobertor ligero flotan y no cumplen esa condición."
  },
  {
    "q": "¿Los manguitos y los flotadores evitan los ahogamientos?",
    "a": "No. La AEP desaconseja los flotadores hinchables que pueden desinflarse y recomienda chalecos salvavidas para los más pequeños, siempre con vigilancia. Una ayuda de flotación para aprender a nadar tampoco sustituye al adulto."
  },
  {
    "q": "¿A qué distancia debo estar de un niño pequeño en la piscina?",
    "a": "A menos de la longitud de tu brazo, según las recomendaciones de la AEP, y con un adulto que sepa nadar. La vigilancia no se delega en el socorrista, el vallado o la alarma."
  },
  {
    "q": "¿Cuánto tarda un niño en ahogarse?",
    "a": "Muy poco y casi sin ruido. La AEP no da un tiempo concreto, pero recuerda que basta con unos pocos centímetros de agua. Por eso la barrera física y la vigilancia continua importan más que la reacción posterior."
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
    knowsAbout: ["seguridad en piscinas","prevención de ahogamientos","piscinas desmontables"],
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
    { "@type": "ListItem", position: 3, name: "Seguridad infantil en la piscina", item: URL },
  ],
};

export default function SeguridadInfantilPiscinaPage() {
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
              <span className="text-gray-600">Seguridad infantil en la piscina</span>
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
                  Lo que más reduce los ahogamientos en una piscina de casa es un <strong>vallado completo de todo el perímetro</strong>, con puerta que se cierra y bloquea sola, y la <strong>vigilancia de un adulto al alcance del brazo</strong> mientras haya niños pequeños cerca. El Comité de Seguridad de la Asociación Española de Pediatría recoge que un vallado regulado puede reducir las muertes por ahogamiento hasta un 95 %. Ni los flotadores, ni las alarmas, ni una cubierta ligera sustituyen a esas dos medidas.
                </p>
              </div>

              <p>
                Esta guía es para familias con piscina propia, de obra o desmontable, y con niños en casa o de visita. La parte normativa tiene un matiz importante: la piscina unifamiliar queda fuera de la mayoría de las exigencias técnicas, así que la protección depende de lo que decidas hacer tú. Sobre la altura de la pared, la escalera y la edad que indica el fabricante, la guía de <Link href="/piscina-desmontable-redonda" className="text-sky-600 hover:underline">piscinas redondas</Link> tiene un apartado propio.
              </p>

              <h2>Un complemento, no una protección</h2>
            </div>

            {picks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                {picks.map(({ pk, product }) => (
                  <GuideProductPick key={pk.slug} product={product} note={pk.note} />
                ))}
              </div>
            )}

<div className="prose">

              <h2>Cuándo y dónde se producen los ahogamientos infantiles</h2>
              <p>
                Según las <a href="https://www.analesdepediatria.org/es-recommendations-for-prevention-drowning-articulo-S2341287914001215" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">recomendaciones del Comité de Seguridad y Prevención de Lesiones No Intencionadas en la Infancia de la AEP</a> (Anales de Pediatría, 2015), los ahogamientos de menores de cinco años ocurren sobre todo en piscinas de casas particulares o de comunidades de vecinos. Los niños mayores se ahogan más en lagos, mar, ríos y canales, con el alcohol como factor añadido en adolescentes. La propia AEP recuerda que basta muy poca agua para que ocurra: se han descrito casos con apenas dos centímetros.
              </p>
              <p>
                Un niño pequeño no suele gritar ni chapotear. Por eso la medida central no es enseñarle a tener miedo, sino impedir que llegue solo al agua.
              </p>

              <h2>1. Vallado perimetral: la medida con más efecto</h2>
              <p>
                La AEP recomienda cercar la piscina en todo su perímetro y mantenerla cerrada cuando no se use. Sus condiciones, según el documento:
              </p>
              <ul>
                <li>La valla tiene que ser lo bastante alta para que un niño no pueda trepar ni saltarla.</li>
                <li>El espacio entre el borde inferior y el suelo tiene que ser menor de 10 cm.</li>
                <li>La puerta debe cerrarse y bloquearse sola, con el pestillo a una altura de al menos 1,34 m.</li>
                <li>La valla no debe tapar la vista de la piscina, para poder vigilarla desde casa.</li>
              </ul>
              <p>
                Cuando se habla del número, hay que leerlo bien: el 95 % es la cifra que cita la AEP para un vallado simple pero regulado, no una promesa de que cualquier valla evite todos los accidentes. Una valla con la puerta abierta o con una silla pegada al otro lado no sirve.
              </p>
              <p>
                <strong>En una piscina desmontable</strong> la pared de la lona o de la estructura es la pared de la piscina, no una valla: nadie la ha diseñado para impedir el acceso, y la escalera es un punto de entrada. Si no puedes vallar toda la piscina, valla la zona del jardín donde está, y quita o pliega la escalera cuando no haya un adulto presente (es una recomendación nuestra, no un requisito de la norma).
              </p>

              <h2>2. Vigilancia: un adulto, sin móvil, al alcance del brazo</h2>
              <p>
                La AEP concreta cómo es una vigilancia útil: el niño pequeño debe estar a una distancia menor que la longitud del brazo del adulto que lo cuida, y este debe saber nadar. Ninguna medida técnica sustituye la vigilancia. En la práctica, conviene:
              </p>
              <ul>
                <li>Designar a un adulto concreto para cada turno de vigilancia, en lugar de «ya miramos todos».</li>
                <li>Dejar el móvil y el libro fuera del alcance mientras haya niños en el agua o cerca de ella.</li>
                <li>Contar a los niños al salir del agua y antes de volver a entrar en casa.</li>
                <li>Recoger los juguetes flotantes cuando termine el baño, porque atraen a los pequeños hacia el agua.</li>
              </ul>

              <h2>3. Cubiertas: hay que distinguir cuál es cuál</h2>
              <p>
                La AEP pide que las cubiertas sean rígidas, cubran todo el largo y ancho de la piscina y soporten el peso de un adulto sin hundirse. Eso excluye las mantas térmicas de burbujas y los cobertores de invierno habituales en las desmontables: flotan, no soportan peso y no impiden una caída. Tienen otras funciones, que explicamos en <Link href="/manta-termica-piscina" className="text-sky-600 hover:underline">la guía de la manta térmica</Link> y en <Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">la de cubiertas para piscinas desmontables</Link>. Si quieres una protección real, solo sirve una cubierta de seguridad que cumpla lo que pide la AEP.
              </p>
</div>

            <AdSenseAd placement="contenido" />

<div className="prose">

              <h2>4. Flotadores y ayudas para aprender a nadar</h2>
              <p>
                La AEP desaconseja los flotadores hinchables que pueden desinflarse y recomienda, para niños pequeños y no nadadores, chalecos salvavidas cerca del agua. Una ayuda de flotación para aprender, como la de la ficha de arriba, está pensada para clases y juegos con un adulto presente; el fabricante lo dice expresamente en su ficha. Ninguna de estas ayudas deja al niño sin vigilancia.
              </p>

              <h2>5. Alarmas y otros dispositivos</h2>
              <p>
                La AEP menciona alarmas de movimiento en el agua y alarmas de perímetro, y avisa de que no son suficientes si son la única medida. Pueden servir de segunda barrera en casas con niños pequeños; no hacen que la vigilancia sea opcional.
              </p>

              <h2>Qué dice la normativa y a quién obliga</h2>
              <p>
                Conviene separar tres textos para no confundirse:
              </p>
</div>

<div className="overflow-x-auto my-6">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="bg-sky-600 text-white">
        <th className="px-3 py-3 text-left">Norma</th>
        <th className="px-3 py-3 text-left">Qué dice sobre seguridad infantil</th>
        <th className="px-3 py-3 text-left">A quién afecta</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900"><a href="https://www.codigotecnico.org/pdf/Documentos/SUA/DBSUA.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">CTE, Documento Básico SUA (sección SUA 6, texto consolidado de 2022)</a></td>
        <td className="px-3 py-3 text-gray-600">Las piscinas con acceso de niños no controlado deben tener barreras que impidan el acceso al vaso, con puntos de paso practicables con cierre y bloqueo. Altura mínima de 1,20 m y resistencia a una fuerza horizontal de 0,5 kN/m en el borde superior.</td>
        <td className="px-3 py-3 text-gray-600">Piscinas de uso colectivo. Excluye de forma expresa las piscinas de viviendas unifamiliares.</td>
      </tr>
      <tr className="bg-sky-50">
        <td className="px-3 py-3 font-semibold text-gray-900"><a href="https://www.boe.es/eli/es/rd/2013/09/27/742" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013</a></td>
        <td className="px-3 py-3 text-gray-600">Calidad del agua y del aire, controles y responsabilidad del titular. No fija vallados.</td>
        <td className="px-3 py-3 text-gray-600">Piscinas de uso público; a las de comunidades de propietarios, solo parte de sus artículos; a las unifamiliares, solo el artículo 13 (incidencias).</td>
      </tr>
      <tr className="bg-white">
        <td className="px-3 py-3 font-semibold text-gray-900">Normativa autonómica y ordenanzas municipales</td>
        <td className="px-3 py-3 text-gray-600">Pueden exigir vallado o cerramiento en piscinas privadas. No hemos verificado el texto de cada comunidad: consulta el de la tuya.</td>
        <td className="px-3 py-3 text-gray-600">Depende de la comunidad autónoma y del ayuntamiento.</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="prose">

              <p>
                En resumen: si tu piscina es la de una vivienda unifamiliar, el Código Técnico no te obliga, pero la recomendación pediátrica es la misma que para las demás. Si vives en una comunidad de propietarios, el vallado del CTE (1,20 m, cierre y bloqueo) es la referencia mínima y conviene que la comunidad lo cumpla.
              </p>

              <h2>Lista de comprobación antes de cada verano</h2>
              <ol>
                <li>Revisa el vallado: ¿hay huecos mayores de 10 cm abajo o puntos por los que trepar (sillas, tumbonas, un macetero)?</li>
                <li>Prueba la puerta: ¿se cierra y se bloquea sola y el pestillo está fuera del alcance de los niños?</li>
                <li>Decide dónde se guarda la cubierta y quién la coloca; no sirve tenerla en el garaje.</li>
                <li>Anota el turno de vigilancia en las comidas y siestas, momentos en los que es fácil despistarse.</li>
                <li>Quita la escalera de la piscina desmontable cuando no se use y recoge los flotadores y juguetes.</li>
                <li>Enseña a los niños a nadar cuando tengan edad y a no acercarse al agua sin un adulto.</li>
              </ol>

              <h2>Errores frecuentes</h2>
              <ul>
                <li>Pensar que una piscina pequeña o poco profunda es menos peligrosa: para un niño pequeño cualquier profundidad lo es.</li>
                <li>Confiar en manguitos o flotadores como si fueran un chaleco salvavidas.</li>
                <li>Dar por hecho que, con más de un adulto, alguien vigila.</li>
                <li>Dejar la piscina desmontable llena y con la escalera puesta durante el invierno o en días sin uso.</li>
                <li>Contar con la alarma como única barrera.</li>
              </ul>
</div>

            <div className="prose">
              <h2>Preguntas frecuentes sobre seguridad infantil en la piscina</h2>
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
                Fuentes: Comité de Seguridad y Prevención de Lesiones No Intencionadas en la Infancia de la AEP, <a href="https://www.analesdepediatria.org/es-recommendations-for-prevention-drowning-articulo-S2341287914001215" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Recomendaciones sobre la prevención de ahogamientos</a> (An Pediatr (Barc) 2015;82:43.e1-5); <a href="https://www.codigotecnico.org/pdf/Documentos/SUA/DBSUA.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Código Técnico de la Edificación, Documento Básico SUA, sección SUA 6</a> (texto consolidado, junio de 2022); <a href="https://www.boe.es/eli/es/rd/2013/09/27/742" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013, de 27 de septiembre</a> (BOE núm. 244, de 11/10/2013), artículo 3. Consultadas el 4 de noviembre de 2026. No hemos verificado las normas de cada comunidad autónoma ni las ordenanzas municipales. Ficha del chaleco: Decathlon (data/products.ts).
              </p>
            </div>

            <AffiliateDisclosure />

            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
              <p className="text-sm text-gray-600 mb-4">Piscinas desmontables, escaleras y accesorios de nuestra selección.</p>
              <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
                Ver piscinas desmontables →
              </Link>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/piscina-desmontable-redonda" className="text-sky-600 hover:underline">→ Piscina desmontable redonda</Link></li>
                <li><Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">→ Escalera para piscina desmontable</Link></li>
                <li><Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">→ Cubierta para piscina desmontable</Link></li>
                <li><Link href="/manta-termica-piscina" className="text-sky-600 hover:underline">→ Manta térmica para piscina</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/piscinas-desmontables" ctaText="Ver piscinas desmontables" />
        </div>
      </div>
    </>
  );
}
