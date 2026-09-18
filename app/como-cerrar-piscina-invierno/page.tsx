import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026) | Guía del Piscina",
  description:
    "Cierra tu piscina desmontable correctamente antes del invierno: tratamiento de choque, equilibrio químico, protección del equipo y elección de cubierta. Checklist incluido.",
  keywords:
    "como cerrar piscina invierno, hibernar piscina, cierre piscina temporada, invernaje piscina desmontable",
  alternates: { canonical: "https://www.guiadelpiscina.com/como-cerrar-piscina-invierno" },
  openGraph: {
    title: "Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026)",
    description:
      "Cierra tu piscina desmontable correctamente antes del invierno: tratamiento de choque, equilibrio químico, protección del equipo y elección de cubierta.",
    url: "https://www.guiadelpiscina.com/como-cerrar-piscina-invierno",
  },
};

const checklist = [
  "Agua equilibrada: pH 7,2-7,6 antes de cerrar",
  "Tratamiento de choque de cloro aplicado 24-48h antes",
  "Algicida de invierno de larga duración añadido",
  "Filtro retrolavado y limpio a fondo",
  "Depuradora, mangueras y accesorios desmontados y guardados",
  "Nivel de agua bajado según tipo de cubierta",
  "Cubierta de invierno bien fijada y tensada",
];

const coberturas = [
  {
    tipo: "Cubierta de invierno estándar (lona opaca)",
    proteccion: "Bloquea luz y hojas, retrasa aparición de algas",
    mantenimiento: "Retirar agua/nieve acumulada tras lluvias",
    precioOrientativo: "20-50€",
  },
  {
    tipo: "Cubierta de malla o rejilla",
    proteccion: "Filtra hojas, deja pasar agua de lluvia (no acumula peso)",
    mantenimiento: "Muy bajo, no requiere vaciado tras lluvia",
    precioOrientativo: "30-70€",
  },
  {
    tipo: "Manta térmica / cobertor solar",
    proteccion: "Reduce evaporación y pérdida de calor, no aísla del frío tanto como una cubierta opaca",
    mantenimiento: "Medio, más pensada para pausas cortas que para invernaje completo",
    precioOrientativo: "25-80€",
  },
];

const faqs = [
  {
    q: "¿Cuándo es el momento adecuado para cerrar la piscina?",
    a: "Cuando la temperatura del agua baja de forma sostenida por debajo de 15-16°C y ya no te vas a bañar, normalmente entre finales de septiembre y octubre en la mayor parte de España. Cerrarla demasiado pronto con agua todavía cálida favorece la aparición de algas bajo la cubierta.",
  },
  {
    q: "¿Hay que vaciar completamente la piscina para el invierno?",
    a: "No, en piscinas desmontables no se recomienda el vaciado total: el peso del agua ayuda a que la estructura y el liner mantengan su forma durante el invierno. Solo se baja el nivel unos centímetros por debajo de los skimmers para evitar daños por hielo en las boquillas.",
  },
  {
    q: "¿Puedo dejar la depuradora puesta durante el invierno?",
    a: "No es recomendable en piscinas desmontables de exterior. El agua residual dentro del cuerpo de la bomba y el filtro puede congelarse y agrietar las piezas de plástico. Lo correcto es desmontarla, vaciarla completamente de agua y guardarla en un lugar seco y protegido de heladas.",
  },
  {
    q: "¿Qué pasa si no aplico ningún tratamiento antes de cerrar?",
    a: "El agua sin tratar bajo una cubierta cerrada, sin luz ni oxigenación por filtrado, es el caldo de cultivo perfecto para algas y bacterias. En primavera te encontrarás un agua verde o turbia que costará mucho más tiempo y producto recuperar que si se hubiera cerrado correctamente.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026)",
  description:
    "Cierra tu piscina desmontable correctamente antes del invierno: tratamiento de choque, equilibrio químico, protección del equipo y elección de cubierta.",
  datePublished: "2026-08-25",
  dateModified: "2026-08-25",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "cloro y pH", "piscinas desmontables"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/como-cerrar-piscina-invierno",
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/images/blog/como-cerrar-piscina-invierno.jpg", width: 1200, height: 630 },
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
      name: "Cómo cerrar la piscina para el invierno",
      item: "https://www.guiadelpiscina.com/como-cerrar-piscina-invierno",
    },
  ],
};

