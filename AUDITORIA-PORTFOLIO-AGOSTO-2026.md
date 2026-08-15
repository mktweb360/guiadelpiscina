# AUDITORÍA COMPLETA — PORTFOLIO BLOGS MONETIZACIÓN
**Fecha:** 15 agosto 2026 | **Stack:** Next.js 15 App Router + TypeScript + Tailwind + Vercel  
**Tag Amazon:** cclaserdepi01-21 | **AdSense:** ca-pub-6063067965030118

Auditoría ejecutada desde código fuente real de los 5 repositorios. Todo lo que aparece aquí está respaldado por lectura directa de archivos. No hay datos inventados.

---

## TABLA DE ESTADO ACTUAL (base real)

| Sitio | Posts | Productos | ASINs rotos | AggregateRating | Imgs blog | Home dinámica |
|---|---|---|---|---|---|---|
| cuidatumascota.es | 36 | 44 (1 duplicado) | 0 | ✅ (datos incorrectos) | ✅ | ✅ |
| fitnessfacil.es | 42 | 30 | **12 rotos** | ✅ (datos incorrectos) | ✅ | ✅ |
| emprendedigital.es | 25 | 45 (3 pares duplicados) | 0 | N/A (política Amazon) | ✅ | ❌ hardcoded |
| juguetestem.es | 49 | 35 | 0 | ❌ ausente | ✅ | ✅ |
| guiadelpiscina.com | 22 | 26 | 0 | ✅ (datos incorrectos) | ❌ 9 sin imagen | ❌ hardcoded |

---

## BLOQUE 1 — BUGS CRÍTICOS (producción rota, resolver esta semana)

### 1.1 fitnessfacil.es — 12 ASINs falsos → botón Amazon roto
**Impacto: MÁXIMO — ingresos directamente perdidos**

12 de 30 productos (40% del catálogo) tienen `asin: "TODOASIN-FF01"` a `"TODOASIN-FF12"`. El botón "Comprar en Amazon" genera URLs del tipo `https://amazon.es/dp/TODOASIN-FF01` que Amazon no resuelve. El producto es invendible.

Productos afectados: `domyos-t520b`, `horizon-t101`, `nordictrack-t65s`, `domyos-ve520`, `sportstech-sx400`, `bowflex-velocore`, `powerblock-sport-24`, `bowflex-selecttech-552`, `manduka-pro`, `jade-harmony`, `myprotein-impact-whey-2-5kg`, `hsn-evowhey`.

**Acción:** Buscar y actualizar los 12 ASINs reales en Amazon.es para cada producto antes de cualquier otra tarea en este sitio.

---

### 1.2 cuidatumascota.es — Slug duplicado `royal-canin-medium-adult-15kg`
**Impacto: Alto — genera doble entrada en sitemap y comportamiento impredecible en build**

Aparece dos veces en `data/products.ts`. `generateStaticParams()` de Next.js genera dos rutas idénticas. `getProductBySlug()` siempre devuelve el primero, haciendo el segundo inaccesible. El sitemap emite dos URLs idénticas.

**Acción:** Eliminar el segundo y asignarle un slug único, o unificar en uno solo con el reviewCount real.

---

### 1.3 emprendedigital.es — 3 pares de productos duplicados
**Impacto: Alto — contenido duplicado en sitemap, mismo problema que 1.2**

Duplicados confirmados: `logitech-mx-master-3s` / `logitech-mx-master-3s-raton`, `logitech-c920` en dos categorías, `keychron-k2-pro` / `keychron-k2`.

**Acción:** Consolidar en un slug canónico y eliminar el duplicado.

---

### 1.4 guiadelpiscina.com — Imágenes rotas en 7 categorías de producto
**Impacto: Alto — páginas de producto muestran imagen rota**

Las páginas de producto usan `/images/products/${product.categorySlug}.jpg`, pero en `/public/images/products/` solo existen: `accesorios.jpg`, `bombas-filtros.jpg`, `limpiafondos.jpg`, `productos-quimicos.jpg`. Faltan: `depuradoras.jpg`, `bombas-calor.jpg`, `muebles-jardin.jpg`, `piscinas-desmontables.jpg`, `pergolas.jpg`, `riego-automatico.jpg`, `cesped-artificial.jpg`.

