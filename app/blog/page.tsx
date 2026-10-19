import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Guías de compra y análisis de productos",
  description:
    "Todos nuestros artículos sobre piscinas, jardín y terraza. Comparativas, análisis y guías de compra actualizadas.",
  alternates: { canonical: "https://www.guiadelpiscina.com/blog" },
  openGraph: {
    title: "Blog — Guías de compra y análisis de productos | Guía del Piscina",
    description: "Todos nuestros artículos sobre piscinas, jardín y terraza.",
    url: "https://www.guiadelpiscina.com/blog",
  },
};

const articles = [
  {
    href: "/mejores-depuradoras-piscina",
    img: "/images/blog/mejores-depuradoras-piscina.jpg",
    icon: "💧",
    title: "Depuradora de piscina: arena, cartucho o cristal, qué caudal necesitas y modelos recomendados",
    excerpt:
      "Arena, cartucho o cristal, cómo calcular el caudal según litros y horas, conexiones de 32 o 38 mm con Intex y Bestway, consumo, contralavado y comparativa.",
    date: "2026-10-18",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/robot-limpiafondos-piscina",
    icon: "🤖",
    title: "Mejores robots limpiafondos para piscina — Guía de compra",
    excerpt:
      "Guía de compra completa: qué robot elegir según el tamaño de tu piscina y tu presupuesto. Comparamos los modelos más populares.",
    date: "2025-05-20",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/bomba-calor-piscina",
    img: "/images/blog/bomba-calor-piscina.jpg",
    icon: "🌡️",
    title: "Bomba de calor para piscina: las mejores opciones y cómo elegir",
    excerpt:
      "Cómo elegir la bomba de calor perfecta, ahorro vs resistencia eléctrica y los mejores modelos del mercado.",
    date: "2025-06-01",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/piscina-desmontable-grande",
    icon: "🏊",
    title: "Mejores piscinas desmontables grandes — Guía de compra",
    excerpt:
      "Las piscinas desmontables más grandes y resistentes para disfrutar en familia este verano sin obras.",
    date: "2025-06-05",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/muebles-jardin-terraza",
    icon: "🪑",
    title: "Mejores muebles de jardín y terraza — Guía completa",
    excerpt:
      "Conjuntos de jardín, sillas, mesas y tumbonas. Los mejores muebles de exterior para cada presupuesto.",
    date: "2025-04-10",
    price: "",
    category: "Jardín",
  },
  {
    href: "/pergola-terraza",
    icon: "🏠",
    title: "Las mejores pérgolas para terraza y jardín",
    excerpt:
      "Pérgolas de aluminio, madera y bioclimáticas. Guía completa para elegir la pérgola perfecta para tu espacio exterior.",
    date: "2025-04-20",
    price: "",
    category: "Jardín",
  },
  {
    href: "/sistema-riego-automatico",
    icon: "🌱",
    title: "Sistemas de riego automático para jardín — Comparativa",
    excerpt:
      "Los mejores programadores, aspersores y sistemas de riego por goteo para mantener tu jardín siempre verde.",
    date: "2025-03-15",
    price: "",
    category: "Jardín",
  },
  {
    href: "/cesped-artificial-jardin",
    icon: "🌿",
    title: "Mejor césped artificial para jardín — Análisis y precios",
    excerpt:
      "Comparativa de césped artificial por densidad, altura y precio. Cuál elegir y cómo instalarlo correctamente.",
    date: "2025-03-28",
    price: "",
    category: "Jardín",
  },
  {
    href: "/agua-piscina-verde",
    img: "/images/blog/agua-piscina-verde.jpg",
    icon: "💚",
    title: "Agua de la piscina verde: causas y solución definitiva",
    excerpt:
      "¿El agua se ha puesto verde? Protocolo de choque paso a paso para recuperarla en 24-48 h y cómo evitar que vuelva a ocurrir.",
    date: "2025-07-05",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/ph-piscina",
    icon: "🧪",
    title: "pH piscina: valores ideales, cómo medirlo y corregirlo",
    excerpt:
      "Rango ideal de pH (7,2-7,6), cómo medirlo con tiras o medidor digital y cómo subir o bajar el pH de forma segura.",
    date: "2025-07-10",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/mantenimiento-piscina-desmontable",
    img: "/images/blog/mantenimiento-piscina-desmontable.jpg",
    icon: "🔧",
    title: "Mantenimiento piscina desmontable: guía paso a paso",
    excerpt:
      "Todo lo que necesitas para mantener tu piscina desmontable limpia: pH, cloro, filtro, limpieza y preparación para el invierno.",
    date: "2025-07-01",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/mejor-clorador-salino-piscina",
    img: "/images/blog/mejor-clorador-salino-piscina.jpg",
    icon: "🧂",
    title: "Mejor clorador salino para piscina — Guía completa",
    excerpt:
      "Los 3 mejores cloradores salinos para piscina desmontable: Intex, Bestway y Gre. Comparativa, instalación y mantenimiento.",
    date: "2025-07-15",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/escalera-piscina-desmontable",
    img: "/images/blog/escalera-piscina-desmontable.jpg",
    icon: "🪜",
    title: "Mejor escalera piscina desmontable — Guía de compra",
    excerpt:
      "Las 3 mejores escaleras para piscina desmontable. Comparativa Intex vs Bestway por altura, seguridad y precio.",
    date: "2025-07-15",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/cubierta-piscina-desmontable",
    img: "/images/blog/cubierta-piscina-desmontable.jpg",
    icon: "🏗️",
    title: "Mejor cubierta para piscina desmontable — Guía completa",
    excerpt:
      "Cobertores de invierno, solares y mantas térmicas para piscina desmontable. Qué tipo elegir según tu necesidad y presupuesto.",
    date: "2025-07-20",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/mejores-tumbonas-jardin",
    icon: "🌴",
    title: "Las mejores tumbonas de jardín — Comparativa y análisis",
    excerpt:
      "Análisis de las mejores tumbonas de jardín para piscina y terraza. Comparativa por material, comodidad y precio.",
    date: "2025-07-15",
    price: "",
    category: "Jardín",
  },
  {
    href: "/mejores-sombrillas-jardin",
    img: "/images/blog/mejores-sombrillas-jardin.jpg",
    icon: "☂️",
    title: "Las mejores sombrillas de jardín — Guía de compra",
    excerpt:
      "Las mejores sombrillas de jardín: de palo central y excéntricas para terraza y piscina. Guía de compra con precios y análisis.",
    date: "2025-07-20",
    price: "",
    category: "Jardín",
  },
  {
    href: "/mejor-manguera-riego-jardin",
    img: "/images/blog/mejor-manguera-riego-jardin.jpg",
    icon: "💦",
    title: "Mejor manguera de riego para jardín — Guía de compra",
    excerpt:
      "Las mejores mangueras extensibles y de calidad para jardín. Comparativa por longitud, material y precio.",
    date: "2025-07-15",
    price: "",
    category: "Jardín",
  },
  {
    href: "/piscina-desmontable-grande-adultos",
    icon: "🏊",
    title: "Mejores piscinas desmontables grandes para adultos",
    excerpt:
      "Las mejores piscinas desmontables grandes para adultos: Intex Ultra XTR y Bestway Power Steel. Comparativa completa.",
    date: "2025-07-20",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/cuanto-cloro-echar-piscina",
    img: "/images/blog/cuanto-cloro-echar-piscina.jpg",
    icon: "🧪",
    title: "¿Cuánto cloro echar en piscina? Dosis exactas por litros",
    excerpt:
      "Calcula exactamente cuánto cloro echar en tu piscina según sus litros: dosis de mantenimiento, choque y corrección. Guía práctica con tablas.",
    date: "2025-08-01",
    price: "",
    category: "Tratamiento del agua",
  },
  {
    href: "/floculante-piscina",
    img: "/images/blog/floculante-piscina.jpg",
    icon: "🧪",
    title: "Floculante para piscina: cuándo usarlo y cómo aplicarlo",
    excerpt:
      "Floculante líquido, en cartuchos o en pastillas: cuándo usarlo, diferencia con el clarificante, dosis del fabricante y paso a paso según tu filtro.",
    date: "2026-10-19",
    price: "",
    category: "Tratamiento del agua",
  },
  {
    href: "/algas-piscina",
    img: "/images/blog/algas-piscina.jpg",
    icon: "🧪",
    title: "Algas en la piscina: cómo eliminarlas y evitar que vuelvan",
    excerpt:
      "Identifica y elimina algas verdes, negras y mostaza de tu piscina paso a paso. Tratamiento de choque + prevención definitiva.",
    date: "2025-08-01",
    price: "",
    category: "Tratamiento del agua",
  },
  {
    href: "/como-abrir-piscina-temporada",
    img: "/images/blog/como-abrir-piscina-temporada.jpg",
    icon: "🔧",
    title: "Cómo abrir la piscina para el verano: guía completa paso a paso",
    excerpt:
      "Prepara tu piscina para la temporada en 7 pasos: revisión del equipo, limpieza, tratamiento del agua y puesta a punto. Checklist incluido.",
    date: "2025-08-01",
    price: "",
    category: "Mantenimiento",
  },
  // 23/09/2026: artículos de ago-sep 2026 que no figuraban en el listado + artículo nuevo del loop
  {
    href: "/como-cerrar-piscina-invierno",
    icon: "❄️",
    title: "Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026)",
    excerpt:
      "Tratamiento de choque, equilibrio químico, protección del equipo y elección de cubierta para cerrar tu piscina desmontable antes del invierno. Checklist incluido.",
    date: "2026-08-25",
    price: "",
    category: "Mantenimiento",
  },
  {
    href: "/invernaje-activo-o-pasivo-piscina",
    icon: "🧊",
    title: "Invernaje activo o pasivo en la piscina: cuál elegir y cómo hacerlo (2026)",
    excerpt:
      "Diferencias entre invernaje activo y pasivo, cuándo conviene cada uno según tu clima y equipo, y cómo hacerlo paso a paso.",
    date: "2026-08-30",
    price: "",
    category: "Mantenimiento",
  },
  {
    href: "/skimmer-piscina-automatico-solar",
    icon: "☀️",
    title: "Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026)",
    excerpt:
      "Diferencia entre el skimmer fijo y el robot skimmer solar de superficie, y cuándo compensa frente a limpiar solo con el robot de fondo.",
    date: "2026-09-05",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/aiper-scuba-se-analisis",
    icon: "🤖",
    title: "AIPER Scuba SE: análisis completo y opinión 2026",
    excerpt:
      "Autonomía, cobertura y comparativa del robot limpiafondos de entrada de AIPER frente a otros robots de nuestra selección.",
    date: "2026-09-08",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/gardena-flex-1890-20-analisis",
    icon: "💧",
    title: "GARDENA Flex 1890-20: análisis completo y opinión 2026",
    excerpt:
      "Función Water Now, instalación, alimentación y comparativa con otros programadores Gardena de nuestra selección.",
    date: "2026-09-08",
    price: "",
    category: "Jardín",
  },
  {
    href: "/como-elegir-programador-riego",
    icon: "⏲️",
    title: "Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026)",
    excerpt:
      "Temporizador mecánico, programador electrónico o sistema smart con app: qué necesitas según tu jardín, balcón o huerto, en 4 preguntas.",
    date: "2026-09-23",
    price: "",
    category: "Jardín",
  },
  {
    href: "/acido-cianurico-piscina",
    icon: "🧪",
    title: "Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026)",
    excerpt:
      "Qué es el estabilizador del cloro, qué valor mantener, qué cloros lo aportan y cómo corregir un exceso renovando agua. Con fórmula de cálculo.",
    date: "2026-10-07",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/alcalinidad-piscina",
    icon: "🧪",
    title: "Alcalinidad de la piscina: valor ideal, cómo subirla y cómo bajarla (2026)",
    excerpt:
      "Por qué el pH sube y baja sin control: la alcalinidad es el amortiguador. Rango ideal 80-120 mg/L, orden de ajuste y ejemplo de dosificación.",
    date: "2026-10-17",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/piscina-desmontable-rectangular",
    icon: "🏊",
    title: "Piscina desmontable rectangular: cómo elegir medidas, altura y depuradora",
    excerpt:
      "Rectangular o redonda, cómo calcular los litros de verdad, qué caudal de depuradora necesitas y comparativa de las rectangulares de nuestra selección.",
    date: "2026-10-18",
    price: "",
    category: "Piscinas",
  },
  {
    href: "/depuradora-piscina-pequena",
    icon: "💧",
    title: "Depuradora para piscina pequeña: qué caudal necesitas, cartucho o arena y modelos para menos de 10.000 litros",
    excerpt:
      "Caudal según los litros de tu piscina pequeña, cartucho o arena, conexiones de 32 mm, consumo y las depuradoras pequeñas de nuestra selección.",
    date: "2026-10-18",
    price: "",
    category: "Piscinas",
  },
  // 13/10/2026: guías de temporada (Black Friday, Navidad y Reyes)
  {
    href: "/black-friday-piscina-jardin",
    img: "/images/products/robots-limpiafondos.jpg",
    icon: "",
    title: "Black Friday 2026 en piscina y jardín: qué comprar en temporada baja",
    excerpt:
      "Invernaje, robots, depuradoras, bombas de calor, piscinas, muebles, pérgolas y riego: qué compensa comprar en noviembre, cómo elegir y qué evitar.",
    date: "2026-10-13",
    price: "",
    category: "Guías de temporada",
  },
  {
    href: "/regalos-navidad-piscina-jardin",
    img: "/images/products/muebles-jardin.jpg",
    icon: "",
    title: "Regalos de Navidad y Reyes para amantes del jardín y la piscina (2026)",
    excerpt:
      "Ideas de regalo por tipo de persona: descanso al aire libre, riego, tecnología, piscina desmontable y regalos para toda la familia.",
    date: "2026-10-13",
    price: "",
    category: "Guías de temporada",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.guiadelpiscina.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.guiadelpiscina.com/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500 mb-10">
          Guías de compra y análisis actualizados para esta temporada
        </p>
        <div className="grid grid-cols-1 gap-6">
          {articles.map((art) => (
            <Link
              key={art.href}
              href={art.href}
              className="flex flex-col sm:flex-row gap-4 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-sky-200 transition-all group"
            >
              {/* thumbnail image when available, else emoji icon */}
              <div className="shrink-0 w-24 h-20 sm:w-32 sm:h-24 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                {art.img ? (
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="text-5xl">{art.icon}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                    {art.category}
                  </span>
                </div>
                <h2 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                  {art.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{art.excerpt}</p>
                <time className="text-xs text-gray-400">{art.date}</time>
              </div>
              <div className="shrink-0 self-center">
                <span className="text-sky-600 font-semibold text-sm whitespace-nowrap">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
