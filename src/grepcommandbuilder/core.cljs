(ns grepcommandbuilder.core
  (:require
   [reagent.core :as r]))


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
                                (:location s) (conj (:location s)))))))


;; Util

(defn toggleable-checkbox
  [label-text state-flag state-atom]
  [:div
   [:label label-text]
   [:input {:type "checkbox"
            :checked (or false (state-flag @state-atom))
            :on-change #(swap! state-atom update state-flag not)}]])

(defn input-field-value
  [e]
  (-> e .-target .-value))


;; Views

(defn pattern-input []
  [:div
   [:label "Search for (pattern): "]
   [:input {:type "text"
            :name "pattern-input-field"
            :on-change #(if-not (empty? (input-field-value %))
                          (swap! state assoc :pattern (input-field-value %))
                          (swap! state dissoc :pattern))}]])

(defn location-input []
  [:div
   [:label "Search in (pattern): "]
   [:input {:type "text"
            :name "location-input-field"
            :on-change #(swap! state assoc :location (input-field-value %))}]])

(defn recursive-checkbox []
  (toggleable-checkbox "Recursive?" :recursive state))

(defn case-insensitive-checkbox []
  (toggleable-checkbox "Case insensitive?" :case state))

(defn whole-word-checkbox []
  (toggleable-checkbox "Search for whole word?" :whole-word state))

(defn invert-checkbox []
  (toggleable-checkbox "Invert match?" :invert state))

(defn line-number-checkbox []
  (toggleable-checkbox "Show matching line numbers?" :line-numbers state))

(defn only-matching-string-checkbox []
  (toggleable-checkbox "Show matching string only?" :matching state))

(defn count-checkbox []
  (toggleable-checkbox "Count matches?" :count state))

(defn filen-names-checkbox []
  (toggleable-checkbox "Show matching file names?" :file-names state))

(defn lines-before-input []
  [:div
   [:label "Show lines before match?"]
   [:input {:type "checkbox"
            :checked (or false (:lines-before-checked @state))
            :on-change #(swap! state update :lines-before-checked not)}]
   [:input {:type "number"
            :min 0
            :step 1
            :class "inline-input"
            :disabled (not (:lines-before-checked @state))
            :value (:lines-before @state)
            :on-change #(swap! state assoc :lines-before (input-field-value %))}]])

(defn lines-around-input []
  [:div
   [:label "Show lines around match?"]
   [:input {:type "checkbox"
            :checked (or false (:lines-around-checked @state))
            :on-change #(swap! state update :lines-around-checked not)}]
   [:input {:type "number"
            :min 0
            :step 1
            :class "inline-input"
            :disabled (not (:lines-around-checked @state))
            :value (:lines-around @state)
            :on-change #(swap! state assoc :lines-around (input-field-value %))}]])

(defn lines-after-input []
  [:div
   [:label "Show lines after match?"]
   [:input {:type "checkbox"
            :checked (or false (:lines-after-checked @state))
            :on-change #(swap! state update :lines-after-checked not)}]
   [:input {:type "number"
            :min 0
            :step 1
            :class "inline-input"
            :disabled (not (:lines-after-checked @state))
            :value (:lines-after @state)
            :on-change #(swap! state assoc :lines-after (input-field-value %))}]])

(defn command-display []
  [:div
   [:label {:class "command-label"} "Final command: "]
   [:input {:class "command-input"
            :type "text"
            :name "command-display-field"
            :readOnly true
            :value (parse-state @state)
            :on-change (parse-state @state)}]])

(defn home-page []
  [:div
   [:div {:class "main"}
    [:div {:class "heading"}
     [:h1 "Welcome to grep command builder"]]
    [pattern-input]
    [location-input]
    [recursive-checkbox]
    [case-insensitive-checkbox]
    [whole-word-checkbox]
    [invert-checkbox]
    [line-number-checkbox]
    [only-matching-string-checkbox]
    [count-checkbox]
    [filen-names-checkbox]
    [lines-before-input]
    [lines-after-input]
    [lines-around-input]
    [command-display]]
   [:div {:class "copy"}
    [:p "\u00A9 2017 Made by Dejan Josifovic " [:a {:href "http://theparanoidtimes.org"} "theparanoidtimes.org"]]]])


;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
