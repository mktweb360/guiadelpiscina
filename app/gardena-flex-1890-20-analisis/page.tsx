import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "GARDENA Flex 1890-20: análisis completo y opinión 2026 | Guía del Piscina",
  description:
    "Análisis a fondo del programador de riego GARDENA Flex 1890-20: función Water Now, instalación, autonomía de pilas, comparativa con otros programadores Gardena y opinión final.",
  keywords:
    "gardena flex 1890-20 opinion, programador riego gardena analisis, mejor programador riego grifo, gardena water now",
  alternates: { canonical: "https://www.guiadelpiscina.com/gardena-flex-1890-20-analisis" },
  openGraph: {
    title: "GARDENA Flex 1890-20: análisis completo y opinión 2026",
    description:
      "Función Water Now, instalación, autonomía y comparativa con otros programadores Gardena del catálogo.",
    url: "https://www.guiadelpiscina.com/gardena-flex-1890-20-analisis",
  },
};

const comparison = [
  {
    name: "GARDENA Flex 1890-20",
    price: "€49,26",
    reviews: "4.330",
    rating: "4,5",
    highlight: "Función Water Now + programación flexible",
    href: "/tienda/riego-automatico/gardena-flexcontrol-programador-riego",
  },
  {
    name: "Gardena Smart Set (con Gateway)",
    price: "€400,64",
    reviews: "72",
    rating: "3,9",
    highlight: "Control por app y voz, ecosistema smart completo",
    href: "/tienda/riego-automatico/gardena-smart-set-riego-gateway",
  },
  {
    name: "Gardena Temporizador Estándar",
    price: "€27,50",
    reviews: "2.794",
    rating: "4,2",
    highlight: "Mecánico, sin app, el más económico",
    href: "/tienda/riego-automatico/gardena-temporizador-estandar-riego",
  },
];

const pros = [
  "4.330 reseñas verificadas — el producto de riego mejor valorado del catálogo",
  "Función Water Now: riego manual inmediato sin desprogramar el horario automático",
  "Programación flexible por días de la semana o por intervalos, hasta 4 tiempos de riego al día",
  "Funciona con pilas (no requiere corriente ni WiFi), instalación en minutos directamente al grifo",
  "Precio intermedio: mucho más completo que el Temporizador Estándar sin llegar al coste de un sistema Smart Set",
];

const cons = [
  "No tiene conectividad WiFi ni control por app — para eso está el Gardena Smart Set del catálogo",
  "Requiere pilas (no incluidas en todas las versiones) que hay que revisar periódicamente",
  "Pantalla pequeña, la programación inicial requiere leer el manual con atención",
];

const faqs = [
  {
    q: "¿Qué diferencia al GARDENA Flex 1890-20 del Temporizador Estándar?",
    a: "El Temporizador Estándar es puramente mecánico: un dial que abre y cierra el paso de agua. El Flex 1890-20 es electrónico, permite programar varios riegos al día en días concretos de la semana y tiene la función Water Now para regar manualmente sin alterar el programa guardado.",
  },
  {
    q: "¿Necesito el Gardena Smart Set si ya tengo el Flex 1890-20?",
    a: "No, son alternativas, no complementos. El Smart Set añade control remoto por app y voz vía Gateway, con un coste muy superior. El Flex 1890-20 cubre de sobra las necesidades de riego programado de la mayoría de jardines domésticos sin necesidad de conectividad.",
  },
  {
    q: "¿Qué autonomía de pilas tiene?",
    a: "Gardena declara hasta 1 año de autonomía con un uso normal (2-4 riegos diarios). Es recomendable revisar el indicador de batería del programador al inicio de cada temporada de riego.",
  },
  {
    q: "¿Es compatible con cualquier grifo o toma de agua?",
    a: "Se instala directamente en cualquier grifo de rosca estándar de 3/4 de pulgada (el más habitual en jardines españoles). Si tu grifo tiene una rosca distinta, Gardena vende adaptadores específicos por separado.",
  },
  {
    q: "¿Por qué GARDENA Flex 1890-20 sustituyó a la ficha anterior de este catálogo?",
    a: "El ASIN que figuraba anteriormente en el catálogo bajo el nombre \"FlexControl\" resultó, tras verificación individual en Amazon.es, corresponder a un producto distinto (\"MultiControl\") y además estar descatalogado. Se sustituyó por este Flex 1890-20, un programador genuinamente vivo y verificado, con la función Water Now que buscábamos destacar.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GARDENA Flex 1890-20: análisis completo y opinión 2026",
  description:
    "Análisis a fondo del programador de riego GARDENA Flex 1890-20: función Water Now, instalación, autonomía y comparativa con otros programadores Gardena.",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  author: {
    "@type": "Person",
    name: "Miguel Torres",
    jobTitle: "Técnico Instalador de Piscinas",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Técnico instalador de piscinas con 12 años de experiencia en instalación y mantenimiento de piscinas en España.",
    knowsAbout: ["riego automático de jardín", "mantenimiento de piscinas", "tratamiento del agua"],
  },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.guiadelpiscina.com" },
  mainEntityOfPage: "https://www.guiadelpiscina.com/gardena-flex-1890-20-analisis",
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
      name: "GARDENA Flex 1890-20 análisis",
      item: "https://www.guiadelpiscina.com/gardena-flex-1890-20-analisis",
    },
  ],
};

