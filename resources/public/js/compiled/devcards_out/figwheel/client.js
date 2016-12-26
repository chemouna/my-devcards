// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37098 = [];
var len__25897__auto___37101 = arguments.length;
var i__25898__auto___37102 = (0);
while(true){
if((i__25898__auto___37102 < len__25897__auto___37101)){
args37098.push((arguments[i__25898__auto___37102]));

var G__37103 = (i__25898__auto___37102 + (1));
i__25898__auto___37102 = G__37103;
continue;
} else {
}
break;
}

var G__37100 = args37098.length;
switch (G__37100) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37098.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25904__auto__ = [];
var len__25897__auto___37106 = arguments.length;
var i__25898__auto___37107 = (0);
while(true){
if((i__25898__auto___37107 < len__25897__auto___37106)){
args__25904__auto__.push((arguments[i__25898__auto___37107]));

var G__37108 = (i__25898__auto___37107 + (1));
i__25898__auto___37107 = G__37108;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37105){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37105));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25904__auto__ = [];
var len__25897__auto___37110 = arguments.length;
var i__25898__auto___37111 = (0);
while(true){
if((i__25898__auto___37111 < len__25897__auto___37110)){
args__25904__auto__.push((arguments[i__25898__auto___37111]));

var G__37112 = (i__25898__auto___37111 + (1));
i__25898__auto___37111 = G__37112;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37109){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37109));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37113 = cljs.core._EQ_;
var expr__37114 = (function (){var or__24822__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37117){if((e37117 instanceof Error)){
var e = e37117;
return false;
} else {
throw e37117;

}
}})();
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37113.call(null,"true",expr__37114))){
return true;
} else {
if(cljs.core.truth_(pred__37113.call(null,"false",expr__37114))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37114)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37119){if((e37119 instanceof Error)){
var e = e37119;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37119;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37120){
var map__37123 = p__37120;
var map__37123__$1 = ((((!((map__37123 == null)))?((((map__37123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37123):map__37123);
var message = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24822__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24810__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24810__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24810__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30029__auto___37285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___37285,ch){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___37285,ch){
return (function (state_37254){
var state_val_37255 = (state_37254[(1)]);
if((state_val_37255 === (7))){
var inst_37250 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37256_37286 = state_37254__$1;
(statearr_37256_37286[(2)] = inst_37250);

(statearr_37256_37286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (1))){
var state_37254__$1 = state_37254;
var statearr_37257_37287 = state_37254__$1;
(statearr_37257_37287[(2)] = null);

(statearr_37257_37287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (4))){
var inst_37207 = (state_37254[(7)]);
var inst_37207__$1 = (state_37254[(2)]);
var state_37254__$1 = (function (){var statearr_37258 = state_37254;
(statearr_37258[(7)] = inst_37207__$1);

return statearr_37258;
})();
if(cljs.core.truth_(inst_37207__$1)){
var statearr_37259_37288 = state_37254__$1;
(statearr_37259_37288[(1)] = (5));

} else {
var statearr_37260_37289 = state_37254__$1;
(statearr_37260_37289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (15))){
var inst_37214 = (state_37254[(8)]);
var inst_37229 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37214);
var inst_37230 = cljs.core.first.call(null,inst_37229);
var inst_37231 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37230);
var inst_37232 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37231)].join('');
var inst_37233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37232);
var state_37254__$1 = state_37254;
var statearr_37261_37290 = state_37254__$1;
(statearr_37261_37290[(2)] = inst_37233);

(statearr_37261_37290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (13))){
var inst_37238 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37262_37291 = state_37254__$1;
(statearr_37262_37291[(2)] = inst_37238);

(statearr_37262_37291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (6))){
var state_37254__$1 = state_37254;
var statearr_37263_37292 = state_37254__$1;
(statearr_37263_37292[(2)] = null);

(statearr_37263_37292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (17))){
var inst_37236 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37264_37293 = state_37254__$1;
(statearr_37264_37293[(2)] = inst_37236);

(statearr_37264_37293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (3))){
var inst_37252 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37254__$1,inst_37252);
} else {
if((state_val_37255 === (12))){
var inst_37213 = (state_37254[(9)]);
var inst_37227 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37213,opts);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37227)){
var statearr_37265_37294 = state_37254__$1;
(statearr_37265_37294[(1)] = (15));

} else {
var statearr_37266_37295 = state_37254__$1;
(statearr_37266_37295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (2))){
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(4),ch);
} else {
if((state_val_37255 === (11))){
var inst_37214 = (state_37254[(8)]);
var inst_37219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37220 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37214);
var inst_37221 = cljs.core.async.timeout.call(null,(1000));
var inst_37222 = [inst_37220,inst_37221];
var inst_37223 = (new cljs.core.PersistentVector(null,2,(5),inst_37219,inst_37222,null));
var state_37254__$1 = state_37254;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37254__$1,(14),inst_37223);
} else {
if((state_val_37255 === (9))){
var inst_37214 = (state_37254[(8)]);
var inst_37240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37241 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37214);
var inst_37242 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37241);
var inst_37243 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37242)].join('');
var inst_37244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37243);
var state_37254__$1 = (function (){var statearr_37267 = state_37254;
(statearr_37267[(10)] = inst_37240);

return statearr_37267;
})();
var statearr_37268_37296 = state_37254__$1;
(statearr_37268_37296[(2)] = inst_37244);

