import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo generado 29/10/2026 (loop blogs-monetizacion). Sin precios ni valoraciones estáticas (cumplimiento Amazon Associates).
// Fuente de todos los datos de producto: fichas de data/products.ts (categoría Natación, Decathlon, alta 26/10/2026), que recogen
// la información de la marca. Sin cifras externas: no hay ningún dato que requiera fuente adicional.

const TITLE = "Gafas y gorro de natación: cómo elegirlos y qué más necesitas para nadar en tu piscina (2026)";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Gafas y gorro de natación: cómo elegirlos";
const URL = "https://www.guiadelpiscina.com/gafas-gorro-natacion";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description:
    "Cómo elegir gafas de natación (cristales claros o ahumados, antivaho, puente nasal), gorro de tela o de silicona y qué accesorios de entrenamiento merecen la pena en la piscina de casa.",
  keywords:
    "gafas de natación, cómo elegir gafas de natación, gorro de natación silicona o tela, gafas natación niños, tabla de natación, aletas cortas natación, material de natación piscina",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Gafas de natación, gorro y accesorios de entrenamiento: qué mirar antes de comprar, cómo probar el sellado y qué elegir según dónde nadas.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "decathlon-xbase-gafas-natacion-cristales-claros-l", note: "Para empezar: puente nasal ajustable, antivaho y filtro UV. Cristales claros, mejor para piscina cubierta o poca luz." },
  { slug: "decathlon-bfit-gafas-natacion-antivaho-ahumadas", note: "Para quien ya nada con regularidad y lo hace al aire libre: cristales ahumados, tres puentes intercambiables y doble cinta." },
  { slug: "decathlon-xbase-gafas-natacion-ninos", note: "Versión infantil de las Xbase, con puente nasal y cinta regulables." },
  { slug: "decathlon-gorro-natacion-silicona", note: "Sujeta mejor y limita la entrada de agua; es menos cómodo que el de tela." },
  { slug: "decathlon-gorro-natacion-tela-talla-m", note: "Cómodo y sin tirones en el pelo, pero no impide que entre el agua." },
  { slug: "nabaiji-tabla-natacion-piscina", note: "Para trabajar las piernas: 48 × 28 × 3,5 cm, con orificios para el agarre." },
];

const comparison = [
  {
    opcion: "Gafas de cristales claros",
    ideal: "Piscina cubierta, nadar a primera hora o con poca luz",
    cuidado: "En piscina exterior con mucho sol pueden deslumbrar (lo indica la propia ficha de las Xbase)",
  },
  {
    opcion: "Gafas de cristales ahumados",
    ideal: "Piscina exterior o de jardín con sol directo",
    cuidado: "Con poca luz se ve menos nítido; conviene tener en cuenta el momento del día en que nadas",
  },
  {
    opcion: "Gorro de silicona",
    ideal: "Pelo largo, nadar con frecuencia, que el gorro no se mueva",
    cuidado: "Menos cómodo que la tela; ningún gorro es totalmente estanco, el agua entra sobre todo por las orejas",
  },
  {
    opcion: "Gorro de tela",
    ideal: "Nadar por ocio, comodidad, que no tire del pelo",
    cuidado: "No impide la entrada de agua y sujeta menos que la silicona",
  },
];

