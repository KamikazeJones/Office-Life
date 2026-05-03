goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21776 = arguments.length;
var i__5877__auto___21777 = (0);
while(true){
if((i__5877__auto___21777 < len__5876__auto___21776)){
args__5882__auto__.push((arguments[i__5877__auto___21777]));

var G__21778 = (i__5877__auto___21777 + (1));
i__5877__auto___21777 = G__21778;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21074){
var G__21075 = cljs.core.first(seq21074);
var seq21074__$1 = cljs.core.next(seq21074);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21075,seq21074__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21081 = cljs.core.seq(sources);
var chunk__21082 = null;
var count__21083 = (0);
var i__21084 = (0);
while(true){
if((i__21084 < count__21083)){
var map__21094 = chunk__21082.cljs$core$IIndexed$_nth$arity$2(null,i__21084);
var map__21094__$1 = cljs.core.__destructure_map(map__21094);
var src = map__21094__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21095){var e_21779 = e21095;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21779);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21779.message))));
}

var G__21780 = seq__21081;
var G__21781 = chunk__21082;
var G__21782 = count__21083;
var G__21783 = (i__21084 + (1));
seq__21081 = G__21780;
chunk__21082 = G__21781;
count__21083 = G__21782;
i__21084 = G__21783;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21081);
if(temp__5825__auto__){
var seq__21081__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21081__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21081__$1);
var G__21784 = cljs.core.chunk_rest(seq__21081__$1);
var G__21785 = c__5673__auto__;
var G__21786 = cljs.core.count(c__5673__auto__);
var G__21787 = (0);
seq__21081 = G__21784;
chunk__21082 = G__21785;
count__21083 = G__21786;
i__21084 = G__21787;
continue;
} else {
var map__21096 = cljs.core.first(seq__21081__$1);
var map__21096__$1 = cljs.core.__destructure_map(map__21096);
var src = map__21096__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21097){var e_21788 = e21097;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21788);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21788.message))));
}

var G__21789 = cljs.core.next(seq__21081__$1);
var G__21790 = null;
var G__21791 = (0);
var G__21792 = (0);
seq__21081 = G__21789;
chunk__21082 = G__21790;
count__21083 = G__21791;
i__21084 = G__21792;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21102 = cljs.core.seq(js_requires);
var chunk__21103 = null;
var count__21104 = (0);
var i__21105 = (0);
while(true){
if((i__21105 < count__21104)){
var js_ns = chunk__21103.cljs$core$IIndexed$_nth$arity$2(null,i__21105);
var require_str_21793 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21793);


var G__21794 = seq__21102;
var G__21795 = chunk__21103;
var G__21796 = count__21104;
var G__21797 = (i__21105 + (1));
seq__21102 = G__21794;
chunk__21103 = G__21795;
count__21104 = G__21796;
i__21105 = G__21797;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21102);
if(temp__5825__auto__){
var seq__21102__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21102__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21102__$1);
var G__21798 = cljs.core.chunk_rest(seq__21102__$1);
var G__21799 = c__5673__auto__;
var G__21800 = cljs.core.count(c__5673__auto__);
var G__21801 = (0);
seq__21102 = G__21798;
chunk__21103 = G__21799;
count__21104 = G__21800;
i__21105 = G__21801;
continue;
} else {
var js_ns = cljs.core.first(seq__21102__$1);
var require_str_21802 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21802);


