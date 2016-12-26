// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__24822__auto__ = (function (){var and__24810__auto__ = typeof Symbol !== 'undefined';
if(and__24810__auto__){
var and__24810__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24810__auto____$1){
var and__24810__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24810__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24810__auto____$2;
}
} else {
return and__24810__auto____$1;
}
} else {
return and__24810__auto__;
}
})();
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__33525_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__33525_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args33526 = [];
var len__25897__auto___33529 = arguments.length;
var i__25898__auto___33530 = (0);
while(true){
if((i__25898__auto___33530 < len__25897__auto___33529)){
args33526.push((arguments[i__25898__auto___33530]));

var G__33531 = (i__25898__auto___33530 + (1));
i__25898__auto___33530 = G__33531;
continue;
} else {
}
break;
}

var G__33528 = args33526.length;
switch (G__33528) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33526.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__24810__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24810__auto__){
var map__33539 = c;
var map__33539__$1 = ((((!((map__33539 == null)))?((((map__33539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33539):map__33539);
var path = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24810__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__32899__auto___33545 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24822__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__32899__auto___33545);
}

var seq__33541_33546 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33542_33547 = null;
var count__33543_33548 = (0);
var i__33544_33549 = (0);
while(true){
if((i__33544_33549 < count__33543_33548)){
var property__32900__auto___33550 = cljs.core._nth.call(null,chunk__33542_33547,i__33544_33549);
if(cljs.core.truth_((base__32899__auto___33545[property__32900__auto___33550]))){
(devcards.core.CodeHighlight.prototype[property__32900__auto___33550] = (base__32899__auto___33545[property__32900__auto___33550]));
} else {
}

var G__33551 = seq__33541_33546;
var G__33552 = chunk__33542_33547;
var G__33553 = count__33543_33548;
var G__33554 = (i__33544_33549 + (1));
seq__33541_33546 = G__33551;
chunk__33542_33547 = G__33552;
count__33543_33548 = G__33553;
i__33544_33549 = G__33554;
continue;
} else {
var temp__4657__auto___33555 = cljs.core.seq.call(null,seq__33541_33546);
if(temp__4657__auto___33555){
var seq__33541_33556__$1 = temp__4657__auto___33555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33541_33556__$1)){
var c__25633__auto___33557 = cljs.core.chunk_first.call(null,seq__33541_33556__$1);
var G__33558 = cljs.core.chunk_rest.call(null,seq__33541_33556__$1);
var G__33559 = c__25633__auto___33557;
var G__33560 = cljs.core.count.call(null,c__25633__auto___33557);
var G__33561 = (0);
seq__33541_33546 = G__33558;
chunk__33542_33547 = G__33559;
count__33543_33548 = G__33560;
i__33544_33549 = G__33561;
continue;
} else {
var property__32900__auto___33562 = cljs.core.first.call(null,seq__33541_33556__$1);
if(cljs.core.truth_((base__32899__auto___33545[property__32900__auto___33562]))){
(devcards.core.CodeHighlight.prototype[property__32900__auto___33562] = (base__32899__auto___33545[property__32900__auto___33562]));
} else {
}

var G__33563 = cljs.core.next.call(null,seq__33541_33556__$1);
var G__33564 = null;
var G__33565 = (0);
var G__33566 = (0);
seq__33541_33546 = G__33563;
chunk__33542_33547 = G__33564;
count__33543_33548 = G__33565;
i__33544_33549 = G__33566;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25751__auto__,method_table__25747__auto__,prefer_table__25748__auto__,method_cache__25749__auto__,cached_hierarchy__25750__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33567){
var map__33568 = p__33567;
var map__33568__$1 = ((((!((map__33568 == null)))?((((map__33568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33568):map__33568);
var content = cljs.core.get.call(null,map__33568__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__33570){
var map__33571 = p__33570;
var map__33571__$1 = ((((!((map__33571 == null)))?((((map__33571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33571):map__33571);
var block = map__33571__$1;
var content = cljs.core.get.call(null,map__33571__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25904__auto__ = [];
var len__25897__auto___33574 = arguments.length;
var i__25898__auto___33575 = (0);
while(true){
if((i__25898__auto___33575 < len__25897__auto___33574)){
args__25904__auto__.push((arguments[i__25898__auto___33575]));

var G__33576 = (i__25898__auto___33575 + (1));
i__25898__auto___33575 = G__33576;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq33573){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33573));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__33578 = devcards.system.devcards_rendered_card_class;
var G__33578__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__33578),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__33578);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__33578__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__33578__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args33579 = [];
var len__25897__auto___33587 = arguments.length;
var i__25898__auto___33588 = (0);
while(true){
if((i__25898__auto___33588 < len__25897__auto___33587)){
args33579.push((arguments[i__25898__auto___33588]));

var G__33589 = (i__25898__auto___33588 + (1));
i__25898__auto___33588 = G__33589;
continue;
} else {
}
break;
}

var G__33581 = args33579.length;
switch (G__33581) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33579.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__33582 = card;
var map__33582__$1 = ((((!((map__33582 == null)))?((((map__33582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33582):map__33582);
var path = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__33582,map__33582__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__33582,map__33582__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs33584 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33584))?sablono.interpreter.attributes.call(null,attrs33584):null),((cljs.core.map_QMARK_.call(null,attrs33584))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33584)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25485__auto__ = (((this$ == null))?null:this$);
var m__25486__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,this$,devcard_opts);
} else {
var m__25486__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25485__auto__ = (((this$ == null))?null:this$);
var m__25486__auto__ = (devcards.core._devcard[goog.typeOf(x__25485__auto__)]);
if(!((m__25486__auto__ == null))){
return m__25486__auto__.call(null,this$,devcard_opts);
} else {
var m__25486__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25486__auto____$1 == null))){
return m__25486__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__32899__auto___33596 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs33591 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33591))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs33591)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs33591))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33591)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__32899__auto___33596);
}

var seq__33592_33597 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33593_33598 = null;
var count__33594_33599 = (0);
var i__33595_33600 = (0);
while(true){
if((i__33595_33600 < count__33594_33599)){
var property__32900__auto___33601 = cljs.core._nth.call(null,chunk__33593_33598,i__33595_33600);
if(cljs.core.truth_((base__32899__auto___33596[property__32900__auto___33601]))){
(devcards.core.DontUpdate.prototype[property__32900__auto___33601] = (base__32899__auto___33596[property__32900__auto___33601]));
} else {
}

var G__33602 = seq__33592_33597;
var G__33603 = chunk__33593_33598;
var G__33604 = count__33594_33599;
var G__33605 = (i__33595_33600 + (1));
seq__33592_33597 = G__33602;
chunk__33593_33598 = G__33603;
count__33594_33599 = G__33604;
i__33595_33600 = G__33605;
continue;
} else {
var temp__4657__auto___33606 = cljs.core.seq.call(null,seq__33592_33597);
if(temp__4657__auto___33606){
var seq__33592_33607__$1 = temp__4657__auto___33606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33592_33607__$1)){
var c__25633__auto___33608 = cljs.core.chunk_first.call(null,seq__33592_33607__$1);
var G__33609 = cljs.core.chunk_rest.call(null,seq__33592_33607__$1);
var G__33610 = c__25633__auto___33608;
var G__33611 = cljs.core.count.call(null,c__25633__auto___33608);
var G__33612 = (0);
seq__33592_33597 = G__33609;
chunk__33593_33598 = G__33610;
count__33594_33599 = G__33611;
i__33595_33600 = G__33612;
continue;
} else {
var property__32900__auto___33613 = cljs.core.first.call(null,seq__33592_33607__$1);
if(cljs.core.truth_((base__32899__auto___33596[property__32900__auto___33613]))){
(devcards.core.DontUpdate.prototype[property__32900__auto___33613] = (base__32899__auto___33596[property__32900__auto___33613]));
} else {
}

var G__33614 = cljs.core.next.call(null,seq__33592_33607__$1);
var G__33615 = null;
var G__33616 = (0);
var G__33617 = (0);
seq__33592_33597 = G__33614;
chunk__33593_33598 = G__33615;
count__33594_33599 = G__33616;
i__33595_33600 = G__33617;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__24822__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25656__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25656__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25656__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25656__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25656__auto____$3);
})(),x__25656__auto____$2);
})(),x__25656__auto____$1);
})(),x__25656__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__32899__auto___33624 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__24822__auto__ = (function (){var and__24810__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24810__auto__)){
return this$.state;
} else {
return and__24810__auto__;
}
})();
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__24810__auto__ = data_atom;
if(cljs.core.truth_(and__24810__auto__)){
return id;
} else {
return and__24810__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__32899__auto___33624);
}

