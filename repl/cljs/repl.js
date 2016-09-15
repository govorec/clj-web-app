// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13796){
var map__13821 = p__13796;
var map__13821__$1 = ((((!((map__13821 == null)))?((((map__13821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13821):map__13821);
var m = map__13821__$1;
var n = cljs.core.get.call(null,map__13821__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13823_13845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13824_13846 = null;
var count__13825_13847 = (0);
var i__13826_13848 = (0);
while(true){
if((i__13826_13848 < count__13825_13847)){
var f_13849 = cljs.core._nth.call(null,chunk__13824_13846,i__13826_13848);
cljs.core.println.call(null,"  ",f_13849);

var G__13850 = seq__13823_13845;
var G__13851 = chunk__13824_13846;
var G__13852 = count__13825_13847;
var G__13853 = (i__13826_13848 + (1));
seq__13823_13845 = G__13850;
chunk__13824_13846 = G__13851;
count__13825_13847 = G__13852;
i__13826_13848 = G__13853;
continue;
} else {
var temp__4657__auto___13854 = cljs.core.seq.call(null,seq__13823_13845);
if(temp__4657__auto___13854){
var seq__13823_13855__$1 = temp__4657__auto___13854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13823_13855__$1)){
var c__7890__auto___13856 = cljs.core.chunk_first.call(null,seq__13823_13855__$1);
var G__13857 = cljs.core.chunk_rest.call(null,seq__13823_13855__$1);
var G__13858 = c__7890__auto___13856;
var G__13859 = cljs.core.count.call(null,c__7890__auto___13856);
var G__13860 = (0);
seq__13823_13845 = G__13857;
chunk__13824_13846 = G__13858;
count__13825_13847 = G__13859;
i__13826_13848 = G__13860;
continue;
} else {
var f_13861 = cljs.core.first.call(null,seq__13823_13855__$1);
cljs.core.println.call(null,"  ",f_13861);

var G__13862 = cljs.core.next.call(null,seq__13823_13855__$1);
var G__13863 = null;
var G__13864 = (0);
var G__13865 = (0);
seq__13823_13845 = G__13862;
chunk__13824_13846 = G__13863;
count__13825_13847 = G__13864;
i__13826_13848 = G__13865;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13866 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7079__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7079__auto__)){
return or__7079__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13866);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13866)))?cljs.core.second.call(null,arglists_13866):arglists_13866));
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
var seq__13827_13867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13828_13868 = null;
var count__13829_13869 = (0);
var i__13830_13870 = (0);
while(true){
if((i__13830_13870 < count__13829_13869)){
var vec__13831_13871 = cljs.core._nth.call(null,chunk__13828_13868,i__13830_13870);
var name_13872 = cljs.core.nth.call(null,vec__13831_13871,(0),null);
var map__13834_13873 = cljs.core.nth.call(null,vec__13831_13871,(1),null);
var map__13834_13874__$1 = ((((!((map__13834_13873 == null)))?((((map__13834_13873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13834_13873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13834_13873):map__13834_13873);
var doc_13875 = cljs.core.get.call(null,map__13834_13874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13876 = cljs.core.get.call(null,map__13834_13874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13872);

cljs.core.println.call(null," ",arglists_13876);

if(cljs.core.truth_(doc_13875)){
cljs.core.println.call(null," ",doc_13875);
} else {
}

var G__13877 = seq__13827_13867;
var G__13878 = chunk__13828_13868;
var G__13879 = count__13829_13869;
var G__13880 = (i__13830_13870 + (1));
seq__13827_13867 = G__13877;
chunk__13828_13868 = G__13878;
count__13829_13869 = G__13879;
i__13830_13870 = G__13880;
continue;
} else {
var temp__4657__auto___13881 = cljs.core.seq.call(null,seq__13827_13867);
if(temp__4657__auto___13881){
var seq__13827_13882__$1 = temp__4657__auto___13881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13827_13882__$1)){
var c__7890__auto___13883 = cljs.core.chunk_first.call(null,seq__13827_13882__$1);
var G__13884 = cljs.core.chunk_rest.call(null,seq__13827_13882__$1);
var G__13885 = c__7890__auto___13883;
var G__13886 = cljs.core.count.call(null,c__7890__auto___13883);
var G__13887 = (0);
seq__13827_13867 = G__13884;
chunk__13828_13868 = G__13885;
count__13829_13869 = G__13886;
i__13830_13870 = G__13887;
continue;
} else {
var vec__13836_13888 = cljs.core.first.call(null,seq__13827_13882__$1);
var name_13889 = cljs.core.nth.call(null,vec__13836_13888,(0),null);
var map__13839_13890 = cljs.core.nth.call(null,vec__13836_13888,(1),null);
var map__13839_13891__$1 = ((((!((map__13839_13890 == null)))?((((map__13839_13890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13839_13890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13839_13890):map__13839_13890);
var doc_13892 = cljs.core.get.call(null,map__13839_13891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13893 = cljs.core.get.call(null,map__13839_13891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13889);

cljs.core.println.call(null," ",arglists_13893);

if(cljs.core.truth_(doc_13892)){
cljs.core.println.call(null," ",doc_13892);
} else {
}

var G__13894 = cljs.core.next.call(null,seq__13827_13882__$1);
var G__13895 = null;
var G__13896 = (0);
var G__13897 = (0);
seq__13827_13867 = G__13894;
chunk__13828_13868 = G__13895;
count__13829_13869 = G__13896;
i__13830_13870 = G__13897;
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

var seq__13841 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13842 = null;
var count__13843 = (0);
var i__13844 = (0);
while(true){
if((i__13844 < count__13843)){
var role = cljs.core._nth.call(null,chunk__13842,i__13844);
var temp__4657__auto___13898__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13898__$1)){
var spec_13899 = temp__4657__auto___13898__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_13899));
} else {
}

var G__13900 = seq__13841;
var G__13901 = chunk__13842;
var G__13902 = count__13843;
var G__13903 = (i__13844 + (1));
seq__13841 = G__13900;
chunk__13842 = G__13901;
count__13843 = G__13902;
i__13844 = G__13903;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13841);
if(temp__4657__auto____$1){
var seq__13841__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13841__$1)){
var c__7890__auto__ = cljs.core.chunk_first.call(null,seq__13841__$1);
var G__13904 = cljs.core.chunk_rest.call(null,seq__13841__$1);
var G__13905 = c__7890__auto__;
var G__13906 = cljs.core.count.call(null,c__7890__auto__);
var G__13907 = (0);
seq__13841 = G__13904;
chunk__13842 = G__13905;
count__13843 = G__13906;
i__13844 = G__13907;
continue;
} else {
var role = cljs.core.first.call(null,seq__13841__$1);
var temp__4657__auto___13908__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13908__$2)){
var spec_13909 = temp__4657__auto___13908__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_13909));
} else {
}

var G__13910 = cljs.core.next.call(null,seq__13841__$1);
var G__13911 = null;
var G__13912 = (0);
var G__13913 = (0);
seq__13841 = G__13910;
chunk__13842 = G__13911;
count__13843 = G__13912;
i__13844 = G__13913;
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
