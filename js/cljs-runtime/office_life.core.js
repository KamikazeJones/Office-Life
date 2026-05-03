goog.provide('office_life.core');
office_life.core.initial_state = (function office_life$core$initial_state(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"world","world",-418292623),office_life.sim.world.initial_world(),new cljs.core.Keyword(null,"agents","agents",-1112413700),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [office_life.sim.agents.new_agent(new cljs.core.Keyword(null,"alice","alice",-1905328892),2.0,6.5,(5227511),new cljs.core.Keyword(null,"desk-1","desk-1",-1441420054)),office_life.sim.agents.new_agent(new cljs.core.Keyword(null,"bob","bob",-1352926751),5.0,6.5,(11457921),new cljs.core.Keyword(null,"desk-2","desk-2",666517155)),office_life.sim.agents.new_agent(new cljs.core.Keyword(null,"carol","carol",353894320),8.0,6.5,(16758605),new cljs.core.Keyword(null,"desk-3","desk-3",-1452488743))], null),new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null);
});
office_life.core.move_speed = 1.5;
office_life.core.dist_sq = (function office_life$core$dist_sq(p__15229,p__15230){
var vec__15231 = p__15229;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231,(1),null);
var vec__15234 = p__15230;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234,(1),null);
var dx = (tx - px);
var dy = (ty - py);
return ((dx * dx) + (dy * dy));
});
office_life.core.move_towards = (function office_life$core$move_towards(p__15237,p__15238,dt){
var vec__15239 = p__15237;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(1),null);
var vec__15242 = p__15238;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242,(1),null);
var dx = (tx - px);
var dy = (ty - py);
var dsq = ((dx * dx) + (dy * dy));
var step = (office_life.core.move_speed * dt);
if((dsq <= (step * step))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null);
} else {
var dist = Math.sqrt(dsq);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + ((dx / dist) * step)),(py + ((dy / dist) * step))], null);
}
});
office_life.core.arrived_QMARK_ = (function office_life$core$arrived_QMARK_(pos,target){
return (office_life.core.dist_sq(pos,target) <= 0.04);
});
office_life.core.find_obj = (function office_life$core$find_obj(world,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15245_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15245_SHARP_),id);
}),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(world)));
});
office_life.core.random_shelf = (function office_life$core$random_shelf(world){
var shelves = office_life.sim.world.find_objects(world,new cljs.core.Keyword(null,"shelf","shelf",-1470183451));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shelves,cljs.core.rand_int(cljs.core.count(shelves)));
});
office_life.core.find_agent = (function office_life$core$find_agent(agents,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15246_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15246_SHARP_),id);
}),agents));
});
office_life.core.update_agent = (function office_life$core$update_agent(agent,world,agents,dt){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__15249 = new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(agent);
var G__15249__$1 = (((G__15249 instanceof cljs.core.Keyword))?G__15249.fqn:null);
switch (G__15249__$1) {
case "fetch":
var agent__$1 = (((new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405).cljs$core$IFn$_invoke$arity$1(agent) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(agent,new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(office_life.core.random_shelf(world))):agent);
var target = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(office_life.core.find_obj(world,new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405).cljs$core$IFn$_invoke$arity$1(agent__$1)));
var new_pos = office_life.core.move_towards(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(agent__$1),target,dt);
if(office_life.core.arrived_QMARK_(new_pos,target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"take-file","take-file",-1457471621),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"take-file","take-file",-1457471621),new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498),1.0], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),true,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861)], 0));
}

break;
case "take-file":
var remaining = (new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498).cljs$core$IFn$_invoke$arity$2(agent,0.0) - dt);
if((remaining <= (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"moving","moving",1760797240),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498),0.0,new cljs.core.Keyword(null,"work-timer","work-timer",23115132),(10.0 + cljs.core.rand_int((21)))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"moving","moving",1760797240),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"take-file","take-file",-1457471621),new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498),remaining], 0));
}

