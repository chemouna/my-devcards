// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35263 = arguments.length;
var i__25898__auto___35264 = (0);
while(true){
if((i__25898__auto___35264 < len__25897__auto___35263)){
args__25904__auto__.push((arguments[i__25898__auto___35264]));

var G__35265 = (i__25898__auto___35264 + (1));
i__25898__auto___35264 = G__35265;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35262){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35262));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35267 = arguments.length;
var i__25898__auto___35268 = (0);
while(true){
if((i__25898__auto___35268 < len__25897__auto___35267)){
args__25904__auto__.push((arguments[i__25898__auto___35268]));

var G__35269 = (i__25898__auto___35268 + (1));
i__25898__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35266){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35266));
});

var g_QMARK__35270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35271 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35270){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35270))
,null));
var mkg_35272 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35270,g_35271){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35270,g_35271))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35270,g_35271,mkg_35272){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35270).call(null,x);
});})(g_QMARK__35270,g_35271,mkg_35272))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35270,g_35271,mkg_35272){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35272).call(null,gfn);
});})(g_QMARK__35270,g_35271,mkg_35272))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35270,g_35271,mkg_35272){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35271).call(null,generator);
});})(g_QMARK__35270,g_35271,mkg_35272))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35234__auto___35291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35234__auto___35291){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35292 = arguments.length;
var i__25898__auto___35293 = (0);
while(true){
if((i__25898__auto___35293 < len__25897__auto___35292)){
args__25904__auto__.push((arguments[i__25898__auto___35293]));

var G__35294 = (i__25898__auto___35293 + (1));
i__25898__auto___35293 = G__35294;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35291))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35291){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35291),args);
});})(g__35234__auto___35291))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35234__auto___35291){
return (function (seq35273){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35273));
});})(g__35234__auto___35291))
;


var g__35234__auto___35295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35234__auto___35295){
return (function cljs$spec$impl$gen$list(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35296 = arguments.length;
var i__25898__auto___35297 = (0);
while(true){
if((i__25898__auto___35297 < len__25897__auto___35296)){
args__25904__auto__.push((arguments[i__25898__auto___35297]));

var G__35298 = (i__25898__auto___35297 + (1));
i__25898__auto___35297 = G__35298;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35295))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35295){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35295),args);
});})(g__35234__auto___35295))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35234__auto___35295){
return (function (seq35274){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35274));
});})(g__35234__auto___35295))
;


var g__35234__auto___35299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35234__auto___35299){
return (function cljs$spec$impl$gen$map(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35300 = arguments.length;
var i__25898__auto___35301 = (0);
while(true){
if((i__25898__auto___35301 < len__25897__auto___35300)){
args__25904__auto__.push((arguments[i__25898__auto___35301]));

var G__35302 = (i__25898__auto___35301 + (1));
i__25898__auto___35301 = G__35302;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35299))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35299),args);
});})(g__35234__auto___35299))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35234__auto___35299){
return (function (seq35275){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35275));
});})(g__35234__auto___35299))
;


var g__35234__auto___35303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35234__auto___35303){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35304 = arguments.length;
var i__25898__auto___35305 = (0);
while(true){
if((i__25898__auto___35305 < len__25897__auto___35304)){
args__25904__auto__.push((arguments[i__25898__auto___35305]));

var G__35306 = (i__25898__auto___35305 + (1));
i__25898__auto___35305 = G__35306;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35303))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35303),args);
});})(g__35234__auto___35303))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35234__auto___35303){
return (function (seq35276){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35276));
});})(g__35234__auto___35303))
;


var g__35234__auto___35307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35234__auto___35307){
return (function cljs$spec$impl$gen$set(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35308 = arguments.length;
var i__25898__auto___35309 = (0);
while(true){
if((i__25898__auto___35309 < len__25897__auto___35308)){
args__25904__auto__.push((arguments[i__25898__auto___35309]));

var G__35310 = (i__25898__auto___35309 + (1));
i__25898__auto___35309 = G__35310;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35307))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35307),args);
});})(g__35234__auto___35307))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35234__auto___35307){
return (function (seq35277){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35277));
});})(g__35234__auto___35307))
;


