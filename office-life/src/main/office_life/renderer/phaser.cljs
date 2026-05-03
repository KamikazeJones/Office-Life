(ns office-life.renderer.phaser
  (:require ["phaser" :as Phaser]
            ["tone" :as Tone]
            [office-life.core :as sim]))

;; ---------------------------------------------------------------------------
;; Konstanten
;; ---------------------------------------------------------------------------

(def ^:const tile-w    64)
(def ^:const tile-h    32)
(def ^:const offset-x  340)
(def ^:const offset-y   60)
(def ^:const canvas-w  800)
(def ^:const canvas-h  520)
(def ^:const sim-speed  1.0)         ; 1× Echtzeit
(def ^:const sim-step   (/ 1.0 20))  ; 20 Ticks/Sek
(def ^:const lerp-speed 0.35)

;; ---------------------------------------------------------------------------
;; Koordinaten-Hilfsfunktionen
;; ---------------------------------------------------------------------------

(defn iso->screen [[gx gy]]
  [(+ offset-x (* (- gx gy) (/ tile-w 2)))
   (+ offset-y (* (+ gx gy) (/ tile-h 2)))])

(defn- lerp [a b t] (+ a (* (- b a) t)))

(defn- quadratic-bezier-to!
  "Zeichnet eine quadratische Bézierkurve von der aktuellen Position nach (x2,y2)
   mit Kontrollpunkt (cx,cy), approximiert durch n Liniensegmente."
  [^js gfx x0 y0 cx cy x2 y2]
  (dotimes [i 8]
    (let [t  (/ (inc i) 8.0)
          mt (- 1.0 t)
          x  (+ (* mt mt x0) (* 2 mt t cx) (* t t x2))
          y  (+ (* mt mt y0) (* 2 mt t cy) (* t t y2))]
      (.lineTo gfx x y))))

;; ---------------------------------------------------------------------------
;; Boden & Objekte
;; ---------------------------------------------------------------------------

(defn- draw-diamond! [^js gfx sx sy fill alpha]
  (let [hw (/ tile-w 2) hh (/ tile-h 2)]
    (.fillStyle gfx fill alpha)
    (.beginPath gfx)
    (.moveTo gfx sx sy)
    (.lineTo gfx (+ sx hw) (+ sy hh))
    (.lineTo gfx sx (+ sy tile-h))
    (.lineTo gfx (- sx hw) (+ sy hh))
    (.closePath gfx)
    (.fillPath gfx)
    (.strokePath gfx)))

(defn- draw-floor! [^js gfx {:keys [grid-w grid-h]}]
  (.lineStyle gfx 1 0x000000 0.12)
  (doseq [y (range grid-h) x (range grid-w)]
    (let [[sx sy] (iso->screen [x y])]
      (draw-diamond! gfx sx sy 0xD8EED8 1.0))))

(defn- draw-desk! [^js gfx cx cy]
  (.fillStyle gfx 0x6D4C41 1.0)
  (.fillRect  gfx (- cx 18) (- cy 14) 36 20))

(defn- draw-shelf! [^js gfx cx cy]
  (.fillStyle gfx 0x5D4037 1.0)
  (doseq [dy [18 9 0]]
    (.fillRect gfx (- cx 22) (- cy dy) 44 6))
  (doseq [[col dx dy] [[0xE53935 -20 17] [0x1E88E5 -10 17] [0x43A047 2 17]
                       [0xFB8C00 -20  8] [0x8E24AA -10  8]]]
    (.fillStyle gfx col 0.9)
    (.fillRect  gfx (+ cx dx) (- cy dy) 8 4)))

(defn- draw-objects! [^js gfx world]
  (doseq [{:keys [type pos]} (:objects world)]
    (let [[sx sy] (iso->screen pos)
          cx sx
          cy (+ sy (/ tile-h 2))]
      (case type
        :desk  (do (draw-diamond! gfx sx sy 0xA5D6A7 1.0) (draw-desk!  gfx cx cy))
        :shelf (do (draw-diamond! gfx sx sy 0xBCAAA4 1.0) (draw-shelf! gfx cx cy))
        nil))))

