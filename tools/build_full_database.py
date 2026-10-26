import json

database = {
  "liga": {
    "nombre": "Liga Universitaria Sanjuanina de Fútbol",
    "categoria": "Categoría A",
    "subtitulo": "Categoría A · Fútbol Universitario",
    "temporada": "Temporada 2026",
    "organizador": "Secretaría de Bienestar Universitario · Dirección General de Deportes y Recreación",
    "universidad": "Universidad Nacional de San Juan",
    "torneoActual": "Torneo Clausura 2026",
    "ultimaFechaDisputada": 3,
    "estado": "Clausura en disputa · Fecha 3 completada"
  },
  "equipos": [
    {
      "id": "antorcha",
      "nombre": "Antorcha",
      "slug": "antorcha",
      "escudo": "public/escudos/antorcha.png",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#e63946"
    },
    {
      "id": "aston",
      "nombre": "Aston",
      "slug": "aston",
      "escudo": "public/escudos/aston.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#7b2cbf"
    },
    {
      "id": "c_lesion",
      "nombre": "C-Lesión",
      "slug": "c_lesion",
      "escudo": "public/escudos/c_lesion.png",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#2a9d8f"
    },
    {
      "id": "calise",
      "nombre": "Calise",
      "slug": "calise",
      "escudo": "public/escudos/calise.png",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#e76f51"
    },
    {
      "id": "celtic",
      "nombre": "Celtic",
      "slug": "celtic",
      "escudo": "public/escudos/celtic.png",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#2d6a4f"
    },
    {
      "id": "constructores",
      "nombre": "Constructores",
      "slug": "constructores",
      "escudo": "public/escudos/constructores.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#f4a261"
    },
    {
      "id": "de_primera",
      "nombre": "De Primera",
      "slug": "de_primera",
      "escudo": "public/escudos/de_primera.png",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#1d3557"
    },
    {
      "id": "eclipse",
      "nombre": "Eclipse",
      "slug": "eclipse",
      "escudo": "public/escudos/eclipse.png",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#457b9d"
    },
    {
      "id": "jagermeister",
      "nombre": "Jägermeister",
      "slug": "jagermeister",
      "escudo": "public/escudos/jagermeister.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#d4a373"
    },
    {
      "id": "la_maquina",
      "nombre": "La Máquina",
      "slug": "la_maquina",
      "escudo": "public/escudos/la_maquina.png",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#b5179e"
    },
    {
      "id": "maverick",
      "nombre": "Maverick",
      "slug": "maverick",
      "escudo": "public/escudos/maverick.png",
      "zonaApertura": "A",
      "zonaClausura": "B",
      "color": "#3f37c9"
    },
    {
      "id": "minaster_city",
      "nombre": "Minaster City",
      "slug": "minaster_city",
      "escudo": "public/escudos/minaster_city.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#48cae4"
    },
    {
      "id": "nottingham",
      "nombre": "Nottingham",
      "slug": "nottingham",
      "escudo": "public/escudos/nottingham.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#d90429"
    },
    {
      "id": "otro_equipo",
      "nombre": "Otro Equipo",
      "slug": "otro_equipo",
      "escudo": "public/escudos/otro_equipo.png",
      "zonaApertura": "A",
      "zonaClausura": "B",
      "color": "#6c757d"
    },
    {
      "id": "red_bull",
      "nombre": "Red Bull",
      "slug": "red_bull",
      "escudo": "public/escudos/red_bull.png",
      "zonaApertura": "A",
      "zonaClausura": "B",
      "color": "#0077b6"
    }
  ],

  "apertura": {
    "campeon": "Jägermeister",
    "subcampeon": "Maverick",
    "tercero": "Aston",
    "cuarto": "Calise",
    "campeonPlata": "Minaster City",
    "subcampeonPlata": "Nottingham",
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "partidos": [
          { "zona": "Zona A", "local": "Minaster City", "visitante": "Natania", "golesL": 3, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Aston", "visitante": "Maverick", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "No presentación Maverick" },
          { "zona": "Zona A", "local": "Red Bull", "visitante": "Jägermeister", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Constructores", "golesL": 1, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "La Máquina", "visitante": "C-Lesión", "golesL": 4, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Eclipse", "visitante": "La Granjah", "golesL": 3, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Calise", "visitante": "De Primera", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Antorcha", "visitante": "Celtic", "golesL": 4, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Otro Equipo", "visitante": "Fabulosos", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "No presentación Fabulosos" }
        ]
      },
      {
        "numero": 2,
        "nombre": "Fecha 2",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Natania", "golesL": 4, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Minaster City", "visitante": "Jägermeister", "golesL": 3, "golesV": 4, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Aston", "visitante": "Constructores", "golesL": 0, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Red Bull", "visitante": "Nottingham", "golesL": 2, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "C-Lesión", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre C-Lesión" },
          { "zona": "Zona B", "local": "La Máquina", "visitante": "De Primera", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Eclipse", "visitante": "Celtic", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Calise", "visitante": "Antorcha", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Maverick", "visitante": "La Granjah", "golesL": 12, "golesV": 0, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 3,
        "nombre": "Fecha 3",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Maverick", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Natania", "visitante": "Jägermeister", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "No se presentó Natania" },
          { "zona": "Zona A", "local": "Minaster City", "visitante": "Nottingham", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Aston", "visitante": "Red Bull", "golesL": 4, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "La Granjah", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre La Granjah" },
          { "zona": "Zona B", "local": "C-Lesión", "visitante": "De Primera", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "La Máquina", "visitante": "Antorcha", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Eclipse", "visitante": "Calise", "golesL": 3, "golesV": 5, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Constructores", "visitante": "Celtic", "golesL": 3, "golesV": 0, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 4,
        "nombre": "Fecha 4",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Jägermeister", "golesL": 0, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Maverick", "visitante": "Constructores", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Natania", "visitante": "Nottingham", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "No presentación Natania (Eliminado Art. 4)" },
          { "zona": "Zona A", "local": "Minaster City", "visitante": "Aston", "golesL": 3, "golesV": 4, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "De Primera", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre De Primera" },
          { "zona": "Zona B", "local": "La Granjah", "visitante": "Celtic", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "No se presentó La Granjah" },
          { "zona": "Zona B", "local": "C-Lesión", "visitante": "Antorcha", "golesL": 0, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "La Máquina", "visitante": "Eclipse", "golesL": 2, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Red Bull", "visitante": "Calise", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 5,
        "nombre": "Fecha 5",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Constructores", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Jägermeister", "visitante": "Nottingham", "golesL": 2, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Maverick", "visitante": "Red Bull", "golesL": 4, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Libre", "visitante": "Aston", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Aston" },
          { "zona": "Zona B", "local": "Libre", "visitante": "Celtic", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Celtic" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "Antorcha", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "La Granjah", "visitante": "Calise", "golesL": 0, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "C-Lesión", "visitante": "Eclipse", "golesL": 0, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Minaster City", "visitante": "La Máquina", "golesL": 4, "golesV": 2, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 6,
        "nombre": "Fecha 6",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Nottingham", "golesL": 3, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "Red Bull", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Jägermeister", "visitante": "Aston", "golesL": 4, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Maverick", "visitante": "Minaster City", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "Antorcha", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Antorcha" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "Calise", "golesL": 0, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "Eclipse", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "La Granjah", "visitante": "La Máquina", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "No se presentó La Granjah" },
          { "zona": "Interzonal", "local": "Libre", "visitante": "C-Lesión", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre C-Lesión" }
        ]
      },
      {
        "numero": 7,
        "nombre": "Fecha 7",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Red Bull", "golesL": 4, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Aston", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "Minaster City", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Maverick", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Maverick" },
          { "zona": "Zona B", "local": "Libre", "visitante": "Calise", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Calise" },
          { "zona": "Zona B", "local": "Antorcha", "visitante": "Eclipse", "golesL": 1, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "La Máquina", "golesL": 3, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "La Granjah", "visitante": "C-Lesión", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Jägermeister", "visitante": "De Primera", "golesL": 4, "golesV": 3, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 8,
        "nombre": "Fecha 8",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Aston", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Red Bull", "visitante": "Minaster City", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Constructores" },
          { "zona": "Zona A", "local": "Jägermeister", "visitante": "Maverick", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "Eclipse", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Eclipse" },
          { "zona": "Zona B", "local": "Calise", "visitante": "La Máquina", "golesL": 1, "golesV": 4, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "C-Lesión", "golesL": 0, "golesV": 5, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "La Granjah", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Nottingham", "visitante": "Antorcha", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 9,
        "nombre": "Fecha 9",
        "partidos": [
          { "zona": "Zona A", "local": "Otro Equipo", "visitante": "Minaster City", "golesL": 3, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Red Bull", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Red Bull" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Maverick", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "Jägermeister", "golesL": 4, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "La Máquina", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre La Máquina" },
          { "zona": "Zona B", "local": "Calise", "visitante": "C-Lesión", "golesL": 4, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Antorcha", "visitante": "La Granjah", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "De Primera", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Interzonal", "local": "Aston", "visitante": "Eclipse", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" }
        ]
      }
    ],
    "playoffs": {
      "faseCampeonato": {
        "cuartos": [
          { "codigo": "CF1", "local": "Jägermeister", "visitante": "De Primera", "golesL": 3, "golesV": 1, "ganador": "Jägermeister" },
          { "codigo": "CF2", "local": "Aston", "visitante": "Celtic", "golesL": 5, "golesV": 0, "ganador": "Aston" },
          { "codigo": "CF3", "local": "Antorcha", "visitante": "Maverick", "golesL": 0, "golesV": 0, "penalesL": 2, "penalesV": 4, "ganador": "Maverick", "nota": "Penales: 2 - 4" },
          { "codigo": "CF4", "local": "Calise", "visitante": "Otro Equipo", "golesL": 1, "golesV": 0, "ganador": "Calise" }
        ],
        "semifinales": [
          { "codigo": "SF1", "local": "Jägermeister", "visitante": "Aston", "golesL": 2, "golesV": 0, "ganador": "Jägermeister" },
          { "codigo": "SF2", "local": "Maverick", "visitante": "Calise", "golesL": 4, "golesV": 0, "ganador": "Maverick" }
        ],
        "tercerPuesto": { "codigo": "3P", "local": "Aston", "visitante": "Calise", "golesL": 2, "golesV": 1, "ganador": "Aston" },
        "final": { "codigo": "FINAL", "local": "Jägermeister", "visitante": "Maverick", "golesL": 1, "golesV": 0, "ganador": "Jägermeister", "nota": "¡Jägermeister Campeón Apertura 2026!" }
      },
      "copaPlata": {
        "cuartos": [
          { "codigo": "CF1", "local": "Nottingham", "visitante": "Red Bull", "golesL": 4, "golesV": 3, "ganador": "Nottingham" },
          { "codigo": "CF2", "local": "Minaster City", "visitante": "C-Lesión", "golesL": 4, "golesV": 2, "ganador": "Minaster City" },
          { "codigo": "CF3", "local": "Eclipse", "visitante": "Constructores", "golesL": 1, "golesV": 2, "ganador": "Constructores" }
        ],
        "semifinales": [
          { "codigo": "SF1", "local": "La Máquina", "visitante": "Nottingham", "golesL": 2, "golesV": 5, "ganador": "Nottingham" },
          { "codigo": "SF2", "local": "Minaster City", "visitante": "Constructores", "golesL": 2, "golesV": 0, "ganador": "Minaster City" }
        ],
        "final": { "codigo": "FINAL", "local": "Minaster City", "visitante": "Nottingham", "golesL": 0, "golesV": 0, "penalesL": 3, "penalesV": 1, "ganador": "Minaster City", "nota": "Penales: 3 - 1. ¡Minaster City Campeón de Plata!" }
      }
    },
    "tablas": {
      "zonaA": [
        { "pos": 1, "equipo": "Jägermeister", "pj": 8, "pg": 5, "pe": 2, "pp": 1, "gf": 19, "gc": 16, "dg": 3, "pts": 17, "clasifico": "campeonato" },
        { "pos": 2, "equipo": "Maverick", "pj": 8, "pg": 3, "pe": 4, "pp": 1, "gf": 23, "gc": 11, "dg": 12, "pts": 13, "clasifico": "campeonato" },
        { "pos": 3, "equipo": "Aston", "pj": 8, "pg": 4, "pe": 1, "pp": 3, "gf": 15, "gc": 13, "dg": 2, "pts": 13, "clasifico": "campeonato" },
        { "pos": 4, "equipo": "Otro Equipo", "pj": 7, "pg": 3, "pe": 2, "pp": 2, "gf": 14, "gc": 9, "dg": 5, "pts": 10, "clasifico": "campeonato" },
        { "pos": 5, "equipo": "Nottingham", "pj": 8, "pg": 3, "pe": 2, "pp": 3, "gf": 13, "gc": 12, "dg": 1, "pts": 9, "clasifico": "plata" },
        { "pos": 6, "equipo": "Minaster City", "pj": 8, "pg": 2, "pe": 3, "pp": 3, "gf": 19, "gc": 19, "dg": 0, "pts": 9, "clasifico": "plata" },
        { "pos": 7, "equipo": "Constructores", "pj": 8, "pg": 2, "pe": 3, "pp": 3, "gf": 10, "gc": 10, "dg": 0, "pts": 8, "clasifico": "plata" },
        { "pos": 8, "equipo": "Red Bull", "pj": 8, "pg": 1, "pe": 3, "pp": 4, "gf": 13, "gc": 20, "dg": -7, "pts": 6, "clasifico": "plata" }
      ],
      "zonaB": [
        { "pos": 1, "equipo": "Antorcha", "pj": 8, "pg": 5, "pe": 3, "pp": 0, "gf": 13, "gc": 4, "dg": 9, "pts": 18, "clasifico": "campeonato" },
        { "pos": 2, "equipo": "Calise", "pj": 8, "pg": 4, "pe": 1, "pp": 3, "gf": 14, "gc": 14, "dg": 0, "pts": 13, "clasifico": "campeonato" },
        { "pos": 3, "equipo": "De Primera", "pj": 8, "pg": 4, "pe": 2, "pp": 2, "gf": 14, "gc": 11, "dg": 3, "pts": 14, "clasifico": "campeonato" },
        { "pos": 4, "equipo": "Celtic", "pj": 8, "pg": 4, "pe": 0, "pp": 4, "gf": 10, "gc": 15, "dg": -5, "pts": 12, "clasifico": "campeonato" },
        { "pos": 5, "equipo": "La Máquina", "pj": 8, "pg": 4, "pe": 0, "pp": 4, "gf": 17, "gc": 14, "dg": 3, "pts": 12, "clasifico": "plata" },
        { "pos": 6, "equipo": "Eclipse", "pj": 8, "pg": 3, "pe": 1, "pp": 4, "gf": 15, "gc": 12, "dg": 3, "pts": 10, "clasifico": "plata" },
        { "pos": 7, "equipo": "C-Lesión", "pj": 7, "pg": 2, "pe": 1, "pp": 4, "gf": 10, "gc": 13, "dg": -3, "pts": 7, "clasifico": "plata" },
        { "pos": 8, "equipo": "La Granjah", "pj": 8, "pg": 0, "pe": 0, "pp": 8, "gf": 0, "gc": 26, "dg": -26, "pts": 0, "clasifico": "descenso" }
      ]
    },
    "goleadores": [
      { "pos": 1, "jugador": "Salazar Ovejero, Facundo", "equipo": "Eclipse", "goles": 10 },
      { "pos": 2, "jugador": "Salinas, Guillermo", "equipo": "Minaster City", "goles": 9 },
      { "pos": 3, "jugador": "Pérez, Ignacio", "equipo": "Otro Equipo", "goles": 9 },
      { "pos": 4, "jugador": "Savorani Jofré, Sebastián", "equipo": "Aston", "goles": 6 },
      { "pos": 5, "jugador": "Carvajal, Nicolás", "equipo": "Jägermeister", "goles": 6 },
      { "pos": 6, "jugador": "Notario, Matías", "equipo": "Maverick", "goles": 6 },
      { "pos": 7, "jugador": "Velázquez, Francisco", "equipo": "Maverick", "goles": 6 },
      { "pos": 8, "jugador": "Beja, Augusto", "equipo": "Jägermeister", "goles": 5 },
      { "pos": 9, "jugador": "Sánchez Quinteros, Mateo", "equipo": "Red Bull", "goles": 5 },
      { "pos": 10, "jugador": "Vildoso Rosales, Jesús", "equipo": "Aston", "goles": 4 },
      { "pos": 11, "jugador": "Herrería, Juan Ignacio", "equipo": "Otro Equipo", "goles": 4 },
      { "pos": 12, "jugador": "Martínez, Mario Valentín", "equipo": "Red Bull", "goles": 4 },
      { "pos": 13, "jugador": "Ríos, Maximiliano", "equipo": "Maverick", "goles": 4 },
      { "pos": 14, "jugador": "Voiro, Thiago", "equipo": "Aston", "goles": 4 },
      { "pos": 15, "jugador": "García, Francisco Tomás", "equipo": "Constructores", "goles": 3 }
    ]
  },

  "clausura": {
    "enCurso": True,
    "ultimaFechaDisputada": 3,
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "disputada": True,
        "partidos": [
          { "zona": "Zona A", "local": "Antorcha", "visitante": "C-Lesión", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Minaster City", "golesL": 1, "golesV": 4, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "La Máquina", "golesL": 3, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Jägermeister", "visitante": "Aston", "golesL": 2, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre De Primera" },
          { "zona": "Zona B", "local": "Calise", "visitante": "Maverick", "golesL": 1, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Red Bull", "visitante": "Otro Equipo", "golesL": 1, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "Eclipse", "golesL": 0, "golesV": 2, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 2,
        "nombre": "Fecha 2",
        "disputada": True,
        "partidos": [
          { "zona": "Zona A", "local": "Antorcha", "visitante": "Minaster City", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "C-Lesión", "visitante": "La Máquina", "golesL": 1, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Aston", "golesL": 2, "golesV": 2, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "Jägermeister", "golesL": 6, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "Maverick", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "Otro Equipo", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Otro Equipo" },
          { "zona": "Zona B", "local": "Calise", "visitante": "Eclipse", "golesL": 1, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Red Bull", "visitante": "Celtic", "golesL": 5, "golesV": 0, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 3,
        "nombre": "Fecha 3",
        "disputada": True,
        "partidos": [
          { "zona": "Zona A", "local": "Antorcha", "visitante": "La Máquina", "golesL": 1, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Minaster City", "visitante": "Aston", "golesL": 1, "golesV": 0, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "C-Lesión", "visitante": "Jägermeister", "golesL": 1, "golesV": 6, "estado": "finalizado", "nota": "" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Constructores", "golesL": 1, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "Otro Equipo", "golesL": 1, "golesV": 3, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Maverick", "visitante": "Eclipse", "golesL": 0, "golesV": 1, "estado": "finalizado", "nota": "" },
          { "zona": "Zona B", "local": "Libre", "visitante": "Celtic", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Celtic" },
          { "zona": "Zona B", "local": "Calise", "visitante": "Red Bull", "golesL": 1, "golesV": 1, "estado": "finalizado", "nota": "" }
        ]
      },
      {
        "numero": 4,
        "nombre": "Fecha 4",
        "disputada": False,
        "partidos": [
          { "zona": "Zona A", "local": "Antorcha", "visitante": "Aston", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona A", "local": "La Máquina", "visitante": "Jägermeister", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona A", "local": "Minaster City", "visitante": "Constructores", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona A", "local": "C-Lesión", "visitante": "Nottingham", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona B", "local": "De Primera", "visitante": "Eclipse", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona B", "local": "Otro Equipo", "visitante": "Celtic", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona B", "local": "Maverick", "visitante": "Red Bull", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "A programar por la Organización" },
          { "zona": "Zona B", "local": "Calise", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Calise" }
        ]
      },
      {
        "numero": 5,
        "nombre": "Fecha 5",
        "disputada": False,
        "partidos": [
          { "zona": "Zona A", "local": "Constructores", "visitante": "Antorcha", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Jägermeister", "visitante": "Minaster City", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Aston", "visitante": "C-Lesión", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "La Máquina", "visitante": "Nottingham", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "De Primera", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Eclipse", "visitante": "Red Bull", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Otro Equipo", "visitante": "Calise", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Maverick", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Maverick" }
        ]
      },
      {
        "numero": 6,
        "nombre": "Fecha 6",
        "disputada": False,
        "partidos": [
          { "zona": "Zona A", "local": "Antorcha", "visitante": "Jägermeister", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Constructores", "visitante": "Aston", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Minaster City", "visitante": "C-Lesión", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Nottingham", "visitante": "La Máquina", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Red Bull", "visitante": "De Primera", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Celtic", "visitante": "Calise", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Eclipse", "visitante": "Maverick", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Otro Equipo", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Otro Equipo" }
        ]
      },
      {
        "numero": 7,
        "nombre": "Fecha 7",
        "disputada": False,
        "partidos": [
          { "zona": "Zona A", "local": "Nottingham", "visitante": "Antorcha", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "C-Lesión", "visitante": "Constructores", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Aston", "visitante": "La Máquina", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona A", "local": "Jägermeister", "visitante": "Minaster City", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Calise", "visitante": "De Primera", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Red Bull", "visitante": "Libre", "golesL": None, "golesV": None, "estado": "libre", "nota": "Fecha Libre Red Bull" },
          { "zona": "Zona B", "local": "Otro Equipo", "visitante": "Eclipse", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" },
          { "zona": "Zona B", "local": "Maverick", "visitante": "Celtic", "golesL": None, "golesV": None, "estado": "pendiente", "nota": "Próximamente" }
        ]
      }
    ],
    "tablas": {
      "zonaA": [
        { "pos": 1, "equipo": "Constructores", "pj": 3, "pg": 3, "pe": 0, "pp": 0, "gf": 12, "gc": 2, "dg": 10, "pts": 9, "zona": "A" },
        { "pos": 2, "equipo": "Minaster City", "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 6, "gc": 2, "dg": 4, "pts": 7, "zona": "A" },
        { "pos": 3, "equipo": "Jägermeister", "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 8, "gc": 7, "dg": 1, "pts": 6, "zona": "A" },
        { "pos": 4, "equipo": "Antorcha", "pj": 3, "pg": 1, "pe": 2, "pp": 0, "gf": 4, "gc": 3, "dg": 1, "pts": 5, "zona": "A" },
        { "pos": 5, "equipo": "La Máquina", "pj": 3, "pg": 1, "pe": 0, "pp": 2, "gf": 4, "gc": 5, "dg": -1, "pts": 3, "zona": "A" },
        { "pos": 6, "equipo": "Aston", "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 2, "gc": 5, "dg": -3, "pts": 1, "zona": "A" },
        { "pos": 7, "equipo": "Nottingham", "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 4, "gc": 9, "dg": -5, "pts": 1, "zona": "A" },
        { "pos": 8, "equipo": "C-Lesión", "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 4, "gc": 11, "dg": -7, "pts": 1, "zona": "A" }
      ],
      "zonaB": [
        { "pos": 1, "equipo": "Red Bull", "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 7, "gc": 1, "dg": 6, "pts": 7, "zona": "B" },
        { "pos": 2, "equipo": "Eclipse", "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 3, "gc": 1, "dg": 2, "pts": 6, "zona": "B" },
        { "pos": 3, "equipo": "Calise", "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 3, "gc": 3, "dg": 0, "pts": 4, "zona": "B" },
        { "pos": 4, "equipo": "Maverick", "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 3, "gc": 3, "dg": 0, "pts": 4, "zona": "B" },
        { "pos": 5, "equipo": "Otro Equipo", "pj": 2, "pg": 1, "pe": 0, "pp": 1, "gf": 3, "gc": 2, "dg": 1, "pts": 3, "zona": "B" },
        { "pos": 6, "equipo": "De Primera", "pj": 2, "pg": 0, "pe": 1, "pp": 1, "gf": 2, "gc": 4, "dg": -2, "pts": 1, "zona": "B" },
        { "pos": 7, "equipo": "Celtic", "pj": 2, "pg": 0, "pe": 0, "pp": 2, "gf": 0, "gc": 7, "dg": -7, "pts": 0, "zona": "B" }
      ]
    },
    "goleadores": [
      { "pos": 1, "jugador": "Beja, Augusto", "equipo": "Jägermeister", "goles": 4 },
      { "pos": 2, "jugador": "Salinas, Guillermo", "equipo": "Minaster City", "goles": 4 },
      { "pos": 3, "jugador": "Aguilera, Tomás Ezequiel", "equipo": "Constructores", "goles": 3 },
      { "pos": 4, "jugador": "Albornó, Sergio Damián", "equipo": "Red Bull", "goles": 3 },
      { "pos": 5, "jugador": "Martínez González, Mario Valentín", "equipo": "Red Bull", "goles": 3 },
      { "pos": 6, "jugador": "Carrario, Enzo", "equipo": "Calise", "goles": 2 },
      { "pos": 7, "jugador": "Ortiz, Eduardo Mateo", "equipo": "Constructores", "goles": 2 },
      { "pos": 8, "jugador": "González, Francisco", "equipo": "Nottingham", "goles": 2 },
      { "pos": 9, "jugador": "Alós Olmos, Juan Bautista", "equipo": "Antorcha", "goles": 1 },
      { "pos": 10, "jugador": "Contreras Cuevas, Lisandro Nicolás", "equipo": "Antorcha", "goles": 1 },
      { "pos": 11, "jugador": "Mercado, Federico Ezequiel", "equipo": "Antorcha", "goles": 1 },
      { "pos": 12, "jugador": "Riveras Fuentes, Juan Ignacio", "equipo": "Antorcha", "goles": 1 },
      { "pos": 13, "jugador": "Flores, Dardo Ignacio", "equipo": "Aston", "goles": 1 },
      { "pos": 14, "jugador": "Grassano Gómez, Santino", "equipo": "Aston", "goles": 1 },
      { "pos": 15, "jugador": "Adaro, Diego Sebastián", "equipo": "C-Lesión", "goles": 1 },
      { "pos": 16, "jugador": "Contreras, Mariano", "equipo": "C-Lesión", "goles": 1 },
      { "pos": 17, "jugador": "Quiroga González, Enzo", "equipo": "Constructores", "goles": 1 },
      { "pos": 18, "jugador": "López, Braian Facundo", "equipo": "Eclipse", "goles": 1 }
    ]
  },

  "sanciones": [
    { "jugador": "Castro, José", "equipo": "C-Lesión", "sancion": "Hasta 31/12/2027", "articulo": "Art 23º inc 'a'", "motivo": "Conducta antideportiva gravísima", "estado": "Vigente" },
    { "jugador": "Flores, José", "equipo": "C-Lesión", "sancion": "Hasta 31/12/2032", "articulo": "Art 23º inc 'a'", "motivo": "Agresión física grave a autoridades", "estado": "Vigente" },
    { "jugador": "DT: Murciano Flavio", "equipo": "C-Lesión", "sancion": "Inhabilitación definitiva", "articulo": "Tribunal de Disciplina", "motivo": "Inhabilitación definitiva del cuerpo técnico", "estado": "Definitiva" },
    { "jugador": "Cayo, Damián", "equipo": "C-Lesión", "sancion": "1 Partido", "articulo": "Art 27 inc 'E'", "motivo": "Doble amonestación", "estado": "Cumplido (1/1)" },
    { "jugador": "Díaz Cuenca, Alejo", "equipo": "Antorcha", "sancion": "Hasta 31/12/2029", "articulo": "Art 23 inc 'B'", "motivo": "Infracción grave contra adversario", "estado": "Vigente" },
    { "jugador": "Montero, Patricio", "equipo": "Antorcha", "sancion": "Hasta 31/12/2026", "articulo": "Art 23 inc 'B' y 24 inc 'B'", "motivo": "Agresión e insultos reiterados", "estado": "Vigente" },
    { "jugador": "Martínez, Matías", "equipo": "Antorcha", "sancion": "1 Partido", "articulo": "Art 26 inc 'C'", "motivo": "Juego brusco", "estado": "Cumplido" },
    { "jugador": "Guillén, Facundo", "equipo": "Aston", "sancion": "Hasta 31/12/2026", "articulo": "Art 24º inc 'A' y 26º inc 'E'", "motivo": "Reincidencia disciplinaria grave", "estado": "Vigente" },
    { "jugador": "Tejada, Joel", "equipo": "Aston", "sancion": "Hasta 31/12/2027", "articulo": "Art 22 inc 'B'", "motivo": "Insubordinación y agresión verbal", "estado": "Vigente" },
    { "jugador": "Morales, Fernando", "equipo": "Celtic", "sancion": "Hasta 31/12/2026", "articulo": "Art 29 inc 'B'", "motivo": "Falta de respeto a autoridades", "estado": "Vigente" },
    { "jugador": "Chía, Juan Cruz", "equipo": "Celtic", "sancion": "1 Partido", "articulo": "Art 26 inc 'C'", "motivo": "Juego brusco", "estado": "Cumplido" },
    { "jugador": "Ramos, Osvaldo", "equipo": "Calise", "sancion": "Hasta 30/06/2028", "articulo": "Art 22 inc 'B'", "motivo": "Agresión y conducta antideportiva", "estado": "Vigente" },
    { "jugador": "Toro, Federico", "equipo": "Calise", "sancion": "4 Partidos", "articulo": "Art 26 inc 'C' y 23 inc 'A'", "motivo": "Expulsión directa agravada", "estado": "Cumplió 3 (Resta 1)" },
    { "jugador": "Torres, Francisco", "equipo": "Constructores", "sancion": "Hasta 31/12/2028", "articulo": "Art 29º inc 'B'", "motivo": "Infracción disciplinaria continuada", "estado": "Vigente" },
    { "jugador": "Coria, Mariano", "equipo": "Constructores", "sancion": "Hasta 31/12/2026", "articulo": "Art 23º inc 'B'", "motivo": "Conducta antideportiva grave", "estado": "Vigente" },
    { "jugador": "Vargas, Juan Manuel", "equipo": "Constructores", "sancion": "2 Partidos", "articulo": "Art 22 inc 'B'", "motivo": "Conducta antideportiva", "estado": "Cumplido (2/2)" },
    { "jugador": "Boninato, Franco", "equipo": "De Primera", "sancion": "Hasta 31/07/2027", "articulo": "Art 25 inc 'B'", "motivo": "Incidente grave post-partido", "estado": "Vigente" },
    { "jugador": "Agüero, Ezequiel", "equipo": "De Primera", "sancion": "Hasta 31/12/2029", "articulo": "Art 25 inc 'B'", "motivo": "Agresión colectiva post-partido", "estado": "Vigente" },
    { "jugador": "Cortez, Facundo", "equipo": "De Primera", "sancion": "Hasta 31/07/2027", "articulo": "Art 25 inc 'B'", "motivo": "Participación en tumulto", "estado": "Vigente" },
    { "jugador": "Aguilera, Francisco", "equipo": "De Primera", "sancion": "Hasta 31/12/2027", "articulo": "Art 22 inc 'B'", "motivo": "Conducta desmedida", "estado": "Vigente" },
    { "jugador": "Equipo De Primera (General)", "equipo": "De Primera", "sancion": "Amonestación colectiva", "articulo": "Art 12.2 inc 'A'", "motivo": "Amonestación a todo el plantel por disturbios en Fecha 2", "estado": "Amonestación Oficial" },
    { "jugador": "García, Nahuel", "equipo": "Eclipse", "sancion": "Hasta 31/12/2026", "articulo": "Art 24 inc 'A'", "motivo": "Infracción reglamentaria grave", "estado": "Vigente" },
    { "jugador": "Albarracín, Matías", "equipo": "Eclipse", "sancion": "1 Partido", "articulo": "Art 26 inc 'C'", "motivo": "Juego brusco", "estado": "Vigente" },
    { "jugador": "Argañaraz, Matías", "equipo": "Jägermeister", "sancion": "3 Partidos", "articulo": "Art 24 inc 'A' y 23 inc 'A'", "motivo": "Expulsión agravada", "estado": "Cumplió 2 (Resta 1)" },
    { "jugador": "DT: Carvajal David", "equipo": "Jägermeister", "sancion": "2 Partidos", "articulo": "Art 23 inc 'A'", "motivo": "Exceso verbal reiterado", "estado": "Cumplido (2/2)" },
    { "jugador": "Núñez, Nahuel", "equipo": "La Máquina", "sancion": "4 Partidos", "articulo": "Art 23 inc 'A'", "motivo": "Juego brusco con fuerza excesiva", "estado": "Cumplió 2 (Resta 2)" },
    { "jugador": "Matus, Carlos Agustín", "equipo": "Maverick", "sancion": "Hasta 31/12/2026", "articulo": "Art 23 inc 'A'", "motivo": "Falta de respeto grave a la terna arbitral", "estado": "Vigente" },
    { "jugador": "Benega, Mauricio", "equipo": "Maverick", "sancion": "Hasta 30/06/2027", "articulo": "Art 23 inc 'A'", "motivo": "Conducta violenta", "estado": "Vigente" },
    { "jugador": "Ordines, Agustín", "equipo": "Maverick", "sancion": "2 Partidos", "articulo": "Art 23 inc 'A'", "motivo": "Conducta violenta", "estado": "Cumplido (2/2)" },
    { "jugador": "Velázquez, Francisco", "equipo": "Maverick", "sancion": "2 Partidos", "articulo": "Art 23 inc 'A'", "motivo": "Expulsión", "estado": "Cumplido (2/2)" },
    { "jugador": "Escobares, Nelson", "equipo": "Minaster City", "sancion": "3 Partidos", "articulo": "Art 23 inc 'A' y 25 inc 'C'", "motivo": "Juego brusco y protesta desmedida", "estado": "Cumplido (3/3)" },
    { "jugador": "Tello, Lautaro", "equipo": "Nottingham", "sancion": "Hasta 31/07/2027", "articulo": "Art 23 inc 'A'", "motivo": "Agresión física a rival", "estado": "Vigente" },
    { "jugador": "Guerra, Agustín", "equipo": "Nottingham", "sancion": "1 Partido", "articulo": "Art 23 inc 'A'", "motivo": "Doble amarilla", "estado": "Cumplido" },
    { "jugador": "Murciano, Eric", "equipo": "Red Bull", "sancion": "2 Partidos", "articulo": "Art 26 inc 'B'", "motivo": "Infracción reglamentaria en Fecha 3", "estado": "Vigente" }
  ],

  "reglamentos": {
    "formaDeDisputa": {
      "titulo": "Forma de Disputa Temporada 2026 — Categoría A",
      "puntos": [
        "La temporada 2026 está compuesta por dos torneos oficiales: Torneo Apertura y Torneo Clausura, además de la Tabla Anual y la Superfinal Anual para consagrar al Campeón Absoluto.",
        "Participan un total de 15 equipos distribuidos en Zona A (8 equipos) y Zona B (7 equipos). En Zona B queda un equipo libre por fecha.",
        "Fase Campeonato: Clasifican a cuartos de final los equipos ubicados entre el 1° y el 4° puesto de cada zona (1°A vs 4°B, 2°A vs 3°B, 1°B vs 4°A, 2°B vs 3°A). Se juega a eliminación directa.",
        "Copa de Plata: Los equipos del 5° al 8° (Zona A) y del 5° al 7° (Zona B) disputan la Copa de Plata para determinar su campeón.",
        "Tabla Anual: Se conforma sumando los puntos obtenidos exclusivamente durante la fase clasificatoria del Apertura y del Clausura mediante un coeficiente de rendimiento (Puntos obtenidos divididos en partidos jugados/programados). No se computan los playoffs.",
        "Puntos Bonus Anual: Al término de cada torneo se otorgan bonificaciones: Campeón Fase Campeonato (+3 pts), Subcampeón (+2 pts), Tercer Puesto (+1 pto), y Campeón Copa de Plata (+1 pto).",
        "Superfinal Anual: Se disputa entre el Campeón del Apertura (Jägermeister) y el Campeón del Clausura. Si ninguno lidera la Tabla Anual, juegan una prefinal para definir quién enfrenta al 1° de la Tabla Anual."
      ]
    },
    "criteriosDesempate": {
      "titulo": "Criterios de Desempate en Tablas de Posiciones",
      "puntos": [
        "1. Mayor cantidad de puntos acumulados.",
        "2. Mayor diferencia de goles (Goles a Favor menos Goles en Contra).",
        "3. Mayor cantidad de goles a favor (GF).",
        "4. Resultado del enfrentamiento directo entre los equipos empatados.",
        "5. Fair Play (menor cantidad de sanciones y tarjetas acumuladas)."
      ]
    },
    "reglamentoGeneral": {
      "titulo": "Reglamento General de la Liga Universitaria",
      "puntos": [
        "Duración de los partidos: Dos tiempos de 35 minutos con un intervalo de 10 minutos de descanso.",
        "Sustituciones: Se permiten cambios ilimitados en ventanas reglamentarias.",
        "Puntaje: Partido ganado 3 puntos, partido empatado 1 punto, partido perdido 0 puntos.",
        "No presentación: La no presentación sin aviso causa pérdida de los puntos en disputa y sanción pecuniaria. Dos no presentaciones causan la eliminación automática del torneo (Art. 4).",
        "Tarjetas amarillas: 3 tarjetas amarillas acumuladas acarrean 1 fecha de suspensión automática."
      ]
    },
    "regimenDisciplinario": {
      "titulo": "Régimen del Tribunal de Penas y Disciplina",
      "puntos": [
        "Las sanciones emanadas por el Tribunal de Penas son de cumplimiento efectivo e inapelables ante los árbitros.",
        "Las suspensiones por fechas o por tiempo fijado (meses o años) inhabilitan para actuar en cualquier categoría de la Liga.",
        "El incumplimiento de sanciones por parte de jugadores inhabilitados conlleva la pérdida de puntos del equipo y sanción agravada de oficio."
      ]
    }
  }
}

# Calcular Tabla Anual con puntos Apertura + Clausura + Bonus reglamentarios
# Bonus Apertura:
# Jägermeister: +3 (Campeón)
# Maverick: +2 (Subcampeón)
# Aston: +1 (3° puesto)
# Minaster City: +1 (Campeón Copa de Plata)

bonus_apertura = {
    "Jägermeister": 3,
    "Maverick": 2,
    "Aston": 1,
    "Minaster City": 1
}

# Tabla Anual consolidada
tabla_anual = []

# Mapeo de estadísticas por equipo
equipos_nombres = [e["nombre"] for e in database["equipos"]]

apertura_stats = {}
for fila in database["apertura"]["tablas"]["zonaA"] + database["apertura"]["tablas"]["zonaB"]:
    apertura_stats[fila["equipo"]] = fila

clausura_stats = {}
for fila in database["clausura"]["tablas"]["zonaA"] + database["clausura"]["tablas"]["zonaB"]:
    clausura_stats[fila["equipo"]] = fila

for eq in equipos_nombres:
    ap = apertura_stats.get(eq, {"pj": 0, "pg": 0, "pe": 0, "pp": 0, "gf": 0, "gc": 0, "dg": 0, "pts": 0})
    cl = clausura_stats.get(eq, {"pj": 0, "pg": 0, "pe": 0, "pp": 0, "gf": 0, "gc": 0, "dg": 0, "pts": 0})
    
    pj_total = ap["pj"] + cl["pj"]
    pg_total = ap["pg"] + cl["pg"]
    pe_total = ap["pe"] + cl["pe"]
    pp_total = ap["pp"] + cl["pp"]
    gf_total = ap["gf"] + cl["gf"]
    gc_total = ap["gc"] + cl["gc"]
    dg_total = gf_total - gc_total
    
    pts_cancha = ap["pts"] + cl["pts"]
    bonus = bonus_apertura.get(eq, 0)
    pts_total = pts_cancha + bonus
    coeficiente = round(pts_total / pj_total, 3) if pj_total > 0 else 0.0
    
    tabla_anual.append({
        "equipo": eq,
        "pj": pj_total,
        "pg": pg_total,
        "pe": pe_total,
        "pp": pp_total,
        "gf": gf_total,
        "gc": gc_total,
        "dg": dg_total,
        "ptsCancha": pts_cancha,
        "bonus": bonus,
        "pts": pts_total,
        "coeficiente": coeficiente,
        "pjAp": ap["pj"], "ptsAp": ap["pts"],
        "pjCl": cl["pj"], "ptsCl": cl["pts"]
    })

# Ordenar por Puntos Totales DESC, luego Diferencia de Gol DESC, luego Goles a Favor DESC
tabla_anual.sort(key=lambda x: (x["pts"], x["dg"], x["gf"]), reverse=True)
for i, row in enumerate(tabla_anual):
    row["pos"] = i + 1

database["tablaAnual"] = tabla_anual

with open("liga_data_consolidated.json", "w", encoding="utf-8") as f:
    json.dump(database, f, indent=2, ensure_ascii=False)

print("¡Dataset consolidado generado con éxito! Total equipos en tabla anual:", len(tabla_anual))
