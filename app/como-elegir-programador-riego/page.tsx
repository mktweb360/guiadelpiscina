import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

// Artículo generado 23/09/2026 (loop blogs-monetizacion). Datos de producto verificados en vivo en Amazon.es el 23/09/2026.
// Por cumplimiento (julio 2026) NO se muestran precios ni valoraciones estáticas de Amazon: solo características verificadas.

export const metadata: Metadata = {
  title: "Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026) | Guía del Piscina",
  description:
    "Qué tipo de programador de riego necesitas según tu jardín, balcón o huerto: temporizador mecánico, programador electrónico o sistema smart con app. Criterios, comparativa y errores a evitar.",
  keywords:
    "programador de riego, como elegir programador de riego, programador riego grifo, temporizador riego, programador riego gardena, programador riego goteo terraza",
  alternates: { canonical: "https://www.guiadelpiscina.com/como-elegir-programador-riego" },
  openGraph: {
    title: "Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026)",
    description:
      "Temporizador mecánico, programador electrónico o sistema smart: cuál necesitas según tu jardín y cómo acertar a la primera.",
    url: "https://www.guiadelpiscina.com/como-elegir-programador-riego",
  },
};

const comparison = [
  {
    tipo: "Temporizador mecánico",
    ejemplo: "GARDENA Temporizador Estándar",
    href: "/tienda/riego-automatico/gardena-temporizador-estandar-riego",
    riegaSolo: "No: hay que activarlo cada vez",
    programacion: "Solo duración (5-120 min)",
    alimentacion: "Sin pilas",
    idealPara: "No olvidarte el grifo abierto",
  },
  {
    tipo: "Programador electrónico (1 programa)",
    ejemplo: "GARDENA Flex 1890-20",
    href: "/tienda/riego-automatico/gardena-flexcontrol-programador-riego",
    riegaSolo: "Sí",
    programacion: "Horario y días + riego manual Water Now",
    alimentacion: "1 pila de 9 V",
    idealPara: "Balcón, terraza y goteo en macetas",
  },
  {
    tipo: "Programador electrónico (varios programas)",
    ejemplo: "GARDENA Select 1891-20",
    href: "/tienda/riego-automatico/gardena-select-programador-riego-1891-20",
    riegaSolo: "Sí",
    programacion: "3 programaciones independientes + Water Now",
    alimentacion: "1 pila de 9 V",
    idealPara: "Jardines con necesidades distintas según el día",
  },
  {
    tipo: "Sistema smart con app",
    ejemplo: "GARDENA Smart Set",
    href: "/tienda/riego-automatico/gardena-smart-set-riego-gateway",
    riegaSolo: "Sí, y se gestiona a distancia",
    programacion: "App + sensor de humedad y temperatura",
    alimentacion: "Pilas AA (válvula y sensor) + Gateway",
    idealPara: "Segundas residencias y control remoto",
  },
];

const steps = [
  {
    t: "¿Necesitas que riegue solo o solo que se corte solo?",
    d: "Es la pregunta que más dinero ahorra. Si siempre estás en casa cuando riegas y lo que te preocupa es dejarte la manguera abierta, un temporizador mecánico es suficiente. Si quieres que el jardín se riegue sin ti (vacaciones, madrugadas, días de trabajo), necesitas un programador electrónico.",
  },
  {
    t: "¿Cuántos programas distintos necesitas desde la misma toma?",
    d: "Un único horario (por ejemplo, 10 minutos cada mañana) lo cubre un programador de un programa. Si la misma toma debe regar de forma diferente según el día (goteo corto a diario y un riego más largo dos veces por semana), te conviene uno con varias programaciones independientes.",
  },
  {
    t: "¿Riegas por goteo en macetas o por aspersión en césped?",
    d: "El goteo en macetas suele necesitar ciclos muy cortos y frecuentes; comprueba que el programador admita duraciones cortas. Para aspersores móviles en césped, cualquier temporizador o programador de grifo sirve si tu presión de agua es suficiente para el aspersor.",
  },
  {
    t: "¿Necesitas controlarlo a distancia?",
    d: "Solo tiene sentido pagar un sistema smart si no vas a estar físicamente cerca durante semanas (segunda residencia) o si quieres que un sensor ajuste el riego por ti. Para una vivienda habitual, un programador electrónico cubre la mayoría de casos por una fracción del coste.",
  },
];

