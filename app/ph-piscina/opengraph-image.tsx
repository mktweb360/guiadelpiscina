import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "pH piscina: valores ideales, cómo medirlo y corregirlo | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "pH piscina: valores ideales, cómo medirlo y corregirlo", kicker: "Guía" });
}
