import json
import re

# Consolidación completa de datos oficiales de la Liga Universitaria Sanjuanina de Fútbol - Categoría A 2026

DATA = {
    "liga": {
        "nombre": "Liga Universitaria Sanjuanina de Fútbol",
        "categoria": "Categoría A",
        "subtitulo": "Categoría A · Fútbol Universitario",
        "temporada": 2026,
        "organizador": "Secretaría de Bienestar Universitario · Dirección General de Deportes y Recreación",
        "descripcion": "Sitio Oficial de la Liga Universitaria Sanjuanina de Fútbol, Categoría A 2026.",
        "torneoActual": "Clausura 2026",
        "estadoClausura": "En disputa (Resultados oficiales hasta la Fecha 3)",
        "ultimaFechaClausura": 3
    },
    "equipos": [
        {
            "id": "antorcha",
            "name": "Antorcha",
            "shortName": "ANT",
            "crest": "public/escudos/antorcha.png",
            "zonaClausura": "A",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#e63946"
        },
        {
            "id": "aston",
            "name": "Aston",
            "shortName": "AST",
            "crest": "public/escudos/aston.png",
            "zonaClausura": "A",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#7b2cbf"
        },
        {
            "id": "c_lesion",
            "name": "C-Lesión",
            "shortName": "CLE",
            "crest": "public/escudos/c_lesion.png",
            "zonaClausura": "A",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#2a9d8f"
        },
        {
            "id": "calise",
            "name": "Calise",
            "shortName": "CAL",
            "crest": "public/escudos/calise.png",
            "zonaClausura": "B",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#e76f51"
        },
        {
            "id": "celtic",
            "name": "Celtic",
            "shortName": "CEL",
            "crest": "public/escudos/celtic.png",
            "zonaClausura": "B",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#2d6a4f"
        },
        {
            "id": "constructores",
            "name": "Constructores",
            "shortName": "CON",
            "crest": "public/escudos/constructores.png",
            "zonaClausura": "A",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#f4a261"
        },
        {
            "id": "de_primera",
            "name": "De Primera",
            "shortName": "DEP",
            "crest": "public/escudos/de_primera.png",
            "zonaClausura": "B",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#1d3557"
        },
        {
            "id": "eclipse",
            "name": "Eclipse",
            "shortName": "ECL",
            "crest": "public/escudos/eclipse.png",
            "zonaClausura": "B",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#457b9d"
        },
        {
            "id": "jagermeister",
            "name": "Jägermeister",
            "shortName": "JAG",
            "crest": "public/escudos/jagermeister.png",
            "zonaClausura": "A",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#d4a373"
        },
        {
            "id": "la_maquina",
            "name": "La Máquina",
            "shortName": "MAQ",
            "crest": "public/escudos/la_maquina.png",
            "zonaClausura": "A",
            "zonaApertura": "B",
            "fundacion": "Liga Universitaria",
            "color": "#b5179e"
        },
        {
            "id": "maverick",
            "name": "Maverick",
            "shortName": "MAV",
            "crest": "public/escudos/maverick.png",
            "zonaClausura": "B",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#3f37c9"
        },
        {
            "id": "minaster_city",
            "name": "Minaster City",
            "shortName": "MIN",
            "crest": "public/escudos/minaster_city.png",
            "zonaClausura": "A",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#48cae4"
        },
        {
            "id": "nottingham",
            "name": "Nottingham",
            "shortName": "NOT",
            "crest": "public/escudos/nottingham.png",
            "zonaClausura": "A",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#d90429"
        },
        {
            "id": "otro_equipo",
            "name": "Otro Equipo",
            "shortName": "OEQ",
            "crest": "public/escudos/otro_equipo.png",
            "zonaClausura": "B",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#6c757d"
        },
        {
            "id": "red_bull",
            "name": "Red Bull",
            "shortName": "RBU",
            "crest": "public/escudos/red_bull.png",
            "zonaClausura": "B",
            "zonaApertura": "A",
            "fundacion": "Liga Universitaria",
            "color": "#0077b6"
        }
    ],
    "equiposAperturaHistoricos": [
        { "id": "la_granjah", "name": "La Granjah", "crest": "", "note": "Descendido o no inscripto para Clausura" },
        { "id": "natania", "name": "Natania", "crest": "", "note": "Descalificado Fecha 4 por dos no presentaciones (Art. 4)" },
        { "id": "fabulosos", "name": "Fabulosos", "crest": "", "note": "Descalificado Fecha 1 por no presentación" }
    ]
}

with open("liga_seed.json", "w", encoding="utf-8") as f:
    json.dump(DATA, f, indent=2, ensure_ascii=False)

print("Seed básica creada con éxito.")