**Acción:** Crear o descargar imágenes representativas para las 7 categorías faltantes. Usar Pexels con los términos del nicho.

---

### 1.5 juguetestem.es — AggregateRating ausente del schema Product
**Impacto: Alto — Google no muestra estrellas en SERP para ningún producto**

Confirmado en código: el `productSchema` en `app/tienda/[categoria]/[producto]/page.tsx` tiene `@type: "Product"` con nombre, descripción y SKU, pero sin `aggregateRating`, sin `offers`, sin `brand`, sin `image`. Los campos `rating` y `reviewCount` existen en `data/products.ts` y se ignoran completamente en el schema.

**Acción (código concreto):**
```typescript
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: product.rating.toString(),
  reviewCount: product.reviewCount,
  bestRating: "5",
  worstRating: "1",
},
offers: {
  "@type": "Offer",
  availability: "https://schema.org/InStock",
  priceCurrency: "EUR",
  url: amazonLink(product.asin),
},
brand: {
  "@type": "Brand",
  name: product.brand,
},
```

---

### 1.6 Todos los sitios — `stableRating()` emite datos distintos a los reales
**Impacto: Alto — inconsistencia entre la UI y el JSON-LD**

cuidatumascota, fitnessfacil y guiadelpiscina usan la función `stableRating(slug)` para generar el rating en el schema JSON-LD. Esta función calcula valores mediante hash del slug (entre 4.1 y 4.9), ignorando los campos `rating` y `reviewCount` reales que ya existen en `data/products.ts`. El resultado es que Google indexa un rating diferente al que muestra la UI, lo que Google puede interpretar como señal de datos no fiables.

**Acción:** En los 3 sitios, sustituir en el schema JSON-LD:
```typescript
// Antes (incorrecto)
const { score, count } = stableRating(product.slug);

// Después (correcto)
const score = product.rating.toFixed(1);
const count = product.reviewCount;
```

---

### 1.7 guiadelpiscina.com — AffiliateDisclosure faltante en artículo de alto tráfico
**Impacto: Medio-Alto — riesgo de compliance Amazon Associates**

`app/cuanto-cloro-echar-piscina/page.tsx` no importa ni muestra el componente `AffiliateDisclosure`. Este artículo tiene alta probabilidad de tráfico por estacionalidad veraniega y está incompleto en términos de disclosure.

**Acción:** Añadir `import AffiliateDisclosure from "@/components/AffiliateDisclosure"` y `<AffiliateDisclosure />` al inicio del artículo.

---

## BLOQUE 2 — SEO TÉCNICO

### 2.1 cuidatumascota.es — Canonical ausente en blog y página de contacto sin metadata

`app/blog/[slug]/page.tsx` y `app/blog/page.tsx` no tienen `alternates.canonical` explícito. La página `/contacto` es `"use client"` completo y no puede exportar metadata → Google ve el title genérico del layout en lugar de un title de contacto.

