import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Artículo 18/10/2026. Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Medidas, litros, caudales y contenido de cada set: fichas de Amazon.es consultadas el 18/10/2026 (y data/products.ts).
// Los porcentajes de volumen real/bruto y los tiempos de renovación están calculados a partir de esos datos.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const TITLE = "Piscina desmontable rectangular: medidas, litros y modelos";
const H1 = "Piscina desmontable rectangular: cómo elegir medidas, altura y depuradora";
const URL = "https://www.guiadelpiscina.com/piscina-desmontable-rectangular";
const DESCRIPTION =
  "Cómo elegir una piscina desmontable rectangular: litros bien calculados, altura, depuradora según el volumen, terreno, montaje y comparativa de modelos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "piscina desmontable rectangular, piscinas rectangulares desmontables, piscina rectangular desmontable, piscina desmontable con depuradora, piscinas desmontables grandes, piscinas desmontables 1,50 altura, litros piscina rectangular",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Rectangular o redonda, cuántos litros caben de verdad, qué depuradora necesitas y comparativa de las rectangulares de nuestra selección.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "intex-chevron-prism-frame-premium-400x200x100", note: "Para patios estrechos: un metro de altura en 8 m² de suelo, con depuradora y escalera." },
  { slug: "intex-55212-prism-frame-rectangular-488x244x107", note: "El set familiar más completo: depuradora, escalera, tapiz y cobertor en casi 5 metros de largo." },
  { slug: "bestway-steel-pro-max-rectangular-488x244x122", note: "La misma planta que la anterior con 122 cm de pared, para que los adultos se bañen con más agua." },
  { slug: "bestway-steel-pro-max-rectangular-640x274x132", note: "La más larga de la selección (6,40 m) y con depuradora de arena: la opción para dar unas brazadas." },
];

// Datos de la tabla: medidas y litros según el fabricante; el tiempo de renovación es litros ÷ caudal nominal.
const tabla = [
  { slug: "intex-26784np-prism-frame-rectangular-300x175x80", modelo: "Intex Prism Frame 300 × 175", medidas: "300 × 175 × 80 cm", litros: "3.539 L", depuradora: "Cartucho 2.006 l/h + escalera", renovacion: "≈ 1 h 45 min" },
  { slug: "intex-28272np-piscina-small-frame-300x200", modelo: "Intex Small Frame 300 × 200", medidas: "300 × 200 × 75 cm", litros: "3.834 L", depuradora: "No incluida", renovacion: "—" },
  { slug: "intex-chevron-prism-frame-premium-400x200x100", modelo: "Intex Chevron Prism Frame Premium", medidas: "400 × 200 × 100 cm", litros: "6.836 L", depuradora: "Cartucho 2.006 l/h + escalera", renovacion: "≈ 3 h 25 min" },
  { slug: "intex-28273np-piscina-small-frame-450x220", modelo: "Intex Small Frame 450 × 220", medidas: "450 × 220 × 84 cm", litros: "7.127 L", depuradora: "No incluida", renovacion: "—" },
  { slug: "intex-55212-prism-frame-rectangular-488x244x107", modelo: "Intex Prism Frame 488 × 244", medidas: "488 × 244 × 107 cm", litros: "10.874 L", depuradora: "Cartucho 3.785 l/h + escalera, tapiz y cobertor", renovacion: "≈ 2 h 50 min" },
  { slug: "bestway-steel-pro-max-rectangular-488x244x122", modelo: "Bestway Steel Pro MAX 488 × 244", medidas: "488 × 244 × 122 cm", litros: "11.532 L", depuradora: "Cartucho 3.028 l/h + escalera y cobertor", renovacion: "≈ 3 h 50 min" },
  { slug: "intex-26352np-ultra-frame", modelo: "Intex Ultra Frame 549 × 274", medidas: "549 × 274 × 132 cm", litros: "17.203 L", depuradora: "No incluida", renovacion: "—" },
  { slug: "intex-ultra-xtr-549x274-depuradora", modelo: "Intex Ultra XTR Frame 549 × 274", medidas: "549 × 274 × 132 cm", litros: "17.203 L", depuradora: "Arena + escalera, tapiz y cobertor", renovacion: "—" },
  { slug: "bestway-steel-pro-max-rectangular-640x274x132", modelo: "Bestway Steel Pro MAX 640 × 274", medidas: "640 × 274 × 132 cm", litros: "19.281 L", depuradora: "Arena 6.056 l/h + escalera y cubierta", renovacion: "≈ 3 h 10 min" },
];

