goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19834){
var map__19835 = p__19834;
var map__19835__$1 = cljs.core.__destructure_map(map__19835);
var m = map__19835__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19835__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19839_20108 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19840_20109 = null;
var count__19841_20110 = (0);
var i__19842_20111 = (0);
while(true){
if((i__19842_20111 < count__19841_20110)){
var f_20112 = chunk__19840_20109.cljs$core$IIndexed$_nth$arity$2(null,i__19842_20111);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20112], 0));


var G__20113 = seq__19839_20108;
var G__20114 = chunk__19840_20109;
var G__20115 = count__19841_20110;
var G__20116 = (i__19842_20111 + (1));
seq__19839_20108 = G__20113;
chunk__19840_20109 = G__20114;
count__19841_20110 = G__20115;
i__19842_20111 = G__20116;
continue;
} else {
var temp__5825__auto___20117 = cljs.core.seq(seq__19839_20108);
if(temp__5825__auto___20117){
var seq__19839_20118__$1 = temp__5825__auto___20117;
if(cljs.core.chunked_seq_QMARK_(seq__19839_20118__$1)){
var c__5673__auto___20119 = cljs.core.chunk_first(seq__19839_20118__$1);
var G__20120 = cljs.core.chunk_rest(seq__19839_20118__$1);
var G__20121 = c__5673__auto___20119;
var G__20122 = cljs.core.count(c__5673__auto___20119);
var G__20123 = (0);
seq__19839_20108 = G__20120;
chunk__19840_20109 = G__20121;
count__19841_20110 = G__20122;
i__19842_20111 = G__20123;
continue;
} else {
var f_20124 = cljs.core.first(seq__19839_20118__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20124], 0));


var G__20125 = cljs.core.next(seq__19839_20118__$1);
var G__20126 = null;
var G__20127 = (0);
var G__20128 = (0);
seq__19839_20108 = G__20125;
chunk__19840_20109 = G__20126;
count__19841_20110 = G__20127;
i__19842_20111 = G__20128;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20129 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20129], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20129)))?cljs.core.second(arglists_20129):arglists_20129)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19851_20131 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19852_20132 = null;
var count__19853_20133 = (0);
var i__19854_20134 = (0);
while(true){
if((i__19854_20134 < count__19853_20133)){
var vec__19866_20135 = chunk__19852_20132.cljs$core$IIndexed$_nth$arity$2(null,i__19854_20134);
var name_20136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866_20135,(0),null);
var map__19869_20137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866_20135,(1),null);
var map__19869_20138__$1 = cljs.core.__destructure_map(map__19869_20137);
var doc_20139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869_20138__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869_20138__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20136], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20140], 0));

if(cljs.core.truth_(doc_20139)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20139], 0));
} else {
}


var G__20141 = seq__19851_20131;
var G__20142 = chunk__19852_20132;
var G__20143 = count__19853_20133;
var G__20144 = (i__19854_20134 + (1));
seq__19851_20131 = G__20141;
chunk__19852_20132 = G__20142;
count__19853_20133 = G__20143;
i__19854_20134 = G__20144;
continue;
} else {
var temp__5825__auto___20145 = cljs.core.seq(seq__19851_20131);
if(temp__5825__auto___20145){
var seq__19851_20146__$1 = temp__5825__auto___20145;
if(cljs.core.chunked_seq_QMARK_(seq__19851_20146__$1)){
var c__5673__auto___20147 = cljs.core.chunk_first(seq__19851_20146__$1);
var G__20148 = cljs.core.chunk_rest(seq__19851_20146__$1);
var G__20149 = c__5673__auto___20147;
var G__20150 = cljs.core.count(c__5673__auto___20147);
var G__20151 = (0);
seq__19851_20131 = G__20148;
chunk__19852_20132 = G__20149;
count__19853_20133 = G__20150;
i__19854_20134 = G__20151;
continue;
} else {
var vec__19885_20152 = cljs.core.first(seq__19851_20146__$1);
var name_20153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19885_20152,(0),null);
var map__19888_20154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19885_20152,(1),null);
var map__19888_20155__$1 = cljs.core.__destructure_map(map__19888_20154);
var doc_20156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_20155__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_20155__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20153], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20157], 0));

if(cljs.core.truth_(doc_20156)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20156], 0));
} else {
}


var G__20158 = cljs.core.next(seq__19851_20146__$1);
var G__20159 = null;
var G__20160 = (0);
var G__20161 = (0);
seq__19851_20131 = G__20158;
chunk__19852_20132 = G__20159;
count__19853_20133 = G__20160;
i__19854_20134 = G__20161;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19893 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19894 = null;
var count__19895 = (0);
var i__19896 = (0);
while(true){
if((i__19896 < count__19895)){
var role = chunk__19894.cljs$core$IIndexed$_nth$arity$2(null,i__19896);
var temp__5825__auto___20162__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___20162__$1)){
var spec_20167 = temp__5825__auto___20162__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20167)], 0));
} else {
}


