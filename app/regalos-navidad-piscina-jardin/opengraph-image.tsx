import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Regalos de Navidad y Reyes para amantes del jardín y la piscina (2026) | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Regalos de Navidad y Reyes para amantes del jardín y la piscina (2026)", kicker: "Temporada 2026" });
}