var g__35234__auto___35311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35234__auto___35311){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35312 = arguments.length;
var i__25898__auto___35313 = (0);
while(true){
if((i__25898__auto___35313 < len__25897__auto___35312)){
args__25904__auto__.push((arguments[i__25898__auto___35313]));

var G__35314 = (i__25898__auto___35313 + (1));
i__25898__auto___35313 = G__35314;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35311))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35311),args);
});})(g__35234__auto___35311))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35234__auto___35311){
return (function (seq35278){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35278));
});})(g__35234__auto___35311))
;


var g__35234__auto___35315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35234__auto___35315){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35316 = arguments.length;
var i__25898__auto___35317 = (0);
while(true){
if((i__25898__auto___35317 < len__25897__auto___35316)){
args__25904__auto__.push((arguments[i__25898__auto___35317]));

var G__35318 = (i__25898__auto___35317 + (1));
i__25898__auto___35317 = G__35318;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35315))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35315){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35315),args);
});})(g__35234__auto___35315))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35234__auto___35315){
return (function (seq35279){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35279));
});})(g__35234__auto___35315))
;


var g__35234__auto___35319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35234__auto___35319){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35320 = arguments.length;
var i__25898__auto___35321 = (0);
while(true){
if((i__25898__auto___35321 < len__25897__auto___35320)){
args__25904__auto__.push((arguments[i__25898__auto___35321]));

var G__35322 = (i__25898__auto___35321 + (1));
i__25898__auto___35321 = G__35322;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35319))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35319){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35319),args);
});})(g__35234__auto___35319))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35234__auto___35319){
return (function (seq35280){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35280));
});})(g__35234__auto___35319))
;


var g__35234__auto___35323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35234__auto___35323){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35324 = arguments.length;
var i__25898__auto___35325 = (0);
while(true){
if((i__25898__auto___35325 < len__25897__auto___35324)){
args__25904__auto__.push((arguments[i__25898__auto___35325]));

var G__35326 = (i__25898__auto___35325 + (1));
i__25898__auto___35325 = G__35326;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35323))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35323){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35323),args);
});})(g__35234__auto___35323))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35234__auto___35323){
return (function (seq35281){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35281));
});})(g__35234__auto___35323))
;


var g__35234__auto___35327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35234__auto___35327){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35328 = arguments.length;
var i__25898__auto___35329 = (0);
while(true){
if((i__25898__auto___35329 < len__25897__auto___35328)){
args__25904__auto__.push((arguments[i__25898__auto___35329]));

var G__35330 = (i__25898__auto___35329 + (1));
i__25898__auto___35329 = G__35330;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35327))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35327){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35327),args);
});})(g__35234__auto___35327))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35234__auto___35327){
return (function (seq35282){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35282));
});})(g__35234__auto___35327))
;


var g__35234__auto___35331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35234__auto___35331){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35332 = arguments.length;
var i__25898__auto___35333 = (0);
while(true){
if((i__25898__auto___35333 < len__25897__auto___35332)){
args__25904__auto__.push((arguments[i__25898__auto___35333]));

var G__35334 = (i__25898__auto___35333 + (1));
i__25898__auto___35333 = G__35334;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35331))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35331){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35331),args);
});})(g__35234__auto___35331))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35234__auto___35331){
return (function (seq35283){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35283));
});})(g__35234__auto___35331))
;


var g__35234__auto___35335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35234__auto___35335){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35336 = arguments.length;
var i__25898__auto___35337 = (0);
while(true){
if((i__25898__auto___35337 < len__25897__auto___35336)){
args__25904__auto__.push((arguments[i__25898__auto___35337]));

var G__35338 = (i__25898__auto___35337 + (1));
i__25898__auto___35337 = G__35338;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35335))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35335){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35335),args);
});})(g__35234__auto___35335))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35234__auto___35335){
return (function (seq35284){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35284));
});})(g__35234__auto___35335))
;


