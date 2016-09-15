// Compiled by ClojureScript 1.9.225 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7685__auto__,writer__7686__auto__,opt__7687__auto__){
return cljs.core._write.call(null,writer__7686__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__8161__auto__ = [];
var len__8154__auto___18430 = arguments.length;
var i__8155__auto___18431 = (0);
while(true){
if((i__8155__auto___18431 < len__8154__auto___18430)){
args__8161__auto__.push((arguments[i__8155__auto___18431]));

var G__18432 = (i__8155__auto___18431 + (1));
i__8155__auto___18431 = G__18432;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq18429){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18429));
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
var args__8161__auto__ = [];
var len__8154__auto___18434 = arguments.length;
var i__8155__auto___18435 = (0);
while(true){
if((i__8155__auto___18435 < len__8154__auto___18434)){
args__8161__auto__.push((arguments[i__8155__auto___18435]));

var G__18436 = (i__8155__auto___18435 + (1));
i__8155__auto___18435 = G__18436;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq18433){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18433));
});

var g_QMARK__18437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_18438 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__18437){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__18437))
,null));
var mkg_18439 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__18437,g_18438){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__18437,g_18438))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__18437,g_18438,mkg_18439){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__18437).call(null,x);
});})(g_QMARK__18437,g_18438,mkg_18439))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__18437,g_18438,mkg_18439){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_18439).call(null,gfn);
});})(g_QMARK__18437,g_18438,mkg_18439))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__18437,g_18438,mkg_18439){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_18438).call(null,generator);
});})(g_QMARK__18437,g_18438,mkg_18439))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12503__auto___18458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12503__auto___18458){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18459 = arguments.length;
var i__8155__auto___18460 = (0);
while(true){
if((i__8155__auto___18460 < len__8154__auto___18459)){
args__8161__auto__.push((arguments[i__8155__auto___18460]));

var G__18461 = (i__8155__auto___18460 + (1));
i__8155__auto___18460 = G__18461;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18458))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18458){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18458),args);
});})(g__12503__auto___18458))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12503__auto___18458){
return (function (seq18440){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18440));
});})(g__12503__auto___18458))
;


var g__12503__auto___18462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12503__auto___18462){
return (function cljs$spec$impl$gen$list(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18463 = arguments.length;
var i__8155__auto___18464 = (0);
while(true){
if((i__8155__auto___18464 < len__8154__auto___18463)){
args__8161__auto__.push((arguments[i__8155__auto___18464]));

var G__18465 = (i__8155__auto___18464 + (1));
i__8155__auto___18464 = G__18465;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18462))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18462){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18462),args);
});})(g__12503__auto___18462))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12503__auto___18462){
return (function (seq18441){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18441));
});})(g__12503__auto___18462))
;


var g__12503__auto___18466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12503__auto___18466){
return (function cljs$spec$impl$gen$map(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18467 = arguments.length;
var i__8155__auto___18468 = (0);
while(true){
if((i__8155__auto___18468 < len__8154__auto___18467)){
args__8161__auto__.push((arguments[i__8155__auto___18468]));

var G__18469 = (i__8155__auto___18468 + (1));
i__8155__auto___18468 = G__18469;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18466))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18466){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18466),args);
});})(g__12503__auto___18466))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12503__auto___18466){
return (function (seq18442){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18442));
});})(g__12503__auto___18466))
;


var g__12503__auto___18470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12503__auto___18470){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18471 = arguments.length;
var i__8155__auto___18472 = (0);
while(true){
if((i__8155__auto___18472 < len__8154__auto___18471)){
args__8161__auto__.push((arguments[i__8155__auto___18472]));

var G__18473 = (i__8155__auto___18472 + (1));
i__8155__auto___18472 = G__18473;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18470))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18470){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18470),args);
});})(g__12503__auto___18470))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12503__auto___18470){
return (function (seq18443){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18443));
});})(g__12503__auto___18470))
;


