import type { Metadata } from "next";
import Link from "next/link";
import { primaryOffer, offerUrl, STORE_NAME } from "@/lib/affiliate";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 27/10/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Cargas de arena, vidrio y bolas: fichas de Intex y Gre en Amazon.es (data/products.ts). Granulometrías, pesos y compatibilidades
// de los recambios: fichas de Amazon.es consultadas el 27/10/2026. Los sacos necesarios están calculados a partir de esos datos.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Arena para depuradora: cuánta poner, cuál elegir y cómo cambiarla";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Arena para depuradora: cuánta poner y cómo cambiarla";
const H1 = "Arena, vidrio o bolas para la depuradora y cartuchos de recambio: cuál poner y cómo cambiarlos";
const URL = "https://www.guiadelpiscina.com/arena-depuradora-piscina";
const DESCRIPTION =
  "Arena de sílex, vidrio filtrante o bolas para la depuradora: cuántos kilos lleva cada modelo, qué granulometría, cómo cambiar la carga paso a paso y qué cartucho tipo A o H necesita tu depuradora.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "arena depuradora piscina, arena silex depuradora, cambiar arena depuradora, vidrio filtrante piscina, bolas filtrantes piscina, cuanta arena lleva una depuradora, cartucho intex tipo a, cartucho intex tipo h",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Cuántos kilos de arena, vidrio o bolas lleva cada depuradora, cómo cambiar la carga y qué cartucho de recambio necesitas.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "tecno-prodist-arena-silex-10kg", note: "Arena de sílex de 0,4 a 0,8 mm fabricada en España, en saco de 10 kg con caja para que no se rompa en el envío." },
  { slug: "qp-vidrio-filtrante-20kg", note: "Vidrio reciclado para depuradoras de arena y cloradores salinos, en saco de 20 kg." },
  { slug: "intex-bolas-filtrantes-500g", note: "Bolas de fibra de poliéster de Intex: 500 g sustituyen a 18 kg de sílice según el fabricante. Las vende Amazon." },
];

// Carga de cada depuradora del catálogo (fichas del fabricante) y sacos necesarios con los recambios de esta guía.
const cargas = [
  { slug: "intex-55249-depuradora-arena-3500", modelo: "Intex 55249 (3.500 l/h)", arena: "6,5 kg", vidrio: "5 kg", bolas: "200 g", sacos: "1 saco de 10 kg de arena, o 1 de vidrio, o 1 bolsa de bolas" },
  { slug: "intex-55225-depuradora-arena-5700", modelo: "Intex 55225 (5.700 l/h)", arena: "12 kg", vidrio: "8,5 kg", bolas: "350 g", sacos: "2 sacos de 10 kg de arena, o 1 de vidrio, o 1 bolsa de bolas" },
  { slug: "gre-770803-depuradora-arena-4000", modelo: "Gre 770803 (4.000 l/h)", arena: "Hasta 19 kg", vidrio: "—", bolas: "—", sacos: "2 sacos de 10 kg de arena" },
  { slug: "intex-28648-depuradora-arena-14", modelo: "Intex 55227 (10.500 l/h)", arena: "35 kg", vidrio: "25 kg", bolas: "1 kg", sacos: "4 sacos de 10 kg de arena, o 2 de vidrio, o 2 bolsas de bolas" },
];

const faqs = [
  {
    q: "¿Cuánta arena lleva una depuradora de piscina?",
    a: "Depende del tamaño del tanque y lo indica el fabricante. En nuestra selección, la Intex 55249 lleva 6,5 kg de arena de sílice, la 55225 lleva 12 kg, la Gre 770803 hasta 19 kg y la Intex 55227 lleva 35 kg. Si cambias a vidrio, se usa menos peso: 5, 8,5 y 25 kg en esas tres Intex.",
  },
  {
    q: "¿Qué arena se pone en una depuradora?",
    a: "Arena de sílex o sílice lavada, del grano que indique el fabricante. Intex pide arena de sílice nº 20 y Bestway, de 0,45 a 0,85 mm. No uses arena de playa ni de obra: tiene polvo y grano irregular y acaba en la piscina.",
  },
  {
    q: "¿Es mejor el vidrio filtrante que la arena?",
    a: "Se carga en la misma depuradora y en menor cantidad. Los fabricantes de vidrio destacan que no se apelmaza y que dura más que la arena. Antes de cambiar, comprueba que tu depuradora admite vidrio y en qué cantidad: Intex lo indica en sus fichas.",
  },
  {
    q: "¿Cada cuánto se cambia el cartucho de la depuradora?",
    a: "Intex recomienda cambiar sus cartuchos tipo A y tipo H cada dos semanas de uso y limpiarlos con agua a presión siempre que haga falta.",
  },
  {
    q: "¿Qué diferencia hay entre el cartucho tipo A y el tipo H de Intex?",
    a: "El tamaño y la depuradora en la que encajan. El tipo A mide 20,2 cm de alto y 10,8 cm de diámetro y es para depuradoras como la 28636 o la 28638; el tipo H mide unos 10 × 9 cm y es para las pequeñas de 1.250 l/h, como la 28601, la 28602 o la C330.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["depuradoras de piscina", "filtración del agua", "mantenimiento de piscinas desmontables"],
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
    { "@type": "ListItem", position: 3, name: "Arena para depuradora", item: URL },
  ],
};

