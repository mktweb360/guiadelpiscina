import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Sistemas de riego automático para jardín — Comparativa | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Sistemas de riego automático para jardín — Comparativa", kicker: "Guía" });
}