var g__12503__auto___18474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12503__auto___18474){
return (function cljs$spec$impl$gen$set(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18475 = arguments.length;
var i__8155__auto___18476 = (0);
while(true){
if((i__8155__auto___18476 < len__8154__auto___18475)){
args__8161__auto__.push((arguments[i__8155__auto___18476]));

var G__18477 = (i__8155__auto___18476 + (1));
i__8155__auto___18476 = G__18477;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18474))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18474){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18474),args);
});})(g__12503__auto___18474))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12503__auto___18474){
return (function (seq18444){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18444));
});})(g__12503__auto___18474))
;


var g__12503__auto___18478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12503__auto___18478){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18479 = arguments.length;
var i__8155__auto___18480 = (0);
while(true){
if((i__8155__auto___18480 < len__8154__auto___18479)){
args__8161__auto__.push((arguments[i__8155__auto___18480]));

var G__18481 = (i__8155__auto___18480 + (1));
i__8155__auto___18480 = G__18481;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18478))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18478){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18478),args);
});})(g__12503__auto___18478))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12503__auto___18478){
return (function (seq18445){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18445));
});})(g__12503__auto___18478))
;


var g__12503__auto___18482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12503__auto___18482){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18483 = arguments.length;
var i__8155__auto___18484 = (0);
while(true){
if((i__8155__auto___18484 < len__8154__auto___18483)){
args__8161__auto__.push((arguments[i__8155__auto___18484]));

var G__18485 = (i__8155__auto___18484 + (1));
i__8155__auto___18484 = G__18485;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18482))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18482){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18482),args);
});})(g__12503__auto___18482))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12503__auto___18482){
return (function (seq18446){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18446));
});})(g__12503__auto___18482))
;


var g__12503__auto___18486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12503__auto___18486){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18487 = arguments.length;
var i__8155__auto___18488 = (0);
while(true){
if((i__8155__auto___18488 < len__8154__auto___18487)){
args__8161__auto__.push((arguments[i__8155__auto___18488]));

var G__18489 = (i__8155__auto___18488 + (1));
i__8155__auto___18488 = G__18489;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18486))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18486){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18486),args);
});})(g__12503__auto___18486))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12503__auto___18486){
return (function (seq18447){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18447));
});})(g__12503__auto___18486))
;


var g__12503__auto___18490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12503__auto___18490){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18491 = arguments.length;
var i__8155__auto___18492 = (0);
while(true){
if((i__8155__auto___18492 < len__8154__auto___18491)){
args__8161__auto__.push((arguments[i__8155__auto___18492]));

var G__18493 = (i__8155__auto___18492 + (1));
i__8155__auto___18492 = G__18493;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18490))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18490){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18490),args);
});})(g__12503__auto___18490))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12503__auto___18490){
return (function (seq18448){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18448));
});})(g__12503__auto___18490))
;


var g__12503__auto___18494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12503__auto___18494){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18495 = arguments.length;
var i__8155__auto___18496 = (0);
while(true){
if((i__8155__auto___18496 < len__8154__auto___18495)){
args__8161__auto__.push((arguments[i__8155__auto___18496]));

var G__18497 = (i__8155__auto___18496 + (1));
i__8155__auto___18496 = G__18497;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18494))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18494){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18494),args);
});})(g__12503__auto___18494))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12503__auto___18494){
return (function (seq18449){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18449));
});})(g__12503__auto___18494))
;


var g__12503__auto___18498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12503__auto___18498){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18499 = arguments.length;
var i__8155__auto___18500 = (0);
while(true){
if((i__8155__auto___18500 < len__8154__auto___18499)){
args__8161__auto__.push((arguments[i__8155__auto___18500]));

var G__18501 = (i__8155__auto___18500 + (1));
i__8155__auto___18500 = G__18501;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18498))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18498),args);
});})(g__12503__auto___18498))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12503__auto___18498){
return (function (seq18450){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18450));
});})(g__12503__auto___18498))
;


