(ns ^:figwheel-no-load org.theparanoidtimes.grepcommandbuilder.dev
  (:require
   [org.theparanoidtimes.grepcommandbuilder.core :as core]
   [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
