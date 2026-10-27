import type { Metadata } from "next";
import Link from "next/link";
import { primaryOffer, offerUrl, STORE_NAME } from "@/lib/affiliate";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 27/10/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Medidas, litros, caudales y contenido de cada set: fichas de Amazon.es y Decathlon consultadas el 27/10/2026 (y data/products.ts).
// Los porcentajes de volumen real/bruto, las cargas por m² y los tiempos de renovación están calculados a partir de esos datos.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Piscina desmontable redonda: medidas, litros y modelos";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Piscina desmontable redonda: cómo elegirla";
const H1 = "Piscina desmontable redonda: cómo elegir diámetro, altura y depuradora";
const URL = "https://www.guiadelpiscina.com/piscina-desmontable-redonda";
const DESCRIPTION =
  "Cómo elegir una piscina desmontable redonda: diámetro según el hueco, litros reales, aro hinchable o tubular, altura, depuradora según el volumen y comparativa de modelos.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "piscina desmontable redonda, piscina redonda desmontable, piscinas redondas desmontables, piscina desmontable redonda con depuradora, piscina redonda 366, piscina redonda 457, piscina easy set, litros piscina redonda",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Qué diámetro cabe en tu jardín, cuántos litros tiene de verdad, aro hinchable o estructura tubular y comparativa de las redondas de nuestra selección.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "intex-28166-easy-set-457x107", note: "Set completo de aro hinchable: depuradora de 3.785 l/h, escalera, tapiz y cobertor en 4,57 m de diámetro." },
  { slug: "bestway-steel-pro-max-366x100", note: "Tubular de acero de 366 cm y un metro de altura, con depuradora y escalera: el tamaño familiar más habitual." },
  { slug: "intex-26726np-prism-frame-redonda-457x122", note: "La más alta de la selección (122 cm) y la de más agua: 16.805 litros, con depuradora, escalera, tapiz y cobertor." },
];

// Datos de la tabla: medidas y litros según el fabricante; la renovación es litros ÷ caudal nominal de la depuradora incluida.
const tabla = [
  { slug: "intex-56007-easy-set-redonda-305x76", modelo: "Intex Easy Set 305 × 76", tipo: "Aro hinchable", medidas: "Ø305 × 76 cm", litros: "3.853 L", depuradora: "Cartucho 1.250 l/h", renovacion: "≈ 3 h 05 min" },
  { slug: "bestway-steel-pro-max-305x76-depuradora", modelo: "Bestway Steel Pro MAX 305 × 76", tipo: "Tubular de acero", medidas: "Ø305 × 76 cm", litros: "4.678 L", depuradora: "Bomba de filtración", renovacion: "—" },
  { slug: "intex-prism-frame-piscina-redonda-366x76", modelo: "Intex Prism Frame 366 × 76", tipo: "Tubular de acero", medidas: "Ø366 × 76 cm", litros: "6.503 L", depuradora: "No incluida", renovacion: "—" },
  { slug: "bestway-steel-pro-max-366x100", modelo: "Bestway Steel Pro MAX 366 × 100", tipo: "Tubular de acero", medidas: "Ø366 × 100 cm", litros: "9.150 L", depuradora: "Cartucho 2.006 l/h + escalera", renovacion: "≈ 4 h 35 min" },
  { slug: "intex-28166-easy-set-457x107", modelo: "Intex Easy Set 457 × 107", tipo: "Aro hinchable", medidas: "Ø457 × 107 cm", litros: "12.430 L", depuradora: "Cartucho 3.785 l/h + escalera, tapiz y cobertor", renovacion: "≈ 3 h 17 min" },
  { slug: "intex-26726np-prism-frame-redonda-457x122", modelo: "Intex Prism Frame 457 × 122", tipo: "Tubular de acero", medidas: "Ø457 × 122 cm", litros: "16.805 L", depuradora: "Cartucho 3.785 l/h + escalera, tapiz y cobertor", renovacion: "≈ 4 h 25 min" },
];

