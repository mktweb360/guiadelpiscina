#!/bin/bash
# Deploy SEO fixes a juguetestem
set -e

SRC=~/guiadelpiscina/tmp-fixes
DEST=~/juguetestem

echo "=== Copiando fixes a juguetestem ==="

# 1. layout.tsx — añade meta google-adsense-account
cp "$SRC/juguetestem-layout.tsx" "$DEST/app/layout.tsx"
echo "✓ app/layout.tsx"

# 2. ProductCard.tsx — elimina precio, estrellas y reviewCount
cp "$SRC/juguetestem-ProductCard.tsx" "$DEST/components/ProductCard.tsx"
echo "✓ components/ProductCard.tsx"

# 3. tienda/page.tsx — canónico absoluto
cp "$SRC/juguetestem-tienda-page.tsx" "$DEST/app/tienda/page.tsx"
echo "✓ app/tienda/page.tsx"

# 4. tienda/[categoria]/page.tsx — añade canónico absoluto
cp "$SRC/juguetestem-categoria-page.tsx" "$DEST/app/tienda/[categoria]/page.tsx"
echo "✓ app/tienda/[categoria]/page.tsx"

# 5. tienda/[categoria]/[producto]/page.tsx — canónico relativo → absoluto
cp "$SRC/juguetestem-producto-page.tsx" "$DEST/app/tienda/[categoria]/[producto]/page.tsx"
echo "✓ app/tienda/[categoria]/[producto]/page.tsx"

# 6. OG images (nuevas)
cp "$SRC/juguetestem-categoria-opengraph-image.tsx" "$DEST/app/tienda/[categoria]/opengraph-image.tsx"
echo "✓ app/tienda/[categoria]/opengraph-image.tsx"

cp "$SRC/juguetestem-producto-opengraph-image.tsx" "$DEST/app/tienda/[categoria]/[producto]/opengraph-image.tsx"
echo "✓ app/tienda/[categoria]/[producto]/opengraph-image.tsx"

echo ""
echo "=== Verificando build... ==="
cd "$DEST"
npm run build 2>&1 | tail -20

echo ""
echo "=== Si OK, ejecuta: ==="
echo "cd ~/juguetestem"
echo "git add -A"
echo "git commit -m 'fix: SEO audit — AdSense meta, Amazon compliance, canónicos absolutos, og:image'"
echo "git push"
