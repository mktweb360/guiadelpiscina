import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejor escalera piscina desmontable — Guía de compra | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejor escalera piscina desmontable — Guía de compra", kicker: "Guía" });
}