export default function ComoCerrarPiscinaPage() {
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
          <span className="text-gray-600">Cómo cerrar la piscina para el invierno</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 25 agosto 2026 · Actualizado: 25 agosto 2026 · 8 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>
        <img
          src="/images/blog/como-cerrar-piscina-invierno.jpg"
          alt="Cómo cerrar la piscina para el invierno: guía completa paso a paso"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Cerrar bien la piscina es lo contrario de <Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">abrirla</Link>: en vez de poner el agua a punto para usarla, la dejas estabilizada para que aguante meses sin mantenimiento. Un cierre correcto tarda menos de un día y evita el problema más común cada primavera: un <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">agua verde</Link> que cuesta semanas de tratamiento recuperar. La clave está en tres cosas: equilibrio químico antes de tapar, proteger el equipo de las heladas y elegir bien la cubierta.
            </p>
          </div>

          <h2>Cuándo cerrar la piscina</h2>
          <p>
            No hay una fecha fija: depende de la temperatura, no del calendario. La señal fiable es que el agua baje de forma sostenida de <strong>15-16°C</strong> y ya no te bañes, lo que en la mayor parte de España ocurre entre finales de septiembre y octubre. Cerrarla demasiado pronto, con el agua todavía templada, es un error habitual: las algas y bacterias siguen activas bajo una cubierta cerrada sin luz ni filtrado, y te encontrarás la piscina peor de lo que la dejaste.
          </p>

          <h2>Material necesario</h2>
          <ul>
            <li>Cloro de choque o <Link href="/mejor-clorador-salino-piscina" className="text-sky-600 hover:underline">clorador salino</Link> ya en funcionamiento</li>
            <li>Algicida de invierno de larga duración (distinto del algicida de mantenimiento en temporada)</li>
            <li>Test de <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH</Link> y cloro</li>
            <li>Cubierta de invierno adecuada al tamaño de tu piscina</li>
            <li>Recipientes o bolsas para guardar mangueras y accesorios desmontables</li>
          </ul>

          <h2>Los pasos para cerrar la piscina correctamente</h2>

          <h3>1. Equilibra el agua antes de nada</h3>
          <p>
            Ajusta el pH a 7,2-7,6 y aplica un tratamiento de <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">choque de cloro</Link> 24-48 horas antes de tapar la piscina, dejando la bomba en marcha durante ese tiempo. Un agua desequilibrada bajo una cubierta cerrada durante meses es el escenario ideal para algas y manchas.
          </p>

          <h3>2. Añade algicida de invierno</h3>
          <p>
            A diferencia del algicida semanal de temporada, el algicida de invierno está formulado para actuar sin renovación durante varios meses sin luz ni filtración activa. Es la diferencia entre encontrar el agua turbia o razonablemente clara en primavera.
          </p>

          <h3>3. Protege el equipo de las heladas</h3>
          <p>
            Desmonta la <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">depuradora</Link>, vacíala completamente de agua y guárdala en un lugar seco. El agua residual en el cuerpo de bomba o filtro puede congelarse y agrietar el plástico, una de las averías más caras y evitables de la temporada siguiente. Guarda también mangueras, mangas de aspiración y accesorios flotantes.
          </p>

          <h3>4. Baja el nivel de agua (sin vaciar del todo)</h3>
          <p>
            En piscinas desmontables no conviene vaciarla por completo: el peso del agua ayuda a que la estructura y el liner conserven su forma durante el invierno. Basta con bajar el nivel unos centímetros por debajo de los skimmers para que el hielo no dañe las boquillas de entrada.
          </p>

          <h3>5. Elige y coloca la cubierta</h3>
          <p>No todas las cubiertas de invierno cumplen la misma función. Comparativa rápida:</p>
        </div>

        {/* Tabla comparativa cubiertas */}
        <div className="my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left font-bold text-gray-700">Tipo de cubierta</th>
                <th className="py-3 px-4 text-left font-bold text-gray-700">Protección</th>
                <th className="py-3 px-4 text-left font-bold text-gray-700">Mantenimiento</th>
                <th className="py-3 px-4 text-left font-bold text-gray-700">Precio orientativo</th>
              </tr>
            </thead>
            <tbody>
              {coberturas.map((c, i) => (
                <tr key={c.tipo} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-700">{c.tipo}</td>
                  <td className="py-3 px-4 text-gray-600">{c.proteccion}</td>
                  <td className="py-3 px-4 text-gray-600">{c.mantenimiento}</td>
                  <td className="py-3 px-4 text-gray-600">{c.precioOrientativo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">Precios orientativos de mercado, no verificados en tiempo real. Consulta el precio actualizado antes de comprar.</p>
        </div>

        <AdSenseAd slot="6789012345" />

        <div className="prose">
          <h2>Nuestra valoración: qué cubierta recomendamos según el caso</h2>
          <p>
            Para la mayoría de piscinas desmontables familiares en España, la <strong>cubierta de malla o rejilla</strong> suele ser la opción con mejor equilibrio: al dejar pasar el agua de lluvia no acumula peso ni se hunde, y reduce a casi cero el mantenimiento durante el invierno. La cubierta opaca estándar sigue siendo válida y más económica, pero exige vigilar que no se encharque tras lluvias fuertes, sobre todo en zonas con otoños húmedos. La manta térmica no está pensada para un invernaje de meses: es más útil para pausas cortas entre usos en plena temporada. Esta es nuestra valoración editorial basada en el uso real de cada tipo de cubierta, no una puntuación de terceros.
          </p>

          <h2>Errores más comunes al cerrar la piscina</h2>
          <ul>
            <li><strong>Cerrar sin tratar el agua:</strong> es el error más costoso, se traduce en agua verde garantizada en primavera.</li>
            <li><strong>Dejar la depuradora puesta con agua dentro:</strong> el riesgo de rotura por hielo es real en gran parte de España.</li>
            <li><strong>Vaciar la piscina por completo:</strong> sin el peso del agua, la estructura y el liner pueden deformarse.</li>
            <li><strong>Usar el mismo algicida de temporada:</strong> no está formulado para actuar sin renovación durante meses.</li>
          </ul>
        </div>

        {/* Checklist */}
        <div className="my-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Checklist de cierre de piscina</h2>
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
          <h2>Preguntas frecuentes sobre el cierre de la piscina</h2>
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
            <li><Link href="/tienda/tratamiento-agua" className="text-sky-600 hover:underline font-medium">→ Productos para el tratamiento del agua</Link></li>
            <li><Link href="/tienda/piscinas-desmontables" className="text-sky-600 hover:underline font-medium">→ Piscinas desmontables</Link></li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/como-abrir-piscina-temporada" className="text-sky-600 hover:underline">→ Cómo abrir la piscina para el verano: guía completa</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Guía de mantenimiento de piscinas desmontables</Link></li>
            <li><Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">→ Mejor cubierta para piscina desmontable</Link></li>
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: causas y solución definitiva</Link></li>
            <li><Link href="/mejor-clorador-salino-piscina" className="text-sky-600 hover:underline">→ Mejor clorador salino para piscina</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda" ctaText="Ver productos recomendados" />
      </div>
    </div>

      <div className="mt-8 pt-4 border-t border-gray-100 max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-gray-400 font-medium mb-1">Referencias</p>
        <ul className="space-y-0.5">
          <li><a href="https://www.sanidad.gob.es/ciudadanos/saludAmbLaboral/agenBiologicos/aguasRec.htm" target="_blank" rel="noopener" className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors">Ministerio de Sanidad — Calidad del agua de piscinas</a></li>
          <li><a href="https://www.aesan.gob.es" target="_blank" rel="noopener" className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors">AESAN — Seguridad en instalaciones acuáticas</a></li>
        </ul>
      </div>
    </>
  );
}
