# PROTOCOLO DE URLs — guiadelpiscina.com

## Regla cardinal de canonicales en Next.js 15 App Router

**NUNCA definir `alternates.canonical` en `app/layout.tsx` (root layout).**
Hacerlo propaga ese canonical a TODAS las páginas del sitio, sobrescribiendo los canonicales individuales.

### Reglas por tipo de página

| Tipo de página | Cómo definir metadata |
|---|---|
| Páginas estáticas individuales | `export const metadata: Metadata = { alternates: { canonical: "https://www.guiadelpiscina.com/ruta-exacta" } }` |
| Páginas con rutas dinámicas (`[slug]`) | `export async function generateMetadata({ params }) { return { alternates: { canonical: \`/ruta/${params.slug}\` } } }` |
| Root layout (`app/layout.tsx`) | Solo `metadataBase`, `title.template`, OG genérico. **Sin canonical.** |

---

## Estructura de URLs del proyecto

### Páginas estáticas
```
/                                   → app/page.tsx
/tienda                             → app/tienda/page.tsx
/aviso-legal                        → app/aviso-legal/page.tsx
/politica-de-privacidad             → app/politica-de-privacidad/page.tsx
/politica-de-cookies                → app/politica-de-cookies/page.tsx
```

### Páginas dinámicas (tienda)
```
/tienda/[categoria]                 → app/tienda/[categoria]/page.tsx
/tienda/[categoria]/[producto]      → app/tienda/[categoria]/[producto]/page.tsx
```

### Artículos (rutas individuales — NO blog/[slug])
```
/agua-piscina-verde                 → app/agua-piscina-verde/page.tsx
/robot-limpiafondos-piscina         → app/robot-limpiafondos-piscina/page.tsx
/mejores-depuradoras-piscina        → app/mejores-depuradoras-piscina/page.tsx
... (cada artículo tiene su propia carpeta)
```

### OG Images
```
app/opengraph-image.tsx                                 → og:image global por defecto
app/tienda/[categoria]/opengraph-image.tsx              → og:image por categoría
app/tienda/[categoria]/[producto]/opengraph-image.tsx   → og:image por producto
```

---

## Checklist antes de publicar un artículo nuevo

- [ ] Crear carpeta `app/[slug-del-articulo]/`
- [ ] Crear `page.tsx` con `export const metadata` incluyendo `alternates.canonical`
- [ ] El canonical debe ser la URL completa: `https://www.guiadelpiscina.com/[slug]`
- [ ] Verificar que NO se incluye `aggregateRating`, `price`, `priceCurrency` ni `availability` en Product schema si los datos son estáticos (no provienen de PA-API)
- [ ] Verificar que no se muestra `product.price`, `product.rating` ni `product.reviewCount` en UI si son datos hardcoded de Amazon
- [ ] Añadir internal links desde artículos relacionados

---

## Compliance Amazon Associates — Reglas críticas

**Prohibido mostrar en UI o JSON-LD sin usar PA-API en tiempo real:**
- Precio exacto (`product.price`)
- Rating numérico de Amazon (`product.rating`)
- Número de reseñas (`product.reviewCount`)
- Disponibilidad (`availability: InStock/OutOfStock`)

**Permitido:**
- Nombre del producto
- Descripción propia
- ASIN (en atributos internos, no visible)
- "Ver precio en Amazon →" como CTA
- "Disponible en Amazon España" como descripción neutral
- Precio orientativo propio (no extraído de Amazon): "Desde 199€" si es estimación editorial

---

*Última actualización: 2025 — Generado durante auditoría SEO/compliance guiadelpiscina.com*
