(ns mydevcards.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [ajax.core :refer [GET]]
   [cljs.core.async :as async]
   )
  (:require-macros
     [devcards.core :as dc :refer [defcard deftest]]
     [cljs.core.async.macros :as async :refer [go] ]
     ))

(enable-console-print!)

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

