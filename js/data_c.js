/**
 * CATEGORÍA C 2026 — datos cargados desde los informes de la Liga
 * (Apertura: fechas 1 a 7 + semifinales; Clausura: fechas 1 a 5 + fixture; Tabla Anual al 30/10/2026).
 */
(function () {
  'use strict';
  const A = window.LIGA_DATA;
  if (!A) return;
  const C = {
  "formato": {
    "zonaUnica": true,
    "clausura": {
      "campeonato": 6,
      "directos": 2,
      "cuartos": [
        [
          3,
          6
        ],
        [
          4,
          5
        ]
      ],
      "plata": [
        [
          7,
          10
        ],
        [
          8,
          9
        ]
      ],
      "texto": "Clasifican del 1° al 6° a la Fase Campeonato (1° y 2° directo a semifinales) y del 7° al 10° a la Copa de Plata."
    },
    "apertura": {
      "campeonato": 4,
      "texto": "Clasificaron del 1° al 4° a la Fase Campeonato y del 5° al 7° a la Copa de Plata."
    }
  },
  "equipos": [
    {
      "id": "bonus_track",
      "nombre": "Bonus Track",
      "slug": "bonus_track",
      "escudo": "public/escudos/bonus_track.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/bonustrack013/",
      "instagramHandle": "@bonustrack013"
    },
    {
      "id": "catedra",
      "nombre": "Cátedra FC",
      "slug": "catedra",
      "escudo": "public/escudos/catedra.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/fc.catedra/",
      "instagramHandle": "@fc.catedra"
    },
    {
      "id": "defensa_e_injusticia",
      "nombre": "Defensa e Injusticia",
      "slug": "defensa_e_injusticia",
      "escudo": "public/escudos/defensa_e_injusticia.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/defensaeinjusticia/",
      "instagramHandle": "@defensaeinjusticia"
    },
    {
      "id": "don_bosco",
      "nombre": "Don Bosco",
      "slug": "don_bosco",
      "escudo": "public/escudos/don_bosco.png",
      "zonaApertura": null,
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/fc_don.bosco/",
      "instagramHandle": "@fc_don.bosco"
    },
    {
      "id": "flandria",
      "nombre": "Flandria FC",
      "slug": "flandria",
      "escudo": "public/escudos/flandria.png",
      "zonaApertura": null,
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/flandria_fc/",
      "instagramHandle": "@flandria_fc"
    },
    {
      "id": "imputables_fc",
      "nombre": "Imputables FC",
      "slug": "imputables_fc",
      "escudo": "public/escudos/imputables_fc.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/imputablesfc/",
      "instagramHandle": "@imputablesfc"
    },
    {
      "id": "nacional",
      "nombre": "Nacional",
      "slug": "nacional",
      "escudo": "public/escudos/nacional.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/nacionalfc_sj/",
      "instagramHandle": "@nacionalfc_sj"
    },
    {
      "id": "newcauce",
      "nombre": "Newcauce",
      "slug": "newcauce",
      "escudo": "public/escudos/newcauce.png?v=2",
      "zonaApertura": null,
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/newcauce.fc/",
      "instagramHandle": "@newcauce.fc"
    },
    {
      "id": "talleres",
      "nombre": "Talleres",
      "slug": "talleres",
      "escudo": "public/escudos/talleres.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/talleres.univ/",
      "instagramHandle": "@talleres.univ"
    },
    {
      "id": "vial",
      "nombre": "Vial",
      "slug": "vial",
      "escudo": "public/escudos/vial.png",
      "zonaApertura": "A",
      "zonaClausura": "A",
      "color": "#D9770B",
      "instagram": "https://www.instagram.com/vialfc.sj/",
      "instagramHandle": "@vialfc.sj"
    }
  ],
  "apertura": {
    "campeon": "Imputables FC",
    "subcampeon": "Vial",
    "tercero": "Cátedra FC",
    "cuarto": "Defensa e Injusticia",
    "campeonPlata": "Bonus Track",
    "subcampeonPlata": "Talleres",
    "fechas": [
      {
        "numero": 1,
        "nombre": "Fecha 1",
        "disputada": true,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Cátedra FC",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Defensa e Injusticia",
            "golesL": 1,
            "golesV": 7,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Imputables FC",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Talleres",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Talleres"
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
            "local": "Talleres",
            "visitante": "Nacional",
            "golesL": 3,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Cátedra FC",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Defensa e Injusticia",
            "golesL": 5,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Bonus Track"
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
            "local": "Talleres",
            "visitante": "Imputables FC",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Vial",
            "golesL": 0,
            "golesV": 4,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Cátedra FC",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Nacional"
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
            "local": "Talleres",
            "visitante": "Cátedra FC",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Defensa e Injusticia",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Imputables FC",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Vial"
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
            "local": "Talleres",
            "visitante": "Bonus Track",
            "golesL": 0,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Cátedra FC",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Defensa e Injusticia",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Imputables FC"
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
            "local": "Talleres",
            "visitante": "Vial",
            "golesL": 0,
            "golesV": 4,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Nacional",
            "golesL": 5,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Cátedra FC",
            "golesL": 2,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Defensa e Injusticia"
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
            "local": "Talleres",
            "visitante": "Defensa e Injusticia",
            "golesL": 3,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Imputables FC",
            "golesL": 0,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Vial",
            "golesL": 0,
            "golesV": 5,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Cátedra FC",
            "visitante": "Libre",
            "golesL": null,
            "golesV": null,
            "estado": "libre",
            "nota": "Fecha libre Cátedra FC"
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
            "local": "Vial",
            "visitante": "Defensa e Injusticia",
            "golesL": 4,
            "golesV": 1,
            "ganador": "Vial"
          },
          {
            "codigo": "SF2",
            "local": "Cátedra FC",
            "visitante": "Imputables FC",
            "golesL": 1,
            "golesV": 1,
            "penalesL": 1,
            "penalesV": 3,
            "nota": "Penales: 1 - 3",
            "ganador": "Imputables FC"
          }
        ],
        "tercerPuesto": {
          "codigo": "3P",
          "local": "Cátedra FC",
          "visitante": "Defensa e Injusticia",
          "golesL": null,
          "golesV": null,
          "ganador": "Cátedra FC",
          "nota": "Resultado no informado (Cátedra 3° según la Tabla Anual)"
        },
        "final": {
          "codigo": "FINAL",
          "local": "Vial",
          "visitante": "Imputables FC",
          "golesL": null,
          "golesV": null,
          "ganador": "Imputables FC",
          "nota": "¡Imputables FC Campeón Apertura 2026! (resultado no informado)"
        }
      },
      "copaPlata": {
        "cuartos": [],
        "semifinales": [
          {
            "codigo": "SF",
            "local": "Talleres",
            "visitante": "Nacional",
            "golesL": 1,
            "golesV": 1,
            "penalesL": 3,
            "penalesV": 1,
            "nota": "Penales: 3 - 1",
            "ganador": "Talleres"
          }
        ],
        "bye": "Bonus Track",
        "final": {
          "codigo": "FINAL",
          "local": "Bonus Track",
          "visitante": "Talleres",
          "golesL": null,
          "golesV": null,
          "ganador": "Bonus Track",
          "nota": "¡Bonus Track Campeón de Plata! (resultado no informado)"
        }
      }
    },
    "tablas": {
      "zonaA": [
        {
          "pos": 1,
          "equipo": "Vial",
          "pj": 6,
          "pg": 5,
          "pe": 1,
          "pp": 0,
          "gf": 17,
          "gc": 2,
          "dg": 15,
          "pts": 16,
          "zona": "A"
        },
        {
          "pos": 2,
          "equipo": "Cátedra FC",
          "pj": 6,
          "pg": 3,
          "pe": 2,
          "pp": 1,
          "gf": 10,
          "gc": 6,
          "dg": 4,
          "pts": 11,
          "zona": "A"
        },
        {
          "pos": 3,
          "equipo": "Imputables FC",
          "pj": 6,
          "pg": 2,
          "pe": 3,
          "pp": 1,
          "gf": 9,
          "gc": 5,
          "dg": 4,
          "pts": 9,
          "zona": "A"
        },
        {
          "pos": 4,
          "equipo": "Defensa e Injusticia",
          "pj": 6,
          "pg": 2,
          "pe": 2,
          "pp": 2,
          "gf": 15,
          "gc": 12,
          "dg": 3,
          "pts": 8,
          "zona": "A"
        },
        {
          "pos": 5,
          "equipo": "Bonus Track",
          "pj": 6,
          "pg": 2,
          "pe": 1,
          "pp": 3,
          "gf": 7,
          "gc": 9,
          "dg": -2,
          "pts": 7,
          "zona": "A"
        },
        {
          "pos": 6,
          "equipo": "Talleres",
          "pj": 6,
          "pg": 1,
          "pe": 2,
          "pp": 3,
          "gf": 7,
          "gc": 14,
          "dg": -7,
          "pts": 4,
          "zona": "A",
          "sancion": -1
        },
        {
          "pos": 7,
          "equipo": "Nacional",
          "pj": 6,
          "pg": 0,
          "pe": 1,
          "pp": 5,
          "gf": 5,
          "gc": 22,
          "dg": -17,
          "pts": -1,
          "zona": "A",
          "sancion": -2
        }
      ],
      "zonaB": []
    },
    "goleadores": [
      {
        "pos": 1,
        "jugador": "Rugna, Bruno",
        "equipo": "Defensa e Injusticia",
        "goles": 6
      },
      {
        "pos": 2,
        "jugador": "Tejada, Santino",
        "equipo": "Defensa e Injusticia",
        "goles": 5
      },
      {
        "pos": 2,
        "jugador": "Bellizia Camuñas, Nicolas",
        "equipo": "Vial",
        "goles": 5
      },
      {
        "pos": 4,
        "jugador": "Fernandez Galindez, Simon",
        "equipo": "Vial",
        "goles": 4
      },
      {
        "pos": 5,
        "jugador": "Palma, Martin",
        "equipo": "Bonus Track",
        "goles": 3
      },
      {
        "pos": 5,
        "jugador": "Herrera, Gabriel",
        "equipo": "Cátedra FC",
        "goles": 3
      },
      {
        "pos": 5,
        "jugador": "Abasolo Llanos, Cruz León",
        "equipo": "Imputables FC",
        "goles": 3
      },
      {
        "pos": 8,
        "jugador": "Fernandez, Santino",
        "equipo": "Bonus Track",
        "goles": 2
      },
      {
        "pos": 8,
        "jugador": "Rodenas, Juan Pablo",
        "equipo": "Bonus Track",
        "goles": 2
      },
      {
        "pos": 8,
        "jugador": "Marin, Luciano",
        "equipo": "Cátedra FC",
        "goles": 2
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
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Flandria FC",
            "golesL": 0,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Cátedra FC",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Talleres",
            "visitante": "Newcauce",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Defensa e Injusticia",
            "golesL": 2,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Don Bosco",
            "visitante": "Nacional",
            "golesL": 1,
            "golesV": 0,
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
            "local": "Nacional",
            "visitante": "Imputables FC",
            "golesL": 1,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Don Bosco",
            "golesL": 5,
            "golesV": 4,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Newcauce",
            "visitante": "Bonus Track",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Cátedra FC",
            "visitante": "Talleres",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Flandria FC",
            "visitante": "Vial",
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
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Vial",
            "golesL": 1,
            "golesV": 2,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Talleres",
            "visitante": "Flandria FC",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Cátedra FC",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Don Bosco",
            "visitante": "Newcauce",
            "golesL": 2,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Defensa e Injusticia",
            "golesL": 3,
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
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Imputables FC",
            "golesL": 2,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Newcauce",
            "visitante": "Nacional",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Cátedra FC",
            "visitante": "Don Bosco",
            "golesL": 2,
            "golesV": 3,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Flandria FC",
            "visitante": "Bonus Track",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Talleres",
            "golesL": 2,
            "golesV": 0,
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
            "local": "Imputables FC",
            "visitante": "Talleres",
            "golesL": 0,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Vial",
            "golesL": 1,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Don Bosco",
            "visitante": "Flandria FC",
            "golesL": 3,
            "golesV": 1,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Cátedra FC",
            "golesL": 1,
            "golesV": 0,
            "estado": "finalizado",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Newcauce",
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
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Newcauce",
            "visitante": "Imputables FC",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Sábado 31/10",
            "hora": "10:00",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona única",
            "local": "Cátedra FC",
            "visitante": "Defensa e Injusticia",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Sábado 31/10",
            "hora": "11:20",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona única",
            "local": "Flandria FC",
            "visitante": "Nacional",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Domingo 01/11",
            "hora": "09:00",
            "cancha": "Cancha de Rugby"
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Don Bosco",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Sábado 31/10",
            "hora": "10:00",
            "cancha": "Cancha de Fútbol"
          },
          {
            "zona": "Zona única",
            "local": "Talleres",
            "visitante": "Bonus Track",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": "",
            "dia": "Domingo 01/11",
            "hora": "09:00",
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
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Bonus Track",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Don Bosco",
            "visitante": "Talleres",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Vial",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Flandria FC",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Newcauce",
            "visitante": "Cátedra FC",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          }
        ]
      },
      {
        "numero": 8,
        "nombre": "Fecha 8",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Cátedra FC",
            "visitante": "Imputables FC",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Flandria FC",
            "visitante": "Newcauce",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Vial",
            "visitante": "Defensa e Injusticia",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Talleres",
            "visitante": "Nacional",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Bonus Track",
            "visitante": "Don Bosco",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          }
        ]
      },
      {
        "numero": 9,
        "nombre": "Fecha 9",
        "disputada": false,
        "partidos": [
          {
            "zona": "Zona única",
            "local": "Imputables FC",
            "visitante": "Don Bosco",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Nacional",
            "visitante": "Bonus Track",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Defensa e Injusticia",
            "visitante": "Talleres",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Newcauce",
            "visitante": "Vial",
            "golesL": null,
            "golesV": null,
            "estado": "pendiente",
            "nota": ""
          },
          {
            "zona": "Zona única",
            "local": "Cátedra FC",
            "visitante": "Flandria FC",
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
          "equipo": "Vial",
          "pj": 5,
          "pg": 4,
          "pe": 1,
          "pp": 0,
          "gf": 9,
          "gc": 3,
          "dg": 6,
          "pts": 13,
          "zona": "A"
        },
        {
          "pos": 2,
          "equipo": "Newcauce",
          "pj": 5,
          "pg": 4,
          "pe": 0,
          "pp": 1,
          "gf": 12,
          "gc": 6,
          "dg": 6,
          "pts": 12,
          "zona": "A"
        },
        {
          "pos": 3,
          "equipo": "Don Bosco",
          "pj": 5,
          "pg": 3,
          "pe": 0,
          "pp": 2,
          "gf": 13,
          "gc": 11,
          "dg": 2,
          "pts": 9,
          "zona": "A"
        },
        {
          "pos": 4,
          "equipo": "Bonus Track",
          "pj": 5,
          "pg": 2,
          "pe": 2,
          "pp": 1,
          "gf": 6,
          "gc": 5,
          "dg": 1,
          "pts": 8,
          "zona": "A"
        },
        {
          "pos": 5,
          "equipo": "Imputables FC",
          "pj": 5,
          "pg": 2,
          "pe": 1,
          "pp": 2,
          "gf": 7,
          "gc": 6,
          "dg": 1,
          "pts": 7,
          "zona": "A"
        },
        {
          "pos": 6,
          "equipo": "Nacional",
          "pj": 5,
          "pg": 2,
          "pe": 0,
          "pp": 3,
          "gf": 6,
          "gc": 9,
          "dg": -3,
          "pts": 6,
          "zona": "A"
        },
        {
          "pos": 7,
          "equipo": "Flandria FC",
          "pj": 5,
          "pg": 1,
          "pe": 2,
          "pp": 2,
          "gf": 3,
          "gc": 6,
          "dg": -3,
          "pts": 5,
          "zona": "A"
        },
        {
          "pos": 8,
          "equipo": "Cátedra FC",
          "pj": 5,
          "pg": 1,
          "pe": 1,
          "pp": 3,
          "gf": 5,
          "gc": 7,
          "dg": -2,
          "pts": 4,
          "zona": "A"
        },
        {
          "pos": 9,
          "equipo": "Talleres",
          "pj": 5,
          "pg": 1,
          "pe": 1,
          "pp": 3,
          "gf": 3,
          "gc": 6,
          "dg": -3,
          "pts": 4,
          "zona": "A"
        },
        {
          "pos": 10,
          "equipo": "Defensa e Injusticia",
          "pj": 5,
          "pg": 1,
          "pe": 0,
          "pp": 4,
          "gf": 10,
          "gc": 15,
          "dg": -5,
          "pts": 3,
          "zona": "A"
        }
      ],
      "zonaB": []
    },
    "goleadores": [
      {
        "pos": 1,
        "jugador": "Fernandez Galindez, Simon",
        "equipo": "Vial",
        "goles": 6
      },
      {
        "pos": 2,
        "jugador": "Bustos, Santiago Gabriel",
        "equipo": "Don Bosco",
        "goles": 4
      },
      {
        "pos": 2,
        "jugador": "Garcia Diaz, Pablo Nicolas",
        "equipo": "Don Bosco",
        "goles": 4
      },
      {
        "pos": 2,
        "jugador": "Gonzalez Elias",
        "equipo": "Imputables FC",
        "goles": 4
      },
      {
        "pos": 5,
        "jugador": "Tejada, Santino",
        "equipo": "Defensa e Injusticia",
        "goles": 3
      },
      {
        "pos": 5,
        "jugador": "Vega, Jesus Brandon",
        "equipo": "Newcauce",
        "goles": 3
      },
      {
        "pos": 7,
        "jugador": "Palma, Martin",
        "equipo": "Bonus Track",
        "goles": 2
      },
      {
        "pos": 7,
        "jugador": "Robles, Juan Ignacio",
        "equipo": "Cátedra FC",
        "goles": 2
      },
      {
        "pos": 7,
        "jugador": "Rugna, Bruno",
        "equipo": "Defensa e Injusticia",
        "goles": 2
      },
      {
        "pos": 7,
        "jugador": "Rico Esteban",
        "equipo": "Don Bosco",
        "goles": 2
      }
    ]
  },
  "sanciones": [
    {
      "jugador": "Dallazuna Mariano",
      "equipo": "Nacional",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 26 inc. \"A\" y \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Adarvez Juan",
      "equipo": "Nacional",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 26 inc. \"A\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Alaniz Agustin",
      "equipo": "Talleres",
      "sancion": "Hasta 31/12/2026",
      "articulo": "Art. 24 inc. \"A\" y 25 inc. \"A\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Castilla Francisco",
      "equipo": "Talleres",
      "sancion": "Hasta 30/06/2027",
      "articulo": "Art. 22 inc. \"B\"",
      "motivo": "",
      "estado": "Vigente"
    },
    {
      "jugador": "Ferreyra Miguel",
      "equipo": "Newcauce",
      "sancion": "6 Partidos",
      "articulo": "Art. 22º inc. \"B\"",
      "motivo": "",
      "estado": "Cumplió 5 (Resta 1)"
    },
    {
      "jugador": "Carrizo Miqueas",
      "equipo": "Bonus Track",
      "sancion": "4 Partidos",
      "articulo": "Art. 22º inc. \"B\"",
      "motivo": "",
      "estado": "Cumplió 3 (Resta 1)"
    },
    {
      "jugador": "Marin Luciano",
      "equipo": "Cátedra FC",
      "sancion": "4 Partidos",
      "articulo": "Art. 22º inc. \"B\"",
      "motivo": "",
      "estado": "Cumplió 3 (Resta 1)"
    },
    {
      "jugador": "Greggio, Julian",
      "equipo": "Nacional",
      "sancion": "2 Partidos",
      "articulo": "Art. 26° inc. \"B\"",
      "motivo": "",
      "estado": "Cumplió 1 (Resta 1)"
    },
    {
      "jugador": "Pinto Valentin",
      "equipo": "Flandria FC",
      "sancion": "1 Partido",
      "articulo": "Art. 27º inc. \"D\"",
      "motivo": "",
      "estado": "Vigente (0/1)"
    },
    {
      "jugador": "Maldonado, Carlos",
      "equipo": "Bonus Track",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Mendoza Joaquin Nicolás",
      "equipo": "Don Bosco",
      "sancion": "3 Amarillas acumuladas",
      "articulo": "Art. 6° Régimen Amarillas",
      "motivo": "Acumulación de 3 tarjetas amarillas",
      "estado": "3 Amarillas"
    },
    {
      "jugador": "Bilella, Valentin",
      "equipo": "Flandria FC",
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
      "equipo": "Vial",
      "ptsAp": 16,
      "bonus": 2,
      "ptsCl": 13,
      "totalAp": 18,
      "coefAp": 3.0,
      "coefCl": 2.6,
      "total": 5.6
    },
    {
      "pos": 2,
      "equipo": "Imputables FC",
      "ptsAp": 9,
      "bonus": 3,
      "ptsCl": 7,
      "totalAp": 12,
      "coefAp": 2.0,
      "coefCl": 1.4,
      "total": 3.4
    },
    {
      "pos": 3,
      "equipo": "Bonus Track",
      "ptsAp": 7,
      "bonus": 1,
      "ptsCl": 8,
      "totalAp": 8,
      "coefAp": 1.33,
      "coefCl": 1.6,
      "total": 2.93
    },
    {
      "pos": 4,
      "equipo": "Cátedra FC",
      "ptsAp": 11,
      "bonus": 1,
      "ptsCl": 4,
      "totalAp": 12,
      "coefAp": 2.0,
      "coefCl": 0.8,
      "total": 2.8
    },
    {
      "pos": 5,
      "equipo": "Newcauce",
      "ptsAp": 0,
      "bonus": 0,
      "ptsCl": 12,
      "totalAp": 0,
      "coefAp": 0.0,
      "coefCl": 2.4,
      "total": 2.4
    },
    {
      "pos": 6,
      "equipo": "Defensa e Injusticia",
      "ptsAp": 8,
      "bonus": 0,
      "ptsCl": 3,
      "totalAp": 8,
      "coefAp": 1.33,
      "coefCl": 0.6,
      "total": 1.93
    },
    {
      "pos": 7,
      "equipo": "Don Bosco",
      "ptsAp": 0,
      "bonus": 0,
      "ptsCl": 9,
      "totalAp": 0,
      "coefAp": 0.0,
      "coefCl": 1.8,
      "total": 1.8
    },
    {
      "pos": 8,
      "equipo": "Talleres",
      "ptsAp": 5,
      "bonus": 0,
      "ptsCl": 4,
      "totalAp": 5,
      "coefAp": 0.83,
      "coefCl": 0.8,
      "total": 1.63
    },
    {
      "pos": 9,
      "equipo": "Nacional",
      "ptsAp": 1,
      "bonus": 0,
      "ptsCl": 6,
      "totalAp": 1,
      "coefAp": 0.17,
      "coefCl": 1.2,
      "total": 1.37
    },
    {
      "pos": 10,
      "equipo": "Flandria FC",
      "ptsAp": 0,
      "bonus": 0,
      "ptsCl": 5,
      "totalAp": 0,
      "coefAp": 0.0,
      "coefCl": 1.0,
      "total": 1.0
    }
  ]
};
  C.liga = Object.assign({}, A.liga, {
    categoria: 'Categoría C', subtitulo: 'Categoría C · Fútbol Universitario',
    torneoActual: 'Torneo Clausura 2026', ultimaFechaDisputada: 5, estado: 'Clausura en disputa · Fecha 5 completada'
  });
  C.reglamentos = A.reglamentos;
  C.reglamentosCompletos = Object.assign({}, A.reglamentosCompletos, { formaDisputa: [{"id": "disp-c-estructura", "numero": 1, "articulo": "Estructura", "titulo": "Composición de la Temporada 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría C", "texto": "La temporada 2026 de la Liga Universitaria de Fútbol – Categoría C está compuesta por el Torneo Apertura y el Torneo Clausura, además de una Tabla Anual y una Superfinal Anual para determinar el campeón absoluto de la temporada. Participan diez (10) equipos."}, {"id": "disp-c-clasificatoria", "numero": 2, "articulo": "Clausura", "titulo": "Fase Clasificatoria", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría C", "texto": "Se juega todos contra todos en una zona única para definir las clasificaciones a la siguiente fase."}, {"id": "disp-c-campeonato", "numero": 3, "articulo": "Clausura", "titulo": "Fase Campeonato", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría C", "texto": "Clasifican del 1° al 6° puesto. El 1° y el 2° pasan directo a Semifinales.\nCuartos de final, según el cuadro de la organización:\n• 3° vs 6°\n• 4° vs 5°"}, {"id": "disp-c-plata", "numero": 4, "articulo": "Clausura", "titulo": "Copa de Plata", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría C", "texto": "Juegan del 7° al 10° puesto de la fase clasificatoria.\nSemifinales, según el cuadro de la organización:\n• 7° vs 10°\n• 8° vs 9°"}, {"id": "disp-c-anual", "numero": 5, "articulo": "Tabla Anual", "titulo": "Tabla Anual 2026", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría C", "texto": "Suma solo los puntos de la fase clasificatoria del Apertura y del Clausura. No cuentan los partidos de Fase Campeonato ni de Copa de Plata.\nBonus al terminar cada torneo:\n• Campeón Fase Campeonato: +3\n• Subcampeón: +2\n• Tercer puesto: +1\n• Campeón Copa de Plata: +1"}, {"id": "disp-c-superfinal", "numero": 6, "articulo": "Superfinal", "titulo": "Superfinal Anual", "categoria": "formaDisputa", "seccion": "Forma de Disputa · Categoría C", "texto": "El Campeón Anual surge de una Superfinal entre el Campeón del Apertura y el Campeón del Clausura. Si ninguno es el primero de la Tabla Anual, juegan entre ellos una prefinal y el ganador juega la Final con el primero de la Tabla Anual. Si el mismo equipo gana Apertura y Clausura y además es primero en la Tabla Anual, es campeón anual directamente."}] });
  C.copaChallenger = A.copaChallenger;
  window.LIGA_DATA_C = C;
})();
