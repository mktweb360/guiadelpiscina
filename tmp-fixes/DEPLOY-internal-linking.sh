#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# DEPLOY — Hub-and-spoke internal linking
# Sites: emprendedigital.es  |  juguetestem.es
#
# Adds:
#   • categoryCta on blog articles → links end-of-article CTA to category hub
#   • relatedPosts on products     → shows "Guías relacionadas" on product pages
#   • Blog page.tsx  — renders categoryCta CTA block (before relatedPosts)
#   • Product page.tsx — renders "Guías relacionadas" section (before "Otros productos")
#
# USO:
#   cd ~/guiadelpiscina/tmp-fixes
#   chmod +x DEPLOY-internal-linking.sh
#   ./DEPLOY-internal-linking.sh
#
# Requisito: ~/emprendedigital y ~/juguetestem deben existir (repos clonados).
# ─────────────────────────────────────────────────────────────────────────────

set -e

STAGING="$HOME/guiadelpiscina/tmp-fixes"
EMP="$HOME/emprendedigital"
JUG="$HOME/juguetestem"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "══════════════════════════════════════════════════════════════"
echo " DEPLOY — Internal linking (hub-and-spoke)"
echo " Timestamp: $TIMESTAMP"
echo "══════════════════════════════════════════════════════════════"

# ── Verificar repos ──────────────────────────────────────────────────────────
for REPO in "$EMP" "$JUG"; do
  if [ ! -d "$REPO" ]; then
    echo "ERROR: No se encuentra el repo en $REPO"
    exit 1
  fi
done
echo "✓ Repos encontrados"

# ════════════════════════════════════════════════════════════════
# 1. EMPRENDEDIGITAL
# ════════════════════════════════════════════════════════════════
echo ""
echo "── emprendedigital.es ──────────────────────────────────────"

# Backups
cp "$EMP/data/posts.ts"                                      "$STAGING/BACKUP_emp_posts_${TIMESTAMP}.ts"
cp "$EMP/data/products.ts"                                   "$STAGING/BACKUP_emp_products_${TIMESTAMP}.ts"
cp "$EMP/app/blog/[slug]/page.tsx"                           "$STAGING/BACKUP_emp_blog_page_${TIMESTAMP}.tsx"
cp "$EMP/app/tienda/[categoria]/[producto]/page.tsx"         "$STAGING/BACKUP_emp_producto_page_${TIMESTAMP}.tsx"
echo "✓ Backups creados"

# Deploy files
cp "$STAGING/emprendedigital-posts-linking.ts"       "$EMP/data/posts.ts"
echo "✓ data/posts.ts (categoryCta en 19 artículos)"

cp "$STAGING/emprendedigital-products-linking.ts"    "$EMP/data/products.ts"
echo "✓ data/products.ts (relatedPosts en 24 productos)"

cp "$STAGING/emprendedigital-blog-slug-page.tsx"     "$EMP/app/blog/[slug]/page.tsx"
echo "✓ app/blog/[slug]/page.tsx (bloque categoryCta añadido)"

cp "$STAGING/emprendedigital-producto-page.tsx"      "$EMP/app/tienda/[categoria]/[producto]/page.tsx"
echo "✓ app/tienda/[categoria]/[producto]/page.tsx (Guías relacionadas añadido)"

# Build check
echo ""
echo "Verificando build emprendedigital..."
cd "$EMP"
npm run build 2>&1 | tail -8
echo ""

# ════════════════════════════════════════════════════════════════
# 2. JUGUETESTEM
# ════════════════════════════════════════════════════════════════
echo "── juguetestem.es ──────────────────────────────────────────"

# Backups
cp "$JUG/data/posts.ts"                                      "$STAGING/BACKUP_jug_posts_${TIMESTAMP}.ts"
cp "$JUG/data/products.ts"                                   "$STAGING/BACKUP_jug_products_${TIMESTAMP}.ts"
cp "$JUG/app/blog/[slug]/page.tsx"                           "$STAGING/BACKUP_jug_blog_page_${TIMESTAMP}.tsx"
cp "$JUG/app/tienda/[categoria]/[producto]/page.tsx"         "$STAGING/BACKUP_jug_producto_page_${TIMESTAMP}.tsx"
echo "✓ Backups creados"

# Deploy files
cp "$STAGING/juguetestem-posts-linking.ts"           "$JUG/data/posts.ts"
echo "✓ data/posts.ts (categoryCta en 48 artículos)"

cp "$STAGING/juguetestem-products-linking.ts"        "$JUG/data/products.ts"
echo "✓ data/products.ts (relatedPosts en 15 productos)"

cp "$STAGING/juguetestem-blog-slug-page.tsx"         "$JUG/app/blog/[slug]/page.tsx"
echo "✓ app/blog/[slug]/page.tsx (bloque categoryCta añadido)"

cp "$STAGING/juguetestem-producto-page.tsx"          "$JUG/app/tienda/[categoria]/[producto]/page.tsx"
echo "✓ app/tienda/[categoria]/[producto]/page.tsx (Guías relacionadas añadido)"

# Build check
echo ""
echo "Verificando build juguetestem..."
cd "$JUG"
npm run build 2>&1 | tail -8
echo ""

# ════════════════════════════════════════════════════════════════
# 3. GIT COMMITS
# ════════════════════════════════════════════════════════════════
echo "══════════════════════════════════════════════════════════════"
echo " Si ambos builds son OK, ejecuta:"
echo ""
echo "  cd ~/emprendedigital"
echo "  git add data/posts.ts data/products.ts app/blog/\\[slug\\]/page.tsx app/tienda/\\[categoria\\]/\\[producto\\]/page.tsx"
echo "  git commit -m 'feat: hub-and-spoke internal linking (categoryCta + Guías relacionadas)'"
echo "  git push"
echo ""
echo "  cd ~/juguetestem"
echo "  git add data/posts.ts data/products.ts app/blog/\\[slug\\]/page.tsx app/tienda/\\[categoria\\]/\\[producto\\]/page.tsx"
echo "  git commit -m 'feat: hub-and-spoke internal linking (categoryCta + Guías relacionadas)'"
echo "  git push"
echo "══════════════════════════════════════════════════════════════"
