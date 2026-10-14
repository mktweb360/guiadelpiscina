import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejores piscinas desmontables grandes — Guía de compra | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejores piscinas desmontables grandes — Guía de compra", kicker: "Guía" });
}
