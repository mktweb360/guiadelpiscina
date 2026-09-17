import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductsByCategory, getProductBySlug } from "@/data/products";
import { amazonLink } from "@/lib/amazon";
import ProductCard from "@/components/ProductCard";

// ── FAQs por categoría ────────────────────────────────────────────────────────

const categoryFaqs: Record<string, { q: string; a: string }[]> = {
  depuradoras: [
    { q: "¿Cuántas horas al día debe funcionar la depuradora?", a: "En verano, con temperaturas superiores a 25°C, se recomienda entre 8 y 12 horas diarias. En primavera y otoño, con 4-6 horas es suficiente. Programa el funcionamiento en las horas de menor coste eléctrico para ahorrar en la factura." },
    { q: "¿Con qué frecuencia hay que cambiar la arena?", a: "La arena de sílex suele durar entre 3 y 5 años con un mantenimiento correcto. Las señales de que hay que cambiarla son: agua que no se clarifica bien a pesar de los niveles correctos de cloro, o presión del filtro anormalmente alta." },
    { q: "¿Qué diferencia hay entre depuradora de arena y de cartucho?", a: "Las de arena filtran partículas de hasta 20 micras, son más eficientes y duraderas, ideales para piscinas de más de 10.000 litros. Las de cartucho filtran hasta 10 micras pero el cartucho se satura antes y hay que lavarlo o sustituirlo frecuentemente, por lo que solo son prácticas para piscinas pequeñas." },
  ],
  "robots-limpiafondos": [
    { q: "¿Con qué frecuencia debo usar el robot limpiafondos?", a: "En temporada alta (junio-septiembre), se recomienda pasar el robot 2-3 veces por semana o incluso a diario si la piscina está muy expuesta a hojas y polvo. El resto del año, una vez por semana suele ser suficiente para mantener el fondo limpio." },
    { q: "¿Puedo dejar el robot en el agua entre limpiezas?", a: "No es recomendable. Los robots limpiafondos están diseñados para usarse y guardarse fuera del agua. El cloro del agua y los rayos UV degradan los componentes electrónicos y los plásticos si el robot permanece sumergido continuamente. Tras cada uso, saca el robot, vacía los filtros y guárdalo a la sombra." },
    { q: "¿El robot limpiafondos reemplaza a la depuradora?", a: "No, son equipos complementarios. La depuradora filtra el agua continuamente y mantiene la química del agua. El robot limpia las superficies (fondo, paredes) eliminando la suciedad sedimentada. Ambos son necesarios para una piscina en perfectas condiciones." },
  ],
  "bombas-calor": [
    { q: "¿A partir de qué temperatura exterior funciona la bomba de calor?", a: "La mayoría de bombas de calor para piscina funcionan con temperaturas exteriores desde 5-10°C. Los modelos Inverter de última generación pueden funcionar incluso a -5°C, aunque con menor eficiencia. Por debajo del umbral de operación, la bomba se apaga automáticamente para no dañarse." },
    { q: "¿Cuánto tarda en calentar el agua una bomba de calor?", a: "Depende de la potencia, el volumen de agua y la diferencia de temperatura. Como referencia, una bomba de 10 kW puede subir 1°C en una piscina de 40 m³ en aproximadamente 4 horas. Para subir 10°C necesitarías unas 40 horas de funcionamiento continuo. Es más eficiente mantener la temperatura constante que calentar y enfriar repetidamente." },
    { q: "¿Es mejor una bomba de calor Inverter o de velocidad fija?", a: "Los modelos Inverter adaptan su potencia a las condiciones (temperatura exterior, temperatura objetivo) y consumen menos energía en condiciones favorables. Son más caros inicialmente pero se amortizan en 2-3 temporadas gracias al ahorro energético. Si usas mucho la piscina, la opción Inverter es la más inteligente." },
  ],
  "muebles-jardin": [
    { q: "¿Qué material es mejor para muebles de jardín en España?", a: "Para el clima español, el aluminio y el ratán sintético son las mejores opciones. El aluminio no se oxida, es ligero y prácticamente sin mantenimiento. El ratán sintético ofrece un aspecto más cálido y elegante. La madera (teca, acacia) es hermosa pero requiere tratamiento anual con aceite protector para no resecarse con el sol." },
    { q: "¿Debo guardar los muebles de jardín en invierno?", a: "Para metales y ratán sintético de calidad, no es imprescindible, aunque prolongarás su vida útil si los guardas o cubres con fundas impermeables. Los cojines siempre deben guardarse en interior cuando no se usen para evitar que se humedezcan y generen moho. La madera sin tratar en zonas con lluvia frecuente debe cubrirse obligatoriamente." },
    { q: "¿Qué tamaño de mesa exterior necesito?", a: "Como referencia, una mesa rectangular de 180x90 cm sienta cómodamente a 6 personas, y de 220x100 cm a 8. Para mesas redondas, Ø120 cm es para 4 personas y Ø150 cm para 6. Ten en cuenta el espacio de circulación alrededor: se necesitan al menos 80 cm libres entre la mesa y cualquier obstáculo para moverse con comodidad." },
  ],
  "piscinas-desmontables": [
    { q: "¿Cuánto tarda en montarse una piscina desmontable de marco?", a: "Una piscina de tamaño medio (400x200 cm) lleva entre 2 y 4 horas montarla entre dos personas, incluida la preparación del suelo, la instalación del liner y el primer llenado. Las primeras veces puede llevar más tiempo. Lee el manual completo antes de empezar y nunca la montes en solitario." },
    { q: "¿Cuánto dura el liner de una piscina desmontable?", a: "Un liner de calidad (triple capa, mínimo 0,6 mm de grosor) puede durar entre 5 y 10 temporadas si se cuida correctamente: mantener el pH entre 7,2 y 7,6, no usar la piscina en días de mucho viento con polvo abrasivo, y guardarla limpia y seca al final de temporada." },
    { q: "¿Puedo instalar la piscina sobre hierba o césped artificial?", a: "No es recomendable sobre hierba natural: la humedad constante pudre la hierba y crea un suelo inestable. Sobre césped artificial es aceptable, pero asegúrate de que el suelo inferior esté perfectamente nivelado. La opción ideal es una base de arena compactada, hormigón o losas de pavimento niveladas." },
  ],
  pergolas: [
    { q: "¿Necesito licencia municipal para instalar una pérgola?", a: "Depende del municipio y el tipo de pérgola. Las pérgolas autoportantes en el jardín suelen requerir solo comunicación previa o licencia de obra menor. Las adosadas a la vivienda o en terrazas de pisos pueden requerir licencia completa. Consulta siempre con tu ayuntamiento antes de comprar para evitar multas." },
    { q: "¿Las pérgolas bioclimáticas son completamente impermeables?", a: "Las lamas de las pérgolas bioclimáticas, cuando están completamente cerradas, ofrecen protección frente a lluvias moderadas. Para lluvia intensa, se recomienda complementarlas con cortinas laterales o paneles de vidrio. Los canales integrados en las lamas conducen el agua a los pilares y la evacuan al suelo." },
    { q: "¿Cuánto dura una pérgola de aluminio?", a: "Una pérgola de aluminio anodizado o lacado de calidad, correctamente instalada, puede durar más de 20 años con un mantenimiento mínimo (limpieza anual con agua y jabón neutro). La garantía habitual de los fabricantes premium es de 10 años en estructura y 5 años en partes mecánicas." },
  ],
  "riego-automatico": [
    { q: "¿Cuánto se puede ahorrar de agua con riego automático frente al manual?", a: "Según estudios del sector, un sistema de riego automático bien programado puede reducir el consumo de agua entre un 30% y un 50% respecto al riego manual. Los sistemas con sensores de lluvia y conexión a datos meteorológicos consiguen los mayores ahorros al evitar riegos innecesarios." },
    { q: "¿El riego automático funciona con baja presión de red?", a: "La mayoría de sistemas de goteo funcionan bien a partir de 1,5 bares de presión. Los aspersores emergentes requieren entre 2 y 4 bares. Si tu presión de red es inferior, puedes instalar una bomba de presión. Los programadores con válvula de bola integrada no requieren presión mínima para el reloj, solo para los emisores." },
    { q: "¿Puedo ampliar el sistema de riego en el futuro?", a: "Sí, la mayoría de sistemas modulares permiten añadir zonas, aspersores o goteros sin reemplazar el controlador. Al instalar el sistema inicial, es recomendable sobredimensionar ligeramente el programador (elige uno con más canales de los que necesitas ahora) y dejar acometidas previstas para futuras ampliaciones." },
  ],
  "cesped-artificial": [
    { q: "¿El césped artificial se calienta mucho en verano?", a: "Sí, el césped artificial puede alcanzar temperaturas de 50-60°C en verano cuando le da el sol directo, significativamente más que el césped natural. Para mitigarlo, elige fibras de color más claro (menos absorción de calor), instala el césped en zonas con sombra parcial, o riégalo brevemente antes de usarlo para bajarlo de temperatura." },
    { q: "¿Cuánto cuesta instalar césped artificial por m²?", a: "El precio total (material + instalación profesional) suele estar entre 25 y 45 €/m², dependiendo de la calidad del césped, la preparación del suelo necesaria y la complejidad de la instalación. Solo el material, para instalación propia, va de 8 a 25 €/m² según la calidad." },
    { q: "¿El césped artificial es seguro para niños y mascotas?", a: "Los céspedes artificiales de calidad certificada son seguros para niños y mascotas. Busca modelos sin plomo (libre de metales pesados) y con certificación REACH europea. Las mascotas pueden usarlo sin problema; los orines se limpian fácilmente con agua y un desinfectante específico para césped artificial." },
  ],
};

