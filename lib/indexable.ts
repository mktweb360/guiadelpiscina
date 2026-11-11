// Fichas de producto que se mantienen indexables (11/2026).
// Criterio: las más citadas por las guías del sitio. El resto de fichas siguen accesibles para el
// usuario, pero con noindex,follow y fuera del sitemap: Google AdSense evalúa el sitio completo y
// las fichas plantilla de afiliado restaban valor al conjunto.
export const FEATURED_PRODUCT_SLUGS = new Set<string>([
  "intex-55249-depuradora-arena-3500",
  "intex-28166-easy-set-457x107",
  "intex-55225-depuradora-arena-5700",
  "intex-28648-depuradora-arena-14",
  "arebos-cubierta-solar-piscina-500x800-400um",
  "arebos-cubierta-solar-piscina-450x220-120um",
  "decathlon-bfit-gafas-natacion-antivaho-ahumadas",
  "intex-26726np-prism-frame-redonda-457x122",
  "aquachek-tiras-4-en-1-cloro-ph",
  "gre-770803-depuradora-arena-4000",
  "intex-c2500-depuradora-cartucho",
  "vevor-cubierta-solar-piscina-732x366",
  "pack-2-tumbonas-gravedad-cero-bandeja",
  "gre-ar125-depuradora-cartucho-3800",
  "intex-28272np-piscina-small-frame-300x200",
]);

export const isFeaturedProduct = (slug: string) => FEATURED_PRODUCT_SLUGS.has(slug);
