#!/bin/bash
# ============================================================
# DEPLOY-schema-fixes.sh
# Deploys JSON-LD schema improvements to the 3 non-mounted repos
# (fitnessfacil, emprendedigital, juguetestem) from ~/guiadelpiscina/tmp-fixes/
#
# What this script does:
#   1. Copies improved layout.tsx to each repo (WebSite + Organization schema improvements)
#   2. Runs a Python patch script to add Article + FAQPage + BreadcrumbList to blog/[slug]/page.tsx
#   3. Runs `npm run build` to verify no build errors
#
# Run from any directory: bash ~/guiadelpiscina/tmp-fixes/DEPLOY-schema-fixes.sh
# ============================================================

set -e

FIXES_DIR="$HOME/guiadelpiscina/tmp-fixes"

echo "========================================"
echo "Schema Fix Deployment — $(date)"
echo "========================================"

# ------ FITNESSFACIL ------
echo ""
echo ">>> fitnessfacil"
REPO="$HOME/fitnessfacil"
if [ ! -d "$REPO" ]; then
  echo "  SKIP: $REPO not found"
else
  # 1. Copy improved layout.tsx
  cp "$FIXES_DIR/fitnessfacil-schema-layout.tsx" "$REPO/app/layout.tsx"
  echo "  OK: layout.tsx updated"

  # 2. Patch blog/[slug]/page.tsx with Article schema
  cd "$REPO"
  python3 "$FIXES_DIR/fitnessfacil-blog-slug-schema.patch.py"

  # 3. Build
  echo "  Running build..."
  npm run build 2>&1 | tail -10
  echo "  OK: fitnessfacil build complete"
fi

# ------ EMPRENDEDIGITAL ------
echo ""
echo ">>> emprendedigital"
REPO="$HOME/emprendedigital"
if [ ! -d "$REPO" ]; then
  echo "  SKIP: $REPO not found"
else
  cp "$FIXES_DIR/emprendedigital-schema-layout.tsx" "$REPO/app/layout.tsx"
  echo "  OK: layout.tsx updated"

  cd "$REPO"
  python3 "$FIXES_DIR/emprendedigital-blog-slug-schema.patch.py"

  echo "  Running build..."
  npm run build 2>&1 | tail -10
  echo "  OK: emprendedigital build complete"
fi

# ------ JUGUETESTEM ------
echo ""
echo ">>> juguetestem"
REPO="$HOME/juguetestem"
if [ ! -d "$REPO" ]; then
  echo "  SKIP: $REPO not found"
else
  cp "$FIXES_DIR/juguetestem-schema-layout.tsx" "$REPO/app/layout.tsx"
  echo "  OK: layout.tsx updated"

  cd "$REPO"
  python3 "$FIXES_DIR/juguetestem-blog-slug-schema.patch.py"

  echo "  Running build..."
  npm run build 2>&1 | tail -10
  echo "  OK: juguetestem build complete"
fi

echo ""
echo "========================================"
echo "All done. Verify with Google Rich Results Test:"
echo "  https://search.google.com/test/rich-results"
echo "========================================"
