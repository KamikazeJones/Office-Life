(ns office-life.sim.world)

(def grid-w 10)
(def grid-h 8)

(def initial-objects
  [{:id :desk-1  :type :desk  :pos [2.0 1.0]}
   {:id :desk-2  :type :desk  :pos [5.0 1.0]}
   {:id :desk-3  :type :desk  :pos [8.0 1.0]}
   {:id :shelf-1 :type :shelf :pos [2.0 6.0]}
   {:id :shelf-2 :type :shelf :pos [5.0 6.0]}
   {:id :shelf-3 :type :shelf :pos [8.0 6.0]}])

(defn walkable? [[x y]]
  (and (>= x 0) (< x grid-w)
       (>= y 0) (< y grid-h)))

(defn initial-world []
  {:grid-w  grid-w
   :grid-h  grid-h
   :objects initial-objects})

(defn find-object [world type]
  (->> (:objects world)
       (filter #(= (:type %) type))
       first))

(defn find-objects [world type]
  (->> (:objects world)
       (filter #(= (:type %) type))))
