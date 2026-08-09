import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Cómo abrir la piscina para el verano: guía completa paso a paso (2025) | Guía del Piscina",
  description:
    "Prepara tu piscina para la temporada en 7 pasos: revisión del equipo, limpieza, tratamiento del agua y puesta a punto. Checklist incluido.",
  keywords:
    "como abrir piscina temporada, abrir piscina verano, preparar piscina verano, puesta a punto piscina, apertura piscina",
  alternates: { canonical: "https://www.guiadelpiscina.com/como-abrir-piscina-temporada" },
  openGraph: {
    title: "Cómo abrir la piscina para el verano: guía completa paso a paso (2025)",
    description:
      "Prepara tu piscina para la temporada en 7 pasos: revisión del equipo, limpieza, tratamiento del agua y puesta a punto. Checklist incluido.",
    url: "https://www.guiadelpiscina.com/como-abrir-piscina-temporada",
  },
};

const checklist = [
  "Cubierta retirada y guardada seca",
  "Skimmer y canastilla de la bomba limpios",
  "Paredes y fondo cepillados",
  "Fondo aspirado al desagüe",
  "Filtro retrolabado",
  "pH ajustado a 7,2-7,6",
  "Choque de cloro aplicado (10 g/m³)",
  "Algicida preventivo añadido",
  "Bomba programada mínimo 8 h/día",
];

const faqs = [
  {
    q: "¿Cuántos días tarda en prepararse la piscina para la temporada?",
    a: "Normalmente entre 3 y 5 días. El primer día se hace la limpieza física y la revisión del equipo; el segundo se aplica el tratamiento del agua; el tercero se hace el ajuste final. Si el agua estaba muy sucia o con algas, puede extenderse un día o dos más.",
  },
  {
    q: "¿Qué hago si el agua sigue verde después del choque de cloro?",
    a: "Aplica floculante en modo recirculación durante 2 horas, luego deja reposar 24-48 horas y aspira el fondo al desagüe. Después retrolavado y vuelta a filtración normal. Comprueba también que el pH estaba bien ajustado antes del choque.",
  },
  {
    q: "¿Cada cuánto hay que retrolabar el filtro durante la temporada?",
    a: "Aproximadamente cada dos semanas en temporada alta, o cuando el manómetro marque entre 0,5 y 1 bar por encima del valor normal de trabajo. Después de un tratamiento de choque o floculante, siempre retrolavado.",
  },
  {
    q: "¿Se puede abrir la piscina solo, sin contratar a un técnico?",
    a: "Sí, sin ningún problema. El proceso es sencillo si se sigue el orden correcto: limpieza física primero, revisión del equipo, y luego el tratamiento del agua. Los únicos materiales que necesitas son un test de pH y cloro, cloro de choque, algicida y pH corrector.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo abrir la piscina para el verano: guía completa paso a paso (2025)",
  description:
    "Prepara tu piscina para la temporada en 7 pasos: revisión del equipo, limpieza, tratamiento del agua y puesta a punto. Checklist incluido.",
  datePublished: "2025-08-01",
  dateModified: "2025-08-01",
  author: { "@type": "Organization", name: "Guía del Piscina" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/como-abrir-piscina-temporada",
  image: { "@type": "ImageObject", url: "https://www.guiadelpiscina.com/og-image.png", width: 1200, height: 630 },
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
      name: "Cómo abrir la piscina para el verano",
      item: "https://www.guiadelpiscina.com/como-abrir-piscina-temporada",
    },
  ],
};