var g__35234__auto___35339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35234__auto___35339){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35340 = arguments.length;
var i__25898__auto___35341 = (0);
while(true){
if((i__25898__auto___35341 < len__25897__auto___35340)){
args__25904__auto__.push((arguments[i__25898__auto___35341]));

var G__35342 = (i__25898__auto___35341 + (1));
i__25898__auto___35341 = G__35342;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35339))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35339){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35339),args);
});})(g__35234__auto___35339))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35234__auto___35339){
return (function (seq35285){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35285));
});})(g__35234__auto___35339))
;


var g__35234__auto___35343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35234__auto___35343){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35344 = arguments.length;
var i__25898__auto___35345 = (0);
while(true){
if((i__25898__auto___35345 < len__25897__auto___35344)){
args__25904__auto__.push((arguments[i__25898__auto___35345]));

var G__35346 = (i__25898__auto___35345 + (1));
i__25898__auto___35345 = G__35346;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35343))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35343){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35343),args);
});})(g__35234__auto___35343))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35234__auto___35343){
return (function (seq35286){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35286));
});})(g__35234__auto___35343))
;


var g__35234__auto___35347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35234__auto___35347){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35348 = arguments.length;
var i__25898__auto___35349 = (0);
while(true){
if((i__25898__auto___35349 < len__25897__auto___35348)){
args__25904__auto__.push((arguments[i__25898__auto___35349]));

var G__35350 = (i__25898__auto___35349 + (1));
i__25898__auto___35349 = G__35350;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35347))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35347){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35347),args);
});})(g__35234__auto___35347))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35234__auto___35347){
return (function (seq35287){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35287));
});})(g__35234__auto___35347))
;


var g__35234__auto___35351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35234__auto___35351){
return (function cljs$spec$impl$gen$return(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35352 = arguments.length;
var i__25898__auto___35353 = (0);
while(true){
if((i__25898__auto___35353 < len__25897__auto___35352)){
args__25904__auto__.push((arguments[i__25898__auto___35353]));

var G__35354 = (i__25898__auto___35353 + (1));
i__25898__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35351))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35351){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35351),args);
});})(g__35234__auto___35351))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35234__auto___35351){
return (function (seq35288){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35288));
});})(g__35234__auto___35351))
;


var g__35234__auto___35355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35234__auto___35355){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35356 = arguments.length;
var i__25898__auto___35357 = (0);
while(true){
if((i__25898__auto___35357 < len__25897__auto___35356)){
args__25904__auto__.push((arguments[i__25898__auto___35357]));

var G__35358 = (i__25898__auto___35357 + (1));
i__25898__auto___35357 = G__35358;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35355))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35355){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35355),args);
});})(g__35234__auto___35355))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35234__auto___35355){
return (function (seq35289){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35289));
});})(g__35234__auto___35355))
;


var g__35234__auto___35359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35234__auto___35359){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35360 = arguments.length;
var i__25898__auto___35361 = (0);
while(true){
if((i__25898__auto___35361 < len__25897__auto___35360)){
args__25904__auto__.push((arguments[i__25898__auto___35361]));

var G__35362 = (i__25898__auto___35361 + (1));
i__25898__auto___35361 = G__35362;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35234__auto___35359))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35234__auto___35359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35234__auto___35359),args);
});})(g__35234__auto___35359))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35234__auto___35359){
return (function (seq35290){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35290));
});})(g__35234__auto___35359))
;

var g__35247__auto___35384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35247__auto___35384){
return (function cljs$spec$impl$gen$any(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35385 = arguments.length;
var i__25898__auto___35386 = (0);
while(true){
if((i__25898__auto___35386 < len__25897__auto___35385)){
args__25904__auto__.push((arguments[i__25898__auto___35386]));

var G__35387 = (i__25898__auto___35386 + (1));
i__25898__auto___35386 = G__35387;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35384))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35384){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35384);
});})(g__35247__auto___35384))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35247__auto___35384){
return (function (seq35363){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35363));
});})(g__35247__auto___35384))
;


