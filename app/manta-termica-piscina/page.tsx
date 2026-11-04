import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 04/11/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Medidas, espesores y vendedores: fichas de Amazon.es consultadas el 04/11/2026 (data/products.ts).
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Manta térmica o cubierta solar para la piscina: cómo elegirla y colocarla";
const SEO_TITLE = "Manta térmica para piscina: cómo elegirla";
const H1 = "Manta térmica o cubierta solar para la piscina: espesor, medida y cuál elegir";
const URL = "https://www.guiadelpiscina.com/manta-termica-piscina";
const DESCRIPTION =
  "Manta térmica o cubierta solar de burbujas para la piscina: qué hace y qué no, cómo elegir el espesor (120 o 400 micras), cómo medirla y cortarla, cómo colocarla y 5 modelos del catálogo.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "manta térmica piscina, cubierta solar piscina, manta solar piscina, cobertor solar piscina, manta de burbujas piscina, manta térmica piscina desmontable",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "Qué es una manta térmica de burbujas, qué espesor elegir, cómo medirla y colocarla y qué modelos tenemos en el catálogo.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "tillvex-cobertor-solar-piscina-800x400-120um", note: "Para piscinas rectangulares grandes: 800 × 400 cm, lámina de 120 µm y recortable." },
  { slug: "arebos-cubierta-solar-piscina-500x800-400um", note: "La de lámina más gruesa de la selección: 400 micras, 500 × 800 cm y acortable." },
  { slug: "arebos-cubierta-solar-piscina-450x220-120um", note: "Para piscinas pequeñas: 4,5 × 2,2 m en rollo recortable, vendida por el propio fabricante." },
];

const comparativa = [
  { slug: "tillvex-cobertor-solar-piscina-450x220-120um", modelo: "tillvex 450 × 220 cm", medida: "450 × 220 cm", espesor: "120 µm", vende: "DWD-Company" },
  { slug: "arebos-cubierta-solar-piscina-450x220-120um", modelo: "Arebos 4,5 × 2,2 m", medida: "4,5 × 2,2 m", espesor: "120 µm", vende: "AREBOS" },
  { slug: "tillvex-cobertor-solar-piscina-800x400-120um", modelo: "tillvex 800 × 400 cm", medida: "800 × 400 cm", espesor: "120 µm", vende: "DWD-Company" },
  { slug: "arebos-cubierta-solar-piscina-500x800-400um", modelo: "Arebos 500 × 800 cm", medida: "500 × 800 cm", espesor: "400 micras", vende: "AREBOS" },
  { slug: "vevor-cubierta-solar-piscina-732x366", modelo: "VEVOR 7,32 × 3,66 m", medida: "7,32 × 3,66 m", espesor: "12 mil", vende: "Amazon" },
];

const faqs = [
  {
    q: "¿Para qué sirve una manta térmica de piscina?",
    a: "Se coloca flotando sobre el agua y hace tres cosas: absorbe el calor del sol y lo cede al agua, reduce la evaporación y frena la entrada de hojas y suciedad. No calienta por sí sola de la nada: aprovecha el sol y retiene el calor que el agua ya tiene.",
  },
  {
    q: "¿La burbuja va hacia arriba o hacia abajo?",
    a: "Con las burbujas hacia el agua, que es lo que indican los fabricantes de las cubiertas del catálogo. La cara lisa queda arriba, de cara al sol.",
  },
  {
    q: "¿Sirve de cubierta de seguridad?",
    a: "No. Es una lámina ligera que flota: no soporta peso y no impide que alguien o algo caiga al agua. Si necesitas proteger la piscina de un riesgo, hace falta una cubierta de seguridad homologada.",
  },
  {
    q: "¿Qué espesor es mejor, 120 o 400 micras?",
    a: "Una lámina más gruesa es más resistente y suele durar más, pero también es más pesada y más difícil de enrollar. Las de 120 µm son más ligeras y manejables; las de 400 micras, más robustas. Elige según el tamaño de la piscina y quién la va a retirar cada día.",
  },
  {
    q: "¿Se puede cortar la manta térmica?",
    a: "Sí. Las del catálogo son recortables o acortables. Corta por la cara lisa con unas tijeras y deja el borde unos centímetros por debajo de la medida de la piscina para que flote sin arrugarse contra la pared.",
  },
  {
    q: "¿Hay que quitarla para bañarse?",
    a: "Sí. Se enrolla o se pliega a un lado de la piscina mientras alguien se baña y se vuelve a colocar al terminar. Además conviene retirarla cuando se añaden productos químicos al agua.",
  },
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
    knowsAbout: ["piscinas desmontables", "mantas térmicas", "mantenimiento de piscinas"],
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
    { "@type": "ListItem", position: 3, name: "Manta térmica para piscina", item: URL },
  ],
};

