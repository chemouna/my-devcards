// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24822__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24822__auto__){
return or__24822__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24822__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34157_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34157_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34162 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34163 = null;
var count__34164 = (0);
var i__34165 = (0);
while(true){
if((i__34165 < count__34164)){
var n = cljs.core._nth.call(null,chunk__34163,i__34165);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34166 = seq__34162;
var G__34167 = chunk__34163;
var G__34168 = count__34164;
var G__34169 = (i__34165 + (1));
seq__34162 = G__34166;
chunk__34163 = G__34167;
count__34164 = G__34168;
i__34165 = G__34169;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34162);
if(temp__4657__auto__){
var seq__34162__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34162__$1)){
var c__25633__auto__ = cljs.core.chunk_first.call(null,seq__34162__$1);
var G__34170 = cljs.core.chunk_rest.call(null,seq__34162__$1);
var G__34171 = c__25633__auto__;
var G__34172 = cljs.core.count.call(null,c__25633__auto__);
var G__34173 = (0);
seq__34162 = G__34170;
chunk__34163 = G__34171;
count__34164 = G__34172;
i__34165 = G__34173;
continue;
} else {
var n = cljs.core.first.call(null,seq__34162__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34174 = cljs.core.next.call(null,seq__34162__$1);
var G__34175 = null;
var G__34176 = (0);
var G__34177 = (0);
seq__34162 = G__34174;
chunk__34163 = G__34175;
count__34164 = G__34176;
i__34165 = G__34177;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34228_34239 = cljs.core.seq.call(null,deps);
var chunk__34229_34240 = null;
var count__34230_34241 = (0);
var i__34231_34242 = (0);
while(true){
if((i__34231_34242 < count__34230_34241)){
var dep_34243 = cljs.core._nth.call(null,chunk__34229_34240,i__34231_34242);
topo_sort_helper_STAR_.call(null,dep_34243,(depth + (1)),state);

var G__34244 = seq__34228_34239;
var G__34245 = chunk__34229_34240;
var G__34246 = count__34230_34241;
var G__34247 = (i__34231_34242 + (1));
seq__34228_34239 = G__34244;
chunk__34229_34240 = G__34245;
count__34230_34241 = G__34246;
i__34231_34242 = G__34247;
continue;
} else {
var temp__4657__auto___34248 = cljs.core.seq.call(null,seq__34228_34239);
if(temp__4657__auto___34248){
var seq__34228_34249__$1 = temp__4657__auto___34248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34228_34249__$1)){
var c__25633__auto___34250 = cljs.core.chunk_first.call(null,seq__34228_34249__$1);
var G__34251 = cljs.core.chunk_rest.call(null,seq__34228_34249__$1);
var G__34252 = c__25633__auto___34250;
var G__34253 = cljs.core.count.call(null,c__25633__auto___34250);
var G__34254 = (0);
seq__34228_34239 = G__34251;
chunk__34229_34240 = G__34252;
count__34230_34241 = G__34253;
i__34231_34242 = G__34254;
continue;
} else {
var dep_34255 = cljs.core.first.call(null,seq__34228_34249__$1);
topo_sort_helper_STAR_.call(null,dep_34255,(depth + (1)),state);

var G__34256 = cljs.core.next.call(null,seq__34228_34249__$1);
var G__34257 = null;
var G__34258 = (0);
var G__34259 = (0);
seq__34228_34239 = G__34256;
chunk__34229_34240 = G__34257;
count__34230_34241 = G__34258;
i__34231_34242 = G__34259;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34232){
var vec__34236 = p__34232;
var seq__34237 = cljs.core.seq.call(null,vec__34236);
var first__34238 = cljs.core.first.call(null,seq__34237);
var seq__34237__$1 = cljs.core.next.call(null,seq__34237);
var x = first__34238;
var xs = seq__34237__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34236,seq__34237,first__34238,seq__34237__$1,x,xs,get_deps__$1){
return (function (p1__34178_SHARP_){
return clojure.set.difference.call(null,p1__34178_SHARP_,x);
});})(vec__34236,seq__34237,first__34238,seq__34237__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34272 = cljs.core.seq.call(null,provides);
var chunk__34273 = null;
var count__34274 = (0);
var i__34275 = (0);
while(true){
if((i__34275 < count__34274)){
var prov = cljs.core._nth.call(null,chunk__34273,i__34275);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34276_34284 = cljs.core.seq.call(null,requires);
var chunk__34277_34285 = null;
var count__34278_34286 = (0);
var i__34279_34287 = (0);
while(true){
if((i__34279_34287 < count__34278_34286)){
var req_34288 = cljs.core._nth.call(null,chunk__34277_34285,i__34279_34287);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34288,prov);

var G__34289 = seq__34276_34284;
var G__34290 = chunk__34277_34285;
var G__34291 = count__34278_34286;
var G__34292 = (i__34279_34287 + (1));
seq__34276_34284 = G__34289;
chunk__34277_34285 = G__34290;
count__34278_34286 = G__34291;
i__34279_34287 = G__34292;
continue;
} else {
var temp__4657__auto___34293 = cljs.core.seq.call(null,seq__34276_34284);
if(temp__4657__auto___34293){
var seq__34276_34294__$1 = temp__4657__auto___34293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34276_34294__$1)){
var c__25633__auto___34295 = cljs.core.chunk_first.call(null,seq__34276_34294__$1);
var G__34296 = cljs.core.chunk_rest.call(null,seq__34276_34294__$1);
var G__34297 = c__25633__auto___34295;
var G__34298 = cljs.core.count.call(null,c__25633__auto___34295);
var G__34299 = (0);
seq__34276_34284 = G__34296;
chunk__34277_34285 = G__34297;
count__34278_34286 = G__34298;
i__34279_34287 = G__34299;
continue;
} else {
var req_34300 = cljs.core.first.call(null,seq__34276_34294__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34300,prov);

var G__34301 = cljs.core.next.call(null,seq__34276_34294__$1);
var G__34302 = null;
var G__34303 = (0);
var G__34304 = (0);
seq__34276_34284 = G__34301;
chunk__34277_34285 = G__34302;
count__34278_34286 = G__34303;
i__34279_34287 = G__34304;
continue;
}
} else {
}
}
break;
}

var G__34305 = seq__34272;
var G__34306 = chunk__34273;
var G__34307 = count__34274;
var G__34308 = (i__34275 + (1));
seq__34272 = G__34305;
chunk__34273 = G__34306;
count__34274 = G__34307;
i__34275 = G__34308;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34272);
if(temp__4657__auto__){
var seq__34272__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34272__$1)){
var c__25633__auto__ = cljs.core.chunk_first.call(null,seq__34272__$1);
var G__34309 = cljs.core.chunk_rest.call(null,seq__34272__$1);
var G__34310 = c__25633__auto__;
var G__34311 = cljs.core.count.call(null,c__25633__auto__);
var G__34312 = (0);
seq__34272 = G__34309;
chunk__34273 = G__34310;
count__34274 = G__34311;
i__34275 = G__34312;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34272__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34280_34313 = cljs.core.seq.call(null,requires);
var chunk__34281_34314 = null;
var count__34282_34315 = (0);
var i__34283_34316 = (0);
while(true){
if((i__34283_34316 < count__34282_34315)){
var req_34317 = cljs.core._nth.call(null,chunk__34281_34314,i__34283_34316);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34317,prov);

var G__34318 = seq__34280_34313;
var G__34319 = chunk__34281_34314;
var G__34320 = count__34282_34315;
var G__34321 = (i__34283_34316 + (1));
seq__34280_34313 = G__34318;
chunk__34281_34314 = G__34319;
count__34282_34315 = G__34320;
i__34283_34316 = G__34321;
continue;
} else {
var temp__4657__auto___34322__$1 = cljs.core.seq.call(null,seq__34280_34313);
if(temp__4657__auto___34322__$1){
var seq__34280_34323__$1 = temp__4657__auto___34322__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34280_34323__$1)){
var c__25633__auto___34324 = cljs.core.chunk_first.call(null,seq__34280_34323__$1);
var G__34325 = cljs.core.chunk_rest.call(null,seq__34280_34323__$1);
var G__34326 = c__25633__auto___34324;
var G__34327 = cljs.core.count.call(null,c__25633__auto___34324);
var G__34328 = (0);
seq__34280_34313 = G__34325;
chunk__34281_34314 = G__34326;
count__34282_34315 = G__34327;
i__34283_34316 = G__34328;
continue;
} else {
var req_34329 = cljs.core.first.call(null,seq__34280_34323__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34329,prov);

var G__34330 = cljs.core.next.call(null,seq__34280_34323__$1);
var G__34331 = null;
var G__34332 = (0);
var G__34333 = (0);
seq__34280_34313 = G__34330;
chunk__34281_34314 = G__34331;
count__34282_34315 = G__34332;
i__34283_34316 = G__34333;
continue;
}
} else {
}
}
break;
}

