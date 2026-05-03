(ns office-life.sim.agents)

(defn- clamp [v lo hi] (max lo (min hi v)))

(defn new-agent [id x y color desk-id]
  {:id         id
   :pos        [(double x) (double y)]
   :task       :fetch   ; :fetch | :work | :return
   :work-timer 0.0
   :desk-id    desk-id
   :shelf-id   nil
   :moving     false
   :action     :idle
   :energy     (+ 50 (rand-int 50))
   :stress     (rand-int 40)
   :social     (rand-int 60)
   :color      color})

(def ^:private need-rates
  {:work {:energy -0.04 :stress  0.03 :social  0.02}
   :idle {:energy  0.01 :stress -0.01 :social  0.01}})

(defn step-needs [agent dt]
  (let [r (get need-rates (:action agent) {:energy 0 :stress 0 :social 0})]
    (-> agent
        (update :energy #(clamp (+ % (* (:energy r) dt)) 0 100))
        (update :stress #(clamp (+ % (* (:stress r) dt)) 0 100))
        (update :social #(clamp (+ % (* (:social r) dt)) 0 100)))))