;; ---------------------------------------------------------------------------
;; Agent – Figur zeichnen
;; ---------------------------------------------------------------------------

(defn- mood-for [{:keys [energy stress] :or {energy 50 stress 50}}]
  (cond
    (and (> energy 70) (< stress 40)) :laugh
    (> energy 55)                     :smile
    (> stress 65)                     :annoyed
    (< energy 30)                     :sad
    :else                             :neutral))

(defn- draw-mouth! [^js gfx cx cy mood]
  (.lineStyle gfx 2 0x333333 1.0)
  (.beginPath gfx)
  (case mood
    :laugh   (do (.moveTo gfx (- cx 8) (+ cy 4))
                 (quadratic-bezier-to! gfx (- cx 8) (+ cy 4)  cx (+ cy 18) (+ cx 8) (+ cy 4)))
    :smile   (do (.moveTo gfx (- cx 6) (+ cy 5))
                 (quadratic-bezier-to! gfx (- cx 6) (+ cy 5)  cx (+ cy 11) (+ cx 6) (+ cy 5)))
    :annoyed (do (.moveTo gfx (- cx 8) (+ cy 6))
                 (dotimes [i 4]
                   (.lineTo gfx
                            (+ (- cx 8) (* i 3))
                            (+ cy 6 (if (even? i) -2 2)))))
    :sad     (do (.moveTo gfx (- cx 6) (+ cy 8))
                 (quadratic-bezier-to! gfx (- cx 6) (+ cy 8)  cx (+ cy 2)  (+ cx 6) (+ cy 8)))
    :neutral (do (.moveTo gfx (- cx 5) (+ cy 5))
                 (.lineTo gfx (+ cx 5) (+ cy 5))))
  (.strokePath gfx))

(defn- draw-face! [^js gfx cx cy r agent]
  (.fillStyle gfx 0xFFE0B2 1.0) (.fillCircle gfx cx cy r)
  (.fillStyle gfx 0x1A237E 1.0)
  (.fillCircle gfx (- cx 5) (- cy 4) 2.5)
  (.fillCircle gfx (+ cx 5) (- cy 4) 2.5)
  (.fillStyle gfx 0xFFFFFF 0.85)
  (.fillCircle gfx (- cx 6) (- cy 5) 1.0)
  (.fillCircle gfx (+ cx 4) (- cy 5) 1.0)
  (draw-mouth! gfx cx cy (mood-for agent)))

(defn- draw-legs! [^js gfx cx cy phase]
  (let [swing (* 6 (js/Math.sin (* phase 6)))]
    (.fillStyle gfx 0x37474F 1.0)
    (.fillRect gfx (- cx 8) (+ cy 8) 6 (+ 10 swing))
    (.fillRect gfx (+ cx 2) (+ cy 8) 6 (- 10 swing))))

(defn- draw-arms! [^js gfx cx cy phase]
  (let [swing (* 2 (js/Math.sin (* phase 6)))
        aswing (- swing)                         ; gegenläufig zu den Beinen
        lx     (- cx 13)
        rx     (+ cx 13)
        ly     (+ (+ cy 2) aswing)
        ry     (+ (+ cy 2) swing)]
    (.fillStyle gfx 0x6D4C41 1.0)
    (.fillEllipse gfx lx ly 6 8)
    (.fillEllipse gfx rx ry 6 8)))

