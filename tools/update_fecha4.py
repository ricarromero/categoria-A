import json

# Cargar base de datos actual
with open('liga_data_consolidated.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# 1. Actualizar metadatos de la liga
db['liga']['ultimaFechaDisputada'] = 4
db['liga']['estado'] = 'Clausura en disputa · Fecha 4 completada'
db['clausura']['ultimaFechaDisputada'] = 4

# 2. Actualizar partidos de Fecha 4 en clausura.fechas
for fecha in db['clausura']['fechas']:
    if fecha['numero'] == 4:
        fecha['disputada'] = True
        fecha['partidos'] = [
            { 'zona': 'Zona A', 'local': 'Antorcha', 'visitante': 'Aston', 'golesL': 0, 'golesV': 3, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona A', 'local': 'La Máquina', 'visitante': 'Jägermeister', 'golesL': 1, 'golesV': 2, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona A', 'local': 'Minaster City', 'visitante': 'Constructores', 'golesL': 0, 'golesV': 2, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona A', 'local': 'C-Lesión', 'visitante': 'Nottingham', 'golesL': 4, 'golesV': 2, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona B', 'local': 'De Primera', 'visitante': 'Eclipse', 'golesL': 6, 'golesV': 1, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona B', 'local': 'Otro Equipo', 'visitante': 'Celtic', 'golesL': 3, 'golesV': 0, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona B', 'local': 'Maverick', 'visitante': 'Red Bull', 'golesL': 1, 'golesV': 3, 'estado': 'finalizado', 'nota': '' },
            { 'zona': 'Zona B', 'local': 'Calise', 'visitante': 'Libre', 'golesL': None, 'golesV': None, 'estado': 'libre', 'nota': 'Fecha Libre Calise' }
        ]

# 3. Actualizar tablas de posiciones de Clausura
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

# 4. Actualizar Goleadores del Clausura
db['clausura']['goleadores'] = [
    { 'pos': 1, 'jugador': 'Albornó, Sergio Damián', 'equipo': 'Red Bull', 'goles': 6 },
    { 'pos': 2, 'jugador': 'Beja, Augusto', 'equipo': 'Jägermeister', 'goles': 4 },
    { 'pos': 3, 'jugador': 'Salinas, Guillermo', 'equipo': 'Minaster City', 'goles': 4 },
    { 'pos': 4, 'jugador': 'Aguilera, Tomás Ezequiel', 'equipo': 'Constructores', 'goles': 3 },
    { 'pos': 5, 'jugador': 'Martínez González, Mario Valentín', 'equipo': 'Red Bull', 'goles': 3 },
    { 'pos': 6, 'jugador': 'Almazán, Joaquín', 'equipo': 'Aston', 'goles': 2 },
    { 'pos': 7, 'jugador': 'Flores, Dardo Ignacio', 'equipo': 'Aston', 'goles': 2 },
    { 'pos': 8, 'jugador': 'Carrario, Enzo', 'equipo': 'Calise', 'goles': 2 },
    { 'pos': 9, 'jugador': 'Adaro, Diego Sebastián', 'equipo': 'C-Lesión', 'goles': 2 },
    { 'pos': 10, 'jugador': 'Gaitán, Axel', 'equipo': 'C-Lesión', 'goles': 2 },
    { 'pos': 11, 'jugador': 'Ortiz, Eduardo Mateo', 'equipo': 'Constructores', 'goles': 2 },
    { 'pos': 12, 'jugador': 'González, Francisco', 'equipo': 'Nottingham', 'goles': 2 },
    { 'pos': 13, 'jugador': 'Alós Olmos, Juan Bautista', 'equipo': 'Antorcha', 'goles': 1 },
    { 'pos': 14, 'jugador': 'Contreras Cuevas, Lisandro Nicolás', 'equipo': 'Antorcha', 'goles': 1 },
    { 'pos': 15, 'jugador': 'Mercado, Federico Ezequiel', 'equipo': 'Antorcha', 'goles': 1 },
    { 'pos': 16, 'jugador': 'Riveras Fuentes, Juan Ignacio', 'equipo': 'Antorcha', 'goles': 1 },
    { 'pos': 17, 'jugador': 'Grassano Gómez, Santino', 'equipo': 'Aston', 'goles': 1 },
    { 'pos': 18, 'jugador': 'Contreras, Mariano', 'equipo': 'C-Lesión', 'goles': 1 },
    { 'pos': 19, 'jugador': 'Quiroga González, Enzo', 'equipo': 'Constructores', 'goles': 1 },
    { 'pos': 20, 'jugador': 'López, Braian Facundo', 'equipo': 'Eclipse', 'goles': 1 }
]

# 5. Recalcular Tabla Anual
apertura_stats = {}
for r in db['apertura']['tablas']['zonaA'] + db['apertura']['tablas']['zonaB']:
    apertura_stats[r['equipo']] = r

clausura_stats = {}
for r in db['clausura']['tablas']['zonaA'] + db['clausura']['tablas']['zonaB']:
    clausura_stats[r['equipo']] = r

bonus_apertura = {
    'Jägermeister': 3,
    'Maverick': 2,
    'Aston': 1,
    'Minaster City': 1
}

# Quitas de puntos oficiales acumuladas
sanciones_puntos = {
    'Constructores': 1,
    'Jägermeister': 2,
    'Antorcha': 1,
    'Nottingham': 2,
    'Otro Equipo': 1,
    'Calise': 2,
    'De Primera': 3,
    'La Máquina': 2,
    'Celtic': 1,
    'Eclipse': 1
}

tabla_anual = []
for eq in [e['nombre'] for e in db['equipos']]:
    ap = apertura_stats.get(eq, {'pj': 0, 'pg': 0, 'pe': 0, 'pp': 0, 'gf': 0, 'gc': 0, 'dg': 0, 'pts': 0})
    cl = clausura_stats.get(eq, {'pj': 0, 'pg': 0, 'pe': 0, 'pp': 0, 'gf': 0, 'gc': 0, 'dg': 0, 'pts': 0})
    
    pj_total = ap['pj'] + cl['pj']
    pg_total = ap['pg'] + cl['pg']
    pe_total = ap['pe'] + cl['pe']
    pp_total = ap['pp'] + cl['pp']
    gf_total = ap['gf'] + cl['gf']
    gc_total = ap['gc'] + cl['gc']
    dg_total = gf_total - gc_total
    
    pts_cancha = ap['pts'] + cl['pts']
    bonus = bonus_apertura.get(eq, 0)
    sancion_pts = sanciones_puntos.get(eq, 0)
    pts_total = pts_cancha + bonus - sancion_pts
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
        'ptsCancha': pts_cancha,
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

# 6. Actualizar y agregar Sanciones de la Fecha 4
sanciones_existentes = db.get('sanciones', [])

# Actualizar las que cumplieron fechas
for s in sanciones_existentes:
    if 'Núñez' in s['jugador'] or 'Nuñez' in s['jugador']:
        s['sancion'] = '4 Partidos'
        s['estado'] = 'Cumplió 3 (Resta 1)'
    elif 'Murciano, Eric' in s['jugador']:
        s['sancion'] = '2 Partidos'
        s['estado'] = 'Cumplió 1 (Resta 1)'

# Nuevas sanciones oficiales de la Fecha 4
nuevas_sanciones = [
    { 'jugador': 'Giménez, Ezequiel', 'equipo': 'Minaster City', 'sancion': '5 Partidos', 'articulo': 'Art. 28 inc "B"', 'motivo': 'Sanción disciplinaria Fecha 4', 'estado': 'Cumplió 1 (Resta 4)' },
    { 'jugador': 'Irustia, Lautaro', 'equipo': 'Nottingham', 'sancion': '5 Partidos', 'articulo': 'Art. 28 inc "B"', 'motivo': 'Sanción disciplinaria Fecha 4', 'estado': 'Cumplió 1 (Resta 4)' },
    { 'jugador': 'Sánchez, Lucas', 'equipo': 'Maverick', 'sancion': '2 Partidos', 'articulo': 'Art. 23 inc "A"', 'motivo': 'Expulsión Fecha 4', 'estado': 'Vigente (0/2)' },
    { 'jugador': 'Castro, Santiago', 'equipo': 'Maverick', 'sancion': '2 Partidos', 'articulo': 'Art. 23 inc "A"', 'motivo': 'Expulsión Fecha 4', 'estado': 'Vigente (0/2)' },
    { 'jugador': 'Camargo, Francisco', 'equipo': 'Antorcha', 'sancion': '3 Partidos', 'articulo': 'Art. 23 inc "A" y 26 inc "C"', 'motivo': 'Conducta antideportiva Fecha 4', 'estado': 'Vigente (0/3)' },
    { 'jugador': 'DT: Acosta, Santiago', 'equipo': 'Minaster City', 'sancion': 'Inhabilitación Provisoria', 'articulo': 'Tribunal de Disciplina', 'motivo': 'Suspensión provisoria Fecha 4', 'estado': 'Provisorio' },
    { 'jugador': 'Acosta, Jerónimo', 'equipo': 'Minaster City', 'sancion': 'Inhabilitación Provisoria', 'articulo': 'Tribunal de Disciplina', 'motivo': 'Suspensión provisoria Fecha 4', 'estado': 'Provisorio' },
    { 'jugador': 'Domínguez, Lautaro', 'equipo': 'Minaster City', 'sancion': 'Inhabilitación Provisoria', 'articulo': 'Tribunal de Disciplina', 'motivo': 'Suspensión provisoria Fecha 4', 'estado': 'Provisorio' },
    { 'jugador': 'Gaitán, Axel', 'equipo': 'C-Lesión', 'sancion': '5 Partidos', 'articulo': 'Art. 22 inc "B"', 'motivo': 'Sanción grave Fecha 4', 'estado': 'Vigente (0/5)' },
    { 'jugador': 'Guerra, Agustín', 'equipo': 'Nottingham', 'sancion': '1 Partido', 'articulo': 'Art. 26 inc "C"', 'motivo': 'Doble amarilla / juego brusco', 'estado': 'Vigente (0/1)' },
    { 'jugador': 'Arbo, Mauricio', 'equipo': 'La Máquina', 'sancion': '1 Partido', 'articulo': 'Art. 26 inc "G"', 'motivo': 'Infracción reglamentaria Fecha 4', 'estado': 'Vigente (0/1)' },
    { 'jugador': 'Notario, Matías', 'equipo': 'Maverick', 'sancion': '3 Amarillas acumuladas', 'articulo': 'Art. 6° Régimen Amarillas', 'motivo': 'Acumulación de 3 tarjetas amarillas', 'estado': '3 Amarillas' }
]

for ns in nuevas_sanciones:
    if not any(s['jugador'].lower() == ns['jugador'].lower() for s in sanciones_existentes):
        sanciones_existentes.append(ns)

db['sanciones'] = sanciones_existentes

# Guardar en liga_data_consolidated.json
with open('liga_data_consolidated.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, indent=2, ensure_ascii=False)

# Guardar en js/data.js
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

print("¡Actualización Fecha 4 procesada exitosamente!")
print("Líder Clausura Zona A:", db['clausura']['tablas']['zonaA'][0]['equipo'], f"({db['clausura']['tablas']['zonaA'][0]['pts']} pts)")
print("Líder Clausura Zona B:", db['clausura']['tablas']['zonaB'][0]['equipo'], f"({db['clausura']['tablas']['zonaB'][0]['pts']} pts)")
print("Goleador Líder:", db['clausura']['goleadores'][0]['jugador'], f"({db['clausura']['goleadores'][0]['goles']} goles)")
print("Total equipos en Tabla Anual:", len(db['tablaAnual']))