var seq__33620_33625 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33621_33626 = null;
var count__33622_33627 = (0);
var i__33623_33628 = (0);
while(true){
if((i__33623_33628 < count__33622_33627)){
var property__32900__auto___33629 = cljs.core._nth.call(null,chunk__33621_33626,i__33623_33628);
if(cljs.core.truth_((base__32899__auto___33624[property__32900__auto___33629]))){
(devcards.core.DevcardBase.prototype[property__32900__auto___33629] = (base__32899__auto___33624[property__32900__auto___33629]));
} else {
}

var G__33630 = seq__33620_33625;
var G__33631 = chunk__33621_33626;
var G__33632 = count__33622_33627;
var G__33633 = (i__33623_33628 + (1));
seq__33620_33625 = G__33630;
chunk__33621_33626 = G__33631;
count__33622_33627 = G__33632;
i__33623_33628 = G__33633;
continue;
} else {
var temp__4657__auto___33634 = cljs.core.seq.call(null,seq__33620_33625);
if(temp__4657__auto___33634){
var seq__33620_33635__$1 = temp__4657__auto___33634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33620_33635__$1)){
var c__25633__auto___33636 = cljs.core.chunk_first.call(null,seq__33620_33635__$1);
var G__33637 = cljs.core.chunk_rest.call(null,seq__33620_33635__$1);
var G__33638 = c__25633__auto___33636;
var G__33639 = cljs.core.count.call(null,c__25633__auto___33636);
var G__33640 = (0);
seq__33620_33625 = G__33637;
chunk__33621_33626 = G__33638;
count__33622_33627 = G__33639;
i__33623_33628 = G__33640;
continue;
} else {
var property__32900__auto___33641 = cljs.core.first.call(null,seq__33620_33635__$1);
if(cljs.core.truth_((base__32899__auto___33624[property__32900__auto___33641]))){
(devcards.core.DevcardBase.prototype[property__32900__auto___33641] = (base__32899__auto___33624[property__32900__auto___33641]));
} else {
}

var G__33642 = cljs.core.next.call(null,seq__33620_33635__$1);
var G__33643 = null;
var G__33644 = (0);
var G__33645 = (0);
seq__33620_33625 = G__33642;
chunk__33621_33626 = G__33643;
count__33622_33627 = G__33644;
i__33623_33628 = G__33645;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__32899__auto___33650 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24810__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24810__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24810__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__32899__auto___33650);
}