var G__20168 = seq__19893;
var G__20169 = chunk__19894;
var G__20170 = count__19895;
var G__20171 = (i__19896 + (1));
seq__19893 = G__20168;
chunk__19894 = G__20169;
count__19895 = G__20170;
i__19896 = G__20171;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__19893);
if(temp__5825__auto____$1){
var seq__19893__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19893__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19893__$1);
var G__20172 = cljs.core.chunk_rest(seq__19893__$1);
var G__20173 = c__5673__auto__;
var G__20174 = cljs.core.count(c__5673__auto__);
var G__20175 = (0);
seq__19893 = G__20172;
chunk__19894 = G__20173;
count__19895 = G__20174;
i__19896 = G__20175;
continue;
} else {
var role = cljs.core.first(seq__19893__$1);
var temp__5825__auto___20176__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___20176__$2)){
var spec_20177 = temp__5825__auto___20176__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20177)], 0));
} else {
}


var G__20178 = cljs.core.next(seq__19893__$1);
var G__20179 = null;
var G__20180 = (0);
var G__20181 = (0);
seq__19893 = G__20178;
chunk__19894 = G__20179;
count__19895 = G__20180;
i__19896 = G__20181;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20004 = datafied_throwable;
var map__20004__$1 = cljs.core.__destructure_map(map__20004);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20004__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20005 = cljs.core.last(via);
var map__20005__$1 = cljs.core.__destructure_map(map__20005);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20005__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20005__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20006 = data;
var map__20006__$1 = cljs.core.__destructure_map(map__20006);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20007 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20007__$1 = cljs.core.__destructure_map(map__20007);
var top_data = map__20007__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20007__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20009 = phase;
var G__20009__$1 = (((G__20009 instanceof cljs.core.Keyword))?G__20009.fqn:null);
switch (G__20009__$1) {
case "read-source":
var map__20010 = data;
var map__20010__$1 = cljs.core.__destructure_map(map__20010);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20011 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20011__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20011,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20011);
var G__20011__$2 = (cljs.core.truth_((function (){var fexpr__20012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20012.cljs$core$IFn$_invoke$arity$1 ? fexpr__20012.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20012.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20011__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20011__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20011__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20011__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20014 = top_data;
var G__20014__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20014,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20014);
var G__20014__$2 = (cljs.core.truth_((function (){var fexpr__20019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20019.cljs$core$IFn$_invoke$arity$1 ? fexpr__20019.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20019.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20014__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20014__$1);
var G__20014__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20014__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20014__$2);
var G__20014__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20014__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20014__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20014__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20014__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20026 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20026,(3),null);
var G__20029 = top_data;
var G__20029__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20029,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20029);
var G__20029__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20029__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20029__$1);
var G__20029__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20029__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20029__$2);
var G__20029__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20029__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20029__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20029__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20029__$4;
}

break;
case "execution":
var vec__20031 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20002_SHARP_){
var or__5142__auto__ = (p1__20002_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__20034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20034.cljs$core$IFn$_invoke$arity$1 ? fexpr__20034.cljs$core$IFn$_invoke$arity$1(p1__20002_SHARP_) : fexpr__20034.call(null,p1__20002_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__20036 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20036__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20036,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20036);
var G__20036__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20036__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20036__$1);
var G__20036__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20036__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20036__$2);
var G__20036__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20036__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20036__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20036__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20036__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20009__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20048){
var map__20049 = p__20048;
var map__20049__$1 = cljs.core.__destructure_map(map__20049);
var triage_data = map__20049__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__20060 = phase;
var G__20060__$1 = (((G__20060 instanceof cljs.core.Keyword))?G__20060.fqn:null);
switch (G__20060__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20063 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20064 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20065 = loc;
var G__20066 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20067_20197 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20068_20198 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20069_20199 = true;
var _STAR_print_fn_STAR__temp_val__20070_20200 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20069_20199);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20070_20200);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20042_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20042_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20068_20198);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20067_20197);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20063,G__20064,G__20065,G__20066) : format.call(null,G__20063,G__20064,G__20065,G__20066));

break;
case "macroexpansion":
var G__20071 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20072 = cause_type;
var G__20073 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20074 = loc;
var G__20075 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20071,G__20072,G__20073,G__20074,G__20075) : format.call(null,G__20071,G__20072,G__20073,G__20074,G__20075));

break;
case "compile-syntax-check":
var G__20076 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20077 = cause_type;
var G__20078 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20079 = loc;
var G__20080 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20076,G__20077,G__20078,G__20079,G__20080) : format.call(null,G__20076,G__20077,G__20078,G__20079,G__20080));

break;
case "compilation":
var G__20085 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20086 = cause_type;
var G__20087 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20088 = loc;
var G__20089 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20085,G__20086,G__20087,G__20088,G__20089) : format.call(null,G__20085,G__20086,G__20087,G__20088,G__20089));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20090 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20091 = symbol;
var G__20092 = loc;
var G__20093 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20095_20215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20096_20216 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20097_20217 = true;
var _STAR_print_fn_STAR__temp_val__20098_20218 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20097_20217);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20098_20218);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20047_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20047_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20096_20216);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20095_20215);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20090,G__20091,G__20092,G__20093) : format.call(null,G__20090,G__20091,G__20092,G__20093));
} else {
var G__20099 = "Execution error%s at %s(%s).\n%s\n";
var G__20100 = cause_type;
var G__20101 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20102 = loc;
var G__20103 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20099,G__20100,G__20101,G__20102,G__20103) : format.call(null,G__20099,G__20100,G__20101,G__20102,G__20103));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20060__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
