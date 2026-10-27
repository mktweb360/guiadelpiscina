import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import { primaryOffer, offerUrl } from "@/lib/affiliate";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";
import BlogSidebar from "@/components/BlogSidebar";
import GuideProductPick, { availableBySlug } from "@/components/GuideProductPick";

// Reescrita y ampliada el 18/10/2026 (mismo slug). Sin precios ni valoraciones de Amazon (cumplimiento Amazon Associates).
// Caudales, volúmenes máximos, potencias, cargas filtrantes y diámetros de conexión: fichas de Amazon.es consultadas el 18/10/2026
// (y data/products.ts). Los tiempos de renovación y los consumos son cálculos nuestros a partir de esos datos.
// Los productos salen de data/products.ts por slug y se ocultan solos si se marcan `unavailable`.

const URL = "https://www.guiadelpiscina.com/mejores-depuradoras-piscina";
// Title SEO (≤ 70 con la marca), distinto del H1
const SEO_TITLE = "Depuradora de piscina: cómo elegirla y modelos";
const H1 = "Depuradora de piscina: arena, cartucho o cristal, qué caudal necesitas y modelos recomendados";
const DESCRIPTION =
  "Cómo elegir depuradora de piscina: arena, cartucho o cristal, caudal según litros y horas, conexiones de 32 o 38 mm, consumo, contralavado y comparativa.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  keywords:
    "depuradora piscina, depuradora de piscina, depuradoras piscinas, piscinas depuradora, depuradora piscina filtro, depuradora de arena, depuradora de cartucho, caudal depuradora piscina, depuradora piscina desmontable",
  alternates: { canonical: URL },
  openGraph: {
    title: "Depuradora de piscina: tipos, caudal y comparativa",
    description:
      "Arena, cartucho o cristal, cómo calcular el caudal con ejemplos, compatibilidad con Intex y Bestway, mantenimiento y las depuradoras de nuestra selección.",
    url: URL,
  },
};

const quickPicks = [
  { slug: "intex-55249-depuradora-arena-3500", note: "Arena compacta para piscinas de hasta 17.000 litros, con mangueras de 32 mm: encaja en muchas desmontables familiares." },
  { slug: "gre-770803-depuradora-arena-4000", note: "Arena de 4.000 l/h fabricada en España, con tanque de 300 mm para 19 kg de arena." },
  { slug: "intex-55225-depuradora-arena-5700", note: "Arena para piscinas de hasta 29.100 litros, con válvula de 6 funciones; admite arena, vidrio o bolas." },
  { slug: "intex-28648-depuradora-arena-14", note: "La de más caudal de la selección (10.500 l/h), para piscinas grandes de hasta 57.500 litros." },
];

// Datos de la tabla: fichas de Amazon.es (18/10/2026). «—» = dato que la ficha no indica.
const tabla = [
  { slug: "intex-c330-depuradora-cartucho-1250", modelo: "Intex C330", tipo: "Cartucho (tipo H)", caudal: "1.250 l/h", piscina: "7.900 L", conexion: "32 mm", potencia: "—" },
  { slug: "intex-55249-depuradora-arena-3500", modelo: "Intex 55249", tipo: "Arena", caudal: "3.500 l/h", piscina: "17.000 L", conexion: "32 mm", potencia: "90 W" },
  { slug: "gre-ar125-depuradora-cartucho-3800", modelo: "Gre AR125", tipo: "Cartucho", caudal: "3.800 l/h", piscina: "—", conexion: "—", potencia: "70 W" },
  { slug: "gre-770803-depuradora-arena-4000", modelo: "Gre 770803", tipo: "Arena", caudal: "4.000 l/h", piscina: "—", conexion: "—", potencia: "220 W" },
  { slug: "intex-26644-depuradora-arena", modelo: "Intex 26644 + skimmer", tipo: "Arena", caudal: "4.000 l/h", piscina: "29.100 L", conexion: "—", potencia: "—" },
  { slug: "intex-28636-depuradora-cartucho", modelo: "Intex 28636", tipo: "Cartucho (tipo A)", caudal: "5.678 l/h", piscina: "33.300 L", conexion: "38 mm", potencia: "165 W" },
  { slug: "bestway-58497-depuradora-arena-5678", modelo: "Bestway 58497", tipo: "Arena", caudal: "5.678 l/h", piscina: "42.300 L", conexion: "38 mm", potencia: "230 W" },
  { slug: "intex-55225-depuradora-arena-5700", modelo: "Intex 55225", tipo: "Arena", caudal: "5.700 l/h", piscina: "29.100 L", conexion: "38 mm", potencia: "0,25 HP" },
  { slug: "intex-c2500-depuradora-cartucho", modelo: "Intex C2500", tipo: "Cartucho (tipo B)", caudal: "9.463 l/h", piscina: "52.900 L", conexion: "38 mm", potencia: "—" },
  { slug: "intex-28648-depuradora-arena-14", modelo: "Intex 55227", tipo: "Arena", caudal: "10.500 l/h", piscina: "57.500 L", conexion: "38 mm", potencia: "0,60 HP" },
];

