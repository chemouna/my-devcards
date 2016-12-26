// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30074 = [];
var len__25897__auto___30080 = arguments.length;
var i__25898__auto___30081 = (0);
while(true){
if((i__25898__auto___30081 < len__25897__auto___30080)){
args30074.push((arguments[i__25898__auto___30081]));

var G__30082 = (i__25898__auto___30081 + (1));
i__25898__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var G__30076 = args30074.length;
switch (G__30076) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30074.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30077 = (function (f,blockable,meta30078){
this.f = f;
this.blockable = blockable;
this.meta30078 = meta30078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30079,meta30078__$1){
var self__ = this;
var _30079__$1 = this;
return (new cljs.core.async.t_cljs$core$async30077(self__.f,self__.blockable,meta30078__$1));
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30079){
var self__ = this;
var _30079__$1 = this;
return self__.meta30078;
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30078","meta30078",314055616,null)], null);
});

cljs.core.async.t_cljs$core$async30077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30077";

cljs.core.async.t_cljs$core$async30077.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async30077");
});

cljs.core.async.__GT_t_cljs$core$async30077 = (function cljs$core$async$__GT_t_cljs$core$async30077(f__$1,blockable__$1,meta30078){
return (new cljs.core.async.t_cljs$core$async30077(f__$1,blockable__$1,meta30078));
});

}

return (new cljs.core.async.t_cljs$core$async30077(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args30086 = [];
var len__25897__auto___30089 = arguments.length;
var i__25898__auto___30090 = (0);
while(true){
if((i__25898__auto___30090 < len__25897__auto___30089)){
args30086.push((arguments[i__25898__auto___30090]));

var G__30091 = (i__25898__auto___30090 + (1));
i__25898__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var G__30088 = args30086.length;
switch (G__30088) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30086.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30093 = [];
var len__25897__auto___30096 = arguments.length;
var i__25898__auto___30097 = (0);
while(true){
if((i__25898__auto___30097 < len__25897__auto___30096)){
args30093.push((arguments[i__25898__auto___30097]));

var G__30098 = (i__25898__auto___30097 + (1));
i__25898__auto___30097 = G__30098;
continue;
} else {
}
break;
}

var G__30095 = args30093.length;
switch (G__30095) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30093.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args30100 = [];
var len__25897__auto___30103 = arguments.length;
var i__25898__auto___30104 = (0);
while(true){
if((i__25898__auto___30104 < len__25897__auto___30103)){
args30100.push((arguments[i__25898__auto___30104]));

var G__30105 = (i__25898__auto___30104 + (1));
i__25898__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var G__30102 = args30100.length;
switch (G__30102) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30100.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30107 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30107);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30107,ret){
return (function (){
return fn1.call(null,val_30107);
});})(val_30107,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30108 = [];
var len__25897__auto___30111 = arguments.length;
var i__25898__auto___30112 = (0);
while(true){
if((i__25898__auto___30112 < len__25897__auto___30111)){
args30108.push((arguments[i__25898__auto___30112]));

var G__30113 = (i__25898__auto___30112 + (1));
i__25898__auto___30112 = G__30113;
continue;
} else {
}
break;
}

var G__30110 = args30108.length;
switch (G__30110) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30108.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25737__auto___30115 = n;
var x_30116 = (0);
while(true){
if((x_30116 < n__25737__auto___30115)){
(a[x_30116] = (0));

var G__30117 = (x_30116 + (1));
x_30116 = G__30117;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30118 = (i + (1));
i = G__30118;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30122 = (function (alt_flag,flag,meta30123){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30123 = meta30123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30124,meta30123__$1){
var self__ = this;
var _30124__$1 = this;
return (new cljs.core.async.t_cljs$core$async30122(self__.alt_flag,self__.flag,meta30123__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30124){
var self__ = this;
var _30124__$1 = this;
return self__.meta30123;
});})(flag))
;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30122.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30123","meta30123",282044919,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30122";

cljs.core.async.t_cljs$core$async30122.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async30122");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30122 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30122(alt_flag__$1,flag__$1,meta30123){
return (new cljs.core.async.t_cljs$core$async30122(alt_flag__$1,flag__$1,meta30123));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30122(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30128 = (function (alt_handler,flag,cb,meta30129){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30129 = meta30129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30130,meta30129__$1){
var self__ = this;
var _30130__$1 = this;
return (new cljs.core.async.t_cljs$core$async30128(self__.alt_handler,self__.flag,self__.cb,meta30129__$1));
});

cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30130){
var self__ = this;
var _30130__$1 = this;
return self__.meta30129;
});

cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30129","meta30129",2087680096,null)], null);
});

cljs.core.async.t_cljs$core$async30128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30128";

cljs.core.async.t_cljs$core$async30128.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async30128");
});

cljs.core.async.__GT_t_cljs$core$async30128 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30128(alt_handler__$1,flag__$1,cb__$1,meta30129){
return (new cljs.core.async.t_cljs$core$async30128(alt_handler__$1,flag__$1,cb__$1,meta30129));
});

}

