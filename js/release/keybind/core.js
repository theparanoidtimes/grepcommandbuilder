// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('keybind.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[cljs.core.cst$kw$alt,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$shift,cljs.core.cst$kw$alt,cljs.core.cst$kw$ctrl,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$ctrl,(((navigator.userAgent.indexOf("Mac OS X") < (0)))?cljs.core.cst$kw$ctrl:cljs.core.cst$kw$meta)]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$shift,"shiftKey",cljs.core.cst$kw$ctrl,"ctrlKey",cljs.core.cst$kw$alt,"altKey",cljs.core.cst$kw$meta,"metaKey",cljs.core.cst$kw$code,"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$shift,false,cljs.core.cst$kw$ctrl,false,cljs.core.cst$kw$alt,false,cljs.core.cst$kw$meta,false], null);
keybind.core.KEYS = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(38),(46),(20),(191),(107),(13),(109),(45),(8),(109),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(220),(13),(107),(35),(27),(37)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function keybind$core$iter__10780(s__10781){
return (new cljs.core.LazySeq(null,(function (){
var s__10781__$1 = s__10781;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10781__$1);
if(temp__4657__auto__){
var s__10781__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10781__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10781__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10783 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10782 = (0);
while(true){
if((i__10782 < size__8452__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10782);
cljs.core.chunk_append(b__10783,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__10796 = (i__10782 + (1));
i__10782 = G__10796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10783),keybind$core$iter__10780(cljs.core.chunk_rest(s__10781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10783),null);
}
} else {
var i = cljs.core.first(s__10781__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__10780(cljs.core.rest(s__10781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function keybind$core$iter__10784(s__10785){
return (new cljs.core.LazySeq(null,(function (){
var s__10785__$1 = s__10785;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10785__$1);
if(temp__4657__auto__){
var s__10785__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10785__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10785__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10787 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10786 = (0);
while(true){
if((i__10786 < size__8452__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10786);
cljs.core.chunk_append(b__10787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__10797 = (i__10786 + (1));
i__10786 = G__10797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10787),keybind$core$iter__10784(cljs.core.chunk_rest(s__10785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10787),null);
}
} else {
var i = cljs.core.first(s__10785__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__10784(cljs.core.rest(s__10785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function keybind$core$iter__10788(s__10789){
return (new cljs.core.LazySeq(null,(function (){
var s__10789__$1 = s__10789;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10789__$1);
if(temp__4657__auto__){
var s__10789__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10789__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10789__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10791 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10790 = (0);
while(true){
if((i__10790 < size__8452__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10790);
cljs.core.chunk_append(b__10791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__10798 = (i__10790 + (1));
i__10790 = G__10798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10791),keybind$core$iter__10788(cljs.core.chunk_rest(s__10789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10791),null);
}
} else {
var i = cljs.core.first(s__10789__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__10788(cljs.core.rest(s__10789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function keybind$core$iter__10792(s__10793){
return (new cljs.core.LazySeq(null,(function (){
var s__10793__$1 = s__10793;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10793__$1);
if(temp__4657__auto__){
var s__10793__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10793__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10793__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10795 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10794 = (0);
while(true){
if((i__10794 < size__8452__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10794);
cljs.core.chunk_append(b__10795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__10799 = (i__10794 + (1));
i__10794 = G__10799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10795),keybind$core$iter__10792(cljs.core.chunk_rest(s__10793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10795),null);
}
} else {
var i = cljs.core.first(s__10793__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__10792(cljs.core.rest(s__10793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),(91)));
})())], 0));
keybind.core.KNOWN_KEYS = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function keybind$core$iter__10800(s__10801){
return (new cljs.core.LazySeq(null,(function (){
var s__10801__$1 = s__10801;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10801__$1);
if(temp__4657__auto__){
var s__10801__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10801__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10801__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10803 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10802 = (0);
while(true){
if((i__10802 < size__8452__auto__)){
var vec__10804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10802);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10804,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10804,(1),null);
cljs.core.chunk_append(b__10803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__10810 = (i__10802 + (1));
i__10802 = G__10810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10803),keybind$core$iter__10800(cljs.core.chunk_rest(s__10801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10803),null);
}
} else {
var vec__10807 = cljs.core.first(s__10801__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10807,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__10800(cljs.core.rest(s__10801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(keybind.core.KEYS);
})());
if(typeof keybind.core.BINDINGS !== 'undefined'){
} else {
keybind.core.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof keybind.core.PRESSED !== 'undefined'){
} else {
keybind.core.PRESSED = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
keybind.core.parse_chord = (function keybind$core$parse_chord(keystring){
var bits = keystring.split("-");
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bits,(cljs.core.count(bits) - (1)));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(keybind.core.DEFCHORD,cljs.core.cst$kw$code,code),(function (){var iter__8453__auto__ = ((function (bits,button,code){
return (function keybind$core$parse_chord_$_iter__10811(s__10812){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__10812__$1 = s__10812;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10812__$1);
if(temp__4657__auto__){
var s__10812__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10812__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10812__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10814 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10813 = (0);
while(true){
if((i__10813 < size__8452__auto__)){
var mod = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10813);
cljs.core.chunk_append(b__10814,((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,mod),true], null)));

var G__10815 = (i__10813 + (1));
i__10813 = G__10815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10814),keybind$core$parse_chord_$_iter__10811(cljs.core.chunk_rest(s__10812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10814),null);
}
} else {
var mod = cljs.core.first(s__10812__$2);
return cljs.core.cons(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,mod),true], null)),keybind$core$parse_chord_$_iter__10811(cljs.core.rest(s__10812__$2)));
}
} else {
return null;
}
break;
}
});})(bits,button,code))
,null,null));
});})(bits,button,code))
;
return iter__8453__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(bits));
})());
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = (function keybind$core$e__GT_chord_$_iter__10816(s__10817){
return (new cljs.core.LazySeq(null,(function (){
var s__10817__$1 = s__10817;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10817__$1);
if(temp__4657__auto__){
var s__10817__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10817__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__10817__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__10819 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__10818 = (0);
while(true){
if((i__10818 < size__8452__auto__)){
var vec__10820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__10818);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10820,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10820,(1),null);
cljs.core.chunk_append(b__10819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__10826 = (i__10818 + (1));
i__10818 = G__10826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10819),keybind$core$e__GT_chord_$_iter__10816(cljs.core.chunk_rest(s__10817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10819),null);
}
} else {
var vec__10823 = cljs.core.first(s__10817__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10823,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10823,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__10816(cljs.core.rest(s__10817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(keybind.core.KEYATTRS);
})());
});
keybind.core.reset_sequence_BANG_ = (function keybind$core$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.PRESSED,cljs.core.empty);
});
keybind.core.dispatch = (function keybind$core$dispatch(e,bindings){
var chord = keybind.core.e__GT_chord(e);
var sequence = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keybind.core.PRESSED),chord);
var inner = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bindings,sequence);
var handlers = cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not(inner)){
return keybind.core.reset_sequence_BANG_();
} else {
if(cljs.core.truth_(handlers)){
var seq__10827_10837 = cljs.core.seq(cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner));
var chunk__10828_10838 = null;
var count__10829_10839 = (0);
var i__10830_10840 = (0);
while(true){
if((i__10830_10840 < count__10829_10839)){
var vec__10831_10841 = chunk__10828_10838.cljs$core$IIndexed$_nth$arity$2(null,i__10830_10840);
var __10842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10831_10841,(0),null);
var handler_10843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10831_10841,(1),null);
(handler_10843.cljs$core$IFn$_invoke$arity$2 ? handler_10843.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_10843.call(null,e,sequence));

var G__10844 = seq__10827_10837;
var G__10845 = chunk__10828_10838;
var G__10846 = count__10829_10839;
var G__10847 = (i__10830_10840 + (1));
seq__10827_10837 = G__10844;
chunk__10828_10838 = G__10845;
count__10829_10839 = G__10846;
i__10830_10840 = G__10847;
continue;
} else {
var temp__4657__auto___10848 = cljs.core.seq(seq__10827_10837);
if(temp__4657__auto___10848){
var seq__10827_10849__$1 = temp__4657__auto___10848;
if(cljs.core.chunked_seq_QMARK_(seq__10827_10849__$1)){
var c__8484__auto___10850 = cljs.core.chunk_first(seq__10827_10849__$1);
var G__10851 = cljs.core.chunk_rest(seq__10827_10849__$1);
var G__10852 = c__8484__auto___10850;
var G__10853 = cljs.core.count(c__8484__auto___10850);
var G__10854 = (0);
seq__10827_10837 = G__10851;
chunk__10828_10838 = G__10852;
count__10829_10839 = G__10853;
i__10830_10840 = G__10854;
continue;
} else {
var vec__10834_10855 = cljs.core.first(seq__10827_10849__$1);
var __10856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10834_10855,(0),null);
var handler_10857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10834_10855,(1),null);
(handler_10857.cljs$core$IFn$_invoke$arity$2 ? handler_10857.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_10857.call(null,e,sequence));

var G__10858 = cljs.core.next(seq__10827_10849__$1);
var G__10859 = null;
var G__10860 = (0);
var G__10861 = (0);
seq__10827_10837 = G__10858;
chunk__10828_10838 = G__10859;
count__10829_10839 = G__10860;
i__10830_10840 = G__10861;
continue;
}
} else {
}
}
break;
}

return keybind.core.reset_sequence_BANG_();
} else {
return cljs.core.reset_BANG_(keybind.core.PRESSED,sequence);

}
}
});
keybind.core.bind = (function keybind$core$bind(bindings,spec,key,cb){

var parsed = keybind.core.parse(spec);
return cljs.core.assoc_in(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.cst$kw$handlers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cb);
});
keybind.core.unbind = (function keybind$core$unbind(bindings,spec,key){

var parsed = keybind.core.parse(spec);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parsed,cljs.core.cst$kw$handlers),cljs.core.dissoc,key);
});
keybind.core.bind_BANG_ = (function keybind$core$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(keybind.core.BINDINGS,keybind.core.bind,spec,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
keybind.core.unbind_BANG_ = (function keybind$core$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(keybind.core.BINDINGS,keybind.core.unbind,spec,key);
});
keybind.core.unbind_all_BANG_ = (function keybind$core$unbind_all_BANG_(){

keybind.core.reset_sequence_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.BINDINGS,cljs.core.empty);
});
keybind.core.dispatcher_BANG_ = (function keybind$core$dispatcher_BANG_(bindings){

return (function (e){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KNOWN_KEYS,e.keyCode))){
return keybind.core.dispatch(e,cljs.core.deref(bindings));
} else {
return null;
}
});
});
if(typeof keybind.core.bind_keypress_listener !== 'undefined'){
} else {
keybind.core.bind_keypress_listener = (function (){var G__10862 = "keydown";
var G__10863 = keybind.core.dispatcher_BANG_(keybind.core.BINDINGS);
var G__10864 = false;
return addEventListener(G__10862,G__10863,G__10864);
})();
}
