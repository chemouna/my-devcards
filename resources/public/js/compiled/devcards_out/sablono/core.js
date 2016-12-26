// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26746__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26743 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26744 = cljs.core.seq.call(null,vec__26743);
var first__26745 = cljs.core.first.call(null,seq__26744);
var seq__26744__$1 = cljs.core.next.call(null,seq__26744);
var tag = first__26745;
var body = seq__26744__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26747__i = 0, G__26747__a = new Array(arguments.length -  0);
while (G__26747__i < G__26747__a.length) {G__26747__a[G__26747__i] = arguments[G__26747__i + 0]; ++G__26747__i;}
  args = new cljs.core.IndexedSeq(G__26747__a,0);
} 
return G__26746__delegate.call(this,args);};
G__26746.cljs$lang$maxFixedArity = 0;
G__26746.cljs$lang$applyTo = (function (arglist__26748){
var args = cljs.core.seq(arglist__26748);
return G__26746__delegate(args);
});
G__26746.cljs$core$IFn$_invoke$arity$variadic = G__26746__delegate;
return G__26746;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25602__auto__ = (function sablono$core$update_arglists_$_iter__26753(s__26754){
return (new cljs.core.LazySeq(null,(function (){
var s__26754__$1 = s__26754;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26754__$1);
if(temp__4657__auto__){
var s__26754__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26754__$2)){
var c__25600__auto__ = cljs.core.chunk_first.call(null,s__26754__$2);
var size__25601__auto__ = cljs.core.count.call(null,c__25600__auto__);
var b__26756 = cljs.core.chunk_buffer.call(null,size__25601__auto__);
if((function (){var i__26755 = (0);
while(true){
if((i__26755 < size__25601__auto__)){
var args = cljs.core._nth.call(null,c__25600__auto__,i__26755);
cljs.core.chunk_append.call(null,b__26756,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26757 = (i__26755 + (1));
i__26755 = G__26757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26756),sablono$core$update_arglists_$_iter__26753.call(null,cljs.core.chunk_rest.call(null,s__26754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26756),null);
}
} else {
var args = cljs.core.first.call(null,s__26754__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26753.call(null,cljs.core.rest.call(null,s__26754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25602__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25904__auto__ = [];
var len__25897__auto___26763 = arguments.length;
var i__25898__auto___26764 = (0);
while(true){
if((i__25898__auto___26764 < len__25897__auto___26763)){
args__25904__auto__.push((arguments[i__25898__auto___26764]));

var G__26765 = (i__25898__auto___26764 + (1));
i__25898__auto___26764 = G__26765;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((0) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25905__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25602__auto__ = (function sablono$core$iter__26759(s__26760){
return (new cljs.core.LazySeq(null,(function (){
var s__26760__$1 = s__26760;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26760__$1);
if(temp__4657__auto__){
var s__26760__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26760__$2)){
var c__25600__auto__ = cljs.core.chunk_first.call(null,s__26760__$2);
var size__25601__auto__ = cljs.core.count.call(null,c__25600__auto__);
var b__26762 = cljs.core.chunk_buffer.call(null,size__25601__auto__);
if((function (){var i__26761 = (0);
while(true){
if((i__26761 < size__25601__auto__)){
var style = cljs.core._nth.call(null,c__25600__auto__,i__26761);
cljs.core.chunk_append.call(null,b__26762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26766 = (i__26761 + (1));
i__26761 = G__26766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26762),sablono$core$iter__26759.call(null,cljs.core.chunk_rest.call(null,s__26760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26762),null);
}
} else {
var style = cljs.core.first.call(null,s__26760__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26759.call(null,cljs.core.rest.call(null,s__26760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25602__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26758){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26758));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26767 = (function sablono$core$link_to26767(var_args){
var args__25904__auto__ = [];
var len__25897__auto___26770 = arguments.length;
var i__25898__auto___26771 = (0);
while(true){
if((i__25898__auto___26771 < len__25897__auto___26770)){
args__25904__auto__.push((arguments[i__25898__auto___26771]));

var G__26772 = (i__25898__auto___26771 + (1));
i__25898__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((1) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26767.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25905__auto__);
});

sablono.core.link_to26767.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26767.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26767.cljs$lang$applyTo = (function (seq26768){
var G__26769 = cljs.core.first.call(null,seq26768);
var seq26768__$1 = cljs.core.next.call(null,seq26768);
return sablono.core.link_to26767.cljs$core$IFn$_invoke$arity$variadic(G__26769,seq26768__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26767);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26773 = (function sablono$core$mail_to26773(var_args){
var args__25904__auto__ = [];
var len__25897__auto___26780 = arguments.length;
var i__25898__auto___26781 = (0);
while(true){
if((i__25898__auto___26781 < len__25897__auto___26780)){
args__25904__auto__.push((arguments[i__25898__auto___26781]));

var G__26782 = (i__25898__auto___26781 + (1));
i__25898__auto___26781 = G__26782;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((1) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26773.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25905__auto__);
});

sablono.core.mail_to26773.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26776){
var vec__26777 = p__26776;
var content = cljs.core.nth.call(null,vec__26777,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24822__auto__ = content;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26773.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26773.cljs$lang$applyTo = (function (seq26774){
var G__26775 = cljs.core.first.call(null,seq26774);
var seq26774__$1 = cljs.core.next.call(null,seq26774);
return sablono.core.mail_to26773.cljs$core$IFn$_invoke$arity$variadic(G__26775,seq26774__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26773);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26783 = (function sablono$core$unordered_list26783(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25602__auto__ = (function sablono$core$unordered_list26783_$_iter__26788(s__26789){
return (new cljs.core.LazySeq(null,(function (){
var s__26789__$1 = s__26789;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26789__$1);
if(temp__4657__auto__){
var s__26789__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26789__$2)){
var c__25600__auto__ = cljs.core.chunk_first.call(null,s__26789__$2);
var size__25601__auto__ = cljs.core.count.call(null,c__25600__auto__);
var b__26791 = cljs.core.chunk_buffer.call(null,size__25601__auto__);
if((function (){var i__26790 = (0);
while(true){
if((i__26790 < size__25601__auto__)){
var x = cljs.core._nth.call(null,c__25600__auto__,i__26790);
cljs.core.chunk_append.call(null,b__26791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26792 = (i__26790 + (1));
i__26790 = G__26792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),sablono$core$unordered_list26783_$_iter__26788.call(null,cljs.core.chunk_rest.call(null,s__26789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),null);
}
} else {
var x = cljs.core.first.call(null,s__26789__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26783_$_iter__26788.call(null,cljs.core.rest.call(null,s__26789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25602__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26783);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26793 = (function sablono$core$ordered_list26793(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25602__auto__ = (function sablono$core$ordered_list26793_$_iter__26798(s__26799){
return (new cljs.core.LazySeq(null,(function (){
var s__26799__$1 = s__26799;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26799__$1);
if(temp__4657__auto__){
var s__26799__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26799__$2)){
var c__25600__auto__ = cljs.core.chunk_first.call(null,s__26799__$2);
var size__25601__auto__ = cljs.core.count.call(null,c__25600__auto__);
var b__26801 = cljs.core.chunk_buffer.call(null,size__25601__auto__);
if((function (){var i__26800 = (0);
while(true){
if((i__26800 < size__25601__auto__)){
var x = cljs.core._nth.call(null,c__25600__auto__,i__26800);
cljs.core.chunk_append.call(null,b__26801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26802 = (i__26800 + (1));
i__26800 = G__26802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26801),sablono$core$ordered_list26793_$_iter__26798.call(null,cljs.core.chunk_rest.call(null,s__26799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26801),null);
}
} else {
var x = cljs.core.first.call(null,s__26799__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26793_$_iter__26798.call(null,cljs.core.rest.call(null,s__26799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25602__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26793);
/**
 * Create an image element.
 */
sablono.core.image26803 = (function sablono$core$image26803(var_args){
var args26804 = [];
var len__25897__auto___26807 = arguments.length;
var i__25898__auto___26808 = (0);
while(true){
if((i__25898__auto___26808 < len__25897__auto___26807)){
args26804.push((arguments[i__25898__auto___26808]));

var G__26809 = (i__25898__auto___26808 + (1));
i__25898__auto___26808 = G__26809;
continue;
} else {
}
break;
}

var G__26806 = args26804.length;
switch (G__26806) {
case 1:
return sablono.core.image26803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26804.length)].join('')));

}
});

sablono.core.image26803.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26803.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26803.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26803);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26811_SHARP_,p2__26812_SHARP_){
return [cljs.core.str(p1__26811_SHARP_),cljs.core.str("["),cljs.core.str(p2__26812_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26813_SHARP_,p2__26814_SHARP_){
return [cljs.core.str(p1__26813_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26814_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24822__auto__ = value;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26815 = (function sablono$core$color_field26815(var_args){
var args26816 = [];
var len__25897__auto___26883 = arguments.length;
var i__25898__auto___26884 = (0);
while(true){
if((i__25898__auto___26884 < len__25897__auto___26883)){
args26816.push((arguments[i__25898__auto___26884]));

var G__26885 = (i__25898__auto___26884 + (1));
i__25898__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var G__26818 = args26816.length;
switch (G__26818) {
case 1:
return sablono.core.color_field26815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26816.length)].join('')));

}
});

sablono.core.color_field26815.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.color_field26815.call(null,name__26730__auto__,null);
});

sablono.core.color_field26815.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.color_field26815.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26815);

/**
 * Creates a date input field.
 */
sablono.core.date_field26819 = (function sablono$core$date_field26819(var_args){
var args26820 = [];
var len__25897__auto___26887 = arguments.length;
var i__25898__auto___26888 = (0);
while(true){
if((i__25898__auto___26888 < len__25897__auto___26887)){
args26820.push((arguments[i__25898__auto___26888]));

var G__26889 = (i__25898__auto___26888 + (1));
i__25898__auto___26888 = G__26889;
continue;
} else {
}
break;
}

var G__26822 = args26820.length;
switch (G__26822) {
case 1:
return sablono.core.date_field26819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26820.length)].join('')));

}
});

sablono.core.date_field26819.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.date_field26819.call(null,name__26730__auto__,null);
});

sablono.core.date_field26819.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.date_field26819.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26819);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26823 = (function sablono$core$datetime_field26823(var_args){
var args26824 = [];
var len__25897__auto___26891 = arguments.length;
var i__25898__auto___26892 = (0);
while(true){
if((i__25898__auto___26892 < len__25897__auto___26891)){
args26824.push((arguments[i__25898__auto___26892]));

var G__26893 = (i__25898__auto___26892 + (1));
i__25898__auto___26892 = G__26893;
continue;
} else {
}
break;
}

var G__26826 = args26824.length;
switch (G__26826) {
case 1:
return sablono.core.datetime_field26823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26824.length)].join('')));

}
});

sablono.core.datetime_field26823.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.datetime_field26823.call(null,name__26730__auto__,null);
});

sablono.core.datetime_field26823.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.datetime_field26823.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26823);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26827 = (function sablono$core$datetime_local_field26827(var_args){
var args26828 = [];
var len__25897__auto___26895 = arguments.length;
var i__25898__auto___26896 = (0);
while(true){
if((i__25898__auto___26896 < len__25897__auto___26895)){
args26828.push((arguments[i__25898__auto___26896]));

var G__26897 = (i__25898__auto___26896 + (1));
i__25898__auto___26896 = G__26897;
continue;
} else {
}
break;
}

var G__26830 = args26828.length;
switch (G__26830) {
case 1:
return sablono.core.datetime_local_field26827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26828.length)].join('')));

}
});

sablono.core.datetime_local_field26827.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.datetime_local_field26827.call(null,name__26730__auto__,null);
});

sablono.core.datetime_local_field26827.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.datetime_local_field26827.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26827);

/**
 * Creates a email input field.
 */
sablono.core.email_field26831 = (function sablono$core$email_field26831(var_args){
var args26832 = [];
var len__25897__auto___26899 = arguments.length;
var i__25898__auto___26900 = (0);
while(true){
if((i__25898__auto___26900 < len__25897__auto___26899)){
args26832.push((arguments[i__25898__auto___26900]));

var G__26901 = (i__25898__auto___26900 + (1));
i__25898__auto___26900 = G__26901;
continue;
} else {
}
break;
}

var G__26834 = args26832.length;
switch (G__26834) {
case 1:
return sablono.core.email_field26831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26832.length)].join('')));

}
});

sablono.core.email_field26831.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.email_field26831.call(null,name__26730__auto__,null);
});

sablono.core.email_field26831.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.email_field26831.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26831);

/**
 * Creates a file input field.
 */
sablono.core.file_field26835 = (function sablono$core$file_field26835(var_args){
var args26836 = [];
var len__25897__auto___26903 = arguments.length;
var i__25898__auto___26904 = (0);
while(true){
if((i__25898__auto___26904 < len__25897__auto___26903)){
args26836.push((arguments[i__25898__auto___26904]));

var G__26905 = (i__25898__auto___26904 + (1));
i__25898__auto___26904 = G__26905;
continue;
} else {
}
break;
}

var G__26838 = args26836.length;
switch (G__26838) {
case 1:
return sablono.core.file_field26835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26836.length)].join('')));

}
});

sablono.core.file_field26835.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.file_field26835.call(null,name__26730__auto__,null);
});

sablono.core.file_field26835.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.file_field26835.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26835);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26839 = (function sablono$core$hidden_field26839(var_args){
var args26840 = [];
var len__25897__auto___26907 = arguments.length;
var i__25898__auto___26908 = (0);
while(true){
if((i__25898__auto___26908 < len__25897__auto___26907)){
args26840.push((arguments[i__25898__auto___26908]));

var G__26909 = (i__25898__auto___26908 + (1));
i__25898__auto___26908 = G__26909;
continue;
} else {
}
break;
}

var G__26842 = args26840.length;
switch (G__26842) {
case 1:
return sablono.core.hidden_field26839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26840.length)].join('')));

}
});

sablono.core.hidden_field26839.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.hidden_field26839.call(null,name__26730__auto__,null);
});

sablono.core.hidden_field26839.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.hidden_field26839.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26839);

/**
 * Creates a month input field.
 */
sablono.core.month_field26843 = (function sablono$core$month_field26843(var_args){
var args26844 = [];
var len__25897__auto___26911 = arguments.length;
var i__25898__auto___26912 = (0);
while(true){
if((i__25898__auto___26912 < len__25897__auto___26911)){
args26844.push((arguments[i__25898__auto___26912]));

var G__26913 = (i__25898__auto___26912 + (1));
i__25898__auto___26912 = G__26913;
continue;
} else {
}
break;
}

var G__26846 = args26844.length;
switch (G__26846) {
case 1:
return sablono.core.month_field26843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26844.length)].join('')));

}
});

sablono.core.month_field26843.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.month_field26843.call(null,name__26730__auto__,null);
});

sablono.core.month_field26843.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.month_field26843.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26843);

/**
 * Creates a number input field.
 */
sablono.core.number_field26847 = (function sablono$core$number_field26847(var_args){
var args26848 = [];
var len__25897__auto___26915 = arguments.length;
var i__25898__auto___26916 = (0);
while(true){
if((i__25898__auto___26916 < len__25897__auto___26915)){
args26848.push((arguments[i__25898__auto___26916]));

var G__26917 = (i__25898__auto___26916 + (1));
i__25898__auto___26916 = G__26917;
continue;
} else {
}
break;
}

var G__26850 = args26848.length;
switch (G__26850) {
case 1:
return sablono.core.number_field26847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26848.length)].join('')));

}
});

sablono.core.number_field26847.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.number_field26847.call(null,name__26730__auto__,null);
});