var G__21803 = cljs.core.next(seq__21102__$1);
var G__21804 = null;
var G__21805 = (0);
var G__21806 = (0);
seq__21102 = G__21803;
chunk__21103 = G__21804;
count__21104 = G__21805;
i__21105 = G__21806;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21109){
var map__21110 = p__21109;
var map__21110__$1 = cljs.core.__destructure_map(map__21110);
var msg = map__21110__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21111(s__21112){
return (new cljs.core.LazySeq(null,(function (){
var s__21112__$1 = s__21112;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21112__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21117 = cljs.core.first(xs__6385__auto__);
var map__21117__$1 = cljs.core.__destructure_map(map__21117);
var src = map__21117__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21117__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21112__$1,map__21117,map__21117__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21110,map__21110__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21111_$_iter__21113(s__21114){
return (new cljs.core.LazySeq(null,((function (s__21112__$1,map__21117,map__21117__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21110,map__21110__$1,msg,info,reload_info){
return (function (){
var s__21114__$1 = s__21114;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21114__$1);
if(temp__5825__auto____$1){
var s__21114__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21114__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21114__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21116 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21115 = (0);
while(true){
if((i__21115 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21115);
cljs.core.chunk_append(b__21116,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21807 = (i__21115 + (1));
i__21115 = G__21807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21116),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21111_$_iter__21113(cljs.core.chunk_rest(s__21114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21116),null);
}
} else {
var warning = cljs.core.first(s__21114__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21111_$_iter__21113(cljs.core.rest(s__21114__$2)));
}
} else {
return null;
}
break;
}
});})(s__21112__$1,map__21117,map__21117__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21110,map__21110__$1,msg,info,reload_info))
,null,null));
});})(s__21112__$1,map__21117,map__21117__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21110,map__21110__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21111(cljs.core.rest(s__21112__$1)));
} else {
var G__21808 = cljs.core.rest(s__21112__$1);
s__21112__$1 = G__21808;
continue;
}
} else {
var G__21809 = cljs.core.rest(s__21112__$1);
s__21112__$1 = G__21809;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21118_21810 = cljs.core.seq(warnings);
var chunk__21119_21811 = null;
var count__21120_21812 = (0);
var i__21121_21813 = (0);
while(true){
if((i__21121_21813 < count__21120_21812)){
var map__21140_21814 = chunk__21119_21811.cljs$core$IIndexed$_nth$arity$2(null,i__21121_21813);
var map__21140_21815__$1 = cljs.core.__destructure_map(map__21140_21814);
var w_21816 = map__21140_21815__$1;
var msg_21817__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21140_21815__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21140_21815__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21140_21815__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21140_21815__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21820)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21818)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21819)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21817__$1)));


var G__21821 = seq__21118_21810;
var G__21822 = chunk__21119_21811;
var G__21823 = count__21120_21812;
var G__21824 = (i__21121_21813 + (1));
seq__21118_21810 = G__21821;
chunk__21119_21811 = G__21822;
count__21120_21812 = G__21823;
i__21121_21813 = G__21824;
continue;
} else {
var temp__5825__auto___21825 = cljs.core.seq(seq__21118_21810);
if(temp__5825__auto___21825){
var seq__21118_21826__$1 = temp__5825__auto___21825;
if(cljs.core.chunked_seq_QMARK_(seq__21118_21826__$1)){
var c__5673__auto___21827 = cljs.core.chunk_first(seq__21118_21826__$1);
var G__21828 = cljs.core.chunk_rest(seq__21118_21826__$1);
var G__21829 = c__5673__auto___21827;
var G__21830 = cljs.core.count(c__5673__auto___21827);
var G__21831 = (0);
seq__21118_21810 = G__21828;
chunk__21119_21811 = G__21829;
count__21120_21812 = G__21830;
i__21121_21813 = G__21831;
continue;
} else {
var map__21143_21832 = cljs.core.first(seq__21118_21826__$1);
var map__21143_21833__$1 = cljs.core.__destructure_map(map__21143_21832);
var w_21834 = map__21143_21833__$1;
var msg_21835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143_21833__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143_21833__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143_21833__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143_21833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21838)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21836)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21837)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21835__$1)));


var G__21839 = cljs.core.next(seq__21118_21826__$1);
var G__21840 = null;
var G__21841 = (0);
var G__21842 = (0);
seq__21118_21810 = G__21839;
chunk__21119_21811 = G__21840;
count__21120_21812 = G__21841;
i__21121_21813 = G__21842;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21108_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21108_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21147 = node_uri;
G__21147.setQuery(null);

G__21147.setPath(new$);