const faqs = [
  {
    q: "¿Cómo se prueba que unas gafas de natación sellan bien?",
    a: "Antes de ajustar la cinta, apoya las gafas sobre los ojos y suéltalas: si se quedan pegadas solas, con una ligera succión, serán estancas. Es la prueba que recomienda Decathlon para las Bfit. Después se ajusta la cinta justo para que no se muevan, sin apretar de más.",
  },
  {
    q: "¿Cristales claros o ahumados para una piscina de jardín?",
    a: "Si la piscina está al aire libre y nadas con sol, los ahumados evitan el deslumbramiento que provocan los cristales claros en esas condiciones. Si nadas en piscina cubierta, de noche o con el cielo cubierto, los claros dan más visibilidad. Ambos tipos de gafas de nuestra selección filtran los rayos UV.",
  },
  {
    q: "¿Por qué se empañan las gafas y cómo se evita?",
    a: "El vaho aparece porque el interior del cristal se enfría y se condensa la humedad. Las gafas con tratamiento antivaho lo reducen, pero ese tratamiento se desgasta con el uso y con la limpieza: no frotes el interior de los cristales con los dedos ni con un paño. Las Bfit anuncian un antivaho de mayor duración, según la marca.",
  },
  {
    q: "¿Es mejor el gorro de silicona o el de tela?",
    a: "Depende de lo que busques. El de silicona sujeta mejor y limita la entrada de agua, a costa de ser menos cómodo. El de tela es el más fácil de poner y no tira del pelo, pero deja pasar el agua. Para nadar de vez en cuando en la piscina de casa, el de tela suele bastar; para entrenar, el de silicona.",
  },
  {
    q: "¿Los manguitos y los chalecos sirven para dejar solo al niño en el agua?",
    a: "No. Las ayudas a la flotación para aprender, como los manguitos y el chaleco Swimvest+ de Nabaiji, cumplen la norma EN 13138-1, pero son una ayuda para el aprendizaje y no un chaleco salvavidas. Un adulto tiene que vigilar al niño en todo momento, con o sin ayuda de flotación.",
  },
  {
    q: "¿Qué accesorio de entrenamiento es el más útil para empezar?",
    a: "La tabla de natación es la más versátil: permite trabajar la patada con la cabeza fuera del agua y se maneja sin experiencia. Las aletas cortas sirven después, para afinar la técnica y la frecuencia de patada. Las mancuernas acuáticas son para aquagym y trabajan el tren superior.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description:
    "Guía para elegir gafas de natación y gorro, probar el sellado y decidir qué accesorios de entrenamiento compensan en la piscina de casa.",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  author: {
    "@type": "Person",
    name: "José Marcos Galindo Sánchez",
    jobTitle: "Editor responsable",
    worksFor: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Editor responsable de Guía del Piscina (Mkt Web 360 SLU). Contrasta especificaciones técnicas y fichas de fabricante, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["química del agua de piscinas", "cloración", "mantenimiento de piscinas desmontables"],
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
    { "@type": "ListItem", position: 3, name: "Gafas y gorro de natación", item: URL },
  ],
};

export default function GafasGorroNatacionPage() {
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
          <span className="text-gray-600">Gafas y gorro de natación</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Gafas y gorro de natación: cómo elegirlos y qué más necesitas para nadar en tu piscina (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 29 octubre 2026 · Actualizado: 29 octubre 2026 · 7 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">José Marcos Galindo Sánchez · Editor responsable</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Para unas <strong>gafas de natación</strong>, lo que más importa es que <strong>sellen en tu cara</strong> (se prueba apoyándolas sin cinta) y que los <strong>cristales encajen con la luz</strong> donde nadas: ahumados al aire libre, claros en piscina cubierta. Para el <strong>gorro</strong>, la silicona sujeta mejor y la tela es más cómoda. Con eso ya puedes nadar; la tabla y las aletas llegan después, si quieres entrenar.
            </p>
          </div>

          <p>
            Tener piscina en casa cambia la forma de nadar: no hay calle ni socorrista, pero tampoco prisa. Muchas personas empiezan con unas gafas baratas, se les empañan o les entra agua, y acaban dejando de nadar. El problema casi siempre es de ajuste, no de precio. Esta guía recoge qué mirar en cada pieza, con los datos de las fichas de nuestra <Link href="/tienda/natacion" className="text-sky-600 hover:underline">categoría de natación</Link>. Si aún te estás planteando qué piscina comprar, empieza por la guía de <Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">piscinas desmontables grandes</Link>.
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
          <h2>Gafas de natación: qué mirar antes de comprar</h2>
          <h3>El sellado manda sobre todo lo demás</h3>
          <p>
            Unas gafas con muchas prestaciones que no sellan en tu cara son peores que unas sencillas que sí lo hacen. La prueba es fácil y no necesita agua: apoya las gafas sobre los ojos <em>sin cinta</em> y suéltalas. Si se quedan pegadas con una ligera succión, serán estancas. Es la recomendación que Decathlon da para las <Link href="/tienda/natacion/decathlon-bfit-gafas-natacion-antivaho-ahumadas" className="text-sky-600 hover:underline">Bfit</Link>, y vale para cualquier modelo. Después se ajusta la cinta lo justo: apretar de más no mejora el sellado y deja marca.
          </p>
          <h3>El puente nasal: ajustable o con piezas intercambiables</h3>
          <p>
            El puente es la pieza que decide si el sellado funciona en tu nariz. Las <Link href="/tienda/natacion/decathlon-xbase-gafas-natacion-cristales-claros-l" className="text-sky-600 hover:underline">Xbase de talla L</Link> lo traen ajustable, pensado para caras medianas y grandes. Las Bfit incluyen tres tamaños intercambiables, lo que da más margen si el primero no encaja. Si compras en una tienda física, prueba varios modelos; si compras online, elige un modelo con puente regulable.
          </p>
          <h3>Cristales claros o ahumados</h3>
          <p>
            Es la elección que más depende de tu piscina. Ambos tipos filtran más del 99 % de los rayos UV según las fichas, así que la diferencia es de comodidad visual:
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Opción</th>
                <th className="px-3 py-3 text-left">Es buena idea si…</th>
                <th className="px-3 py-3 text-left">Ten en cuenta</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((c, i) => (
                <tr key={c.opcion} className={i % 2 === 0 ? "bg-sky-50" : "bg-white"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{c.opcion}</td>
                  <td className="px-3 py-3 text-gray-600">{c.ideal}</td>
                  <td className="px-3 py-3 text-gray-600">{c.cuidado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h3>Antivaho: dura, pero no para siempre</h3>
          <p>
            Todas las gafas de nuestra selección llevan tratamiento antivaho. Es una capa sobre la cara interior del cristal, así que se gasta con el roce: no frotes el interior con los dedos ni con una toalla, y acláralas con agua dulce al terminar. Si pese a ello se empañan, suele ser señal de que la capa ya está desgastada.
          </p>

          <h2>Gorro de natación: silicona o tela</h2>
          <p>
            Aquí no hay un ganador absoluto. El <Link href="/tienda/natacion/decathlon-gorro-natacion-silicona" className="text-sky-600 hover:underline">gorro de silicona</Link> sujeta mejor y protege el pelo de la mayor parte del agua, pero es más elástico y menos cómodo; además, ningún gorro es totalmente estanco, porque el agua entra sobre todo por las orejas. El <Link href="/tienda/natacion/decathlon-gorro-natacion-tela-talla-m" className="text-sky-600 hover:underline">gorro de tela</Link> (poliéster y elastano, como un bañador) se pone sin enredarse y no tira del pelo, pero no impide que entre el agua. Si nadas de vez en cuando por ocio, el de tela es suficiente; si nadas largos con frecuencia o tienes pelo largo, el de silicona se nota.
          </p>
          <p>
            Un gorro no sustituye al cuidado del agua. Si el pelo se te reseca o se vuelve verdoso, revisa antes el cloro y el pH: tienes la guía de <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">cuánto cloro echar</Link> y la del <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH de la piscina</Link>.
          </p>

          <h2>Accesorios de entrenamiento: cuáles compensan</h2>
          <ul>
            <li><strong>Tabla de natación:</strong> la más útil para empezar. La <Link href="/tienda/natacion/nabaiji-tabla-natacion-piscina" className="text-sky-600 hover:underline">tabla Nabaiji</Link> mide 48 × 28 × 3,5 cm, tiene orificios para el agarre y una flotabilidad de 37 newtons. Sirve para aprender o para trabajar solo las piernas.</li>
            <li><strong>Aletas cortas:</strong> las <Link href="/tienda/natacion/decathlon-silifins-500-aletas-cortas" className="text-sky-600 hover:underline">Silifins 500</Link> tienen la pala corta, que mantiene una frecuencia de patada parecida a la del nado normal. Son para técnica y piernas, no para bucear, y hay que acertar con la talla (del 33-34 al 45-46).</li>
            <li><strong>Mancuernas de aquagym:</strong> las <Link href="/tienda/natacion/nabaiji-mancuernas-acuaticas-aquagym" className="text-sky-600 hover:underline">mancuernas de espuma</Link> no pesan en el agua: aumentan la resistencia y trabajan brazos, hombros, pecho y espalda. Se venden por pares.</li>
          </ul>

          <h2>Si el que nada es un niño</h2>
          <p>
            Para los más pequeños hay unas <Link href="/tienda/natacion/decathlon-xbase-gafas-natacion-ninos" className="text-sky-600 hover:underline">gafas Xbase infantiles</Link>, con el mismo ajuste de puente y cinta que las de adulto. Para las primeras brazadas existen ayudas a la flotación como el <Link href="/tienda/natacion/nabaiji-swimvest-chaleco-flotador-ninos" className="text-sky-600 hover:underline">chaleco Swimvest+</Link> (tallas de 15-25 kg y 25-35 kg, brazos libres) y los <Link href="/tienda/natacion/nabaiji-manguitos-ninos-11-30kg" className="text-sky-600 hover:underline">manguitos de dos cámaras</Link> (de 11 a 30 kg), ambos con la norma EN 13138-1. Importante: son una ayuda para aprender, no chalecos salvavidas. Un adulto debe vigilar al niño en todo momento, y esa vigilancia no se delega en ningún accesorio.
          </p>
          <p>
            Si la piscina es desmontable, repasa también el acceso y la seguridad del vaso con la guía de <Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">escaleras para piscina desmontable</Link>.
          </p>

          <h2>Nuestra valoración: qué comprar según tu caso</h2>
          <ul>
            <li><strong>Nadas poco y por ocio, piscina de jardín:</strong> gafas de cristales claros o ahumados según el sol, y gorro de tela solo si te molesta el pelo. No necesitas más.</li>
            <li><strong>Quieres empezar a nadar de forma regular:</strong> gafas con puente intercambiable (las Bfit) y gorro de silicona. Añade una tabla cuando quieras trabajar la patada.</li>
            <li><strong>Hay niños en casa:</strong> gafas infantiles para que disfruten sin molestias, y la ayuda de flotación adecuada a su peso, siempre con un adulto al lado.</li>
            <li><strong>Buscas algo para hacer ejercicio sin nadar largos:</strong> las mancuernas de aquagym convierten la piscina de casa en una sala de ejercicio de bajo impacto.</li>
          </ul>
          <p>
            Todos los productos de este artículo se venden en Decathlon y los enlaces son de afiliado. Puedes ver el conjunto en nuestra <Link href="/tienda/natacion" className="text-sky-600 hover:underline">tienda de natación</Link>.
          </p>

          <h2>Preguntas frecuentes sobre gafas y gorros de natación</h2>
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
            Fuentes: fichas de producto de Decathlon recogidas en nuestro catálogo (cristales, protección UV, puentes, material, medidas, tallas y norma EN 13138-1). La prueba de sellado sin cinta es la que recomienda Decathlon para las gafas Bfit.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Gafas, gorros, tablas, aletas y ayudas a la flotación de nuestra selección de natación.</p>
          <Link href="/tienda/natacion" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver natación →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ ¿Cuánto cloro echar en la piscina?</Link></li>
            <li><Link href="/mejores-tumbonas-jardin" className="text-sky-600 hover:underline">→ Mejores tumbonas para el jardín</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/natacion" ctaText="Ver productos de natación" />
      </div>
    </div>
    </>
  );
}
