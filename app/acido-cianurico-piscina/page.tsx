import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

// Artículo generado 07/10/2026 (loop blogs-monetizacion). Sin precios ni valoraciones estáticas de Amazon (cumplimiento julio 2026).
// Fuentes de los valores: RD 742/2013 (piscinas de uso público; resumen de parámetros en la guía de control de calidad del Gobierno de Aragón)
// y ficha informativa sobre ácido cianúrico del Departamento de Salud de Montana (EE. UU.).

export const metadata: Metadata = {
  title: "Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026)",
  description:
    "Qué es el ácido cianúrico (estabilizador) de la piscina, qué valor es el ideal, por qué un exceso bloquea el cloro y cómo bajarlo. Qué cloros lo aportan y cuáles no.",
  keywords:
    "ácido cianúrico piscina, estabilizador de cloro, ácido isocianúrico piscina, exceso de ácido cianúrico, como bajar el ácido cianúrico, cloro estabilizado, pastillas de cloro cianúrico",
  alternates: { canonical: "https://www.guiadelpiscina.com/acido-cianurico-piscina" },
  openGraph: {
    title: "Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026)",
    description:
      "El estabilizador protege el cloro del sol, pero en exceso lo deja casi inservible. Valores, causas y cómo corregirlo.",
    url: "https://www.guiadelpiscina.com/acido-cianurico-piscina",
  },
};

const sources = [
  {
    tipo: "Pastillas de tricloro (lentas)",
    aporta: "Sí, en cada dosis",
    nota: "Aproximadamente un 54 % de su peso es ácido cianúrico",
  },
  {
    tipo: "Granulado de dicloro (disolución rápida)",
    aporta: "Sí, en cada dosis",
    nota: "Aproximadamente un 57 % de su peso es ácido cianúrico",
  },
  {
    tipo: "Pastillas multiacción (cloro + algicida + floculante)",
    aporta: "Sí",
    nota: "Llevan cloro estabilizado: revisa la etiqueta",
  },
  {
    tipo: "Hipoclorito sódico líquido",
    aporta: "No",
    nota: "Cloro sin estabilizador: se degrada antes con el sol",
  },
  {
    tipo: "Hipoclorito cálcico",
    aporta: "No",
    nota: "Cloro sin estabilizador; aporta calcio al agua",
  },
  {
    tipo: "Clorador salino",
    aporta: "No",
    nota: "Genera cloro a partir de la sal; el estabilizador se añade aparte si hace falta",
  },
];

const faqs = [
  {
    q: "¿Qué es el ácido cianúrico en una piscina?",
    a: "Es un compuesto, también llamado estabilizador o ácido isocianúrico, que forma un enlace débil con el cloro libre y lo protege de la radiación ultravioleta del sol. Gracias a él, el cloro dura más tiempo activo en una piscina al aire libre.",
  },
  {
    q: "¿Cuál es el nivel ideal de ácido cianúrico?",
    a: "En piscinas privadas al aire libre se suele trabajar entre 30 y 50 ppm (mg/L). Para piscinas de uso público, el Real Decreto 742/2013 fija un valor máximo de 75 mg/L. Si tu piscina está cubierta o a la sombra, necesita menos estabilizador o ninguno.",
  },
  {
    q: "¿Qué pasa si tengo demasiado ácido cianúrico?",
    a: "El cloro sigue presente en el análisis, pero tarda más en desinfectar, así que el agua puede enturbiarse o mostrar algas aunque marques cloro libre. Es el síntoma típico de un exceso de estabilizador acumulado tras semanas usando pastillas de cloro.",
  },
  {
    q: "¿Cómo se baja el ácido cianúrico?",
    a: "No se consume ni se evapora: se elimina diluyendo. La solución fiable es vaciar parte del agua de la piscina y reponerla con agua nueva, calculando el porcentaje con la fórmula de esta guía. Verifica en cada producto «reductor de cianúrico» qué respaldo real tiene antes de comprarlo.",
  },
  {
    q: "¿Las tiras reactivas miden el ácido cianúrico?",
    a: "Depende del modelo. Las tiras 3 en 1 más habituales, como las EASYTEST de nuestra tienda, miden pH, cloro libre y alcalinidad, pero no ácido cianúrico. Para medirlo necesitas tiras que lo incluyan expresamente, como las EASYTEST 7 en 1 de nuestra tienda, un kit específico (test de turbidez) o un análisis en una tienda de piscinas.",
  },
  {
    q: "¿Tengo que añadir ácido cianúrico si uso clorador salino?",
    a: "Muchos fabricantes de clorador salino recomiendan mantener algo de estabilizador en piscinas muy soleadas, pero el rango cambia según el equipo. Consulta el manual de tu clorador y no añadas estabilizador sin medir antes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026)",
  description:
    "Guía sobre el ácido cianúrico (estabilizador) de la piscina: función, valores recomendados, efecto de un exceso, qué cloros lo aportan y cómo reducirlo.",
  datePublished: "2026-10-07",
  dateModified: "2026-10-07",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["química del agua de piscinas", "cloración", "mantenimiento de piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/acido-cianurico-piscina",
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
      name: "Ácido cianúrico en la piscina",
      item: "https://www.guiadelpiscina.com/acido-cianurico-piscina",
    },
  ],
};

