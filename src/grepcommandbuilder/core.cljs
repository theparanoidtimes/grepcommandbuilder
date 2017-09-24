(ns grepcommandbuilder.core
  (:require
   [reagent.core :as r]
   [keybind.core :as key]
   cljsjs.clipboard))


;; App state

(def state (r/atom {}))

(defn add-quotes
  [s]
  (str "'" s "'"))

(defn parse-state
  [s]
  (when (and (:pattern s) (:location s))
    (apply str (interpose " " (cond-> ["grep"]
                                (:recursive s) (conj "-r")
                                (:case s) (conj "-i")
                                (:whole-word s) (conj "-w")
                                (:invert s) (conj "-v")
                                (:line-numbers s) (conj "-n")
                                (:matching s) (conj "-o")
                                (:count s) (conj "-c")
                                (:file-names s) (conj "-l")
                                (:offset s) (conj "-b")
                                (and
                                 (:lines-before-checked s)
                                 (:lines-before s)) (conj (str "-B " (:lines-before s)))
                                (and
                                 (:lines-after-checked s)
                                 (:lines-after s)) (conj (str "-A " (:lines-after s)))
                                (and
                                 (:lines-around-checked s)
                                 (:lines-around s)) (conj (str "-C " (:lines-around s)))
                                (:pattern s) (conj (add-quotes (:pattern s)))
                                (:location s) (conj (:location s))
                                (and
                                 (:file-checked s)
                                 (:file s)) (conj (str "> " (:file s))))))))


;; Util

(defn input-field-value
  [e]
  (-> e .-target .-value))

(defn checkbox-field-value
  [e]
  (-> e .-target .-checked))

(defn checked-numbers-input
  [text checked-flag flag]
  [:div
   [:label text]
   [:input {:type "checkbox"
            :checked (checked-flag @state)
            :on-change #(swap! state assoc checked-flag (checkbox-field-value %))}]
   [:input {:type "number"
            :min 0
            :step 1
            :class "inline-input"
            :disabled (not (checked-flag @state))
            :value (flag @state)
            :on-change #(swap! state assoc flag (input-field-value %))}]])

(defn checked-text-input
  [text checked-flag flag]
  [:div
   [:label text]
   [:input {:type "checkbox"
            :checked (checked-flag @state)
            :on-change #(swap! state assoc checked-flag (checkbox-field-value %))}]
   [:input {:type "text"
            :class "inline-input"
            :disabled (not (checked-flag @state))
            :value (flag @state)
            :on-change #(swap! state assoc flag (input-field-value %))}]] )

(defn toggleable-checkbox
  [text flag]
  [:div
   [:label text]
   [:input {:type "checkbox"
            :checked (flag @state)
            :on-change #(swap! state assoc flag (checkbox-field-value %))}]])

(defn timed-display-copy []
  (when-not (pos? (:clp @state))
    (swap! state assoc :clp 1 :int (js/setInterval #(swap! state update :clp dec) 1000))))

(defn clipboard-button
  [target]
  (let [clipboard-atom (atom nil)]
    (r/create-class
     {:display-name "clipboard-button"
      :component-did-mount #(let [clipboard (new js/Clipboard (r/dom-node %))]
                              (reset! clipboard-atom clipboard))
      :component-will-unmount #(when-not (nil? @clipboard-atom)
                                 (.destroy @clipboard-atom)
                                 (reset! clipboard-atom nil))
      :reagent-render (fn []
                        [:button.clipboard
                         {:data-clipboard-target target
                          :title "Copy to clipboard"
                          :on-click #(timed-display-copy)}])})))


;; Views

(defn pattern-input []
  [:div
   [:label "Search for (pattern): "]
   [:input {:type "text"
            :name "pattern-input-field"
            :value (:pattern @state)
            :on-change #(if-not (empty? (input-field-value %))
                          (swap! state assoc :pattern (input-field-value %))
                          (swap! state dissoc :pattern))}]])

(defn location-input []
  [:div
   [:label "Search in (pattern): "]
   [:input {:type "text"
            :name "location-input-field"
            :value (:location @state)
            :on-change #(if-not (empty? (input-field-value %))
                          (swap! state assoc :location (input-field-value %))
                          (swap! state dissoc :location))}]])

(defn recursive-checkbox []
  (toggleable-checkbox "Recursive?" :recursive))

(defn case-insensitive-checkbox []
  (toggleable-checkbox "Case insensitive?" :case))

(defn whole-word-checkbox []
  (toggleable-checkbox "Search for whole word?" :whole-word))

(defn invert-checkbox []
  (toggleable-checkbox "Invert match?" :invert))

(defn line-number-checkbox []
  (toggleable-checkbox "Show matching line numbers?" :line-numbers))

(defn only-matching-string-checkbox []
  (toggleable-checkbox "Show matching string only?" :matching))

(defn count-checkbox []
  (toggleable-checkbox "Count matches?" :count))

(defn file-names-checkbox []
  (toggleable-checkbox "Show matching file names?" :file-names))

(defn offset-checkbox []
  (toggleable-checkbox "Show position in file?" :offset))

(defn lines-before-input []
  (checked-numbers-input "Show N lines before match?" :lines-before-checked :lines-before))

(defn lines-around-input []
  (checked-numbers-input "Show N lines around match?" :lines-around-checked :lines-around))

(defn lines-after-input []
  (checked-numbers-input "Show N lines after match?" :lines-after-checked :lines-after))

(defn output-to-file-input []
  (checked-text-input "Output result in file?" :file-checked :file))

(defn command-display []
  [:div
   [:label {:class "command-label"} "Final command: "]
   [:input {:id "command-input"
            :class "command-input"
            :type "text"
            :name "command-display-field"
            :readOnly true
            :value (parse-state @state)
            :on-change (parse-state @state)}]
   [clipboard-button "#command-input"]
   [:span {:class "clp-info"} (if (pos? (:clp @state))
                                "Copied!"
                                (js/clearInterval (:int @state)))]])

(defn home-page []
  [:div
   [:div {:class "main"}
    [:div {:class "heading"}
     [:h1 "Welcome to grep command builder"]]
    [:div {:class "text"}
     [:h4 ""]]
    [pattern-input]
    [location-input]
    [recursive-checkbox]
    [case-insensitive-checkbox]
    [whole-word-checkbox]
    [invert-checkbox]
    [line-number-checkbox]
    [only-matching-string-checkbox]
    [count-checkbox]
    [file-names-checkbox]
    [offset-checkbox]
    [lines-before-input]
    [lines-after-input]
    [lines-around-input]
    [output-to-file-input]
    [command-display]]
   [:div {:class "copy"}
    [:p "\u00A9 2017 Dejan Josifovic " [:a {:href "http://theparanoidtimes.org"} "theparanoidtimes.org"]]]])


;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app"))
  (key/bind! "esc" ::clear-state (fn [] (swap! state empty))))

(defn init! []
  (mount-root))
