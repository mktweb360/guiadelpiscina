import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026) | Guía del Piscina",
  description:
    "Diferencias entre invernaje activo y pasivo, cuándo elegir cada uno según tu clima y equipo, y cómo hacerlo paso a paso para evitar problemas en primavera.",
  keywords:
    "invernaje activo piscina, invernaje pasivo piscina, invernada piscina, hibernar piscina, cerrar piscina bomba en marcha",
  alternates: { canonical: "https://www.guiadelpiscina.com/invernaje-activo-o-pasivo-piscina" },
  openGraph: {
    title: "Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026)",
    description:
      "Diferencias entre invernaje activo y pasivo, cuándo elegir cada uno según tu clima y equipo, y cómo hacerlo paso a paso.",
    url: "https://www.guiadelpiscina.com/invernaje-activo-o-pasivo-piscina",
  },
};

const comparativa = [
  { criterio: "Qué implica", activo: "Bomba en marcha algunas horas al día durante todo el invierno", pasivo: "Sistema parado por completo, tuberías vaciadas" },
  { criterio: "Clima recomendado", activo: "Inviernos suaves, sin heladas fuertes ni prolongadas", pasivo: "Inviernos fríos, con heladas frecuentes o prolongadas" },
  { criterio: "Coste eléctrico", activo: "Mayor, por el funcionamiento continuado de la bomba", pasivo: "Nulo o casi nulo durante el cierre" },
  { criterio: "Riesgo para el equipo", activo: "Bajo, si la bomba funciona a diario no hay agua estancada que hiele", pasivo: "Requiere vaciado correcto o hay riesgo real de rotura por heladas" },
  { criterio: "Estado del agua en primavera", activo: "Mucho mejor, agua más clara y menos algas al reabrir", pasivo: "Más turbia, casi siempre hace falta un choque de cloro al abrir" },
  { criterio: "Esfuerzo de apertura", activo: "Mínimo", pasivo: "Mayor, equivale a una puesta a punto casi completa" },
];

const checklist = [
  "Clima de la zona revisado (heladas frecuentes sí/no)",
  "Decisión tomada: invernaje activo o pasivo",
  "pH ajustado a 7,2-7,6 antes de cerrar",
  "Tratamiento de choque + algicida de invierno aplicado",
  "Nivel de agua ajustado (por debajo de skimmers si es pasivo)",
  "Cubierta o manta térmica colocada",
  "Fecha de revisión intermedia anotada (cada 3-4 semanas)",
];

const faqs = [
  {
    q: "¿El invernaje activo consume mucha electricidad?",
    a: "Con la bomba funcionando 2-3 horas al día (frente a las 8-10 horas de temporada alta) el consumo es notablemente menor que en verano, aunque sí supone un gasto que el invernaje pasivo no tiene. En zonas con electricidad cara y clima suave, muchos propietarios optan por un término medio: bomba solo en las horas centrales del día, cuando menor riesgo de helada hay.",
  },
  {
    q: "¿Puedo hacer invernaje activo si mi piscina no tiene bomba de calor?",
    a: "Sí, el invernaje activo no requiere bomba de calor: basta con mantener la depuradora en marcha unas horas al día para que el agua circule y no se estanque ni hiele en las tuberías. La bomba de calor es opcional y solo aporta un extra de protección y confort si quieres alargar el uso de la piscina en días soleados de invierno.",
  },
  {
    q: "¿Qué pasa si hago invernaje pasivo pero no vacío bien las tuberías?",
    a: "Es el error más caro de todo el proceso: el agua que queda atrapada en tuberías, bomba o depuradora se congela con las heladas, se expande y puede agrietar o reventar el equipo. Si optas por invernaje pasivo, usa un compresor o soplador para vaciar completamente cada tramo de tubería y añade anticongelante específico de piscinas en los puntos que lo permitan.",
  },
  {
    q: "¿Se puede cambiar de un tipo de invernaje a otro a mitad de temporada?",
    a: "Sí. Si empezaste con invernaje pasivo y llega una ola de frío más intensa de lo previsto, puedes reactivar la bomba unas horas al día como medida de protección adicional. Lo contrario (pasar de activo a pasivo) requiere vaciar el sistema correctamente, no basta con apagar la bomba sin más.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026)",
  description:
    "Diferencias entre invernaje activo y pasivo, cuándo elegir cada uno según tu clima y equipo, y cómo hacerlo paso a paso para evitar problemas en primavera.",
  datePublished: "2026-08-30",
  dateModified: "2026-08-30",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "bombas de calor", "invernaje de piscinas", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/invernaje-activo-o-pasivo-piscina",
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/og-image.png", width: 1200, height: 630 },
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
      name: "Invernaje activo o pasivo en la piscina",
      item: "https://www.guiadelpiscina.com/invernaje-activo-o-pasivo-piscina",
    },
  ],
};

