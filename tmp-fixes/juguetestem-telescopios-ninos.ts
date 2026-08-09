/**
 * ARTÍCULO: Mejor telescopio para niños y principiantes 2025
 * slug: "mejor-telescopio-ninos-principiantes-2025"
 * Destino datos:      ~/juguetestem/data/posts.ts               → añadir entrada al array posts[]
 * Destino contenido:  ~/juguetestem/app/blog/[slug]/page.tsx    → añadir entrada a articleContent{}
 *
 * Deploy: ver DEPLOY-juguetestem-content.sh
 */

import type { Post } from "@/data/posts";

// ─── 1. Metadata para data/posts.ts ──────────────────────────────────────────

export const postMeta: Post = {
  slug: "mejor-telescopio-ninos-principiantes-2025",
  title: "Mejor telescopio para niños y principiantes 2025: guía de compra",
  excerpt:
    "Los mejores telescopios para niños desde 8 años: qué apertura necesitan, qué montura elegir y qué objetos podrán ver.",
  category: "STEM",
  date: "2025-08-07",
  readTime: 9,
  relatedProducts: [
    "national-geographic-microscopio-kit-37-piezas",
    "national-geographic-mega-kit-excavacion-gemas",
    "thames-kosmos-kids-first-science-kit",
  ],
  relatedPosts: [
    "mejores-kits-ciencia-ninos",
    "juguetes-stem-ninos-8-anos",
    "national-geographic-juguetes-educativos-analisis",
  ],
};

// ─── 2. Contenido para articleContent en app/blog/[slug]/page.tsx ─────────────

