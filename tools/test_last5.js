const LIGA_DATA = require('./js/data.js');

function testTeamLast5(teamName) {
  const DATA = LIGA_DATA;
  const allChronologicalMatches = [];
  const eqMatch = (a, b) => a && b && a.trim().toLowerCase() === b.trim().toLowerCase();

  // Clausura
  DATA.clausura.fechas.forEach(f => {
    (f.partidos || []).forEach(m => {
      if (m.estado === 'finalizado' && (eqMatch(m.local, teamName) || eqMatch(m.visitante, teamName))) {
        allChronologicalMatches.push({
          faseLabel: `Clausura F${f.numero}`,
          orden: 200 + f.numero,
          local: m.local,
          visitante: m.visitante,
          golesL: m.golesL,
          golesV: m.golesV,
          esLocal: eqMatch(m.local, teamName)
        });
      }
    });
  });

  // Apertura Playoffs
  if (DATA.apertura && DATA.apertura.playoffs) {
    const camp = DATA.apertura.playoffs.faseCampeonato;
    const plata = DATA.apertura.playoffs.copaPlata;

    if (camp.final && (eqMatch(camp.final.local, teamName) || eqMatch(camp.final.visitante, teamName))) {
      allChronologicalMatches.push({
        faseLabel: "Ap. Final Campeonato",
        orden: 112,
        local: camp.final.local,
        visitante: camp.final.visitante,
        golesL: camp.final.golesL,
        golesV: camp.final.golesV,
        esLocal: eqMatch(camp.final.local, teamName)
      });
    }

    if (plata && plata.final && (eqMatch(plata.final.local, teamName) || eqMatch(plata.final.visitante, teamName))) {
      allChronologicalMatches.push({
        faseLabel: "Ap. Final Copa Plata",
        orden: 112,
        local: plata.final.local,
        visitante: plata.final.visitante,
        golesL: plata.final.golesL,
        golesV: plata.final.golesV,
        esLocal: eqMatch(plata.final.local, teamName)
      });
    }

    (camp.semifinales || []).forEach(m => {
      if (eqMatch(m.local, teamName) || eqMatch(m.visitante, teamName)) {
        allChronologicalMatches.push({
          faseLabel: "Ap. Semifinal Campeonato",
          orden: 111,
          local: m.local,
          visitante: m.visitante,
          golesL: m.golesL,
          golesV: m.golesV,
          esLocal: eqMatch(m.local, teamName)
        });
      }
    });

    if (plata && plata.semifinales) {
      plata.semifinales.forEach(m => {
        if (eqMatch(m.local, teamName) || eqMatch(m.visitante, teamName)) {
          allChronologicalMatches.push({
            faseLabel: "Ap. Semifinal Copa Plata",
            orden: 111,
            local: m.local,
            visitante: m.visitante,
            golesL: m.golesL,
            golesV: m.golesV,
            esLocal: eqMatch(m.local, teamName)
          });
        }
      });
    }

    (camp.cuartos || []).forEach(m => {
      if (eqMatch(m.local, teamName) || eqMatch(m.visitante, teamName)) {
        allChronologicalMatches.push({
          faseLabel: "Ap. Cuartos Campeonato",
          orden: 110,
          local: m.local,
          visitante: m.visitante,
          golesL: m.golesL,
          golesV: m.golesV,
          esLocal: eqMatch(m.local, teamName)
        });
      }
    });

    if (plata && plata.cuartos) {
      plata.cuartos.forEach(m => {
        if (eqMatch(m.local, teamName) || eqMatch(m.visitante, teamName)) {
          allChronologicalMatches.push({
            faseLabel: "Ap. Cuartos Copa Plata",
            orden: 110,
            local: m.local,
            visitante: m.visitante,
            golesL: m.golesL,
            golesV: m.golesV,
            esLocal: eqMatch(m.local, teamName)
          });
        }
      });
    }
  }

  // Apertura Regular
  DATA.apertura.fechas.forEach(f => {
    (f.partidos || []).forEach(m => {
      if (m.estado === 'finalizado' && typeof m.golesL === 'number' && typeof m.golesV === 'number' && (eqMatch(m.local, teamName) || eqMatch(m.visitante, teamName))) {
        allChronologicalMatches.push({
          faseLabel: `Apertura F${f.numero}`,
          orden: 100 + f.numero,
          local: m.local,
          visitante: m.visitante,
          golesL: m.golesL,
          golesV: m.golesV,
          esLocal: eqMatch(m.local, teamName)
        });
      }
    });
  });

  allChronologicalMatches.sort((a, b) => b.orden - a.orden);

  console.log(`\n=== ÚLTIMOS 5 PARTIDOS REALES DE ${teamName.toUpperCase()} ===`);
  allChronologicalMatches.slice(0, 5).forEach((m, i) => {
    const rival = m.esLocal ? m.visitante : m.local;
    const gf = m.esLocal ? m.golesL : m.golesV;
    const gc = m.esLocal ? m.golesV : m.golesL;
    const res = gf > gc ? "G" : gf < gc ? "P" : "E";
    console.log(`${i+1}. [${res}] vs ${rival} (${m.faseLabel}) -> ${m.golesL} - ${m.golesV} (orden: ${m.orden})`);
  });
}

testTeamLast5("Constructores");
testTeamLast5("Jägermeister");
testTeamLast5("Minaster City");
testTeamLast5("Aston");
