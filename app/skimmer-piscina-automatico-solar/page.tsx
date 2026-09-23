import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026) | Guía del Piscina",
  description:
    "Qué es un skimmer de piscina, diferencia entre el skimmer fijo y el robot skimmer solar de superficie, y cuándo compensa frente a limpiar solo con el robot de fondo.",
  keywords:
    "skimmer piscina, robot skimmer solar, que es un skimmer, limpiar superficie piscina, skimmer automatico piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/skimmer-piscina-automatico-solar" },
  openGraph: {
    title: "Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026)",
    description:
      "Diferencia entre el skimmer fijo de la piscina y el robot skimmer solar de superficie, y cuándo compensa cada uno.",
    url: "https://www.guiadelpiscina.com/skimmer-piscina-automatico-solar",
  },
};

const comparativa = [
  { criterio: "Qué limpia", fijo: "Solo el agua que arrastra la corriente hasta su boca de succión", robot: "Toda la superficie del agua, de forma activa y continua" },
  { criterio: "Depende de la depuradora", fijo: "Sí, solo funciona con la bomba encendida", robot: "No, funciona de forma autónoma con sol o batería" },
  { criterio: "Cobertura de la piscina", fijo: "Zonas cercanas a su ubicación, deja rincones sin cubrir", robot: "Recorre toda la lámina de agua" },
  { criterio: "Coste eléctrico", fijo: "Incluido en el de la depuradora", robot: "Nulo o casi nulo (carga solar)" },
  { criterio: "Qué NO limpia", fijo: "Fondo ni paredes", robot: "Fondo ni paredes (solo superficie, igual que el fijo)" },
  { criterio: "Mantenimiento", fijo: "Vaciar la cesta cada pocos días", robot: "Vaciar el filtro, algo menos frecuente al recoger antes de que se hunda" },
];

const checklist = [
  "Piscina con hojas, polen o insectos frecuentes en superficie",
  "Depuradora que no siempre está en marcha durante el día",
  "Zonas de la piscina alejadas del skimmer fijo (piscinas grandes o irregulares)",
  "Robot de fondo ya cubierto, pero suciedad de superficie sigue llegando al agua",
  "Buena exposición solar de la piscina (si se valora un modelo solar)",
];

const faqs = [
  {
    q: "¿Un robot skimmer solar sustituye al skimmer fijo de la piscina?",
    a: "No lo sustituye, lo complementa. El skimmer fijo sigue haciendo su función de succión hacia el filtro cuando la depuradora está en marcha; el robot skimmer actúa las horas en que la bomba está parada y en las zonas de la piscina que el skimmer fijo no alcanza bien. Son dos sistemas que trabajan en paralelo, no uno sustituye al otro.",
  },
  {
    q: "¿Un skimmer robot sustituye al robot limpiafondos?",
    a: "Tampoco. Cubren zonas distintas: el robot limpiafondos limpia el fondo y, en algunos modelos, las paredes; el skimmer de superficie solo recoge lo que flota, antes de que se hunda y acabe ensuciando el fondo. Si tu piscina acumula mucha suciedad de superficie (hojas de árboles cercanos, polen en primavera), tener ambos reduce notablemente el trabajo manual y alarga la vida útil del filtro.",
  },
  {
    q: "¿Merece la pena si mi piscina no tiene árboles cerca?",
    a: "Depende del uso. Sin árboles cerca, la principal ventaja pasa a ser que actúa mientras la depuradora está apagada (por ejemplo con invernaje activo, ver nuestra guía de invernaje) y evita que el polvo o los insectos que caen a diario se acumulen hasta la siguiente puesta en marcha del filtro. En piscinas muy protegidas y con depuradora en marcha muchas horas al día, el margen de mejora es menor.",
  },
  {
    q: "¿Cuánto dura la batería de un robot skimmer solar?",
    a: "Los modelos con doble carga (solar + batería) están pensados para funcionar de forma continua mientras haya luz suficiente, y tirar de la batería acumulada en las horas de menos sol o por la noche. La autonomía exacta depende de la exposición solar real de cada piscina, por lo que conviene tomar los datos del fabricante como orientativos y no como una cifra garantizada en cualquier ubicación.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026)",
  description:
    "Qué es un skimmer de piscina, diferencia entre el skimmer fijo y el robot skimmer solar de superficie, y cuándo compensa frente a limpiar solo con el robot de fondo.",
  datePublished: "2026-09-05",
  dateModified: "2026-09-05",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Comparamos especificaciones técnicas, precios y opiniones verificadas, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["mantenimiento de piscinas", "limpieza de piscinas", "robots de piscina", "tratamiento del agua"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/skimmer-piscina-automatico-solar",
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
      name: "Skimmer de piscina automático solar",
      item: "https://www.guiadelpiscina.com/skimmer-piscina-automatico-solar",
    },
  ],
};

