(ns grepcommandbuilder.prod
  (:require
    [grepcommandbuilder.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
