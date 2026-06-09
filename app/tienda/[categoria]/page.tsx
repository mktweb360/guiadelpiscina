import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/data/products";
import { amazonLink } from "@/lib/amazon";

// ── Buying guides per category ────────────────────────────────────────────────

const buyingGuides: Record<string, { p1: string; p2: string; p3: string }> = {
  depuradoras: {
    p1: "La depuradora es el corazón de cualquier piscina. Su función principal es filtrar el agua para eliminar impurezas, algas y bacterias, manteniendo el agua cristalina y segura para el baño. A la hora de elegir, el parámetro más importante es el caudal: debe ser capaz de procesar todo el volumen de tu piscina en un máximo de 6 horas. Si tu piscina tiene 30.000 litros, necesitas al menos 5.000 l/h.",
    p2: "Existen dos tipos principales: de arena y de cartucho. Las de arena son más eficientes, duraderas y recomendadas para piscinas de más de 10.000 litros. Las de cartucho son más económicas y fáciles de mantener, pero ideales solo para piscinas pequeñas. La arena de sílex se cambia cada 3-5 años; el cartucho, varias veces por temporada.",
    p3: "En cuanto al consumo eléctrico, una depuradora de 0,75 CV consume aproximadamente 550 W/h. Programar su funcionamiento en horas de menor tarifa puede suponer un ahorro significativo a lo largo de la temporada. La mayoría de modelos incluyen temporizador. Recuerda limpiar el prefiltro (la cestilla) semanalmente para no forzar el motor.",
  },
  "robots-limpiafondos": {
    p1: "Un robot limpiafondos es la inversión que más calidad de vida aporta a los propietarios de piscina. En lugar de pasar la red manualmente cada 2-3 días, el robot se encarga de limpiar el fondo (y en modelos avanzados las paredes y la línea de agua) de forma completamente autónoma. El ciclo típico dura entre 2 y 3 horas.",
    p2: "Los modelos de entrada solo limpian el fondo, mientras que los de gama media-alta también suben paredes y limpian la línea de agua. Si tu piscina es rectangular y tiene el fondo plano, un modelo básico es suficiente. Si tiene formas irregulares, pendientes o paredes curvas, invierte en un modelo con tracción 4WD y cobertura completa.",
    p3: "Fíjate en la longitud del cable (debe superar la diagonal de tu piscina), el tamaño de los filtros (los más grandes retienen más suciedad entre limpiezas) y si la marca tiene recambios disponibles en España. Los modelos con app Wi-Fi permiten programar limpiezas automáticas y monitorizar el estado desde el móvil.",
  },
  "bombas-calor": {
    p1: "Una bomba de calor para piscina puede alargar la temporada de baño entre 4 y 8 semanas. Funciona extrayendo calor del aire ambiente (como un aire acondicionado reversible) y transfiriéndolo al agua. A diferencia de los calentadores eléctricos resistivos, son muy eficientes: el COP (coeficiente de rendimiento) indica cuántos kWh de calor produce por cada kWh consumido. Un COP de 5 significa 5 kWh de calor por 1 kWh eléctrico.",
    p2: "Para elegir la potencia adecuada, calcula el volumen de tu piscina en m³ y la diferencia de temperatura que deseas conseguir. Como referencia, para una piscina de 40 m³ que quieres mantener a 28°C cuando el exterior está a 15°C, necesitas unos 8-12 kW de potencia. Una bomba subdimensionada tardará días en calentar el agua y no podrá mantener la temperatura en días fríos.",
    p3: "Las bombas de calor requieren instalación eléctrica (normalmente trifásica para modelos grandes) y se colocan junto a la bomba de filtración. El nivel de ruido es importante si tienes vecinos cercanos: busca modelos por debajo de 55 dB. Los modelos Inverter adaptan su potencia a las condiciones y son más eficientes que los de velocidad fija.",
  },
  "muebles-jardin": {
    p1: "Elegir el mobiliario de jardín adecuado depende principalmente del material, el espacio disponible y el uso previsto. Los materiales más populares son el ratán sintético (estético, resistente a la lluvia, no requiere mantenimiento), el aluminio (ligero, no se oxida, muy duradero) y la madera de teca o acacia (más cálida visualmente, pero requiere tratamiento anual).",
    p2: "Para espacios reducidos, las tumbonas y sillas plegables son la mejor opción: se guardan fácilmente en invierno y ocupan poco espacio. Para terrazas grandes, un conjunto de sofás con mesa central crea un salón de exterior muy acogedor. Asegúrate de que los cojines incluidos sean resistentes al agua y tengan funda extraíble para lavarla.",
    p3: "Antes de comprar, mide bien tu espacio y ten en cuenta la circulación alrededor de los muebles. Para terrazas cubiertas, la mayoría de materiales son válidos. Para exteriores totalmente a la intemperie, prioriza aluminio o ratán sintético de alta densidad (mínimo 1,8 kg/m²) y comprueba que los tejidos tengan tratamiento UV.",
  },
  "piscinas-desmontables": {
    p1: "Las piscinas desmontables han evolucionado enormemente en los últimos años. Los modelos actuales de estructuras metálicas (marco de acero galvanizado o aluminio) con liner de triple capa pueden durar 10 o más temporadas si se cuidan correctamente. El primer paso es elegir el tamaño: para una familia de 4 personas, lo mínimo recomendable es 400x200 cm o redondas de Ø360 cm.",
    p2: "Antes de instalar, prepara bien el suelo: debe estar completamente nivelado (tolerancia máxima de 2 cm) y libre de piedras y raíces. Una lona de suelo protectora es indispensable para prolongar la vida del liner. La mayoría de modelos incluyen depuradora de arena, pero comprueba el caudal: para una piscina de 20.000 litros necesitas al menos 4.000 l/h.",
    p3: "El mantenimiento del agua es crucial. Mide el pH cada 2-3 días (ideal: 7,2-7,6) y añade cloro o sal según el sistema elegido. Una cubierta solar de verano mantiene la temperatura y reduce el consumo de productos químicos hasta un 50%. Al final de temporada, desmonta la piscina cuando el agua baje de 15°C para evitar que el liner se agriete.",
  },
  pergolas: {
    p1: "Una pérgola transforma cualquier terraza o jardín en un espacio habitable y protegido del sol. Los materiales más comunes son el aluminio (sin mantenimiento, muy duradero, disponible en muchos colores RAL), la madera (más cálida y natural, requiere tratamiento cada 2-3 años) y el acero galvanizado (más económico pero más pesado).",
    p2: "Las pérgolas bioclimáticas con lamas orientables son la opción más versátil: permiten regular la entrada de luz girando las lamas y en algunos modelos incluyendo LED y sistema de cierre total. Su precio es mayor, pero el confort que aportan justifica la inversión para quien utiliza la terraza habitualmente.",
    p3: "Antes de comprar, verifica si necesitas licencia de obra en tu municipio (las pérgolas adosadas a la vivienda suelen requerirla). Mide cuidadosamente el espacio y ten en cuenta la carga de nieve si vives en zonas con inviernos nevados. La mayoría de fabricantes ofrecen instalación profesional; para estructuras grandes, es muy recomendable contratarla.",
  },
  "riego-automatico": {
    p1: "Un sistema de riego automático puede reducir el consumo de agua hasta un 50% respecto al riego manual, además de asegurar que las plantas reciben exactamente la cantidad de agua que necesitan en el momento óptimo. Los sistemas modernos incluyen sensores de lluvia y conexión a previsiones meteorológicas para evitar regar cuando no es necesario.",
    p2: "Para jardines pequeños y macetas, los temporizadores de grifo básicos son suficientes. Para jardines medianos con varias zonas, un programador multicanal con electroválvulas permite regar cada zona de forma independiente. Para jardines grandes o instalaciones profesionales, los sistemas domóticos con app ofrecen control total desde el móvil.",
    p3: "El tipo de emisor es tan importante como el controlador: el riego por goteo es el más eficiente para árboles y arbustos; los aspersores emergentes son idóneos para céspedes; el riego de borbotón funciona bien en huertos y plantaciones. Combinar varios tipos en la misma instalación, controlados por zonas independientes, es la solución más completa.",
  },
  "cesped-artificial": {
    p1: "El césped artificial de última generación es prácticamente indistinguible del natural a simple vista. Los modelos premium utilizan fibras de polietileno de alta densidad con diferentes tonalidades de verde y marrón para imitar la variedad de colores del césped natural. La altura de las fibras más habitual para jardín y terraza es 30-40 mm; para decoración interior o balcones, 20-25 mm.",
    p2: "La instalación es el factor clave para un buen resultado. El suelo debe estar bien compactado y nivelado. En jardines, se recomienda retirar la capa de tierra vegetal, instalar una lámina antimaleza, una base de zahorra compactada y luego fijar el césped. En terrazas, basta con limpiar bien la superficie y fijar con adhesivo de doble cara o grapas.",
    p3: "El mantenimiento es mínimo pero necesario: cepilla el césped con un rastrillo de plástico cada pocas semanas para mantener las fibras erguidas, especialmente en zonas de paso. Retira las hojas caídas y enjuaga con agua si hay manchas. Con una instalación correcta y el mantenimiento básico, la vida útil supera los 10 años.",
  },
};

