import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026) | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Skimmer de piscina: qué es y cuándo interesa uno automático solar (2026)", kicker: "Guía" });
}
