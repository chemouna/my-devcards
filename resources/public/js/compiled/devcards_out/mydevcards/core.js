// Compiled by ClojureScript 1.9.229 {}
goog.provide('mydevcards.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
mydevcards.core.channel = cljs.core.async.chan.call(null,(5));
mydevcards.core.error_channel = cljs.core.async.chan.call(null,(5));
/**
 * Enqueue a new value into our channel.
 */
mydevcards.core.enqueue_val = (function mydevcards$core$enqueue_val(c,v){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29917__auto__ = ((function (c__30029__auto__){
return (function (state_41160){
var state_val_41161 = (state_41160[(1)]);
if((state_val_41161 === (1))){
var state_41160__$1 = state_41160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41160__$1,(2),c,v);
} else {
if((state_val_41161 === (2))){
var inst_41158 = (state_41160[(2)]);
var state_41160__$1 = state_41160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41160__$1,inst_41158);
} else {
return null;
}
}
});})(c__30029__auto__))
;
return ((function (switch__29917__auto__,c__30029__auto__){
return (function() {
var mydevcards$core$enqueue_val_$_state_machine__29918__auto__ = null;
var mydevcards$core$enqueue_val_$_state_machine__29918__auto____0 = (function (){
var statearr_41165 = [null,null,null,null,null,null,null];
(statearr_41165[(0)] = mydevcards$core$enqueue_val_$_state_machine__29918__auto__);

(statearr_41165[(1)] = (1));

return statearr_41165;
});
var mydevcards$core$enqueue_val_$_state_machine__29918__auto____1 = (function (state_41160){
while(true){
var ret_value__29919__auto__ = (function (){try{while(true){
var result__29920__auto__ = switch__29917__auto__.call(null,state_41160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29920__auto__;
}
break;
}
}catch (e41166){if((e41166 instanceof Object)){
var ex__29921__auto__ = e41166;
var statearr_41167_41169 = state_41160;
(statearr_41167_41169[(5)] = ex__29921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41170 = state_41160;
state_41160 = G__41170;
continue;
} else {
return ret_value__29919__auto__;
}
break;
}
});
mydevcards$core$enqueue_val_$_state_machine__29918__auto__ = function(state_41160){
switch(arguments.length){
case 0:
return mydevcards$core$enqueue_val_$_state_machine__29918__auto____0.call(this);
case 1:
return mydevcards$core$enqueue_val_$_state_machine__29918__auto____1.call(this,state_41160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mydevcards$core$enqueue_val_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$0 = mydevcards$core$enqueue_val_$_state_machine__29918__auto____0;
mydevcards$core$enqueue_val_$_state_machine__29918__auto__.cljs$core$IFn$_invoke$arity$1 = mydevcards$core$enqueue_val_$_state_machine__29918__auto____1;
return mydevcards$core$enqueue_val_$_state_machine__29918__auto__;
})()
;})(switch__29917__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_41168 = f__30030__auto__.call(null);
(statearr_41168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_41168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mydevcards.core","mydevcards.core",-1669387244),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"This is your first devcard!")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
mydevcards.core.main = (function mydevcards$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
mydevcards.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1482770039596