// ── Related articles per category ─────────────────────────────────────────────

const relatedArticles: Record<string, { href: string; title: string }[]> = {
  depuradoras: [{ href: "/mejores-depuradoras-piscina", title: "Las 5 mejores depuradoras para piscina en 2025" }],
  "robots-limpiafondos": [{ href: "/robot-limpiafondos-piscina", title: "Mejores robots limpiafondos para piscina 2025" }],
  "bombas-calor": [{ href: "/bomba-calor-piscina", title: "Bomba de calor para piscina: las mejores opciones" }],
  "muebles-jardin": [{ href: "/muebles-jardin-terraza", title: "Muebles de jardín y terraza: guía de compra 2025" }],
  "piscinas-desmontables": [{ href: "/piscina-desmontable-grande", title: "Mejores piscinas desmontables grandes 2025" }],
  pergolas: [{ href: "/pergola-terraza", title: "Las mejores pérgolas para terraza y jardín 2025" }],
  "riego-automatico": [{ href: "/sistema-riego-automatico", title: "Sistemas de riego automático: guía completa 2025" }],
  "cesped-artificial": [{ href: "/cesped-artificial-jardin", title: "Césped artificial para jardín: los mejores modelos 2025" }],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
      <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} — Guía de compra y comparativa 2025 | Guía del Piscina`,
    description: `Comparativa de los mejores productos de ${cat.name.toLowerCase()}. Analizamos calidad, precio y opiniones para ayudarte a elegir.`,
    alternates: { canonical: `https://www.guiadelpiscina.com/tienda/${categoria}` },
    openGraph: {
      title: `${cat.name} — Guía de compra 2025`,
      description: cat.description,
      url: `https://www.guiadelpiscina.com/tienda/${categoria}`,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) notFound();

  const catProducts = getProductsByCategory(categoria);
  const guide = buyingGuides[categoria];
  const articles = relatedArticles[categoria] ?? [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
      { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.guiadelpiscina.com/tienda" },
      { "@type": "ListItem", position: 3, name: cat.name, item: `https://www.guiadelpiscina.com/tienda/${categoria}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500">
        <Link href="/" className="hover:text-sky-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/tienda" className="hover:text-sky-600">Tienda</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">{cat.name}</span>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-10 px-4 border-b border-sky-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{cat.icon}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {cat.name} — Guía de compra y comparativa 2025
            </h1>
          </div>
          <p className="text-gray-600 mt-2">{cat.description} · {catProducts.length} productos analizados</p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catProducts.map((product) => (
              <div key={product.slug} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  {product.badge && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h2 className="font-bold text-gray-900 mb-2 leading-snug">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-3 flex-grow">{product.shortDescription}</p>
                <StarRating rating={product.rating} />
                <p className="text-xs text-gray-400 mt-0.5">{product.reviewCount.toLocaleString()} opiniones</p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
                  <div className="flex gap-2">
                    <Link
                      href={`/tienda/${categoria}/${product.slug}`}
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                    >
                      Ver análisis →
                    </Link>
                    <a
                      href={amazonLink(product.asin)}
                      target="_blank"
                      rel="nofollow noopener noreferrer sponsored"
                      className="text-sm font-semibold bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Amazon →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying guide */}
      {guide && (
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guía de compra: cómo elegir {cat.name.toLowerCase()}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{guide.p1}</p>
              <p>{guide.p2}</p>
              <p>{guide.p3}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {articles.length > 0 && (
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Artículos relacionados</h2>
            <ul className="space-y-2">
              {articles.map((art) => (
                <li key={art.href}>
                  <Link href={art.href} className="text-sky-600 hover:underline font-medium">
                    {art.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