var seq__33646_33651 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33647_33652 = null;
var count__33648_33653 = (0);
var i__33649_33654 = (0);
while(true){
if((i__33649_33654 < count__33648_33653)){
var property__32900__auto___33655 = cljs.core._nth.call(null,chunk__33647_33652,i__33649_33654);
if(cljs.core.truth_((base__32899__auto___33650[property__32900__auto___33655]))){
(devcards.core.DomComponent.prototype[property__32900__auto___33655] = (base__32899__auto___33650[property__32900__auto___33655]));
} else {
}

var G__33656 = seq__33646_33651;
var G__33657 = chunk__33647_33652;
var G__33658 = count__33648_33653;
var G__33659 = (i__33649_33654 + (1));
seq__33646_33651 = G__33656;
chunk__33647_33652 = G__33657;
count__33648_33653 = G__33658;
i__33649_33654 = G__33659;
continue;
} else {
var temp__4657__auto___33660 = cljs.core.seq.call(null,seq__33646_33651);
if(temp__4657__auto___33660){
var seq__33646_33661__$1 = temp__4657__auto___33660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33646_33661__$1)){
var c__25633__auto___33662 = cljs.core.chunk_first.call(null,seq__33646_33661__$1);
var G__33663 = cljs.core.chunk_rest.call(null,seq__33646_33661__$1);
var G__33664 = c__25633__auto___33662;
var G__33665 = cljs.core.count.call(null,c__25633__auto___33662);
var G__33666 = (0);
seq__33646_33651 = G__33663;
chunk__33647_33652 = G__33664;
count__33648_33653 = G__33665;
i__33649_33654 = G__33666;
continue;
} else {
var property__32900__auto___33667 = cljs.core.first.call(null,seq__33646_33661__$1);
if(cljs.core.truth_((base__32899__auto___33650[property__32900__auto___33667]))){
(devcards.core.DomComponent.prototype[property__32900__auto___33667] = (base__32899__auto___33650[property__32900__auto___33667]));
} else {
}

var G__33668 = cljs.core.next.call(null,seq__33646_33661__$1);
var G__33669 = null;
var G__33670 = (0);
var G__33671 = (0);
seq__33646_33651 = G__33668;
chunk__33647_33652 = G__33669;
count__33648_33653 = G__33670;
i__33649_33654 = G__33671;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24822__auto__ = x === true;
if(or__24822__auto__){
return or__24822__auto__;
} else {
var or__24822__auto____$1 = x === false;
if(or__24822__auto____$1){
return or__24822__auto____$1;
} else {
var or__24822__auto____$2 = (x == null);
if(or__24822__auto____$2){
return or__24822__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24822__auto__ = typeof x === 'string';
if(or__24822__auto__){
return or__24822__auto__;
} else {
var or__24822__auto____$1 = (x == null);
if(or__24822__auto____$1){
return or__24822__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24822__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__33672_SHARP_){
return !(p1__33672_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__33681 = opts;
var map__33681__$1 = ((((!((map__33681 == null)))?((((map__33681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33681):map__33681);
var name = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__33681__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24822__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24822__auto__){
return or__24822__auto__;
} else {
var or__24822__auto____$1 = (options == null);
if(or__24822__auto____$1){
return or__24822__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24822__auto__ = (initial_data == null);
if(or__24822__auto__){
return or__24822__auto__;
} else {
var or__24822__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24822__auto____$1){
return or__24822__auto____$1;
} else {
var or__24822__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24822__auto____$2){
return or__24822__auto____$2;
} else {
var or__24822__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24822__auto____$3){
return or__24822__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__33681,map__33681__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__33673_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__33673_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__33681,map__33681__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs33689 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33689))?sablono.interpreter.attributes.call(null,attrs33689):null),((cljs.core.map_QMARK_.call(null,attrs33689))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33689)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs33693 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33693))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs33693)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs33693))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33693)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs33694 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33694))?sablono.interpreter.attributes.call(null,attrs33694):null),((cljs.core.map_QMARK_.call(null,attrs33694))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33694)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs33695 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33695))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs33695)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs33695))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33695)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__33696_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__33696_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25444__auto__,k__25445__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return cljs.core._lookup.call(null,this__25444__auto____$1,k__25445__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25446__auto__,k33698,else__25447__auto__){
var self__ = this;
var this__25446__auto____$1 = this;
var G__33700 = (((k33698 instanceof cljs.core.Keyword))?k33698.fqn:null);
switch (G__33700) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33698,else__25447__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25458__auto__,writer__25459__auto__,opts__25460__auto__){
var self__ = this;
var this__25458__auto____$1 = this;
var pr_pair__25461__auto__ = ((function (this__25458__auto____$1){
return (function (keyval__25462__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25459__auto__,cljs.core.pr_writer,""," ","",opts__25460__auto__,keyval__25462__auto__);
});})(this__25458__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25459__auto__,pr_pair__25461__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25460__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33697){
var self__ = this;
var G__33697__$1 = this;
return (new cljs.core.RecordIter((0),G__33697__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25442__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25448__auto__){
var self__ = this;
var this__25448__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25439__auto__){
var self__ = this;
var this__25439__auto____$1 = this;
var h__25257__auto__ = self__.__hash;
if(!((h__25257__auto__ == null))){
return h__25257__auto__;
} else {
var h__25257__auto____$1 = cljs.core.hash_imap.call(null,this__25439__auto____$1);
self__.__hash = h__25257__auto____$1;

return h__25257__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25440__auto__,other__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24810__auto__ = other__25441__auto__;
if(cljs.core.truth_(and__24810__auto__)){
var and__24810__auto____$1 = (this__25440__auto____$1.constructor === other__25441__auto__.constructor);
if(and__24810__auto____$1){
return cljs.core.equiv_map.call(null,this__25440__auto____$1,other__25441__auto__);
} else {
return and__24810__auto____$1;
}
} else {
return and__24810__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25453__auto__,k__25454__auto__){
var self__ = this;
var this__25453__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25454__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25453__auto____$1),self__.__meta),k__25454__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25454__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25451__auto__,k__25452__auto__,G__33697){
var self__ = this;
var this__25451__auto____$1 = this;
var pred__33701 = cljs.core.keyword_identical_QMARK_;
var expr__33702 = k__25452__auto__;
if(cljs.core.truth_(pred__33701.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33702))){
return (new devcards.core.IdentiyOptions(G__33697,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25452__auto__,G__33697),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25456__auto__){
var self__ = this;
var this__25456__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25443__auto__,G__33697){
var self__ = this;
var this__25443__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__33697,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25449__auto__,entry__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25450__auto__)){
return cljs.core._assoc.call(null,this__25449__auto____$1,cljs.core._nth.call(null,entry__25450__auto__,(0)),cljs.core._nth.call(null,entry__25450__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25449__auto____$1,entry__25450__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25478__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__33699){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33699),null,cljs.core.dissoc.call(null,G__33699,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__33705){
var map__33708 = p__33705;
var map__33708__$1 = ((((!((map__33708 == null)))?((((map__33708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33708):map__33708);
var devcard_opts = map__33708__$1;
var options = cljs.core.get.call(null,map__33708__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__33708,map__33708__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__33708,map__33708__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25444__auto__,k__25445__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return cljs.core._lookup.call(null,this__25444__auto____$1,k__25445__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25446__auto__,k33711,else__25447__auto__){
var self__ = this;
var this__25446__auto____$1 = this;
var G__33713 = (((k33711 instanceof cljs.core.Keyword))?k33711.fqn:null);
switch (G__33713) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33711,else__25447__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25458__auto__,writer__25459__auto__,opts__25460__auto__){
var self__ = this;
var this__25458__auto____$1 = this;
var pr_pair__25461__auto__ = ((function (this__25458__auto____$1){
return (function (keyval__25462__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25459__auto__,cljs.core.pr_writer,""," ","",opts__25460__auto__,keyval__25462__auto__);
});})(this__25458__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25459__auto__,pr_pair__25461__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25460__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33710){
var self__ = this;
var G__33710__$1 = this;
return (new cljs.core.RecordIter((0),G__33710__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25442__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25448__auto__){
var self__ = this;
var this__25448__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25439__auto__){
var self__ = this;
var this__25439__auto____$1 = this;
var h__25257__auto__ = self__.__hash;
if(!((h__25257__auto__ == null))){
return h__25257__auto__;
} else {
var h__25257__auto____$1 = cljs.core.hash_imap.call(null,this__25439__auto____$1);
self__.__hash = h__25257__auto____$1;

return h__25257__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25440__auto__,other__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24810__auto__ = other__25441__auto__;
if(cljs.core.truth_(and__24810__auto__)){
var and__24810__auto____$1 = (this__25440__auto____$1.constructor === other__25441__auto__.constructor);
if(and__24810__auto____$1){
return cljs.core.equiv_map.call(null,this__25440__auto____$1,other__25441__auto__);
} else {
return and__24810__auto____$1;
}
} else {
return and__24810__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25453__auto__,k__25454__auto__){
var self__ = this;
var this__25453__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25454__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25453__auto____$1),self__.__meta),k__25454__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25454__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25451__auto__,k__25452__auto__,G__33710){
var self__ = this;
var this__25451__auto____$1 = this;
var pred__33714 = cljs.core.keyword_identical_QMARK_;
var expr__33715 = k__25452__auto__;
if(cljs.core.truth_(pred__33714.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33715))){
return (new devcards.core.AtomLikeOptions(G__33710,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25452__auto__,G__33710),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25456__auto__){
var self__ = this;
var this__25456__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25443__auto__,G__33710){
var self__ = this;
var this__25443__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__33710,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25449__auto__,entry__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25450__auto__)){
return cljs.core._assoc.call(null,this__25449__auto____$1,cljs.core._nth.call(null,entry__25450__auto__,(0)),cljs.core._nth.call(null,entry__25450__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25449__auto____$1,entry__25450__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25478__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__33712){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33712),null,cljs.core.dissoc.call(null,G__33712,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25444__auto__,k__25445__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return cljs.core._lookup.call(null,this__25444__auto____$1,k__25445__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25446__auto__,k33721,else__25447__auto__){
var self__ = this;
var this__25446__auto____$1 = this;
var G__33723 = (((k33721 instanceof cljs.core.Keyword))?k33721.fqn:null);
switch (G__33723) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33721,else__25447__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25458__auto__,writer__25459__auto__,opts__25460__auto__){
var self__ = this;
var this__25458__auto____$1 = this;
var pr_pair__25461__auto__ = ((function (this__25458__auto____$1){
return (function (keyval__25462__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25459__auto__,cljs.core.pr_writer,""," ","",opts__25460__auto__,keyval__25462__auto__);
});})(this__25458__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25459__auto__,pr_pair__25461__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25460__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33720){
var self__ = this;
var G__33720__$1 = this;
return (new cljs.core.RecordIter((0),G__33720__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25442__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25448__auto__){
var self__ = this;
var this__25448__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25439__auto__){
var self__ = this;
var this__25439__auto____$1 = this;
var h__25257__auto__ = self__.__hash;
if(!((h__25257__auto__ == null))){
return h__25257__auto__;
} else {
var h__25257__auto____$1 = cljs.core.hash_imap.call(null,this__25439__auto____$1);
self__.__hash = h__25257__auto____$1;

return h__25257__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25440__auto__,other__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24810__auto__ = other__25441__auto__;
if(cljs.core.truth_(and__24810__auto__)){
var and__24810__auto____$1 = (this__25440__auto____$1.constructor === other__25441__auto__.constructor);
if(and__24810__auto____$1){
return cljs.core.equiv_map.call(null,this__25440__auto____$1,other__25441__auto__);
} else {
return and__24810__auto____$1;
}
} else {
return and__24810__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25453__auto__,k__25454__auto__){
var self__ = this;
var this__25453__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25454__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25453__auto____$1),self__.__meta),k__25454__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25454__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25451__auto__,k__25452__auto__,G__33720){
var self__ = this;
var this__25451__auto____$1 = this;
var pred__33724 = cljs.core.keyword_identical_QMARK_;
var expr__33725 = k__25452__auto__;
if(cljs.core.truth_(pred__33724.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33725))){
return (new devcards.core.EdnLikeOptions(G__33720,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25452__auto__,G__33720),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25456__auto__){
var self__ = this;
var this__25456__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25443__auto__,G__33720){
var self__ = this;
var this__25443__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__33720,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25449__auto__,entry__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25450__auto__)){
return cljs.core._assoc.call(null,this__25449__auto____$1,cljs.core._nth.call(null,entry__25450__auto__,(0)),cljs.core._nth.call(null,entry__25450__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25449__auto____$1,entry__25450__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25478__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__33722){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33722),null,cljs.core.dissoc.call(null,G__33722,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24810__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24810__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__24810__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__33739 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__33739 == null))){
if((false) || (G__33739.devcards$core$IDevcard$)){
return true;
} else {
if((!G__33739.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33739);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33739);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__33742 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__33742__$1 = ((((!((map__33742 == null)))?((((map__33742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33742):map__33742);
var history = cljs.core.get.call(null,map__33742__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33742__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33746 = cljs.core.deref.call(null,history_atom);
var map__33746__$1 = ((((!((map__33746 == null)))?((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var history = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33750 = cljs.core.deref.call(null,history_atom);
var map__33750__$1 = ((((!((map__33750 == null)))?((((map__33750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33750):map__33750);
var history = cljs.core.get.call(null,map__33750__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33750__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33754 = cljs.core.deref.call(null,history_atom);
var map__33754__$1 = ((((!((map__33754 == null)))?((((map__33754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33754):map__33754);
var history = cljs.core.get.call(null,map__33754__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25656__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25656__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24810__auto__ = data_atom;
if(cljs.core.truth_(and__24810__auto__)){
return id;
} else {
return and__24810__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__33756){
var map__33757 = p__33756;
var map__33757__$1 = ((((!((map__33757 == null)))?((((map__33757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33757):map__33757);
var ha = map__33757__$1;
var pointer = cljs.core.get.call(null,map__33757__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__33757__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__33757__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__24822__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24822__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_33772 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_33772;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25751__auto__,method_table__25747__auto__,prefer_table__25748__auto__,method_cache__25749__auto__,cached_hierarchy__25750__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs33773 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33773))?sablono.interpreter.attributes.call(null,attrs33773):null),((cljs.core.map_QMARK_.call(null,attrs33773))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33773)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__33774,body){
var map__33778 = p__33774;
var map__33778__$1 = ((((!((map__33778 == null)))?((((map__33778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33778):map__33778);
var message = cljs.core.get.call(null,map__33778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs33780 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33780))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs33780)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs33780))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33780)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__33781){
var map__33789 = p__33781;
var map__33789__$1 = ((((!((map__33789 == null)))?((((map__33789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33789):map__33789);
var m = map__33789__$1;
var expected = cljs.core.get.call(null,map__33789__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__33789__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__33789__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs33791 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33791))?sablono.interpreter.attributes.call(null,attrs33791):null),((cljs.core.map_QMARK_.call(null,attrs33791))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33791),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs33798 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33798))?sablono.interpreter.attributes.call(null,attrs33798):null),((cljs.core.map_QMARK_.call(null,attrs33798))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33798)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs33799 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33799))?sablono.interpreter.attributes.call(null,attrs33799):null),((cljs.core.map_QMARK_.call(null,attrs33799))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33799)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__33800){
var map__33801 = p__33800;
var map__33801__$1 = ((((!((map__33801 == null)))?((((map__33801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33801):map__33801);
var testing_contexts = cljs.core.get.call(null,map__33801__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs33803 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__33801,map__33801__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__33801,map__33801__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25656__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25656__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33803))?sablono.interpreter.attributes.call(null,attrs33803):null),((cljs.core.map_QMARK_.call(null,attrs33803))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33803)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs33812 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__33813,p__33814){
var map__33815 = p__33813;
var map__33815__$1 = ((((!((map__33815 == null)))?((((map__33815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33815):map__33815);
var last_context = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__33816 = p__33814;
var i = cljs.core.nth.call(null,vec__33816,(0),null);
var t = cljs.core.nth.call(null,vec__33816,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25656__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25656__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33812))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs33812)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs33812))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33812)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__33832){
var map__33833 = p__33832;
var map__33833__$1 = ((((!((map__33833 == null)))?((((map__33833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33833):map__33833);
var type = cljs.core.get.call(null,map__33833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__33831 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__33831__$1 = ((((!((map__33831 == null)))?((((map__33831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33831):map__33831);
var fail = cljs.core.get.call(null,map__33831__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__33831__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__33831__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1){
return (function (p__33836){
var map__33837 = p__33836;
var map__33837__$1 = ((((!((map__33837 == null)))?((((map__33837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33837):map__33837);
var type = cljs.core.get.call(null,map__33837__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1){
return (function (p__33839){
var map__33840 = p__33839;
var map__33840__$1 = ((((!((map__33840 == null)))?((((map__33840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33840):map__33840);
var type = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33831,map__33831__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24822__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_33930){
var state_val_33931 = (state_33930[(1)]);
if((state_val_33931 === (7))){
var state_33930__$1 = state_33930;
var statearr_33932_33981 = state_33930__$1;
(statearr_33932_33981[(2)] = false);

(statearr_33932_33981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (20))){
var inst_33869 = (state_33930[(7)]);
var inst_33888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33869);
var state_33930__$1 = state_33930;
var statearr_33933_33982 = state_33930__$1;
(statearr_33933_33982[(2)] = inst_33888);

(statearr_33933_33982[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (27))){
var inst_33893 = (state_33930[(8)]);
var inst_33905 = (state_33930[(9)]);
var inst_33909 = inst_33893.call(null,inst_33905);
var state_33930__$1 = state_33930;
var statearr_33934_33983 = state_33930__$1;
(statearr_33934_33983[(2)] = inst_33909);

(statearr_33934_33983[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (1))){
var state_33930__$1 = state_33930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33930__$1,(2),devcards.core.test_channel);
} else {
if((state_val_33931 === (24))){
var state_33930__$1 = state_33930;
var statearr_33935_33984 = state_33930__$1;
(statearr_33935_33984[(2)] = null);

(statearr_33935_33984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (4))){
var state_33930__$1 = state_33930;
var statearr_33936_33985 = state_33930__$1;
(statearr_33936_33985[(2)] = false);

(statearr_33936_33985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (15))){
var state_33930__$1 = state_33930;
var statearr_33937_33986 = state_33930__$1;
(statearr_33937_33986[(2)] = false);

(statearr_33937_33986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (21))){
var inst_33869 = (state_33930[(7)]);
var state_33930__$1 = state_33930;
var statearr_33938_33987 = state_33930__$1;
(statearr_33938_33987[(2)] = inst_33869);

(statearr_33938_33987[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (13))){
var inst_33928 = (state_33930[(2)]);
var state_33930__$1 = state_33930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33930__$1,inst_33928);
} else {
if((state_val_33931 === (22))){
var inst_33892 = (state_33930[(10)]);
var inst_33891 = (state_33930[(2)]);
var inst_33892__$1 = cljs.core.get.call(null,inst_33891,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33893 = cljs.core.get.call(null,inst_33891,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_33930__$1 = (function (){var statearr_33939 = state_33930;
(statearr_33939[(8)] = inst_33893);

(statearr_33939[(10)] = inst_33892__$1);

return statearr_33939;
})();
if(cljs.core.truth_(inst_33892__$1)){
var statearr_33940_33988 = state_33930__$1;
(statearr_33940_33988[(1)] = (23));

} else {
var statearr_33941_33989 = state_33930__$1;
(statearr_33941_33989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (29))){
var inst_33919 = (state_33930[(2)]);
var inst_33920 = cljs.test.clear_env_BANG_.call(null);
var state_33930__$1 = (function (){var statearr_33942 = state_33930;
(statearr_33942[(11)] = inst_33920);

(statearr_33942[(12)] = inst_33919);

return statearr_33942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33930__$1,(30),devcards.core.test_channel);
} else {
if((state_val_33931 === (6))){
var state_33930__$1 = state_33930;
var statearr_33943_33990 = state_33930__$1;
(statearr_33943_33990[(2)] = true);

(statearr_33943_33990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (28))){
var inst_33893 = (state_33930[(8)]);
var inst_33911 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_33912 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_33913 = cljs.core.PersistentHashMap.fromArrays(inst_33911,inst_33912);
var inst_33914 = devcards.core.collect_test.call(null,inst_33913);
var inst_33915 = cljs.test.get_current_env.call(null);
var inst_33916 = cljs.core.assoc.call(null,inst_33915,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_33917 = inst_33893.call(null,inst_33916);
var state_33930__$1 = (function (){var statearr_33944 = state_33930;
(statearr_33944[(13)] = inst_33914);

return statearr_33944;
})();
var statearr_33945_33991 = state_33930__$1;
(statearr_33945_33991[(2)] = inst_33917);

(statearr_33945_33991[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (25))){
var inst_33926 = (state_33930[(2)]);
var state_33930__$1 = state_33930;
var statearr_33946_33992 = state_33930__$1;
(statearr_33946_33992[(2)] = inst_33926);

(statearr_33946_33992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (17))){
var state_33930__$1 = state_33930;
var statearr_33947_33993 = state_33930__$1;
(statearr_33947_33993[(2)] = true);

(statearr_33947_33993[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (3))){
var inst_33846 = (state_33930[(14)]);
var inst_33851 = inst_33846.cljs$lang$protocol_mask$partition0$;
var inst_33852 = (inst_33851 & (64));
var inst_33853 = inst_33846.cljs$core$ISeq$;
var inst_33854 = (inst_33852) || (inst_33853);
var state_33930__$1 = state_33930;
if(cljs.core.truth_(inst_33854)){
var statearr_33948_33994 = state_33930__$1;
(statearr_33948_33994[(1)] = (6));

} else {
var statearr_33949_33995 = state_33930__$1;
(statearr_33949_33995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (12))){
var inst_33869 = (state_33930[(7)]);
var inst_33873 = (inst_33869 == null);
var inst_33874 = cljs.core.not.call(null,inst_33873);
var state_33930__$1 = state_33930;
if(inst_33874){
var statearr_33950_33996 = state_33930__$1;
(statearr_33950_33996[(1)] = (14));

} else {
var statearr_33951_33997 = state_33930__$1;
(statearr_33951_33997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (2))){
var inst_33846 = (state_33930[(14)]);
var inst_33846__$1 = (state_33930[(2)]);
var inst_33848 = (inst_33846__$1 == null);
var inst_33849 = cljs.core.not.call(null,inst_33848);
var state_33930__$1 = (function (){var statearr_33952 = state_33930;
(statearr_33952[(14)] = inst_33846__$1);

return statearr_33952;
})();
if(inst_33849){
var statearr_33953_33998 = state_33930__$1;
(statearr_33953_33998[(1)] = (3));

} else {
var statearr_33954_33999 = state_33930__$1;
(statearr_33954_33999[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (23))){
var inst_33898 = (state_33930[(15)]);
var inst_33892 = (state_33930[(10)]);
var inst_33898__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_33899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33900 = devcards.core.run_card_tests.call(null,inst_33892);
var inst_33901 = [inst_33900,inst_33898__$1];
var inst_33902 = (new cljs.core.PersistentVector(null,2,(5),inst_33899,inst_33901,null));
var state_33930__$1 = (function (){var statearr_33955 = state_33930;
(statearr_33955[(15)] = inst_33898__$1);

return statearr_33955;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33930__$1,(26),inst_33902);
} else {
if((state_val_33931 === (19))){
var inst_33883 = (state_33930[(2)]);
var state_33930__$1 = state_33930;
var statearr_33956_34000 = state_33930__$1;
(statearr_33956_34000[(2)] = inst_33883);

(statearr_33956_34000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (11))){
var inst_33846 = (state_33930[(14)]);
var inst_33866 = (state_33930[(2)]);
var inst_33867 = cljs.core.get.call(null,inst_33866,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33868 = cljs.core.get.call(null,inst_33866,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_33869 = inst_33846;
var state_33930__$1 = (function (){var statearr_33957 = state_33930;
(statearr_33957[(7)] = inst_33869);

(statearr_33957[(16)] = inst_33868);

(statearr_33957[(17)] = inst_33867);

return statearr_33957;
})();
var statearr_33958_34001 = state_33930__$1;
(statearr_33958_34001[(2)] = null);

(statearr_33958_34001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (9))){
var inst_33846 = (state_33930[(14)]);
var inst_33863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33846);
var state_33930__$1 = state_33930;
var statearr_33959_34002 = state_33930__$1;
(statearr_33959_34002[(2)] = inst_33863);

(statearr_33959_34002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (5))){
var inst_33861 = (state_33930[(2)]);
var state_33930__$1 = state_33930;
if(cljs.core.truth_(inst_33861)){
var statearr_33960_34003 = state_33930__$1;
(statearr_33960_34003[(1)] = (9));

} else {
var statearr_33961_34004 = state_33930__$1;
(statearr_33961_34004[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (14))){
var inst_33869 = (state_33930[(7)]);
var inst_33876 = inst_33869.cljs$lang$protocol_mask$partition0$;
var inst_33877 = (inst_33876 & (64));
var inst_33878 = inst_33869.cljs$core$ISeq$;
var inst_33879 = (inst_33877) || (inst_33878);
var state_33930__$1 = state_33930;
if(cljs.core.truth_(inst_33879)){
var statearr_33962_34005 = state_33930__$1;
(statearr_33962_34005[(1)] = (17));

} else {
var statearr_33963_34006 = state_33930__$1;
(statearr_33963_34006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (26))){
var inst_33898 = (state_33930[(15)]);
var inst_33904 = (state_33930[(2)]);
var inst_33905 = cljs.core.nth.call(null,inst_33904,(0),null);
var inst_33906 = cljs.core.nth.call(null,inst_33904,(1),null);
var inst_33907 = cljs.core.not_EQ_.call(null,inst_33906,inst_33898);
var state_33930__$1 = (function (){var statearr_33964 = state_33930;
(statearr_33964[(9)] = inst_33905);

return statearr_33964;
})();
if(inst_33907){
var statearr_33965_34007 = state_33930__$1;
(statearr_33965_34007[(1)] = (27));

} else {
var statearr_33966_34008 = state_33930__$1;
(statearr_33966_34008[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (16))){
var inst_33886 = (state_33930[(2)]);
var state_33930__$1 = state_33930;
if(cljs.core.truth_(inst_33886)){
var statearr_33967_34009 = state_33930__$1;
(statearr_33967_34009[(1)] = (20));

} else {
var statearr_33968_34010 = state_33930__$1;
(statearr_33968_34010[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (30))){
var inst_33922 = (state_33930[(2)]);
var inst_33869 = inst_33922;
var state_33930__$1 = (function (){var statearr_33969 = state_33930;
(statearr_33969[(7)] = inst_33869);

return statearr_33969;
})();
var statearr_33970_34011 = state_33930__$1;
(statearr_33970_34011[(2)] = null);

(statearr_33970_34011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (10))){
var inst_33846 = (state_33930[(14)]);
var state_33930__$1 = state_33930;
var statearr_33971_34012 = state_33930__$1;
(statearr_33971_34012[(2)] = inst_33846);

(statearr_33971_34012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (18))){
var state_33930__$1 = state_33930;
var statearr_33972_34013 = state_33930__$1;
(statearr_33972_34013[(2)] = false);

(statearr_33972_34013[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (8))){
var inst_33858 = (state_33930[(2)]);
var state_33930__$1 = state_33930;
var statearr_33973_34014 = state_33930__$1;
(statearr_33973_34014[(2)] = inst_33858);

(statearr_33973_34014[(1)] = (5));


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
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var devcards$core$state_machine__29918__auto__ = null;
var devcards$core$state_machine__29918__auto____0 = (function (){
var statearr_33977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33977[(0)] = devcards$core$state_machine__29918__auto__);

(statearr_33977[(1)] = (1));

return statearr_33977;
});
var devcards$core$state_machine__29918__auto____1 = (function (state_33930){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_33930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e33978){if((e33978 instanceof Object)){
var ex__29921__auto__ = e33978;
var statearr_33979_34015 = state_33930;
(statearr_33979_34015[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34016 = state_33930;
state_33930 = G__34016;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
devcards$core$state_machine__29918__auto__ = function(state_33930){
switch(arguments.length){
case 0:
return devcards$core$state_machine__29918__auto____0.call(this);
case 1:
return devcards$core$state_machine__29918__auto____1.call(this,state_33930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__29918__auto____0;
devcards$core$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__29918__auto____1;
return devcards$core$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_33980 = f__30030__auto__.call(null);
(statearr_33980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__32899__auto___34021 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__32899__auto___34021);
}

var seq__34017_34022 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34018_34023 = null;
var count__34019_34024 = (0);
var i__34020_34025 = (0);
while(true){
if((i__34020_34025 < count__34019_34024)){
var property__32900__auto___34026 = cljs.core._nth.call(null,chunk__34018_34023,i__34020_34025);
if(cljs.core.truth_((base__32899__auto___34021[property__32900__auto___34026]))){
(devcards.core.TestDevcard.prototype[property__32900__auto___34026] = (base__32899__auto___34021[property__32900__auto___34026]));
} else {
}

var G__34027 = seq__34017_34022;
var G__34028 = chunk__34018_34023;
var G__34029 = count__34019_34024;
var G__34030 = (i__34020_34025 + (1));
seq__34017_34022 = G__34027;
chunk__34018_34023 = G__34028;
count__34019_34024 = G__34029;
i__34020_34025 = G__34030;
continue;
} else {
var temp__4657__auto___34031 = cljs.core.seq.call(null,seq__34017_34022);
if(temp__4657__auto___34031){
var seq__34017_34032__$1 = temp__4657__auto___34031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34017_34032__$1)){
var c__25633__auto___34033 = cljs.core.chunk_first.call(null,seq__34017_34032__$1);
var G__34034 = cljs.core.chunk_rest.call(null,seq__34017_34032__$1);
var G__34035 = c__25633__auto___34033;
var G__34036 = cljs.core.count.call(null,c__25633__auto___34033);
var G__34037 = (0);
seq__34017_34022 = G__34034;
chunk__34018_34023 = G__34035;
count__34019_34024 = G__34036;
i__34020_34025 = G__34037;
continue;
} else {
var property__32900__auto___34038 = cljs.core.first.call(null,seq__34017_34032__$1);
if(cljs.core.truth_((base__32899__auto___34021[property__32900__auto___34038]))){
(devcards.core.TestDevcard.prototype[property__32900__auto___34038] = (base__32899__auto___34021[property__32900__auto___34038]));
} else {
}

var G__34039 = cljs.core.next.call(null,seq__34017_34032__$1);
var G__34040 = null;
var G__34041 = (0);
var G__34042 = (0);
seq__34017_34022 = G__34039;
chunk__34018_34023 = G__34040;
count__34019_34024 = G__34041;
i__34020_34025 = G__34042;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25904__auto__ = [];
var len__25897__auto___34047 = arguments.length;
var i__25898__auto___34048 = (0);
while(true){
if((i__25898__auto___34048 < len__25897__auto___34047)){
args__25904__auto__.push((arguments[i__25898__auto___34048]));

var G__34049 = (i__25898__auto___34048 + (1));
i__25898__auto___34048 = G__34049;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core34044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core34044 = (function (test_thunks,meta34045){
this.test_thunks = test_thunks;
this.meta34045 = meta34045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core34044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34046,meta34045__$1){
var self__ = this;
var _34046__$1 = this;
return (new devcards.core.t_devcards$core34044(self__.test_thunks,meta34045__$1));
});

devcards.core.t_devcards$core34044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34046){
var self__ = this;
var _34046__$1 = this;
return self__.meta34045;
});

devcards.core.t_devcards$core34044.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core34044.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core34044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta34045","meta34045",-44691008,null)], null);
});

devcards.core.t_devcards$core34044.cljs$lang$type = true;

devcards.core.t_devcards$core34044.cljs$lang$ctorStr = "devcards.core/t_devcards$core34044";

devcards.core.t_devcards$core34044.cljs$lang$ctorPrWriter = (function (this__25428__auto__,writer__25429__auto__,opt__25430__auto__){
return cljs.core._write.call(null,writer__25429__auto__,"devcards.core/t_devcards$core34044");
});

devcards.core.__GT_t_devcards$core34044 = (function devcards$core$__GT_t_devcards$core34044(test_thunks__$1,meta34045){
return (new devcards.core.t_devcards$core34044(test_thunks__$1,meta34045));
});

}

return (new devcards.core.t_devcards$core34044(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq34043){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34043));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs34051 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34051))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs34051)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs34051))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34051)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs34053 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34053))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs34053)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs34053))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34053)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_34083){
var state_val_34084 = (state_34083[(1)]);
if((state_val_34084 === (1))){
var inst_34074 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34083__$1,(2),inst_34074);
} else {
if((state_val_34084 === (2))){
var inst_34076 = (state_34083[(2)]);
var inst_34077 = cljs.core.async.timeout.call(null,(100));
var state_34083__$1 = (function (){var statearr_34085 = state_34083;
(statearr_34085[(7)] = inst_34076);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34083__$1,(3),inst_34077);
} else {
if((state_val_34084 === (3))){
var inst_34079 = (state_34083[(2)]);
var inst_34080 = (function (){return ((function (inst_34079,state_val_34084,c__30029__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_34079,state_val_34084,c__30029__auto__))
})();
var inst_34081 = setTimeout(inst_34080,(0));
var state_34083__$1 = (function (){var statearr_34086 = state_34083;
(statearr_34086[(8)] = inst_34079);

return statearr_34086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34083__$1,inst_34081);
} else {
return null;
}
}
}
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__29918__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__29918__auto____0 = (function (){
var statearr_34090 = [null,null,null,null,null,null,null,null,null];
(statearr_34090[(0)] = devcards$core$mount_namespace_$_state_machine__29918__auto__);

(statearr_34090[(1)] = (1));

return statearr_34090;
});
var devcards$core$mount_namespace_$_state_machine__29918__auto____1 = (function (state_34083){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_34083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e34091){if((e34091 instanceof Object)){
var ex__29921__auto__ = e34091;
var statearr_34092_34094 = state_34083;
(statearr_34092_34094[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_34083;
state_34083 = G__34095;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__29918__auto__ = function(state_34083){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__29918__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__29918__auto____1.call(this,state_34083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__29918__auto____0;
devcards$core$mount_namespace_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__29918__auto____1;
return devcards$core$mount_namespace_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_34093 = f__30030__auto__.call(null);
(statearr_34093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_34093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1482768546264