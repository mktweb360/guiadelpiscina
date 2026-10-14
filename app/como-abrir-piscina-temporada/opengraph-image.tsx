import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Cómo abrir la piscina para el verano: guía completa paso a paso | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Cómo abrir la piscina para el verano: guía completa paso a paso", kicker: "Guía" });
}
