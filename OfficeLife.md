Hier ist eine saubere, kompakte **Anforderungsdefinition als Markdown-Dokument**, basierend auf dem bisherigen Konzept – ohne Implementierungsdetails, aber mit klarer Struktur und Systemgrenzen.

---

# Büro-Simulationsspiel – Anforderungsdefinition

**Aktueller Implementierungsstand (2026-05-03)**

- Simulation läuft als ClojureScript + Phaser PWA.
- Welt: Tile‑Grid 10×8 mit drei Schreibtischen und drei Regalen (Shelves).
- Agenten: Bedürfnisgetriebenes Verhalten, aktuelles Agenten‑State‑Machine:
	- `:fetch` → zufälliges Regal auswählen, Akte holen
	- `:work`  → zurück am eigenen Schreibtisch; Bearbeitung 10–30s
	- `:return`→ Akte in ein Regal zurückbringen → wiederholen
- Zeitmodell: Echtzeit, Interne Simulation läuft mit fixed timestep (20 Ticks/Sek), Gesamt‑Simulationsrate = 1×Echtzeit.
- Rendering: Visuelle Positionen werden interpoliert (Lerp) für flüssige Bewegung; einfache Placeholder‑Animationen (Bob + Bein‑Swing) vorhanden.

Diese Datei beschreibt weiterhin die Anforderungen — oben sind die aktuell implementierten Details kurz dokumentiert.

## 1. Ziel des Systems

Ziel ist die Entwicklung einer agentenbasierten Simulation eines Büroalltags, in der mehrere virtuelle Figuren (Agenten) autonom handeln.
Der Nutzer beobachtet das Verhalten der Agenten in einer isometrischen Darstellung, ohne direkt steuernd einzugreifen.

Die Simulation soll emergentes Verhalten erzeugen, das aus einfachen Regeln und Bedürfnissen entsteht.

---

## 2. Grundprinzipien

* **Agentenbasiert**: Jede Figur trifft eigenständig Entscheidungen.
* **Emergenz statt Skript**: Kein fester Tagesablauf, sondern dynamisches Verhalten.
* **Bedürfnisgetrieben**: Entscheidungen entstehen aus konkurrierenden Bedürfnissen.
* **Beobachtbarkeit**: Verhalten muss für den Nutzer nachvollziehbar sein.
* **Trennung von Simulation und Darstellung**: Logik und Visualisierung sind unabhängig.

---

## 3. Systemübersicht

### 3.1 Komponenten

* **Agentensystem**
* **Weltmodell (Umgebung)**
* **Entscheidungslogik**
* **Zeitsystem**
* **Visualisierung (isometrisch)**

---

## 4. Agentenmodell

### 4.1 Eigenschaften eines Agenten

Jeder Agent besitzt interne Zustände (Needs):

* Energie
* Stress
* Soziales Bedürfnis
* Arbeitsfortschritt (optional initial)

Diese Werte verändern sich kontinuierlich über die Zeit und durch Aktionen.

---

### 4.2 Verhalten

Agenten:

* bewerten mögliche Aktionen basierend auf ihrem aktuellen Zustand
* wählen die Aktion mit dem höchsten Nutzen
* führen diese Aktion aus, sofern sie in der Umgebung möglich ist

Es existieren **keine festen Zeitpläne**.

---

### 4.3 Typische Aktionen (Tasks)

* Arbeiten (am Schreibtisch)
* Kaffee holen
* Soziale Interaktion (Gespräch)
* Herumlaufen
* Nichtstun (Idle)

---

## 5. Weltmodell

### 5.1 Raumstruktur

* Tile-basiertes Grid
* Isometrische Darstellung
* Begehbare und nicht begehbare Bereiche

---

### 5.2 Objekte

Objekte definieren Handlungsmöglichkeiten:

* Schreibtisch → Arbeiten möglich
* Kaffeemaschine → Energie erhöhen
* Andere Agenten → soziale Interaktion

---

### 5.3 Designprinzip

> Die Umgebung bestimmt, welche Aktionen möglich und attraktiv sind.

Die räumliche Anordnung beeinflusst das Verhalten der Agenten direkt.

---

## 6. Entscheidungslogik

### 6.1 Ziel

Agenten wählen kontinuierlich Aktionen, die ihren Zustand verbessern.

---

### 6.2 Eigenschaften

* Mehrere konkurrierende Bedürfnisse
* Keine deterministischen Abläufe
* Kontextabhängige Entscheidungen
* Abhängigkeit von erreichbaren Optionen

---

### 6.3 Erwartetes Verhalten

* spontane Kaffeepausen
* Arbeitsphasen
* soziale Gruppenbildung
* ineffizientes Verhalten (z. B. Prokrastination)

---

## 7. Zeitmodell

* Kontinuierlicher Zeitfluss
* Beschleunigte Simulation (keine Echtzeitbindung an reale Uhrzeit)
* Zustandsveränderungen erfolgen schrittweise

---

## 8. Visualisierung

### 8.1 Perspektive

* Isometrische Darstellung (ähnlich klassischen Aufbausimulationen)

---

### 8.2 Anforderungen

* Darstellung von Räumen und Objekten
* Sichtbare Bewegungen der Agenten
* Zustände müssen visuell erkennbar sein

Beispiele:

* langsame Bewegung → Müdigkeit
* Animationen → aktuelle Tätigkeit

---

## 9. Beobachtbarkeit und Feedback

Das System muss für den Nutzer verständlich sein:

* Aktionen müssen klar erkennbar sein
* Zustände müssen indirekt sichtbar werden
* Verhalten darf nicht zufällig wirken

---

## 10. Minimaler Funktionsumfang (MVP)

### 10.1 Welt

* Ein Raum
* Mehrere Schreibtische
* Eine Kaffeemaschine

---

### 10.2 Agenten

* 2–3 Agenten

---

### 10.3 Bedürfnisse

* Energie
* Stress
* Soziales Bedürfnis

---

### 10.4 Aktionen

* Arbeiten
* Kaffee holen
* Soziale Interaktion

---

## 11. Nicht-Ziele (Initialphase)

Folgende Funktionen sind explizit nicht Teil der ersten Version:

* Karrieresystem
* komplexe Ereignisse (z. B. Meetings, Chefverhalten)
* detaillierte Persönlichkeitsmodelle
* umfangreiche UI-Systeme

---

## 12. Erweiterbarkeit (langfristig)

Das System soll später erweiterbar sein für:

* zusätzliche Bedürfnisse
* Persönlichkeitsprofile
* komplexere Interaktionen
* dynamische Ereignisse
* austauschbare Verhaltensdefinitionen

---

## 13. Erfolgsindikatoren

Das System gilt als erfolgreich, wenn:

* nachvollziehbares Verhalten entsteht
* Agenten unterschiedliche Routinen entwickeln
* soziale Dynamiken sichtbar werden
* der Nutzer das Verhalten intuitiv interpretieren kann

---

## 14. Zusammenfassung

Das System simuliert einen Büroalltag nicht durch Skripte, sondern durch:

> einfache Regeln + Bedürfnisse + Umgebung → komplexes Verhalten

Der Fokus liegt auf emergenter Dynamik und verständlicher Beobachtbarkeit.
