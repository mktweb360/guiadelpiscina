import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Blog — Guías de compra y análisis de productos | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Blog — Guías de compra y análisis de productos", kicker: "Blog" });
}
