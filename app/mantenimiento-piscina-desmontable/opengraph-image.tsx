import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Mantenimiento piscina desmontable: guía paso a paso | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Mantenimiento piscina desmontable: guía paso a paso", kicker: "Guía" });
}
