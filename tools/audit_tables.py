import json

with open('liga_data_consolidated.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

print("=== 1. TORNEO APERTURA (ACTUAL EN DB) ===")
print("Zona A:")
for r in db['apertura']['tablas']['zonaA']:
    print(f"  {r['pos']}. {r['equipo']:15s} | PJ:{r['pj']} PG:{r['pg']} PE:{r['pe']} PP:{r['pp']} GF:{r['gf']} GC:{r['gc']} DG:{r['dg']:2d} PTS:{r['pts']}")
print("Zona B:")
for r in db['apertura']['tablas']['zonaB']:
    print(f"  {r['pos']}. {r['equipo']:15s} | PJ:{r['pj']} PG:{r['pg']} PE:{r['pe']} PP:{r['pp']} GF:{r['gf']} GC:{r['gc']} DG:{r['dg']:2d} PTS:{r['pts']}")

print("\n=== 2. TORNEO CLAUSURA FECHA 4 (ACTUAL EN DB) ===")
print("Zona A:")
for r in db['clausura']['tablas']['zonaA']:
    print(f"  {r['pos']}. {r['equipo']:15s} | PJ:{r['pj']} PG:{r['pg']} PE:{r['pe']} PP:{r['pp']} GF:{r['gf']} GC:{r['gc']} DG:{r['dg']:2d} PTS:{r['pts']}")
print("Zona B:")
for r in db['clausura']['tablas']['zonaB']:
    print(f"  {r['pos']}. {r['equipo']:15s} | PJ:{r['pj']} PG:{r['pg']} PE:{r['pe']} PP:{r['pp']} GF:{r['gf']} GC:{r['gc']} DG:{r['dg']:2d} PTS:{r['pts']}")

print("\n=== 3. TABLA ANUAL (ACTUAL EN DB) ===")
for r in db['tablaAnual']:
    print(f"  {r['pos']:2d}. {r['equipo']:15s} | PJ:{r['pj']:2d} | Ap:{r.get('ptsAp',0):2d} + Cl:{r.get('ptsCl',0):2d} + Bon:{r.get('bonus',0)} = Pts:{r['pts']:2d} | Coef:{r['coeficiente']:.3f}")
