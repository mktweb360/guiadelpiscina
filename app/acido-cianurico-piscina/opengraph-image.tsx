import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026) | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Ácido cianúrico en la piscina: qué es, valores ideales y cómo bajarlo (2026)", kicker: "Guía" });
}