**Acción (blog):** Añadir en `generateMetadata`:
```typescript
alternates: { canonical: `https://www.cuidatumascota.es/blog/${slug}` }
```
**Acción (contacto):** Extraer el formulario a un componente hijo `<ContactoForm client />`, dejar la página como Server Component y exportar metadata normal.

---

### 2.2 juguetestem.es — Canonicals relativos en 7 páginas
**Impacto: Alto si metadataBase falla**

`sobre-nosotros`, `politica-de-privacidad`, `blog/page.tsx`, `blog/[slug]/page.tsx`, `contacto/layout.tsx`, `politica-de-cookies`, `aviso-legal` usan `canonical: "/ruta"` relativo. Si `metadataBase` en `app/layout.tsx` no está correctamente definido, Google recibiría canonicals sin dominio.

**Acción:** Confirmar que `app/layout.tsx` tiene `metadataBase: new URL("https://www.juguetestem.es")`. Si está, las rutas relativas son resueltas correctamente. Si no está, cambiar todos a URL absoluta.

---

### 2.3 guiadelpiscina.com — `keywords` meta tag en todos los artículos
**Impacto: Bajo (señal de spam para algunos crawlers)**

Google ignora este tag desde 2009. Presente en todos los `page.tsx` individuales.

**Acción:** Eliminarlo de todos los artículos. Es un cambio limpio de pocas líneas por archivo.

---

### 2.4 Todos — `lastModified: new Date()` en páginas estáticas del sitemap
**Impacto: Bajo — devalúa la señal de frescura**

Cada deploy emite "modificado hoy" para páginas que no han cambiado. Google puede ignorar señales de frescura de sitios que siempre las emiten.

**Acción:** Usar fechas fijas para páginas legales (`aviso-legal`, `politica-de-privacidad`, `politica-de-cookies`) y fechas reales de creación para categorías.

---

### 2.5 emprendedigital.es — Home con arrays hardcodeados no escala
**Impacto: Alto en UX y SEO — artículos nuevos no aparecen en home**

`app/page.tsx` tiene arrays literales con 4 artículos y 4 categorías fijos. Cuando se añade contenido nuevo, la home no se actualiza automáticamente.

**Acción:**
```typescript
// Antes
const articles = [{ title: "...", slug: "..." }, ...]
// Después
import { getLatestPosts } from "@/data/posts"
const articles = getLatestPosts(4)
```
Lo mismo para categorías: importar desde `data/products.ts` dinámicamente.

---

### 2.6 guiadelpiscina.com — Home hardcoded con artículos de mayo, oculta los 11 de julio-agosto
**Impacto: Alto — los artículos de temporada (cloro, pH, algas) no aparecen en home**

Misma causa que 2.5. La home tiene una lista fija de artículos que no incluye los publicados en julio y agosto 2026, que son precisamente los más relevantes para la temporada de verano.

**Acción:** Centralizar en `data/articles.ts` y generar la sección "Últimos artículos" desde `getLatestPosts(6)`.

---

## BLOQUE 3 — SCHEMA MARKUP

### 3.1 Todos los sitios — Offers sin `price` numérico
**Impacto: Alto — Google no puede mostrar precio en rich results**

Los objetos `offers` dentro del schema `Product` no incluyen `price` ni `priceValidUntil` en ninguno de los 5 sitios. Google Rich Results requiere `price` para merchant listings.

**Acción:** En todos los templates de producto, añadir:
```typescript
offers: {
  "@type": "Offer",
  price: product.priceMin.toString(),
  priceCurrency: "EUR",
  availability: "https://schema.org/InStock",
  url: amazonLink(product.asin),
},
```

---

### 3.2 Juguetestem + Emprendedigital — `dateModified` ausente en Article schema
**Impacto: Medio — Google no puede detectar actualizaciones**

El Article schema solo tiene `datePublished` pero no `dateModified`. Sin este campo, Google no sabe si el contenido fue actualizado.

**Acción:** Añadir `dateModified: post.updatedAt ?? post.date` al articleSchema en `app/blog/[slug]/page.tsx`.

---

### 3.3 Todos los sitios — Imagen genérica por categoría en schema Product
**Impacto: Medio — Google puede ignorar la imagen del schema si no es del producto específico**

Todos los productos de una misma categoría comparten exactamente la misma imagen en el schema `Product`. Google puede detectar que 7 productos distintos tienen la misma imagen y penalizar la señal.

**Acción (medio plazo):** Añadir un campo `image?: string` opcional al tipo `Product` en `data/products.ts`. Cuando esté definido, usar esa URL en el schema. Cuando no, usar el fallback de categoría. Completar con imágenes reales progresivamente.

---

### 3.4 guiadelpiscina.com — Article schema con imagen genérica `og-image.png`
**Impacto: Medio**

Todos los artículos apuntan a `https://www.guiadelpiscina.com/og-image.png` en el campo `image` del Article schema, aunque 13 de 22 tienen imagen propia en `/public/images/blog/`.

**Acción:** Para los artículos que tienen imagen real, pasar la URL específica al schema en cada `page.tsx`.

