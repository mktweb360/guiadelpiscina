#!/usr/bin/env bash
# ============================================================
# DEPLOY — Nuevos productos juguetestem.es
# Uso: cd ~/juguetestem && bash ~/guiadelpiscina/tmp-fixes/DEPLOY-juguetestem-productos.sh
#
# ANTES DE EJECUTAR:
#   1. Verifica ASINs en amazon.es (listado al final del script)
#   2. Backup automático se crea antes de cualquier cambio
#   3. Confirma rama: git branch
# ============================================================

set -e

REPO_DIR="$HOME/juguetestem"
PRODUCTS_FILE="$REPO_DIR/data/products.ts"
NEW_PRODUCTS="$HOME/guiadelpiscina/tmp-fixes/juguetestem-productos-nuevos.ts"
BACKUP_FILE="$REPO_DIR/data/products.ts.backup-$(date +%Y%m%d-%H%M%S)"

echo "========================================"
echo "  DEPLOY: Nuevos productos juguetestem"
echo "========================================"

# Verificar directorios y archivos
if [ ! -d "$REPO_DIR" ]; then echo "ERROR: No se encuentra $REPO_DIR"; exit 1; fi
if [ ! -f "$PRODUCTS_FILE" ]; then echo "ERROR: No se encuentra $PRODUCTS_FILE"; exit 1; fi
if [ ! -f "$NEW_PRODUCTS" ]; then echo "ERROR: No se encuentra $NEW_PRODUCTS"; exit 1; fi

cd "$REPO_DIR"

# 1. Backup
echo "[1/5] Backup → $BACKUP_FILE"
cp "$PRODUCTS_FILE" "$BACKUP_FILE"

# 2. Contar productos actuales
CURRENT_COUNT=$(grep -c '"slug":' "$PRODUCTS_FILE" || true)
echo "[2/5] Productos actuales: $CURRENT_COUNT"

# 3. Insertar nuevos productos antes del cierre `];`
echo "[3/5] Insertando nuevos productos..."

python3 - "$PRODUCTS_FILE" "$NEW_PRODUCTS" << 'PYTHON'
import sys, re

target = sys.argv[1]
new_f  = sys.argv[2]

with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

with open(new_f, 'r', encoding='utf-8') as f:
    new_raw = f.read()

# Extraer solo las entradas de producto (quitar cabecera de comentarios)
# Buscar desde la primera línea que contiene `{` como inicio de objeto
lines = new_raw.split('\n')
product_lines = []
collecting = False
for line in lines:
    stripped = line.strip()
    # Cabecera de comentarios al inicio (antes del primer objeto)
    if not collecting and (stripped.startswith('//') or stripped == ''):
        continue
    collecting = True
    product_lines.append(line)

new_block = '\n' + '\n'.join(product_lines).rstrip() + '\n\n'

# Insertar antes del cierre `];` del array products
# Buscamos el patrón `];\n\nexport function` que cierra el array
marker = '];\n\nexport function getProductsByCategory'
if marker not in content:
    # Fallback: buscar la última ocurrencia de `];`
    pos = content.rfind('];')
    if pos == -1:
        print("ERROR: No se encontro el cierre ]; en products.ts")
        sys.exit(1)
else:
    pos = content.index(marker)

result = content[:pos] + new_block + content[pos:]

with open(target, 'w', encoding='utf-8') as f:
    f.write(result)

print("  Insercion completada OK")
PYTHON

# 4. Verificar nueva cuenta
NEW_COUNT=$(grep -c '"slug":' "$PRODUCTS_FILE" || true)
ADDED=$((NEW_COUNT - CURRENT_COUNT))
echo "[4/5] Productos tras merge: $NEW_COUNT (añadidos: $ADDED)"

# 5. Build
echo "[5/5] Ejecutando pnpm build..."
pnpm build

echo ""
echo "========================================"
echo "  COMPLETADO"
echo "  $CURRENT_COUNT → $NEW_COUNT productos"
echo "  Backup: $BACKUP_FILE"
echo "========================================"
echo ""
echo "Si hay errores de TypeScript, restaura con:"
echo "  cp $BACKUP_FILE $PRODUCTS_FILE"

# ============================================================
# CHECKLIST ASINs — VERIFICAR EN amazon.es ANTES DE DEPLOY
# Abre https://www.amazon.es/dp/ASIN para cada uno:
#
# JUGUETES MONTESSORI:
#   B000URLM72  Hape Laberinto Bolas Madera          [VERIFICAR]
#   B00000DMF3  Melissa & Doug Puzzle Animales Zoo    [VERIFICAR]
#   B000URLM80  Goula Domino Colores Madera           [VERIFICAR]
#   B07FQCJPRS  Janod Sweet Cocoon Clasificador       [VERIFICAR]
#
# JUGUETES STEM:
#   B01MY7GQIE  LEGO Boost 17101          [puede estar descatalogado]
#   B00CMFJJ1G  Snap Circuits Jr SC-100   [ALTA CONFIANZA]
#   B01CYUMYEI  NatGeo Telescopio 50mm    [VERIFICAR]
#   B077YT5SZ3  Osmo Genius Starter Kit   [VERIFICAR]
#
# JUEGOS DE MESA:
#   B00ENAYQR8  Scrabble Junior Mattel    [VERIFICAR]
#   B00JHBDQ6Y  Dobble Asmodee            [ALTA CONFIANZA]
#   B07GPWSQBN  Ubongo Junior             [VERIFICAR]
#   B00000DMFH  Conecta 4 Hasbro         [VERIFICAR ASIN ES]
#
# CONSTRUCCION Y LEGO:
#   B09C6ZD2GS  LEGO City 60316          [VERIFICAR]
#   B08HGLTS29  LEGO Technic 42118       [VERIFICAR]
#   B0CDMFY29G  LEGO Creator 31150       [VERIFICAR]
#   B075BQLP5N  LEGO Duplo 10874         [ALTA CONFIANZA]
#
# LIBROS EDUCATIVOS:
#   B09RQT3FDB  NatGeo Kids Enciclopedia Espacio  [VERIFICAR]
#   B07B4J3CXD  Science4you Dino Kit              [VERIFICAR]
#   B08Q7QJPZX  Usborne Gran Libro Experimentos   [VERIFICAR]
#   B00CMFJJ2D  Thames & Kosmos Physics Workshop  [VERIFICAR]
# ============================================================
