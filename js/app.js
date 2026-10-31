/**
 * LIGA UNIVERSITARIA SANJUANINA DE FÚTBOL — CATEGORÍA A 2026
 * Controlador Principal de la Aplicación
 * Equipos Oficiales: Minaster City, Otro Equipo, Constructores, Jägermeister,
 * Antorcha, Maverick, Aston, Calise, Eclipse, La Máquina, De Primera, Red Bull,
 * Celtic, Nottingham, C-Lesión.
 */

(function () {
  'use strict';

  // Categoría activa (A, B o C): se elige con ?cat= o se recuerda la última elegida
  const CATS = ['A', 'B', 'C'];
  // Categorías abiertas al público. Las demás muestran "Próximamente" salvo en modo prueba (?prueba=1).
  const CATS_ABIERTAS = ['A'];
  const qs = new URLSearchParams(location.search);
  let PRUEBA = false;
  try {
    if (qs.get('prueba') === '1') localStorage.setItem('liga_prueba', '1');
    if (qs.get('prueba') === '0') localStorage.removeItem('liga_prueba');
    PRUEBA = localStorage.getItem('liga_prueba') === '1';
  } catch (e) { PRUEBA = qs.get('prueba') === '1'; }
  // En las versiones de prueba de Vercel (dirección con "-git-") todas las categorías quedan abiertas
  if (/-git-|localhost|127\.0\.0\.1/.test(location.hostname) && qs.get('prueba') !== '0') PRUEBA = true;
  const catDisponible = c => CATS_ABIERTAS.includes(c) || PRUEBA;
  // Sin ?cat= se entra a la portada general (Inicio), fuera de cualquier categoría
  let CAT = (qs.get('cat') || '').toUpperCase();
  const INICIO = !CATS.includes(CAT);
  if (INICIO) CAT = 'A';
  else if (!catDisponible(CAT) || (CAT !== 'A' && !window['LIGA_DATA_' + CAT])) CAT = 'A';
  document.documentElement.dataset.cat = INICIO ? 'INICIO' : CAT;

  // Verificar disponibilidad de los datos
  const DATA = CAT === 'A' ? window.LIGA_DATA : window['LIGA_DATA_' + CAT];
  if (!DATA) {
    console.error("No se encontraron los datos oficiales en window.LIGA_DATA");
    document.body.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #ffb627; font-family: sans-serif; background: #07130b; min-height: 100vh;">
        <h2>Error al inicializar la aplicación</h2>
        <p>No se pudo cargar el archivo de datos oficiales (js/data.js).</p>
      </div>
    `;
    return;
  }

  // Estado reactivo de la aplicación
  const state = {
    currentTab: 'posiciones',
    posTorneo: 'clausura', // 'clausura' | 'apertura' | 'anual'
    posZona: 'A',          // 'A' | 'B'
    fixtureTorneo: 'clausura', // 'clausura' | 'apertura'
    fixtureFecha: (DATA.clausura && DATA.clausura.ultimaFechaDisputada) ? DATA.clausura.ultimaFechaDisputada : 3,
    goleadoresTorneo: 'clausura',
    statsTorneo: 'clausura', // 'clausura' | 'apertura' | 'anual'
    statsZona: 'todas',      // 'todas' | 'A' | 'B'
    statsSortCol: 'pts',
    statsSortAsc: false,
    sancionesEstado: 'todas',
    sancionesQuery: '',
    equiposQuery: '',
    reglamentoSeccion: 'todas',
    reglamentoQuery: '',
    reglamentoExpandedAll: false,
    activeTeamId: null
  };

  // Helper para selectores seguros
  const $ = (selector, parent = document) => (parent && parent.querySelector ? parent.querySelector(selector) : null);
  const $$ = (selector, parent = document) => (parent && parent.querySelectorAll ? Array.from(parent.querySelectorAll(selector)) : []);

  // Helper para escapar strings HTML
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Mapa rápido de equipos por id y por nombre
  const teamsById = {};
  const teamsByName = {};

  DATA.equipos.forEach(eq => {
    teamsById[eq.id] = eq;
    teamsByName[eq.nombre.toLowerCase()] = eq;
    if (eq.shortName) teamsByName[eq.shortName.toLowerCase()] = eq;
    if (eq.slug) teamsByName[eq.slug.toLowerCase()] = eq;
  });

  // Equipos históricos de referencia del Apertura
  if (DATA.equiposAperturaHistoricos) {
    DATA.equiposAperturaHistoricos.forEach(h => {
      teamsByName[h.nombre.toLowerCase()] = {
        id: h.id,
        nombre: h.nombre,
        shortName: h.nombre.slice(0, 3).toUpperCase(),
        escudo: "",
        color: "#555"
      };
    });
  }

  // Escudo genérico (para equipos sin escudo cargado): escudo liso con iniciales
  const GENERIC_CREST_COLORS = ['#24496B', '#397653', '#7C3AED', '#B45309', '#0E7490', '#9F1239', '#4D7C0F', '#475569'];
  const genericCrestCache = {};
  function genericCrestUri(name) {
    const n = String(name || 'Equipo').trim();
    if (genericCrestCache[n]) return genericCrestCache[n];
    let h = 0;
    for (const ch of n) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const color = GENERIC_CREST_COLORS[h % GENERIC_CREST_COLORS.length];
    const words = n.replace(/[^A-Za-zÁÉÍÓÚÑÜáéíóúñü0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
    const initials = (words.length > 1 ? words[0][0] + words[1][0] : n.slice(0, 2)).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72"><path d="M32 2 L60 10 V34 C60 52 47 64 32 70 C17 64 4 52 4 34 V10 Z" fill="${color}" stroke="#FFFFFF" stroke-width="3"/><path d="M32 8 L54 14 V34 C54 48 44 58 32 63 C20 58 10 48 10 34 V14 Z" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/><text x="32" y="44" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="22" fill="#FFFFFF">${initials}</text></svg>`;
    return (genericCrestCache[n] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg));
  }

  const FMT = DATA.formato || null;
  const ZONA_UNICA = !!(FMT && FMT.zonaUnica);

  // Escudos de todas las categorías (para ver equipos de otras categorías, p. ej. en la Copa Challenger)
  const ESCUDOS_GLOBAL = {};
  [window.LIGA_DATA, window.LIGA_DATA_B, window.LIGA_DATA_C].forEach(d => {
    ((d && d.equipos) || []).forEach(eq => { if (eq.escudo) ESCUDOS_GLOBAL[eq.nombre.toLowerCase()] = eq.escudo; });
  });
  function escudoGlobal(nombre) {
    const n = String(nombre || '').trim();
    return ESCUDOS_GLOBAL[n.toLowerCase()] || ((DATA.copaChallenger && DATA.copaChallenger.escudos) || {})[n] || '';
  }

  function posAperturaDe(nombre) {
    const r = ((DATA.apertura.tablas && DATA.apertura.tablas.zonaA) || []).find(x => x.equipo.toLowerCase() === String(nombre).toLowerCase());
    return r ? r.pos : null;
  }
  function posicionesTxt(eq) {
    const c = ((DATA.clausura.tablas && DATA.clausura.tablas.zonaA) || []).find(x => x.equipo.toLowerCase() === eq.nombre.toLowerCase());
    const a = posAperturaDe(eq.nombre);
    return `Clausura: ${c ? c.pos + '°' : '—'} · Apertura: ${a ? a + '°' : 'no jugó'}`;
  }

  function getTeam(nameOrId) {
    if (!nameOrId) return null;
    const key = String(nameOrId).trim().toLowerCase();
    return teamsById[key] || teamsByName[key] || {
      id: key.replace(/[^a-z0-9]/g, '_'),
      nombre: nameOrId,
      shortName: nameOrId.slice(0, 3).toUpperCase(),
      escudo: escudoGlobal(nameOrId) || genericCrestUri(nameOrId),
      generic: true,
      color: "#4895ef"
    };
  }

  function renderCrestImg(team, className = "table-crest") {
    if (!team) return "";
    const crestPath = team.escudo || (teamsByName[team.nombre?.toLowerCase()]?.escudo) || genericCrestUri(team.nombre);
    const fallback = genericCrestUri(team.nombre).replace(/'/g, '%27');
    return `<img src="${crestPath}" alt="${escapeHtml ? escapeHtml(team.nombre || '') : team.nombre}" class="${className}" loading="lazy" onerror="this.onerror=null; this.src='${fallback}';">`;
  }

  // =========================================================================
  // MARCADOR HERO (HERO BOARD)
  // =========================================================================
  function renderHeroBoard() {
    const board = $('#heroBoard');
    if (!board) return;

    // 1. Líder Clausura Zona A
    const liderClausuraA = DATA.clausura.tablas.zonaA[0];
    const teamLiderA = getTeam(liderClausuraA?.equipo);

    // 2. Líder Clausura Zona B (en zona única: 2° del Clausura)
    const liderClausuraB = ZONA_UNICA ? DATA.clausura.tablas.zonaA[1] : DATA.clausura.tablas.zonaB[0];
    const teamLiderB = getTeam(liderClausuraB?.equipo);

    // 3. Campeón Apertura
    const campApertura = DATA.apertura.campeon;
    const teamCampAp = getTeam(campApertura);

    // 4. Goleador Clausura
    const topScorerClausura = (DATA.clausura.goleadores || [])[0];
    const teamScorer = getTeam(topScorerClausura?.equipo);

    board.innerHTML = `
      <div class="board-tile" data-action="go-pos" data-torneo="clausura" data-zona="A">
        <span class="tile-label"><em class="tl-long">${ZONA_UNICA ? 'Líder Clausura' : 'Líder Clausura · Zona A'}</em><em class="tl-short">${ZONA_UNICA ? 'Líder' : 'Líder Zona A'}</em> <span>${liderClausuraA?.pts || 0} PTS</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamLiderA, "tile-crest")}
          <span class="tile-name">${teamLiderA?.nombre || "—"}</span>
        </div>
        <span class="tile-desc">${liderClausuraA?.pj || 0} PJ | DG: +${liderClausuraA?.dg || 0}</span>
      </div>

      <div class="board-tile" data-action="go-pos" data-torneo="clausura" data-zona="${ZONA_UNICA ? 'A' : 'B'}">
        <span class="tile-label"><em class="tl-long">${ZONA_UNICA ? 'Escolta Clausura · 2°' : 'Líder Clausura · Zona B'}</em><em class="tl-short">${ZONA_UNICA ? '2° Clausura' : 'Líder Zona B'}</em> <span>${liderClausuraB?.pts || 0} PTS</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamLiderB, "tile-crest")}
          <span class="tile-name">${teamLiderB?.nombre || "—"}</span>
        </div>
        <span class="tile-desc">${liderClausuraB?.pj || 0} PJ | DG: +${liderClausuraB?.dg || 0}</span>
      </div>

      <div class="board-tile" data-action="go-apertura">
        <span class="tile-label"><em class="tl-long">Campeón Apertura 2026</em><em class="tl-short">Campeón Apertura</em> <span>OFICIAL</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamCampAp, "tile-crest")}
          <span class="tile-name">${teamCampAp?.nombre || "—"}</span>
        </div>
        <span class="tile-desc">Final Apertura: Campeón Campeonato</span>
      </div>

      <div class="board-tile" data-action="go-goleadores">
        <span class="tile-label"><em class="tl-long">Goleador Clausura</em><em class="tl-short">Goleador</em> <span>${topScorerClausura?.goles || 0} GOLES</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamScorer, "tile-crest")}
          <span class="tile-name">${(topScorerClausura?.jugador || "—").split(',')[0]}</span>
        </div>
        <span class="tile-desc">${topScorerClausura?.equipo || "—"}</span>
      </div>
    `;

    $$('.board-tile', board).forEach(tile => {
      tile.addEventListener('click', () => {
        const action = tile.dataset.action;
        if (action === 'go-pos') {
          state.posTorneo = tile.dataset.torneo;
          state.posZona = tile.dataset.zona;
          switchTab('posiciones');
        } else if (action === 'go-apertura') {
          state.posTorneo = 'apertura';
          switchTab('posiciones');
        } else if (action === 'go-goleadores') {
          switchTab('goleadores');
        }
      });
    });
  }

  // =========================================================================
  // SECCIÓN A: POSICIONES (CLAUSURA, APERTURA, TABLA ANUAL CON SANCIONES Y BONUS)
  // =========================================================================
  function renderPosiciones() {
    const container = $('#view-posiciones');
    if (!container) return;

    let tableRowsHtml = "";
    let legendHtml = "";
    let noticeHtml = "";

    if (state.posTorneo === 'anual') {
      // TABLA ANUAL 2026 — formato de la tabla enviada por la Liga
      const fmt2 = n => Number(n).toFixed(2).replace('.', ',');
      noticeHtml = `
        <div class="banner-alert">
          <div>
            <b>Tabla Anual 2026 — Categoría ${CAT}</b>
            Total = Coeficiente Apertura + Coeficiente Clausura. El total del Apertura incluye los bonus por mérito (Campeón +3, Subcampeón +2, 3° puesto +1, Campeón Copa de Plata +1). ${DATA.tablaAnualFuente ? DATA.tablaAnualFuente + '.' : ''}
          </div>
        </div>
      `;

      tableRowsHtml = DATA.tablaAnual.map(row => {
        const team = getTeam(row.equipo);
        const bonusTag = row.bonus > 0 ? `<span class="badge-bonus-pts">+${row.bonus} bonus</span>` : "";

        return `
          <tr>
            <td class="col-pos">${row.pos}</td>
            <td class="col-team">
              <div class="team-cell" data-team="${team?.id || ''}">
                ${renderCrestImg(team)}
                <span class="team-name">${row.equipo}</span>
                ${bonusTag}
              </div>
            </td>
            <td>${row.ptsAp}</td>
            <td>${row.bonus}</td>
            <td style="font-weight:700;">${row.totalAp}</td>
            <td>${fmt2(row.coefAp)}</td>
            <td>${row.ptsCl}</td>
            <td>${fmt2(row.coefCl)}</td>
            <td class="col-highlight">${fmt2(row.total)}</td>
          </tr>
        `;
      }).join('');

      legendHtml = `
        <div class="table-legend">
          <div class="legend-item"><b>Pts AP</b>: puntos de fase clasificatoria del Apertura · <b>Total AP</b>: Pts AP + bonus</div>
          <div class="legend-item"><b>Coef.</b>: coeficiente de rendimiento de cada torneo · <b>Pts CL</b>: puntos del Clausura</div>
          <div class="legend-item"><span class="badge-bonus-pts" style="display:inline-block;">+X bonus</span> Puntos otorgados por mérito en el Apertura</div>
        </div>
      `;
    } else {
      // APERTURA O CLAUSURA (POR ZONA)
      const fuente = state.posTorneo === 'clausura' ? DATA.clausura.tablas : DATA.apertura.tablas;
      if (ZONA_UNICA) state.posZona = 'A';
      const tablaZona = (state.posZona === 'A' ? fuente.zonaA : fuente.zonaB) || [];
      const nCamp = (FMT && FMT[state.posTorneo] && FMT[state.posTorneo].campeonato) || 4;
      const zonaTxt = ZONA_UNICA ? 'Zona única' : `Zona ${state.posZona}`;

      if (state.posTorneo === 'clausura') {
        noticeHtml = `
          <div class="banner-alert">
            <div>
              <b>Torneo Clausura 2026 — ${zonaTxt} en disputa</b>
              Tabla oficial consolidada hasta la Fecha ${DATA.clausura.ultimaFechaDisputada || 3}. ${(FMT && FMT.clausura && FMT.clausura.texto) || 'Clasifican del 1° al 4° a la Fase Campeonato y del 5° al 8° a la Copa de Plata.'}
            </div>
          </div>
        `;
      } else {
        noticeHtml = `
          <div class="banner-alert">
            <div>
              <b>Torneo Apertura 2026 — Historial Oficial Fase Clasificatoria (${zonaTxt})</b>
              Fase regular culminada. ${FMT && FMT.apertura && FMT.apertura.texto ? FMT.apertura.texto + ' ' : ''}El Torneo fue coronado por <b>${DATA.apertura.campeon || '—'}</b> (Campeón Campeonato) y <b>${DATA.apertura.campeonPlata || '—'}</b> (Campeón Copa de Plata).
            </div>
          </div>
        `;
      }

      tableRowsHtml = tablaZona.map(row => {
        const team = getTeam(row.equipo);
        const dgClass = row.dg > 0 ? "positive" : row.dg < 0 ? "negative" : "";
        const dgSign = row.dg > 0 ? `+${row.dg}` : `${row.dg}`;
        const qualifyClass = (row.pos <= nCamp ? "row-qualify-campeonato" : "row-qualify-plata") + (row.pos === nCamp ? " row-qualify-cut" : "");

        let sancionBadge = "";
        if (row.sancion && row.sancion < 0) {
          sancionBadge = `<span class="badge-sancion-pts">${row.sancion} sanción</span>`;
        } else if (state.posTorneo === 'apertura' && Array.isArray(DATA.deducciones)) {
          const ded = DATA.deducciones.find(d => d[0].toLowerCase() === row.equipo.toLowerCase() || (team && d[0].toLowerCase() === team.nombre.toLowerCase()));
          if (ded && ded[1] > 0) {
            sancionBadge = `<span class="badge-sancion-pts">-${ded[1]} sanción</span>`;
          }
        }

        return `
          <tr class="${qualifyClass}">
            <td class="col-pos">${row.pos}</td>
            <td class="col-team">
              <div class="team-cell" data-team="${team?.id || ''}">
                ${renderCrestImg(team)}
                <span class="team-name">${row.equipo}</span>
                ${sancionBadge}
              </div>
            </td>
            <td>${row.pj}</td>
            <td>${row.pg}</td>
            <td>${row.pe}</td>
            <td>${row.pp}</td>
            <td>${row.gf}</td>
            <td>${row.gc}</td>
            <td class="col-dg ${dgClass}">${dgSign}</td>
            <td class="col-highlight">${row.pts}</td>
          </tr>
        `;
      }).join('');

      legendHtml = `
        <div class="table-legend">
          <div class="legend-item"><span class="legend-marker legend-campeonato"></span> Puestos 1° a ${nCamp}°: Clasificación a la Fase Campeonato${ZONA_UNICA && state.posTorneo === 'clausura' ? ' (1° y 2° directo a semifinales)' : ''}</div>
          <div class="legend-item"><span class="legend-marker legend-plata"></span> Puestos ${nCamp + 1}° en adelante: Clasificación a Copa de Plata</div>
          ${state.posTorneo === 'apertura' ? '<div class="legend-item"><span class="badge-sancion-pts" style="display:inline-block;">-X sanción</span> Quita oficial de puntos aplicada por Tribunal de Penas</div>' : ''}
          ${state.posTorneo === 'clausura' ? '<button class="pill-btn legend-cta" data-goto="cruces" style="margin-left:auto;">Ver cruces si el Clausura terminara hoy →</button>' : ''}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <h2>Posiciones</h2>
          <span class="section-badge">${state.posTorneo.toUpperCase()} 2026</span>
        </div>
        <div class="pill-group" role="tablist" aria-label="Seleccionar Torneo">
          <button class="pill-btn ${state.posTorneo === 'clausura' ? 'active' : ''}" data-torneo="clausura">Clausura</button>
          <button class="pill-btn ${state.posTorneo === 'apertura' ? 'active' : ''}" data-torneo="apertura">Apertura</button>
          <button class="pill-btn ${state.posTorneo === 'anual' ? 'active' : ''}" data-torneo="anual">Tabla Anual</button>
        </div>
      </div>

      ${state.posTorneo !== 'anual' && !ZONA_UNICA ? `
        <div style="margin-bottom: 16px; display: flex; gap: 8px;">
          <div class="pill-group" role="tablist" aria-label="Seleccionar Zona">
            <button class="pill-btn ${state.posZona === 'A' ? 'active' : ''}" data-zona="A">Zona A</button>
            <button class="pill-btn ${state.posZona === 'B' ? 'active' : ''}" data-zona="B">Zona B</button>
          </div>
        </div>
      ` : ''}

      ${noticeHtml}

      <div class="table-responsive">
        <table class="league-table">
          <thead>
            <tr>
              <th>#</th>
              <th style="text-align: left;">Equipo</th>
              ${state.posTorneo === 'anual' ? `
              <th title="Puntos fase clasificatoria Apertura">Pts AP</th>
              <th title="Bonus Apertura">Bonus</th>
              <th title="Total Apertura">Total AP</th>
              <th title="Coeficiente Apertura">Coef. AP</th>
              <th title="Puntos fase clasificatoria Clausura">Pts CL</th>
              <th title="Coeficiente Clausura">Coef. CL</th>
              <th class="col-highlight">Total</th>` : `
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th class="col-highlight">Pts</th>`}
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>

      ${legendHtml}
    `;

    // Eventos
    $$('button[data-torneo]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.posTorneo = btn.dataset.torneo;
        renderPosiciones();
      });
    });

    $$('button[data-goto="cruces"]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.fixtureTorneo = 'clausura';
        state.fixtureFecha = 'playoffs';
        switchTab('fixture');
      });
    });

    $$('button[data-zona]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.posZona = btn.dataset.zona;
        renderPosiciones();
      });
    });

    $$('.team-cell', container).forEach(cell => {
      cell.addEventListener('click', (e) => {
        e.stopPropagation();
        const teamId = cell.dataset.team;
        if (teamId) openTeamModal(teamId);
      });
    });
  }

  // =========================================================================
  // SECCIÓN B: FIXTURE
  // =========================================================================
  function renderFixture() {
    const container = $('#view-fixture');
    if (!container) return;

    const esClausura = state.fixtureTorneo === 'clausura';
    const fechasList = esClausura ? DATA.clausura.fechas : DATA.apertura.fechas;

    const verPlayoffs = state.fixtureFecha === 'playoffs';
    let currentFechaObj = verPlayoffs ? null : fechasList.find(f => f.numero === Number(state.fixtureFecha));
    if (!currentFechaObj && !verPlayoffs) {
      currentFechaObj = fechasList[0];
      state.fixtureFecha = currentFechaObj?.numero || 1;
    }

    const playoffsPill = `<button class="fecha-pill fecha-pill-playoffs ${verPlayoffs ? 'active' : ''}" data-fecha="playoffs">${esClausura ? 'Cruces si terminara hoy' : 'Playoffs'}</button>`;
    const fechaPillsHtml = playoffsPill + fechasList.map(f => {
      const activeClass = f.numero === Number(state.fixtureFecha) ? 'active' : '';
      const subTag = esClausura && f.numero > (DATA.clausura.ultimaFechaDisputada || 3) ? "· Próx" : "";
      return `<button class="fecha-pill ${activeClass}" data-fecha="${f.numero}">Fecha ${f.numero} ${subTag}</button>`;
    }).join('');

    const matchesHtml = (currentFechaObj?.partidos || []).map(m => {
      const esLibre = m.estado === 'libre';
      const esFinalizado = m.estado === 'finalizado';
      const libreLocal = /^libre$/i.test(m.local);
      const libreVisit = /^libre$/i.test(m.visitante);
      const homeTeam = libreLocal ? null : getTeam(m.local);
      const awayTeam = libreVisit ? null : getTeam(m.visitante);
      const libreCrest = `<span class="crest-libre" aria-hidden="true">—</span>`;

      let scoreHtml = "";
      let statusBadge = "";
      let cardState = "is-pendiente";

      if (esLibre) {
        scoreHtml = `<div class="match-score-box score-vs">LIBRE</div>`;
        statusBadge = `<span class="match-status-badge status-libre">Fecha libre</span>`;
        cardState = "is-libre";
      } else if (esFinalizado) {
        const wl = m.golesL > m.golesV ? 'score-winner' : '';
        const wv = m.golesV > m.golesL ? 'score-winner' : '';
        scoreHtml = `<div class="match-score-box"><span class="${wl}">${m.golesL}</span> - <span class="${wv}">${m.golesV}</span></div>`;
        statusBadge = `<span class="match-status-badge status-finalizado">Finalizado</span>`;
        cardState = "is-finalizado";
      } else {
        scoreHtml = `<div class="match-score-box score-vs">vs</div>`;
        statusBadge = `<span class="match-status-badge status-pendiente">A disputar</span>`;
      }

      return `
        <div class="match-card ${cardState}">
          <div class="match-header">
            <span class="match-zone-badge">${m.zona || "Categoría A"}</span>
            ${statusBadge}
          </div>
          <div class="match-teams-row">
            <div class="match-team home" data-team="${homeTeam?.id || ''}">
              ${libreLocal ? libreCrest : renderCrestImg(homeTeam, "match-crest")}
              <span class="match-team-name">${libreLocal ? 'Libre' : m.local}</span>
            </div>
            ${scoreHtml}
            <div class="match-team away" data-team="${awayTeam?.id || ''}">
              ${libreVisit ? libreCrest : renderCrestImg(awayTeam, "match-crest")}
              <span class="match-team-name">${libreVisit ? 'Libre' : m.visitante}</span>
            </div>
          </div>
          ${m.hora && !esFinalizado ? `<div class="match-schedule"><span>${m.dia || ''}</span><b>${m.hora} hs</b><span>${m.cancha || ''}</span></div>` : ''}
          ${m.nota && !esLibre ? `<div class="match-footer-note">${m.nota}</div>` : ''}
        </div>
      `;
    }).join('');

    const contentHtml = verPlayoffs
      ? (esClausura ? renderProyeccionPlayoffs() : renderBracketApertura())
      : `<div class="matches-grid">
          ${matchesHtml.length > 0 ? matchesHtml : `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">No hay partidos registrados para esta fecha.</div>`}
        </div>`;

    container.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <h2>Fixture & Resultados</h2>
          <span class="section-badge">${state.fixtureTorneo.toUpperCase()} 2026</span>
        </div>
        <div class="pill-group" role="tablist" aria-label="Seleccionar Torneo Fixture">
          <button class="pill-btn ${esClausura ? 'active' : ''}" data-fixture-torneo="clausura">Clausura</button>
          <button class="pill-btn ${!esClausura ? 'active' : ''}" data-fixture-torneo="apertura">Apertura</button>
        </div>
      </div>

      <div class="fixture-fechas-nav">
        ${fechaPillsHtml}
      </div>

      ${!verPlayoffs && currentFechaObj?.dia ? `<div class="fecha-dia-banner"><b>${currentFechaObj.nombre}</b> · ${currentFechaObj.dia} · El Palomar</div>` : ''}
      ${contentHtml}
    `;

    $$('button[data-fixture-torneo]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.fixtureTorneo = btn.dataset.fixtureTorneo;
        state.fixtureFecha = state.fixtureTorneo === 'clausura' ? (DATA.clausura.ultimaFechaDisputada || 3) : 1;
        renderFixture();
      });
    });

    $$('button[data-fecha]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.fixtureFecha = btn.dataset.fecha === 'playoffs' ? 'playoffs' : Number(btn.dataset.fecha);
        renderFixture();
      });
    });

    $$('.match-team, .bk-team[data-team]', container).forEach(el => {
      el.addEventListener('click', () => {
        const teamId = el.dataset.team;
        if (teamId && teamId !== 'libre') openTeamModal(teamId);
      });
    });
  }

  // =========================================================================
  // CUADROS DE PLAYOFF (APERTURA JUGADO · CLAUSURA PROYECTADO)
  // =========================================================================
  function bkTeamHtml(name, opts = {}) {
    if (!name) return `<div class="bk-team tbd"><span class="bk-name">${opts.placeholder || 'A definir'}</span></div>`;
    const team = getTeam(name);
    const seed = opts.seed ? `<span class="bk-seed">${opts.seed}</span>` : '';
    const score = opts.score !== undefined ? `<span class="bk-score">${opts.score}</span>` : '';
    const pen = opts.pen !== undefined ? `<span class="bk-pen">(${opts.pen})</span>` : '';
    const cat = opts.cat && !opts.catBar ? `<span class="cat-chip cat-${opts.cat}" title="Categoría ${opts.cat}">${opts.cat}</span>` : '';
    const bar = opts.cat && opts.catBar ? `catbar catbar-${opts.cat}` : '';
    return `<div class="bk-team ${bar} ${opts.win ? 'win' : ''} ${opts.lose ? 'lose' : ''}" ${bar ? `title="Categoría ${opts.cat}"` : ''} data-team="${teamsByName[name.toLowerCase()] ? team.id : ''}">
      ${seed}${renderCrestImg(team)}<span class="bk-name">${name}</span>${cat}${pen}${score}</div>`;
  }

  function bkPlayedHtml(p, label, extraClass = '') {
    if (!p) return '';
    const hasPen = p.penalesL !== undefined;
    const sinRes = p.golesL == null || p.golesV == null;
    return `<div class="bk-match ${extraClass}">
      <div class="bk-code"><span>${label}</span><span>${sinRes ? 'Resultado no informado' : (hasPen ? 'Penales' : 'Final')}</span></div>
      ${bkTeamHtml(p.local, { score: sinRes ? undefined : p.golesL, pen: hasPen ? p.penalesL : undefined, win: p.ganador === p.local })}
      ${bkTeamHtml(p.visitante, { score: sinRes ? undefined : p.golesV, pen: hasPen ? p.penalesV : undefined, win: p.ganador === p.visitante })}
    </div>`;
  }

  function renderBracketApertura() {
    const po = DATA.apertura.playoffs;
    if (!po) return '';
    const camp = po.faseCampeonato || {};
    const plata = po.copaPlata || {};
    // equipo que entró directo a semifinales de Plata (no jugó cuartos)
    const enCuartosPlata = new Set((plata.cuartos || []).flatMap(p => [p.local, p.visitante]));
    const byePlata = (plata.cuartos || []).length ? (plata.semifinales || []).flatMap(p => [p.local, p.visitante]).find(t => !enCuartosPlata.has(t)) : null;

    return `
      <div class="bracket-wrap">
        <div class="bracket-block">
          <div class="bracket-title"><h3>Fase Campeonato</h3><span class="bracket-tag oro">Apertura 2026 · Jugado</span></div>
          <div class="bracket-scroll"><div class="bracket">
            ${(camp.cuartos || []).length ? `<div class="bracket-col"><div class="bracket-col-title">Cuartos de final</div><div class="bk-stack">
              ${camp.cuartos.map(p => bkPlayedHtml(p, p.codigo)).join('')}</div></div>` : ''}
            <div class="bracket-col"><div class="bracket-col-title">Semifinales</div><div class="bk-stack">
              ${(camp.semifinales || []).map(p => bkPlayedHtml(p, p.codigo)).join('')}</div></div>
            <div class="bracket-col"><div class="bracket-col-title">Final</div><div class="bk-stack">
              ${bkPlayedHtml(camp.final, 'Gran final', 'final')}
              ${camp.final ? `<div class="bk-champion">★ ${camp.final.ganador} campeón</div>` : ''}
              ${camp.tercerPuesto ? `<div class="bracket-col-title" style="margin-top:14px;">3° puesto</div>${bkPlayedHtml(camp.tercerPuesto, '3° puesto')}` : ''}
            </div></div>
          </div></div>
        </div>

        <div class="bracket-block">
          <div class="bracket-title"><h3>Copa de Plata</h3><span class="bracket-tag plata">Apertura 2026 · Jugado</span></div>
          <div class="bracket-scroll"><div class="bracket">
            ${(plata.cuartos || []).length ? `<div class="bracket-col"><div class="bracket-col-title">Cuartos de final</div><div class="bk-stack">
              ${plata.cuartos.map(p => bkPlayedHtml(p, p.codigo)).join('')}
              ${byePlata ? `<div class="bracket-bye"><b>${byePlata}</b> pasó directo a semifinales (mejor 5°)</div>` : ''}</div></div>` : ''}
            <div class="bracket-col"><div class="bracket-col-title">${(plata.semifinales || []).length > 1 ? 'Semifinales' : 'Semifinal'}</div><div class="bk-stack">
              ${(plata.semifinales || []).map(p => bkPlayedHtml(p, p.codigo)).join('')}
              ${plata.bye ? `<div class="bracket-bye"><b>${plata.bye}</b> pasó directo a la final (5° de la tabla)</div>` : ''}</div></div>
            <div class="bracket-col"><div class="bracket-col-title">Final</div><div class="bk-stack">
              ${bkPlayedHtml(plata.final, 'Final', 'final plata')}
              ${plata.final ? `<div class="bk-champion plata">★ ${plata.final.ganador} campeón de Plata</div>` : ''}
            </div></div>
          </div></div>
        </div>
      </div>`;
  }

  function getProyeccionPlayoffs() {
    const A = (DATA.clausura.tablas?.zonaA || []).slice().sort((x, y) => x.pos - y.pos);
    const B = (DATA.clausura.tablas?.zonaB || []).slice().sort((x, y) => x.pos - y.pos);
    const at = (z, n) => z[n - 1]?.equipo;
    const ppj = r => (r && r.pj ? r.pts / r.pj : 0);
    // Mejor 5°: mayor promedio de puntos por partido, luego diferencia de gol y goles a favor
    const a5 = A[4], b5 = B[4];
    let mejor5 = a5, otro5 = b5;
    if (a5 && b5) {
      const cmp = (ppj(b5) - ppj(a5)) || (b5.dg - a5.dg) || (b5.gf - a5.gf);
      if (cmp > 0) { mejor5 = b5; otro5 = a5; }
    }
    const zonaDe = r => (A.includes(r) ? 'A' : 'B');
    return {
      campeonato: [
        { codigo: 'CF1', local: at(A, 1), sl: '1°A', visitante: at(B, 4), sv: '4°B' },
        { codigo: 'CF2', local: at(A, 2), sl: '2°A', visitante: at(B, 3), sv: '3°B' },
        { codigo: 'CF3', local: at(B, 1), sl: '1°B', visitante: at(A, 4), sv: '4°A' },
        { codigo: 'CF4', local: at(B, 2), sl: '2°B', visitante: at(A, 3), sv: '3°A' },
      ],
      plata: [
        { codigo: 'CP1', local: otro5?.equipo, sl: otro5 ? `5°${zonaDe(otro5)}` : '5°', visitante: at(A, 8), sv: '8°A' },
        { codigo: 'CP2', local: at(B, 6), sl: '6°B', visitante: at(A, 7), sv: '7°A' },
        { codigo: 'CP3', local: at(A, 6), sl: '6°A', visitante: at(B, 7), sv: '7°B' },
      ],
      mejor5: mejor5 ? { equipo: mejor5.equipo, zona: zonaDe(mejor5), ppj: ppj(mejor5) } : null,
      fecha: DATA.clausura.ultimaFechaDisputada,
    };
  }

  function renderProyeccionUnica() {
    const T = (DATA.clausura.tablas?.zonaA || []).slice().sort((x, y) => x.pos - y.pos);
    const at = n => T[n - 1]?.equipo;
    const cfg = FMT.clausura;
    const tbd = txt => bkTeamHtml(null, { placeholder: txt });
    const cruce = (codigo, a, b) => `<div class="bk-match">
        <div class="bk-code"><span>${codigo}</span><span>${a}° vs ${b}°</span></div>
        ${bkTeamHtml(at(a), { seed: a + '°' })}${bkTeamHtml(at(b), { seed: b + '°' })}</div>`;
    const pend = (codigo, x, y, extra = '') => `<div class="bk-match ${extra}"><div class="bk-code"><span>${codigo}</span><span>A jugar</span></div>${x}${y}</div>`;
    const [q1, q2] = cfg.cuartos; const [s1, s2] = cfg.plata;
    return `
      <div class="bracket-wrap">
        <div class="bracket-note" style="margin:0 0 14px; padding:10px 14px; background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; color:#166534;">
          <b>Proyección con la tabla tras la Fecha ${DATA.clausura.ultimaFechaDisputada}.</b> No son cruces confirmados: cambian con cada fecha.
        </div>
        <div class="bracket-block">
          <div class="bracket-title"><h3>Fase Campeonato</h3><span class="bracket-tag proy">Clausura 2026 · Si terminara hoy</span></div>
          <div class="bracket-scroll"><div class="bracket">
            <div class="bracket-col"><div class="bracket-col-title">Cuartos de final</div><div class="bk-stack">
              ${cruce('CF1', q1[0], q1[1])}${cruce('CF2', q2[0], q2[1])}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Semifinales</div><div class="bk-stack">
              ${pend('SF1', bkTeamHtml(at(1), { seed: '1°' }), tbd('Ganador CF2'))}
              ${pend('SF2', bkTeamHtml(at(2), { seed: '2°' }), tbd('Ganador CF1'))}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Final</div><div class="bk-stack">
              ${pend('Gran final', tbd('Ganador SF1'), tbd('Ganador SF2'), 'final')}
              <div class="bk-champion">★ Campeón Clausura 2026</div>
            </div></div>
          </div></div>
        </div>
        <div class="bracket-block">
          <div class="bracket-title"><h3>Copa de Plata</h3><span class="bracket-tag proy">Clausura 2026 · Si terminara hoy</span></div>
          <div class="bracket-scroll"><div class="bracket">
            <div class="bracket-col"><div class="bracket-col-title">Semifinales</div><div class="bk-stack">
              ${cruce('SP1', s1[0], s1[1])}${cruce('SP2', s2[0], s2[1])}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Final</div><div class="bk-stack">
              ${pend('Final', tbd('Ganador SP1'), tbd('Ganador SP2'), 'final plata')}
              <div class="bk-champion plata">★ Campeón Copa de Plata</div>
            </div></div>
          </div></div>
        </div>
        <div class="bracket-note">Cruces según la Forma de Disputa del Clausura de la Categoría C: 1° y 2° directo a semifinales, cuartos 3° vs 6° y 4° vs 5°; Copa de Plata 7° vs 10° y 8° vs 9°. El cruce de semifinales (1° con el ganador de 4° vs 5°) es una suposición: la organización define el cuadro.</div>
      </div>`;
  }

  function renderProyeccionPlayoffs() {
    if (ZONA_UNICA && FMT.clausura && FMT.clausura.cuartos) return renderProyeccionUnica();
    const pr = getProyeccionPlayoffs();
    const fmt = n => n.toFixed(2).replace('.', ',');
    const cruce = c => `<div class="bk-match">
        <div class="bk-code"><span>${c.codigo}</span><span>${c.sl} vs ${c.sv}</span></div>
        ${bkTeamHtml(c.local, { seed: c.sl })}
        ${bkTeamHtml(c.visitante, { seed: c.sv })}
      </div>`;
    const pendiente = (codigo, a, b, extra = '') => `<div class="bk-match ${extra}">
        <div class="bk-code"><span>${codigo}</span><span>A jugar</span></div>
        ${a}${b}
      </div>`;
    const tbd = txt => bkTeamHtml(null, { placeholder: txt });
    const [c1, c2, c3, c4] = pr.campeonato;
    const [p1, p2, p3] = pr.plata;

    return `
      <div class="bracket-wrap">
        <div class="bracket-note" style="margin:0 0 14px; padding:10px 14px; background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; color:#166534;">
          <b>Proyección con las tablas tras la Fecha ${pr.fecha}.</b> No son cruces confirmados: cambian con cada fecha.
        </div>

        <div class="bracket-block">
          <div class="bracket-title"><h3>Fase Campeonato</h3><span class="bracket-tag proy">Clausura 2026 · Si terminara hoy</span></div>
          <div class="bracket-scroll"><div class="bracket">
            <div class="bracket-col"><div class="bracket-col-title">Cuartos de final</div><div class="bk-stack">
              ${cruce(c1)}${cruce(c2)}${cruce(c3)}${cruce(c4)}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Semifinales</div><div class="bk-stack">
              ${pendiente('SF1', tbd('Ganador CF1'), tbd('Ganador CF2'))}
              ${pendiente('SF2', tbd('Ganador CF3'), tbd('Ganador CF4'))}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Final</div><div class="bk-stack">
              ${pendiente('Gran final', tbd('Ganador SF1'), tbd('Ganador SF2'), 'final')}
              <div class="bk-champion">★ Campeón Clausura 2026</div>
              <div class="bracket-col-title" style="margin-top:14px;">3° puesto</div>
              ${pendiente('3° puesto', tbd('Perdedor SF1'), tbd('Perdedor SF2'))}
            </div></div>
          </div></div>
        </div>

        <div class="bracket-block">
          <div class="bracket-title"><h3>Copa de Plata</h3><span class="bracket-tag proy">Clausura 2026 · Si terminara hoy</span></div>
          <div class="bracket-scroll"><div class="bracket">
            <div class="bracket-col"><div class="bracket-col-title">Cuartos de final</div><div class="bk-stack">
              ${cruce(p1)}${cruce(p2)}${cruce(p3)}
              ${pr.mejor5 ? `<div class="bracket-bye"><b>${pr.mejor5.equipo}</b> (5°${pr.mejor5.zona}) pasa directo a semifinales como mejor 5°</div>` : ''}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Semifinales</div><div class="bk-stack">
              ${pendiente('SF1', pr.mejor5 ? bkTeamHtml(pr.mejor5.equipo, { seed: `5°${pr.mejor5.zona}` }) : tbd('Mejor 5°'), tbd('Ganador CP1'))}
              ${pendiente('SF2', tbd('Ganador CP2'), tbd('Ganador CP3'))}
            </div></div>
            <div class="bracket-col"><div class="bracket-col-title">Final</div><div class="bk-stack">
              ${pendiente('Final', tbd('Ganador SF1'), tbd('Ganador SF2'), 'final plata')}
              <div class="bk-champion plata">★ Campeón Copa de Plata</div>
            </div></div>
          </div></div>
        </div>

        <div class="bracket-note">Cuartos según la Forma de Disputa 2026 (1°A vs 4°B, 2°A vs 3°B, 1°B vs 4°A, 2°B vs 3°A). Las semifinales siguen el mismo esquema que se usó en el Apertura; la organización puede definir otro cuadro. Mejor 5° calculado por promedio de puntos por partido (${pr.mejor5 ? fmt(pr.mejor5.ppj) : '—'}), porque la Zona B tiene un equipo libre por fecha.</div>
      </div>`;
  }

  // =========================================================================
  // COPA CHALLENGER (cuadro de dos llaves + final)
  // =========================================================================
  const CC_RONDAS = ['Ronda previa', '16avos de final', 'Octavos de final', 'Cuartos de final', 'Semifinal', 'Final'];
  const CC_RONDAS_CORTO = ['Previa', '16avos', 'Octavos', 'Cuartos', 'Semifinal', 'Final'];
  const CC_CANCHA = { R: 'Cancha de Rugby', F: 'Cancha de Fútbol' };

  // Arma el modelo: numera los partidos igual que la planilla de la Liga (por ronda, fecha, hora, llave y cancha)
  function getChallengerModel() {
    const CC = DATA.copaChallenger;
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

  function ccHoy() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function ccFecha(d, corta = false) {
    if (!d) return 'Fecha a confirmar';
    const [y, mo, da] = d.split('-').map(Number);
    const dt = new Date(y, mo - 1, da);
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return corta ? `${dias[dt.getDay()].slice(0, 3)} ${da}/${mo}` : `${dias[dt.getDay()]} ${da} de ${meses[mo - 1]}`;
  }

  function ccMatchHtml(m, extraClass = '', compact = false) {
    const jugado = !!m.ganador;
    const hasPen = m.res && m.res.a === m.res.b && m.res.pa != null;
    const lado = (p, i) => {
      if (!p.nombre) return bkTeamHtml(null, { placeholder: `Ganador P${p.de.no}` });
      const opts = { cat: p.cat, catBar: compact };
      if (m.res && m.res.a != null) {
        opts.score = i === 0 ? m.res.a : m.res.b;
        if (hasPen) opts.pen = i === 0 ? m.res.pa : m.res.pb;
        opts.win = jugado && m.ganador === p.slot;
        opts.lose = jugado && m.ganador !== p.slot;
      }
      return bkTeamHtml(p.nombre, opts);
    };
    const vencido = !jugado && m.date && m.date < ccHoy();
    let info;
    if (compact) {
      const cancha = m.c ? (m.c === 'R' ? 'Rugby' : 'Fútbol') : '';
      info = jugado ? (hasPen ? 'Penales' : 'Final')
        : vencido ? 'A cargar'
        : [m.t ? m.t + ' hs' : (m.date ? '' : 'A confirmar'), cancha].filter(Boolean).join(' · ');
    } else {
      info = jugado ? (hasPen ? 'Penales' : 'Final')
        : vencido ? `${ccFecha(m.date, true)} · Resultado a cargar`
        : (m.date ? `${ccFecha(m.date, true)}${m.t ? ' · ' + m.t + ' hs' : ''}` : 'A confirmar');
    }
    return `<div class="bk-match ${extraClass} ${jugado ? '' : 'pending'}">
      <div class="bk-code"><span>P${m.no}</span><span>${info}</span></div>
      ${lado(m.a, 0)}${lado(m.b, 1)}
      ${!compact && !jugado && m.c ? `<div class="bk-foot">${CC_CANCHA[m.c]}</div>` : ''}
    </div>`;
  }

  function renderChallenger() {
    const container = $('#view-challenger');
    if (!container) return;
    const model = getChallengerModel();
    if (!model) { container.innerHTML = ''; return; }
    const { all, final, CC } = model;
    const vista = state.ccVista || 'cuadro';

    let bodyHtml = '';
    if (vista === 'partidos') {
      const porRonda = {};
      all.filter(m => m !== final).forEach(m => { (porRonda[m.r] = porRonda[m.r] || []).push(m); });
      const bloques = Object.keys(porRonda).sort((a, b) => b - a).map(r => {
        const ms = porRonda[r].slice().sort((a, b) => (a.date || '').localeCompare(b.date || '') || a.no - b.no);
        return `<div class="bracket-col-title" style="text-align:left;margin:18px 0 8px;">${CC_RONDAS[r]}</div>
          <div class="matches-grid">${ms.map(m => ccMatchHtml(m)).join('')}</div>`;
      }).join('');
      bodyHtml = `<div class="bracket-block">${bloques}</div>`;
    } else {
      // Cuadro espejado: Llave 1 a la izquierda, Llave 2 a la derecha y la final en el centro.
      // Columnas: 1-4 = 16avos..semi (izq), 5 = final, 6-9 = semi..16avos (der). La ronda previa va dentro de la celda de 16avos.
      const colDe = (side, r) => side === 'L' ? r : 10 - r;
      const celdas = [];
      const filas = { L: 0, R: 0 };
      function ubicar(n, side) {
        if (n.leaf) return null;
        if (n.r === 1) {
          const row = ++filas[side];
          const previas = n.kids.map((k, i) => (!k.leaf && k.r === 0) ? { m: k, i } : null).filter(Boolean);
          const prevHtml = i => previas.filter(p => p.i === i).map(p => `<div class="cc-previa"><span class="cc-previa-tag">Previa · ${ccFecha(p.m.date, true)}</span>${ccMatchHtml(p.m, '', true)}</div>`).join('');
          celdas.push({ html: prevHtml(0) + ccMatchHtml(n, '', true) + prevHtml(1), col: colDe(side, 1), row, span: 1 });
          return { row, span: 1 };
        }
        const pos = n.kids.map(k => ubicar(k, side)).filter(Boolean);
        const row = Math.min(...pos.map(p => p.row));
        const span = pos.reduce((t, p) => t + p.span, 0);
        celdas.push({ html: ccMatchHtml(n, n.r === 4 ? 'cc-semi' : '', true), col: colDe(side, n.r), row, span });
        return { row, span };
      }
      ubicar(model.roots.L, 'L');
      ubicar(model.roots.R, 'R');
      const nFilas = Math.max(filas.L, filas.R);
      const HEAD = 2; // filas de encabezado
      const heads = ['L', 'R'].map(side => {
        const ll = CC.llaves[side];
        const desde = side === 'L' ? 1 : 6;
        const llaveHead = `<div class="cc-llave-head cc-llave-${side}" style="grid-column:${desde} / span 4;grid-row:1">${ll.nombre}</div>`;
        return llaveHead + [1, 2, 3, 4].map(r => `<div class="cc-head" style="grid-column:${colDe(side, r)};grid-row:2">${CC_RONDAS_CORTO[r]}<small>${ccFecha(ll.fechas[r], true)}</small></div>`).join('');
      }).join('') + `<div class="cc-head cc-head-final" style="grid-column:5;grid-row:2">Final<small>A confirmar</small></div>`;
      const finalHtml = `<div class="cc-final-box">
          <div class="cc-logo-wrap"><img class="cc-logo" src="public/copa_challenger_blanco.png?v=2" alt="Copa Challenger"></div>
          <div class="cc-final-title">Gran final</div>
          ${ccMatchHtml(final, 'final', true)}
          ${final.ganador ? `<div class="bk-champion">★ ${CC.equipos[final.ganador]} campeón</div>` : `<div class="cc-final-note">Ganador ${CC.llaves.L.nombre} vs Ganador ${CC.llaves.R.nombre}</div>`}
        </div>`;
      const cuerpo = celdas.map(c => `<div class="cc-cell" style="grid-column:${c.col};grid-row:${c.row + HEAD} / span ${c.span}">${c.html}</div>`).join('')
        + `<div class="cc-cell cc-cell-final" style="grid-column:5;grid-row:${1 + HEAD} / span ${nFilas}">${finalHtml}</div>`;
      bodyHtml = `
        <div class="bracket-block cc-wide">
          <div class="cc-scroll-hint">Deslizá para ver todo el cuadro →</div>
          <div class="bracket-scroll"><div class="cc-mirror">${heads}${cuerpo}</div></div>
        </div>`;
    }

    const proximos = all.filter(m => !m.ganador && m.date && m.date >= ccHoy()).sort((a, b) => a.date.localeCompare(b.date) || a.no - b.no);
    const prox = proximos.length ? proximos[0].date : null;

    container.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <h2>Copa Challenger</h2>
          <span class="section-badge">2026 · Categorías A, B y C</span>
        </div>
        <div class="pill-group" role="tablist" aria-label="Ver Copa Challenger">
          <button class="pill-btn ${vista === 'cuadro' ? 'active' : ''}" data-cc="cuadro">Cuadro</button>
          <button class="pill-btn ${vista === 'partidos' ? 'active' : ''}" data-cc="partidos">Partidos</button>
        </div>
      </div>
      <div class="banner-alert">
        <div>
          <b>Eliminación directa entre equipos de las categorías A, B y C</b>
          Si hay empate se define por penales.${prox ? ` Próxima fecha: ${ccFecha(prox)}.` : ''} ${CC.fuente}.
        </div>
      </div>
      <div class="cc-legend">
        <span><span class="cat-chip cat-A">A</span> Categoría A</span>
        <span><span class="cat-chip cat-B">B</span> Categoría B</span>
        <span><span class="cat-chip cat-C">C</span> Categoría C</span>
      </div>
      ${bodyHtml}
    `;

    $$('button[data-cc]', container).forEach(btn => btn.addEventListener('click', () => {
      state.ccVista = btn.dataset.cc;
      renderChallenger();
    }));
    $$('.bk-team[data-team]', container).forEach(el => el.addEventListener('click', () => {
      if (el.dataset.team) openTeamModal(el.dataset.team);
    }));
  }

  // =========================================================================
  // CRONOLOGÍA COMPLETA DE PARTIDOS (ÚLTIMOS 5 REALES)
  // =========================================================================
  function getTeamChronologicalMatches(teamName) {
    const list = [];
    if (!teamName) return list;
    const target = teamName.trim().toLowerCase();

    // 1. Clausura F3 -> F2 -> F1
    const clFechas = DATA.clausura.fechas || [];
    for (let i = clFechas.length - 1; i >= 0; i--) {
      const f = clFechas[i];
      (f.partidos || []).forEach(m => {
        if (m.estado === 'finalizado' && typeof m.golesL === 'number' && typeof m.golesV === 'number') {
          const lMatch = m.local?.trim().toLowerCase() === target;
          const vMatch = m.visitante?.trim().toLowerCase() === target;
          if (lMatch || vMatch) {
            list.push({
              torneo: 'Clausura',
              faseLabel: `C${f.numero}`,
              fechaNum: f.numero,
              esLocal: lMatch,
              local: m.local,
              visitante: m.visitante,
              rival: lMatch ? m.visitante : m.local,
              golesL: m.golesL,
              golesV: m.golesV,
              gf: lMatch ? m.golesL : m.golesV,
              gc: lMatch ? m.golesV : m.golesL,
              nota: m.nota || ""
            });
          }
        }
      });
    }

    // 2. Playoffs Apertura (Finales -> Semis -> Cuartos)
    if (DATA.apertura.playoffs) {
      const p = DATA.apertura.playoffs;
      const fases = [
        { label: 'Final', items: [p.faseCampeonato?.final, p.copaPlata?.final] },
        { label: '3° Puesto', items: [p.faseCampeonato?.tercerPuesto] },
        { label: 'Semifinal', items: [...(p.faseCampeonato?.semifinales || []), ...(p.copaPlata?.semifinales || [])] },
        { label: 'Cuartos', items: [...(p.faseCampeonato?.cuartos || []), ...(p.copaPlata?.cuartos || [])] }
      ];

      fases.forEach(fase => {
        fase.items.forEach(m => {
          if (m && typeof m.golesL === 'number' && typeof m.golesV === 'number') {
            const lMatch = m.local?.trim().toLowerCase() === target;
            const vMatch = m.visitante?.trim().toLowerCase() === target;
            if (lMatch || vMatch) {
              list.push({
                torneo: 'Apertura Playoffs',
                faseLabel: `Ap ${fase.label}`,
                fechaNum: 10,
                esLocal: lMatch,
                local: m.local,
                visitante: m.visitante,
                rival: lMatch ? m.visitante : m.local,
                golesL: m.golesL,
                golesV: m.golesV,
                gf: lMatch ? m.golesL : m.golesV,
                gc: lMatch ? m.golesV : m.golesL,
                penalesL: m.penalesL,
                penalesV: m.penalesV,
                nota: m.nota || ""
              });
            }
          }
        });
      });
    }

    // 3. Apertura Fase Regular F9 -> F1
    const apFechas = DATA.apertura.fechas || [];
    for (let i = apFechas.length - 1; i >= 0; i--) {
      const f = apFechas[i];
      (f.partidos || []).forEach(m => {
        if (m.estado === 'finalizado' && typeof m.golesL === 'number' && typeof m.golesV === 'number') {
          const lMatch = m.local?.trim().toLowerCase() === target;
          const vMatch = m.visitante?.trim().toLowerCase() === target;
          if (lMatch || vMatch) {
            list.push({
              torneo: 'Apertura',
              faseLabel: `A${f.numero}`,
              fechaNum: f.numero,
              esLocal: lMatch,
              local: m.local,
              visitante: m.visitante,
              rival: lMatch ? m.visitante : m.local,
              golesL: m.golesL,
              golesV: m.golesV,
              gf: lMatch ? m.golesL : m.golesV,
              gc: lMatch ? m.golesV : m.golesL,
              nota: m.nota || ""
            });
          }
        }
      });
    }

    return list;
  }

  // =========================================================================
  // SECCIÓN C: EQUIPOS (BUSCADOR SIN PÉRDIDA DE FOCO)
  // =========================================================================
  function renderEquipos() {
    const container = $('#view-equipos');
    if (!container) return;

    let grid = $('#teamsGridContent', container);
    if (!grid) {
      container.innerHTML = `
        <div class="section-header">
          <div class="section-title">
            <h2>Equipos</h2>
            <span class="section-badge">${DATA.equipos.length} ${ESQ ? "Equipos" : "Clubes Oficiales"}</span>
          </div>
          <div class="search-input-box">
            <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="teamSearchInput" placeholder="Buscar equipo..." value="${state.equiposQuery}">
          </div>
        </div>
        <div class="teams-grid" id="teamsGridContent"></div>
      `;

      grid = $('#teamsGridContent', container);

      const searchInput = $('#teamSearchInput', container);
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          state.equiposQuery = e.target.value;
          updateEquiposCards();
        });
      }
    }

    updateEquiposCards();
  }

  function updateEquiposCards() {
    const grid = $('#teamsGridContent');
    if (!grid) return;

    const query = state.equiposQuery.toLowerCase().trim();
    const filteredTeams = DATA.equipos.filter(eq => {
      const matchName = eq.nombre && eq.nombre.toLowerCase().includes(query);
      const matchShort = eq.shortName && eq.shortName.toLowerCase().includes(query);
      return matchName || matchShort;
    });

    const teamsHtml = filteredTeams.map(eq => {
      const recentMatches = getTeamChronologicalMatches(eq.nombre).slice(0, 5);
      const rachaBadges = recentMatches.map(m => {
        let res = "E";
        let resClass = "form-draw";
        if (typeof m.penalesL === 'number') {
          const penF = m.esLocal ? m.penalesL : m.penalesV;
          const penC = m.esLocal ? m.penalesV : m.penalesL;
          res = penF > penC ? "G" : "P";
          resClass = penF > penC ? "form-win" : "form-loss";
        } else if (m.gf > m.gc) {
          res = "G"; resClass = "form-win";
        } else if (m.gf < m.gc) {
          res = "P"; resClass = "form-loss";
        }
        return `<span class="badge-form ${resClass}" style="width:20px; height:20px; font-size:0.7rem;" title="${m.faseLabel}: vs ${m.rival} (${m.gf}-${m.gc})">${res}</span>`;
      }).join('');

      return `
        <div class="team-card-preview" data-team-id="${eq.id}">
          <img src="${eq.escudo || genericCrestUri(eq.nombre)}" alt="${eq.nombre}" class="preview-crest" loading="lazy" onerror="this.onerror=null; this.src='${genericCrestUri(eq.nombre).replace(/'/g, '%27')}';">
          <div class="preview-name">${eq.nombre}</div>
          <div class="preview-zones">${ZONA_UNICA ? posicionesTxt(eq) : (eq.zonaClausura ? `Clausura: Zona ${eq.zonaClausura} · Apertura: Zona ${eq.zonaApertura}` : 'Zonas a confirmar')}</div>
          <div style="display:flex; align-items:center; justify-content:space-between; width:100%; margin-top:8px;">
            <div style="display:flex; gap:4px;" title="Racha en los últimos partidos">
              ${rachaBadges}
            </div>
            ${eq.instagram ? `
              <a href="${eq.instagram}" target="_blank" rel="noopener noreferrer" class="preview-ig-link" title="Instagram: ${eq.instagramHandle || ''}" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    grid.innerHTML = teamsHtml.length > 0
      ? teamsHtml
      : `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted);">No se encontraron equipos que coincidan con "${state.equiposQuery}".</div>`;

    $$('.team-card-preview', grid).forEach(card => {
      card.addEventListener('click', () => {
        openTeamModal(card.dataset.teamId);
      });
    });
  }

  // =========================================================================
  // SECCIÓN D: ESTADÍSTICAS AVANZADAS (PLANTILLA COMPLETA CON EQUIPOS ORIGINALES)
  // =========================================================================
  function getTournamentMatchesForStats(torneo, zona) {
    const matches = [];
    let listFechas = [];
    if (torneo === 'clausura') listFechas = DATA.clausura.fechas;
    else if (torneo === 'apertura') listFechas = DATA.apertura.fechas;
    else {
      listFechas = [...(DATA.apertura.fechas || []), ...(DATA.clausura.fechas || [])];
    }

    listFechas.forEach(f => {
      (f.partidos || []).forEach(m => {
        if (m.estado === 'finalizado' && typeof m.golesL === 'number' && typeof m.golesV === 'number') {
          if (zona && zona !== 'todas') {
            if (m.zona && !m.zona.includes(zona)) return;
          }
          matches.push({ ...m, fechaNombre: f.nombre });
        }
      });
    });
    return matches;
  }

  function renderEstadisticas() {
    const container = $('#view-estadisticas');
    if (!container) return;

    const t = state.statsTorneo;
    const z = state.statsZona;
    const matches = getTournamentMatchesForStats(t, z);

    // 1. Métricas Globales
    let totalGoles = 0;
    let partidos0a0 = 0;
    let vicLocal = 0;
    let vicVisita = 0;
    let empates = 0;
    let mayorGoleada = null;
    let maxDif = -1;

    matches.forEach(m => {
      const sum = m.golesL + m.golesV;
      totalGoles += sum;
      if (m.golesL === 0 && m.golesV === 0) partidos0a0++;
      if (m.golesL > m.golesV) vicLocal++;
      else if (m.golesV > m.golesL) vicVisita++;
      else empates++;

      const dif = Math.abs(m.golesL - m.golesV);
      if (dif > maxDif) {
        maxDif = dif;
        mayorGoleada = m;
      }
    });

    const totalPJ = matches.length;
    const golesPorPJ = totalPJ > 0 ? (totalGoles / totalPJ).toFixed(2).replace('.', ',') : "0,00";
    const pctL = totalPJ > 0 ? Math.round((vicLocal / totalPJ) * 100) : 0;
    const pctE = totalPJ > 0 ? Math.round((empates / totalPJ) * 100) : 0;
    const pctV = totalPJ > 0 ? (100 - pctL - pctE) : 0;

    // 2. Agregación por Equipo
    const teamStats = {};
    DATA.equipos.forEach(eq => {
      teamStats[eq.nombre] = {
        equipo: eq.nombre,
        id: eq.id,
        escudo: eq.escudo,
        pj: 0,
        g: 0,
        e: 0,
        p: 0,
        gf: 0,
        gc: 0,
        dg: 0,
        pts: 0,
        efect: 0,
        vi: 0,
        sm: 0,
        racha: 0,
        rachaTipo: 'V',
        ultimos5: []
      };
    });

    matches.forEach(m => {
      const l = m.local;
      const v = m.visitante;
      if (teamStats[l]) {
        teamStats[l].pj++;
        teamStats[l].gf += m.golesL;
        teamStats[l].gc += m.golesV;
        if (m.golesV === 0) teamStats[l].vi++;
        if (m.golesL === 0) teamStats[l].sm++;
        if (m.golesL > m.golesV) { teamStats[l].g++; teamStats[l].pts += 3; }
        else if (m.golesL === m.golesV) { teamStats[l].e++; teamStats[l].pts += 1; }
        else { teamStats[l].p++; }
      }
      if (teamStats[v]) {
        teamStats[v].pj++;
        teamStats[v].gf += m.golesV;
        teamStats[v].gc += m.golesL;
        if (m.golesL === 0) teamStats[v].vi++;
        if (m.golesV === 0) teamStats[v].sm++;
        if (m.golesV > m.golesL) { teamStats[v].g++; teamStats[v].pts += 3; }
        else if (m.golesV === m.golesL) { teamStats[v].e++; teamStats[v].pts += 1; }
        else { teamStats[v].p++; }
      }
    });

    const teamList = Object.values(teamStats).filter(st => st.pj > 0);
    teamList.forEach(st => {
      st.dg = st.gf - st.gc;
      st.efect = st.pj > 0 ? Math.round((st.pts / (st.pj * 3)) * 100) : 0;
      st.gfPorPJ = st.pj > 0 ? parseFloat((st.gf / st.pj).toFixed(2)) : 0;
      st.gcPorPJ = st.pj > 0 ? parseFloat((st.gc / st.pj).toFixed(2)) : 0;

      const teamMatches = getTeamChronologicalMatches(st.equipo);
      st.ultimos5 = teamMatches.slice(0, 5).map(m => {
        if (m.gf > m.gc) return 'V';
        if (m.gf === m.gc) return 'E';
        return 'D';
      });

      if (st.ultimos5.length > 0) {
        const first = st.ultimos5[0];
        let count = 0;
        for (const res of st.ultimos5) {
          if (res === first) count++;
          else break;
        }
        st.racha = count;
        st.rachaTipo = first;
      }
    });

    // 3. Lo Mejor del Torneo
    const mejorAtaque = [...teamList].sort((a, b) => b.gf - a.gf)[0];
    const vallaMenosVencida = [...teamList].sort((a, b) => a.gcPorPJ - b.gcPorPJ || a.gc - b.gc)[0];
    const masVallasInvictas = [...teamList].sort((a, b) => b.vi - a.vi)[0];
    const mejorEfectividad = [...teamList].sort((a, b) => b.efect - a.efect || b.pts - a.pts)[0];

    let mejorInvictoEquipo = null;
    let maxSinPerder = -1;
    teamList.forEach(st => {
      let count = 0;
      for (const res of st.ultimos5) {
        if (res === 'V' || res === 'E') count++;
        else break;
      }
      if (count > maxSinPerder) {
        maxSinPerder = count;
        mejorInvictoEquipo = st;
      }
    });

    const topScorer = (t === 'apertura' ? DATA.apertura.goleadores : DATA.clausura.goleadores)?.[0];
    const scorerTeam = getTeam(topScorer?.equipo);

    // Medias para Scatter Plot
    const avgGF = teamList.length > 0 ? (teamList.reduce((acc, c) => acc + c.gfPorPJ, 0) / teamList.length) : 1.5;
    const avgGC = teamList.length > 0 ? (teamList.reduce((acc, c) => acc + c.gcPorPJ, 0) / teamList.length) : 1.5;

    // 4. Butterfly chart (Ordenado por DG)
    const butterflyList = [...teamList].sort((a, b) => b.dg - a.dg || b.gf - a.gf);
    const maxBarGF = Math.max(...butterflyList.map(x => x.gf), 1);
    const maxBarGC = Math.max(...butterflyList.map(x => x.gc), 1);

    // 5. Dumbbell plot (Apertura vs Clausura para los 15 equipos)
    const dumbbellData = DATA.equipos.map(eq => {
      const name = eq.nombre;
      const apMatches = getTournamentMatchesForStats('apertura', 'todas').filter(m => m.local === name || m.visitante === name);
      let apPts = 0;
      apMatches.forEach(m => {
        const esL = m.local === name;
        const gf = esL ? m.golesL : m.golesV;
        const gc = esL ? m.golesV : m.golesL;
        if (gf > gc) apPts += 3;
        else if (gf === gc) apPts += 1;
      });
      const apEfect = apMatches.length > 0 ? Math.round((apPts / (apMatches.length * 3)) * 100) : 0;

      const clMatches = getTournamentMatchesForStats('clausura', 'todas').filter(m => m.local === name || m.visitante === name);
      let clPts = 0;
      clMatches.forEach(m => {
        const esL = m.local === name;
        const gf = esL ? m.golesL : m.golesV;
        const gc = esL ? m.golesV : m.golesL;
        if (gf > gc) clPts += 3;
        else if (gf === gc) clPts += 1;
      });
      const clEfect = clMatches.length > 0 ? Math.round((clPts / (clMatches.length * 3)) * 100) : 0;
      const delta = clEfect - apEfect;
      return { equipo: eq, apEfect, clEfect, delta };
    });
    dumbbellData.sort((a, b) => b.delta - a.delta);

    // 6. Ordenamiento interactivo de Tabla "Equipo por Equipo"
    const sortCol = state.statsSortCol;
    const sortAsc = state.statsSortAsc;
    const sortedAdvanced = [...teamList].sort((a, b) => {
      let valA = a[sortCol];
      let valB = b[sortCol];
      if (typeof valA === 'string') {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortAsc ? (valA - valB) : (valB - valA);
    });

    const torneoTitle = t === 'clausura' ? 'Clausura 2026' : t === 'apertura' ? 'Apertura 2026' : 'Temporada 2026';

    container.innerHTML = `
      <!-- HEADER CON SELECTORES Y SUBTÍTULO -->
      <div class="stats-header-banner">
        <div class="section-title">
          <h2 style="font-family:var(--f-display); font-size:2.2rem; text-transform:uppercase; letter-spacing:0.02em;">Estadísticas</h2>
          <span style="font-size:0.9rem; color:var(--muted); font-weight:600;">${torneoTitle} · ${totalPJ} partidos con resultado oficial</span>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center;">
          <div class="pill-group" role="tablist" aria-label="Seleccionar Torneo Stats">
            <button class="pill-btn ${t === 'clausura' ? 'active' : ''}" data-st-torneo="clausura">Clausura 2026</button>
            <button class="pill-btn ${t === 'apertura' ? 'active' : ''}" data-st-torneo="apertura">Apertura 2026</button>
            <button class="pill-btn ${t === 'anual' ? 'active' : ''}" data-st-torneo="anual">Anual</button>
          </div>
          ${ZONA_UNICA ? '' : `<div class="pill-group" role="tablist" aria-label="Seleccionar Zona Stats">
            <button class="pill-btn ${z === 'todas' ? 'active' : ''}" data-st-zona="todas">Todas las zonas</button>
            <button class="pill-btn ${z === 'A' ? 'active' : ''}" data-st-zona="A">Zona A</button>
            <button class="pill-btn ${z === 'B' ? 'active' : ''}" data-st-zona="B">Zona B</button>
          </div>`}
        </div>
      </div>

      <!-- 4 KPIS PRINCIPALES -->
      <div class="stats-kpi-grid">
        <div class="stats-kpi-card">
          <div class="kpi-label">Partidos Jugados</div>
          <div class="kpi-num">${totalPJ}</div>
          <div class="kpi-sub">${partidos0a0} terminaron 0 a 0</div>
        </div>
        <div class="stats-kpi-card">
          <div class="kpi-label">Goles</div>
          <div class="kpi-num">${totalGoles}</div>
          <div class="kpi-sub">En ${totalPJ} partidos</div>
        </div>
        <div class="stats-kpi-card">
          <div class="kpi-label">Goles por Partido</div>
          <div class="kpi-num">${golesPorPJ}</div>
          <div class="kpi-sub">Promedio del torneo</div>
        </div>
        <div class="stats-kpi-card">
          <div class="kpi-label">Mayor Goleada</div>
          <div class="kpi-match-row">
            ${mayorGoleada ? `
              ${renderCrestImg(getTeam(mayorGoleada.local), "kpi-crest")}
              <span class="kpi-match-score">${mayorGoleada.golesL}-${mayorGoleada.golesV}</span>
              ${renderCrestImg(getTeam(mayorGoleada.visitante), "kpi-crest")}
            ` : `<span class="kpi-match-score">—</span>`}
          </div>
          <div class="kpi-sub">${mayorGoleada ? `${mayorGoleada.local} vs ${mayorGoleada.visitante} · ${mayorGoleada.fechaNombre || ''}` : 'Sin datos'}</div>
        </div>
      </div>

      <!-- BARRA DE DISTRIBUCIÓN DE RESULTADOS CONTINUA -->
      <div class="stats-distribution-panel">
        <div class="dist-track">
          <div class="dist-seg seg-local" style="width:${pctL}%;" title="Victorias Locales: ${vicLocal}"></div>
          <div class="dist-seg seg-empate" style="width:${pctE}%;" title="Empates: ${empates}"></div>
          <div class="dist-seg seg-visita" style="width:${pctV}%;" title="Victorias Visitantes: ${vicVisita}"></div>
        </div>
        <div class="dist-legend">
          <span><span class="legend-dot dot-local"></span> Gana el local <b>${vicLocal}</b> (${pctL}%)</span>
          <span><span class="legend-dot dot-empate"></span> Empate <b>${empates}</b> (${pctE}%)</span>
          <span><span class="legend-dot dot-visita"></span> Gana el visitante <b>${vicVisita}</b> (${pctV}%)</span>
        </div>
      </div>

      <!-- BLOQUE: LO MEJOR DEL TORNEO -->
      <div class="advanced-section-wrapper">
        <div class="section-title-sub">
          <h3 class="stats-subheading">Lo Mejor del Torneo</h3>
          <span style="font-size:0.85rem; color:var(--muted);">${torneoTitle}</span>
        </div>
        <div class="best-tournament-grid">
          <div class="best-card">
            <div class="best-header">Mejor Ataque</div>
            <div class="best-team">
              ${renderCrestImg(getTeam(mejorAtaque?.equipo), "best-crest")}
              <span class="best-name">${mejorAtaque?.equipo || "—"}</span>
            </div>
            <div class="best-val-row">
              <span class="best-val">${mejorAtaque?.gf || 0}</span>
              <span class="best-sub">goles a favor</span>
            </div>
          </div>

          <div class="best-card">
            <div class="best-header">Valla Menos Vencida</div>
            <div class="best-team">
              ${renderCrestImg(getTeam(vallaMenosVencida?.equipo), "best-crest")}
              <span class="best-name">${vallaMenosVencida?.equipo || "—"}</span>
            </div>
            <div class="best-val-row">
              <span class="best-val">${vallaMenosVencida ? vallaMenosVencida.gcPorPJ.toFixed(2).replace('.', ',') : "0,00"}</span>
              <span class="best-sub">recibidos por partido</span>
            </div>
          </div>

          <div class="best-card">
            <div class="best-header">Más Vallas Invictas</div>
            <div class="best-team">
              ${renderCrestImg(getTeam(masVallasInvictas?.equipo), "best-crest")}
              <span class="best-name">${masVallasInvictas?.equipo || "—"}</span>
            </div>
            <div class="best-val-row">
              <span class="best-val">${masVallasInvictas?.vi || 0}</span>
              <span class="best-sub">partidos sin recibir</span>
            </div>
          </div>

          <div class="best-card">
            <div class="best-header">Mejor Efectividad</div>
            <div class="best-team">
              ${renderCrestImg(getTeam(mejorEfectividad?.equipo), "best-crest")}
              <span class="best-name">${mejorEfectividad?.equipo || "—"}</span>
            </div>
            <div class="best-val-row">
              <span class="best-val">${mejorEfectividad?.efect || 0}%</span>
              <span class="best-sub">de los puntos en juego</span>
            </div>
          </div>

          <div class="best-card">
            <div class="best-header">Invicto Hace Más Tiempo</div>
            <div class="best-team">
              ${renderCrestImg(getTeam(mejorInvictoEquipo?.equipo), "best-crest")}
              <span class="best-name">${mejorInvictoEquipo?.equipo || "—"}</span>
            </div>
            <div class="best-val-row">
              <span class="best-val">${maxSinPerder > 0 ? maxSinPerder : 0}</span>
              <span class="best-sub">partidos sin perder</span>
            </div>
          </div>

          <div class="best-card">
            <div class="best-header">Goleador</div>
            <div class="best-team">
              ${renderCrestImg(scorerTeam, "best-crest")}
              <span class="best-name">${topScorer ? topScorer.jugador : "—"}</span>
            </div>
            <div class="best-val-row">
              <span class="best-val">${topScorer?.goles || 0}</span>
              <span class="best-sub">goles · ${topScorer?.equipo || ""}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- DOS COLUMNAS: SCATTER PLOT + BUTTERFLY CHART -->
      <div class="charts-two-col-grid">
        <!-- Columna 1: Ataque y Defensa (Scatter 2D) -->
        <div class="chart-box">
          <div class="chart-header">
            <h4>Ataque y Defensa</h4>
            <span>Promedio por partido · línea punteada: media del torneo</span>
          </div>
          <div class="scatter-layout-wrapper">
            <div class="scatter-axis-y-label">Goles en contra por partido (arriba, menos)</div>
            <div class="scatter-main-area">
              <div class="scatter-container" id="scatterContainer">
                <div class="scatter-quadrant-green" style="left:${(avgGF / 4) * 100}%; top:0; width:${100 - (avgGF / 4) * 100}%; height:${(avgGC / 5) * 100}%;"></div>
                <div class="scatter-guide-x" style="top:${(avgGC / 5) * 100}%;"></div>
                <div class="scatter-guide-y" style="left:${(avgGF / 4) * 100}%;"></div>

                <div class="scatter-axis-y">
                  <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                </div>

                ${teamList.map(t => {
                  const posX = Math.min(Math.max((t.gfPorPJ / 4) * 100, 6), 94);
                  const posY = Math.min(Math.max((t.gcPorPJ / 5) * 100, 6), 94);
                  const dirY = posY < 35 ? 'tooltip-down' : 'tooltip-up';
                  const dirX = posX > 75 ? 'tooltip-align-right' : posX < 22 ? 'tooltip-align-left' : 'tooltip-align-center';

                  return `
                    <div class="scatter-bubble" style="left:${posX}%; top:${posY}%;" data-team="${t.id}">
                      <img src="${t.escudo}" alt="${t.equipo}">
                      <div class="scatter-tooltip ${dirY} ${dirX}">
                        <div class="tt-team-name">${t.equipo}</div>
                        <div class="tt-row"><span>GF/PJ:</span> <b>${t.gfPorPJ.toFixed(2)}</b></div>
                        <div class="tt-row"><span>GC/PJ:</span> <b>${t.gcPorPJ.toFixed(2)}</b></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
              <div class="scatter-axis-x-numbers">
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
              <div class="scatter-axis-x-label">Goles a favor por partido →</div>
            </div>
          </div>
          <div class="scatter-legend-note">
            <span class="legend-box-green"></span>
            <span>Zona verde: convierten más y reciben menos que el promedio del torneo. Pasá el mouse o tocá un escudo para ver el equipo.</span>
          </div>
        </div>

        <!-- Columna 2: Goles a Favor y en Contra (Butterfly) -->
        <div class="chart-box">
          <div class="chart-header">
            <h4>Goles a Favor y en Contra</h4>
            <span>Ordenado por diferencia de gol</span>
          </div>
          <div class="butterfly-chart-wrapper">
            <div class="butterfly-header-row">
              <span style="text-align:right;">En Contra</span>
              <span style="text-align:center;">Equipo</span>
              <span style="text-align:left;">A Favor</span>
            </div>
            ${butterflyList.map(t => {
              const widthGC = Math.min(Math.round((t.gc / maxBarGC) * 100), 100);
              const widthGF = Math.min(Math.round((t.gf / maxBarGF) * 100), 100);
              return `
                <div class="butterfly-row">
                  <div class="bf-against-col">
                    <span class="bf-val bf-val-against">${t.gc}</span>
                    <div class="bf-bar-against" style="width:${Math.max(widthGC, 4)}%;"></div>
                  </div>
                  <div class="bf-team-col" data-team="${t.id}" style="cursor:pointer;">
                    <img src="${t.escudo}" alt="${t.equipo}">
                    <span>${t.equipo}</span>
                  </div>
                  <div class="bf-favor-col">
                    <div class="bf-bar-favor" style="width:${Math.max(widthGF, 4)}%;"></div>
                    <span class="bf-val bf-val-favor">${t.gf}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- BLOQUE: EQUIPO POR EQUIPO (TABLA AVANZADA SORTEABLE) -->
      <div class="advanced-table-section">
        <div class="section-title-sub">
          <h3 class="stats-subheading">Equipo por Equipo</h3>
          <span style="font-size:0.85rem; color:var(--muted);">Tocá una columna para ordenar</span>
        </div>
        <div class="table-responsive">
          <table class="league-table advanced-table">
            <thead>
              <tr>
                <th style="width:40px;">#</th>
                <th class="sortable-th ${sortCol === 'equipo' ? 'active-sort' : ''}" data-col="equipo" style="text-align:left;">Equipo</th>
                <th class="sortable-th ${sortCol === 'pj' ? 'active-sort' : ''}" data-col="pj">PJ</th>
                <th class="sortable-th ${sortCol === 'pts' ? 'active-sort' : ''}" data-col="pts">PTS ▾</th>
                <th class="sortable-th ${sortCol === 'efect' ? 'active-sort' : ''}" data-col="efect" style="width:130px;">EFECT.</th>
                <th class="sortable-th ${sortCol === 'g' ? 'active-sort' : ''}" data-col="g">G</th>
                <th class="sortable-th ${sortCol === 'e' ? 'active-sort' : ''}" data-col="e">E</th>
                <th class="sortable-th ${sortCol === 'p' ? 'active-sort' : ''}" data-col="p">P</th>
                <th class="sortable-th ${sortCol === 'gf' ? 'active-sort' : ''}" data-col="gf">GF</th>
                <th class="sortable-th ${sortCol === 'gc' ? 'active-sort' : ''}" data-col="gc">GC</th>
                <th class="sortable-th ${sortCol === 'dg' ? 'active-sort' : ''}" data-col="dg">DG</th>
                <th class="sortable-th ${sortCol === 'gfPorPJ' ? 'active-sort' : ''}" data-col="gfPorPJ">GF/PJ</th>
                <th class="sortable-th ${sortCol === 'gcPorPJ' ? 'active-sort' : ''}" data-col="gcPorPJ">GC/PJ</th>
                <th class="sortable-th ${sortCol === 'vi' ? 'active-sort' : ''}" data-col="vi">VI</th>
                <th class="sortable-th ${sortCol === 'sm' ? 'active-sort' : ''}" data-col="sm">SM</th>
                <th>RACHA</th>
                <th>ÚLTIMOS 5</th>
              </tr>
            </thead>
            <tbody>
              ${sortedAdvanced.map((r, i) => {
                const dgSign = r.dg > 0 ? `+${r.dg}` : `${r.dg}`;
                const dgColor = r.dg > 0 ? "color:#2ec465;" : r.dg < 0 ? "color:#ff5252;" : "";
                const rachaBadge = `<span class="badge-racha-tag ${r.rachaTipo === 'V' ? 'racha-win' : r.rachaTipo === 'E' ? 'racha-draw' : 'racha-loss'}">${r.racha}${r.rachaTipo}</span>`;
                const pills5 = r.ultimos5.map(x => `<span class="badge-form ${x === 'V' ? 'form-win' : x === 'E' ? 'form-draw' : 'form-loss'}">${x}</span>`).join('');

                return `
                  <tr>
                    <td class="col-pos">${i + 1}</td>
                    <td class="col-team">
                      <div class="team-cell" data-team="${r.id}">
                        ${renderCrestImg(getTeam(r.equipo))}
                        <span class="team-name">${r.equipo}</span>
                      </div>
                    </td>
                    <td>${r.pj}</td>
                    <td class="col-highlight" style="font-size:1.1rem;">${r.pts}</td>
                    <td>
                      <div class="efect-cell-bar">
                        <div class="efect-track"><div class="efect-fill" style="width:${r.efect}%;"></div></div>
                        <span class="efect-val">${r.efect}%</span>
                      </div>
                    </td>
                    <td>${r.g}</td>
                    <td>${r.e}</td>
                    <td>${r.p}</td>
                    <td>${r.gf}</td>
                    <td>${r.gc}</td>
                    <td style="font-weight:700; ${dgColor}">${dgSign}</td>
                    <td>${r.gfPorPJ.toFixed(2).replace('.', ',')}</td>
                    <td>${r.gcPorPJ.toFixed(2).replace('.', ',')}</td>
                    <td>${r.vi}</td>
                    <td>${r.sm}</td>
                    <td>${rachaBadge}</td>
                    <td><div style="display:inline-flex; gap:3px;">${pills5}</div></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
        <div style="font-size:0.75rem; color:var(--dim); margin-top:12px; line-height:1.4;">
          Calculado con el resultado de cada partido. Los puntos son los ganados en cancha y no incluyen quitas ni bonificaciones del Tribunal. VI: vallas invictas. SM: partidos sin convertir. Racha: V victorias, E empates, D derrotas seguidas.
        </div>
      </div>

      <!-- BLOQUE: APERTURA VS CLAUSURA (DUMBBELL CHART) -->
      <div class="advanced-section-wrapper" style="margin-bottom:40px;">
        <div class="section-title-sub">
          <h3 class="stats-subheading">Apertura vs Clausura</h3>
          <span style="font-size:0.85rem; color:var(--muted);">Efectividad de cada equipo en los dos torneos · ordenado por cuánto mejoró</span>
        </div>
        <div class="dumbbell-legend">
          <span><span class="db-point point-ap"></span> Apertura</span>
          <span><span class="db-point point-cl"></span> Clausura</span>
          <span style="color:var(--dim); font-size:0.8rem;">La línea verde marca una mejora y la roja, una caída.</span>
        </div>

        <div class="dumbbell-chart-box">
          ${dumbbellData.map(d => {
            const minPct = Math.min(d.apEfect, d.clEfect);
            const maxPct = Math.max(d.apEfect, d.clEfect);
            const isMejora = d.delta >= 0;
            const barColor = isMejora ? "#2ec465" : "#ff5252";
            const deltaSign = d.delta > 0 ? `+${d.delta}` : `${d.delta}`;

            return `
              <div class="dumbbell-row">
                <div class="db-team-col" data-team="${d.equipo.id}" style="cursor:pointer;">
                  <img src="${d.equipo.escudo}" alt="${d.equipo.nombre}">
                  <span>${d.equipo.nombre}</span>
                </div>
                <div class="db-track-col">
                  <div class="db-line-bg"></div>
                  <div class="db-bar-span" style="left:${minPct}%; width:${Math.max(maxPct - minPct, 1)}%; background:${barColor};"></div>
                  <div class="db-marker marker-ap" style="left:${d.apEfect}%;" title="Apertura: ${d.apEfect}%"></div>
                  <div class="db-marker marker-cl" style="left:${d.clEfect}%;" title="Clausura: ${d.clEfect}%"></div>
                </div>
                <div class="db-delta-col" style="color:${barColor};">
                  ${deltaSign}
                </div>
              </div>
            `;
          }).join('')}
          <div class="dumbbell-axis">
            <span style="left:0%;">0%</span>
            <span style="left:50%; transform:translateX(-50%);">50%</span>
            <span style="right:0%;">100%</span>
          </div>
        </div>
      </div>
    `;

    // Eventos de filtros de estadísticas
    $$('button[data-st-torneo]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.statsTorneo = btn.dataset.stTorneo;
        renderEstadisticas();
      });
    });

    $$('button[data-st-zona]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.statsZona = btn.dataset.stZona;
        renderEstadisticas();
      });
    });

    // Ordenamiento por columnas
    $$('th.sortable-th', container).forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if (state.statsSortCol === col) {
          state.statsSortAsc = !state.statsSortAsc;
        } else {
          state.statsSortCol = col;
          state.statsSortAsc = false;
        }
        renderEstadisticas();
      });
    });

    // Clic en equipo para abrir Ficha
    $$('[data-team]', container).forEach(el => {
      el.addEventListener('click', () => {
        const teamId = el.dataset.team;
        if (teamId) openTeamModal(teamId);
      });
    });
  }

  // =========================================================================
  // SECCIÓN E: GOLEADORES
  // =========================================================================
  function renderGoleadores() {
    const container = $('#view-goleadores');
    if (!container) return;

    const lista = state.goleadoresTorneo === 'clausura' ? DATA.clausura.goleadores : DATA.apertura.goleadores;

    const rowsHtml = (lista || []).map((g, idx) => {
      const team = getTeam(g.equipo);
      const isTop = idx === 0;

      return `
        <tr class="${isTop ? 'row-top-scorer' : ''}">
          <td class="col-pos">${idx + 1}</td>
          <td class="col-player">
            <span class="player-name">${g.jugador}</span>
          </td>
          <td class="col-team">
            <div class="team-cell" data-team="${team?.id || ''}">
              ${renderCrestImg(team)}
              <span>${g.equipo}</span>
            </div>
          </td>
          <td class="col-highlight" style="font-size:1.15rem;">${g.goles}</td>
        </tr>
      `;
    }).join('');

    container.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <h2>Tabla de Goleadores</h2>
          <span class="section-badge">${state.goleadoresTorneo.toUpperCase()} 2026</span>
        </div>
        <div class="pill-group" role="tablist" aria-label="Seleccionar Torneo Goleadores">
          <button class="pill-btn ${state.goleadoresTorneo === 'clausura' ? 'active' : ''}" data-gol-torneo="clausura">Clausura</button>
          <button class="pill-btn ${state.goleadoresTorneo === 'apertura' ? 'active' : ''}" data-gol-torneo="apertura">Apertura</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="league-table goleadores-table">
          <thead>
            <tr>
              <th>#</th>
              <th style="text-align: left;">Jugador</th>
              <th style="text-align: left;">Equipo</th>
              <th>Goles</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml.length > 0 ? rowsHtml : `<tr><td colspan="4" style="text-align:center; padding:30px; color:var(--muted);">No hay registros de goles.</td></tr>`}
          </tbody>
        </table>
      </div>
    `;

    $$('button[data-gol-torneo]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        state.goleadoresTorneo = btn.dataset.golTorneo;
        renderGoleadores();
      });
    });

    $$('.team-cell', container).forEach(cell => {
      cell.addEventListener('click', () => {
        const teamId = cell.dataset.team;
        if (teamId) openTeamModal(teamId);
      });
    });
  }

  // =========================================================================
  // SECCIÓN F: SANCIONES (BUSCADOR SIN PÉRDIDA DE FOCO)
  // =========================================================================
  function renderSanciones() {
    const container = $('#view-sanciones');
    if (!container) return;

    let tbody = $('#sancionesTbody', container);
    if (!tbody) {
      container.innerHTML = `
        <div class="section-header">
          <div class="section-title">
            <h2>Tribunal de Disciplina</h2>
            <span class="section-badge">Boletín Oficial de Sanciones</span>
          </div>
          <div class="search-input-box">
            <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="sancionSearchInput" placeholder="Buscar jugador, club o motivo..." value="${state.sancionesQuery}">
          </div>
        </div>

        <div style="margin-bottom:16px;">
          <div class="pill-group" role="tablist" aria-label="Filtrar Sanciones">
            <button class="pill-btn ${state.sancionesEstado === 'todas' ? 'active' : ''}" data-filtro="todas">Todas</button>
            <button class="pill-btn ${state.sancionesEstado === 'vigentes' ? 'active' : ''}" data-filtro="vigentes">Vigentes</button>
            <button class="pill-btn ${state.sancionesEstado === 'cumplidas' ? 'active' : ''}" data-filtro="cumplidas">Cumplidas</button>
            <button class="pill-btn ${state.sancionesEstado === 'definitivas' ? 'active' : ''}" data-filtro="definitivas">Inhabilitación Definitiva</button>
          </div>
        </div>

        <div class="table-responsive">
          <table class="league-table sanciones-table">
            <thead>
              <tr>
                <th style="text-align:left;">Jugador / Miembro / Club</th>
                <th style="text-align:left;">Equipo</th>
                <th>Sanción Aplicada</th>
                <th>Artículo</th>
                <th>Motivo / Resolución</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody id="sancionesTbody"></tbody>
          </table>
        </div>
        <div class="sanciones-legend">
          <span class="badge-sancion-estado sancion-vigente">Vigente</span>
          <span class="badge-sancion-estado sancion-encurso">En curso</span>
          <span class="badge-sancion-estado sancion-provisoria">Provisoria</span>
          <span class="badge-sancion-estado sancion-cumplida">Cumplida</span>
          <span class="badge-sancion-estado sancion-definitiva">Definitiva</span>
          <span class="badge-sancion-estado sancion-aviso">Amonestación</span>
        </div>
      `;

      tbody = $('#sancionesTbody', container);

      const searchInput = $('#sancionSearchInput', container);
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          state.sancionesQuery = e.target.value;
          updateSancionesRows();
        });
      }

      $$('button[data-filtro]', container).forEach(btn => {
        btn.addEventListener('click', () => {
          state.sancionesEstado = btn.dataset.filtro;
          $$('button[data-filtro]', container).forEach(b => b.classList.toggle('active', b === btn));
          updateSancionesRows();
        });
      });
    }

    updateSancionesRows();
  }

  function updateSancionesRows() {
    const tbody = $('#sancionesTbody');
    if (!tbody) return;

    const query = state.sancionesQuery.toLowerCase().trim();
    const filtro = state.sancionesEstado;

    const filtered = DATA.sanciones.filter(s => {
      const matchQuery = s.jugador.toLowerCase().includes(query) ||
                         s.equipo.toLowerCase().includes(query) ||
                         (s.motivo && s.motivo.toLowerCase().includes(query)) ||
                         (s.articulo && s.articulo.toLowerCase().includes(query));
      if (!matchQuery) return false;

      if (filtro === 'vigentes') return /vigente|resta|provisori/.test(s.estado.toLowerCase());
      if (filtro === 'cumplidas') return s.estado.toLowerCase().includes('cumplid');
      if (filtro === 'definitivas') return s.estado.toLowerCase().includes('definitiv');
      return true;
    });

    const rowsHtml = filtered.map(s => {
      const team = getTeam(s.equipo);
      const est = s.estado.toLowerCase();
      let badgeClass = "sancion-vigente";
      if (est.includes('definitiv')) badgeClass = "sancion-definitiva";
      else if (est.includes('resta')) badgeClass = "sancion-encurso";
      else if (est.includes('cumplid')) badgeClass = "sancion-cumplida";
      else if (est.includes('provisori')) badgeClass = "sancion-provisoria";
      else if (est.includes('amonest') || est.includes('amarilla')) badgeClass = "sancion-aviso";

      return `
        <tr class="row-${badgeClass}">
          <td style="text-align:left; font-weight:700;">${s.jugador}</td>
          <td class="col-team">
            <div class="team-cell" data-team="${team?.id || ''}">
              ${renderCrestImg(team)}
              <span>${s.equipo}</span>
            </div>
          </td>
          <td class="col-sancion">${s.sancion}</td>
          <td style="color:var(--muted); font-size:0.85rem;">${s.articulo || "—"}</td>
          <td style="color:var(--dim); font-size:0.85rem; max-width:280px; white-space:normal;">${s.motivo || "—"}</td>
          <td><span class="badge-sancion-estado ${badgeClass}">${s.estado}</span></td>
        </tr>
      `;
    }).join('');

    tbody.innerHTML = rowsHtml.length > 0
      ? rowsHtml
      : `<tr><td colspan="6" style="padding:30px; text-align:center; color:var(--muted);">No se encontraron sanciones registradas para "${state.sancionesQuery}".</td></tr>`;

    $$('.team-cell', tbody).forEach(cell => {
      cell.addEventListener('click', () => {
        const teamId = cell.dataset.team;
        if (teamId) openTeamModal(teamId);
      });
    });
  }

  // =========================================================================
  // SECCIÓN G: REGLAMENTO OFICIAL COMPLETO E INTEGRAL (UNSJ 2026)
  // =========================================================================

  // Conjunto de IDs de artículos expandidos actualmente
  const regExpandedState = new Set(['reg-a-art-1', 'reg-a-art-3', 'reg-a-art-8']);

  function formatReglamentoText(raw) {
    if (!raw) return '';
    // Limpieza de caracteres de escape y múltiples líneas vacías
    const clean = raw.replace(/\r/g, '').trim();
    const lines = clean.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    const parts = [];
    let currentBulletGroup = [];

    const flushBullets = () => {
      if (currentBulletGroup.length > 0) {
        currentBulletGroup.forEach(item => {
          parts.push(`<div class="reg-bullet-item">${escapeHtml(item)}</div>`);
        });
        currentBulletGroup = [];
      }
    };

    lines.forEach(line => {
      // Subtítulo de sección (ej: "II – DE LOS DELEGADOS", "V – DE LA INSCRIPCIÓN")
      if (/^[I|V|X]+\s*[-–—]/i.test(line)) {
        flushBullets();
        parts.push(`<div class="reg-subheading">${escapeHtml(line)}</div>`);
      }
      // Elementos de lista o numeraciones
      else if (/^(\d+[\.\)]|[a-z][\.\)]|•|[-–—])\s+/i.test(line)) {
        currentBulletGroup.push(line);
      }
      else {
        flushBullets();
        parts.push(`<p class="reg-paragraph">${escapeHtml(line)}</p>`);
      }
    });

    flushBullets();
    return parts.join('');
  }

  function getReglamentoBadge(cat) {
    switch (cat) {
      case 'categoriaA':
        return '<span class="reg-badge badge-cat-a">Categoría A</span>';
      case 'formaDisputa':
        return '<span class="reg-badge badge-forma">Forma de Disputa</span>';
      case 'reglamentoGeneral':
        return '<span class="reg-badge badge-gen">General UNSJ</span>';
      case 'tribunalDisciplina':
        return '<span class="reg-badge badge-trib">Tribunal</span>';
      case 'fifa':
        return '<span class="reg-badge badge-fifa">FIFA / IFAB</span>';
      default:
        return '<span class="reg-badge">Oficial</span>';
    }
  }

  function getAllReglamentosList() {
    const r = DATA.reglamentosCompletos || {};
    return [
      ...(r.categoriaA || []),
      ...(r.formaDisputa || []),
      ...(r.reglamentoGeneral || []),
      ...(r.tribunalDisciplina || []),
      ...(r.fifa || [])
    ];
  }

  function filterReglamentos() {
    const all = getAllReglamentosList();
    const seccion = state.reglamentoSeccion || 'todas';
    const q = (state.reglamentoQuery || '').trim().toLowerCase();

    return all.filter(item => {
      // Filtro por categoría / sección
      if (seccion !== 'todas' && item.categoria !== seccion) {
        return false;
      }

      // Filtro por texto de búsqueda
      if (q) {
        const textTarget = `${item.articulo || ''} ${item.titulo || ''} ${item.seccion || ''} ${item.texto || ''}`.toLowerCase();
        return textTarget.includes(q);
      }

      return true;
    });
  }

  function renderReglamentosArticlesList() {
    const listContainer = $('#reg-articles-list');
    const countBadge = $('#reg-counter-display');
    if (!listContainer) return;

    const filtered = filterReglamentos();

    if (countBadge) {
      countBadge.textContent = `${filtered.length} norma${filtered.length === 1 ? '' : 's'} disponible${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="reg-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No se encontraron artículos</h3>
          <p>No hay artículos que coincidan con "${escapeHtml(state.reglamentoQuery || '')}". Intentá buscar con términos como <em>sustituciones, amarillas, W.O., seguro, carnet</em> o seleccioná otra categoría.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(item => {
      const isOpen = state.reglamentoExpandedAll || regExpandedState.has(item.id);
      const badgeHtml = getReglamentoBadge(item.categoria);
      const formattedBody = formatReglamentoText(item.texto);

      return `
        <article class="reg-card ${isOpen ? 'is-open' : ''}" data-reg-id="${escapeHtml(item.id)}" id="article-${escapeHtml(item.id)}">
          <button type="button" class="reg-card-header" aria-expanded="${isOpen ? 'true' : 'false'}" data-reg-toggle="${escapeHtml(item.id)}">
            <div class="reg-header-left">
              ${badgeHtml}
              <span class="reg-art-num">${escapeHtml(item.articulo)}</span>
              <span class="reg-art-title">${escapeHtml(item.titulo)}</span>
            </div>
            <svg class="reg-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="reg-card-body">
            ${formattedBody}
          </div>
        </article>
      `;
    }).join('');

    // Asignar listeners a los encabezados de artículos (acordeón individual)
    $$('[data-reg-toggle]', listContainer).forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.regToggle;
        const card = btn.closest('.reg-card');
        if (!card) return;

        const isCurrentlyOpen = card.classList.contains('is-open');
        if (isCurrentlyOpen) {
          card.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          regExpandedState.delete(id);
        } else {
          card.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          regExpandedState.add(id);
        }
      });
    });
  }

  function renderReglamento() {
    const container = $('#view-reglamento');
    if (!container) return;

    // Conteo por cada sección para mostrar en los pills
    const r = DATA.reglamentosCompletos || {};
    const catACount = (r.categoriaA || []).length;
    const formaCount = (r.formaDisputa || []).length;
    const genCount = (r.reglamentoGeneral || []).length;
    const tribCount = (r.tribunalDisciplina || []).length;
    const fifaCount = (r.fifa || []).length;
    const totalCount = catACount + formaCount + genCount + tribCount + fifaCount;

    // Si ya está renderizada la barra fija y solo cambiamos de pestaña o aplicamos filtro,
    // evitamos destruir el input para preservar foco y cursor
    const existingToolbar = $('.reglamento-toolbar-card', container);
    if (existingToolbar) {
      renderReglamentosArticlesList();
      return;
    }

    container.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <h2>Reglamento Oficial Integral</h2>
          <span class="section-badge">Temporada Oficial 2026 · UNSJ & DGDR</span>
        </div>
      </div>

      <div class="reglamento-toolbar-card">
        <div class="reg-search-row">
          <div class="reg-search-box">
            <svg class="reg-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="regSearchInput" 
              class="reg-search-input" 
              placeholder="Buscar por artículo, tema, sanción o regla (ej: sustituciones, W.O., seguro, amarillas, carnet)..."
              value="${escapeHtml(state.reglamentoQuery || '')}"
              autocomplete="off"
            >
            <button type="button" id="regSearchClear" class="reg-search-clear" style="display: ${state.reglamentoQuery ? 'block' : 'none'};" title="Limpiar búsqueda">✕</button>
          </div>

          <button type="button" id="regToggleAllBtn" class="reg-toggle-all-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 15l5 5 5-5M7 9l5-5 5 5"/>
            </svg>
            <span>${state.reglamentoExpandedAll ? 'Colapsar Todos' : 'Expandir Todos'}</span>
          </button>
        </div>

        <div class="reg-pills-row" id="regCategoryPills">
          <button type="button" class="reg-pill ${state.reglamentoSeccion === 'todas' ? 'active' : ''}" data-cat="todas">
            <span>Todas</span>
            <span class="reg-pill-count">${totalCount}</span>
          </button>
          <button type="button" class="reg-pill ${state.reglamentoSeccion === 'categoriaA' ? 'active' : ''}" data-cat="categoriaA">
            <span>Categoría A</span>
            <span class="reg-pill-count">${catACount}</span>
          </button>
          <button type="button" class="reg-pill ${state.reglamentoSeccion === 'formaDisputa' ? 'active' : ''}" data-cat="formaDisputa">
            <span>Forma de Disputa</span>
            <span class="reg-pill-count">${formaCount}</span>
          </button>
          <button type="button" class="reg-pill ${state.reglamentoSeccion === 'reglamentoGeneral' ? 'active' : ''}" data-cat="reglamentoGeneral">
            <span>Reglamento General UNSJ</span>
            <span class="reg-pill-count">${genCount}</span>
          </button>
          <button type="button" class="reg-pill ${state.reglamentoSeccion === 'tribunalDisciplina' ? 'active' : ''}" data-cat="tribunalDisciplina">
            <span>Tribunal de Disciplina</span>
            <span class="reg-pill-count">${tribCount}</span>
          </button>
          <button type="button" class="reg-pill ${state.reglamentoSeccion === 'fifa' ? 'active' : ''}" data-cat="fifa">
            <span>FIFA / IFAB 2026</span>
            <span class="reg-pill-count">${fifaCount}</span>
          </button>
        </div>

        <div class="reg-status-strip">
          <span id="reg-counter-display">Cargando normativas...</span>
          <span>Comisión de la Liga · Normativa Vigente</span>
        </div>
      </div>

      <div class="reg-articles-list" id="reg-articles-list">
        <!-- Inyección dinámica de artículos -->
      </div>
    `;

    // Conectar eventos del buscador en tiempo real (tipeo continuo sin perder foco)
    const searchInput = $('#regSearchInput', container);
    const clearBtn = $('#regSearchClear', container);
    const toggleAllBtn = $('#regToggleAllBtn', container);

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.reglamentoQuery = e.target.value;
        if (clearBtn) {
          clearBtn.style.display = state.reglamentoQuery ? 'block' : 'none';
        }
        renderReglamentosArticlesList();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.reglamentoQuery = '';
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        clearBtn.style.display = 'none';
        renderReglamentosArticlesList();
      });
    }

    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        state.reglamentoExpandedAll = !state.reglamentoExpandedAll;
        const allItems = getAllReglamentosList();
        if (state.reglamentoExpandedAll) {
          allItems.forEach(i => regExpandedState.add(i.id));
        } else {
          regExpandedState.clear();
        }
        toggleAllBtn.querySelector('span').textContent = state.reglamentoExpandedAll ? 'Colapsar Todos' : 'Expandir Todos';
        renderReglamentosArticlesList();
      });
    }

    // Eventos de selección de categorías (pills)
    $$('#regCategoryPills .reg-pill', container).forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.dataset.cat;
        state.reglamentoSeccion = cat;

        $$('#regCategoryPills .reg-pill', container).forEach(p => {
          p.classList.toggle('active', p.dataset.cat === cat);
        });

        renderReglamentosArticlesList();
      });
    });

    // Renderizar la lista inicial
    renderReglamentosArticlesList();
  }

  // =========================================================================
  // MODAL / FICHA DEL EQUIPO (PLANTILLA AVANZADA CON APERTURA Y CLAUSURA)
  // =========================================================================
  function calcTeamTournamentStats(matches) {
    let pj = matches.length;
    let g = 0, e = 0, p = 0, gf = 0, gc = 0, vi = 0, pts = 0;
    let locPJ = 0, locG = 0, locE = 0, locP = 0, locGF = 0, locGC = 0;
    let visPJ = 0, visG = 0, visE = 0, visP = 0, visGF = 0, visGC = 0;
    let mayorVictoria = null, mayorDifVic = -1;
    let peorDerrota = null, mayorDifDer = -1;

    matches.forEach(m => {
      gf += m.gf;
      gc += m.gc;
      if (m.gc === 0) vi++;

      if (m.gf > m.gc) {
        g++; pts += 3;
        const dif = m.gf - m.gc;
        if (dif > mayorDifVic) { mayorDifVic = dif; mayorVictoria = m; }
      } else if (m.gf === m.gc) {
        e++; pts += 1;
      } else {
        p++;
        const dif = m.gc - m.gf;
        if (dif > mayorDifDer) { mayorDifDer = dif; peorDerrota = m; }
      }

      if (m.esLocal) {
        locPJ++; locGF += m.gf; locGC += m.gc;
        if (m.gf > m.gc) locG++;
        else if (m.gf === m.gc) locE++;
        else locP++;
      } else {
        visPJ++; visGF += m.gf; visGC += m.gc;
        if (m.gf > m.gc) visG++;
        else if (m.gf === m.gc) visE++;
        else visP++;
      }
    });

    const efect = pj > 0 ? Math.round((pts / (pj * 3)) * 100) : 0;
    const efectLoc = locPJ > 0 ? Math.round(((locG * 3 + locE) / (locPJ * 3)) * 100) : 0;
    const efectVis = visPJ > 0 ? Math.round(((visG * 3 + visE) / (visPJ * 3)) * 100) : 0;
    const gfPJ = pj > 0 ? (gf / pj).toFixed(1).replace('.', ',') : "0,0";
    const gcPJ = pj > 0 ? (gc / pj).toFixed(1).replace('.', ',') : "0,0";

    return {
      pj, g, e, p, gf, gc, vi, pts,
      locPJ, locG, locE, locP, locGF, locGC,
      visPJ, visG, visE, visP, visGF, visGC,
      efect, efectLoc, efectVis, gfPJ, gcPJ,
      mayorVictoria, peorDerrota
    };
  }

  function downloadTeamCrest(url, filename, btnElement) {
    if (btnElement) {
      btnElement.classList.add('downloading');
      const span = btnElement.querySelector('span');
      if (span) span.textContent = 'Descargando...';
    }

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error al descargar el escudo');
        return res.blob();
      })
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = filename || 'escudo.png';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(blobUrl);
        }, 300);

        if (btnElement) {
          btnElement.classList.remove('downloading');
          btnElement.classList.add('download-success');
          const span = btnElement.querySelector('span');
          if (span) span.textContent = '¡Descargado!';
          setTimeout(() => {
            btnElement.classList.remove('download-success');
            if (span) span.textContent = 'Descargar Escudo';
          }, 2200);
        }
      })
      .catch(err => {
        console.warn('Fallback a descarga por enlace directo:', err);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'escudo.png';
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 300);

        if (btnElement) {
          btnElement.classList.remove('downloading');
          const span = btnElement.querySelector('span');
          if (span) span.textContent = 'Descargar Escudo';
        }
      });
  }

  function openTeamModal(teamId) {
    const team = teamsById[teamId] || teamsByName[teamId.toLowerCase()];
    if (!team) return;

    state.activeTeamId = team.id;
    if (!state.modalTorneo) state.modalTorneo = 'clausura';
    if (!state.modalMatchFilter) state.modalMatchFilter = 'todos';

    const modal = $('#teamModal') || $('#teamModalBackdrop');
    if (!modal) return;

    // Obtener todos los partidos de Apertura y Clausura
    const allMatches = getTeamChronologicalMatches(team.nombre);
    const clMatches = allMatches.filter(m => m.torneo === 'Clausura');
    const apMatches = allMatches.filter(m => m.torneo.startsWith('Apertura'));

    const statsClausura = calcTeamTournamentStats(clMatches);
    const statsApertura = calcTeamTournamentStats(apMatches);
    const statsAnual = calcTeamTournamentStats(allMatches);

    const curTorneo = state.modalTorneo;
    const curStats = curTorneo === 'clausura' ? statsClausura : curTorneo === 'apertura' ? statsApertura : statsAnual;

    // Calcular racha actual e invicto más largo
    let rachaActualStr = "—";
    let invictoLargo = 0;
    if (allMatches.length > 0) {
      const first = allMatches[0];
      const tipo = first.gf > first.gc ? 'victoria' : first.gf === first.gc ? 'empate' : 'derrota';
      let c = 0;
      for (const m of allMatches) {
        const t = m.gf > m.gc ? 'victoria' : m.gf === m.gc ? 'empate' : 'derrota';
        if (t === tipo) c++;
        else break;
      }
      rachaActualStr = `${c} ${tipo}${c > 1 ? 's' : ''}`;

      let invCount = 0;
      [...allMatches].reverse().forEach(m => {
        if (m.gf >= m.gc) {
          invCount++;
          if (invCount > invictoLargo) invictoLargo = invCount;
        } else {
          invCount = 0;
        }
      });
    }

    // Posición en tabla
    const tablaZona = (team.zonaClausura === 'A' ? DATA.clausura.tablas.zonaA : DATA.clausura.tablas.zonaB) || [];
    const posRow = tablaZona.find(r => r.equipo.toLowerCase() === team.nombre.toLowerCase());
    const posStr = ZONA_UNICA ? (posRow ? `${posRow.pos}° del Clausura` : 'Clausura') : (posRow ? `${posRow.pos}° de la Zona ${team.zonaClausura} del Clausura` : (team.zonaClausura ? `Zona ${team.zonaClausura}` : 'Zona a confirmar'));

    const teamOptionsHtml = DATA.equipos.map(eq => {
      const sel = eq.id === team.id ? 'selected' : '';
      return `<option value="${eq.id}" ${sel}>${eq.nombre}</option>`;
    }).join('');

    // Anillo SVG de efectividad
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (curStats.efect / 100) * circumference;

    const modalBody = $('#teamModalBody');
    if (!modalBody) return;

    const anualRow = Array.isArray(DATA.tablaAnual) ? DATA.tablaAnual.find(r => r.equipo.toLowerCase() === team.nombre.toLowerCase()) : null;
    const bonusModalBadge = anualRow && anualRow.bonus > 0 ? `<span class="badge-bonus-pts">+${anualRow.bonus} bonus</span>` : '';
    const sancionModalBadge = anualRow && anualRow.sancionPts > 0 ? `<span class="badge-sancion-pts">-${anualRow.sancionPts} sanción</span>` : '';

    // Renderizar tarjeta individual de partido
    function renderMatchItem(m) {
      const rivalTeam = getTeam(m.rival);
      const isWin = m.gf > m.gc;
      const isDraw = m.gf === m.gc;
      const resClass = isWin ? 'score-win' : isDraw ? 'score-draw' : 'score-loss';
      const resLetter = isWin ? 'G' : isDraw ? 'E' : 'P';
      const torneoClass = m.torneo === 'Clausura' ? 'badge-clausura' : m.torneo.includes('Playoffs') ? 'badge-playoffs' : 'badge-apertura';
      const penalesHtml = m.penalesL !== undefined ? `<span class="tmc-penales">(${m.penalesL}-${m.penalesV} pen.)</span>` : '';

      return `
        <div class="team-match-card">
          <div class="tmc-top">
            <span class="tmc-torneo-badge ${torneoClass}">${m.torneo} · ${m.faseLabel}</span>
            <span class="tmc-cond">${m.esLocal ? 'LOCAL' : 'VISITANTE'}</span>
          </div>
          <div class="tmc-main">
            <div class="tmc-rival-box" data-team="${rivalTeam?.id || ''}" style="${rivalTeam ? 'cursor:pointer;' : ''}">
              ${renderCrestImg(rivalTeam, "tmc-rival-crest")}
              <span class="tmc-rival-name" title="${m.rival}">${m.rival}</span>
            </div>
            <div class="tmc-score-badge ${resClass}">
              <span class="tmc-letter">${resLetter}</span>
              <span>${m.golesL}-${m.golesV}</span>
              ${penalesHtml}
            </div>
          </div>
          ${m.nota ? `<div class="tmc-nota">${escapeHtml(m.nota)}</div>` : ''}
        </div>
      `;
    }

    const matchFilter = state.modalMatchFilter;
    let matchesContentHtml = '';

    if (matchFilter === 'clausura') {
      matchesContentHtml = `
        <div class="team-matches-grid">
          ${clMatches.length > 0 ? clMatches.map(renderMatchItem).join('') : '<div style="color:var(--muted); font-size:0.9rem;">Sin partidos disputados en Clausura.</div>'}
        </div>
      `;
    } else if (matchFilter === 'apertura') {
      matchesContentHtml = `
        <div class="team-matches-grid">
          ${apMatches.length > 0 ? apMatches.map(renderMatchItem).join('') : '<div style="color:var(--muted); font-size:0.9rem;">Sin partidos disputados en Apertura.</div>'}
        </div>
      `;
    } else {
      // TODOS: Mostrar Clausura y Apertura agrupados con títulos
      matchesContentHtml = `
        <div style="margin-bottom:18px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
            <span class="tmc-torneo-badge badge-clausura" style="font-size:0.75rem;">Torneo Clausura 2026 (En curso)</span>
            <span style="font-size:0.8rem; color:var(--text-secondary,#667382); font-weight:600;">${clMatches.length} partidos</span>
          </div>
          <div class="team-matches-grid">
            ${clMatches.length > 0 ? clMatches.map(renderMatchItem).join('') : '<div style="color:var(--muted); font-size:0.9rem;">Sin partidos disputados.</div>'}
          </div>
        </div>

        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
            <span class="tmc-torneo-badge badge-apertura" style="font-size:0.75rem;">Torneo Apertura 2026 (Finalizado)</span>
            <span style="font-size:0.8rem; color:var(--text-secondary,#667382); font-weight:600;">${apMatches.length} partidos</span>
          </div>
          <div class="team-matches-grid">
            ${apMatches.length > 0 ? apMatches.map(renderMatchItem).join('') : '<div style="color:var(--muted); font-size:0.9rem;">Sin partidos disputados.</div>'}
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <!-- HEADER CON MARCA DEL EQUIPO Y DROPDOWN -->
      <div class="team-modal-header-row">
        <div>
          <div style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.12em; font-weight:800; color:var(--text-secondary,#667382); margin-bottom:4px;">Ficha Oficial del Club</div>
          <div class="team-modal-brand">
            <img src="${team.escudo || genericCrestUri(team.nombre)}" alt="${team.nombre}" class="modal-crest-lg">
            <div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <h2 class="modal-team-title">${team.nombre}</h2>
                ${bonusModalBadge}
                ${sancionModalBadge}
              </div>
              <div class="modal-team-subtitle">${posStr}${ZONA_UNICA ? (posAperturaDe(team.nombre) ? ` · ${posAperturaDe(team.nombre)}° del Apertura` : ' · No jugó el Apertura') : ` · ${team.zonaApertura ? `Apertura Zona ${team.zonaApertura}` : ''}`}</div>
              
              <!-- ACCIONES DEL EQUIPO: INSTAGRAM & DESCARGA DE ESCUDO -->
              <div class="team-modal-actions-row">
                ${team.instagram ? `
                  <a href="${team.instagram}" target="_blank" rel="noopener noreferrer" class="team-social-btn team-ig-btn" title="Perfil oficial de Instagram de ${team.nombre}">
                    <svg class="ig-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>${team.instagramHandle || 'Instagram'}</span>
                  </a>
                ` : ''}
                ${team.escudo ? `<button type="button" class="team-download-crest-btn" id="btnDownloadCrest" data-escudo="${team.escudo}" data-filename="escudo-${team.slug || team.id}.png" title="Descargar escudo oficial de ${team.nombre} en alta calidad">
                  <svg class="dl-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Descargar Escudo</span>
                </button>` : ''}
              </div>
            </div>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px;">
          <span style="font-size:0.78rem; color:var(--text-secondary,#667382); font-weight:700; text-transform:uppercase;">Cambiar de Club</span>
          <select id="modalTeamSelect" class="team-dropdown-select">
            ${teamOptionsHtml}
          </select>
        </div>
      </div>

      <!-- TABS DE TORNEO PARA LAS ESTADÍSTICAS -->
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <div class="modal-torneo-tabs" role="tablist">
          <button class="modal-torneo-btn ${curTorneo === 'clausura' ? 'active' : ''}" data-torneo="clausura">Clausura 2026 (${clMatches.length} PJ)</button>
          <button class="modal-torneo-btn ${curTorneo === 'apertura' ? 'active' : ''}" data-torneo="apertura">Apertura 2026 (${apMatches.length} PJ)</button>
          <button class="modal-torneo-btn ${curTorneo === 'anual' ? 'active' : ''}" data-torneo="anual">Temporada Anual (${allMatches.length} PJ)</button>
        </div>
        <span style="font-size:0.82rem; color:var(--text-secondary,#667382); font-weight:600;">
          ${curStats.g} G · ${curStats.e} E · ${curStats.p} P
        </span>
      </div>

      <!-- PANEL SUPERIOR: ANILLO + 4 TARJETAS + TABLA CONDICIÓN -->
      <div class="team-modal-kpi-grid">
        <div class="efect-ring-card">
          <svg class="ring-svg" viewBox="0 0 100 100">
            <circle class="ring-bg" cx="50" cy="50" r="40" fill="none"></circle>
            <circle class="ring-progress" cx="50" cy="50" r="40" fill="none" style="stroke-dasharray:${circumference}; stroke-dashoffset:${strokeDashoffset};"></circle>
          </svg>
          <div class="ring-label">
            <span class="ring-pct">${curStats.efect}%</span>
            <span class="ring-txt">Efectividad</span>
          </div>
        </div>

        <div class="metric-tiles-2x2">
          <div class="metric-tile">
            <span class="tile-val">${curStats.gf}</span>
            <span class="tile-lbl">Goles a favor · ${curStats.gfPJ} por PJ</span>
          </div>
          <div class="metric-tile">
            <span class="tile-val">${curStats.gc}</span>
            <span class="tile-lbl">En contra · ${curStats.gcPJ} por PJ</span>
          </div>
          <div class="metric-tile">
            <span class="tile-val">${curStats.vi}</span>
            <span class="tile-lbl">Vallas invictas</span>
          </div>
          <div class="metric-tile">
            <span class="tile-val">${curStats.pts}</span>
            <span class="tile-lbl">Puntos ganados (${curStats.pj} PJ)</span>
          </div>
        </div>

        <div class="condicion-table-card">
          <table class="condicion-table">
            <thead>
              <tr>
                <th style="text-align:left;">Condición</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>Efect.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cond-label">Local</td>
                <td>${curStats.locPJ}</td>
                <td>${curStats.locG}</td>
                <td>${curStats.locE}</td>
                <td>${curStats.locP}</td>
                <td>${curStats.locGF}</td>
                <td>${curStats.locGC}</td>
                <td class="cond-efect">${curStats.efectLoc}%</td>
              </tr>
              <tr>
                <td class="cond-label">Visitante</td>
                <td>${curStats.visPJ}</td>
                <td>${curStats.visG}</td>
                <td>${curStats.visE}</td>
                <td>${curStats.visP}</td>
                <td>${curStats.visGF}</td>
                <td>${curStats.visGC}</td>
                <td class="cond-efect">${curStats.efectVis}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- SECCIÓN PARTIDO A PARTIDO (APERTURA Y CLAUSURA) -->
      <div class="modal-matches-section">
        <div class="modal-section-header">
          <div>
            <h3 class="modal-section-title">Resultados de la Temporada</h3>
            <span style="font-size:0.8rem; color:var(--text-secondary,#667382);">Historial oficial de partidos disputados</span>
          </div>
          <div class="match-filter-pills">
            <button class="match-filter-pill ${matchFilter === 'todos' ? 'active' : ''}" data-filter="todos">Todos (${allMatches.length})</button>
            <button class="match-filter-pill ${matchFilter === 'clausura' ? 'active' : ''}" data-filter="clausura">Clausura (${clMatches.length})</button>
            <button class="match-filter-pill ${matchFilter === 'apertura' ? 'active' : ''}" data-filter="apertura">Apertura (${apMatches.length})</button>
          </div>
        </div>

        ${matchesContentHtml}
      </div>

      <!-- 3 TARJETAS INFERIORES: MAYOR VICTORIA, DERROTA MÁS DURA, RACHA -->
      <div class="team-footer-cards-grid">
        <div class="footer-card">
          <div class="fc-label">Mayor Victoria</div>
          <div class="fc-val">${curStats.mayorVictoria ? `${curStats.mayorVictoria.gf}-${curStats.mayorVictoria.gc} vs ${curStats.mayorVictoria.rival}` : '—'}</div>
          <div class="fc-sub">${curStats.mayorVictoria ? `${curStats.mayorVictoria.torneo} · ${curStats.mayorVictoria.faseLabel} (${curStats.mayorVictoria.esLocal ? 'Local' : 'Visitante'})` : 'Sin registros'}</div>
        </div>

        <div class="footer-card">
          <div class="fc-label">Derrota Más Dura</div>
          <div class="fc-val">${curStats.peorDerrota ? `${curStats.peorDerrota.gf}-${curStats.peorDerrota.gc} vs ${curStats.peorDerrota.rival}` : '—'}</div>
          <div class="fc-sub">${curStats.peorDerrota ? `${curStats.peorDerrota.torneo} · ${curStats.peorDerrota.faseLabel} (${curStats.peorDerrota.esLocal ? 'Local' : 'Visitante'})` : 'Sin derrotas registradas'}</div>
        </div>

        <div class="footer-card">
          <div class="fc-label">Racha / Invicto</div>
          <div class="fc-val">${rachaActualStr}</div>
          <div class="fc-sub">Invicto más largo: ${invictoLargo} partido${invictoLargo > 1 ? 's' : ''}</div>
        </div>
      </div>
    `;

    // Eventos dentro del Modal
    const select = $('#modalTeamSelect', modalBody);
    if (select) {
      select.addEventListener('change', (e) => {
        openTeamModal(e.target.value);
      });
    }

    $$('.modal-torneo-btn', modalBody).forEach(btn => {
      btn.addEventListener('click', () => {
        state.modalTorneo = btn.dataset.torneo;
        openTeamModal(team.id);
      });
    });

    $$('.match-filter-pill', modalBody).forEach(btn => {
      btn.addEventListener('click', () => {
        state.modalMatchFilter = btn.dataset.filter;
        openTeamModal(team.id);
      });
    });

    $$('.tmc-rival-box', modalBody).forEach(box => {
      box.addEventListener('click', () => {
        const targetId = box.dataset.team;
        if (targetId) openTeamModal(targetId);
      });
    });

    const btnDl = $('#btnDownloadCrest', modalBody);
    if (btnDl) {
      btnDl.addEventListener('click', (e) => {
        e.preventDefault();
        const escudoUrl = btnDl.dataset.escudo;
        const filename = btnDl.dataset.filename || 'escudo.png';
        downloadTeamCrest(escudoUrl, filename, btnDl);
      });
    }

    modal.classList.add('active');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeTeamModal() {
    const modal = $('#teamModal') || $('#teamModalBackdrop');
    if (!modal) return;
    modal.classList.remove('active');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    state.activeTeamId = null;
  }

  // =========================================================================
  // NAVEGACIÓN Y CONTROLADOR DE PESTAÑAS
  // =========================================================================

  // =========================================================================
  // CATEGORÍAS B y C: ESQUELETO (sin informes todavía)
  // =========================================================================
  const ESQ = !!DATA.esqueleto;
  const ESQ_TXT = `Todavía no tenemos los informes de la Liga para la Categoría ${CAT}. Estamos armando la sección: cuando lleguen las fechas se cargan acá las tablas, el fixture, los goleadores y las sanciones.`;

  function esqBanner(extra = '') {
    return `<div class="banner-alert esq-banner"><div><b>Categoría ${CAT} · Sección en construcción</b>${ESQ_TXT}${extra}</div></div>`;
  }
  const esqBar = (w = 70) => `<span class="esq-bar" style="width:${w}%"></span>`;

  function renderHeroBoardEsqueleto() {
    const board = $('#heroBoard');
    if (!board) return;
    const n = DATA.equipos.length;
    const tile = (label, tag, body, desc, action = '', short = '') => `
      <div class="board-tile" ${action ? `data-action="${action}"` : ''}>
        <span class="tile-label"><em class="tl-long">${label}</em><em class="tl-short">${short || label}</em> <span>${tag}</span></span>
        <div class="tile-body">${body}</div>
        <span class="tile-desc">${desc}</span>
      </div>`;
    const vacio = `<span class="tile-name">—</span>`;
    board.innerHTML =
      tile('Líder Clausura · Zona A', '— PTS', vacio, 'Esperando informes', '', 'Líder Zona A') +
      tile('Líder Clausura · Zona B', '— PTS', vacio, 'Esperando informes', '', 'Líder Zona B') +
      tile(`Equipos Categoría ${CAT}`, `${n} EQUIPOS`, `<span class="tile-name">Ver equipos</span>`, 'Ver la lista de equipos', 'go-equipos', 'Equipos') +
      tile('Copa Challenger', 'EN JUEGO', `<span class="tile-name">Ver cuadro</span>`, `Equipos de la ${CAT} en la Copa`, 'go-challenger', 'Challenger');
    $$('.board-tile[data-action]', board).forEach(t => t.addEventListener('click', () => {
      switchTab(t.dataset.action === 'go-equipos' ? 'equipos' : 'challenger');
    }));
  }

  function esqHeader(titulo, badge, pills = '') {
    return `<div class="section-header">
        <div class="section-title"><h2>${titulo}</h2><span class="section-badge">${badge}</span></div>
        ${pills}
      </div>`;
  }
  const esqTorneoPills = (key) => `<div class="pill-group" role="tablist">
      ${['clausura', 'apertura'].map(t => `<button class="pill-btn ${state[key] === t ? 'active' : ''}" data-esq-torneo="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}
    </div>`;
  function esqBindTorneo(container, key, rerender) {
    $$('button[data-esq-torneo]', container).forEach(b => b.addEventListener('click', () => { state[key] = b.dataset.esqTorneo; rerender(); }));
    $$('button[data-goto-view]', container).forEach(b => b.addEventListener('click', () => switchTab(b.dataset.gotoView)));
  }
  const esqCta = `<div class="esq-cta"><span>Mientras tanto, seguí a los equipos de la ${CAT} en la Copa Challenger.</span><button class="legend-cta" data-goto-view="challenger">Ver Copa Challenger</button></div>`;

  function renderPosicionesEsqueleto() {
    const container = $('#view-posiciones');
    if (!container) return;
    if (state.posTorneo === 'anual') state.posTorneo = 'clausura';
    const filas = DATA.equipos.map(eq => `
      <tr>
        <td class="col-pos">–</td>
        <td class="col-team"><div class="team-cell">${renderCrestImg(getTeam(eq.nombre))}<span class="team-name">${escapeHtml(eq.nombre)}</span></div></td>
        <td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td class="col-highlight">–</td>
      </tr>`).join('');
    container.innerHTML = `
      ${esqHeader('Posiciones', `${state.posTorneo.toUpperCase()} 2026`, esqTorneoPills('posTorneo'))}
      <div style="margin-bottom:16px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <div class="pill-group"><button class="pill-btn active" disabled>Zonas a confirmar</button></div>
      </div>
      ${esqBanner()}
      <div class="table-responsive">
        <table class="league-table">
          <thead><tr><th>#</th><th style="text-align:left;">Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th class="col-highlight">Pts</th></tr></thead>
          <tbody>${filas}</tbody>
        </table>
      </div>
      <div class="esq-note">Equipos de la Categoría ${CAT} según el cuadro de la Copa Challenger, en orden alfabético. El orden y las zonas se actualizan con el primer informe.</div>
      ${esqCta}`;
    esqBindTorneo(container, 'posTorneo', renderPosicionesEsqueleto);
  }

  function renderFixtureEsqueleto() {
    const container = $('#view-fixture');
    if (!container) return;
    const card = () => `
      <div class="match-card esq-match">
        <div class="esq-match-row">${esqBar(55)}<span class="esq-score">–</span></div>
        <div class="esq-match-row">${esqBar(45)}<span class="esq-score">–</span></div>
        <div class="esq-match-foot">${esqBar(35)}</div>
      </div>`;
    container.innerHTML = `
      ${esqHeader('Fixture', `${state.fixtureTorneo.toUpperCase()} 2026`, esqTorneoPills('fixtureTorneo'))}
      <div class="fecha-pills-scroll" style="margin-bottom:16px"><div class="pill-group"><button class="pill-btn active" disabled>Fechas a confirmar</button></div></div>
      ${esqBanner()}
      <div class="matches-grid">${Array.from({ length: 6 }, card).join('')}</div>
      ${esqCta}`;
    esqBindTorneo(container, 'fixtureTorneo', renderFixtureEsqueleto);
  }

  function renderTablaVaciaEsqueleto(viewId, titulo, cols, key) {
    const container = $('#' + viewId);
    if (!container) return;
    const filas = Array.from({ length: 5 }, () => `<tr>${cols.map((c, i) => `<td${i === 1 ? ' style="text-align:left"' : ''}>${i === 1 ? esqBar(60) : '–'}</td>`).join('')}</tr>`).join('');
    container.innerHTML = `
      ${esqHeader(titulo, `CATEGORÍA ${CAT} · 2026`, key ? esqTorneoPills(key) : '')}
      ${esqBanner()}
      <div class="table-responsive">
        <table class="league-table">
          <thead><tr>${cols.map((c, i) => `<th${i === 1 ? ' style="text-align:left"' : ''}>${c}</th>`).join('')}</tr></thead>
          <tbody>${filas}</tbody>
        </table>
      </div>
      ${esqCta}`;
    if (key) esqBindTorneo(container, key, () => renderTablaVaciaEsqueleto(viewId, titulo, cols, key));
    else esqBindTorneo(container, '', () => {});
  }

  function mostrarProximamente(c) {
    let ov = $('#proxOverlay');
    if (ov) ov.remove();
    document.body.insertAdjacentHTML('beforeend', `
      <div class="prox-overlay" id="proxOverlay" role="dialog" aria-modal="true" aria-labelledby="proxTitulo">
        <div class="prox-card prox-${c}">
          <div class="prox-head"><span class="prox-letra">${c}</span><div><small>Categoría ${c}</small><h3 id="proxTitulo">Próximamente</h3></div></div>
          <p>Estamos preparando la sección de la <b>Categoría ${c}</b> con tablas, fixture, resultados y goleadores.</p>
          <p>Seguinos en Instagram para enterarte cuando esté lista.</p>
          <div class="prox-actions">
            <a class="prox-ig" href="https://www.instagram.com/ligauniversitaria.sj/" target="_blank" rel="noopener noreferrer">@ligauniversitaria.sj</a>
            <button type="button" class="prox-ok">Entendido</button>
          </div>
        </div>
      </div>`);
    ov = $('#proxOverlay');
    const cerrar = () => { ov.remove(); document.removeEventListener('keydown', esc); };
    const esc = e => { if (e.key === 'Escape') cerrar(); };
    ov.addEventListener('click', e => { if (e.target === ov) cerrar(); });
    $('.prox-ok', ov).addEventListener('click', cerrar);
    document.addEventListener('keydown', esc);
    $('.prox-ok', ov).focus();
  }

  // Celular: una sola tarjeta del header a la vez, rotando sola cada pocos segundos
  let heroRotTimer = null;
  function iniciarRotacionHero() {
    const board = $('#heroBoard');
    if (!board) return;
    clearInterval(heroRotTimer);
    $$('.hero-dots', board.parentNode).forEach(d => d.remove());
    const tiles = $$('.board-tile', board);
    const mq = window.matchMedia('(max-width: 600px)');
    if (!mq.matches || tiles.length < 2) {
      board.classList.remove('rotate');
      tiles.forEach(t => t.classList.remove('on'));
      return;
    }
    board.classList.add('rotate');
    board.insertAdjacentHTML('afterend', `<div class="hero-dots">${tiles.map((_, i) => `<button type="button" aria-label="Ver dato ${i + 1}" data-i="${i}"></button>`).join('')}</div>`);
    const dots = $$('.hero-dots button', board.parentNode);
    let i = 0;
    const mostrar = n => {
      const prev = i;
      i = (n + tiles.length) % tiles.length;
      tiles.forEach((t, k) => {
        t.classList.remove('out');
        if (k === prev && prev !== i) t.classList.add('out');
        t.classList.toggle('on', k === i);
      });
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
    };
    const arrancar = () => {
      clearInterval(heroRotTimer);
      const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reducir) heroRotTimer = setInterval(() => { if (!document.hidden) mostrar(i + 1); }, 4000);
    };
    dots.forEach(d => d.addEventListener('click', () => { mostrar(Number(d.dataset.i)); arrancar(); }));
    mostrar(0);
    arrancar();
  }

  // =========================================================================
  // INICIO: portada general (próximos partidos + tablas de las tres categorías)
  // =========================================================================
  const CAT_DATOS = { A: window.LIGA_DATA, B: window.LIGA_DATA_B, C: window.LIGA_DATA_C };
  const catsVisibles = () => CATS.filter(c => catDisponible(c) && CAT_DATOS[c] && !CAT_DATOS[c].esqueleto);
  const urlCat = (c, view) => `${location.pathname}?cat=${c.toLowerCase()}${view ? '#' + view : ''}`;

  function proximaFecha(d) {
    const f = ((d && d.clausura && d.clausura.fechas) || []).find(x => !x.disputada && (x.partidos || []).some(p => p.estado === 'pendiente'));
    return f || null;
  }

  function renderInicio() {
    const cont = $('#view-inicio');
    if (!cont) return;
    const cats = catsVisibles();
    const minutos = h => { const m = /(\d+):(\d+)/.exec(h || ''); return m ? (+m[1]) * 60 + (+m[2]) : 9999; };

    const bloques = cats.map(c => {
      const d = CAT_DATOS[c];
      const f = proximaFecha(d);
      if (!f) return '';
      const ordenDia = d => /s[áa]b/i.test(d || '') ? 0 : /dom/i.test(d || '') ? 1 : 2;
      const ps = f.partidos.filter(p => p.estado === 'pendiente').slice().sort((a, b) => ordenDia(a.dia) - ordenDia(b.dia) || minutos(a.hora) - minutos(b.hora) || (a.cancha || '').localeCompare(b.cancha || ''));
      const variosDias = new Set(ps.map(p => p.dia).filter(Boolean)).size > 1;
      const libres = f.partidos.filter(p => p.estado === 'libre').map(p => p.local === 'Libre' ? p.visitante : p.local);
      const dia = f.dia || '';
      const conHora = ps.some(p => p.hora);
      const crest = n => { const eq = (d.equipos || []).find(e => e.nombre === n); return `<img class="ini-crest" src="${(eq && eq.escudo) || escudoGlobal(n) || genericCrestUri(n)}" alt="">`; };
      let diaPrevio = null;
      const filas = ps.map(p => {
        const sep = variosDias && p.dia !== diaPrevio ? `<div class="ini-daysep">${escapeHtml(p.dia || '')}</div>` : '';
        diaPrevio = p.dia;
        return sep + `
        <a class="ini-match" href="${urlCat(c, 'fixture')}">
          ${conHora ? `<span class="ini-time">${p.hora || ''}</span>` : ''}
          <span class="ini-team">${escapeHtml(p.local)}${crest(p.local)}</span>
          <span class="ini-vs">vs</span>
          <span class="ini-team r">${crest(p.visitante)}${escapeHtml(p.visitante)}</span>
          ${p.cancha ? `<span class="ini-cancha">${escapeHtml(p.cancha.replace('Cancha de ', ''))}</span>` : ''}
        </a>`;
      }).join('');
      return `<div class="ini-block ini-cat-${c} ${conHora ? '' : 'sin-hora'}">
          <div class="ini-block-head">
            <span class="ini-chip">${c}</span>
            <b>Categoría ${c} · ${escapeHtml(f.nombre)}</b>
            <span class="ini-dia">${dia ? (variosDias ? 'El Palomar' : escapeHtml(dia) + ' · El Palomar') : 'Día y horario a confirmar'}</span>
          </div>
          ${filas}
          ${libres.length ? `<div class="ini-libre">Libre: ${libres.map(escapeHtml).join(', ')}</div>` : ''}
        </div>`;
    }).join('');

    const tabla = c => {
      const d = CAT_DATOS[c];
      const t = d.clausura.tablas || {};
      const zonas = (t.zonaB && t.zonaB.length) ? [['A', t.zonaA], ['B', t.zonaB]] : [['', t.zonaA]];
      const nCamp = (d.formato && d.formato.clausura && d.formato.clausura.campeonato) || 4;
      const filas = rows => (rows || []).map(r => {
        const eq = (d.equipos || []).find(e => e.nombre === r.equipo);
        return `<tr class="${r.pos <= nCamp ? 'q' : ''} ${r.pos === nCamp ? 'cut' : ''}"><td class="p">${r.pos}</td><td class="e"><div class="ini-e"><img class="ini-crest" src="${(eq && eq.escudo) || escudoGlobal(r.equipo) || genericCrestUri(r.equipo)}" alt=""><span>${escapeHtml(r.equipo)}</span></div></td><td>${r.pj}</td><td class="pts">${r.pts}</td></tr>`;
      }).join('');
      return `<div class="ini-table ini-cat-${c}" data-ini-tab="${c}">
          <div class="ini-table-head"><span class="ini-chip">${c}</span><b>Categoría ${c}</b><span>Clausura · Fecha ${d.clausura.ultimaFechaDisputada}</span></div>
          ${zonas.length > 1 ? `<div class="ini-zonas">${zonas.map(([z], i) => `<button type="button" class="${i ? '' : 'active'}" data-ini-zona="${c}${z}">Zona ${z}</button>`).join('')}</div>` : ''}
          ${zonas.map(([z, rows], i) => `<table class="ini-tbl" data-ini-zt="${c}${z}" ${i ? 'hidden' : ''}><thead><tr><th>#</th><th>Equipo</th><th>PJ</th><th>Pts</th></tr></thead><tbody>${filas(rows)}</tbody></table>`).join('')}
          <a class="ini-ver" href="${urlCat(c)}">Ver Categoría ${c} →</a>
        </div>`;
    };

    const elegir = CATS.map(c => {
      const d = CAT_DATOS[c];
      const abierta = cats.includes(c);
      const t = (d && d.clausura && d.clausura.tablas) || {};
      const lider = abierta ? ((t.zonaB && t.zonaB.length) ? null : (t.zonaA || [])[0]) : null;
      const n = abierta ? (d.equipos || []).length : 0;
      const det = abierta ? `${n} equipos${lider ? ` · Líder: ${escapeHtml(lider.equipo)}` : ' · Zonas A y B'}` : 'Próximamente';
      return `<button type="button" class="ini-pick ini-cat-${c} ${abierta ? '' : 'locked'}" data-ini-go="${c}">
          <span class="ini-pick-letra">${c}</span>
          <span class="ini-pick-txt"><b>Categoría ${c}</b><small>${det}</small></span>
          <span class="ini-pick-go">${abierta ? 'Entrar' : 'Pronto'} <em>→</em></span>
        </button>`;
    }).join('');

    cont.innerHTML = `
      <div class="ini-hero">
        <div class="ini-hero-txt"><h2>Elegí tu categoría</h2><p>Tablas, fixture, goleadores y sanciones de cada una.</p></div>
        <div class="ini-picks">${elegir}</div>
      </div>
      <div class="ini-grid">
        <section class="ini-col">
          <div class="ini-title"><h2>Próximos partidos</h2><span class="section-badge">Clausura 2026</span></div>
          ${bloques || '<div class="ini-empty">Todavía no hay próximos partidos cargados.</div>'}
          <a class="ini-cc" href="${urlCat(CAT_DATOS.A ? 'A' : cats[0], 'challenger')}"><b>Copa Challenger</b><small>Ver el cuadro completo</small><em>→</em></a>
        </section>
        <aside class="ini-col">
          <div class="ini-title"><h2>Posiciones</h2></div>
          ${cats.length > 1 ? `<div class="ini-tabs">${cats.map((c, i) => `<button type="button" class="ini-cat-${c} ${i ? '' : 'active'}" data-ini-cat="${c}">${c}</button>`).join('')}</div>` : ''}
          <div class="ini-tables">${cats.map(tabla).join('')}</div>
        </aside>
      </div>`;

    $$('[data-ini-go]', cont).forEach(b => b.addEventListener('click', () => {
      const c = b.dataset.iniGo;
      if (!catDisponible(c)) { mostrarProximamente(c); return; }
      location.href = urlCat(c);
    }));
    $$('[data-ini-zona]', cont).forEach(b => b.addEventListener('click', () => {
      const card = b.closest('.ini-table');
      $$('[data-ini-zona]', card).forEach(x => x.classList.toggle('active', x === b));
      $$('[data-ini-zt]', card).forEach(tb => { tb.hidden = tb.dataset.iniZt !== b.dataset.iniZona; });
    }));
    const marcarTab = c => {
      $$('[data-ini-cat]', cont).forEach(x => x.classList.toggle('active', x.dataset.iniCat === c));
      $$('.ini-table', cont).forEach(t => t.classList.toggle('on', t.dataset.iniTab === c));
    };
    $$('[data-ini-cat]', cont).forEach(b => b.addEventListener('click', () => marcarTab(b.dataset.iniCat)));
    marcarTab(cats[0]);
  }


  function aplicarCategoriaUI() {
    const nombre = `Categoría ${CAT}`;
    document.title = `Liga Universitaria Sanjuanina de Fútbol — ${nombre} 2026`;
    const sub = $('#heroCatLabel');
    if (sub) sub.textContent = INICIO ? 'Temporada 2026' : nombre;
    if (INICIO) {
      document.title = 'Liga Universitaria Sanjuanina de Fútbol — Temporada 2026';
      const bs = $('.brand-sub'); if (bs) bs.textContent = 'Fútbol Universitario · UNSJ';
      const fc = $('#footerCat'); if (fc) fc.textContent = 'Temporada 2026';
    }
    const logo = $('.brand-v2 .league-official-logo');
    if (logo && !logo.closest('a')) {
      logo.insertAdjacentHTML('beforebegin', '<a href="./" class="brand-home" title="Ir al inicio" aria-label="Ir al inicio"></a>');
      logo.previousElementSibling.appendChild(logo);
    }
    const foot = $('#footerCat');
    if (foot && !INICIO) foot.textContent = `${nombre} · Temporada 2026`;
    $$('#catSwitch .cat-pick').forEach(o => {
      const activa = !INICIO && o.dataset.cat === CAT;
      o.classList.toggle('active', activa);
      o.setAttribute('aria-pressed', activa ? 'true' : 'false');
      o.addEventListener('click', () => {
        const c = o.dataset.cat;
        if (c === CAT && !INICIO) return;
        if (!catDisponible(c)) { mostrarProximamente(c); return; }
        try { localStorage.setItem('liga_cat', c); } catch (err) { /* sin almacenamiento */ }
        location.href = `${location.pathname}?cat=${c.toLowerCase()}#${state.currentTab}`;
      });
    });
  }


  // =========================================================================
  // MENÚ PARA CELULAR: botón Copa Challenger + desplegable con íconos
  // =========================================================================
  const NAV_ICONS = {
    inicio: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    posiciones: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    fixture: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h2M14 14h2M8 17h2"/>',
    challenger: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    equipos: '<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',
    estadisticas: '<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
    goleadores: '<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 4.5h-5L8 10z"/>',
    sanciones: '<rect x="7" y="3" width="10" height="15" rx="1.5" transform="rotate(8 12 10)"/><path d="M5 21h14"/>',
    reglamento: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M8 7h8M8 11h6"/>'
  };
  const navIcon = v => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${NAV_ICONS[v] || ''}</svg>`;

  function buildMobileNav() {
    const nav = $('.navbar-sticky .container');
    if (!nav || $('#mnav')) return;
    const vistas = $$('#mainTabs .tab-btn').map(b => ({ v: b.dataset.view, t: b.textContent.trim() }));
    nav.insertAdjacentHTML('beforeend', `
      <div class="mnav" id="mnav">
        <a class="mnav-home" href="./" title="Inicio" aria-label="Ir al inicio">${navIcon('inicio')}</a>
        <button type="button" class="mnav-cc" data-view="challenger">${navIcon('challenger')}<span>Copa Challenger</span></button>
        <button type="button" class="mnav-toggle" id="mnavToggle" aria-haspopup="true" aria-expanded="false">
          <span class="mnav-cur">${navIcon('posiciones')}<span>Posiciones</span></span>
          <svg class="mnav-chev" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="mnav-panel" id="mnavPanel" hidden>
          ${vistas.filter(x => x.v !== 'challenger' && x.v !== 'inicio').map(x => `<button type="button" class="mnav-item" data-view="${x.v}">${navIcon(x.v)}<span>${escapeHtml(x.t)}</span></button>`).join('')}
        </div>
      </div>`);
    const panel = $('#mnavPanel'), toggle = $('#mnavToggle');
    const cerrar = () => { panel.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.classList.remove('open'); };
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      panel.hidden = !panel.hidden;
      toggle.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true');
      toggle.classList.toggle('open', !panel.hidden);
    });
    document.addEventListener('click', e => { if (!panel.hidden && !$('#mnav').contains(e.target)) cerrar(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });
    $$('#mnav [data-view]').forEach(b => b.addEventListener('click', () => { cerrar(); switchTab(b.dataset.view); }));
  }

  function updateMobileNav(view) {
    if (!$('#mnav')) return;
    const btn = $(`#mainTabs .tab-btn[data-view="${view}"]`);
    const cur = $('#mnavToggle .mnav-cur');
    const esCC = view === 'challenger';
    $('#mnav .mnav-cc').classList.toggle('active', esCC);
    cur.innerHTML = esCC ? `${navIcon('posiciones')}<span>Secciones</span>` : `${navIcon(view)}<span>${btn ? escapeHtml(btn.textContent.trim()) : ''}</span>`;
    $$('#mnavPanel .mnav-item').forEach(i => i.classList.toggle('active', i.dataset.view === view));
  }

  function updateTabIndicator() {
    const activeBtn = $(`#mainTabs .tab-btn[data-view="${state.currentTab}"]`);
    const indicator = $('#tabIndicator');
    if (activeBtn && indicator) {
      indicator.style.left = `${activeBtn.offsetLeft}px`;
      indicator.style.width = `${activeBtn.offsetWidth}px`;
    }
  }

  function switchTab(viewName) {
    if (viewName === 'inicio') { location.href = location.pathname; return; }
    state.currentTab = viewName;

    $$('#mainTabs .tab-btn').forEach(btn => {
      const isActive = btn.dataset.view === viewName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    $$('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const activeSection = $(`#view-${viewName}`);
    if (activeSection) {
      activeSection.classList.add('active');
    }

    updateTabIndicator();
    updateMobileNav(viewName);

    if (ESQ && viewName !== 'challenger' && viewName !== 'reglamento' && viewName !== 'equipos') {
      if (viewName === 'posiciones') renderPosicionesEsqueleto();
      else if (viewName === 'fixture') renderFixtureEsqueleto();
      else if (viewName === 'estadisticas') renderTablaVaciaEsqueleto('view-estadisticas', 'Estadísticas', ['#', 'Equipo', 'PJ', 'GF', 'GC', 'DG', 'Prom.'], 'statsTorneo');
      else if (viewName === 'goleadores') renderTablaVaciaEsqueleto('view-goleadores', 'Goleadores', ['#', 'Jugador', 'Equipo', 'Goles'], 'goleadoresTorneo');
      else if (viewName === 'sanciones') renderTablaVaciaEsqueleto('view-sanciones', 'Sanciones', ['#', 'Jugador', 'Equipo', 'Sanción', 'Estado'], '');
    } else switch (viewName) {
      case 'posiciones': renderPosiciones(); break;
      case 'fixture': renderFixture(); break;
      case 'equipos': renderEquipos(); break;
      case 'estadisticas': renderEstadisticas(); break;
      case 'goleadores': renderGoleadores(); break;
      case 'sanciones': renderSanciones(); break;
      case 'reglamento': renderReglamento(); break;
      case 'challenger': renderChallenger(); break;
    }

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + viewName);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // INICIALIZACIÓN DE LA APLICACIÓN
  // =========================================================================
  function initApp() {
    aplicarCategoriaUI();
    if (INICIO) {
      document.body.classList.add('modo-inicio');
      renderInicio();
      return;
    }
    if (ESQ) renderHeroBoardEsqueleto(); else renderHeroBoard();
    iniciarRotacionHero();
    let rotResize;
    window.addEventListener('resize', () => { clearTimeout(rotResize); rotResize = setTimeout(iniciarRotacionHero, 250); });

    $$('#mainTabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.view);
      });
    });
    buildMobileNav();

    const closeBtn = $('#modalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeTeamModal);

    const modal = $('#teamModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeTeamModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeTeamModal();
    });

    window.addEventListener('resize', updateTabIndicator);

    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash ? window.location.hash.substring(1) : '';
    const initialView = urlParams.get('tab') || urlParams.get('view') || hash || 'posiciones';
    const validViews = ['posiciones', 'fixture', 'challenger', 'equipos', 'estadisticas', 'goleadores', 'sanciones', 'reglamento'];
    switchTab(validViews.includes(initialView) ? initialView : 'posiciones');
  }

  window.APP = {
    state,
    switchTab,
    openTeamModal,
    closeTeamModal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