export const articleContent = [
  {
    text: "El telescopio es probablemente el juguete científico con mayor potencial de asombro. Un niño que ve Saturno y sus anillos por primera vez no lo olvida. Pero elegir mal — un telescopio de juguete con óptica deficiente — puede apagar ese interés para siempre.",
  },
  {
    heading: "Tipos de telescopio: cuál es mejor para niños",
    text: "Hay tres tipos principales, y no todos son igual de adecuados para principiantes. El telescopio refractor usa lentes: es el más fácil de usar, requiere prácticamente ningún mantenimiento y es ideal para observar la Luna y planetas — la mejor opción para iniciarse. El reflector newtoniano usa espejos: ofrece la mejor relación apertura/precio, pero necesita colimación (alineación de espejos) periódica, lo que lo hace más adecuado para niños mayores o con ayuda adulta. El catadióptrico (Schmidt-Cassegrain) es compacto y potente, pero su precio es elevado y su uso complejo — no recomendado para principiantes.",
  },
  {
    heading: "La apertura lo es todo",
    text: "El parámetro más importante en un telescopio es la apertura: el diámetro del objetivo. Los aumentos impresos en la caja (50x, 100x, 200x) son datos de marketing; la apertura es lo que determina cuánta luz capta y qué calidad de imagen ofrece realmente. Con 60-70mm de apertura se puede ver la Luna con detalle, Júpiter como disco con sus cuatro lunas galileanas y los anillos de Saturno. Con 80-90mm ya aparecen nebulosas brillantes y cúmulos estelares. Con 100mm o más se entra en observación más seria. La regla práctica: más aumentos con poca apertura produce imágenes borrosas y oscuras — siempre prioriza la apertura sobre el número de aumentos.",
  },
  {
    heading: "Montura: la parte más olvidada",
    text: "La montura es el sistema que mueve el telescopio, y los principiantes casi nunca la tienen en cuenta. La montura altazimutal se mueve en dos ejes — horizontal y vertical — de forma intuitiva, como una cámara en trípode. Es la correcta para niños: simple, estable y sin configuración previa. La montura ecuatorial compensa automáticamente la rotación de la Tierra, lo que facilita seguir los objetos, pero su configuración es compleja y solo tiene sentido para mayores de 12 años con ayuda adulta. Regla simple para niños: siempre montura altazimutal.",
  },
  {
    heading: "Los 5 mejores telescopios para niños en 2025",
    table: {
      headers: ["Modelo", "Tipo", "Apertura", "Precio", "Mejor para"],
      rows: [
        ["Celestron PowerSeeker 70AZ", "Refractor", "70mm", "79-99€", "Primer telescopio, Luna y planetas"],
        ["Bresser Junior 70/700 AZ", "Refractor", "70mm", "69-89€", "Óptica sólida, incluye mapa estelar"],
        ["Orion StarBlast 4.5 Astro", "Reflector", "114mm", "199-229€", "Salto de calidad real, 10+ años"],
        ["Sky-Watcher Heritage 130P", "Dobsoniano", "130mm", "199-249€", "Mejor óptica por precio, 12+ años"],
        ["Celestron AstroMaster 90AZ", "Refractor", "90mm", "179-199€", "Más luminoso, ideal para planetas"],
      ],
    },
  },
  {
    heading: "Qué podrán ver con su telescopio",
    text: "Con 60-70mm de apertura: la Luna con cráteres y montañas con un nivel de detalle impresionante, Júpiter como disco con sus cuatro lunas galileanas visibles y los anillos de Saturno — este último es el momento más impactante para cualquier principiante. Con 80mm en adelante se añaden la nebulosa de Orión y cúmulos estelares como las Pléyades. Lo que no podrán ver: galaxias lejanas con detalle, nebulosas difusas como en las fotografías de la NASA — esas imágenes usan exposiciones de horas con telescopios de 200mm o más. El ojo humano siempre ve bastante menos que una cámara de larga exposición, pero lo que sí se ve sigue siendo extraordinario.",
  },
  {
    heading: "Errores al comprar el primer telescopio",
    list: [
      "Comprar por el número de aumentos en la caja: es un dato de marketing que no refleja la calidad óptica real del instrumento.",
      "Comprar un telescopio de juguete de plástico: la óptica deficiente produce imágenes tan malas que el niño pierde el interés en la primera noche de uso.",
      "No asegurarse de que el trípode es estable: a 100 aumentos, la más mínima vibración arruina la imagen — un trípode endeble inutiliza incluso un buen telescopio.",
      "Esperar ver como las fotos del Hubble: las fotografías astronómicas usan exposición de horas y procesado posterior — el ojo siempre verá mucho menos, aunque siga siendo absolutamente impresionante.",
    ],
  },
  {
    faqs: [
      {
        q: "¿Desde qué edad puede usar un telescopio un niño?",
        a: "Con ayuda adulta, desde los 8 años con un refractor sencillo y montura altazimutal. Solos, con un altazimutal simple como el Celestron PowerSeeker, a partir de los 10-11 años — necesitan paciencia para apuntar al objeto y ajustar el enfoque.",
      },
      {
        q: "¿Dónde es mejor usar el telescopio?",
        a: "Lejos de la ciudad, si es posible. La contaminación lumínica es el mayor enemigo de la observación: en una ciudad grande solo se ven los objetos más brillantes. A 30-40 km de zona urbana el cielo cambia radicalmente. La Luna y los planetas son la excepción: se ven bien desde cualquier lugar.",
      },
      {
        q: "¿Necesita mantenimiento un telescopio para niños?",
        a: "Los refractores prácticamente ninguno: el sistema de lentes es estanco y raramente necesita ajustes. Los reflectores necesitan colimación (realinear los espejos) aproximadamente una vez al año — un proceso de 10 minutos con un colimador que suele venir incluido.",
      },
      {
        q: "¿Qué complementos son útiles desde el primer día?",
        a: "Un ocular adicional de diferente focal para cambiar el aumento según el objeto observado, un filtro lunar que reduce el exceso de luz de la Luna llena para ver más detalle, y una aplicación de astronomía como SkySafari o Stellarium para identificar qué hay en el cielo cada noche.",
      },
    ],
  },
];
