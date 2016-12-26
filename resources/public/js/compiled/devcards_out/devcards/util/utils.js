// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__25808__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29029_29031 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29030_29032 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29029_29031,_STAR_print_fn_STAR_29030_29032,sb__25808__auto__){
return (function (x__25809__auto__){
return sb__25808__auto__.append(x__25809__auto__);
});})(_STAR_print_newline_STAR_29029_29031,_STAR_print_fn_STAR_29030_29032,sb__25808__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29030_29032;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29029_29031;
}
return [cljs.core.str(sb__25808__auto__)].join('');
}catch (e29027){if((e29027 instanceof Error)){
var e1 = e29027;
try{return obj.toString();
}catch (e29028){if((e29028 instanceof Error)){
var e2 = e29028;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e29028;

}
}} else {
throw e29027;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_29034 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_29034;
}});

//# sourceMappingURL=utils.js.map?rel=1482768540238