export default function InvernajeActivoPasivoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10 lg:items-start">
        <article>
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Invernaje activo o pasivo</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 30 agosto 2026 · Actualizado: 30 agosto 2026 · 9 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>
        <img
          src="/images/blog/invernaje-activo-o-pasivo-piscina.jpg"
          alt="Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              El <strong>invernaje pasivo</strong> (parar el sistema por completo) es la opción clásica y la más extendida en piscinas desmontables, pero no es la única ni siempre la mejor: en zonas de invierno suave, el <strong>invernaje activo</strong> (mantener la bomba en marcha algunas horas al día) evita el agua estancada, reduce las algas y te ahorra buena parte del trabajo de apertura en primavera. La elección correcta depende sobre todo de tu clima, no de la costumbre.
            </p>
          </div>

          <h2>Qué es el invernaje activo y el invernaje pasivo</h2>
          <p>
            El <strong>invernaje pasivo</strong> consiste en detener por completo el sistema de filtración durante los meses fríos: se vacía el agua de tuberías, bomba y depuradora, se baja el nivel del agua por debajo de los skimmers y se cubre la piscina hasta la primavera. Es el método tradicional y el más habitual en piscinas desmontables, sobre todo en zonas con heladas.
          </p>
          <p>
            El <strong>invernaje activo</strong>, en cambio, mantiene la <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">depuradora</Link> funcionando unas horas al día durante todo el invierno, normalmente entre 2 y 4 horas, para que el agua siga circulando y filtrándose. Es la opción que usan quienes viven en zonas de <strong>inviernos suaves</strong>, sin heladas fuertes, o quienes cuentan con una <Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">bomba de calor</Link> y quieren poder darse algún baño puntual en días soleados.
          </p>

          <h2>Invernaje activo o pasivo: comparativa directa</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sky-50 text-left">
                  <th className="p-3 border border-sky-100 font-bold text-gray-900">Criterio</th>
                  <th className="p-3 border border-sky-100 font-bold text-gray-900">Invernaje activo</th>
                  <th className="p-3 border border-sky-100 font-bold text-gray-900">Invernaje pasivo</th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-100 font-semibold text-gray-800">{row.criterio}</td>
                    <td className="p-3 border border-gray-100 text-gray-600">{row.activo}</td>
                    <td className="p-3 border border-gray-100 text-gray-600">{row.pasivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Cómo hacer el invernaje activo paso a paso</h2>
          <ol>
            <li><strong>Ajusta pH y cloro</strong> a los valores normales de mantenimiento (pH 7,2-7,6) antes de reducir las horas de bomba.</li>
            <li><strong>Programa la depuradora</strong> entre 2 y 4 horas al día, preferiblemente en las horas centrales, más templadas, del día.</li>
            <li><strong>Añade algicida de mantenimiento</strong> cada 2-3 semanas: con menos horas de filtración el agua es más propensa a las algas que en temporada alta.</li>
            <li><strong>Revisa el agua cada 2-3 semanas</strong> y corrige pH o cloro si hace falta. Es mucho menos trabajo que una apertura completa, pero no es cero mantenimiento.</li>
            <li><strong>Cubre la piscina</strong> con una <Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">cubierta o manta térmica</Link> para reducir la evaporación y la entrada de suciedad.</li>
          </ol>

          <h2>Cómo hacer el invernaje pasivo paso a paso</h2>
          <ol>
            <li><strong>Aplica un tratamiento de choque</strong> y algicida de invierno de acción prolongada antes de parar el sistema, para que el agua aguante en buen estado varios meses sin filtración.</li>
            <li><strong>Baja el nivel del agua</strong> por debajo de los skimmers, para que no queden restos de agua que puedan helarse en las tomas.</li>
            <li><strong>Vacía por completo tuberías, bomba y depuradora</strong> con un compresor o soplador de aire. Es el paso que evita las roturas por congelación: no lo saltes aunque tu zona rara vez hiele.</li>
            <li><strong>Retira accesorios sensibles</strong> (escalera, limpiafondos, termómetro flotante) y guárdalos secos.</li>
            <li><strong>Cubre la piscina</strong> con una cubierta de invierno resistente, no una lona ligera de verano.</li>
          </ol>
        </div>

        <AdSenseAd slot="6789013456" />

        <div className="prose">
          <h2>Qué tipo de invernaje elegir según tu zona</h2>
          <p>
            No hay una respuesta universal: la decisión correcta depende del clima real de tu ubicación, no de lo que haga el vecino. Como criterio práctico: si tu zona registra <strong>heladas frecuentes o por debajo de -2°C durante varias semanas</strong>, el invernaje pasivo con vaciado completo es la opción más segura para el equipo. Si vives en <strong>zona de costa o clima mediterráneo suave</strong>, donde las heladas son raras o puntuales, el invernaje activo suele compensar: menos trabajo en primavera y un agua mucho más presentable durante todo el invierno.
          </p>
          <p>
            <strong>Nuestra valoración:</strong> en zonas de invierno suave, recomendamos invernaje activo salvo que el coste eléctrico de la zona sea especialmente alto; el ahorro de tiempo y el mejor estado del agua en la reapertura suelen compensar el gasto de unas horas diarias de bomba. En zonas de heladas serias, el invernaje pasivo bien ejecutado (con vaciado real de tuberías) sigue siendo la opción más segura para no arriesgar el equipo. Esta es una valoración editorial propia basada en la experiencia de mantenimiento del equipo, no una puntuación de Amazon ni de terceros.
          </p>
        </div>

        {/* Checklist */}
        <div className="my-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Checklist antes de cerrar la piscina</h2>
          <ul className="space-y-2">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el invernaje de la piscina</h2>
        </div>

        {/* FAQ */}
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

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver también</h3>
          <ul className="space-y-2">
            <li><Link href="/tienda/bombas-calor" className="text-sky-600 hover:underline font-medium">→ Bombas de calor para alargar la temporada</Link></li>
            <li><Link href="/tienda/tratamiento-agua" className="text-sky-600 hover:underline font-medium">→ Algicidas y tratamiento del agua</Link></li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">→ Cómo cerrar la piscina para el invierno: guía completa</Link></li>
            <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina: las mejores opciones</Link></li>
            <li><Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">→ Mejor cubierta para piscina desmontable</Link></li>
            <li><Link href="/mejor-clorador-salino-piscina" className="text-sky-600 hover:underline">→ Mejor clorador salino para piscina</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/bombas-calor" ctaText="Ver bombas de calor" />
      </div>
    </div>

      <div className="mt-8 pt-4 border-t border-gray-100 max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-gray-400 font-medium mb-1">Referencias</p>
        <ul className="space-y-0.5">
          <li><a href="https://www.sanidad.gob.es/ciudadanos/saludAmbLaboral/agenBiologicos/aguasRec.htm" target="_blank" rel="noopener" className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors">Ministerio de Sanidad — Mantenimiento de piscinas</a></li>
          <li><a href="https://www.aesan.gob.es" target="_blank" rel="noopener" className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors">AESAN — Seguridad en instalaciones acuáticas</a></li>
        </ul>
      </div>
    </>
  );
}