var g__35247__auto___35388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35247__auto___35388){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35389 = arguments.length;
var i__25898__auto___35390 = (0);
while(true){
if((i__25898__auto___35390 < len__25897__auto___35389)){
args__25904__auto__.push((arguments[i__25898__auto___35390]));

var G__35391 = (i__25898__auto___35390 + (1));
i__25898__auto___35390 = G__35391;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35388))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35388){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35388);
});})(g__35247__auto___35388))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35247__auto___35388){
return (function (seq35364){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35364));
});})(g__35247__auto___35388))
;


var g__35247__auto___35392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35247__auto___35392){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35393 = arguments.length;
var i__25898__auto___35394 = (0);
while(true){
if((i__25898__auto___35394 < len__25897__auto___35393)){
args__25904__auto__.push((arguments[i__25898__auto___35394]));

var G__35395 = (i__25898__auto___35394 + (1));
i__25898__auto___35394 = G__35395;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35392))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35392){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35392);
});})(g__35247__auto___35392))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35247__auto___35392){
return (function (seq35365){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35365));
});})(g__35247__auto___35392))
;


var g__35247__auto___35396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35247__auto___35396){
return (function cljs$spec$impl$gen$char(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35397 = arguments.length;
var i__25898__auto___35398 = (0);
while(true){
if((i__25898__auto___35398 < len__25897__auto___35397)){
args__25904__auto__.push((arguments[i__25898__auto___35398]));

var G__35399 = (i__25898__auto___35398 + (1));
i__25898__auto___35398 = G__35399;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35396))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35396){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35396);
});})(g__35247__auto___35396))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35247__auto___35396){
return (function (seq35366){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35366));
});})(g__35247__auto___35396))
;


var g__35247__auto___35400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35247__auto___35400){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35401 = arguments.length;
var i__25898__auto___35402 = (0);
while(true){
if((i__25898__auto___35402 < len__25897__auto___35401)){
args__25904__auto__.push((arguments[i__25898__auto___35402]));

var G__35403 = (i__25898__auto___35402 + (1));
i__25898__auto___35402 = G__35403;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35400))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35400){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35400);
});})(g__35247__auto___35400))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35247__auto___35400){
return (function (seq35367){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35367));
});})(g__35247__auto___35400))
;


var g__35247__auto___35404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35247__auto___35404){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35405 = arguments.length;
var i__25898__auto___35406 = (0);
while(true){
if((i__25898__auto___35406 < len__25897__auto___35405)){
args__25904__auto__.push((arguments[i__25898__auto___35406]));

var G__35407 = (i__25898__auto___35406 + (1));
i__25898__auto___35406 = G__35407;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35404))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35404){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35404);
});})(g__35247__auto___35404))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35247__auto___35404){
return (function (seq35368){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35368));
});})(g__35247__auto___35404))
;


var g__35247__auto___35408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35247__auto___35408){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35409 = arguments.length;
var i__25898__auto___35410 = (0);
while(true){
if((i__25898__auto___35410 < len__25897__auto___35409)){
args__25904__auto__.push((arguments[i__25898__auto___35410]));

var G__35411 = (i__25898__auto___35410 + (1));
i__25898__auto___35410 = G__35411;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35408))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35408){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35408);
});})(g__35247__auto___35408))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35247__auto___35408){
return (function (seq35369){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35369));
});})(g__35247__auto___35408))
;


var g__35247__auto___35412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35247__auto___35412){
return (function cljs$spec$impl$gen$double(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35413 = arguments.length;
var i__25898__auto___35414 = (0);
while(true){
if((i__25898__auto___35414 < len__25897__auto___35413)){
args__25904__auto__.push((arguments[i__25898__auto___35414]));

var G__35415 = (i__25898__auto___35414 + (1));
i__25898__auto___35414 = G__35415;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35412))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35412){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35412);
});})(g__35247__auto___35412))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35247__auto___35412){
return (function (seq35370){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35370));
});})(g__35247__auto___35412))
;