var g__12503__auto___18502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12503__auto___18502){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18503 = arguments.length;
var i__8155__auto___18504 = (0);
while(true){
if((i__8155__auto___18504 < len__8154__auto___18503)){
args__8161__auto__.push((arguments[i__8155__auto___18504]));

var G__18505 = (i__8155__auto___18504 + (1));
i__8155__auto___18504 = G__18505;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18502))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18502),args);
});})(g__12503__auto___18502))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12503__auto___18502){
return (function (seq18451){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18451));
});})(g__12503__auto___18502))
;


var g__12503__auto___18506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12503__auto___18506){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18507 = arguments.length;
var i__8155__auto___18508 = (0);
while(true){
if((i__8155__auto___18508 < len__8154__auto___18507)){
args__8161__auto__.push((arguments[i__8155__auto___18508]));

var G__18509 = (i__8155__auto___18508 + (1));
i__8155__auto___18508 = G__18509;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18506))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18506),args);
});})(g__12503__auto___18506))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12503__auto___18506){
return (function (seq18452){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18452));
});})(g__12503__auto___18506))
;


var g__12503__auto___18510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12503__auto___18510){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18511 = arguments.length;
var i__8155__auto___18512 = (0);
while(true){
if((i__8155__auto___18512 < len__8154__auto___18511)){
args__8161__auto__.push((arguments[i__8155__auto___18512]));

var G__18513 = (i__8155__auto___18512 + (1));
i__8155__auto___18512 = G__18513;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18510))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18510),args);
});})(g__12503__auto___18510))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12503__auto___18510){
return (function (seq18453){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18453));
});})(g__12503__auto___18510))
;


var g__12503__auto___18514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12503__auto___18514){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18515 = arguments.length;
var i__8155__auto___18516 = (0);
while(true){
if((i__8155__auto___18516 < len__8154__auto___18515)){
args__8161__auto__.push((arguments[i__8155__auto___18516]));

var G__18517 = (i__8155__auto___18516 + (1));
i__8155__auto___18516 = G__18517;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18514))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18514),args);
});})(g__12503__auto___18514))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12503__auto___18514){
return (function (seq18454){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18454));
});})(g__12503__auto___18514))
;


var g__12503__auto___18518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12503__auto___18518){
return (function cljs$spec$impl$gen$return(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18519 = arguments.length;
var i__8155__auto___18520 = (0);
while(true){
if((i__8155__auto___18520 < len__8154__auto___18519)){
args__8161__auto__.push((arguments[i__8155__auto___18520]));

var G__18521 = (i__8155__auto___18520 + (1));
i__8155__auto___18520 = G__18521;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18518))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18518),args);
});})(g__12503__auto___18518))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12503__auto___18518){
return (function (seq18455){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18455));
});})(g__12503__auto___18518))
;


var g__12503__auto___18522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12503__auto___18522){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18523 = arguments.length;
var i__8155__auto___18524 = (0);
while(true){
if((i__8155__auto___18524 < len__8154__auto___18523)){
args__8161__auto__.push((arguments[i__8155__auto___18524]));

var G__18525 = (i__8155__auto___18524 + (1));
i__8155__auto___18524 = G__18525;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18522))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18522),args);
});})(g__12503__auto___18522))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12503__auto___18522){
return (function (seq18456){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18456));
});})(g__12503__auto___18522))
;


var g__12503__auto___18526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12503__auto___18526){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18527 = arguments.length;
var i__8155__auto___18528 = (0);
while(true){
if((i__8155__auto___18528 < len__8154__auto___18527)){
args__8161__auto__.push((arguments[i__8155__auto___18528]));

var G__18529 = (i__8155__auto___18528 + (1));
i__8155__auto___18528 = G__18529;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___18526))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___18526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___18526),args);
});})(g__12503__auto___18526))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12503__auto___18526){
return (function (seq18457){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18457));
});})(g__12503__auto___18526))
;

var g__12516__auto___18551 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12516__auto___18551){
return (function cljs$spec$impl$gen$any(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18552 = arguments.length;
var i__8155__auto___18553 = (0);
while(true){
if((i__8155__auto___18553 < len__8154__auto___18552)){
args__8161__auto__.push((arguments[i__8155__auto___18553]));

var G__18554 = (i__8155__auto___18553 + (1));
i__8155__auto___18553 = G__18554;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18551))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18551){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18551);
});})(g__12516__auto___18551))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12516__auto___18551){
return (function (seq18530){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18530));
});})(g__12516__auto___18551))
;


