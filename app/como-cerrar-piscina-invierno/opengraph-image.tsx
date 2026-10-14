import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026) | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Cómo cerrar la piscina para el invierno: guía completa paso a paso (2026)", kicker: "Guía" });
}