sablono.core.number_field26847.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.number_field26847.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26847);

/**
 * Creates a password input field.
 */
sablono.core.password_field26851 = (function sablono$core$password_field26851(var_args){
var args26852 = [];
var len__25897__auto___26919 = arguments.length;
var i__25898__auto___26920 = (0);
while(true){
if((i__25898__auto___26920 < len__25897__auto___26919)){
args26852.push((arguments[i__25898__auto___26920]));

var G__26921 = (i__25898__auto___26920 + (1));
i__25898__auto___26920 = G__26921;
continue;
} else {
}
break;
}

var G__26854 = args26852.length;
switch (G__26854) {
case 1:
return sablono.core.password_field26851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26852.length)].join('')));

}
});

sablono.core.password_field26851.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.password_field26851.call(null,name__26730__auto__,null);
});

sablono.core.password_field26851.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.password_field26851.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26851);

/**
 * Creates a range input field.
 */
sablono.core.range_field26855 = (function sablono$core$range_field26855(var_args){
var args26856 = [];
var len__25897__auto___26923 = arguments.length;
var i__25898__auto___26924 = (0);
while(true){
if((i__25898__auto___26924 < len__25897__auto___26923)){
args26856.push((arguments[i__25898__auto___26924]));

var G__26925 = (i__25898__auto___26924 + (1));
i__25898__auto___26924 = G__26925;
continue;
} else {
}
break;
}

var G__26858 = args26856.length;
switch (G__26858) {
case 1:
return sablono.core.range_field26855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26856.length)].join('')));

}
});

