import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

// Artículo generado 17/10/2026 (loop blogs-monetizacion). Sin precios ni valoraciones estáticas de Amazon (cumplimiento julio 2026).
// Fuentes de los valores: rango de alcalinidad total 80-120 mg/L (ideal) y 60-180 mg/L (aceptable) según el documento
// «Parámetros químicos en aguas de piscina» de Hanna Instruments; efectos de alcalinidad baja/alta y reposo de ~6 h antes de volver a medir según Pool Research.
// Dosis de Alca-Plus (180 g por 10 m³ → +10 mg/L) según la ficha del fabricante recogida en data/products.ts.

const TITLE = "Alcalinidad de la piscina: valor ideal, cómo subirla y cómo bajarla (2026)";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Alcalinidad piscina: cómo subirla o bajarla";
const URL = "https://www.guiadelpiscina.com/alcalinidad-piscina";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description:
    "Qué es la alcalinidad total de la piscina, qué valor mantener (80-120 mg/L), por qué hace que el pH suba y baje sin control y cómo corregirla paso a paso.",
  keywords:
    "alcalinidad piscina, alcalinidad total piscina, TAC piscina, subir alcalinidad piscina, bajar alcalinidad piscina, pH inestable piscina, bicarbonato piscina, alcalinidad ideal piscina",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "La alcalinidad es el amortiguador del pH. Si está mal, el pH se descontrola. Valores, síntomas y cómo corregirla en el orden correcto.",
    url: URL,
  },
};

const symptoms = [
  {
    caso: "Alcalinidad baja (por debajo de 60-80 mg/L)",
    efecto: "El pH fluctúa con facilidad (efecto «rebote»); posible corrosión de piezas metálicas y manchas o desgaste en paredes y liner",
    accion: "Subirla con un corrector de alcalinidad (bicarbonato sódico o producto específico) y después ajustar el pH",
  },
  {
    caso: "Alcalinidad en rango (80-120 mg/L)",
    efecto: "El agua amortigua los cambios y el pH se deja corregir con dosis normales",
    accion: "Medir una vez por semana y no tocar nada si el pH está estable",
  },
  {
    caso: "Alcalinidad alta (por encima de 120-180 mg/L)",
    efecto: "El pH tiende a subir y cuesta bajarlo; riesgo de incrustaciones de cal y agua turbia",
    accion: "Bajarla con un reductor ácido (bisulfato sódico o ácido muriático) siguiendo la etiqueta, y volver a medir",
  },
];

const faqs = [
  {
    q: "¿Qué es la alcalinidad de la piscina?",
    a: "La alcalinidad total (a veces llamada TA o TAC) mide la cantidad de sales alcalinas disueltas en el agua, sobre todo bicarbonatos. Funciona como un amortiguador: evita que el pH se dispare o se hunda cada vez que añades cloro, lluvia o un corrector.",
  },
  {
    q: "¿Cuál es la alcalinidad ideal de una piscina?",
    a: "El rango ideal es de 80 a 120 mg/L (ppm), y se considera aceptable entre 60 y 180 mg/L, según el material técnico de Hanna Instruments. Algunos fabricantes de cloro recomiendan ajustar dentro de ese rango según el tipo de cloro que uses, así que revisa también la etiqueta de tu producto.",
  },
  {
    q: "¿Qué diferencia hay entre alcalinidad y pH?",
    a: "El pH indica lo ácida o alcalina que está el agua en un momento dado (el objetivo es 7,2-7,6). La alcalinidad indica cuánta capacidad tiene el agua de resistir los cambios de pH. Son dos mediciones distintas que se ajustan en un orden concreto: primero la alcalinidad y después el pH.",
  },
  {
    q: "¿Cómo subo la alcalinidad de la piscina?",
    a: "Con bicarbonato sódico o con un producto específico para subir la alcalinidad, como Bayrol Alca-Plus. Hay que dosificar según el volumen de agua, repartir el producto con la depuradora en marcha y volver a medir pasadas unas horas.",
  },
  {
    q: "¿Cómo bajo la alcalinidad si la tengo alta?",
    a: "Se baja con un producto de carácter ácido, como el bisulfato sódico o el ácido muriático, dosificado según la etiqueta y por etapas. Nunca mezcles ácido con productos de cloro: usa cada uno por separado, con guantes y gafas, y repártelos por zonas distintas del vaso.",
  },
  {
    q: "¿Las tiras reactivas miden la alcalinidad?",
    a: "Sí, las tiras 3 en 1 más habituales miden pH, cloro libre y alcalinidad total, como las EASYTEST 3 en 1 de nuestra tienda. Su precisión es orientativa y no sustituye a un fotómetro, pero sirve para detectar si estás muy fuera de rango.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description:
    "Guía sobre la alcalinidad total de la piscina: qué es, valor recomendado, síntomas de alcalinidad baja o alta y cómo corregirla antes de ajustar el pH.",
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
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
    { "@type": "ListItem", position: 3, name: "Alcalinidad de la piscina", item: URL },
  ],
};

