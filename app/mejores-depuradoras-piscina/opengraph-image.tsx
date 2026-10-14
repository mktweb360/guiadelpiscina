import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Las 5 mejores depuradoras para piscina — Análisis y comparativa | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Las 5 mejores depuradoras para piscina — Análisis y comparativa", kicker: "Guía" });
}