sablono.core.range_field26855.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.range_field26855.call(null,name__26730__auto__,null);
});

sablono.core.range_field26855.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.range_field26855.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26855);

/**
 * Creates a search input field.
 */
sablono.core.search_field26859 = (function sablono$core$search_field26859(var_args){
var args26860 = [];
var len__25897__auto___26927 = arguments.length;
var i__25898__auto___26928 = (0);
while(true){
if((i__25898__auto___26928 < len__25897__auto___26927)){
args26860.push((arguments[i__25898__auto___26928]));

var G__26929 = (i__25898__auto___26928 + (1));
i__25898__auto___26928 = G__26929;
continue;
} else {
}
break;
}

var G__26862 = args26860.length;
switch (G__26862) {
case 1:
return sablono.core.search_field26859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26860.length)].join('')));

}
});

sablono.core.search_field26859.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.search_field26859.call(null,name__26730__auto__,null);
});

sablono.core.search_field26859.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.search_field26859.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26859);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26863 = (function sablono$core$tel_field26863(var_args){
var args26864 = [];
var len__25897__auto___26931 = arguments.length;
var i__25898__auto___26932 = (0);
while(true){
if((i__25898__auto___26932 < len__25897__auto___26931)){
args26864.push((arguments[i__25898__auto___26932]));

var G__26933 = (i__25898__auto___26932 + (1));
i__25898__auto___26932 = G__26933;
continue;
} else {
}
break;
}

var G__26866 = args26864.length;
switch (G__26866) {
case 1:
return sablono.core.tel_field26863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26864.length)].join('')));

}
});