(defn- draw-needs-bars! [^js gfx cx head-y r agent]
  (let [bw 36 bh 4
        bx (- cx (/ bw 2))
        by (- head-y r 16)]
    (doseq [[i nk color] [[0 :energy 0x4CAF50]
                          [1 :stress 0xF44336]
                          [2 :social 0x2196F3]]]
      (let [val (get agent nk 0)
            y   (+ by (* i 6))]
        (.fillStyle gfx 0x000000 0.5) (.fillRect gfx bx y bw bh)
        (.fillStyle gfx color   0.9)  (.fillRect gfx bx y (* bw (/ val 100)) bh)))))

(defn- draw-agent! [^js gfx agent vx vy phase selected?]
  (let [hh     (/ tile-h 2)
        moving (:moving agent)
        bob    (if moving (* 1.5 (js/Math.sin (* phase 6))) 0)
        cx     vx
        cy     (+ vy hh 2 bob)
        r      16
        head-y (- cy 14)]
    ; (.fillStyle gfx 0x000000 0.22) (.fillEllipse gfx cx (+ vy hh 8) 34 12)
    (when moving 
        (draw-legs! gfx cx cy phase) 
        (draw-arms! gfx cx cy phase))
    (.fillStyle gfx (:color agent) 0.85) (.fillEllipse gfx cx (+ cy 6) 26 18)
    (.fillStyle gfx (:color agent) 1.0)  (.fillCircle  gfx cx head-y r)
    (draw-face! gfx cx head-y (- r 2) agent)
    (when selected? (draw-needs-bars! gfx cx head-y r agent))))

;; ---------------------------------------------------------------------------
;; Selektion
;; ---------------------------------------------------------------------------

(defn- nearest-agent [agents px py]
  (reduce (fn [[bd bid] a]
            (let [[tx ty] (iso->screen (:pos a))
                  dx (- px tx)
                  dy (- py (+ ty (/ tile-h 2)))
                  d  (+ (* dx dx) (* dy dy))]
              (if (< d bd) [d (:id a)] [bd bid])))
          [1e9 nil]
          agents))

(defn- setup-tone!
  "Initialisiert Tone.js nach User-Interaktion (async, nach erstem Klick)"
  [music-synth step-synth]
  (when (nil? @music-synth)
    (-> (.start Tone)
        (.then (fn []
                 (let [^js synth (new (.-PolySynth Tone)
                                  (.-Synth Tone)
                                  (clj->js {:oscillator {:type "triangle"}
                                            :envelope   {:attack 0.005 :decay 0.1
                                                         :sustain 0.3 :release 1}}))
                       ^js noise (new (.-NoiseSynth Tone)
                                  (clj->js {:noise    {:type "white"}
                                            :envelope {:attack 0.001 :decay 0.05
                                                       :sustain 0 :release 0.01}}))
                       ^js tap-filter (new (.-Filter Tone) 1600 "bandpass")]
                   (.toDestination synth)
                   (set! (.-value (.-volume noise)) -12)
                   (.connect noise tap-filter)
                   (.toDestination tap-filter)
                   (reset! music-synth synth)
                   (reset! step-synth noise))))
        (.catch (fn [e]
                  (js/console.warn "Tone.js start failed:" e))))))

(def ^:private mood->note
  {:laugh   "E5"
   :smile   "C5"
   :neutral "A4"
   :annoyed "D4"
   :sad     "F3"})

