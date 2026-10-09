import type { NextConfig } from "next";

// Redirects 301 (loop 07/10/2026): URLs de producto retiradas del catálogo (historial git de data/products.ts, 33 slugs).
// Destino: producto vivo equivalente o, si no lo hay, categoría padre / artículo relacionado. Mantener al retirar URLs en el futuro.
const productRedirects = [
  { source: "/tienda/pergolas/outsunny-pergola-bioclimatica-3x4-aluminio", destination: "/tienda/pergolas/sweeek-triomphe-v2-pergola-bioclimatica", permanent: true },
  { source: "/tienda/pergolas/vidaxl-pergola-jardin-banco-madera", destination: "/tienda/pergolas", permanent: true },
  { source: "/tienda/pergolas/outsunny-pergola-3x3-techo-retractil", destination: "/tienda/pergolas/habitat-jardin-windsor-pergola-3x3", permanent: true },
  { source: "/tienda/pergolas/pergola-aluminio-bioclimatica-3x3", destination: "/tienda/pergolas/sweeek-triomphe-v2-pergola-bioclimatica", permanent: true },
  { source: "/tienda/riego-automatico/gardena-micro-drip-riego-goteo-bancal", destination: "/tienda/riego-automatico", permanent: true },
  { source: "/tienda/riego-automatico/gardena-smart-sistema-riego", destination: "/tienda/riego-automatico/gardena-smart-set-riego-gateway", permanent: true },
  { source: "/tienda/cesped-artificial/jardin202-almeria-40mm-2x10m", destination: "/tienda/cesped-artificial/jardin202-premium-40mm-4x2m", permanent: true },
  { source: "/tienda/cesped-artificial/cesped-artificial-30mm-rollo-2x5m", destination: "/tienda/cesped-artificial", permanent: true },
  { source: "/tienda/cesped-artificial/cesped-artificial-5mm-decorativo-2x3m", destination: "/tienda/cesped-artificial", permanent: true },
  { source: "/tienda/cesped-artificial/cesped-artificial-40mm-verde", destination: "/tienda/cesped-artificial/jardin202-malaga-premium-40mm", permanent: true },
  { source: "/tienda/robots-limpiafondos/dolphin-e20-robot-limpiafondos-paredes", destination: "/tienda/robots-limpiafondos/aiper-scuba-s1-robot-piscina", permanent: true },
  { source: "/tienda/robots-limpiafondos/dolphin-nauty", destination: "/tienda/robots-limpiafondos", permanent: true },
  { source: "/tienda/robots-limpiafondos/dolphin-sigma", destination: "/tienda/robots-limpiafondos", permanent: true },
  { source: "/tienda/robots-limpiafondos/zodiac-vortex-3", destination: "/tienda/robots-limpiafondos", permanent: true },
  { source: "/tienda/robots-limpiafondos/talosbo-sk02-skimmer-solar-piscina", destination: "/tienda/robots-limpiafondos", permanent: true },
  { source: "/tienda/bombas-calor/poolex-qline-7-full-inverter-bomba-calor", destination: "/tienda/bombas-calor/poolex-nano-action-5-bomba-calor", permanent: true },
  { source: "/tienda/bombas-calor/gre-hpg25-bomba-calor-25m3", destination: "/tienda/bombas-calor/gre-hpm20-bomba-calor", permanent: true },
  { source: "/tienda/bombas-calor/hayward-heatpro-w3hp21004t", destination: "/tienda/bombas-calor", permanent: true },
  { source: "/tienda/bombas-calor/intex-28684-bomba-calor", destination: "/tienda/bombas-calor", permanent: true },
  { source: "/tienda/tratamiento-agua/diamas-ph-plus-granulado-incrementador-piscina", destination: "/tienda/tratamiento-agua", permanent: true },
  { source: "/tienda/muebles-jardin/outsunny-sombrilla-jardin-250cm", destination: "/mejores-sombrillas-jardin", permanent: true },
  { source: "/tienda/muebles-jardin/outsunny-sombrilla-jardin-300cm", destination: "/mejores-sombrillas-jardin", permanent: true },
  { source: "/tienda/muebles-jardin/aktive-sombrilla-pared-rectangular", destination: "/mejores-sombrillas-jardin", permanent: true },
  { source: "/tienda/muebles-jardin/conjunto-rattan-4-piezas", destination: "/tienda/muebles-jardin/outsunny-conjunto-ratan-4-piezas", permanent: true },
  { source: "/tienda/muebles-jardin/tumbona-plegable-aluminio", destination: "/tienda/muebles-jardin/aktive-62611-tumbona-aluminio", permanent: true },
  { source: "/tienda/piscinas-desmontables/intex-28101np-easy-set-piscina-pequena", destination: "/tienda/piscinas-desmontables", permanent: true },
  { source: "/tienda/piscinas-desmontables/intex-ultra-xtr-rectangular", destination: "/tienda/piscinas-desmontables/intex-ultra-xtr-549x274-depuradora", permanent: true },
  { source: "/tienda/piscinas-desmontables/bestway-steel-pro-max-366", destination: "/tienda/piscinas-desmontables/bestway-steel-pro-max-366x100", permanent: true },
  { source: "/tienda/depuradoras/intex-28636", destination: "/tienda/depuradoras/intex-28636-depuradora-cartucho", permanent: true },
  { source: "/tienda/depuradoras/bestway-flowclear-58496", destination: "/tienda/depuradoras/bestway-flowclear-depuradora-arena", permanent: true },
  { source: "/tienda/depuradoras/gre-ar450", destination: "/tienda/depuradoras", permanent: true },
  { source: "/tienda/depuradoras/hayward-s180t", destination: "/tienda/depuradoras", permanent: true },
  { source: "/tienda/depuradoras/intex-28648-cartucho", destination: "/tienda/depuradoras/intex-28636-depuradora-cartucho", permanent: true },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return productRedirects;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