var g__12516__auto___18555 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12516__auto___18555){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18556 = arguments.length;
var i__8155__auto___18557 = (0);
while(true){
if((i__8155__auto___18557 < len__8154__auto___18556)){
args__8161__auto__.push((arguments[i__8155__auto___18557]));

var G__18558 = (i__8155__auto___18557 + (1));
i__8155__auto___18557 = G__18558;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18555))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18555){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18555);
});})(g__12516__auto___18555))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12516__auto___18555){
return (function (seq18531){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18531));
});})(g__12516__auto___18555))
;


var g__12516__auto___18559 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12516__auto___18559){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18560 = arguments.length;
var i__8155__auto___18561 = (0);
while(true){
if((i__8155__auto___18561 < len__8154__auto___18560)){
args__8161__auto__.push((arguments[i__8155__auto___18561]));

var G__18562 = (i__8155__auto___18561 + (1));
i__8155__auto___18561 = G__18562;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18559))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18559){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18559);
});})(g__12516__auto___18559))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12516__auto___18559){
return (function (seq18532){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18532));
});})(g__12516__auto___18559))
;


var g__12516__auto___18563 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12516__auto___18563){
return (function cljs$spec$impl$gen$char(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18564 = arguments.length;
var i__8155__auto___18565 = (0);
while(true){
if((i__8155__auto___18565 < len__8154__auto___18564)){
args__8161__auto__.push((arguments[i__8155__auto___18565]));

var G__18566 = (i__8155__auto___18565 + (1));
i__8155__auto___18565 = G__18566;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18563))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18563){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18563);
});})(g__12516__auto___18563))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12516__auto___18563){
return (function (seq18533){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18533));
});})(g__12516__auto___18563))
;


var g__12516__auto___18567 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12516__auto___18567){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18568 = arguments.length;
var i__8155__auto___18569 = (0);
while(true){
if((i__8155__auto___18569 < len__8154__auto___18568)){
args__8161__auto__.push((arguments[i__8155__auto___18569]));

var G__18570 = (i__8155__auto___18569 + (1));
i__8155__auto___18569 = G__18570;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18567))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18567){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18567);
});})(g__12516__auto___18567))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12516__auto___18567){
return (function (seq18534){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18534));
});})(g__12516__auto___18567))
;


var g__12516__auto___18571 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12516__auto___18571){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18572 = arguments.length;
var i__8155__auto___18573 = (0);
while(true){
if((i__8155__auto___18573 < len__8154__auto___18572)){
args__8161__auto__.push((arguments[i__8155__auto___18573]));

var G__18574 = (i__8155__auto___18573 + (1));
i__8155__auto___18573 = G__18574;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18571))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18571){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18571);
});})(g__12516__auto___18571))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12516__auto___18571){
return (function (seq18535){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18535));
});})(g__12516__auto___18571))
;


var g__12516__auto___18575 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12516__auto___18575){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18576 = arguments.length;
var i__8155__auto___18577 = (0);
while(true){
if((i__8155__auto___18577 < len__8154__auto___18576)){
args__8161__auto__.push((arguments[i__8155__auto___18577]));

var G__18578 = (i__8155__auto___18577 + (1));
i__8155__auto___18577 = G__18578;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18575))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18575){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18575);
});})(g__12516__auto___18575))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12516__auto___18575){
return (function (seq18536){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18536));
});})(g__12516__auto___18575))
;


var g__12516__auto___18579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12516__auto___18579){
return (function cljs$spec$impl$gen$double(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18580 = arguments.length;
var i__8155__auto___18581 = (0);
while(true){
if((i__8155__auto___18581 < len__8154__auto___18580)){
args__8161__auto__.push((arguments[i__8155__auto___18581]));

var G__18582 = (i__8155__auto___18581 + (1));
i__8155__auto___18581 = G__18582;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18579))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18579){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18579);
});})(g__12516__auto___18579))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12516__auto___18579){
return (function (seq18537){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18537));
});})(g__12516__auto___18579))
;


