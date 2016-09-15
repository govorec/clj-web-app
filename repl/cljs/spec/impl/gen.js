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
var len__8154__auto___12532 = arguments.length;
var i__8155__auto___12533 = (0);
while(true){
if((i__8155__auto___12533 < len__8154__auto___12532)){
args__8161__auto__.push((arguments[i__8155__auto___12533]));

var G__12534 = (i__8155__auto___12533 + (1));
i__8155__auto___12533 = G__12534;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12531){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12531));
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
var len__8154__auto___12536 = arguments.length;
var i__8155__auto___12537 = (0);
while(true){
if((i__8155__auto___12537 < len__8154__auto___12536)){
args__8161__auto__.push((arguments[i__8155__auto___12537]));

var G__12538 = (i__8155__auto___12537 + (1));
i__8155__auto___12537 = G__12538;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12535){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12535));
});

var g_QMARK__12539 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12540 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12539){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12539))
,null));
var mkg_12541 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12539,g_12540){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12539,g_12540))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12539,g_12540,mkg_12541){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12539).call(null,x);
});})(g_QMARK__12539,g_12540,mkg_12541))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12539,g_12540,mkg_12541){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12541).call(null,gfn);
});})(g_QMARK__12539,g_12540,mkg_12541))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12539,g_12540,mkg_12541){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12540).call(null,generator);
});})(g_QMARK__12539,g_12540,mkg_12541))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12503__auto___12560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12503__auto___12560){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12561 = arguments.length;
var i__8155__auto___12562 = (0);
while(true){
if((i__8155__auto___12562 < len__8154__auto___12561)){
args__8161__auto__.push((arguments[i__8155__auto___12562]));

var G__12563 = (i__8155__auto___12562 + (1));
i__8155__auto___12562 = G__12563;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12560))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12560),args);
});})(g__12503__auto___12560))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12503__auto___12560){
return (function (seq12542){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12542));
});})(g__12503__auto___12560))
;


var g__12503__auto___12564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12503__auto___12564){
return (function cljs$spec$impl$gen$list(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12565 = arguments.length;
var i__8155__auto___12566 = (0);
while(true){
if((i__8155__auto___12566 < len__8154__auto___12565)){
args__8161__auto__.push((arguments[i__8155__auto___12566]));

var G__12567 = (i__8155__auto___12566 + (1));
i__8155__auto___12566 = G__12567;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12564))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12564),args);
});})(g__12503__auto___12564))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12503__auto___12564){
return (function (seq12543){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12543));
});})(g__12503__auto___12564))
;


var g__12503__auto___12568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12503__auto___12568){
return (function cljs$spec$impl$gen$map(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12569 = arguments.length;
var i__8155__auto___12570 = (0);
while(true){
if((i__8155__auto___12570 < len__8154__auto___12569)){
args__8161__auto__.push((arguments[i__8155__auto___12570]));

var G__12571 = (i__8155__auto___12570 + (1));
i__8155__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12568))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12568),args);
});})(g__12503__auto___12568))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12503__auto___12568){
return (function (seq12544){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12544));
});})(g__12503__auto___12568))
;


var g__12503__auto___12572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12503__auto___12572){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12573 = arguments.length;
var i__8155__auto___12574 = (0);
while(true){
if((i__8155__auto___12574 < len__8154__auto___12573)){
args__8161__auto__.push((arguments[i__8155__auto___12574]));

var G__12575 = (i__8155__auto___12574 + (1));
i__8155__auto___12574 = G__12575;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12572))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12572){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12572),args);
});})(g__12503__auto___12572))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12503__auto___12572){
return (function (seq12545){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12545));
});})(g__12503__auto___12572))
;


var g__12503__auto___12576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12503__auto___12576){
return (function cljs$spec$impl$gen$set(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12577 = arguments.length;
var i__8155__auto___12578 = (0);
while(true){
if((i__8155__auto___12578 < len__8154__auto___12577)){
args__8161__auto__.push((arguments[i__8155__auto___12578]));

var G__12579 = (i__8155__auto___12578 + (1));
i__8155__auto___12578 = G__12579;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12576))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12576){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12576),args);
});})(g__12503__auto___12576))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12503__auto___12576){
return (function (seq12546){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12546));
});})(g__12503__auto___12576))
;