export default function SkimmerPiscinaAutomaticoSolarPage() {
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
          <span className="text-gray-600">Skimmer automático solar</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 5 septiembre 2026 · Actualizado: 5 septiembre 2026 · 7 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>
        <img
          src="/images/blog/skimmer-piscina-automatico-solar.jpg"
          alt="Skimmer de piscina: qué es y cuándo interesa uno automático solar"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              El <strong>skimmer</strong> es la boca de succión fija que arrastra la suciedad de la superficie del agua hacia el filtro, pero solo funciona mientras la <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">depuradora</Link> está encendida y solo cubre bien la zona cercana a su ubicación. Un <strong>robot skimmer solar</strong> no sustituye al fijo ni al <Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">robot limpiafondos</Link>: los complementa, recorriendo toda la superficie de forma autónoma, con sol o batería, incluso con la bomba apagada. Interesa sobre todo si tienes árboles cerca, una piscina grande o irregular, o si haces invernaje activo con la depuradora funcionando pocas horas al día.
            </p>
          </div>

          <h2>Qué es el skimmer y por qué no basta por sí solo</h2>
          <p>
            El skimmer fijo es esa boca rectangular integrada en la pared de la piscina (o el cesto flotante en los modelos desmontables más sencillos) que succiona el agua de la superficie hacia el filtro cuando la depuradora está en marcha. Es un elemento pasivo: no se mueve ni recorre la piscina, simplemente atrapa lo que la corriente de agua le acerca. Si una hoja cae en el extremo opuesto de la piscina y no hay suficiente corriente para arrastrarla hasta el skimmer, se queda flotando hasta que alguien la retira a mano o acaba hundiéndose y sumándose a la suciedad del fondo.
          </p>
          <p>
            Esa limitación es la que cubre un <strong>robot skimmer de superficie</strong>: un dispositivo flotante que se desplaza de forma autónoma por toda la lámina de agua, recogiendo hojas, insectos, polen y polvo antes de que se hundan. Los modelos con carga solar añaden una ventaja adicional: no dependen de que la depuradora esté encendida ni de un enchufe cercano, por lo que pueden trabajar durante todo el día, incluidas las horas en que el sistema de filtración está parado.
          </p>

          <h2>Skimmer fijo vs. robot skimmer solar: comparativa</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sky-50 text-left">
                  <th className="p-3 border border-sky-100 font-bold text-gray-900">Criterio</th>
                  <th className="p-3 border border-sky-100 font-bold text-gray-900">Skimmer fijo</th>
                  <th className="p-3 border border-sky-100 font-bold text-gray-900">Robot skimmer solar</th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-100 font-semibold text-gray-800">{row.criterio}</td>
                    <td className="p-3 border border-gray-100 text-gray-600">{row.fijo}</td>
                    <td className="p-3 border border-gray-100 text-gray-600">{row.robot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Skimmer, robot de fondo o los dos: qué necesita tu piscina</h2>
          <p>
            Ninguno de los tres sistemas —skimmer fijo, robot skimmer de superficie y <Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">robot limpiafondos</Link>— hace el trabajo completo por sí solo, porque cada uno actúa en una zona distinta del agua. El skimmer fijo es la base y ya viene integrada en casi cualquier piscina con depuradora. El robot de fondo se encarga de la suciedad que ya se ha depositado en el suelo y, en algunos modelos, en las paredes. El robot skimmer de superficie cubre el hueco intermedio: la suciedad que flota antes de hundirse, en las horas y zonas donde el skimmer fijo no llega.
          </p>
          <p>
            Para la mayoría de piscinas domésticas con poca vegetación alrededor, el skimmer fijo más un robot de fondo usado 2-3 veces por semana es suficiente. El robot skimmer solar suma valor real en tres casos concretos: piscinas con árboles o setos cerca que aportan hojas y polen a diario, piscinas grandes o de forma irregular donde el skimmer fijo deja zonas muertas, y piscinas en <Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">invernaje activo</Link>, donde la depuradora funciona solo unas horas al día y la superficie puede acumular suciedad el resto del tiempo.
          </p>
        </div>

        <AdSenseAd slot="6789014567" />

        <div className="prose">
          <h2>Nuestra valoración</h2>
          <p>
            <strong>Valoración editorial propia:</strong> un robot skimmer solar no es un producto imprescindible para cualquier piscina, pero sí resuelve un problema muy concreto y real: la suciedad de superficie que el skimmer fijo no alcanza a tiempo. Recomendamos valorarlo sobre todo si limpias hojas o insectos de la superficie con la manga varias veces por semana, o si tu piscina pasa buena parte del día con la depuradora apagada. En piscinas pequeñas, sin vegetación cercana y con la bomba en marcha muchas horas al día, el skimmer fijo junto al robot de fondo suele ser suficiente. Esta valoración se basa en la experiencia de mantenimiento del equipo, no en una puntuación de ninguna plataforma de venta.
          </p>
        </div>

        {/* Checklist */}
        <div className="my-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Te interesa un robot skimmer solar? Revisa esta checklist</h2>
          <ul className="space-y-2">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Si marcas dos o más puntos, un robot skimmer de superficie como el{" "}
            <a href={amazonLink("B0GCD1M38S")} target="_blank" rel="nofollow noopener noreferrer sponsored" className="text-sky-600 hover:underline font-medium">
              TALOSBO SK02
            </a>{" "}
            (carga solar + batería, control por app, sensor de temperatura) puede ahorrarte varias limpiezas manuales a la semana. Ficha completa en{" "}
            <Link href="/tienda/robots-limpiafondos/talosbo-sk02-skimmer-solar-piscina" className="text-sky-600 hover:underline font-medium">
              nuestra tienda
            </Link>.
          </p>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el skimmer de piscina</h2>
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
            <li><Link href="/tienda/robots-limpiafondos" className="text-sky-600 hover:underline font-medium">→ Robots limpiafondos y skimmers de piscina</Link></li>
            <li><Link href="/tienda/depuradoras" className="text-sky-600 hover:underline font-medium">→ Depuradoras de piscina</Link></li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">→ Mejores robots limpiafondos para piscina</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Mantenimiento de piscina desmontable: guía paso a paso</Link></li>
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución</Link></li>
            <li><Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">→ Invernaje activo o pasivo en la piscina</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/robots-limpiafondos" ctaText="Ver robots y skimmers" />
      </div>
    </div>

      <div className="mt-8 pt-4 border-t border-gray-100 max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-gray-400 font-medium mb-1">Referencias</p>
        <ul className="space-y-0.5">
          <li><a href="https://www.sanidad.gob.es/ciudadanos/saludAmbLaboral/agenBiologicos/aguasRec.htm" target="_blank" rel="noopener" className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors">Ministerio de Sanidad — Mantenimiento de piscinas</a></li>
        </ul>
      </div>
    </>
  );
}