var g__12516__auto___18583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12516__auto___18583){
return (function cljs$spec$impl$gen$int(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18584 = arguments.length;
var i__8155__auto___18585 = (0);
while(true){
if((i__8155__auto___18585 < len__8154__auto___18584)){
args__8161__auto__.push((arguments[i__8155__auto___18585]));

var G__18586 = (i__8155__auto___18585 + (1));
i__8155__auto___18585 = G__18586;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18583))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18583){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18583);
});})(g__12516__auto___18583))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12516__auto___18583){
return (function (seq18538){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18538));
});})(g__12516__auto___18583))
;


var g__12516__auto___18587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12516__auto___18587){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18588 = arguments.length;
var i__8155__auto___18589 = (0);
while(true){
if((i__8155__auto___18589 < len__8154__auto___18588)){
args__8161__auto__.push((arguments[i__8155__auto___18589]));

var G__18590 = (i__8155__auto___18589 + (1));
i__8155__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18587))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18587){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18587);
});})(g__12516__auto___18587))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12516__auto___18587){
return (function (seq18539){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18539));
});})(g__12516__auto___18587))
;


var g__12516__auto___18591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12516__auto___18591){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18592 = arguments.length;
var i__8155__auto___18593 = (0);
while(true){
if((i__8155__auto___18593 < len__8154__auto___18592)){
args__8161__auto__.push((arguments[i__8155__auto___18593]));

var G__18594 = (i__8155__auto___18593 + (1));
i__8155__auto___18593 = G__18594;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18591))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18591){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18591);
});})(g__12516__auto___18591))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12516__auto___18591){
return (function (seq18540){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18540));
});})(g__12516__auto___18591))
;


var g__12516__auto___18595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12516__auto___18595){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18596 = arguments.length;
var i__8155__auto___18597 = (0);
while(true){
if((i__8155__auto___18597 < len__8154__auto___18596)){
args__8161__auto__.push((arguments[i__8155__auto___18597]));

var G__18598 = (i__8155__auto___18597 + (1));
i__8155__auto___18597 = G__18598;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18595))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18595){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18595);
});})(g__12516__auto___18595))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12516__auto___18595){
return (function (seq18541){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18541));
});})(g__12516__auto___18595))
;


var g__12516__auto___18599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12516__auto___18599){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18600 = arguments.length;
var i__8155__auto___18601 = (0);
while(true){
if((i__8155__auto___18601 < len__8154__auto___18600)){
args__8161__auto__.push((arguments[i__8155__auto___18601]));

var G__18602 = (i__8155__auto___18601 + (1));
i__8155__auto___18601 = G__18602;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18599))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18599){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18599);
});})(g__12516__auto___18599))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12516__auto___18599){
return (function (seq18542){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18542));
});})(g__12516__auto___18599))
;


var g__12516__auto___18603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12516__auto___18603){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18604 = arguments.length;
var i__8155__auto___18605 = (0);
while(true){
if((i__8155__auto___18605 < len__8154__auto___18604)){
args__8161__auto__.push((arguments[i__8155__auto___18605]));

var G__18606 = (i__8155__auto___18605 + (1));
i__8155__auto___18605 = G__18606;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18603))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18603){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18603);
});})(g__12516__auto___18603))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12516__auto___18603){
return (function (seq18543){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18543));
});})(g__12516__auto___18603))
;


var g__12516__auto___18607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12516__auto___18607){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18608 = arguments.length;
var i__8155__auto___18609 = (0);
while(true){
if((i__8155__auto___18609 < len__8154__auto___18608)){
args__8161__auto__.push((arguments[i__8155__auto___18609]));

var G__18610 = (i__8155__auto___18609 + (1));
i__8155__auto___18609 = G__18610;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18607))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18607){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18607);
});})(g__12516__auto___18607))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12516__auto___18607){
return (function (seq18544){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18544));
});})(g__12516__auto___18607))
;