export default function ArenaDepuradoraPiscinaPage() {
  const picks = quickPicks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
  const filas = cargas.flatMap((row) => availableBySlug([row.slug]).map((product) => ({ row, product })));
  const cartuchos = availableBySlug(["intex-29003-cartuchos-tipo-a-3", "intex-29007e-cartucho-tipo-h"]);
  const arena = availableBySlug(["tecno-prodist-arena-silex-10kg"])[0];
  const vidrio = availableBySlug(["qp-vidrio-filtrante-20kg"])[0];

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
          <span className="text-gray-600">Arena para depuradora</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 27 octubre 2026 · Actualizado: 27 octubre 2026 · 7 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Una depuradora de arena lleva <strong>los kilos que indica su fabricante</strong>: de 6,5 kg en las pequeñas a 35 kg en las grandes de nuestra selección. Usa <strong>arena de sílex lavada</strong> del grano indicado (Intex pide sílice nº 20; Bestway, de 0,45 a 0,85 mm), o vidrio filtrante o bolas si tu depuradora los admite, en la cantidad de su ficha. En las de cartucho, Intex recomienda <strong>cambiar el cartucho cada dos semanas</strong> de uso.
            </p>
          </div>

          <p>
            Esta guía es para cuando ya tienes depuradora y toca cambiar la carga del filtro. Si todavía estás eligiendo depuradora, empieza por la guía de{" "}
            <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">depuradoras de piscina</Link>, donde comparamos arena, cartucho y cristal, o por la de{" "}
            <Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">depuradora para piscina pequeña</Link>.
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
          <h2>Arena de sílex, vidrio o bolas</h2>
          <ul>
            <li><strong>Arena de sílex.</strong> Es la carga original de casi todas las depuradoras de arena. Tiene que ser arena lavada y seca, del grano que pide el fabricante: la de Tecno Prodist es de 0,4 a 0,8 mm. Nunca arena de playa ni de obra.</li>
            <li><strong>Vidrio filtrante.</strong> Vidrio reciclado en grano que se carga en el mismo tanque. Se usa menos peso que de arena: en la Intex 55225, 8,5 kg de vidrio en lugar de 12 kg de arena. Los fabricantes destacan que no se apelmaza y que dura más que la arena.</li>
            <li><strong>Bolas filtrantes.</strong> Fibra de poliéster muy ligera: la Intex 55225 lleva 350 g en lugar de 12 kg de arena. Son las más fáciles de manejar y se pueden lavar y reutilizar, según Intex.</li>
          </ul>
          <p>
            Antes de cambiar de arena a vidrio o bolas, comprueba que tu depuradora los admite. Intex lo indica en las fichas de sus Krystal Clear; si la ficha de la tuya no lo dice, consulta al fabricante.
          </p>

          <h2>Cuánta carga lleva tu depuradora</h2>
          <p>
            Estos son los datos de las depuradoras de arena de nuestra selección y los sacos que necesitas con los recambios de esta guía (arena en sacos de 10 kg, vidrio en sacos de 20 kg y bolas en bolsas de 500 g).
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Depuradora</th>
                <th className="px-3 py-3 text-left">Arena de sílice</th>
                <th className="px-3 py-3 text-left">Vidrio</th>
                <th className="px-3 py-3 text-left">Bolas</th>
                <th className="px-3 py-3 text-left">Qué comprar</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {filas.map(({ row, product }, i) => {
                const offer = primaryOffer(product)!;
                return (
                  <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                    <td className="px-3 py-3 font-semibold text-gray-900">
                      <Link href={`/tienda/${product.categorySlug}/${product.slug}`} className="hover:text-sky-700 hover:underline">{row.modelo}</Link>
                    </td>
                    <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.arena}</td>
                    <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.vidrio}</td>
                    <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.bolas}</td>
                    <td className="px-3 py-3 text-gray-600 text-xs">{row.sacos}</td>
                    <td className="px-3 py-3">
                      <a
                        href={offerUrl(offer)}
                        target="_blank"
                        rel="nofollow noopener noreferrer sponsored"
                        className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
                      >
                        {STORE_NAME[offer.store]} →
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <p className="text-sm text-gray-500">
            «—»: la ficha del fabricante no indica si admite vidrio o bolas. Los sacos son el número mínimo de envases que cubren la carga indicada.
          </p>

          <h2>Cuándo cambiar la carga</h2>
          <p>
            La arena no se cambia cada temporada. Las señales de que toca son que el agua no se aclara aunque la química esté bien, que tras el contralavado la presión del manómetro no vuelve a su valor normal o que salen restos de arena por las boquillas, señal de que algo se ha roto dentro del filtro. Consulta también el manual de tu depuradora, que puede dar un plazo orientativo.
          </p>

          <h2>Cómo cambiar la arena paso a paso</h2>
          <p>
            Sigue siempre el manual de tu modelo. El proceso habitual es este:
          </p>
          <ol>
            <li>Apaga y desenchufa la depuradora y cierra las válvulas o tapona las mangueras.</li>
            <li>Vacía el tanque con el tapón de drenaje y abre la tapa o la válvula superior.</li>
            <li>Saca la arena vieja con un vaso o una pala pequeña, sin golpear los brazos difusores del fondo.</li>
            <li>Revisa los difusores: si alguno está roto, la arena nueva acabará en la piscina.</li>
            <li>Tapa el tubo central con un vaso o un trapo para que no entre arena dentro y llena el tanque con agua hasta la mitad, para que el peso de la carga no golpee los difusores.</li>
            <li>Echa los kilos que indica el fabricante y nivela la superficie.</li>
            <li>Limpia la rosca, cierra la tapa y haz un contralavado y un enjuague antes de volver a filtrar.</li>
          </ol>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Cartuchos de recambio: tipo A o tipo H</h2>
          <p>
            En las depuradoras de cartucho no hay arena: el agua atraviesa un cartucho de papel plisado que se limpia con agua a presión y se cambia cuando ya no recupera. Intex recomienda cambiarlo cada dos semanas de uso. Lo importante es comprar el tipo que corresponde a tu depuradora:
          </p>
          <ul>
            <li><strong>Tipo A</strong> (Intex 29000): 20,2 cm de alto y 10,8 cm de diámetro. Encaja, entre otras, en las depuradoras 28636 y 28638 de Intex.</li>
            <li><strong>Tipo H</strong> (Intex 29007): unos 10 × 9 cm. Es el de las depuradoras pequeñas de 1.250 l/h, como la 28601 y la 28602, y el de la{" "}
              <Link href="/tienda/depuradoras/intex-c330-depuradora-cartucho-1250" className="text-sky-600 hover:underline">Intex C330</Link>.</li>
            <li><strong>Tipo B</strong>: el de las depuradoras de cartucho grandes, como la{" "}
              <Link href="/tienda/depuradoras/intex-c2500-depuradora-cartucho" className="text-sky-600 hover:underline">Intex C2500</Link>.</li>
          </ul>
          <p>
            Si no sabes cuál es el tuyo, mira la letra impresa en el cartucho que llevas puesto o el manual de la depuradora.
          </p>
        </div>

        {cartuchos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
            {cartuchos.map((product) => (
              <GuideProductPick key={product.slug} product={product} note={product.shortDescription} />
            ))}
          </div>
        )}

        <div className="prose">
          <h2>Errores frecuentes</h2>
          <ul>
            <li>Usar arena de playa o de obra: el polvo y el grano irregular acaban en la piscina.</li>
            <li>Echar los mismos kilos de vidrio que de arena: el vidrio se carga en menor cantidad.</li>
            <li>Volcar la carga en el tanque vacío y sin tapar el tubo central.</li>
            <li>No hacer el contralavado y el enjuague después de cambiar la carga.</li>
            <li>Comprar el cartucho por el tamaño de la piscina y no por la letra de la depuradora.</li>
          </ul>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          {arena && (
            <a
              href={offerUrl(primaryOffer(arena)!)}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
            >
              Ver arena de sílex 10 kg →
            </a>
          )}
          {vidrio && (
            <a
              href={offerUrl(primaryOffer(vidrio)!)}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
            >
              Ver vidrio filtrante 20 kg →
            </a>
          )}
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre la arena y los cartuchos de la depuradora</h2>
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
            Fuentes: fichas de producto de Intex, Gre y Bestway en Amazon.es (carga de arena, vidrio y bolas de cada depuradora, grano de la arena, medidas y compatibilidad de los cartuchos y frecuencia de cambio recomendada) y fichas de los recambios de Tecno Prodist, Productos QP e Intex, consultadas el 27 de octubre de 2026. El número de sacos está calculado a partir de esos datos.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Depuradoras de arena y de cartucho, arena, vidrio, bolas y cartuchos de recambio de nuestra selección.</p>
          <Link href="/tienda/depuradoras" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver depuradoras y recambios →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Depuradoras de piscina: cómo elegir</Link></li>
            <li><Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">→ Depuradora para piscina pequeña</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/agua-piscina-verde" className="text-sky-600 hover:underline">→ Agua de la piscina verde: qué hacer</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/depuradoras" ctaText="Ver depuradoras y recambios" />
      </div>
    </div>
    </>
  );
}
