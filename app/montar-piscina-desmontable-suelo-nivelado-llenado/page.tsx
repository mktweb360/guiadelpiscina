import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo montar una piscina desmontable: suelo, nivelado y llenado",
  description:
    "Cómo elegir el sitio, preparar y nivelar el suelo y llenar una piscina desmontable según los manuales de Bestway e Intex: superficies válidas, errores y comprobaciones.",
  keywords:
    "montar piscina desmontable, nivelar suelo piscina, preparar suelo piscina desmontable, llenar piscina desmontable",
  alternates: { canonical: "https://www.guiadelpiscina.com/montar-piscina-desmontable-suelo-nivelado-llenado" },
  openGraph: {
    title: "Cómo montar una piscina desmontable paso a paso: dónde ponerla, nivelar el suelo y llenarla",
    description:
      "Superficies válidas, preparación del suelo, montaje y llenado según los manuales de Bestway e Intex.",
    url: "https://www.guiadelpiscina.com/montar-piscina-desmontable-suelo-nivelado-llenado",
  },
};

const faqs = [
    {
      "q": "¿Puedo montar una piscina desmontable sobre arena o grava?",
      "a": "Bestway incluye la arena y la grava entre las superficies que deben evitarse en su manual, junto con el barro, la terraza, el balcón y el suelo blando o flojo. Sus superficies sugeridas son césped, tierra y hormigón, siempre planas y sin agujeros."
    },
    {
      "q": "¿Qué pasa si el suelo no está del todo nivelado?",
      "a": "Los manuales avisan de que montar sobre una superficie inclinada o irregular crea una carga desigual en la estructura y puede provocar el colapso de la piscina. Además, Bestway indica que los daños derivados de una superficie incorrecta no se consideran defecto de fabricación ni están cubiertos por la garantía."
    },
    {
      "q": "¿Puedo mover la piscina una vez extendido el liner?",
      "a": "Sí, pero levantándolo, no arrastrándolo: Bestway advierte de que la fricción del PVC contra el suelo puede dañar el revestimiento. Hazlo entre varias personas y antes de llenarla."
    },
    {
      "q": "¿Cuánto se tarda en montarla?",
      "a": "Depende del modelo. Para la Bestway Steel Pro Max, el fabricante indica entre 20 y 30 minutos con dos o tres personas, sin contar el movimiento de tierras ni el llenado con agua. Las piscinas autoportantes de anillo hinchable se montan en menos pasos, pero el llenado también lleva horas."
    },
    {
      "q": "¿Puedo montarla en una terraza o un balcón?",
      "a": "Los manuales de Bestway lo desaconsejan expresamente (terraza, balcón, plataforma). Además del peso del agua, un derrame o una fuga en esas superficies puede dañar el edificio; consulta antes con un profesional y con el reglamento de tu comunidad de vecinos si vives en un edificio."
    }
  ];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo montar una piscina desmontable paso a paso: dónde ponerla, nivelar el suelo y llenarla",
  description:
    "Cómo elegir el sitio, preparar y nivelar el suelo y llenar una piscina desmontable según los manuales de Bestway e Intex: superficies válidas, errores y comprobaciones.",
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  author: {
    "@type": "Person",
    name: "José Marcos Galindo Sánchez",
    jobTitle: "Editor responsable",
    worksFor: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Editor responsable de Guía del Piscina (Mkt Web 360 SLU). Contrasta especificaciones técnicas y fichas de fabricante, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/montar-piscina-desmontable-suelo-nivelado-llenado",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Montar piscina desmontable",
      item: "https://www.guiadelpiscina.com/montar-piscina-desmontable-suelo-nivelado-llenado",
    },
  ],
};

