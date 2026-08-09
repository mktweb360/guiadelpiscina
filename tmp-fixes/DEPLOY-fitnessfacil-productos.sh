#!/usr/bin/env bash
# =============================================================
# DEPLOY: Añadir 15 productos nuevos a fitnessfacil.es
# =============================================================
# Uso: bash ~/guiadelpiscina/tmp-fixes/DEPLOY-fitnessfacil-productos.sh
# =============================================================
set -e

PRODUCTS_FILE="$HOME/fitnessfacil/data/products.ts"
NEW_PRODUCTS_FILE="$HOME/guiadelpiscina/tmp-fixes/fitnessfacil-productos-nuevos.ts"
BACKUP_FILE="$HOME/fitnessfacil/data/products.ts.bak-$(date +%Y%m%d-%H%M%S)"

echo "=== DEPLOY fitnessfacil — 15 productos nuevos ==="
echo ""

# 1. Verificar que existen los ficheros necesarios
if [ ! -f "$PRODUCTS_FILE" ]; then
  echo "ERROR: No se encuentra $PRODUCTS_FILE"
  exit 1
fi
if [ ! -f "$NEW_PRODUCTS_FILE" ]; then
  echo "ERROR: No se encuentra $NEW_PRODUCTS_FILE"
  exit 1
fi

# 2. Backup del fichero original
echo "[1/4] Creando backup en $BACKUP_FILE ..."
cp "$PRODUCTS_FILE" "$BACKUP_FILE"
echo "      Backup OK"

# 3. Contar productos actuales
CURRENT_COUNT=$(grep -c '"slug":' "$PRODUCTS_FILE" 2>/dev/null || grep -c "slug:" "$PRODUCTS_FILE")
echo "[2/4] Productos actuales en el array: $CURRENT_COUNT"

# 4. Insertar los nuevos productos con Python
echo "[3/4] Insertando 15 nuevos productos ..."
python3 << 'PYEOF'
import os, sys

products_path = os.path.expanduser('~/fitnessfacil/data/products.ts')
new_products_path = os.path.expanduser('~/guiadelpiscina/tmp-fixes/fitnessfacil-productos-nuevos.ts')

with open(products_path, 'r', encoding='utf-8') as f:
    content = f.read()

with open(new_products_path, 'r', encoding='utf-8') as f:
    new_products_block = f.read()

marker = '];\n\nexport function getProductsByCategory'

if marker not in content:
    print("ERROR: No se encontró el marcador '};\\n\\nexport function getProductsByCategory' en products.ts")
    print("Verificando el final del fichero...")
    print(content[-500:])
    sys.exit(1)

# Remove leading comment lines from new products block for clean insertion
lines = new_products_block.split('\n')
# Skip comment header lines at the top
start_idx = 0
for i, line in enumerate(lines):
    if line.strip().startswith('{'):
        start_idx = i
        break
clean_block = '\n'.join(lines[start_idx:])

# Ensure block ends with a newline
if not clean_block.endswith('\n'):
    clean_block += '\n'

content = content.replace(marker, clean_block + marker)

with open(products_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Inserción completada con éxito.")
PYEOF

if [ $? -ne 0 ]; then
  echo "ERROR en la inserción. Restaurando backup..."
  cp "$BACKUP_FILE" "$PRODUCTS_FILE"
  echo "Backup restaurado."
  exit 1
fi

# 5. Contar productos tras la inserción
NEW_COUNT=$(grep -c "slug:" "$PRODUCTS_FILE")
echo "      Productos tras inserción: $NEW_COUNT (añadidos: $((NEW_COUNT - CURRENT_COUNT)))"

# 6. Build de verificación
echo "[4/4] Ejecutando pnpm build para verificar..."
echo ""
cd "$HOME/fitnessfacil" && PATH="$HOME/.nvm/versions/node/v24.15.0/bin:$PATH" pnpm build 2>&1 | tail -10

BUILD_EXIT=$?
echo ""
if [ $BUILD_EXIT -eq 0 ]; then
  echo "=== BUILD OK — Los 15 productos nuevos están integrados correctamente ==="
  echo ""
  echo "Categorías añadidas:"
  echo "  cintas-correr       → 3 productos (Domyos T520B, Horizon T101, NordicTrack T6.5S)"
  echo "  bicicletas-estaticas → 3 productos (Domyos VE520, Sportstech SX400, Bowflex VeloCore)"
  echo "  pesas-mancuernas    → 3 productos (AmazonBasics 10kg, PowerBlock Sport 24, Bowflex SelectTech 552)"
  echo "  esterillas-yoga     → 3 productos (Manduka PRO, Gaiam Premium, Jade Harmony)"
  echo "  suplementos-proteinas → 3 productos (ON Gold Standard, MyProtein Impact, HSN EvoWhey)"
  echo ""
  echo "Backup guardado en: $BACKUP_FILE"
  echo "Para deshacer: cp $BACKUP_FILE $PRODUCTS_FILE"
else
  echo "=== ERROR: Build fallido (exit $BUILD_EXIT) ==="
  echo "Restaurando backup..."
  cp "$BACKUP_FILE" "$PRODUCTS_FILE"
  echo "Fichero original restaurado desde $BACKUP_FILE"
  exit 1
fi