sablono.core.tel_field26863.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.tel_field26863.call(null,name__26730__auto__,null);
});

sablono.core.tel_field26863.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.tel_field26863.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26863);

/**
 * Creates a text input field.
 */
sablono.core.text_field26867 = (function sablono$core$text_field26867(var_args){
var args26868 = [];
var len__25897__auto___26935 = arguments.length;
var i__25898__auto___26936 = (0);
while(true){
if((i__25898__auto___26936 < len__25897__auto___26935)){
args26868.push((arguments[i__25898__auto___26936]));

var G__26937 = (i__25898__auto___26936 + (1));
i__25898__auto___26936 = G__26937;
continue;
} else {
}
break;
}

var G__26870 = args26868.length;
switch (G__26870) {
case 1:
return sablono.core.text_field26867.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26868.length)].join('')));

}
});

sablono.core.text_field26867.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.text_field26867.call(null,name__26730__auto__,null);
});

sablono.core.text_field26867.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.text_field26867.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26867);

/**
 * Creates a time input field.
 */
sablono.core.time_field26871 = (function sablono$core$time_field26871(var_args){
var args26872 = [];
var len__25897__auto___26939 = arguments.length;
var i__25898__auto___26940 = (0);
while(true){
if((i__25898__auto___26940 < len__25897__auto___26939)){
args26872.push((arguments[i__25898__auto___26940]));

var G__26941 = (i__25898__auto___26940 + (1));
i__25898__auto___26940 = G__26941;
continue;
} else {
}
break;
}

var G__26874 = args26872.length;
switch (G__26874) {
case 1:
return sablono.core.time_field26871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26872.length)].join('')));

}
});