export default function AlcalinidadPiscinaPage() {
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
          <span className="text-gray-600">Alcalinidad de la piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Alcalinidad de la piscina: valor ideal, cómo subirla y cómo bajarla (2026)
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 17 octubre 2026 · Actualizado: 17 octubre 2026 · 7 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              La <strong>alcalinidad total</strong> es el amortiguador del pH de la piscina. El rango ideal es de <strong>80 a 120 mg/L (ppm)</strong>, y se considera aceptable entre 60 y 180 mg/L. Si es baja, el pH sube y baja sin control; si es alta, el pH se resiste a bajar. <strong>Se corrige siempre antes que el pH</strong>: primero la alcalinidad, después el pH.
            </p>
          </div>

          <p>
            Es el parámetro que más confunde a quien empieza. Muchos propietarios de piscina desmontable echan «pH menos» una semana y «pH más» la siguiente sin entender por qué el valor no se queda quieto. Cuando el pH no se queda quieto, el origen suele estar en la alcalinidad, que es la que decide si el agua aguanta los cambios o los exagera. Esta guía explica qué es, cuánto debe valer, cómo reconocer si te falta o te sobra y cómo corregirla en el orden correcto. Si aún no dominas el pH, empieza por nuestra guía del <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH de la piscina</Link>.
          </p>

          <h2>Qué es la alcalinidad y por qué importa</h2>
          <p>
            La alcalinidad total mide las sales alcalinas disueltas en el agua, principalmente bicarbonatos. Su función práctica es amortiguar: cuando añades cloro, entra lluvia o corriges con un producto químico, el agua con una alcalinidad adecuada absorbe parte del cambio y el pH se mueve poco. Con la alcalinidad en su sitio, el pH se mantiene estable durante días. Con la alcalinidad baja, cualquier aporte lo desplaza de golpe, lo que se conoce como «rebote» del pH.
          </p>
          <p>
            No es lo mismo que el pH. El pH dice cómo de ácida o alcalina está el agua <em>ahora</em>; la alcalinidad dice cuánta capacidad tiene para <em>resistir</em> que ese valor cambie. Por eso se miden y se corrigen por separado.
          </p>

          <h2>Valor ideal de alcalinidad</h2>
          <ul>
            <li><strong>Rango ideal:</strong> 80-120 mg/L (ppm).</li>
            <li><strong>Rango aceptable:</strong> 60-180 mg/L, según el material técnico de Hanna Instruments sobre parámetros químicos de piscinas.</li>
            <li><strong>Ajuste fino según el cloro:</strong> la misma fuente apunta a valores del orden de 80-100 ppm con cloros de pH alto y 100-120 ppm con cloros de pH bajo. Mira la etiqueta de tu producto por si el fabricante indica otro objetivo.</li>
          </ul>
          <p>
            Son valores de referencia para el mantenimiento de una piscina privada, no una norma legal de obligado cumplimiento para tu piscina.
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Situación</th>
                <th className="px-3 py-3 text-left">Qué notarás</th>
                <th className="px-3 py-3 text-left">Qué hacer</th>
              </tr>
            </thead>
            <tbody>
              {symptoms.map((s, i) => (
                <tr key={s.caso} className={i % 2 === 0 ? "bg-sky-50" : "bg-white"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">{s.caso}</td>
                  <td className="px-3 py-3 text-gray-600">{s.efecto}</td>
                  <td className="px-3 py-3 text-gray-600">{s.accion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Cómo medir la alcalinidad</h2>
          <p>
            Las tiras reactivas 3 en 1 miden pH, cloro libre y alcalinidad total en una sola inmersión. Es el caso de las <Link href="/tienda/tratamiento-agua/easytest-kit-tiras-ph-cloro-piscina-150" className="text-sky-600 hover:underline">tiras EASYTEST 3 en 1</Link> de nuestra selección, que según su ficha dan resultado en menos de 30 segundos. Su precisión es orientativa y requiere buena luz natural para leer los colores, pero basta para saber si estás en rango o muy lejos de él. Si quieres medir además dureza o estabilizador, las <Link href="/tienda/tratamiento-agua/easytest-tiras-reactivas-7-en-1-piscina-150" className="text-sky-600 hover:underline">EASYTEST 7 en 1</Link> incluyen más parámetros, entre ellos el <Link href="/acido-cianurico-piscina" className="text-sky-600 hover:underline">ácido cianúrico</Link>.
          </p>
          <p>
            Mide al abrir la temporada, después de una lluvia fuerte, tras vaciar y rellenar parte del agua y siempre antes de corregir el pH si este no se estabiliza. En el día a día, una vez por semana es suficiente.
          </p>

          <h2>El orden correcto: alcalinidad primero, pH después</h2>
          <ol>
            <li><strong>Mide</strong> alcalinidad, pH y cloro libre con la depuradora en marcha y una muestra tomada a unos 30 cm de profundidad, lejos de los retornos.</li>
            <li><strong>Corrige la alcalinidad</strong> si está fuera de 80-120 mg/L, dosificando por etapas.</li>
            <li><strong>Espera y vuelve a medir.</strong> Las guías de mantenimiento suelen recomendar dejar reposar el agua unas seis horas antes de repetir el test.</li>
            <li><strong>Ajusta el pH</strong> al rango 7,2-7,6 con un reductor o un elevador, según el caso.</li>
            <li><strong>Revisa el cloro</strong>: con el pH en rango, el cloro desinfecta mejor.</li>
          </ol>
          <p>
            Saltarte el paso 2 es el error más frecuente: si la alcalinidad está mal, el pH que corrijas hoy volverá a descolocarse en pocos días.
          </p>

          <h2>Cómo subir la alcalinidad</h2>
          <p>
            Para subirla se usa bicarbonato sódico o un producto específico. Un ejemplo con dosis publicada por el fabricante: el <Link href="/tienda/tratamiento-agua/bayrol-alca-plus-granulado-5kg" className="text-sky-600 hover:underline">Bayrol Alca-Plus</Link> indica <strong>180 g por cada 10 m³ de agua para subir la alcalinidad 10 mg/L</strong>, y está pensado para casos de alcalinidad inferior a 80 mg/L.
          </p>
          <p>
            Con esa dosis puedes calcular una corrección. Ejemplo: una piscina desmontable de 30 m³ (30.000 litros) con 50 mg/L que quieres llevar a 100 mg/L necesita +50 mg/L. Para +10 mg/L en 30 m³ hacen falta 540 g (180 g × 3), así que para +50 mg/L serían unos 2,7 kg. Lo prudente es no echarlo todo de una vez: añade la mitad, deja circular el agua, mide de nuevo y completa si hace falta. Es un cálculo orientativo sobre la dosis del fabricante; sigue siempre las instrucciones del envase.
          </p>

          <h2>Cómo bajar la alcalinidad</h2>
          <p>
            Cuando está alta, se baja con un producto de carácter ácido, como el bisulfato sódico o el ácido muriático, dosificado según la etiqueta y por etapas. Son productos corrosivos: guantes, gafas, y nunca mezclar con cloro ni entre sí. Vierte cada producto por separado, con la depuradora en marcha, y vuelve a medir antes de repetir. Ten en cuenta que estos productos también bajan el pH, así que revisa ambos parámetros después. Un reductor de pH como el <Link href="/tienda/tratamiento-agua/nortembiow-ph-minus-liquido-reductor-ph-piscina" className="text-sky-600 hover:underline">NortemBio pH Minus líquido</Link> sirve para el ajuste final del pH, pero su ficha lo define como corrector de pH, no como reductor de alcalinidad: no lo confundas con el paso 2.
          </p>

          <h2>Y el pH, ¿cuándo se toca?</h2>
          <p>
            Una vez la alcalinidad está en rango, el pH deja de oscilar y las dosis de corrector se reducen. Si está bajo de 7,2, un elevador como el <Link href="/tienda/tratamiento-agua/diamas-ph-gr-elevador-ph-granulado-5kg" className="text-sky-600 hover:underline">DIAMAS PH GR</Link> lo sube (su ficha indica uso cuando el pH está por debajo de 7,2); si está alto, un reductor lo baja. Para aprender a leer cada valor, consulta la guía de <Link href="/ph-piscina" className="text-sky-600 hover:underline">pH de la piscina</Link>.
          </p>

          <h2>Nuestra valoración: qué recomendamos según tu caso</h2>
          <ul>
            <li><strong>Tu pH sube y baja cada pocos días:</strong> mide la alcalinidad antes de seguir echando correctores de pH. Es la causa más probable.</li>
            <li><strong>Piscina desmontable recién llenada:</strong> mide la alcalinidad al llenar, antes de añadir ningún producto, y corrígela desde el principio si sale fuera de rango.</li>
            <li><strong>Agua turbia con pH alto que no baja:</strong> comprueba si la alcalinidad está por encima de 120 mg/L antes de añadir más reductor.</li>
            <li><strong>Quieres controlar todo con una sola compra:</strong> unas tiras que midan alcalinidad (3 en 1 como mínimo) son la inversión más útil; los productos químicos se compran después, según lo que midas.</li>
          </ul>
          <p>
            Para completar el mantenimiento, repasa cuánto <Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">cloro echar en la piscina</Link>, la rutina del <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link> y qué hacer si el agua se pone <Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">verde</Link>.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B09MW354JK")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver tiras EASYTEST →
          </a>
          <a
            href={amazonLink("B00I476HLC")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver Bayrol Alca-Plus →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre la alcalinidad de la piscina</h2>
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
            Fuentes consultadas: documento «Parámetros químicos en aguas de piscina» de Hanna Instruments (rangos de alcalinidad), Pool Research (efectos de la alcalinidad baja o alta y tiempo de reposo) y ficha del fabricante de Bayrol Alca-Plus (dosis). Los rangos son orientativos para piscina privada.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Tiras de control, correctores de pH y alcalinidad, cloro, algicidas y floculantes de nuestra selección.</p>
          <Link href="/tienda/tratamiento-agua" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver tratamiento del agua →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/ph-piscina" className="text-sky-600 hover:underline">→ pH de la piscina: valores ideales y cómo corregirlo</Link></li>
            <li><Link href="/acido-cianurico-piscina" className="text-sky-600 hover:underline">→ Ácido cianúrico: qué es y cómo bajarlo</Link></li>
            <li><Link href="/cuanto-cloro-echar-piscina" className="text-sky-600 hover:underline">→ ¿Cuánto cloro echar en la piscina?</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/tratamiento-agua" ctaText="Ver productos de tratamiento del agua" />
      </div>
    </div>
    </>
  );
}