const faqs = [
  {
    q: "¿Qué depuradora necesito para mi piscina?",
    a: "Una cuyo caudal pase todo el agua de la piscina por el filtro en 4 a 6 horas. Divide los litros entre 6 para el caudal mínimo y entre 4 para el recomendable: una piscina de 12.430 litros necesita entre unos 2.070 y 3.110 l/h. Después comprueba que el diámetro de las mangueras (32 o 38 mm) coincide con las boquillas de tu piscina.",
  },
  {
    q: "¿Cuántas horas al día tiene que funcionar la depuradora?",
    a: "Como mínimo, las necesarias para que todo el agua pase una vez por el filtro, y en pleno verano lo normal es que pase dos o más veces. Una regla práctica muy extendida es filtrar tantas horas como la mitad de la temperatura del agua: a 26 °C, unas 13 horas. Con el agua fría de primavera u otoño bastan bastantes menos.",
  },
  {
    q: "¿Qué es mejor, depuradora de arena o de cartucho?",
    a: "La de arena aguanta mucho más entre limpiezas, porque se limpia con un contralavado sin abrir el filtro, y es la habitual en piscinas medianas y grandes. La de cartucho es más compacta y sencilla de instalar, pero el cartucho se lava a menudo y se cambia varias veces por temporada: Intex recomienda cambiar el de su 28636 cada dos semanas. En piscinas pequeñas, el cartucho es suficiente.",
  },
  {
    q: "¿Se puede poner cristal (vidrio) en una depuradora de arena?",
    a: "Sí, si el fabricante lo admite, y las depuradoras de arena Intex de nuestra selección lo admiten. Se carga menos peso: la Intex 55225 lleva 12 kg de arena de sílice o 8,5 kg de vidrio, y la Intex 55227, 35 kg de arena o 25 kg de vidrio. Respeta el grano que indica la ficha, que en estos modelos es de 0,45 a 0,85 mm.",
  },
  {
    q: "¿Sirve cualquier depuradora para una piscina desmontable Intex o Bestway?",
    a: "Sirve si el caudal es adecuado y las conexiones coinciden. Las piscinas desmontables pequeñas suelen llevar boquillas de 32 mm y las depuradoras de más caudal, mangueras de 38 mm. Si no coinciden, hacen falta adaptadores: Intex indica los tipo B para sus 55225 y 55227, y la referencia 91372 para la 28636.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  datePublished: "2025-05-15",
  dateModified: "2026-10-18",
  author: {
    "@type": "Organization",
    name: "Equipo Editorial de Guía del Piscina",
    url: "https://www.guiadelpiscina.com/sobre-nosotros",
    description: "Equipo editorial de Guía del Piscina (Mkt Web 360 SLU). Analizamos especificaciones técnicas, fichas de fabricante y experiencia de uso, con apoyo de IA en investigación y redacción bajo revisión editorial.",
    knowsAbout: ["mantenimiento de piscinas", "tratamiento del agua", "depuradoras", "filtración de piscinas", "piscinas desmontables"],
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
    { "@type": "ListItem", position: 3, name: "Depuradora de piscina", item: URL },
  ],
};

export default function DepuradorasPage() {
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
          <span className="text-gray-600">Depuradora de piscina</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{H1}</h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 mayo 2025 · Actualizado: 18 octubre 2026 · 12 min lectura</p>
        <span className="flex items-center gap-1 text-gray-500 text-sm mb-4 block">
          <span>✍️</span>
          <a href="/sobre-nosotros" className="font-medium text-sky-700 hover:underline">Equipo Editorial de Guía del Piscina</a>
        </span>
        <img
          src="/images/blog/mejores-depuradoras-piscina.jpg"
          alt="Depuradora de piscina junto a una piscina"
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-8"
          loading="eager"
        />

        <AffiliateDisclosure />

        <div className="prose">
          <div id="respuesta-directa" className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl px-5 py-4 mb-6">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1.5">Respuesta directa</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Una <strong>depuradora de piscina</strong> es una bomba que hace pasar el agua por un filtro de arena, cristal o cartucho para retener la suciedad. Para elegirla, calcula el caudal con <strong>litros de la piscina ÷ 4 a 6 horas</strong>, comprueba que sus mangueras (<strong>32 o 38 mm</strong>) encajan en las boquillas de tu piscina y elige el filtro: <strong>arena o cristal</strong> para piscinas medianas y grandes, <strong>cartucho</strong> para las pequeñas.
            </p>
          </div>

          <p>
            Al final hay una tabla con todas las depuradoras de nuestra selección y sus datos de ficha. Si tu piscina es pequeña (hasta unos 8.000-10.000 litros), tienes una guía específica de{" "}
            <Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">depuradora para piscina pequeña</Link>. Todos los modelos están en nuestra sección de{" "}
            <Link href="/tienda/depuradoras" className="text-sky-600 hover:underline">depuradoras</Link>.
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
          <h2>Arena, cartucho o cristal: qué filtro elegir</h2>
          <p>
            Todas las depuradoras para piscina tienen una bomba que mueve el agua y un filtro que retiene la suciedad. Lo que cambia es el material del filtro, y con él el mantenimiento.
          </p>
          <h3>Depuradora de arena</h3>
          <p>
            El agua atraviesa un tanque lleno de arena de sílice, que retiene las partículas. Cuando la arena se colmata, se hace un <strong>contralavado</strong>: se invierte el sentido del agua y la suciedad sale por el desagüe, sin abrir el filtro. Es la opción habitual en piscinas medianas y grandes porque aguanta mucho entre limpiezas. La arena no viene incluida: la Intex 55249 lleva 6,5 kg, la Gre 770803 hasta 19 kg y la Intex 55227, 35 kg.
          </p>
          <h3>Cristal (vidrio filtrante) y bolas</h3>
          <p>
            El vidrio y las bolas se cargan en el mismo tanque de la depuradora de arena. El vidrio se usa en menor cantidad: según las fichas de Intex, la 55225 admite 12 kg de arena o 8,5 kg de vidrio, y la 55227, 35 kg de arena o 25 kg de vidrio. Las bolas filtrantes pesan mucho menos (350 g en la 55225). Usa solo las cargas que admita tu modelo y con el grano que indique la ficha: de 0,45 a 0,85 mm en las Intex de arena y en la Bestway 58497.
          </p>
          <p>
            Si ya tienes depuradora y toca cambiar la carga, tienes la guía de{" "}
            <Link href="/arena-depuradora-piscina" className="text-sky-600 hover:underline">arena, vidrio o bolas para la depuradora</Link>, con los kilos de cada modelo y los cartuchos de recambio.
          </p>
          <h3>Depuradora de cartucho</h3>
          <p>
            El filtro es un cartucho de papel plisado. Es más compacta y más sencilla de instalar, pero el cartucho se ensucia antes: hay que sacarlo y lavarlo con la manguera a menudo y cambiarlo varias veces por temporada. Intex, por ejemplo, recomienda cambiar cada dos semanas el cartucho tipo A de su 28636. Encaja en piscinas pequeñas o si solo usas la piscina unas semanas al año.
          </p>
        </div>

        <AdSenseAd placement="contenido" />

        <div className="prose">
          <h2>Cómo calcular el caudal de la depuradora</h2>
          <p>
            La referencia es que la depuradora haga pasar <strong>todo el volumen de agua por el filtro en 4 a 6 horas</strong>. Por tanto:
          </p>
          <ul>
            <li><strong>Caudal mínimo</strong> = litros de la piscina ÷ 6.</li>
            <li><strong>Caudal recomendable</strong> = litros de la piscina ÷ 4.</li>
            <li><strong>Tiempo de renovación</strong> de una depuradora concreta = litros ÷ caudal.</li>
          </ul>
          <p>Cuatro ejemplos con piscinas y depuradoras reales:</p>
          <ul>
            <li><strong>Small Frame de 300 × 200 × 75 cm (3.834 L):</strong> necesita entre 639 y 959 l/h. La Intex C330, de 1.250 l/h, renueva el agua en unas 3 horas.</li>
            <li><strong>Easy Set de Ø457 × 107 cm (12.430 L):</strong> entre 2.072 y 3.108 l/h. La Intex 55249, de 3.500 l/h, la renueva en unas 3 h 35 min.</li>
            <li><strong>Ultra Frame de 549 × 274 × 132 cm (17.203 L):</strong> entre 2.867 y 4.301 l/h. La Gre 770803, de 4.000 l/h, tarda unas 4 h 20 min; la Intex 55225, de 5.700 l/h, unas 3 horas.</li>
            <li><strong>Piscina de 30.000 L:</strong> entre 5.000 y 7.500 l/h. La Bestway 58497, de 5.678 l/h, tarda unas 5 h 15 min; la Intex 55227, de 10.500 l/h, unas 2 h 50 min.</li>
          </ul>
          <p>
            El caudal anunciado es el máximo de la bomba: con el filtro sucio, las mangueras y el desnivel, rinde menos. Intex llegó a indicar en la ficha de su antigua depuradora de 14 pulgadas (la 28648) un caudal efectivo de 8.000 l/h para 10.500 nominales, así que deja margen. Y el «para piscinas de hasta X litros» indica un máximo: en la mayoría de las Intex de nuestra tabla equivale a renovar el agua en 5-6 horas con el caudal nominal (17.000 L ÷ 3.500 l/h ≈ 4,9 h en la 55249; 57.500 ÷ 10.500 ≈ 5,5 h en la 55227), y en la 26644 pasa de 7 horas. Si tu piscina está cerca de ese límite, sube un escalón.
          </p>

          <h3>Horas de filtrado al día</h3>
          <p>
            El tiempo de renovación no es lo mismo que las horas que debe funcionar la depuradora. Lo mínimo es que todo el agua pase una vez al día por el filtro, y en verano lo normal es que pase dos o más veces. Una regla práctica muy extendida es filtrar tantas horas como la mitad de la temperatura del agua: a 26 °C, unas 13 horas; a 18 °C, unas 9. Con muchos bañistas o después de una tormenta, filtra más. Varias depuradoras de la tabla tienen programación diaria en ciclos de 1 a 12 horas.
          </p>

          <h2>Conexiones de 32 o 38 mm: compatibilidad con piscinas Intex y Bestway</h2>
          <p>
            Es el error más común al comprar una depuradora para piscina desmontable: el caudal es correcto, pero las mangueras no encajan. Las piscinas tienen dos boquillas (entrada y salida de agua) de un diámetro concreto, y la depuradora tiene que coincidir o llevar adaptador:
          </p>
          <ul>
            <li><strong>32 mm:</strong> lo habitual en piscinas pequeñas y medianas. La Intex Small Frame de 450 × 220 cm tiene conexiones de 32 mm, y la C330 y la 55249 traen mangueras de 32 mm.</li>
            <li><strong>38 mm:</strong> lo habitual en depuradoras de más caudal. La Intex 55225, la 55227, la 28636 y la C2500 usan mangueras de 38 mm, y la Bestway 58497 también.</li>
            <li><strong>Adaptadores:</strong> para conectar una de 38 mm a boquillas de 32 mm, Intex indica 2 adaptadores tipo B para la 55225 y la 55227 (se venden aparte) y la referencia 91372 para la 28636.</li>
          </ul>
          <p>
            Antes de comprar, mira el manual de tu piscina o mide la boquilla. En las fichas de algunas depuradoras (como las Gre de nuestra selección) no figura el diámetro de conexión: confírmalo con el fabricante antes de pedirla.
          </p>

          <h2>Potencia y consumo eléctrico</h2>
          <p>
            La potencia indica cuánto consume el motor, no cuánta agua mueve. En nuestra selección van de los 70 W de la Gre AR125 y los 90 W de la Intex 55249 a los 0,60 HP (unos 450 W) de la Intex 55227. Para estimar el consumo, multiplica vatios por horas:
          </p>
          <ul>
            <li>Intex 55249 (90 W) × 8 h = 0,72 kWh al día.</li>
            <li>Bestway 58497 (230 W) × 8 h = 1,84 kWh al día.</li>
            <li>Intex 55227 (unos 450 W) × 8 h = unos 3,6 kWh al día.</li>
          </ul>
          <p>
            Multiplica por el precio del kWh de tu tarifa y por los días de temporada. Si tienes discriminación horaria, programa la filtración en las horas más baratas. Y no sobredimensiones: una depuradora el doble de grande de lo necesario consume más sin dejar el agua más limpia.
          </p>

          <h2>Ruido: dónde colocar la depuradora</h2>
          <p>
            Las fichas de estas depuradoras domésticas no publican los decibelios, así que no podemos compararlas por ruido con datos. Sí hay medidas que ayudan: colócala sobre una base firme y nivelada (una losa o un tablero) y no sobre la tierra, aléjala de las ventanas de los dormitorios y de la pared del vecino tanto como permitan las mangueras, y protégela del sol y la lluvia, como recomienda Gre para su 770803. Si el motor vibra o silba, revisa que el prefiltro esté limpio y que no entre aire por las juntas.
          </p>

          <h2>Mantenimiento y contralavado paso a paso</h2>
          <p>En una depuradora de arena con válvula de 6 posiciones (filtrado, lavado, enjuague, recirculación, vaciado y cerrado):</p>
          <ol>
            <li><strong>Apaga siempre la bomba antes de girar la válvula.</strong> Cambiar de posición con el motor en marcha puede dañarla.</li>
            <li>Haz el contralavado (posición «lavado») cuando el manómetro marque bastante más que con la arena limpia, o con la frecuencia que indique el manual. Deja salir agua hasta que el visor se vea limpio.</li>
            <li>Pon la posición «enjuague» unos instantes para asentar la arena y vuelve a «filtrado».</li>
            <li>Limpia el prefiltro o la cestilla cada semana: si se obstruye, la bomba trabaja forzada.</li>
            <li>Cambia la carga filtrante cuando el agua deje de aclararse aunque el pH y el cloro estén bien. Como orientación, la arena dura varias temporadas; sigue lo que indique el fabricante de la carga.</li>
          </ol>
          <p>
            Las válvulas de 4 funciones, como la de la Intex 55249 (lavado, filtración, recirculación y desagüe), no tienen posición de enjuague. En las de cartucho, el mantenimiento consiste en sacar el cartucho, lavarlo con la manguera y cambiarlo cuando ya no queda limpio. Si usas floculante, aspira los flóculos del fondo con la válvula en desagüe y haz después un contralavado; con cartucho, evita que lleguen al filtro (lo explicamos en la guía de <Link href="/floculante-piscina" className="text-sky-600 hover:underline">cómo usar floculante en la piscina</Link>). Para el resto de la rutina (cloro, pH, limpieza del fondo), tienes la guía de{" "}
            <Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">mantenimiento de una piscina desmontable</Link>.
          </p>

          <h2>La depuradora en temporada baja</h2>
          <p>
            Si desmontas la piscina, haz un último contralavado, desconecta la depuradora, vacía el agua del tanque y de las mangueras, y guárdala seca en un sitio a cubierto donde no hiele: el agua que se queda dentro puede romper el tanque o la válvula. Los cartuchos se lavan y se secan, o se desechan si ya estaban gastados. Si dejas la piscina montada, el paso a paso está en la guía de{" "}
            <Link href="/como-cerrar-piscina-invierno" className="text-sky-600 hover:underline">cómo cerrar la piscina para el invierno</Link>, y la decisión entre mantener o parar la filtración, en{" "}
            <Link href="/invernaje-activo-o-pasivo-piscina" className="text-sky-600 hover:underline">invernaje activo o pasivo</Link>.
          </p>
          <p>
            Octubre y noviembre son buen momento para comprarla con calma: puedes comprobar conexiones y caudal sin las prisas de junio, cuando los modelos más buscados se agotan antes.
          </p>

          <h2>Errores frecuentes al elegir depuradora</h2>
          <ul>
            <li><strong>Elegir por la potencia y no por el caudal.</strong> Lo que importa son los litros por hora.</li>
            <li><strong>Comprar justo en el límite de «hasta X litros».</strong> Ese límite suele suponer ya 5 horas o más de renovación con el caudal máximo.</li>
            <li><strong>Olvidar los adaptadores</strong> cuando las mangueras son de 38 mm y la piscina, de 32 mm (o al revés).</li>
            <li><strong>No contar la carga filtrante:</strong> en las de arena de nuestra selección no viene incluida.</li>
            <li><strong>Girar la válvula con la bomba encendida.</strong></li>
            <li><strong>Dejarla con agua en invierno</strong> en un sitio donde hiela.</li>
          </ul>
        </div>

        <div className="prose">
          <h2>Comparativa de las depuradoras de nuestra selección</h2>
          <p>
            Ordenadas de menor a mayor caudal. «Piscina hasta» es el volumen máximo que indica el fabricante; «—» significa que la ficha de Amazon.es no da ese dato.
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Filtro</th>
                <th className="px-3 py-3 text-left">Caudal</th>
                <th className="px-3 py-3 text-left">Piscina hasta</th>
                <th className="px-3 py-3 text-left">Conexión</th>
                <th className="px-3 py-3 text-left">Potencia</th>
                <th className="px-3 py-3 text-left">Ver</th>
              </tr>
            </thead>
            <tbody>
              {filas.map(({ row, product }, i) => (
                <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="px-3 py-3 font-semibold text-gray-900">
                    <Link href={`/tienda/${product.categorySlug}/${product.slug}`} className="hover:text-sky-700 hover:underline">{row.modelo}</Link>
                  </td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{row.tipo}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.caudal}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.piscina}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.conexion}</td>
                  <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{row.potencia}</td>
                  <td className="px-3 py-3">
                    <a
                      href={offerUrl(primaryOffer(product)!)}
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
          <h2>Nuestra valoración</h2>
          <ul>
            <li><strong>Piscina pequeña (hasta unos 8.000 L):</strong> la Intex C330, de cartucho y con mangueras de 32 mm. Más opciones en la guía de <Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">depuradora para piscina pequeña</Link>.</li>
            <li><strong>Desmontable familiar (hasta unos 15.000 L) con boquillas de 32 mm:</strong> la Intex 55249, de arena.</li>
            <li><strong>Piscina mediana (15.000-25.000 L):</strong> la Intex 55225 o la Bestway 58497, ambas de arena y con mangueras de 38 mm.</li>
            <li><strong>Piscina grande (más de 30.000 L):</strong> la Intex 55227, o la C2500 si prefieres cartucho.</li>
          </ul>
          <p>
            Si todavía no tienes la piscina, mira qué depuradora trae cada modelo en las guías de{" "}
            <Link href="/piscina-desmontable-rectangular" className="text-sky-600 hover:underline">piscina desmontable rectangular</Link> y de{" "}
            <Link href="/piscina-desmontable-grande" className="text-sky-600 hover:underline">piscinas desmontables grandes</Link>.
          </p>
        </div>

        <div className="not-prose my-6 flex flex-wrap gap-3">
          <a
            href={amazonLink("B09M5S8BXB")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver Intex 55249 en Amazon →
          </a>
          <a
            href={amazonLink("B07FBGSM8M")}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="inline-block px-6 py-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-xl transition-colors"
          >
            Ver Intex 55225 en Amazon →
          </a>
        </div>

        <div className="prose">
          <h2>Preguntas frecuentes sobre depuradoras de piscina</h2>
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
            Fuentes: fichas de producto de Intex, Gre y Bestway en Amazon.es (caudal, volumen máximo de piscina, potencia, carga filtrante, válvula y diámetro de mangueras), consultadas el 18 de octubre de 2026. Los tiempos de renovación y los consumos diarios son cálculos nuestros a partir de esos datos.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">Ver en nuestra tienda</h3>
          <p className="text-sm text-gray-600 mb-4">Depuradoras de arena y de cartucho de nuestra selección, con su ficha completa.</p>
          <Link href="/tienda/depuradoras" className="inline-block bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors">
            Ver todas las depuradoras →
          </Link>
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/depuradora-piscina-pequena" className="text-sky-600 hover:underline">→ Depuradora para piscina pequeña: cuál elegir</Link></li>
            <li><Link href="/mantenimiento-piscina-desmontable" className="text-sky-600 hover:underline">→ Cómo mantener una piscina desmontable</Link></li>
            <li><Link href="/robot-limpiafondos-piscina" className="text-sky-600 hover:underline">→ Mejores robots limpiafondos para piscina</Link></li>
            <li><Link href="/mejor-clorador-salino-piscina" className="text-sky-600 hover:underline">→ Clorador salino para piscina</Link></li>
          </ul>
        </div>
      </article>
        <BlogSidebar ctaHref="/tienda/depuradoras" ctaText="Ver depuradoras" />
      </div>
    </div>

      <div className="mt-8 pt-4 border-t border-gray-100 max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-gray-400 font-medium mb-1">Referencias</p>
        <ul className="space-y-0.5">
          <li><a href="https://www.sanidad.gob.es/areas/sanidadAmbiental/calidadAguas/piscinas/home.htm" target="_blank" rel="noopener" className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors">Ministerio de Sanidad — Calidad del agua de piscinas</a></li>
        </ul>
      </div>
    </>
  );
}
