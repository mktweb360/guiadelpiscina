import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026) | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Programador de riego para grifo: cómo elegir entre mecánico, electrónico y smart (2026)", kicker: "Guía" });
}
