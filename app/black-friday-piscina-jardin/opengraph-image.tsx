import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Black Friday 2026 en piscina y jardín: qué comprar en temporada baja | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Black Friday 2026 en piscina y jardín: qué comprar en temporada baja", kicker: "Temporada 2026" });
}