const faqs = [
  {
    q: "¿Cuántos litros tiene una piscina desmontable redonda?",
    a: "Calcula 3,14 × radio × radio × altura del agua, todo en metros, y multiplica por 1.000. Una de 366 cm de diámetro (radio 1,83 m) con el agua a 85 cm tiene 3,14 × 1,83 × 1,83 × 0,85 = 8,9 m³, unos 8.900 litros. Para dosificar productos y elegir depuradora, usa el dato del fabricante.",
  },
  {
    q: "¿Qué es mejor, una piscina redonda o rectangular?",
    a: "La redonda reparte la presión del agua por igual en toda la pared, por eso necesita menos refuerzos y suele montarse antes. La rectangular aprovecha mejor un hueco alargado. Si el hueco del jardín es más o menos cuadrado, la redonda encaja bien.",
  },
  {
    q: "¿Qué diferencia hay entre una Easy Set y una piscina tubular?",
    a: "La Easy Set (o de aro hinchable) no tiene estructura: se infla el aro superior y, al llenarla, el agua levanta la pared. Es la más rápida de montar. La tubular se sostiene con barras de acero, aguanta mejor el uso y alcanza más altura.",
  },
  {
    q: "¿Qué depuradora necesita una piscina redonda?",
    a: "Una que pase todo el volumen por el filtro en 4 a 6 horas: divide los litros entre 6 para el caudal mínimo y entre 4 para el recomendable. Para 9.150 litros salen entre unos 1.525 y 2.290 l/h.",
  },
  {
    q: "¿Qué tamaño de piscina redonda cabe en mi jardín?",
    a: "Mide el lado más corto del hueco y deja al menos medio metro libre alrededor para montar, moverte y colocar la depuradora y la escalera. Con un hueco de 4,7 × 4,7 m, la de 366 cm entra; la de 457 cm, no.",
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
    knowsAbout: ["piscinas desmontables", "depuradoras", "montaje e instalación de piscinas elevadas", "mantenimiento de piscinas desmontables"],
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
    { "@type": "ListItem", position: 3, name: "Piscina desmontable redonda", item: URL },
  ],
};