var g__12503__auto___12580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12503__auto___12580){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12581 = arguments.length;
var i__8155__auto___12582 = (0);
while(true){
if((i__8155__auto___12582 < len__8154__auto___12581)){
args__8161__auto__.push((arguments[i__8155__auto___12582]));

var G__12583 = (i__8155__auto___12582 + (1));
i__8155__auto___12582 = G__12583;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12580))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12580){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12580),args);
});})(g__12503__auto___12580))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12503__auto___12580){
return (function (seq12547){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12547));
});})(g__12503__auto___12580))
;


var g__12503__auto___12584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12503__auto___12584){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12585 = arguments.length;
var i__8155__auto___12586 = (0);
while(true){
if((i__8155__auto___12586 < len__8154__auto___12585)){
args__8161__auto__.push((arguments[i__8155__auto___12586]));

var G__12587 = (i__8155__auto___12586 + (1));
i__8155__auto___12586 = G__12587;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12584))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12584){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12584),args);
});})(g__12503__auto___12584))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12503__auto___12584){
return (function (seq12548){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12548));
});})(g__12503__auto___12584))
;


var g__12503__auto___12588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12503__auto___12588){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12589 = arguments.length;
var i__8155__auto___12590 = (0);
while(true){
if((i__8155__auto___12590 < len__8154__auto___12589)){
args__8161__auto__.push((arguments[i__8155__auto___12590]));

var G__12591 = (i__8155__auto___12590 + (1));
i__8155__auto___12590 = G__12591;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12588))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12588){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12588),args);
});})(g__12503__auto___12588))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12503__auto___12588){
return (function (seq12549){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12549));
});})(g__12503__auto___12588))
;


var g__12503__auto___12592 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12503__auto___12592){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12593 = arguments.length;
var i__8155__auto___12594 = (0);
while(true){
if((i__8155__auto___12594 < len__8154__auto___12593)){
args__8161__auto__.push((arguments[i__8155__auto___12594]));

var G__12595 = (i__8155__auto___12594 + (1));
i__8155__auto___12594 = G__12595;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12592))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12592){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12592),args);
});})(g__12503__auto___12592))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12503__auto___12592){
return (function (seq12550){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12550));
});})(g__12503__auto___12592))
;


var g__12503__auto___12596 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12503__auto___12596){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12597 = arguments.length;
var i__8155__auto___12598 = (0);
while(true){
if((i__8155__auto___12598 < len__8154__auto___12597)){
args__8161__auto__.push((arguments[i__8155__auto___12598]));

var G__12599 = (i__8155__auto___12598 + (1));
i__8155__auto___12598 = G__12599;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12596))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12596){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12596),args);
});})(g__12503__auto___12596))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12503__auto___12596){
return (function (seq12551){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12551));
});})(g__12503__auto___12596))
;


var g__12503__auto___12600 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12503__auto___12600){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12601 = arguments.length;
var i__8155__auto___12602 = (0);
while(true){
if((i__8155__auto___12602 < len__8154__auto___12601)){
args__8161__auto__.push((arguments[i__8155__auto___12602]));

var G__12603 = (i__8155__auto___12602 + (1));
i__8155__auto___12602 = G__12603;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12600))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12600){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12600),args);
});})(g__12503__auto___12600))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12503__auto___12600){
return (function (seq12552){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12552));
});})(g__12503__auto___12600))
;


var g__12503__auto___12604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12503__auto___12604){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12605 = arguments.length;
var i__8155__auto___12606 = (0);
while(true){
if((i__8155__auto___12606 < len__8154__auto___12605)){
args__8161__auto__.push((arguments[i__8155__auto___12606]));

var G__12607 = (i__8155__auto___12606 + (1));
i__8155__auto___12606 = G__12607;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12604))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12604){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12604),args);
});})(g__12503__auto___12604))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12503__auto___12604){
return (function (seq12553){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12553));
});})(g__12503__auto___12604))
;