return G__21147;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21148){
var map__21149 = p__21148;
var map__21149__$1 = cljs.core.__destructure_map(map__21149);
var msg = map__21149__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21150 = cljs.core.seq(updates);
var chunk__21152 = null;
var count__21153 = (0);
var i__21154 = (0);
while(true){
if((i__21154 < count__21153)){
var path = chunk__21152.cljs$core$IIndexed$_nth$arity$2(null,i__21154);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21400_21843 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21404_21844 = null;
var count__21405_21845 = (0);
var i__21406_21846 = (0);
while(true){
if((i__21406_21846 < count__21405_21845)){
var node_21847 = chunk__21404_21844.cljs$core$IIndexed$_nth$arity$2(null,i__21406_21846);
if(cljs.core.not(node_21847.shadow$old)){
var path_match_21848 = shadow.cljs.devtools.client.browser.match_paths(node_21847.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21848)){
var new_link_21849 = (function (){var G__21480 = node_21847.cloneNode(true);
G__21480.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21848)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21480;
})();
(node_21847.shadow$old = true);

(new_link_21849.onload = ((function (seq__21400_21843,chunk__21404_21844,count__21405_21845,i__21406_21846,seq__21150,chunk__21152,count__21153,i__21154,new_link_21849,path_match_21848,node_21847,path,map__21149,map__21149__$1,msg,updates,reload_info){
return (function (e){
var seq__21481_21850 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21483_21851 = null;
var count__21484_21852 = (0);
var i__21485_21853 = (0);
while(true){
if((i__21485_21853 < count__21484_21852)){
var map__21489_21854 = chunk__21483_21851.cljs$core$IIndexed$_nth$arity$2(null,i__21485_21853);
var map__21489_21855__$1 = cljs.core.__destructure_map(map__21489_21854);
var task_21856 = map__21489_21855__$1;
var fn_str_21857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489_21855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489_21855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21859 = goog.getObjectByName(fn_str_21857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21858)));

(fn_obj_21859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21859.cljs$core$IFn$_invoke$arity$2(path,new_link_21849) : fn_obj_21859.call(null,path,new_link_21849));


var G__21860 = seq__21481_21850;
var G__21861 = chunk__21483_21851;
var G__21862 = count__21484_21852;
var G__21863 = (i__21485_21853 + (1));
seq__21481_21850 = G__21860;
chunk__21483_21851 = G__21861;
count__21484_21852 = G__21862;
i__21485_21853 = G__21863;
continue;
} else {
var temp__5825__auto___21864 = cljs.core.seq(seq__21481_21850);
if(temp__5825__auto___21864){
var seq__21481_21865__$1 = temp__5825__auto___21864;
if(cljs.core.chunked_seq_QMARK_(seq__21481_21865__$1)){
var c__5673__auto___21866 = cljs.core.chunk_first(seq__21481_21865__$1);
var G__21867 = cljs.core.chunk_rest(seq__21481_21865__$1);
var G__21868 = c__5673__auto___21866;
var G__21869 = cljs.core.count(c__5673__auto___21866);
var G__21870 = (0);
seq__21481_21850 = G__21867;
chunk__21483_21851 = G__21868;
count__21484_21852 = G__21869;
i__21485_21853 = G__21870;
continue;
} else {
var map__21495_21871 = cljs.core.first(seq__21481_21865__$1);
var map__21495_21872__$1 = cljs.core.__destructure_map(map__21495_21871);
var task_21873 = map__21495_21872__$1;
var fn_str_21874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495_21872__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495_21872__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21876 = goog.getObjectByName(fn_str_21874,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21875)));

(fn_obj_21876.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21876.cljs$core$IFn$_invoke$arity$2(path,new_link_21849) : fn_obj_21876.call(null,path,new_link_21849));


var G__21877 = cljs.core.next(seq__21481_21865__$1);
var G__21878 = null;
var G__21879 = (0);
var G__21880 = (0);
seq__21481_21850 = G__21877;
chunk__21483_21851 = G__21878;
count__21484_21852 = G__21879;
i__21485_21853 = G__21880;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21847);
});})(seq__21400_21843,chunk__21404_21844,count__21405_21845,i__21406_21846,seq__21150,chunk__21152,count__21153,i__21154,new_link_21849,path_match_21848,node_21847,path,map__21149,map__21149__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21848], 0));

goog.dom.insertSiblingAfter(new_link_21849,node_21847);


var G__21881 = seq__21400_21843;
var G__21882 = chunk__21404_21844;
var G__21883 = count__21405_21845;
var G__21884 = (i__21406_21846 + (1));
seq__21400_21843 = G__21881;
chunk__21404_21844 = G__21882;
count__21405_21845 = G__21883;
i__21406_21846 = G__21884;
continue;
} else {
var G__21885 = seq__21400_21843;
var G__21886 = chunk__21404_21844;
var G__21887 = count__21405_21845;
var G__21888 = (i__21406_21846 + (1));
seq__21400_21843 = G__21885;
chunk__21404_21844 = G__21886;
count__21405_21845 = G__21887;
i__21406_21846 = G__21888;
continue;
}
} else {
var G__21889 = seq__21400_21843;
var G__21890 = chunk__21404_21844;
var G__21891 = count__21405_21845;
var G__21892 = (i__21406_21846 + (1));
seq__21400_21843 = G__21889;
chunk__21404_21844 = G__21890;
count__21405_21845 = G__21891;
i__21406_21846 = G__21892;
continue;
}
} else {
var temp__5825__auto___21893 = cljs.core.seq(seq__21400_21843);
if(temp__5825__auto___21893){
var seq__21400_21894__$1 = temp__5825__auto___21893;
if(cljs.core.chunked_seq_QMARK_(seq__21400_21894__$1)){
var c__5673__auto___21895 = cljs.core.chunk_first(seq__21400_21894__$1);
var G__21896 = cljs.core.chunk_rest(seq__21400_21894__$1);
var G__21897 = c__5673__auto___21895;
var G__21898 = cljs.core.count(c__5673__auto___21895);
var G__21899 = (0);
seq__21400_21843 = G__21896;
chunk__21404_21844 = G__21897;
count__21405_21845 = G__21898;
i__21406_21846 = G__21899;
continue;
} else {
var node_21900 = cljs.core.first(seq__21400_21894__$1);
if(cljs.core.not(node_21900.shadow$old)){
var path_match_21901 = shadow.cljs.devtools.client.browser.match_paths(node_21900.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21901)){
var new_link_21902 = (function (){var G__21567 = node_21900.cloneNode(true);
G__21567.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21901)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21567;
})();
(node_21900.shadow$old = true);

(new_link_21902.onload = ((function (seq__21400_21843,chunk__21404_21844,count__21405_21845,i__21406_21846,seq__21150,chunk__21152,count__21153,i__21154,new_link_21902,path_match_21901,node_21900,seq__21400_21894__$1,temp__5825__auto___21893,path,map__21149,map__21149__$1,msg,updates,reload_info){
return (function (e){
var seq__21584_21903 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21586_21904 = null;
var count__21587_21905 = (0);
var i__21588_21906 = (0);
while(true){
if((i__21588_21906 < count__21587_21905)){
var map__21632_21907 = chunk__21586_21904.cljs$core$IIndexed$_nth$arity$2(null,i__21588_21906);
var map__21632_21908__$1 = cljs.core.__destructure_map(map__21632_21907);
var task_21909 = map__21632_21908__$1;
var fn_str_21910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21632_21908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21632_21908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21912 = goog.getObjectByName(fn_str_21910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21911)));

(fn_obj_21912.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21912.cljs$core$IFn$_invoke$arity$2(path,new_link_21902) : fn_obj_21912.call(null,path,new_link_21902));


var G__21913 = seq__21584_21903;
var G__21914 = chunk__21586_21904;
var G__21915 = count__21587_21905;
var G__21916 = (i__21588_21906 + (1));
seq__21584_21903 = G__21913;
chunk__21586_21904 = G__21914;
count__21587_21905 = G__21915;
i__21588_21906 = G__21916;
continue;
} else {
var temp__5825__auto___21917__$1 = cljs.core.seq(seq__21584_21903);
if(temp__5825__auto___21917__$1){
var seq__21584_21918__$1 = temp__5825__auto___21917__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21584_21918__$1)){
var c__5673__auto___21919 = cljs.core.chunk_first(seq__21584_21918__$1);
var G__21920 = cljs.core.chunk_rest(seq__21584_21918__$1);
var G__21921 = c__5673__auto___21919;
var G__21922 = cljs.core.count(c__5673__auto___21919);
var G__21923 = (0);
seq__21584_21903 = G__21920;
chunk__21586_21904 = G__21921;
count__21587_21905 = G__21922;
i__21588_21906 = G__21923;
continue;
} else {
var map__21638_21924 = cljs.core.first(seq__21584_21918__$1);
var map__21638_21925__$1 = cljs.core.__destructure_map(map__21638_21924);
var task_21926 = map__21638_21925__$1;
var fn_str_21927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21638_21925__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21638_21925__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21929 = goog.getObjectByName(fn_str_21927,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21928)));

(fn_obj_21929.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21929.cljs$core$IFn$_invoke$arity$2(path,new_link_21902) : fn_obj_21929.call(null,path,new_link_21902));


var G__21930 = cljs.core.next(seq__21584_21918__$1);
var G__21931 = null;
var G__21932 = (0);
var G__21933 = (0);
seq__21584_21903 = G__21930;
chunk__21586_21904 = G__21931;
count__21587_21905 = G__21932;
i__21588_21906 = G__21933;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21900);
});})(seq__21400_21843,chunk__21404_21844,count__21405_21845,i__21406_21846,seq__21150,chunk__21152,count__21153,i__21154,new_link_21902,path_match_21901,node_21900,seq__21400_21894__$1,temp__5825__auto___21893,path,map__21149,map__21149__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21901], 0));

goog.dom.insertSiblingAfter(new_link_21902,node_21900);


var G__21934 = cljs.core.next(seq__21400_21894__$1);
var G__21935 = null;
var G__21936 = (0);
var G__21937 = (0);
seq__21400_21843 = G__21934;
chunk__21404_21844 = G__21935;
count__21405_21845 = G__21936;
i__21406_21846 = G__21937;
continue;
} else {
var G__21938 = cljs.core.next(seq__21400_21894__$1);
var G__21939 = null;
var G__21940 = (0);
var G__21941 = (0);
seq__21400_21843 = G__21938;
chunk__21404_21844 = G__21939;
count__21405_21845 = G__21940;
i__21406_21846 = G__21941;
continue;
}
} else {
var G__21942 = cljs.core.next(seq__21400_21894__$1);
var G__21943 = null;
var G__21944 = (0);
var G__21945 = (0);
seq__21400_21843 = G__21942;
chunk__21404_21844 = G__21943;
count__21405_21845 = G__21944;
i__21406_21846 = G__21945;
continue;
}
}
} else {
}
}
break;
}


