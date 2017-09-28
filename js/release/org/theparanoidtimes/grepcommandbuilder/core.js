// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('org.theparanoidtimes.grepcommandbuilder.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('keybind.core');
org.theparanoidtimes.grepcommandbuilder.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
org.theparanoidtimes.grepcommandbuilder.core.add_quotes = (function org$theparanoidtimes$grepcommandbuilder$core$add_quotes(s){
return ["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"'"].join('');
});
org.theparanoidtimes.grepcommandbuilder.core.parse_state = (function org$theparanoidtimes$grepcommandbuilder$core$parse_state(s){
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__10833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grep"], null);
var G__10833__$1 = (cljs.core.truth_(cljs.core.cst$kw$recursive.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833,"-r"):G__10833);
var G__10833__$2 = (cljs.core.truth_(cljs.core.cst$kw$case.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$1,"-i"):G__10833__$1);
var G__10833__$3 = (cljs.core.truth_(cljs.core.cst$kw$whole_DASH_word.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$2,"-w"):G__10833__$2);
var G__10833__$4 = (cljs.core.truth_(cljs.core.cst$kw$invert.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$3,"-v"):G__10833__$3);
var G__10833__$5 = (cljs.core.truth_(cljs.core.cst$kw$line_DASH_numbers.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$4,"-n"):G__10833__$4);
var G__10833__$6 = (cljs.core.truth_(cljs.core.cst$kw$matching.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$5,"-o"):G__10833__$5);
var G__10833__$7 = (cljs.core.truth_(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$6,"-c"):G__10833__$6);
var G__10833__$8 = (cljs.core.truth_(cljs.core.cst$kw$file_DASH_names.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$7,"-l"):G__10833__$7);
var G__10833__$9 = (cljs.core.truth_(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$8,"-b"):G__10833__$8);
var G__10833__$10 = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$lines_DASH_before_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$lines_DASH_before.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$9,["-B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lines_DASH_before.cljs$core$IFn$_invoke$arity$1(s))].join('')):G__10833__$9);
var G__10833__$11 = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$lines_DASH_after_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$lines_DASH_after.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$10,["-A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lines_DASH_after.cljs$core$IFn$_invoke$arity$1(s))].join('')):G__10833__$10);
var G__10833__$12 = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$lines_DASH_around_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$lines_DASH_around.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$11,["-C ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lines_DASH_around.cljs$core$IFn$_invoke$arity$1(s))].join('')):G__10833__$11);
var G__10833__$13 = (cljs.core.truth_(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$12,org.theparanoidtimes.grepcommandbuilder.core.add_quotes(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(s))):G__10833__$12);
var G__10833__$14 = (cljs.core.truth_(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$13,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(s)):G__10833__$13);
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$file_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10833__$14,["> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(s))].join(''));
} else {
return G__10833__$14;
}
})()));
} else {
return null;
}
});
org.theparanoidtimes.grepcommandbuilder.core.input_field_value = (function org$theparanoidtimes$grepcommandbuilder$core$input_field_value(e){
return e.target.value;
});
org.theparanoidtimes.grepcommandbuilder.core.checkbox_field_value = (function org$theparanoidtimes$grepcommandbuilder$core$checkbox_field_value(e){
return e.target.checked;
});
org.theparanoidtimes.grepcommandbuilder.core.checked_numbers_input = (function org$theparanoidtimes$grepcommandbuilder$core$checked_numbers_input(text,checked_flag,flag){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,(function (){var G__10836 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (checked_flag.cljs$core$IFn$_invoke$arity$1 ? checked_flag.cljs$core$IFn$_invoke$arity$1(G__10836) : checked_flag.call(null,G__10836));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__10834_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,checked_flag,org.theparanoidtimes.grepcommandbuilder.core.checkbox_field_value(p1__10834_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$step,(1),cljs.core.cst$kw$class,"inline-input",cljs.core.cst$kw$disabled,cljs.core.not((function (){var G__10837 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (checked_flag.cljs$core$IFn$_invoke$arity$1 ? checked_flag.cljs$core$IFn$_invoke$arity$1(G__10837) : checked_flag.call(null,G__10837));
})()),cljs.core.cst$kw$value,(function (){var G__10838 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (flag.cljs$core$IFn$_invoke$arity$1 ? flag.cljs$core$IFn$_invoke$arity$1(G__10838) : flag.call(null,G__10838));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__10835_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,flag,org.theparanoidtimes.grepcommandbuilder.core.input_field_value(p1__10835_SHARP_));
})], null)], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.checked_text_input = (function org$theparanoidtimes$grepcommandbuilder$core$checked_text_input(text,checked_flag,flag){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,(function (){var G__10841 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (checked_flag.cljs$core$IFn$_invoke$arity$1 ? checked_flag.cljs$core$IFn$_invoke$arity$1(G__10841) : checked_flag.call(null,G__10841));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__10839_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,checked_flag,org.theparanoidtimes.grepcommandbuilder.core.checkbox_field_value(p1__10839_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"inline-input",cljs.core.cst$kw$disabled,cljs.core.not((function (){var G__10842 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (checked_flag.cljs$core$IFn$_invoke$arity$1 ? checked_flag.cljs$core$IFn$_invoke$arity$1(G__10842) : checked_flag.call(null,G__10842));
})()),cljs.core.cst$kw$value,(function (){var G__10843 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (flag.cljs$core$IFn$_invoke$arity$1 ? flag.cljs$core$IFn$_invoke$arity$1(G__10843) : flag.call(null,G__10843));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__10840_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,flag,org.theparanoidtimes.grepcommandbuilder.core.input_field_value(p1__10840_SHARP_));
})], null)], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$toggleable_checkbox(text,flag){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,(function (){var G__10845 = cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state);
return (flag.cljs$core$IFn$_invoke$arity$1 ? flag.cljs$core$IFn$_invoke$arity$1(G__10845) : flag.call(null,G__10845));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__10844_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,flag,org.theparanoidtimes.grepcommandbuilder.core.checkbox_field_value(p1__10844_SHARP_));
})], null)], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.timed_display_copy = (function org$theparanoidtimes$grepcommandbuilder$core$timed_display_copy(){
if((cljs.core.cst$kw$clp.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state)) > (0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$clp,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$int,(function (){var G__10846 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.update,cljs.core.cst$kw$clp,cljs.core.dec);
});
var G__10847 = (1000);
return setInterval(G__10846,G__10847);
})()], 0));
}
});
org.theparanoidtimes.grepcommandbuilder.core.clipboard_button = (function org$theparanoidtimes$grepcommandbuilder$core$clipboard_button(target){
var clipboard_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"clipboard-button",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (clipboard_atom){
return (function (p1__10848_SHARP_){
var clipboard = (new Clipboard(reagent.core.dom_node(p1__10848_SHARP_)));
return cljs.core.reset_BANG_(clipboard_atom,clipboard);
});})(clipboard_atom))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (clipboard_atom){
return (function (){
if((cljs.core.deref(clipboard_atom) == null)){
return null;
} else {
cljs.core.deref(clipboard_atom).destroy();

return cljs.core.reset_BANG_(clipboard_atom,null);
}
});})(clipboard_atom))
,cljs.core.cst$kw$reagent_DASH_render,((function (clipboard_atom){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$clipboard,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_clipboard_DASH_target,target,cljs.core.cst$kw$title,"Copy to clipboard",cljs.core.cst$kw$on_DASH_click,((function (clipboard_atom){
return (function (){
return org.theparanoidtimes.grepcommandbuilder.core.timed_display_copy();
});})(clipboard_atom))
], null)], null);
});})(clipboard_atom))
], null));
});
org.theparanoidtimes.grepcommandbuilder.core.pattern_input = (function org$theparanoidtimes$grepcommandbuilder$core$pattern_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Search for (pattern): "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"pattern-input-field",cljs.core.cst$kw$value,cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__10849_SHARP_){
if(!(cljs.core.empty_QMARK_(org.theparanoidtimes.grepcommandbuilder.core.input_field_value(p1__10849_SHARP_)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$pattern,org.theparanoidtimes.grepcommandbuilder.core.input_field_value(p1__10849_SHARP_));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.dissoc,cljs.core.cst$kw$pattern);
}
})], null)], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.location_input = (function org$theparanoidtimes$grepcommandbuilder$core$location_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Search in (pattern): "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"location-input-field",cljs.core.cst$kw$value,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__10850_SHARP_){
if(!(cljs.core.empty_QMARK_(org.theparanoidtimes.grepcommandbuilder.core.input_field_value(p1__10850_SHARP_)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$location,org.theparanoidtimes.grepcommandbuilder.core.input_field_value(p1__10850_SHARP_));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.dissoc,cljs.core.cst$kw$location);
}
})], null)], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.recursive_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$recursive_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Recursive?",cljs.core.cst$kw$recursive);
});
org.theparanoidtimes.grepcommandbuilder.core.case_insensitive_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$case_insensitive_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Case insensitive?",cljs.core.cst$kw$case);
});
org.theparanoidtimes.grepcommandbuilder.core.whole_word_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$whole_word_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Search for whole word?",cljs.core.cst$kw$whole_DASH_word);
});
org.theparanoidtimes.grepcommandbuilder.core.invert_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$invert_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Invert match?",cljs.core.cst$kw$invert);
});
org.theparanoidtimes.grepcommandbuilder.core.line_number_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$line_number_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Show matching line numbers?",cljs.core.cst$kw$line_DASH_numbers);
});
org.theparanoidtimes.grepcommandbuilder.core.only_matching_string_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$only_matching_string_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Show matching string only?",cljs.core.cst$kw$matching);
});
org.theparanoidtimes.grepcommandbuilder.core.count_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$count_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Count matches?",cljs.core.cst$kw$count);
});
org.theparanoidtimes.grepcommandbuilder.core.file_names_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$file_names_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Show matching file names?",cljs.core.cst$kw$file_DASH_names);
});
org.theparanoidtimes.grepcommandbuilder.core.offset_checkbox = (function org$theparanoidtimes$grepcommandbuilder$core$offset_checkbox(){
return org.theparanoidtimes.grepcommandbuilder.core.toggleable_checkbox("Show position in file?",cljs.core.cst$kw$offset);
});
org.theparanoidtimes.grepcommandbuilder.core.lines_before_input = (function org$theparanoidtimes$grepcommandbuilder$core$lines_before_input(){
return org.theparanoidtimes.grepcommandbuilder.core.checked_numbers_input("Show N lines before match?",cljs.core.cst$kw$lines_DASH_before_DASH_checked,cljs.core.cst$kw$lines_DASH_before);
});
org.theparanoidtimes.grepcommandbuilder.core.lines_around_input = (function org$theparanoidtimes$grepcommandbuilder$core$lines_around_input(){
return org.theparanoidtimes.grepcommandbuilder.core.checked_numbers_input("Show N lines around match?",cljs.core.cst$kw$lines_DASH_around_DASH_checked,cljs.core.cst$kw$lines_DASH_around);
});
org.theparanoidtimes.grepcommandbuilder.core.lines_after_input = (function org$theparanoidtimes$grepcommandbuilder$core$lines_after_input(){
return org.theparanoidtimes.grepcommandbuilder.core.checked_numbers_input("Show N lines after match?",cljs.core.cst$kw$lines_DASH_after_DASH_checked,cljs.core.cst$kw$lines_DASH_after);
});
org.theparanoidtimes.grepcommandbuilder.core.output_to_file_input = (function org$theparanoidtimes$grepcommandbuilder$core$output_to_file_input(){
return org.theparanoidtimes.grepcommandbuilder.core.checked_text_input("Output result in file?",cljs.core.cst$kw$file_DASH_checked,cljs.core.cst$kw$file);
});
org.theparanoidtimes.grepcommandbuilder.core.command_display = (function org$theparanoidtimes$grepcommandbuilder$core$command_display(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"command-label"], null),"Final command: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,"command-input",cljs.core.cst$kw$class,"command-input",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"command-display-field",cljs.core.cst$kw$readOnly,true,cljs.core.cst$kw$value,org.theparanoidtimes.grepcommandbuilder.core.parse_state(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,org.theparanoidtimes.grepcommandbuilder.core.parse_state(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.clipboard_button,"#command-input"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"clp-info"], null),(((cljs.core.cst$kw$clp.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state)) > (0)))?"Copied!":(function (){var G__10851 = cljs.core.cst$kw$int.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(org.theparanoidtimes.grepcommandbuilder.core.state));
return clearInterval(G__10851);
})())], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.home_page = (function org$theparanoidtimes$grepcommandbuilder$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"heading"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Welcome to grep command builder"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"text"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Define what you need and construct the command.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Esc clears everything."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.pattern_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.location_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.recursive_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.case_insensitive_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.whole_word_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.invert_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.line_number_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.only_matching_string_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.count_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.file_names_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.offset_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.lines_before_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.lines_after_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.lines_around_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.output_to_file_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.command_display], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"copy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\u00A9 grepcommandbuilder v0.1 2017 Dejan Josifovi\u0107 ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://theparanoidtimes.org"], null),"theparanoidtimes.org"], null)], null)], null)], null);
});
org.theparanoidtimes.grepcommandbuilder.core.mount_root = (function org$theparanoidtimes$grepcommandbuilder$core$mount_root(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [org.theparanoidtimes.grepcommandbuilder.core.home_page], null),document.getElementById("app"));

return keybind.core.bind_BANG_("esc",cljs.core.cst$kw$org$theparanoidtimes$grepcommandbuilder$core_SLASH_clear_DASH_state,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(org.theparanoidtimes.grepcommandbuilder.core.state,cljs.core.empty);
}));
});
org.theparanoidtimes.grepcommandbuilder.core.init_BANG_ = (function org$theparanoidtimes$grepcommandbuilder$core$init_BANG_(){
return org.theparanoidtimes.grepcommandbuilder.core.mount_root();
});
