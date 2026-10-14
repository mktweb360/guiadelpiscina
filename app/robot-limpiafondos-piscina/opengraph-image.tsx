import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejores robots limpiafondos para piscina — Guía de compra | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejores robots limpiafondos para piscina — Guía de compra", kicker: "Guía" });
}
