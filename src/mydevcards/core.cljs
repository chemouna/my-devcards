(ns mydevcards.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [ajax.core :refer [GET]]
   [cljs.core.async :refer [mix admix toggle merge chan <! >! timeout]]
   )
  (:require-macros
     [devcards.core :as dc :refer [defcard deftest]]
     [cljs.core.async.macros :as async :refer [go] ]
     ))

(enable-console-print!)

(def in-channel-one (chan))
(def in-channel-two (chan))
(def in-channel-three (chan))

(defn randomly-constantly
  "Constantly publishes the given value to the given channel in random
   intervals every 0-5 seconds."
  [channel publish-value]
  (go (loop []
        (<! (timeout (* 1000 (rand-int 5))))
        (>! channel publish-value)
        (recur))))

(def randomly-constantly in-channel-one "channel-one")
(def randomly-constantly in-channel-two "channel-two")
(def randomly-constantly in-channel-three "channel-three")

(def merged (merge [in-channel-one
                    in-channel-two
                    in-channel-three]))

(go (loop [] ;; why [] ? 
      (println (<! merged)) (recur)))

(defcard first-card
  (sab/html [:div
             [:h1 "This is your first devcard!"]]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