export default function PiscinaDesmontableRedondaPage() {
  const picks = quickPicks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
  const filas = tabla.flatMap((row) => availableBySlug([row.slug]).map((product) => ({ row, product })));
  const easySet = availableBySlug(["intex-28166-easy-set-457x107"])[0];
  const prism = availableBySlug(["intex-26726np-prism-frame-redonda-457x122"])[0];

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
          <span className="text-gray-600">Piscina desmontable redonda</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 27 octubre 2026 · Actualizado: 27 octubre 2026 · 8 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Una <strong>piscina desmontable redonda</strong> es la más sencilla de montar porque el agua empuja por igual sobre toda la pared. Elige el <strong>diámetro según el lado más corto del hueco</strong> (con medio metro libre alrededor), la altura según quién se va a bañar (76 cm para refrescarse, 100-122 cm para adultos) y una depuradora que <strong>renueve todo el agua en 4-6 horas</strong>. Si quieres montarla en minutos, aro hinchable; si buscas más altura y duración, tubular de acero.
            </p>
          </div>

          <p>
            Aquí hablamos solo de la forma redonda. Si tu hueco es alargado, tienes la guía de{" "}
            <Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">piscina desmontable rectangular</Link>, y si buscas sobre todo tamaño, la de{" "}
            <Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">piscinas desmontables grandes</Link>. Todos los modelos que citamos están en nuestra sección de{" "}
            <Link href="/tienda/piscinas-desmontables" className="text-sky-600 hover:underline">piscinas desmontables</Link>.
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
          <h2>Por qué elegir una redonda</h2>
          <p>
            En una piscina redonda el agua presiona por igual sobre toda la pared, así que la estructura no tiene esquinas que reforzar. Por eso las redondas son las que se montan más rápido (Intex calcula unos 10 minutos para su Easy Set de 305 cm, sin contar el llenado) y las que ofrecen más litros por euro en los tamaños pequeños y medianos.
          </p>
          <p>
            A cambio, <strong>ocupan un cuadrado</strong>: una de 366 cm de diámetro necesita un hueco de 3,66 × 3,66 m (13,4 m²) para dar 10,5 m² de agua. En un patio alargado y estrecho, una rectangular aprovecha mejor el espacio.
          </p>

          <h2>Aro hinchable o estructura tubular</h2>
          <ul>
            <li><strong>Aro hinchable (Easy Set).</strong> No tiene barras: se infla el aro superior y, al llenarla, el agua levanta la pared. Es la más rápida de montar y de guardar. Necesita un suelo especialmente plano, porque no hay estructura que corrija desniveles, y se llena menos en proporción a la altura de la pared (en los modelos de nuestra tabla, entre el 69 % y el 71 % del volumen bruto).</li>
            <li><strong>Tubular de acero (frame).</strong> Barras de acero con tratamiento antióxido que sujetan la lona. Aguanta mejor el uso, admite paredes más altas (hasta 122 cm en nuestra selección) y se llena más cerca del borde (entre el 81 % y el 87 % del volumen bruto en nuestra tabla).</li>
          </ul>

          <h2>Qué diámetro cabe en tu jardín</h2>
          <p>
            Mide el <strong>lado más corto</strong> del hueco y réstale al menos medio metro por cada lado para montar, moverte alrededor y colocar la depuradora y la escalera:
          </p>
          <ul>
            <li><strong>Hueco de 4,1 × 4,1 m:</strong> hasta 305 cm de diámetro.</li>
            <li><strong>Hueco de 4,7 × 4,7 m:</strong> hasta 366 cm.</li>
            <li><strong>Hueco de 5,6 × 5,6 m:</strong> hasta 457 cm.</li>
          </ul>

          <h2>Cómo calcular los litros</h2>
          <p>
            La fórmula es <strong>3,14 × radio × radio × altura del agua</strong>, en metros; el resultado en m³ se multiplica por 1.000. Usa la altura del agua, no la de la pared. Dos ejemplos con nuestros modelos:
          </p>
          <ul>
            <li><strong>Ø366 cm con el agua a 87 cm:</strong> 3,14 × 1,83 × 1,83 × 0,87 = 9,1 m³ → unos 9.100 litros (Bestway declara 9.150 L para su Steel Pro MAX de 366 × 100).</li>
            <li><strong>Ø457 cm con el agua a 1,02 m:</strong> 3,14 × 2,285 × 2,285 × 1,02 = 16,7 m³ → unos 16.700 litros (Intex declara 16.805 L para su Prism Frame de 457 × 122).</li>
          </ul>

          <h2>Altura y seguridad infantil</h2>
          <ul>
            <li><strong>76 cm:</strong> para refrescarse y para que jueguen niños que se manejan en el agua, siempre con un adulto delante.</li>
            <li><strong>100-107 cm:</strong> para familias; los adultos se bañan cómodos.</li>
            <li><strong>122 cm:</strong> para adultos y niños que nadan con soltura.</li>
          </ul>
          <p>
            Intex recomienda sus Easy Set y Prism Frame a partir de 6 años. Retira o bloquea la escalera cuando nadie vigila y recuerda que un cobertor no soporta el peso de un niño. Más detalles en la guía de{" "}
            <Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">escaleras para piscina desmontable</Link>.
          </p>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Qué caudal de depuradora necesitas</h2>
          <p>
            La referencia es que la depuradora pase <strong>todo el volumen de agua por el filtro en 4 a 6 horas</strong>: divide los litros entre 6 para el caudal mínimo y entre 4 para el recomendable.
          </p>
          <ul>
            <li><strong>3.853 litros</strong> (Intex Easy Set 305 × 76): entre 642 y 963 l/h. La suya, de 1.250 l/h, cumple con margen.</li>
            <li><strong>6.503 litros</strong> (Intex Prism Frame 366 × 76, sin depuradora): entre 1.084 y 1.626 l/h.</li>
            <li><strong>9.150 litros</strong> (Bestway Steel Pro MAX 366 × 100): entre 1.525 y 2.288 l/h. La suya, de 2.006 l/h, está dentro.</li>
            <li><strong>16.805 litros</strong> (Intex Prism Frame 457 × 122): entre 2.801 y 4.201 l/h. La suya, de 3.785 l/h, está dentro.</li>
          </ul>
          <p>
            Si tu piscina no trae depuradora, tienes la guía de{" "}
            <Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">depuradora para piscina pequeña</Link> y la de{" "}
            <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">depuradoras de piscina</Link>.
          </p>
        </div>

        <div className="prose">
          <h2>Comparativa de piscinas desmontables redondas</h2>
          <p>
            Las redondas de nuestra selección, de menor a mayor volumen. «Renovación» es el tiempo teórico que tarda la depuradora incluida en pasar todo el agua por el filtro (litros ÷ caudal nominal).
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Medidas</th>
                <th className="px-3 py-3 text-left">Litros</th>
                <th className="px-3 py-3 text-left">Depuradora y accesorios</th>
                <th className="px-3 py-3 text-left">Renovación</th>
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
                    <td className="px-3 py-3 text-gray-600 text-xs">{row.tipo}</td>
                    <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.medidas}</td>
                    <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.litros}</td>
                    <td className="px-3 py-3 text-gray-600 text-xs">{row.depuradora}</td>
                    <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{row.renovacion}</td>
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
          <h2>Terreno y nivelación</h2>
          <p>
            El agua pesa 1.000 kg por metro cúbico. La Prism Frame de 457 × 122 cm, con 16.805 litros sobre 16,4 m² de suelo, carga unos 1.025 kg por metro cuadrado. Por eso:
          </p>
          <ul>
            <li>Elige una zona plana, firme y sin pendiente. Si hay desnivel, se rebaja la parte alta; no se rellena la baja con tierra suelta.</li>
            <li>Retira piedras y raíces y pon un tapiz debajo.</li>
            <li>Comprueba el nivel en varias direcciones con una regla larga. En las de aro hinchable es aún más importante: sin estructura, un desnivel hace que el agua se vaya hacia un lado.</li>
            <li>No la montes en una terraza o azotea sin que un técnico confirme que el forjado soporta ese peso.</li>
          </ul>

          <h2>Comprar fuera de temporada</h2>
          <p>
            Octubre y noviembre son buen momento para elegir con calma y preparar el terreno durante el invierno. Si la vas a guardar hasta la primavera, mira también cómo{" "}
            <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cerrar la piscina para el invierno</Link> y la rutina de{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link>.
          </p>

          <h2>Nuestra valoración</h2>
          <ul>
            <li><strong>Para refrescarse con niños y montar en minutos:</strong> la Intex Easy Set de 305 × 76 cm.</li>
            <li><strong>Familia, tamaño medio:</strong> la Bestway Steel Pro MAX de 366 × 100 cm, con depuradora y escalera.</li>
            <li><strong>Set completo y mucha superficie:</strong> la Intex Easy Set de 457 × 107 cm.</li>
            <li><strong>Más agua y altura para adultos:</strong> la Intex Prism Frame de 457 × 122 cm.</li>
          </ul>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          {easySet && (
            <a
              href={offerUrl(primaryOffer(easySet)!)}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
            >
              Ver Intex Easy Set 457 × 107 →
            </a>
          )}
          {prism && (
            <a
              href={offerUrl(primaryOffer(prism)!)}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
            >
              Ver Intex Prism Frame 457 × 122 →
            </a>
          )}
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre piscinas desmontables redondas</h2>
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
            Fuentes: fichas de producto de Intex y Bestway en Amazon.es y de Intex en Decathlon (medidas, litros, caudal de depuradora, contenido del set, edad recomendada y tiempo de montaje), consultadas el 27 de octubre de 2026. Los porcentajes de volumen, las cargas por metro cuadrado y los tiempos de renovación son cálculos nuestros a partir de esos datos.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Piscinas desmontables redondas y rectangulares, escaleras y cubiertas de nuestra selección.</p>
          <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver piscinas desmontables →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">→ Piscina desmontable rectangular: cómo elegir</Link></li>
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes</Link></li>
            <li><Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">→ Depuradora para piscina pequeña</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/piscinas-desmontables" ctaText="Ver piscinas desmontables" />
      </div>
    </div>
    </>
  );
}
