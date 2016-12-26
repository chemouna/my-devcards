// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37964,handler){
var map__37965 = p__37964;
var map__37965__$1 = ((((!((map__37965 == null)))?((((map__37965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37965):map__37965);
var uri = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__37965__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__37965,map__37965__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__37963_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__37963_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__37965,map__37965__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___37977 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___37977)){
var response_type_37978 = temp__4657__auto___37977;
this$__$1.responseType = cljs.core.name.call(null,response_type_37978);
} else {
}

var seq__37967_37979 = cljs.core.seq.call(null,headers);
var chunk__37968_37980 = null;
var count__37969_37981 = (0);
var i__37970_37982 = (0);
while(true){
if((i__37970_37982 < count__37969_37981)){
var vec__37971_37983 = cljs.core._nth.call(null,chunk__37968_37980,i__37970_37982);
var k_37984 = cljs.core.nth.call(null,vec__37971_37983,(0),null);
var v_37985 = cljs.core.nth.call(null,vec__37971_37983,(1),null);
this$__$1.setRequestHeader(k_37984,v_37985);

var G__37986 = seq__37967_37979;
var G__37987 = chunk__37968_37980;
var G__37988 = count__37969_37981;
var G__37989 = (i__37970_37982 + (1));
seq__37967_37979 = G__37986;
chunk__37968_37980 = G__37987;
count__37969_37981 = G__37988;
i__37970_37982 = G__37989;
continue;
} else {
var temp__4657__auto___37990 = cljs.core.seq.call(null,seq__37967_37979);
if(temp__4657__auto___37990){
var seq__37967_37991__$1 = temp__4657__auto___37990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37967_37991__$1)){
var c__25633__auto___37992 = cljs.core.chunk_first.call(null,seq__37967_37991__$1);
var G__37993 = cljs.core.chunk_rest.call(null,seq__37967_37991__$1);
var G__37994 = c__25633__auto___37992;
var G__37995 = cljs.core.count.call(null,c__25633__auto___37992);
var G__37996 = (0);
seq__37967_37979 = G__37993;
chunk__37968_37980 = G__37994;
count__37969_37981 = G__37995;
i__37970_37982 = G__37996;
continue;
} else {
var vec__37974_37997 = cljs.core.first.call(null,seq__37967_37991__$1);
var k_37998 = cljs.core.nth.call(null,vec__37974_37997,(0),null);
var v_37999 = cljs.core.nth.call(null,vec__37974_37997,(1),null);
this$__$1.setRequestHeader(k_37998,v_37999);

var G__38000 = cljs.core.next.call(null,seq__37967_37991__$1);
var G__38001 = null;
var G__38002 = (0);
var G__38003 = (0);
seq__37967_37979 = G__38000;
chunk__37968_37980 = G__38001;
count__37969_37981 = G__38002;
i__37970_37982 = G__38003;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__24822__auto__ = body;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1482768617651