var g__35247__auto___35416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35247__auto___35416){
return (function cljs$spec$impl$gen$int(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35417 = arguments.length;
var i__25898__auto___35418 = (0);
while(true){
if((i__25898__auto___35418 < len__25897__auto___35417)){
args__25904__auto__.push((arguments[i__25898__auto___35418]));

var G__35419 = (i__25898__auto___35418 + (1));
i__25898__auto___35418 = G__35419;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35416))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35416){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35416);
});})(g__35247__auto___35416))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35247__auto___35416){
return (function (seq35371){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35371));
});})(g__35247__auto___35416))
;


var g__35247__auto___35420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35247__auto___35420){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35421 = arguments.length;
var i__25898__auto___35422 = (0);
while(true){
if((i__25898__auto___35422 < len__25897__auto___35421)){
args__25904__auto__.push((arguments[i__25898__auto___35422]));

var G__35423 = (i__25898__auto___35422 + (1));
i__25898__auto___35422 = G__35423;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35420))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35420){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35420);
});})(g__35247__auto___35420))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35247__auto___35420){
return (function (seq35372){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35372));
});})(g__35247__auto___35420))
;


var g__35247__auto___35424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35247__auto___35424){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35425 = arguments.length;
var i__25898__auto___35426 = (0);
while(true){
if((i__25898__auto___35426 < len__25897__auto___35425)){
args__25904__auto__.push((arguments[i__25898__auto___35426]));

var G__35427 = (i__25898__auto___35426 + (1));
i__25898__auto___35426 = G__35427;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35424))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35424){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35424);
});})(g__35247__auto___35424))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35247__auto___35424){
return (function (seq35373){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35373));
});})(g__35247__auto___35424))
;


var g__35247__auto___35428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35247__auto___35428){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35429 = arguments.length;
var i__25898__auto___35430 = (0);
while(true){
if((i__25898__auto___35430 < len__25897__auto___35429)){
args__25904__auto__.push((arguments[i__25898__auto___35430]));

var G__35431 = (i__25898__auto___35430 + (1));
i__25898__auto___35430 = G__35431;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35428))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35428){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35428);
});})(g__35247__auto___35428))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35247__auto___35428){
return (function (seq35374){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35374));
});})(g__35247__auto___35428))
;


var g__35247__auto___35432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35247__auto___35432){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35433 = arguments.length;
var i__25898__auto___35434 = (0);
while(true){
if((i__25898__auto___35434 < len__25897__auto___35433)){
args__25904__auto__.push((arguments[i__25898__auto___35434]));

var G__35435 = (i__25898__auto___35434 + (1));
i__25898__auto___35434 = G__35435;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35432))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35432){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35432);
});})(g__35247__auto___35432))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35247__auto___35432){
return (function (seq35375){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35375));
});})(g__35247__auto___35432))
;


var g__35247__auto___35436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35247__auto___35436){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35437 = arguments.length;
var i__25898__auto___35438 = (0);
while(true){
if((i__25898__auto___35438 < len__25897__auto___35437)){
args__25904__auto__.push((arguments[i__25898__auto___35438]));

var G__35439 = (i__25898__auto___35438 + (1));
i__25898__auto___35438 = G__35439;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35436))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35436){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35436);
});})(g__35247__auto___35436))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35247__auto___35436){
return (function (seq35376){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35376));
});})(g__35247__auto___35436))
;


var g__35247__auto___35440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35247__auto___35440){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35441 = arguments.length;
var i__25898__auto___35442 = (0);
while(true){
if((i__25898__auto___35442 < len__25897__auto___35441)){
args__25904__auto__.push((arguments[i__25898__auto___35442]));

var G__35443 = (i__25898__auto___35442 + (1));
i__25898__auto___35442 = G__35443;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35440))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35440){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35440);
});})(g__35247__auto___35440))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35247__auto___35440){
return (function (seq35377){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35377));
});})(g__35247__auto___35440))
;