---

### 3.5 emprendedigital.es — ItemList faltante en páginas de categoría
**Impacto: Medio — oportunidad de rich result no aprovechada**

Las páginas de categoría tienen `CollectionPage` pero no `ItemList` con los productos. JugueteSTEM y otros sí lo implementan.

**Acción:** Añadir `ItemList` con los primeros 6-8 productos de la categoría en el schema JSON-LD de `app/tienda/[categoria]/page.tsx`.

---

### 3.6 emprendedigital.es — HowTo faltante en guías paso a paso
**Impacto: Bajo — rich result adicional no aprovechado**

Artículos como `home-office-setup`, `como-empezar-negocio-online`, `organizar-cables` son guías con pasos ordenados sin `HowTo` schema.

**Acción:** Añadir HowTo a los 3 artículos guía con los pasos ya existentes en el contenido.

---

## BLOQUE 4 — CONTENIDO Y GAPS TEMÁTICOS

### 4.1 Estado real de artículos por sitio

| Sitio | Artículos | Distribución | Gaps principales |
|---|---|---|---|
| cuidatumascota.es | 36 | Alimentación 8, Cuidados 8, Salud 7, Accesorios 7, Adiestramiento 2, Comportamiento 2 | Adiestramiento y comportamiento muy flacos |
| fitnessfacil.es | 42 | Cardio 15, Nutrición 9, Yoga 7, Fuerza 7, Entrenamiento 3, Pérdida de peso 2 | Sin categoría de elíptica pese a tener artículo |
| emprendedigital.es | 25 | Home Office 12, Productividad 8, Emprender Online 3, Trabajo Remoto 2 | 25 artículos vs 42-49 del resto — gap estratégico |
| juguetestem.es | 49 | STEM 11, Montessori 10, Kits edu 7, Guías 6, Juegos mesa 5, Construcción 5 | Sin comparativas de marcas, sin artículos por presupuesto |
| guiadelpiscina.com | 22 | Piscinas desmontables 5, Química agua 5, Equipos piscina 4, Jardín 4, Temporada 1 | Cierre de piscina, TAC, artículos de jardín desconectados |

---

### 4.2 Artículos prioritarios a crear (por sitio, por impacto SEO)

**cuidatumascota.es:**
- "Cómo adiestrar a mi perro con clicker" (búsqueda frecuente, monetizable con clicker y premios)
- "Adiestramiento de cachorro: los primeros 30 días" (alta intención + monetizable)
- "Por qué mi perro ladra sin parar" (comportamiento, informacional puro, tráfico de descubrimiento)
- "Agresividad en perros: causas y soluciones" (comportamiento, alto tráfico)

**fitnessfacil.es:**
- "Las mejores elípticas para casa en 2026" (artículo existe sin producto ni categoría correspondiente — gap de conversión)
- "Home gym para 300€: montar tu gimnasio en casa" (alta intención compradora, múltiples productos)
- "Mejores suplementos pre-entreno" (artículo existe; falta crear producto correspondiente)

**emprendedigital.es (prioridad máxima — solo 25 artículos):**
- "MacBook Air M3 vs Dell XPS 13: cuál comprar para trabajar" (comparativa, alto CTR)
- "Los mejores monitores para menos de 200€" (precio + intención de compra clara)
- "Silla ergonómica barata: las mejores de 2026 por menos de 150€" (alta búsqueda)
- "Mejor auricular con micrófono para videollamadas" (nueva categoría monetizable)
- "Cómo montar un home office completo por 500€" (contenido ancla, múltiples productos)
- Meta: llegar a 40 artículos antes de Q4 2026.

**juguetestem.es:**
- "Melissa & Doug vs Hape: ¿cuál es mejor?" (comparativa de marcas, alto CTR SERP)
- "Los mejores juguetes educativos por menos de 30€" (regalo, alta intención compradora)
- "Los mejores juguetes educativos por menos de 50€" (regalo, rango superior)
- "Juguetes STEM para niños de 3 a 5 años" (por edad — alta búsqueda)
- Nota: estacionalidad crítica Q4 (oct-ene ≈ 60-70% ingresos estimados) — máxima prioridad publicar antes de octubre.

