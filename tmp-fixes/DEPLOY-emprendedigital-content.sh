#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# DEPLOY — Nuevos artículos emprendedigital.es
# Artículos: mejor-tablet-teletrabajo-2025 | herramientas-ia-productividad-2025 | mejor-hub-usb-c-portatil-2025
#
# USO:
#   cd ~/guiadelpiscina/tmp-fixes
#   chmod +x DEPLOY-emprendedigital-content.sh
#   ./DEPLOY-emprendedigital-content.sh
#
# Requisito: ~/emprendedigital debe existir (repo clonado).
# Hace copia de seguridad de los archivos modificados antes de tocar nada.
# ─────────────────────────────────────────────────────────────────────────────

set -e

REPO="$HOME/emprendedigital"
STAGING="$HOME/guiadelpiscina/tmp-fixes"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# ── 1. Verificar que el repo existe ──────────────────────────────────────────
if [ ! -d "$REPO" ]; then
  echo "ERROR: No se encuentra el repo en $REPO"
  echo "Clona primero: git clone git@github.com:mktweb360/emprendedigital.git ~/emprendedigital"
  exit 1
fi

echo "✓ Repo encontrado en $REPO"

# ── 2. Copias de seguridad ────────────────────────────────────────────────────
cp "$REPO/data/posts.ts"                    "$STAGING/BACKUP_emprendedigital_posts_${TIMESTAMP}.ts"
cp "$REPO/app/blog/[slug]/page.tsx"         "$STAGING/BACKUP_emprendedigital_page_${TIMESTAMP}.tsx"
echo "✓ Backups guardados en $STAGING/"

# ── 3. Patch data/posts.ts — añadir los 3 nuevos posts al array ──────────────
node - <<'EOF'
const fs = require('fs');
const path = require('path');

const postsFile = path.join(process.env.HOME, 'emprendedigital/data/posts.ts');
let content = fs.readFileSync(postsFile, 'utf8');

const newPosts = `
  {
    slug: "mejor-tablet-teletrabajo-2025",
    title: "Mejor tablet para trabajar desde casa 2025: iPad vs Android vs Windows",
    excerpt:
      "Comparativa de las mejores tablets para teletrabajo en 2025: iPad Air M2, Galaxy Tab S9 FE y Surface Pro 9. Guía por ecosistema, uso y presupuesto.",
    date: "2025-08-05",
    category: "Productividad",
    readTime: "9 min",
    relatedPosts: [
      "mejor-monitor-home-office-2025",
      "home-office-setup-productivo-guia",
      "herramientas-productividad-trabajo-remoto-2025",
      "mejor-hub-usb-c-portatil-2025",
    ],
  },
  {
    slug: "herramientas-ia-productividad-2025",
    title: "Las mejores herramientas de IA para trabajar y emprender en 2025",
    excerpt:
      "Guía práctica de las mejores herramientas de inteligencia artificial para autónomos y equipos pequeños en 2025: escritura, reuniones, diseño, automatización y ventas.",
    date: "2025-08-06",
    category: "Emprender Online",
    readTime: "10 min",
    relatedPosts: [
      "herramientas-productividad-trabajo-remoto-2025",
      "como-empezar-negocio-online-desde-casa-2025",
      "productividad-trabajando-desde-casa-habitos",
      "trabajo-remoto-espana-guia-completa-2025",
    ],
  },
  {
    slug: "mejor-hub-usb-c-portatil-2025",
    title: "Mejor hub USB-C para portátil 2025: guía de compra y comparativa",
    excerpt:
      "Los mejores hubs USB-C para MacBook y portátiles Windows en 2025: qué puertos necesitas, diferencias con una docking station y los 5 modelos más recomendados.",
    date: "2025-08-07",
    category: "Home Office",
    readTime: "8 min",
    relatedPosts: [
      "mejor-monitor-home-office-2025",
      "home-office-setup-productivo-guia",
      "mejor-tablet-teletrabajo-2025",
      "setup-trabajo-remoto-productividad-maxima",
    ],
  },`;

