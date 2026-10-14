import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Bomba de calor para piscina: las mejores opciones y cómo elegir | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Bomba de calor para piscina: las mejores opciones y cómo elegir", kicker: "Guía" });
}