export default function GardenaFlexAnalisisPage() {
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
          <span className="text-gray-600">GARDENA Flex 1890-20 análisis</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          GARDENA Flex 1890-20: análisis completo y opinión 2026
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 8 septiembre 2026 · Actualizado: 8 septiembre 2026 · 6 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Miguel Torres</a>
          <span className="text-gray-400">— Técnico de Piscinas</span>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              El GARDENA Flex 1890-20 es un programador de riego electrónico que se instala directamente en el grifo, con <strong>4.330 reseñas verificadas</strong> — el producto con más valoraciones de toda la categoría de riego automático de este catálogo. Su punto fuerte es la <strong>función Water Now</strong>: permite regar manualmente en cualquier momento sin borrar ni alterar el programa automático guardado. No tiene WiFi ni app — para eso existe el Gardena Smart Set — pero cubre con solvencia la necesidad de la inmensa mayoría de jardines domésticos.
            </p>
          </div>

          <h2>Por qué destaca este producto</h2>
          <p>
            Dentro de la categoría de riego automático de este catálogo conviven tres filosofías distintas: el temporizador puramente mecánico (barato y sin programación por días), el programador electrónico de grifo como este Flex 1890-20 (el término medio ideal para la mayoría), y el sistema smart con Gateway y app (máximo control, máximo precio). El Flex 1890-20 es, con diferencia, el que más reseñas acumula de los tres — un indicador claro de que es la opción que compra la mayoría de la gente quien busca automatizar el riego sin complicarse con conectividad.
          </p>

          <h2>Pros y contras</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-green-50 border border-green-100 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3">✓ A favor</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {pros.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-green-600 shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3">✗ En contra</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {cons.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-red-500 shrink-0">✗</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="prose">
          <h2>Comparativa con otros programadores Gardena del catálogo</h2>
          <p>Los tres productos de riego automático de este catálogo son de la misma marca (Gardena), pero cubren necesidades muy distintas:</p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Producto</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Reseñas</th>
                <th className="px-3 py-3 text-left">Rating</th>
                <th className="px-3 py-3 text-left">Lo que ofrece</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? "bg-sky-50" : "bg-white"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">
                    <Link href={c.href} className="hover:underline hover:text-sky-700">{c.name}</Link>
                  </td>
                  <td className="px-3 py-3 font-bold text-sky-600">{c.price}</td>
                  <td className="px-3 py-3 text-gray-600">{c.reviews}</td>
                  <td className="px-3 py-3 text-gray-600">{c.rating}★</td>
                  <td className="px-3 py-3 text-gray-600">{c.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="5678901235" />

        <div className="prose">
          <h2>¿Para quién es este programador?</h2>
          <p>
            El Flex 1890-20 es la opción recomendada para quien riega un jardín, huerto o macetas de forma habitual y quiere automatizarlo sin necesidad de estar pendiente cada día, pero sin necesitar tampoco controlarlo desde el móvil. Si tu único objetivo es un riego básico ocasional, el <Link href="/tienda/riego-automatico/gardena-temporizador-estandar-riego" className="text-sky-600 hover:underline">Temporizador Estándar</Link> resulta más económico. Si en cambio quieres integrar el riego en un ecosistema smart con control remoto, el <Link href="/tienda/riego-automatico/gardena-smart-set-riego-gateway" className="text-sky-600 hover:underline">Gardena Smart Set</Link> es la opción a considerar, con un salto de precio importante.
          </p>
        </div>

        <div className="not-prose my-6">
          <a
            href={amazonLink("B07JLVB5JP")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver precio actual →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre el GARDENA Flex 1890-20</h2>
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
          <p className="text-sm text-gray-600 mb-4">Descubre el resto de programadores y sistemas de riego automático de nuestra selección.</p>
          <Link href="/tienda/riego-automatico" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver riego automático →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/sistema-riego-automatico" className="text-sky-600 hover:underline">→ Sistemas de riego automático para jardín 2025</Link></li>
            <li><Link href="/cesped-artificial-jardin" className="text-sky-600 hover:underline">→ Mejor césped artificial para jardín 2025</Link></li>
            <li><Link href="/mejor-manguera-riego-jardin" className="text-sky-600 hover:underline">→ Mejor manguera de riego para jardín 2025</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/riego-automatico" ctaText="Ver productos de riego" />
      </div>
    </div>
    </>
  );
}