export default function MontarPiscinaDesmontablePage() {
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
          <span className="text-gray-600">Montar piscina desmontable</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Cómo montar una piscina desmontable paso a paso: dónde ponerla, nivelar el suelo y llenarla
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 11 noviembre 2026 · Actualizado: 11 noviembre 2026 · 8 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">José Marcos Galindo Sánchez · Editor responsable</a>
          <span className="text-gray-400">— Guía del Piscina</span>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">Lo que más importa al montar una piscina desmontable es el suelo: tiene que ser plano, liso, firme y sin objetos que puedan dañar el liner. Los manuales de Bestway e Intex advierten de que una superficie inclinada, blanda o irregular puede provocar el colapso de la piscina, y Bestway añade que los daños por una superficie incorrecta no cubren la garantía.</p>
          </div>

          <h2>Dónde colocar la piscina</h2>
          <p>
            Antes de abrir la caja, decide el sitio con el manual de tu modelo delante. El de Bestway pide que la superficie sea plana y sin agujeros que puedan dañar el revestimiento. Entre las superficies que sugiere están el césped, la tierra y el hormigón. Entre las que desaconseja, el barro, la arena, la grava, la terraza, el balcón, el camino de entrada, la plataforma y cualquier suelo blando o flojo.
          </p>
          <p>
            El motivo es el peso: el agua y las personas dentro suman una carga enorme sobre una superficie pequeña, y un suelo que cede lo hace de forma desigual. Los manuales de Bestway también recuerdan que el agua puede salir de la piscina al bañarse o cuando llueve, y que si ablanda el terreno este pierde capacidad de soportar el peso. Elige un punto con salida natural del agua y sin pendiente hacia la casa.
          </p>
          <p>
            Hay criterios adicionales que son consejo editorial, no norma de fabricante: evita colocar la piscina bajo árboles que suelten hojas o frutos, déjala cerca de una toma de agua y de un enchufe protegido para la depuradora, y consulta la normativa de tu ayuntamiento y comunidad autónoma, así como los estatutos de tu comunidad de vecinos si la instalas en una zona común.
          </p>

          <h2>Preparar y nivelar el suelo</h2>
          <p>
            Retira piedras, raíces, ramas y cualquier objeto punzante de toda la superficie que ocupará la piscina, y un poco más allá para poder caminar alrededor. Rellena los huecos con tierra compactada, no con arena suelta, y retira el exceso en los puntos altos. Para comprobar el resultado, apoya un listón recto con un nivel de burbuja en varias direcciones sobre el suelo: si el nivel marca inclinación en alguna, corrígela antes de seguir. Los manuales no fijan una tolerancia en centímetros, así que la regla práctica es que el suelo se vea y se note plano, sin desniveles apreciables.
          </p>
          <p>
            Para proteger el liner del suelo, muchos modelos incluyen una lona base; si la tuya no, conviene comprar una aparte, y no usar nunca una lámina con relieve que pueda marcar el fondo. Si tienes dudas sobre la resistencia del terreno, sobre todo en una terraza o un forjado, consulta con un profesional antes de llenar: los manuales lo desaconsejan expresamente.
          </p>

          <h2>Montaje según el tipo de piscina</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Cómo se monta, según el fabricante</th>
                <th className="px-3 py-3 text-left">Punto de atención</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-3 py-3 font-medium text-gray-900">Autoportante de anillo hinchable (Intex Easy Set)</td>
                <td className="px-3 py-3 text-gray-600">Se extiende sobre suelo nivelado, se infla el anillo superior y se llena de agua.</td>
                <td className="px-3 py-3 text-gray-600">Llenar en exceso o montar sobre suelo no compacto puede provocar el colapso, según el manual de Intex.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-3 font-medium text-gray-900">Estructura metálica (Bestway Steel Pro Max)</td>
                <td className="px-3 py-3 text-gray-600">Sin herramientas, entre 20 y 30 minutos con dos o tres personas, sin contar el movimiento de tierras ni el llenado.</td>
                <td className="px-3 py-3 text-gray-600">Bestway recomienda espolvorear talco sobre el riel superior antes del montaje para alargar la vida de la piscina.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <p>
            Sea cual sea el modelo, sigue el orden del manual y no te saltes pasos. Si tienes que recolocar la piscina cuando el liner ya está extendido, levántalo entre varias personas: Bestway advierte de que arrastrarlo por el suelo puede dañarlo por fricción. Si tu piscina se vende con depuradora o escalera, cada una trae su propio manual con sus instrucciones de seguridad y de instalación.
          </p>

          <h2>Llenado: cómo evitar el desbordamiento y el colapso</h2>
          <p>
            Llena la piscina despacio y vigila el nivel de la pared a medida que sube el agua. Intex avisa en su manual de que llenar en exceso, o hacerlo sobre un suelo que no sea plano, nivelado y compacto, puede provocar el colapso de la piscina y que una persona que esté dentro salga despedida. Por eso conviene no pasar la marca de llenado del fabricante y no dejar a nadie bañándose mientras se llena. Si ves que una pared se hunde de un lado o que la piscina se inclina, detén el llenado y vacía hasta corregir el suelo.
          </p>
          <p>
            Para saber cuánta agua tiene tu piscina y cuánto producto de tratamiento necesitará, usa nuestra guía para <Link href="/calcular-litros-piscina" className="text-sky-600 hover:underline">calcular los litros de una piscina</Link>.
          </p>

          <h2>Errores frecuentes al montar una piscina desmontable</h2>
          <ul>
            <li><strong>Montar sobre arena o grava suelta</strong>, que no es compacta ni uniforme y que Bestway desaconseja expresamente.</li>
            <li><strong>No retirar piedras pequeñas</strong> bajo el liner: pueden perforarlo con el peso del agua.</li>
            <li><strong>Arrastrar el liner para recolocarlo</strong> en lugar de levantarlo entre varios.</li>
            <li><strong>Llenar de golpe sin vigilar el nivel</strong> y pasarse de la marca del fabricante.</li>
            <li><strong>Instalarla en una terraza o balcón</strong> sin comprobar antes la carga que soporta el suelo.</li>
          </ul>

          <h2>Qué hacer después del montaje</h2>
          <p>
            Con la piscina llena, conecta la depuradora siguiendo su manual: Bestway indica que la bomba no debe funcionar mientras haya personas dentro y que las cubiertas se retiran por completo de la superficie antes de entrar. Si hay niños en casa, repasa antes de abrir la temporada la <Link href="/seguridad-infantil-piscina" className="text-sky-600 hover:underline">guía de seguridad infantil en piscinas</Link>, elige una <Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">escalera adecuada a la altura de tu piscina</Link> y establece la rutina de la <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">guía de mantenimiento de piscinas desmontables</Link>. Si es tu primera temporada, la guía de <Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">cómo abrir la piscina en primavera</Link> te da el orden de los primeros tratamientos del agua.
          </p>
          <p>
            Si aún no has elegido modelo, estos dos ejemplos del catálogo ayudan a comparar formatos: la{" "}
            <Link href="/tienda/piscinas-desmontables/intex-28272np-piscina-small-frame-300x200" className="text-sky-600 hover:underline">Intex Small Frame de 300 × 200 × 75 cm</Link>, rectangular y de estructura metálica, y la{" "}
            <Link href="/tienda/piscinas-desmontables/intex-28166-easy-set-457x107" className="text-sky-600 hover:underline">Intex Easy Set de 457 × 107 cm</Link>, de anillo hinchable, que se vende como set completo con depuradora y accesorios. En <Link href="/tienda/piscinas-desmontables" className="text-sky-600 hover:underline">la tienda de piscinas desmontables</Link> tienes el resto.
          </p>

          <h2>Preguntas frecuentes sobre el montaje</h2>
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

        <div className="my-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Fuentes consultadas</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
            <li><a href="https://gt.epaenlinea.com/gt/documentos/0675024_2.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">Bestway — Manual del usuario de piscinas (versión en español, sección «Elija la ubicación correcta»; consultado el 11/11/2026)</a></li>
            <li><a href="https://manualslib.mx/manual/558313/Bestway-Steel-Pro-Max.html?page=49" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">Bestway — Steel Pro Max: instrucciones de instalación (consultado el 11/11/2026)</a></li>
            <li><a href="https://manuals.plus/intex/28106np-easy-set-pool-8ft-x-24-manual.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">Intex — Easy Set Pool, Owner's Manual (86PO): «Important Safety Rules» y montaje (consultado el 11/11/2026)</a></li>
          </ul>
        </div>

        <AffiliateDisclosure />

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/piscina-desmontable-redonda" className="text-sky-600 hover:underline">→ Piscinas desmontables redondas</Link></li>
            <li><Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">→ Piscinas desmontables rectangulares</Link></li>
            <li><Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">→ Cubierta para piscina desmontable</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda" ctaText="Ver productos recomendados" />
      </div>
    </div>
    </>
  );
}