(statearr_37268_37296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (5))){
var inst_37207 = (state_37254[(7)]);
var inst_37209 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37210 = (new cljs.core.PersistentArrayMap(null,2,inst_37209,null));
var inst_37211 = (new cljs.core.PersistentHashSet(null,inst_37210,null));
var inst_37212 = figwheel.client.focus_msgs.call(null,inst_37211,inst_37207);
var inst_37213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37212);
var inst_37214 = cljs.core.first.call(null,inst_37212);
var inst_37215 = figwheel.client.autoload_QMARK_.call(null);
var state_37254__$1 = (function (){var statearr_37269 = state_37254;
(statearr_37269[(8)] = inst_37214);

(statearr_37269[(9)] = inst_37213);

return statearr_37269;
})();
if(cljs.core.truth_(inst_37215)){
var statearr_37270_37297 = state_37254__$1;
(statearr_37270_37297[(1)] = (8));

} else {
var statearr_37271_37298 = state_37254__$1;
(statearr_37271_37298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (14))){
var inst_37225 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37272_37299 = state_37254__$1;
(statearr_37272_37299[(2)] = inst_37225);

(statearr_37272_37299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (16))){
var state_37254__$1 = state_37254;
var statearr_37273_37300 = state_37254__$1;
(statearr_37273_37300[(2)] = null);

(statearr_37273_37300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (10))){
var inst_37246 = (state_37254[(2)]);
var state_37254__$1 = (function (){var statearr_37274 = state_37254;
(statearr_37274[(11)] = inst_37246);

return statearr_37274;
})();
var statearr_37275_37301 = state_37254__$1;
(statearr_37275_37301[(2)] = null);

(statearr_37275_37301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (8))){
var inst_37213 = (state_37254[(9)]);
var inst_37217 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37213,opts);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37217)){
var statearr_37276_37302 = state_37254__$1;
(statearr_37276_37302[(1)] = (11));

} else {
var statearr_37277_37303 = state_37254__$1;
(statearr_37277_37303[(1)] = (12));

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
});})(c__30029__auto___37285,ch))
;
return ((function (switch__29917__auto__,c__30029__auto___37285,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29918__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29918__auto____0 = (function (){
var statearr_37281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37281[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29918__auto__);

(statearr_37281[(1)] = (1));

return statearr_37281;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29918__auto____1 = (function (state_37254){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_37254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e37282){if((e37282 instanceof Object)){
var ex__29921__auto__ = e37282;
var statearr_37283_37304 = state_37254;
(statearr_37283_37304[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37305 = state_37254;
state_37254 = G__37305;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29918__auto__ = function(state_37254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29918__auto____1.call(this,state_37254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29918__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29918__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___37285,ch))
})();
var state__30031__auto__ = (function (){var statearr_37284 = f__30030__auto__.call(null);
(statearr_37284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___37285);

return statearr_37284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___37285,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37306_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37306_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37309 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37309){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37308){if((e37308 instanceof Error)){
var e = e37308;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37309], null));
} else {
var e = e37308;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37309))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37310){
var map__37319 = p__37310;
var map__37319__$1 = ((((!((map__37319 == null)))?((((map__37319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37319):map__37319);
var opts = map__37319__$1;
var build_id = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37319,map__37319__$1,opts,build_id){
return (function (p__37321){
var vec__37322 = p__37321;
var seq__37323 = cljs.core.seq.call(null,vec__37322);
var first__37324 = cljs.core.first.call(null,seq__37323);
var seq__37323__$1 = cljs.core.next.call(null,seq__37323);
var map__37325 = first__37324;
var map__37325__$1 = ((((!((map__37325 == null)))?((((map__37325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37325):map__37325);
var msg = map__37325__$1;
var msg_name = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37323__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37322,seq__37323,first__37324,seq__37323__$1,map__37325,map__37325__$1,msg,msg_name,_,map__37319,map__37319__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37322,seq__37323,first__37324,seq__37323__$1,map__37325,map__37325__$1,msg,msg_name,_,map__37319,map__37319__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37319,map__37319__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37333){
var vec__37334 = p__37333;
var seq__37335 = cljs.core.seq.call(null,vec__37334);
var first__37336 = cljs.core.first.call(null,seq__37335);
var seq__37335__$1 = cljs.core.next.call(null,seq__37335);
var map__37337 = first__37336;
var map__37337__$1 = ((((!((map__37337 == null)))?((((map__37337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37337):map__37337);
var msg = map__37337__$1;
var msg_name = cljs.core.get.call(null,map__37337__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37335__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37339){
var map__37351 = p__37339;
var map__37351__$1 = ((((!((map__37351 == null)))?((((map__37351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37351):map__37351);
var on_compile_warning = cljs.core.get.call(null,map__37351__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37351__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37351,map__37351__$1,on_compile_warning,on_compile_fail){
return (function (p__37353){
var vec__37354 = p__37353;
var seq__37355 = cljs.core.seq.call(null,vec__37354);
var first__37356 = cljs.core.first.call(null,seq__37355);
var seq__37355__$1 = cljs.core.next.call(null,seq__37355);
var map__37357 = first__37356;
var map__37357__$1 = ((((!((map__37357 == null)))?((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37357):map__37357);
var msg = map__37357__$1;
var msg_name = cljs.core.get.call(null,map__37357__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37355__$1;
var pred__37359 = cljs.core._EQ_;
var expr__37360 = msg_name;
if(cljs.core.truth_(pred__37359.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37360))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37359.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37360))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37351,map__37351__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__,msg_hist,msg_names,msg){
return (function (state_37588){
var state_val_37589 = (state_37588[(1)]);
if((state_val_37589 === (7))){
var inst_37508 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37508)){
var statearr_37590_37640 = state_37588__$1;
(statearr_37590_37640[(1)] = (8));

} else {
var statearr_37591_37641 = state_37588__$1;
(statearr_37591_37641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (20))){
var inst_37582 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37592_37642 = state_37588__$1;
(statearr_37592_37642[(2)] = inst_37582);

(statearr_37592_37642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (27))){
var inst_37578 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37593_37643 = state_37588__$1;
(statearr_37593_37643[(2)] = inst_37578);

(statearr_37593_37643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (1))){
var inst_37501 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37501)){
var statearr_37594_37644 = state_37588__$1;
(statearr_37594_37644[(1)] = (2));

} else {
var statearr_37595_37645 = state_37588__$1;
(statearr_37595_37645[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (24))){
var inst_37580 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37596_37646 = state_37588__$1;
(statearr_37596_37646[(2)] = inst_37580);

(statearr_37596_37646[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (4))){
var inst_37586 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37588__$1,inst_37586);
} else {
if((state_val_37589 === (15))){
var inst_37584 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37597_37647 = state_37588__$1;
(statearr_37597_37647[(2)] = inst_37584);

(statearr_37597_37647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (21))){
var inst_37537 = (state_37588[(2)]);
var inst_37538 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37538);
var state_37588__$1 = (function (){var statearr_37598 = state_37588;
(statearr_37598[(7)] = inst_37537);

return statearr_37598;
})();
var statearr_37599_37648 = state_37588__$1;
(statearr_37599_37648[(2)] = inst_37539);

(statearr_37599_37648[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (31))){
var inst_37567 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37567)){
var statearr_37600_37649 = state_37588__$1;
(statearr_37600_37649[(1)] = (34));

} else {
var statearr_37601_37650 = state_37588__$1;
(statearr_37601_37650[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (32))){
var inst_37576 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37602_37651 = state_37588__$1;
(statearr_37602_37651[(2)] = inst_37576);

(statearr_37602_37651[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (33))){
var inst_37563 = (state_37588[(2)]);
var inst_37564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37564);
var state_37588__$1 = (function (){var statearr_37603 = state_37588;
(statearr_37603[(8)] = inst_37563);

return statearr_37603;
})();
var statearr_37604_37652 = state_37588__$1;
(statearr_37604_37652[(2)] = inst_37565);

(statearr_37604_37652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (13))){
var inst_37522 = figwheel.client.heads_up.clear.call(null);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(16),inst_37522);
} else {
if((state_val_37589 === (22))){
var inst_37543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37544 = figwheel.client.heads_up.append_warning_message.call(null,inst_37543);
var state_37588__$1 = state_37588;
var statearr_37605_37653 = state_37588__$1;
(statearr_37605_37653[(2)] = inst_37544);

(statearr_37605_37653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (36))){
var inst_37574 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37606_37654 = state_37588__$1;
(statearr_37606_37654[(2)] = inst_37574);

(statearr_37606_37654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (29))){
var inst_37554 = (state_37588[(2)]);
var inst_37555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37556 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37555);
var state_37588__$1 = (function (){var statearr_37607 = state_37588;
(statearr_37607[(9)] = inst_37554);

return statearr_37607;
})();
var statearr_37608_37655 = state_37588__$1;
(statearr_37608_37655[(2)] = inst_37556);

(statearr_37608_37655[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (6))){
var inst_37503 = (state_37588[(10)]);
var state_37588__$1 = state_37588;
var statearr_37609_37656 = state_37588__$1;
(statearr_37609_37656[(2)] = inst_37503);

(statearr_37609_37656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (28))){
var inst_37550 = (state_37588[(2)]);
var inst_37551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37552 = figwheel.client.heads_up.display_warning.call(null,inst_37551);
var state_37588__$1 = (function (){var statearr_37610 = state_37588;
(statearr_37610[(11)] = inst_37550);

return statearr_37610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(29),inst_37552);
} else {
if((state_val_37589 === (25))){
var inst_37548 = figwheel.client.heads_up.clear.call(null);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(28),inst_37548);
} else {
if((state_val_37589 === (34))){
var inst_37569 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(37),inst_37569);
} else {
if((state_val_37589 === (17))){
var inst_37528 = (state_37588[(2)]);
var inst_37529 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37530 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37529);
var state_37588__$1 = (function (){var statearr_37611 = state_37588;
(statearr_37611[(12)] = inst_37528);

return statearr_37611;
})();
var statearr_37612_37657 = state_37588__$1;
(statearr_37612_37657[(2)] = inst_37530);

(statearr_37612_37657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (3))){
var inst_37520 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37520)){
var statearr_37613_37658 = state_37588__$1;
(statearr_37613_37658[(1)] = (13));

} else {
var statearr_37614_37659 = state_37588__$1;
(statearr_37614_37659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (12))){
var inst_37516 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37615_37660 = state_37588__$1;
(statearr_37615_37660[(2)] = inst_37516);

(statearr_37615_37660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (2))){
var inst_37503 = (state_37588[(10)]);
var inst_37503__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37588__$1 = (function (){var statearr_37616 = state_37588;
(statearr_37616[(10)] = inst_37503__$1);

return statearr_37616;
})();
if(cljs.core.truth_(inst_37503__$1)){
var statearr_37617_37661 = state_37588__$1;
(statearr_37617_37661[(1)] = (5));

} else {
var statearr_37618_37662 = state_37588__$1;
(statearr_37618_37662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (23))){
var inst_37546 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37546)){
var statearr_37619_37663 = state_37588__$1;
(statearr_37619_37663[(1)] = (25));

} else {
var statearr_37620_37664 = state_37588__$1;
(statearr_37620_37664[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (35))){
var state_37588__$1 = state_37588;
var statearr_37621_37665 = state_37588__$1;
(statearr_37621_37665[(2)] = null);

(statearr_37621_37665[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (19))){
var inst_37541 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37541)){
var statearr_37622_37666 = state_37588__$1;
(statearr_37622_37666[(1)] = (22));

} else {
var statearr_37623_37667 = state_37588__$1;
(statearr_37623_37667[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (11))){
var inst_37512 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37624_37668 = state_37588__$1;
(statearr_37624_37668[(2)] = inst_37512);

(statearr_37624_37668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (9))){
var inst_37514 = figwheel.client.heads_up.clear.call(null);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(12),inst_37514);
} else {
if((state_val_37589 === (5))){
var inst_37505 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37588__$1 = state_37588;
var statearr_37625_37669 = state_37588__$1;
(statearr_37625_37669[(2)] = inst_37505);

(statearr_37625_37669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (14))){
var inst_37532 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37532)){
var statearr_37626_37670 = state_37588__$1;
(statearr_37626_37670[(1)] = (18));

} else {
var statearr_37627_37671 = state_37588__$1;
(statearr_37627_37671[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (26))){
var inst_37558 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37558)){
var statearr_37628_37672 = state_37588__$1;
(statearr_37628_37672[(1)] = (30));

} else {
var statearr_37629_37673 = state_37588__$1;
(statearr_37629_37673[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (16))){
var inst_37524 = (state_37588[(2)]);
var inst_37525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37526 = figwheel.client.heads_up.display_exception.call(null,inst_37525);
var state_37588__$1 = (function (){var statearr_37630 = state_37588;
(statearr_37630[(13)] = inst_37524);

return statearr_37630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(17),inst_37526);
} else {
if((state_val_37589 === (30))){
var inst_37560 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37561 = figwheel.client.heads_up.display_warning.call(null,inst_37560);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(33),inst_37561);
} else {
if((state_val_37589 === (10))){
var inst_37518 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37631_37674 = state_37588__$1;
(statearr_37631_37674[(2)] = inst_37518);

(statearr_37631_37674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (18))){
var inst_37534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37535 = figwheel.client.heads_up.display_exception.call(null,inst_37534);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(21),inst_37535);
} else {
if((state_val_37589 === (37))){
var inst_37571 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37632_37675 = state_37588__$1;
(statearr_37632_37675[(2)] = inst_37571);

(statearr_37632_37675[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (8))){
var inst_37510 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37588__$1,(11),inst_37510);
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
});})(c__30029__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29917__auto__,c__30029__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto____0 = (function (){
var statearr_37636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37636[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto__);

(statearr_37636[(1)] = (1));

return statearr_37636;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto____1 = (function (state_37588){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_37588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e37637){if((e37637 instanceof Object)){
var ex__29921__auto__ = e37637;
var statearr_37638_37676 = state_37588;
(statearr_37638_37676[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37677 = state_37588;
state_37588 = G__37677;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto__ = function(state_37588){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto____1.call(this,state_37588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__,msg_hist,msg_names,msg))
})();
var state__30031__auto__ = (function (){var statearr_37639 = f__30030__auto__.call(null);
(statearr_37639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_37639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,msg_hist,msg_names,msg))
);

return c__30029__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30029__auto___37740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___37740,ch){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___37740,ch){
return (function (state_37723){
var state_val_37724 = (state_37723[(1)]);
if((state_val_37724 === (1))){
var state_37723__$1 = state_37723;
var statearr_37725_37741 = state_37723__$1;
(statearr_37725_37741[(2)] = null);

(statearr_37725_37741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37724 === (2))){
var state_37723__$1 = state_37723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37723__$1,(4),ch);
} else {
if((state_val_37724 === (3))){
var inst_37721 = (state_37723[(2)]);
var state_37723__$1 = state_37723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37723__$1,inst_37721);
} else {
if((state_val_37724 === (4))){
var inst_37711 = (state_37723[(7)]);
var inst_37711__$1 = (state_37723[(2)]);
var state_37723__$1 = (function (){var statearr_37726 = state_37723;
(statearr_37726[(7)] = inst_37711__$1);

return statearr_37726;
})();
if(cljs.core.truth_(inst_37711__$1)){
var statearr_37727_37742 = state_37723__$1;
(statearr_37727_37742[(1)] = (5));

} else {
var statearr_37728_37743 = state_37723__$1;
(statearr_37728_37743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37724 === (5))){
var inst_37711 = (state_37723[(7)]);
var inst_37713 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37711);
var state_37723__$1 = state_37723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37723__$1,(8),inst_37713);
} else {
if((state_val_37724 === (6))){
var state_37723__$1 = state_37723;
var statearr_37729_37744 = state_37723__$1;
(statearr_37729_37744[(2)] = null);

(statearr_37729_37744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37724 === (7))){
var inst_37719 = (state_37723[(2)]);
var state_37723__$1 = state_37723;
var statearr_37730_37745 = state_37723__$1;
(statearr_37730_37745[(2)] = inst_37719);

(statearr_37730_37745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37724 === (8))){
var inst_37715 = (state_37723[(2)]);
var state_37723__$1 = (function (){var statearr_37731 = state_37723;
(statearr_37731[(8)] = inst_37715);

return statearr_37731;
})();
var statearr_37732_37746 = state_37723__$1;
(statearr_37732_37746[(2)] = null);

(statearr_37732_37746[(1)] = (2));


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
});})(c__30029__auto___37740,ch))
;
return ((function (switch__29917__auto__,c__30029__auto___37740,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29918__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29918__auto____0 = (function (){
var statearr_37736 = [null,null,null,null,null,null,null,null,null];
(statearr_37736[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29918__auto__);

(statearr_37736[(1)] = (1));

return statearr_37736;
});
var figwheel$client$heads_up_plugin_$_state_machine__29918__auto____1 = (function (state_37723){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_37723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e37737){if((e37737 instanceof Object)){
var ex__29921__auto__ = e37737;
var statearr_37738_37747 = state_37723;
(statearr_37738_37747[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37748 = state_37723;
state_37723 = G__37748;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29918__auto__ = function(state_37723){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29918__auto____1.call(this,state_37723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29918__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29918__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___37740,ch))
})();
var state__30031__auto__ = (function (){var statearr_37739 = f__30030__auto__.call(null);
(statearr_37739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___37740);

return statearr_37739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___37740,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_37769){
var state_val_37770 = (state_37769[(1)]);
if((state_val_37770 === (1))){
var inst_37764 = cljs.core.async.timeout.call(null,(3000));
var state_37769__$1 = state_37769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37769__$1,(2),inst_37764);
} else {
if((state_val_37770 === (2))){
var inst_37766 = (state_37769[(2)]);
var inst_37767 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37769__$1 = (function (){var statearr_37771 = state_37769;
(statearr_37771[(7)] = inst_37766);

return statearr_37771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37769__$1,inst_37767);
} else {
return null;
}
}
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29918__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29918__auto____0 = (function (){
var statearr_37775 = [null,null,null,null,null,null,null,null];
(statearr_37775[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29918__auto__);

(statearr_37775[(1)] = (1));

return statearr_37775;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29918__auto____1 = (function (state_37769){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_37769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e37776){if((e37776 instanceof Object)){
var ex__29921__auto__ = e37776;
var statearr_37777_37779 = state_37769;
(statearr_37777_37779[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37780 = state_37769;
state_37769 = G__37780;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29918__auto__ = function(state_37769){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29918__auto____1.call(this,state_37769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29918__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29918__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_37778 = f__30030__auto__.call(null);
(statearr_37778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_37778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37803){
var state_val_37804 = (state_37803[(1)]);
if((state_val_37804 === (1))){
var inst_37797 = cljs.core.async.timeout.call(null,(2000));
var state_37803__$1 = state_37803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37803__$1,(2),inst_37797);
} else {
if((state_val_37804 === (2))){
var inst_37799 = (state_37803[(2)]);
var inst_37800 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37801 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37800);
var state_37803__$1 = (function (){var statearr_37805 = state_37803;
(statearr_37805[(7)] = inst_37799);

return statearr_37805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37803__$1,inst_37801);
} else {
return null;
}
}
});})(c__30029__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto____0 = (function (){
var statearr_37809 = [null,null,null,null,null,null,null,null];
(statearr_37809[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto__);

(statearr_37809[(1)] = (1));

return statearr_37809;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto____1 = (function (state_37803){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_37803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e37810){if((e37810 instanceof Object)){
var ex__29921__auto__ = e37810;
var statearr_37811_37813 = state_37803;
(statearr_37811_37813[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37814 = state_37803;
state_37803 = G__37814;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto__ = function(state_37803){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto____1.call(this,state_37803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30031__auto__ = (function (){var statearr_37812 = f__30030__auto__.call(null);
(statearr_37812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_37812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,figwheel_version,temp__4657__auto__))
);

return c__30029__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37815){
var map__37819 = p__37815;
var map__37819__$1 = ((((!((map__37819 == null)))?((((map__37819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37819):map__37819);
var file = cljs.core.get.call(null,map__37819__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37819__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37819__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37821 = "";
var G__37821__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37821),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37821);
var G__37821__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37821__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37821__$1);
if(cljs.core.truth_((function (){var and__24810__auto__ = line;
if(cljs.core.truth_(and__24810__auto__)){
return column;
} else {
return and__24810__auto__;
}
})())){
return [cljs.core.str(G__37821__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37821__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37822){
var map__37829 = p__37822;
var map__37829__$1 = ((((!((map__37829 == null)))?((((map__37829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37829):map__37829);
var ed = map__37829__$1;
var formatted_exception = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37831_37835 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37832_37836 = null;
var count__37833_37837 = (0);
var i__37834_37838 = (0);
while(true){
if((i__37834_37838 < count__37833_37837)){
var msg_37839 = cljs.core._nth.call(null,chunk__37832_37836,i__37834_37838);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37839);

var G__37840 = seq__37831_37835;
var G__37841 = chunk__37832_37836;
var G__37842 = count__37833_37837;
var G__37843 = (i__37834_37838 + (1));
seq__37831_37835 = G__37840;
chunk__37832_37836 = G__37841;
count__37833_37837 = G__37842;
i__37834_37838 = G__37843;
continue;
} else {
var temp__4657__auto___37844 = cljs.core.seq.call(null,seq__37831_37835);
if(temp__4657__auto___37844){
var seq__37831_37845__$1 = temp__4657__auto___37844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37831_37845__$1)){
var c__25633__auto___37846 = cljs.core.chunk_first.call(null,seq__37831_37845__$1);
var G__37847 = cljs.core.chunk_rest.call(null,seq__37831_37845__$1);
var G__37848 = c__25633__auto___37846;
var G__37849 = cljs.core.count.call(null,c__25633__auto___37846);
var G__37850 = (0);
seq__37831_37835 = G__37847;
chunk__37832_37836 = G__37848;
count__37833_37837 = G__37849;
i__37834_37838 = G__37850;
continue;
} else {
var msg_37851 = cljs.core.first.call(null,seq__37831_37845__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37851);

var G__37852 = cljs.core.next.call(null,seq__37831_37845__$1);
var G__37853 = null;
var G__37854 = (0);
var G__37855 = (0);
seq__37831_37835 = G__37852;
chunk__37832_37836 = G__37853;
count__37833_37837 = G__37854;
i__37834_37838 = G__37855;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37856){
var map__37859 = p__37856;
var map__37859__$1 = ((((!((map__37859 == null)))?((((map__37859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37859):map__37859);
var w = map__37859__$1;
var message = cljs.core.get.call(null,map__37859__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24810__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24810__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24810__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37871 = cljs.core.seq.call(null,plugins);
var chunk__37872 = null;
var count__37873 = (0);
var i__37874 = (0);
while(true){
if((i__37874 < count__37873)){
var vec__37875 = cljs.core._nth.call(null,chunk__37872,i__37874);
var k = cljs.core.nth.call(null,vec__37875,(0),null);
var plugin = cljs.core.nth.call(null,vec__37875,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37881 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37871,chunk__37872,count__37873,i__37874,pl_37881,vec__37875,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37881.call(null,msg_hist);
});})(seq__37871,chunk__37872,count__37873,i__37874,pl_37881,vec__37875,k,plugin))
);
} else {
}

var G__37882 = seq__37871;
var G__37883 = chunk__37872;
var G__37884 = count__37873;
var G__37885 = (i__37874 + (1));
seq__37871 = G__37882;
chunk__37872 = G__37883;
count__37873 = G__37884;
i__37874 = G__37885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37871);
if(temp__4657__auto__){
var seq__37871__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37871__$1)){
var c__25633__auto__ = cljs.core.chunk_first.call(null,seq__37871__$1);
var G__37886 = cljs.core.chunk_rest.call(null,seq__37871__$1);
var G__37887 = c__25633__auto__;
var G__37888 = cljs.core.count.call(null,c__25633__auto__);
var G__37889 = (0);
seq__37871 = G__37886;
chunk__37872 = G__37887;
count__37873 = G__37888;
i__37874 = G__37889;
continue;
} else {
var vec__37878 = cljs.core.first.call(null,seq__37871__$1);
var k = cljs.core.nth.call(null,vec__37878,(0),null);
var plugin = cljs.core.nth.call(null,vec__37878,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37890 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37871,chunk__37872,count__37873,i__37874,pl_37890,vec__37878,k,plugin,seq__37871__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37890.call(null,msg_hist);
});})(seq__37871,chunk__37872,count__37873,i__37874,pl_37890,vec__37878,k,plugin,seq__37871__$1,temp__4657__auto__))
);
} else {
}

var G__37891 = cljs.core.next.call(null,seq__37871__$1);
var G__37892 = null;
var G__37893 = (0);
var G__37894 = (0);
seq__37871 = G__37891;
chunk__37872 = G__37892;
count__37873 = G__37893;
i__37874 = G__37894;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37895 = [];
var len__25897__auto___37902 = arguments.length;
var i__25898__auto___37903 = (0);
while(true){
if((i__25898__auto___37903 < len__25897__auto___37902)){
args37895.push((arguments[i__25898__auto___37903]));

var G__37904 = (i__25898__auto___37903 + (1));
i__25898__auto___37903 = G__37904;
continue;
} else {
}
break;
}

var G__37897 = args37895.length;
switch (G__37897) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37895.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37898_37906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37899_37907 = null;
var count__37900_37908 = (0);
var i__37901_37909 = (0);
while(true){
if((i__37901_37909 < count__37900_37908)){
var msg_37910 = cljs.core._nth.call(null,chunk__37899_37907,i__37901_37909);
figwheel.client.socket.handle_incoming_message.call(null,msg_37910);

var G__37911 = seq__37898_37906;
var G__37912 = chunk__37899_37907;
var G__37913 = count__37900_37908;
var G__37914 = (i__37901_37909 + (1));
seq__37898_37906 = G__37911;
chunk__37899_37907 = G__37912;
count__37900_37908 = G__37913;
i__37901_37909 = G__37914;
continue;
} else {
var temp__4657__auto___37915 = cljs.core.seq.call(null,seq__37898_37906);
if(temp__4657__auto___37915){
var seq__37898_37916__$1 = temp__4657__auto___37915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37898_37916__$1)){
var c__25633__auto___37917 = cljs.core.chunk_first.call(null,seq__37898_37916__$1);
var G__37918 = cljs.core.chunk_rest.call(null,seq__37898_37916__$1);
var G__37919 = c__25633__auto___37917;
var G__37920 = cljs.core.count.call(null,c__25633__auto___37917);
var G__37921 = (0);
seq__37898_37906 = G__37918;
chunk__37899_37907 = G__37919;
count__37900_37908 = G__37920;
i__37901_37909 = G__37921;
continue;
} else {
var msg_37922 = cljs.core.first.call(null,seq__37898_37916__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37922);

var G__37923 = cljs.core.next.call(null,seq__37898_37916__$1);
var G__37924 = null;
var G__37925 = (0);
var G__37926 = (0);
seq__37898_37906 = G__37923;
chunk__37899_37907 = G__37924;
count__37900_37908 = G__37925;
i__37901_37909 = G__37926;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25904__auto__ = [];
var len__25897__auto___37931 = arguments.length;
var i__25898__auto___37932 = (0);
while(true){
if((i__25898__auto___37932 < len__25897__auto___37931)){
args__25904__auto__.push((arguments[i__25898__auto___37932]));

var G__37933 = (i__25898__auto___37932 + (1));
i__25898__auto___37932 = G__37933;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37928){
var map__37929 = p__37928;
var map__37929__$1 = ((((!((map__37929 == null)))?((((map__37929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37929):map__37929);
var opts = map__37929__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37927){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37927));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37935){if((e37935 instanceof Error)){
var e = e37935;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37935;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37939){
var map__37940 = p__37939;
var map__37940__$1 = ((((!((map__37940 == null)))?((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37940):map__37940);
var msg_name = cljs.core.get.call(null,map__37940__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1482768553152