const faqs = [
  {
    q: "¿Qué es mejor, una piscina desmontable rectangular o redonda?",
    a: "La rectangular aprovecha mejor un jardín o patio alargado y ofrece una línea recta más larga para bañarse. La redonda reparte la presión del agua por igual en toda la pared y suele montarse con una estructura más sencilla. Si el hueco es cuadrado, la redonda encaja bien; si es alargado o estrecho, la rectangular da más agua en el mismo espacio.",
  },
  {
    q: "¿Cuántos litros tiene una piscina desmontable rectangular?",
    a: "Multiplica largo × ancho × altura del agua en metros y el resultado por 1.000. Una de 400 × 200 cm llena hasta 85 cm tiene 4 × 2 × 0,85 = 6,8 m³, es decir, unos 6.800 litros. En los modelos de nuestra tabla, el volumen que declara el fabricante equivale a entre el 79 % y el 87 % del volumen bruto calculado con la altura de la pared.",
  },
  {
    q: "¿Hay piscinas desmontables rectangulares de 1,50 m de altura?",
    a: "En las gamas tubulares rectangulares de Intex y Bestway que hemos revisado, la pared más alta es de 1,32 m. Para buscar más profundidad hay que mirar piscinas de pared rígida (madera, composite o acero) o instalaciones semienterradas, y confirmar en la ficha del fabricante que ese modelo concreto lo permite.",
  },
  {
    q: "¿Qué depuradora necesita una piscina desmontable rectangular?",
    a: "Una que pase todo el volumen de agua por el filtro en 4 a 6 horas. Divide los litros entre 6 para el caudal mínimo y entre 4 para el recomendable: para 10.874 litros salen entre unos 1.800 y 2.700 l/h. Las de cartucho bastan en piscinas pequeñas y medianas; en las grandes, la de arena suele ser más cómoda de mantener.",
  },
  {
    q: "¿Necesito permiso para poner una piscina desmontable en una comunidad de vecinos?",
    a: "Depende de dónde vaya y de las normas de tu comunidad y de tu ayuntamiento, así que no hay una respuesta única. Antes de comprar, revisa los estatutos y normas de la comunidad, consulta al administrador si la piscina irá en una zona común o visible y, si va en una terraza o azotea, pide a un técnico que confirme que el forjado soporta el peso.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
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
    { "@type": "ListItem", position: 3, name: "Piscina desmontable rectangular", item: URL },
  ],
};

