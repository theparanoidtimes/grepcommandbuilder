// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('grepcommandbuilder.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
grepcommandbuilder.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
grepcommandbuilder.core.add_quotes = (function grepcommandbuilder$core$add_quotes(s){
return ["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"'"].join('');
});
grepcommandbuilder.core.parse_state = (function grepcommandbuilder$core$parse_state(s){
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__13699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grep"], null);
var G__13699__$1 = (cljs.core.truth_(cljs.core.cst$kw$recursive.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699,"-r"):G__13699);
var G__13699__$2 = (cljs.core.truth_(cljs.core.cst$kw$case.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$1,"-i"):G__13699__$1);
var G__13699__$3 = (cljs.core.truth_(cljs.core.cst$kw$whole_DASH_word.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$2,"-w"):G__13699__$2);
var G__13699__$4 = (cljs.core.truth_(cljs.core.cst$kw$invert.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$3,"-v"):G__13699__$3);
var G__13699__$5 = (cljs.core.truth_(cljs.core.cst$kw$line_DASH_numbers.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$4,"-n"):G__13699__$4);
var G__13699__$6 = (cljs.core.truth_(cljs.core.cst$kw$matching.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$5,"-o"):G__13699__$5);
var G__13699__$7 = (cljs.core.truth_(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$6,"-c"):G__13699__$6);
var G__13699__$8 = (cljs.core.truth_(cljs.core.cst$kw$file_DASH_names.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$7,"-l"):G__13699__$7);
var G__13699__$9 = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$lines_DASH_before_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$lines_DASH_before.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$8,["-B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lines_DASH_before.cljs$core$IFn$_invoke$arity$1(s))].join('')):G__13699__$8);
var G__13699__$10 = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$lines_DASH_after_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$lines_DASH_after.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$9,["-A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lines_DASH_after.cljs$core$IFn$_invoke$arity$1(s))].join('')):G__13699__$9);
var G__13699__$11 = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$lines_DASH_around_DASH_checked.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.cst$kw$lines_DASH_around.cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__7633__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$10,["-C ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lines_DASH_around.cljs$core$IFn$_invoke$arity$1(s))].join('')):G__13699__$10);
var G__13699__$12 = (cljs.core.truth_(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(s))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$11,grepcommandbuilder.core.add_quotes(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(s))):G__13699__$11);
if(cljs.core.truth_(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(s))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13699__$12,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(s));
} else {
return G__13699__$12;
}
})()));
} else {
return null;
}
});
grepcommandbuilder.core.toggleable_checkbox = (function grepcommandbuilder$core$toggleable_checkbox(label_text,state_flag,state_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.update,state_flag,cljs.core.not);
})], null)], null)], null);
});
grepcommandbuilder.core.input_field_value = (function grepcommandbuilder$core$input_field_value(e){
return e.target.value;
});
grepcommandbuilder.core.timed_display_copy = (function grepcommandbuilder$core$timed_display_copy(){
if((cljs.core.cst$kw$clp.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)) > (0))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$clp,(1));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$int,(function (){var G__13700 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.update,cljs.core.cst$kw$clp,cljs.core.dec);
});
var G__13701 = (1000);
return setInterval(G__13700,G__13701);
})());
}
});
grepcommandbuilder.core.clipboard_button = (function grepcommandbuilder$core$clipboard_button(target){
var clipboard_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"clipboard-button",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (clipboard_atom){
return (function (p1__13702_SHARP_){
var clipboard = (new Clipboard(reagent.core.dom_node(p1__13702_SHARP_)));
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
return grepcommandbuilder.core.timed_display_copy();
});})(clipboard_atom))
], null)], null);
});})(clipboard_atom))
], null));
});
grepcommandbuilder.core.pattern_input = (function grepcommandbuilder$core$pattern_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Search for (pattern): "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"pattern-input-field",cljs.core.cst$kw$value,cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__13703_SHARP_){
if(!(cljs.core.empty_QMARK_(grepcommandbuilder.core.input_field_value(p1__13703_SHARP_)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$pattern,grepcommandbuilder.core.input_field_value(p1__13703_SHARP_));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(grepcommandbuilder.core.state,cljs.core.dissoc,cljs.core.cst$kw$pattern);
}
})], null)], null)], null);
});
grepcommandbuilder.core.location_input = (function grepcommandbuilder$core$location_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Search in (pattern): "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"location-input-field",cljs.core.cst$kw$value,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__13704_SHARP_){
if(!(cljs.core.empty_QMARK_(grepcommandbuilder.core.input_field_value(p1__13704_SHARP_)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$location,grepcommandbuilder.core.input_field_value(p1__13704_SHARP_));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(grepcommandbuilder.core.state,cljs.core.dissoc,cljs.core.cst$kw$location);
}
})], null)], null)], null);
});
grepcommandbuilder.core.recursive_checkbox = (function grepcommandbuilder$core$recursive_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Recursive?",cljs.core.cst$kw$recursive,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.case_insensitive_checkbox = (function grepcommandbuilder$core$case_insensitive_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Case insensitive?",cljs.core.cst$kw$case,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.whole_word_checkbox = (function grepcommandbuilder$core$whole_word_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Search for whole word?",cljs.core.cst$kw$whole_DASH_word,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.invert_checkbox = (function grepcommandbuilder$core$invert_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Invert match?",cljs.core.cst$kw$invert,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.line_number_checkbox = (function grepcommandbuilder$core$line_number_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Show matching line numbers?",cljs.core.cst$kw$line_DASH_numbers,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.only_matching_string_checkbox = (function grepcommandbuilder$core$only_matching_string_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Show matching string only?",cljs.core.cst$kw$matching,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.count_checkbox = (function grepcommandbuilder$core$count_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Count matches?",cljs.core.cst$kw$count,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.filen_names_checkbox = (function grepcommandbuilder$core$filen_names_checkbox(){
return grepcommandbuilder.core.toggleable_checkbox("Show matching file names?",cljs.core.cst$kw$file_DASH_names,grepcommandbuilder.core.state);
});
grepcommandbuilder.core.lines_before_input = (function grepcommandbuilder$core$lines_before_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Show lines before match?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.update,cljs.core.cst$kw$lines_DASH_before_DASH_checked,cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$step,(1),cljs.core.cst$kw$class,"inline-input",cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$lines_DASH_before_DASH_checked.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state))),cljs.core.cst$kw$value,cljs.core.cst$kw$lines_DASH_before.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__13705_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$lines_DASH_before,grepcommandbuilder.core.input_field_value(p1__13705_SHARP_));
})], null)], null)], null);
});
grepcommandbuilder.core.lines_around_input = (function grepcommandbuilder$core$lines_around_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Show lines around match?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.update,cljs.core.cst$kw$lines_DASH_around_DASH_checked,cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$step,(1),cljs.core.cst$kw$class,"inline-input",cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$lines_DASH_around_DASH_checked.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state))),cljs.core.cst$kw$value,cljs.core.cst$kw$lines_DASH_around.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__13706_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$lines_DASH_around,grepcommandbuilder.core.input_field_value(p1__13706_SHARP_));
})], null)], null)], null);
});
grepcommandbuilder.core.lines_after_input = (function grepcommandbuilder$core$lines_after_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Show lines after match?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.update,cljs.core.cst$kw$lines_DASH_after_DASH_checked,cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$step,(1),cljs.core.cst$kw$class,"inline-input",cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$lines_DASH_after_DASH_checked.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state))),cljs.core.cst$kw$value,cljs.core.cst$kw$lines_DASH_after.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,(function (p1__13707_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(grepcommandbuilder.core.state,cljs.core.assoc,cljs.core.cst$kw$lines_DASH_after,grepcommandbuilder.core.input_field_value(p1__13707_SHARP_));
})], null)], null)], null);
});
grepcommandbuilder.core.command_display = (function grepcommandbuilder$core$command_display(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"command-label"], null),"Final command: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,"command-input",cljs.core.cst$kw$class,"command-input",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"command-display-field",cljs.core.cst$kw$readOnly,true,cljs.core.cst$kw$value,grepcommandbuilder.core.parse_state(cljs.core.deref(grepcommandbuilder.core.state)),cljs.core.cst$kw$on_DASH_change,grepcommandbuilder.core.parse_state(cljs.core.deref(grepcommandbuilder.core.state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.clipboard_button,"#command-input"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"clp-info"], null),(((cljs.core.cst$kw$clp.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state)) > (0)))?"Copied!":(function (){var G__13708 = cljs.core.cst$kw$int.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(grepcommandbuilder.core.state));
return clearInterval(G__13708);
})())], null)], null);
});
grepcommandbuilder.core.home_page = (function grepcommandbuilder$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"heading"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Welcome to grep command builder"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.pattern_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.location_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.recursive_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.case_insensitive_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.whole_word_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.invert_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.line_number_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.only_matching_string_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.count_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.filen_names_checkbox], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.lines_before_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.lines_after_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.lines_around_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.command_display], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"copy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\u00A9 2017 Made by Dejan Josifovic ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://theparanoidtimes.org"], null),"theparanoidtimes.org"], null)], null)], null)], null);
});
grepcommandbuilder.core.mount_root = (function grepcommandbuilder$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grepcommandbuilder.core.home_page], null),document.getElementById("app"));
});
grepcommandbuilder.core.init_BANG_ = (function grepcommandbuilder$core$init_BANG_(){
return grepcommandbuilder.core.mount_root();
});