return (new cljs.core.async.t_cljs$core$async30128(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30131_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30131_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30132_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30132_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24822__auto__ = wport;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30133 = (i + (1));
i = G__30133;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24822__auto__ = ret;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24810__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24810__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24810__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__25904__auto__ = [];
var len__25897__auto___30139 = arguments.length;
var i__25898__auto___30140 = (0);
while(true){
if((i__25898__auto___30140 < len__25897__auto___30139)){
args__25904__auto__.push((arguments[i__25898__auto___30140]));

var G__30141 = (i__25898__auto___30140 + (1));
i__25898__auto___30140 = G__30141;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((1) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25905__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30136){
var map__30137 = p__30136;
var map__30137__$1 = ((((!((map__30137 == null)))?((((map__30137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30137):map__30137);
var opts = map__30137__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30134){
var G__30135 = cljs.core.first.call(null,seq30134);
var seq30134__$1 = cljs.core.next.call(null,seq30134);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30135,seq30134__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args30142 = [];
var len__25897__auto___30192 = arguments.length;
var i__25898__auto___30193 = (0);
while(true){
if((i__25898__auto___30193 < len__25897__auto___30192)){
args30142.push((arguments[i__25898__auto___30193]));

var G__30194 = (i__25898__auto___30193 + (1));
i__25898__auto___30193 = G__30194;
continue;
} else {
}
break;
}

var G__30144 = args30142.length;
switch (G__30144) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30142.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30029__auto___30196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30196){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___30196){
return (function (state_30168){
var state_val_30169 = (state_30168[(1)]);
if((state_val_30169 === (7))){
var inst_30164 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
var statearr_30170_30197 = state_30168__$1;
(statearr_30170_30197[(2)] = inst_30164);

(statearr_30170_30197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (1))){
var state_30168__$1 = state_30168;
var statearr_30171_30198 = state_30168__$1;
(statearr_30171_30198[(2)] = null);

(statearr_30171_30198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (4))){
var inst_30147 = (state_30168[(7)]);
var inst_30147__$1 = (state_30168[(2)]);
var inst_30148 = (inst_30147__$1 == null);
var state_30168__$1 = (function (){var statearr_30172 = state_30168;
(statearr_30172[(7)] = inst_30147__$1);

return statearr_30172;
})();
if(cljs.core.truth_(inst_30148)){
var statearr_30173_30199 = state_30168__$1;
(statearr_30173_30199[(1)] = (5));

} else {
var statearr_30174_30200 = state_30168__$1;
(statearr_30174_30200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (13))){
var state_30168__$1 = state_30168;
var statearr_30175_30201 = state_30168__$1;
(statearr_30175_30201[(2)] = null);

(statearr_30175_30201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (6))){
var inst_30147 = (state_30168[(7)]);
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30168__$1,(11),to,inst_30147);
} else {
if((state_val_30169 === (3))){
var inst_30166 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30168__$1,inst_30166);
} else {
if((state_val_30169 === (12))){
var state_30168__$1 = state_30168;
var statearr_30176_30202 = state_30168__$1;
(statearr_30176_30202[(2)] = null);

(statearr_30176_30202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (2))){
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,(4),from);
} else {
if((state_val_30169 === (11))){
var inst_30157 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
if(cljs.core.truth_(inst_30157)){
var statearr_30177_30203 = state_30168__$1;
(statearr_30177_30203[(1)] = (12));

} else {
var statearr_30178_30204 = state_30168__$1;
(statearr_30178_30204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (9))){
var state_30168__$1 = state_30168;
var statearr_30179_30205 = state_30168__$1;
(statearr_30179_30205[(2)] = null);

(statearr_30179_30205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (5))){
var state_30168__$1 = state_30168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30180_30206 = state_30168__$1;
(statearr_30180_30206[(1)] = (8));

} else {
var statearr_30181_30207 = state_30168__$1;
(statearr_30181_30207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (14))){
var inst_30162 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
var statearr_30182_30208 = state_30168__$1;
(statearr_30182_30208[(2)] = inst_30162);

(statearr_30182_30208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (10))){
var inst_30154 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
var statearr_30183_30209 = state_30168__$1;
(statearr_30183_30209[(2)] = inst_30154);

(statearr_30183_30209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (8))){
var inst_30151 = cljs.core.async.close_BANG_.call(null,to);
var state_30168__$1 = state_30168;
var statearr_30184_30210 = state_30168__$1;
(statearr_30184_30210[(2)] = inst_30151);

(statearr_30184_30210[(1)] = (10));


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
});})(c__30029__auto___30196))
;
return ((function (switch__29917__auto__,c__30029__auto___30196){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_30188 = [null,null,null,null,null,null,null,null];
(statearr_30188[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_30188[(1)] = (1));

return statearr_30188;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_30168){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30189){if((e30189 instanceof Object)){
var ex__29921__auto__ = e30189;
var statearr_30190_30211 = state_30168;
(statearr_30190_30211[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30212 = state_30168;
state_30168 = G__30212;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_30168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_30168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___30196))
})();
var state__30031__auto__ = (function (){var statearr_30191 = f__30030__auto__.call(null);
(statearr_30191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30196);

return statearr_30191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30196))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30400){
var vec__30401 = p__30400;
var v = cljs.core.nth.call(null,vec__30401,(0),null);
var p = cljs.core.nth.call(null,vec__30401,(1),null);
var job = vec__30401;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30029__auto___30587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30587,res,vec__30401,v,p,job,jobs,results){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___30587,res,vec__30401,v,p,job,jobs,results){
return (function (state_30408){
var state_val_30409 = (state_30408[(1)]);
if((state_val_30409 === (1))){
var state_30408__$1 = state_30408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30408__$1,(2),res,v);
} else {
if((state_val_30409 === (2))){
var inst_30405 = (state_30408[(2)]);
var inst_30406 = cljs.core.async.close_BANG_.call(null,res);
var state_30408__$1 = (function (){var statearr_30410 = state_30408;
(statearr_30410[(7)] = inst_30405);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30408__$1,inst_30406);
} else {
return null;
}
}
});})(c__30029__auto___30587,res,vec__30401,v,p,job,jobs,results))
;
return ((function (switch__29917__auto__,c__30029__auto___30587,res,vec__30401,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0 = (function (){
var statearr_30414 = [null,null,null,null,null,null,null,null];
(statearr_30414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__);

(statearr_30414[(1)] = (1));

return statearr_30414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1 = (function (state_30408){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30415){if((e30415 instanceof Object)){
var ex__29921__auto__ = e30415;
var statearr_30416_30588 = state_30408;
(statearr_30416_30588[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30589 = state_30408;
state_30408 = G__30589;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = function(state_30408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1.call(this,state_30408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___30587,res,vec__30401,v,p,job,jobs,results))
})();
var state__30031__auto__ = (function (){var statearr_30417 = f__30030__auto__.call(null);
(statearr_30417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30587);

return statearr_30417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30587,res,vec__30401,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30418){
var vec__30419 = p__30418;
var v = cljs.core.nth.call(null,vec__30419,(0),null);
var p = cljs.core.nth.call(null,vec__30419,(1),null);
var job = vec__30419;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25737__auto___30590 = n;
var __30591 = (0);
while(true){
if((__30591 < n__25737__auto___30590)){
var G__30422_30592 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30422_30592) {
case "compute":
var c__30029__auto___30594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30591,c__30029__auto___30594,G__30422_30592,n__25737__auto___30590,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (__30591,c__30029__auto___30594,G__30422_30592,n__25737__auto___30590,jobs,results,process,async){
return (function (state_30435){
var state_val_30436 = (state_30435[(1)]);
if((state_val_30436 === (1))){
var state_30435__$1 = state_30435;
var statearr_30437_30595 = state_30435__$1;
(statearr_30437_30595[(2)] = null);

(statearr_30437_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (2))){
var state_30435__$1 = state_30435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30435__$1,(4),jobs);
} else {
if((state_val_30436 === (3))){
var inst_30433 = (state_30435[(2)]);
var state_30435__$1 = state_30435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30435__$1,inst_30433);
} else {
if((state_val_30436 === (4))){
var inst_30425 = (state_30435[(2)]);
var inst_30426 = process.call(null,inst_30425);
var state_30435__$1 = state_30435;
if(cljs.core.truth_(inst_30426)){
var statearr_30438_30596 = state_30435__$1;
(statearr_30438_30596[(1)] = (5));

} else {
var statearr_30439_30597 = state_30435__$1;
(statearr_30439_30597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (5))){
var state_30435__$1 = state_30435;
var statearr_30440_30598 = state_30435__$1;
(statearr_30440_30598[(2)] = null);

(statearr_30440_30598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (6))){
var state_30435__$1 = state_30435;
var statearr_30441_30599 = state_30435__$1;
(statearr_30441_30599[(2)] = null);

(statearr_30441_30599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (7))){
var inst_30431 = (state_30435[(2)]);
var state_30435__$1 = state_30435;
var statearr_30442_30600 = state_30435__$1;
(statearr_30442_30600[(2)] = inst_30431);

(statearr_30442_30600[(1)] = (3));


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
});})(__30591,c__30029__auto___30594,G__30422_30592,n__25737__auto___30590,jobs,results,process,async))
;
return ((function (__30591,switch__29917__auto__,c__30029__auto___30594,G__30422_30592,n__25737__auto___30590,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0 = (function (){
var statearr_30446 = [null,null,null,null,null,null,null];
(statearr_30446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__);

(statearr_30446[(1)] = (1));

return statearr_30446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1 = (function (state_30435){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30447){if((e30447 instanceof Object)){
var ex__29921__auto__ = e30447;
var statearr_30448_30601 = state_30435;
(statearr_30448_30601[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30602 = state_30435;
state_30435 = G__30602;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = function(state_30435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1.call(this,state_30435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__;
})()
;})(__30591,switch__29917__auto__,c__30029__auto___30594,G__30422_30592,n__25737__auto___30590,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30449 = f__30030__auto__.call(null);
(statearr_30449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30594);

return statearr_30449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(__30591,c__30029__auto___30594,G__30422_30592,n__25737__auto___30590,jobs,results,process,async))
);


break;
case "async":
var c__30029__auto___30603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30591,c__30029__auto___30603,G__30422_30592,n__25737__auto___30590,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (__30591,c__30029__auto___30603,G__30422_30592,n__25737__auto___30590,jobs,results,process,async){
return (function (state_30462){
var state_val_30463 = (state_30462[(1)]);
if((state_val_30463 === (1))){
var state_30462__$1 = state_30462;
var statearr_30464_30604 = state_30462__$1;
(statearr_30464_30604[(2)] = null);

(statearr_30464_30604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (2))){
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30462__$1,(4),jobs);
} else {
if((state_val_30463 === (3))){
var inst_30460 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30462__$1,inst_30460);
} else {
if((state_val_30463 === (4))){
var inst_30452 = (state_30462[(2)]);
var inst_30453 = async.call(null,inst_30452);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30453)){
var statearr_30465_30605 = state_30462__$1;
(statearr_30465_30605[(1)] = (5));

} else {
var statearr_30466_30606 = state_30462__$1;
(statearr_30466_30606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (5))){
var state_30462__$1 = state_30462;
var statearr_30467_30607 = state_30462__$1;
(statearr_30467_30607[(2)] = null);

(statearr_30467_30607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (6))){
var state_30462__$1 = state_30462;
var statearr_30468_30608 = state_30462__$1;
(statearr_30468_30608[(2)] = null);

(statearr_30468_30608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (7))){
var inst_30458 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30469_30609 = state_30462__$1;
(statearr_30469_30609[(2)] = inst_30458);

(statearr_30469_30609[(1)] = (3));


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
});})(__30591,c__30029__auto___30603,G__30422_30592,n__25737__auto___30590,jobs,results,process,async))
;
return ((function (__30591,switch__29917__auto__,c__30029__auto___30603,G__30422_30592,n__25737__auto___30590,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0 = (function (){
var statearr_30473 = [null,null,null,null,null,null,null];
(statearr_30473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__);

(statearr_30473[(1)] = (1));

return statearr_30473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1 = (function (state_30462){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30474){if((e30474 instanceof Object)){
var ex__29921__auto__ = e30474;
var statearr_30475_30610 = state_30462;
(statearr_30475_30610[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30611 = state_30462;
state_30462 = G__30611;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = function(state_30462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1.call(this,state_30462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__;
})()
;})(__30591,switch__29917__auto__,c__30029__auto___30603,G__30422_30592,n__25737__auto___30590,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30476 = f__30030__auto__.call(null);
(statearr_30476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30603);

return statearr_30476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(__30591,c__30029__auto___30603,G__30422_30592,n__25737__auto___30590,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30612 = (__30591 + (1));
__30591 = G__30612;
continue;
} else {
}
break;
}

var c__30029__auto___30613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30613,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___30613,jobs,results,process,async){
return (function (state_30498){
var state_val_30499 = (state_30498[(1)]);
if((state_val_30499 === (1))){
var state_30498__$1 = state_30498;
var statearr_30500_30614 = state_30498__$1;
(statearr_30500_30614[(2)] = null);

(statearr_30500_30614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (2))){
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30498__$1,(4),from);
} else {
if((state_val_30499 === (3))){
var inst_30496 = (state_30498[(2)]);
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30498__$1,inst_30496);
} else {
if((state_val_30499 === (4))){
var inst_30479 = (state_30498[(7)]);
var inst_30479__$1 = (state_30498[(2)]);
var inst_30480 = (inst_30479__$1 == null);
var state_30498__$1 = (function (){var statearr_30501 = state_30498;
(statearr_30501[(7)] = inst_30479__$1);

return statearr_30501;
})();
if(cljs.core.truth_(inst_30480)){
var statearr_30502_30615 = state_30498__$1;
(statearr_30502_30615[(1)] = (5));

} else {
var statearr_30503_30616 = state_30498__$1;
(statearr_30503_30616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (5))){
var inst_30482 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30498__$1 = state_30498;
var statearr_30504_30617 = state_30498__$1;
(statearr_30504_30617[(2)] = inst_30482);

(statearr_30504_30617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (6))){
var inst_30479 = (state_30498[(7)]);
var inst_30484 = (state_30498[(8)]);
var inst_30484__$1 = cljs.core.async.chan.call(null,(1));
var inst_30485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30486 = [inst_30479,inst_30484__$1];
var inst_30487 = (new cljs.core.PersistentVector(null,2,(5),inst_30485,inst_30486,null));
var state_30498__$1 = (function (){var statearr_30505 = state_30498;
(statearr_30505[(8)] = inst_30484__$1);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30498__$1,(8),jobs,inst_30487);
} else {
if((state_val_30499 === (7))){
var inst_30494 = (state_30498[(2)]);
var state_30498__$1 = state_30498;
var statearr_30506_30618 = state_30498__$1;
(statearr_30506_30618[(2)] = inst_30494);

(statearr_30506_30618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (8))){
var inst_30484 = (state_30498[(8)]);
var inst_30489 = (state_30498[(2)]);
var state_30498__$1 = (function (){var statearr_30507 = state_30498;
(statearr_30507[(9)] = inst_30489);

return statearr_30507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30498__$1,(9),results,inst_30484);
} else {
if((state_val_30499 === (9))){
var inst_30491 = (state_30498[(2)]);
var state_30498__$1 = (function (){var statearr_30508 = state_30498;
(statearr_30508[(10)] = inst_30491);

return statearr_30508;
})();
var statearr_30509_30619 = state_30498__$1;
(statearr_30509_30619[(2)] = null);

(statearr_30509_30619[(1)] = (2));


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
});})(c__30029__auto___30613,jobs,results,process,async))
;
return ((function (switch__29917__auto__,c__30029__auto___30613,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0 = (function (){
var statearr_30513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__);

(statearr_30513[(1)] = (1));

return statearr_30513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1 = (function (state_30498){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30514){if((e30514 instanceof Object)){
var ex__29921__auto__ = e30514;
var statearr_30515_30620 = state_30498;
(statearr_30515_30620[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30621 = state_30498;
state_30498 = G__30621;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = function(state_30498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1.call(this,state_30498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___30613,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30516 = f__30030__auto__.call(null);
(statearr_30516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30613);

return statearr_30516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30613,jobs,results,process,async))
);


var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,jobs,results,process,async){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__,jobs,results,process,async){
return (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (7))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30556_30622 = state_30554__$1;
(statearr_30556_30622[(2)] = inst_30550);

(statearr_30556_30622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (20))){
var state_30554__$1 = state_30554;
var statearr_30557_30623 = state_30554__$1;
(statearr_30557_30623[(2)] = null);

(statearr_30557_30623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (1))){
var state_30554__$1 = state_30554;
var statearr_30558_30624 = state_30554__$1;
(statearr_30558_30624[(2)] = null);

(statearr_30558_30624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (4))){
var inst_30519 = (state_30554[(7)]);
var inst_30519__$1 = (state_30554[(2)]);
var inst_30520 = (inst_30519__$1 == null);
var state_30554__$1 = (function (){var statearr_30559 = state_30554;
(statearr_30559[(7)] = inst_30519__$1);

return statearr_30559;
})();
if(cljs.core.truth_(inst_30520)){
var statearr_30560_30625 = state_30554__$1;
(statearr_30560_30625[(1)] = (5));

} else {
var statearr_30561_30626 = state_30554__$1;
(statearr_30561_30626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (15))){
var inst_30532 = (state_30554[(8)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30554__$1,(18),to,inst_30532);
} else {
if((state_val_30555 === (21))){
var inst_30545 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30562_30627 = state_30554__$1;
(statearr_30562_30627[(2)] = inst_30545);

(statearr_30562_30627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (13))){
var inst_30547 = (state_30554[(2)]);
var state_30554__$1 = (function (){var statearr_30563 = state_30554;
(statearr_30563[(9)] = inst_30547);

return statearr_30563;
})();
var statearr_30564_30628 = state_30554__$1;
(statearr_30564_30628[(2)] = null);

(statearr_30564_30628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (6))){
var inst_30519 = (state_30554[(7)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(11),inst_30519);
} else {
if((state_val_30555 === (17))){
var inst_30540 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30540)){
var statearr_30565_30629 = state_30554__$1;
(statearr_30565_30629[(1)] = (19));

} else {
var statearr_30566_30630 = state_30554__$1;
(statearr_30566_30630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (12))){
var inst_30529 = (state_30554[(10)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(14),inst_30529);
} else {
if((state_val_30555 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(4),results);
} else {
if((state_val_30555 === (19))){
var state_30554__$1 = state_30554;
var statearr_30567_30631 = state_30554__$1;
(statearr_30567_30631[(2)] = null);

(statearr_30567_30631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (11))){
var inst_30529 = (state_30554[(2)]);
var state_30554__$1 = (function (){var statearr_30568 = state_30554;
(statearr_30568[(10)] = inst_30529);

return statearr_30568;
})();
var statearr_30569_30632 = state_30554__$1;
(statearr_30569_30632[(2)] = null);

(statearr_30569_30632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (9))){
var state_30554__$1 = state_30554;
var statearr_30570_30633 = state_30554__$1;
(statearr_30570_30633[(2)] = null);

(statearr_30570_30633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (5))){
var state_30554__$1 = state_30554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30571_30634 = state_30554__$1;
(statearr_30571_30634[(1)] = (8));

} else {
var statearr_30572_30635 = state_30554__$1;
(statearr_30572_30635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (14))){
var inst_30534 = (state_30554[(11)]);
var inst_30532 = (state_30554[(8)]);
var inst_30532__$1 = (state_30554[(2)]);
var inst_30533 = (inst_30532__$1 == null);
var inst_30534__$1 = cljs.core.not.call(null,inst_30533);
var state_30554__$1 = (function (){var statearr_30573 = state_30554;
(statearr_30573[(11)] = inst_30534__$1);

(statearr_30573[(8)] = inst_30532__$1);

return statearr_30573;
})();
if(inst_30534__$1){
var statearr_30574_30636 = state_30554__$1;
(statearr_30574_30636[(1)] = (15));

} else {
var statearr_30575_30637 = state_30554__$1;
(statearr_30575_30637[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (16))){
var inst_30534 = (state_30554[(11)]);
var state_30554__$1 = state_30554;
var statearr_30576_30638 = state_30554__$1;
(statearr_30576_30638[(2)] = inst_30534);

(statearr_30576_30638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (10))){
var inst_30526 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30577_30639 = state_30554__$1;
(statearr_30577_30639[(2)] = inst_30526);

(statearr_30577_30639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (18))){
var inst_30537 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30578_30640 = state_30554__$1;
(statearr_30578_30640[(2)] = inst_30537);

(statearr_30578_30640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (8))){
var inst_30523 = cljs.core.async.close_BANG_.call(null,to);
var state_30554__$1 = state_30554;
var statearr_30579_30641 = state_30554__$1;
(statearr_30579_30641[(2)] = inst_30523);

(statearr_30579_30641[(1)] = (10));


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
});})(c__30029__auto__,jobs,results,process,async))
;
return ((function (switch__29917__auto__,c__30029__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0 = (function (){
var statearr_30583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__);

(statearr_30583[(1)] = (1));

return statearr_30583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1 = (function (state_30554){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30584){if((e30584 instanceof Object)){
var ex__29921__auto__ = e30584;
var statearr_30585_30642 = state_30554;
(statearr_30585_30642[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30643 = state_30554;
state_30554 = G__30643;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__,jobs,results,process,async))
})();
var state__30031__auto__ = (function (){var statearr_30586 = f__30030__auto__.call(null);
(statearr_30586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,jobs,results,process,async))
);

return c__30029__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30644 = [];
var len__25897__auto___30647 = arguments.length;
var i__25898__auto___30648 = (0);
while(true){
if((i__25898__auto___30648 < len__25897__auto___30647)){
args30644.push((arguments[i__25898__auto___30648]));

var G__30649 = (i__25898__auto___30648 + (1));
i__25898__auto___30648 = G__30649;
continue;
} else {
}
break;
}

var G__30646 = args30644.length;
switch (G__30646) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30644.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args30651 = [];
var len__25897__auto___30654 = arguments.length;
var i__25898__auto___30655 = (0);
while(true){
if((i__25898__auto___30655 < len__25897__auto___30654)){
args30651.push((arguments[i__25898__auto___30655]));

var G__30656 = (i__25898__auto___30655 + (1));
i__25898__auto___30655 = G__30656;
continue;
} else {
}
break;
}

var G__30653 = args30651.length;
switch (G__30653) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30651.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args30658 = [];
var len__25897__auto___30711 = arguments.length;
var i__25898__auto___30712 = (0);
while(true){
if((i__25898__auto___30712 < len__25897__auto___30711)){
args30658.push((arguments[i__25898__auto___30712]));

var G__30713 = (i__25898__auto___30712 + (1));
i__25898__auto___30712 = G__30713;
continue;
} else {
}
break;
}

var G__30660 = args30658.length;
switch (G__30660) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30658.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30029__auto___30715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___30715,tc,fc){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___30715,tc,fc){
return (function (state_30686){
var state_val_30687 = (state_30686[(1)]);
if((state_val_30687 === (7))){
var inst_30682 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30688_30716 = state_30686__$1;
(statearr_30688_30716[(2)] = inst_30682);

(statearr_30688_30716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (1))){
var state_30686__$1 = state_30686;
var statearr_30689_30717 = state_30686__$1;
(statearr_30689_30717[(2)] = null);

(statearr_30689_30717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (4))){
var inst_30663 = (state_30686[(7)]);
var inst_30663__$1 = (state_30686[(2)]);
var inst_30664 = (inst_30663__$1 == null);
var state_30686__$1 = (function (){var statearr_30690 = state_30686;
(statearr_30690[(7)] = inst_30663__$1);

return statearr_30690;
})();
if(cljs.core.truth_(inst_30664)){
var statearr_30691_30718 = state_30686__$1;
(statearr_30691_30718[(1)] = (5));

} else {
var statearr_30692_30719 = state_30686__$1;
(statearr_30692_30719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (13))){
var state_30686__$1 = state_30686;
var statearr_30693_30720 = state_30686__$1;
(statearr_30693_30720[(2)] = null);

(statearr_30693_30720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (6))){
var inst_30663 = (state_30686[(7)]);
var inst_30669 = p.call(null,inst_30663);
var state_30686__$1 = state_30686;
if(cljs.core.truth_(inst_30669)){
var statearr_30694_30721 = state_30686__$1;
(statearr_30694_30721[(1)] = (9));

} else {
var statearr_30695_30722 = state_30686__$1;
(statearr_30695_30722[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (3))){
var inst_30684 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30686__$1,inst_30684);
} else {
if((state_val_30687 === (12))){
var state_30686__$1 = state_30686;
var statearr_30696_30723 = state_30686__$1;
(statearr_30696_30723[(2)] = null);

(statearr_30696_30723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (2))){
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30686__$1,(4),ch);
} else {
if((state_val_30687 === (11))){
var inst_30663 = (state_30686[(7)]);
var inst_30673 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30686__$1,(8),inst_30673,inst_30663);
} else {
if((state_val_30687 === (9))){
var state_30686__$1 = state_30686;
var statearr_30697_30724 = state_30686__$1;
(statearr_30697_30724[(2)] = tc);

(statearr_30697_30724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (5))){
var inst_30666 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30667 = cljs.core.async.close_BANG_.call(null,fc);
var state_30686__$1 = (function (){var statearr_30698 = state_30686;
(statearr_30698[(8)] = inst_30666);

return statearr_30698;
})();
var statearr_30699_30725 = state_30686__$1;
(statearr_30699_30725[(2)] = inst_30667);

(statearr_30699_30725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (14))){
var inst_30680 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30700_30726 = state_30686__$1;
(statearr_30700_30726[(2)] = inst_30680);

(statearr_30700_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (10))){
var state_30686__$1 = state_30686;
var statearr_30701_30727 = state_30686__$1;
(statearr_30701_30727[(2)] = fc);

(statearr_30701_30727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (8))){
var inst_30675 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
if(cljs.core.truth_(inst_30675)){
var statearr_30702_30728 = state_30686__$1;
(statearr_30702_30728[(1)] = (12));

} else {
var statearr_30703_30729 = state_30686__$1;
(statearr_30703_30729[(1)] = (13));

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
});})(c__30029__auto___30715,tc,fc))
;
return ((function (switch__29917__auto__,c__30029__auto___30715,tc,fc){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_30707 = [null,null,null,null,null,null,null,null,null];
(statearr_30707[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_30707[(1)] = (1));

return statearr_30707;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_30686){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30708){if((e30708 instanceof Object)){
var ex__29921__auto__ = e30708;
var statearr_30709_30730 = state_30686;
(statearr_30709_30730[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30731 = state_30686;
state_30686 = G__30731;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_30686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_30686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___30715,tc,fc))
})();
var state__30031__auto__ = (function (){var statearr_30710 = f__30030__auto__.call(null);
(statearr_30710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___30715);

return statearr_30710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___30715,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_30795){
var state_val_30796 = (state_30795[(1)]);
if((state_val_30796 === (7))){
var inst_30791 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30797_30818 = state_30795__$1;
(statearr_30797_30818[(2)] = inst_30791);

(statearr_30797_30818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (1))){
var inst_30775 = init;
var state_30795__$1 = (function (){var statearr_30798 = state_30795;
(statearr_30798[(7)] = inst_30775);

return statearr_30798;
})();
var statearr_30799_30819 = state_30795__$1;
(statearr_30799_30819[(2)] = null);

(statearr_30799_30819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (4))){
var inst_30778 = (state_30795[(8)]);
var inst_30778__$1 = (state_30795[(2)]);
var inst_30779 = (inst_30778__$1 == null);
var state_30795__$1 = (function (){var statearr_30800 = state_30795;
(statearr_30800[(8)] = inst_30778__$1);

return statearr_30800;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30801_30820 = state_30795__$1;
(statearr_30801_30820[(1)] = (5));

} else {
var statearr_30802_30821 = state_30795__$1;
(statearr_30802_30821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (6))){
var inst_30778 = (state_30795[(8)]);
var inst_30775 = (state_30795[(7)]);
var inst_30782 = (state_30795[(9)]);
var inst_30782__$1 = f.call(null,inst_30775,inst_30778);
var inst_30783 = cljs.core.reduced_QMARK_.call(null,inst_30782__$1);
var state_30795__$1 = (function (){var statearr_30803 = state_30795;
(statearr_30803[(9)] = inst_30782__$1);

return statearr_30803;
})();
if(inst_30783){
var statearr_30804_30822 = state_30795__$1;
(statearr_30804_30822[(1)] = (8));

} else {
var statearr_30805_30823 = state_30795__$1;
(statearr_30805_30823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (3))){
var inst_30793 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30795__$1,inst_30793);
} else {
if((state_val_30796 === (2))){
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30795__$1,(4),ch);
} else {
if((state_val_30796 === (9))){
var inst_30782 = (state_30795[(9)]);
var inst_30775 = inst_30782;
var state_30795__$1 = (function (){var statearr_30806 = state_30795;
(statearr_30806[(7)] = inst_30775);

return statearr_30806;
})();
var statearr_30807_30824 = state_30795__$1;
(statearr_30807_30824[(2)] = null);

(statearr_30807_30824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (5))){
var inst_30775 = (state_30795[(7)]);
var state_30795__$1 = state_30795;
var statearr_30808_30825 = state_30795__$1;
(statearr_30808_30825[(2)] = inst_30775);

(statearr_30808_30825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (10))){
var inst_30789 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30809_30826 = state_30795__$1;
(statearr_30809_30826[(2)] = inst_30789);

(statearr_30809_30826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (8))){
var inst_30782 = (state_30795[(9)]);
var inst_30785 = cljs.core.deref.call(null,inst_30782);
var state_30795__$1 = state_30795;
var statearr_30810_30827 = state_30795__$1;
(statearr_30810_30827[(2)] = inst_30785);

(statearr_30810_30827[(1)] = (10));


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
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29918__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29918__auto____0 = (function (){
var statearr_30814 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30814[(0)] = cljs$core$async$reduce_$_state_machine__29918__auto__);

(statearr_30814[(1)] = (1));

return statearr_30814;
});
var cljs$core$async$reduce_$_state_machine__29918__auto____1 = (function (state_30795){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30815){if((e30815 instanceof Object)){
var ex__29921__auto__ = e30815;
var statearr_30816_30828 = state_30795;
(statearr_30816_30828[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30829 = state_30795;
state_30795 = G__30829;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29918__auto__ = function(state_30795){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29918__auto____1.call(this,state_30795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29918__auto____0;
cljs$core$async$reduce_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29918__auto____1;
return cljs$core$async$reduce_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_30817 = f__30030__auto__.call(null);
(statearr_30817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,f__$1){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__,f__$1){
return (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (1))){
var inst_30844 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30849__$1,(2),inst_30844);
} else {
if((state_val_30850 === (2))){
var inst_30846 = (state_30849[(2)]);
var inst_30847 = f__$1.call(null,inst_30846);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30849__$1,inst_30847);
} else {
return null;
}
}
});})(c__30029__auto__,f__$1))
;
return ((function (switch__29917__auto__,c__30029__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29918__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29918__auto____0 = (function (){
var statearr_30854 = [null,null,null,null,null,null,null];
(statearr_30854[(0)] = cljs$core$async$transduce_$_state_machine__29918__auto__);

(statearr_30854[(1)] = (1));

return statearr_30854;
});
var cljs$core$async$transduce_$_state_machine__29918__auto____1 = (function (state_30849){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30855){if((e30855 instanceof Object)){
var ex__29921__auto__ = e30855;
var statearr_30856_30858 = state_30849;
(statearr_30856_30858[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30859 = state_30849;
state_30849 = G__30859;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29918__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29918__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29918__auto____0;
cljs$core$async$transduce_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29918__auto____1;
return cljs$core$async$transduce_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__,f__$1))
})();
var state__30031__auto__ = (function (){var statearr_30857 = f__30030__auto__.call(null);
(statearr_30857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,f__$1))
);

return c__30029__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30860 = [];
var len__25897__auto___30912 = arguments.length;
var i__25898__auto___30913 = (0);
while(true){
if((i__25898__auto___30913 < len__25897__auto___30912)){
args30860.push((arguments[i__25898__auto___30913]));

var G__30914 = (i__25898__auto___30913 + (1));
i__25898__auto___30913 = G__30914;
continue;
} else {
}
break;
}

var G__30862 = args30860.length;
switch (G__30862) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30860.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_30887){
var state_val_30888 = (state_30887[(1)]);
if((state_val_30888 === (7))){
var inst_30869 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30889_30916 = state_30887__$1;
(statearr_30889_30916[(2)] = inst_30869);

(statearr_30889_30916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (1))){
var inst_30863 = cljs.core.seq.call(null,coll);
var inst_30864 = inst_30863;
var state_30887__$1 = (function (){var statearr_30890 = state_30887;
(statearr_30890[(7)] = inst_30864);

return statearr_30890;
})();
var statearr_30891_30917 = state_30887__$1;
(statearr_30891_30917[(2)] = null);

(statearr_30891_30917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (4))){
var inst_30864 = (state_30887[(7)]);
var inst_30867 = cljs.core.first.call(null,inst_30864);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30887__$1,(7),ch,inst_30867);
} else {
if((state_val_30888 === (13))){
var inst_30881 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30892_30918 = state_30887__$1;
(statearr_30892_30918[(2)] = inst_30881);

(statearr_30892_30918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (6))){
var inst_30872 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
if(cljs.core.truth_(inst_30872)){
var statearr_30893_30919 = state_30887__$1;
(statearr_30893_30919[(1)] = (8));

} else {
var statearr_30894_30920 = state_30887__$1;
(statearr_30894_30920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (3))){
var inst_30885 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30887__$1,inst_30885);
} else {
if((state_val_30888 === (12))){
var state_30887__$1 = state_30887;
var statearr_30895_30921 = state_30887__$1;
(statearr_30895_30921[(2)] = null);

(statearr_30895_30921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (2))){
var inst_30864 = (state_30887[(7)]);
var state_30887__$1 = state_30887;
if(cljs.core.truth_(inst_30864)){
var statearr_30896_30922 = state_30887__$1;
(statearr_30896_30922[(1)] = (4));

} else {
var statearr_30897_30923 = state_30887__$1;
(statearr_30897_30923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (11))){
var inst_30878 = cljs.core.async.close_BANG_.call(null,ch);
var state_30887__$1 = state_30887;
var statearr_30898_30924 = state_30887__$1;
(statearr_30898_30924[(2)] = inst_30878);

(statearr_30898_30924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (9))){
var state_30887__$1 = state_30887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30899_30925 = state_30887__$1;
(statearr_30899_30925[(1)] = (11));

} else {
var statearr_30900_30926 = state_30887__$1;
(statearr_30900_30926[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (5))){
var inst_30864 = (state_30887[(7)]);
var state_30887__$1 = state_30887;
var statearr_30901_30927 = state_30887__$1;
(statearr_30901_30927[(2)] = inst_30864);

(statearr_30901_30927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (10))){
var inst_30883 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30902_30928 = state_30887__$1;
(statearr_30902_30928[(2)] = inst_30883);

(statearr_30902_30928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (8))){
var inst_30864 = (state_30887[(7)]);
var inst_30874 = cljs.core.next.call(null,inst_30864);
var inst_30864__$1 = inst_30874;
var state_30887__$1 = (function (){var statearr_30903 = state_30887;
(statearr_30903[(7)] = inst_30864__$1);

return statearr_30903;
})();
var statearr_30904_30929 = state_30887__$1;
(statearr_30904_30929[(2)] = null);

(statearr_30904_30929[(1)] = (2));


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
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_30908 = [null,null,null,null,null,null,null,null];
(statearr_30908[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_30908[(1)] = (1));

return statearr_30908;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_30887){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_30887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e30909){if((e30909 instanceof Object)){
var ex__29921__auto__ = e30909;
var statearr_30910_30930 = state_30887;
(statearr_30910_30930[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30931 = state_30887;
state_30887 = G__30931;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_30887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_30887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_30911 = f__30030__auto__.call(null);
(statearr_30911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25485__auto__ = (((_ == null))?null:_);
var m__25486__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,_);
} else {
var m__25486__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25486__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m,ch);
} else {
var m__25486__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m);
} else {
var m__25486__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31157 = (function (mult,ch,cs,meta31158){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31158 = meta31158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31159,meta31158__$1){
var self__ = this;
var _31159__$1 = this;
return (new cljs.core.async.t_cljs$core$async31157(self__.mult,self__.ch,self__.cs,meta31158__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31159){
var self__ = this;
var _31159__$1 = this;
return self__.meta31158;
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31158","meta31158",689157072,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31157";

cljs.core.async.t_cljs$core$async31157.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async31157");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31157 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31157(mult__$1,ch__$1,cs__$1,meta31158){
return (new cljs.core.async.t_cljs$core$async31157(mult__$1,ch__$1,cs__$1,meta31158));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31157(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30029__auto___31382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___31382,cs,m,dchan,dctr,done){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___31382,cs,m,dchan,dctr,done){
return (function (state_31294){
var state_val_31295 = (state_31294[(1)]);
if((state_val_31295 === (7))){
var inst_31290 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31296_31383 = state_31294__$1;
(statearr_31296_31383[(2)] = inst_31290);

(statearr_31296_31383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (20))){
var inst_31193 = (state_31294[(7)]);
var inst_31205 = cljs.core.first.call(null,inst_31193);
var inst_31206 = cljs.core.nth.call(null,inst_31205,(0),null);
var inst_31207 = cljs.core.nth.call(null,inst_31205,(1),null);
var state_31294__$1 = (function (){var statearr_31297 = state_31294;
(statearr_31297[(8)] = inst_31206);

return statearr_31297;
})();
if(cljs.core.truth_(inst_31207)){
var statearr_31298_31384 = state_31294__$1;
(statearr_31298_31384[(1)] = (22));

} else {
var statearr_31299_31385 = state_31294__$1;
(statearr_31299_31385[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (27))){
var inst_31162 = (state_31294[(9)]);
var inst_31235 = (state_31294[(10)]);
var inst_31237 = (state_31294[(11)]);
var inst_31242 = (state_31294[(12)]);
var inst_31242__$1 = cljs.core._nth.call(null,inst_31235,inst_31237);
var inst_31243 = cljs.core.async.put_BANG_.call(null,inst_31242__$1,inst_31162,done);
var state_31294__$1 = (function (){var statearr_31300 = state_31294;
(statearr_31300[(12)] = inst_31242__$1);

return statearr_31300;
})();
if(cljs.core.truth_(inst_31243)){
var statearr_31301_31386 = state_31294__$1;
(statearr_31301_31386[(1)] = (30));

} else {
var statearr_31302_31387 = state_31294__$1;
(statearr_31302_31387[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (1))){
var state_31294__$1 = state_31294;
var statearr_31303_31388 = state_31294__$1;
(statearr_31303_31388[(2)] = null);

(statearr_31303_31388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (24))){
var inst_31193 = (state_31294[(7)]);
var inst_31212 = (state_31294[(2)]);
var inst_31213 = cljs.core.next.call(null,inst_31193);
var inst_31171 = inst_31213;
var inst_31172 = null;
var inst_31173 = (0);
var inst_31174 = (0);
var state_31294__$1 = (function (){var statearr_31304 = state_31294;
(statearr_31304[(13)] = inst_31212);

(statearr_31304[(14)] = inst_31171);

(statearr_31304[(15)] = inst_31172);

(statearr_31304[(16)] = inst_31173);

(statearr_31304[(17)] = inst_31174);

return statearr_31304;
})();
var statearr_31305_31389 = state_31294__$1;
(statearr_31305_31389[(2)] = null);

(statearr_31305_31389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (39))){
var state_31294__$1 = state_31294;
var statearr_31309_31390 = state_31294__$1;
(statearr_31309_31390[(2)] = null);

(statearr_31309_31390[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (4))){
var inst_31162 = (state_31294[(9)]);
var inst_31162__$1 = (state_31294[(2)]);
var inst_31163 = (inst_31162__$1 == null);
var state_31294__$1 = (function (){var statearr_31310 = state_31294;
(statearr_31310[(9)] = inst_31162__$1);

return statearr_31310;
})();
if(cljs.core.truth_(inst_31163)){
var statearr_31311_31391 = state_31294__$1;
(statearr_31311_31391[(1)] = (5));

} else {
var statearr_31312_31392 = state_31294__$1;
(statearr_31312_31392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (15))){
var inst_31171 = (state_31294[(14)]);
var inst_31172 = (state_31294[(15)]);
var inst_31173 = (state_31294[(16)]);
var inst_31174 = (state_31294[(17)]);
var inst_31189 = (state_31294[(2)]);
var inst_31190 = (inst_31174 + (1));
var tmp31306 = inst_31171;
var tmp31307 = inst_31172;
var tmp31308 = inst_31173;
var inst_31171__$1 = tmp31306;
var inst_31172__$1 = tmp31307;
var inst_31173__$1 = tmp31308;
var inst_31174__$1 = inst_31190;
var state_31294__$1 = (function (){var statearr_31313 = state_31294;
(statearr_31313[(14)] = inst_31171__$1);

(statearr_31313[(15)] = inst_31172__$1);

(statearr_31313[(16)] = inst_31173__$1);

(statearr_31313[(17)] = inst_31174__$1);

(statearr_31313[(18)] = inst_31189);

return statearr_31313;
})();
var statearr_31314_31393 = state_31294__$1;
(statearr_31314_31393[(2)] = null);

(statearr_31314_31393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (21))){
var inst_31216 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31318_31394 = state_31294__$1;
(statearr_31318_31394[(2)] = inst_31216);

(statearr_31318_31394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (31))){
var inst_31242 = (state_31294[(12)]);
var inst_31246 = done.call(null,null);
var inst_31247 = cljs.core.async.untap_STAR_.call(null,m,inst_31242);
var state_31294__$1 = (function (){var statearr_31319 = state_31294;
(statearr_31319[(19)] = inst_31246);

return statearr_31319;
})();
var statearr_31320_31395 = state_31294__$1;
(statearr_31320_31395[(2)] = inst_31247);

(statearr_31320_31395[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (32))){
var inst_31236 = (state_31294[(20)]);
var inst_31234 = (state_31294[(21)]);
var inst_31235 = (state_31294[(10)]);
var inst_31237 = (state_31294[(11)]);
var inst_31249 = (state_31294[(2)]);
var inst_31250 = (inst_31237 + (1));
var tmp31315 = inst_31236;
var tmp31316 = inst_31234;
var tmp31317 = inst_31235;
var inst_31234__$1 = tmp31316;
var inst_31235__$1 = tmp31317;
var inst_31236__$1 = tmp31315;
var inst_31237__$1 = inst_31250;
var state_31294__$1 = (function (){var statearr_31321 = state_31294;
(statearr_31321[(20)] = inst_31236__$1);

(statearr_31321[(22)] = inst_31249);

(statearr_31321[(21)] = inst_31234__$1);

(statearr_31321[(10)] = inst_31235__$1);

(statearr_31321[(11)] = inst_31237__$1);

return statearr_31321;
})();
var statearr_31322_31396 = state_31294__$1;
(statearr_31322_31396[(2)] = null);

(statearr_31322_31396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (40))){
var inst_31262 = (state_31294[(23)]);
var inst_31266 = done.call(null,null);
var inst_31267 = cljs.core.async.untap_STAR_.call(null,m,inst_31262);
var state_31294__$1 = (function (){var statearr_31323 = state_31294;
(statearr_31323[(24)] = inst_31266);

return statearr_31323;
})();
var statearr_31324_31397 = state_31294__$1;
(statearr_31324_31397[(2)] = inst_31267);

(statearr_31324_31397[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (33))){
var inst_31253 = (state_31294[(25)]);
var inst_31255 = cljs.core.chunked_seq_QMARK_.call(null,inst_31253);
var state_31294__$1 = state_31294;
if(inst_31255){
var statearr_31325_31398 = state_31294__$1;
(statearr_31325_31398[(1)] = (36));

} else {
var statearr_31326_31399 = state_31294__$1;
(statearr_31326_31399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (13))){
var inst_31183 = (state_31294[(26)]);
var inst_31186 = cljs.core.async.close_BANG_.call(null,inst_31183);
var state_31294__$1 = state_31294;
var statearr_31327_31400 = state_31294__$1;
(statearr_31327_31400[(2)] = inst_31186);

(statearr_31327_31400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (22))){
var inst_31206 = (state_31294[(8)]);
var inst_31209 = cljs.core.async.close_BANG_.call(null,inst_31206);
var state_31294__$1 = state_31294;
var statearr_31328_31401 = state_31294__$1;
(statearr_31328_31401[(2)] = inst_31209);

(statearr_31328_31401[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (36))){
var inst_31253 = (state_31294[(25)]);
var inst_31257 = cljs.core.chunk_first.call(null,inst_31253);
var inst_31258 = cljs.core.chunk_rest.call(null,inst_31253);
var inst_31259 = cljs.core.count.call(null,inst_31257);
var inst_31234 = inst_31258;
var inst_31235 = inst_31257;
var inst_31236 = inst_31259;
var inst_31237 = (0);
var state_31294__$1 = (function (){var statearr_31329 = state_31294;
(statearr_31329[(20)] = inst_31236);

(statearr_31329[(21)] = inst_31234);

(statearr_31329[(10)] = inst_31235);

(statearr_31329[(11)] = inst_31237);

return statearr_31329;
})();
var statearr_31330_31402 = state_31294__$1;
(statearr_31330_31402[(2)] = null);

(statearr_31330_31402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (41))){
var inst_31253 = (state_31294[(25)]);
var inst_31269 = (state_31294[(2)]);
var inst_31270 = cljs.core.next.call(null,inst_31253);
var inst_31234 = inst_31270;
var inst_31235 = null;
var inst_31236 = (0);
var inst_31237 = (0);
var state_31294__$1 = (function (){var statearr_31331 = state_31294;
(statearr_31331[(20)] = inst_31236);

(statearr_31331[(27)] = inst_31269);

(statearr_31331[(21)] = inst_31234);

(statearr_31331[(10)] = inst_31235);

(statearr_31331[(11)] = inst_31237);

return statearr_31331;
})();
var statearr_31332_31403 = state_31294__$1;
(statearr_31332_31403[(2)] = null);

(statearr_31332_31403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (43))){
var state_31294__$1 = state_31294;
var statearr_31333_31404 = state_31294__$1;
(statearr_31333_31404[(2)] = null);

(statearr_31333_31404[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (29))){
var inst_31278 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31334_31405 = state_31294__$1;
(statearr_31334_31405[(2)] = inst_31278);

(statearr_31334_31405[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (44))){
var inst_31287 = (state_31294[(2)]);
var state_31294__$1 = (function (){var statearr_31335 = state_31294;
(statearr_31335[(28)] = inst_31287);

return statearr_31335;
})();
var statearr_31336_31406 = state_31294__$1;
(statearr_31336_31406[(2)] = null);

(statearr_31336_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (6))){
var inst_31226 = (state_31294[(29)]);
var inst_31225 = cljs.core.deref.call(null,cs);
var inst_31226__$1 = cljs.core.keys.call(null,inst_31225);
var inst_31227 = cljs.core.count.call(null,inst_31226__$1);
var inst_31228 = cljs.core.reset_BANG_.call(null,dctr,inst_31227);
var inst_31233 = cljs.core.seq.call(null,inst_31226__$1);
var inst_31234 = inst_31233;
var inst_31235 = null;
var inst_31236 = (0);
var inst_31237 = (0);
var state_31294__$1 = (function (){var statearr_31337 = state_31294;
(statearr_31337[(20)] = inst_31236);

(statearr_31337[(30)] = inst_31228);

(statearr_31337[(21)] = inst_31234);

(statearr_31337[(10)] = inst_31235);

(statearr_31337[(29)] = inst_31226__$1);

(statearr_31337[(11)] = inst_31237);

return statearr_31337;
})();
var statearr_31338_31407 = state_31294__$1;
(statearr_31338_31407[(2)] = null);

(statearr_31338_31407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (28))){
var inst_31234 = (state_31294[(21)]);
var inst_31253 = (state_31294[(25)]);
var inst_31253__$1 = cljs.core.seq.call(null,inst_31234);
var state_31294__$1 = (function (){var statearr_31339 = state_31294;
(statearr_31339[(25)] = inst_31253__$1);

return statearr_31339;
})();
if(inst_31253__$1){
var statearr_31340_31408 = state_31294__$1;
(statearr_31340_31408[(1)] = (33));

} else {
var statearr_31341_31409 = state_31294__$1;
(statearr_31341_31409[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (25))){
var inst_31236 = (state_31294[(20)]);
var inst_31237 = (state_31294[(11)]);
var inst_31239 = (inst_31237 < inst_31236);
var inst_31240 = inst_31239;
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31240)){
var statearr_31342_31410 = state_31294__$1;
(statearr_31342_31410[(1)] = (27));

} else {
var statearr_31343_31411 = state_31294__$1;
(statearr_31343_31411[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (34))){
var state_31294__$1 = state_31294;
var statearr_31344_31412 = state_31294__$1;
(statearr_31344_31412[(2)] = null);

(statearr_31344_31412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (17))){
var state_31294__$1 = state_31294;
var statearr_31345_31413 = state_31294__$1;
(statearr_31345_31413[(2)] = null);

(statearr_31345_31413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (3))){
var inst_31292 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31294__$1,inst_31292);
} else {
if((state_val_31295 === (12))){
var inst_31221 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31346_31414 = state_31294__$1;
(statearr_31346_31414[(2)] = inst_31221);

(statearr_31346_31414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (2))){
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31294__$1,(4),ch);
} else {
if((state_val_31295 === (23))){
var state_31294__$1 = state_31294;
var statearr_31347_31415 = state_31294__$1;
(statearr_31347_31415[(2)] = null);

(statearr_31347_31415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (35))){
var inst_31276 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31348_31416 = state_31294__$1;
(statearr_31348_31416[(2)] = inst_31276);

(statearr_31348_31416[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (19))){
var inst_31193 = (state_31294[(7)]);
var inst_31197 = cljs.core.chunk_first.call(null,inst_31193);
var inst_31198 = cljs.core.chunk_rest.call(null,inst_31193);
var inst_31199 = cljs.core.count.call(null,inst_31197);
var inst_31171 = inst_31198;
var inst_31172 = inst_31197;
var inst_31173 = inst_31199;
var inst_31174 = (0);
var state_31294__$1 = (function (){var statearr_31349 = state_31294;
(statearr_31349[(14)] = inst_31171);

(statearr_31349[(15)] = inst_31172);

(statearr_31349[(16)] = inst_31173);

(statearr_31349[(17)] = inst_31174);

return statearr_31349;
})();
var statearr_31350_31417 = state_31294__$1;
(statearr_31350_31417[(2)] = null);

(statearr_31350_31417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (11))){
var inst_31171 = (state_31294[(14)]);
var inst_31193 = (state_31294[(7)]);
var inst_31193__$1 = cljs.core.seq.call(null,inst_31171);
var state_31294__$1 = (function (){var statearr_31351 = state_31294;
(statearr_31351[(7)] = inst_31193__$1);

return statearr_31351;
})();
if(inst_31193__$1){
var statearr_31352_31418 = state_31294__$1;
(statearr_31352_31418[(1)] = (16));

} else {
var statearr_31353_31419 = state_31294__$1;
(statearr_31353_31419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (9))){
var inst_31223 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31354_31420 = state_31294__$1;
(statearr_31354_31420[(2)] = inst_31223);

(statearr_31354_31420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (5))){
var inst_31169 = cljs.core.deref.call(null,cs);
var inst_31170 = cljs.core.seq.call(null,inst_31169);
var inst_31171 = inst_31170;
var inst_31172 = null;
var inst_31173 = (0);
var inst_31174 = (0);
var state_31294__$1 = (function (){var statearr_31355 = state_31294;
(statearr_31355[(14)] = inst_31171);

(statearr_31355[(15)] = inst_31172);

(statearr_31355[(16)] = inst_31173);

(statearr_31355[(17)] = inst_31174);

return statearr_31355;
})();
var statearr_31356_31421 = state_31294__$1;
(statearr_31356_31421[(2)] = null);

(statearr_31356_31421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (14))){
var state_31294__$1 = state_31294;
var statearr_31357_31422 = state_31294__$1;
(statearr_31357_31422[(2)] = null);

(statearr_31357_31422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (45))){
var inst_31284 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31358_31423 = state_31294__$1;
(statearr_31358_31423[(2)] = inst_31284);

(statearr_31358_31423[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (26))){
var inst_31226 = (state_31294[(29)]);
var inst_31280 = (state_31294[(2)]);
var inst_31281 = cljs.core.seq.call(null,inst_31226);
var state_31294__$1 = (function (){var statearr_31359 = state_31294;
(statearr_31359[(31)] = inst_31280);

return statearr_31359;
})();
if(inst_31281){
var statearr_31360_31424 = state_31294__$1;
(statearr_31360_31424[(1)] = (42));

} else {
var statearr_31361_31425 = state_31294__$1;
(statearr_31361_31425[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (16))){
var inst_31193 = (state_31294[(7)]);
var inst_31195 = cljs.core.chunked_seq_QMARK_.call(null,inst_31193);
var state_31294__$1 = state_31294;
if(inst_31195){
var statearr_31362_31426 = state_31294__$1;
(statearr_31362_31426[(1)] = (19));

} else {
var statearr_31363_31427 = state_31294__$1;
(statearr_31363_31427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (38))){
var inst_31273 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31364_31428 = state_31294__$1;
(statearr_31364_31428[(2)] = inst_31273);

(statearr_31364_31428[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (30))){
var state_31294__$1 = state_31294;
var statearr_31365_31429 = state_31294__$1;
(statearr_31365_31429[(2)] = null);

(statearr_31365_31429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (10))){
var inst_31172 = (state_31294[(15)]);
var inst_31174 = (state_31294[(17)]);
var inst_31182 = cljs.core._nth.call(null,inst_31172,inst_31174);
var inst_31183 = cljs.core.nth.call(null,inst_31182,(0),null);
var inst_31184 = cljs.core.nth.call(null,inst_31182,(1),null);
var state_31294__$1 = (function (){var statearr_31366 = state_31294;
(statearr_31366[(26)] = inst_31183);

return statearr_31366;
})();
if(cljs.core.truth_(inst_31184)){
var statearr_31367_31430 = state_31294__$1;
(statearr_31367_31430[(1)] = (13));

} else {
var statearr_31368_31431 = state_31294__$1;
(statearr_31368_31431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (18))){
var inst_31219 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31369_31432 = state_31294__$1;
(statearr_31369_31432[(2)] = inst_31219);

(statearr_31369_31432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (42))){
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31294__$1,(45),dchan);
} else {
if((state_val_31295 === (37))){
var inst_31162 = (state_31294[(9)]);
var inst_31262 = (state_31294[(23)]);
var inst_31253 = (state_31294[(25)]);
var inst_31262__$1 = cljs.core.first.call(null,inst_31253);
var inst_31263 = cljs.core.async.put_BANG_.call(null,inst_31262__$1,inst_31162,done);
var state_31294__$1 = (function (){var statearr_31370 = state_31294;
(statearr_31370[(23)] = inst_31262__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31263)){
var statearr_31371_31433 = state_31294__$1;
(statearr_31371_31433[(1)] = (39));

} else {
var statearr_31372_31434 = state_31294__$1;
(statearr_31372_31434[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (8))){
var inst_31173 = (state_31294[(16)]);
var inst_31174 = (state_31294[(17)]);
var inst_31176 = (inst_31174 < inst_31173);
var inst_31177 = inst_31176;
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31177)){
var statearr_31373_31435 = state_31294__$1;
(statearr_31373_31435[(1)] = (10));

} else {
var statearr_31374_31436 = state_31294__$1;
(statearr_31374_31436[(1)] = (11));

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
});})(c__30029__auto___31382,cs,m,dchan,dctr,done))
;
return ((function (switch__29917__auto__,c__30029__auto___31382,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29918__auto__ = null;
var cljs$core$async$mult_$_state_machine__29918__auto____0 = (function (){
var statearr_31378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31378[(0)] = cljs$core$async$mult_$_state_machine__29918__auto__);

(statearr_31378[(1)] = (1));

return statearr_31378;
});
var cljs$core$async$mult_$_state_machine__29918__auto____1 = (function (state_31294){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_31294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e31379){if((e31379 instanceof Object)){
var ex__29921__auto__ = e31379;
var statearr_31380_31437 = state_31294;
(statearr_31380_31437[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31438 = state_31294;
state_31294 = G__31438;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29918__auto__ = function(state_31294){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29918__auto____1.call(this,state_31294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29918__auto____0;
cljs$core$async$mult_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29918__auto____1;
return cljs$core$async$mult_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___31382,cs,m,dchan,dctr,done))
})();
var state__30031__auto__ = (function (){var statearr_31381 = f__30030__auto__.call(null);
(statearr_31381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___31382);

return statearr_31381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___31382,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31439 = [];
var len__25897__auto___31442 = arguments.length;
var i__25898__auto___31443 = (0);
while(true){
if((i__25898__auto___31443 < len__25897__auto___31442)){
args31439.push((arguments[i__25898__auto___31443]));

var G__31444 = (i__25898__auto___31443 + (1));
i__25898__auto___31443 = G__31444;
continue;
} else {
}
break;
}

var G__31441 = args31439.length;
switch (G__31441) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31439.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m,ch);
} else {
var m__25486__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m,ch);
} else {
var m__25486__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m);
} else {
var m__25486__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m,state_map);
} else {
var m__25486__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25485__auto__ = (((m == null))?null:m);
var m__25486__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,m,mode);
} else {
var m__25486__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25904__auto__ = [];
var len__25897__auto___31456 = arguments.length;
var i__25898__auto___31457 = (0);
while(true){
if((i__25898__auto___31457 < len__25897__auto___31456)){
args__25904__auto__.push((arguments[i__25898__auto___31457]));

var G__31458 = (i__25898__auto___31457 + (1));
i__25898__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((3) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25905__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31450){
var map__31451 = p__31450;
var map__31451__$1 = ((((!((map__31451 == null)))?((((map__31451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31451):map__31451);
var opts = map__31451__$1;
var statearr_31453_31459 = state;
(statearr_31453_31459[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31451,map__31451__$1,opts){
return (function (val){
var statearr_31454_31460 = state;
(statearr_31454_31460[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31451,map__31451__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31455_31461 = state;
(statearr_31455_31461[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31446){
var G__31447 = cljs.core.first.call(null,seq31446);
var seq31446__$1 = cljs.core.next.call(null,seq31446);
var G__31448 = cljs.core.first.call(null,seq31446__$1);
var seq31446__$2 = cljs.core.next.call(null,seq31446__$1);
var G__31449 = cljs.core.first.call(null,seq31446__$2);
var seq31446__$3 = cljs.core.next.call(null,seq31446__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31447,G__31448,G__31449,seq31446__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31627 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31628){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31628 = meta31628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31629,meta31628__$1){
var self__ = this;
var _31629__$1 = this;
return (new cljs.core.async.t_cljs$core$async31627(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31628__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31629){
var self__ = this;
var _31629__$1 = this;
return self__.meta31628;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31628","meta31628",267603710,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31627";

cljs.core.async.t_cljs$core$async31627.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async31627");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31627 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31627(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31628){
return (new cljs.core.async.t_cljs$core$async31627(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31628));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31627(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30029__auto___31792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___31792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___31792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31729){
var state_val_31730 = (state_31729[(1)]);
if((state_val_31730 === (7))){
var inst_31645 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31731_31793 = state_31729__$1;
(statearr_31731_31793[(2)] = inst_31645);

(statearr_31731_31793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (20))){
var inst_31657 = (state_31729[(7)]);
var state_31729__$1 = state_31729;
var statearr_31732_31794 = state_31729__$1;
(statearr_31732_31794[(2)] = inst_31657);

(statearr_31732_31794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (27))){
var state_31729__$1 = state_31729;
var statearr_31733_31795 = state_31729__$1;
(statearr_31733_31795[(2)] = null);

(statearr_31733_31795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (1))){
var inst_31633 = (state_31729[(8)]);
var inst_31633__$1 = calc_state.call(null);
var inst_31635 = (inst_31633__$1 == null);
var inst_31636 = cljs.core.not.call(null,inst_31635);
var state_31729__$1 = (function (){var statearr_31734 = state_31729;
(statearr_31734[(8)] = inst_31633__$1);

return statearr_31734;
})();
if(inst_31636){
var statearr_31735_31796 = state_31729__$1;
(statearr_31735_31796[(1)] = (2));

} else {
var statearr_31736_31797 = state_31729__$1;
(statearr_31736_31797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (24))){
var inst_31689 = (state_31729[(9)]);
var inst_31703 = (state_31729[(10)]);
var inst_31680 = (state_31729[(11)]);
var inst_31703__$1 = inst_31680.call(null,inst_31689);
var state_31729__$1 = (function (){var statearr_31737 = state_31729;
(statearr_31737[(10)] = inst_31703__$1);

return statearr_31737;
})();
if(cljs.core.truth_(inst_31703__$1)){
var statearr_31738_31798 = state_31729__$1;
(statearr_31738_31798[(1)] = (29));

} else {
var statearr_31739_31799 = state_31729__$1;
(statearr_31739_31799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (4))){
var inst_31648 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31648)){
var statearr_31740_31800 = state_31729__$1;
(statearr_31740_31800[(1)] = (8));

} else {
var statearr_31741_31801 = state_31729__$1;
(statearr_31741_31801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (15))){
var inst_31674 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31674)){
var statearr_31742_31802 = state_31729__$1;
(statearr_31742_31802[(1)] = (19));

} else {
var statearr_31743_31803 = state_31729__$1;
(statearr_31743_31803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (21))){
var inst_31679 = (state_31729[(12)]);
var inst_31679__$1 = (state_31729[(2)]);
var inst_31680 = cljs.core.get.call(null,inst_31679__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31681 = cljs.core.get.call(null,inst_31679__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31682 = cljs.core.get.call(null,inst_31679__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31729__$1 = (function (){var statearr_31744 = state_31729;
(statearr_31744[(12)] = inst_31679__$1);

(statearr_31744[(13)] = inst_31681);

(statearr_31744[(11)] = inst_31680);

return statearr_31744;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31729__$1,(22),inst_31682);
} else {
if((state_val_31730 === (31))){
var inst_31711 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31711)){
var statearr_31745_31804 = state_31729__$1;
(statearr_31745_31804[(1)] = (32));

} else {
var statearr_31746_31805 = state_31729__$1;
(statearr_31746_31805[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (32))){
var inst_31688 = (state_31729[(14)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31729__$1,(35),out,inst_31688);
} else {
if((state_val_31730 === (33))){
var inst_31679 = (state_31729[(12)]);
var inst_31657 = inst_31679;
var state_31729__$1 = (function (){var statearr_31747 = state_31729;
(statearr_31747[(7)] = inst_31657);

return statearr_31747;
})();
var statearr_31748_31806 = state_31729__$1;
(statearr_31748_31806[(2)] = null);

(statearr_31748_31806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (13))){
var inst_31657 = (state_31729[(7)]);
var inst_31664 = inst_31657.cljs$lang$protocol_mask$partition0$;
var inst_31665 = (inst_31664 & (64));
var inst_31666 = inst_31657.cljs$core$ISeq$;
var inst_31667 = (inst_31665) || (inst_31666);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31667)){
var statearr_31749_31807 = state_31729__$1;
(statearr_31749_31807[(1)] = (16));

} else {
var statearr_31750_31808 = state_31729__$1;
(statearr_31750_31808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (22))){
var inst_31689 = (state_31729[(9)]);
var inst_31688 = (state_31729[(14)]);
var inst_31687 = (state_31729[(2)]);
var inst_31688__$1 = cljs.core.nth.call(null,inst_31687,(0),null);
var inst_31689__$1 = cljs.core.nth.call(null,inst_31687,(1),null);
var inst_31690 = (inst_31688__$1 == null);
var inst_31691 = cljs.core._EQ_.call(null,inst_31689__$1,change);
var inst_31692 = (inst_31690) || (inst_31691);
var state_31729__$1 = (function (){var statearr_31751 = state_31729;
(statearr_31751[(9)] = inst_31689__$1);

(statearr_31751[(14)] = inst_31688__$1);

return statearr_31751;
})();
if(cljs.core.truth_(inst_31692)){
var statearr_31752_31809 = state_31729__$1;
(statearr_31752_31809[(1)] = (23));

} else {
var statearr_31753_31810 = state_31729__$1;
(statearr_31753_31810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (36))){
var inst_31679 = (state_31729[(12)]);
var inst_31657 = inst_31679;
var state_31729__$1 = (function (){var statearr_31754 = state_31729;
(statearr_31754[(7)] = inst_31657);

return statearr_31754;
})();
var statearr_31755_31811 = state_31729__$1;
(statearr_31755_31811[(2)] = null);

(statearr_31755_31811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (29))){
var inst_31703 = (state_31729[(10)]);
var state_31729__$1 = state_31729;
var statearr_31756_31812 = state_31729__$1;
(statearr_31756_31812[(2)] = inst_31703);

(statearr_31756_31812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (6))){
var state_31729__$1 = state_31729;
var statearr_31757_31813 = state_31729__$1;
(statearr_31757_31813[(2)] = false);

(statearr_31757_31813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (28))){
var inst_31699 = (state_31729[(2)]);
var inst_31700 = calc_state.call(null);
var inst_31657 = inst_31700;
var state_31729__$1 = (function (){var statearr_31758 = state_31729;
(statearr_31758[(15)] = inst_31699);

(statearr_31758[(7)] = inst_31657);

return statearr_31758;
})();
var statearr_31759_31814 = state_31729__$1;
(statearr_31759_31814[(2)] = null);

(statearr_31759_31814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (25))){
var inst_31725 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31760_31815 = state_31729__$1;
(statearr_31760_31815[(2)] = inst_31725);

(statearr_31760_31815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (34))){
var inst_31723 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31761_31816 = state_31729__$1;
(statearr_31761_31816[(2)] = inst_31723);

(statearr_31761_31816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (17))){
var state_31729__$1 = state_31729;
var statearr_31762_31817 = state_31729__$1;
(statearr_31762_31817[(2)] = false);

(statearr_31762_31817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (3))){
var state_31729__$1 = state_31729;
var statearr_31763_31818 = state_31729__$1;
(statearr_31763_31818[(2)] = false);

(statearr_31763_31818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (12))){
var inst_31727 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31729__$1,inst_31727);
} else {
if((state_val_31730 === (2))){
var inst_31633 = (state_31729[(8)]);
var inst_31638 = inst_31633.cljs$lang$protocol_mask$partition0$;
var inst_31639 = (inst_31638 & (64));
var inst_31640 = inst_31633.cljs$core$ISeq$;
var inst_31641 = (inst_31639) || (inst_31640);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31641)){
var statearr_31764_31819 = state_31729__$1;
(statearr_31764_31819[(1)] = (5));

} else {
var statearr_31765_31820 = state_31729__$1;
(statearr_31765_31820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (23))){
var inst_31688 = (state_31729[(14)]);
var inst_31694 = (inst_31688 == null);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31694)){
var statearr_31766_31821 = state_31729__$1;
(statearr_31766_31821[(1)] = (26));

} else {
var statearr_31767_31822 = state_31729__$1;
(statearr_31767_31822[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (35))){
var inst_31714 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31714)){
var statearr_31768_31823 = state_31729__$1;
(statearr_31768_31823[(1)] = (36));

} else {
var statearr_31769_31824 = state_31729__$1;
(statearr_31769_31824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (19))){
var inst_31657 = (state_31729[(7)]);
var inst_31676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31657);
var state_31729__$1 = state_31729;
var statearr_31770_31825 = state_31729__$1;
(statearr_31770_31825[(2)] = inst_31676);

(statearr_31770_31825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (11))){
var inst_31657 = (state_31729[(7)]);
var inst_31661 = (inst_31657 == null);
var inst_31662 = cljs.core.not.call(null,inst_31661);
var state_31729__$1 = state_31729;
if(inst_31662){
var statearr_31771_31826 = state_31729__$1;
(statearr_31771_31826[(1)] = (13));

} else {
var statearr_31772_31827 = state_31729__$1;
(statearr_31772_31827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (9))){
var inst_31633 = (state_31729[(8)]);
var state_31729__$1 = state_31729;
var statearr_31773_31828 = state_31729__$1;
(statearr_31773_31828[(2)] = inst_31633);

(statearr_31773_31828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (5))){
var state_31729__$1 = state_31729;
var statearr_31774_31829 = state_31729__$1;
(statearr_31774_31829[(2)] = true);

(statearr_31774_31829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (14))){
var state_31729__$1 = state_31729;
var statearr_31775_31830 = state_31729__$1;
(statearr_31775_31830[(2)] = false);

(statearr_31775_31830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (26))){
var inst_31689 = (state_31729[(9)]);
var inst_31696 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31689);
var state_31729__$1 = state_31729;
var statearr_31776_31831 = state_31729__$1;
(statearr_31776_31831[(2)] = inst_31696);

(statearr_31776_31831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (16))){
var state_31729__$1 = state_31729;
var statearr_31777_31832 = state_31729__$1;
(statearr_31777_31832[(2)] = true);

(statearr_31777_31832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (38))){
var inst_31719 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31778_31833 = state_31729__$1;
(statearr_31778_31833[(2)] = inst_31719);

(statearr_31778_31833[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (30))){
var inst_31689 = (state_31729[(9)]);
var inst_31681 = (state_31729[(13)]);
var inst_31680 = (state_31729[(11)]);
var inst_31706 = cljs.core.empty_QMARK_.call(null,inst_31680);
var inst_31707 = inst_31681.call(null,inst_31689);
var inst_31708 = cljs.core.not.call(null,inst_31707);
var inst_31709 = (inst_31706) && (inst_31708);
var state_31729__$1 = state_31729;
var statearr_31779_31834 = state_31729__$1;
(statearr_31779_31834[(2)] = inst_31709);

(statearr_31779_31834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (10))){
var inst_31633 = (state_31729[(8)]);
var inst_31653 = (state_31729[(2)]);
var inst_31654 = cljs.core.get.call(null,inst_31653,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31655 = cljs.core.get.call(null,inst_31653,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31656 = cljs.core.get.call(null,inst_31653,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31657 = inst_31633;
var state_31729__$1 = (function (){var statearr_31780 = state_31729;
(statearr_31780[(7)] = inst_31657);

(statearr_31780[(16)] = inst_31656);

(statearr_31780[(17)] = inst_31654);

(statearr_31780[(18)] = inst_31655);

return statearr_31780;
})();
var statearr_31781_31835 = state_31729__$1;
(statearr_31781_31835[(2)] = null);

(statearr_31781_31835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (18))){
var inst_31671 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31782_31836 = state_31729__$1;
(statearr_31782_31836[(2)] = inst_31671);

(statearr_31782_31836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (37))){
var state_31729__$1 = state_31729;
var statearr_31783_31837 = state_31729__$1;
(statearr_31783_31837[(2)] = null);

(statearr_31783_31837[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (8))){
var inst_31633 = (state_31729[(8)]);
var inst_31650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31633);
var state_31729__$1 = state_31729;
var statearr_31784_31838 = state_31729__$1;
(statearr_31784_31838[(2)] = inst_31650);

(statearr_31784_31838[(1)] = (10));


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
});})(c__30029__auto___31792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29917__auto__,c__30029__auto___31792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29918__auto__ = null;
var cljs$core$async$mix_$_state_machine__29918__auto____0 = (function (){
var statearr_31788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31788[(0)] = cljs$core$async$mix_$_state_machine__29918__auto__);

(statearr_31788[(1)] = (1));

return statearr_31788;
});
var cljs$core$async$mix_$_state_machine__29918__auto____1 = (function (state_31729){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_31729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e31789){if((e31789 instanceof Object)){
var ex__29921__auto__ = e31789;
var statearr_31790_31839 = state_31729;
(statearr_31790_31839[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31840 = state_31729;
state_31729 = G__31840;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29918__auto__ = function(state_31729){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29918__auto____1.call(this,state_31729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29918__auto____0;
cljs$core$async$mix_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29918__auto____1;
return cljs$core$async$mix_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___31792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30031__auto__ = (function (){var statearr_31791 = f__30030__auto__.call(null);
(statearr_31791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___31792);

return statearr_31791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___31792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25485__auto__ = (((p == null))?null:p);
var m__25486__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25486__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25485__auto__ = (((p == null))?null:p);
var m__25486__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,p,v,ch);
} else {
var m__25486__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31841 = [];
var len__25897__auto___31844 = arguments.length;
var i__25898__auto___31845 = (0);
while(true){
if((i__25898__auto___31845 < len__25897__auto___31844)){
args31841.push((arguments[i__25898__auto___31845]));

var G__31846 = (i__25898__auto___31845 + (1));
i__25898__auto___31845 = G__31846;
continue;
} else {
}
break;
}

var G__31843 = args31841.length;
switch (G__31843) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31841.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25485__auto__ = (((p == null))?null:p);
var m__25486__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,p);
} else {
var m__25486__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25485__auto__ = (((p == null))?null:p);
var m__25486__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,p,v);
} else {
var m__25486__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args31849 = [];
var len__25897__auto___31974 = arguments.length;
var i__25898__auto___31975 = (0);
while(true){
if((i__25898__auto___31975 < len__25897__auto___31974)){
args31849.push((arguments[i__25898__auto___31975]));

var G__31976 = (i__25898__auto___31975 + (1));
i__25898__auto___31975 = G__31976;
continue;
} else {
}
break;
}

var G__31851 = args31849.length;
switch (G__31851) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31849.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24822__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24822__auto__,mults){
return (function (p1__31848_SHARP_){
if(cljs.core.truth_(p1__31848_SHARP_.call(null,topic))){
return p1__31848_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31848_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24822__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31852 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31853){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31853 = meta31853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31854,meta31853__$1){
var self__ = this;
var _31854__$1 = this;
return (new cljs.core.async.t_cljs$core$async31852(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31853__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31854){
var self__ = this;
var _31854__$1 = this;
return self__.meta31853;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31853","meta31853",-1092233411,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31852";

cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async31852");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31852 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31852(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31853){
return (new cljs.core.async.t_cljs$core$async31852(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31853));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31852(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30029__auto___31978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___31978,mults,ensure_mult,p){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___31978,mults,ensure_mult,p){
return (function (state_31926){
var state_val_31927 = (state_31926[(1)]);
if((state_val_31927 === (7))){
var inst_31922 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31928_31979 = state_31926__$1;
(statearr_31928_31979[(2)] = inst_31922);

(statearr_31928_31979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (20))){
var state_31926__$1 = state_31926;
var statearr_31929_31980 = state_31926__$1;
(statearr_31929_31980[(2)] = null);

(statearr_31929_31980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (1))){
var state_31926__$1 = state_31926;
var statearr_31930_31981 = state_31926__$1;
(statearr_31930_31981[(2)] = null);

(statearr_31930_31981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (24))){
var inst_31905 = (state_31926[(7)]);
var inst_31914 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31905);
var state_31926__$1 = state_31926;
var statearr_31931_31982 = state_31926__$1;
(statearr_31931_31982[(2)] = inst_31914);

(statearr_31931_31982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (4))){
var inst_31857 = (state_31926[(8)]);
var inst_31857__$1 = (state_31926[(2)]);
var inst_31858 = (inst_31857__$1 == null);
var state_31926__$1 = (function (){var statearr_31932 = state_31926;
(statearr_31932[(8)] = inst_31857__$1);

return statearr_31932;
})();
if(cljs.core.truth_(inst_31858)){
var statearr_31933_31983 = state_31926__$1;
(statearr_31933_31983[(1)] = (5));

} else {
var statearr_31934_31984 = state_31926__$1;
(statearr_31934_31984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (15))){
var inst_31899 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31935_31985 = state_31926__$1;
(statearr_31935_31985[(2)] = inst_31899);

(statearr_31935_31985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (21))){
var inst_31919 = (state_31926[(2)]);
var state_31926__$1 = (function (){var statearr_31936 = state_31926;
(statearr_31936[(9)] = inst_31919);

return statearr_31936;
})();
var statearr_31937_31986 = state_31926__$1;
(statearr_31937_31986[(2)] = null);

(statearr_31937_31986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (13))){
var inst_31881 = (state_31926[(10)]);
var inst_31883 = cljs.core.chunked_seq_QMARK_.call(null,inst_31881);
var state_31926__$1 = state_31926;
if(inst_31883){
var statearr_31938_31987 = state_31926__$1;
(statearr_31938_31987[(1)] = (16));

} else {
var statearr_31939_31988 = state_31926__$1;
(statearr_31939_31988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (22))){
var inst_31911 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
if(cljs.core.truth_(inst_31911)){
var statearr_31940_31989 = state_31926__$1;
(statearr_31940_31989[(1)] = (23));

} else {
var statearr_31941_31990 = state_31926__$1;
(statearr_31941_31990[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (6))){
var inst_31857 = (state_31926[(8)]);
var inst_31907 = (state_31926[(11)]);
var inst_31905 = (state_31926[(7)]);
var inst_31905__$1 = topic_fn.call(null,inst_31857);
var inst_31906 = cljs.core.deref.call(null,mults);
var inst_31907__$1 = cljs.core.get.call(null,inst_31906,inst_31905__$1);
var state_31926__$1 = (function (){var statearr_31942 = state_31926;
(statearr_31942[(11)] = inst_31907__$1);

(statearr_31942[(7)] = inst_31905__$1);

return statearr_31942;
})();
if(cljs.core.truth_(inst_31907__$1)){
var statearr_31943_31991 = state_31926__$1;
(statearr_31943_31991[(1)] = (19));

} else {
var statearr_31944_31992 = state_31926__$1;
(statearr_31944_31992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (25))){
var inst_31916 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31945_31993 = state_31926__$1;
(statearr_31945_31993[(2)] = inst_31916);

(statearr_31945_31993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (17))){
var inst_31881 = (state_31926[(10)]);
var inst_31890 = cljs.core.first.call(null,inst_31881);
var inst_31891 = cljs.core.async.muxch_STAR_.call(null,inst_31890);
var inst_31892 = cljs.core.async.close_BANG_.call(null,inst_31891);
var inst_31893 = cljs.core.next.call(null,inst_31881);
var inst_31867 = inst_31893;
var inst_31868 = null;
var inst_31869 = (0);
var inst_31870 = (0);
var state_31926__$1 = (function (){var statearr_31946 = state_31926;
(statearr_31946[(12)] = inst_31869);

(statearr_31946[(13)] = inst_31867);

(statearr_31946[(14)] = inst_31870);

(statearr_31946[(15)] = inst_31892);

(statearr_31946[(16)] = inst_31868);

return statearr_31946;
})();
var statearr_31947_31994 = state_31926__$1;
(statearr_31947_31994[(2)] = null);

(statearr_31947_31994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (3))){
var inst_31924 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31926__$1,inst_31924);
} else {
if((state_val_31927 === (12))){
var inst_31901 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31948_31995 = state_31926__$1;
(statearr_31948_31995[(2)] = inst_31901);

(statearr_31948_31995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (2))){
var state_31926__$1 = state_31926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31926__$1,(4),ch);
} else {
if((state_val_31927 === (23))){
var state_31926__$1 = state_31926;
var statearr_31949_31996 = state_31926__$1;
(statearr_31949_31996[(2)] = null);

(statearr_31949_31996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (19))){
var inst_31857 = (state_31926[(8)]);
var inst_31907 = (state_31926[(11)]);
var inst_31909 = cljs.core.async.muxch_STAR_.call(null,inst_31907);
var state_31926__$1 = state_31926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31926__$1,(22),inst_31909,inst_31857);
} else {
if((state_val_31927 === (11))){
var inst_31881 = (state_31926[(10)]);
var inst_31867 = (state_31926[(13)]);
var inst_31881__$1 = cljs.core.seq.call(null,inst_31867);
var state_31926__$1 = (function (){var statearr_31950 = state_31926;
(statearr_31950[(10)] = inst_31881__$1);

return statearr_31950;
})();
if(inst_31881__$1){
var statearr_31951_31997 = state_31926__$1;
(statearr_31951_31997[(1)] = (13));

} else {
var statearr_31952_31998 = state_31926__$1;
(statearr_31952_31998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (9))){
var inst_31903 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31953_31999 = state_31926__$1;
(statearr_31953_31999[(2)] = inst_31903);

(statearr_31953_31999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (5))){
var inst_31864 = cljs.core.deref.call(null,mults);
var inst_31865 = cljs.core.vals.call(null,inst_31864);
var inst_31866 = cljs.core.seq.call(null,inst_31865);
var inst_31867 = inst_31866;
var inst_31868 = null;
var inst_31869 = (0);
var inst_31870 = (0);
var state_31926__$1 = (function (){var statearr_31954 = state_31926;
(statearr_31954[(12)] = inst_31869);

(statearr_31954[(13)] = inst_31867);

(statearr_31954[(14)] = inst_31870);

(statearr_31954[(16)] = inst_31868);

return statearr_31954;
})();
var statearr_31955_32000 = state_31926__$1;
(statearr_31955_32000[(2)] = null);

(statearr_31955_32000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (14))){
var state_31926__$1 = state_31926;
var statearr_31959_32001 = state_31926__$1;
(statearr_31959_32001[(2)] = null);

(statearr_31959_32001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (16))){
var inst_31881 = (state_31926[(10)]);
var inst_31885 = cljs.core.chunk_first.call(null,inst_31881);
var inst_31886 = cljs.core.chunk_rest.call(null,inst_31881);
var inst_31887 = cljs.core.count.call(null,inst_31885);
var inst_31867 = inst_31886;
var inst_31868 = inst_31885;
var inst_31869 = inst_31887;
var inst_31870 = (0);
var state_31926__$1 = (function (){var statearr_31960 = state_31926;
(statearr_31960[(12)] = inst_31869);

(statearr_31960[(13)] = inst_31867);

(statearr_31960[(14)] = inst_31870);

(statearr_31960[(16)] = inst_31868);

return statearr_31960;
})();
var statearr_31961_32002 = state_31926__$1;
(statearr_31961_32002[(2)] = null);

(statearr_31961_32002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (10))){
var inst_31869 = (state_31926[(12)]);
var inst_31867 = (state_31926[(13)]);
var inst_31870 = (state_31926[(14)]);
var inst_31868 = (state_31926[(16)]);
var inst_31875 = cljs.core._nth.call(null,inst_31868,inst_31870);
var inst_31876 = cljs.core.async.muxch_STAR_.call(null,inst_31875);
var inst_31877 = cljs.core.async.close_BANG_.call(null,inst_31876);
var inst_31878 = (inst_31870 + (1));
var tmp31956 = inst_31869;
var tmp31957 = inst_31867;
var tmp31958 = inst_31868;
var inst_31867__$1 = tmp31957;
var inst_31868__$1 = tmp31958;
var inst_31869__$1 = tmp31956;
var inst_31870__$1 = inst_31878;
var state_31926__$1 = (function (){var statearr_31962 = state_31926;
(statearr_31962[(12)] = inst_31869__$1);

(statearr_31962[(13)] = inst_31867__$1);

(statearr_31962[(17)] = inst_31877);

(statearr_31962[(14)] = inst_31870__$1);

(statearr_31962[(16)] = inst_31868__$1);

return statearr_31962;
})();
var statearr_31963_32003 = state_31926__$1;
(statearr_31963_32003[(2)] = null);

(statearr_31963_32003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (18))){
var inst_31896 = (state_31926[(2)]);
var state_31926__$1 = state_31926;
var statearr_31964_32004 = state_31926__$1;
(statearr_31964_32004[(2)] = inst_31896);

(statearr_31964_32004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31927 === (8))){
var inst_31869 = (state_31926[(12)]);
var inst_31870 = (state_31926[(14)]);
var inst_31872 = (inst_31870 < inst_31869);
var inst_31873 = inst_31872;
var state_31926__$1 = state_31926;
if(cljs.core.truth_(inst_31873)){
var statearr_31965_32005 = state_31926__$1;
(statearr_31965_32005[(1)] = (10));

} else {
var statearr_31966_32006 = state_31926__$1;
(statearr_31966_32006[(1)] = (11));

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
});})(c__30029__auto___31978,mults,ensure_mult,p))
;
return ((function (switch__29917__auto__,c__30029__auto___31978,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_31970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31970[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_31970[(1)] = (1));

return statearr_31970;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_31926){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_31926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e31971){if((e31971 instanceof Object)){
var ex__29921__auto__ = e31971;
var statearr_31972_32007 = state_31926;
(statearr_31972_32007[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32008 = state_31926;
state_31926 = G__32008;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_31926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_31926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___31978,mults,ensure_mult,p))
})();
var state__30031__auto__ = (function (){var statearr_31973 = f__30030__auto__.call(null);
(statearr_31973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___31978);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___31978,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32009 = [];
var len__25897__auto___32012 = arguments.length;
var i__25898__auto___32013 = (0);
while(true){
if((i__25898__auto___32013 < len__25897__auto___32012)){
args32009.push((arguments[i__25898__auto___32013]));

var G__32014 = (i__25898__auto___32013 + (1));
i__25898__auto___32013 = G__32014;
continue;
} else {
}
break;
}

var G__32011 = args32009.length;
switch (G__32011) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32009.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32016 = [];
var len__25897__auto___32019 = arguments.length;
var i__25898__auto___32020 = (0);
while(true){
if((i__25898__auto___32020 < len__25897__auto___32019)){
args32016.push((arguments[i__25898__auto___32020]));

var G__32021 = (i__25898__auto___32020 + (1));
i__25898__auto___32020 = G__32021;
continue;
} else {
}
break;
}

var G__32018 = args32016.length;
switch (G__32018) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32016.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args32023 = [];
var len__25897__auto___32094 = arguments.length;
var i__25898__auto___32095 = (0);
while(true){
if((i__25898__auto___32095 < len__25897__auto___32094)){
args32023.push((arguments[i__25898__auto___32095]));

var G__32096 = (i__25898__auto___32095 + (1));
i__25898__auto___32095 = G__32096;
continue;
} else {
}
break;
}

var G__32025 = args32023.length;
switch (G__32025) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32023.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30029__auto___32098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32064){
var state_val_32065 = (state_32064[(1)]);
if((state_val_32065 === (7))){
var state_32064__$1 = state_32064;
var statearr_32066_32099 = state_32064__$1;
(statearr_32066_32099[(2)] = null);

(statearr_32066_32099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (1))){
var state_32064__$1 = state_32064;
var statearr_32067_32100 = state_32064__$1;
(statearr_32067_32100[(2)] = null);

(statearr_32067_32100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (4))){
var inst_32028 = (state_32064[(7)]);
var inst_32030 = (inst_32028 < cnt);
var state_32064__$1 = state_32064;
if(cljs.core.truth_(inst_32030)){
var statearr_32068_32101 = state_32064__$1;
(statearr_32068_32101[(1)] = (6));

} else {
var statearr_32069_32102 = state_32064__$1;
(statearr_32069_32102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (15))){
var inst_32060 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32070_32103 = state_32064__$1;
(statearr_32070_32103[(2)] = inst_32060);

(statearr_32070_32103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (13))){
var inst_32053 = cljs.core.async.close_BANG_.call(null,out);
var state_32064__$1 = state_32064;
var statearr_32071_32104 = state_32064__$1;
(statearr_32071_32104[(2)] = inst_32053);

(statearr_32071_32104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (6))){
var state_32064__$1 = state_32064;
var statearr_32072_32105 = state_32064__$1;
(statearr_32072_32105[(2)] = null);

(statearr_32072_32105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (3))){
var inst_32062 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32064__$1,inst_32062);
} else {
if((state_val_32065 === (12))){
var inst_32050 = (state_32064[(8)]);
var inst_32050__$1 = (state_32064[(2)]);
var inst_32051 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32050__$1);
var state_32064__$1 = (function (){var statearr_32073 = state_32064;
(statearr_32073[(8)] = inst_32050__$1);

return statearr_32073;
})();
if(cljs.core.truth_(inst_32051)){
var statearr_32074_32106 = state_32064__$1;
(statearr_32074_32106[(1)] = (13));

} else {
var statearr_32075_32107 = state_32064__$1;
(statearr_32075_32107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (2))){
var inst_32027 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32028 = (0);
var state_32064__$1 = (function (){var statearr_32076 = state_32064;
(statearr_32076[(9)] = inst_32027);

(statearr_32076[(7)] = inst_32028);

return statearr_32076;
})();
var statearr_32077_32108 = state_32064__$1;
(statearr_32077_32108[(2)] = null);

(statearr_32077_32108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (11))){
var inst_32028 = (state_32064[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32064,(10),Object,null,(9));
var inst_32037 = chs__$1.call(null,inst_32028);
var inst_32038 = done.call(null,inst_32028);
var inst_32039 = cljs.core.async.take_BANG_.call(null,inst_32037,inst_32038);
var state_32064__$1 = state_32064;
var statearr_32078_32109 = state_32064__$1;
(statearr_32078_32109[(2)] = inst_32039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (9))){
var inst_32028 = (state_32064[(7)]);
var inst_32041 = (state_32064[(2)]);
var inst_32042 = (inst_32028 + (1));
var inst_32028__$1 = inst_32042;
var state_32064__$1 = (function (){var statearr_32079 = state_32064;
(statearr_32079[(10)] = inst_32041);

(statearr_32079[(7)] = inst_32028__$1);

return statearr_32079;
})();
var statearr_32080_32110 = state_32064__$1;
(statearr_32080_32110[(2)] = null);

(statearr_32080_32110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (5))){
var inst_32048 = (state_32064[(2)]);
var state_32064__$1 = (function (){var statearr_32081 = state_32064;
(statearr_32081[(11)] = inst_32048);

return statearr_32081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32064__$1,(12),dchan);
} else {
if((state_val_32065 === (14))){
var inst_32050 = (state_32064[(8)]);
var inst_32055 = cljs.core.apply.call(null,f,inst_32050);
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32064__$1,(16),out,inst_32055);
} else {
if((state_val_32065 === (16))){
var inst_32057 = (state_32064[(2)]);
var state_32064__$1 = (function (){var statearr_32082 = state_32064;
(statearr_32082[(12)] = inst_32057);

return statearr_32082;
})();
var statearr_32083_32111 = state_32064__$1;
(statearr_32083_32111[(2)] = null);

(statearr_32083_32111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (10))){
var inst_32032 = (state_32064[(2)]);
var inst_32033 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32064__$1 = (function (){var statearr_32084 = state_32064;
(statearr_32084[(13)] = inst_32032);

return statearr_32084;
})();
var statearr_32085_32112 = state_32064__$1;
(statearr_32085_32112[(2)] = inst_32033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (8))){
var inst_32046 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32086_32113 = state_32064__$1;
(statearr_32086_32113[(2)] = inst_32046);

(statearr_32086_32113[(1)] = (5));


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
});})(c__30029__auto___32098,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29917__auto__,c__30029__auto___32098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32090[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32090[(1)] = (1));

return statearr_32090;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32064){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32091){if((e32091 instanceof Object)){
var ex__29921__auto__ = e32091;
var statearr_32092_32114 = state_32064;
(statearr_32092_32114[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32115 = state_32064;
state_32064 = G__32115;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32098,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30031__auto__ = (function (){var statearr_32093 = f__30030__auto__.call(null);
(statearr_32093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32098);

return statearr_32093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32098,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32117 = [];
var len__25897__auto___32175 = arguments.length;
var i__25898__auto___32176 = (0);
while(true){
if((i__25898__auto___32176 < len__25897__auto___32175)){
args32117.push((arguments[i__25898__auto___32176]));

var G__32177 = (i__25898__auto___32176 + (1));
i__25898__auto___32176 = G__32177;
continue;
} else {
}
break;
}

var G__32119 = args32117.length;
switch (G__32119) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32117.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32179,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32179,out){
return (function (state_32151){
var state_val_32152 = (state_32151[(1)]);
if((state_val_32152 === (7))){
var inst_32131 = (state_32151[(7)]);
var inst_32130 = (state_32151[(8)]);
var inst_32130__$1 = (state_32151[(2)]);
var inst_32131__$1 = cljs.core.nth.call(null,inst_32130__$1,(0),null);
var inst_32132 = cljs.core.nth.call(null,inst_32130__$1,(1),null);
var inst_32133 = (inst_32131__$1 == null);
var state_32151__$1 = (function (){var statearr_32153 = state_32151;
(statearr_32153[(7)] = inst_32131__$1);

(statearr_32153[(8)] = inst_32130__$1);

(statearr_32153[(9)] = inst_32132);

return statearr_32153;
})();
if(cljs.core.truth_(inst_32133)){
var statearr_32154_32180 = state_32151__$1;
(statearr_32154_32180[(1)] = (8));

} else {
var statearr_32155_32181 = state_32151__$1;
(statearr_32155_32181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (1))){
var inst_32120 = cljs.core.vec.call(null,chs);
var inst_32121 = inst_32120;
var state_32151__$1 = (function (){var statearr_32156 = state_32151;
(statearr_32156[(10)] = inst_32121);

return statearr_32156;
})();
var statearr_32157_32182 = state_32151__$1;
(statearr_32157_32182[(2)] = null);

(statearr_32157_32182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (4))){
var inst_32121 = (state_32151[(10)]);
var state_32151__$1 = state_32151;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32151__$1,(7),inst_32121);
} else {
if((state_val_32152 === (6))){
var inst_32147 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
var statearr_32158_32183 = state_32151__$1;
(statearr_32158_32183[(2)] = inst_32147);

(statearr_32158_32183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (3))){
var inst_32149 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32151__$1,inst_32149);
} else {
if((state_val_32152 === (2))){
var inst_32121 = (state_32151[(10)]);
var inst_32123 = cljs.core.count.call(null,inst_32121);
var inst_32124 = (inst_32123 > (0));
var state_32151__$1 = state_32151;
if(cljs.core.truth_(inst_32124)){
var statearr_32160_32184 = state_32151__$1;
(statearr_32160_32184[(1)] = (4));

} else {
var statearr_32161_32185 = state_32151__$1;
(statearr_32161_32185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (11))){
var inst_32121 = (state_32151[(10)]);
var inst_32140 = (state_32151[(2)]);
var tmp32159 = inst_32121;
var inst_32121__$1 = tmp32159;
var state_32151__$1 = (function (){var statearr_32162 = state_32151;
(statearr_32162[(11)] = inst_32140);

(statearr_32162[(10)] = inst_32121__$1);

return statearr_32162;
})();
var statearr_32163_32186 = state_32151__$1;
(statearr_32163_32186[(2)] = null);

(statearr_32163_32186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (9))){
var inst_32131 = (state_32151[(7)]);
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32151__$1,(11),out,inst_32131);
} else {
if((state_val_32152 === (5))){
var inst_32145 = cljs.core.async.close_BANG_.call(null,out);
var state_32151__$1 = state_32151;
var statearr_32164_32187 = state_32151__$1;
(statearr_32164_32187[(2)] = inst_32145);

(statearr_32164_32187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (10))){
var inst_32143 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
var statearr_32165_32188 = state_32151__$1;
(statearr_32165_32188[(2)] = inst_32143);

(statearr_32165_32188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (8))){
var inst_32131 = (state_32151[(7)]);
var inst_32130 = (state_32151[(8)]);
var inst_32121 = (state_32151[(10)]);
var inst_32132 = (state_32151[(9)]);
var inst_32135 = (function (){var cs = inst_32121;
var vec__32126 = inst_32130;
var v = inst_32131;
var c = inst_32132;
return ((function (cs,vec__32126,v,c,inst_32131,inst_32130,inst_32121,inst_32132,state_val_32152,c__30029__auto___32179,out){
return (function (p1__32116_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32116_SHARP_);
});
;})(cs,vec__32126,v,c,inst_32131,inst_32130,inst_32121,inst_32132,state_val_32152,c__30029__auto___32179,out))
})();
var inst_32136 = cljs.core.filterv.call(null,inst_32135,inst_32121);
var inst_32121__$1 = inst_32136;
var state_32151__$1 = (function (){var statearr_32166 = state_32151;
(statearr_32166[(10)] = inst_32121__$1);

return statearr_32166;
})();
var statearr_32167_32189 = state_32151__$1;
(statearr_32167_32189[(2)] = null);

(statearr_32167_32189[(1)] = (2));


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
});})(c__30029__auto___32179,out))
;
return ((function (switch__29917__auto__,c__30029__auto___32179,out){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32171 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32171[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32171[(1)] = (1));

return statearr_32171;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32151){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32172){if((e32172 instanceof Object)){
var ex__29921__auto__ = e32172;
var statearr_32173_32190 = state_32151;
(statearr_32173_32190[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32191 = state_32151;
state_32151 = G__32191;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32179,out))
})();
var state__30031__auto__ = (function (){var statearr_32174 = f__30030__auto__.call(null);
(statearr_32174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32179);

return statearr_32174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32179,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32192 = [];
var len__25897__auto___32241 = arguments.length;
var i__25898__auto___32242 = (0);
while(true){
if((i__25898__auto___32242 < len__25897__auto___32241)){
args32192.push((arguments[i__25898__auto___32242]));

var G__32243 = (i__25898__auto___32242 + (1));
i__25898__auto___32242 = G__32243;
continue;
} else {
}
break;
}

var G__32194 = args32192.length;
switch (G__32194) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32192.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32245,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32245,out){
return (function (state_32218){
var state_val_32219 = (state_32218[(1)]);
if((state_val_32219 === (7))){
var inst_32200 = (state_32218[(7)]);
var inst_32200__$1 = (state_32218[(2)]);
var inst_32201 = (inst_32200__$1 == null);
var inst_32202 = cljs.core.not.call(null,inst_32201);
var state_32218__$1 = (function (){var statearr_32220 = state_32218;
(statearr_32220[(7)] = inst_32200__$1);

return statearr_32220;
})();
if(inst_32202){
var statearr_32221_32246 = state_32218__$1;
(statearr_32221_32246[(1)] = (8));

} else {
var statearr_32222_32247 = state_32218__$1;
(statearr_32222_32247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (1))){
var inst_32195 = (0);
var state_32218__$1 = (function (){var statearr_32223 = state_32218;
(statearr_32223[(8)] = inst_32195);

return statearr_32223;
})();
var statearr_32224_32248 = state_32218__$1;
(statearr_32224_32248[(2)] = null);

(statearr_32224_32248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (4))){
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32218__$1,(7),ch);
} else {
if((state_val_32219 === (6))){
var inst_32213 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32225_32249 = state_32218__$1;
(statearr_32225_32249[(2)] = inst_32213);

(statearr_32225_32249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (3))){
var inst_32215 = (state_32218[(2)]);
var inst_32216 = cljs.core.async.close_BANG_.call(null,out);
var state_32218__$1 = (function (){var statearr_32226 = state_32218;
(statearr_32226[(9)] = inst_32215);

return statearr_32226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32218__$1,inst_32216);
} else {
if((state_val_32219 === (2))){
var inst_32195 = (state_32218[(8)]);
var inst_32197 = (inst_32195 < n);
var state_32218__$1 = state_32218;
if(cljs.core.truth_(inst_32197)){
var statearr_32227_32250 = state_32218__$1;
(statearr_32227_32250[(1)] = (4));

} else {
var statearr_32228_32251 = state_32218__$1;
(statearr_32228_32251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (11))){
var inst_32195 = (state_32218[(8)]);
var inst_32205 = (state_32218[(2)]);
var inst_32206 = (inst_32195 + (1));
var inst_32195__$1 = inst_32206;
var state_32218__$1 = (function (){var statearr_32229 = state_32218;
(statearr_32229[(8)] = inst_32195__$1);

(statearr_32229[(10)] = inst_32205);

return statearr_32229;
})();
var statearr_32230_32252 = state_32218__$1;
(statearr_32230_32252[(2)] = null);

(statearr_32230_32252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (9))){
var state_32218__$1 = state_32218;
var statearr_32231_32253 = state_32218__$1;
(statearr_32231_32253[(2)] = null);

(statearr_32231_32253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (5))){
var state_32218__$1 = state_32218;
var statearr_32232_32254 = state_32218__$1;
(statearr_32232_32254[(2)] = null);

(statearr_32232_32254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (10))){
var inst_32210 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32233_32255 = state_32218__$1;
(statearr_32233_32255[(2)] = inst_32210);

(statearr_32233_32255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (8))){
var inst_32200 = (state_32218[(7)]);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32218__$1,(11),out,inst_32200);
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
});})(c__30029__auto___32245,out))
;
return ((function (switch__29917__auto__,c__30029__auto___32245,out){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32237[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32237[(1)] = (1));

return statearr_32237;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32218){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32238){if((e32238 instanceof Object)){
var ex__29921__auto__ = e32238;
var statearr_32239_32256 = state_32218;
(statearr_32239_32256[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32257 = state_32218;
state_32218 = G__32257;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32245,out))
})();
var state__30031__auto__ = (function (){var statearr_32240 = f__30030__auto__.call(null);
(statearr_32240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32245);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32245,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32265 = (function (map_LT_,f,ch,meta32266){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32266 = meta32266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32267,meta32266__$1){
var self__ = this;
var _32267__$1 = this;
return (new cljs.core.async.t_cljs$core$async32265(self__.map_LT_,self__.f,self__.ch,meta32266__$1));
});

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32267){
var self__ = this;
var _32267__$1 = this;
return self__.meta32266;
});

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32268 = (function (map_LT_,f,ch,meta32266,_,fn1,meta32269){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32266 = meta32266;
this._ = _;
this.fn1 = fn1;
this.meta32269 = meta32269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32270,meta32269__$1){
var self__ = this;
var _32270__$1 = this;
return (new cljs.core.async.t_cljs$core$async32268(self__.map_LT_,self__.f,self__.ch,self__.meta32266,self__._,self__.fn1,meta32269__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32270){
var self__ = this;
var _32270__$1 = this;
return self__.meta32269;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32258_SHARP_){
return f1.call(null,(((p1__32258_SHARP_ == null))?null:self__.f.call(null,p1__32258_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32268.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32266","meta32266",-566675653,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32265","cljs.core.async/t_cljs$core$async32265",-2067099309,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32269","meta32269",-1059253918,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32268";

cljs.core.async.t_cljs$core$async32268.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async32268");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32268 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32268(map_LT___$1,f__$1,ch__$1,meta32266__$1,___$2,fn1__$1,meta32269){
return (new cljs.core.async.t_cljs$core$async32268(map_LT___$1,f__$1,ch__$1,meta32266__$1,___$2,fn1__$1,meta32269));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32268(self__.map_LT_,self__.f,self__.ch,self__.meta32266,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24810__auto__ = ret;
if(cljs.core.truth_(and__24810__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24810__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32266","meta32266",-566675653,null)], null);
});

cljs.core.async.t_cljs$core$async32265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32265";

cljs.core.async.t_cljs$core$async32265.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async32265");
});

cljs.core.async.__GT_t_cljs$core$async32265 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32265(map_LT___$1,f__$1,ch__$1,meta32266){
return (new cljs.core.async.t_cljs$core$async32265(map_LT___$1,f__$1,ch__$1,meta32266));
});

}

return (new cljs.core.async.t_cljs$core$async32265(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32274 = (function (map_GT_,f,ch,meta32275){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32275 = meta32275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32276,meta32275__$1){
var self__ = this;
var _32276__$1 = this;
return (new cljs.core.async.t_cljs$core$async32274(self__.map_GT_,self__.f,self__.ch,meta32275__$1));
});

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32276){
var self__ = this;
var _32276__$1 = this;
return self__.meta32275;
});

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32274.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32275","meta32275",-1197809956,null)], null);
});

cljs.core.async.t_cljs$core$async32274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32274";

cljs.core.async.t_cljs$core$async32274.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async32274");
});

cljs.core.async.__GT_t_cljs$core$async32274 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32274(map_GT___$1,f__$1,ch__$1,meta32275){
return (new cljs.core.async.t_cljs$core$async32274(map_GT___$1,f__$1,ch__$1,meta32275));
});

}

return (new cljs.core.async.t_cljs$core$async32274(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32280 = (function (filter_GT_,p,ch,meta32281){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32281 = meta32281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32282,meta32281__$1){
var self__ = this;
var _32282__$1 = this;
return (new cljs.core.async.t_cljs$core$async32280(self__.filter_GT_,self__.p,self__.ch,meta32281__$1));
});

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32282){
var self__ = this;
var _32282__$1 = this;
return self__.meta32281;
});

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32281","meta32281",-851198549,null)], null);
});

cljs.core.async.t_cljs$core$async32280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32280";

cljs.core.async.t_cljs$core$async32280.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.core.async/t_cljs$core$async32280");
});

cljs.core.async.__GT_t_cljs$core$async32280 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32280(filter_GT___$1,p__$1,ch__$1,meta32281){
return (new cljs.core.async.t_cljs$core$async32280(filter_GT___$1,p__$1,ch__$1,meta32281));
});

}

return (new cljs.core.async.t_cljs$core$async32280(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32283 = [];
var len__25897__auto___32327 = arguments.length;
var i__25898__auto___32328 = (0);
while(true){
if((i__25898__auto___32328 < len__25897__auto___32327)){
args32283.push((arguments[i__25898__auto___32328]));

var G__32329 = (i__25898__auto___32328 + (1));
i__25898__auto___32328 = G__32329;
continue;
} else {
}
break;
}

var G__32285 = args32283.length;
switch (G__32285) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32283.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32331,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32331,out){
return (function (state_32306){
var state_val_32307 = (state_32306[(1)]);
if((state_val_32307 === (7))){
var inst_32302 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32308_32332 = state_32306__$1;
(statearr_32308_32332[(2)] = inst_32302);

(statearr_32308_32332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (1))){
var state_32306__$1 = state_32306;
var statearr_32309_32333 = state_32306__$1;
(statearr_32309_32333[(2)] = null);

(statearr_32309_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (4))){
var inst_32288 = (state_32306[(7)]);
var inst_32288__$1 = (state_32306[(2)]);
var inst_32289 = (inst_32288__$1 == null);
var state_32306__$1 = (function (){var statearr_32310 = state_32306;
(statearr_32310[(7)] = inst_32288__$1);

return statearr_32310;
})();
if(cljs.core.truth_(inst_32289)){
var statearr_32311_32334 = state_32306__$1;
(statearr_32311_32334[(1)] = (5));

} else {
var statearr_32312_32335 = state_32306__$1;
(statearr_32312_32335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (6))){
var inst_32288 = (state_32306[(7)]);
var inst_32293 = p.call(null,inst_32288);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32293)){
var statearr_32313_32336 = state_32306__$1;
(statearr_32313_32336[(1)] = (8));

} else {
var statearr_32314_32337 = state_32306__$1;
(statearr_32314_32337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (3))){
var inst_32304 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32306__$1,inst_32304);
} else {
if((state_val_32307 === (2))){
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(4),ch);
} else {
if((state_val_32307 === (11))){
var inst_32296 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32315_32338 = state_32306__$1;
(statearr_32315_32338[(2)] = inst_32296);

(statearr_32315_32338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (9))){
var state_32306__$1 = state_32306;
var statearr_32316_32339 = state_32306__$1;
(statearr_32316_32339[(2)] = null);

(statearr_32316_32339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (5))){
var inst_32291 = cljs.core.async.close_BANG_.call(null,out);
var state_32306__$1 = state_32306;
var statearr_32317_32340 = state_32306__$1;
(statearr_32317_32340[(2)] = inst_32291);

(statearr_32317_32340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (10))){
var inst_32299 = (state_32306[(2)]);
var state_32306__$1 = (function (){var statearr_32318 = state_32306;
(statearr_32318[(8)] = inst_32299);

return statearr_32318;
})();
var statearr_32319_32341 = state_32306__$1;
(statearr_32319_32341[(2)] = null);

(statearr_32319_32341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (8))){
var inst_32288 = (state_32306[(7)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32306__$1,(11),out,inst_32288);
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
});})(c__30029__auto___32331,out))
;
return ((function (switch__29917__auto__,c__30029__auto___32331,out){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32323 = [null,null,null,null,null,null,null,null,null];
(statearr_32323[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32323[(1)] = (1));

return statearr_32323;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32306){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32324){if((e32324 instanceof Object)){
var ex__29921__auto__ = e32324;
var statearr_32325_32342 = state_32306;
(statearr_32325_32342[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32343 = state_32306;
state_32306 = G__32343;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32331,out))
})();
var state__30031__auto__ = (function (){var statearr_32326 = f__30030__auto__.call(null);
(statearr_32326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32331);

return statearr_32326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32331,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32344 = [];
var len__25897__auto___32347 = arguments.length;
var i__25898__auto___32348 = (0);
while(true){
if((i__25898__auto___32348 < len__25897__auto___32347)){
args32344.push((arguments[i__25898__auto___32348]));

var G__32349 = (i__25898__auto___32348 + (1));
i__25898__auto___32348 = G__32349;
continue;
} else {
}
break;
}

var G__32346 = args32344.length;
switch (G__32346) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32344.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_32516){
var state_val_32517 = (state_32516[(1)]);
if((state_val_32517 === (7))){
var inst_32512 = (state_32516[(2)]);
var state_32516__$1 = state_32516;
var statearr_32518_32559 = state_32516__$1;
(statearr_32518_32559[(2)] = inst_32512);

(statearr_32518_32559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (20))){
var inst_32482 = (state_32516[(7)]);
var inst_32493 = (state_32516[(2)]);
var inst_32494 = cljs.core.next.call(null,inst_32482);
var inst_32468 = inst_32494;
var inst_32469 = null;
var inst_32470 = (0);
var inst_32471 = (0);
var state_32516__$1 = (function (){var statearr_32519 = state_32516;
(statearr_32519[(8)] = inst_32468);

(statearr_32519[(9)] = inst_32493);

(statearr_32519[(10)] = inst_32471);

(statearr_32519[(11)] = inst_32470);

(statearr_32519[(12)] = inst_32469);

return statearr_32519;
})();
var statearr_32520_32560 = state_32516__$1;
(statearr_32520_32560[(2)] = null);

(statearr_32520_32560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (1))){
var state_32516__$1 = state_32516;
var statearr_32521_32561 = state_32516__$1;
(statearr_32521_32561[(2)] = null);

(statearr_32521_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (4))){
var inst_32457 = (state_32516[(13)]);
var inst_32457__$1 = (state_32516[(2)]);
var inst_32458 = (inst_32457__$1 == null);
var state_32516__$1 = (function (){var statearr_32522 = state_32516;
(statearr_32522[(13)] = inst_32457__$1);

return statearr_32522;
})();
if(cljs.core.truth_(inst_32458)){
var statearr_32523_32562 = state_32516__$1;
(statearr_32523_32562[(1)] = (5));

} else {
var statearr_32524_32563 = state_32516__$1;
(statearr_32524_32563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (15))){
var state_32516__$1 = state_32516;
var statearr_32528_32564 = state_32516__$1;
(statearr_32528_32564[(2)] = null);

(statearr_32528_32564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (21))){
var state_32516__$1 = state_32516;
var statearr_32529_32565 = state_32516__$1;
(statearr_32529_32565[(2)] = null);

(statearr_32529_32565[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (13))){
var inst_32468 = (state_32516[(8)]);
var inst_32471 = (state_32516[(10)]);
var inst_32470 = (state_32516[(11)]);
var inst_32469 = (state_32516[(12)]);
var inst_32478 = (state_32516[(2)]);
var inst_32479 = (inst_32471 + (1));
var tmp32525 = inst_32468;
var tmp32526 = inst_32470;
var tmp32527 = inst_32469;
var inst_32468__$1 = tmp32525;
var inst_32469__$1 = tmp32527;
var inst_32470__$1 = tmp32526;
var inst_32471__$1 = inst_32479;
var state_32516__$1 = (function (){var statearr_32530 = state_32516;
(statearr_32530[(14)] = inst_32478);

(statearr_32530[(8)] = inst_32468__$1);

(statearr_32530[(10)] = inst_32471__$1);

(statearr_32530[(11)] = inst_32470__$1);

(statearr_32530[(12)] = inst_32469__$1);

return statearr_32530;
})();
var statearr_32531_32566 = state_32516__$1;
(statearr_32531_32566[(2)] = null);

(statearr_32531_32566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (22))){
var state_32516__$1 = state_32516;
var statearr_32532_32567 = state_32516__$1;
(statearr_32532_32567[(2)] = null);

(statearr_32532_32567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (6))){
var inst_32457 = (state_32516[(13)]);
var inst_32466 = f.call(null,inst_32457);
var inst_32467 = cljs.core.seq.call(null,inst_32466);
var inst_32468 = inst_32467;
var inst_32469 = null;
var inst_32470 = (0);
var inst_32471 = (0);
var state_32516__$1 = (function (){var statearr_32533 = state_32516;
(statearr_32533[(8)] = inst_32468);

(statearr_32533[(10)] = inst_32471);

(statearr_32533[(11)] = inst_32470);

(statearr_32533[(12)] = inst_32469);

return statearr_32533;
})();
var statearr_32534_32568 = state_32516__$1;
(statearr_32534_32568[(2)] = null);

(statearr_32534_32568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (17))){
var inst_32482 = (state_32516[(7)]);
var inst_32486 = cljs.core.chunk_first.call(null,inst_32482);
var inst_32487 = cljs.core.chunk_rest.call(null,inst_32482);
var inst_32488 = cljs.core.count.call(null,inst_32486);
var inst_32468 = inst_32487;
var inst_32469 = inst_32486;
var inst_32470 = inst_32488;
var inst_32471 = (0);
var state_32516__$1 = (function (){var statearr_32535 = state_32516;
(statearr_32535[(8)] = inst_32468);

(statearr_32535[(10)] = inst_32471);

(statearr_32535[(11)] = inst_32470);

(statearr_32535[(12)] = inst_32469);

return statearr_32535;
})();
var statearr_32536_32569 = state_32516__$1;
(statearr_32536_32569[(2)] = null);

(statearr_32536_32569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (3))){
var inst_32514 = (state_32516[(2)]);
var state_32516__$1 = state_32516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32516__$1,inst_32514);
} else {
if((state_val_32517 === (12))){
var inst_32502 = (state_32516[(2)]);
var state_32516__$1 = state_32516;
var statearr_32537_32570 = state_32516__$1;
(statearr_32537_32570[(2)] = inst_32502);

(statearr_32537_32570[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (2))){
var state_32516__$1 = state_32516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32516__$1,(4),in$);
} else {
if((state_val_32517 === (23))){
var inst_32510 = (state_32516[(2)]);
var state_32516__$1 = state_32516;
var statearr_32538_32571 = state_32516__$1;
(statearr_32538_32571[(2)] = inst_32510);

(statearr_32538_32571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (19))){
var inst_32497 = (state_32516[(2)]);
var state_32516__$1 = state_32516;
var statearr_32539_32572 = state_32516__$1;
(statearr_32539_32572[(2)] = inst_32497);

(statearr_32539_32572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (11))){
var inst_32468 = (state_32516[(8)]);
var inst_32482 = (state_32516[(7)]);
var inst_32482__$1 = cljs.core.seq.call(null,inst_32468);
var state_32516__$1 = (function (){var statearr_32540 = state_32516;
(statearr_32540[(7)] = inst_32482__$1);

return statearr_32540;
})();
if(inst_32482__$1){
var statearr_32541_32573 = state_32516__$1;
(statearr_32541_32573[(1)] = (14));

} else {
var statearr_32542_32574 = state_32516__$1;
(statearr_32542_32574[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (9))){
var inst_32504 = (state_32516[(2)]);
var inst_32505 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32516__$1 = (function (){var statearr_32543 = state_32516;
(statearr_32543[(15)] = inst_32504);

return statearr_32543;
})();
if(cljs.core.truth_(inst_32505)){
var statearr_32544_32575 = state_32516__$1;
(statearr_32544_32575[(1)] = (21));

} else {
var statearr_32545_32576 = state_32516__$1;
(statearr_32545_32576[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (5))){
var inst_32460 = cljs.core.async.close_BANG_.call(null,out);
var state_32516__$1 = state_32516;
var statearr_32546_32577 = state_32516__$1;
(statearr_32546_32577[(2)] = inst_32460);

(statearr_32546_32577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (14))){
var inst_32482 = (state_32516[(7)]);
var inst_32484 = cljs.core.chunked_seq_QMARK_.call(null,inst_32482);
var state_32516__$1 = state_32516;
if(inst_32484){
var statearr_32547_32578 = state_32516__$1;
(statearr_32547_32578[(1)] = (17));

} else {
var statearr_32548_32579 = state_32516__$1;
(statearr_32548_32579[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (16))){
var inst_32500 = (state_32516[(2)]);
var state_32516__$1 = state_32516;
var statearr_32549_32580 = state_32516__$1;
(statearr_32549_32580[(2)] = inst_32500);

(statearr_32549_32580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32517 === (10))){
var inst_32471 = (state_32516[(10)]);
var inst_32469 = (state_32516[(12)]);
var inst_32476 = cljs.core._nth.call(null,inst_32469,inst_32471);
var state_32516__$1 = state_32516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32516__$1,(13),out,inst_32476);
} else {
if((state_val_32517 === (18))){
var inst_32482 = (state_32516[(7)]);
var inst_32491 = cljs.core.first.call(null,inst_32482);
var state_32516__$1 = state_32516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32516__$1,(20),out,inst_32491);
} else {
if((state_val_32517 === (8))){
var inst_32471 = (state_32516[(10)]);
var inst_32470 = (state_32516[(11)]);
var inst_32473 = (inst_32471 < inst_32470);
var inst_32474 = inst_32473;
var state_32516__$1 = state_32516;
if(cljs.core.truth_(inst_32474)){
var statearr_32550_32581 = state_32516__$1;
(statearr_32550_32581[(1)] = (10));

} else {
var statearr_32551_32582 = state_32516__$1;
(statearr_32551_32582[(1)] = (11));

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
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29918__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29918__auto____0 = (function (){
var statearr_32555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32555[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29918__auto__);

(statearr_32555[(1)] = (1));

return statearr_32555;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29918__auto____1 = (function (state_32516){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32556){if((e32556 instanceof Object)){
var ex__29921__auto__ = e32556;
var statearr_32557_32583 = state_32516;
(statearr_32557_32583[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32584 = state_32516;
state_32516 = G__32584;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29918__auto__ = function(state_32516){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29918__auto____1.call(this,state_32516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29918__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29918__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_32558 = f__30030__auto__.call(null);
(statearr_32558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_32558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32585 = [];
var len__25897__auto___32588 = arguments.length;
var i__25898__auto___32589 = (0);
while(true){
if((i__25898__auto___32589 < len__25897__auto___32588)){
args32585.push((arguments[i__25898__auto___32589]));

var G__32590 = (i__25898__auto___32589 + (1));
i__25898__auto___32589 = G__32590;
continue;
} else {
}
break;
}

var G__32587 = args32585.length;
switch (G__32587) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32585.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32592 = [];
var len__25897__auto___32595 = arguments.length;
var i__25898__auto___32596 = (0);
while(true){
if((i__25898__auto___32596 < len__25897__auto___32595)){
args32592.push((arguments[i__25898__auto___32596]));

var G__32597 = (i__25898__auto___32596 + (1));
i__25898__auto___32596 = G__32597;
continue;
} else {
}
break;
}

var G__32594 = args32592.length;
switch (G__32594) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32592.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32599 = [];
var len__25897__auto___32650 = arguments.length;
var i__25898__auto___32651 = (0);
while(true){
if((i__25898__auto___32651 < len__25897__auto___32650)){
args32599.push((arguments[i__25898__auto___32651]));

var G__32652 = (i__25898__auto___32651 + (1));
i__25898__auto___32651 = G__32652;
continue;
} else {
}
break;
}

var G__32601 = args32599.length;
switch (G__32601) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32599.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32654,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32654,out){
return (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (7))){
var inst_32620 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32627_32655 = state_32625__$1;
(statearr_32627_32655[(2)] = inst_32620);

(statearr_32627_32655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (1))){
var inst_32602 = null;
var state_32625__$1 = (function (){var statearr_32628 = state_32625;
(statearr_32628[(7)] = inst_32602);

return statearr_32628;
})();
var statearr_32629_32656 = state_32625__$1;
(statearr_32629_32656[(2)] = null);

(statearr_32629_32656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (4))){
var inst_32605 = (state_32625[(8)]);
var inst_32605__$1 = (state_32625[(2)]);
var inst_32606 = (inst_32605__$1 == null);
var inst_32607 = cljs.core.not.call(null,inst_32606);
var state_32625__$1 = (function (){var statearr_32630 = state_32625;
(statearr_32630[(8)] = inst_32605__$1);

return statearr_32630;
})();
if(inst_32607){
var statearr_32631_32657 = state_32625__$1;
(statearr_32631_32657[(1)] = (5));

} else {
var statearr_32632_32658 = state_32625__$1;
(statearr_32632_32658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (6))){
var state_32625__$1 = state_32625;
var statearr_32633_32659 = state_32625__$1;
(statearr_32633_32659[(2)] = null);

(statearr_32633_32659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (3))){
var inst_32622 = (state_32625[(2)]);
var inst_32623 = cljs.core.async.close_BANG_.call(null,out);
var state_32625__$1 = (function (){var statearr_32634 = state_32625;
(statearr_32634[(9)] = inst_32622);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32625__$1,inst_32623);
} else {
if((state_val_32626 === (2))){
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32625__$1,(4),ch);
} else {
if((state_val_32626 === (11))){
var inst_32605 = (state_32625[(8)]);
var inst_32614 = (state_32625[(2)]);
var inst_32602 = inst_32605;
var state_32625__$1 = (function (){var statearr_32635 = state_32625;
(statearr_32635[(7)] = inst_32602);

(statearr_32635[(10)] = inst_32614);

return statearr_32635;
})();
var statearr_32636_32660 = state_32625__$1;
(statearr_32636_32660[(2)] = null);

(statearr_32636_32660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (9))){
var inst_32605 = (state_32625[(8)]);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32625__$1,(11),out,inst_32605);
} else {
if((state_val_32626 === (5))){
var inst_32602 = (state_32625[(7)]);
var inst_32605 = (state_32625[(8)]);
var inst_32609 = cljs.core._EQ_.call(null,inst_32605,inst_32602);
var state_32625__$1 = state_32625;
if(inst_32609){
var statearr_32638_32661 = state_32625__$1;
(statearr_32638_32661[(1)] = (8));

} else {
var statearr_32639_32662 = state_32625__$1;
(statearr_32639_32662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (10))){
var inst_32617 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32640_32663 = state_32625__$1;
(statearr_32640_32663[(2)] = inst_32617);

(statearr_32640_32663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (8))){
var inst_32602 = (state_32625[(7)]);
var tmp32637 = inst_32602;
var inst_32602__$1 = tmp32637;
var state_32625__$1 = (function (){var statearr_32641 = state_32625;
(statearr_32641[(7)] = inst_32602__$1);

return statearr_32641;
})();
var statearr_32642_32664 = state_32625__$1;
(statearr_32642_32664[(2)] = null);

(statearr_32642_32664[(1)] = (2));


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
});})(c__30029__auto___32654,out))
;
return ((function (switch__29917__auto__,c__30029__auto___32654,out){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32646[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32646[(1)] = (1));

return statearr_32646;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32625){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32647){if((e32647 instanceof Object)){
var ex__29921__auto__ = e32647;
var statearr_32648_32665 = state_32625;
(statearr_32648_32665[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32666 = state_32625;
state_32625 = G__32666;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32654,out))
})();
var state__30031__auto__ = (function (){var statearr_32649 = f__30030__auto__.call(null);
(statearr_32649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32654);

return statearr_32649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32654,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32667 = [];
var len__25897__auto___32737 = arguments.length;
var i__25898__auto___32738 = (0);
while(true){
if((i__25898__auto___32738 < len__25897__auto___32737)){
args32667.push((arguments[i__25898__auto___32738]));

var G__32739 = (i__25898__auto___32738 + (1));
i__25898__auto___32738 = G__32739;
continue;
} else {
}
break;
}

var G__32669 = args32667.length;
switch (G__32669) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32667.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32741,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32741,out){
return (function (state_32707){
var state_val_32708 = (state_32707[(1)]);
if((state_val_32708 === (7))){
var inst_32703 = (state_32707[(2)]);
var state_32707__$1 = state_32707;
var statearr_32709_32742 = state_32707__$1;
(statearr_32709_32742[(2)] = inst_32703);

(statearr_32709_32742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (1))){
var inst_32670 = (new Array(n));
var inst_32671 = inst_32670;
var inst_32672 = (0);
var state_32707__$1 = (function (){var statearr_32710 = state_32707;
(statearr_32710[(7)] = inst_32671);

(statearr_32710[(8)] = inst_32672);

return statearr_32710;
})();
var statearr_32711_32743 = state_32707__$1;
(statearr_32711_32743[(2)] = null);

(statearr_32711_32743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (4))){
var inst_32675 = (state_32707[(9)]);
var inst_32675__$1 = (state_32707[(2)]);
var inst_32676 = (inst_32675__$1 == null);
var inst_32677 = cljs.core.not.call(null,inst_32676);
var state_32707__$1 = (function (){var statearr_32712 = state_32707;
(statearr_32712[(9)] = inst_32675__$1);

return statearr_32712;
})();
if(inst_32677){
var statearr_32713_32744 = state_32707__$1;
(statearr_32713_32744[(1)] = (5));

} else {
var statearr_32714_32745 = state_32707__$1;
(statearr_32714_32745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (15))){
var inst_32697 = (state_32707[(2)]);
var state_32707__$1 = state_32707;
var statearr_32715_32746 = state_32707__$1;
(statearr_32715_32746[(2)] = inst_32697);

(statearr_32715_32746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (13))){
var state_32707__$1 = state_32707;
var statearr_32716_32747 = state_32707__$1;
(statearr_32716_32747[(2)] = null);

(statearr_32716_32747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (6))){
var inst_32672 = (state_32707[(8)]);
var inst_32693 = (inst_32672 > (0));
var state_32707__$1 = state_32707;
if(cljs.core.truth_(inst_32693)){
var statearr_32717_32748 = state_32707__$1;
(statearr_32717_32748[(1)] = (12));

} else {
var statearr_32718_32749 = state_32707__$1;
(statearr_32718_32749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (3))){
var inst_32705 = (state_32707[(2)]);
var state_32707__$1 = state_32707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32707__$1,inst_32705);
} else {
if((state_val_32708 === (12))){
var inst_32671 = (state_32707[(7)]);
var inst_32695 = cljs.core.vec.call(null,inst_32671);
var state_32707__$1 = state_32707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32707__$1,(15),out,inst_32695);
} else {
if((state_val_32708 === (2))){
var state_32707__$1 = state_32707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32707__$1,(4),ch);
} else {
if((state_val_32708 === (11))){
var inst_32687 = (state_32707[(2)]);
var inst_32688 = (new Array(n));
var inst_32671 = inst_32688;
var inst_32672 = (0);
var state_32707__$1 = (function (){var statearr_32719 = state_32707;
(statearr_32719[(7)] = inst_32671);

(statearr_32719[(8)] = inst_32672);

(statearr_32719[(10)] = inst_32687);

return statearr_32719;
})();
var statearr_32720_32750 = state_32707__$1;
(statearr_32720_32750[(2)] = null);

(statearr_32720_32750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (9))){
var inst_32671 = (state_32707[(7)]);
var inst_32685 = cljs.core.vec.call(null,inst_32671);
var state_32707__$1 = state_32707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32707__$1,(11),out,inst_32685);
} else {
if((state_val_32708 === (5))){
var inst_32671 = (state_32707[(7)]);
var inst_32675 = (state_32707[(9)]);
var inst_32680 = (state_32707[(11)]);
var inst_32672 = (state_32707[(8)]);
var inst_32679 = (inst_32671[inst_32672] = inst_32675);
var inst_32680__$1 = (inst_32672 + (1));
var inst_32681 = (inst_32680__$1 < n);
var state_32707__$1 = (function (){var statearr_32721 = state_32707;
(statearr_32721[(12)] = inst_32679);

(statearr_32721[(11)] = inst_32680__$1);

return statearr_32721;
})();
if(cljs.core.truth_(inst_32681)){
var statearr_32722_32751 = state_32707__$1;
(statearr_32722_32751[(1)] = (8));

} else {
var statearr_32723_32752 = state_32707__$1;
(statearr_32723_32752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (14))){
var inst_32700 = (state_32707[(2)]);
var inst_32701 = cljs.core.async.close_BANG_.call(null,out);
var state_32707__$1 = (function (){var statearr_32725 = state_32707;
(statearr_32725[(13)] = inst_32700);

return statearr_32725;
})();
var statearr_32726_32753 = state_32707__$1;
(statearr_32726_32753[(2)] = inst_32701);

(statearr_32726_32753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (10))){
var inst_32691 = (state_32707[(2)]);
var state_32707__$1 = state_32707;
var statearr_32727_32754 = state_32707__$1;
(statearr_32727_32754[(2)] = inst_32691);

(statearr_32727_32754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32708 === (8))){
var inst_32671 = (state_32707[(7)]);
var inst_32680 = (state_32707[(11)]);
var tmp32724 = inst_32671;
var inst_32671__$1 = tmp32724;
var inst_32672 = inst_32680;
var state_32707__$1 = (function (){var statearr_32728 = state_32707;
(statearr_32728[(7)] = inst_32671__$1);

(statearr_32728[(8)] = inst_32672);

return statearr_32728;
})();
var statearr_32729_32755 = state_32707__$1;
(statearr_32729_32755[(2)] = null);

(statearr_32729_32755[(1)] = (2));


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
});})(c__30029__auto___32741,out))
;
return ((function (switch__29917__auto__,c__30029__auto___32741,out){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32733[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32733[(1)] = (1));

return statearr_32733;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32707){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32734){if((e32734 instanceof Object)){
var ex__29921__auto__ = e32734;
var statearr_32735_32756 = state_32707;
(statearr_32735_32756[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_32707;
state_32707 = G__32757;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32741,out))
})();
var state__30031__auto__ = (function (){var statearr_32736 = f__30030__auto__.call(null);
(statearr_32736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32741);

return statearr_32736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32741,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32758 = [];
var len__25897__auto___32832 = arguments.length;
var i__25898__auto___32833 = (0);
while(true){
if((i__25898__auto___32833 < len__25897__auto___32832)){
args32758.push((arguments[i__25898__auto___32833]));

var G__32834 = (i__25898__auto___32833 + (1));
i__25898__auto___32833 = G__32834;
continue;
} else {
}
break;
}

var G__32760 = args32758.length;
switch (G__32760) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32758.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30029__auto___32836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___32836,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___32836,out){
return (function (state_32802){
var state_val_32803 = (state_32802[(1)]);
if((state_val_32803 === (7))){
var inst_32798 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32804_32837 = state_32802__$1;
(statearr_32804_32837[(2)] = inst_32798);

(statearr_32804_32837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (1))){
var inst_32761 = [];
var inst_32762 = inst_32761;
var inst_32763 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32802__$1 = (function (){var statearr_32805 = state_32802;
(statearr_32805[(7)] = inst_32763);

(statearr_32805[(8)] = inst_32762);

return statearr_32805;
})();
var statearr_32806_32838 = state_32802__$1;
(statearr_32806_32838[(2)] = null);

(statearr_32806_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (4))){
var inst_32766 = (state_32802[(9)]);
var inst_32766__$1 = (state_32802[(2)]);
var inst_32767 = (inst_32766__$1 == null);
var inst_32768 = cljs.core.not.call(null,inst_32767);
var state_32802__$1 = (function (){var statearr_32807 = state_32802;
(statearr_32807[(9)] = inst_32766__$1);

return statearr_32807;
})();
if(inst_32768){
var statearr_32808_32839 = state_32802__$1;
(statearr_32808_32839[(1)] = (5));

} else {
var statearr_32809_32840 = state_32802__$1;
(statearr_32809_32840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (15))){
var inst_32792 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32810_32841 = state_32802__$1;
(statearr_32810_32841[(2)] = inst_32792);

(statearr_32810_32841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (13))){
var state_32802__$1 = state_32802;
var statearr_32811_32842 = state_32802__$1;
(statearr_32811_32842[(2)] = null);

(statearr_32811_32842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (6))){
var inst_32762 = (state_32802[(8)]);
var inst_32787 = inst_32762.length;
var inst_32788 = (inst_32787 > (0));
var state_32802__$1 = state_32802;
if(cljs.core.truth_(inst_32788)){
var statearr_32812_32843 = state_32802__$1;
(statearr_32812_32843[(1)] = (12));

} else {
var statearr_32813_32844 = state_32802__$1;
(statearr_32813_32844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (3))){
var inst_32800 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32802__$1,inst_32800);
} else {
if((state_val_32803 === (12))){
var inst_32762 = (state_32802[(8)]);
var inst_32790 = cljs.core.vec.call(null,inst_32762);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(15),out,inst_32790);
} else {
if((state_val_32803 === (2))){
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32802__$1,(4),ch);
} else {
if((state_val_32803 === (11))){
var inst_32766 = (state_32802[(9)]);
var inst_32770 = (state_32802[(10)]);
var inst_32780 = (state_32802[(2)]);
var inst_32781 = [];
var inst_32782 = inst_32781.push(inst_32766);
var inst_32762 = inst_32781;
var inst_32763 = inst_32770;
var state_32802__$1 = (function (){var statearr_32814 = state_32802;
(statearr_32814[(11)] = inst_32782);

(statearr_32814[(7)] = inst_32763);

(statearr_32814[(12)] = inst_32780);

(statearr_32814[(8)] = inst_32762);

return statearr_32814;
})();
var statearr_32815_32845 = state_32802__$1;
(statearr_32815_32845[(2)] = null);

(statearr_32815_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (9))){
var inst_32762 = (state_32802[(8)]);
var inst_32778 = cljs.core.vec.call(null,inst_32762);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32802__$1,(11),out,inst_32778);
} else {
if((state_val_32803 === (5))){
var inst_32763 = (state_32802[(7)]);
var inst_32766 = (state_32802[(9)]);
var inst_32770 = (state_32802[(10)]);
var inst_32770__$1 = f.call(null,inst_32766);
var inst_32771 = cljs.core._EQ_.call(null,inst_32770__$1,inst_32763);
var inst_32772 = cljs.core.keyword_identical_QMARK_.call(null,inst_32763,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32773 = (inst_32771) || (inst_32772);
var state_32802__$1 = (function (){var statearr_32816 = state_32802;
(statearr_32816[(10)] = inst_32770__$1);

return statearr_32816;
})();
if(cljs.core.truth_(inst_32773)){
var statearr_32817_32846 = state_32802__$1;
(statearr_32817_32846[(1)] = (8));

} else {
var statearr_32818_32847 = state_32802__$1;
(statearr_32818_32847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (14))){
var inst_32795 = (state_32802[(2)]);
var inst_32796 = cljs.core.async.close_BANG_.call(null,out);
var state_32802__$1 = (function (){var statearr_32820 = state_32802;
(statearr_32820[(13)] = inst_32795);

return statearr_32820;
})();
var statearr_32821_32848 = state_32802__$1;
(statearr_32821_32848[(2)] = inst_32796);

(statearr_32821_32848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (10))){
var inst_32785 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32822_32849 = state_32802__$1;
(statearr_32822_32849[(2)] = inst_32785);

(statearr_32822_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (8))){
var inst_32766 = (state_32802[(9)]);
var inst_32770 = (state_32802[(10)]);
var inst_32762 = (state_32802[(8)]);
var inst_32775 = inst_32762.push(inst_32766);
var tmp32819 = inst_32762;
var inst_32762__$1 = tmp32819;
var inst_32763 = inst_32770;
var state_32802__$1 = (function (){var statearr_32823 = state_32802;
(statearr_32823[(7)] = inst_32763);

(statearr_32823[(8)] = inst_32762__$1);

(statearr_32823[(14)] = inst_32775);

return statearr_32823;
})();
var statearr_32824_32850 = state_32802__$1;
(statearr_32824_32850[(2)] = null);

(statearr_32824_32850[(1)] = (2));


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
});})(c__30029__auto___32836,out))
;
return ((function (switch__29917__auto__,c__30029__auto___32836,out){
return (function() {
var cljs$core$async$state_machine__29918__auto__ = null;
var cljs$core$async$state_machine__29918__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__29918__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__29918__auto____1 = (function (state_32802){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_32802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e32829){if((e32829 instanceof Object)){
var ex__29921__auto__ = e32829;
var statearr_32830_32851 = state_32802;
(statearr_32830_32851[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32852 = state_32802;
state_32802 = G__32852;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
cljs$core$async$state_machine__29918__auto__ = function(state_32802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29918__auto____1.call(this,state_32802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29918__auto____0;
cljs$core$async$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29918__auto____1;
return cljs$core$async$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___32836,out))
})();
var state__30031__auto__ = (function (){var statearr_32831 = f__30030__auto__.call(null);
(statearr_32831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___32836);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___32836,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1482768543764