export default function AcidoCianuricoPiscinaPage() {
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
          <span className="text-gray-600">Ácido cianúrico en la piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 7 octubre 2026 · Actualizado: 7 octubre 2026 · 7 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              El <strong>ácido cianúrico</strong> (estabilizador o ácido isocianúrico) protege el cloro de la luz del sol para que dure más tiempo activo. En piscinas privadas al aire libre se suele mantener entre <strong>30 y 50 ppm</strong>, y para piscinas de uso público el Real Decreto 742/2013 fija un máximo de <strong>75 mg/L</strong>. Si se acumula por encima de ese nivel, el cloro desinfecta más despacio aunque el análisis lo marque correcto. No se elimina con un producto químico: <strong>solo baja renovando parte del agua</strong>.
            </p>
          </div>

          <p>
            Es uno de los parámetros que más se pasa por alto en el mantenimiento de una piscina: se mide poco, no aparece en las tiras reactivas más comunes y, sin embargo, se acumula en silencio cada vez que echas pastillas de cloro. Esta guía explica para qué sirve, qué valor te conviene, de dónde viene el exceso y cómo corregirlo. Si aún no tienes controlado el resto de parámetros, empieza por nuestra guía del <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH de la piscina</Link>.
          </p>

          <h2>Para qué sirve el ácido cianúrico</h2>
          <p>
            El cloro libre de la piscina se degrada con la radiación ultravioleta. El ácido cianúrico forma un enlace débil con el cloro libre y lo protege de esa radiación, de modo que se reduce la pérdida de cloro bajo el sol. Por eso tiene sentido en piscinas exteriores, y mucho menos en piscinas cubiertas o con sombra casi todo el día, donde el sol apenas destruye cloro.
          </p>
          <p>
            El efecto secundario es el contrapunto: cuanto más estabilizador hay en el agua, más tarda el cloro en actuar sobre bacterias y algas. Las propias autoridades sanitarias que publican guías de piscinas, como el Departamento de Salud de Montana, advierten de que por encima de su límite la eficacia del cloro cae de forma notable. Es un equilibrio: ni cero, ni cuanto más mejor.
          </p>

          <h2>Valor ideal de ácido cianúrico</h2>
          <ul>
            <li><strong>Piscina privada exterior:</strong> 30-50 ppm (mg/L) es el rango habitual de referencia en la profesión. Estos valores son orientativos, no una norma para tu piscina.</li>
            <li><strong>Piscina de uso público en España:</strong> el Real Decreto 742/2013 establece un valor máximo de 75 mg/L de ácido isocianúrico y exige el cierre del vaso por encima de 150 mg/L, según el resumen de parámetros de control que publica el Gobierno de Aragón.</li>
            <li><strong>Piscina cubierta o muy sombreada:</strong> necesita poco o ningún estabilizador, porque el sol no degrada el cloro.</li>
            <li><strong>Con clorador salino:</strong> sigue el rango que indique el fabricante de tu equipo; varía de un modelo a otro.</li>
          </ul>

          <h2>De dónde viene el exceso: qué cloros aportan cianúrico</h2>
          <p>
            El ácido cianúrico no se gasta ni se evapora. Cada pastilla de tricloro o granulado de dicloro que disuelves deja el cloro actuando y el estabilizador quedándose en el agua. Si no cambias agua en toda la temporada, el valor sube semana tras semana. Esta tabla resume qué formatos lo aportan:
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Tipo de cloro</th>
                <th className="px-3 py-3 text-left">¿Aporta cianúrico?</th>
                <th className="px-3 py-3 text-left">Matiz</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s, i) => (
                <tr key={s.tipo} className={i % 2 === 0 ? "bg-sky-50" : "bg-white"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{s.tipo}</td>
                  <td className="px-3 py-3 text-gray-600">{s.aporta}</td>
                  <td className="px-3 py-3 text-gray-600">{s.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <p>
            Un ejemplo práctico: las <Link href="/tienda/tratamiento-agua/diaclor-multi-5-acciones-5kg-pastillas-cloro" className="text-sky-600 hover:underline">pastillas DIACLOR Multi 5 Acciones</Link> de nuestra selección llevan cloro estabilizado, y por eso su ficha avisa de que no son aptas para agua salada. Son cómodas para el mantenimiento semanal, pero si las usas como único cloro durante todo el verano conviene vigilar el estabilizador y alternar con un cloro sin cianúrico.
          </p>
          <p>
            El cloro de choque granulado, como el <Link href="/tienda/tratamiento-agua/diaclor-gr-60-cloro-choque-granulado-5kg" className="text-sky-600 hover:underline">DIACLOR GR 60</Link> (dicloro puro), también aporta estabilizador: es muy útil para recuperar agua deteriorada, pero no conviene usarlo como cloro de mantenimiento semanal sin controlar el cianúrico.
          </p>

          <h2>Síntomas de un exceso de estabilizador</h2>
          <ul>
            <li>El agua se pone turbia o aparecen algas aunque el cloro libre marque un valor normal.</li>
            <li>Necesitas echar cada vez más cloro para mantener el agua limpia.</li>
            <li>Llevas toda la temporada usando pastillas de cloro y no has renovado agua.</li>
          </ul>
          <p>
            Ninguno de estos síntomas confirma el exceso por sí solo; lo único que lo confirma es medirlo. Si ya tienes algas, repasa nuestras guías de <Link href="/algas-piscina" className="text-sky-600 hover:underline">algas en la piscina</Link> y de <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">agua verde</Link> para el tratamiento de choque.
          </p>

          <h2>Cómo medir el ácido cianúrico</h2>
          <p>
            Las tiras 3 en 1 más comunes miden pH, cloro libre y alcalinidad, no cianúrico. Es el caso de las <Link href="/tienda/tratamiento-agua/easytest-kit-tiras-ph-cloro-piscina-150" className="text-sky-600 hover:underline">tiras EASYTEST 3 en 1</Link>, útiles para el control diario pero que no sustituyen a un test específico. Para el estabilizador necesitas tiras que lo incluyan expresamente, como las <Link href="/tienda/tratamiento-agua/easytest-tiras-reactivas-7-en-1-piscina-150" className="text-sky-600 hover:underline">EASYTEST 7 en 1</Link> (según su ficha, miden también ácido cianúrico, con precisión orientativa), un kit de turbidez (el reactivo enturbia el agua y se compara contra una marca) o un análisis en una tienda de piscinas. Mídelo al empezar la temporada y cada mes si usas cloro estabilizado.
          </p>

          <h2>Cómo bajar el ácido cianúrico</h2>
          <p>
            Según las guías sanitarias consultadas, el ácido cianúrico no se consume y se acumula, así que la solución es vaciar parcialmente la piscina y reponer con agua nueva. Para calcular cuánta, usa esta fórmula:
          </p>
          <p>
            <strong>% de agua a renovar = (valor actual − valor objetivo) ÷ valor actual × 100</strong>
          </p>
          <p>
            Ejemplo: si el test marca 120 ppm y quieres bajar a 40 ppm, debes renovar aproximadamente el 67 % del agua ((120 − 40) ÷ 120). Es un cálculo aproximado, porque queda algo de estabilizador en tuberías y filtro; vuelve a medir después de rellenar. Antes de vaciar una piscina desmontable, revisa las indicaciones del fabricante y las normas de vertido de tu municipio.
          </p>
          <p>
            Para evitar llegar a ese punto, alterna el cloro: pastillas estabilizadas en las semanas de más sol y un cloro sin cianúrico (hipoclorito líquido) cuando el valor se acerque al límite. Si quieres evitar el problema de raíz y usas una piscina grande, un <Link href="/mejor-clorador-salino-piscina" className="text-sky-600 hover:underline">clorador salino</Link> genera su propio cloro sin aportar estabilizador.
          </p>

          <h2>Nuestra valoración: qué recomendamos según tu caso</h2>
          <ul>
            <li><strong>Piscina desmontable exterior y mantenimiento semanal:</strong> pastillas multiacción para comodidad, midiendo el estabilizador al menos una vez al mes y renovando parte del agua si te acercas a 50 ppm.</li>
            <li><strong>Piscina cubierta o con mucha sombra:</strong> prioriza un cloro sin cianúrico; el estabilizador aporta poco.</li>
            <li><strong>Si ya tienes agua turbia con cloro correcto:</strong> mide el cianúrico antes de echar más producto; puede que el problema no sea falta de cloro.</li>
          </ul>
          <p>
            Para el resto de parámetros de tu agua, consulta cuánto <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">cloro echar en la piscina</Link> según su volumen y cómo mantener el <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link> durante la temporada.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B06Y1S1H9Z")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver pastillas DIACLOR →
          </a>
          <a
            href={amazonLink("B09MW354JK")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver tiras EASYTEST →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el ácido cianúrico</h2>
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
            Fuentes consultadas: <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2013-11796" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Real Decreto 742/2013 (BOE)</a>, resumen de parámetros de control del Gobierno de Aragón y ficha sobre ácido cianúrico del Departamento de Salud de Montana. Los rangos para piscina privada son orientativos.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Cloro, correctores de pH, algicidas, floculantes y tiras de control de nuestra selección.</p>
          <Link href="/tienda/tratamiento-agua" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver tratamiento del agua →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ ¿Cuánto cloro echar en la piscina? Dosis por litros</Link></li>
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: valores ideales y cómo corregirlo</Link></li>
            <li><Link href="/algas-piscina" className="text-sky-600 hover:underline">→ Algas en la piscina: cómo eliminarlas</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/tratamiento-agua" ctaText="Ver productos de tratamiento del agua" />
      </div>
    </div>
    </>
  );
}
