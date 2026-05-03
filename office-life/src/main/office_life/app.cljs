(ns office-life.app
  (:require [office-life.core            :as sim]
            [office-life.renderer.phaser :as renderer]))

;; defonce: überlebt Hot-Reloads
(defonce state (atom (sim/initial-state)))
(defonce game  (atom nil))

(defn init []
  (when (nil? @game)
    (reset! game (renderer/create-game! state))))

;; Wird von shadow-cljs nach jedem Hot-Reload aufgerufen
(defn reload []
  (js/console.log "Hot reload – Simulation läuft weiter"))
