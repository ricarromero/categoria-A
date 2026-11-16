/**
 * Aplica los resultados provisorios cargados desde /cargar (window.LIGA_PARCIALES) sobre el fixture.
 * Solo toca partidos de fechas que todavía no tienen informe oficial (o partidos pendientes):
 * las tablas oficiales no cambian. Cuando llega el informe, el dato oficial manda.
 */
(function () {
  'use strict';
  const P = (window.LIGA_PARCIALES && window.LIGA_PARCIALES.resultados) || {};
  const DATOS = { A: window.LIGA_DATA, B: window.LIGA_DATA_B, C: window.LIGA_DATA_C, F: window.LIGA_DATA_F };
  Object.entries(P).sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true })).forEach(([clave, r]) => {
    const [cat, torneo, fecha, local, visitante] = clave.split('|');
    const D = DATOS[cat];
    if (torneo === 'challenger') { // Copa Challenger: resultados por número de partido (P34…)
      const CC = D && D.copaChallenger;
      if (!CC) return;
      CC.resultados = CC.resultados || {};
      const k = 'P' + fecha, of = CC.resultados[k];
      if (of && !of.provisorio) return; // ya hay resultado oficial
      const x = { a: r.golesL, b: r.golesV, provisorio: true, local, visitante };
      if (r.penalesL !== undefined) { x.pa = r.penalesL; x.pb = r.penalesV; }
      CC.resultados[k] = x;
      return;
    }
    const f = D && D[torneo] && (D[torneo].fechas || []).find(x => String(x.numero) === fecha);
    if (!f) return;
    const p = (f.partidos || []).find(x => x.local === local && x.visitante === visitante);
    if (!p || p.estado === 'libre') return;
    if (f.disputada && p.estado !== 'pendiente') return; // ya hay informe oficial
    p.golesL = r.golesL; p.golesV = r.golesV; p.estado = 'finalizado'; p.provisorio = true;
    if (r.penalesL !== undefined) { p.penalesL = r.penalesL; p.penalesV = r.penalesV; }
    else { delete p.penalesL; delete p.penalesV; }
    p.nota = r.nota || (r.penalesL !== undefined ? `Penales: ${r.penalesL} - ${r.penalesV}` : '');
  });
})();
