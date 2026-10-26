import json
import os

os.makedirs("js", exist_ok=True)
os.makedirs("css", exist_ok=True)

with open("liga_data_consolidated.json", "r", encoding="utf-8") as f:
    data = json.load(f)

js_content = f"""/**
 * LIGA UNIVERSITARIA SANJUANINA DE FÚTBOL — CATEGORÍA A 2026
 * Fuente de Verdad Centralizada de Datos Oficiales
 * Validado contra informes oficiales de Apertura (Fechas 1 a 9 + Playoffs)
 * y Clausura 2026 (Fechas 1 a 3 disputadas + programación).
 */

const LIGA_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};

// Exponer en window para compatibilidad directa y soporte modular
if (typeof window !== 'undefined') {{
  window.LIGA_DATA = LIGA_DATA;
}}
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = LIGA_DATA;
}}
"""

with open(r"js\data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("js/data.js generado con éxito. Tamaño:", len(js_content), "bytes")
