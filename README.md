# Liga Universitaria Sanjuanina de Fútbol — Categoría A 2026

Sitio web oficial, completo, responsive y de alto impacto visual para la **Liga Universitaria Sanjuanina de Fútbol**, Categoría A, temporada 2026.

Desarrollado bajo una arquitectura modular y libre de dependencias pesadas, garantizando una carga instantánea, total compatibilidad en dispositivos móviles y de escritorio, e inmunidad absoluta contra errores de inicialización o datos corruptos en el navegador.

---

## 🌟 Características Principales

1. **Identidad Oficial y Estética Deportiva Premium**:
   - Cabecera deportiva con franjas de césped cortado y líneas de cal vectoriales animadas.
   - Marcador interactivo del estadio (**Hero Board**) con accesos directos al líder de la Zona A del Clausura (*Constructores*), líder de la Zona B (*Red Bull*), Campeón del Apertura (*Jägermeister*) y Goleador del torneo (*Augusto Beja*).
   - Inicia siempre en **Categoría A** con los 15 clubes oficiales y logotipo de la Liga Universitaria.

2. **Sección Posiciones (Tablas Oficiales)**:
   - **Torneo Clausura**: Tablas de Zona A (8 equipos) y Zona B (7 equipos) oficiales con indicadores de clasificación a Cuartos de Final (Fase Campeonato) y Copa de Plata.
   - **Torneo Apertura**: Tablas históricas de la fase regular (Zona A y B) con los 18 equipos participantes originales.
   - **Tabla Anual 2026**: Suma de puntos obtenidos en fase regular (Apertura + Clausura) más los **puntos bonus oficiales** (*Jägermeister +3*, *Maverick +2*, *Aston +1*, *Minaster City +1*), deducciones por sanciones disciplinarias e indicador de rendimiento (Pts/PJ).

3. **Sección Fixture Interactivo**:
   - Selector entre **Clausura** y **Apertura**.
   - Selector de fechas con píldoras de navegación.
   - Partidos disputados con resultados reales y escudos oficiales de ambos equipos.
   - Fechas futuras claramente identificadas como *"A Disputar"* sin inventar marcadores ni fechas no confirmadas.
   - Apertura histórico con Fechas 1 a 9 y el cuadro completo de **Playoffs** (Fase Campeonato y Copa de Plata).

4. **Sección Equipos y Fichas Individuales**:
   - Los **15 clubes oficiales** de la Categoría A con sus escudos en alta fidelidad y badges de racha en los últimos 5 partidos.
   - Buscador de equipos en tiempo real.
   - **Ficha Modal Completa**: Escudo grande, ubicación en tablas, estadísticas generales acumuladas, **últimos 5 partidos reales y cronológicos** (incluyendo cruces de Fase Campeonato/Oro y Copa de Plata), próximos partidos y goleadores del club.

5. **Sección Estadísticas de la Competición**:
   - Tarjetas KPI dinámicas, vallas menos vencidas, equipos más goleadores, promedio de gol por partido y panel de distribución de resultados.

6. **Sección Goleadores**:
   - Podio visual (Top 3) con escalones de estadio y tabla completa con escudo del club, jugador, equipo y goles acumulados (selector Clausura / Apertura).

7. **Sección Sanciones Disciplinarias**:
   - Boletín oficial del Tribunal de Penas con buscador y filtros por estado (*Todas, Vigentes, Cumplidas, Inhabilitación Definitiva*).

8. **Sección Reglamento Oficial Integral**:
   - 57 normativas completas de la UNSJ y DGDR divididas en: Categoría A (16 Artículos), Forma de Disputa Clausura (6 Secciones), Reglamento General (27 Artículos), Tribunal de Penas (4 Capítulos) y Novedades FIFA/IFAB 2026 (4 Reglas), con buscador predictivo y acordeón colapsable.

9. **Escudos y Assets 100% Optimizados**:
   - Escudos procesados en formato liviano PNG transparente en `public/escudos/` y logotipo oficial en `public/logo_liga.png`.

---

## 📁 Estructura del Proyecto