**guiadelpiscina.com:**
- "Cómo cerrar la piscina para el invierno" — URGENTE, alta demanda sept-oct, complemento natural de "cómo abrir piscina"
- "Alcalinidad total piscina (TAC): qué es y cómo corregirla" (química del agua, clúster prioritario)
- "Piscina desmontable infantil: las mejores para niños pequeños" (alta intención de compra verano)
- "Depuradora de cartucho vs arena: cuál elegir" (comparativa, alto volumen)
- "Kit de análisis de agua para piscina: los mejores" (nueva monetización)

---

### 4.3 Problemas de internal linking en posts

| Sitio | Problema | Posts afectados |
|---|---|---|
| emprendedigital.es | Posts sin relatedProducts — sin conversión posible desde el blog | 7 posts |
| juguetestem.es | Posts sin relatedPosts — sin retención blog→blog | 15 posts |
| fitnessfacil.es | relatedPosts con slugs inexistentes (fantasma) | 12 productos |
| cuidatumascota.es | Footer con 4 artículos hardcodeados — artículos nuevos invisibles | Footer.tsx |
| guiadelpiscina.com | Artículos de jardín desconectados entre sí | 6 artículos |
| guiadelpiscina.com | "cuanto-cloro-echar" no enlaza a "mejor-clorador-salino" | 1 artículo |

---

## BLOQUE 5 — CATÁLOGO Y CONVERSIÓN (CRO)

### 5.1 Categorías infracubiertas (< 3 productos)

| Sitio | Categoría | Productos actuales | Acción |
|---|---|---|---|
| emprendedigital | webcams | 2 | Añadir Elgato Facecam, Razer Kiyo, Logitech StreamCam |
| emprendedigital | iluminación | 2 | Añadir Godox SL-60W, Elgato Key Light, Neewer 660 |
| emprendedigital | escritorios | 2 | Añadir Duronic DM65, Autonomous SmartDesk, Fleximounts |
| guiadelpiscina | pérgolas | 2 | Añadir 1-2 pérgolas de aluminio |
| guiadelpiscina | riego-automatico | 2 | Añadir kit de riego por goteo, programador |
| guiadelpiscina | cesped-artificial | 2 | Añadir rollos de cesped de distintos gramajes |

---

### 5.2 Nuevas categorías de monetización no explotadas

| Sitio | Categoría propuesta | Artículo de blog existente | Impacto |
|---|---|---|---|
| guiadelpiscina | cloradores-salinos | mejor-clorador-salino-piscina ✅ | Alto |
| guiadelpiscina | accesorios-piscina (escaleras, cubiertas) | escalera, cubierta ✅ | Alto |
| guiadelpiscina | tumbonas | mejores-tumbonas-jardin ✅ | Medio |
| guiadelpiscina | sombrillas | mejores-sombrillas-jardin ✅ | Medio |
| fitnessfacil | elipticas | mejor-eliptica-casa-2025 ✅ | Alto |
| cuidatumascota | seguros-mascotas | — | Medio (nuevo canal) |

---

### 5.3 Imágenes de producto individuales (medio plazo, máximo impacto CRO)

Todos los sitios usan una única imagen por categoría para todos los productos de esa categoría. El resultado es que 5-9 productos distintos comparten exactamente la misma imagen en la ficha y en el listado. Esto afecta:
- CTR en Google Images (misma imagen para N productos)
- Conversión (el usuario no ve el producto real)
- Calidad del schema Product (imagen no específica del producto)
- Rich results de imágenes en Google Shopping

Este es el cambio de CRO de mayor impacto unitario que se puede hacer a medio plazo. Requiere añadir un campo `image?: string` al tipo `Product` en `data/products.ts` e ir completando progresivamente.

---

### 5.4 Precio visible en ProductCards (fitnessfacil)

Las tarjetas de producto en la home y categorías de fitnessfacil no muestran precio. El usuario no sabe el rango de precio hasta entrar a la ficha. Friction de conversión evitable.