var g__12503__auto___12608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12503__auto___12608){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12609 = arguments.length;
var i__8155__auto___12610 = (0);
while(true){
if((i__8155__auto___12610 < len__8154__auto___12609)){
args__8161__auto__.push((arguments[i__8155__auto___12610]));

var G__12611 = (i__8155__auto___12610 + (1));
i__8155__auto___12610 = G__12611;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12608))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12608){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12608),args);
});})(g__12503__auto___12608))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12503__auto___12608){
return (function (seq12554){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12554));
});})(g__12503__auto___12608))
;


var g__12503__auto___12612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12503__auto___12612){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12613 = arguments.length;
var i__8155__auto___12614 = (0);
while(true){
if((i__8155__auto___12614 < len__8154__auto___12613)){
args__8161__auto__.push((arguments[i__8155__auto___12614]));

var G__12615 = (i__8155__auto___12614 + (1));
i__8155__auto___12614 = G__12615;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12612))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12612){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12612),args);
});})(g__12503__auto___12612))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12503__auto___12612){
return (function (seq12555){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12555));
});})(g__12503__auto___12612))
;


var g__12503__auto___12616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12503__auto___12616){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12617 = arguments.length;
var i__8155__auto___12618 = (0);
while(true){
if((i__8155__auto___12618 < len__8154__auto___12617)){
args__8161__auto__.push((arguments[i__8155__auto___12618]));

var G__12619 = (i__8155__auto___12618 + (1));
i__8155__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12616))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12616){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12616),args);
});})(g__12503__auto___12616))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12503__auto___12616){
return (function (seq12556){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12556));
});})(g__12503__auto___12616))
;


var g__12503__auto___12620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12503__auto___12620){
return (function cljs$spec$impl$gen$return(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12621 = arguments.length;
var i__8155__auto___12622 = (0);
while(true){
if((i__8155__auto___12622 < len__8154__auto___12621)){
args__8161__auto__.push((arguments[i__8155__auto___12622]));

var G__12623 = (i__8155__auto___12622 + (1));
i__8155__auto___12622 = G__12623;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12620))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12620){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12620),args);
});})(g__12503__auto___12620))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12503__auto___12620){
return (function (seq12557){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12557));
});})(g__12503__auto___12620))
;


var g__12503__auto___12624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12503__auto___12624){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12625 = arguments.length;
var i__8155__auto___12626 = (0);
while(true){
if((i__8155__auto___12626 < len__8154__auto___12625)){
args__8161__auto__.push((arguments[i__8155__auto___12626]));

var G__12627 = (i__8155__auto___12626 + (1));
i__8155__auto___12626 = G__12627;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12624))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12624){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12624),args);
});})(g__12503__auto___12624))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12503__auto___12624){
return (function (seq12558){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12558));
});})(g__12503__auto___12624))
;


var g__12503__auto___12628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12503__auto___12628){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12629 = arguments.length;
var i__8155__auto___12630 = (0);
while(true){
if((i__8155__auto___12630 < len__8154__auto___12629)){
args__8161__auto__.push((arguments[i__8155__auto___12630]));

var G__12631 = (i__8155__auto___12630 + (1));
i__8155__auto___12630 = G__12631;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12503__auto___12628))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12503__auto___12628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12503__auto___12628),args);
});})(g__12503__auto___12628))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12503__auto___12628){
return (function (seq12559){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12559));
});})(g__12503__auto___12628))
;

var g__12516__auto___12653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12516__auto___12653){
return (function cljs$spec$impl$gen$any(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12654 = arguments.length;
var i__8155__auto___12655 = (0);
while(true){
if((i__8155__auto___12655 < len__8154__auto___12654)){
args__8161__auto__.push((arguments[i__8155__auto___12655]));

var G__12656 = (i__8155__auto___12655 + (1));
i__8155__auto___12655 = G__12656;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12653))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12653){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12653);
});})(g__12516__auto___12653))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12516__auto___12653){
return (function (seq12632){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12632));
});})(g__12516__auto___12653))
;


