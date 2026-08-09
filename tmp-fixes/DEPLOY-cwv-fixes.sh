#!/usr/bin/env bash
# =============================================================================
# DEPLOY-cwv-fixes.sh
# Core Web Vitals fixes — staged for fitnessfacil, emprendedigital, juguetestem
# Generated: 2026-08-09
#
# USAGE:
#   chmod +x DEPLOY-cwv-fixes.sh
#   ./DEPLOY-cwv-fixes.sh /path/to/repos
#
# The script copies each CWV-fixed file to the correct location in the target
# repo directories. It creates backups of the originals in ./cwv-backups/.
#
# Expected repo layout (sibling directories):
#   <repos_root>/fitnessfacil/
#   <repos_root>/emprendedigital/
#   <repos_root>/juguetestem/
#
# WHAT EACH FIX DOES:
#   layout.tsx changes (all 3 sites):
#     - Adds next/font (Geist, subsets:["latin"]) — self-hosted, display:swap,
#       auto-preload. Eliminates any potential FOUT on web font adoption.
#     - Adds <link rel="preconnect" href="https://pagead2.googlesyndication.com">
#       and dns-prefetch hints — reduces TCP latency before AdSense script loads.
#     - Adds <meta name="google-adsense-account"> — AdSense site verification.
#     - Wires geistSans.variable class onto <html> element.
#   globals.css changes (all 3 sites):
#     - Adds @theme inline { --font-sans: var(--font-geist-sans) } so Tailwind
#       font-sans utilities resolve to Geist.
#     - Changes body font-family from hardcoded Arial to
#       var(--font-geist-sans, Arial, Helvetica, sans-serif) so the loaded
#       font actually renders on body text (display:swap fallback = Arial).
#
# NOTE: fitnessfacil and juguetestem previously had no web fonts at all (system
#       fonts only). Adding Geist via next/font is a low-overhead improvement —
#       Next.js inlines the @font-face at build time and emits a preload hint,
#       so there is no extra render-blocking network request.
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPOS_ROOT="${1:-$(dirname "$SCRIPT_DIR")}"

backup_and_copy() {
  local src="$1"
  local dest="$2"
  local backup_dir="$SCRIPT_DIR/cwv-backups/$(date +%Y%m%d_%H%M%S)"

  mkdir -p "$backup_dir"

  if [[ -f "$dest" ]]; then
    local backup_name
    backup_name="$(basename "$dest").bak"
    cp "$dest" "$backup_dir/$backup_name"
    echo "  Backed up: $dest -> $backup_dir/$backup_name"
  fi

  cp "$src" "$dest"
  echo "  Applied:   $src -> $dest"
}

echo ""
echo "============================================================"
echo "  Core Web Vitals Fixes — Deploy Script"
echo "  Repos root: $REPOS_ROOT"
echo "============================================================"

# ─── fitnessfacil ────────────────────────────────────────────────────────────
echo ""
echo "[ 1/3 ] fitnessfacil.es"

FF_ROOT="$REPOS_ROOT/fitnessfacil"
if [[ ! -d "$FF_ROOT" ]]; then
  echo "  WARNING: $FF_ROOT not found — skipping fitnessfacil"
else
  backup_and_copy "$SCRIPT_DIR/fitnessfacil-cwv-layout.tsx"  "$FF_ROOT/app/layout.tsx"
  backup_and_copy "$SCRIPT_DIR/fitnessfacil-cwv-globals.css" "$FF_ROOT/app/globals.css"
  echo "  Done. Run: cd $FF_ROOT && pnpm build"
fi

# ─── emprendedigital ─────────────────────────────────────────────────────────
echo ""
echo "[ 2/3 ] emprendedigital.es"

ED_ROOT="$REPOS_ROOT/emprendedigital"
if [[ ! -d "$ED_ROOT" ]]; then
  echo "  WARNING: $ED_ROOT not found — skipping emprendedigital"
else
  backup_and_copy "$SCRIPT_DIR/emprendedigital-cwv-layout.tsx"  "$ED_ROOT/app/layout.tsx"
  backup_and_copy "$SCRIPT_DIR/emprendedigital-cwv-globals.css" "$ED_ROOT/app/globals.css"
  echo "  Done. Run: cd $ED_ROOT && pnpm build"
fi

# ─── juguetestem ─────────────────────────────────────────────────────────────
echo ""
echo "[ 3/3 ] juguetestem.es"

JS_ROOT="$REPOS_ROOT/juguetestem"
if [[ ! -d "$JS_ROOT" ]]; then
  echo "  WARNING: $JS_ROOT not found — skipping juguetestem"
else
  backup_and_copy "$SCRIPT_DIR/juguetestem-cwv-layout.tsx"  "$JS_ROOT/app/layout.tsx"
  backup_and_copy "$SCRIPT_DIR/juguetestem-cwv-globals.css" "$JS_ROOT/app/globals.css"
  echo "  Done. Run: cd $JS_ROOT && pnpm build"
fi

echo ""
echo "============================================================"
echo "  All CWV fixes applied. Verify with:"
echo "  pnpm build && pnpm start"
echo "  Then run Lighthouse or PageSpeed Insights on each site."
echo "============================================================"
echo ""