break;
case "work":
var target = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(office_life.core.find_obj(world,new cljs.core.Keyword(null,"desk-id","desk-id",-1086432809).cljs$core$IFn$_invoke$arity$1(agent)));
var new_pos = office_life.core.move_towards(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(agent),target,dt);
if(office_life.core.arrived_QMARK_(new_pos,target)){
var remaining = (new cljs.core.Keyword(null,"work-timer","work-timer",23115132).cljs$core$IFn$_invoke$arity$1(agent) - dt);
if((remaining <= (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"work-timer","work-timer",23115132),0.0], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword(null,"work-timer","work-timer",23115132),remaining], 0));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),true,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861)], 0));
}

break;
case "return":
var target = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(office_life.core.find_obj(world,new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405).cljs$core$IFn$_invoke$arity$1(agent)));
var new_pos = office_life.core.move_towards(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(agent),target,dt);
if(office_life.core.arrived_QMARK_(new_pos,target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"put-file","put-file",-1044697896),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"put-file","put-file",-1044697896),new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498),1.0], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),true,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861)], 0));
}

break;
case "put-file":
var remaining = (new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498).cljs$core$IFn$_invoke$arity$2(agent,0.0) - dt);
if((remaining <= (0))){
var next_task = (((new cljs.core.Keyword(null,"coffee-need","coffee-need",602931628).cljs$core$IFn$_invoke$arity$2(agent,(0)) >= (70)))?new cljs.core.Keyword(null,"go-coffee","go-coffee",-1283629799):(((new cljs.core.Keyword(null,"social","social",-1560314971).cljs$core$IFn$_invoke$arity$2(agent,(0)) >= (70)))?new cljs.core.Keyword(null,"seek-chat","seek-chat",-1996725820):new cljs.core.Keyword(null,"fetch","fetch",-1081994244)
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"moving","moving",1760797240),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"task","task",-1476607993),next_task,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498),0.0,new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405),null], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"moving","moving",1760797240),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"put-file","put-file",-1044697896),new cljs.core.Keyword(null,"shelf-timer","shelf-timer",-787756498),remaining], 0));
}

break;
case "go-coffee":
var cm = office_life.sim.world.find_object(world,new cljs.core.Keyword(null,"coffee-machine","coffee-machine",-1812846820));
var target = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cm);
var new_pos = office_life.core.move_towards(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(agent),target,dt);
if(office_life.core.arrived_QMARK_(new_pos,target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"drink-coffee","drink-coffee",1654751871),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"drink-coffee","drink-coffee",1654751871),new cljs.core.Keyword(null,"coffee-timer","coffee-timer",1109644076),3.0], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),true,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861)], 0));
}

break;
case "drink-coffee":
var remaining = (new cljs.core.Keyword(null,"coffee-timer","coffee-timer",1109644076).cljs$core$IFn$_invoke$arity$2(agent,0.0) - dt);
if((remaining <= (0))){
var next_task = (((new cljs.core.Keyword(null,"social","social",-1560314971).cljs$core$IFn$_invoke$arity$2(agent,(0)) >= (70)))?new cljs.core.Keyword(null,"seek-chat","seek-chat",-1996725820):new cljs.core.Keyword(null,"fetch","fetch",-1081994244));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"moving","moving",1760797240),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"task","task",-1476607993),next_task,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"coffee-timer","coffee-timer",1109644076),0.0,new cljs.core.Keyword(null,"coffee-need","coffee-need",602931628),0.0], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"moving","moving",1760797240),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"drink-coffee","drink-coffee",1654751871),new cljs.core.Keyword(null,"coffee-timer","coffee-timer",1109644076),remaining], 0));
}

break;
case "seek-chat":
var agent__$1 = (((new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188).cljs$core$IFn$_invoke$arity$1(agent) == null))?(function (){var others = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15247_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15247_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(agent));
}),agents));
var partner = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(others,cljs.core.rand_int(cljs.core.count(others)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(agent,new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(partner));
})():agent);
var partner = office_life.core.find_agent(agents,new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188).cljs$core$IFn$_invoke$arity$1(agent__$1));
var target = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(partner);
var new_pos = office_life.core.move_towards(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(agent__$1),target,dt);
if(office_life.core.arrived_QMARK_(new_pos,target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),false,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"arrived-for-chat","arrived-for-chat",-942611523),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"chatting","chatting",79636451)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving","moving",1760797240),true,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861)], 0));
}

