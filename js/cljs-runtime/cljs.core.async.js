goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14786 = (function (f,blockable,meta14787){
this.f = f;
this.blockable = blockable;
this.meta14787 = meta14787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14788,meta14787__$1){
var self__ = this;
var _14788__$1 = this;
return (new cljs.core.async.t_cljs$core$async14786(self__.f,self__.blockable,meta14787__$1));
}));

(cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14788){
var self__ = this;
var _14788__$1 = this;
return self__.meta14787;
}));

(cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14787","meta14787",854640505,null)], null);
}));

(cljs.core.async.t_cljs$core$async14786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14786");

(cljs.core.async.t_cljs$core$async14786.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14786.
 */
cljs.core.async.__GT_t_cljs$core$async14786 = (function cljs$core$async$__GT_t_cljs$core$async14786(f,blockable,meta14787){
return (new cljs.core.async.t_cljs$core$async14786(f,blockable,meta14787));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14784 = arguments.length;
switch (G__14784) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14786(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14821 = arguments.length;
switch (G__14821) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14862 = arguments.length;
switch (G__14862) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14873 = arguments.length;
switch (G__14873) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16764 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16764) : fn1.call(null,val_16764));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16764) : fn1.call(null,val_16764));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14884 = arguments.length;
switch (G__14884) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___16766 = n;
var x_16767 = (0);
while(true){
if((x_16767 < n__5741__auto___16766)){
(a[x_16767] = x_16767);

var G__16768 = (x_16767 + (1));
x_16767 = G__16768;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14900 = (function (flag,meta14901){
this.flag = flag;
this.meta14901 = meta14901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14902,meta14901__$1){
var self__ = this;
var _14902__$1 = this;
return (new cljs.core.async.t_cljs$core$async14900(self__.flag,meta14901__$1));
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14902){
var self__ = this;
var _14902__$1 = this;
return self__.meta14901;
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14901","meta14901",-2111760075,null)], null);
}));

(cljs.core.async.t_cljs$core$async14900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14900");

(cljs.core.async.t_cljs$core$async14900.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14900.
 */
cljs.core.async.__GT_t_cljs$core$async14900 = (function cljs$core$async$__GT_t_cljs$core$async14900(flag,meta14901){
return (new cljs.core.async.t_cljs$core$async14900(flag,meta14901));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14900(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14905 = (function (flag,cb,meta14906){
this.flag = flag;
this.cb = cb;
this.meta14906 = meta14906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14907,meta14906__$1){
var self__ = this;
var _14907__$1 = this;
return (new cljs.core.async.t_cljs$core$async14905(self__.flag,self__.cb,meta14906__$1));
}));

(cljs.core.async.t_cljs$core$async14905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14907){
var self__ = this;
var _14907__$1 = this;
return self__.meta14906;
}));

(cljs.core.async.t_cljs$core$async14905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14906","meta14906",1147395844,null)], null);
}));

(cljs.core.async.t_cljs$core$async14905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14905");

(cljs.core.async.t_cljs$core$async14905.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14905.
 */
cljs.core.async.__GT_t_cljs$core$async14905 = (function cljs$core$async$__GT_t_cljs$core$async14905(flag,cb,meta14906){
return (new cljs.core.async.t_cljs$core$async14905(flag,cb,meta14906));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14905(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_16771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16771)){
if((!(((port_16771.cljs$core$IFn$_invoke$arity$1 ? port_16771.cljs$core$IFn$_invoke$arity$1((1)) : port_16771.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__16772 = (i + (1));
i = G__16772;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14912_SHARP_){
var G__14916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14912_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14916) : fret.call(null,G__14916));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14913_SHARP_){
var G__14917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14913_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14917) : fret.call(null,G__14917));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16783 = (i + (1));
i = G__16783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16784 = arguments.length;
var i__5877__auto___16785 = (0);
while(true){
if((i__5877__auto___16785 < len__5876__auto___16784)){
args__5882__auto__.push((arguments[i__5877__auto___16785]));

var G__16786 = (i__5877__auto___16785 + (1));
i__5877__auto___16785 = G__16786;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14924){
var map__14925 = p__14924;
var map__14925__$1 = cljs.core.__destructure_map(map__14925);
var opts = map__14925__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14919){
var G__14920 = cljs.core.first(seq14919);
var seq14919__$1 = cljs.core.next(seq14919);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14920,seq14919__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14930 = arguments.length;
switch (G__14930) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14686__auto___16793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_14963){
var state_val_14964 = (state_14963[(1)]);
if((state_val_14964 === (7))){
var inst_14955 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14967_16794 = state_14963__$1;
(statearr_14967_16794[(2)] = inst_14955);

(statearr_14967_16794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (1))){
var state_14963__$1 = state_14963;
var statearr_14968_16800 = state_14963__$1;
(statearr_14968_16800[(2)] = null);

(statearr_14968_16800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (4))){
var inst_14938 = (state_14963[(7)]);
var inst_14938__$1 = (state_14963[(2)]);
var inst_14939 = (inst_14938__$1 == null);
var state_14963__$1 = (function (){var statearr_14969 = state_14963;
(statearr_14969[(7)] = inst_14938__$1);

return statearr_14969;
})();
if(cljs.core.truth_(inst_14939)){
var statearr_14970_16801 = state_14963__$1;
(statearr_14970_16801[(1)] = (5));

} else {
var statearr_14971_16802 = state_14963__$1;
(statearr_14971_16802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (13))){
var state_14963__$1 = state_14963;
var statearr_14976_16805 = state_14963__$1;
(statearr_14976_16805[(2)] = null);

(statearr_14976_16805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (6))){
var inst_14938 = (state_14963[(7)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14963__$1,(11),to,inst_14938);
} else {
if((state_val_14964 === (3))){
var inst_14958 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14963__$1,inst_14958);
} else {
if((state_val_14964 === (12))){
var state_14963__$1 = state_14963;
var statearr_14978_16806 = state_14963__$1;
(statearr_14978_16806[(2)] = null);

(statearr_14978_16806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (2))){
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14963__$1,(4),from);
} else {
if((state_val_14964 === (11))){
var inst_14948 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
if(cljs.core.truth_(inst_14948)){
var statearr_14980_16808 = state_14963__$1;
(statearr_14980_16808[(1)] = (12));

} else {
var statearr_14981_16809 = state_14963__$1;
(statearr_14981_16809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (9))){
var state_14963__$1 = state_14963;
var statearr_14982_16811 = state_14963__$1;
(statearr_14982_16811[(2)] = null);

(statearr_14982_16811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (5))){
var state_14963__$1 = state_14963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14985_16813 = state_14963__$1;
(statearr_14985_16813[(1)] = (8));

} else {
var statearr_14987_16814 = state_14963__$1;
(statearr_14987_16814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (14))){
var inst_14953 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14988_16815 = state_14963__$1;
(statearr_14988_16815[(2)] = inst_14953);

(statearr_14988_16815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (10))){
var inst_14945 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14990_16819 = state_14963__$1;
(statearr_14990_16819[(2)] = inst_14945);

(statearr_14990_16819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (8))){
var inst_14942 = cljs.core.async.close_BANG_(to);
var state_14963__$1 = state_14963;
var statearr_14991_16820 = state_14963__$1;
(statearr_14991_16820[(2)] = inst_14942);

(statearr_14991_16820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_14992 = [null,null,null,null,null,null,null,null];
(statearr_14992[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_14992[(1)] = (1));

return statearr_14992;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_14963){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_14963);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e14993){var ex__14606__auto__ = e14993;
var statearr_14995_16821 = state_14963;
(statearr_14995_16821[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_14963[(4)]))){
var statearr_14996_16822 = state_14963;
(statearr_14996_16822[(1)] = cljs.core.first((state_14963[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16823 = state_14963;
state_14963 = G__16823;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_14963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_14963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_14997 = f__14687__auto__();
(statearr_14997[(6)] = c__14686__auto___16793);

return statearr_14997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15000){
var vec__15001 = p__15000;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
var job = vec__15001;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14686__auto___16829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15011){
var state_val_15012 = (state_15011[(1)]);
if((state_val_15012 === (1))){
var state_15011__$1 = state_15011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15011__$1,(2),res,v);
} else {
if((state_val_15012 === (2))){
var inst_15008 = (state_15011[(2)]);
var inst_15009 = cljs.core.async.close_BANG_(res);
var state_15011__$1 = (function (){var statearr_15014 = state_15011;
(statearr_15014[(7)] = inst_15008);

return statearr_15014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15011__$1,inst_15009);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_15015 = [null,null,null,null,null,null,null,null];
(statearr_15015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__);

(statearr_15015[(1)] = (1));

return statearr_15015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1 = (function (state_15011){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15011);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15016){var ex__14606__auto__ = e15016;
var statearr_15017_16835 = state_15011;
(statearr_15017_16835[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15011[(4)]))){
var statearr_15018_16836 = state_15011;
(statearr_15018_16836[(1)] = cljs.core.first((state_15011[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16837 = state_15011;
state_15011 = G__16837;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = function(state_15011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1.call(this,state_15011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15019 = f__14687__auto__();
(statearr_15019[(6)] = c__14686__auto___16829);

return statearr_15019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15021){
var vec__15022 = p__15021;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(1),null);
var job = vec__15022;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___16838 = n;
var __16839 = (0);
while(true){
if((__16839 < n__5741__auto___16838)){
var G__15027_16840 = type;
var G__15027_16841__$1 = (((G__15027_16840 instanceof cljs.core.Keyword))?G__15027_16840.fqn:null);
switch (G__15027_16841__$1) {
case "compute":
var c__14686__auto___16843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16839,c__14686__auto___16843,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async){
return (function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = ((function (__16839,c__14686__auto___16843,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async){
return (function (state_15043){
var state_val_15044 = (state_15043[(1)]);
if((state_val_15044 === (1))){
var state_15043__$1 = state_15043;
var statearr_15049_16844 = state_15043__$1;
(statearr_15049_16844[(2)] = null);

(statearr_15049_16844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (2))){
var state_15043__$1 = state_15043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15043__$1,(4),jobs);
} else {
if((state_val_15044 === (3))){
var inst_15041 = (state_15043[(2)]);
var state_15043__$1 = state_15043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15043__$1,inst_15041);
} else {
if((state_val_15044 === (4))){
var inst_15033 = (state_15043[(2)]);
var inst_15034 = process__$1(inst_15033);
var state_15043__$1 = state_15043;
if(cljs.core.truth_(inst_15034)){
var statearr_15050_16845 = state_15043__$1;
(statearr_15050_16845[(1)] = (5));

} else {
var statearr_15051_16846 = state_15043__$1;
(statearr_15051_16846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (5))){
var state_15043__$1 = state_15043;
var statearr_15052_16847 = state_15043__$1;
(statearr_15052_16847[(2)] = null);

(statearr_15052_16847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (6))){
var state_15043__$1 = state_15043;
var statearr_15053_16848 = state_15043__$1;
(statearr_15053_16848[(2)] = null);

(statearr_15053_16848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (7))){
var inst_15039 = (state_15043[(2)]);
var state_15043__$1 = state_15043;
var statearr_15054_16849 = state_15043__$1;
(statearr_15054_16849[(2)] = inst_15039);

(statearr_15054_16849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16839,c__14686__auto___16843,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async))
;
return ((function (__16839,switch__14602__auto__,c__14686__auto___16843,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_15055 = [null,null,null,null,null,null,null];
(statearr_15055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__);

(statearr_15055[(1)] = (1));

return statearr_15055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1 = (function (state_15043){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15043);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15056){var ex__14606__auto__ = e15056;
var statearr_15057_16851 = state_15043;
(statearr_15057_16851[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15043[(4)]))){
var statearr_15058_16852 = state_15043;
(statearr_15058_16852[(1)] = cljs.core.first((state_15043[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16856 = state_15043;
state_15043 = G__16856;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = function(state_15043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1.call(this,state_15043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__;
})()
;})(__16839,switch__14602__auto__,c__14686__auto___16843,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async))
})();
var state__14688__auto__ = (function (){var statearr_15063 = f__14687__auto__();
(statearr_15063[(6)] = c__14686__auto___16843);

return statearr_15063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
});})(__16839,c__14686__auto___16843,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async))
);


break;
case "async":
var c__14686__auto___16857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16839,c__14686__auto___16857,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async){
return (function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = ((function (__16839,c__14686__auto___16857,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async){
return (function (state_15076){
var state_val_15077 = (state_15076[(1)]);
if((state_val_15077 === (1))){
var state_15076__$1 = state_15076;
var statearr_15078_16858 = state_15076__$1;
(statearr_15078_16858[(2)] = null);

(statearr_15078_16858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15077 === (2))){
var state_15076__$1 = state_15076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15076__$1,(4),jobs);
} else {
if((state_val_15077 === (3))){
var inst_15074 = (state_15076[(2)]);
var state_15076__$1 = state_15076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15076__$1,inst_15074);
} else {
if((state_val_15077 === (4))){
var inst_15066 = (state_15076[(2)]);
var inst_15067 = async(inst_15066);
var state_15076__$1 = state_15076;
if(cljs.core.truth_(inst_15067)){
var statearr_15079_16864 = state_15076__$1;
(statearr_15079_16864[(1)] = (5));

} else {
var statearr_15080_16865 = state_15076__$1;
(statearr_15080_16865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15077 === (5))){
var state_15076__$1 = state_15076;
var statearr_15081_16866 = state_15076__$1;
(statearr_15081_16866[(2)] = null);

(statearr_15081_16866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15077 === (6))){
var state_15076__$1 = state_15076;
var statearr_15082_16867 = state_15076__$1;
(statearr_15082_16867[(2)] = null);

(statearr_15082_16867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15077 === (7))){
var inst_15072 = (state_15076[(2)]);
var state_15076__$1 = state_15076;
var statearr_15083_16868 = state_15076__$1;
(statearr_15083_16868[(2)] = inst_15072);

(statearr_15083_16868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16839,c__14686__auto___16857,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async))
;
return ((function (__16839,switch__14602__auto__,c__14686__auto___16857,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_15084 = [null,null,null,null,null,null,null];
(statearr_15084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__);

(statearr_15084[(1)] = (1));

return statearr_15084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1 = (function (state_15076){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15076);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15087){var ex__14606__auto__ = e15087;
var statearr_15088_16872 = state_15076;
(statearr_15088_16872[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15076[(4)]))){
var statearr_15089_16873 = state_15076;
(statearr_15089_16873[(1)] = cljs.core.first((state_15076[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16874 = state_15076;
state_15076 = G__16874;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = function(state_15076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1.call(this,state_15076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__;
})()
;})(__16839,switch__14602__auto__,c__14686__auto___16857,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async))
})();
var state__14688__auto__ = (function (){var statearr_15090 = f__14687__auto__();
(statearr_15090[(6)] = c__14686__auto___16857);

return statearr_15090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
});})(__16839,c__14686__auto___16857,G__15027_16840,G__15027_16841__$1,n__5741__auto___16838,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15027_16841__$1))));

}

var G__16875 = (__16839 + (1));
__16839 = G__16875;
continue;
} else {
}
break;
}

var c__14686__auto___16876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15116){
var state_val_15117 = (state_15116[(1)]);
if((state_val_15117 === (7))){
var inst_15112 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
var statearr_15118_16881 = state_15116__$1;
(statearr_15118_16881[(2)] = inst_15112);

(statearr_15118_16881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (1))){
var state_15116__$1 = state_15116;
var statearr_15119_16886 = state_15116__$1;
(statearr_15119_16886[(2)] = null);

(statearr_15119_16886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (4))){
var inst_15097 = (state_15116[(7)]);
var inst_15097__$1 = (state_15116[(2)]);
var inst_15098 = (inst_15097__$1 == null);
var state_15116__$1 = (function (){var statearr_15120 = state_15116;
(statearr_15120[(7)] = inst_15097__$1);

return statearr_15120;
})();
if(cljs.core.truth_(inst_15098)){
var statearr_15121_16887 = state_15116__$1;
(statearr_15121_16887[(1)] = (5));

} else {
var statearr_15122_16888 = state_15116__$1;
(statearr_15122_16888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (6))){
var inst_15097 = (state_15116[(7)]);
var inst_15102 = (state_15116[(8)]);
var inst_15102__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15104 = [inst_15097,inst_15102__$1];
var inst_15105 = (new cljs.core.PersistentVector(null,2,(5),inst_15103,inst_15104,null));
var state_15116__$1 = (function (){var statearr_15124 = state_15116;
(statearr_15124[(8)] = inst_15102__$1);

return statearr_15124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15116__$1,(8),jobs,inst_15105);
} else {
if((state_val_15117 === (3))){
var inst_15114 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15116__$1,inst_15114);
} else {
if((state_val_15117 === (2))){
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15116__$1,(4),from);
} else {
if((state_val_15117 === (9))){
var inst_15109 = (state_15116[(2)]);
var state_15116__$1 = (function (){var statearr_15125 = state_15116;
(statearr_15125[(9)] = inst_15109);

return statearr_15125;
})();
var statearr_15126_16893 = state_15116__$1;
(statearr_15126_16893[(2)] = null);

(statearr_15126_16893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (5))){
var inst_15100 = cljs.core.async.close_BANG_(jobs);
var state_15116__$1 = state_15116;
var statearr_15127_16894 = state_15116__$1;
(statearr_15127_16894[(2)] = inst_15100);

(statearr_15127_16894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (8))){
var inst_15102 = (state_15116[(8)]);
var inst_15107 = (state_15116[(2)]);
var state_15116__$1 = (function (){var statearr_15131 = state_15116;
(statearr_15131[(10)] = inst_15107);

return statearr_15131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15116__$1,(9),results,inst_15102);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_15132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__);

(statearr_15132[(1)] = (1));

return statearr_15132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1 = (function (state_15116){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15116);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15133){var ex__14606__auto__ = e15133;
var statearr_15134_16895 = state_15116;
(statearr_15134_16895[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15116[(4)]))){
var statearr_15135_16896 = state_15116;
(statearr_15135_16896[(1)] = cljs.core.first((state_15116[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16898 = state_15116;
state_15116 = G__16898;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = function(state_15116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1.call(this,state_15116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15137 = f__14687__auto__();
(statearr_15137[(6)] = c__14686__auto___16876);

return statearr_15137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


var c__14686__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15176){
var state_val_15177 = (state_15176[(1)]);
if((state_val_15177 === (7))){
var inst_15172 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
var statearr_15180_16899 = state_15176__$1;
(statearr_15180_16899[(2)] = inst_15172);

(statearr_15180_16899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (20))){
var state_15176__$1 = state_15176;
var statearr_15183_16903 = state_15176__$1;
(statearr_15183_16903[(2)] = null);

(statearr_15183_16903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (1))){
var state_15176__$1 = state_15176;
var statearr_15184_16904 = state_15176__$1;
(statearr_15184_16904[(2)] = null);

(statearr_15184_16904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (4))){
var inst_15140 = (state_15176[(7)]);
var inst_15140__$1 = (state_15176[(2)]);
var inst_15142 = (inst_15140__$1 == null);
var state_15176__$1 = (function (){var statearr_15185 = state_15176;
(statearr_15185[(7)] = inst_15140__$1);

return statearr_15185;
})();
if(cljs.core.truth_(inst_15142)){
var statearr_15186_16906 = state_15176__$1;
(statearr_15186_16906[(1)] = (5));

} else {
var statearr_15187_16907 = state_15176__$1;
(statearr_15187_16907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (15))){
var inst_15154 = (state_15176[(8)]);
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15176__$1,(18),to,inst_15154);
} else {
if((state_val_15177 === (21))){
var inst_15167 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
var statearr_15188_16908 = state_15176__$1;
(statearr_15188_16908[(2)] = inst_15167);

(statearr_15188_16908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (13))){
var inst_15169 = (state_15176[(2)]);
var state_15176__$1 = (function (){var statearr_15189 = state_15176;
(statearr_15189[(9)] = inst_15169);

return statearr_15189;
})();
var statearr_15190_16909 = state_15176__$1;
(statearr_15190_16909[(2)] = null);

(statearr_15190_16909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (6))){
var inst_15140 = (state_15176[(7)]);
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15176__$1,(11),inst_15140);
} else {
if((state_val_15177 === (17))){
var inst_15162 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
if(cljs.core.truth_(inst_15162)){
var statearr_15191_16910 = state_15176__$1;
(statearr_15191_16910[(1)] = (19));

} else {
var statearr_15192_16911 = state_15176__$1;
(statearr_15192_16911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (3))){
var inst_15174 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15176__$1,inst_15174);
} else {
if((state_val_15177 === (12))){
var inst_15151 = (state_15176[(10)]);
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15176__$1,(14),inst_15151);
} else {
if((state_val_15177 === (2))){
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15176__$1,(4),results);
} else {
if((state_val_15177 === (19))){
var state_15176__$1 = state_15176;
var statearr_15193_16916 = state_15176__$1;
(statearr_15193_16916[(2)] = null);

(statearr_15193_16916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (11))){
var inst_15151 = (state_15176[(2)]);
var state_15176__$1 = (function (){var statearr_15194 = state_15176;
(statearr_15194[(10)] = inst_15151);

return statearr_15194;
})();
var statearr_15195_16917 = state_15176__$1;
(statearr_15195_16917[(2)] = null);

(statearr_15195_16917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (9))){
var state_15176__$1 = state_15176;
var statearr_15196_16918 = state_15176__$1;
(statearr_15196_16918[(2)] = null);

(statearr_15196_16918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (5))){
var state_15176__$1 = state_15176;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15197_16919 = state_15176__$1;
(statearr_15197_16919[(1)] = (8));

} else {
var statearr_15198_16920 = state_15176__$1;
(statearr_15198_16920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (14))){
var inst_15154 = (state_15176[(8)]);
var inst_15156 = (state_15176[(11)]);
var inst_15154__$1 = (state_15176[(2)]);
var inst_15155 = (inst_15154__$1 == null);
var inst_15156__$1 = cljs.core.not(inst_15155);
var state_15176__$1 = (function (){var statearr_15199 = state_15176;
(statearr_15199[(8)] = inst_15154__$1);

(statearr_15199[(11)] = inst_15156__$1);

return statearr_15199;
})();
if(inst_15156__$1){
var statearr_15200_16923 = state_15176__$1;
(statearr_15200_16923[(1)] = (15));

} else {
var statearr_15201_16924 = state_15176__$1;
(statearr_15201_16924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (16))){
var inst_15156 = (state_15176[(11)]);
var state_15176__$1 = state_15176;
var statearr_15202_16925 = state_15176__$1;
(statearr_15202_16925[(2)] = inst_15156);

(statearr_15202_16925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (10))){
var inst_15148 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
var statearr_15203_16926 = state_15176__$1;
(statearr_15203_16926[(2)] = inst_15148);

(statearr_15203_16926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (18))){
var inst_15159 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
var statearr_15204_16927 = state_15176__$1;
(statearr_15204_16927[(2)] = inst_15159);

(statearr_15204_16927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (8))){
var inst_15145 = cljs.core.async.close_BANG_(to);
var state_15176__$1 = state_15176;
var statearr_15205_16928 = state_15176__$1;
(statearr_15205_16928[(2)] = inst_15145);

(statearr_15205_16928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_15206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__);

(statearr_15206[(1)] = (1));

return statearr_15206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1 = (function (state_15176){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15176);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15207){var ex__14606__auto__ = e15207;
var statearr_15208_16930 = state_15176;
(statearr_15208_16930[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15176[(4)]))){
var statearr_15209_16931 = state_15176;
(statearr_15209_16931[(1)] = cljs.core.first((state_15176[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16932 = state_15176;
state_15176 = G__16932;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__ = function(state_15176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1.call(this,state_15176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15214 = f__14687__auto__();
(statearr_15214[(6)] = c__14686__auto__);

return statearr_15214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));

return c__14686__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15218 = arguments.length;
switch (G__15218) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15222 = arguments.length;
switch (G__15222) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15226 = arguments.length;
switch (G__15226) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14686__auto___16941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15257){
var state_val_15258 = (state_15257[(1)]);
if((state_val_15258 === (7))){
var inst_15253 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
var statearr_15259_16942 = state_15257__$1;
(statearr_15259_16942[(2)] = inst_15253);

(statearr_15259_16942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (1))){
var state_15257__$1 = state_15257;
var statearr_15260_16943 = state_15257__$1;
(statearr_15260_16943[(2)] = null);

(statearr_15260_16943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (4))){
var inst_15234 = (state_15257[(7)]);
var inst_15234__$1 = (state_15257[(2)]);
var inst_15235 = (inst_15234__$1 == null);
var state_15257__$1 = (function (){var statearr_15261 = state_15257;
(statearr_15261[(7)] = inst_15234__$1);

return statearr_15261;
})();
if(cljs.core.truth_(inst_15235)){
var statearr_15262_16944 = state_15257__$1;
(statearr_15262_16944[(1)] = (5));

} else {
var statearr_15263_16945 = state_15257__$1;
(statearr_15263_16945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (13))){
var state_15257__$1 = state_15257;
var statearr_15264_16946 = state_15257__$1;
(statearr_15264_16946[(2)] = null);

(statearr_15264_16946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (6))){
var inst_15234 = (state_15257[(7)]);
var inst_15240 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15234) : p.call(null,inst_15234));
var state_15257__$1 = state_15257;
if(cljs.core.truth_(inst_15240)){
var statearr_15265_16947 = state_15257__$1;
(statearr_15265_16947[(1)] = (9));

} else {
var statearr_15266_16948 = state_15257__$1;
(statearr_15266_16948[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (3))){
var inst_15255 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15257__$1,inst_15255);
} else {
if((state_val_15258 === (12))){
var state_15257__$1 = state_15257;
var statearr_15267_16949 = state_15257__$1;
(statearr_15267_16949[(2)] = null);

(statearr_15267_16949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (2))){
var state_15257__$1 = state_15257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15257__$1,(4),ch);
} else {
if((state_val_15258 === (11))){
var inst_15234 = (state_15257[(7)]);
var inst_15244 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15257__$1,(8),inst_15244,inst_15234);
} else {
if((state_val_15258 === (9))){
var state_15257__$1 = state_15257;
var statearr_15268_16953 = state_15257__$1;
(statearr_15268_16953[(2)] = tc);

(statearr_15268_16953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (5))){
var inst_15237 = cljs.core.async.close_BANG_(tc);
var inst_15238 = cljs.core.async.close_BANG_(fc);
var state_15257__$1 = (function (){var statearr_15269 = state_15257;
(statearr_15269[(8)] = inst_15237);

return statearr_15269;
})();
var statearr_15270_16955 = state_15257__$1;
(statearr_15270_16955[(2)] = inst_15238);

(statearr_15270_16955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (14))){
var inst_15251 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
var statearr_15272_16957 = state_15257__$1;
(statearr_15272_16957[(2)] = inst_15251);

(statearr_15272_16957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (10))){
var state_15257__$1 = state_15257;
var statearr_15273_16958 = state_15257__$1;
(statearr_15273_16958[(2)] = fc);

(statearr_15273_16958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (8))){
var inst_15246 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
if(cljs.core.truth_(inst_15246)){
var statearr_15274_16959 = state_15257__$1;
(statearr_15274_16959[(1)] = (12));

} else {
var statearr_15275_16960 = state_15257__$1;
(statearr_15275_16960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_15276 = [null,null,null,null,null,null,null,null,null];
(statearr_15276[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_15276[(1)] = (1));

return statearr_15276;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_15257){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15257);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15278){var ex__14606__auto__ = e15278;
var statearr_15279_16975 = state_15257;
(statearr_15279_16975[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15257[(4)]))){
var statearr_15280_16976 = state_15257;
(statearr_15280_16976[(1)] = cljs.core.first((state_15257[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16977 = state_15257;
state_15257 = G__16977;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_15257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_15257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15282 = f__14687__auto__();
(statearr_15282[(6)] = c__14686__auto___16941);

return statearr_15282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14686__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15307){
var state_val_15308 = (state_15307[(1)]);
if((state_val_15308 === (7))){
var inst_15303 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
var statearr_15309_16982 = state_15307__$1;
(statearr_15309_16982[(2)] = inst_15303);

(statearr_15309_16982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (1))){
var inst_15286 = init;
var inst_15287 = inst_15286;
var state_15307__$1 = (function (){var statearr_15310 = state_15307;
(statearr_15310[(7)] = inst_15287);

return statearr_15310;
})();
var statearr_15311_16983 = state_15307__$1;
(statearr_15311_16983[(2)] = null);

(statearr_15311_16983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (4))){
var inst_15290 = (state_15307[(8)]);
var inst_15290__$1 = (state_15307[(2)]);
var inst_15291 = (inst_15290__$1 == null);
var state_15307__$1 = (function (){var statearr_15312 = state_15307;
(statearr_15312[(8)] = inst_15290__$1);

return statearr_15312;
})();
if(cljs.core.truth_(inst_15291)){
var statearr_15313_16987 = state_15307__$1;
(statearr_15313_16987[(1)] = (5));

} else {
var statearr_15314_16988 = state_15307__$1;
(statearr_15314_16988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (6))){
var inst_15287 = (state_15307[(7)]);
var inst_15290 = (state_15307[(8)]);
var inst_15294 = (state_15307[(9)]);
var inst_15294__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15287,inst_15290) : f.call(null,inst_15287,inst_15290));
var inst_15295 = cljs.core.reduced_QMARK_(inst_15294__$1);
var state_15307__$1 = (function (){var statearr_15315 = state_15307;
(statearr_15315[(9)] = inst_15294__$1);

return statearr_15315;
})();
if(inst_15295){
var statearr_15316_16990 = state_15307__$1;
(statearr_15316_16990[(1)] = (8));

} else {
var statearr_15317_16991 = state_15307__$1;
(statearr_15317_16991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (3))){
var inst_15305 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15307__$1,inst_15305);
} else {
if((state_val_15308 === (2))){
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15307__$1,(4),ch);
} else {
if((state_val_15308 === (9))){
var inst_15294 = (state_15307[(9)]);
var inst_15287 = inst_15294;
var state_15307__$1 = (function (){var statearr_15319 = state_15307;
(statearr_15319[(7)] = inst_15287);

return statearr_15319;
})();
var statearr_15320_16992 = state_15307__$1;
(statearr_15320_16992[(2)] = null);

(statearr_15320_16992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (5))){
var inst_15287 = (state_15307[(7)]);
var state_15307__$1 = state_15307;
var statearr_15321_16996 = state_15307__$1;
(statearr_15321_16996[(2)] = inst_15287);

(statearr_15321_16996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (10))){
var inst_15301 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
var statearr_15327_16997 = state_15307__$1;
(statearr_15327_16997[(2)] = inst_15301);

(statearr_15327_16997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (8))){
var inst_15294 = (state_15307[(9)]);
var inst_15297 = cljs.core.deref(inst_15294);
var state_15307__$1 = state_15307;
var statearr_15328_16998 = state_15307__$1;
(statearr_15328_16998[(2)] = inst_15297);

(statearr_15328_16998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14603__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14603__auto____0 = (function (){
var statearr_15330 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15330[(0)] = cljs$core$async$reduce_$_state_machine__14603__auto__);

(statearr_15330[(1)] = (1));

return statearr_15330;
});
var cljs$core$async$reduce_$_state_machine__14603__auto____1 = (function (state_15307){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15307);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15331){var ex__14606__auto__ = e15331;
var statearr_15332_16999 = state_15307;
(statearr_15332_16999[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15307[(4)]))){
var statearr_15333_17000 = state_15307;
(statearr_15333_17000[(1)] = cljs.core.first((state_15307[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17001 = state_15307;
state_15307 = G__17001;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14603__auto__ = function(state_15307){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14603__auto____1.call(this,state_15307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14603__auto____0;
cljs$core$async$reduce_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14603__auto____1;
return cljs$core$async$reduce_$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15334 = f__14687__auto__();
(statearr_15334[(6)] = c__14686__auto__);

return statearr_15334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));

return c__14686__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14686__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15340){
var state_val_15341 = (state_15340[(1)]);
if((state_val_15341 === (1))){
var inst_15335 = cljs.core.async.reduce(f__$1,init,ch);
var state_15340__$1 = state_15340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15340__$1,(2),inst_15335);
} else {
if((state_val_15341 === (2))){
var inst_15337 = (state_15340[(2)]);
var inst_15338 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15337) : f__$1.call(null,inst_15337));
var state_15340__$1 = state_15340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15340__$1,inst_15338);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14603__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14603__auto____0 = (function (){
var statearr_15342 = [null,null,null,null,null,null,null];
(statearr_15342[(0)] = cljs$core$async$transduce_$_state_machine__14603__auto__);

(statearr_15342[(1)] = (1));

return statearr_15342;
});
var cljs$core$async$transduce_$_state_machine__14603__auto____1 = (function (state_15340){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15340);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15345){var ex__14606__auto__ = e15345;
var statearr_15346_17007 = state_15340;
(statearr_15346_17007[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15340[(4)]))){
var statearr_15347_17008 = state_15340;
(statearr_15347_17008[(1)] = cljs.core.first((state_15340[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17009 = state_15340;
state_15340 = G__17009;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14603__auto__ = function(state_15340){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14603__auto____1.call(this,state_15340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14603__auto____0;
cljs$core$async$transduce_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14603__auto____1;
return cljs$core$async$transduce_$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15348 = f__14687__auto__();
(statearr_15348[(6)] = c__14686__auto__);

return statearr_15348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));

return c__14686__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15350 = arguments.length;
switch (G__15350) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14686__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15375){
var state_val_15376 = (state_15375[(1)]);
if((state_val_15376 === (7))){
var inst_15357 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
var statearr_15377_17014 = state_15375__$1;
(statearr_15377_17014[(2)] = inst_15357);

(statearr_15377_17014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (1))){
var inst_15351 = cljs.core.seq(coll);
var inst_15352 = inst_15351;
var state_15375__$1 = (function (){var statearr_15378 = state_15375;
(statearr_15378[(7)] = inst_15352);

return statearr_15378;
})();
var statearr_15379_17015 = state_15375__$1;
(statearr_15379_17015[(2)] = null);

(statearr_15379_17015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (4))){
var inst_15352 = (state_15375[(7)]);
var inst_15355 = cljs.core.first(inst_15352);
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15375__$1,(7),ch,inst_15355);
} else {
if((state_val_15376 === (13))){
var inst_15369 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
var statearr_15380_17016 = state_15375__$1;
(statearr_15380_17016[(2)] = inst_15369);

(statearr_15380_17016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (6))){
var inst_15360 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
if(cljs.core.truth_(inst_15360)){
var statearr_15381_17017 = state_15375__$1;
(statearr_15381_17017[(1)] = (8));

} else {
var statearr_15382_17018 = state_15375__$1;
(statearr_15382_17018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (3))){
var inst_15373 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15375__$1,inst_15373);
} else {
if((state_val_15376 === (12))){
var state_15375__$1 = state_15375;
var statearr_15383_17019 = state_15375__$1;
(statearr_15383_17019[(2)] = null);

(statearr_15383_17019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (2))){
var inst_15352 = (state_15375[(7)]);
var state_15375__$1 = state_15375;
if(cljs.core.truth_(inst_15352)){
var statearr_15384_17020 = state_15375__$1;
(statearr_15384_17020[(1)] = (4));

} else {
var statearr_15385_17021 = state_15375__$1;
(statearr_15385_17021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (11))){
var inst_15366 = cljs.core.async.close_BANG_(ch);
var state_15375__$1 = state_15375;
var statearr_15386_17022 = state_15375__$1;
(statearr_15386_17022[(2)] = inst_15366);

(statearr_15386_17022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (9))){
var state_15375__$1 = state_15375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15387_17036 = state_15375__$1;
(statearr_15387_17036[(1)] = (11));

} else {
var statearr_15388_17037 = state_15375__$1;
(statearr_15388_17037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (5))){
var inst_15352 = (state_15375[(7)]);
var state_15375__$1 = state_15375;
var statearr_15389_17038 = state_15375__$1;
(statearr_15389_17038[(2)] = inst_15352);

(statearr_15389_17038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (10))){
var inst_15371 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
var statearr_15390_17039 = state_15375__$1;
(statearr_15390_17039[(2)] = inst_15371);

(statearr_15390_17039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15376 === (8))){
var inst_15352 = (state_15375[(7)]);
var inst_15362 = cljs.core.next(inst_15352);
var inst_15352__$1 = inst_15362;
var state_15375__$1 = (function (){var statearr_15391 = state_15375;
(statearr_15391[(7)] = inst_15352__$1);

return statearr_15391;
})();
var statearr_15393_17040 = state_15375__$1;
(statearr_15393_17040[(2)] = null);

(statearr_15393_17040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_15394 = [null,null,null,null,null,null,null,null];
(statearr_15394[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_15394[(1)] = (1));

return statearr_15394;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_15375){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15375);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15395){var ex__14606__auto__ = e15395;
var statearr_15396_17055 = state_15375;
(statearr_15396_17055[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15375[(4)]))){
var statearr_15397_17060 = state_15375;
(statearr_15397_17060[(1)] = cljs.core.first((state_15375[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17062 = state_15375;
state_15375 = G__17062;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_15375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_15375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15398 = f__14687__auto__();
(statearr_15398[(6)] = c__14686__auto__);

return statearr_15398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));

return c__14686__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15402 = arguments.length;
switch (G__15402) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17086 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17086(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17088 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17088(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17099 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17099(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17106 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17106(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15405 = (function (ch,cs,meta15406){
this.ch = ch;
this.cs = cs;
this.meta15406 = meta15406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15407,meta15406__$1){
var self__ = this;
var _15407__$1 = this;
return (new cljs.core.async.t_cljs$core$async15405(self__.ch,self__.cs,meta15406__$1));
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15407){
var self__ = this;
var _15407__$1 = this;
return self__.meta15406;
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15406","meta15406",690138837,null)], null);
}));

(cljs.core.async.t_cljs$core$async15405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15405");

(cljs.core.async.t_cljs$core$async15405.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15405.
 */
cljs.core.async.__GT_t_cljs$core$async15405 = (function cljs$core$async$__GT_t_cljs$core$async15405(ch,cs,meta15406){
return (new cljs.core.async.t_cljs$core$async15405(ch,cs,meta15406));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15405(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14686__auto___17118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15552){
var state_val_15553 = (state_15552[(1)]);
if((state_val_15553 === (7))){
var inst_15548 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15554_17119 = state_15552__$1;
(statearr_15554_17119[(2)] = inst_15548);

(statearr_15554_17119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (20))){
var inst_15446 = (state_15552[(7)]);
var inst_15460 = cljs.core.first(inst_15446);
var inst_15461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15460,(0),null);
var inst_15462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15460,(1),null);
var state_15552__$1 = (function (){var statearr_15556 = state_15552;
(statearr_15556[(8)] = inst_15461);

return statearr_15556;
})();
if(cljs.core.truth_(inst_15462)){
var statearr_15558_17120 = state_15552__$1;
(statearr_15558_17120[(1)] = (22));

} else {
var statearr_15559_17121 = state_15552__$1;
(statearr_15559_17121[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (27))){
var inst_15493 = (state_15552[(9)]);
var inst_15495 = (state_15552[(10)]);
var inst_15500 = (state_15552[(11)]);
var inst_15414 = (state_15552[(12)]);
var inst_15500__$1 = cljs.core._nth(inst_15493,inst_15495);
var inst_15501 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15500__$1,inst_15414,done);
var state_15552__$1 = (function (){var statearr_15560 = state_15552;
(statearr_15560[(11)] = inst_15500__$1);

return statearr_15560;
})();
if(cljs.core.truth_(inst_15501)){
var statearr_15561_17122 = state_15552__$1;
(statearr_15561_17122[(1)] = (30));

} else {
var statearr_15562_17123 = state_15552__$1;
(statearr_15562_17123[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (1))){
var state_15552__$1 = state_15552;
var statearr_15563_17124 = state_15552__$1;
(statearr_15563_17124[(2)] = null);

(statearr_15563_17124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (24))){
var inst_15446 = (state_15552[(7)]);
var inst_15468 = (state_15552[(2)]);
var inst_15469 = cljs.core.next(inst_15446);
var inst_15423 = inst_15469;
var inst_15424 = null;
var inst_15425 = (0);
var inst_15426 = (0);
var state_15552__$1 = (function (){var statearr_15564 = state_15552;
(statearr_15564[(13)] = inst_15468);

(statearr_15564[(14)] = inst_15423);

(statearr_15564[(15)] = inst_15424);

(statearr_15564[(16)] = inst_15425);

(statearr_15564[(17)] = inst_15426);

return statearr_15564;
})();
var statearr_15565_17125 = state_15552__$1;
(statearr_15565_17125[(2)] = null);

(statearr_15565_17125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (39))){
var state_15552__$1 = state_15552;
var statearr_15569_17126 = state_15552__$1;
(statearr_15569_17126[(2)] = null);

(statearr_15569_17126[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (4))){
var inst_15414 = (state_15552[(12)]);
var inst_15414__$1 = (state_15552[(2)]);
var inst_15415 = (inst_15414__$1 == null);
var state_15552__$1 = (function (){var statearr_15570 = state_15552;
(statearr_15570[(12)] = inst_15414__$1);

return statearr_15570;
})();
if(cljs.core.truth_(inst_15415)){
var statearr_15571_17130 = state_15552__$1;
(statearr_15571_17130[(1)] = (5));

} else {
var statearr_15573_17131 = state_15552__$1;
(statearr_15573_17131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (15))){
var inst_15426 = (state_15552[(17)]);
var inst_15423 = (state_15552[(14)]);
var inst_15424 = (state_15552[(15)]);
var inst_15425 = (state_15552[(16)]);
var inst_15442 = (state_15552[(2)]);
var inst_15443 = (inst_15426 + (1));
var tmp15566 = inst_15423;
var tmp15567 = inst_15425;
var tmp15568 = inst_15424;
var inst_15423__$1 = tmp15566;
var inst_15424__$1 = tmp15568;
var inst_15425__$1 = tmp15567;
var inst_15426__$1 = inst_15443;
var state_15552__$1 = (function (){var statearr_15575 = state_15552;
(statearr_15575[(18)] = inst_15442);

(statearr_15575[(14)] = inst_15423__$1);

(statearr_15575[(15)] = inst_15424__$1);

(statearr_15575[(16)] = inst_15425__$1);

(statearr_15575[(17)] = inst_15426__$1);

return statearr_15575;
})();
var statearr_15576_17135 = state_15552__$1;
(statearr_15576_17135[(2)] = null);

(statearr_15576_17135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (21))){
var inst_15473 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15580_17137 = state_15552__$1;
(statearr_15580_17137[(2)] = inst_15473);

(statearr_15580_17137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (31))){
var inst_15500 = (state_15552[(11)]);
var inst_15504 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15500);
var state_15552__$1 = state_15552;
var statearr_15581_17138 = state_15552__$1;
(statearr_15581_17138[(2)] = inst_15504);

(statearr_15581_17138[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (32))){
var inst_15495 = (state_15552[(10)]);
var inst_15492 = (state_15552[(19)]);
var inst_15493 = (state_15552[(9)]);
var inst_15494 = (state_15552[(20)]);
var inst_15506 = (state_15552[(2)]);
var inst_15507 = (inst_15495 + (1));
var tmp15577 = inst_15493;
var tmp15578 = inst_15494;
var tmp15579 = inst_15492;
var inst_15492__$1 = tmp15579;
var inst_15493__$1 = tmp15577;
var inst_15494__$1 = tmp15578;
var inst_15495__$1 = inst_15507;
var state_15552__$1 = (function (){var statearr_15582 = state_15552;
(statearr_15582[(21)] = inst_15506);

(statearr_15582[(19)] = inst_15492__$1);

(statearr_15582[(9)] = inst_15493__$1);

(statearr_15582[(20)] = inst_15494__$1);

(statearr_15582[(10)] = inst_15495__$1);

return statearr_15582;
})();
var statearr_15583_17139 = state_15552__$1;
(statearr_15583_17139[(2)] = null);

(statearr_15583_17139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (40))){
var inst_15521 = (state_15552[(22)]);
var inst_15525 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15521);
var state_15552__$1 = state_15552;
var statearr_15584_17141 = state_15552__$1;
(statearr_15584_17141[(2)] = inst_15525);

(statearr_15584_17141[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (33))){
var inst_15511 = (state_15552[(23)]);
var inst_15513 = cljs.core.chunked_seq_QMARK_(inst_15511);
var state_15552__$1 = state_15552;
if(inst_15513){
var statearr_15585_17142 = state_15552__$1;
(statearr_15585_17142[(1)] = (36));

} else {
var statearr_15586_17144 = state_15552__$1;
(statearr_15586_17144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (13))){
var inst_15435 = (state_15552[(24)]);
var inst_15439 = cljs.core.async.close_BANG_(inst_15435);
var state_15552__$1 = state_15552;
var statearr_15587_17145 = state_15552__$1;
(statearr_15587_17145[(2)] = inst_15439);

(statearr_15587_17145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (22))){
var inst_15461 = (state_15552[(8)]);
var inst_15465 = cljs.core.async.close_BANG_(inst_15461);
var state_15552__$1 = state_15552;
var statearr_15588_17146 = state_15552__$1;
(statearr_15588_17146[(2)] = inst_15465);

(statearr_15588_17146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (36))){
var inst_15511 = (state_15552[(23)]);
var inst_15515 = cljs.core.chunk_first(inst_15511);
var inst_15516 = cljs.core.chunk_rest(inst_15511);
var inst_15518 = cljs.core.count(inst_15515);
var inst_15492 = inst_15516;
var inst_15493 = inst_15515;
var inst_15494 = inst_15518;
var inst_15495 = (0);
var state_15552__$1 = (function (){var statearr_15589 = state_15552;
(statearr_15589[(19)] = inst_15492);

(statearr_15589[(9)] = inst_15493);

(statearr_15589[(20)] = inst_15494);

(statearr_15589[(10)] = inst_15495);

return statearr_15589;
})();
var statearr_15590_17148 = state_15552__$1;
(statearr_15590_17148[(2)] = null);

(statearr_15590_17148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (41))){
var inst_15511 = (state_15552[(23)]);
var inst_15527 = (state_15552[(2)]);
var inst_15528 = cljs.core.next(inst_15511);
var inst_15492 = inst_15528;
var inst_15493 = null;
var inst_15494 = (0);
var inst_15495 = (0);
var state_15552__$1 = (function (){var statearr_15591 = state_15552;
(statearr_15591[(25)] = inst_15527);

(statearr_15591[(19)] = inst_15492);

(statearr_15591[(9)] = inst_15493);

(statearr_15591[(20)] = inst_15494);

(statearr_15591[(10)] = inst_15495);

return statearr_15591;
})();
var statearr_15592_17149 = state_15552__$1;
(statearr_15592_17149[(2)] = null);

(statearr_15592_17149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (43))){
var state_15552__$1 = state_15552;
var statearr_15597_17151 = state_15552__$1;
(statearr_15597_17151[(2)] = null);

(statearr_15597_17151[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (29))){
var inst_15536 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15602_17152 = state_15552__$1;
(statearr_15602_17152[(2)] = inst_15536);

(statearr_15602_17152[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (44))){
var inst_15545 = (state_15552[(2)]);
var state_15552__$1 = (function (){var statearr_15607 = state_15552;
(statearr_15607[(26)] = inst_15545);

return statearr_15607;
})();
var statearr_15608_17153 = state_15552__$1;
(statearr_15608_17153[(2)] = null);

(statearr_15608_17153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (6))){
var inst_15484 = (state_15552[(27)]);
var inst_15483 = cljs.core.deref(cs);
var inst_15484__$1 = cljs.core.keys(inst_15483);
var inst_15485 = cljs.core.count(inst_15484__$1);
var inst_15486 = cljs.core.reset_BANG_(dctr,inst_15485);
var inst_15491 = cljs.core.seq(inst_15484__$1);
var inst_15492 = inst_15491;
var inst_15493 = null;
var inst_15494 = (0);
var inst_15495 = (0);
var state_15552__$1 = (function (){var statearr_15611 = state_15552;
(statearr_15611[(27)] = inst_15484__$1);

(statearr_15611[(28)] = inst_15486);

(statearr_15611[(19)] = inst_15492);

(statearr_15611[(9)] = inst_15493);

(statearr_15611[(20)] = inst_15494);

(statearr_15611[(10)] = inst_15495);

return statearr_15611;
})();
var statearr_15612_17154 = state_15552__$1;
(statearr_15612_17154[(2)] = null);

(statearr_15612_17154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (28))){
var inst_15492 = (state_15552[(19)]);
var inst_15511 = (state_15552[(23)]);
var inst_15511__$1 = cljs.core.seq(inst_15492);
var state_15552__$1 = (function (){var statearr_15613 = state_15552;
(statearr_15613[(23)] = inst_15511__$1);

return statearr_15613;
})();
if(inst_15511__$1){
var statearr_15614_17155 = state_15552__$1;
(statearr_15614_17155[(1)] = (33));

} else {
var statearr_15615_17156 = state_15552__$1;
(statearr_15615_17156[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (25))){
var inst_15495 = (state_15552[(10)]);
var inst_15494 = (state_15552[(20)]);
var inst_15497 = (inst_15495 < inst_15494);
var inst_15498 = inst_15497;
var state_15552__$1 = state_15552;
if(cljs.core.truth_(inst_15498)){
var statearr_15616_17158 = state_15552__$1;
(statearr_15616_17158[(1)] = (27));

} else {
var statearr_15617_17159 = state_15552__$1;
(statearr_15617_17159[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (34))){
var state_15552__$1 = state_15552;
var statearr_15619_17160 = state_15552__$1;
(statearr_15619_17160[(2)] = null);

(statearr_15619_17160[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (17))){
var state_15552__$1 = state_15552;
var statearr_15620_17161 = state_15552__$1;
(statearr_15620_17161[(2)] = null);

(statearr_15620_17161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (3))){
var inst_15550 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15552__$1,inst_15550);
} else {
if((state_val_15553 === (12))){
var inst_15478 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15621_17162 = state_15552__$1;
(statearr_15621_17162[(2)] = inst_15478);

(statearr_15621_17162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (2))){
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15552__$1,(4),ch);
} else {
if((state_val_15553 === (23))){
var state_15552__$1 = state_15552;
var statearr_15626_17163 = state_15552__$1;
(statearr_15626_17163[(2)] = null);

(statearr_15626_17163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (35))){
var inst_15534 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15627_17164 = state_15552__$1;
(statearr_15627_17164[(2)] = inst_15534);

(statearr_15627_17164[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (19))){
var inst_15446 = (state_15552[(7)]);
var inst_15452 = cljs.core.chunk_first(inst_15446);
var inst_15453 = cljs.core.chunk_rest(inst_15446);
var inst_15454 = cljs.core.count(inst_15452);
var inst_15423 = inst_15453;
var inst_15424 = inst_15452;
var inst_15425 = inst_15454;
var inst_15426 = (0);
var state_15552__$1 = (function (){var statearr_15628 = state_15552;
(statearr_15628[(14)] = inst_15423);

(statearr_15628[(15)] = inst_15424);

(statearr_15628[(16)] = inst_15425);

(statearr_15628[(17)] = inst_15426);

return statearr_15628;
})();
var statearr_15629_17165 = state_15552__$1;
(statearr_15629_17165[(2)] = null);

(statearr_15629_17165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (11))){
var inst_15423 = (state_15552[(14)]);
var inst_15446 = (state_15552[(7)]);
var inst_15446__$1 = cljs.core.seq(inst_15423);
var state_15552__$1 = (function (){var statearr_15632 = state_15552;
(statearr_15632[(7)] = inst_15446__$1);

return statearr_15632;
})();
if(inst_15446__$1){
var statearr_15633_17166 = state_15552__$1;
(statearr_15633_17166[(1)] = (16));

} else {
var statearr_15634_17167 = state_15552__$1;
(statearr_15634_17167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (9))){
var inst_15480 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15636_17168 = state_15552__$1;
(statearr_15636_17168[(2)] = inst_15480);

(statearr_15636_17168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (5))){
var inst_15421 = cljs.core.deref(cs);
var inst_15422 = cljs.core.seq(inst_15421);
var inst_15423 = inst_15422;
var inst_15424 = null;
var inst_15425 = (0);
var inst_15426 = (0);
var state_15552__$1 = (function (){var statearr_15637 = state_15552;
(statearr_15637[(14)] = inst_15423);

(statearr_15637[(15)] = inst_15424);

(statearr_15637[(16)] = inst_15425);

(statearr_15637[(17)] = inst_15426);

return statearr_15637;
})();
var statearr_15638_17169 = state_15552__$1;
(statearr_15638_17169[(2)] = null);

(statearr_15638_17169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (14))){
var state_15552__$1 = state_15552;
var statearr_15639_17170 = state_15552__$1;
(statearr_15639_17170[(2)] = null);

(statearr_15639_17170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (45))){
var inst_15542 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15644_17171 = state_15552__$1;
(statearr_15644_17171[(2)] = inst_15542);

(statearr_15644_17171[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (26))){
var inst_15484 = (state_15552[(27)]);
var inst_15538 = (state_15552[(2)]);
var inst_15539 = cljs.core.seq(inst_15484);
var state_15552__$1 = (function (){var statearr_15650 = state_15552;
(statearr_15650[(29)] = inst_15538);

return statearr_15650;
})();
if(inst_15539){
var statearr_15653_17172 = state_15552__$1;
(statearr_15653_17172[(1)] = (42));

} else {
var statearr_15654_17173 = state_15552__$1;
(statearr_15654_17173[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (16))){
var inst_15446 = (state_15552[(7)]);
var inst_15448 = cljs.core.chunked_seq_QMARK_(inst_15446);
var state_15552__$1 = state_15552;
if(inst_15448){
var statearr_15656_17174 = state_15552__$1;
(statearr_15656_17174[(1)] = (19));

} else {
var statearr_15658_17175 = state_15552__$1;
(statearr_15658_17175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (38))){
var inst_15531 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15662_17176 = state_15552__$1;
(statearr_15662_17176[(2)] = inst_15531);

(statearr_15662_17176[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (30))){
var state_15552__$1 = state_15552;
var statearr_15665_17181 = state_15552__$1;
(statearr_15665_17181[(2)] = null);

(statearr_15665_17181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (10))){
var inst_15424 = (state_15552[(15)]);
var inst_15426 = (state_15552[(17)]);
var inst_15434 = cljs.core._nth(inst_15424,inst_15426);
var inst_15435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15434,(0),null);
var inst_15436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15434,(1),null);
var state_15552__$1 = (function (){var statearr_15666 = state_15552;
(statearr_15666[(24)] = inst_15435);

return statearr_15666;
})();
if(cljs.core.truth_(inst_15436)){
var statearr_15667_17183 = state_15552__$1;
(statearr_15667_17183[(1)] = (13));

} else {
var statearr_15668_17184 = state_15552__$1;
(statearr_15668_17184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (18))){
var inst_15476 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15672_17185 = state_15552__$1;
(statearr_15672_17185[(2)] = inst_15476);

(statearr_15672_17185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (42))){
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15552__$1,(45),dchan);
} else {
if((state_val_15553 === (37))){
var inst_15511 = (state_15552[(23)]);
var inst_15521 = (state_15552[(22)]);
var inst_15414 = (state_15552[(12)]);
var inst_15521__$1 = cljs.core.first(inst_15511);
var inst_15522 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15521__$1,inst_15414,done);
var state_15552__$1 = (function (){var statearr_15676 = state_15552;
(statearr_15676[(22)] = inst_15521__$1);

return statearr_15676;
})();
if(cljs.core.truth_(inst_15522)){
var statearr_15677_17187 = state_15552__$1;
(statearr_15677_17187[(1)] = (39));

} else {
var statearr_15678_17188 = state_15552__$1;
(statearr_15678_17188[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15553 === (8))){
var inst_15426 = (state_15552[(17)]);
var inst_15425 = (state_15552[(16)]);
var inst_15428 = (inst_15426 < inst_15425);
var inst_15429 = inst_15428;
var state_15552__$1 = state_15552;
if(cljs.core.truth_(inst_15429)){
var statearr_15683_17190 = state_15552__$1;
(statearr_15683_17190[(1)] = (10));

} else {
var statearr_15684_17192 = state_15552__$1;
(statearr_15684_17192[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14603__auto__ = null;
var cljs$core$async$mult_$_state_machine__14603__auto____0 = (function (){
var statearr_15685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15685[(0)] = cljs$core$async$mult_$_state_machine__14603__auto__);

(statearr_15685[(1)] = (1));

return statearr_15685;
});
var cljs$core$async$mult_$_state_machine__14603__auto____1 = (function (state_15552){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15552);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15686){var ex__14606__auto__ = e15686;
var statearr_15687_17193 = state_15552;
(statearr_15687_17193[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15552[(4)]))){
var statearr_15688_17194 = state_15552;
(statearr_15688_17194[(1)] = cljs.core.first((state_15552[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17196 = state_15552;
state_15552 = G__17196;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14603__auto__ = function(state_15552){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14603__auto____1.call(this,state_15552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14603__auto____0;
cljs$core$async$mult_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14603__auto____1;
return cljs$core$async$mult_$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15689 = f__14687__auto__();
(statearr_15689[(6)] = c__14686__auto___17118);

return statearr_15689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15693 = arguments.length;
switch (G__15693) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17202 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17202(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17203 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17203(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17204 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17204(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17211 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17211(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17213 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17213(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17214 = arguments.length;
var i__5877__auto___17215 = (0);
while(true){
if((i__5877__auto___17215 < len__5876__auto___17214)){
args__5882__auto__.push((arguments[i__5877__auto___17215]));

var G__17216 = (i__5877__auto___17215 + (1));
i__5877__auto___17215 = G__17216;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15706){
var map__15707 = p__15706;
var map__15707__$1 = cljs.core.__destructure_map(map__15707);
var opts = map__15707__$1;
var statearr_15708_17217 = state;
(statearr_15708_17217[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15709_17218 = state;
(statearr_15709_17218[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_15710_17224 = state;
(statearr_15710_17224[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15702){
var G__15703 = cljs.core.first(seq15702);
var seq15702__$1 = cljs.core.next(seq15702);
var G__15704 = cljs.core.first(seq15702__$1);
var seq15702__$2 = cljs.core.next(seq15702__$1);
var G__15705 = cljs.core.first(seq15702__$2);
var seq15702__$3 = cljs.core.next(seq15702__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15703,G__15704,G__15705,seq15702__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15711 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15712){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15712 = meta15712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15713,meta15712__$1){
var self__ = this;
var _15713__$1 = this;
return (new cljs.core.async.t_cljs$core$async15711(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15712__$1));
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15713){
var self__ = this;
var _15713__$1 = this;
return self__.meta15712;
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15711.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15712","meta15712",-149182391,null)], null);
}));

(cljs.core.async.t_cljs$core$async15711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15711");

(cljs.core.async.t_cljs$core$async15711.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15711.
 */
cljs.core.async.__GT_t_cljs$core$async15711 = (function cljs$core$async$__GT_t_cljs$core$async15711(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15712){
return (new cljs.core.async.t_cljs$core$async15711(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15712));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15711(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14686__auto___17241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15799){
var state_val_15800 = (state_15799[(1)]);
if((state_val_15800 === (7))){
var inst_15759 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15759)){
var statearr_15801_17242 = state_15799__$1;
(statearr_15801_17242[(1)] = (8));

} else {
var statearr_15802_17243 = state_15799__$1;
(statearr_15802_17243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (20))){
var inst_15752 = (state_15799[(7)]);
var state_15799__$1 = state_15799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15799__$1,(23),out,inst_15752);
} else {
if((state_val_15800 === (1))){
var inst_15729 = calc_state();
var inst_15730 = cljs.core.__destructure_map(inst_15729);
var inst_15731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15730,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15730,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15730,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15734 = inst_15729;
var state_15799__$1 = (function (){var statearr_15807 = state_15799;
(statearr_15807[(8)] = inst_15731);

(statearr_15807[(9)] = inst_15732);

(statearr_15807[(10)] = inst_15733);

(statearr_15807[(11)] = inst_15734);

return statearr_15807;
})();
var statearr_15808_17247 = state_15799__$1;
(statearr_15808_17247[(2)] = null);

(statearr_15808_17247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (24))){
var inst_15743 = (state_15799[(12)]);
var inst_15734 = inst_15743;
var state_15799__$1 = (function (){var statearr_15809 = state_15799;
(statearr_15809[(11)] = inst_15734);

return statearr_15809;
})();
var statearr_15810_17248 = state_15799__$1;
(statearr_15810_17248[(2)] = null);

(statearr_15810_17248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (4))){
var inst_15752 = (state_15799[(7)]);
var inst_15754 = (state_15799[(13)]);
var inst_15751 = (state_15799[(2)]);
var inst_15752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15751,(0),null);
var inst_15753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15751,(1),null);
var inst_15754__$1 = (inst_15752__$1 == null);
var state_15799__$1 = (function (){var statearr_15811 = state_15799;
(statearr_15811[(7)] = inst_15752__$1);

(statearr_15811[(14)] = inst_15753);

(statearr_15811[(13)] = inst_15754__$1);

return statearr_15811;
})();
if(cljs.core.truth_(inst_15754__$1)){
var statearr_15812_17251 = state_15799__$1;
(statearr_15812_17251[(1)] = (5));

} else {
var statearr_15813_17252 = state_15799__$1;
(statearr_15813_17252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (15))){
var inst_15744 = (state_15799[(15)]);
var inst_15773 = (state_15799[(16)]);
var inst_15773__$1 = cljs.core.empty_QMARK_(inst_15744);
var state_15799__$1 = (function (){var statearr_15814 = state_15799;
(statearr_15814[(16)] = inst_15773__$1);

return statearr_15814;
})();
if(inst_15773__$1){
var statearr_15815_17255 = state_15799__$1;
(statearr_15815_17255[(1)] = (17));

} else {
var statearr_15816_17256 = state_15799__$1;
(statearr_15816_17256[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (21))){
var inst_15743 = (state_15799[(12)]);
var inst_15734 = inst_15743;
var state_15799__$1 = (function (){var statearr_15817 = state_15799;
(statearr_15817[(11)] = inst_15734);

return statearr_15817;
})();
var statearr_15818_17257 = state_15799__$1;
(statearr_15818_17257[(2)] = null);

(statearr_15818_17257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (13))){
var inst_15766 = (state_15799[(2)]);
var inst_15767 = calc_state();
var inst_15734 = inst_15767;
var state_15799__$1 = (function (){var statearr_15819 = state_15799;
(statearr_15819[(17)] = inst_15766);

(statearr_15819[(11)] = inst_15734);

return statearr_15819;
})();
var statearr_15820_17258 = state_15799__$1;
(statearr_15820_17258[(2)] = null);

(statearr_15820_17258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (22))){
var inst_15793 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15822_17259 = state_15799__$1;
(statearr_15822_17259[(2)] = inst_15793);

(statearr_15822_17259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (6))){
var inst_15753 = (state_15799[(14)]);
var inst_15757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15753,change);
var state_15799__$1 = state_15799;
var statearr_15823_17260 = state_15799__$1;
(statearr_15823_17260[(2)] = inst_15757);

(statearr_15823_17260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (25))){
var state_15799__$1 = state_15799;
var statearr_15824_17263 = state_15799__$1;
(statearr_15824_17263[(2)] = null);

(statearr_15824_17263[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (17))){
var inst_15745 = (state_15799[(18)]);
var inst_15753 = (state_15799[(14)]);
var inst_15775 = (inst_15745.cljs$core$IFn$_invoke$arity$1 ? inst_15745.cljs$core$IFn$_invoke$arity$1(inst_15753) : inst_15745.call(null,inst_15753));
var inst_15776 = cljs.core.not(inst_15775);
var state_15799__$1 = state_15799;
var statearr_15825_17264 = state_15799__$1;
(statearr_15825_17264[(2)] = inst_15776);

(statearr_15825_17264[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (3))){
var inst_15797 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15799__$1,inst_15797);
} else {
if((state_val_15800 === (12))){
var state_15799__$1 = state_15799;
var statearr_15826_17265 = state_15799__$1;
(statearr_15826_17265[(2)] = null);

(statearr_15826_17265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (2))){
var inst_15734 = (state_15799[(11)]);
var inst_15743 = (state_15799[(12)]);
var inst_15743__$1 = cljs.core.__destructure_map(inst_15734);
var inst_15744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15743__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15743__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15743__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15799__$1 = (function (){var statearr_15827 = state_15799;
(statearr_15827[(12)] = inst_15743__$1);

(statearr_15827[(15)] = inst_15744);

(statearr_15827[(18)] = inst_15745);

return statearr_15827;
})();
return cljs.core.async.ioc_alts_BANG_(state_15799__$1,(4),inst_15746);
} else {
if((state_val_15800 === (23))){
var inst_15784 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15784)){
var statearr_15828_17267 = state_15799__$1;
(statearr_15828_17267[(1)] = (24));

} else {
var statearr_15829_17268 = state_15799__$1;
(statearr_15829_17268[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (19))){
var inst_15779 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15830_17269 = state_15799__$1;
(statearr_15830_17269[(2)] = inst_15779);

(statearr_15830_17269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (11))){
var inst_15753 = (state_15799[(14)]);
var inst_15763 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15753);
var state_15799__$1 = state_15799;
var statearr_15831_17270 = state_15799__$1;
(statearr_15831_17270[(2)] = inst_15763);

(statearr_15831_17270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (9))){
var inst_15744 = (state_15799[(15)]);
var inst_15753 = (state_15799[(14)]);
var inst_15770 = (state_15799[(19)]);
var inst_15770__$1 = (inst_15744.cljs$core$IFn$_invoke$arity$1 ? inst_15744.cljs$core$IFn$_invoke$arity$1(inst_15753) : inst_15744.call(null,inst_15753));
var state_15799__$1 = (function (){var statearr_15832 = state_15799;
(statearr_15832[(19)] = inst_15770__$1);

return statearr_15832;
})();
if(cljs.core.truth_(inst_15770__$1)){
var statearr_15833_17271 = state_15799__$1;
(statearr_15833_17271[(1)] = (14));

} else {
var statearr_15834_17272 = state_15799__$1;
(statearr_15834_17272[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (5))){
var inst_15754 = (state_15799[(13)]);
var state_15799__$1 = state_15799;
var statearr_15835_17273 = state_15799__$1;
(statearr_15835_17273[(2)] = inst_15754);

(statearr_15835_17273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (14))){
var inst_15770 = (state_15799[(19)]);
var state_15799__$1 = state_15799;
var statearr_15837_17274 = state_15799__$1;
(statearr_15837_17274[(2)] = inst_15770);

(statearr_15837_17274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (26))){
var inst_15789 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15838_17280 = state_15799__$1;
(statearr_15838_17280[(2)] = inst_15789);

(statearr_15838_17280[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (16))){
var inst_15781 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15781)){
var statearr_15839_17281 = state_15799__$1;
(statearr_15839_17281[(1)] = (20));

} else {
var statearr_15840_17282 = state_15799__$1;
(statearr_15840_17282[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (10))){
var inst_15795 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15842_17283 = state_15799__$1;
(statearr_15842_17283[(2)] = inst_15795);

(statearr_15842_17283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (18))){
var inst_15773 = (state_15799[(16)]);
var state_15799__$1 = state_15799;
var statearr_15843_17284 = state_15799__$1;
(statearr_15843_17284[(2)] = inst_15773);

(statearr_15843_17284[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (8))){
var inst_15752 = (state_15799[(7)]);
var inst_15761 = (inst_15752 == null);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15761)){
var statearr_15845_17286 = state_15799__$1;
(statearr_15845_17286[(1)] = (11));

} else {
var statearr_15846_17287 = state_15799__$1;
(statearr_15846_17287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14603__auto__ = null;
var cljs$core$async$mix_$_state_machine__14603__auto____0 = (function (){
var statearr_15847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15847[(0)] = cljs$core$async$mix_$_state_machine__14603__auto__);

(statearr_15847[(1)] = (1));

return statearr_15847;
});
var cljs$core$async$mix_$_state_machine__14603__auto____1 = (function (state_15799){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15799);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e15848){var ex__14606__auto__ = e15848;
var statearr_15849_17288 = state_15799;
(statearr_15849_17288[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15799[(4)]))){
var statearr_15850_17289 = state_15799;
(statearr_15850_17289[(1)] = cljs.core.first((state_15799[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17290 = state_15799;
state_15799 = G__17290;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14603__auto__ = function(state_15799){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14603__auto____1.call(this,state_15799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14603__auto____0;
cljs$core$async$mix_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14603__auto____1;
return cljs$core$async$mix_$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_15851 = f__14687__auto__();
(statearr_15851[(6)] = c__14686__auto___17241);

return statearr_15851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17291 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17291(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17294 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17294(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17297 = (function() {
var G__17298 = null;
var G__17298__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17298__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17298 = function(p,v){
switch(arguments.length){
case 1:
return G__17298__1.call(this,p);
case 2:
return G__17298__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17298.cljs$core$IFn$_invoke$arity$1 = G__17298__1;
G__17298.cljs$core$IFn$_invoke$arity$2 = G__17298__2;
return G__17298;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15858 = arguments.length;
switch (G__15858) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17297(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17297(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15865 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15866){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15866 = meta15866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15867,meta15866__$1){
var self__ = this;
var _15867__$1 = this;
return (new cljs.core.async.t_cljs$core$async15865(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15866__$1));
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15867){
var self__ = this;
var _15867__$1 = this;
return self__.meta15866;
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15866","meta15866",32204740,null)], null);
}));

(cljs.core.async.t_cljs$core$async15865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15865");

(cljs.core.async.t_cljs$core$async15865.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15865.
 */
cljs.core.async.__GT_t_cljs$core$async15865 = (function cljs$core$async$__GT_t_cljs$core$async15865(ch,topic_fn,buf_fn,mults,ensure_mult,meta15866){
return (new cljs.core.async.t_cljs$core$async15865(ch,topic_fn,buf_fn,mults,ensure_mult,meta15866));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15864 = arguments.length;
switch (G__15864) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15860_SHARP_){
if(cljs.core.truth_((p1__15860_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15860_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15860_SHARP_.call(null,topic)))){
return p1__15860_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15860_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15865(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14686__auto___17310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_15954){
var state_val_15955 = (state_15954[(1)]);
if((state_val_15955 === (7))){
var inst_15950 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_15958_17311 = state_15954__$1;
(statearr_15958_17311[(2)] = inst_15950);

(statearr_15958_17311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (20))){
var state_15954__$1 = state_15954;
var statearr_15959_17313 = state_15954__$1;
(statearr_15959_17313[(2)] = null);

(statearr_15959_17313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (1))){
var state_15954__$1 = state_15954;
var statearr_15962_17314 = state_15954__$1;
(statearr_15962_17314[(2)] = null);

(statearr_15962_17314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (24))){
var inst_15933 = (state_15954[(7)]);
var inst_15942 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15933);
var state_15954__$1 = state_15954;
var statearr_15963_17315 = state_15954__$1;
(statearr_15963_17315[(2)] = inst_15942);

(statearr_15963_17315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (4))){
var inst_15882 = (state_15954[(8)]);
var inst_15882__$1 = (state_15954[(2)]);
var inst_15883 = (inst_15882__$1 == null);
var state_15954__$1 = (function (){var statearr_15966 = state_15954;
(statearr_15966[(8)] = inst_15882__$1);

return statearr_15966;
})();
if(cljs.core.truth_(inst_15883)){
var statearr_15967_17316 = state_15954__$1;
(statearr_15967_17316[(1)] = (5));

} else {
var statearr_15968_17317 = state_15954__$1;
(statearr_15968_17317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (15))){
var inst_15926 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_15971_17318 = state_15954__$1;
(statearr_15971_17318[(2)] = inst_15926);

(statearr_15971_17318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (21))){
var inst_15947 = (state_15954[(2)]);
var state_15954__$1 = (function (){var statearr_15972 = state_15954;
(statearr_15972[(9)] = inst_15947);

return statearr_15972;
})();
var statearr_15973_17319 = state_15954__$1;
(statearr_15973_17319[(2)] = null);

(statearr_15973_17319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (13))){
var inst_15906 = (state_15954[(10)]);
var inst_15908 = cljs.core.chunked_seq_QMARK_(inst_15906);
var state_15954__$1 = state_15954;
if(inst_15908){
var statearr_15974_17320 = state_15954__$1;
(statearr_15974_17320[(1)] = (16));

} else {
var statearr_15975_17321 = state_15954__$1;
(statearr_15975_17321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (22))){
var inst_15939 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
if(cljs.core.truth_(inst_15939)){
var statearr_15976_17322 = state_15954__$1;
(statearr_15976_17322[(1)] = (23));

} else {
var statearr_15977_17323 = state_15954__$1;
(statearr_15977_17323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (6))){
var inst_15882 = (state_15954[(8)]);
var inst_15933 = (state_15954[(7)]);
var inst_15935 = (state_15954[(11)]);
var inst_15933__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15882) : topic_fn.call(null,inst_15882));
var inst_15934 = cljs.core.deref(mults);
var inst_15935__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15934,inst_15933__$1);
var state_15954__$1 = (function (){var statearr_15978 = state_15954;
(statearr_15978[(7)] = inst_15933__$1);

(statearr_15978[(11)] = inst_15935__$1);

return statearr_15978;
})();
if(cljs.core.truth_(inst_15935__$1)){
var statearr_15979_17324 = state_15954__$1;
(statearr_15979_17324[(1)] = (19));

} else {
var statearr_15980_17325 = state_15954__$1;
(statearr_15980_17325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (25))){
var inst_15944 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_15981_17326 = state_15954__$1;
(statearr_15981_17326[(2)] = inst_15944);

(statearr_15981_17326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (17))){
var inst_15906 = (state_15954[(10)]);
var inst_15915 = cljs.core.first(inst_15906);
var inst_15916 = cljs.core.async.muxch_STAR_(inst_15915);
var inst_15917 = cljs.core.async.close_BANG_(inst_15916);
var inst_15920 = cljs.core.next(inst_15906);
var inst_15892 = inst_15920;
var inst_15893 = null;
var inst_15894 = (0);
var inst_15895 = (0);
var state_15954__$1 = (function (){var statearr_15983 = state_15954;
(statearr_15983[(12)] = inst_15917);

(statearr_15983[(13)] = inst_15892);

(statearr_15983[(14)] = inst_15893);

(statearr_15983[(15)] = inst_15894);

(statearr_15983[(16)] = inst_15895);

return statearr_15983;
})();
var statearr_15984_17327 = state_15954__$1;
(statearr_15984_17327[(2)] = null);

(statearr_15984_17327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (3))){
var inst_15952 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15954__$1,inst_15952);
} else {
if((state_val_15955 === (12))){
var inst_15928 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_15985_17328 = state_15954__$1;
(statearr_15985_17328[(2)] = inst_15928);

(statearr_15985_17328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (2))){
var state_15954__$1 = state_15954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15954__$1,(4),ch);
} else {
if((state_val_15955 === (23))){
var state_15954__$1 = state_15954;
var statearr_15988_17329 = state_15954__$1;
(statearr_15988_17329[(2)] = null);

(statearr_15988_17329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (19))){
var inst_15935 = (state_15954[(11)]);
var inst_15882 = (state_15954[(8)]);
var inst_15937 = cljs.core.async.muxch_STAR_(inst_15935);
var state_15954__$1 = state_15954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15954__$1,(22),inst_15937,inst_15882);
} else {
if((state_val_15955 === (11))){
var inst_15892 = (state_15954[(13)]);
var inst_15906 = (state_15954[(10)]);
var inst_15906__$1 = cljs.core.seq(inst_15892);
var state_15954__$1 = (function (){var statearr_15991 = state_15954;
(statearr_15991[(10)] = inst_15906__$1);

return statearr_15991;
})();
if(inst_15906__$1){
var statearr_15992_17333 = state_15954__$1;
(statearr_15992_17333[(1)] = (13));

} else {
var statearr_15993_17334 = state_15954__$1;
(statearr_15993_17334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (9))){
var inst_15930 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_15994_17335 = state_15954__$1;
(statearr_15994_17335[(2)] = inst_15930);

(statearr_15994_17335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (5))){
var inst_15889 = cljs.core.deref(mults);
var inst_15890 = cljs.core.vals(inst_15889);
var inst_15891 = cljs.core.seq(inst_15890);
var inst_15892 = inst_15891;
var inst_15893 = null;
var inst_15894 = (0);
var inst_15895 = (0);
var state_15954__$1 = (function (){var statearr_15995 = state_15954;
(statearr_15995[(13)] = inst_15892);

(statearr_15995[(14)] = inst_15893);

(statearr_15995[(15)] = inst_15894);

(statearr_15995[(16)] = inst_15895);

return statearr_15995;
})();
var statearr_15996_17336 = state_15954__$1;
(statearr_15996_17336[(2)] = null);

(statearr_15996_17336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (14))){
var state_15954__$1 = state_15954;
var statearr_16000_17337 = state_15954__$1;
(statearr_16000_17337[(2)] = null);

(statearr_16000_17337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (16))){
var inst_15906 = (state_15954[(10)]);
var inst_15910 = cljs.core.chunk_first(inst_15906);
var inst_15911 = cljs.core.chunk_rest(inst_15906);
var inst_15912 = cljs.core.count(inst_15910);
var inst_15892 = inst_15911;
var inst_15893 = inst_15910;
var inst_15894 = inst_15912;
var inst_15895 = (0);
var state_15954__$1 = (function (){var statearr_16001 = state_15954;
(statearr_16001[(13)] = inst_15892);

(statearr_16001[(14)] = inst_15893);

(statearr_16001[(15)] = inst_15894);

(statearr_16001[(16)] = inst_15895);

return statearr_16001;
})();
var statearr_16002_17338 = state_15954__$1;
(statearr_16002_17338[(2)] = null);

(statearr_16002_17338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (10))){
var inst_15893 = (state_15954[(14)]);
var inst_15895 = (state_15954[(16)]);
var inst_15892 = (state_15954[(13)]);
var inst_15894 = (state_15954[(15)]);
var inst_15900 = cljs.core._nth(inst_15893,inst_15895);
var inst_15901 = cljs.core.async.muxch_STAR_(inst_15900);
var inst_15902 = cljs.core.async.close_BANG_(inst_15901);
var inst_15903 = (inst_15895 + (1));
var tmp15997 = inst_15893;
var tmp15998 = inst_15892;
var tmp15999 = inst_15894;
var inst_15892__$1 = tmp15998;
var inst_15893__$1 = tmp15997;
var inst_15894__$1 = tmp15999;
var inst_15895__$1 = inst_15903;
var state_15954__$1 = (function (){var statearr_16003 = state_15954;
(statearr_16003[(17)] = inst_15902);

(statearr_16003[(13)] = inst_15892__$1);

(statearr_16003[(14)] = inst_15893__$1);

(statearr_16003[(15)] = inst_15894__$1);

(statearr_16003[(16)] = inst_15895__$1);

return statearr_16003;
})();
var statearr_16004_17339 = state_15954__$1;
(statearr_16004_17339[(2)] = null);

(statearr_16004_17339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (18))){
var inst_15923 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_16005_17340 = state_15954__$1;
(statearr_16005_17340[(2)] = inst_15923);

(statearr_16005_17340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (8))){
var inst_15895 = (state_15954[(16)]);
var inst_15894 = (state_15954[(15)]);
var inst_15897 = (inst_15895 < inst_15894);
var inst_15898 = inst_15897;
var state_15954__$1 = state_15954;
if(cljs.core.truth_(inst_15898)){
var statearr_16006_17341 = state_15954__$1;
(statearr_16006_17341[(1)] = (10));

} else {
var statearr_16007_17342 = state_15954__$1;
(statearr_16007_17342[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16008[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16008[(1)] = (1));

return statearr_16008;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_15954){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_15954);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16009){var ex__14606__auto__ = e16009;
var statearr_16010_17347 = state_15954;
(statearr_16010_17347[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_15954[(4)]))){
var statearr_16011_17348 = state_15954;
(statearr_16011_17348[(1)] = cljs.core.first((state_15954[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17349 = state_15954;
state_15954 = G__17349;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_15954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_15954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16012 = f__14687__auto__();
(statearr_16012[(6)] = c__14686__auto___17310);

return statearr_16012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16014 = arguments.length;
switch (G__16014) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16021 = arguments.length;
switch (G__16021) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14686__auto___17353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16068){
var state_val_16069 = (state_16068[(1)]);
if((state_val_16069 === (7))){
var state_16068__$1 = state_16068;
var statearr_16070_17354 = state_16068__$1;
(statearr_16070_17354[(2)] = null);

(statearr_16070_17354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (1))){
var state_16068__$1 = state_16068;
var statearr_16071_17355 = state_16068__$1;
(statearr_16071_17355[(2)] = null);

(statearr_16071_17355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (4))){
var inst_16026 = (state_16068[(7)]);
var inst_16025 = (state_16068[(8)]);
var inst_16028 = (inst_16026 < inst_16025);
var state_16068__$1 = state_16068;
if(cljs.core.truth_(inst_16028)){
var statearr_16072_17356 = state_16068__$1;
(statearr_16072_17356[(1)] = (6));

} else {
var statearr_16073_17357 = state_16068__$1;
(statearr_16073_17357[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (15))){
var inst_16053 = (state_16068[(9)]);
var inst_16058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16053);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16068__$1,(17),out,inst_16058);
} else {
if((state_val_16069 === (13))){
var inst_16053 = (state_16068[(9)]);
var inst_16053__$1 = (state_16068[(2)]);
var inst_16054 = cljs.core.some(cljs.core.nil_QMARK_,inst_16053__$1);
var state_16068__$1 = (function (){var statearr_16074 = state_16068;
(statearr_16074[(9)] = inst_16053__$1);

return statearr_16074;
})();
if(cljs.core.truth_(inst_16054)){
var statearr_16075_17358 = state_16068__$1;
(statearr_16075_17358[(1)] = (14));

} else {
var statearr_16076_17359 = state_16068__$1;
(statearr_16076_17359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (6))){
var state_16068__$1 = state_16068;
var statearr_16077_17360 = state_16068__$1;
(statearr_16077_17360[(2)] = null);

(statearr_16077_17360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (17))){
var inst_16060 = (state_16068[(2)]);
var state_16068__$1 = (function (){var statearr_16079 = state_16068;
(statearr_16079[(10)] = inst_16060);

return statearr_16079;
})();
var statearr_16080_17361 = state_16068__$1;
(statearr_16080_17361[(2)] = null);

(statearr_16080_17361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (3))){
var inst_16066 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16068__$1,inst_16066);
} else {
if((state_val_16069 === (12))){
var _ = (function (){var statearr_16081 = state_16068;
(statearr_16081[(4)] = cljs.core.rest((state_16068[(4)])));

return statearr_16081;
})();
var state_16068__$1 = state_16068;
var ex16078 = (state_16068__$1[(2)]);
var statearr_16082_17362 = state_16068__$1;
(statearr_16082_17362[(5)] = ex16078);


if((ex16078 instanceof Object)){
var statearr_16083_17363 = state_16068__$1;
(statearr_16083_17363[(1)] = (11));

(statearr_16083_17363[(5)] = null);

} else {
throw ex16078;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (2))){
var inst_16024 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16025 = cnt;
var inst_16026 = (0);
var state_16068__$1 = (function (){var statearr_16084 = state_16068;
(statearr_16084[(11)] = inst_16024);

(statearr_16084[(8)] = inst_16025);

(statearr_16084[(7)] = inst_16026);

return statearr_16084;
})();
var statearr_16085_17364 = state_16068__$1;
(statearr_16085_17364[(2)] = null);

(statearr_16085_17364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (11))){
var inst_16030 = (state_16068[(2)]);
var inst_16031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16068__$1 = (function (){var statearr_16086 = state_16068;
(statearr_16086[(12)] = inst_16030);

return statearr_16086;
})();
var statearr_16087_17365 = state_16068__$1;
(statearr_16087_17365[(2)] = inst_16031);

(statearr_16087_17365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (9))){
var inst_16026 = (state_16068[(7)]);
var _ = (function (){var statearr_16088 = state_16068;
(statearr_16088[(4)] = cljs.core.cons((12),(state_16068[(4)])));

return statearr_16088;
})();
var inst_16038 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16026) : chs__$1.call(null,inst_16026));
var inst_16040 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16026) : done.call(null,inst_16026));
var inst_16041 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16038,inst_16040);
var ___$1 = (function (){var statearr_16089 = state_16068;
(statearr_16089[(4)] = cljs.core.rest((state_16068[(4)])));

return statearr_16089;
})();
var state_16068__$1 = state_16068;
var statearr_16090_17366 = state_16068__$1;
(statearr_16090_17366[(2)] = inst_16041);

(statearr_16090_17366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (5))){
var inst_16051 = (state_16068[(2)]);
var state_16068__$1 = (function (){var statearr_16091 = state_16068;
(statearr_16091[(13)] = inst_16051);

return statearr_16091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16068__$1,(13),dchan);
} else {
if((state_val_16069 === (14))){
var inst_16056 = cljs.core.async.close_BANG_(out);
var state_16068__$1 = state_16068;
var statearr_16092_17367 = state_16068__$1;
(statearr_16092_17367[(2)] = inst_16056);

(statearr_16092_17367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (16))){
var inst_16064 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16093_17368 = state_16068__$1;
(statearr_16093_17368[(2)] = inst_16064);

(statearr_16093_17368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (10))){
var inst_16026 = (state_16068[(7)]);
var inst_16044 = (state_16068[(2)]);
var inst_16045 = (inst_16026 + (1));
var inst_16026__$1 = inst_16045;
var state_16068__$1 = (function (){var statearr_16094 = state_16068;
(statearr_16094[(14)] = inst_16044);

(statearr_16094[(7)] = inst_16026__$1);

return statearr_16094;
})();
var statearr_16095_17369 = state_16068__$1;
(statearr_16095_17369[(2)] = null);

(statearr_16095_17369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16069 === (8))){
var inst_16049 = (state_16068[(2)]);
var state_16068__$1 = state_16068;
var statearr_16096_17370 = state_16068__$1;
(statearr_16096_17370[(2)] = inst_16049);

(statearr_16096_17370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16098[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16098[(1)] = (1));

return statearr_16098;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16068){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16068);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16099){var ex__14606__auto__ = e16099;
var statearr_16100_17375 = state_16068;
(statearr_16100_17375[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16068[(4)]))){
var statearr_16101_17376 = state_16068;
(statearr_16101_17376[(1)] = cljs.core.first((state_16068[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17377 = state_16068;
state_16068 = G__17377;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16102 = f__14687__auto__();
(statearr_16102[(6)] = c__14686__auto___17353);

return statearr_16102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16105 = arguments.length;
switch (G__16105) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14686__auto___17379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16137){
var state_val_16138 = (state_16137[(1)]);
if((state_val_16138 === (7))){
var inst_16116 = (state_16137[(7)]);
var inst_16117 = (state_16137[(8)]);
var inst_16116__$1 = (state_16137[(2)]);
var inst_16117__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16116__$1,(0),null);
var inst_16118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16116__$1,(1),null);
var inst_16119 = (inst_16117__$1 == null);
var state_16137__$1 = (function (){var statearr_16139 = state_16137;
(statearr_16139[(7)] = inst_16116__$1);

(statearr_16139[(8)] = inst_16117__$1);

(statearr_16139[(9)] = inst_16118);

return statearr_16139;
})();
if(cljs.core.truth_(inst_16119)){
var statearr_16140_17380 = state_16137__$1;
(statearr_16140_17380[(1)] = (8));

} else {
var statearr_16141_17381 = state_16137__$1;
(statearr_16141_17381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (1))){
var inst_16106 = cljs.core.vec(chs);
var inst_16107 = inst_16106;
var state_16137__$1 = (function (){var statearr_16142 = state_16137;
(statearr_16142[(10)] = inst_16107);

return statearr_16142;
})();
var statearr_16143_17386 = state_16137__$1;
(statearr_16143_17386[(2)] = null);

(statearr_16143_17386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (4))){
var inst_16107 = (state_16137[(10)]);
var state_16137__$1 = state_16137;
return cljs.core.async.ioc_alts_BANG_(state_16137__$1,(7),inst_16107);
} else {
if((state_val_16138 === (6))){
var inst_16133 = (state_16137[(2)]);
var state_16137__$1 = state_16137;
var statearr_16144_17387 = state_16137__$1;
(statearr_16144_17387[(2)] = inst_16133);

(statearr_16144_17387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (3))){
var inst_16135 = (state_16137[(2)]);
var state_16137__$1 = state_16137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16137__$1,inst_16135);
} else {
if((state_val_16138 === (2))){
var inst_16107 = (state_16137[(10)]);
var inst_16109 = cljs.core.count(inst_16107);
var inst_16110 = (inst_16109 > (0));
var state_16137__$1 = state_16137;
if(cljs.core.truth_(inst_16110)){
var statearr_16146_17388 = state_16137__$1;
(statearr_16146_17388[(1)] = (4));

} else {
var statearr_16147_17389 = state_16137__$1;
(statearr_16147_17389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (11))){
var inst_16107 = (state_16137[(10)]);
var inst_16126 = (state_16137[(2)]);
var tmp16145 = inst_16107;
var inst_16107__$1 = tmp16145;
var state_16137__$1 = (function (){var statearr_16148 = state_16137;
(statearr_16148[(11)] = inst_16126);

(statearr_16148[(10)] = inst_16107__$1);

return statearr_16148;
})();
var statearr_16149_17390 = state_16137__$1;
(statearr_16149_17390[(2)] = null);

(statearr_16149_17390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (9))){
var inst_16117 = (state_16137[(8)]);
var state_16137__$1 = state_16137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16137__$1,(11),out,inst_16117);
} else {
if((state_val_16138 === (5))){
var inst_16131 = cljs.core.async.close_BANG_(out);
var state_16137__$1 = state_16137;
var statearr_16150_17394 = state_16137__$1;
(statearr_16150_17394[(2)] = inst_16131);

(statearr_16150_17394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (10))){
var inst_16129 = (state_16137[(2)]);
var state_16137__$1 = state_16137;
var statearr_16155_17399 = state_16137__$1;
(statearr_16155_17399[(2)] = inst_16129);

(statearr_16155_17399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (8))){
var inst_16107 = (state_16137[(10)]);
var inst_16116 = (state_16137[(7)]);
var inst_16117 = (state_16137[(8)]);
var inst_16118 = (state_16137[(9)]);
var inst_16121 = (function (){var cs = inst_16107;
var vec__16112 = inst_16116;
var v = inst_16117;
var c = inst_16118;
return (function (p1__16103_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16103_SHARP_);
});
})();
var inst_16122 = cljs.core.filterv(inst_16121,inst_16107);
var inst_16107__$1 = inst_16122;
var state_16137__$1 = (function (){var statearr_16164 = state_16137;
(statearr_16164[(10)] = inst_16107__$1);

return statearr_16164;
})();
var statearr_16165_17400 = state_16137__$1;
(statearr_16165_17400[(2)] = null);

(statearr_16165_17400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16166[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16166[(1)] = (1));

return statearr_16166;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16137){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16137);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16167){var ex__14606__auto__ = e16167;
var statearr_16168_17402 = state_16137;
(statearr_16168_17402[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16137[(4)]))){
var statearr_16169_17403 = state_16137;
(statearr_16169_17403[(1)] = cljs.core.first((state_16137[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17404 = state_16137;
state_16137 = G__17404;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16170 = f__14687__auto__();
(statearr_16170[(6)] = c__14686__auto___17379);

return statearr_16170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16174 = arguments.length;
switch (G__16174) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14686__auto___17409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16198){
var state_val_16199 = (state_16198[(1)]);
if((state_val_16199 === (7))){
var inst_16180 = (state_16198[(7)]);
var inst_16180__$1 = (state_16198[(2)]);
var inst_16181 = (inst_16180__$1 == null);
var inst_16182 = cljs.core.not(inst_16181);
var state_16198__$1 = (function (){var statearr_16200 = state_16198;
(statearr_16200[(7)] = inst_16180__$1);

return statearr_16200;
})();
if(inst_16182){
var statearr_16201_17410 = state_16198__$1;
(statearr_16201_17410[(1)] = (8));

} else {
var statearr_16202_17411 = state_16198__$1;
(statearr_16202_17411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (1))){
var inst_16175 = (0);
var state_16198__$1 = (function (){var statearr_16203 = state_16198;
(statearr_16203[(8)] = inst_16175);

return statearr_16203;
})();
var statearr_16204_17412 = state_16198__$1;
(statearr_16204_17412[(2)] = null);

(statearr_16204_17412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (4))){
var state_16198__$1 = state_16198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16198__$1,(7),ch);
} else {
if((state_val_16199 === (6))){
var inst_16193 = (state_16198[(2)]);
var state_16198__$1 = state_16198;
var statearr_16208_17414 = state_16198__$1;
(statearr_16208_17414[(2)] = inst_16193);

(statearr_16208_17414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (3))){
var inst_16195 = (state_16198[(2)]);
var inst_16196 = cljs.core.async.close_BANG_(out);
var state_16198__$1 = (function (){var statearr_16209 = state_16198;
(statearr_16209[(9)] = inst_16195);

return statearr_16209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16198__$1,inst_16196);
} else {
if((state_val_16199 === (2))){
var inst_16175 = (state_16198[(8)]);
var inst_16177 = (inst_16175 < n);
var state_16198__$1 = state_16198;
if(cljs.core.truth_(inst_16177)){
var statearr_16210_17419 = state_16198__$1;
(statearr_16210_17419[(1)] = (4));

} else {
var statearr_16211_17420 = state_16198__$1;
(statearr_16211_17420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (11))){
var inst_16175 = (state_16198[(8)]);
var inst_16185 = (state_16198[(2)]);
var inst_16186 = (inst_16175 + (1));
var inst_16175__$1 = inst_16186;
var state_16198__$1 = (function (){var statearr_16212 = state_16198;
(statearr_16212[(10)] = inst_16185);

(statearr_16212[(8)] = inst_16175__$1);

return statearr_16212;
})();
var statearr_16213_17421 = state_16198__$1;
(statearr_16213_17421[(2)] = null);

(statearr_16213_17421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (9))){
var state_16198__$1 = state_16198;
var statearr_16222_17425 = state_16198__$1;
(statearr_16222_17425[(2)] = null);

(statearr_16222_17425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (5))){
var state_16198__$1 = state_16198;
var statearr_16223_17426 = state_16198__$1;
(statearr_16223_17426[(2)] = null);

(statearr_16223_17426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (10))){
var inst_16190 = (state_16198[(2)]);
var state_16198__$1 = state_16198;
var statearr_16224_17427 = state_16198__$1;
(statearr_16224_17427[(2)] = inst_16190);

(statearr_16224_17427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (8))){
var inst_16180 = (state_16198[(7)]);
var state_16198__$1 = state_16198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16198__$1,(11),out,inst_16180);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16227[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16227[(1)] = (1));

return statearr_16227;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16198){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16198);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16229){var ex__14606__auto__ = e16229;
var statearr_16230_17428 = state_16198;
(statearr_16230_17428[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16198[(4)]))){
var statearr_16231_17429 = state_16198;
(statearr_16231_17429[(1)] = cljs.core.first((state_16198[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17430 = state_16198;
state_16198 = G__17430;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16237 = f__14687__auto__();
(statearr_16237[(6)] = c__14686__auto___17409);

return statearr_16237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16249 = (function (f,ch,meta16240,_,fn1,meta16250){
this.f = f;
this.ch = ch;
this.meta16240 = meta16240;
this._ = _;
this.fn1 = fn1;
this.meta16250 = meta16250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16251,meta16250__$1){
var self__ = this;
var _16251__$1 = this;
return (new cljs.core.async.t_cljs$core$async16249(self__.f,self__.ch,self__.meta16240,self__._,self__.fn1,meta16250__$1));
}));

(cljs.core.async.t_cljs$core$async16249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16251){
var self__ = this;
var _16251__$1 = this;
return self__.meta16250;
}));

(cljs.core.async.t_cljs$core$async16249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16238_SHARP_){
var G__16257 = (((p1__16238_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16238_SHARP_) : self__.f.call(null,p1__16238_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16257) : f1.call(null,G__16257));
});
}));

(cljs.core.async.t_cljs$core$async16249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16240","meta16240",1806626794,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16239","cljs.core.async/t_cljs$core$async16239",-923136205,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16250","meta16250",-894816155,null)], null);
}));

(cljs.core.async.t_cljs$core$async16249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16249");

(cljs.core.async.t_cljs$core$async16249.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16249.
 */
cljs.core.async.__GT_t_cljs$core$async16249 = (function cljs$core$async$__GT_t_cljs$core$async16249(f,ch,meta16240,_,fn1,meta16250){
return (new cljs.core.async.t_cljs$core$async16249(f,ch,meta16240,_,fn1,meta16250));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16239 = (function (f,ch,meta16240){
this.f = f;
this.ch = ch;
this.meta16240 = meta16240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16241,meta16240__$1){
var self__ = this;
var _16241__$1 = this;
return (new cljs.core.async.t_cljs$core$async16239(self__.f,self__.ch,meta16240__$1));
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16241){
var self__ = this;
var _16241__$1 = this;
return self__.meta16240;
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16249(self__.f,self__.ch,self__.meta16240,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16258 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16258) : self__.f.call(null,G__16258));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16240","meta16240",1806626794,null)], null);
}));

(cljs.core.async.t_cljs$core$async16239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16239");

(cljs.core.async.t_cljs$core$async16239.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16239.
 */
cljs.core.async.__GT_t_cljs$core$async16239 = (function cljs$core$async$__GT_t_cljs$core$async16239(f,ch,meta16240){
return (new cljs.core.async.t_cljs$core$async16239(f,ch,meta16240));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16261 = (function (f,ch,meta16262){
this.f = f;
this.ch = ch;
this.meta16262 = meta16262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16263,meta16262__$1){
var self__ = this;
var _16263__$1 = this;
return (new cljs.core.async.t_cljs$core$async16261(self__.f,self__.ch,meta16262__$1));
}));

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16263){
var self__ = this;
var _16263__$1 = this;
return self__.meta16262;
}));

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16262","meta16262",1593887849,null)], null);
}));

(cljs.core.async.t_cljs$core$async16261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16261");

(cljs.core.async.t_cljs$core$async16261.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16261.
 */
cljs.core.async.__GT_t_cljs$core$async16261 = (function cljs$core$async$__GT_t_cljs$core$async16261(f,ch,meta16262){
return (new cljs.core.async.t_cljs$core$async16261(f,ch,meta16262));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16264 = (function (p,ch,meta16265){
this.p = p;
this.ch = ch;
this.meta16265 = meta16265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16266,meta16265__$1){
var self__ = this;
var _16266__$1 = this;
return (new cljs.core.async.t_cljs$core$async16264(self__.p,self__.ch,meta16265__$1));
}));

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16266){
var self__ = this;
var _16266__$1 = this;
return self__.meta16265;
}));

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16265","meta16265",1227058051,null)], null);
}));

(cljs.core.async.t_cljs$core$async16264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16264");

(cljs.core.async.t_cljs$core$async16264.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16264.
 */
cljs.core.async.__GT_t_cljs$core$async16264 = (function cljs$core$async$__GT_t_cljs$core$async16264(p,ch,meta16265){
return (new cljs.core.async.t_cljs$core$async16264(p,ch,meta16265));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16264(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16284 = arguments.length;
switch (G__16284) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14686__auto___17446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16309){
var state_val_16310 = (state_16309[(1)]);
if((state_val_16310 === (7))){
var inst_16305 = (state_16309[(2)]);
var state_16309__$1 = state_16309;
var statearr_16311_17447 = state_16309__$1;
(statearr_16311_17447[(2)] = inst_16305);

(statearr_16311_17447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (1))){
var state_16309__$1 = state_16309;
var statearr_16312_17448 = state_16309__$1;
(statearr_16312_17448[(2)] = null);

(statearr_16312_17448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (4))){
var inst_16291 = (state_16309[(7)]);
var inst_16291__$1 = (state_16309[(2)]);
var inst_16292 = (inst_16291__$1 == null);
var state_16309__$1 = (function (){var statearr_16313 = state_16309;
(statearr_16313[(7)] = inst_16291__$1);

return statearr_16313;
})();
if(cljs.core.truth_(inst_16292)){
var statearr_16314_17449 = state_16309__$1;
(statearr_16314_17449[(1)] = (5));

} else {
var statearr_16315_17450 = state_16309__$1;
(statearr_16315_17450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (6))){
var inst_16291 = (state_16309[(7)]);
var inst_16296 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16291) : p.call(null,inst_16291));
var state_16309__$1 = state_16309;
if(cljs.core.truth_(inst_16296)){
var statearr_16317_17451 = state_16309__$1;
(statearr_16317_17451[(1)] = (8));

} else {
var statearr_16318_17452 = state_16309__$1;
(statearr_16318_17452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (3))){
var inst_16307 = (state_16309[(2)]);
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16309__$1,inst_16307);
} else {
if((state_val_16310 === (2))){
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16309__$1,(4),ch);
} else {
if((state_val_16310 === (11))){
var inst_16299 = (state_16309[(2)]);
var state_16309__$1 = state_16309;
var statearr_16319_17453 = state_16309__$1;
(statearr_16319_17453[(2)] = inst_16299);

(statearr_16319_17453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (9))){
var state_16309__$1 = state_16309;
var statearr_16320_17454 = state_16309__$1;
(statearr_16320_17454[(2)] = null);

(statearr_16320_17454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (5))){
var inst_16294 = cljs.core.async.close_BANG_(out);
var state_16309__$1 = state_16309;
var statearr_16323_17455 = state_16309__$1;
(statearr_16323_17455[(2)] = inst_16294);

(statearr_16323_17455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (10))){
var inst_16302 = (state_16309[(2)]);
var state_16309__$1 = (function (){var statearr_16326 = state_16309;
(statearr_16326[(8)] = inst_16302);

return statearr_16326;
})();
var statearr_16327_17456 = state_16309__$1;
(statearr_16327_17456[(2)] = null);

(statearr_16327_17456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (8))){
var inst_16291 = (state_16309[(7)]);
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16309__$1,(11),out,inst_16291);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16331 = [null,null,null,null,null,null,null,null,null];
(statearr_16331[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16331[(1)] = (1));

return statearr_16331;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16309){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16309);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16334){var ex__14606__auto__ = e16334;
var statearr_16336_17457 = state_16309;
(statearr_16336_17457[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16309[(4)]))){
var statearr_16337_17458 = state_16309;
(statearr_16337_17458[(1)] = cljs.core.first((state_16309[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17459 = state_16309;
state_16309 = G__17459;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16338 = f__14687__auto__();
(statearr_16338[(6)] = c__14686__auto___17446);

return statearr_16338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16341 = arguments.length;
switch (G__16341) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14686__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16415){
var state_val_16416 = (state_16415[(1)]);
if((state_val_16416 === (7))){
var inst_16411 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16417_17464 = state_16415__$1;
(statearr_16417_17464[(2)] = inst_16411);

(statearr_16417_17464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (20))){
var inst_16377 = (state_16415[(7)]);
var inst_16392 = (state_16415[(2)]);
var inst_16393 = cljs.core.next(inst_16377);
var inst_16355 = inst_16393;
var inst_16356 = null;
var inst_16357 = (0);
var inst_16358 = (0);
var state_16415__$1 = (function (){var statearr_16418 = state_16415;
(statearr_16418[(8)] = inst_16392);

(statearr_16418[(9)] = inst_16355);

(statearr_16418[(10)] = inst_16356);

(statearr_16418[(11)] = inst_16357);

(statearr_16418[(12)] = inst_16358);

return statearr_16418;
})();
var statearr_16419_17470 = state_16415__$1;
(statearr_16419_17470[(2)] = null);

(statearr_16419_17470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (1))){
var state_16415__$1 = state_16415;
var statearr_16420_17471 = state_16415__$1;
(statearr_16420_17471[(2)] = null);

(statearr_16420_17471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (4))){
var inst_16344 = (state_16415[(13)]);
var inst_16344__$1 = (state_16415[(2)]);
var inst_16345 = (inst_16344__$1 == null);
var state_16415__$1 = (function (){var statearr_16422 = state_16415;
(statearr_16422[(13)] = inst_16344__$1);

return statearr_16422;
})();
if(cljs.core.truth_(inst_16345)){
var statearr_16423_17473 = state_16415__$1;
(statearr_16423_17473[(1)] = (5));

} else {
var statearr_16424_17474 = state_16415__$1;
(statearr_16424_17474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (15))){
var state_16415__$1 = state_16415;
var statearr_16428_17475 = state_16415__$1;
(statearr_16428_17475[(2)] = null);

(statearr_16428_17475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (21))){
var state_16415__$1 = state_16415;
var statearr_16431_17476 = state_16415__$1;
(statearr_16431_17476[(2)] = null);

(statearr_16431_17476[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (13))){
var inst_16358 = (state_16415[(12)]);
var inst_16355 = (state_16415[(9)]);
var inst_16356 = (state_16415[(10)]);
var inst_16357 = (state_16415[(11)]);
var inst_16369 = (state_16415[(2)]);
var inst_16374 = (inst_16358 + (1));
var tmp16425 = inst_16357;
var tmp16426 = inst_16355;
var tmp16427 = inst_16356;
var inst_16355__$1 = tmp16426;
var inst_16356__$1 = tmp16427;
var inst_16357__$1 = tmp16425;
var inst_16358__$1 = inst_16374;
var state_16415__$1 = (function (){var statearr_16432 = state_16415;
(statearr_16432[(14)] = inst_16369);

(statearr_16432[(9)] = inst_16355__$1);

(statearr_16432[(10)] = inst_16356__$1);

(statearr_16432[(11)] = inst_16357__$1);

(statearr_16432[(12)] = inst_16358__$1);

return statearr_16432;
})();
var statearr_16433_17480 = state_16415__$1;
(statearr_16433_17480[(2)] = null);

(statearr_16433_17480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (22))){
var state_16415__$1 = state_16415;
var statearr_16436_17483 = state_16415__$1;
(statearr_16436_17483[(2)] = null);

(statearr_16436_17483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (6))){
var inst_16344 = (state_16415[(13)]);
var inst_16353 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16344) : f.call(null,inst_16344));
var inst_16354 = cljs.core.seq(inst_16353);
var inst_16355 = inst_16354;
var inst_16356 = null;
var inst_16357 = (0);
var inst_16358 = (0);
var state_16415__$1 = (function (){var statearr_16440 = state_16415;
(statearr_16440[(9)] = inst_16355);

(statearr_16440[(10)] = inst_16356);

(statearr_16440[(11)] = inst_16357);

(statearr_16440[(12)] = inst_16358);

return statearr_16440;
})();
var statearr_16442_17486 = state_16415__$1;
(statearr_16442_17486[(2)] = null);

(statearr_16442_17486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (17))){
var inst_16377 = (state_16415[(7)]);
var inst_16385 = cljs.core.chunk_first(inst_16377);
var inst_16386 = cljs.core.chunk_rest(inst_16377);
var inst_16387 = cljs.core.count(inst_16385);
var inst_16355 = inst_16386;
var inst_16356 = inst_16385;
var inst_16357 = inst_16387;
var inst_16358 = (0);
var state_16415__$1 = (function (){var statearr_16444 = state_16415;
(statearr_16444[(9)] = inst_16355);

(statearr_16444[(10)] = inst_16356);

(statearr_16444[(11)] = inst_16357);

(statearr_16444[(12)] = inst_16358);

return statearr_16444;
})();
var statearr_16447_17488 = state_16415__$1;
(statearr_16447_17488[(2)] = null);

(statearr_16447_17488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (3))){
var inst_16413 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16415__$1,inst_16413);
} else {
if((state_val_16416 === (12))){
var inst_16401 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16449_17489 = state_16415__$1;
(statearr_16449_17489[(2)] = inst_16401);

(statearr_16449_17489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (2))){
var state_16415__$1 = state_16415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16415__$1,(4),in$);
} else {
if((state_val_16416 === (23))){
var inst_16409 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16452_17495 = state_16415__$1;
(statearr_16452_17495[(2)] = inst_16409);

(statearr_16452_17495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (19))){
var inst_16396 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16453_17500 = state_16415__$1;
(statearr_16453_17500[(2)] = inst_16396);

(statearr_16453_17500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (11))){
var inst_16355 = (state_16415[(9)]);
var inst_16377 = (state_16415[(7)]);
var inst_16377__$1 = cljs.core.seq(inst_16355);
var state_16415__$1 = (function (){var statearr_16454 = state_16415;
(statearr_16454[(7)] = inst_16377__$1);

return statearr_16454;
})();
if(inst_16377__$1){
var statearr_16456_17508 = state_16415__$1;
(statearr_16456_17508[(1)] = (14));

} else {
var statearr_16457_17510 = state_16415__$1;
(statearr_16457_17510[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (9))){
var inst_16403 = (state_16415[(2)]);
var inst_16404 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16415__$1 = (function (){var statearr_16458 = state_16415;
(statearr_16458[(15)] = inst_16403);

return statearr_16458;
})();
if(cljs.core.truth_(inst_16404)){
var statearr_16459_17512 = state_16415__$1;
(statearr_16459_17512[(1)] = (21));

} else {
var statearr_16460_17513 = state_16415__$1;
(statearr_16460_17513[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (5))){
var inst_16347 = cljs.core.async.close_BANG_(out);
var state_16415__$1 = state_16415;
var statearr_16462_17515 = state_16415__$1;
(statearr_16462_17515[(2)] = inst_16347);

(statearr_16462_17515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (14))){
var inst_16377 = (state_16415[(7)]);
var inst_16383 = cljs.core.chunked_seq_QMARK_(inst_16377);
var state_16415__$1 = state_16415;
if(inst_16383){
var statearr_16464_17516 = state_16415__$1;
(statearr_16464_17516[(1)] = (17));

} else {
var statearr_16465_17517 = state_16415__$1;
(statearr_16465_17517[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (16))){
var inst_16399 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16468_17518 = state_16415__$1;
(statearr_16468_17518[(2)] = inst_16399);

(statearr_16468_17518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (10))){
var inst_16356 = (state_16415[(10)]);
var inst_16358 = (state_16415[(12)]);
var inst_16367 = cljs.core._nth(inst_16356,inst_16358);
var state_16415__$1 = state_16415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16415__$1,(13),out,inst_16367);
} else {
if((state_val_16416 === (18))){
var inst_16377 = (state_16415[(7)]);
var inst_16390 = cljs.core.first(inst_16377);
var state_16415__$1 = state_16415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16415__$1,(20),out,inst_16390);
} else {
if((state_val_16416 === (8))){
var inst_16358 = (state_16415[(12)]);
var inst_16357 = (state_16415[(11)]);
var inst_16364 = (inst_16358 < inst_16357);
var inst_16365 = inst_16364;
var state_16415__$1 = state_16415;
if(cljs.core.truth_(inst_16365)){
var statearr_16471_17520 = state_16415__$1;
(statearr_16471_17520[(1)] = (10));

} else {
var statearr_16472_17521 = state_16415__$1;
(statearr_16472_17521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14603__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_16473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14603__auto__);

(statearr_16473[(1)] = (1));

return statearr_16473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14603__auto____1 = (function (state_16415){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16415);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16477){var ex__14606__auto__ = e16477;
var statearr_16478_17524 = state_16415;
(statearr_16478_17524[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16415[(4)]))){
var statearr_16479_17525 = state_16415;
(statearr_16479_17525[(1)] = cljs.core.first((state_16415[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17526 = state_16415;
state_16415 = G__17526;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14603__auto__ = function(state_16415){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14603__auto____1.call(this,state_16415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14603__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14603__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16484 = f__14687__auto__();
(statearr_16484[(6)] = c__14686__auto__);

return statearr_16484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));

return c__14686__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16486 = arguments.length;
switch (G__16486) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16492 = arguments.length;
switch (G__16492) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16497 = arguments.length;
switch (G__16497) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14686__auto___17540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16522){
var state_val_16523 = (state_16522[(1)]);
if((state_val_16523 === (7))){
var inst_16517 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16524_17541 = state_16522__$1;
(statearr_16524_17541[(2)] = inst_16517);

(statearr_16524_17541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (1))){
var inst_16498 = null;
var state_16522__$1 = (function (){var statearr_16525 = state_16522;
(statearr_16525[(7)] = inst_16498);

return statearr_16525;
})();
var statearr_16526_17542 = state_16522__$1;
(statearr_16526_17542[(2)] = null);

(statearr_16526_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (4))){
var inst_16501 = (state_16522[(8)]);
var inst_16501__$1 = (state_16522[(2)]);
var inst_16502 = (inst_16501__$1 == null);
var inst_16503 = cljs.core.not(inst_16502);
var state_16522__$1 = (function (){var statearr_16528 = state_16522;
(statearr_16528[(8)] = inst_16501__$1);

return statearr_16528;
})();
if(inst_16503){
var statearr_16529_17543 = state_16522__$1;
(statearr_16529_17543[(1)] = (5));

} else {
var statearr_16530_17544 = state_16522__$1;
(statearr_16530_17544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (6))){
var state_16522__$1 = state_16522;
var statearr_16532_17545 = state_16522__$1;
(statearr_16532_17545[(2)] = null);

(statearr_16532_17545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (3))){
var inst_16519 = (state_16522[(2)]);
var inst_16520 = cljs.core.async.close_BANG_(out);
var state_16522__$1 = (function (){var statearr_16533 = state_16522;
(statearr_16533[(9)] = inst_16519);

return statearr_16533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16522__$1,inst_16520);
} else {
if((state_val_16523 === (2))){
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16522__$1,(4),ch);
} else {
if((state_val_16523 === (11))){
var inst_16501 = (state_16522[(8)]);
var inst_16511 = (state_16522[(2)]);
var inst_16498 = inst_16501;
var state_16522__$1 = (function (){var statearr_16534 = state_16522;
(statearr_16534[(10)] = inst_16511);

(statearr_16534[(7)] = inst_16498);

return statearr_16534;
})();
var statearr_16536_17556 = state_16522__$1;
(statearr_16536_17556[(2)] = null);

(statearr_16536_17556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (9))){
var inst_16501 = (state_16522[(8)]);
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16522__$1,(11),out,inst_16501);
} else {
if((state_val_16523 === (5))){
var inst_16501 = (state_16522[(8)]);
var inst_16498 = (state_16522[(7)]);
var inst_16505 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16501,inst_16498);
var state_16522__$1 = state_16522;
if(inst_16505){
var statearr_16538_17579 = state_16522__$1;
(statearr_16538_17579[(1)] = (8));

} else {
var statearr_16539_17581 = state_16522__$1;
(statearr_16539_17581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (10))){
var inst_16514 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
var statearr_16541_17588 = state_16522__$1;
(statearr_16541_17588[(2)] = inst_16514);

(statearr_16541_17588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (8))){
var inst_16498 = (state_16522[(7)]);
var tmp16537 = inst_16498;
var inst_16498__$1 = tmp16537;
var state_16522__$1 = (function (){var statearr_16542 = state_16522;
(statearr_16542[(7)] = inst_16498__$1);

return statearr_16542;
})();
var statearr_16543_17594 = state_16522__$1;
(statearr_16543_17594[(2)] = null);

(statearr_16543_17594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16544[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16544[(1)] = (1));

return statearr_16544;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16522){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16522);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16545){var ex__14606__auto__ = e16545;
var statearr_16546_17604 = state_16522;
(statearr_16546_17604[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16522[(4)]))){
var statearr_16547_17605 = state_16522;
(statearr_16547_17605[(1)] = cljs.core.first((state_16522[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17607 = state_16522;
state_16522 = G__17607;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16548 = f__14687__auto__();
(statearr_16548[(6)] = c__14686__auto___17540);

return statearr_16548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16550 = arguments.length;
switch (G__16550) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14686__auto___17612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16590){
var state_val_16591 = (state_16590[(1)]);
if((state_val_16591 === (7))){
var inst_16586 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16592_17613 = state_16590__$1;
(statearr_16592_17613[(2)] = inst_16586);

(statearr_16592_17613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (1))){
var inst_16552 = (new Array(n));
var inst_16553 = inst_16552;
var inst_16554 = (0);
var state_16590__$1 = (function (){var statearr_16593 = state_16590;
(statearr_16593[(7)] = inst_16553);

(statearr_16593[(8)] = inst_16554);

return statearr_16593;
})();
var statearr_16594_17615 = state_16590__$1;
(statearr_16594_17615[(2)] = null);

(statearr_16594_17615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (4))){
var inst_16557 = (state_16590[(9)]);
var inst_16557__$1 = (state_16590[(2)]);
var inst_16559 = (inst_16557__$1 == null);
var inst_16560 = cljs.core.not(inst_16559);
var state_16590__$1 = (function (){var statearr_16595 = state_16590;
(statearr_16595[(9)] = inst_16557__$1);

return statearr_16595;
})();
if(inst_16560){
var statearr_16598_17616 = state_16590__$1;
(statearr_16598_17616[(1)] = (5));

} else {
var statearr_16599_17617 = state_16590__$1;
(statearr_16599_17617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (15))){
var inst_16580 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16600_17618 = state_16590__$1;
(statearr_16600_17618[(2)] = inst_16580);

(statearr_16600_17618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (13))){
var state_16590__$1 = state_16590;
var statearr_16601_17619 = state_16590__$1;
(statearr_16601_17619[(2)] = null);

(statearr_16601_17619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (6))){
var inst_16554 = (state_16590[(8)]);
var inst_16576 = (inst_16554 > (0));
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16576)){
var statearr_16602_17621 = state_16590__$1;
(statearr_16602_17621[(1)] = (12));

} else {
var statearr_16603_17622 = state_16590__$1;
(statearr_16603_17622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (3))){
var inst_16588 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16590__$1,inst_16588);
} else {
if((state_val_16591 === (12))){
var inst_16553 = (state_16590[(7)]);
var inst_16578 = cljs.core.vec(inst_16553);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16590__$1,(15),out,inst_16578);
} else {
if((state_val_16591 === (2))){
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16590__$1,(4),ch);
} else {
if((state_val_16591 === (11))){
var inst_16570 = (state_16590[(2)]);
var inst_16571 = (new Array(n));
var inst_16553 = inst_16571;
var inst_16554 = (0);
var state_16590__$1 = (function (){var statearr_16606 = state_16590;
(statearr_16606[(10)] = inst_16570);

(statearr_16606[(7)] = inst_16553);

(statearr_16606[(8)] = inst_16554);

return statearr_16606;
})();
var statearr_16607_17633 = state_16590__$1;
(statearr_16607_17633[(2)] = null);

(statearr_16607_17633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (9))){
var inst_16553 = (state_16590[(7)]);
var inst_16568 = cljs.core.vec(inst_16553);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16590__$1,(11),out,inst_16568);
} else {
if((state_val_16591 === (5))){
var inst_16553 = (state_16590[(7)]);
var inst_16554 = (state_16590[(8)]);
var inst_16557 = (state_16590[(9)]);
var inst_16563 = (state_16590[(11)]);
var inst_16562 = (inst_16553[inst_16554] = inst_16557);
var inst_16563__$1 = (inst_16554 + (1));
var inst_16564 = (inst_16563__$1 < n);
var state_16590__$1 = (function (){var statearr_16610 = state_16590;
(statearr_16610[(12)] = inst_16562);

(statearr_16610[(11)] = inst_16563__$1);

return statearr_16610;
})();
if(cljs.core.truth_(inst_16564)){
var statearr_16611_17641 = state_16590__$1;
(statearr_16611_17641[(1)] = (8));

} else {
var statearr_16612_17642 = state_16590__$1;
(statearr_16612_17642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (14))){
var inst_16583 = (state_16590[(2)]);
var inst_16584 = cljs.core.async.close_BANG_(out);
var state_16590__$1 = (function (){var statearr_16614 = state_16590;
(statearr_16614[(13)] = inst_16583);

return statearr_16614;
})();
var statearr_16615_17645 = state_16590__$1;
(statearr_16615_17645[(2)] = inst_16584);

(statearr_16615_17645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (10))){
var inst_16574 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16616_17649 = state_16590__$1;
(statearr_16616_17649[(2)] = inst_16574);

(statearr_16616_17649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (8))){
var inst_16553 = (state_16590[(7)]);
var inst_16563 = (state_16590[(11)]);
var tmp16613 = inst_16553;
var inst_16553__$1 = tmp16613;
var inst_16554 = inst_16563;
var state_16590__$1 = (function (){var statearr_16617 = state_16590;
(statearr_16617[(7)] = inst_16553__$1);

(statearr_16617[(8)] = inst_16554);

return statearr_16617;
})();
var statearr_16618_17651 = state_16590__$1;
(statearr_16618_17651[(2)] = null);

(statearr_16618_17651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16621[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16621[(1)] = (1));

return statearr_16621;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16590){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16590);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16622){var ex__14606__auto__ = e16622;
var statearr_16623_17653 = state_16590;
(statearr_16623_17653[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16590[(4)]))){
var statearr_16624_17654 = state_16590;
(statearr_16624_17654[(1)] = cljs.core.first((state_16590[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17655 = state_16590;
state_16590 = G__17655;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16625 = f__14687__auto__();
(statearr_16625[(6)] = c__14686__auto___17612);

return statearr_16625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16627 = arguments.length;
switch (G__16627) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14686__auto___17659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14687__auto__ = (function (){var switch__14602__auto__ = (function (state_16675){
var state_val_16676 = (state_16675[(1)]);
if((state_val_16676 === (7))){
var inst_16671 = (state_16675[(2)]);
var state_16675__$1 = state_16675;
var statearr_16677_17660 = state_16675__$1;
(statearr_16677_17660[(2)] = inst_16671);

(statearr_16677_17660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (1))){
var inst_16629 = [];
var inst_16630 = inst_16629;
var inst_16631 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16675__$1 = (function (){var statearr_16678 = state_16675;
(statearr_16678[(7)] = inst_16630);

(statearr_16678[(8)] = inst_16631);

return statearr_16678;
})();
var statearr_16679_17663 = state_16675__$1;
(statearr_16679_17663[(2)] = null);

(statearr_16679_17663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (4))){
var inst_16634 = (state_16675[(9)]);
var inst_16634__$1 = (state_16675[(2)]);
var inst_16635 = (inst_16634__$1 == null);
var inst_16636 = cljs.core.not(inst_16635);
var state_16675__$1 = (function (){var statearr_16681 = state_16675;
(statearr_16681[(9)] = inst_16634__$1);

return statearr_16681;
})();
if(inst_16636){
var statearr_16683_17664 = state_16675__$1;
(statearr_16683_17664[(1)] = (5));

} else {
var statearr_16684_17665 = state_16675__$1;
(statearr_16684_17665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (15))){
var inst_16630 = (state_16675[(7)]);
var inst_16663 = cljs.core.vec(inst_16630);
var state_16675__$1 = state_16675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16675__$1,(18),out,inst_16663);
} else {
if((state_val_16676 === (13))){
var inst_16657 = (state_16675[(2)]);
var state_16675__$1 = state_16675;
var statearr_16685_17666 = state_16675__$1;
(statearr_16685_17666[(2)] = inst_16657);

(statearr_16685_17666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (6))){
var inst_16630 = (state_16675[(7)]);
var inst_16659 = inst_16630.length;
var inst_16660 = (inst_16659 > (0));
var state_16675__$1 = state_16675;
if(cljs.core.truth_(inst_16660)){
var statearr_16686_17668 = state_16675__$1;
(statearr_16686_17668[(1)] = (15));

} else {
var statearr_16688_17669 = state_16675__$1;
(statearr_16688_17669[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (17))){
var inst_16668 = (state_16675[(2)]);
var inst_16669 = cljs.core.async.close_BANG_(out);
var state_16675__$1 = (function (){var statearr_16689 = state_16675;
(statearr_16689[(10)] = inst_16668);

return statearr_16689;
})();
var statearr_16690_17670 = state_16675__$1;
(statearr_16690_17670[(2)] = inst_16669);

(statearr_16690_17670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (3))){
var inst_16673 = (state_16675[(2)]);
var state_16675__$1 = state_16675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16675__$1,inst_16673);
} else {
if((state_val_16676 === (12))){
var inst_16630 = (state_16675[(7)]);
var inst_16650 = cljs.core.vec(inst_16630);
var state_16675__$1 = state_16675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16675__$1,(14),out,inst_16650);
} else {
if((state_val_16676 === (2))){
var state_16675__$1 = state_16675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16675__$1,(4),ch);
} else {
if((state_val_16676 === (11))){
var inst_16630 = (state_16675[(7)]);
var inst_16634 = (state_16675[(9)]);
var inst_16638 = (state_16675[(11)]);
var inst_16647 = inst_16630.push(inst_16634);
var tmp16696 = inst_16630;
var inst_16630__$1 = tmp16696;
var inst_16631 = inst_16638;
var state_16675__$1 = (function (){var statearr_16697 = state_16675;
(statearr_16697[(12)] = inst_16647);

(statearr_16697[(7)] = inst_16630__$1);

(statearr_16697[(8)] = inst_16631);

return statearr_16697;
})();
var statearr_16698_17679 = state_16675__$1;
(statearr_16698_17679[(2)] = null);

(statearr_16698_17679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (9))){
var inst_16631 = (state_16675[(8)]);
var inst_16643 = cljs.core.keyword_identical_QMARK_(inst_16631,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16675__$1 = state_16675;
var statearr_16700_17681 = state_16675__$1;
(statearr_16700_17681[(2)] = inst_16643);

(statearr_16700_17681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (5))){
var inst_16634 = (state_16675[(9)]);
var inst_16638 = (state_16675[(11)]);
var inst_16631 = (state_16675[(8)]);
var inst_16640 = (state_16675[(13)]);
var inst_16638__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16634) : f.call(null,inst_16634));
var inst_16640__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16638__$1,inst_16631);
var state_16675__$1 = (function (){var statearr_16703 = state_16675;
(statearr_16703[(11)] = inst_16638__$1);

(statearr_16703[(13)] = inst_16640__$1);

return statearr_16703;
})();
if(inst_16640__$1){
var statearr_16704_17684 = state_16675__$1;
(statearr_16704_17684[(1)] = (8));

} else {
var statearr_16705_17685 = state_16675__$1;
(statearr_16705_17685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (14))){
var inst_16634 = (state_16675[(9)]);
var inst_16638 = (state_16675[(11)]);
var inst_16652 = (state_16675[(2)]);
var inst_16653 = [];
var inst_16654 = inst_16653.push(inst_16634);
var inst_16630 = inst_16653;
var inst_16631 = inst_16638;
var state_16675__$1 = (function (){var statearr_16709 = state_16675;
(statearr_16709[(14)] = inst_16652);

(statearr_16709[(15)] = inst_16654);

(statearr_16709[(7)] = inst_16630);

(statearr_16709[(8)] = inst_16631);

return statearr_16709;
})();
var statearr_16710_17687 = state_16675__$1;
(statearr_16710_17687[(2)] = null);

(statearr_16710_17687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (16))){
var state_16675__$1 = state_16675;
var statearr_16711_17688 = state_16675__$1;
(statearr_16711_17688[(2)] = null);

(statearr_16711_17688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (10))){
var inst_16645 = (state_16675[(2)]);
var state_16675__$1 = state_16675;
if(cljs.core.truth_(inst_16645)){
var statearr_16712_17697 = state_16675__$1;
(statearr_16712_17697[(1)] = (11));

} else {
var statearr_16713_17698 = state_16675__$1;
(statearr_16713_17698[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (18))){
var inst_16665 = (state_16675[(2)]);
var state_16675__$1 = state_16675;
var statearr_16715_17699 = state_16675__$1;
(statearr_16715_17699[(2)] = inst_16665);

(statearr_16715_17699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16676 === (8))){
var inst_16640 = (state_16675[(13)]);
var state_16675__$1 = state_16675;
var statearr_16716_17700 = state_16675__$1;
(statearr_16716_17700[(2)] = inst_16640);

(statearr_16716_17700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14603__auto__ = null;
var cljs$core$async$state_machine__14603__auto____0 = (function (){
var statearr_16719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16719[(0)] = cljs$core$async$state_machine__14603__auto__);

(statearr_16719[(1)] = (1));

return statearr_16719;
});
var cljs$core$async$state_machine__14603__auto____1 = (function (state_16675){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_16675);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e16722){var ex__14606__auto__ = e16722;
var statearr_16724_17701 = state_16675;
(statearr_16724_17701[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_16675[(4)]))){
var statearr_16725_17710 = state_16675;
(statearr_16725_17710[(1)] = cljs.core.first((state_16675[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17711 = state_16675;
state_16675 = G__17711;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
cljs$core$async$state_machine__14603__auto__ = function(state_16675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14603__auto____1.call(this,state_16675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14603__auto____0;
cljs$core$async$state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14603__auto____1;
return cljs$core$async$state_machine__14603__auto__;
})()
})();
var state__14688__auto__ = (function (){var statearr_16726 = f__14687__auto__();
(statearr_16726[(6)] = c__14686__auto___17659);

return statearr_16726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14688__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
