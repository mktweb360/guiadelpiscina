#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# DEPLOY — Nuevos artículos juguetestem.es
# Artículos: mejor-tablet-ninos-educativa-2025
#            mejor-telescopio-ninos-principiantes-2025
#            juguetes-ninos-necesidades-especiales-tdah-tea
#
# USO:
#   cd ~/guiadelpiscina/tmp-fixes
#   chmod +x DEPLOY-juguetestem-content.sh
#   ./DEPLOY-juguetestem-content.sh
#
# Requisito: ~/juguetestem debe existir (repo clonado).
# Hace copia de seguridad de los archivos modificados antes de tocar nada.
# ─────────────────────────────────────────────────────────────────────────────

set -e

REPO="$HOME/juguetestem"
STAGING="$HOME/guiadelpiscina/tmp-fixes"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# ── 1. Verificar que el repo existe ──────────────────────────────────────────
if [ ! -d "$REPO" ]; then
  echo "ERROR: No se encuentra el repo en $REPO"
  echo "Clona primero: git clone git@github.com:mktweb360/juguetestem.git ~/juguetestem"
  exit 1
fi

echo "✓ Repo encontrado en $REPO"

# ── 2. Copias de seguridad ────────────────────────────────────────────────────
cp "$REPO/data/posts.ts"                    "$STAGING/BACKUP_juguetestem_posts_${TIMESTAMP}.ts"
cp "$REPO/app/blog/[slug]/page.tsx"         "$STAGING/BACKUP_juguetestem_page_${TIMESTAMP}.tsx"
echo "✓ Backups guardados en $STAGING/"

# ── 3. Patch data/posts.ts — añadir los 3 nuevos posts al array ──────────────
node - <<'EOF'
const fs = require('fs');
const path = require('path');

const postsFile = path.join(process.env.HOME, 'juguetestem/data/posts.ts');
let content = fs.readFileSync(postsFile, 'utf8');

const newPosts = `
  {
    slug: "mejor-tablet-ninos-educativa-2025",
    title: "Mejor tablet educativa para niños 2025: guía por edades y necesidades",
    excerpt:
      "Comparativa de las mejores tablets educativas para niños: Fire HD Kids, iPad, Lenovo. Cuál elegir según edad y uso.",
    category: "Guías",
    date: "2025-08-07",
    readTime: 10,
    relatedProducts: [
      "science4you-robotics-alfabot-238-piezas",
      "national-geographic-microscopio-kit-37-piezas",
      "thames-kosmos-intro-chemistry-27-experimentos",
    ],
    relatedPosts: [
      "juguetes-stem-ninos-8-anos",
      "introduccion-programacion-ninos",
      "como-elegir-juguete-educativo",
    ],
  },
  {
    slug: "mejor-telescopio-ninos-principiantes-2025",
    title: "Mejor telescopio para niños y principiantes 2025: guía de compra",
    excerpt:
      "Los mejores telescopios para niños desde 8 años: qué apertura necesitan, qué montura elegir y qué objetos podrán ver.",
    category: "STEM",
    date: "2025-08-07",
    readTime: 9,
    relatedProducts: [
      "national-geographic-microscopio-kit-37-piezas",
      "national-geographic-mega-kit-excavacion-gemas",
      "thames-kosmos-kids-first-science-kit",
    ],
    relatedPosts: [
      "mejores-kits-ciencia-ninos",
      "juguetes-stem-ninos-8-anos",
      "national-geographic-juguetes-educativos-analisis",
    ],
  },
  {
    slug: "juguetes-ninos-necesidades-especiales-tdah-tea",
    title: "Juguetes para niños con necesidades especiales: TDAH, TEA y dificultades de aprendizaje",
    excerpt:
      "Guía de juguetes adaptados para niños con TDAH, TEA y dificultades de aprendizaje: estimulación sensorial, atención y desarrollo motor.",
    category: "Guías",
    date: "2025-08-07",
    readTime: 11,
    relatedProducts: [
      "geomag-classic-color-91-piezas",
      "lego-10698-caja-ladrillos-creativos-grande",
      "torre-rosa-montessori-10-cubos-madera",
    ],
    relatedPosts: [
      "como-elegir-juguete-educativo",
      "juguetes-madera-vs-plastico-diferencias",
      "beneficios-juego-libre-montessori",
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

const pageFile = path.join(process.env.HOME, 'juguetestem/app/blog/[slug]/page.tsx');
const stagingDir = path.join(process.env.HOME, 'guiadelpiscina/tmp-fixes');

let content = fs.readFileSync(pageFile, 'utf8');

// Extrae el array articleContent y construye la entrada "slug": [...] para page.tsx
// juguetestem usa ArticleSection[] (array), no un objeto con intro/sections/conclusion
function extractArticleEntry(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');

  // Extraer el slug del postMeta
  const slugMatch = raw.match(/slug:\s*"([^"]+)"/);
  if (!slugMatch) {
    console.error('ERROR: No se encontró slug en ' + filePath);
    process.exit(1);
  }
  const slug = slugMatch[1];

  // Extraer el cuerpo del array articleContent = [...]
  // Captura desde el primer [ hasta el ; final del export
  const match = raw.match(/export const articleContent = (\[[\s\S]+?\]);\s*$/m);
  if (!match) {
    console.error('ERROR: No se encontró articleContent en ' + filePath);
    console.error('Asegúrate de que el archivo termina con "export const articleContent = [...];"');
    process.exit(1);
  }

  const arrayBody = match[1];
  return `\n  "${slug}": ${arrayBody},`;
}

const articleFiles = [
  'juguetestem-tablets-educativas.ts',
  'juguetestem-telescopios-ninos.ts',
  'juguetestem-juguetes-nee.ts',
];

let newEntries = '';
for (const file of articleFiles) {
  const filePath = path.join(stagingDir, file);
  newEntries += extractArticleEntry(filePath);
}

// Insertar antes del último }; del objeto articleContent
// El objeto articleContent cierra con "\n};\n" al final del bloque const
const lastClose = content.lastIndexOf('\n};\n');
if (lastClose === -1) {
  console.error('ERROR: No se encontró el cierre del objeto articleContent en page.tsx');
  console.error('Buscado: "\\n};\\n"');
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
echo "  git commit -m 'feat(blog): añadir artículos tablets educativas, telescopios y NEE'"
echo "  git push origin main"
echo ""
echo "Slugs publicados:"
echo "  · /blog/mejor-tablet-ninos-educativa-2025"
echo "  · /blog/mejor-telescopio-ninos-principiantes-2025"
echo "  · /blog/juguetes-ninos-necesidades-especiales-tdah-tea"
echo "════════════════════════════════════════════════════════════════════════"