**Acción:** Mostrar `priceMin` o rango de precio en la card con el formato "Desde X€".

---

## BLOQUE 6 — PERFORMANCE / CORE WEB VITALS

### 6.1 `<img>` HTML nativo en lugar de `next/image` — problema cross-site
**Impacto: Alto — CLS, AVIF/WebP inactivo, sin srcset responsive**

Todos los sitios usan `<img>` HTML nativo con `loading="eager/lazy"`. La configuración en `next.config.ts` de formatos AVIF/WebP y optimización de imágenes es completamente inerte sin el componente `<Image>` de Next.js. Además, la ausencia de `width` y `height` en las imágenes causa CLS (Cumulative Layout Shift).

**Acción (prioridad por impacto):**
1. ProductCard: migrar `<img>` a `<Image>` con `width={400}` `height={300}` y `loading="lazy"`
2. Hero de ficha de producto: `<Image>` con `priority` y dimensiones explícitas
3. Hero de artículo de blog: `<Image>` con `priority` y dimensiones del formato de imagen utilizado
4. Listing de blog: `<Image>` con `loading="lazy"` y `width={800}` `height={450}`

Esto activa automáticamente: AVIF/WebP según soporte del browser, srcset responsive según `deviceSizes` del config, `placeholder="blur"` disponible para mejor UX, y eliminación del CLS.

---

## BLOQUE 7 — COMPLIANCE

### 7.1 Banner de cookies sin gestión granular — cuidatumascota.es
**Impacto: Medio — gap vs estándar TCF 2.0 / AEPD 2025**

El banner solo ofrece "Aceptar" / "Rechazar" binario. La AEPD y el IAB TCF 2.0 recomiendan gestión granular (analytics vs publicidad vs personalización). El resto de sitios del portfolio tienen el mismo diseño.

**Acción:** Añadir un tercer botón "Solo necesarias" o un modal "Configurar" que permita aceptar analytics sin publicidad, actualizando `analytics_storage: "granted"` independientemente de `ad_storage`.

---

### 7.2 `rel="nofollow"` redundante en blog — juguetestem y emprendedigital
**Impacto: Bajo — señal semántica incorrecta**

Los artículos de blog usan `rel="nofollow sponsored noopener noreferrer"`. `nofollow` es redundante con `sponsored` y añade confusión semántica. Las páginas de producto sí usan solo `sponsored noopener noreferrer` correctamente.

**Acción:** Quitar `nofollow` de los enlaces de afiliado en templates de blog.

---

## BLOQUE 8 — GEO / VISIBILIDAD EN IAs

### 8.1 llms.txt desactualizado — cuidatumascota.es
**Impacto: Bajo — artículos nuevos invisibles para IAs como Claude, Perplexity**

`public/llms.txt` no incluye los 12 artículos publicados desde agosto 2025. Este archivo es relevante para que los LLMs indexen el contenido del sitio.

**Acción:** Actualizar `public/llms.txt` con los artículos nuevos organizados por categoría.

---

### 8.2 Speakable schema — estado por sitio

| Sitio | Speakable | Nota |
|---|---|---|
| cuidatumascota.es | ✅ | Implementado con cssSelector |
| fitnessfacil.es | ✅ | Implementado con cssSelector |
| emprendedigital.es | ✅ | Implementado |
| juguetestem.es | ✅ | Implementado |
| guiadelpiscina.com | ✅ | cssSelector: ["#respuesta-directa", "h1"] |

Todos los sitios tienen speakable. Sin acción necesaria.

---

## PLAN DE ACCIÓN PRIORIZADO — RESUMEN EJECUTIVO

### SPRINT 1 — Esta semana (bugs que bloquean ingresos)

