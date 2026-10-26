import json
import re

# Definición canónica de los 15 equipos
TEAMS = {
    "antorcha": {
        "id": "antorcha",
        "name": "Antorcha",
        "officialName": "Antorcha",
        "crest": "escudos/antorcha.png",
        "zonaClausura": "A",
        "zonaApertura": "B",
        "color": "#e63946"
    },
    "aston": {
        "id": "aston",
        "name": "Aston",
        "officialName": "Aston",
        "crest": "escudos/aston.png",
        "zonaClausura": "A",
        "zonaApertura": "A",
        "color": "#7b2cbf"
    },
    "c_lesion": {
        "id": "c_lesion",
        "name": "C-Lesión",
        "officialName": "C-Lesión",
        "crest": "escudos/c_lesion.png",
        "zonaClausura": "A",
        "zonaApertura": "B",
        "color": "#2a9d8f"
    },
    "calise": {
        "id": "calise",
        "name": "Calise",
        "officialName": "Calise",
        "crest": "escudos/calise.png",
        "zonaClausura": "B",
        "zonaApertura": "B",
        "color": "#e76f51"
    },
    "celtic": {
        "id": "celtic",
        "name": "Celtic",
        "officialName": "Celtic",
        "crest": "escudos/celtic.png",
        "zonaClausura": "B",
        "zonaApertura": "B",
        "color": "#2d6a4f"
    },
    "constructores": {
        "id": "constructores",
        "name": "Constructores",
        "officialName": "Constructores",
        "crest": "escudos/constructores.png",
        "zonaClausura": "A",
        "zonaApertura": "A",
        "color": "#f4a261"
    },
    "de_primera": {
        "id": "de_primera",
        "name": "De Primera",
        "officialName": "De Primera",
        "crest": "escudos/de_primera.png",
        "zonaClausura": "B",
        "zonaApertura": "B",
        "color": "#1d3557"
    },
    "eclipse": {
        "id": "eclipse",
        "name": "Eclipse",
        "officialName": "Eclipse",
        "crest": "escudos/eclipse.png",
        "zonaClausura": "B",
        "zonaApertura": "B",
        "color": "#457b9d"
    },
    "jagermeister": {
        "id": "jagermeister",
        "name": "Jägermeister",
        "officialName": "Jägermeister",
        "crest": "escudos/jagermeister.png",
        "zonaClausura": "A",
        "zonaApertura": "A",
        "color": "#d4a373"
    },
    "la_maquina": {
        "id": "la_maquina",
        "name": "La Máquina",
        "officialName": "La Máquina",
        "crest": "escudos/la_maquina.png",
        "zonaClausura": "A",
        "zonaApertura": "B",
        "color": "#b5179e"
    },
    "maverick": {
        "id": "maverick",
        "name": "Maverick",
        "officialName": "Maverick",
        "crest": "escudos/maverick.png",
        "zonaClausura": "B",
        "zonaApertura": "A",
        "color": "#3f37c9"
    },
    "minaster_city": {
        "id": "minaster_city",
        "name": "Minaster City",
        "officialName": "Minaster City",
        "crest": "escudos/minaster_city.png",
        "zonaClausura": "A",
        "zonaApertura": "A",
        "color": "#48cae4"
    },
    "nottingham": {
        "id": "nottingham",
        "name": "Nottingham",
        "officialName": "Nottingham",
        "crest": "escudos/nottingham.png",
        "zonaClausura": "A",
        "zonaApertura": "A",
        "color": "#d90429"
    },
    "otro_equipo": {
        "id": "otro_equipo",
        "name": "Otro Equipo",
        "officialName": "Otro Equipo",
        "crest": "escudos/otro_equipo.png",
        "zonaClausura": "B",
        "zonaApertura": "A",
        "color": "#6c757d"
    },
    "red_bull": {
        "id": "red_bull",
        "name": "Red Bull",
        "officialName": "Red Bull",
        "crest": "escudos/red_bull.png",
        "zonaClausura": "B",
        "zonaApertura": "A",
        "color": "#0077b6"
    }
}

# Equipos históricos del Apertura que no continúan en Clausura
HISTORIC_TEAMS = {
    "la_granjah": {
        "id": "la_granjah",
        "name": "La Granjah",
        "officialName": "La Granjah",
        "crest": "",
        "zonaApertura": "B",
        "note": "Participó en el Apertura (Zona B)"
    },
    "natania": {
        "id": "natania",
        "name": "Natania",
        "officialName": "Natania",
        "crest": "",
        "zonaApertura": "A",
        "note": "Descalificado en Fecha 4 del Apertura por dos no presentaciones (Art 4)"
    },
    "fabulosos": {
        "id": "fabulosos",
        "name": "Fabulosos",
        "officialName": "Fabulosos",
        "crest": "",
        "zonaApertura": "B",
        "note": "Descalificado en Fecha 1 del Apertura por no presentación"
    }
}

print(f"Total equipos Categoría A 2026: {len(TEAMS)}")
print("Equipos listados correctamente.")
