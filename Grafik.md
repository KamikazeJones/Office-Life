# Grafik‑Entscheidung — OfficeLife

## Kurzfassung
Ziel: Cross‑Platform‑Rendering für die Simulation mit gemeinsamer Logik. Gewählte Technik: ClojureScript + Phaser, ausgeliefert als PWA; Mobile mittels Capacitor; Desktop mittels Tauri.

## Stack
- Core Simulation: `.cljc` (plattformspezifische Logik vermeiden)
- Renderer / UI: ClojureScript + Phaser (WebGL/Canvas)
- Web Deployment: PWA (offline, installierbar)
- Mobile Wrapper: Capacitor (iOS/Android WebView)
- Desktop Wrapper: Tauri (leichter, native Fenster)

## Architekturprinzipien
- Trennung: Simulation (pure functions, deterministisch) vs. Renderer (visualisiert nur Zustand).
- Shared core: Agenten, Bedürfnisse, A* Pathfinding, Zeitsystem in `.cljc`.
- Renderer‑Adapter (CLJS): liest Zustand (positions, action, needs, animations) → zeichnet.
- Fixed timestep für Simulation; Rendering unabhängig (interpolation für flüssige Bewegung).

## Rendering / Isometrie
- Tile‑Grid intern (x,y). Mapping:
  screenX = (x - y) * (tileW / 2)
  screenY = (x + y) * (tileH / 2)
- Layering: Sortiere Renderliste nach (x + y) für korrekte Überlappung.
- Tiles: Bodenlayer, Objektlayer, Agentenlayer, Effekte/UI.
- Sprites: Sprite‑Atlas (animations: walk, idle, work, coffee).
- Bewegung: A* auf Grid + Pfad‑Smoothing + interpolierte Positionen.

## Visuelles Feedback / UX
- Thought‑Bubbles / kleine Icons über Agenten (Kaffee, Chat).
- Farb-/Posewechsel bei Zuständen (müde → langsamer, roter Stress‑Glow).
- Debug‑Overlays (Grid, Pfad, Need‑Balken) während Entwicklung.
- Touch‑Friendly UI: größere Buttons, pinch/drag Kamera, adaptives HUD.

## Assets & Pipeline
- Start mit Placeholder (geometrische Formen), später Pixel/Vector‑Art.
- Verwende ein Atlas (TexturePacker) für effizientes Rendering.
- Varianten für DPI (1x, 2x) und responsive scaling.
- Ordnerstruktur: `/assets/sprites`, `/assets/atlases`, `/assets/maps`.

## Performance
- Batch Rendering (Phaser intern nutzt Texture Atlases).
- Simulation als reine CPU‑Logik: ggf. WebWorker auslagern (CLJS → JS Worker).
- Limit: Anzahl Agenten → Testen und ggf. LOD (weniger Updates für entfernte Agents).

## Build & Deploy (Kurzanleitung)
- Dev watch:
- Web (PWA) → Build + hosten (Netlify, Vercel oder statischer Server).
- Mobile → Capacitor: `npx cap add android` / `npx cap add ios` + native build.
- Desktop → Tauri: `yarn tauri build` (nach PWA build).

## To‑Dos (nächste Schritte)
- `Grafik.md` anlegen (dieses Dokument).
- Shared core als `.cljc` skizzieren (Agenten + tick).
- Kleines CLJS‑Phaser‑Starterprojekt scaffolden (Hot reload).
- Minimal MVP: 1 Raum, 2–3 Agents, Kaffeemaschine, einfache Sprites, Debug‑Overlay.

## Offene Entscheidungen
- Pixel‑Art vs. Vector (Pixel einfacher für isometrisch look).
- WebWorker für Simulationslast — erst messen, dann auslagern.
- Asset‑Style (platzhalter → final) — wer erstellt Art?

---

## Aktueller Implementierungsstand (2026-05-03)

- Die Simulation wurde erweitert: es gibt nun drei Regale (`shelf-1..3`) und drei Schreibtische (`desk-1..3`).
- Agenten‑Workflow implementiert: Agenten holen Akten aus einem zufälligen Regal, tragen sie zum zugeordneten Schreibtisch, bearbeiten die Akte 10–30 Sekunden und bringen sie zurück.
- Zeitmodell: Simulation läuft in Echtzeit; intern verwendet die Engine einen Fixed Timestep von 20 Ticks/Sek. Die Parameter sind in `renderer/phaser.cljs` konfiguriert (`sim-step`, `sim-speed`).
- Rendering: Visuelle Interpolation (Lerp) wurde hinzugefügt, sodass Agenten zwischen Tile‑Positionen gleiten. Zusätzlich simple Placeholder‑Animationen (Kopf‑Bob, Bein‑Swing) für laufende Agenten.
- Platzhalter‑Geometrie wird aktuell verwendet; der nächste Schritt ist ein echtes Sprite‑Sheet / Atlas mit Gang‑Frames für flüssige, Sims‑ähnliche Animationen.

### Nächste Grafik‑Schritte

- Erstellen eines Sprite‑Atlas mit einem Laufzyklus (links/rechts/idle/work) und Einbau in `phaser.cljs`.
- Transitionen: Interpolierte Pose‑Blends zwischen `walk` und `work` (für realistischere Animation beim Setzen/Stehen).
- Debug‑Overlay: Pfade und Ziel‑Markers für Entwicklung (optional bereits vorhanden).


## Glossar — Kurzdefinitionen

### PWA (Progressive Web App)
Eine Web‑App, die sich wie eine native App verhält: `manifest.json`, Service Worker für Offline/Cache, installierbar im Browser. Eignet sich gut als primäres Deployment‑Ziel (Web + PWA) und als Ausgangspunkt für Wrapper (Capacitor, Tauri, Electron).

### Phaser
Ein 2D‑HTML5‑Game‑Framework (JavaScript) mit Spiel‑Loop, Scenes, Tilemap‑Support, Animations‑ und Input‑APIs. Gut für schnelle Prototypen, Tile/Isometrie und performant in WebGL/Canvas.

### Electron
Framework, das deine Web‑App in einer nativen Desktop‑App mit eingebettetem Chromium und Node.js verpackt. Sehr vorhersehbares Browser‑Verhalten auf allen Plattformen, schneller Einstieg, aber größere Binaries und höherer Speicherbedarf.

### Tauri
Leichtgewichtiges Framework für native Desktop‑Apps, das die systemeigene WebView (statt gebündeltem Chromium) nutzt und ein Rust‑Backend für native APIs bereitstellt. Resultiert in kleineren Binaries und stärkerer Sicherheits‑Baseline, erfordert aber Rust/Cargo im Build‑Stack.