export default function PiscinaDesmontableRectangularPage() {
  const picks = quickPicks.flatMap((pk) => availableBySlug([pk.slug]).map((product) => ({ pk, product })));
  const filas = tabla.flatMap((row) => availableBySlug([row.slug]).map((product) => ({ row, product })));

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
          <span className="text-gray-600">Piscina desmontable rectangular</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 18 octubre 2026 · Actualizado: 18 octubre 2026 · 9 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Una <strong>piscina desmontable rectangular</strong> es la mejor opción cuando el hueco del jardín es alargado: aprovecha todo el espacio y da una línea recta más larga para bañarse. Para elegirla, calcula los litros con <strong>largo × ancho × altura del agua</strong>, escoge la altura según quién se va a bañar (de 75-84 cm para refrescarse a 122-132 cm para adultos) y asegúrate de que la depuradora <strong>renueva todo el agua en 4-6 horas</strong>.
            </p>
          </div>

          <p>
            Esta guía se centra en la forma rectangular: cuándo compensa frente a una redonda, cómo calcular bien sus litros y qué depuradora necesita cada tamaño. Si lo que buscas son sobre todo piscinas desmontables grandes, sea cual sea su forma, tienes la guía de{" "}
            <Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">piscinas desmontables grandes</Link> y la de{" "}
            <Link href="/piscina-desmontable-grande-adultos" className="text-sky-600 hover:underline">piscinas desmontables grandes para adultos</Link>. Todos los modelos que citamos están en nuestra sección de{" "}
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
          <h2>Rectangular o redonda: qué cambia de verdad</h2>
          <ul>
            <li>
              <strong>Uso del espacio.</strong> Una redonda de 366 cm de diámetro ocupa un cuadrado de 3,66 × 3,66 m (13,4 m²) para ofrecer 10,5 m² de agua. Una rectangular de 400 × 200 cm convierte en agua prácticamente todo lo que ocupa. En un patio de 4,5 × 2,5 m no cabe ninguna redonda de más de 2,5 m, pero sí una rectangular de 400 × 200.
            </li>
            <li>
              <strong>Nado.</strong> La rectangular ofrece la línea recta más larga: 6,40 m en la Bestway Steel Pro MAX de 640 × 274 cm. No es una piscina para entrenar, pero permite unas brazadas que en una redonda de tamaño parecido no caben.
            </li>
            <li>
              <strong>Estabilidad.</strong> En una redonda, el agua empuja por igual sobre toda la pared. En una rectangular, la estructura tiene que sujetar lados rectos, por eso lleva más apoyos: la Intex Prism Frame de 488 × 244 cm usa 12 contrafuertes de acero.
            </li>
          </ul>

          <h2>Tipos de estructura</h2>
          <ul>
            <li><strong>Tubular de acero (frame).</strong> Es la más habitual en rectangulares: Intex Small Frame, Prism Frame y Ultra XTR, o Bestway Steel Pro MAX. Barras de acero anticorrosión y lona de PVC de varias capas.</li>
            <li><strong>Paneles o pared rígida.</strong> Madera, composite o chapa de acero. Son más robustas y algunas admiten semienterrarse, pero pesan más, el montaje es más largo y en formato rectangular la oferta es menor.</li>
            <li><strong>Marco de madera.</strong> Una variante de pared rígida con mejor aspecto en el jardín. Suele pedir una base de hormigón o muy bien compactada; revisa en la ficha qué solera recomienda el fabricante.</li>
            <li><strong>Hinchable.</strong> Las rectangulares hinchables son pequeñas y bajas, pensadas para niños.</li>
          </ul>

          <h2>Medidas habituales y cómo calcular los litros</h2>
          <p>
            La fórmula es <strong>largo × ancho × altura del agua</strong>, todo en metros; el resultado son metros cúbicos y cada m³ son 1.000 litros. La clave está en usar la altura del agua y no la de la pared, porque la piscina nunca se llena hasta el borde. Tres ejemplos:
          </p>
          <ul>
            <li><strong>300 × 200 cm con el agua a 65 cm:</strong> 3 × 2 × 0,65 = 3,9 m³ → unos 3.900 litros (Intex declara 3.834 L para su Small Frame de 300 × 200 × 75).</li>
            <li><strong>400 × 200 cm con el agua a 85 cm:</strong> 4 × 2 × 0,85 = 6,8 m³ → unos 6.800 litros (Intex declara 6.836 L para su Chevron de 400 × 200 × 100).</li>
            <li><strong>549 × 274 cm con el agua a 1,15 m:</strong> 5,49 × 2,74 × 1,15 = 17,3 m³ → unos 17.300 litros (Intex declara 17.203 L para sus Ultra Frame y Ultra XTR).</li>
          </ul>
          <p>
            Si calculas con la altura de la pared obtienes el volumen bruto, que siempre sale de más. En los modelos de nuestra tabla, los litros que declara el fabricante equivalen a entre el 79 % y el 87 % de ese volumen bruto. Para dosificar cloro y elegir depuradora, usa el dato del fabricante.
          </p>

          <h2>Altura y seguridad infantil</h2>
          <ul>
            <li><strong>75-84 cm:</strong> para refrescarse y para que jueguen niños que ya se manejan en el agua, siempre con un adulto delante.</li>
            <li><strong>100-107 cm:</strong> el punto medio para familias; los adultos se bañan cómodos y los niños pequeños ya no hacen pie.</li>
            <li><strong>122-132 cm:</strong> para adultos y niños que nadan con soltura.</li>
          </ul>
          <p>
            Intex recomienda sus Prism Frame y Ultra XTR a partir de 6 años. En cualquier altura, retira o bloquea la escalera cuando nadie vigila: escaleras como la{" "}
            <Link href="/tienda/piscinas-desmontables/intex-28075-escalera-piscina-91-107cm" className="text-sky-600 hover:underline">Intex 28075</Link> tienen los peldaños exteriores extraíbles para eso. Un cobertor no es una cubierta de seguridad: no soporta el peso de un niño. Más detalles en la guía de{" "}
            <Link href="/escalera-piscina-desmontable" className="text-sky-600 hover:underline">escaleras para piscina desmontable</Link>.
          </p>
          <p>
            Sobre las <strong>piscinas desmontables de 1,50 m de altura</strong>: en las gamas tubulares rectangulares de Intex y Bestway que hemos revisado, la pared más alta es de 1,32 m. Para más profundidad hay que ir a pared rígida o a una instalación semienterrada, y comprobar que el fabricante la permite.
          </p>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Qué incluye cada set</h2>
          <p>
            Una <strong>piscina desmontable con depuradora</strong> puede traer solo depuradora y escalera o el set completo:
          </p>
          <ul>
            <li><strong>Depuradora de cartucho o de arena.</strong> La de cartucho es compacta y basta en piscinas pequeñas y medianas, pero el filtro se limpia a menudo y se cambia varias veces por temporada. La de arena aguanta más entre limpiezas (se hace un contralavado) y es la habitual en las grandes.</li>
            <li><strong>Escalera,</strong> a la altura de la pared.</li>
            <li><strong>Cobertor,</strong> para frenar hojas y suciedad. Si no viene, tienes opciones en la guía de <Link href="/cubierta-piscina-desmontable" className="text-sky-600 hover:underline">cubiertas para piscina desmontable</Link>.</li>
            <li><strong>Tapiz de suelo,</strong> que protege el fondo. Si no viene, cómpralo aparte.</li>
          </ul>

          <h2>Qué caudal de depuradora necesitas</h2>
          <p>
            La referencia es que la depuradora pase <strong>todo el volumen de agua por el filtro en 4 a 6 horas</strong>. El cálculo es sencillo: divide los litros de la piscina entre 6 para el caudal mínimo y entre 4 para el recomendable.
          </p>
          <ul>
            <li><strong>7.127 litros</strong> (una rectangular de 450 × 220 × 84 cm): entre 1.188 y 1.782 l/h.</li>
            <li><strong>10.874 litros</strong> (Intex Prism Frame 488 × 244): entre 1.812 y 2.719 l/h. La suya, de 3.785 l/h, va sobrada.</li>
            <li><strong>17.203 litros</strong> (Intex Ultra Frame 549 × 274, sin depuradora): entre 2.867 y 4.301 l/h.</li>
          </ul>
          <p>
            Al revés también funciona: litros ÷ caudal = horas para renovar el agua. Ten en cuenta que el caudal anunciado es el máximo de la bomba; con el filtro sucio rinde menos, así que conviene algo de margen. Si tu piscina no trae depuradora, tienes la comparativa de{" "}
            <Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">mejores depuradoras para piscina</Link>.
          </p>
        </div>

        <div className="prose">
          <h2>Comparativa de piscinas desmontables rectangulares</h2>
          <p>
            Las rectangulares de nuestra selección, de menor a mayor volumen. «Renovación» es el tiempo teórico que tarda la depuradora incluida en pasar todo el agua por el filtro (litros ÷ caudal nominal).
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Medidas</th>
                <th className="px-3 py-3 text-left">Litros</th>
                <th className="px-3 py-3 text-left">Depuradora y accesorios</th>
                <th className="px-3 py-3 text-left">Renovación</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {filas.map(({ row, product }, i) => (
                <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">
                    <Link href={`/tienda/${product.categorySlug}/${product.slug}`} className="hover:text-sky-700 hover:underline">{row.modelo}</Link>
                  </td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.medidas}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.litros}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{row.depuradora}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{row.renovacion}</td>
                  <td className="px-3 py-3">
                    <a
                      href={amazonLink(product.asin)}
                      target="_blank"
                      rel="nofollow noopener noreferrer sponsored"
                      className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
                    >
                      Amazon →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Terreno y nivelación</h2>
          <p>
            El agua pesa 1.000 kg por metro cúbico. Una rectangular de 549 × 274 cm con 17.203 litros carga unos 1.140 kg por cada metro cuadrado de suelo, y una de 640 × 274 cm, unos 1.100 kg. Por eso el terreno decide más que la propia piscina:
          </p>
          <ul>
            <li>Elige una zona plana, firme y sin pendiente. Si hay desnivel, se rebaja la parte alta; no se rellena la baja con tierra suelta.</li>
            <li>Retira piedras, raíces y restos que puedan pinchar la lona, y pon el tapiz encima.</li>
            <li>Comprueba el nivel con una regla larga y un nivel de burbuja en varias direcciones. La tolerancia exacta la marca el manual de cada fabricante; en una rectangular, un desnivel se nota más en los lados largos.</li>
            <li>No la montes en una terraza o azotea sin que un técnico confirme que el forjado soporta ese peso.</li>
          </ul>

          <h2>Montaje y permisos</h2>
          <p>
            Los fabricantes estiman tiempos de 45 minutos (Intex Chevron 400 × 200) a unos 60 minutos con 2 o 3 personas (Bestway Steel Pro MAX 488 × 244), sin contar la preparación del terreno ni el llenado. El llenado es lo que más tarda: con un grifo que dé 15 litros por minuto (mídelo con un cubo y un reloj), 17.203 litros son unas 19 horas.
          </p>
          <p>
            Sobre permisos no hay una regla única. En una comunidad de vecinos, revisa antes los estatutos y normas internas y consulta al administrador si la piscina irá en zona común o visible. Las dudas sobre licencias las resuelve tu ayuntamiento.
          </p>

          <h2>Comprar fuera de temporada</h2>
          <p>
            Octubre y noviembre son buen momento para elegir con calma: hay más disponibilidad de tamaños y modelos que en primavera, cuando los más buscados se agotan antes. Comprarla ahora te deja preparar y nivelar el terreno durante el invierno y tenerla montada antes del primer calor.
          </p>

          <h2>Invernaje: guardarla o dejarla montada</h2>
          <p>
            Si la desmontas, vacíala, limpia la lona, déjala secar del todo antes de plegarla y guárdala en un sitio seco y a cubierto. Si la dejas montada, necesita tratamiento de invierno y una cubierta adecuada. El paso a paso está en la guía de{" "}
            <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrar la piscina para el invierno</Link>, y la decisión entre mantener el agua tratada o parada, en{" "}
            <Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">invernaje activo o pasivo</Link>.
          </p>

          <h2>Nuestra valoración</h2>
          <ul>
            <li><strong>Patio pequeño o estrecho:</strong> la Intex Chevron de 400 × 200 × 100 cm da un metro de altura en 8 m².</li>
            <li><strong>Familia con niños:</strong> la Intex Prism Frame de 488 × 244 × 107 cm, por ser el set más completo.</li>
            <li><strong>Adultos que quieren más agua:</strong> la Bestway Steel Pro MAX de 488 × 244 × 122 cm.</li>
            <li><strong>Máxima longitud:</strong> la Bestway de 640 × 274 × 132 cm, con depuradora de arena.</li>
          </ul>
          <p>
            Para que el agua siga clara toda la temporada, repasa la rutina de{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link>.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B07FB8Y2FD")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver Intex Prism Frame 488 × 244 →
          </a>
          <a
            href={amazonLink("B0D9YVMTDY")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver Bestway Steel Pro MAX 488 × 244 →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre piscinas desmontables rectangulares</h2>
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
            Fuentes: fichas de producto de Intex y Bestway en Amazon.es (medidas, litros, caudal de depuradora, contenido del set y tiempos de montaje), consultadas el 18 de octubre de 2026. Los porcentajes de volumen, las cargas por metro cuadrado y los tiempos de renovación son cálculos nuestros a partir de esos datos.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Piscinas desmontables rectangulares y redondas, escaleras y cubiertas de nuestra selección.</p>
          <Link href="/tienda/piscinas-desmontables" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver piscinas desmontables →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">→ Mejores piscinas desmontables grandes</Link></li>
            <li><Link href="/piscina-desmontable-grande-adultos" className="text-sky-600 hover:underline">→ Piscinas desmontables grandes para adultos</Link></li>
            <li><Link href="/mejores-depuradoras-piscina" className="text-sky-600 hover:underline">→ Las mejores depuradoras para piscina</Link></li>
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