var g__12516__auto___12657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12516__auto___12657){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12658 = arguments.length;
var i__8155__auto___12659 = (0);
while(true){
if((i__8155__auto___12659 < len__8154__auto___12658)){
args__8161__auto__.push((arguments[i__8155__auto___12659]));

var G__12660 = (i__8155__auto___12659 + (1));
i__8155__auto___12659 = G__12660;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12657))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12657){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12657);
});})(g__12516__auto___12657))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12516__auto___12657){
return (function (seq12633){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12633));
});})(g__12516__auto___12657))
;


var g__12516__auto___12661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12516__auto___12661){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12662 = arguments.length;
var i__8155__auto___12663 = (0);
while(true){
if((i__8155__auto___12663 < len__8154__auto___12662)){
args__8161__auto__.push((arguments[i__8155__auto___12663]));

var G__12664 = (i__8155__auto___12663 + (1));
i__8155__auto___12663 = G__12664;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12661))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12661){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12661);
});})(g__12516__auto___12661))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12516__auto___12661){
return (function (seq12634){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12634));
});})(g__12516__auto___12661))
;


var g__12516__auto___12665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12516__auto___12665){
return (function cljs$spec$impl$gen$char(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12666 = arguments.length;
var i__8155__auto___12667 = (0);
while(true){
if((i__8155__auto___12667 < len__8154__auto___12666)){
args__8161__auto__.push((arguments[i__8155__auto___12667]));

var G__12668 = (i__8155__auto___12667 + (1));
i__8155__auto___12667 = G__12668;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12665))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12665){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12665);
});})(g__12516__auto___12665))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12516__auto___12665){
return (function (seq12635){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12635));
});})(g__12516__auto___12665))
;


var g__12516__auto___12669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12516__auto___12669){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12670 = arguments.length;
var i__8155__auto___12671 = (0);
while(true){
if((i__8155__auto___12671 < len__8154__auto___12670)){
args__8161__auto__.push((arguments[i__8155__auto___12671]));

var G__12672 = (i__8155__auto___12671 + (1));
i__8155__auto___12671 = G__12672;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12669))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12669){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12669);
});})(g__12516__auto___12669))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12516__auto___12669){
return (function (seq12636){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12636));
});})(g__12516__auto___12669))
;


var g__12516__auto___12673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12516__auto___12673){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12674 = arguments.length;
var i__8155__auto___12675 = (0);
while(true){
if((i__8155__auto___12675 < len__8154__auto___12674)){
args__8161__auto__.push((arguments[i__8155__auto___12675]));

var G__12676 = (i__8155__auto___12675 + (1));
i__8155__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12673))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12673){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12673);
});})(g__12516__auto___12673))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12516__auto___12673){
return (function (seq12637){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12637));
});})(g__12516__auto___12673))
;


var g__12516__auto___12677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12516__auto___12677){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12678 = arguments.length;
var i__8155__auto___12679 = (0);
while(true){
if((i__8155__auto___12679 < len__8154__auto___12678)){
args__8161__auto__.push((arguments[i__8155__auto___12679]));

var G__12680 = (i__8155__auto___12679 + (1));
i__8155__auto___12679 = G__12680;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12677))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12677){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12677);
});})(g__12516__auto___12677))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12516__auto___12677){
return (function (seq12638){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12638));
});})(g__12516__auto___12677))
;


var g__12516__auto___12681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12516__auto___12681){
return (function cljs$spec$impl$gen$double(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12682 = arguments.length;
var i__8155__auto___12683 = (0);
while(true){
if((i__8155__auto___12683 < len__8154__auto___12682)){
args__8161__auto__.push((arguments[i__8155__auto___12683]));

var G__12684 = (i__8155__auto___12683 + (1));
i__8155__auto___12683 = G__12684;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12681))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12681){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12681);
});})(g__12516__auto___12681))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12516__auto___12681){
return (function (seq12639){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12639));
});})(g__12516__auto___12681))
;


