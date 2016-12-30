// Compiled by ClojureScript 1.9.229 {}
goog.provide('mydevcards.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
mydevcards.core.in_channel_one = cljs.core.async.chan.call(null);
mydevcards.core.in_channel_two = cljs.core.async.chan.call(null);
mydevcards.core.in_channel_three = cljs.core.async.chan.call(null);
/**
 * Constantly publishes the given value to the given channel in random
 * intervals every 0-5 seconds.
 */
mydevcards.core.randomly_constantly = (function mydevcards$core$randomly_constantly(channel,publish_value){
var c__27129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27129__auto__){
return (function (){
var f__27130__auto__ = (function (){var switch__27108__auto__ = ((function (c__27129__auto__){
return (function (state_29674){
var state_val_29675 = (state_29674[(1)]);
if((state_val_29675 === (1))){
var state_29674__$1 = state_29674;
var statearr_29676_29687 = state_29674__$1;
(statearr_29676_29687[(2)] = null);

(statearr_29676_29687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (2))){
var inst_29663 = cljs.core.rand_int.call(null,(5));
var inst_29664 = ((1000) * inst_29663);
var inst_29665 = cljs.core.async.timeout.call(null,inst_29664);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(4),inst_29665);
} else {
if((state_val_29675 === (3))){
var inst_29672 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29674__$1,inst_29672);
} else {
if((state_val_29675 === (4))){
var inst_29667 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29677 = state_29674;
(statearr_29677[(7)] = inst_29667);

return statearr_29677;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29674__$1,(5),channel,publish_value);
} else {
if((state_val_29675 === (5))){
var inst_29669 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29678 = state_29674;
(statearr_29678[(8)] = inst_29669);

return statearr_29678;
})();
var statearr_29679_29688 = state_29674__$1;
(statearr_29679_29688[(2)] = null);

(statearr_29679_29688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__27129__auto__))
;
return ((function (switch__27108__auto__,c__27129__auto__){
return (function() {
var mydevcards$core$randomly_constantly_$_state_machine__27109__auto__ = null;
var mydevcards$core$randomly_constantly_$_state_machine__27109__auto____0 = (function (){
var statearr_29683 = [null,null,null,null,null,null,null,null,null];
(statearr_29683[(0)] = mydevcards$core$randomly_constantly_$_state_machine__27109__auto__);

(statearr_29683[(1)] = (1));

return statearr_29683;
});
var mydevcards$core$randomly_constantly_$_state_machine__27109__auto____1 = (function (state_29674){
while(true){
var ret_value__27110__auto__ = (function (){try{while(true){
var result__27111__auto__ = switch__27108__auto__.call(null,state_29674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27111__auto__;
}
break;
}
}catch (e29684){if((e29684 instanceof Object)){
var ex__27112__auto__ = e29684;
var statearr_29685_29689 = state_29674;
(statearr_29685_29689[(5)] = ex__27112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29690 = state_29674;
state_29674 = G__29690;
continue;
} else {
return ret_value__27110__auto__;
}
break;
}
});
mydevcards$core$randomly_constantly_$_state_machine__27109__auto__ = function(state_29674){
switch(arguments.length){
case 0:
return mydevcards$core$randomly_constantly_$_state_machine__27109__auto____0.call(this);
case 1:
return mydevcards$core$randomly_constantly_$_state_machine__27109__auto____1.call(this,state_29674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mydevcards$core$randomly_constantly_$_state_machine__27109__auto__.cljs$core$IFn$_invoke$arity$0 = mydevcards$core$randomly_constantly_$_state_machine__27109__auto____0;
mydevcards$core$randomly_constantly_$_state_machine__27109__auto__.cljs$core$IFn$_invoke$arity$1 = mydevcards$core$randomly_constantly_$_state_machine__27109__auto____1;
return mydevcards$core$randomly_constantly_$_state_machine__27109__auto__;
})()
;})(switch__27108__auto__,c__27129__auto__))
})();
var state__27131__auto__ = (function (){var statearr_29686 = f__27130__auto__.call(null);
(statearr_29686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27129__auto__);

return statearr_29686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27131__auto__);
});})(c__27129__auto__))
);

return c__27129__auto__;
});