var G__34334 = cljs.core.next.call(null,seq__34272__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__34272 = G__34334;
chunk__34273 = G__34335;
count__34274 = G__34336;
i__34275 = G__34337;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34342_34346 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34343_34347 = null;
var count__34344_34348 = (0);
var i__34345_34349 = (0);
while(true){
if((i__34345_34349 < count__34344_34348)){
var ns_34350 = cljs.core._nth.call(null,chunk__34343_34347,i__34345_34349);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34350);

var G__34351 = seq__34342_34346;
var G__34352 = chunk__34343_34347;
var G__34353 = count__34344_34348;
var G__34354 = (i__34345_34349 + (1));
seq__34342_34346 = G__34351;
chunk__34343_34347 = G__34352;
count__34344_34348 = G__34353;
i__34345_34349 = G__34354;
continue;
} else {
var temp__4657__auto___34355 = cljs.core.seq.call(null,seq__34342_34346);
if(temp__4657__auto___34355){
var seq__34342_34356__$1 = temp__4657__auto___34355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34342_34356__$1)){
var c__25633__auto___34357 = cljs.core.chunk_first.call(null,seq__34342_34356__$1);
var G__34358 = cljs.core.chunk_rest.call(null,seq__34342_34356__$1);
var G__34359 = c__25633__auto___34357;
var G__34360 = cljs.core.count.call(null,c__25633__auto___34357);
var G__34361 = (0);
seq__34342_34346 = G__34358;
chunk__34343_34347 = G__34359;
count__34344_34348 = G__34360;
i__34345_34349 = G__34361;
continue;
} else {
var ns_34362 = cljs.core.first.call(null,seq__34342_34356__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34362);

var G__34363 = cljs.core.next.call(null,seq__34342_34356__$1);
var G__34364 = null;
var G__34365 = (0);
var G__34366 = (0);
seq__34342_34346 = G__34363;
chunk__34343_34347 = G__34364;
count__34344_34348 = G__34365;
i__34345_34349 = G__34366;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24822__auto__ = goog.require__;
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34367__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34368__i = 0, G__34368__a = new Array(arguments.length -  0);
while (G__34368__i < G__34368__a.length) {G__34368__a[G__34368__i] = arguments[G__34368__i + 0]; ++G__34368__i;}
  args = new cljs.core.IndexedSeq(G__34368__a,0);
} 
return G__34367__delegate.call(this,args);};
G__34367.cljs$lang$maxFixedArity = 0;
G__34367.cljs$lang$applyTo = (function (arglist__34369){
var args = cljs.core.seq(arglist__34369);
return G__34367__delegate(args);
});
G__34367.cljs$core$IFn$_invoke$arity$variadic = G__34367__delegate;
return G__34367;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34371 = cljs.core._EQ_;
var expr__34372 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34371.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34372))){
var path_parts = ((function (pred__34371,expr__34372){
return (function (p1__34370_SHARP_){
return clojure.string.split.call(null,p1__34370_SHARP_,/[\/\\]/);
});})(pred__34371,expr__34372))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34371,expr__34372){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34374){if((e34374 instanceof Error)){
var e = e34374;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34374;

}
}})());
});
;})(path_parts,sep,root,pred__34371,expr__34372))
} else {
if(cljs.core.truth_(pred__34371.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34372))){
return ((function (pred__34371,expr__34372){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34371,expr__34372){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34371,expr__34372))
);

return deferred.addErrback(((function (deferred,pred__34371,expr__34372){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34371,expr__34372))
);
});
;})(pred__34371,expr__34372))
} else {
return ((function (pred__34371,expr__34372){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34371,expr__34372))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34375,callback){
var map__34378 = p__34375;
var map__34378__$1 = ((((!((map__34378 == null)))?((((map__34378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34378):map__34378);
var file_msg = map__34378__$1;
var request_url = cljs.core.get.call(null,map__34378__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34378,map__34378__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34378,map__34378__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_34402){
var state_val_34403 = (state_34402[(1)]);
if((state_val_34403 === (7))){
var inst_34398 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
var statearr_34404_34424 = state_34402__$1;
(statearr_34404_34424[(2)] = inst_34398);

(statearr_34404_34424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (1))){
var state_34402__$1 = state_34402;
var statearr_34405_34425 = state_34402__$1;
(statearr_34405_34425[(2)] = null);

(statearr_34405_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (4))){
var inst_34382 = (state_34402[(7)]);
var inst_34382__$1 = (state_34402[(2)]);
var state_34402__$1 = (function (){var statearr_34406 = state_34402;
(statearr_34406[(7)] = inst_34382__$1);

return statearr_34406;
})();
if(cljs.core.truth_(inst_34382__$1)){
var statearr_34407_34426 = state_34402__$1;
(statearr_34407_34426[(1)] = (5));

} else {
var statearr_34408_34427 = state_34402__$1;
(statearr_34408_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (6))){
var state_34402__$1 = state_34402;
var statearr_34409_34428 = state_34402__$1;
(statearr_34409_34428[(2)] = null);

(statearr_34409_34428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (3))){
var inst_34400 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34402__$1,inst_34400);
} else {
if((state_val_34403 === (2))){
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34402__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34403 === (11))){
var inst_34394 = (state_34402[(2)]);
var state_34402__$1 = (function (){var statearr_34410 = state_34402;
(statearr_34410[(8)] = inst_34394);

return statearr_34410;
})();
var statearr_34411_34429 = state_34402__$1;
(statearr_34411_34429[(2)] = null);

(statearr_34411_34429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (9))){
var inst_34388 = (state_34402[(9)]);
var inst_34386 = (state_34402[(10)]);
var inst_34390 = inst_34388.call(null,inst_34386);
var state_34402__$1 = state_34402;
var statearr_34412_34430 = state_34402__$1;
(statearr_34412_34430[(2)] = inst_34390);

(statearr_34412_34430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (5))){
var inst_34382 = (state_34402[(7)]);
var inst_34384 = figwheel.client.file_reloading.blocking_load.call(null,inst_34382);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34402__$1,(8),inst_34384);
} else {
if((state_val_34403 === (10))){
var inst_34386 = (state_34402[(10)]);
var inst_34392 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34386);
var state_34402__$1 = state_34402;
var statearr_34413_34431 = state_34402__$1;
(statearr_34413_34431[(2)] = inst_34392);

(statearr_34413_34431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (8))){
var inst_34388 = (state_34402[(9)]);
var inst_34382 = (state_34402[(7)]);
var inst_34386 = (state_34402[(2)]);
var inst_34387 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34388__$1 = cljs.core.get.call(null,inst_34387,inst_34382);
var state_34402__$1 = (function (){var statearr_34414 = state_34402;
(statearr_34414[(9)] = inst_34388__$1);

(statearr_34414[(10)] = inst_34386);

return statearr_34414;
})();
if(cljs.core.truth_(inst_34388__$1)){
var statearr_34415_34432 = state_34402__$1;
(statearr_34415_34432[(1)] = (9));

} else {
var statearr_34416_34433 = state_34402__$1;
(statearr_34416_34433[(1)] = (10));

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
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29918__auto__ = null;
var figwheel$client$file_reloading$state_machine__29918__auto____0 = (function (){
var statearr_34420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34420[(0)] = figwheel$client$file_reloading$state_machine__29918__auto__);

(statearr_34420[(1)] = (1));

return statearr_34420;
});
var figwheel$client$file_reloading$state_machine__29918__auto____1 = (function (state_34402){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_34402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e34421){if((e34421 instanceof Object)){
var ex__29921__auto__ = e34421;
var statearr_34422_34434 = state_34402;
(statearr_34422_34434[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34435 = state_34402;
state_34402 = G__34435;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29918__auto__ = function(state_34402){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29918__auto____1.call(this,state_34402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29918__auto____0;
figwheel$client$file_reloading$state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29918__auto____1;
return figwheel$client$file_reloading$state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_34423 = f__30030__auto__.call(null);
(statearr_34423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_34423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34436,callback){
var map__34439 = p__34436;
var map__34439__$1 = ((((!((map__34439 == null)))?((((map__34439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34439):map__34439);
var file_msg = map__34439__$1;
var namespace = cljs.core.get.call(null,map__34439__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34439,map__34439__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34439,map__34439__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34441){
var map__34444 = p__34441;
var map__34444__$1 = ((((!((map__34444 == null)))?((((map__34444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34444):map__34444);
var file_msg = map__34444__$1;
var namespace = cljs.core.get.call(null,map__34444__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24810__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24810__auto__){
var or__24822__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24822__auto__)){
return or__24822__auto__;
} else {
var or__24822__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24822__auto____$1)){
return or__24822__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24810__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34446,callback){
var map__34449 = p__34446;
var map__34449__$1 = ((((!((map__34449 == null)))?((((map__34449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34449):map__34449);
var file_msg = map__34449__$1;
var request_url = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30029__auto___34553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___34553,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto___34553,out){
return (function (state_34535){
var state_val_34536 = (state_34535[(1)]);
if((state_val_34536 === (1))){
var inst_34509 = cljs.core.seq.call(null,files);
var inst_34510 = cljs.core.first.call(null,inst_34509);
var inst_34511 = cljs.core.next.call(null,inst_34509);
var inst_34512 = files;
var state_34535__$1 = (function (){var statearr_34537 = state_34535;
(statearr_34537[(7)] = inst_34510);

(statearr_34537[(8)] = inst_34511);

(statearr_34537[(9)] = inst_34512);

return statearr_34537;
})();
var statearr_34538_34554 = state_34535__$1;
(statearr_34538_34554[(2)] = null);

(statearr_34538_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (2))){
var inst_34518 = (state_34535[(10)]);
var inst_34512 = (state_34535[(9)]);
var inst_34517 = cljs.core.seq.call(null,inst_34512);
var inst_34518__$1 = cljs.core.first.call(null,inst_34517);
var inst_34519 = cljs.core.next.call(null,inst_34517);
var inst_34520 = (inst_34518__$1 == null);
var inst_34521 = cljs.core.not.call(null,inst_34520);
var state_34535__$1 = (function (){var statearr_34539 = state_34535;
(statearr_34539[(10)] = inst_34518__$1);

(statearr_34539[(11)] = inst_34519);

return statearr_34539;
})();
if(inst_34521){
var statearr_34540_34555 = state_34535__$1;
(statearr_34540_34555[(1)] = (4));

} else {
var statearr_34541_34556 = state_34535__$1;
(statearr_34541_34556[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (3))){
var inst_34533 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34535__$1,inst_34533);
} else {
if((state_val_34536 === (4))){
var inst_34518 = (state_34535[(10)]);
var inst_34523 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34518);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(7),inst_34523);
} else {
if((state_val_34536 === (5))){
var inst_34529 = cljs.core.async.close_BANG_.call(null,out);
var state_34535__$1 = state_34535;
var statearr_34542_34557 = state_34535__$1;
(statearr_34542_34557[(2)] = inst_34529);

(statearr_34542_34557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (6))){
var inst_34531 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34543_34558 = state_34535__$1;
(statearr_34543_34558[(2)] = inst_34531);

(statearr_34543_34558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (7))){
var inst_34519 = (state_34535[(11)]);
var inst_34525 = (state_34535[(2)]);
var inst_34526 = cljs.core.async.put_BANG_.call(null,out,inst_34525);
var inst_34512 = inst_34519;
var state_34535__$1 = (function (){var statearr_34544 = state_34535;
(statearr_34544[(12)] = inst_34526);

(statearr_34544[(9)] = inst_34512);

return statearr_34544;
})();
var statearr_34545_34559 = state_34535__$1;
(statearr_34545_34559[(2)] = null);

(statearr_34545_34559[(1)] = (2));


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
});})(c__30029__auto___34553,out))
;
return ((function (switch__29917__auto__,c__30029__auto___34553,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto____0 = (function (){
var statearr_34549 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34549[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto__);

(statearr_34549[(1)] = (1));

return statearr_34549;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto____1 = (function (state_34535){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_34535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e34550){if((e34550 instanceof Object)){
var ex__29921__auto__ = e34550;
var statearr_34551_34560 = state_34535;
(statearr_34551_34560[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34561 = state_34535;
state_34535 = G__34561;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto___34553,out))
})();
var state__30031__auto__ = (function (){var statearr_34552 = f__30030__auto__.call(null);
(statearr_34552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___34553);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___34553,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34562,opts){
var map__34566 = p__34562;
var map__34566__$1 = ((((!((map__34566 == null)))?((((map__34566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34566):map__34566);
var eval_body__$1 = cljs.core.get.call(null,map__34566__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24810__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24810__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24810__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34568){var e = e34568;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34569_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34569_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34578){
var vec__34579 = p__34578;
var k = cljs.core.nth.call(null,vec__34579,(0),null);
var v = cljs.core.nth.call(null,vec__34579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34582){
var vec__34583 = p__34582;
var k = cljs.core.nth.call(null,vec__34583,(0),null);
var v = cljs.core.nth.call(null,vec__34583,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34589,p__34590){
var map__34837 = p__34589;
var map__34837__$1 = ((((!((map__34837 == null)))?((((map__34837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34837):map__34837);
var opts = map__34837__$1;
var before_jsload = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34838 = p__34590;
var map__34838__$1 = ((((!((map__34838 == null)))?((((map__34838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34838):map__34838);
var msg = map__34838__$1;
var files = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34991){
var state_val_34992 = (state_34991[(1)]);
if((state_val_34992 === (7))){
var inst_34852 = (state_34991[(7)]);
var inst_34855 = (state_34991[(8)]);
var inst_34853 = (state_34991[(9)]);
var inst_34854 = (state_34991[(10)]);
var inst_34860 = cljs.core._nth.call(null,inst_34853,inst_34855);
var inst_34861 = figwheel.client.file_reloading.eval_body.call(null,inst_34860,opts);
var inst_34862 = (inst_34855 + (1));
var tmp34993 = inst_34852;
var tmp34994 = inst_34853;
var tmp34995 = inst_34854;
var inst_34852__$1 = tmp34993;
var inst_34853__$1 = tmp34994;
var inst_34854__$1 = tmp34995;
var inst_34855__$1 = inst_34862;
var state_34991__$1 = (function (){var statearr_34996 = state_34991;
(statearr_34996[(7)] = inst_34852__$1);

(statearr_34996[(8)] = inst_34855__$1);

(statearr_34996[(9)] = inst_34853__$1);

(statearr_34996[(11)] = inst_34861);

(statearr_34996[(10)] = inst_34854__$1);

return statearr_34996;
})();
var statearr_34997_35083 = state_34991__$1;
(statearr_34997_35083[(2)] = null);

(statearr_34997_35083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (20))){
var inst_34895 = (state_34991[(12)]);
var inst_34903 = figwheel.client.file_reloading.sort_files.call(null,inst_34895);
var state_34991__$1 = state_34991;
var statearr_34998_35084 = state_34991__$1;
(statearr_34998_35084[(2)] = inst_34903);

(statearr_34998_35084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (27))){
var state_34991__$1 = state_34991;
var statearr_34999_35085 = state_34991__$1;
(statearr_34999_35085[(2)] = null);

(statearr_34999_35085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (1))){
var inst_34844 = (state_34991[(13)]);
var inst_34841 = before_jsload.call(null,files);
var inst_34842 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34843 = (function (){return ((function (inst_34844,inst_34841,inst_34842,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34586_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34586_SHARP_);
});
;})(inst_34844,inst_34841,inst_34842,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34844__$1 = cljs.core.filter.call(null,inst_34843,files);
var inst_34845 = cljs.core.not_empty.call(null,inst_34844__$1);
var state_34991__$1 = (function (){var statearr_35000 = state_34991;
(statearr_35000[(13)] = inst_34844__$1);

(statearr_35000[(14)] = inst_34841);

(statearr_35000[(15)] = inst_34842);

return statearr_35000;
})();
if(cljs.core.truth_(inst_34845)){
var statearr_35001_35086 = state_34991__$1;
(statearr_35001_35086[(1)] = (2));

} else {
var statearr_35002_35087 = state_34991__$1;
(statearr_35002_35087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (24))){
var state_34991__$1 = state_34991;
var statearr_35003_35088 = state_34991__$1;
(statearr_35003_35088[(2)] = null);

(statearr_35003_35088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (39))){
var inst_34945 = (state_34991[(16)]);
var state_34991__$1 = state_34991;
var statearr_35004_35089 = state_34991__$1;
(statearr_35004_35089[(2)] = inst_34945);

(statearr_35004_35089[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (46))){
var inst_34986 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_35005_35090 = state_34991__$1;
(statearr_35005_35090[(2)] = inst_34986);

(statearr_35005_35090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (4))){
var inst_34889 = (state_34991[(2)]);
var inst_34890 = cljs.core.List.EMPTY;
var inst_34891 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34890);
var inst_34892 = (function (){return ((function (inst_34889,inst_34890,inst_34891,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34587_SHARP_){
var and__24810__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34587_SHARP_);
if(cljs.core.truth_(and__24810__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34587_SHARP_));
} else {
return and__24810__auto__;
}
});
;})(inst_34889,inst_34890,inst_34891,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34893 = cljs.core.filter.call(null,inst_34892,files);
var inst_34894 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34895 = cljs.core.concat.call(null,inst_34893,inst_34894);
var state_34991__$1 = (function (){var statearr_35006 = state_34991;
(statearr_35006[(17)] = inst_34891);

(statearr_35006[(12)] = inst_34895);

(statearr_35006[(18)] = inst_34889);

return statearr_35006;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35007_35091 = state_34991__$1;
(statearr_35007_35091[(1)] = (16));

} else {
var statearr_35008_35092 = state_34991__$1;
(statearr_35008_35092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (15))){
var inst_34879 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_35009_35093 = state_34991__$1;
(statearr_35009_35093[(2)] = inst_34879);

(statearr_35009_35093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (21))){
var inst_34905 = (state_34991[(19)]);
var inst_34905__$1 = (state_34991[(2)]);
var inst_34906 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34905__$1);
var state_34991__$1 = (function (){var statearr_35010 = state_34991;
(statearr_35010[(19)] = inst_34905__$1);

return statearr_35010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34991__$1,(22),inst_34906);
} else {
if((state_val_34992 === (31))){
var inst_34989 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34991__$1,inst_34989);
} else {
if((state_val_34992 === (32))){
var inst_34945 = (state_34991[(16)]);
var inst_34950 = inst_34945.cljs$lang$protocol_mask$partition0$;
var inst_34951 = (inst_34950 & (64));
var inst_34952 = inst_34945.cljs$core$ISeq$;
var inst_34953 = (inst_34951) || (inst_34952);
var state_34991__$1 = state_34991;
if(cljs.core.truth_(inst_34953)){
var statearr_35011_35094 = state_34991__$1;
(statearr_35011_35094[(1)] = (35));

} else {
var statearr_35012_35095 = state_34991__$1;
(statearr_35012_35095[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (40))){
var inst_34966 = (state_34991[(20)]);
var inst_34965 = (state_34991[(2)]);
var inst_34966__$1 = cljs.core.get.call(null,inst_34965,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34967 = cljs.core.get.call(null,inst_34965,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34968 = cljs.core.not_empty.call(null,inst_34966__$1);
var state_34991__$1 = (function (){var statearr_35013 = state_34991;
(statearr_35013[(21)] = inst_34967);

(statearr_35013[(20)] = inst_34966__$1);

return statearr_35013;
})();
if(cljs.core.truth_(inst_34968)){
var statearr_35014_35096 = state_34991__$1;
(statearr_35014_35096[(1)] = (41));

} else {
var statearr_35015_35097 = state_34991__$1;
(statearr_35015_35097[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (33))){
var state_34991__$1 = state_34991;
var statearr_35016_35098 = state_34991__$1;
(statearr_35016_35098[(2)] = false);

(statearr_35016_35098[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (13))){
var inst_34865 = (state_34991[(22)]);
var inst_34869 = cljs.core.chunk_first.call(null,inst_34865);
var inst_34870 = cljs.core.chunk_rest.call(null,inst_34865);
var inst_34871 = cljs.core.count.call(null,inst_34869);
var inst_34852 = inst_34870;
var inst_34853 = inst_34869;
var inst_34854 = inst_34871;
var inst_34855 = (0);
var state_34991__$1 = (function (){var statearr_35017 = state_34991;
(statearr_35017[(7)] = inst_34852);

(statearr_35017[(8)] = inst_34855);

(statearr_35017[(9)] = inst_34853);

(statearr_35017[(10)] = inst_34854);

return statearr_35017;
})();
var statearr_35018_35099 = state_34991__$1;
(statearr_35018_35099[(2)] = null);

(statearr_35018_35099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (22))){
var inst_34905 = (state_34991[(19)]);
var inst_34913 = (state_34991[(23)]);
var inst_34909 = (state_34991[(24)]);
var inst_34908 = (state_34991[(25)]);
var inst_34908__$1 = (state_34991[(2)]);
var inst_34909__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34908__$1);
var inst_34910 = (function (){var all_files = inst_34905;
var res_SINGLEQUOTE_ = inst_34908__$1;
var res = inst_34909__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34905,inst_34913,inst_34909,inst_34908,inst_34908__$1,inst_34909__$1,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34588_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34588_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34905,inst_34913,inst_34909,inst_34908,inst_34908__$1,inst_34909__$1,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34911 = cljs.core.filter.call(null,inst_34910,inst_34908__$1);
var inst_34912 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34913__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34912);
var inst_34914 = cljs.core.not_empty.call(null,inst_34913__$1);
var state_34991__$1 = (function (){var statearr_35019 = state_34991;
(statearr_35019[(23)] = inst_34913__$1);

(statearr_35019[(24)] = inst_34909__$1);

(statearr_35019[(25)] = inst_34908__$1);

(statearr_35019[(26)] = inst_34911);

return statearr_35019;
})();
if(cljs.core.truth_(inst_34914)){
var statearr_35020_35100 = state_34991__$1;
(statearr_35020_35100[(1)] = (23));

} else {
var statearr_35021_35101 = state_34991__$1;
(statearr_35021_35101[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (36))){
var state_34991__$1 = state_34991;
var statearr_35022_35102 = state_34991__$1;
(statearr_35022_35102[(2)] = false);

(statearr_35022_35102[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (41))){
var inst_34966 = (state_34991[(20)]);
var inst_34970 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34971 = cljs.core.map.call(null,inst_34970,inst_34966);
var inst_34972 = cljs.core.pr_str.call(null,inst_34971);
var inst_34973 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34972)].join('');
var inst_34974 = figwheel.client.utils.log.call(null,inst_34973);
var state_34991__$1 = state_34991;
var statearr_35023_35103 = state_34991__$1;
(statearr_35023_35103[(2)] = inst_34974);

(statearr_35023_35103[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (43))){
var inst_34967 = (state_34991[(21)]);
var inst_34977 = (state_34991[(2)]);
var inst_34978 = cljs.core.not_empty.call(null,inst_34967);
var state_34991__$1 = (function (){var statearr_35024 = state_34991;
(statearr_35024[(27)] = inst_34977);

return statearr_35024;
})();
if(cljs.core.truth_(inst_34978)){
var statearr_35025_35104 = state_34991__$1;
(statearr_35025_35104[(1)] = (44));

} else {
var statearr_35026_35105 = state_34991__$1;
(statearr_35026_35105[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (29))){
var inst_34905 = (state_34991[(19)]);
var inst_34913 = (state_34991[(23)]);
var inst_34909 = (state_34991[(24)]);
var inst_34908 = (state_34991[(25)]);
var inst_34945 = (state_34991[(16)]);
var inst_34911 = (state_34991[(26)]);
var inst_34941 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34944 = (function (){var all_files = inst_34905;
var res_SINGLEQUOTE_ = inst_34908;
var res = inst_34909;
var files_not_loaded = inst_34911;
var dependencies_that_loaded = inst_34913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34945,inst_34911,inst_34941,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34943){
var map__35027 = p__34943;
var map__35027__$1 = ((((!((map__35027 == null)))?((((map__35027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35027):map__35027);
var namespace = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34945,inst_34911,inst_34941,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34945__$1 = cljs.core.group_by.call(null,inst_34944,inst_34911);
var inst_34947 = (inst_34945__$1 == null);
var inst_34948 = cljs.core.not.call(null,inst_34947);
var state_34991__$1 = (function (){var statearr_35029 = state_34991;
(statearr_35029[(28)] = inst_34941);

(statearr_35029[(16)] = inst_34945__$1);

return statearr_35029;
})();
if(inst_34948){
var statearr_35030_35106 = state_34991__$1;
(statearr_35030_35106[(1)] = (32));

} else {
var statearr_35031_35107 = state_34991__$1;
(statearr_35031_35107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (44))){
var inst_34967 = (state_34991[(21)]);
var inst_34980 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34967);
var inst_34981 = cljs.core.pr_str.call(null,inst_34980);
var inst_34982 = [cljs.core.str("not required: "),cljs.core.str(inst_34981)].join('');
var inst_34983 = figwheel.client.utils.log.call(null,inst_34982);
var state_34991__$1 = state_34991;
var statearr_35032_35108 = state_34991__$1;
(statearr_35032_35108[(2)] = inst_34983);

(statearr_35032_35108[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (6))){
var inst_34886 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_35033_35109 = state_34991__$1;
(statearr_35033_35109[(2)] = inst_34886);

(statearr_35033_35109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (28))){
var inst_34911 = (state_34991[(26)]);
var inst_34938 = (state_34991[(2)]);
var inst_34939 = cljs.core.not_empty.call(null,inst_34911);
var state_34991__$1 = (function (){var statearr_35034 = state_34991;
(statearr_35034[(29)] = inst_34938);

return statearr_35034;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_35035_35110 = state_34991__$1;
(statearr_35035_35110[(1)] = (29));

} else {
var statearr_35036_35111 = state_34991__$1;
(statearr_35036_35111[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (25))){
var inst_34909 = (state_34991[(24)]);
var inst_34925 = (state_34991[(2)]);
var inst_34926 = cljs.core.not_empty.call(null,inst_34909);
var state_34991__$1 = (function (){var statearr_35037 = state_34991;
(statearr_35037[(30)] = inst_34925);

return statearr_35037;
})();
if(cljs.core.truth_(inst_34926)){
var statearr_35038_35112 = state_34991__$1;
(statearr_35038_35112[(1)] = (26));

} else {
var statearr_35039_35113 = state_34991__$1;
(statearr_35039_35113[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (34))){
var inst_34960 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
if(cljs.core.truth_(inst_34960)){
var statearr_35040_35114 = state_34991__$1;
(statearr_35040_35114[(1)] = (38));

} else {
var statearr_35041_35115 = state_34991__$1;
(statearr_35041_35115[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (17))){
var state_34991__$1 = state_34991;
var statearr_35042_35116 = state_34991__$1;
(statearr_35042_35116[(2)] = recompile_dependents);

(statearr_35042_35116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (3))){
var state_34991__$1 = state_34991;
var statearr_35043_35117 = state_34991__$1;
(statearr_35043_35117[(2)] = null);

(statearr_35043_35117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (12))){
var inst_34882 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_35044_35118 = state_34991__$1;
(statearr_35044_35118[(2)] = inst_34882);

(statearr_35044_35118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (2))){
var inst_34844 = (state_34991[(13)]);
var inst_34851 = cljs.core.seq.call(null,inst_34844);
var inst_34852 = inst_34851;
var inst_34853 = null;
var inst_34854 = (0);
var inst_34855 = (0);
var state_34991__$1 = (function (){var statearr_35045 = state_34991;
(statearr_35045[(7)] = inst_34852);

(statearr_35045[(8)] = inst_34855);

(statearr_35045[(9)] = inst_34853);

(statearr_35045[(10)] = inst_34854);

return statearr_35045;
})();
var statearr_35046_35119 = state_34991__$1;
(statearr_35046_35119[(2)] = null);

(statearr_35046_35119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (23))){
var inst_34905 = (state_34991[(19)]);
var inst_34913 = (state_34991[(23)]);
var inst_34909 = (state_34991[(24)]);
var inst_34908 = (state_34991[(25)]);
var inst_34911 = (state_34991[(26)]);
var inst_34916 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34918 = (function (){var all_files = inst_34905;
var res_SINGLEQUOTE_ = inst_34908;
var res = inst_34909;
var files_not_loaded = inst_34911;
var dependencies_that_loaded = inst_34913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34911,inst_34916,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34917){
var map__35047 = p__34917;
var map__35047__$1 = ((((!((map__35047 == null)))?((((map__35047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35047):map__35047);
var request_url = cljs.core.get.call(null,map__35047__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34911,inst_34916,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34919 = cljs.core.reverse.call(null,inst_34913);
var inst_34920 = cljs.core.map.call(null,inst_34918,inst_34919);
var inst_34921 = cljs.core.pr_str.call(null,inst_34920);
var inst_34922 = figwheel.client.utils.log.call(null,inst_34921);
var state_34991__$1 = (function (){var statearr_35049 = state_34991;
(statearr_35049[(31)] = inst_34916);

return statearr_35049;
})();
var statearr_35050_35120 = state_34991__$1;
(statearr_35050_35120[(2)] = inst_34922);

(statearr_35050_35120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (35))){
var state_34991__$1 = state_34991;
var statearr_35051_35121 = state_34991__$1;
(statearr_35051_35121[(2)] = true);

(statearr_35051_35121[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (19))){
var inst_34895 = (state_34991[(12)]);
var inst_34901 = figwheel.client.file_reloading.expand_files.call(null,inst_34895);
var state_34991__$1 = state_34991;
var statearr_35052_35122 = state_34991__$1;
(statearr_35052_35122[(2)] = inst_34901);

(statearr_35052_35122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (11))){
var state_34991__$1 = state_34991;
var statearr_35053_35123 = state_34991__$1;
(statearr_35053_35123[(2)] = null);

(statearr_35053_35123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (9))){
var inst_34884 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_35054_35124 = state_34991__$1;
(statearr_35054_35124[(2)] = inst_34884);

(statearr_35054_35124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (5))){
var inst_34855 = (state_34991[(8)]);
var inst_34854 = (state_34991[(10)]);
var inst_34857 = (inst_34855 < inst_34854);
var inst_34858 = inst_34857;
var state_34991__$1 = state_34991;
if(cljs.core.truth_(inst_34858)){
var statearr_35055_35125 = state_34991__$1;
(statearr_35055_35125[(1)] = (7));

} else {
var statearr_35056_35126 = state_34991__$1;
(statearr_35056_35126[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (14))){
var inst_34865 = (state_34991[(22)]);
var inst_34874 = cljs.core.first.call(null,inst_34865);
var inst_34875 = figwheel.client.file_reloading.eval_body.call(null,inst_34874,opts);
var inst_34876 = cljs.core.next.call(null,inst_34865);
var inst_34852 = inst_34876;
var inst_34853 = null;
var inst_34854 = (0);
var inst_34855 = (0);
var state_34991__$1 = (function (){var statearr_35057 = state_34991;
(statearr_35057[(7)] = inst_34852);

(statearr_35057[(32)] = inst_34875);

(statearr_35057[(8)] = inst_34855);

(statearr_35057[(9)] = inst_34853);

(statearr_35057[(10)] = inst_34854);

return statearr_35057;
})();
var statearr_35058_35127 = state_34991__$1;
(statearr_35058_35127[(2)] = null);

(statearr_35058_35127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (45))){
var state_34991__$1 = state_34991;
var statearr_35059_35128 = state_34991__$1;
(statearr_35059_35128[(2)] = null);

(statearr_35059_35128[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (26))){
var inst_34905 = (state_34991[(19)]);
var inst_34913 = (state_34991[(23)]);
var inst_34909 = (state_34991[(24)]);
var inst_34908 = (state_34991[(25)]);
var inst_34911 = (state_34991[(26)]);
var inst_34928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34930 = (function (){var all_files = inst_34905;
var res_SINGLEQUOTE_ = inst_34908;
var res = inst_34909;
var files_not_loaded = inst_34911;
var dependencies_that_loaded = inst_34913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34911,inst_34928,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34929){
var map__35060 = p__34929;
var map__35060__$1 = ((((!((map__35060 == null)))?((((map__35060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);
var namespace = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34911,inst_34928,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34931 = cljs.core.map.call(null,inst_34930,inst_34909);
var inst_34932 = cljs.core.pr_str.call(null,inst_34931);
var inst_34933 = figwheel.client.utils.log.call(null,inst_34932);
var inst_34934 = (function (){var all_files = inst_34905;
var res_SINGLEQUOTE_ = inst_34908;
var res = inst_34909;
var files_not_loaded = inst_34911;
var dependencies_that_loaded = inst_34913;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34911,inst_34928,inst_34930,inst_34931,inst_34932,inst_34933,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34913,inst_34909,inst_34908,inst_34911,inst_34928,inst_34930,inst_34931,inst_34932,inst_34933,state_val_34992,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34935 = setTimeout(inst_34934,(10));
var state_34991__$1 = (function (){var statearr_35062 = state_34991;
(statearr_35062[(33)] = inst_34933);

(statearr_35062[(34)] = inst_34928);

return statearr_35062;
})();
var statearr_35063_35129 = state_34991__$1;
(statearr_35063_35129[(2)] = inst_34935);

(statearr_35063_35129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (16))){
var state_34991__$1 = state_34991;
var statearr_35064_35130 = state_34991__$1;
(statearr_35064_35130[(2)] = reload_dependents);

(statearr_35064_35130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (38))){
var inst_34945 = (state_34991[(16)]);
var inst_34962 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34945);
var state_34991__$1 = state_34991;
var statearr_35065_35131 = state_34991__$1;
(statearr_35065_35131[(2)] = inst_34962);

(statearr_35065_35131[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (30))){
var state_34991__$1 = state_34991;
var statearr_35066_35132 = state_34991__$1;
(statearr_35066_35132[(2)] = null);

(statearr_35066_35132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (10))){
var inst_34865 = (state_34991[(22)]);
var inst_34867 = cljs.core.chunked_seq_QMARK_.call(null,inst_34865);
var state_34991__$1 = state_34991;
if(inst_34867){
var statearr_35067_35133 = state_34991__$1;
(statearr_35067_35133[(1)] = (13));

} else {
var statearr_35068_35134 = state_34991__$1;
(statearr_35068_35134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (18))){
var inst_34899 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
if(cljs.core.truth_(inst_34899)){
var statearr_35069_35135 = state_34991__$1;
(statearr_35069_35135[(1)] = (19));

} else {
var statearr_35070_35136 = state_34991__$1;
(statearr_35070_35136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (42))){
var state_34991__$1 = state_34991;
var statearr_35071_35137 = state_34991__$1;
(statearr_35071_35137[(2)] = null);

(statearr_35071_35137[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (37))){
var inst_34957 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_35072_35138 = state_34991__$1;
(statearr_35072_35138[(2)] = inst_34957);

(statearr_35072_35138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (8))){
var inst_34852 = (state_34991[(7)]);
var inst_34865 = (state_34991[(22)]);
var inst_34865__$1 = cljs.core.seq.call(null,inst_34852);
var state_34991__$1 = (function (){var statearr_35073 = state_34991;
(statearr_35073[(22)] = inst_34865__$1);

return statearr_35073;
})();
if(inst_34865__$1){
var statearr_35074_35139 = state_34991__$1;
(statearr_35074_35139[(1)] = (10));

} else {
var statearr_35075_35140 = state_34991__$1;
(statearr_35075_35140[(1)] = (11));

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
});})(c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29917__auto__,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto____0 = (function (){
var statearr_35079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35079[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto__);

(statearr_35079[(1)] = (1));

return statearr_35079;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto____1 = (function (state_34991){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_34991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e35080){if((e35080 instanceof Object)){
var ex__29921__auto__ = e35080;
var statearr_35081_35141 = state_34991;
(statearr_35081_35141[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35142 = state_34991;
state_34991 = G__35142;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto__ = function(state_34991){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto____1.call(this,state_34991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30031__auto__ = (function (){var statearr_35082 = f__30030__auto__.call(null);
(statearr_35082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_35082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,map__34837,map__34837__$1,opts,before_jsload,on_jsload,reload_dependents,map__34838,map__34838__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30029__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35145,link){
var map__35148 = p__35145;
var map__35148__$1 = ((((!((map__35148 == null)))?((((map__35148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35148):map__35148);
var file = cljs.core.get.call(null,map__35148__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35148,map__35148__$1,file){
return (function (p1__35143_SHARP_,p2__35144_SHARP_){
if(cljs.core._EQ_.call(null,p1__35143_SHARP_,p2__35144_SHARP_)){
return p1__35143_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35148,map__35148__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35154){
var map__35155 = p__35154;
var map__35155__$1 = ((((!((map__35155 == null)))?((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var match_length = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35150_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35150_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35157 = [];
var len__25897__auto___35160 = arguments.length;
var i__25898__auto___35161 = (0);
while(true){
if((i__25898__auto___35161 < len__25897__auto___35160)){
args35157.push((arguments[i__25898__auto___35161]));

var G__35162 = (i__25898__auto___35161 + (1));
i__25898__auto___35161 = G__35162;
continue;
} else {
}
break;
}

var G__35159 = args35157.length;
switch (G__35159) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35157.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35164_SHARP_,p2__35165_SHARP_){
return cljs.core.assoc.call(null,p1__35164_SHARP_,cljs.core.get.call(null,p2__35165_SHARP_,key),p2__35165_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35166){
var map__35169 = p__35166;
var map__35169__$1 = ((((!((map__35169 == null)))?((((map__35169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35169):map__35169);
var f_data = map__35169__$1;
var file = cljs.core.get.call(null,map__35169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35171,p__35172){
var map__35181 = p__35171;
var map__35181__$1 = ((((!((map__35181 == null)))?((((map__35181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35181):map__35181);
var opts = map__35181__$1;
var on_cssload = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35182 = p__35172;
var map__35182__$1 = ((((!((map__35182 == null)))?((((map__35182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35182):map__35182);
var files_msg = map__35182__$1;
var files = cljs.core.get.call(null,map__35182__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35185_35189 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__35186_35190 = null;
var count__35187_35191 = (0);
var i__35188_35192 = (0);
while(true){
if((i__35188_35192 < count__35187_35191)){
var f_35193 = cljs.core._nth.call(null,chunk__35186_35190,i__35188_35192);
figwheel.client.file_reloading.reload_css_file.call(null,f_35193);

var G__35194 = seq__35185_35189;
var G__35195 = chunk__35186_35190;
var G__35196 = count__35187_35191;
var G__35197 = (i__35188_35192 + (1));
seq__35185_35189 = G__35194;
chunk__35186_35190 = G__35195;
count__35187_35191 = G__35196;
i__35188_35192 = G__35197;
continue;
} else {
var temp__4657__auto___35198 = cljs.core.seq.call(null,seq__35185_35189);
if(temp__4657__auto___35198){
var seq__35185_35199__$1 = temp__4657__auto___35198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35185_35199__$1)){
var c__25633__auto___35200 = cljs.core.chunk_first.call(null,seq__35185_35199__$1);
var G__35201 = cljs.core.chunk_rest.call(null,seq__35185_35199__$1);
var G__35202 = c__25633__auto___35200;
var G__35203 = cljs.core.count.call(null,c__25633__auto___35200);
var G__35204 = (0);
seq__35185_35189 = G__35201;
chunk__35186_35190 = G__35202;
count__35187_35191 = G__35203;
i__35188_35192 = G__35204;
continue;
} else {
var f_35205 = cljs.core.first.call(null,seq__35185_35199__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35205);

var G__35206 = cljs.core.next.call(null,seq__35185_35199__$1);
var G__35207 = null;
var G__35208 = (0);
var G__35209 = (0);
seq__35185_35189 = G__35206;
chunk__35186_35190 = G__35207;
count__35187_35191 = G__35208;
i__35188_35192 = G__35209;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35181,map__35181__$1,opts,on_cssload,map__35182,map__35182__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__35181,map__35181__$1,opts,on_cssload,map__35182,map__35182__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1482768547347