var g__12516__auto___12685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12516__auto___12685){
return (function cljs$spec$impl$gen$int(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12686 = arguments.length;
var i__8155__auto___12687 = (0);
while(true){
if((i__8155__auto___12687 < len__8154__auto___12686)){
args__8161__auto__.push((arguments[i__8155__auto___12687]));

var G__12688 = (i__8155__auto___12687 + (1));
i__8155__auto___12687 = G__12688;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12685))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12685){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12685);
});})(g__12516__auto___12685))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12516__auto___12685){
return (function (seq12640){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12640));
});})(g__12516__auto___12685))
;


var g__12516__auto___12689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12516__auto___12689){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12690 = arguments.length;
var i__8155__auto___12691 = (0);
while(true){
if((i__8155__auto___12691 < len__8154__auto___12690)){
args__8161__auto__.push((arguments[i__8155__auto___12691]));

var G__12692 = (i__8155__auto___12691 + (1));
i__8155__auto___12691 = G__12692;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12689))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12689){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12689);
});})(g__12516__auto___12689))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12516__auto___12689){
return (function (seq12641){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12641));
});})(g__12516__auto___12689))
;


var g__12516__auto___12693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12516__auto___12693){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12694 = arguments.length;
var i__8155__auto___12695 = (0);
while(true){
if((i__8155__auto___12695 < len__8154__auto___12694)){
args__8161__auto__.push((arguments[i__8155__auto___12695]));

var G__12696 = (i__8155__auto___12695 + (1));
i__8155__auto___12695 = G__12696;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12693))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12693){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12693);
});})(g__12516__auto___12693))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12516__auto___12693){
return (function (seq12642){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12642));
});})(g__12516__auto___12693))
;


var g__12516__auto___12697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12516__auto___12697){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12698 = arguments.length;
var i__8155__auto___12699 = (0);
while(true){
if((i__8155__auto___12699 < len__8154__auto___12698)){
args__8161__auto__.push((arguments[i__8155__auto___12699]));

var G__12700 = (i__8155__auto___12699 + (1));
i__8155__auto___12699 = G__12700;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12697))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12697){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12697);
});})(g__12516__auto___12697))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12516__auto___12697){
return (function (seq12643){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12643));
});})(g__12516__auto___12697))
;


var g__12516__auto___12701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12516__auto___12701){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12702 = arguments.length;
var i__8155__auto___12703 = (0);
while(true){
if((i__8155__auto___12703 < len__8154__auto___12702)){
args__8161__auto__.push((arguments[i__8155__auto___12703]));

var G__12704 = (i__8155__auto___12703 + (1));
i__8155__auto___12703 = G__12704;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12701))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12701){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12701);
});})(g__12516__auto___12701))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12516__auto___12701){
return (function (seq12644){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12644));
});})(g__12516__auto___12701))
;


var g__12516__auto___12705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12516__auto___12705){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12706 = arguments.length;
var i__8155__auto___12707 = (0);
while(true){
if((i__8155__auto___12707 < len__8154__auto___12706)){
args__8161__auto__.push((arguments[i__8155__auto___12707]));

var G__12708 = (i__8155__auto___12707 + (1));
i__8155__auto___12707 = G__12708;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12705))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12705){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12705);
});})(g__12516__auto___12705))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12516__auto___12705){
return (function (seq12645){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12645));
});})(g__12516__auto___12705))
;


var g__12516__auto___12709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12516__auto___12709){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12710 = arguments.length;
var i__8155__auto___12711 = (0);
while(true){
if((i__8155__auto___12711 < len__8154__auto___12710)){
args__8161__auto__.push((arguments[i__8155__auto___12711]));

var G__12712 = (i__8155__auto___12711 + (1));
i__8155__auto___12711 = G__12712;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12709))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12709){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12709);
});})(g__12516__auto___12709))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12516__auto___12709){
return (function (seq12646){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12646));
});})(g__12516__auto___12709))
;