var G__21946 = seq__21150;
var G__21947 = chunk__21152;
var G__21948 = count__21153;
var G__21949 = (i__21154 + (1));
seq__21150 = G__21946;
chunk__21152 = G__21947;
count__21153 = G__21948;
i__21154 = G__21949;
continue;
} else {
var G__21950 = seq__21150;
var G__21951 = chunk__21152;
var G__21952 = count__21153;
var G__21953 = (i__21154 + (1));
seq__21150 = G__21950;
chunk__21152 = G__21951;
count__21153 = G__21952;
i__21154 = G__21953;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21150);
if(temp__5825__auto__){
var seq__21150__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21150__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21150__$1);
var G__21954 = cljs.core.chunk_rest(seq__21150__$1);
var G__21955 = c__5673__auto__;
var G__21956 = cljs.core.count(c__5673__auto__);
var G__21957 = (0);
seq__21150 = G__21954;
chunk__21152 = G__21955;
count__21153 = G__21956;
i__21154 = G__21957;
continue;
} else {
var path = cljs.core.first(seq__21150__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21640_21958 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21644_21959 = null;
var count__21645_21960 = (0);
var i__21646_21961 = (0);
while(true){
if((i__21646_21961 < count__21645_21960)){
var node_21962 = chunk__21644_21959.cljs$core$IIndexed$_nth$arity$2(null,i__21646_21961);
if(cljs.core.not(node_21962.shadow$old)){
var path_match_21963 = shadow.cljs.devtools.client.browser.match_paths(node_21962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21963)){
var new_link_21964 = (function (){var G__21732 = node_21962.cloneNode(true);
G__21732.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21963)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21732;
})();
(node_21962.shadow$old = true);

(new_link_21964.onload = ((function (seq__21640_21958,chunk__21644_21959,count__21645_21960,i__21646_21961,seq__21150,chunk__21152,count__21153,i__21154,new_link_21964,path_match_21963,node_21962,path,seq__21150__$1,temp__5825__auto__,map__21149,map__21149__$1,msg,updates,reload_info){
return (function (e){
var seq__21733_21965 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21735_21966 = null;
var count__21736_21967 = (0);
var i__21737_21968 = (0);
while(true){
if((i__21737_21968 < count__21736_21967)){
var map__21741_21969 = chunk__21735_21966.cljs$core$IIndexed$_nth$arity$2(null,i__21737_21968);
var map__21741_21970__$1 = cljs.core.__destructure_map(map__21741_21969);
var task_21971 = map__21741_21970__$1;
var fn_str_21972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21741_21970__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21741_21970__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21974 = goog.getObjectByName(fn_str_21972,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21973)));

(fn_obj_21974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21974.cljs$core$IFn$_invoke$arity$2(path,new_link_21964) : fn_obj_21974.call(null,path,new_link_21964));


var G__21975 = seq__21733_21965;
var G__21976 = chunk__21735_21966;
var G__21977 = count__21736_21967;
var G__21978 = (i__21737_21968 + (1));
seq__21733_21965 = G__21975;
chunk__21735_21966 = G__21976;
count__21736_21967 = G__21977;
i__21737_21968 = G__21978;
continue;
} else {
var temp__5825__auto___21979__$1 = cljs.core.seq(seq__21733_21965);
if(temp__5825__auto___21979__$1){
var seq__21733_21980__$1 = temp__5825__auto___21979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21733_21980__$1)){
var c__5673__auto___21981 = cljs.core.chunk_first(seq__21733_21980__$1);
var G__21982 = cljs.core.chunk_rest(seq__21733_21980__$1);
var G__21983 = c__5673__auto___21981;
var G__21984 = cljs.core.count(c__5673__auto___21981);
var G__21985 = (0);
seq__21733_21965 = G__21982;
chunk__21735_21966 = G__21983;
count__21736_21967 = G__21984;
i__21737_21968 = G__21985;
continue;
} else {
var map__21742_21986 = cljs.core.first(seq__21733_21980__$1);
var map__21742_21987__$1 = cljs.core.__destructure_map(map__21742_21986);
var task_21988 = map__21742_21987__$1;
var fn_str_21989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742_21987__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742_21987__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21991 = goog.getObjectByName(fn_str_21989,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21990)));

(fn_obj_21991.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21991.cljs$core$IFn$_invoke$arity$2(path,new_link_21964) : fn_obj_21991.call(null,path,new_link_21964));


var G__21992 = cljs.core.next(seq__21733_21980__$1);
var G__21993 = null;
var G__21994 = (0);
var G__21995 = (0);
seq__21733_21965 = G__21992;
chunk__21735_21966 = G__21993;
count__21736_21967 = G__21994;
i__21737_21968 = G__21995;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21962);
});})(seq__21640_21958,chunk__21644_21959,count__21645_21960,i__21646_21961,seq__21150,chunk__21152,count__21153,i__21154,new_link_21964,path_match_21963,node_21962,path,seq__21150__$1,temp__5825__auto__,map__21149,map__21149__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21963], 0));

goog.dom.insertSiblingAfter(new_link_21964,node_21962);


var G__21996 = seq__21640_21958;
var G__21997 = chunk__21644_21959;
var G__21998 = count__21645_21960;
var G__21999 = (i__21646_21961 + (1));
seq__21640_21958 = G__21996;
chunk__21644_21959 = G__21997;
count__21645_21960 = G__21998;
i__21646_21961 = G__21999;
continue;
} else {
var G__22000 = seq__21640_21958;
var G__22001 = chunk__21644_21959;
var G__22002 = count__21645_21960;
var G__22003 = (i__21646_21961 + (1));
seq__21640_21958 = G__22000;
chunk__21644_21959 = G__22001;
count__21645_21960 = G__22002;
i__21646_21961 = G__22003;
continue;
}
} else {
var G__22004 = seq__21640_21958;
var G__22005 = chunk__21644_21959;
var G__22006 = count__21645_21960;
var G__22007 = (i__21646_21961 + (1));
seq__21640_21958 = G__22004;
chunk__21644_21959 = G__22005;
count__21645_21960 = G__22006;
i__21646_21961 = G__22007;
continue;
}
} else {
var temp__5825__auto___22008__$1 = cljs.core.seq(seq__21640_21958);
if(temp__5825__auto___22008__$1){
var seq__21640_22009__$1 = temp__5825__auto___22008__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21640_22009__$1)){
var c__5673__auto___22010 = cljs.core.chunk_first(seq__21640_22009__$1);
var G__22011 = cljs.core.chunk_rest(seq__21640_22009__$1);
var G__22012 = c__5673__auto___22010;
var G__22013 = cljs.core.count(c__5673__auto___22010);
var G__22014 = (0);
seq__21640_21958 = G__22011;
chunk__21644_21959 = G__22012;
count__21645_21960 = G__22013;
i__21646_21961 = G__22014;
continue;
} else {
var node_22015 = cljs.core.first(seq__21640_22009__$1);
if(cljs.core.not(node_22015.shadow$old)){
var path_match_22016 = shadow.cljs.devtools.client.browser.match_paths(node_22015.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22016)){
var new_link_22017 = (function (){var G__21743 = node_22015.cloneNode(true);
G__21743.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22016)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21743;
})();
(node_22015.shadow$old = true);

(new_link_22017.onload = ((function (seq__21640_21958,chunk__21644_21959,count__21645_21960,i__21646_21961,seq__21150,chunk__21152,count__21153,i__21154,new_link_22017,path_match_22016,node_22015,seq__21640_22009__$1,temp__5825__auto___22008__$1,path,seq__21150__$1,temp__5825__auto__,map__21149,map__21149__$1,msg,updates,reload_info){
return (function (e){
var seq__21744_22018 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21746_22019 = null;
var count__21747_22020 = (0);
var i__21748_22021 = (0);
while(true){
if((i__21748_22021 < count__21747_22020)){
var map__21752_22022 = chunk__21746_22019.cljs$core$IIndexed$_nth$arity$2(null,i__21748_22021);
var map__21752_22023__$1 = cljs.core.__destructure_map(map__21752_22022);
var task_22024 = map__21752_22023__$1;
var fn_str_22025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21752_22023__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21752_22023__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22027 = goog.getObjectByName(fn_str_22025,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22026)));

(fn_obj_22027.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22027.cljs$core$IFn$_invoke$arity$2(path,new_link_22017) : fn_obj_22027.call(null,path,new_link_22017));


var G__22028 = seq__21744_22018;
var G__22029 = chunk__21746_22019;
var G__22030 = count__21747_22020;
var G__22031 = (i__21748_22021 + (1));
seq__21744_22018 = G__22028;
chunk__21746_22019 = G__22029;
count__21747_22020 = G__22030;
i__21748_22021 = G__22031;
continue;
} else {
var temp__5825__auto___22032__$2 = cljs.core.seq(seq__21744_22018);
if(temp__5825__auto___22032__$2){
var seq__21744_22033__$1 = temp__5825__auto___22032__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21744_22033__$1)){
var c__5673__auto___22034 = cljs.core.chunk_first(seq__21744_22033__$1);
var G__22035 = cljs.core.chunk_rest(seq__21744_22033__$1);
var G__22036 = c__5673__auto___22034;
var G__22037 = cljs.core.count(c__5673__auto___22034);
var G__22038 = (0);
seq__21744_22018 = G__22035;
chunk__21746_22019 = G__22036;
count__21747_22020 = G__22037;
i__21748_22021 = G__22038;
continue;
} else {
var map__21753_22039 = cljs.core.first(seq__21744_22033__$1);
var map__21753_22040__$1 = cljs.core.__destructure_map(map__21753_22039);
var task_22041 = map__21753_22040__$1;
var fn_str_22042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753_22040__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753_22040__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22044 = goog.getObjectByName(fn_str_22042,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22043)));

(fn_obj_22044.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22044.cljs$core$IFn$_invoke$arity$2(path,new_link_22017) : fn_obj_22044.call(null,path,new_link_22017));


var G__22045 = cljs.core.next(seq__21744_22033__$1);
var G__22046 = null;
var G__22047 = (0);
var G__22048 = (0);
seq__21744_22018 = G__22045;
chunk__21746_22019 = G__22046;
count__21747_22020 = G__22047;
i__21748_22021 = G__22048;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22015);
});})(seq__21640_21958,chunk__21644_21959,count__21645_21960,i__21646_21961,seq__21150,chunk__21152,count__21153,i__21154,new_link_22017,path_match_22016,node_22015,seq__21640_22009__$1,temp__5825__auto___22008__$1,path,seq__21150__$1,temp__5825__auto__,map__21149,map__21149__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22016], 0));

