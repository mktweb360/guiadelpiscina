import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejor clorador salino para piscina — Guía completa | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejor clorador salino para piscina — Guía completa", kicker: "Guía" });
}