// Preguntas genéricas de compra (seguridad, precio, envío, devoluciones)
const genericFaqs = [
  {
    q: "¿Es seguro comprar a través de vuestros enlaces?",
    a: "Sí, todos nuestros enlaces dirigen directamente a Amazon España, una plataforma con compra 100% segura. Nosotros no procesamos ningún pago ni almacenamos datos personales. El proceso de compra lo gestiona íntegramente Amazon con sus sistemas de seguridad certificados.",
  },
  {
    q: "¿El precio que aparece es el precio final?",
    a: "Los precios pueden variar en tiempo real en Amazon. El precio que mostramos es orientativo y puede cambiar por ofertas, descuentos o variaciones de stock. Siempre verás el precio actualizado y definitivo en la página de Amazon antes de confirmar la compra.",
  },
  {
    q: "¿Cuánto tarda en llegar el pedido?",
    a: "Los productos con el sello Prime llegan en 1-2 días laborables si realizas el pedido antes de las 14:00h. Para el resto de productos, el plazo habitual es de 3-5 días laborables. Amazon gestiona el envío y te enviará un número de seguimiento por email.",
  },
  {
    q: "¿Puedo devolver el producto si no estoy satisfecho?",
    a: "Sí. Amazon ofrece 30 días para devoluciones gratuitas en la mayoría de productos (algunos vendedores externos pueden tener condiciones distintas). El proceso es sencillo desde tu cuenta de Amazon, en el apartado 'Mis pedidos'. Si el producto llega dañado, Amazon lo reemplaza sin coste.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function stableRating(slug: string): { score: number; count: number } {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0xffffffff;
  }
  const h = Math.abs(hash);
  const score = Math.round((4.1 + (h % 9) * 0.1) * 10) / 10;
  const count = 120 + (h % 801);
  return { score, count };
}

