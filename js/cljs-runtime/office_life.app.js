goog.provide('office_life.app');
if((typeof office_life !== 'undefined') && (typeof office_life.app !== 'undefined') && (typeof office_life.app.state !== 'undefined')){
} else {
office_life.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(office_life.core.initial_state());
}
if((typeof office_life !== 'undefined') && (typeof office_life.app !== 'undefined') && (typeof office_life.app.game !== 'undefined')){
} else {
office_life.app.game = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
office_life.app.init = (function office_life$app$init(){
if((cljs.core.deref(office_life.app.game) == null)){
return cljs.core.reset_BANG_(office_life.app.game,office_life.renderer.phaser.create_game_BANG_(office_life.app.state));
} else {
return null;
}
});
office_life.app.reload = (function office_life$app$reload(){
return console.log("Hot reload \u2013 Simulation l\u00E4uft weiter");
});

//# sourceMappingURL=office_life.app.js.map
