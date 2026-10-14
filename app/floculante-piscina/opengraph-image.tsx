import { renderOgImage, ogSize } from "@/lib/og";

export const alt = "Floculante para piscina: cuándo usarlo y cómo aplicarlo | Guía del Piscina";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ title: "Floculante para piscina: cuándo usarlo y cómo aplicarlo", kicker: "Guía" });
}
