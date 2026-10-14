import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "GARDENA Flex 1890-20: análisis completo y opinión 2026 | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "GARDENA Flex 1890-20: análisis completo y opinión 2026", kicker: "Análisis" });
}
