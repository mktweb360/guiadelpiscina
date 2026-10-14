import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "AIPER Scuba SE: análisis completo y opinión 2026 | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "AIPER Scuba SE: análisis completo y opinión 2026", kicker: "Análisis" });
}
