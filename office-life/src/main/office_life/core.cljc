(ns office-life.core
  (:require [office-life.sim.agents :as agents]
            [office-life.sim.world  :as world]))

;; ---- Initialzustand ----

(defn initial-state []
  {:world  (world/initial-world)
   :agents [(agents/new-agent :alice 2.0 6.5 0x4FC3F7 :desk-1)
            (agents/new-agent :bob   5.0 6.5 0xAED581 :desk-2)
            (agents/new-agent :carol 8.0 6.5 0xFFB74D :desk-3)]
   :tick   0})

;; ---- Bewegung (flüssig, Tiles/Sek) ----

(def ^:private move-speed 1.5)

(defn- dist-sq [[px py] [tx ty]]
  (let [dx (- tx px) dy (- ty py)]
    (+ (* dx dx) (* dy dy))))

(defn- move-towards [[px py] [tx ty] dt]
  (let [dx   (- tx px)
        dy   (- ty py)
        dsq  (+ (* dx dx) (* dy dy))
        step (* move-speed dt)]
    (if (<= dsq (* step step))
      [tx ty]
      (let [dist #?(:clj  (Math/sqrt dsq)
                    :cljs (js/Math.sqrt dsq))]
        [(+ px (* (/ dx dist) step))
         (+ py (* (/ dy dist) step))]))))

(defn- arrived? [pos target]
  (<= (dist-sq pos target) 0.04))

;; ---- Hilfsfunktionen Welt ----

(defn- find-obj [world id]
  (->> (:objects world) (filter #(= (:id %) id)) first))

(defn- random-shelf [world]
  (let [shelves (world/find-objects world :shelf)]
    (nth shelves (rand-int (count shelves)))))

;; ---- Agenten-Update (Task-Automat) ----

(defn- update-agent [agent world dt]
  (case (:task agent)

    :fetch
    (let [agent   (if (nil? (:shelf-id agent))
                    (assoc agent :shelf-id (:id (random-shelf world)))
                    agent)
          target  (:pos (find-obj world (:shelf-id agent)))
          new-pos (move-towards (:pos agent) target dt)]
      (if (arrived? new-pos target)
        (assoc agent :pos target
                     :moving false
                     :task :work
                     :action :idle
                     :work-timer (+ 10.0 (rand-int 21)))
        (assoc agent :pos new-pos :moving true :action :idle)))

    :work
    (let [target  (:pos (find-obj world (:desk-id agent)))
          new-pos (move-towards (:pos agent) target dt)]
      (if (arrived? new-pos target)
        (let [remaining (- (:work-timer agent) dt)]
          (if (<= remaining 0)
            (assoc agent :pos target
                         :moving false
                         :task :return
                         :action :idle
                         :work-timer 0.0)
            (assoc agent :pos target
                         :moving false
                         :action :work
                         :work-timer remaining)))
        (assoc agent :pos new-pos :moving true :action :idle)))

    :return
    (let [target  (:pos (find-obj world (:shelf-id agent)))
          new-pos (move-towards (:pos agent) target dt)]
      (if (arrived? new-pos target)
        (assoc agent :pos target
                     :moving false
                     :task :fetch
                     :action :idle
                     :shelf-id nil)
        (assoc agent :pos new-pos :moving true :action :idle)))

    agent))

;; ---- Haupt-Tick ----

(defn tick [state dt]
  (-> state
      (update :agents
              (fn [agts]
                (mapv #(-> (update-agent % (:world state) dt)
                           (agents/step-needs dt))
                      agts)))
      (update :tick inc)))
