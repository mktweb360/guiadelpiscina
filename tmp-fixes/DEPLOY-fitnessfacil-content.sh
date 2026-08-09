#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# DEPLOY — Nuevos artículos fitnessfacil.es
# Artículos: mejor-eliptica-casa-2025 | hiit-en-casa-principiantes | ejercicio-mujeres-40-anos-casa
#
# USO:
#   chmod +x DEPLOY-fitnessfacil-content.sh
#   ./DEPLOY-fitnessfacil-content.sh
#
# El script necesita que ~/fitnessfacil exista (repo clonado).
# Hace una copia de seguridad de los archivos modificados antes de tocar nada.
# ─────────────────────────────────────────────────────────────────────────────

set -e

REPO="$HOME/fitnessfacil"
STAGING="$HOME/guiadelpiscina/tmp-fixes"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# ── 1. Verificar que el repo existe ──────────────────────────────────────────
if [ ! -d "$REPO" ]; then
  echo "ERROR: No se encuentra el repo en $REPO"
  echo "Clona primero: git clone git@github.com:mktweb360/fitnessfacil.git ~/fitnessfacil"
  exit 1
fi

echo "✓ Repo encontrado en $REPO"

# ── 2. Copias de seguridad ────────────────────────────────────────────────────
cp "$REPO/data/posts.ts"                        "$STAGING/BACKUP_posts_${TIMESTAMP}.ts"
cp "$REPO/app/blog/[slug]/page.tsx"             "$STAGING/BACKUP_page_${TIMESTAMP}.tsx"
echo "✓ Backups guardados en $STAGING/"

# ── 3. Patch data/posts.ts — añadir los 3 nuevos posts al array ──────────────
# Busca el cierre del array ]; y añade los nuevos posts justo antes
node - <<'EOF'
const fs = require('fs');
const path = require('path');

const postsFile = path.join(process.env.HOME, 'fitnessfacil/data/posts.ts');
let content = fs.readFileSync(postsFile, 'utf8');

// Los 3 nuevos posts a insertar
const newPosts = `
  {
    slug: "mejor-eliptica-casa-2025",
    title: "Mejor elíptica para casa 2025: comparativa y guía de compra",
    excerpt:
      "Comparativa de las mejores elípticas para casa en 2025: zancada, resistencia, ruido y espacio. Guía de compra por perfil y presupuesto para acertar a la primera.",
    date: "2025-08-09",
    category: "Cardio",
    readTime: "12 min",
    relatedPosts: [
      "mejor-cinta-correr-casa-2025",
      "mejor-bicicleta-estatica-casa-2025",
      "bicicleta-estatica-adelgazar-resultados",
    ],
  },
  {
    slug: "hiit-en-casa-principiantes",
    title: "Entrenamiento HIIT en casa: qué es, cómo empezar y rutina para principiantes",
    excerpt:
      "Guía completa de HIIT en casa para principiantes: beneficios, estructura básica, errores frecuentes y rutina de 20 minutos sin material.",
    date: "2025-08-10",
    category: "Entrenamiento",
    readTime: "10 min",
    relatedProducts: [
      "toplus-esterilla-yoga-tpe-6mm",
      "fokky-bandas-elasticas-set-4-tpe",
    ],
    relatedPosts: [
      "rutina-entrenamiento-casa-sin-equipamiento",
      "perder-peso-ejercicio-casa",
      "mejor-eliptica-casa-2025",
    ],
  },
  {
    slug: "ejercicio-mujeres-40-anos-casa",
    title: "Entrenamiento para mujeres de 40 años en casa: guía completa",
    excerpt:
      "Cómo entrenar en casa a partir de los 40: qué cambia en el cuerpo, por qué el cardio solo no es suficiente y qué rutina semanal da mejores resultados.",
    date: "2025-08-11",
    category: "Entrenamiento",
    readTime: "13 min",
    relatedProducts: [
      "toplus-esterilla-yoga-tpe-6mm",
      "fokky-bandas-elasticas-set-4-tpe",
      "lullax-neo36-mancuernas-ajustables",
    ],
    relatedPosts: [
      "perder-peso-ejercicio-casa",
      "rutina-entrenamiento-casa-sin-equipamiento",
      "mejor-eliptica-casa-2025",
    ],
  },`;