var g__12516__auto___12713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12516__auto___12713){
return (function cljs$spec$impl$gen$string(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12714 = arguments.length;
var i__8155__auto___12715 = (0);
while(true){
if((i__8155__auto___12715 < len__8154__auto___12714)){
args__8161__auto__.push((arguments[i__8155__auto___12715]));

var G__12716 = (i__8155__auto___12715 + (1));
i__8155__auto___12715 = G__12716;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12713))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12713){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12713);
});})(g__12516__auto___12713))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12516__auto___12713){
return (function (seq12647){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12647));
});})(g__12516__auto___12713))
;


var g__12516__auto___12717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12516__auto___12717){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12718 = arguments.length;
var i__8155__auto___12719 = (0);
while(true){
if((i__8155__auto___12719 < len__8154__auto___12718)){
args__8161__auto__.push((arguments[i__8155__auto___12719]));

var G__12720 = (i__8155__auto___12719 + (1));
i__8155__auto___12719 = G__12720;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12717))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12717){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12717);
});})(g__12516__auto___12717))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12516__auto___12717){
return (function (seq12648){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12648));
});})(g__12516__auto___12717))
;


var g__12516__auto___12721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12516__auto___12721){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12722 = arguments.length;
var i__8155__auto___12723 = (0);
while(true){
if((i__8155__auto___12723 < len__8154__auto___12722)){
args__8161__auto__.push((arguments[i__8155__auto___12723]));

var G__12724 = (i__8155__auto___12723 + (1));
i__8155__auto___12723 = G__12724;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12721))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12721){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12721);
});})(g__12516__auto___12721))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12516__auto___12721){
return (function (seq12649){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12649));
});})(g__12516__auto___12721))
;


var g__12516__auto___12725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12516__auto___12725){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12726 = arguments.length;
var i__8155__auto___12727 = (0);
while(true){
if((i__8155__auto___12727 < len__8154__auto___12726)){
args__8161__auto__.push((arguments[i__8155__auto___12727]));

var G__12728 = (i__8155__auto___12727 + (1));
i__8155__auto___12727 = G__12728;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12725))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12725){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12725);
});})(g__12516__auto___12725))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12516__auto___12725){
return (function (seq12650){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12650));
});})(g__12516__auto___12725))
;


var g__12516__auto___12729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12516__auto___12729){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12730 = arguments.length;
var i__8155__auto___12731 = (0);
while(true){
if((i__8155__auto___12731 < len__8154__auto___12730)){
args__8161__auto__.push((arguments[i__8155__auto___12731]));

var G__12732 = (i__8155__auto___12731 + (1));
i__8155__auto___12731 = G__12732;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12729))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12729){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12729);
});})(g__12516__auto___12729))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12516__auto___12729){
return (function (seq12651){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12651));
});})(g__12516__auto___12729))
;


var g__12516__auto___12733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12516__auto___12733){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12734 = arguments.length;
var i__8155__auto___12735 = (0);
while(true){
if((i__8155__auto___12735 < len__8154__auto___12734)){
args__8161__auto__.push((arguments[i__8155__auto___12735]));

var G__12736 = (i__8155__auto___12735 + (1));
i__8155__auto___12735 = G__12736;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});})(g__12516__auto___12733))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12516__auto___12733){
return (function (args){
return cljs.core.deref.call(null,g__12516__auto___12733);
});})(g__12516__auto___12733))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12516__auto___12733){
return (function (seq12652){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12652));
});})(g__12516__auto___12733))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8161__auto__ = [];
var len__8154__auto___12739 = arguments.length;
var i__8155__auto___12740 = (0);
while(true){
if((i__8155__auto___12740 < len__8154__auto___12739)){
args__8161__auto__.push((arguments[i__8155__auto___12740]));

var G__12741 = (i__8155__auto___12740 + (1));
i__8155__auto___12740 = G__12741;
continue;
} else {
}
break;
}

var argseq__8162__auto__ = ((((0) < args__8161__auto__.length))?(new cljs.core.IndexedSeq(args__8161__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8162__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12737_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12737_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12738){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12738));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12742_SHARP_){
return (new Date(p1__12742_SHARP_));
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