var g__12516__auto___18611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12516__auto___18611){
return (function cljs$spec$impl$gen$string(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18612 = arguments.length;
var i__8155__auto___18613 = (0);
while(true){
if((i__8155__auto___18613 < len__8154__auto___18612)){
args__8161__auto__.push((arguments[i__8155__auto___18613]));

var G__18614 = (i__8155__auto___18613 + (1));
i__8155__auto___18613 = G__18614;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18611))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18611){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18611);
});})(g__12516__auto___18611))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12516__auto___18611){
return (function (seq18545){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18545));
});})(g__12516__auto___18611))
;


var g__12516__auto___18615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12516__auto___18615){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18616 = arguments.length;
var i__8155__auto___18617 = (0);
while(true){
if((i__8155__auto___18617 < len__8154__auto___18616)){
args__8161__auto__.push((arguments[i__8155__auto___18617]));

var G__18618 = (i__8155__auto___18617 + (1));
i__8155__auto___18617 = G__18618;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18615))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18615){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18615);
});})(g__12516__auto___18615))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12516__auto___18615){
return (function (seq18546){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18546));
});})(g__12516__auto___18615))
;


var g__12516__auto___18619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12516__auto___18619){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18620 = arguments.length;
var i__8155__auto___18621 = (0);
while(true){
if((i__8155__auto___18621 < len__8154__auto___18620)){
args__8161__auto__.push((arguments[i__8155__auto___18621]));

var G__18622 = (i__8155__auto___18621 + (1));
i__8155__auto___18621 = G__18622;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18619))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18619){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18619);
});})(g__12516__auto___18619))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12516__auto___18619){
return (function (seq18547){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18547));
});})(g__12516__auto___18619))
;


var g__12516__auto___18623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12516__auto___18623){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18624 = arguments.length;
var i__8155__auto___18625 = (0);
while(true){
if((i__8155__auto___18625 < len__8154__auto___18624)){
args__8161__auto__.push((arguments[i__8155__auto___18625]));

var G__18626 = (i__8155__auto___18625 + (1));
i__8155__auto___18625 = G__18626;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18623))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18623){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18623);
});})(g__12516__auto___18623))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12516__auto___18623){
return (function (seq18548){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18548));
});})(g__12516__auto___18623))
;


var g__12516__auto___18627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12516__auto___18627){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18628 = arguments.length;
var i__8155__auto___18629 = (0);
while(true){
if((i__8155__auto___18629 < len__8154__auto___18628)){
args__8161__auto__.push((arguments[i__8155__auto___18629]));

var G__18630 = (i__8155__auto___18629 + (1));
i__8155__auto___18629 = G__18630;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18627))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18627){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18627);
});})(g__12516__auto___18627))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12516__auto___18627){
return (function (seq18549){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18549));
});})(g__12516__auto___18627))
;


var g__12516__auto___18631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12516__auto___18631){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18632 = arguments.length;
var i__8155__auto___18633 = (0);
while(true){
if((i__8155__auto___18633 < len__8154__auto___18632)){
args__8161__auto__.push((arguments[i__8155__auto___18633]));

var G__18634 = (i__8155__auto___18633 + (1));
i__8155__auto___18633 = G__18634;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___18631))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___18631){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___18631);
});})(g__12516__auto___18631))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12516__auto___18631){
return (function (seq18550){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18550));
});})(g__12516__auto___18631))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8161__auto__ = [];
var len__8154__auto___18637 = arguments.length;
var i__8155__auto___18638 = (0);
while(true){
if((i__8155__auto___18638 < len__8154__auto___18637)){
args__8161__auto__.push((arguments[i__8155__auto___18638]));

var G__18639 = (i__8155__auto___18638 + (1));
i__8155__auto___18638 = G__18639;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__18635_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__18635_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq18636){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18636));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__18640_SHARP_){
return (new Date(p1__18640_SHARP_));
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

//# sourceMappingURL=gen.js.map