/**
 * CATEGORÍAS B y C — ESQUELETO (versión de prueba)
 * Todavía no hay informes de la Liga para estas categorías: se arma la estructura con
 * los equipos que figuran en el cuadro de la Copa Challenger y el resto queda vacío.
 * Cuando lleguen los informes se completan fechas, tablas, goleadores y sanciones.
 */
(function () {
  'use strict';
  const A = window.LIGA_DATA;
  if (!A) return;
  const CC = A.copaChallenger || {};
  const escudos = CC.escudos || {};

  const slug = n => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

  function equiposDe(cat) {
    const lista = [];
    Object.entries(CC.equipos || {}).forEach(([slot, nombre]) => {
      const llave = CC.llaves && CC.llaves[slot[0]];
      if (!llave) return;
      if (llave.zonas[Number(slot.slice(1)) - 1] !== cat) return;
      if (lista.some(e => e.nombre === nombre)) return;
      lista.push({
        id: slug(nombre),
        nombre,
        slug: slug(nombre),
        escudo: escudos[nombre] || '',
        zonaApertura: null,
        zonaClausura: null,
        color: '#64748B',
        instagram: '',
        instagramHandle: ''
      });
    });
    return lista.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  }

  function esqueleto(cat) {
    return {
      esqueleto: true,
      liga: Object.assign({}, A.liga, {
        categoria: cat,
        nombre: A.liga.nombre,
        torneoActual: 'Clausura',
        ultimaFechaDisputada: 0,
        estado: 'Esperando informes'
      }),
      equipos: equiposDe(cat),
      apertura: { campeon: null, subcampeon: null, tercero: null, cuarto: null, campeonPlata: null, subcampeonPlata: null, fechas: [], playoffs: null, tablas: {}, goleadores: [] },
      clausura: { enCurso: true, ultimaFechaDisputada: 0, fechas: [], tablas: {}, goleadores: [] },
      sanciones: [],
      reglamentos: A.reglamentos,
      reglamentosCompletos: A.reglamentosCompletos,
      copaChallenger: A.copaChallenger,
      tablaAnualFuente: '',
      tablaAnual: []
    };
  }

  window.LIGA_DATA_B = esqueleto('B');
  window.LIGA_DATA_C = esqueleto('C');
})();
