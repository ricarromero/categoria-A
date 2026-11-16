/* Modelo del cuadro de la Copa Challenger (copia de getChallengerModel de app.js) para la página /cargar */
window.ccModel = (function () {
  'use strict';
  function ccModel(CC) {
    if (!CC) return null;
    const all = [];
    const toMins = t => { const [h, m] = String(t).split(':').map(Number); return h * 60 + m; };
    function walk(n, side) {
      if (typeof n === 'number') return { leaf: side + n };
      const [r, t, c, kids] = n;
      const node = { r, t, c, side, date: CC.llaves[side].fechas[r], kids: kids.map(k => walk(k, side)) };
      all.push(node);
      return node;
    }
    const roots = { L: walk(CC.cuadro.L, 'L'), R: walk(CC.cuadro.R, 'R') };
    all.sort((a, b) => a.r - b.r || (a.date || '').localeCompare(b.date || '') ||
      (a.t ? toMins(a.t) : 0) - (b.t ? toMins(b.t) : 0) || a.side.localeCompare(b.side) || (a.c === 'R' ? -1 : 1));
    const final = { r: 5, side: null, date: null, t: null, c: null, kids: [roots.L, roots.R] };
    all.push(final);
    all.forEach((m, i) => { m.no = i + 1; });

    const zonaDe = slot => CC.llaves[slot[0]].zonas[Number(slot.slice(1)) - 1];
    const nombreDe = slot => CC.equipos[slot] || null;
    function participante(k) {
      if (k.leaf) return { slot: k.leaf, nombre: nombreDe(k.leaf), cat: zonaDe(k.leaf) };
      const w = ganador(k);
      return w ? { slot: w, nombre: nombreDe(w), cat: zonaDe(w), de: k } : { nombre: null, de: k };
    }
    function ganador(m) {
      const res = CC.resultados['P' + m.no];
      if (!res || res.a == null || res.b == null) return null;
      const [pa, pb] = m.kids.map(participante);
      if (!pa.slot || !pb.slot) return null;
      if (res.a !== res.b) return res.a > res.b ? pa.slot : pb.slot;
      if (res.pa == null || res.pb == null || res.pa === res.pb) return null;
      return res.pa > res.pb ? pa.slot : pb.slot;
    }
    all.forEach(m => {
      m.res = CC.resultados['P' + m.no] || null;
      m.a = participante(m.kids[0]);
      m.b = participante(m.kids[1]);
      m.ganador = ganador(m);
    });
    return { all, roots, final, CC };
  }

  return ccModel;
})();
