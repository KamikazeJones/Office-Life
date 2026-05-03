# OfficeLife – MVP

Agentenbasierte Büro-Simulation in ClojureScript + Phaser.  
Isometrische Darstellung, bedürfnisgetriebene Agenten, PWA-ready.

## Voraussetzungen

- Java 11+
- Node.js 18+

## Setup

```bash
cd office-life
npm install
```

## Entwicklung (Hot Reload)

```bash
npm run dev
# → http://localhost:8080
```

## Produktions-Build

```bash
npm run build
# → public/js/main.js
```

## Projektstruktur

```
src/main/office_life/
  core.cljc                – Haupt-Tick, Zustandsupdate
  sim/
    agents.cljc            – Needs, Utility-Funktion, step-needs
    world.cljc             – Grid, Objekte (Schreibtische, Kaffeemaschine)
  renderer/
    phaser.cljs            – Isometrischer Phaser-Renderer
  app.cljs                 – Einstiegspunkt (init / reload)

public/
  index.html
  manifest.json            – PWA-Manifest
  sw.js                    – Service Worker
```

## Legende

| Punkt | Aktion     |
|-------|-----------|
| ⚪ Weiß   | Arbeiten  |
| 🟠 Orange | Kaffee    |
| 🔵 Cyan   | Sozial    |
| ⬜ Grau   | Idle      |

Balken über jedem Agenten: **Energie** (grün) · **Stress** (rot) · **Sozial** (blau)

## Nächste Schritte

- [ ] A\*-Pathfinding (statt schrittweiser Näherung)
- [ ] Sprite-Sheets (statt Platzhalter-Geometrie)
- [ ] Mehrere Schreibtische mit Belegungsverwaltung
- [ ] Electron-/Tauri-Wrapper für Desktop
- [ ] Capacitor für Mobile