sablono.core.time_field26871.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.time_field26871.call(null,name__26730__auto__,null);
});

sablono.core.time_field26871.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.time_field26871.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26871);

/**
 * Creates a url input field.
 */
sablono.core.url_field26875 = (function sablono$core$url_field26875(var_args){
var args26876 = [];
var len__25897__auto___26943 = arguments.length;
var i__25898__auto___26944 = (0);
while(true){
if((i__25898__auto___26944 < len__25897__auto___26943)){
args26876.push((arguments[i__25898__auto___26944]));

var G__26945 = (i__25898__auto___26944 + (1));
i__25898__auto___26944 = G__26945;
continue;
} else {
}
break;
}

var G__26878 = args26876.length;
switch (G__26878) {
case 1:
return sablono.core.url_field26875.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26875.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26876.length)].join('')));

}
});

sablono.core.url_field26875.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.url_field26875.call(null,name__26730__auto__,null);
});

sablono.core.url_field26875.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.url_field26875.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26875);

/**
 * Creates a week input field.
 */
sablono.core.week_field26879 = (function sablono$core$week_field26879(var_args){
var args26880 = [];
var len__25897__auto___26947 = arguments.length;
var i__25898__auto___26948 = (0);
while(true){
if((i__25898__auto___26948 < len__25897__auto___26947)){
args26880.push((arguments[i__25898__auto___26948]));

var G__26949 = (i__25898__auto___26948 + (1));
i__25898__auto___26948 = G__26949;
continue;
} else {
}
break;
}

var G__26882 = args26880.length;
switch (G__26882) {
case 1:
return sablono.core.week_field26879.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26880.length)].join('')));

}
});

