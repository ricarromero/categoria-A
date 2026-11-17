// Carga de resultados provisorios desde /cargar
// Guarda cada resultado en js/parciales.js (en el mismo repositorio de GitHub) y Vercel vuelve a publicar la página.
// Variables de entorno necesarias en Vercel: CARGA_PIN (solo números) y GITHUB_TOKEN (token con permiso de escritura en el repo).
const crypto = require('crypto');

const REPO = 'ricarromero/categoria-A';
const RUTA = 'js/parciales.js';
const CATS = ['A', 'B', 'C', 'F'];
const TORNEOS = ['clausura', 'apertura', 'challenger', 'playoffs']; // challenger: Copa Challenger (fecha = número de partido, P34 → 34)

const esperar = ms => new Promise(r => setTimeout(r, ms));
const hash = s => crypto.createHash('sha256').update(String(s)).digest();
const texto = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max) : '');
const gol = v => (Number.isInteger(v) && v >= 0 && v <= 50 ? v : null);

function pinOk(pin) {
  const real = process.env.CARGA_PIN || '';
  if (!real || typeof pin !== 'string' || !/^\d{4,12}$/.test(pin)) return false;
  return crypto.timingSafeEqual(hash(pin), hash(real));
}

async function gh(path, opts = {}) {
  const r = await fetch(`https://api.github.com/repos/${REPO}/${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'liga-carga-resultados',
      ...(opts.headers || {}),
    },
  });
  return r;
}

function leerArchivo(contenido) {
  const m = /LIGA_PARCIALES\s*=\s*([\s\S]*?);?\s*$/.exec(contenido);
  try { return JSON.parse(m ? m[1] : '{}'); } catch (e) { return {}; }
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Método no permitido' });
  if (!process.env.CARGA_PIN || !process.env.GITHUB_TOKEN) {
    return res.status(500).json({ ok: false, error: 'Falta configurar CARGA_PIN y GITHUB_TOKEN en Vercel' });
  }
  const b = req.body || {};
  if (!pinOk(b.pin)) { await esperar(1500); return res.status(401).json({ ok: false, error: 'PIN incorrecto' }); }
  if (b.accion === 'verificar') return res.json({ ok: true });

  const cat = CATS.includes(b.cat) ? b.cat : null;
  const torneo = TORNEOS.includes(b.torneo) ? b.torneo : null;
  const tope = torneo === 'challenger' || torneo === 'playoffs' ? 99 : 30;
  const fecha = Number.isInteger(b.fecha) && b.fecha >= 1 && b.fecha <= tope ? b.fecha : null;
  const local = texto(b.local, 60), visitante = texto(b.visitante, 60);
  if (!cat || !torneo || !fecha || !local || !visitante) return res.status(400).json({ ok: false, error: 'Datos del partido incompletos' });
  if (torneo === 'challenger' && cat !== 'A') return res.status(400).json({ ok: false, error: 'Datos del partido incompletos' });
  const clave = [cat, torneo, fecha, local, visitante].join('|');
  const donde = torneo === 'challenger' ? `Challenger P${fecha}` : torneo === 'playoffs' ? `${cat} playoffs` : `${cat} F${fecha}`;
  const borrar = b.accion === 'borrar';
  let item = null;
  if (!borrar) {
    const gl = gol(b.golesL), gv = gol(b.golesV);
    if (gl === null || gv === null) return res.status(400).json({ ok: false, error: 'Los goles tienen que ser números entre 0 y 50' });
    item = { golesL: gl, golesV: gv, por: texto(b.por, 30), at: new Date().toISOString() };
    const pl = gol(b.penalesL), pv = gol(b.penalesV);
    if (pl !== null && pv !== null) { item.penalesL = pl; item.penalesV = pv; }
    if ((torneo === 'challenger' || torneo === 'playoffs') && gl === gv && (pl === null || pv === null || pl === pv)) {
      return res.status(400).json({ ok: false, error: 'En los cruces, si empatan hay que cargar los penales' });
    }
    const nota = texto(b.nota, 80);
    if (nota) item.nota = nota;
  }

  const rama = process.env.VERCEL_GIT_COMMIT_REF || 'main';
  for (let intento = 0; intento < 3; intento++) {
    const g = await gh(`contents/${RUTA}?ref=${encodeURIComponent(rama)}`);
    let sha, datos = { resultados: {} };
    if (g.status === 200) {
      const j = await g.json(); sha = j.sha;
      datos = leerArchivo(Buffer.from(j.content, 'base64').toString('utf8'));
      datos.resultados = datos.resultados || {};
    } else if (g.status !== 404) {
      return res.status(502).json({ ok: false, error: 'No se pudo leer GitHub (' + g.status + ')' });
    }
    if (borrar) delete datos.resultados[clave]; else datos.resultados[clave] = item;
    if (Object.keys(datos.resultados).length > 600) return res.status(400).json({ ok: false, error: 'Demasiados resultados guardados' });
    datos.actualizado = new Date().toISOString();
    const js = '// Resultados provisorios cargados desde /cargar (se reemplazan por el informe oficial de la Liga)\n' +
      'window.LIGA_PARCIALES = ' + JSON.stringify(datos, null, 1) + ';\n';
    const msg = borrar ? `Carga: borrado ${local} vs ${visitante} (${donde})`
      : `Carga: ${local} ${item.golesL}-${item.golesV} ${visitante} (${donde})${item.por ? ' · ' + item.por : ''}`;
    const p = await gh(`contents/${RUTA}`, {
      method: 'PUT',
      body: JSON.stringify({ message: msg, content: Buffer.from(js, 'utf8').toString('base64'), sha, branch: rama }),
    });
    if (p.status === 200 || p.status === 201) return res.json({ ok: true, clave, item });
    if (p.status === 409 || p.status === 422) { await esperar(400 + 400 * intento); continue; }
    return res.status(502).json({ ok: false, error: 'No se pudo guardar en GitHub (' + p.status + ')' });
  }
  return res.status(503).json({ ok: false, error: 'Otra persona estaba guardando al mismo tiempo. Probá de nuevo.' });
};
