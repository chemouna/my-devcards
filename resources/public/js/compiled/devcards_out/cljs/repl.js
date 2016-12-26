// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36527){
var map__36552 = p__36527;
var map__36552__$1 = ((((!((map__36552 == null)))?((((map__36552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36552):map__36552);
var m = map__36552__$1;
var n = cljs.core.get.call(null,map__36552__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36552__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36554_36576 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36555_36577 = null;
var count__36556_36578 = (0);
var i__36557_36579 = (0);
while(true){
if((i__36557_36579 < count__36556_36578)){
var f_36580 = cljs.core._nth.call(null,chunk__36555_36577,i__36557_36579);
cljs.core.println.call(null,"  ",f_36580);

var G__36581 = seq__36554_36576;
var G__36582 = chunk__36555_36577;
var G__36583 = count__36556_36578;
var G__36584 = (i__36557_36579 + (1));
seq__36554_36576 = G__36581;
chunk__36555_36577 = G__36582;
count__36556_36578 = G__36583;
i__36557_36579 = G__36584;
continue;
} else {
var temp__4657__auto___36585 = cljs.core.seq.call(null,seq__36554_36576);
if(temp__4657__auto___36585){
var seq__36554_36586__$1 = temp__4657__auto___36585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36554_36586__$1)){
var c__25633__auto___36587 = cljs.core.chunk_first.call(null,seq__36554_36586__$1);
var G__36588 = cljs.core.chunk_rest.call(null,seq__36554_36586__$1);
var G__36589 = c__25633__auto___36587;
var G__36590 = cljs.core.count.call(null,c__25633__auto___36587);
var G__36591 = (0);
seq__36554_36576 = G__36588;
chunk__36555_36577 = G__36589;
count__36556_36578 = G__36590;
i__36557_36579 = G__36591;
continue;
} else {
var f_36592 = cljs.core.first.call(null,seq__36554_36586__$1);
cljs.core.println.call(null,"  ",f_36592);

var G__36593 = cljs.core.next.call(null,seq__36554_36586__$1);
var G__36594 = null;
var G__36595 = (0);
var G__36596 = (0);
seq__36554_36576 = G__36593;
chunk__36555_36577 = G__36594;
count__36556_36578 = G__36595;
i__36557_36579 = G__36596;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36597 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24822__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36597);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36597)))?cljs.core.second.call(null,arglists_36597):arglists_36597));
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
var seq__36558_36598 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36559_36599 = null;
var count__36560_36600 = (0);
var i__36561_36601 = (0);
while(true){
if((i__36561_36601 < count__36560_36600)){
var vec__36562_36602 = cljs.core._nth.call(null,chunk__36559_36599,i__36561_36601);
var name_36603 = cljs.core.nth.call(null,vec__36562_36602,(0),null);
var map__36565_36604 = cljs.core.nth.call(null,vec__36562_36602,(1),null);
var map__36565_36605__$1 = ((((!((map__36565_36604 == null)))?((((map__36565_36604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36565_36604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36565_36604):map__36565_36604);
var doc_36606 = cljs.core.get.call(null,map__36565_36605__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36607 = cljs.core.get.call(null,map__36565_36605__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36603);

cljs.core.println.call(null," ",arglists_36607);

if(cljs.core.truth_(doc_36606)){
cljs.core.println.call(null," ",doc_36606);
} else {
}

var G__36608 = seq__36558_36598;
var G__36609 = chunk__36559_36599;
var G__36610 = count__36560_36600;
var G__36611 = (i__36561_36601 + (1));
seq__36558_36598 = G__36608;
chunk__36559_36599 = G__36609;
count__36560_36600 = G__36610;
i__36561_36601 = G__36611;
continue;
} else {
var temp__4657__auto___36612 = cljs.core.seq.call(null,seq__36558_36598);
if(temp__4657__auto___36612){
var seq__36558_36613__$1 = temp__4657__auto___36612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36558_36613__$1)){
var c__25633__auto___36614 = cljs.core.chunk_first.call(null,seq__36558_36613__$1);
var G__36615 = cljs.core.chunk_rest.call(null,seq__36558_36613__$1);
var G__36616 = c__25633__auto___36614;
var G__36617 = cljs.core.count.call(null,c__25633__auto___36614);
var G__36618 = (0);
seq__36558_36598 = G__36615;
chunk__36559_36599 = G__36616;
count__36560_36600 = G__36617;
i__36561_36601 = G__36618;
continue;
} else {
var vec__36567_36619 = cljs.core.first.call(null,seq__36558_36613__$1);
var name_36620 = cljs.core.nth.call(null,vec__36567_36619,(0),null);
var map__36570_36621 = cljs.core.nth.call(null,vec__36567_36619,(1),null);
var map__36570_36622__$1 = ((((!((map__36570_36621 == null)))?((((map__36570_36621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36570_36621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36570_36621):map__36570_36621);
var doc_36623 = cljs.core.get.call(null,map__36570_36622__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36624 = cljs.core.get.call(null,map__36570_36622__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36620);

cljs.core.println.call(null," ",arglists_36624);

if(cljs.core.truth_(doc_36623)){
cljs.core.println.call(null," ",doc_36623);
} else {
}

var G__36625 = cljs.core.next.call(null,seq__36558_36613__$1);
var G__36626 = null;
var G__36627 = (0);
var G__36628 = (0);
seq__36558_36598 = G__36625;
chunk__36559_36599 = G__36626;
count__36560_36600 = G__36627;
i__36561_36601 = G__36628;
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

var seq__36572 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36573 = null;
var count__36574 = (0);
var i__36575 = (0);
while(true){
if((i__36575 < count__36574)){
var role = cljs.core._nth.call(null,chunk__36573,i__36575);
var temp__4657__auto___36629__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36629__$1)){
var spec_36630 = temp__4657__auto___36629__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36630));
} else {
}

var G__36631 = seq__36572;
var G__36632 = chunk__36573;
var G__36633 = count__36574;
var G__36634 = (i__36575 + (1));
seq__36572 = G__36631;
chunk__36573 = G__36632;
count__36574 = G__36633;
i__36575 = G__36634;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36572);
if(temp__4657__auto____$1){
var seq__36572__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36572__$1)){
var c__25633__auto__ = cljs.core.chunk_first.call(null,seq__36572__$1);
var G__36635 = cljs.core.chunk_rest.call(null,seq__36572__$1);
var G__36636 = c__25633__auto__;
var G__36637 = cljs.core.count.call(null,c__25633__auto__);
var G__36638 = (0);
seq__36572 = G__36635;
chunk__36573 = G__36636;
count__36574 = G__36637;
i__36575 = G__36638;
continue;
} else {
var role = cljs.core.first.call(null,seq__36572__$1);
var temp__4657__auto___36639__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36639__$2)){
var spec_36640 = temp__4657__auto___36639__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36640));
} else {
}

var G__36641 = cljs.core.next.call(null,seq__36572__$1);
var G__36642 = null;
var G__36643 = (0);
var G__36644 = (0);
seq__36572 = G__36641;
chunk__36573 = G__36642;
count__36574 = G__36643;
i__36575 = G__36644;
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

//# sourceMappingURL=repl.js.map?rel=1482768551269