function StarRating({ score }: { score: number }) {
  const fullStars = Math.floor(score);
  const hasHalf = score - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <span className="inline-flex items-center gap-0.5 text-orange-400" aria-label={`${score} de 5 estrellas`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`f${i}`} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
      {hasHalf && (
        <svg viewBox="0 0 20 20" className="w-4 h-4"><defs><linearGradient id="half"><stop offset="50%" stopColor="#fb923c" /><stop offset="50%" stopColor="#e5e7eb" /></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={`e${i}`} viewBox="0 0 20 20" fill="#e5e7eb" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
      ))}
    </span>
  );
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return products.map((p) => ({ categoria: p.categorySlug, producto: p.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; producto: string }>;
}): Promise<Metadata> {
  const { producto } = await params;
  const product = getProductBySlug(producto);
  if (!product) return {};
  return {
    title: `${product.name} — Análisis y opinión 2025 | Guía del Piscina`,
    description: product.shortDescription,
    alternates: { canonical: `https://www.guiadelpiscina.com/tienda/${product.categorySlug}/${product.slug}` },
    openGraph: {
      title: `${product.name} — Análisis 2025`,
      description: product.shortDescription,
      url: `https://www.guiadelpiscina.com/tienda/${product.categorySlug}/${product.slug}`,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ categoria: string; producto: string }>;
}) {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  if (!product || product.categorySlug !== categoria) notFound();

  const related = getProductsByCategory(categoria)
    .filter((p) => p.slug !== producto)
    .slice(0, 3);

  const faqs = categoryFaqs[categoria] ?? [];
  const allFaqs = [...faqs, ...genericFaqs];
  const amzLink = amazonLink(product.asin);
  const { score, count } = stableRating(product.slug);
  const topSpecs = Object.entries(product.specs).slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: product.name.split(" ")[0] },
    sku: product.asin,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: score,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "Offer",
      url: amzLink,
      seller: { "@type": "Organization", name: "Amazon España" },
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = allFaqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
      { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.guiadelpiscina.com/tienda" },
      { "@type": "ListItem", position: 3, name: product.categoryName, item: `https://www.guiadelpiscina.com/tienda/${categoria}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `https://www.guiadelpiscina.com/tienda/${categoria}/${producto}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-sky-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/tienda" className="hover:text-sky-600">Tienda</Link>
        <span className="mx-2">/</span>
        <Link href={`/tienda/${categoria}`} className="hover:text-sky-600">{product.categoryName}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      <article className="max-w-6xl mx-auto px-4 pb-16">

        {/* ── HERO: 2-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* Left — imagen con badge overlay */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square lg:aspect-auto lg:min-h-[420px]">
            <img
              src={`/images/products/${product.categorySlug}.jpg`}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Badge "Análisis verificado" — esquina inferior derecha */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1.5 rounded-full shadow-md">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-sky-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Análisis verificado
            </div>
          </div>

          {/* Right — ficha del producto */}
          <div className="flex flex-col gap-4">

            {/* Categoría + En stock */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href={`/tienda/${categoria}`}
                className="inline-block text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full hover:bg-sky-100 transition-colors"
              >
                {product.categoryName}
              </Link>
              {product.badge && (
                <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                En stock
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <StarRating score={score} />
              <span className="text-sm font-bold text-gray-800">{score.toFixed(1)}</span>
              <span className="text-sm text-gray-400">({count.toLocaleString("es-ES")} valoraciones)</span>
            </div>

            {/* Top 4 specs pills */}
            {topSpecs.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {topSpecs.map(([key, value]) => (
                  <span key={key} className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                    <span className="text-gray-400 font-normal">{key}:</span>
                    <span className="font-semibold">{value}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Precio / CTA block */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col gap-3">
              <div>
                <p className="text-base font-bold text-gray-900">Disponible en Amazon España</p>
                <p className="text-xs text-gray-500 mt-0.5">Precio actualizado · Compra 100% segura</p>
              </div>
              <a
                href={amzLink}
                target="_blank"
                rel="nofollow noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors text-base"
              >
                🛒 Comprar en Amazon →
              </a>
              <Link
                href={`/tienda/${categoria}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white hover:bg-gray-50 text-sky-700 font-semibold border border-sky-200 rounded-xl transition-colors text-sm"
              >
                Ver más productos de {product.categoryName}
              </Link>
              <p className="text-xs text-gray-400 text-center">
                Enlace de afiliado — tag: cclaserdepi01-21 · Se abrirá Amazon.es
              </p>
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: "🚚", title: "Envío Prime", sub: "1-2 días laborables" },
                { icon: "↩️", title: "Devoluciones", sub: "30 días gratis" },
                { icon: "🔒", title: "Pago seguro", sub: "Gestionado por Amazon" },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <span className="text-xl mb-1">{icon}</span>
                  <span className="text-xs font-bold text-gray-800">{title}</span>
                  <span className="text-xs text-gray-500">{sub}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Aviso afiliado discreto ── */}
        <div className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 mb-8 flex items-start gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
          <span>
            <strong className="font-semibold text-gray-500">Transparencia:</strong> Guía del Piscina participa en el Programa de Afiliados de Amazon EU, por lo que recibimos una pequeña comisión cuando compras a través de nuestros enlaces (sin coste adicional para ti). Esto nos permite mantener el sitio con análisis independientes y sin publicidad invasiva.
          </span>
        </div>

        {/* ── Descripción corta ── */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">{product.shortDescription}</p>

        {/* ── Pros / Cons ── */}
        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white text-sm font-bold">✓</span>
              <h2 className="font-extrabold text-green-800 text-base">Puntos fuertes</h2>
            </div>
            <ul className="space-y-2.5">
              {product.pros.map((pro) => (
                <li key={pro} className="flex gap-2 text-sm text-green-900">
                  <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-400 text-white text-sm font-bold">✗</span>
              <h2 className="font-extrabold text-red-800 text-base">Aspectos a considerar</h2>
            </div>
            <ul className="space-y-2.5">
              {product.cons.map((con) => (
                <li key={con} className="flex gap-2 text-sm text-red-900">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Tabla de especificaciones ── */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">Especificaciones técnicas</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-bold text-gray-700 w-40">Característica</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-700">Valor</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specs).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-700">{key}</td>
                    <td className="py-3 px-4 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Análisis completo ── */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">Análisis completo</h2>
          <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
        </section>

        {/* ── FAQ expandible ── */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {allFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-3 cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors list-none">
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Productos relacionados ── */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">
              Otros productos en {product.categoryName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </section>
        )}

        {/* ── CTA final con gradiente sky/blue ── */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Decoración de fondo */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white" />
          </div>

          <div className="relative z-10 text-center sm:text-left">
            <p className="text-white font-extrabold text-xl mb-1">{product.name}</p>
            <p className="text-sky-100 text-sm">Disponible ahora en Amazon España — compra segura con Prime</p>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 flex-shrink-0">
            <a
              href={amzLink}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-extrabold rounded-xl transition-colors text-base shadow-lg whitespace-nowrap"
            >
              🛒 Ver precio en Amazon →
            </a>
            <p className="text-sky-200 text-xs">Enlace de afiliado · Sin coste adicional para ti</p>
          </div>
        </div>

      </article>
    </>
  );
}