break;
case "arrived-for-chat":
return agent;

break;
case "chatting":
var remaining = (new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958).cljs$core$IFn$_invoke$arity$2(agent,0.0) - dt);
if((remaining <= (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"fetch","fetch",-1081994244),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),0.0,new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188),null,new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405),null], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"chatting","chatting",79636451),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),remaining], 0));
}

break;
case "chat-refused":
var remaining = (new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958).cljs$core$IFn$_invoke$arity$2(agent,0.0) - dt);
if((remaining <= (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"fetch","fetch",-1081994244),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),0.0,new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188),null,new cljs.core.Keyword(null,"shelf-id","shelf-id",320687405),null], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(agent,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"chat-refused","chat-refused",979612404),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),remaining], 0));
}

break;
default:
return agent;

}
})(),new cljs.core.Keyword(null,"refuse-timer","refuse-timer",-1205335300),(function (p1__15248_SHARP_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),((function (){var or__5142__auto__ = p1__15248_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - dt));
}));
});
office_life.core.reconcile_chats = (function office_life$core$reconcile_chats(agents){
var seekers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15250_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(p1__15250_SHARP_),new cljs.core.Keyword(null,"arrived-for-chat","arrived-for-chat",-942611523));
}),agents);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (agts,seeker){
var partner_id = new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188).cljs$core$IFn$_invoke$arity$1(seeker);
var partner = office_life.core.find_agent(agts,partner_id);
var willing_QMARK_ = (function (){var and__5140__auto__ = partner;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not((function (){var G__15252 = new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(partner);
var fexpr__15251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chatting","chatting",79636451),null,new cljs.core.Keyword(null,"seek-chat","seek-chat",-1996725820),null,new cljs.core.Keyword(null,"arrived-for-chat","arrived-for-chat",-942611523),null], null), null);
return (fexpr__15251.cljs$core$IFn$_invoke$arity$1 ? fexpr__15251.cljs$core$IFn$_invoke$arity$1(G__15252) : fexpr__15251.call(null,G__15252));
})())) && ((new cljs.core.Keyword(null,"social","social",-1560314971).cljs$core$IFn$_invoke$arity$2(partner,(0)) >= (20))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(willing_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(seeker))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(a,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"chatting","chatting",79636451),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"chatting","chatting",79636451),new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),(3.0 + cljs.core.rand_int((5)))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),partner_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(a,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"chatting","chatting",79636451),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"chatting","chatting",79636451),new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(seeker),new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),(3.0 + cljs.core.rand_int((5)))], 0));
} else {
return a;

}
}
}),agts);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(seeker))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(a,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"chat-refused","chat-refused",979612404),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"chat-refused","chat-refused",979612404),new cljs.core.Keyword(null,"chat-timer","chat-timer",-1378810958),1.5,new cljs.core.Keyword(null,"chat-partner-id","chat-partner-id",1043643188),null], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),partner_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"refuse-timer","refuse-timer",-1205335300),1.5);
} else {
return a;

}
}
}),agts);
}
}),agents,seekers);
});
office_life.core.tick = (function office_life$core$tick(state,dt){
var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state);
var agts0 = new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(state);
var agts1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15253_SHARP_){
return office_life.core.update_agent(p1__15253_SHARP_,world,agts0,dt);
}),agts0);
var agts2 = office_life.core.reconcile_chats(agts1);
var agts3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15254_SHARP_){
return office_life.sim.agents.step_needs(p1__15254_SHARP_,dt);
}),agts2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"agents","agents",-1112413700),agts3),new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.inc);
});

//# sourceMappingURL=office_life.core.js.map
