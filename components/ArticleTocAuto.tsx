"use client";

import { useEffect, useState } from "react";
import ArticleToc, { type TocItem } from "@/components/ArticleToc";
import { anchorId } from "@/lib/anchors";

/** Lee los h2 del artículo ya renderizado, les asigna un id si no lo tienen y devuelve el índice. */
export function useArticleHeadings(): TocItem[] {
  const [items, setItems] = useState<TocItem[]>([]);
  useEffect(() => {
    const root = document.querySelector("article") ?? document.querySelector("main");
    if (!root) return;
    const used = new Set<string>();
    const found: TocItem[] = [];
    root.querySelectorAll<HTMLHeadingElement>("h2").forEach((h) => {
      if (h.closest("aside")) return;
      const label = (h.textContent ?? "").trim();
      if (!label) return;
      let id = h.id || anchorId(label);
      let n = 2;
      while (used.has(id)) id = `${anchorId(label)}-${n++}`;
      used.add(id);
      h.id = id;
      h.classList.add("scroll-mt-24");
      found.push({ id, label });
    });
    setItems(found);
  }, []);
  return items;
}

export default function ArticleTocAuto({ variant }: { variant: "mobile" | "side" }) {
  const items = useArticleHeadings();
  return <ArticleToc items={items} variant={variant} />;
}