// Insertar antes del cierre del array "];  seguido de export function"
const marker = '];\n\nexport function getPostBySlug';
if (!content.includes(marker)) {
  console.error('ERROR: No se encontró el marcador de cierre del array en posts.ts');
  process.exit(1);
}

content = content.replace(marker, newPosts + '\n' + marker);
fs.writeFileSync(postsFile, content, 'utf8');
console.log('✓ data/posts.ts actualizado con 3 nuevos posts');
EOF

# ── 4. Patch app/blog/[slug]/page.tsx — añadir los 3 nuevos articleContent ──
# Lee los 3 archivos de contenido y los inserta antes del cierre del objeto

node - <<'NODEEOF'
const fs = require('fs');
const path = require('path');

const pageFile = path.join(process.env.HOME, 'fitnessfacil/app/blog/[slug]/page.tsx');
const stagingDir = path.join(process.env.HOME, 'guiadelpiscina/tmp-fixes');

let content = fs.readFileSync(pageFile, 'utf8');

// Los 3 archivos de contenido de artículo (sin los comentarios de cabecera)
const articleFiles = [
  'fitnessfacil-eliptica-articulo.ts',
  'fitnessfacil-hiit-casa-articulo.ts',
  'fitnessfacil-mujeres-40-articulo.ts',
];

let newContent = '';
for (const file of articleFiles) {
  const filePath = path.join(stagingDir, file);
  let raw = fs.readFileSync(filePath, 'utf8');
  // Eliminar el bloque de comentario de cabecera
  raw = raw.replace(/\/\/ ─+[\s\S]*?─+\n\/\/ ─+\n/g, '').trim();
  newContent += '\n' + raw + '\n';
}

// Insertar antes del cierre del objeto articleContent
// El objeto cierra con "};  seguido de export async function generateStaticParams"
// o con "};\n\n" al final del objeto — buscamos el patrón específico
const marker = '};\n\nexport async function generateStaticParams';
if (!content.includes(marker)) {
  // Intentar patrón alternativo al final del archivo
  console.error('ERROR: No se encontró el marcador de cierre de articleContent en page.tsx');
  process.exit(1);
}

// El articleContent termina con el último slug. Necesitamos insertar antes del }; final del objeto.
// Buscamos el cierre de la const articleContent
const articleContentClose = content.lastIndexOf('\n};\n');
if (articleContentClose === -1) {
  console.error('ERROR: No se encontró el cierre del objeto articleContent');
  process.exit(1);
}

content = content.slice(0, articleContentClose) + '\n' + newContent + '\n};\n' + content.slice(articleContentClose + 4);
fs.writeFileSync(pageFile, content, 'utf8');
console.log('✓ app/blog/[slug]/page.tsx actualizado con 3 nuevos artículos');
NODEEOF

# ── 5. Build ──────────────────────────────────────────────────────────────────
echo ""
echo "Ejecutando build..."
cd "$REPO"
pnpm run build

echo ""
echo "✓ Build completado"

# ── 6. Instrucciones de commit ────────────────────────────────────────────────
echo ""
echo "════════════════════════════════════════════════════════════════════════"
echo "  GIT — Instrucciones de commit"
echo "════════════════════════════════════════════════════════════════════════"
echo ""
echo "  cd $REPO"
echo "  git add data/posts.ts app/blog/\\[slug\\]/page.tsx"
echo "  git commit -m 'feat(blog): añadir artículos elíptica, HIIT y mujeres 40'"
echo "  git push origin main"
echo ""
echo "Slugs publicados:"
echo "  · /blog/mejor-eliptica-casa-2025"
echo "  · /blog/hiit-en-casa-principiantes"
echo "  · /blog/ejercicio-mujeres-40-anos-casa"
echo "════════════════════════════════════════════════════════════════════════"
