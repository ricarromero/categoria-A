/**
 * LIGA FEMENINA 2026 — versión de prueba
 * Apertura: informes de las 10 fechas + posiciones finales de la fase campeonato.
 * Clausura: fixture, programa y resultados cargados sin informe oficial (tabla provisoria).
 */
(function () {
  'use strict';
  const A = window.LIGA_DATA;
  if (!A) return;
  const F = {
  "formato": {
    "zonaUnica": true,
    "clausura": {
      "campeonato": 4,
      "semis": [
        [
          1,
          4
        ],
        [
          2,
          3
        ]
      ],
      "plata5": 5,
      "plata": [
        [
          6,
          7
        ]
      ],
      "texto": "Clasifican del 1° al 4° a la Fase Campeonato (semifinales 1° vs 4° y 2° vs 3°) y del 5° al 7° a la Copa de Plata."
    },
    "apertura": {
      "campeonato": 4,
      "texto": "Clasificaron del 1° al 4° a la Fase Campeonato (semifinales 1° vs 4° y 2° vs 3°)."
    }
  },
  "equipos": [
    {
      "id": "f_constructoras",
      "nombre": "Constructoras",
      "slug": "f_constructoras",
      "escudo": "",
      "zonaApertura": null,
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "https://www.instagram.com/constructoras.fc/",
      "instagramHandle": "@constructoras.fc"
    },
    {
      "id": "f_deportes",
      "nombre": "Deportes",
      "slug": "f_deportes",
      "escudo": "",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "",
      "instagramHandle": ""
    },
    {
      "id": "f_deportivo_var",
      "nombre": "Deportivo VAR",
      "slug": "f_deportivo_var",
      "escudo": "",
      "zonaApertura": null,
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "",
      "instagramHandle": ""
    },
    {
      "id": "f_galana",
      "nombre": "Galana",
      "slug": "f_galana",
      "escudo": "",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "https://www.instagram.com/galana.fc/",
      "instagramHandle": "@galana.fc"
    },
    {
      "id": "f_gladiadoras",
      "nombre": "Gladiadoras",
      "slug": "f_gladiadoras",
      "escudo": "",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "",
      "instagramHandle": ""
    },
    {
      "id": "f_inter",
      "nombre": "Inter",
      "slug": "f_inter",
      "escudo": "",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "https://www.instagram.com/interfc.fem/",
      "instagramHandle": "@interfc.fem"
    },
    {
      "id": "f_tercer_tiempo",
      "nombre": "Tercer Tiempo",
      "slug": "f_tercer_tiempo",
      "escudo": "",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#C2268F",
      "instagram": "https://www.instagram.com/tercer_tiempo.sj/",
      "instagramHandle": "@tercer_tiempo.sj"
    },
    {
      "id": "f_dep_capra",
      "nombre": "Dep. Capra",
      "slug": "f_dep_capra",
      "escudo": "",
      "zonaApertura": "A",
      "zonaClausura": null,
      "color": "#C2268F",
      "instagram": "",
      "instagramHandle": ""
    }
  ],
  "apertura": {
    "campeon": "Tercer Tiempo",
    "subcampeon": "Galana",
    "tercero": "Inter",
    "cuarto": "Dep. Capra",
    "campeonPlata": null,
    "subcampeonPlata": null,
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Inter",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Dep. Capra",
            "visitante": "Galana",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Deportes",
            "golesL": 3,
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
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Gladiadoras",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Tercer Tiempo",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Dep. Capra",
            "golesL": 1,
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
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Dep. Capra",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Inter",
            "golesL": 4,
            "golesV": 5,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Galana",
            "golesL": 0,
            "golesV": 9,
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
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Gladiadoras",
            "golesL": 11,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Deportes",
            "golesL": 5,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Dep. Capra",
            "visitante": "Tercer Tiempo",
            "golesL": 2,
            "golesV": 2,
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
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Tercer Tiempo",
            "golesL": 0,
            "golesV": 6,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Dep. Capra",
            "golesL": 0,
            "golesV": 6,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Inter",
            "golesL": 1,
            "golesV": 1,
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
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Gladiadoras",
            "golesL": 5,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Dep. Capra",
            "golesL": 4,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Tercer Tiempo",
            "golesL": 2,
            "golesV": 4,
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
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Deportes",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Galana",
            "golesL": 0,
            "golesV": 5,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Dep. Capra",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 8,
        "nombre": "Fecha 8",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Dep. Capra",
            "visitante": "Gladiadoras",
            "golesL": 3,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Tercer Tiempo",
            "golesL": 3,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Deportes",
            "golesL": 10,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 9,
        "nombre": "Fecha 9",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Galana",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Inter",
            "golesL": 4,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Dep. Capra",
            "golesL": 2,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      },
      {
        "numero": 10,
        "nombre": "Fecha 10",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Gladiadoras",
            "golesL": 2,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Dep. Capra",
            "visitante": "Deportes",
            "golesL": 2,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Galana",
            "golesL": 1,
            "golesV": 4,
            "estado": "finalizado",
            "nota": ""
          }
        ]
      }
    ],
    "playoffs": {
      "faseCampeonato": {
        "cuartos": [],
        "semifinales": [
          {
            "codigo": "SF1",
            "local": "Galana",
            "visitante": "Inter",
            "golesL": 2,
            "golesV": 0,
            "ganador": "Galana",
            "nota": ""
          },
          {
            "codigo": "SF2",
            "local": "Dep. Capra",
            "visitante": "Tercer Tiempo",
            "golesL": 1,
            "golesV": 4,
            "ganador": "Tercer Tiempo",
            "nota": ""
          }
        ],
        "tercerPuesto": {
          "codigo": "3P",
          "local": "Inter",
          "visitante": "Dep. Capra",
          "golesL": null,
          "golesV": null,
          "ganador": "Inter",
          "nota": "Resultado no informado (Inter 3°)"
        },
        "final": {
          "codigo": "FINAL",
          "local": "Tercer Tiempo",
          "visitante": "Galana",
          "golesL": 2,
          "golesV": 1,
          "ganador": "Tercer Tiempo",
          "nota": "¡Tercer Tiempo Campeón Apertura 2026!"
        }
      }
    },
    "tablas": {
      "zonaA": [
        {
          "equipo": "Galana",
          "pj": 10,
          "pg": 8,
          "pe": 1,
          "pp": 1,
          "gf": 49,
          "gc": 6,
          "dg": 43,
          "pts": 23,
          "sancion": -2,
          "zona": "A",
          "pos": 1
        },
        {
          "equipo": "Tercer Tiempo",
          "pj": 10,
          "pg": 5,
          "pe": 3,
          "pp": 2,
          "gf": 28,
          "gc": 22,
          "dg": 6,
          "pts": 17,
          "sancion": -1,
          "zona": "A",
          "pos": 2
        },
        {
          "equipo": "Dep. Capra",
          "pj": 10,
          "pg": 4,
          "pe": 4,
          "pp": 2,
          "gf": 21,
          "gc": 15,
          "dg": 6,
          "pts": 16,
          "zona": "A",
          "pos": 3
        },
        {
          "equipo": "Inter",
          "pj": 10,
          "pg": 4,
          "pe": 2,
          "pp": 4,
          "gf": 27,
          "gc": 20,
          "dg": 7,
          "pts": 14,
          "zona": "A",
          "pos": 4
        },
        {
          "equipo": "Deportes",
          "pj": 10,
          "pg": 3,
          "pe": 1,
          "pp": 6,
          "gf": 15,
          "gc": 43,
          "dg": -28,
          "pts": 10,
          "zona": "A",
          "pos": 5
        },
        {
          "equipo": "Gladiadoras",
          "pj": 10,
          "pg": 0,
          "pe": 1,
          "pp": 9,
          "gf": 2,
          "gc": 36,
          "dg": -34,
          "pts": 1,
          "zona": "A",
          "pos": 6
        }
      ],
      "zonaB": []
    },
    "goleadores": [
      {
        "pos": 1,
        "jugador": "Urqueta, Aixa Yerimen",
        "equipo": "Galana",
        "goles": 17
      },
      {
        "pos": 2,
        "jugador": "Alemane, Pamela",
        "equipo": "Galana",
        "goles": 11
      },
      {
        "pos": 2,
        "jugador": "Sanchez Roxana",
        "equipo": "Galana",
        "goles": 11
      },
      {
        "pos": 4,
        "jugador": "Velasquez, Anahi Zulema",
        "equipo": "Tercer Tiempo",
        "goles": 10
      },
      {
        "pos": 5,
        "jugador": "Janavel, Fatima Rocio",
        "equipo": "Dep. Capra",
        "goles": 6
      },
      {
        "pos": 6,
        "jugador": "Aubone Martin, Lara Juliana",
        "equipo": "Dep. Capra",
        "goles": 5
      },
      {
        "pos": 6,
        "jugador": "Besso, María Laura",
        "equipo": "Inter",
        "goles": 5
      },
      {
        "pos": 6,
        "jugador": "Reynoso, Yuliana Magalí",
        "equipo": "Inter",
        "goles": 5
      },
      {
        "pos": 9,
        "jugador": "Agilera, Soledad",
        "equipo": "Inter",
        "goles": 4
      },
      {
        "pos": 10,
        "jugador": "Cruz, Dalmira Yanina",
        "equipo": "Tercer Tiempo",
        "goles": 3
      }
    ]
  },
  "clausura": {
    "enCurso": true,
    "ultimaFechaDisputada": 2,
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Tercer Tiempo",
            "golesL": 1,
            "golesV": 6,
            "estado": "finalizado",
            "nota": "",
            "dia": "Viernes 30/10",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Inter",
            "golesL": 0,
            "golesV": 6,
            "estado": "finalizado",
            "nota": "",
            "dia": "Viernes 30/10",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Constructoras",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": "",
            "dia": "Viernes 30/10",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Deportivo VAR"
          }
        ],
        "dia": "Viernes 30 de octubre"
      },
      {
        "numero": 2,
        "nombre": "Fecha 2",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Tercer Tiempo",
            "golesL": 1,
            "golesV": 5,
            "estado": "finalizado",
            "nota": "",
            "dia": "Viernes 06/11",
            "hora": "21:00",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Constructoras",
            "golesL": 6,
            "golesV": 1,
            "estado": "finalizado",
            "nota": "",
            "dia": "Viernes 06/11",
            "hora": "22:00",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Deportes",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": "",
            "dia": "Viernes 06/11",
            "hora": "23:00",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Inter"
          }
        ],
        "dia": "Viernes 6 de noviembre"
      },
      {
        "numero": 3,
        "nombre": "Fecha 3",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Gladiadoras",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Lunes 09/11",
            "hora": "21:00",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Inter",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Lunes 09/11",
            "hora": "22:00",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Constructoras",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Lunes 09/11",
            "hora": "23:00",
            "cancha": "Cancha de Sintético"
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Deportes"
          }
        ],
        "dia": "Lunes 9 de noviembre"
      },
      {
        "numero": 4,
        "nombre": "Fecha 4",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Constructoras",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Deportes",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Gladiadoras",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Galana",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Galana"
          }
        ]
      },
      {
        "numero": 5,
        "nombre": "Fecha 5",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Deportes",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Constructoras",
            "visitante": "Gladiadoras",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Galana",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Tercer Tiempo",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Tercer Tiempo"
          }
        ]
      },
      {
        "numero": 6,
        "nombre": "Fecha 6",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Gladiadoras",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Galana",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Inter",
            "visitante": "Tercer Tiempo",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Constructoras",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Constructoras"
          }
        ]
      },
      {
        "numero": 7,
        "nombre": "Fecha 7",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Deportivo VAR",
            "visitante": "Galana",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Deportes",
            "visitante": "Tercer Tiempo",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Constructoras",
            "visitante": "Inter",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Gladiadoras",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Gladiadoras"
          }
        ]
      }
    ],
    "tablas": {
      "zonaA": [
        {
          "equipo": "Tercer Tiempo",
          "pj": 2,
          "pg": 2,
          "pe": 0,
          "pp": 0,
          "gf": 11,
          "gc": 2,
          "dg": 9,
          "pts": 6,
          "zona": "A",
          "pos": 1
        },
        {
          "equipo": "Inter",
          "pj": 1,
          "pg": 1,
          "pe": 0,
          "pp": 0,
          "gf": 6,
          "gc": 0,
          "dg": 6,
          "pts": 3,
          "zona": "A",
          "pos": 2
        },
        {
          "equipo": "Galana",
          "pj": 2,
          "pg": 1,
          "pe": 0,
          "pp": 1,
          "gf": 7,
          "gc": 7,
          "dg": 0,
          "pts": 3,
          "zona": "A",
          "pos": 3
        },
        {
          "equipo": "Deportes",
          "pj": 2,
          "pg": 1,
          "pe": 0,
          "pp": 1,
          "gf": 2,
          "gc": 3,
          "dg": -1,
          "pts": 3,
          "zona": "A",
          "pos": 4
        },
        {
          "equipo": "Constructoras",
          "pj": 2,
          "pg": 1,
          "pe": 0,
          "pp": 1,
          "gf": 3,
          "gc": 6,
          "dg": -3,
          "pts": 3,
          "zona": "A",
          "pos": 5
        },
        {
          "equipo": "Deportivo VAR",
          "pj": 1,
          "pg": 0,
          "pe": 0,
          "pp": 1,
          "gf": 1,
          "gc": 5,
          "dg": -4,
          "pts": 0,
          "zona": "A",
          "pos": 6
        },
        {
          "equipo": "Gladiadoras",
          "pj": 2,
          "pg": 0,
          "pe": 0,
          "pp": 2,
          "gf": 1,
          "gc": 8,
          "dg": -7,
          "pts": 0,
          "zona": "A",
          "pos": 7
        }
      ],
      "zonaB": []
    },
    "goleadores": [],
    "provisoria": true
  },
  "sanciones": [
    {
      "jugador": "Cano, Lurdes",
      "equipo": "Bienestar",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 23 inc. \"A\" y 49",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Gómez, Marcia",
      "equipo": "Universitarias",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 23 inc. \"A\" y 49",
      "motivo": "",
      "estado": "Vigente"
    }
  ],
  "tablaAnualFuente": "",
  "tablaAnual": []
};
  F.liga = Object.assign({}, A.liga, { categoria: 'Liga Femenina', subtitulo: 'Liga Femenina · Fútbol 5 Universitario', torneoActual: 'Torneo Clausura 2026', ultimaFechaDisputada: 2, estado: 'Clausura en disputa' });
  F.reglamentos = A.reglamentos;
  F.reglamentosCompletos = Object.assign({}, A.reglamentosCompletos, { categoriaA: [{"id": "reg-f-art-1", "numero": 1, "articulo": "Art. 1°", "titulo": "Quiénes pueden participar", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 1º- Podrán competir en el torneo:\n ✓ Personal Docente y Personal de Apoyo de la U.N.S.J.\n ✓ Contratadas que presten servicios en algunas de las áreas de la UNSJ.\n ✓ Becadas del CONICET que cumplan su beca en el ámbito de la UNSJ.\n ✓ Egresadas de la UNSJ.\n ✓ Alumnas de la UNSJ.\n ✓ Alumnas de carreras de grado de institutos de nivel superior de la provincia de San Juan\n (deberán ser alumnas regulares, no pudiendo participar si están realizando el cursillo de\n ingreso).\n ✓ Socias del complejo el Palomar."}, {"id": "reg-f-art-2", "numero": 2, "articulo": "Art. 2°", "titulo": "Integración de los planteles", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 2º- Cada equipo podrá constituirse con un mínimo de 10 (diez) jugadoras y un máximo de 16\n(dieciséis); y una de las cuales será designada capitana antes de iniciar cada encuentro. Cada equipo\npodrá tener un máximo de 3 (tres) jugadoras federadas, las cuales no podrán tener solo la condición de\nsocias del complejo el palomar, de las cuales solamente podrán disputar partidos una jugadora en\ncancha, y el resto de jugadoras no federadas.\nEl equipo que presentase la planilla con un número de jugadoras inferior al máximo, podrá completar la\nlista hasta la reunión anterior a jugarse la 3ra. fecha del torneo, con el pago del seguro de accidentes\npersonales de cada una, como así también quienes deseen realizar cambios, siempre y cuando sean\njugadoras que no hayan disputado ningún encuentro para otro equipo.\nUna vez disputada la 3ra fecha la organización podrá establecer nuevos periodos de incorporaciones\ncomunicados oportunamente."}, {"id": "reg-f-art-3", "numero": 3, "articulo": "Art. 3°", "titulo": "Documentación para participar", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 3º- Para intervenir en la Liga de Futbol 5 Femenina, la interesada deberá presentar, antes de iniciar\nsu primera intervención en la Liga, el CARNET o la CREDENCIAL que otorga la Dirección Gral. de\nDeportes y Rec. de la U.N.S.J. de la siguiente manera:\n • ALUMNA CON CREDENCIAL UNICA, deberá tener abonada la Habilitación anual de la\n Dirección Gral. de Deportes y Rec. de la U.N.S.J de acuerdo al año en curso, y presentar en la\n primera intervención que realice en la Liga de Futbol 5 Femenina, el recibo de pago de la\n inscripción de la misma, en el caso de haber extraviado el mismo, deberá dirigirse a la oficina del\n Dpto. técnico de la D.G.D.R de lunes a viernes de 10 a 13 hs. (siempre y cuando sea día hábil).\n Caso contrario no podrá disputar ningún encuentro SIN EXCEPCION. ADEMAS LA\n CREDENCIAL DEBERA ESTAR EN VIGENCIA.\n LIGA DE FUTBOL FEMENINA\n\f • ALUMNA U.N.S.J.: el carnet deberá estar habilitado de acuerdo al año en curso, y presentar en\n la primera intervención que realice en la Liga Universitaria de futbol, el recibo de pago de la\n inscripción de la misma, en el caso de haber extraviado el mismo, deberá dirigirse a la oficina del\n Dpto. técnico de la D.G.D.R de lunes a viernes de 10 a 13 hs. (siempre y cuando sea día hábil).\n Caso contrario no podrá disputar ningún encuentro SIN EXCEPCION.\n • PERSONAL DE LA U.N.S.J. (Docente o PAU), el carnet deberá estar habilitado de acuerdo al\n año en curso, copia del recibo de sueldo (de cualquier mes del año en curso) SIN EXCEPCION.\n • Si es Alumna, y tiene carnet de hija de Personal de la U.N.S.J. hija de egresado, o hija de\n Jubilado de la UNSJ. deberá tener el carnet habilitado de acuerdo al año en curso, y tendrá que\n adjuntar un certificado de regularidad cada vez que presente el carnet y además exhibir el recibo\n de pago de la cuota mensual (en el caso de las categorías de socio que pagan cuota mensual)\n en el caso de haber extraviado el mismo, deberá dirigirse a la oficina del Dpto. técnico de la\n D.G.D.R, donde se corroborara el pago, de lunes a viernes de 10 a 13 hs. (siempre y cuando sea\n día hábil). Caso contrario no podrá disputar ningún encuentro SIN EXCEPCION.\n • Socias del complejo deportivo, deberá tener el carnet habilitado de acuerdo al año en curso, y\n además presentar el recibo de pago mensual, cada vez que deba intervenir en un encuentro de\n la Liga de Futbol 5 Femenina, en el caso de haber extraviado el mismo, deberá dirigirse a la\n oficina del Dpto. técnico de la D.G.D.R, donde se corroborara el pago, de lunes a viernes de 10 a\n 13 hs. (siempre y cuando sea día hábil). Caso contrario no podrá disputar ningún encuentro SIN\n EXCEPCION.\n • ALUMNAS DE INSTITUCIONES DE EDUCACION SUPERIOR. deberá tener el carnet habilitado\n de acuerdo al año en curso, y además presentar el recibo de pago mensual, cada vez que deba\n intervenir en un encuentro de la Liga de Futbol 5 Femenina, en el caso de haber extraviado el\n mismo, deberá dirigirse a la oficina del Dpto. técnico de la D.G.D.R, donde se corroborara el\n pago, de lunes a viernes de 10 a 13 hs. (siempre y cuando sea día hábil). Caso contrario no\n podrá disputar ningún encuentro SIN EXCEPCION.\n • Si son alumnas de la UNSJ becadas, deberán tener el carnet actualizado al año 2025. Caso\n contrario no podrá disputar ningún encuentro SIN EXCEPCION.\nDespués de la primera intervención se podrá reemplazar la exhibición del CARNET O\nCREDENCIAL, por el DNI o carnet de conducir del interesado físico o digital (app Mi Argentina)."}, {"id": "reg-f-art-4", "numero": 4, "articulo": "Art. 4°", "titulo": "Suspensión de la Liga", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 4º- Si por algún motivo particular y/o razones de fuerza mayor, se debiera suspender la Liga, la\nmisma se dará por finalizada, Asimismo, la organización será la autoridad encargada de determinar la\nresolución final del torneo, pudiendo disponer, según lo considere pertinente, su declaración como\ndesierto, la consagración de campeones u otra medida que estime adecuada."}, {"id": "reg-f-art-5", "numero": 5, "articulo": "Art. 5°", "titulo": "Sistema de disputa", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 5º- El sistema de disputa se determinará de la siguiente manera:\nDE ACUERDO A LOS EQUIPOS INSCRIPTOS EN EL TORNEO APERTURA 2026."}, {"id": "reg-f-art-6", "numero": 6, "articulo": "Art. 6°", "titulo": "Duración y sistema de puntuación", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 6º- Los partidos se disputarán en 2 (dos) tiempos de 25 (veinticinco) minutos cada uno, con un\ndescanso de 5 (cinco) minutos entre uno y otro. El sistema de puntuación será el siguiente:\n a) Partido ganado = 3 (tres) Puntos.\n b) Partido empatado = 1 (uno) Punto.\n c) Partido perdido = 0 (cero) Punto.\n LIGA DE FUTBOL FEMENINA"}, {"id": "reg-f-art-7", "numero": 7, "articulo": "Art. 7°", "titulo": "Criterios de desempate", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 7º- En caso de producirse un empate, en las posiciones finales de cualquiera de las fases, entre dos\no más equipos, se procederá de la siguiente manera:\n 1. Por la mayor cantidad de puntos obtenidos por los empatados en los partidos jugados entre sí\n en esa fase.\n 2. Por la diferencia de los goles a favor y en contra de todos los partidos disputados en la Fase.\n 3. Por la mayor cantidad de goles a favor logrados en todos los partidos disputados en la Fase.\n 4. Por la diferencia de los goles a favor y en contra de todos los partidos disputados en el\n Torneo.\n 5. Por la mayor cantidad de goles a favor logrados en todos los partidos disputados en el\n Torneo.\n 6. Por Fair Play durante todo el torneo.\n 7. Por sorteo entre los equipos empatados.\nLos equipos que hayan tenido 1 (una) No presentación no tendrá derecho a participar en ningún\ntipo de desempate.\nEn 8vos. 4tos. Semis y Finales (en caso de que el sistema de juego lo permita), en caso de empate se\ndefinirá por tiros desde el punto penal (3 tiros por equipo, en caso de proseguir con la igualdad, se\nejecutara un disparo por bando, hasta definir el ganador)."}, {"id": "reg-f-art-8", "numero": 8, "articulo": "Art. 8°", "titulo": "Reglas de juego y amarillas", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 8º- Se aplicarán las siguientes reglas:\n ✓ Solo se podrá jugar con ZAPATILLAS suela lisa o para futbol 5, quedando prohibido el uso de\n tapones de goma y/o aluminio.\n ✓ Los cambios serán libres por equipo, la jugadora que sale podrá volver ingresar, siempre y\n cuando este el balón detenido y previa autorización del árbitro del encuentro.\n ✓ Los laterales y los corners se ejecutarán con el pie.\n ✓ El saque de la arquera:\n • Con la mano (si la pelota no salió del campo de juego) será libre, si hiciera gol sin que\n ninguna jugadora la toque (compañera o adversaria) el mismo no será válido y será\n saque de arco para el equipo contrario.\n • Si la arquera decide pegarle con el pie de aire o de piso (si la pelota no salió del campo\n de juego) el golpe será libre, si hiciera GOL de esta manera, el mismo será válido.\n • Sí es saque de arco (cuando la pelota salió del campo de juego golpeada por el equipo\n contrario), el saque deberá ser desde el piso, dentro del área, con el pie, el mismo será\n libre, si hiciera GOL de esta manera no será válido. Si la ejecutora del saque hiciera gol\n en contra de su portería, el mismo no será válido, y se ejecutara un tiro de esquina para\n el equipo contrario.\n LIGA DE FUTBOL FEMENINA\n\f ✓ La arquera no podrá tomar la pelota con la mano, si esta se la paso una compañera de su equipo\n con el pie, si esto sucediera se cobrará tiro libre indirecto a favor del equipo contrario.\n ✓ Para los tiros libres, directos o indirectos, se deberá posicionar la barrera (si la pateadora la\n solicita) a 3 (tres) metros del balón.\n ✓ Los penales se ejecutarán con un paso de carrera.\n ✓ En el caso de que un equipo este haciendo jugar mas de 1 (una) jugadora federada en\n simultaneo, en el momento de que el arbitro y/o el fiscalizador, lo constate, se cobrara tiro desde\n el punto penal para el otro equipo, como así también, la sanción con tarjeta amarilla para la\n jugadora designada capitana del equipo.\n ✓ Se implementará sanciones a las jugadoras por acumulación de tarjetas amarillas de acuerdo al\n siguiente detalle:\n a) 4 amarillas = 1 (uno) Partido de suspensión.\n b) 7 amarillas = 2 (dos) Partidos de suspensión\n Las amarillas serán acumulables a lo largo de todo el torneo, sin importar la cantidad de fases que\n posee el mismo. En la fase final (octavos, cuartos, etc.) las tarjetas dejarán de ser acumulativas.\n ✓ Tiro Libre directo a partir de la sexta falta acumulada por equipo y por tiempo:\n ▪ Las faltas no serán acumulativas de un tiempo para el otro.\n ▪ La ejecutora del tiro libre deberá lanzarlo con la intención de marcar un gol y no podrá\n pasar el balón a otra compañera.\n ▪ Después de ejecutar el tiro libre, ninguna jugadora podrá tocar el balón hasta que éste\n haya tocado a la arquera, rebotado en uno de los postes o en el travesaño, o salido de la\n superficie de juego\n ▪ La arquera se podrá adelantar hasta los límites del área, si pasa este límite y no fuese\n gol, el tiro libre se deberá repetir, además de amonestar a la arquera infractora."}, {"id": "reg-f-art-9", "numero": 9, "articulo": "Art. 9°", "titulo": "Días y horarios", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 9º- Los partidos se disputarán en los días y horarios que disponga la Dirección General de Deportes\ny Recreación de la U.N.S.J en las reuniones de delegadas, dichos horarios se realizan por sorteo, una\nvez realizado el sorteo, para poder modificar un horario ya establecido, se realizará un acta en la cual\ndeberán quedar estampadas las firmas de todas las delegadas involucradas en dicha modificación, en el\ncaso de que alguna delegada no se encuentre presente en dicha reunión, quien sacará la bolilla por este,\nserá el representante de la Organización. BAJO NINGUNA CIRSCUNSTANCIA SE MODIFICARÁ UN\nHORARIO UNA VEZ FINALIZADA LA REUNION."}, {"id": "reg-f-art-10", "numero": 10, "articulo": "Art. 10°", "titulo": "Inasistencias de las delegadas", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 10º- Las sanciones por inasistencia de las delegadas a las reuniones que se realizan los días que la\nComisión Organizadora disponga, se tendrán en cuenta para todas las posiciones finales en cada fase\ncorrespondiente del torneo. Llámese inasistencia a la falta a una reunión; cuando se cumpla la 2da.\n(segunda) ausencia de una delegada y/o integrante del equipo, a una reunión se descontará un punto al\nequipo que ésta represente y a partir de ese momento se procederá al descuento de 1 (uno) punto por\ncada inasistencia. De ser que una delegada y/o integrante del equipo, llegase tarde a una reunión con un\ntiempo mayor a 15 (quince) minutos a partir de comenzada la misma y hasta la finalización de la misma,\nllamando finalización al haberse retirado de la reunión la persona representante de la D.G.D.R. de la\nU.N.S.J., se le computará una Tardanza; tres tardanzas implicarán una (1) inasistencia al equipo\ncorrespondiente. LAS FALTAS SERAN ACUMULATIVAS DURANTE TODO EL TORNEO.\n LIGA DE FUTBOL FEMENINA"}, {"id": "reg-f-art-11", "numero": 11, "articulo": "Art. 11°", "titulo": "Cancha y cantidad de jugadoras", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 11º- Los partidos se disputarán en la cancha chica de sintético del Complejo Deportivo El Palomar,\ny se jugarán de 6 (seis) jugadoras cada equipo, 1 (una) Arquera y 5 (cinco) jugadoras de campo. EL\nMINIMO de jugadoras para poder disputar un partido es 3 (tres) jugadoras de campo más la arquera, es\ndecir 4 (cuatro) jugadoras."}, {"id": "reg-f-art-12", "numero": 12, "articulo": "Art. 12°", "titulo": "Puntualidad y tolerancia", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 12º- Los partidos deberán iniciarse puntualmente. Se determina una tolerancia de 15 (quince)\nminutos con respecto a la hora fijada para la iniciación del primer encuentro de la jornada (a\nconsideración de la Comisión Organizadora), en caso de no aplicarse en el 1er. Partido se tendrá en\ncuenta para el 2do., de no aplicarse en este último se tendrá en cuenta para el 3ro., y así sucesivamente.\nSi cumplido este plazo un equipo no hubiese reunido la cantidad de jugadoras descriptos en el art. 9º,\npara comenzar el encuentro, se dará por perdido el encuentro por el score 2-0 al equipo que no completo\nel mínimo de jugadoras."}, {"id": "reg-f-art-13", "numero": 13, "articulo": "Art. 13°", "titulo": "Firma de planilla", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 13º- Cada jugadora antes de comenzar un encuentro, o antes de ingresar al campo de juego,\ndeberá firmar la planilla del partido, es decir que los equipos antes de comenzar a disputar un encuentro\ndeberán firmar la planilla, si esto ocasionará demora en el inicio del encuentro (ocupada la tolerancia de\n15 minutos), esta demora se descontará del tiempo total de los partidos SIN EXCEPCION."}, {"id": "reg-f-art-14", "numero": 14, "articulo": "Art. 14°", "titulo": "Inicio con menos jugadoras", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 14º- El equipo que iniciará un encuentro con menos de las jugadoras estipuladas en el art. 9º, podrá\nincorporar otra jugadora en cualquier momento del partido, hasta reunir el máximo reglamentario, previa\nautorización del árbitro y la mesa de control."}, {"id": "reg-f-art-15", "numero": 15, "articulo": "Art. 15°", "titulo": "Eliminación por doble pérdida de puntos", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 15º- Cuando un equipo haya perdido 2 (dos) veces los puntos por aplicación del art. 10º, quedará\neliminado de la competencia."}, {"id": "reg-f-art-16", "numero": 16, "articulo": "Art. 16°", "titulo": "Equipos eliminados", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 16º- En aquellos casos que un equipo quedará eliminado del torneo, se procede de la siguiente\nmanera:\n a) Si el mencionado equipo queda eliminado habiendo disputado, el 50 % de los partidos\n programados para el torneo, se respetarán los resultados que este haya obtenido en los\n encuentros disputados hasta ese momento y se le dará por perdido con el Score 2 – 0 con los\n equipos que aún no haya jugado.\n b) Si el equipo fuese eliminado del Torneo habiendo disputado menos del 50 % de los partidos\n programados para ese torneo, no se tendrán en cuenta ninguno de los resultados obtenidos por este\n y no se sacarán los goles a las jugadoras de los equipos contrarios con que este haya jugado, al solo\n efecto de determinar a la goleadora del torneo."}, {"id": "reg-f-art-17", "numero": 17, "articulo": "Art. 17°", "titulo": "Delegadas", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 17º- Cada equipo designará una delegada Titular y una delegada Suplente antes del inicio de la\ncompetencia, las cuales deberán ser integrantes del equipo, y las mismas deberán cumplir con las\nsiguientes funciones y responsabilidades:\n a) Será única responsable y representante ante la Comisión Organizadora.\n b) Representará al equipo ante las autoridades de la competencia.\n c) Intervendrá en el cumplimiento de las formalidades que lo requieran.\n d) SERÁ RESPONSABLE SOLIDARIAMENTE DE LA CONDUCTA DE SU EQUIPO EN ACTOS\n PUNIBLES COMETIDOS.\n LIGA DE FUTBOL FEMENINA\n\f e) Efectuará el control de la correcta inclusión de las jugadoras en los partidos que participe su\n equipo.\n f) Se Notificará Personalmente en las oficinas de la Dirección Gral. de Deportes y Rec. de la\n U.N.S.J. del día y hora en que su equipo deberá jugar cada encuentro. Esta información no se\n dará por teléfono (en el caso de que la reunión se realice presencial).\n g) Será la única autorizada para solicitar información a la mesa de control.\n h) El cambio de delegada de un equipo quedará formalizado cuando la Comisión Organizadora\n reciba por escrito los datos de la nueva Representante y los de la renunciante, firmada por\n ambas delegadas."}, {"id": "reg-f-art-18", "numero": 18, "articulo": "Art. 18°", "titulo": "Firma de la planilla por las delegadas", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 18º- Será responsabilidad de cada delegada Titular o Suplente firmar al termino de cada partido la\nplanilla de juego del encuentro, debiendo revisar los datos que figuren en ella. La estampa de la firma\nserá constancia de conformidad de lo escrito en la misma. Además, de faltar la firma de alguna/s\ndelegada/s, estas no tendrán derecho a protestar y/o cambiar ningún tipo de dato que se encuentre en la\nplanilla."}, {"id": "reg-f-art-19", "numero": 19, "articulo": "Art. 19°", "titulo": "Denuncias y protestas", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 19º- Las denuncias y/o protestas sobre inclusión indebida o faltas disciplinarias, deberán hacerse\nsegún el art. 7º de las Reglas de Procedimiento del Tribunal de Disciplina, el que dice:\nArt. 7º- Las denuncias o protestas por inclusión indebida de jugadores —por inhabilitación, sustitución o utilización\nde documentación falsa, ajena o adulterada— deberán efectuarse antes de la finalización del partido. La denuncia\ndeberá ser formulada en forma verbal por el delegado o el capitán de uno (1) de los equipos ante el fiscalizador y/o\nel árbitro del encuentro, quienes deberán dejar constancia en la planilla del partido. El fiscalizador y/o árbitro deberán\nrequerir al jugador denunciado que estampe su firma en la planilla, consignando su número de documento y\ncualquier otro dato que se le solicite. La negativa del jugador a firmar o aportar los datos requeridos constituirá plena\nprueba de la infracción (suplantación), debiendo dejarse constancia expresa de dicha circunstancia en la planilla.\nLa denuncia deberá ser ratificada por escrito ante las autoridades de la competencia en forma inmediata.\nEl incumplimiento de cualquiera de los requisitos establecidos en los incisos precedentes implicará que la denuncia\nno será considerada, salvo que el Tribunal determine la existencia de un hecho de gravedad.\nLas protestas deberán presentarse en forma clara y precisa, indicando nombre y apellido, número de carnet y\nnúmero de camiseta del o de los jugadores denunciados.\nCuando resulte necesario verificar la identidad de un jugador, las autoridades de la competencia podrán exigir la\npresentación de la documentación correspondiente. La negativa del jugador a exhibir la documentación o su retiro\nsin hacerlo será considerada como evidencia suficiente de mala fe y de inclusión indebida en el partido.\nAnte la sospecha de inclusión indebida, el Tribunal, los fiscalizadores, árbitros, veedores y demás autoridades\npodrán actuar de oficio, evaluando las pruebas del caso.\nEl equipo que presente una denuncia o protesta infundada será sancionado con:\n 1. la pérdida de tres (3) puntos en disputa;\n 2. la deducción de tres (3) puntos adicionales al finalizar la rueda o el torneo, según corresponda;\nla suspensión de su delegado hasta la finalización de la competencia."}, {"id": "reg-f-art-20", "numero": 20, "articulo": "Art. 20°", "titulo": "Inclusión indebida", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 20º- De quedar demostrada una inclusión indebida, en cualquier equipo integrante de la Liga de\nFutbol Femenina, ya sea por sustitución, utilización de documentación falsa, ajena o adulterada, el\nEQUIPO SERA SANCIONADO DE ACUERDO A LA REGLAMENTACION VIGENTE, además de las\nsanciones que les correspondan a los implicados, de acuerdo al reglamento del Tribunal de Disciplina de\nla Dirección General de Deportes y Recreación de la Universidad Nacional de San Juan."}, {"id": "reg-f-art-21", "numero": 21, "articulo": "Art. 21°", "titulo": "Acciones legales", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 21º- Si algún equipo y/o integrante de cualquier equipo, iniciará una acción legal de cualquier tipo, la\npersona y el equipo no podrán participar de encuentros o torneos organizado por D.G.D.R. hasta que se\nden por finalizadas todas las instancias jurídicas correspondientes.\n LIGA DE FUTBOL FEMENINA"}, {"id": "reg-f-art-22", "numero": 22, "articulo": "Art. 22°", "titulo": "Solicitud de inscripción", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 22º- Las interesadas en participar en esta competencia se constituirán en equipos y solicitarán la\ninscripción por medio de su delegada en la Dirección General de Deportes y Recreación de la U.N.S.J."}, {"id": "reg-f-art-23", "numero": 23, "articulo": "Art. 23°", "titulo": "Formalización de la inscripción", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 23º- La inscripción de un equipo quedará formalizada cuando la Dirección General de Deportes y\nRecreación de la U.N.S.J. reciba de conformidad y en término (de acuerdo a los plazos previstos), lo\nsiguiente:\n a) La planilla de inscripción que provee la Dirección General de Deportes y Recreación de la\n U.N.S.J. completada digitalmente, en los que se consignen todos los datos en ella requeridos,\n deberá ser enviada por correo electrónico a ligadefutbol@unsj.edu.ar, en formato Excel,\n siguiendo estas indicaciones:\n 1. Columna 1: Número de orden del jugador (ej.: 1, 2, 3…).\n 2. Columna 2: Apellido y nombre en mayúsculas, (en ese orden) separados por coma y espacio\n (ej.: PEREZ, JUANA).\n 3. Columna 3: Documento de identidad, sin puntos. En caso de pasaporte, indicar tipo de\n documento seguido del número (ej.: Pas 1234567…).\n 4. Columna 4: Fecha de nacimiento en formato dd/mm/aaaa (ej.: 05/06/1985).\n 5. Columna 5: Teléfono celular del jugador; si no posee, el teléfono de su domicilio.\n b) La planilla de inscripción deben presentarla en papel y se deberán incluir los datos y las firmas\n de las delegadas (Titular y Suplente) y este deberá ser presentada por las oficinas de la DGDR,\n antes de comenzar el torneo. Además de enviarla por correo electrónico como se detalla en el\n ítem anterior.\n c) La certificación correspondiente a cada jugadora de su condición de Personal Docente o No\n docente, alumna, egresada o socia, se realizará en caso de que la comisión organizadora lo\n disponga.\n d) En el caso de las Becadas del CONICET, deberán presentar resolución de su beca y una\n certificación del jefe de área de la UNSJ donde cumple su beca.\n e) En el caso de las CONTRATADAS, deberán presentar resolución de su contrato y una\n certificación del jefe de área de la UNSJ donde presta servicios.\n f) En el caso de las Egresadas, deberán ser Egresadas de la UNSJ y en caso de ser necesario\n presentar certificado analítico o copia del título, cuando la organización lo requiera.\n g) Se implementará un Seguro, el cual deberá ser abonado por cada equipo. El jugador que no esté\n asegurado, no podrá jugar, sin excepción. Dicho pago del seguro es obligatorio para confirmar la\n lista de Buena Fe, por lo tanto, el mismo debe ser abonado el día anterior a la reunión antes de\n disputarse la tercera fecha o cuando la organización lo disponga. Pudiendo agregar jugadores en\n los periodos de incorporación si los hubiera.\n h) Cada participante deberá presentar una certificación médica de aptitud física para realizar\n actividades deportivas, realizada en el lugar que determine la organización (solamente se\n recibirán las fichas medicas otorgadas por la UNSJ y solo realizadas para este torneo).\n i) Se implantará una inscripción por equipo y por torneo, por el valor de $100.000 (pesos cien mil),\n 1ª cuota de $35.000 (pesos treinta cinco mil) a pagar el día hábil anterior a la reunión donde se\n sortea la 3er fecha, mostrando el comprobante en dicha reunión. 2ª cuota de $35.000 (pesos\n treinta cinco mil) a pagar el día hábil anterior a la reunión donde se sortea la 5ta fecha, 3ª de\n $30.000 (pesos treinta mil) a pagar el día hábil anterior a la reunión donde se sortea la 7ta fecha,\n LIGA DE FUTBOL FEMENINA\n\f mostrando el comprobante en dicha reunión mostrando el comprobante en dicha reunión. La\n presentación podrá ser presencial o virtual (foto del recibo de pago donde se vea de manera\n clara la fecha y numero de recibo de pago)."}, {"id": "reg-f-art-24", "numero": 24, "articulo": "Art. 24°", "titulo": "Nombre de los equipos", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 24º- La Organización se reserva el derecho de admisión en cuanto al nombre utilizado en los\nequipos que interviniesen en la Liga de Fútbol Femenina."}, {"id": "reg-f-art-25", "numero": 25, "articulo": "Art. 25°", "titulo": "Autoridades", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 25º- La Comisión Organizadora designará las autoridades de la competencia, quienes serán\nresponsables de la interpretación y aplicación del presente Reglamento"}, {"id": "reg-f-art-26", "numero": 26, "articulo": "Art. 26°", "titulo": "Temas no previstos", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 26º- Cualquier tema no previsto en este Reglamento, será resuelto por la Comisión Organizadora."}, {"id": "reg-f-art-27", "numero": 27, "articulo": "Art. 27°", "titulo": "Comunicación oficial (WhatsApp)", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 27º- Todo lo informado en el grupo de WhatsApp de la Liga de Futbol Femenina temporada 2026,\ninformado por los números de la DGDR (2646629521 – 2645834768), tiene carácter de oficial."}, {"id": "reg-f-art-28", "numero": 28, "articulo": "Art. 28°", "titulo": "Aceptación del reglamento", "categoria": "categoriaA", "seccion": "Liga Femenina 2026", "texto": "Art. 28º- La participación en el Torneo de Futbol “Liga de Futbol Femenina”, implica la aceptación total\nde este Reglamento.\n LIGA DE FUTBOL FEMENINA"}], formaDisputa: [{"id": "disp-f-ap", "numero": 1, "articulo": "Apertura", "titulo": "Torneo Apertura 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Liga Femenina", "texto": "Participaron seis (6) equipos.\nFase clasificatoria: todos contra todos, ida y vuelta.\nFase Campeonato: clasifican del 1° al 4°. Semifinales: 1° vs 4° y 2° vs 3°."}, {"id": "disp-f-cl", "numero": 2, "articulo": "Clausura", "titulo": "Torneo Clausura 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Liga Femenina", "texto": "Participan siete (7) equipos, en zona única todos contra todos (un equipo libre por fecha).\nFase Campeonato: clasifican del 1° al 4°. Semifinales: 1° vs 4° y 2° vs 3°."}, {"id": "disp-f-plata", "numero": 3, "articulo": "Clausura", "titulo": "Copa de Plata", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Liga Femenina", "texto": "Juegan del 5° al 7° de la fase clasificatoria. Semifinal: 6° vs 7°. El ganador juega la final con el 5° para definir el campeón de la Copa de Plata."}, {"id": "disp-f-juego", "numero": 4, "articulo": "Reglamento", "titulo": "Cómo se juega", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Liga Femenina", "texto": "Fútbol 5 en la cancha chica de sintético del Complejo El Palomar: 6 jugadoras por equipo (1 arquera y 5 de campo), mínimo 4 para jugar. Dos tiempos de 25 minutos con 5 de descanso."}] });
  F.copaChallenger = null;
  window.LIGA_DATA_F = F;
})();