| # | Acción | Sitio | Esfuerzo |
|---|---|---|---|
| A1 | Encontrar y actualizar los 12 ASINs falsos | fitnessfacil | 2-3h (investigación) |
| A2 | Corregir slug duplicado `royal-canin-medium-adult-15kg` | cuidatumascota | 15 min |
| A3 | Añadir AggregateRating + Offers al schema Product | juguetestem | 30 min |
| A4 | Crear 7 imágenes faltantes para categorías de tienda | guiadelpiscina | 1h (Pexels) |
| A5 | Sustituir `stableRating()` por datos reales en schema | ctm + ff + gdp | 20 min c/u |
| A6 | Añadir AffiliateDisclosure en cuanto-cloro-echar-piscina | guiadelpiscina | 5 min |

---

### SPRINT 2 — Este mes (SEO y conversión)

| # | Acción | Sitio | Impacto |
|---|---|---|---|
| B1 | Añadir `price` al schema Offer | Todos | Alto (rich results) |
| B2 | Canonical explícito en blog [slug] y blog/index | cuidatumascota | Alto |
| B3 | Refactorizar contacto.tsx a Server Component | cuidatumascota | Alto |
| B4 | Dinamizar home con getLatestPosts() | emprendedigital + gdp | Alto |
| B5 | Añadir relatedProducts a 7 posts sin enlace | emprendedigital | Alto |
| B6 | Añadir relatedPosts a 15 posts sin enlace blog→blog | juguetestem | Alto |
| B7 | Corregir 3 pares de productos duplicados | emprendedigital | Alto |
| B8 | Sustituir slugs fantasma en relatedPosts de 12 productos | fitnessfacil | Medio |
| B9 | Eliminar campo `keywords` de artículos individuales | guiadelpiscina | Bajo |
| B10 | Filtros de categoría de blog como links reales | cuidatumascota | Medio |
| B11 | Añadir categoría `/tienda/elipticas` + 2-3 productos | fitnessfacil | Alto |
| B12 | Crear categorías `cloradores-salinos` y `accesorios-piscina` | guiadelpiscina | Alto |

---

### SPRINT 3 — Próximos 30-45 días (contenido y CRO)

| # | Acción | Sitio | Prioridad |
|---|---|---|---|
| C1 | Publicar 6+ artículos para llegar a 40 | emprendedigital | Máxima |
| C2 | Crear artículo "Cómo cerrar la piscina para el invierno" | guiadelpiscina | Máxima (estacionalidad sept) |
| C3 | Crear artículos comparativas y por presupuesto Q4 | juguetestem | Máxima (est. Q4) |
| C4 | Crear artículos adiestramiento y comportamiento | cuidatumascota | Alta |
| C5 | Migrar `<img>` a `<Image>` de next/image | Todos | Alta (CWV) |
| C6 | Imágenes individuales por producto | Todos | Alta (CRO) |
| C7 | Añadir ItemList schema en páginas de categoría | emprendedigital | Medio |
| C8 | Añadir HowTo schema en guías paso a paso | emprendedigital | Bajo |
| C9 | Actualizar llms.txt | cuidatumascota | Bajo |
| C10 | Footer dinámico con últimos posts | cuidatumascota | Medio |
| C11 | Banner de cookies con gestión granular | Todos | Medio |
| C12 | Activar AdSense en todos los sitios | Todos | Máxima (ingresos) |

---

## MAPA DE FORTALEZAS (no tocar)

Lo que está bien hecho en todos los sitios:
- Consent Mode v2 correcto en los 5 sitios (`beforeInteractive`, default denied, todos los parámetros)
- Organization + WebSite schema completos (legalName, CIF, sameAs)
- Speakable schema en los 5 sitios — preparados para GEO/LLM search
- `rel="sponsored"` en CTAs de producto (correcto salvo el nofollow redundante señalado)
- Security headers en `next.config.ts` (X-Frame-Options, CSP, Referrer-Policy)
- Preconnect a AdSense en todos los layouts
- robots.ts con estrategia AI-inclusive (GPTBot, ClaudeBot, PerplexityBot permitidos)
- `next/font` con Geist autohosteado (elimina FOUT, sin petición a Google Fonts)
- BreadcrumbList en todas las páginas de producto y blog

---

*Documento generado: 15/08/2026 | Sistema Operativo CORE v2.14 | Portfolio Monetización*  
*Guardar en carpeta Drive "Monetización" como fuente de verdad para la próxima sesión*
