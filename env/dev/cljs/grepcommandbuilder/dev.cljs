(ns ^:figwheel-no-load grepcommandbuilder.dev
  (:require
   [grepcommandbuilder.core :as core]
   [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