export default function ComoAbrirPiscinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Cómo abrir la piscina para el verano</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Cómo abrir la piscina para el verano: guía completa paso a paso (2025)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 agosto 2025 · Actualizado: 1 agosto 2025 · 10 min lectura</p>
        <img
          src="/images/blog/como-abrir-piscina-temporada.jpg"
          alt="Cómo abrir la piscina para el verano: guía completa paso a paso"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <div className="prose">
          <p>
            Abrir correctamente la piscina marca la diferencia entre disfrutarla <strong>la primera semana</strong> o pasar 15 días arreglando problemas. Un agua verde, un filtro obstruido o una bomba con fugas son consecuencias directas de saltarse pasos. El proceso completo dura entre <strong>3 y 5 días</strong> y no requiere conocimientos técnicos, solo seguir el orden correcto.
          </p>

          <h2>Cuándo abrir la piscina</h2>
          <p>
            La señal más fiable es que la temperatura ambiente sea <strong>estable por encima de 15 °C</strong> durante el día (habitualmente abril-mayo en España, antes en el sur). Abrir antes no tiene sentido: el agua estará fría y no la usarás. Abrirla tarde tiene un coste: cuanto más tiempo pase con el agua parada o cubierta sin tratar, más algas y suciedad se habrán acumulado y más trabajo tendrás.
          </p>

          <h2>Material necesario antes de empezar</h2>
          <ul>
            <li>Test de pH y cloro libre (tiras reactivas o fotómetro digital)</li>
            <li>Cloro granulado de choque (al 56% o superior)</li>
            <li>Algicida preventivo</li>
            <li><Link href="/floculante-piscina" className="text-sky-600 hover:underline">Floculante</Link> (por si el agua está muy turbia)</li>
            <li>Corrector de pH (pH minus y/o pH plus)</li>
            <li>Cepillo de piscina y manguera de aspiración</li>
          </ul>

          <h2>Los 7 pasos para abrir la piscina</h2>

          <h3>Día 1 — Limpieza física</h3>
          <ol>
            <li><strong>Retira la cubierta</strong> y guárdala seca y limpia para evitar que se deteriore.</li>
            <li><strong>Limpia el skimmer</strong> y la canastilla de la bomba: extrae hojas, insectos y cualquier residuo acumulado durante el invierno.</li>
            <li><strong>Cepilla paredes y fondo</strong> de la piscina para soltar la suciedad adherida y las posibles <Link href="/algas-piscina" className="text-sky-600 hover:underline">algas</Link> incipientes.</li>
            <li><strong>Aspira el fondo al desagüe</strong> con <Link href="/tienda/robots-limpiafondos" className="text-sky-600 hover:underline">robots limpiafondos</Link> o con la manguera de aspiración manual en posición desagüe para eliminar los sedimentos sin que pasen por el filtro.</li>
            <li><strong>Llena hasta el nivel correcto:</strong> el agua debe llegar a la mitad del skimmer para que aspire correctamente.</li>
          </ol>

          <h3>Días 1-2 — Revisión del equipo</h3>
          <ol>
            <li><strong>Revisa juntas y racores de la bomba:</strong> busca fugas, grietas o piezas deterioradas por el frío.</li>
            <li><strong>Retrolavado del <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">filtro de arena</Link>:</strong> 5 minutos en posición retrolavado para limpiar el lecho de arena de los residuos invernales.</li>
            <li><strong>Comprueba el manómetro:</strong> el valor en marcha debe estar entre 0,5 y 1 bar. Por encima indica que el filtro sigue sucio.</li>
          </ol>

          <h3>Día 2 — Tratamiento del agua</h3>
          <ol>
            <li><strong>Mide el <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH</Link></strong> y ajusta a 7,2-7,6 con el corrector correspondiente. El pH es el paso previo obligatorio: sin él, el cloro no funciona.</li>
            <li><strong>Choque de cloro:</strong> añade 10 g/m³ de cloro granulado, disuelto en un cubo con agua de la piscina. Consulta las <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">dosis exactas de choque de cloro</Link> según el volumen de tu piscina.</li>
            <li><strong>Deja la bomba en marcha 24 horas continuas.</strong></li>
            <li><strong>Si el agua está muy turbia,</strong> aplica <Link href="/floculante-piscina" className="text-sky-600 hover:underline">floculante</Link> en modo recirculación tras las primeras horas del choque, sigue el protocolo y aspira al desagüe.</li>
          </ol>

          <h3>Día 3 — Ajuste final</h3>
          <ol>
            <li>Mide pH y cloro libre. Ajusta si es necesario.</li>
            <li>Añade algicida preventivo: 100 ml por cada 30 m³.</li>
            <li>Programa la bomba para que funcione <strong>mínimo 8 horas al día</strong> en verano (idealmente de noche para ahorrar energía).</li>
          </ol>
        </div>

        <AdSenseAd slot="6789012345" />

        <div className="prose">
          <h2>Cuándo es seguro bañarse</h2>
          <p>Espera hasta cumplir las tres condiciones:</p>
          <ul>
            <li>Cloro libre entre 1 y 3 ppm</li>
            <li>pH entre 7,2 y 7,6</li>
            <li>Agua visualmente cristalina</li>
          </ul>
          <p>Normalmente se alcanzan entre <strong>48 y 72 horas</strong> desde el inicio del proceso.</p>

          <h2>Errores más comunes al abrir la piscina</h2>
          <ul>
            <li><strong>Echar cloro sin medir el pH antes:</strong> si el pH está alto, el cloro es prácticamente ineficaz y habrás malgastado el producto.</li>
            <li><strong>No limpiar el filtro:</strong> si el filtro sigue con la suciedad del invierno, el agua nunca mejorará por mucho cloro que eches.</li>
            <li><strong>Filtrar durante el floculante:</strong> si usas floculante, la bomba debe estar en recirculación, no en filtración.</li>
            <li><strong>Bañarse antes de que el cloro baje de 5 ppm:</strong> tras el choque, espera a que el nivel se estabilice en el rango seguro.</li>
          </ul>
        </div>

        {/* Checklist */}
        <div className="my-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Checklist de apertura de piscina</h2>
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
          <h2>Preguntas frecuentes sobre la apertura de la piscina</h2>
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
            <li><Link href="/tienda/depuradoras" className="text-sky-600 hover:underline font-medium">→ Las mejores depuradoras de piscina</Link></li>
            <li><Link href="/tienda/robots-limpiafondos" className="text-sky-600 hover:underline font-medium">→ Robots limpiafondos para piscina</Link></li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: valores ideales y cómo corregirlo</Link></li>
            <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ ¿Cuánto cloro echar en la piscina? Dosis exactas</Link></li>
            <li><Link href="/algas-piscina" className="text-sky-600 hover:underline">→ Algas en la piscina: cómo eliminarlas y evitar que vuelvan</Link></li>
            <li><Link href="/floculante-piscina" className="text-sky-600 hover:underline">→ Floculante para piscina: cuándo usarlo y cómo aplicarlo</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Guía de mantenimiento de piscinas desmontables</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
