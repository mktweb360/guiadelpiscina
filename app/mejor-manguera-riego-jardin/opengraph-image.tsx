import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejor manguera de riego para jardín — Guía de compra | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejor manguera de riego para jardín — Guía de compra", kicker: "Guía" });
}