(defn- setup-input! [scene state-atom selected-id music-synth step-synth]
  (.on (.-input scene) "pointerdown"
       (fn [ptr]
         (setup-tone! music-synth step-synth)
         (let [[d id] (nearest-agent (:agents @state-atom) (.-x ptr) (.-y ptr))
               hit?  (< d (* 28 28))]
           (reset! selected-id (when hit? id))
           (when (and hit? @music-synth)
             (let [agent  (first (filter #(= (:id %) id) (:agents @state-atom)))
                   note   (get mood->note (mood-for agent) "C4")]
               (.triggerAttackRelease ^js @music-synth note "8n"))))))
  (.addEventListener js/document "keydown"
                     (fn [e]
                       (when (= "Escape" (.-key e))
                         (reset! selected-id nil)))))

;; ---------------------------------------------------------------------------
;; Simulation – Update-Schritt
;; ---------------------------------------------------------------------------

(defn- update-sim! [state-atom acc walk-time dt]
  (swap! walk-time + dt)
  (swap! acc + dt)
  (when (> @acc sim-step)
    (swap! state-atom sim/tick (* sim-step sim-speed))
    (reset! acc 0.0)))

(defn- update-vis-pos! [vis-pos agents]
  (doseq [a agents]
    (let [[tx ty] (iso->screen (:pos a))
          [vx vy] (get @vis-pos (:id a) [tx ty])]
      (swap! vis-pos assoc (:id a)
             [(lerp vx tx lerp-speed)
              (lerp vy ty lerp-speed)]))))

(defn- redraw-agents! [ag vis-pos walk-time selected-id agents]
  (.clear ag)
  (doseq [a (sort-by #(apply + (:pos %)) agents)]
    (let [[vx vy] (get @vis-pos (:id a) (iso->screen (:pos a)))]
      (draw-agent! ag a vx vy @walk-time (= @selected-id (:id a))))))

(defn- update-footsteps!
  "Spielt Tap-Sound wenn ein Bein maximal ausgestreckt ist (Vorzeichenwechsel von sin)"
  [walk-time step-sign step-synth agents]
  (when @step-synth
    (let [cur-sign (js/Math.sign (js/Math.sin (* @walk-time 6)))
          prev     @step-sign]
      (reset! step-sign cur-sign)
      (when (and (not= cur-sign prev)
                 (not= prev 0)
                 (some :moving agents))
        (.triggerAttackRelease ^js @step-synth "32n")))))

(defn- init-tone!
  "Lazy init—wird nach User-Interaktion aufgerufen wegen Autoplay-Policy"
  []
  nil)


(defn create-game! [state-atom]
  (let [floor-gfx   (atom nil)
        obj-gfx     (atom nil)
        agent-gfx   (atom nil)
        hud-text    (atom nil)
        acc         (atom 0.0)
        vis-pos     (atom {})
        walk-time   (atom 0.0)
        selected-id (atom nil)
        music-synth (atom nil)
        step-sign   (atom 1)
        step-synth  (atom nil)

        on-create
        (fn []
          (this-as ^js scene
            (let [fg  (.graphics (.-add scene))
                  og  (.graphics (.-add scene))
                  ag  (.graphics (.-add scene))
                  txt (.text (.-add scene) 8 8 ""
                             (clj->js {:fontSize "13px" :color "#aaffaa"
                                       :shadow {:offsetX 1 :offsetY 1
                                                :color "#000" :blur 2
                                                :fill true}}))
                  synth (init-tone!)]
              (reset! floor-gfx fg)
              (reset! obj-gfx og)
              (reset! agent-gfx ag)
              (reset! hud-text txt)
              (setup-input! scene state-atom selected-id music-synth step-synth)
              (let [s @state-atom]
                (draw-floor!   fg (:world s))
                (draw-objects! og (:world s))))))

        on-update
        (fn [_time delta]
          (let [dt (/ (min (or delta 16) 100) 1000.0)
                s  @state-atom]
            (update-sim!      state-atom acc walk-time dt)
            (update-vis-pos!  vis-pos (:agents @state-atom))
            (update-footsteps! walk-time step-sign step-synth (:agents @state-atom))
            (when-let [ag @agent-gfx]
              (redraw-agents! ag vis-pos walk-time selected-id (:agents @state-atom)))
            (when-let [txt @hud-text]
              (.setText txt (str "Tick " (:tick s))))))]

    (new (.-Game Phaser)
         (clj->js {:type            (.-AUTO Phaser)
                   :width           canvas-w
                   :height          canvas-h
                   :backgroundColor "#1a1a2e"
                   :scene           {:create on-create
                                     :update on-update}
                   :parent          "game-container"}))))

