/**
 * CATEGORÍA B 2026 — datos cargados desde los informes de la Liga
 * (Apertura: fechas 1 a 7 + fase final; Clausura: fechas 1 a 6; Tabla Anual recalculada tras la Fecha 6).
 * Generado a partir de los PDF; se completa con cada informe nuevo.
 */
(function () {
  'use strict';
  const A = window.LIGA_DATA;
  if (!A) return;
  const B = {
  "liga": null,
  "equipos": [
    {
      "id": "adove",
      "nombre": "Adove",
      "slug": "adove",
      "escudo": "public/escudos/adove.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/adovefc/",
      "instagramHandle": "@adovefc"
    },
    {
      "id": "agrimensura",
      "nombre": "Agrimensura",
      "slug": "agrimensura",
      "escudo": "public/escudos/agrimensura.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/fcagrimensura/",
      "instagramHandle": "@fcagrimensura"
    },
    {
      "id": "al_costado",
      "nombre": "Al Costado",
      "slug": "al_costado",
      "escudo": "public/escudos/al_costado.png?v=4",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/alcostadofc/",
      "instagramHandle": "@alcostadofc"
    },
    {
      "id": "central",
      "nombre": "Central",
      "slug": "central",
      "escudo": "public/escudos/central.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/centralfc25/",
      "instagramHandle": "@centralfc25"
    },
    {
      "id": "de_zurda",
      "nombre": "De Zurda",
      "slug": "de_zurda",
      "escudo": "public/escudos/de_zurda.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/dezurda__/",
      "instagramHandle": "@dezurda__"
    },
    {
      "id": "dep_la_verna",
      "nombre": "Dep. La Verna",
      "slug": "dep_la_verna",
      "escudo": "public/escudos/dep_la_verna.png?v=4",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/dep.laverna/",
      "instagramHandle": "@dep.laverna"
    },
    {
      "id": "descarte",
      "nombre": "Descarte",
      "slug": "descarte",
      "escudo": "public/escudos/descarte.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/fcdescarte/",
      "instagramHandle": "@fcdescarte"
    },
    {
      "id": "f90",
      "nombre": "F90",
      "slug": "f90",
      "escudo": "public/escudos/f90.png?v=5",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/vascodabfc/",
      "instagramHandle": "@vascodabfc"
    },
    {
      "id": "geologia",
      "nombre": "Geología",
      "slug": "geologia",
      "escudo": "public/escudos/geologia.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/geologia.fc/",
      "instagramHandle": "@geologia.fc"
    },
    {
      "id": "gol_en_contra",
      "nombre": "Gol en Contra",
      "slug": "gol_en_contra",
      "escudo": "public/escudos/gol_en_contra.png?v=4",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/fc.gec/",
      "instagramHandle": "@fc.gec"
    },
    {
      "id": "inter",
      "nombre": "Inter",
      "slug": "inter",
      "escudo": "public/escudos/inter.png?v=4",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/interfc.ok/",
      "instagramHandle": "@interfc.ok"
    },
    {
      "id": "malvinas",
      "nombre": "Malvinas",
      "slug": "malvinas",
      "escudo": "public/escudos/malvinas.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/malvinasfc23/",
      "instagramHandle": "@malvinasfc23"
    },
    {
      "id": "necaxa",
      "nombre": "Necaxa",
      "slug": "necaxa",
      "escudo": "public/escudos/necaxa.png?v=4",
      "zonaApertura": "B",
      "zonaClausura": "B",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/necaxa.fc/",
      "instagramHandle": "@necaxa.fc"
    },
    {
      "id": "tercer_tiempo",
      "nombre": "Tercer Tiempo",
      "slug": "tercer_tiempo",
      "escudo": "public/escudos/tercer_tiempo.png?v=4",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/tercer_tiempo.sj/",
      "instagramHandle": "@tercer_tiempo.sj"
    },
    {
      "id": "timba",
      "nombre": "Timba",
      "slug": "timba",
      "escudo": "public/escudos/timba.png?v=4",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/timbafc_sj/",
      "instagramHandle": "@timbafc_sj"
    }
  ],
  "apertura": {
    "campeon": "Necaxa",
    "subcampeon": "Al Costado",
    "tercero": "Malvinas",
    "cuarto": "Descarte",
    "campeonPlata": "Gol en Contra",
    "subcampeonPlata": "De Zurda",
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "Malvinas",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Central",
            "visitante": "Adove",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Agrimensura",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Geología",
            "visitante": "Timba",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "F90",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Tercer Tiempo",
            "visitante": "Newcauce",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "Gol en Contra",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 2,
        "nombre": "Fecha 2",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "Adove",
            "golesL": 3,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Malvinas",
            "visitante": "Agrimensura",
            "golesL": 3,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Central",
            "visitante": "Timba",
            "golesL": 3,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Geología",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Newcauce",
            "golesL": 6,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "F90",
            "visitante": "Gol en Contra",
            "golesL": 0,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Tercer Tiempo",
            "visitante": "Inter",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 3,
        "nombre": "Fecha 3",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "Agrimensura",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Adove",
            "visitante": "Timba",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Malvinas",
            "visitante": "Geología",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Central",
            "visitante": "De Zurda",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Gol en Contra",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Newcauce",
            "visitante": "Inter",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "F90",
            "visitante": "Al Costado",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Tercer Tiempo",
            "visitante": "Dep. La Verna",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 4,
        "nombre": "Fecha 4",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "Timba",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Geología",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Adove",
            "visitante": "De Zurda",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Malvinas",
            "visitante": "Central",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Gol en Contra",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Newcauce",
            "visitante": "Dep. La Verna",
            "golesL": 0,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "F90",
            "visitante": "Tercer Tiempo",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 5,
        "nombre": "Fecha 5",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "Geología",
            "golesL": 5,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "De Zurda",
            "golesL": 3,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Central",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Adove",
            "visitante": "Malvinas",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Inter",
            "visitante": "Dep. La Verna",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Gol en Contra",
            "visitante": "Tercer Tiempo",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Newcauce",
            "visitante": "F90",
            "golesL": 0,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 6,
        "nombre": "Fecha 6",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "De Zurda",
            "golesL": 4,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Geología",
            "visitante": "Central",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "Malvinas",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Adove",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Dep. La Verna",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Tercer Tiempo",
            "golesL": 4,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Inter",
            "visitante": "F90",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Gol en Contra",
            "visitante": "Newcauce",
            "golesL": 4,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 7,
        "nombre": "Fecha 7",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "Descarte",
            "visitante": "Central",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Malvinas",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Geología",
            "visitante": "Adove",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "Agrimensura",
            "golesL": 0,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Tercer Tiempo",
            "golesL": 6,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "F90",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Newcauce",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Inter",
            "visitante": "Gol en Contra",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      }
    ],
    "playoffs": {
      "faseCampeonato": {
        "cuartos": [
          {
            "codigo": "CF1",
            "local": "Descarte",
            "visitante": "Dep. La Verna",
            "golesL": 1,
            "golesV": 0,
            "ganador": "Descarte"
          },
          {
            "codigo": "CF2",
            "local": "Adove",
            "visitante": "Necaxa",
            "golesL": 0,
            "golesV": 3,
            "ganador": "Necaxa"
          },
          {
            "codigo": "CF3",
            "local": "F90",
            "visitante": "Malvinas",
            "golesL": 0,
            "golesV": 3,
            "ganador": "Malvinas"
          },
          {
            "codigo": "CF4",
            "local": "Al Costado",
            "visitante": "Central",
            "golesL": 0,
            "golesV": 0,
            "penalesL": 5,
            "penalesV": 4,
            "nota": "Penales: 5 - 4",
            "ganador": "Al Costado"
          }
        ],
        "semifinales": [
          {
            "codigo": "SF1",
            "local": "Descarte",
            "visitante": "Necaxa",
            "golesL": 1,
            "golesV": 1,
            "penalesL": 4,
            "penalesV": 5,
            "nota": "Penales: 4 - 5",
            "ganador": "Necaxa"
          },
          {
            "codigo": "SF2",
            "local": "Malvinas",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 0,
            "penalesL": 1,
            "penalesV": 3,
            "nota": "Penales: 1 - 3",
            "ganador": "Al Costado"
          }
        ],
        "tercerPuesto": {
          "codigo": "3P",
          "local": "Descarte",
          "visitante": "Malvinas",
          "golesL": null,
          "golesV": null,
          "ganador": "Malvinas",
          "nota": "Resultado no informado (Malvinas 3° según la Tabla Anual)"
        },
        "final": {
          "codigo": "FINAL",
          "local": "Necaxa",
          "visitante": "Al Costado",
          "golesL": 4,
          "golesV": 1,
          "ganador": "Necaxa",
          "nota": "¡Necaxa Campeón Apertura 2026!"
        }
      },
      "copaPlata": {
        "cuartos": [
          {
            "codigo": "CF1",
            "local": "Geología",
            "visitante": "Newcauce",
            "golesL": 2,
            "golesV": 0,
            "ganador": "Geología"
          },
          {
            "codigo": "CF2",
            "local": "De Zurda",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 2,
            "penalesL": 3,
            "penalesV": 1,
            "nota": "Penales: 3 - 1",
            "ganador": "De Zurda"
          },
          {
            "codigo": "CF3",
            "local": "Gol en Contra",
            "visitante": "Timba",
            "golesL": 4,
            "golesV": 1,
            "ganador": "Gol en Contra"
          },
          {
            "codigo": "CF4",
            "local": "Tercer Tiempo",
            "visitante": "Agrimensura",
            "golesL": 0,
            "golesV": 1,
            "ganador": "Agrimensura"
          }
        ],
        "semifinales": [
          {
            "codigo": "SF1",
            "local": "Geología",
            "visitante": "De Zurda",
            "golesL": 1,
            "golesV": 1,
            "penalesL": 2,
            "penalesV": 3,
            "nota": "Penales: 2 - 3",
            "ganador": "De Zurda"
          },
          {
            "codigo": "SF2",
            "local": "Gol en Contra",
            "visitante": "Agrimensura",
            "golesL": 3,
            "golesV": 0,
            "ganador": "Gol en Contra"
          }
        ],
        "final": {
          "codigo": "FINAL",
          "local": "Gol en Contra",
          "visitante": "De Zurda",
          "golesL": 3,
          "golesV": 0,
          "ganador": "Gol en Contra",
          "nota": "¡Gol en Contra Campeón de Plata!"
        }
      }
    },
    "tablas": {
      "zonaA": [
        {
          "pos": 1,
          "equipo": "Descarte",
          "pj": 7,
          "pg": 5,
          "pe": 2,
          "pp": 0,
          "gf": 17,
          "gc": 2,
          "dg": 15,
          "pts": 17,
          "zona": "A"
        },
        {
          "pos": 2,
          "equipo": "Central",
          "pj": 7,
          "pg": 5,
          "pe": 0,
          "pp": 2,
          "gf": 13,
          "gc": 4,
          "dg": 9,
          "pts": 15,
          "zona": "A"
        },
        {
          "pos": 3,
          "equipo": "Adove",
          "pj": 7,
          "pg": 5,
          "pe": 0,
          "pp": 2,
          "gf": 9,
          "gc": 7,
          "dg": 2,
          "pts": 15,
          "zona": "A"
        },
        {
          "pos": 4,
          "equipo": "Malvinas",
          "pj": 7,
          "pg": 4,
          "pe": 1,
          "pp": 2,
          "gf": 10,
          "gc": 6,
          "dg": 4,
          "pts": 13,
          "zona": "A"
        },
        {
          "pos": 5,
          "equipo": "Geología",
          "pj": 7,
          "pg": 1,
          "pe": 2,
          "pp": 4,
          "gf": 5,
          "gc": 13,
          "dg": -8,
          "pts": 5,
          "zona": "A"
        },
        {
          "pos": 6,
          "equipo": "Agrimensura",
          "pj": 7,
          "pg": 0,
          "pe": 3,
          "pp": 4,
          "gf": 3,
          "gc": 11,
          "dg": -8,
          "pts": 3,
          "zona": "A"
        },
        {
          "pos": 7,
          "equipo": "De Zurda",
          "pj": 7,
          "pg": 1,
          "pe": 1,
          "pp": 5,
          "gf": 4,
          "gc": 14,
          "dg": -10,
          "pts": 3,
          "zona": "A",
          "sancion": -1
        },
        {
          "pos": 8,
          "equipo": "Timba",
          "pj": 7,
          "pg": 2,
          "pe": 1,
          "pp": 4,
          "gf": 5,
          "gc": 9,
          "dg": -4,
          "pts": 2,
          "zona": "A",
          "sancion": -5
        }
      ],
      "zonaB": [
        {
          "pos": 1,
          "equipo": "Al Costado",
          "pj": 7,
          "pg": 5,
          "pe": 1,
          "pp": 1,
          "gf": 12,
          "gc": 4,
          "dg": 8,
          "pts": 16,
          "zona": "B"
        },
        {
          "pos": 2,
          "equipo": "F90",
          "pj": 7,
          "pg": 5,
          "pe": 1,
          "pp": 1,
          "gf": 10,
          "gc": 2,
          "dg": 8,
          "pts": 16,
          "zona": "B"
        },
        {
          "pos": 3,
          "equipo": "Necaxa",
          "pj": 7,
          "pg": 4,
          "pe": 0,
          "pp": 3,
          "gf": 18,
          "gc": 6,
          "dg": 12,
          "pts": 12,
          "zona": "B"
        },
        {
          "pos": 4,
          "equipo": "Dep. La Verna",
          "pj": 7,
          "pg": 4,
          "pe": 1,
          "pp": 2,
          "gf": 10,
          "gc": 5,
          "dg": 5,
          "pts": 11,
          "zona": "B",
          "sancion": -2
        },
        {
          "pos": 5,
          "equipo": "Gol en Contra",
          "pj": 7,
          "pg": 3,
          "pe": 2,
          "pp": 2,
          "gf": 10,
          "gc": 8,
          "dg": 2,
          "pts": 11,
          "zona": "B"
        },
        {
          "pos": 6,
          "equipo": "Tercer Tiempo",
          "pj": 7,
          "pg": 3,
          "pe": 0,
          "pp": 4,
          "gf": 5,
          "gc": 14,
          "dg": -9,
          "pts": 8,
          "zona": "B",
          "sancion": -1
        },
        {
          "pos": 7,
          "equipo": "Inter",
          "pj": 7,
          "pg": 1,
          "pe": 1,
          "pp": 5,
          "gf": 5,
          "gc": 11,
          "dg": -6,
          "pts": 4,
          "zona": "B"
        },
        {
          "pos": 8,
          "equipo": "Newcauce",
          "pj": 7,
          "pg": 0,
          "pe": 0,
          "pp": 7,
          "gf": 2,
          "gc": 22,
          "dg": -20,
          "pts": 0,
          "zona": "B"
        }
      ]
    },
    "goleadores": [
      {
        "pos": 1,
        "jugador": "Del Carril Sanchez Gonzalo",
        "equipo": "Necaxa",
        "goles": 11
      },
      {
        "pos": 2,
        "jugador": "Perisotto Casanelli, Julián",
        "equipo": "Descarte",
        "goles": 9
      },
      {
        "pos": 3,
        "jugador": "Videla Lobos Julio Cesar",
        "equipo": "Necaxa",
        "goles": 6
      },
      {
        "pos": 4,
        "jugador": "Martinez Girons, Agustin Ariel",
        "equipo": "Adove",
        "goles": 5
      },
      {
        "pos": 4,
        "jugador": "Noe, Geronimo",
        "equipo": "Gol en Contra",
        "goles": 5
      },
      {
        "pos": 4,
        "jugador": "Tello Abregu Santiago Jesus",
        "equipo": "Necaxa",
        "goles": 5
      },
      {
        "pos": 7,
        "jugador": "Liñan, Ignacio",
        "equipo": "Al Costado",
        "goles": 4
      },
      {
        "pos": 7,
        "jugador": "Golfieri Juan Ignacio",
        "equipo": "F90",
        "goles": 4
      },
      {
        "pos": 9,
        "jugador": "Espejo Zarate Santiago Exequiel",
        "equipo": "Central",
        "goles": 3
      },
      {
        "pos": 9,
        "jugador": "Flores Mauro Xavier",
        "equipo": "Central",
        "goles": 3
      }
    ]
  },
  "clausura": {
    "enCurso": true,
    "ultimaFechaDisputada": 6,
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "F90",
            "golesL": 0,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Malvinas",
            "visitante": "Geología",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "Agrimensura",
            "golesL": 1,
            "golesV": 4,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Gol en Contra",
            "visitante": "Tercer Tiempo",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Necaxa"
          },
          {
            "zona": "Zona B",
            "local": "Adove",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Descarte",
            "visitante": "Dep. La Verna",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Central",
            "visitante": "Al Costado",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 2,
        "nombre": "Fecha 2",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Geología",
            "golesL": 4,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "F90",
            "visitante": "Agrimensura",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Malvinas",
            "visitante": "Tercer Tiempo",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "Gol en Contra",
            "golesL": 0,
            "golesV": 7,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Inter",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Dep. La Verna"
          },
          {
            "zona": "Zona B",
            "local": "Adove",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Descarte",
            "visitante": "Central",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 3,
        "nombre": "Fecha 3",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Agrimensura",
            "golesL": 4,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Geología",
            "visitante": "Tercer Tiempo",
            "golesL": 1,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "F90",
            "visitante": "Gol en Contra",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Malvinas",
            "visitante": "Timba",
            "golesL": 6,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Dep. La Verna",
            "golesL": 0,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Inter",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Central",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Central"
          },
          {
            "zona": "Zona B",
            "local": "Adove",
            "visitante": "Descarte",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 4,
        "nombre": "Fecha 4",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Tercer Tiempo",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Gol en Contra",
            "golesL": 3,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Geología",
            "visitante": "Timba",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "F90",
            "visitante": "Malvinas",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Al Costado",
            "golesL": 0,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "Central",
            "golesL": 1,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Inter",
            "visitante": "Descarte",
            "golesL": 1,
            "golesV": 4,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Adove",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Adove"
          }
        ]
      },
      {
        "numero": 5,
        "nombre": "Fecha 5",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Gol en Contra",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Tercer Tiempo",
            "visitante": "Timba",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Malvinas",
            "golesL": 0,
            "golesV": 5,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Geología",
            "visitante": "F90",
            "golesL": 1,
            "golesV": 5,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Central",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Descarte",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "Adove",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Inter",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Inter"
          }
        ]
      },
      {
        "numero": 6,
        "nombre": "Fecha 6",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Timba",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": "No se presentó Timba",
            "dia": "Domingo 01/11",
            "hora": "10:20",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona A",
            "local": "Gol en Contra",
            "visitante": "Malvinas",
            "golesL": 2,
            "golesV": 6,
            "estado": "finalizado",
            "nota": "",
            "dia": "Domingo 01/11",
            "hora": "11:40",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona A",
            "local": "Tercer Tiempo",
            "visitante": "F90",
            "golesL": 0,
            "golesV": 5,
            "estado": "finalizado",
            "nota": "",
            "dia": "Domingo 01/11",
            "hora": "13:00",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Geología",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "Sin resultado en el informe de la Liga",
            "dia": "Domingo 01/11",
            "hora": "13:00",
            "cancha": "Cancha de Fútbol"
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Descarte",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 31/10",
            "hora": "08:40",
            "cancha": "Cancha de Fútbol"
          },
          {
            "zona": "Zona B",
            "local": "Central",
            "visitante": "Adove",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": "",
            "dia": "Domingo 01/11",
            "hora": "10:20",
            "cancha": "Cancha de Fútbol"
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Al Costado"
          },
          {
            "zona": "Zona B",
            "local": "Dep. La Verna",
            "visitante": "Inter",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": "",
            "dia": "Domingo 01/11",
            "hora": "11:40",
            "cancha": "Cancha de Fútbol"
          }
        ],
        "dia": "Sábado 31 de octubre y domingo 1 de noviembre"
      },
      {
        "numero": 7,
        "nombre": "Fecha 7",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Malvinas",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 07/11",
            "hora": "12:40",
            "cancha": "Cancha de Fútbol"
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "F90",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": "No se presenta: Timba fue eliminado y se le da por perdido 2-0 (Art. 5 inc. a)"
          },
          {
            "zona": "Zona A",
            "local": "Gol en Contra",
            "visitante": "Geología",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 07/11",
            "hora": "11:20",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona A",
            "local": "Tercer Tiempo",
            "visitante": "Agrimensura",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 07/11",
            "hora": "14:00",
            "cancha": "Cancha de Fútbol"
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Adove",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 07/11",
            "hora": "12:40",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona B",
            "local": "Descarte",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Descarte"
          },
          {
            "zona": "Zona B",
            "local": "Central",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 07/11",
            "hora": "14:00",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Dep. La Verna",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": "",
            "dia": "Sábado 07/11",
            "hora": "11:20",
            "cancha": "Cancha de Fútbol"
          }
        ],
        "dia": "Sábado 7 de noviembre"
      }
    ],
    "tablas": {
      "zonaA": [
        {
          "pos": 1,
          "equipo": "Malvinas",
          "pj": 6,
          "pg": 6,
          "pe": 0,
          "pp": 0,
          "gf": 23,
          "gc": 4,
          "dg": 19,
          "pts": 18,
          "zona": "A"
        },
        {
          "pos": 2,
          "equipo": "De Zurda",
          "pj": 6,
          "pg": 5,
          "pe": 0,
          "pp": 1,
          "gf": 14,
          "gc": 4,
          "dg": 10,
          "pts": 15,
          "zona": "A"
        },
        {
          "pos": 3,
          "equipo": "F90",
          "pj": 6,
          "pg": 4,
          "pe": 0,
          "pp": 2,
          "gf": 18,
          "gc": 6,
          "dg": 12,
          "pts": 12,
          "zona": "A"
        },
        {
          "pos": 4,
          "equipo": "Tercer Tiempo",
          "pj": 6,
          "pg": 3,
          "pe": 0,
          "pp": 3,
          "gf": 6,
          "gc": 10,
          "dg": -4,
          "pts": 9,
          "zona": "A"
        },
        {
          "pos": 5,
          "equipo": "Gol en Contra",
          "pj": 6,
          "pg": 2,
          "pe": 0,
          "pp": 4,
          "gf": 13,
          "gc": 13,
          "dg": 0,
          "pts": 6,
          "zona": "A"
        },
        {
          "pos": 6,
          "equipo": "Agrimensura",
          "pj": 5,
          "pg": 2,
          "pe": 0,
          "pp": 3,
          "gf": 9,
          "gc": 15,
          "dg": -6,
          "pts": 6,
          "zona": "A"
        },
        {
          "pos": 7,
          "equipo": "Geología",
          "pj": 5,
          "pg": 1,
          "pe": 0,
          "pp": 4,
          "gf": 5,
          "gc": 15,
          "dg": -10,
          "pts": 3,
          "zona": "A"
        },
        {
          "pos": 8,
          "equipo": "Timba",
          "pj": 6,
          "pg": 0,
          "pe": 0,
          "pp": 6,
          "gf": 2,
          "gc": 23,
          "dg": -21,
          "pts": 0,
          "zona": "A"
        }
      ],
      "zonaB": [
        {
          "pos": 1,
          "equipo": "Central",
          "pj": 5,
          "pg": 4,
          "pe": 1,
          "pp": 0,
          "gf": 9,
          "gc": 4,
          "dg": 5,
          "pts": 13,
          "zona": "B"
        },
        {
          "pos": 2,
          "equipo": "Al Costado",
          "pj": 5,
          "pg": 3,
          "pe": 1,
          "pp": 1,
          "gf": 7,
          "gc": 2,
          "dg": 5,
          "pts": 10,
          "zona": "B"
        },
        {
          "pos": 3,
          "equipo": "Dep. La Verna",
          "pj": 5,
          "pg": 2,
          "pe": 2,
          "pp": 1,
          "gf": 8,
          "gc": 6,
          "dg": 2,
          "pts": 8,
          "zona": "B"
        },
        {
          "pos": 4,
          "equipo": "Necaxa",
          "pj": 5,
          "pg": 2,
          "pe": 2,
          "pp": 1,
          "gf": 3,
          "gc": 1,
          "dg": 2,
          "pts": 8,
          "zona": "B"
        },
        {
          "pos": 5,
          "equipo": "Descarte",
          "pj": 6,
          "pg": 2,
          "pe": 2,
          "pp": 2,
          "gf": 7,
          "gc": 6,
          "dg": 1,
          "pts": 8,
          "zona": "B"
        },
        {
          "pos": 6,
          "equipo": "Adove",
          "pj": 5,
          "pg": 0,
          "pe": 1,
          "pp": 4,
          "gf": 4,
          "gc": 11,
          "dg": -7,
          "pts": 1,
          "zona": "B"
        },
        {
          "pos": 7,
          "equipo": "Inter",
          "pj": 5,
          "pg": 0,
          "pe": 1,
          "pp": 4,
          "gf": 4,
          "gc": 12,
          "dg": -8,
          "pts": 1,
          "zona": "B"
        }
      ]
    },
    "goleadores": [
      {
        "pos": 1,
        "jugador": "Herrera, Pablo Simón",
        "equipo": "Malvinas",
        "goles": 7
      },
      {
        "pos": 2,
        "jugador": "Recio, Jeremias",
        "equipo": "De Zurda",
        "goles": 5
      },
      {
        "pos": 2,
        "jugador": "Castro Segovia, Ramiro Luciano",
        "equipo": "Malvinas",
        "goles": 5
      },
      {
        "pos": 4,
        "jugador": "Goldfarb, Santiago",
        "equipo": "F90",
        "goles": 4
      },
      {
        "pos": 4,
        "jugador": "Noe, Geronimo",
        "equipo": "Gol en Contra",
        "goles": 4
      },
      {
        "pos": 6,
        "jugador": "Savorani Jofre, Sebastian",
        "equipo": "Central",
        "goles": 3
      },
      {
        "pos": 6,
        "jugador": "Vilanova, Ignacio",
        "equipo": "F90",
        "goles": 3
      },
      {
        "pos": 6,
        "jugador": "Moreira, Tomas Alejo",
        "equipo": "Gol en Contra",
        "goles": 3
      },
      {
        "pos": 6,
        "jugador": "Vega Muñoz, Isaias Gabriel",
        "equipo": "Malvinas",
        "goles": 3
      },
      {
        "pos": 10,
        "jugador": "Martinez Girons, Agustin Ariel",
        "equipo": "Adove",
        "goles": 2
      }
    ]
  },
  "sanciones": [
    {
      "jugador": "Correa Gonzalo",
      "equipo": "Al Costado",
      "sancion": "Hasta 31/12/27",
      "articulo": "Art. 25 inc \"A\" 24 inc. \"A\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Boero Matias",
      "equipo": "De Zurda",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 26 inc. \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Pereira, Exequiel",
      "equipo": "De Zurda",
      "sancion": "Hasta 31/06/2027",
      "articulo": "Art. 26 inc. \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Gonzalez Santiago",
      "equipo": "De Zurda",
      "sancion": "Hasta 31/06/2026",
      "articulo": "Art. 26 inc. \"B\"",
      "motivo": "",
      "estado": "Cumplida"
    },
    {
      "jugador": "Rosales Santiago",
      "equipo": "De Zurda",
      "sancion": "Hasta 31/06/2026",
      "articulo": "Art. 26 inc. \"B\"",
      "motivo": "",
      "estado": "Cumplida"
    },
    {
      "jugador": "Capdevila Santiago",
      "equipo": "Agrimensura",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 24º inc \"A\" y Art. 25º inc \"A\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Andrada Melvin",
      "equipo": "Sin equipo informado",
      "sancion": "Hasta 31/12/2029",
      "articulo": "Art. 25 inc. \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Mantaña Damian",
      "equipo": "Timba",
      "sancion": "Hasta 31/07/2027",
      "articulo": "Art. 25 inc. \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Villavicencio Lautaro",
      "equipo": "Timba",
      "sancion": "Hasta 31/07/2027",
      "articulo": "Art. 25 inc. \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Martin, Juan Pablo",
      "equipo": "Al Costado",
      "sancion": "Suspensión de por vida",
      "articulo": "Art. 22° \"A\" 22° \"B\"",
      "motivo": "",
      "estado": "Definitiva"
    },
    {
      "jugador": "Murua Lucas",
      "equipo": "De Zurda",
      "sancion": "4 Partidos",
      "articulo": "Art. 22 inc. \"A\"",
      "motivo": "",
      "estado": "Cumplió 3 (Resta 1)"
    },
    {
      "jugador": "DT: Perin Fernando",
      "equipo": "De Zurda",
      "sancion": "Suspensión de por vida",
      "articulo": "Tribunal de Disciplina",
      "motivo": "",
      "estado": "Definitiva"
    },
    {
      "jugador": "Guzman Santiago",
      "equipo": "Adove",
      "sancion": "1 Partido",
      "articulo": "Art. 26 inc. \"G\"",
      "motivo": "",
      "estado": "Vigente (0/1)"
    },
    {
      "jugador": "Ruiz Agustin",
      "equipo": "Central",
      "sancion": "1 Partido",
      "articulo": "Art. 26 inc. \"G\"",
      "motivo": "",
      "estado": "Vigente (0/1)"
    },
    {
      "jugador": "Equipo Timba",
      "equipo": "Timba",
      "sancion": "Eliminado del torneo",
      "articulo": "Art. 5 inc. \"A\"",
      "motivo": "Dos no presentaciones",
      "estado": "Definitiva"
    },
    {
      "jugador": "Martinez, Rodrigo",
      "equipo": "Agrimensura",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Faliti Elizondo, Luciano Abel",
      "equipo": "Al Costado",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Aciar Joan Andreu",
      "equipo": "De Zurda",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Escriva Facundo",
      "equipo": "De Zurda",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Fernandez Galdeano, Santiago",
      "equipo": "Dep. La Verna",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Paez Tejada, Juan Bautista",
      "equipo": "F90",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Miranda, Facundo Agustin",
      "equipo": "Gol en Contra",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Menendez, Matias",
      "equipo": "Inter",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Reyna Petrignani Santino",
      "equipo": "Necaxa",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Choque, Isaias",
      "equipo": "Tercer Tiempo",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    }
  ],
  "tablaAnualFuente": "Actualizada tras la Fecha 6 del Clausura con el criterio oficial de la Liga: puntos divididos en partidos programados (en el Clausura, Zona A 7 y Zona B 6)",
  "tablaAnual": [
    {
      "pos": 1,
      "equipo": "Malvinas",
      "ptsAp": 13,
      "bonus": 1,
      "ptsCl": 18,
      "totalAp": 14,
      "coefAp": 2.0,
      "coefCl": 3.0,
      "total": 5.0
    },
    {
      "pos": 2,
      "equipo": "Central",
      "ptsAp": 15,
      "bonus": 0,
      "ptsCl": 13,
      "totalAp": 15,
      "coefAp": 2.14,
      "coefCl": 2.6,
      "total": 4.74
    },
    {
      "pos": 3,
      "equipo": "Al Costado",
      "ptsAp": 16,
      "bonus": 2,
      "ptsCl": 10,
      "totalAp": 18,
      "coefAp": 2.57,
      "coefCl": 2.0,
      "total": 4.57
    },
    {
      "pos": 4,
      "equipo": "F90",
      "ptsAp": 16,
      "bonus": 0,
      "ptsCl": 12,
      "totalAp": 16,
      "coefAp": 2.29,
      "coefCl": 2.0,
      "total": 4.29
    },
    {
      "pos": 5,
      "equipo": "Descarte",
      "ptsAp": 17,
      "bonus": 0,
      "ptsCl": 8,
      "totalAp": 17,
      "coefAp": 2.43,
      "coefCl": 1.33,
      "total": 3.76
    },
    {
      "pos": 6,
      "equipo": "Necaxa",
      "ptsAp": 12,
      "bonus": 3,
      "ptsCl": 8,
      "totalAp": 15,
      "coefAp": 2.14,
      "coefCl": 1.6,
      "total": 3.74
    },
    {
      "pos": 7,
      "equipo": "Dep. La Verna",
      "ptsAp": 11,
      "bonus": 0,
      "ptsCl": 8,
      "totalAp": 11,
      "coefAp": 1.57,
      "coefCl": 1.6,
      "total": 3.17
    },
    {
      "pos": 8,
      "equipo": "De Zurda",
      "ptsAp": 3,
      "bonus": 0,
      "ptsCl": 15,
      "totalAp": 3,
      "coefAp": 0.43,
      "coefCl": 2.5,
      "total": 2.93
    },
    {
      "pos": 9,
      "equipo": "Gol en Contra",
      "ptsAp": 11,
      "bonus": 1,
      "ptsCl": 6,
      "totalAp": 12,
      "coefAp": 1.71,
      "coefCl": 1.0,
      "total": 2.71
    },
    {
      "pos": 10,
      "equipo": "Tercer Tiempo",
      "ptsAp": 8,
      "bonus": 0,
      "ptsCl": 9,
      "totalAp": 8,
      "coefAp": 1.14,
      "coefCl": 1.5,
      "total": 2.64
    },
    {
      "pos": 11,
      "equipo": "Adove",
      "ptsAp": 15,
      "bonus": 0,
      "ptsCl": 1,
      "totalAp": 15,
      "coefAp": 2.14,
      "coefCl": 0.2,
      "total": 2.34
    },
    {
      "pos": 12,
      "equipo": "Agrimensura",
      "ptsAp": 3,
      "bonus": 0,
      "ptsCl": 6,
      "totalAp": 3,
      "coefAp": 0.43,
      "coefCl": 1.0,
      "total": 1.43
    },
    {
      "pos": 13,
      "equipo": "Geología",
      "ptsAp": 5,
      "bonus": 0,
      "ptsCl": 3,
      "totalAp": 5,
      "coefAp": 0.71,
      "coefCl": 0.5,
      "total": 1.21
    },
    {
      "pos": 14,
      "equipo": "Inter",
      "ptsAp": 4,
      "bonus": 0,
      "ptsCl": 1,
      "totalAp": 4,
      "coefAp": 0.57,
      "coefCl": 0.2,
      "total": 0.77
    },
    {
      "pos": 15,
      "equipo": "Timba",
      "ptsAp": 2,
      "bonus": 0,
      "ptsCl": 0,
      "totalAp": 2,
      "coefAp": 0.29,
      "coefCl": 0.0,
      "total": 0.29
    }
  ]
};
  B.liga = Object.assign({}, A.liga, {
    categoria: 'Categoría B', subtitulo: 'Categoría B · Fútbol Universitario',
    torneoActual: 'Torneo Clausura 2026', ultimaFechaDisputada: 6, estado: 'Clausura en disputa · Fecha 6 completada'
  });
  B.reglamentos = A.reglamentos;
  B.reglamentosCompletos = Object.assign({}, A.reglamentosCompletos, { categoriaA: [{"id": "reg-b-art-1", "numero": 1, "articulo": "Art. 1°", "titulo": "De la Forma de Disputa", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 1º- En la presente temporada la forma de disputa se informará oportunamente en la\nreunión de delegados."}, {"id": "reg-b-art-2", "numero": 2, "articulo": "Art. 2°", "titulo": "Integración de Planteles (Apertura y Clausura) e Incorporaciones", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 2º- a) Los equipos para el Torneo Apertura de esta categoría deberán estar integrados por un\nmínimo de dieciséis (16) jugadores y un máximo de veinticinco (25). De dicho total, al menos diez\n(10) deberán haber sido clasificados en esta misma categoría, en el mismo equipo, durante el año\n2025, según los registros de la D.G.D.R.\nb) Los equipos para el Torneo Clausura de esta categoría deberán estar integrados por un mínimo\nde dieciséis (16) jugadores y un máximo de veinticinco (25). De dicho total, al menos dieciséis\n(16) deberán haber sido clasificados en esta misma categoría, en el mismo equipo, durante el\nTorneo Clausura, según los registros de la D.G.D.R.\nAl finalizar la Primera Fase de ambos Torneos, se permitirá la incorporación de hasta cuatro (4)\njugadores, los cuales deben ser nuevos, o provenientes de la categoría “C” siempre que\npertenezcan a equipos que hayan quedado eliminados por puntos, es decir, aquellos que hayan\nquedado fuera de competencia por razones deportivas, sin aplicación del Art. 12º del Reglamento\nGeneral ni por otras causas ajenas a la competencia."}, {"id": "reg-b-art-3", "numero": 3, "articulo": "Art. 3°", "titulo": "Sustituciones", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 3º- En cualquier momento del partido se permitirá la sustitución de jugadores, hasta un máximo\nde 5 (cinco) por equipo. El jugador reemplazado no podrá reintegrarse al juego.\nPara efectuar un cambio, el jugador deberá presentarse ante la mesa de control, donde se verificará\nsu identidad, se registrará su ingreso mediante la firma en la planilla del encuentro y se notificará\nal árbitro.\nAsimismo, un equipo podrá realizar hasta 3 (tres) sustituciones durante el entretiempo, las cuales\nno serán contabilizadas dentro del máximo de 5 (cinco) cambios permitidos durante el transcurso\ndel partido."}, {"id": "reg-b-art-4", "numero": 4, "articulo": "Art. 4°", "titulo": "Eliminación por Doble Pérdida de Puntos", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 4º- Cuando un equipo haya perdido los puntos en 2 (dos) ocasiones por aplicación del Art. 12º\ndel Reglamento General, quedará automáticamente eliminado de la competencia. No pudiendo\nparticipar en ninguna de las categorías de la Liga Universitaria durante el presente año."}, {"id": "reg-b-art-5", "numero": 5, "articulo": "Art. 5°", "titulo": "Partidos y Resultados de Equipos Eliminados (Regla del 50%)", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 5º- En aquellos casos que un equipo quedará eliminado del torneo, se procede de la siguiente\nmanera:\n a) Si el mencionado equipo queda eliminado habiendo disputado, el 50 % de los partidos\n programados para el torneo, se respetarán los resultados que este haya obtenido en los\n encuentros disputados hasta ese momento y se le dará por perdido con el Score 2 – 0 con\n los equipos que aún no haya jugado.\n b) Si el equipo fuese eliminado habiendo disputado, menos del 50 % de los partidos\n programados en el Torneo, no se tendrán en cuenta ninguno de los resultados obtenidos\n\f por este y se continuará teniendo en cuenta goles, amarillas, expulsados, sancionados y\n todo lo ocurrido en los partidos que este hubiere participado y con los equipos con que este\n haya jugado."}, {"id": "reg-b-art-6", "numero": 6, "articulo": "Art. 6°", "titulo": "Duración de los Partidos y Sistema de Puntuación", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 6º- Los partidos se disputarán en 2 (dos) tiempos de 35 (treinta y cinco) minutos cada uno, con\nun descanso de 10 (diez) minutos entre uno y otro. El sistema de puntuación será el siguiente:\n a) Partido ganado = 3 (tres) Puntos.\n b) Partido empatado = 1 (uno) Punto.\n c) Partido perdido = 0 (cero) Punto."}, {"id": "reg-b-art-7", "numero": 7, "articulo": "Art. 7°", "titulo": "Suspensiones por Acumulación de Amarillas", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 7º- Se implementará sanciones a los jugadores por acumulación de tarjetas amarillas de\nacuerdo al siguiente detalle:\n a) 4 amarillas = 1 (uno) Partido de suspensión.\n b) 7 amarillas = 2 (dos) Partidos de suspensión\n c) 9 amarillas = 3 (tres) Partidos de suspensión.\n d) 11 amarillas = 4 (cuatro) Partidos de suspensión.\nLas amarillas no se contabilizarán en semifinales y finales, si la forma de disputa así lo establece,\ncaso contrario serán acumulables en todo el torneo."}, {"id": "reg-b-art-8", "numero": 8, "articulo": "Art. 8°", "titulo": "Criterios de Desempate en Fases Clasificatorias y Tabla Anual", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 8º- Los equipos que hayan tenido una (1) No presentación no tendrá derecho a participar en\nningún tipo de desempate en las posiciones finales en las fases clasificatorias y tabla anual.\nEn caso de producirse un empate en las posiciones finales en la fase clasificatoria y/o tabla anual,\nentre 2 (dos) o más equipos, se procederá de la siguiente manera:\n 1. Por la mayor cantidad de puntos obtenidos por los empatados en los partidos jugados\n entre sí en la fase clasificatoria.\n 2. Por la diferencia de los goles a favor y en contra de todos los partidos disputados en la\n fase clasificatoria.\n 3. Por la mayor cantidad de goles a favor logrados en todos los partidos disputados en la\n fase clasificatoria.\n 4. Por Fair Play.\n 5. Por sorteo entre los equipos empatados.\nEn 8vos. 4tos. Semis y Finales (en caso de que el sistema de juego lo permita), en caso de\nempate se definirá por tiros desde el punto penal (5 tiros por equipo, en caso de proseguir con la\nigualdad, se ejecutara un disparo por bando, hasta definir el ganador)."}, {"id": "reg-b-art-9", "numero": 9, "articulo": "Art. 9°", "titulo": "Sistema de Descenso a la Categoría C", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 9º- Para la presente temporada se implementará el siguiente sistema de descenso:\nLos 2 (dos) equipos que se ubiquen en el último y penúltimo puesto de la Tabla Anual\ndescenderán directamente a la categoría “C”.\nEl equipo que se ubique en el antepenúltimo jugará un partido con el 3er equipo clasificado en la\nTabla Anual de la Categoría “C” y el equipo que este en el ante antepenúltimo lugar disputará un\npartido con el 4to equipo clasificado en la Tabla Anual de la Categoría “C”, partidos que se\ndisputaran en dos tiempos de 35 (treinta y cinco) minutos cada uno, y en caso de producirse un\nempate se dará por ganador al equipo perteneciente a la categoría “B”.\nEn caso de haber un equipo eliminado habrá un solo descenso directo, y se disputaran dos\npartidos para mantener la categoría.\nEn caso de haber dos equipos eliminados, no habrá descensos directos, y se disputaran los dos\npartidos para mantener la categoría.\nEn caso de haber tres equipos eliminados, no habrá descensos directos, y se disputará un solo\npartido para mantener la categoría."}, {"id": "reg-b-art-10", "numero": 10, "articulo": "Art. 10°", "titulo": "Inasistencias y Tardanzas de Delegados", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 10º- Las sanciones por inasistencia del delegado a las reuniones, que se realizan los días\n MIERCOLES a las 13:00 horas o en la fecha que determine la Comisión Organizadora, serán\n consideradas en todas las posiciones finales de cada fase del torneo, en la fase campeonato y\n copa de plata (play-off) se tendrán en cuenta para la Tabla Anual.\n Se entenderá por inasistencia la falta a una reunión. Al registrarse la tercera (3.ª) ausencia de\n un delegado y/o integrante del equipo, se descontará un (1) punto al equipo que represente. A\n partir de ese momento, se aplicará el descuento de un (1) punto por cada nueva inasistencia.\n En caso de que un delegado y/o integrante del equipo llegue tarde a una reunión con un retraso\n mayor a quince (15) minutos desde su inicio y hasta su finalización —entendiéndose esta como\n el momento en que se retira el representante de la D.G.D.R. de la U.N.S.J.—, se le computará\n una tardanza. Cada tres (3) tardanzas implicarán una (1) inasistencia al equipo\n correspondiente.\n Asimismo, toda la información comunicada en el grupo de WhatsApp de la Liga de Fútbol\n Categoría “B” temporada 2026, emitida desde los números oficiales de la DGDR (2646629521\n y 2645834768), tendrá carácter oficial."}, {"id": "reg-b-art-11", "numero": 11, "articulo": "Art. 11°", "titulo": "Inscripción, Pagos, Seguro y Ficha Médica", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 11º- La forma de pago para el presente Campeonato será de la siguiente manera:\n a) Cada equipo deberá abonar a modo de inscripción para la 1ra. Fase: $130.000 (pesos\n ciento treinta mil) en efectivo, completándose de la siguiente manera: 1º cuota\n $65.000(pesos sesenta y cinco mil) hasta el día hábil anterior a la reunión antes de\n disputarse la tercera fecha, presentando dicho comprobante en la Reunión donde se sortea\n la Tercera Fecha. 2º cuota $65.000(pesos sesenta y cinco mil) hasta el día hábil anterior a\n\f la reunión antes de disputarse la 6ta. Fecha, presentando dicho comprobante en la Reunión\n donde se sortea la Sexta Fecha.\n b) De no cumplir con el pago requerido en tiempo y forma se procederá a sancionar con el\n descuento de puntos a los equipos que no cumplan con el mismo, de acuerdo al siguiente\n detalle (dichos puntos serán tenidos en cuenta para definir posiciones finales y para el\n descenso): Por cada falta a un pago (según los cronogramas anteriores) se descontará 1\n (uno) punto, teniendo como última fecha de pago el día de la reunión anterior a disputarse\n la 6ta. fecha de la primera fase.; Los pagos deberán ser hechos en tiempo y forma, y los\n montos a pagar en cada fecha son acumulativos. De no haber cumplido con la totalidad del\n pago, hasta antes de la 7 ma. fecha del torneo, el equipo quedará eliminado descendiendo\n a la categoría más baja del torneo, y los jugadores en el próximo año no podrán jugar en\n ningún equipo de la Liga Superior Universitaria de Futbol.\n c) Se implementará un Seguro, el cual deberá ser abonado por cada equipo. El jugador que\n no esté asegurado, no podrá jugar, sin excepción. Dicho pago del seguro es obligatorio\n para confirmar la lista de Buena Fe, por lo tanto, el mismo debe ser abonado hasta el día\n anterior a la reunión donde se sortea de la tercera fecha o cuando la organización lo\n disponga. Pudiendo agregar jugadores en los periodos de incorporación si los hubiera.\n d) Se implementará una ficha médica, la cual se realizará en el COMPLEJO DEPORTIVO EL\n PALOMAR, NO SE RECIBIRA OTRA QUE NO SEA LA REALIZADA EN EL COMPLEJO,\n para poder disputar la fecha, solo se tomaran LAS FICHAS MEDICAS APTAS\n REALIZADAS EL DIA ANTERIOR A LA REUNION o cuando la organización lo disponga.\n SIN EXCEPCION."}, {"id": "reg-b-art-12", "numero": 12, "articulo": "Art. 12°", "titulo": "Cantidad de Jugadores y Capitán", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 12º- Cada equipo podrá constituirse con jugadores federados o no, totalizando un mínimo de\n16 (dieciséis) y un máximo de 25 (veinticinco) jugadores, uno de los cuales será designado\ncapitán antes de iniciar cada encuentro. El equipo que presentase la planilla con un número de\njugadores inferior a 25 (veinticinco) podrá completar la lista hasta la reunión donde se sortea la\ntercera fecha de la fase clasificatoria."}, {"id": "reg-b-art-13", "numero": 13, "articulo": "Art. 13°", "titulo": "Indumentaria", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 13º- Todos los integrantes de un equipo vestirán una indumentaria uniforme compuesta de\ncamiseta (con número), no se permitirá jugar con pantalones largos a los jugadores de campo, sí\nal arquero, o en los casos en que el árbitro lo autorice."}, {"id": "reg-b-art-14", "numero": 14, "articulo": "Art. 14°", "titulo": "Autoridades de la Competencia", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 14º- La Comisión Organizadora designará las autoridades de la competencia, quienes serán\nresponsables de la interpretación y aplicación del presente Reglamento."}, {"id": "reg-b-art-15", "numero": 15, "articulo": "Art. 15°", "titulo": "Temas no Previstos", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 15º- Cualquier tema no previsto en el presente Reglamento, será resuelto por la Comisión\nOrganizadora."}, {"id": "reg-b-art-16", "numero": 16, "articulo": "Art. 16°", "titulo": "Aceptación del Reglamento", "categoria": "categoriaA", "seccion": "Categoría B 2026", "texto": "Art. 16º- La participación en este Campeonato implica la aceptación total de este Reglamento."}], formaDisputa: [{"id": "disp-b-estructura", "numero": 1, "articulo": "Estructura", "titulo": "Composición de la Temporada 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "La temporada 2026 de la Liga Universitaria de Fútbol – Categoría B está compuesta por dos torneos oficiales, el Torneo Apertura y el Torneo Clausura, además de una Tabla Anual y una Superfinal Anual para determinar el campeón absoluto de la temporada. Participan quince (15) equipos."}, {"id": "disp-b-clasificatoria", "numero": 2, "articulo": "Clausura", "titulo": "Fase Clasificatoria", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Los quince equipos se distribuyen por sorteo en dos zonas que juegan todos contra todos:\n• Zona A: 8 equipos.\n• Zona B: 7 equipos (un equipo libre por fecha).\nAl finalizar se arma una tabla de posiciones por zona."}, {"id": "disp-b-campeonato", "numero": 3, "articulo": "Clausura", "titulo": "Fase Campeonato", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Clasifican del 1° al 4° de cada zona, por eliminación directa.\nCuartos de final:\n• 1° Zona A vs 4° Zona B\n• 2° Zona A vs 3° Zona B\n• 1° Zona B vs 4° Zona A\n• 2° Zona B vs 3° Zona A\nLos ganadores juegan Semifinales según el cuadro que establece la organización, y los vencedores la Final del torneo."}, {"id": "disp-b-plata", "numero": 4, "articulo": "Clausura", "titulo": "Copa de Plata", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Participan del 5° al 8° de la Zona A y del 5° al 7° de la Zona B. El mejor 5° de ambas zonas pasa directo a Semifinales.\nCuartos de final:\n• 5° Zona A o B vs 8° Zona A\n• 6° Zona B vs 7° Zona A\n• 6° Zona A vs 7° Zona B\nLuego se juegan Semifinales y Final para definir el Campeón de la Copa de Plata."}, {"id": "disp-b-anual", "numero": 5, "articulo": "Tabla Anual", "titulo": "Tabla Anual 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Suma solo los puntos de la fase clasificatoria del Apertura y del Clausura, usando un coeficiente de rendimiento: puntos obtenidos dividido la cantidad de partidos programados/jugados. No cuentan los partidos de Fase Campeonato ni de Copa de Plata.\nBonus al terminar cada torneo:\n• Campeón Fase Campeonato: +3\n• Subcampeón: +2\n• Tercer puesto: +1\n• Campeón Copa de Plata: +1"}, {"id": "disp-b-superfinal", "numero": 6, "articulo": "Superfinal", "titulo": "Superfinal Anual", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "El Campeón Anual surge de una Superfinal entre el Campeón del Apertura y el Campeón del Clausura. Si ninguno de los dos es el primero de la Tabla Anual, juegan entre ellos una prefinal y el ganador juega la Final con el primero de la Tabla Anual. Si el mismo equipo gana Apertura y Clausura y además es primero en la Tabla Anual, es campeón anual directamente."}] });
  B.copaChallenger = A.copaChallenger;
  window.LIGA_DATA_B = B;
})();