sablono.core.week_field26879.cljs$core$IFn$_invoke$arity$1 = (function (name__26730__auto__){
return sablono.core.week_field26879.call(null,name__26730__auto__,null);
});

sablono.core.week_field26879.cljs$core$IFn$_invoke$arity$2 = (function (name__26730__auto__,value__26731__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26730__auto__,value__26731__auto__);
});

sablono.core.week_field26879.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26879);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26951 = (function sablono$core$check_box26951(var_args){
var args26952 = [];
var len__25897__auto___26955 = arguments.length;
var i__25898__auto___26956 = (0);
while(true){
if((i__25898__auto___26956 < len__25897__auto___26955)){
args26952.push((arguments[i__25898__auto___26956]));

var G__26957 = (i__25898__auto___26956 + (1));
i__25898__auto___26956 = G__26957;
continue;
} else {
}
break;
}

var G__26954 = args26952.length;
switch (G__26954) {
case 1:
return sablono.core.check_box26951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26951.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26952.length)].join('')));

}
});

sablono.core.check_box26951.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26951.call(null,name,null);
});

sablono.core.check_box26951.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26951.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26951.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24822__auto__ = value;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26951.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26951);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26959 = (function sablono$core$radio_button26959(var_args){
var args26960 = [];
var len__25897__auto___26963 = arguments.length;
var i__25898__auto___26964 = (0);
while(true){
if((i__25898__auto___26964 < len__25897__auto___26963)){
args26960.push((arguments[i__25898__auto___26964]));

var G__26965 = (i__25898__auto___26964 + (1));
i__25898__auto___26964 = G__26965;
continue;
} else {
}
break;
}

var G__26962 = args26960.length;
switch (G__26962) {
case 1:
return sablono.core.radio_button26959.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26959.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26960.length)].join('')));

}
});

sablono.core.radio_button26959.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26959.call(null,group,null);
});

