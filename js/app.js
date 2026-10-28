/**
 * LIGA UNIVERSITARIA SANJUANINA DE FÚTBOL — CATEGORÍA A 2026
 * Controlador Principal de la Aplicación
 * Equipos Oficiales: Minaster City, Otro Equipo, Constructores, Jägermeister,
 * Antorcha, Maverick, Aston, Calise, Eclipse, La Máquina, De Primera, Red Bull,
 * Celtic, Nottingham, C-Lesión.
 */

(function () {
  'use strict';

  // Verificar disponibilidad de los datos
  const DATA = window.LIGA_DATA;
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

  function getTeam(nameOrId) {
    if (!nameOrId) return null;
    const key = String(nameOrId).trim().toLowerCase();
    return teamsById[key] || teamsByName[key] || {
      id: key.replace(/[^a-z0-9]/g, '_'),
      nombre: nameOrId,
      shortName: nameOrId.slice(0, 3).toUpperCase(),
      escudo: "public/escudos/" + key.replace(/[^a-z0-9]/g, '_') + ".png",
      color: "#4895ef"
    };
  }

  function renderCrestImg(team, className = "table-crest") {
    if (!team) return "";
    const crestPath = team.escudo || (teamsByName[team.nombre?.toLowerCase()]?.escudo) || "";
    if (crestPath) {
      return `<img src="${crestPath}" alt="${team.nombre}" class="${className}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';">
              <span class="${className} crest-fallback" style="display:none;">${(team.nombre || "E").slice(0, 2).toUpperCase()}</span>`;
    }
    return `<span class="${className} crest-fallback" style="display:inline-flex;">${(team.nombre || "E").slice(0, 2).toUpperCase()}</span>`;
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

    // 2. Líder Clausura Zona B
    const liderClausuraB = DATA.clausura.tablas.zonaB[0];
    const teamLiderB = getTeam(liderClausuraB?.equipo);

    // 3. Campeón Apertura
    const campApertura = DATA.apertura.campeon;
    const teamCampAp = getTeam(campApertura);

    // 4. Goleador Clausura
    const topScorerClausura = (DATA.clausura.goleadores || [])[0];
    const teamScorer = getTeam(topScorerClausura?.equipo);

    board.innerHTML = `
      <div class="board-tile" data-action="go-pos" data-torneo="clausura" data-zona="A">
        <span class="tile-label">Líder Clausura · Zona A <span>${liderClausuraA?.pts || 0} PTS</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamLiderA, "tile-crest")}
          <span class="tile-name">${teamLiderA?.nombre || "—"}</span>
        </div>
        <span class="tile-desc">${liderClausuraA?.pj || 0} PJ | DG: +${liderClausuraA?.dg || 0}</span>
      </div>

      <div class="board-tile" data-action="go-pos" data-torneo="clausura" data-zona="B">
        <span class="tile-label">Líder Clausura · Zona B <span>${liderClausuraB?.pts || 0} PTS</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamLiderB, "tile-crest")}
          <span class="tile-name">${teamLiderB?.nombre || "—"}</span>
        </div>
        <span class="tile-desc">${liderClausuraB?.pj || 0} PJ | DG: +${liderClausuraB?.dg || 0}</span>
      </div>

      <div class="board-tile" data-action="go-apertura">
        <span class="tile-label">Campeón Apertura 2026 <span>OFICIAL</span></span>
        <div class="tile-body">
          ${renderCrestImg(teamCampAp, "tile-crest")}
          <span class="tile-name">${teamCampAp?.nombre || "—"}</span>
        </div>
        <span class="tile-desc">Final Apertura: Campeón Campeonato</span>
      </div>

      <div class="board-tile" data-action="go-goleadores">
        <span class="tile-label">Goleador Clausura <span>${topScorerClausura?.goles || 0} GOLES</span></span>
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
      // TABLA ANUAL ACUMULADA 2026
      noticeHtml = `
        <div class="banner-alert">
          <div>
            <b>Tabla Anual 2026 — Clasificación General Acumulada</b>
            Puntos de Fase Clasificatoria (Apertura + Clausura) más bonificaciones oficiales del Apertura (Campeón Jägermeister +3, Subcampeón Maverick +2, 3° Aston +1, Plata Minaster City +1) y quitas de puntos dictaminadas por el Tribunal de Penas.
          </div>
        </div>
      `;

      tableRowsHtml = DATA.tablaAnual.map(row => {
        const team = getTeam(row.equipo);
        const dgClass = row.dg > 0 ? "positive" : row.dg < 0 ? "negative" : "";
        const dgSign = row.dg > 0 ? `+${row.dg}` : `${row.dg}`;
        const bonusTag = row.bonus > 0 ? `<span class="badge-bonus-pts">+${row.bonus} bonus</span>` : "";
        const sancionTag = row.sancionPts > 0 ? `<span class="badge-sancion-pts">-${row.sancionPts} sanción</span>` : "";

        return `
          <tr>
            <td class="col-pos">${row.pos}</td>
            <td class="col-team">
              <div class="team-cell" data-team="${team?.id || ''}">
                ${renderCrestImg(team)}
                <span class="team-name">${row.equipo}</span>
                ${bonusTag}
                ${sancionTag}
              </div>
            </td>
            <td>${row.pj}</td>
            <td>${row.pg}</td>
            <td>${row.pe}</td>
            <td>${row.pp}</td>
            <td>${row.gf}</td>
            <td>${row.gc}</td>
            <td class="col-dg ${dgClass}">${dgSign}</td>
            <td style="font-size:0.88rem; color:var(--muted);">${row.ptsCancha}</td>
            <td class="col-highlight">${row.pts}</td>
            <td style="font-family:var(--f-display); font-weight:800; color:var(--muted);">${row.coeficiente.toFixed(3)}</td>
          </tr>
        `;
      }).join('');

      legendHtml = `
        <div class="table-legend">
          <div class="legend-item"><span class="legend-marker" style="background:var(--accent);"></span> 1° clasifica a la Superfinal Anual de la Temporada 2026</div>
          <div class="legend-item"><span class="badge-bonus-pts" style="display:inline-block;">+X bonus</span> Puntos otorgados por mérito Apertura</div>
          <div class="legend-item"><span class="badge-sancion-pts" style="display:inline-block;">-X sanción</span> Quita oficial de puntos aplicada por Tribunal</div>
        </div>
      `;
    } else {
      // APERTURA O CLAUSURA (POR ZONA)
      const fuente = state.posTorneo === 'clausura' ? DATA.clausura.tablas : DATA.apertura.tablas;
      const tablaZona = state.posZona === 'A' ? fuente.zonaA : fuente.zonaB;

      if (state.posTorneo === 'clausura') {
        noticeHtml = `
          <div class="banner-alert">
            <div>
              <b>Torneo Clausura 2026 — Zona ${state.posZona} en disputa</b>
              Tabla oficial consolidada hasta la Fecha ${DATA.clausura.ultimaFechaDisputada || 3}. Clasifican del 1° al 4° a la Fase Campeonato y del 5° al 8° a la Copa de Plata.
            </div>
          </div>
        `;
      } else {
        noticeHtml = `
          <div class="banner-alert">
            <div>
              <b>Torneo Apertura 2026 — Historial Oficial Fase Clasificatoria (Zona ${state.posZona})</b>
              Fase regular culminada. El Torneo fue coronado por <b>Jägermeister</b> (Campeón Campeonato) y <b>Minaster City</b> (Campeón Copa de Plata).
            </div>
          </div>
        `;
      }

      tableRowsHtml = tablaZona.map(row => {
        const team = getTeam(row.equipo);
        const dgClass = row.dg > 0 ? "positive" : row.dg < 0 ? "negative" : "";
        const dgSign = row.dg > 0 ? `+${row.dg}` : `${row.dg}`;
        const qualifyClass = row.pos <= 4 ? "row-qualify-campeonato" : "row-qualify-plata";

        let sancionBadge = "";
        if (state.posTorneo === 'apertura' && Array.isArray(DATA.deducciones)) {
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
          <div class="legend-item"><span class="legend-marker legend-campeonato"></span> Puestos 1° a 4°: Clasificación a Cuartos de Final (Fase Campeonato)</div>
          <div class="legend-item"><span class="legend-marker legend-plata"></span> Puestos 5° a 8°: Clasificación a Copa de Plata</div>
          ${state.posTorneo === 'apertura' ? '<div class="legend-item"><span class="badge-sancion-pts" style="display:inline-block;">-X sanción</span> Quita oficial de puntos aplicada por Tribunal de Penas</div>' : ''}
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

      ${state.posTorneo !== 'anual' ? `
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
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              ${state.posTorneo === 'anual' ? `<th>Pts Cancha</th><th class="col-highlight">Pts Final</th><th>Coef.</th>` : `<th class="col-highlight">Pts</th>`}
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

    let currentFechaObj = fechasList.find(f => f.numero === Number(state.fixtureFecha));
    if (!currentFechaObj) {
      currentFechaObj = fechasList[0];
      state.fixtureFecha = currentFechaObj?.numero || 1;
    }

    const fechaPillsHtml = fechasList.map(f => {
      const activeClass = f.numero === Number(state.fixtureFecha) ? 'active' : '';
      const subTag = esClausura && f.numero > (DATA.clausura.ultimaFechaDisputada || 3) ? "· Próx" : "";
      return `<button class="fecha-pill ${activeClass}" data-fecha="${f.numero}">Fecha ${f.numero} ${subTag}</button>`;
    }).join('');

    const matchesHtml = (currentFechaObj?.partidos || []).map(m => {
      const homeTeam = getTeam(m.local);
      const awayTeam = getTeam(m.visitante);
      const esLibre = m.estado === 'libre';
      const esFinalizado = m.estado === 'finalizado';

      let scoreHtml = "";
      let statusBadge = "";

      if (esLibre) {
        scoreHtml = `<div class="match-score-box score-vs">LIBRE</div>`;
        statusBadge = `<span class="match-status-badge status-libre">Fecha Libre</span>`;
      } else if (esFinalizado) {
        scoreHtml = `<div class="match-score-box">${m.golesL} - ${m.golesV}</div>`;
        statusBadge = `<span class="match-status-badge status-finalizado">Finalizado</span>`;
      } else {
        scoreHtml = `<div class="match-score-box score-vs">vs</div>`;
        statusBadge = `<span class="match-status-badge status-pendiente">A Disputar</span>`;
      }

      return `
        <div class="match-card">
          <div class="match-header">
            <span class="match-zone-badge">${m.zona || "Categoría A"}</span>
            ${statusBadge}
          </div>
          <div class="match-teams-row">
            <div class="match-team home" data-team="${homeTeam?.id || ''}">
              ${renderCrestImg(homeTeam, "match-crest")}
              <span class="match-team-name">${m.local}</span>
            </div>
            ${scoreHtml}
            <div class="match-team away" data-team="${awayTeam?.id || ''}">
              ${renderCrestImg(awayTeam, "match-crest")}
              <span class="match-team-name">${m.visitante}</span>
            </div>
          </div>
          ${m.nota ? `<div class="match-footer-note">${m.nota}</div>` : ''}
        </div>
      `;
    }).join('');

    // Playoffs del Apertura
    let playoffsHtml = "";
    if (!esClausura && DATA.apertura.playoffs) {
      const camp = DATA.apertura.playoffs.faseCampeonato;
      const plata = DATA.apertura.playoffs.copaPlata;

      playoffsHtml = `
        <div class="card-box" style="margin-top: 32px;">
          <div class="section-title" style="margin-bottom: 16px;">
            <h2>Playoffs Apertura 2026</h2>
            <span class="section-badge">Fases de Eliminación Directa</span>
          </div>

          <h3 style="font-family:var(--f-display); font-size:1.4rem; color:var(--accent); text-transform:uppercase; margin-block:12px 8px;">Fase Campeonato</h3>
          <div class="matches-grid">
            ${(camp?.cuartos || []).map(p => `
              <div class="match-card">
                <div class="match-header"><span>${p.codigo} · Cuartos</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(p.local), "match-crest")}<span class="match-team-name">${p.local}</span></div>
                  <div class="match-score-box">${p.golesL} - ${p.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(p.visitante), "match-crest")}<span class="match-team-name">${p.visitante}</span></div>
                </div>
                ${p.nota ? `<div class="match-footer-note">${p.nota}</div>` : ''}
              </div>
            `).join('')}
            ${(camp?.semifinales || []).map(p => `
              <div class="match-card">
                <div class="match-header"><span>${p.codigo} · Semifinal</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(p.local), "match-crest")}<span class="match-team-name">${p.local}</span></div>
                  <div class="match-score-box">${p.golesL} - ${p.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(p.visitante), "match-crest")}<span class="match-team-name">${p.visitante}</span></div>
                </div>
                ${p.nota ? `<div class="match-footer-note">${p.nota}</div>` : ''}
              </div>
            `).join('')}
            ${camp?.tercerPuesto ? `
              <div class="match-card" style="border-color: rgba(255, 182, 39, 0.4);">
                <div class="match-header"><span>3° PUESTO</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(camp.tercerPuesto.local), "match-crest")}<span class="match-team-name">${camp.tercerPuesto.local}</span></div>
                  <div class="match-score-box">${camp.tercerPuesto.golesL} - ${camp.tercerPuesto.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(camp.tercerPuesto.visitante), "match-crest")}<span class="match-team-name">${camp.tercerPuesto.visitante}</span></div>
                </div>
                ${camp.tercerPuesto.nota ? `<div class="match-footer-note">${camp.tercerPuesto.nota}</div>` : ''}
              </div>
            ` : ''}
            ${camp?.final ? `
              <div class="match-card" style="border: 2px solid var(--accent); background: rgba(255, 182, 39, 0.05);">
                <div class="match-header"><span style="color:var(--accent); font-weight:800;">★ GRAN FINAL CAMPEONATO ★</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(camp.final.local), "match-crest")}<span class="match-team-name">${camp.final.local}</span></div>
                  <div class="match-score-box" style="color:var(--accent);">${camp.final.golesL} - ${camp.final.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(camp.final.visitante), "match-crest")}<span class="match-team-name">${camp.final.visitante}</span></div>
                </div>
                <div class="match-footer-note" style="color:var(--accent); font-weight:700;">¡Jägermeister Campeón Apertura 2026!</div>
              </div>
            ` : ''}
          </div>

          <h3 style="font-family:var(--f-display); font-size:1.4rem; color:#90caf9; text-transform:uppercase; margin-block:24px 8px;">Copa de Plata</h3>
          <div class="matches-grid">
            ${(plata?.cuartos || []).map(p => `
              <div class="match-card">
                <div class="match-header"><span>${p.codigo} · Cuartos</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(p.local), "match-crest")}<span class="match-team-name">${p.local}</span></div>
                  <div class="match-score-box">${p.golesL} - ${p.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(p.visitante), "match-crest")}<span class="match-team-name">${p.visitante}</span></div>
                </div>
                ${p.nota ? `<div class="match-footer-note">${p.nota}</div>` : ''}
              </div>
            `).join('')}
            ${(plata?.semifinales || []).map(p => `
              <div class="match-card">
                <div class="match-header"><span>${p.codigo} · Semifinal</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(p.local), "match-crest")}<span class="match-team-name">${p.local}</span></div>
                  <div class="match-score-box">${p.golesL} - ${p.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(p.visitante), "match-crest")}<span class="match-team-name">${p.visitante}</span></div>
                </div>
                ${p.nota ? `<div class="match-footer-note">${p.nota}</div>` : ''}
              </div>
            `).join('')}
            ${plata?.final ? `
              <div class="match-card" style="border: 2px solid #90caf9; background: rgba(144, 202, 249, 0.05);">
                <div class="match-header"><span style="color:#90caf9; font-weight:800;">★ FINAL COPA DE PLATA ★</span><span class="match-status-badge status-finalizado">Finalizado</span></div>
                <div class="match-teams-row">
                  <div class="match-team home">${renderCrestImg(getTeam(plata.final.local), "match-crest")}<span class="match-team-name">${plata.final.local}</span></div>
                  <div class="match-score-box" style="color:#90caf9;">${plata.final.golesL} - ${plata.final.golesV}</div>
                  <div class="match-team away">${renderCrestImg(getTeam(plata.final.visitante), "match-crest")}<span class="match-team-name">${plata.final.visitante}</span></div>
                </div>
                <div class="match-footer-note" style="color:#90caf9; font-weight:700;">¡Minaster City Campeón Copa de Plata!</div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

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

      <div class="matches-grid">
        ${matchesHtml.length > 0 ? matchesHtml : `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--muted);">No hay partidos registrados para esta fecha.</div>`}
      </div>

      ${playoffsHtml}
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
        state.fixtureFecha = Number(btn.dataset.fecha);
        renderFixture();
      });
    });

    $$('.match-team', container).forEach(el => {
      el.addEventListener('click', () => {
        const teamId = el.dataset.team;
        if (teamId && teamId !== 'libre') openTeamModal(teamId);
      });
    });
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
            <span class="section-badge">15 Clubes Oficiales</span>
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
          <img src="${eq.escudo}" alt="${eq.nombre}" class="preview-crest" loading="lazy" onerror="this.src='';">
          <div class="preview-name">${eq.nombre}</div>
          <div class="preview-zones">Clausura: Zona ${eq.zonaClausura} · Apertura: Zona ${eq.zonaApertura}</div>
          <div style="display:flex; gap:4px; margin-top:6px;" title="Racha en los últimos partidos">
            ${rachaBadges}
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
          <div class="pill-group" role="tablist" aria-label="Seleccionar Zona Stats">
            <button class="pill-btn ${z === 'todas' ? 'active' : ''}" data-st-zona="todas">Todas las zonas</button>
            <button class="pill-btn ${z === 'A' ? 'active' : ''}" data-st-zona="A">Zona A</button>
            <button class="pill-btn ${z === 'B' ? 'active' : ''}" data-st-zona="B">Zona B</button>
          </div>
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

      if (filtro === 'vigentes') return s.estado.toLowerCase().includes('vigente');
      if (filtro === 'cumplidas') return s.estado.toLowerCase().includes('cumplid');
      if (filtro === 'definitivas') return s.estado.toLowerCase().includes('definitiv');
      return true;
    });

    const rowsHtml = filtered.map(s => {
      const team = getTeam(s.equipo);
      let badgeClass = "sancion-vigente";
      if (s.estado.toLowerCase().includes('cumplid')) badgeClass = "sancion-cumplida";
      else if (s.estado.toLowerCase().includes('definitiv')) badgeClass = "sancion-definitiva";

      return `
        <tr>
          <td style="text-align:left; font-weight:700;">${s.jugador}</td>
          <td class="col-team">
            <div class="team-cell" data-team="${team?.id || ''}">
              ${renderCrestImg(team)}
              <span>${s.equipo}</span>
            </div>
          </td>
          <td class="col-sancion" style="font-weight:700; color:#ffb627;">${s.sancion}</td>
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
          <span>Secretaría de Bienestar Universitario · DGDR</span>
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
    const tablaZona = team.zonaClausura === 'A' ? DATA.clausura.tablas.zonaA : DATA.clausura.tablas.zonaB;
    const posRow = tablaZona.find(r => r.equipo.toLowerCase() === team.nombre.toLowerCase());
    const posStr = posRow ? `${posRow.pos}° de la Zona ${team.zonaClausura} del Clausura` : `Zona ${team.zonaClausura}`;

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
            <img src="${team.escudo}" alt="${team.nombre}" class="modal-crest-lg">
            <div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <h2 class="modal-team-title">${team.nombre}</h2>
                ${bonusModalBadge}
                ${sancionModalBadge}
              </div>
              <div class="modal-team-subtitle">${posStr} · ${team.zonaApertura ? `Apertura Zona ${team.zonaApertura}` : ''}</div>
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
  function updateTabIndicator() {
    const activeBtn = $(`#mainTabs .tab-btn[data-view="${state.currentTab}"]`);
    const indicator = $('#tabIndicator');
    if (activeBtn && indicator) {
      indicator.style.left = `${activeBtn.offsetLeft}px`;
      indicator.style.width = `${activeBtn.offsetWidth}px`;
    }
  }

  function switchTab(viewName) {
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

    switch (viewName) {
      case 'posiciones': renderPosiciones(); break;
      case 'fixture': renderFixture(); break;
      case 'equipos': renderEquipos(); break;
      case 'estadisticas': renderEstadisticas(); break;
      case 'goleadores': renderGoleadores(); break;
      case 'sanciones': renderSanciones(); break;
      case 'reglamento': renderReglamento(); break;
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
    renderHeroBoard();

    $$('#mainTabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.view);
      });
    });

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
    const validViews = ['posiciones', 'fixture', 'equipos', 'estadisticas', 'goleadores', 'sanciones', 'reglamento'];
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
