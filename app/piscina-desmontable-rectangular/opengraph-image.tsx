import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Piscina desmontable rectangular: medidas, litros y modelos | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Piscina desmontable rectangular: medidas, litros y modelos", kicker: "Guía" });
}
