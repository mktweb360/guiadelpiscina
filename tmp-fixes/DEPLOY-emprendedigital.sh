#!/bin/bash
# Deploy fixes a emprendedigital
set -e

SRC=~/guiadelpiscina/tmp-fixes
DEST=~/emprendedigital

echo "=== Copiando fixes a emprendedigital ==="

# 1. layout.tsx — añade <meta name="google-adsense-account">
cp "$SRC/emprendedigital-layout.tsx" "$DEST/app/layout.tsx"
echo "✓ app/layout.tsx"

echo ""
echo "=== Verificando build... ==="
cd "$DEST"
npm run build 2>&1 | tail -15

echo ""
echo "=== Si OK, ejecuta: ==="
echo "cd ~/emprendedigital"
echo "git add -A"
echo "git commit -m 'fix: añadir meta google-adsense-account'"
echo "git push"