var g__35247__auto___35444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35247__auto___35444){
return (function cljs$spec$impl$gen$string(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35445 = arguments.length;
var i__25898__auto___35446 = (0);
while(true){
if((i__25898__auto___35446 < len__25897__auto___35445)){
args__25904__auto__.push((arguments[i__25898__auto___35446]));

var G__35447 = (i__25898__auto___35446 + (1));
i__25898__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35444))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35444){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35444);
});})(g__35247__auto___35444))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35247__auto___35444){
return (function (seq35378){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35378));
});})(g__35247__auto___35444))
;


var g__35247__auto___35448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35247__auto___35448){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35449 = arguments.length;
var i__25898__auto___35450 = (0);
while(true){
if((i__25898__auto___35450 < len__25897__auto___35449)){
args__25904__auto__.push((arguments[i__25898__auto___35450]));

var G__35451 = (i__25898__auto___35450 + (1));
i__25898__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35448))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35448){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35448);
});})(g__35247__auto___35448))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35247__auto___35448){
return (function (seq35379){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35379));
});})(g__35247__auto___35448))
;


var g__35247__auto___35452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35247__auto___35452){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35453 = arguments.length;
var i__25898__auto___35454 = (0);
while(true){
if((i__25898__auto___35454 < len__25897__auto___35453)){
args__25904__auto__.push((arguments[i__25898__auto___35454]));

var G__35455 = (i__25898__auto___35454 + (1));
i__25898__auto___35454 = G__35455;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35452))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35452){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35452);
});})(g__35247__auto___35452))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35247__auto___35452){
return (function (seq35380){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35380));
});})(g__35247__auto___35452))
;


var g__35247__auto___35456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35247__auto___35456){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35457 = arguments.length;
var i__25898__auto___35458 = (0);
while(true){
if((i__25898__auto___35458 < len__25897__auto___35457)){
args__25904__auto__.push((arguments[i__25898__auto___35458]));

var G__35459 = (i__25898__auto___35458 + (1));
i__25898__auto___35458 = G__35459;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35456))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35456){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35456);
});})(g__35247__auto___35456))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35247__auto___35456){
return (function (seq35381){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35381));
});})(g__35247__auto___35456))
;


var g__35247__auto___35460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35247__auto___35460){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35461 = arguments.length;
var i__25898__auto___35462 = (0);
while(true){
if((i__25898__auto___35462 < len__25897__auto___35461)){
args__25904__auto__.push((arguments[i__25898__auto___35462]));

var G__35463 = (i__25898__auto___35462 + (1));
i__25898__auto___35462 = G__35463;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35460))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35460){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35460);
});})(g__35247__auto___35460))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35247__auto___35460){
return (function (seq35382){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35382));
});})(g__35247__auto___35460))
;


var g__35247__auto___35464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35247__auto___35464){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35465 = arguments.length;
var i__25898__auto___35466 = (0);
while(true){
if((i__25898__auto___35466 < len__25897__auto___35465)){
args__25904__auto__.push((arguments[i__25898__auto___35466]));

var G__35467 = (i__25898__auto___35466 + (1));
i__25898__auto___35466 = G__35467;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});})(g__35247__auto___35464))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35247__auto___35464){
return (function (args){
return cljs.core.deref.call(null,g__35247__auto___35464);
});})(g__35247__auto___35464))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35247__auto___35464){
return (function (seq35383){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35383));
});})(g__35247__auto___35464))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25904__auto__ = [];
var len__25897__auto___35470 = arguments.length;
var i__25898__auto___35471 = (0);
while(true){
if((i__25898__auto___35471 < len__25897__auto___35470)){
args__25904__auto__.push((arguments[i__25898__auto___35471]));

var G__35472 = (i__25898__auto___35471 + (1));
i__25898__auto___35471 = G__35472;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35468_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35468_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35469){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35469));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35473_SHARP_){
return (new Date(p1__35473_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1482768548010