```text
CATEGORIA A/
│
├── index.html                   # Página principal semántica y responsive
├── .gitignore                   # Exclusión de archivos crudos, pesados o temporales
├── README.md                    # Manual de operaciones y actualización
│
├── css/
│   └── styles.css               # Sistema de diseño, tokens, componentes y responsive
│
├── js/
│   ├── data.js                  # Base de datos oficial accesible en window.LIGA_DATA
│   └── app.js                   # Lógica reactiva de la aplicación, vistas y modales
│
├── public/
│   ├── logo_liga.png            # Logotipo oficial de la Liga Universitaria
│   └── escudos/                 # 15 escudos oficiales optimizados (PNG livianos)
│
├── liga_data_consolidated.json  # Fuente consolidada en formato JSON estándar
│
└── tools/                       # Scripts de utilidad, validación y testing
```

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

No se requiere base de datos pesada ni compilación previa. Se puede ejecutar con cualquier servidor web estático:

```bash
# Opción A (Python):
python -m http.server 8080

# Opción B (Node / npx):
npx serve .
```

Luego abrir en el navegador:
👉 **`http://localhost:8080`**

---

## 🔄 Procedimiento de Actualización Semanal

Cada semana, al recibir el nuevo informe oficial de la fecha del torneo, se debe seguir este flujo sin alterar el diseño visual ni los componentes de la interfaz:

### Paso 1: Analizar el Informe Oficial
- Leer el informe completo (PDF o boletín emitido por la DGDR).
- Identificar la fecha disputada (ej. Clausura Fecha 4).
- Extraer resultados confirmados de todos los partidos.
- Registrar goleadores informados.
- Registrar nuevas tarjetas, sanciones o resoluciones del Tribunal de Penas.
- Distinguir partidos jugados de partidos suspendidos o reprogramados.

### Paso 2: Actualizar la Base de Datos (`js/data.js`)
1. Abrir [`js/data.js`](js/data.js).
2. En `DATA.liga.ultimaFechaDisputada` y `DATA.clausura.ultimaFechaDisputada`, actualizar al número de fecha reciente.
3. En `DATA.clausura.fechas`, ubicar la fecha correspondiente y asignar los goles a los partidos finalizados:
   ```javascript
   {
     "zona": "Zona A",
     "local": "Antorcha",
     "visitante": "Aston",
     "golesL": 2,
     "golesV": 1,
     "estado": "finalizado",
     "nota": ""
   }
   ```
4. Actualizar las tablas de posiciones (`DATA.clausura.tablas.zonaA` y `zonaB`) según la planilla oficial (PJ, G, E, P, GF, GC, DG, Pts).
5. En `DATA.clausura.goleadores`, sumar los nuevos goles de los jugadores o agregar nuevas entradas.
6. En `DATA.sanciones`, registrar las nuevas resoluciones del Tribunal si las hubiera.
7. Sincronizar los cambios con [`liga_data_consolidated.json`](liga_data_consolidated.json) si se utiliza para herramientas automatizadas.

### Paso 3: Validar Localmente
- Abrir la web en `http://localhost:8080`.
- Comprobar que la nueva fecha se muestre como disputada en el selector de fixture.
- Verificar que las tablas de posiciones y la tabla anual sumen correctamente.
- Comprobar que en la ficha del equipo aparezcan los últimos 5 partidos actualizados.
- Revisar la consola del navegador (`F12`) para comprobar que no existan errores de ejecución.

### Paso 4: Confirmar Cambios en Git y Publicar en Vercel
Una vez verificado el funcionamiento, ejecutar en la terminal:

```bash
git add js/data.js liga_data_consolidated.json index.html
git commit -m "Actualizar Clausura 2026 - Fecha X"
git push origin main
```

**Vercel detecta automáticamente el push a la rama `main` y realiza el despliegue a producción en segundos sin tiempos de inactividad.**

---

## ☁️ Conexión con GitHub y Vercel

- **Repositorio Oficial**: [https://github.com/ricarromero/categoria-A](https://github.com/ricarromero/categoria-A)
- **Rama Principal**: `main`
- **Configuración de Vercel**:
  - **Framework Preset**: `Other` (HTML/CSS/JS estático puro).
  - **Root Directory**: `./`
  - **Build Command**: Vacío (sin build step necesario).
  - **Output Directory**: `./` (sirve directamente los archivos estáticos).
