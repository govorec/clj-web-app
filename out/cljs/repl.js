// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17493){
var map__17518 = p__17493;
var map__17518__$1 = ((((!((map__17518 == null)))?((((map__17518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17518):map__17518);
var m = map__17518__$1;
var n = cljs.core.get.call(null,map__17518__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17520_17542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17521_17543 = null;
var count__17522_17544 = (0);
var i__17523_17545 = (0);
while(true){
if((i__17523_17545 < count__17522_17544)){
var f_17546 = cljs.core._nth.call(null,chunk__17521_17543,i__17523_17545);
cljs.core.println.call(null,"  ",f_17546);

var G__17547 = seq__17520_17542;
var G__17548 = chunk__17521_17543;
var G__17549 = count__17522_17544;
var G__17550 = (i__17523_17545 + (1));
seq__17520_17542 = G__17547;
chunk__17521_17543 = G__17548;
count__17522_17544 = G__17549;
i__17523_17545 = G__17550;
continue;
} else {
var temp__4657__auto___17551 = cljs.core.seq.call(null,seq__17520_17542);
if(temp__4657__auto___17551){
var seq__17520_17552__$1 = temp__4657__auto___17551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17520_17552__$1)){
var c__7890__auto___17553 = cljs.core.chunk_first.call(null,seq__17520_17552__$1);
var G__17554 = cljs.core.chunk_rest.call(null,seq__17520_17552__$1);
var G__17555 = c__7890__auto___17553;
var G__17556 = cljs.core.count.call(null,c__7890__auto___17553);
var G__17557 = (0);
seq__17520_17542 = G__17554;
chunk__17521_17543 = G__17555;
count__17522_17544 = G__17556;
i__17523_17545 = G__17557;
continue;
} else {
var f_17558 = cljs.core.first.call(null,seq__17520_17552__$1);
cljs.core.println.call(null,"  ",f_17558);

var G__17559 = cljs.core.next.call(null,seq__17520_17552__$1);
var G__17560 = null;
var G__17561 = (0);
var G__17562 = (0);
seq__17520_17542 = G__17559;
chunk__17521_17543 = G__17560;
count__17522_17544 = G__17561;
i__17523_17545 = G__17562;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17563 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7079__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7079__auto__)){
return or__7079__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17563);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17563)))?cljs.core.second.call(null,arglists_17563):arglists_17563));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17524_17564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17525_17565 = null;
var count__17526_17566 = (0);
var i__17527_17567 = (0);
while(true){
if((i__17527_17567 < count__17526_17566)){
var vec__17528_17568 = cljs.core._nth.call(null,chunk__17525_17565,i__17527_17567);
var name_17569 = cljs.core.nth.call(null,vec__17528_17568,(0),null);
var map__17531_17570 = cljs.core.nth.call(null,vec__17528_17568,(1),null);
var map__17531_17571__$1 = ((((!((map__17531_17570 == null)))?((((map__17531_17570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17531_17570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17531_17570):map__17531_17570);
var doc_17572 = cljs.core.get.call(null,map__17531_17571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17573 = cljs.core.get.call(null,map__17531_17571__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17569);

cljs.core.println.call(null," ",arglists_17573);

if(cljs.core.truth_(doc_17572)){
cljs.core.println.call(null," ",doc_17572);
} else {
}

var G__17574 = seq__17524_17564;
var G__17575 = chunk__17525_17565;
var G__17576 = count__17526_17566;
var G__17577 = (i__17527_17567 + (1));
seq__17524_17564 = G__17574;
chunk__17525_17565 = G__17575;
count__17526_17566 = G__17576;
i__17527_17567 = G__17577;
continue;
} else {
var temp__4657__auto___17578 = cljs.core.seq.call(null,seq__17524_17564);
if(temp__4657__auto___17578){
var seq__17524_17579__$1 = temp__4657__auto___17578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17524_17579__$1)){
var c__7890__auto___17580 = cljs.core.chunk_first.call(null,seq__17524_17579__$1);
var G__17581 = cljs.core.chunk_rest.call(null,seq__17524_17579__$1);
var G__17582 = c__7890__auto___17580;
var G__17583 = cljs.core.count.call(null,c__7890__auto___17580);
var G__17584 = (0);
seq__17524_17564 = G__17581;
chunk__17525_17565 = G__17582;
count__17526_17566 = G__17583;
i__17527_17567 = G__17584;
continue;
} else {
var vec__17533_17585 = cljs.core.first.call(null,seq__17524_17579__$1);
var name_17586 = cljs.core.nth.call(null,vec__17533_17585,(0),null);
var map__17536_17587 = cljs.core.nth.call(null,vec__17533_17585,(1),null);
var map__17536_17588__$1 = ((((!((map__17536_17587 == null)))?((((map__17536_17587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17536_17587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17536_17587):map__17536_17587);
var doc_17589 = cljs.core.get.call(null,map__17536_17588__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17590 = cljs.core.get.call(null,map__17536_17588__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17586);

cljs.core.println.call(null," ",arglists_17590);

if(cljs.core.truth_(doc_17589)){
cljs.core.println.call(null," ",doc_17589);
} else {
}

var G__17591 = cljs.core.next.call(null,seq__17524_17579__$1);
var G__17592 = null;
var G__17593 = (0);
var G__17594 = (0);
seq__17524_17564 = G__17591;
chunk__17525_17565 = G__17592;
count__17526_17566 = G__17593;
i__17527_17567 = G__17594;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__17538 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17539 = null;
var count__17540 = (0);
var i__17541 = (0);
while(true){
if((i__17541 < count__17540)){
var role = cljs.core._nth.call(null,chunk__17539,i__17541);
var temp__4657__auto___17595__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17595__$1)){
var spec_17596 = temp__4657__auto___17595__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_17596));
} else {
}

var G__17597 = seq__17538;
var G__17598 = chunk__17539;
var G__17599 = count__17540;
var G__17600 = (i__17541 + (1));
seq__17538 = G__17597;
chunk__17539 = G__17598;
count__17540 = G__17599;
i__17541 = G__17600;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__17538);
if(temp__4657__auto____$1){
var seq__17538__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17538__$1)){
var c__7890__auto__ = cljs.core.chunk_first.call(null,seq__17538__$1);
var G__17601 = cljs.core.chunk_rest.call(null,seq__17538__$1);
var G__17602 = c__7890__auto__;
var G__17603 = cljs.core.count.call(null,c__7890__auto__);
var G__17604 = (0);
seq__17538 = G__17601;
chunk__17539 = G__17602;
count__17540 = G__17603;
i__17541 = G__17604;
continue;
} else {
var role = cljs.core.first.call(null,seq__17538__$1);
var temp__4657__auto___17605__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17605__$2)){
var spec_17606 = temp__4657__auto___17605__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_17606));
} else {
}

var G__17607 = cljs.core.next.call(null,seq__17538__$1);
var G__17608 = null;
var G__17609 = (0);
var G__17610 = (0);
seq__17538 = G__17607;
chunk__17539 = G__17608;
count__17540 = G__17609;
i__17541 = G__17610;
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

//# sourceMappingURL=repl.js.map