import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "¿Cuánto cloro echar en piscina? Dosis exactas por litros | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "¿Cuánto cloro echar en piscina? Dosis exactas por litros", kicker: "Guía" });
}