sablono.core.radio_button26959.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26959.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26959.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24822__auto__ = value;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26959.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26959);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26967 = (function sablono$core$select_options26967(coll){
var iter__25602__auto__ = (function sablono$core$select_options26967_$_iter__26984(s__26985){
return (new cljs.core.LazySeq(null,(function (){
var s__26985__$1 = s__26985;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26985__$1);
if(temp__4657__auto__){
var s__26985__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26985__$2)){
var c__25600__auto__ = cljs.core.chunk_first.call(null,s__26985__$2);
var size__25601__auto__ = cljs.core.count.call(null,c__25600__auto__);
var b__26987 = cljs.core.chunk_buffer.call(null,size__25601__auto__);
if((function (){var i__26986 = (0);
while(true){
if((i__26986 < size__25601__auto__)){
var x = cljs.core._nth.call(null,c__25600__auto__,i__26986);
cljs.core.chunk_append.call(null,b__26987,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26994 = x;
var text = cljs.core.nth.call(null,vec__26994,(0),null);
var val = cljs.core.nth.call(null,vec__26994,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26994,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26967.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27000 = (i__26986 + (1));
i__26986 = G__27000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26987),sablono$core$select_options26967_$_iter__26984.call(null,cljs.core.chunk_rest.call(null,s__26985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26987),null);
}
} else {
var x = cljs.core.first.call(null,s__26985__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26997 = x;
var text = cljs.core.nth.call(null,vec__26997,(0),null);
var val = cljs.core.nth.call(null,vec__26997,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26997,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26967.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26967_$_iter__26984.call(null,cljs.core.rest.call(null,s__26985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25602__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26967);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27001 = (function sablono$core$drop_down27001(var_args){
var args27002 = [];
var len__25897__auto___27005 = arguments.length;
var i__25898__auto___27006 = (0);
while(true){
if((i__25898__auto___27006 < len__25897__auto___27005)){
args27002.push((arguments[i__25898__auto___27006]));

var G__27007 = (i__25898__auto___27006 + (1));
i__25898__auto___27006 = G__27007;
continue;
} else {
}
break;
}

var G__27004 = args27002.length;
switch (G__27004) {
case 2:
return sablono.core.drop_down27001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27001.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27002.length)].join('')));

}
});

sablono.core.drop_down27001.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27001.call(null,name,options,null);
});

sablono.core.drop_down27001.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27001.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27001);
/**
 * Creates a text area element.
 */
sablono.core.text_area27009 = (function sablono$core$text_area27009(var_args){
var args27010 = [];
var len__25897__auto___27013 = arguments.length;
var i__25898__auto___27014 = (0);
while(true){
if((i__25898__auto___27014 < len__25897__auto___27013)){
args27010.push((arguments[i__25898__auto___27014]));

var G__27015 = (i__25898__auto___27014 + (1));
i__25898__auto___27014 = G__27015;
continue;
} else {
}
break;
}

var G__27012 = args27010.length;
switch (G__27012) {
case 1:
return sablono.core.text_area27009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27010.length)].join('')));

}
});

sablono.core.text_area27009.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27009.call(null,name,null);
});

sablono.core.text_area27009.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24822__auto__ = value;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area27009.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27009);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27017 = (function sablono$core$label27017(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27017);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27018 = (function sablono$core$submit_button27018(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27018);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27019 = (function sablono$core$reset_button27019(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27019);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27020 = (function sablono$core$form_to27020(var_args){
var args__25904__auto__ = [];
var len__25897__auto___27027 = arguments.length;
var i__25898__auto___27028 = (0);
while(true){
if((i__25898__auto___27028 < len__25897__auto___27027)){
args__25904__auto__.push((arguments[i__25898__auto___27028]));

var G__27029 = (i__25898__auto___27028 + (1));
i__25898__auto___27028 = G__27029;
continue;
} else {
}
break;
}

var argseq__25905__auto__ = ((((1) < args__25904__auto__.length))?(new cljs.core.IndexedSeq(args__25904__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27020.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25905__auto__);
});

sablono.core.form_to27020.cljs$core$IFn$_invoke$arity$variadic = (function (p__27023,body){
var vec__27024 = p__27023;
var method = cljs.core.nth.call(null,vec__27024,(0),null);
var action = cljs.core.nth.call(null,vec__27024,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27020.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27020.cljs$lang$applyTo = (function (seq27021){
var G__27022 = cljs.core.first.call(null,seq27021);
var seq27021__$1 = cljs.core.next.call(null,seq27021);
return sablono.core.form_to27020.cljs$core$IFn$_invoke$arity$variadic(G__27022,seq27021__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27020);

//# sourceMappingURL=core.js.map?rel=1482768535758