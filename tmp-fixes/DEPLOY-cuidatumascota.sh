#!/bin/bash
# Deploy SEO fixes to cuidatumascota.es
# Ejecutar desde cualquier directorio: bash ~/guiadelpiscina/tmp-fixes/DEPLOY-cuidatumascota.sh

set -e

SRC=~/guiadelpiscina/tmp-fixes
DEST=~/cuidatumascota

echo "=== Copiando fixes a cuidatumascota ==="

# 1. layout.tsx (Consent Mode v2 + AdSense meta + Script beforeInteractive)
cp "$SRC/layout.tsx" "$DEST/app/layout.tsx"
echo "✓ app/layout.tsx"

# 2. CookieBanner.tsx (pushConsentUpdate + gtag declare global)
cp "$SRC/CookieBanner.tsx" "$DEST/components/CookieBanner.tsx"
echo "✓ components/CookieBanner.tsx"

# 3. ProductCard.tsx (sin precio, sin estrellas, CTA 'Ver precio en Amazon')
cp "$SRC/ProductCard.tsx" "$DEST/components/ProductCard.tsx"
echo "✓ components/ProductCard.tsx"

# 4. Página de producto (sin aggregateRating, sin price en schema ni UI)
cp "$SRC/producto-page.tsx" "$DEST/app/tienda/[categoria]/[producto]/page.tsx"
echo "✓ app/tienda/[categoria]/[producto]/page.tsx"

# 5. Página de categoría (canónica añadida)
cp "$SRC/categoria-page.tsx" "$DEST/app/tienda/[categoria]/page.tsx"
echo "✓ app/tienda/[categoria]/page.tsx"

# 6. Página de tienda (canónica añadida)
cp "$SRC/tienda-page.tsx" "$DEST/app/tienda/page.tsx"
echo "✓ app/tienda/page.tsx"

# 7-9. OG images (nuevas)
cp "$SRC/opengraph-image.tsx" "$DEST/app/opengraph-image.tsx"
echo "✓ app/opengraph-image.tsx"

cp "$SRC/categoria-opengraph-image.tsx" "$DEST/app/tienda/[categoria]/opengraph-image.tsx"
echo "✓ app/tienda/[categoria]/opengraph-image.tsx"

cp "$SRC/producto-opengraph-image.tsx" "$DEST/app/tienda/[categoria]/[producto]/opengraph-image.tsx"
echo "✓ app/tienda/[categoria]/[producto]/opengraph-image.tsx"

echo ""
echo "=== Archivos copiados. Verificando build... ==="
cd "$DEST"
npm run build 2>&1 | tail -20

echo ""
echo "=== Si el build es OK, ejecuta: ==="
echo "cd ~/cuidatumascota"
echo "git add -A"
echo "git commit -m 'fix: SEO audit — consent mode v2, canónicos, Amazon compliance, og:image'"
echo "git push"
