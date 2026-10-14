import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Las mejores tumbonas de jardín — Comparativa y análisis | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Las mejores tumbonas de jardín — Comparativa y análisis", kicker: "Guía" });
}