const faqs = [
  {
    q: "¿Qué diferencia hay entre un temporizador de riego y un programador de riego?",
    a: "El temporizador solo controla cuánto tiempo sale el agua desde que tú lo activas: giras la rueda y corta el agua pasado ese tiempo. El programador guarda un horario y abre el agua solo, a la hora y los días que le indiques, aunque no estés en casa.",
  },
  {
    q: "¿Qué programador de riego es mejor para un balcón o terraza con macetas?",
    a: "Uno electrónico de grifo que admita ciclos cortos, porque el goteo en macetas necesita riegos breves y frecuentes. El GARDENA Flex 1890-20 está pensado precisamente para ese uso y además permite regar a mano con la función Water Now sin borrar el programa.",
  },
  {
    q: "¿Qué es la función Water Now de Gardena?",
    a: "Permite desmontar la unidad de control del programador pulsando un botón y abrir el agua manualmente en cualquier momento, por ejemplo para llenar un cubo, sin perder la programación guardada. La incluyen los modelos Flex y Select de Gardena.",
  },
  {
    q: "¿Hay que quitar el programador de riego en invierno?",
    a: "En zonas con heladas es recomendable desmontarlo y guardarlo en interior: si queda agua dentro y se congela, puede dañar el cuerpo de plástico y la válvula. Aprovecha para retirar la pila y comprobar las juntas antes de volver a instalarlo en primavera.",
  },
  {
    q: "¿Merece la pena un programador de riego con WiFi?",
    a: "Merece la pena si necesitas gestionar el riego a distancia o quieres un sensor que ajuste el riego automáticamente y avise de heladas, como en el Gardena Smart Set. Para una vivienda habitual donde solo necesitas un horario fijo, un programador electrónico sin conectividad es más sencillo y bastante más barato.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026)",
  description:
    "Guía para elegir programador de riego de grifo según el tipo de jardín: temporizador mecánico, programador electrónico o sistema smart con app.",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Comparamos especificaciones técnicas, precios y opiniones verificadas, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["riego automático de jardín", "programadores de riego", "mantenimiento de piscinas"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/como-elegir-programador-riego",
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
      name: "Cómo elegir programador de riego",
      item: "https://www.guiadelpiscina.com/como-elegir-programador-riego",
    },
  ],
};

export default function ComoElegirProgramadorRiegoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10 lg:items-start">
        <article>
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-sky-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-sky-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Cómo elegir programador de riego</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 23 septiembre 2026 · Actualizado: 23 septiembre 2026 · 7 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Hay tres tipos de programador de riego para grifo. El <strong>temporizador mecánico</strong> solo corta el agua pasado un tiempo que tú eliges, así que no riega si no estás. El <strong>programador electrónico</strong> guarda un horario y riega solo los días y a la hora indicados: es la opción adecuada para la mayoría de jardines, terrazas y balcones. El <strong>sistema smart con app</strong> añade control a distancia y sensores, y solo compensa si necesitas gestionar el riego sin estar cerca.
            </p>
          </div>

          <p>
            Elegir mal un programador de riego es fácil: muchos compradores pagan por conectividad que nunca usan, y otros compran un temporizador pensando que regará solo durante las vacaciones. En esta guía explicamos qué hace cada tipo, cómo decidir en cuatro preguntas y qué modelos de nuestra selección encajan en cada caso. Si todavía estás definiendo el sistema completo (goteo, aspersores, zonas), empieza por nuestra guía de <Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">sistemas de riego automático para jardín</Link>.
          </p>

          <h2>Los tres tipos de programador de riego, explicados</h2>

          <h3>1. Temporizador mecánico: el que se apaga solo</h3>
          <p>
            Se enrosca al grifo y tiene una rueda con la que fijas cuánto tiempo va a salir el agua. Pasado ese tiempo, corta el paso. No tiene pantalla ni pilas y no guarda horarios: <strong>hay que activarlo cada vez</strong>. El <Link href="/tienda/riego-automatico/gardena-temporizador-estandar-riego" className="text-sky-600 hover:underline">GARDENA Temporizador Estándar</Link> permite duraciones de 5 a 120 minutos y también flujo continuo. Es la opción más barata y la más sencilla, pero no sirve para regar en tu ausencia.
          </p>

          <h3>2. Programador electrónico: el que riega por ti</h3>
          <p>
            Funciona con pilas, se instala en el grifo sin obras y guarda un horario: riega solo a la hora y los días que le indiques. Dentro de esta familia hay dos niveles. Los de un programa, como el <Link href="/tienda/riego-automatico/gardena-flexcontrol-programador-riego" className="text-sky-600 hover:underline">GARDENA Flex 1890-20</Link>, cubren un horario fijo y admiten ciclos muy cortos, lo que los hace especialmente adecuados para goteo en macetas de balcón y terraza. Los de varios programas, como el <Link href="/tienda/riego-automatico/gardena-select-programador-riego-1891-20" className="text-sky-600 hover:underline">GARDENA Select 1891-20</Link>, permiten tres programaciones independientes, cada una con su duración y sus días.
          </p>
          <p>
            Ambos modelos de Gardena incluyen la función <strong>Water Now</strong>: se desmonta la unidad de control pulsando un botón y puedes abrir el agua a mano (para llenar un cubo, por ejemplo) sin borrar lo programado. Es un detalle práctico que evita el problema habitual de desprogramar el riego cada vez que necesitas agua del grifo.
          </p>

          <h3>3. Sistema smart con app: el que controlas desde el móvil</h3>
          <p>
            Añade un puente (Gateway) que conecta la válvula a internet para gestionarla desde una app. El <Link href="/tienda/riego-automatico/gardena-smart-set-riego-gateway" className="text-sky-600 hover:underline">Gardena Smart Set</Link> incluye válvula, sensor y Gateway: el sensor ajusta el riego automáticamente y avisa de heladas por su sensor de temperatura. A cambio, su precio es muy superior al de un programador de grifo y depende de conexión y de varias pilas. Tiene sentido en segundas residencias o si quieres automatizarlo todo; para una vivienda habitual suele ser excesivo.
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">¿Riega sin ti?</th>
                <th className="px-3 py-3 text-left">Programación</th>
                <th className="px-3 py-3 text-left">Alimentación</th>
                <th className="px-3 py-3 text-left">Ideal para</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((c, i) => (
                <tr key={c.tipo} className={i % 2 === 0 ? "bg-sky-50" : "bg-white"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">
                    {c.tipo}
                    <br />
                    <Link href={c.href} className="text-xs font-normal text-sky-600 hover:underline">Ej.: {c.ejemplo}</Link>
                  </td>
                  <td className="px-3 py-3 text-gray-600">{c.riegaSolo}</td>
                  <td className="px-3 py-3 text-gray-600">{c.programacion}</td>
                  <td className="px-3 py-3 text-gray-600">{c.alimentacion}</td>
                  <td className="px-3 py-3 text-gray-600">{c.idealPara}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="5678901235" />

        <div className="prose">
          <h2>Cómo elegir en 4 preguntas</h2>
        </div>

        <ol className="space-y-4 my-6">
          {steps.map((s, i) => (
            <li key={s.t} className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="shrink-0 w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{s.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="prose">
          <h2>Nuestra valoración: qué programador recomendamos según el caso</h2>
          <ul>
            <li><strong>Balcón o terraza con macetas y goteo:</strong> un programador electrónico de un programa como el GARDENA Flex. Cubre el riego diario corto, que es lo que necesitan las macetas, sin pagar funciones que no vas a usar.</li>
            <li><strong>Jardín con césped y arriates desde una misma toma:</strong> un programador con varias programaciones como el GARDENA Select, para combinar riegos cortos frecuentes con otros más largos en días concretos.</li>
            <li><strong>Riego puntual con aspersor mientras estás en casa:</strong> el temporizador mecánico basta y es el más barato. No lo compres si tu objetivo es regar durante las vacaciones.</li>
            <li><strong>Segunda residencia o control total a distancia:</strong> un sistema smart con app y sensor. Es la única opción que te deja ver y cambiar el riego sin estar allí.</li>
          </ul>

          <h2>Errores habituales al comprar un programador de riego</h2>
          <ul>
            <li><strong>Confundir temporizador con programador.</strong> El temporizador no riega solo: si te vas una semana, no hará nada.</li>
            <li><strong>No comprobar la rosca del grifo.</strong> Antes de comprar, revisa la rosca de tu toma de agua y si necesitas adaptador.</li>
            <li><strong>Olvidar la pila.</strong> En los programadores electrónicos, una pila agotada significa un jardín sin regar. Cámbiala al empezar cada temporada.</li>
            <li><strong>Dejarlo instalado con heladas.</strong> El agua que queda dentro puede congelarse y dañar el aparato. En otoño, en zonas frías, desmóntalo y guárdalo en interior.</li>
            <li><strong>Pagar por WiFi que no se usará.</strong> Si siempre estás en casa, la app aporta poco frente a un buen programador electrónico.</li>
          </ul>

          <h2>Otoño: el momento de revisar el riego</h2>
          <p>
            Con temperaturas más suaves y más lluvia, las plantas necesitan menos agua que en verano: reduce la duración o la frecuencia del programa en lugar de mantener el horario de agosto. Es también un buen momento para revisar las juntas y la conexión al grifo, comprobar el estado de la pila y, si vives en una zona con heladas, planificar cuándo retirarlo. Si además tienes piscina, aprovecha para repasar nuestra guía sobre <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrar la piscina para el invierno</Link>.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B07JLVB5JP")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver GARDENA Flex →
          </a>
          <a
            href={amazonLink("B07JM7NXQT")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver GARDENA Select →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre programadores de riego</h2>
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

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Compara todos los programadores y sistemas de riego automático de nuestra selección.</p>
          <Link href="/tienda/riego-automatico" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver riego automático →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/gardena-flex-1890-20-analisis" className="text-sky-600 hover:underline">→ GARDENA Flex 1890-20: análisis completo y opinión</Link></li>
            <li><Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">→ Sistemas de riego automático para jardín</Link></li>
            <li><Link href="/mejor-manguera-riego-jardin" className="text-sky-600 hover:underline">→ Mejor manguera de riego para jardín</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/riego-automatico" ctaText="Ver productos de riego" />
      </div>
    </div>
    </>
  );
}
