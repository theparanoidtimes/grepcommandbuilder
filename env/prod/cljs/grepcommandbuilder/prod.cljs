(ns grepcommandbuilder.prod
  (:require
   [grepcommandbuilder.core :as core]))

;; Ignore println statements in prod.
(set! *print-fn* (fn [& _]))

(core/init!)