goog.dom.insertSiblingAfter(new_link_22017,node_22015);


var G__22049 = cljs.core.next(seq__21640_22009__$1);
var G__22050 = null;
var G__22051 = (0);
var G__22052 = (0);
seq__21640_21958 = G__22049;
chunk__21644_21959 = G__22050;
count__21645_21960 = G__22051;
i__21646_21961 = G__22052;
continue;
} else {
var G__22053 = cljs.core.next(seq__21640_22009__$1);
var G__22054 = null;
var G__22055 = (0);
var G__22056 = (0);
seq__21640_21958 = G__22053;
chunk__21644_21959 = G__22054;
count__21645_21960 = G__22055;
i__21646_21961 = G__22056;
continue;
}
} else {
var G__22057 = cljs.core.next(seq__21640_22009__$1);
var G__22058 = null;
var G__22059 = (0);
var G__22060 = (0);
seq__21640_21958 = G__22057;
chunk__21644_21959 = G__22058;
count__21645_21960 = G__22059;
i__21646_21961 = G__22060;
continue;
}
}
} else {
}
}
break;
}


var G__22061 = cljs.core.next(seq__21150__$1);
var G__22062 = null;
var G__22063 = (0);
var G__22064 = (0);
seq__21150 = G__22061;
chunk__21152 = G__22062;
count__21153 = G__22063;
i__21154 = G__22064;
continue;
} else {
var G__22065 = cljs.core.next(seq__21150__$1);
var G__22066 = null;
var G__22067 = (0);
var G__22068 = (0);
seq__21150 = G__22065;
chunk__21152 = G__22066;
count__21153 = G__22067;
i__21154 = G__22068;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21755 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21755) : success.call(null,G__21755));
}catch (e21754){var e = e21754;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21756,success,fail){
var map__21757 = p__21756;
var map__21757__$1 = cljs.core.__destructure_map(map__21757);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21757__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21759 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21759) : success.call(null,G__21759));
}catch (e21758){var e = e21758;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21760,done,error){
var map__21761 = p__21760;
var map__21761__$1 = cljs.core.__destructure_map(map__21761);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21761__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21762,done,error){
var map__21763 = p__21762;
var map__21763__$1 = cljs.core.__destructure_map(map__21763);
var msg = map__21763__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21764){
var map__21765 = p__21764;
var map__21765__$1 = cljs.core.__destructure_map(map__21765);
var src = map__21765__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21765__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21766 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21766) : done.call(null,G__21766));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21767){
var map__21768 = p__21767;
var map__21768__$1 = cljs.core.__destructure_map(map__21768);
var msg__$1 = map__21768__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21768__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21769){var ex = e21769;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21770){
var map__21771 = p__21770;
var map__21771__$1 = cljs.core.__destructure_map(map__21771);
var env = map__21771__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21772){
var map__21773 = p__21772;
var map__21773__$1 = cljs.core.__destructure_map(map__21773);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21774){
var map__21775 = p__21774;
var map__21775__$1 = cljs.core.__destructure_map(map__21775);
var svc = map__21775__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21775__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