export default function MantaTermicaPiscinaPage() {
  const picks = quickPicks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
  const filas = comparativa.flatMap((row) => availableBySlug([row.slug]).map((product) => ({ row, product })));

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
              <span className="text-gray-600">Manta térmica para piscina</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
            <p className="text-gray-400 text-sm mb-6">Publicado: 4 noviembre 2026 · Actualizado: 4 noviembre 2026 · 6 min lectura</p>
            <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
              <span>✍️</span>
              <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
            </span>

            <AffiliateDisclosure />

            <div className="prose">
              <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  Una manta térmica es una lámina de burbujas que <strong>flota sobre el agua</strong> para aprovechar el sol, reducir la evaporación y frenar la suciedad. Elige la que <strong>cubra casi toda la superficie</strong> de tu piscina (se puede recortar) y fíjate en el espesor: las de <strong>120 µm</strong> son más ligeras y las de <strong>400 micras</strong>, más robustas. <strong>No es una cubierta de seguridad.</strong>
                </p>
              </div>

              <p>
                Esta guía es para quien ya tiene piscina y quiere alargar la temporada sin gastar más en calentarla. Si lo que buscas es proteger la piscina en invierno, mira la guía de{" "}
                <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrar la piscina en invierno</Link> o la de{" "}
                <Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">cubiertas para piscinas desmontables</Link>; si prefieres calentar el agua de forma activa, la de{" "}
                <Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">bomba de calor</Link>. Para ver dónde se pierden el calor y el agua y qué más puedes hacer, mira{" "}
                <Link href="/ahorrar-agua-energia-piscina" className="text-sky-600 hover:underline">cómo ahorrar agua y energía en la piscina</Link>.
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
              <h2>Qué hace una manta térmica y qué no</h2>
              <ul>
                <li><strong>Aprovecha el sol.</strong> Las burbujas absorben calor y lo ceden al agua, que se calienta más despacio de lo que lo haría una bomba pero sin consumo eléctrico.</li>
                <li><strong>Reduce la evaporación.</strong> Con la piscina tapada se pierde menos agua y también menos calor, que es lo que más se nota por la noche.</li>
                <li><strong>Frena la suciedad.</strong> Hojas, insectos y polvo se quedan encima de la manta y no en el agua.</li>
                <li><strong>No es una cubierta de seguridad.</strong> Flota y no soporta peso: no impide caídas al agua.</li>
                <li><strong>No sustituye a la depuración.</strong> Con la manta puesta, el agua sigue necesitando filtración y tratamiento.</li>
              </ul>

              <h2>Cómo elegir: medida, espesor y forma</h2>
              <p>
                <strong>Medida.</strong> Mide la superficie del agua, no la del exterior de la piscina. Compra la medida más cercana por encima y recórtala: las del catálogo son recortables o acortables, así que es mejor que sobre a que falte.
              </p>
              <p>
                <strong>Espesor.</strong> Se expresa en micras (µm) o en mils (el modelo de VEVOR del catálogo es de 12 mil). Una lámina más gruesa aguanta mejor el sol y los enrollados, pero pesa más y cuesta más de retirar en una piscina grande; una fina es más fácil de manejar. En nuestra selección hay láminas de 120 µm y una de 400 micras.
              </p>
              <p>
                <strong>Forma.</strong> Las de rollo o rectangulares se cortan a la forma de la piscina, también redonda u ovalada. Cuanto más recortes, más desperdicio, así que elige la medida más próxima.
              </p>
            </div>

            <AdSenseAd placement="contenido" />

            <div className="prose">
              <h2>Comparativa de las mantas del catálogo</h2>
              <p>Datos de las fichas de Amazon.es consultadas el 4 de noviembre de 2026. No incluimos precios: cambian cada día y los puedes ver en la ficha.</p>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sky-600 text-white">
                    <th className="px-3 py-3 text-left">Modelo</th>
                    <th className="px-3 py-3 text-left">Medida</th>
                    <th className="px-3 py-3 text-left">Espesor</th>
                    <th className="px-3 py-3 text-left">Vendida por</th>
                    <th className="px-3 py-3 text-left">Ficha</th>
                  </tr>
                </thead>
                <tbody>
                  {filas.map(({ row, product }, i) => (
                    <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                      <td className="px-3 py-3 font-semibold text-gray-900">{row.modelo}</td>
                      <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.medida}</td>
                      <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.espesor}</td>
                      <td className="px-3 py-3 text-gray-600">{row.vende}</td>
                      <td className="px-3 py-3">
                        <Link href={`/tienda/${product.categorySlug}/${product.slug}`} className="text-sky-600 hover:underline">Ver ficha →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose">
              <h2>Cómo colocarla y cuidarla</h2>
              <ol>
                <li>Corta la manta por la cara lisa, unos centímetros por debajo de la medida del agua.</li>
                <li>Extiéndela con las burbujas hacia el agua, sin tirar de ella.</li>
                <li>Retírala para bañarte y cuando añadas productos químicos al agua.</li>
                <li>Enróllala sin doblarla y guárdala a la sombra: el sol directo fuera del agua la degrada antes.</li>
                <li>Si sobra, no te pases recortando: una manta algo grande es más fácil de ajustar que una corta.</li>
              </ol>

              <h2>Errores frecuentes</h2>
              <ul>
                <li>Pensar que es una cubierta de seguridad.</li>
                <li>Cortarla con la medida exterior de la piscina y que sobre manta contra la pared.</li>
                <li>Colocarla con las burbujas hacia arriba.</li>
                <li>Dejarla puesta mientras se baña alguien o se echa producto al agua.</li>
                <li>Guardarla al sol, doblada o húmeda.</li>
              </ul>
            </div>

            <div className="prose">
              <h2>Preguntas frecuentes sobre la manta térmica de piscina</h2>
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
                Fuentes: fichas de producto de tillvex, Arebos y VEVOR en Amazon.es (medidas, espesores, formato y vendedor, consultadas el 4 de noviembre de 2026).
              </p>
            </div>

            <AffiliateDisclosure />

            <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
              <p className="text-sm text-gray-600 mb-4">Piscinas desmontables, depuradoras y accesorios de nuestra selección.</p>
              <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
                Ver piscinas desmontables →
              </Link>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
              <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
              <ul className="space-y-2">
                <li><Link href="/bomba-calor-piscina" className="text-sky-600 hover:underline">→ Bomba de calor para piscina</Link></li>
                <li><Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">→ Cubierta para piscina desmontable</Link></li>
                <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
                <li><Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">→ Cómo cerrar la piscina en invierno</Link></li>
              </ul>
            </div>
          </article>
          <BlogSidebar ctaHref="/tienda/piscinas-desmontables" ctaText="Ver piscinas desmontables" />
        </div>
      </div>
    </>
  );
}
