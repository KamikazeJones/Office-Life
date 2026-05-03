goog.provide('office_life.sim.world');
office_life.sim.world.grid_w = (10);
office_life.sim.world.grid_h = (8);
office_life.sim.world.initial_objects = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"desk-1","desk-1",-1441420054),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"desk","desk",1115359496),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.0,1.0], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"desk-2","desk-2",666517155),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"desk","desk",1115359496),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5.0,1.0], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"desk-3","desk-3",-1452488743),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"desk","desk",1115359496),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [8.0,1.0], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shelf-1","shelf-1",1875401928),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shelf","shelf",-1470183451),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.0,6.0], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shelf-2","shelf-2",360155014),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shelf","shelf",-1470183451),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5.0,6.0], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shelf-3","shelf-3",-1600367348),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shelf","shelf",-1470183451),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [8.0,6.0], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coffee-machine","coffee-machine",-1812846820),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coffee-machine","coffee-machine",-1812846820),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,3.5], null)], null)], null);
office_life.sim.world.walkable_QMARK_ = (function office_life$sim$world$walkable_QMARK_(p__12817){
var vec__12818 = p__12817;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12818,(1),null);
return (((x >= (0))) && ((((x < office_life.sim.world.grid_w)) && ((((y >= (0))) && ((y < office_life.sim.world.grid_h)))))));
});
office_life.sim.world.initial_world = (function office_life$sim$world$initial_world(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-w","grid-w",176780460),office_life.sim.world.grid_w,new cljs.core.Keyword(null,"grid-h","grid-h",-127151304),office_life.sim.world.grid_h,new cljs.core.Keyword(null,"objects","objects",2099713734),office_life.sim.world.initial_objects], null);
});
office_life.sim.world.find_object = (function office_life$sim$world$find_object(world,type){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12821_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12821_SHARP_),type);
}),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(world)));
});
office_life.sim.world.find_objects = (function office_life$sim$world$find_objects(world,type){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12822_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12822_SHARP_),type);
}),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(world));
});

//# sourceMappingURL=office_life.sim.world.js.map
