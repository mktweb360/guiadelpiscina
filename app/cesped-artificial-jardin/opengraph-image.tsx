import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mejor césped artificial para jardín | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mejor césped artificial para jardín", kicker: "Guía" });
}
