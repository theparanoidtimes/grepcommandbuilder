(ns org.theparanoidtimes.grepcommandbuilder.prod
  (:require
   [org.theparanoidtimes.grepcommandbuilder.core :as core]))

;; Ignore println statements in prod.
(set! *print-fn* (fn [& _]))

(core/init!)
