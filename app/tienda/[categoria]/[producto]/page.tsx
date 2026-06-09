import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductsByCategory, getProductBySlug } from "@/data/products";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

// ── FAQs per category ─────────────────────────────────────────────────────────

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

// ── Helpers ───────────────────────────────────────────────────────────────────

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-xl ${s <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}>★</span>
      ))}
      <span className="font-bold text-gray-800 ml-1">{rating.toFixed(1)}</span>
      <span className="text-gray-500 text-sm">({count.toLocaleString()} opiniones)</span>
    </div>
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
  const amzLink = amazonLink(product.asin);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: product.name.split(" ")[0] },
    offers: {
      "@type": "Offer",
      url: amzLink,
      priceCurrency: "EUR",
      price: product.priceMin,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Amazon España" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
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
      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-sky-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/tienda" className="hover:text-sky-600">Tienda</Link>
        <span className="mx-2">/</span>
        <Link href={`/tienda/${categoria}`} className="hover:text-sky-600">{product.categoryName}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Heading */}
        <div className="mb-6">
          {product.badge && (
            <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mb-2">
              {product.badge}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {product.name} — Análisis y opinión 2025
          </h1>
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>

        {/* Primary CTA — above the fold */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-extrabold text-gray-900">{product.price}</p>
            <p className="text-sm text-gray-500">Precio en Amazon España</p>
          </div>
          <a
            href={amzLink}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors text-lg whitespace-nowrap"
          >
            Ver precio en Amazon →
          </a>
        </div>

        <AffiliateDisclosure />

        {/* Short description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{product.shortDescription}</p>

        {/* Specs table */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Especificaciones técnicas</h2>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 font-semibold text-gray-700 w-40">{key}</td>
                    <td className="py-3 px-4 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros and cons */}
        <section className="mb-8 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h2 className="font-bold text-green-800 mb-3">✅ Ventajas</h2>
            <ul className="space-y-2">
              {product.pros.map((pro) => (
                <li key={pro} className="flex gap-2 text-sm text-green-900">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h2 className="font-bold text-red-800 mb-3">❌ Desventajas</h2>
            <ul className="space-y-2">
              {product.cons.map((con) => (
                <li key={con} className="flex gap-2 text-sm text-red-900">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Full description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Análisis completo</h2>
          <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
        </section>

        {/* Bottom CTA */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900">{product.name}</p>
            <p className="text-2xl font-extrabold text-orange-600">{product.price}</p>
          </div>
          <a
            href={amzLink}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors text-lg whitespace-nowrap"
          >
            Ver precio en Amazon →
          </a>
        </div>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-gray-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Otros productos en {product.categoryName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/tienda/${rel.categorySlug}/${rel.slug}`}
                  className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all group"
                >
                  {rel.badge && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {rel.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 mt-1 mb-1 text-sm leading-snug group-hover:text-sky-600">
                    {rel.name}
                  </h3>
                  <p className="text-lg font-extrabold text-gray-900">{rel.price}</p>
                  <span className="text-xs text-sky-600 font-semibold mt-1 inline-block">Ver análisis →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
