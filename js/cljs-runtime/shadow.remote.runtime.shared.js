goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18051){
var map__18052 = p__18051;
var map__18052__$1 = cljs.core.__destructure_map(map__18052);
var runtime = map__18052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18339 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18339)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18053 = runtime;
var G__18054 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18339);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18053,G__18054) : shadow.remote.runtime.shared.process.call(null,G__18053,G__18054));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18055,res){
var map__18056 = p__18055;
var map__18056__$1 = cljs.core.__destructure_map(map__18056);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18056__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18056__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18058 = res;
var G__18058__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18058,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18058);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18058__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18058__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18063 = arguments.length;
switch (G__18063) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18064,msg,handlers,timeout_after_ms){
var map__18067 = p__18064;
var map__18067__$1 = cljs.core.__destructure_map(map__18067);
var runtime = map__18067__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18361 = arguments.length;
var i__5877__auto___18362 = (0);
while(true){
if((i__5877__auto___18362 < len__5876__auto___18361)){
args__5882__auto__.push((arguments[i__5877__auto___18362]));

var G__18363 = (i__5877__auto___18362 + (1));
i__5877__auto___18362 = G__18363;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18087,ev,args){
var map__18088 = p__18087;
var map__18088__$1 = cljs.core.__destructure_map(map__18088);
var runtime = map__18088__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18091 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18094 = null;
var count__18095 = (0);
var i__18096 = (0);
while(true){
if((i__18096 < count__18095)){
var ext = chunk__18094.cljs$core$IIndexed$_nth$arity$2(null,i__18096);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18365 = seq__18091;
var G__18366 = chunk__18094;
var G__18367 = count__18095;
var G__18368 = (i__18096 + (1));
seq__18091 = G__18365;
chunk__18094 = G__18366;
count__18095 = G__18367;
i__18096 = G__18368;
continue;
} else {
var G__18369 = seq__18091;
var G__18370 = chunk__18094;
var G__18371 = count__18095;
var G__18372 = (i__18096 + (1));
seq__18091 = G__18369;
chunk__18094 = G__18370;
count__18095 = G__18371;
i__18096 = G__18372;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__18091);
if(temp__5825__auto__){
var seq__18091__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18091__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18091__$1);
var G__18373 = cljs.core.chunk_rest(seq__18091__$1);
var G__18374 = c__5673__auto__;
var G__18375 = cljs.core.count(c__5673__auto__);
var G__18376 = (0);
seq__18091 = G__18373;
chunk__18094 = G__18374;
count__18095 = G__18375;
i__18096 = G__18376;
continue;
} else {
var ext = cljs.core.first(seq__18091__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18377 = cljs.core.next(seq__18091__$1);
var G__18378 = null;
var G__18379 = (0);
var G__18380 = (0);
seq__18091 = G__18377;
chunk__18094 = G__18378;
count__18095 = G__18379;
i__18096 = G__18380;
continue;
} else {
var G__18381 = cljs.core.next(seq__18091__$1);
var G__18382 = null;
var G__18383 = (0);
var G__18384 = (0);
seq__18091 = G__18381;
chunk__18094 = G__18382;
count__18095 = G__18383;
i__18096 = G__18384;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18078){
var G__18079 = cljs.core.first(seq18078);
var seq18078__$1 = cljs.core.next(seq18078);
var G__18080 = cljs.core.first(seq18078__$1);
var seq18078__$2 = cljs.core.next(seq18078__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18079,G__18080,seq18078__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18104,p__18105){
var map__18106 = p__18104;
var map__18106__$1 = cljs.core.__destructure_map(map__18106);
var runtime = map__18106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18107 = p__18105;
var map__18107__$1 = cljs.core.__destructure_map(map__18107);
var msg = map__18107__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18107__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18108 = cljs.core.deref(state_ref);
var map__18108__$1 = cljs.core.__destructure_map(map__18108);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18108__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18108__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18109,msg){
var map__18110 = p__18109;
var map__18110__$1 = cljs.core.__destructure_map(map__18110);
var runtime = map__18110__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18110__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18112,key,p__18113){
var map__18114 = p__18112;
var map__18114__$1 = cljs.core.__destructure_map(map__18114);
var state = map__18114__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18114__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18115 = p__18113;
var map__18115__$1 = cljs.core.__destructure_map(map__18115);
var spec = map__18115__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18142,key,spec){
var map__18143 = p__18142;
var map__18143__$1 = cljs.core.__destructure_map(map__18143);
var runtime = map__18143__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___18404 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___18404 == null)){
} else {
var on_welcome_18405 = temp__5829__auto___18404;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18405.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18405.cljs$core$IFn$_invoke$arity$0() : on_welcome_18405.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18165_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18165_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18166_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18166_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18167_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18167_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18168_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18168_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18191_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18191_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18230,key){
var map__18231 = p__18230;
var map__18231__$1 = cljs.core.__destructure_map(map__18231);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18231__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18248,msg){
var map__18249 = p__18248;
var map__18249__$1 = cljs.core.__destructure_map(map__18249);
var runtime = map__18249__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18249__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18264,p__18265){
var map__18269 = p__18264;
var map__18269__$1 = cljs.core.__destructure_map(map__18269);
var runtime = map__18269__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18269__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18270 = p__18265;
var map__18270__$1 = cljs.core.__destructure_map(map__18270);
var msg = map__18270__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18283 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18285 = null;
var count__18286 = (0);
var i__18287 = (0);
while(true){
if((i__18287 < count__18286)){
var map__18330 = chunk__18285.cljs$core$IIndexed$_nth$arity$2(null,i__18287);
var map__18330__$1 = cljs.core.__destructure_map(map__18330);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18330__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18426 = seq__18283;
var G__18427 = chunk__18285;
var G__18428 = count__18286;
var G__18429 = (i__18287 + (1));
seq__18283 = G__18426;
chunk__18285 = G__18427;
count__18286 = G__18428;
i__18287 = G__18429;
continue;
} else {
var G__18430 = seq__18283;
var G__18431 = chunk__18285;
var G__18432 = count__18286;
var G__18433 = (i__18287 + (1));
seq__18283 = G__18430;
chunk__18285 = G__18431;
count__18286 = G__18432;
i__18287 = G__18433;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__18283);
if(temp__5825__auto__){
var seq__18283__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18283__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18283__$1);
var G__18434 = cljs.core.chunk_rest(seq__18283__$1);
var G__18435 = c__5673__auto__;
var G__18436 = cljs.core.count(c__5673__auto__);
var G__18437 = (0);
seq__18283 = G__18434;
chunk__18285 = G__18435;
count__18286 = G__18436;
i__18287 = G__18437;
continue;
} else {
var map__18336 = cljs.core.first(seq__18283__$1);
var map__18336__$1 = cljs.core.__destructure_map(map__18336);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18438 = cljs.core.next(seq__18283__$1);
var G__18439 = null;
var G__18440 = (0);
var G__18441 = (0);
seq__18283 = G__18438;
chunk__18285 = G__18439;
count__18286 = G__18440;
i__18287 = G__18441;
continue;
} else {
var G__18442 = cljs.core.next(seq__18283__$1);
var G__18443 = null;
var G__18444 = (0);
var G__18445 = (0);
seq__18283 = G__18442;
chunk__18285 = G__18443;
count__18286 = G__18444;
i__18287 = G__18445;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
