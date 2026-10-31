/**
 * CATEGORÍA B 2026 — datos cargados desde los informes de la Liga
 * (Apertura: fechas 1 a 7 + fase final; Clausura: fechas 1 a 5; Tabla Anual al 30/10/2026).
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
      "escudo": "public/escudos/adove.png",
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
      "escudo": "public/escudos/agrimensura.png",
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
      "escudo": "public/escudos/al_costado.png?v=3",
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
      "escudo": "public/escudos/central.png?v=2",
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
      "escudo": "public/escudos/de_zurda.png",
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
      "escudo": "public/escudos/dep_la_verna.png?v=2",
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
      "escudo": "public/escudos/descarte.png?v=3",
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
      "escudo": "public/escudos/f90.png",
      "zonaApertura": "B",
      "zonaClausura": "A",
      "color": "#22814D",
      "instagram": "https://www.instagram.com/clubuniversitariof90/",
      "instagramHandle": "@clubuniversitariof90"
    },
    {
      "id": "geologia",
      "nombre": "Geología",
      "slug": "geologia",
      "escudo": "public/escudos/geologia.png",
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
      "escudo": "public/escudos/gol_en_contra.png?v=2",
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
      "escudo": "public/escudos/inter.png",
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
      "escudo": "public/escudos/malvinas.png",
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
      "escudo": "public/escudos/necaxa.png?v=2",
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
      "escudo": "public/escudos/tercer_tiempo.png",
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
      "escudo": "public/escudos/timba.png?v=2",
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
    "ultimaFechaDisputada": 5,
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
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona A",
            "local": "De Zurda",
            "visitante": "Timba",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Gol en Contra",
            "visitante": "Malvinas",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Tercer Tiempo",
            "visitante": "F90",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Agrimensura",
            "visitante": "Geología",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Descarte",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Central",
            "visitante": "Adove",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
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
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          }
        ]
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
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Timba",
            "visitante": "F90",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Gol en Contra",
            "visitante": "Geología",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona A",
            "local": "Tercer Tiempo",
            "visitante": "Agrimensura",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Necaxa",
            "visitante": "Adove",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
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
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona B",
            "local": "Al Costado",
            "visitante": "Dep. La Verna",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          }
        ]
      }
    ],
    "tablas": {
      "zonaA": [
        {
          "pos": 1,
          "equipo": "Malvinas",
          "pj": 5,
          "pg": 5,
          "pe": 0,
          "pp": 0,
          "gf": 17,
          "gc": 2,
          "dg": 15,
          "pts": 15,
          "zona": "A"
        },
        {
          "pos": 2,
          "equipo": "De Zurda",
          "pj": 5,
          "pg": 4,
          "pe": 0,
          "pp": 1,
          "gf": 12,
          "gc": 4,
          "dg": 8,
          "pts": 12,
          "zona": "A"
        },
        {
          "pos": 3,
          "equipo": "F90",
          "pj": 5,
          "pg": 3,
          "pe": 0,
          "pp": 2,
          "gf": 13,
          "gc": 6,
          "dg": 7,
          "pts": 9,
          "zona": "A"
        },
        {
          "pos": 4,
          "equipo": "Tercer Tiempo",
          "pj": 5,
          "pg": 3,
          "pe": 0,
          "pp": 2,
          "gf": 6,
          "gc": 5,
          "dg": 1,
          "pts": 9,
          "zona": "A"
        },
        {
          "pos": 5,
          "equipo": "Gol en Contra",
          "pj": 5,
          "pg": 2,
          "pe": 0,
          "pp": 3,
          "gf": 11,
          "gc": 7,
          "dg": 4,
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
          "pj": 5,
          "pg": 0,
          "pe": 0,
          "pp": 5,
          "gf": 2,
          "gc": 21,
          "dg": -19,
          "pts": 0,
          "zona": "A"
        }
      ],
      "zonaB": [
        {
          "pos": 1,
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
          "pos": 2,
          "equipo": "Central",
          "pj": 4,
          "pg": 3,
          "pe": 1,
          "pp": 0,
          "gf": 7,
          "gc": 3,
          "dg": 4,
          "pts": 10,
          "zona": "B"
        },
        {
          "pos": 3,
          "equipo": "Descarte",
          "pj": 5,
          "pg": 2,
          "pe": 2,
          "pp": 1,
          "gf": 7,
          "gc": 4,
          "dg": 3,
          "pts": 8,
          "zona": "B"
        },
        {
          "pos": 4,
          "equipo": "Dep. La Verna",
          "pj": 4,
          "pg": 1,
          "pe": 2,
          "pp": 1,
          "gf": 5,
          "gc": 5,
          "dg": 0,
          "pts": 5,
          "zona": "B"
        },
        {
          "pos": 5,
          "equipo": "Necaxa",
          "pj": 4,
          "pg": 1,
          "pe": 2,
          "pp": 1,
          "gf": 1,
          "gc": 1,
          "dg": 0,
          "pts": 5,
          "zona": "B"
        },
        {
          "pos": 6,
          "equipo": "Adove",
          "pj": 4,
          "pg": 0,
          "pe": 1,
          "pp": 3,
          "gf": 3,
          "gc": 9,
          "dg": -6,
          "pts": 1,
          "zona": "B"
        },
        {
          "pos": 7,
          "equipo": "Inter",
          "pj": 4,
          "pg": 0,
          "pe": 1,
          "pp": 3,
          "gf": 3,
          "gc": 9,
          "dg": -6,
          "pts": 1,
          "zona": "B"
        }
      ]
    },
    "goleadores": [
      {
        "pos": 1,
        "jugador": "Recio, Jeremias",
        "equipo": "De Zurda",
        "goles": 5
      },
      {
        "pos": 2,
        "jugador": "Castro Segovia, Ramiro Luciano",
        "equipo": "Malvinas",
        "goles": 4
      },
      {
        "pos": 2,
        "jugador": "Herrera, Pablo Simón",
        "equipo": "Malvinas",
        "goles": 4
      },
      {
        "pos": 4,
        "jugador": "Savorani Jofre, Sebastian",
        "equipo": "Central",
        "goles": 3
      },
      {
        "pos": 4,
        "jugador": "Moreira, Tomas Alejo",
        "equipo": "Gol en Contra",
        "goles": 3
      },
      {
        "pos": 4,
        "jugador": "Noe, Geronimo",
        "equipo": "Gol en Contra",
        "goles": 3
      },
      {
        "pos": 7,
        "jugador": "Martinez, Agustin Ariel",
        "equipo": "Adove",
        "goles": 2
      },
      {
        "pos": 7,
        "jugador": "Tejada Cassab, Alejo",
        "equipo": "Agrimensura",
        "goles": 2
      },
      {
        "pos": 7,
        "jugador": "Quiroga, Juan Ignacio",
        "equipo": "Al Costado",
        "goles": 2
      },
      {
        "pos": 7,
        "jugador": "Rueda, Mariano Miguel",
        "equipo": "Al Costado",
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
      "estado": "Cumplió 2 (Resta 2)"
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
      "jugador": "Gonzalez Iñaki",
      "equipo": "Necaxa",
      "sancion": "1 Partido",
      "articulo": "Art. 26 inc. \"C\"",
      "motivo": "",
      "estado": "Vigente (0/1)"
    },
    {
      "jugador": "Guzman, Santiago Facundo",
      "equipo": "Adove",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
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
      "jugador": "Ruiz Luis Agustin",
      "equipo": "Central",
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
      "jugador": "Menendez, Matias",
      "equipo": "Inter",
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
  "tablaAnualFuente": "Tabla Anual enviada por la Liga al 30/10/2026",
  "tablaAnual": [
    {
      "pos": 1,
      "equipo": "Malvinas",
      "ptsAp": 13,
      "bonus": 1,
      "ptsCl": 15,
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
      "ptsCl": 10,
      "totalAp": 15,
      "coefAp": 2.14,
      "coefCl": 2.5,
      "total": 4.64
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
      "ptsCl": 9,
      "totalAp": 16,
      "coefAp": 2.29,
      "coefCl": 1.8,
      "total": 4.09
    },
    {
      "pos": 5,
      "equipo": "Descarte",
      "ptsAp": 17,
      "bonus": 0,
      "ptsCl": 8,
      "totalAp": 17,
      "coefAp": 2.43,
      "coefCl": 1.6,
      "total": 4.03
    },
    {
      "pos": 6,
      "equipo": "Necaxa",
      "ptsAp": 12,
      "bonus": 3,
      "ptsCl": 5,
      "totalAp": 15,
      "coefAp": 2.14,
      "coefCl": 1.25,
      "total": 3.39
    },
    {
      "pos": 7,
      "equipo": "Tercer Tiempo",
      "ptsAp": 8,
      "bonus": 0,
      "ptsCl": 9,
      "totalAp": 8,
      "coefAp": 1.14,
      "coefCl": 1.8,
      "total": 2.94
    },
    {
      "pos": 8,
      "equipo": "Gol en Contra",
      "ptsAp": 11,
      "bonus": 1,
      "ptsCl": 6,
      "totalAp": 12,
      "coefAp": 1.71,
      "coefCl": 1.2,
      "total": 2.91
    },
    {
      "pos": 9,
      "equipo": "De Zurda",
      "ptsAp": 3,
      "bonus": 0,
      "ptsCl": 12,
      "totalAp": 3,
      "coefAp": 0.43,
      "coefCl": 2.4,
      "total": 2.83
    },
    {
      "pos": 10,
      "equipo": "Dep. La Verna",
      "ptsAp": 11,
      "bonus": 0,
      "ptsCl": 5,
      "totalAp": 11,
      "coefAp": 1.57,
      "coefCl": 1.25,
      "total": 2.82
    },
    {
      "pos": 11,
      "equipo": "Adove",
      "ptsAp": 15,
      "bonus": 0,
      "ptsCl": 1,
      "totalAp": 15,
      "coefAp": 2.14,
      "coefCl": 0.25,
      "total": 2.39
    },
    {
      "pos": 12,
      "equipo": "Agrimensura",
      "ptsAp": 3,
      "bonus": 0,
      "ptsCl": 6,
      "totalAp": 3,
      "coefAp": 0.43,
      "coefCl": 1.2,
      "total": 1.63
    },
    {
      "pos": 13,
      "equipo": "Geología",
      "ptsAp": 5,
      "bonus": 0,
      "ptsCl": 3,
      "totalAp": 5,
      "coefAp": 0.71,
      "coefCl": 0.6,
      "total": 1.31
    },
    {
      "pos": 14,
      "equipo": "Inter",
      "ptsAp": 4,
      "bonus": 0,
      "ptsCl": 1,
      "totalAp": 4,
      "coefAp": 0.57,
      "coefCl": 0.25,
      "total": 0.82
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
    torneoActual: 'Torneo Clausura 2026', ultimaFechaDisputada: 5, estado: 'Clausura en disputa · Fecha 5 completada'
  });
  B.reglamentos = A.reglamentos;
  B.reglamentosCompletos = Object.assign({}, A.reglamentosCompletos, { formaDisputa: [{"id": "disp-b-estructura", "numero": 1, "articulo": "Estructura", "titulo": "Composición de la Temporada 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "La temporada 2026 de la Liga Universitaria de Fútbol – Categoría B está compuesta por dos torneos oficiales, el Torneo Apertura y el Torneo Clausura, además de una Tabla Anual y una Superfinal Anual para determinar el campeón absoluto de la temporada. Participan quince (15) equipos."}, {"id": "disp-b-clasificatoria", "numero": 2, "articulo": "Clausura", "titulo": "Fase Clasificatoria", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Los quince equipos se distribuyen por sorteo en dos zonas que juegan todos contra todos:\n• Zona A: 8 equipos.\n• Zona B: 7 equipos (un equipo libre por fecha).\nAl finalizar se arma una tabla de posiciones por zona."}, {"id": "disp-b-campeonato", "numero": 3, "articulo": "Clausura", "titulo": "Fase Campeonato", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Clasifican del 1° al 4° de cada zona, por eliminación directa.\nCuartos de final:\n• 1° Zona A vs 4° Zona B\n• 2° Zona A vs 3° Zona B\n• 1° Zona B vs 4° Zona A\n• 2° Zona B vs 3° Zona A\nLos ganadores juegan Semifinales según el cuadro que establece la organización, y los vencedores la Final del torneo."}, {"id": "disp-b-plata", "numero": 4, "articulo": "Clausura", "titulo": "Copa de Plata", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Participan del 5° al 8° de la Zona A y del 5° al 7° de la Zona B. El mejor 5° de ambas zonas pasa directo a Semifinales.\nCuartos de final:\n• 5° Zona A o B vs 8° Zona A\n• 6° Zona B vs 7° Zona A\n• 6° Zona A vs 7° Zona B\nLuego se juegan Semifinales y Final para definir el Campeón de la Copa de Plata."}, {"id": "disp-b-anual", "numero": 5, "articulo": "Tabla Anual", "titulo": "Tabla Anual 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "Suma solo los puntos de la fase clasificatoria del Apertura y del Clausura, usando un coeficiente de rendimiento: puntos obtenidos dividido la cantidad de partidos programados/jugados. No cuentan los partidos de Fase Campeonato ni de Copa de Plata.\nBonus al terminar cada torneo:\n• Campeón Fase Campeonato: +3\n• Subcampeón: +2\n• Tercer puesto: +1\n• Campeón Copa de Plata: +1"}, {"id": "disp-b-superfinal", "numero": 6, "articulo": "Superfinal", "titulo": "Superfinal Anual", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría B", "texto": "El Campeón Anual surge de una Superfinal entre el Campeón del Apertura y el Campeón del Clausura. Si ninguno de los dos es el primero de la Tabla Anual, juegan entre ellos una prefinal y el ganador juega la Final con el primero de la Tabla Anual. Si el mismo equipo gana Apertura y Clausura y además es primero en la Tabla Anual, es campeón anual directamente."}] });
  B.copaChallenger = A.copaChallenger;
  window.LIGA_DATA_B = B;
})();
