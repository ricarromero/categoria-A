import json

# Cargar base de datos actual
with open('liga_data_consolidated.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# ==============================================================================
# 1. TABLA OFICIAL APERTURA (Segun Resumen Fecha 9 Oficial UNSJ)
# ==============================================================================
db['apertura']['tablas'] = {
    'zonaA': [
        { 'pos': 1, 'equipo': 'Jägermeister', 'pj': 8, 'pg': 5, 'pe': 2, 'pp': 1, 'gf': 19, 'gc': 16, 'dg': 3, 'pts': 15, 'sancion': -2, 'zona': 'A' },
        { 'pos': 2, 'equipo': 'Maverick', 'pj': 8, 'pg': 3, 'pe': 4, 'pp': 1, 'gf': 23, 'gc': 11, 'dg': 12, 'pts': 13, 'sancion': 0, 'zona': 'A' },
        { 'pos': 3, 'equipo': 'Aston', 'pj': 8, 'pg': 4, 'pe': 1, 'pp': 3, 'gf': 15, 'gc': 13, 'dg': 2, 'pts': 13, 'sancion': 0, 'zona': 'A' },
        { 'pos': 4, 'equipo': 'Otro Equipo', 'pj': 7, 'pg': 3, 'pe': 2, 'pp': 2, 'gf': 14, 'gc': 9, 'dg': 5, 'pts': 10, 'sancion': -1, 'zona': 'A' },
        { 'pos': 5, 'equipo': 'Nottingham', 'pj': 8, 'pg': 3, 'pe': 2, 'pp': 3, 'gf': 13, 'gc': 12, 'dg': 1, 'pts': 9, 'sancion': -2, 'zona': 'A' },
        { 'pos': 6, 'equipo': 'Minaster City', 'pj': 8, 'pg': 2, 'pe': 3, 'pp': 3, 'gf': 19, 'gc': 19, 'dg': 0, 'pts': 9, 'sancion': 0, 'zona': 'A' },
        { 'pos': 7, 'equipo': 'Constructores', 'pj': 8, 'pg': 2, 'pe': 3, 'pp': 3, 'gf': 10, 'gc': 10, 'dg': 0, 'pts': 8, 'sancion': -1, 'zona': 'A' },
        { 'pos': 8, 'equipo': 'Red Bull', 'pj': 8, 'pg': 1, 'pe': 3, 'pp': 4, 'gf': 13, 'gc': 20, 'dg': -7, 'pts': 6, 'sancion': 0, 'zona': 'A' }
    ],
    'zonaB': [
        { 'pos': 1, 'equipo': 'Antorcha', 'pj': 8, 'pg': 5, 'pe': 3, 'pp': 0, 'gf': 13, 'gc': 4, 'dg': 9, 'pts': 17, 'sancion': -1, 'zona': 'B' },
        { 'pos': 2, 'equipo': 'Calise', 'pj': 8, 'pg': 4, 'pe': 1, 'pp': 3, 'gf': 14, 'gc': 14, 'dg': 0, 'pts': 12, 'sancion': -1, 'zona': 'B' },
        { 'pos': 3, 'equipo': 'De Primera', 'pj': 8, 'pg': 4, 'pe': 2, 'pp': 2, 'gf': 14, 'gc': 11, 'dg': 3, 'pts': 11, 'sancion': -3, 'zona': 'B' },
        { 'pos': 4, 'equipo': 'Celtic', 'pj': 8, 'pg': 4, 'pe': 0, 'pp': 4, 'gf': 10, 'gc': 15, 'dg': -5, 'pts': 11, 'sancion': -1, 'zona': 'B' },
        { 'pos': 5, 'equipo': 'La Máquina', 'pj': 8, 'pg': 4, 'pe': 0, 'pp': 4, 'gf': 17, 'gc': 14, 'dg': 3, 'pts': 10, 'sancion': -2, 'zona': 'B' },
        { 'pos': 6, 'equipo': 'Eclipse', 'pj': 8, 'pg': 3, 'pe': 1, 'pp': 4, 'gf': 15, 'gc': 12, 'dg': 3, 'pts': 9, 'sancion': -1, 'zona': 'B' },
        { 'pos': 7, 'equipo': 'C-Lesión', 'pj': 7, 'pg': 2, 'pe': 1, 'pp': 4, 'gf': 10, 'gc': 13, 'dg': -3, 'pts': 7, 'sancion': 0, 'zona': 'B' },
        { 'pos': 8, 'equipo': 'La Granjah', 'pj': 8, 'pg': 0, 'pe': 0, 'pp': 8, 'gf': 0, 'gc': 26, 'dg': -26, 'pts': 0, 'sancion': 0, 'zona': 'B' }
    ]
}

# ==============================================================================
# 2. TABLA OFICIAL CLAUSURA (Segun Resumen Fecha 4 Oficial UNSJ)
# ==============================================================================
db['clausura']['tablas'] = {
    'zonaA': [
        { 'pos': 1, 'equipo': 'Constructores', 'pj': 4, 'pg': 4, 'pe': 0, 'pp': 0, 'gf': 14, 'gc': 2, 'dg': 12, 'pts': 12, 'zona': 'A' },
        { 'pos': 2, 'equipo': 'Jägermeister', 'pj': 4, 'pg': 3, 'pe': 0, 'pp': 1, 'gf': 10, 'gc': 8, 'dg': 2, 'pts': 9, 'zona': 'A' },
        { 'pos': 3, 'equipo': 'Minaster City', 'pj': 4, 'pg': 2, 'pe': 1, 'pp': 1, 'gf': 6, 'gc': 4, 'dg': 2, 'pts': 7, 'zona': 'A' },
        { 'pos': 4, 'equipo': 'Antorcha', 'pj': 4, 'pg': 1, 'pe': 2, 'pp': 1, 'gf': 4, 'gc': 6, 'dg': -2, 'pts': 5, 'zona': 'A' },
        { 'pos': 5, 'equipo': 'Aston', 'pj': 4, 'pg': 1, 'pe': 1, 'pp': 2, 'gf': 5, 'gc': 5, 'dg': 0, 'pts': 4, 'zona': 'A' },
        { 'pos': 6, 'equipo': 'C-Lesión', 'pj': 4, 'pg': 1, 'pe': 1, 'pp': 2, 'gf': 8, 'gc': 13, 'dg': -5, 'pts': 4, 'zona': 'A' },
        { 'pos': 7, 'equipo': 'La Máquina', 'pj': 4, 'pg': 1, 'pe': 0, 'pp': 3, 'gf': 5, 'gc': 7, 'dg': -2, 'pts': 3, 'zona': 'A' },
        { 'pos': 8, 'equipo': 'Nottingham', 'pj': 4, 'pg': 0, 'pe': 1, 'pp': 3, 'gf': 6, 'gc': 13, 'dg': -7, 'pts': 1, 'zona': 'A' }
    ],
    'zonaB': [
        { 'pos': 1, 'equipo': 'Red Bull', 'pj': 4, 'pg': 3, 'pe': 1, 'pp': 0, 'gf': 10, 'gc': 2, 'dg': 8, 'pts': 10, 'zona': 'B' },
        { 'pos': 2, 'equipo': 'Otro Equipo', 'pj': 3, 'pg': 2, 'pe': 0, 'pp': 1, 'gf': 6, 'gc': 2, 'dg': 4, 'pts': 6, 'zona': 'B' },
        { 'pos': 3, 'equipo': 'Eclipse', 'pj': 4, 'pg': 2, 'pe': 0, 'pp': 2, 'gf': 4, 'gc': 7, 'dg': -3, 'pts': 6, 'zona': 'B' },
        { 'pos': 4, 'equipo': 'De Primera', 'pj': 3, 'pg': 1, 'pe': 1, 'pp': 1, 'gf': 8, 'gc': 5, 'dg': 3, 'pts': 4, 'zona': 'B' },
        { 'pos': 5, 'equipo': 'Calise', 'pj': 3, 'pg': 1, 'pe': 1, 'pp': 1, 'gf': 3, 'gc': 3, 'dg': 0, 'pts': 4, 'zona': 'B' },
        { 'pos': 6, 'equipo': 'Maverick', 'pj': 4, 'pg': 1, 'pe': 1, 'pp': 2, 'gf': 4, 'gc': 6, 'dg': -2, 'pts': 4, 'zona': 'B' },
        { 'pos': 7, 'equipo': 'Celtic', 'pj': 3, 'pg': 0, 'pe': 0, 'pp': 3, 'gf': 0, 'gc': 10, 'dg': -10, 'pts': 0, 'zona': 'B' }
    ]
}

# ==============================================================================
# 3. RECALCULAR TABLA ANUAL EXACTA
# ==============================================================================
apertura_dict = {}
for r in db['apertura']['tablas']['zonaA'] + db['apertura']['tablas']['zonaB']:
    apertura_dict[r['equipo']] = r

clausura_dict = {}
for r in db['clausura']['tablas']['zonaA'] + db['clausura']['tablas']['zonaB']:
    clausura_dict[r['equipo']] = r

bonus_apertura = {
    'Jägermeister': 3,
    'Maverick': 2,
    'Aston': 1,
    'Minaster City': 1
}

sanciones_puntos = {
    'Constructores': 1,
    'Jägermeister': 2,
    'Antorcha': 1,
    'Nottingham': 2,
    'Otro Equipo': 1,
    'Calise': 1,
    'De Primera': 3,
    'La Máquina': 2,
    'Celtic': 1,
    'Eclipse': 1
}

tabla_anual = []
for eq_obj in db['equipos']:
    eq = eq_obj['nombre']
    ap = apertura_dict.get(eq, {'pj': 0, 'pg': 0, 'pe': 0, 'pp': 0, 'gf': 0, 'gc': 0, 'dg': 0, 'pts': 0})
    cl = clausura_dict.get(eq, {'pj': 0, 'pg': 0, 'pe': 0, 'pp': 0, 'gf': 0, 'gc': 0, 'dg': 0, 'pts': 0})
    
    pj_total = ap['pj'] + cl['pj']
    pg_total = ap['pg'] + cl['pg']
    pe_total = ap['pe'] + cl['pe']
    pp_total = ap['pp'] + cl['pp']
    gf_total = ap['gf'] + cl['gf']
    gc_total = ap['gc'] + cl['gc']
    dg_total = gf_total - gc_total
    
    # Puntos oficiales = Puntos oficiales Apertura + Puntos oficiales Clausura + Bonus Apertura
    bonus = bonus_apertura.get(eq, 0)
    pts_total = ap['pts'] + cl['pts'] + bonus
    sancion_pts = sanciones_puntos.get(eq, 0)
    coeficiente = round(pts_total / pj_total, 3) if pj_total > 0 else 0.0
    
    tabla_anual.append({
        'equipo': eq,
        'pj': pj_total,
        'pg': pg_total,
        'pe': pe_total,
        'pp': pp_total,
        'gf': gf_total,
        'gc': gc_total,
        'dg': dg_total,
        'ptsCancha': ap['pts'] + cl['pts'],
        'bonus': bonus,
        'sancionPts': sancion_pts,
        'pts': pts_total,
        'coeficiente': coeficiente,
        'pjAp': ap['pj'], 'ptsAp': ap['pts'],
        'pjCl': cl['pj'], 'ptsCl': cl['pts']
    })

# Ordenar por Coeficiente DESC, luego Puntos DESC, luego DG DESC, luego GF DESC
tabla_anual.sort(key=lambda x: (x['coeficiente'], x['pts'], x['dg'], x['gf']), reverse=True)
for i, row in enumerate(tabla_anual):
    row['pos'] = i + 1

db['tablaAnual'] = tabla_anual

# ==============================================================================
# 4. GUARDAR EN JSON Y JS
# ==============================================================================
with open('liga_data_consolidated.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, indent=2, ensure_ascii=False)

js_content = f'''/**
 * LIGA UNIVERSITARIA SANJUANINA DE FÚTBOL — CATEGORÍA A 2026
 * Fuente de Verdad Centralizada de Datos Oficiales
 * Actualizado automáticamente: Torneo Clausura 2026 · Fecha 4 completada
 */

const LIGA_DATA = {json.dumps(db, indent=2, ensure_ascii=False)};

if (typeof window !== 'undefined') {{
  window.LIGA_DATA = LIGA_DATA;
}}
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = LIGA_DATA;
}}
'''

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("¡Sincronización total completada con éxito!")