const marker = '];\n\nexport function getPostBySlug';
if (!content.includes(marker)) {
  console.error('ERROR: No se encontró el marcador de cierre del array en posts.ts');
  console.error('Buscado: ' + JSON.stringify(marker));
  process.exit(1);
}

content = content.replace(marker, newPosts + '\n' + marker);
fs.writeFileSync(postsFile, content, 'utf8');
console.log('✓ data/posts.ts actualizado con 3 nuevos posts');
EOF

# ── 4. Patch app/blog/[slug]/page.tsx — añadir los 3 nuevos articleContent ──
node - <<'NODEEOF'
const fs = require('fs');
const path = require('path');

const pageFile = path.join(process.env.HOME, 'emprendedigital/app/blog/[slug]/page.tsx');
const stagingDir = path.join(process.env.HOME, 'guiadelpiscina/tmp-fixes');

let content = fs.readFileSync(pageFile, 'utf8');

// Extraer solo el bloque export const articleContent = { ... }; de cada archivo de artículo
function extractArticleContent(filePath) {
  let raw = fs.readFileSync(filePath, 'utf8');
  // Obtener el slug y el contenido del objeto articleContent
  const match = raw.match(/export const articleContent = (\{[\s\S]+\});?\s*$/);
  if (!match) {
    console.error('ERROR: No se encontró articleContent en ' + filePath);
    process.exit(1);
  }
  // Obtener el slug desde postMeta
  const slugMatch = raw.match(/slug:\s*"([^"]+)"/);
  if (!slugMatch) {
    console.error('ERROR: No se encontró slug en ' + filePath);
    process.exit(1);
  }
  const slug = slugMatch[1];
  // Extraer el contenido del objeto (sin el wrapping export const articleContent = )
  // Quitamos el último ; si existe
  let objBody = match[1].replace(/;$/, '');
  return `\n  "${slug}": ${objBody},`;
}

const articleFiles = [
  'emprendedigital-tablets-teletrabajo.ts',
  'emprendedigital-herramientas-ia-productividad.ts',
  'emprendedigital-hub-usb-c.ts',
];

let newEntries = '';
for (const file of articleFiles) {
  const filePath = path.join(stagingDir, file);
  newEntries += extractArticleContent(filePath);
}

// Insertar antes del último }; del objeto articleContent
// El objeto cierra con "\n};\n" — buscamos la última ocurrencia
const lastClose = content.lastIndexOf('\n};\n');
if (lastClose === -1) {
  console.error('ERROR: No se encontró el cierre del objeto articleContent en page.tsx');
  process.exit(1);
}

content = content.slice(0, lastClose) + '\n' + newEntries + '\n};\n' + content.slice(lastClose + 4);
fs.writeFileSync(pageFile, content, 'utf8');
console.log('✓ app/blog/[slug]/page.tsx actualizado con 3 nuevos artículos');
NODEEOF

# ── 5. Build ──────────────────────────────────────────────────────────────────
echo ""
echo "Ejecutando pnpm build..."
cd "$REPO"
pnpm run build

echo ""
echo "✓ Build completado sin errores"

# ── 6. Instrucciones de commit ────────────────────────────────────────────────
echo ""
echo "════════════════════════════════════════════════════════════════════════"
echo "  GIT — Instrucciones de commit"
echo "════════════════════════════════════════════════════════════════════════"
echo ""
echo "  cd $REPO"
echo "  git add data/posts.ts app/blog/\\[slug\\]/page.tsx"
echo "  git commit -m 'feat(blog): añadir artículos tablet, IA y hub USB-C'"
echo "  git push origin main"
echo ""
echo "Slugs publicados:"
echo "  · /blog/mejor-tablet-teletrabajo-2025"
echo "  · /blog/herramientas-ia-productividad-2025"
echo "  · /blog/mejor-hub-usb-c-portatil-2025"
echo "════════════════════════════════════════════════════════════════════════"
