goog.provide('office_life.renderer.phaser');
var module$node_modules$phaser$dist$phaser=shadow.js.require("module$node_modules$phaser$dist$phaser", {});
var module$node_modules$tone$build$esm$index=shadow.js.require("module$node_modules$tone$build$esm$index", {});
office_life.renderer.phaser.tile_w = (64);
office_life.renderer.phaser.tile_h = (32);
office_life.renderer.phaser.offset_x = (340);
office_life.renderer.phaser.offset_y = (60);
office_life.renderer.phaser.canvas_w = (800);
office_life.renderer.phaser.canvas_h = (520);
office_life.renderer.phaser.sim_speed = 1.0;
office_life.renderer.phaser.sim_step = (1.0 / (20));
office_life.renderer.phaser.lerp_speed = 0.35;
office_life.renderer.phaser.iso__GT_screen = (function office_life$renderer$phaser$iso__GT_screen(p__15256){
var vec__15257 = p__15256;
var gx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15257,(0),null);
var gy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15257,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((340) + ((gx - gy) * ((64) / (2)))),((60) + ((gx + gy) * ((32) / (2))))], null);
});
office_life.renderer.phaser.lerp = (function office_life$renderer$phaser$lerp(a,b,t){
return (a + ((b - a) * t));
});
/**
 * Zeichnet eine quadratische Bézierkurve von der aktuellen Position nach (x2,y2)
 * mit Kontrollpunkt (cx,cy), approximiert durch n Liniensegmente.
 */
office_life.renderer.phaser.quadratic_bezier_to_BANG_ = (function office_life$renderer$phaser$quadratic_bezier_to_BANG_(gfx,x0,y0,cx,cy,x2,y2){
var n__5741__auto__ = (8);
var i = (0);
while(true){
if((i < n__5741__auto__)){
var t_15453 = ((i + (1)) / 8.0);
var mt_15454 = (1.0 - t_15453);
var x_15455 = ((((mt_15454 * mt_15454) * x0) + ((((2) * mt_15454) * t_15453) * cx)) + ((t_15453 * t_15453) * x2));
var y_15456 = ((((mt_15454 * mt_15454) * y0) + ((((2) * mt_15454) * t_15453) * cy)) + ((t_15453 * t_15453) * y2));
gfx.lineTo(x_15455,y_15456);

var G__15457 = (i + (1));
i = G__15457;
continue;
} else {
return null;
}
break;
}
});
office_life.renderer.phaser.draw_diamond_BANG_ = (function office_life$renderer$phaser$draw_diamond_BANG_(gfx,sx,sy,fill,alpha){
var hw = ((64) / (2));
var hh = ((32) / (2));
gfx.fillStyle(fill,alpha);

gfx.beginPath();

gfx.moveTo(sx,sy);

gfx.lineTo((sx + hw),(sy + hh));

gfx.lineTo(sx,(sy + (32)));

gfx.lineTo((sx - hw),(sy + hh));

gfx.closePath();

gfx.fillPath();

return gfx.strokePath();
});
office_life.renderer.phaser.draw_floor_BANG_ = (function office_life$renderer$phaser$draw_floor_BANG_(gfx,p__15260){
var map__15261 = p__15260;
var map__15261__$1 = cljs.core.__destructure_map(map__15261);
var grid_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15261__$1,new cljs.core.Keyword(null,"grid-w","grid-w",176780460));
var grid_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15261__$1,new cljs.core.Keyword(null,"grid-h","grid-h",-127151304));
gfx.lineStyle((1),(0),0.12);

var seq__15262 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_h));
var chunk__15267 = null;
var count__15268 = (0);
var i__15269 = (0);
while(true){
if((i__15269 < count__15268)){
var y = chunk__15267.cljs$core$IIndexed$_nth$arity$2(null,i__15269);
var seq__15270_15458 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_w));
var chunk__15271_15459 = null;
var count__15272_15460 = (0);
var i__15273_15461 = (0);
while(true){
if((i__15273_15461 < count__15272_15460)){
var x_15462 = chunk__15271_15459.cljs$core$IIndexed$_nth$arity$2(null,i__15273_15461);
var vec__15304_15463 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15462,y], null));
var sx_15464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304_15463,(0),null);
var sy_15465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15304_15463,(1),null);
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15464,sy_15465,(14216920),1.0);


var G__15466 = seq__15270_15458;
var G__15467 = chunk__15271_15459;
var G__15468 = count__15272_15460;
var G__15469 = (i__15273_15461 + (1));
seq__15270_15458 = G__15466;
chunk__15271_15459 = G__15467;
count__15272_15460 = G__15468;
i__15273_15461 = G__15469;
continue;
} else {
var temp__5825__auto___15470 = cljs.core.seq(seq__15270_15458);
if(temp__5825__auto___15470){
var seq__15270_15471__$1 = temp__5825__auto___15470;
if(cljs.core.chunked_seq_QMARK_(seq__15270_15471__$1)){
var c__5673__auto___15472 = cljs.core.chunk_first(seq__15270_15471__$1);
var G__15473 = cljs.core.chunk_rest(seq__15270_15471__$1);
var G__15474 = c__5673__auto___15472;
var G__15475 = cljs.core.count(c__5673__auto___15472);
var G__15476 = (0);
seq__15270_15458 = G__15473;
chunk__15271_15459 = G__15474;
count__15272_15460 = G__15475;
i__15273_15461 = G__15476;
continue;
} else {
var x_15477 = cljs.core.first(seq__15270_15471__$1);
var vec__15307_15478 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15477,y], null));
var sx_15479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307_15478,(0),null);
var sy_15480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307_15478,(1),null);
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15479,sy_15480,(14216920),1.0);


var G__15481 = cljs.core.next(seq__15270_15471__$1);
var G__15482 = null;
var G__15483 = (0);
var G__15484 = (0);
seq__15270_15458 = G__15481;
chunk__15271_15459 = G__15482;
count__15272_15460 = G__15483;
i__15273_15461 = G__15484;
continue;
}
} else {
}
}
break;
}

var G__15485 = seq__15262;
var G__15486 = chunk__15267;
var G__15487 = count__15268;
var G__15488 = (i__15269 + (1));
seq__15262 = G__15485;
chunk__15267 = G__15486;
count__15268 = G__15487;
i__15269 = G__15488;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15262);
if(temp__5825__auto__){
var seq__15262__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15262__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15262__$1);
var G__15489 = cljs.core.chunk_rest(seq__15262__$1);
var G__15490 = c__5673__auto__;
var G__15491 = cljs.core.count(c__5673__auto__);
var G__15492 = (0);
seq__15262 = G__15489;
chunk__15267 = G__15490;
count__15268 = G__15491;
i__15269 = G__15492;
continue;
} else {
var y = cljs.core.first(seq__15262__$1);
var seq__15263_15493 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_w));
var chunk__15264_15494 = null;
var count__15265_15495 = (0);
var i__15266_15496 = (0);
while(true){
if((i__15266_15496 < count__15265_15495)){
var x_15497 = chunk__15264_15494.cljs$core$IIndexed$_nth$arity$2(null,i__15266_15496);
var vec__15316_15498 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15497,y], null));
var sx_15499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316_15498,(0),null);
var sy_15500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316_15498,(1),null);
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15499,sy_15500,(14216920),1.0);


var G__15501 = seq__15263_15493;
var G__15502 = chunk__15264_15494;
var G__15503 = count__15265_15495;
var G__15504 = (i__15266_15496 + (1));
seq__15263_15493 = G__15501;
chunk__15264_15494 = G__15502;
count__15265_15495 = G__15503;
i__15266_15496 = G__15504;
continue;
} else {
var temp__5825__auto___15505__$1 = cljs.core.seq(seq__15263_15493);
if(temp__5825__auto___15505__$1){
var seq__15263_15506__$1 = temp__5825__auto___15505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15263_15506__$1)){
var c__5673__auto___15507 = cljs.core.chunk_first(seq__15263_15506__$1);
var G__15508 = cljs.core.chunk_rest(seq__15263_15506__$1);
var G__15509 = c__5673__auto___15507;
var G__15510 = cljs.core.count(c__5673__auto___15507);
var G__15511 = (0);
seq__15263_15493 = G__15508;
chunk__15264_15494 = G__15509;
count__15265_15495 = G__15510;
i__15266_15496 = G__15511;
continue;
} else {
var x_15512 = cljs.core.first(seq__15263_15506__$1);
var vec__15319_15513 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15512,y], null));
var sx_15514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15319_15513,(0),null);
var sy_15515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15319_15513,(1),null);
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15514,sy_15515,(14216920),1.0);


var G__15516 = cljs.core.next(seq__15263_15506__$1);
var G__15517 = null;
var G__15518 = (0);
var G__15519 = (0);
seq__15263_15493 = G__15516;
chunk__15264_15494 = G__15517;
count__15265_15495 = G__15518;
i__15266_15496 = G__15519;
continue;
}
} else {
}
}
break;
}

var G__15520 = cljs.core.next(seq__15262__$1);
var G__15521 = null;
var G__15522 = (0);
var G__15523 = (0);
seq__15262 = G__15520;
chunk__15267 = G__15521;
count__15268 = G__15522;
i__15269 = G__15523;
continue;
}
} else {
return null;
}
}
break;
}
});
office_life.renderer.phaser.draw_desk_BANG_ = (function office_life$renderer$phaser$draw_desk_BANG_(gfx,cx,cy){
gfx.fillStyle((7162945),1.0);

return gfx.fillRect((cx - (18)),(cy - (14)),(36),(20));
});
office_life.renderer.phaser.draw_shelf_BANG_ = (function office_life$renderer$phaser$draw_shelf_BANG_(gfx,cx,cy){
gfx.fillStyle((6111287),1.0);

var seq__15322_15524 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(9),(0)], null));
var chunk__15323_15525 = null;
var count__15324_15526 = (0);
var i__15325_15527 = (0);
while(true){
if((i__15325_15527 < count__15324_15526)){
var dy_15528 = chunk__15323_15525.cljs$core$IIndexed$_nth$arity$2(null,i__15325_15527);
gfx.fillRect((cx - (22)),(cy - dy_15528),(44),(6));


var G__15529 = seq__15322_15524;
var G__15530 = chunk__15323_15525;
var G__15531 = count__15324_15526;
var G__15532 = (i__15325_15527 + (1));
seq__15322_15524 = G__15529;
chunk__15323_15525 = G__15530;
count__15324_15526 = G__15531;
i__15325_15527 = G__15532;
continue;
} else {
var temp__5825__auto___15533 = cljs.core.seq(seq__15322_15524);
if(temp__5825__auto___15533){
var seq__15322_15534__$1 = temp__5825__auto___15533;
if(cljs.core.chunked_seq_QMARK_(seq__15322_15534__$1)){
var c__5673__auto___15535 = cljs.core.chunk_first(seq__15322_15534__$1);
var G__15536 = cljs.core.chunk_rest(seq__15322_15534__$1);
var G__15537 = c__5673__auto___15535;
var G__15538 = cljs.core.count(c__5673__auto___15535);
var G__15539 = (0);
seq__15322_15524 = G__15536;
chunk__15323_15525 = G__15537;
count__15324_15526 = G__15538;
i__15325_15527 = G__15539;
continue;
} else {
var dy_15540 = cljs.core.first(seq__15322_15534__$1);
gfx.fillRect((cx - (22)),(cy - dy_15540),(44),(6));


var G__15541 = cljs.core.next(seq__15322_15534__$1);
var G__15542 = null;
var G__15543 = (0);
var G__15544 = (0);
seq__15322_15524 = G__15541;
chunk__15323_15525 = G__15542;
count__15324_15526 = G__15543;
i__15325_15527 = G__15544;
continue;
}
} else {
}
}
break;
}

var seq__15326 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15022389),(-20),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2001125),(-10),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4431943),(2),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16485376),(-20),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9315498),(-10),(8)], null)], null));
var chunk__15327 = null;
var count__15328 = (0);
var i__15329 = (0);
while(true){
if((i__15329 < count__15328)){
var vec__15336 = chunk__15327.cljs$core$IIndexed$_nth$arity$2(null,i__15329);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15336,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15336,(1),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15336,(2),null);
gfx.fillStyle(col,0.9);

gfx.fillRect((cx + dx),(cy - dy),(8),(4));


var G__15545 = seq__15326;
var G__15546 = chunk__15327;
var G__15547 = count__15328;
var G__15548 = (i__15329 + (1));
seq__15326 = G__15545;
chunk__15327 = G__15546;
count__15328 = G__15547;
i__15329 = G__15548;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15326);
if(temp__5825__auto__){
var seq__15326__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15326__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15326__$1);
var G__15549 = cljs.core.chunk_rest(seq__15326__$1);
var G__15550 = c__5673__auto__;
var G__15551 = cljs.core.count(c__5673__auto__);
var G__15552 = (0);
seq__15326 = G__15549;
chunk__15327 = G__15550;
count__15328 = G__15551;
i__15329 = G__15552;
continue;
} else {
var vec__15339 = cljs.core.first(seq__15326__$1);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(1),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(2),null);
gfx.fillStyle(col,0.9);

gfx.fillRect((cx + dx),(cy - dy),(8),(4));


var G__15553 = cljs.core.next(seq__15326__$1);
var G__15554 = null;
var G__15555 = (0);
var G__15556 = (0);
seq__15326 = G__15553;
chunk__15327 = G__15554;
count__15328 = G__15555;
i__15329 = G__15556;
continue;
}
} else {
return null;
}
}
break;
}
});
office_life.renderer.phaser.draw_coffee_machine_BANG_ = (function office_life$renderer$phaser$draw_coffee_machine_BANG_(gfx,cx,cy){
gfx.fillStyle((3622735),1.0);

gfx.fillRect((cx - (14)),(cy - (24)),(28),(26));

gfx.fillStyle((1402304),0.75);

gfx.fillRect((cx - (10)),(cy - (30)),(20),(8));

gfx.fillStyle((1779768),1.0);

gfx.fillRect((cx - (10)),(cy + (0)),(20),(4));

gfx.fillStyle((2171169),1.0);

gfx.fillRect((cx - (4)),(cy - (4)),(8),(8));

gfx.fillStyle((16717636),1.0);

return gfx.fillCircle((cx + (9)),(cy - (18)),(2));
});
office_life.renderer.phaser.draw_speech_bubble_BANG_ = (function office_life$renderer$phaser$draw_speech_bubble_BANG_(gfx,cx,head_y){
gfx.fillStyle((16777215),0.92);

gfx.fillRoundedRect((cx - (18)),(head_y - (58)),(36),(22),(5));

gfx.fillTriangle((cx - (5)),(head_y - (36)),(cx + (5)),(head_y - (36)),cx,(head_y - (28)));

gfx.fillStyle((4473924),1.0);

gfx.fillCircle((cx - (7)),(head_y - (47)),2.5);

gfx.fillCircle(cx,(head_y - (47)),2.5);

return gfx.fillCircle((cx + (7)),(head_y - (47)),2.5);
});
office_life.renderer.phaser.draw_refused_bubble_BANG_ = (function office_life$renderer$phaser$draw_refused_bubble_BANG_(gfx,cx,head_y){
gfx.fillStyle((13421772),0.88);

gfx.fillRoundedRect((cx - (18)),(head_y - (58)),(36),(22),(5));

gfx.fillTriangle((cx - (5)),(head_y - (36)),(cx + (5)),(head_y - (36)),cx,(head_y - (28)));

gfx.lineStyle(2.5,(15022389),1.0);

gfx.beginPath();

gfx.moveTo((cx - (8)),(head_y - (56)));

gfx.lineTo((cx + (8)),(head_y - (38)));

gfx.moveTo((cx + (8)),(head_y - (56)));

gfx.lineTo((cx - (8)),(head_y - (38)));

return gfx.strokePath();
});
office_life.renderer.phaser.draw_objects_BANG_ = (function office_life$renderer$phaser$draw_objects_BANG_(gfx,world){
var seq__15342 = cljs.core.seq(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(world));
var chunk__15343 = null;
var count__15344 = (0);
var i__15345 = (0);
while(true){
if((i__15345 < count__15344)){
var map__15356 = chunk__15343.cljs$core$IIndexed$_nth$arity$2(null,i__15345);
var map__15356__$1 = cljs.core.__destructure_map(map__15356);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15356__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15356__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var vec__15357_15557 = office_life.renderer.phaser.iso__GT_screen(pos);
var sx_15558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15357_15557,(0),null);
var sy_15559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15357_15557,(1),null);
var cx_15560 = sx_15558;
var cy_15561 = (sy_15559 + ((32) / (2)));
var G__15360_15562 = type;
var G__15360_15563__$1 = (((G__15360_15562 instanceof cljs.core.Keyword))?G__15360_15562.fqn:null);
switch (G__15360_15563__$1) {
case "desk":
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15558,sy_15559,(10868391),1.0);

office_life.renderer.phaser.draw_desk_BANG_(gfx,cx_15560,cy_15561);

break;
case "shelf":
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15558,sy_15559,(12364452),1.0);

office_life.renderer.phaser.draw_shelf_BANG_(gfx,cx_15560,cy_15561);

break;
case "coffee-machine":
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15558,sy_15559,(16772275),1.0);

office_life.renderer.phaser.draw_coffee_machine_BANG_(gfx,cx_15560,cy_15561);

break;
default:

}


var G__15565 = seq__15342;
var G__15566 = chunk__15343;
var G__15567 = count__15344;
var G__15568 = (i__15345 + (1));
seq__15342 = G__15565;
chunk__15343 = G__15566;
count__15344 = G__15567;
i__15345 = G__15568;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15342);
if(temp__5825__auto__){
var seq__15342__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15342__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15342__$1);
var G__15569 = cljs.core.chunk_rest(seq__15342__$1);
var G__15570 = c__5673__auto__;
var G__15571 = cljs.core.count(c__5673__auto__);
var G__15572 = (0);
seq__15342 = G__15569;
chunk__15343 = G__15570;
count__15344 = G__15571;
i__15345 = G__15572;
continue;
} else {
var map__15361 = cljs.core.first(seq__15342__$1);
var map__15361__$1 = cljs.core.__destructure_map(map__15361);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15361__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15361__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var vec__15362_15573 = office_life.renderer.phaser.iso__GT_screen(pos);
var sx_15574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15362_15573,(0),null);
var sy_15575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15362_15573,(1),null);
var cx_15576 = sx_15574;
var cy_15577 = (sy_15575 + ((32) / (2)));
var G__15365_15578 = type;
var G__15365_15579__$1 = (((G__15365_15578 instanceof cljs.core.Keyword))?G__15365_15578.fqn:null);
switch (G__15365_15579__$1) {
case "desk":
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15574,sy_15575,(10868391),1.0);

office_life.renderer.phaser.draw_desk_BANG_(gfx,cx_15576,cy_15577);

break;
case "shelf":
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15574,sy_15575,(12364452),1.0);

office_life.renderer.phaser.draw_shelf_BANG_(gfx,cx_15576,cy_15577);

break;
case "coffee-machine":
office_life.renderer.phaser.draw_diamond_BANG_(gfx,sx_15574,sy_15575,(16772275),1.0);

office_life.renderer.phaser.draw_coffee_machine_BANG_(gfx,cx_15576,cy_15577);

break;
default:

}


var G__15581 = cljs.core.next(seq__15342__$1);
var G__15582 = null;
var G__15583 = (0);
var G__15584 = (0);
seq__15342 = G__15581;
chunk__15343 = G__15582;
count__15344 = G__15583;
i__15345 = G__15584;
continue;
}
} else {
return null;
}
}
break;
}
});
office_life.renderer.phaser.mood_for = (function office_life$renderer$phaser$mood_for(p__15366){
var map__15367 = p__15366;
var map__15367__$1 = cljs.core.__destructure_map(map__15367);
var energy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15367__$1,new cljs.core.Keyword(null,"energy","energy",129856526),(50));
var stress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15367__$1,new cljs.core.Keyword(null,"stress","stress",1198669591),(50));
if((((energy > (70))) && ((stress < (40))))){
return new cljs.core.Keyword(null,"laugh","laugh",-239129900);
} else {
if((energy > (55))){
return new cljs.core.Keyword(null,"smile","smile",169279730);
} else {
if((stress > (65))){
return new cljs.core.Keyword(null,"annoyed","annoyed",-629198289);
} else {
if((energy < (30))){
return new cljs.core.Keyword(null,"sad","sad",427137188);
} else {
return new cljs.core.Keyword(null,"neutral","neutral",-1941956087);

}
}
}
}
});
office_life.renderer.phaser.draw_mouth_BANG_ = (function office_life$renderer$phaser$draw_mouth_BANG_(gfx,cx,cy,mood){
gfx.lineStyle((2),(3355443),1.0);

gfx.beginPath();

var G__15368_15585 = mood;
var G__15368_15586__$1 = (((G__15368_15585 instanceof cljs.core.Keyword))?G__15368_15585.fqn:null);
switch (G__15368_15586__$1) {
case "laugh":
gfx.moveTo((cx - (8)),(cy + (4)));

office_life.renderer.phaser.quadratic_bezier_to_BANG_(gfx,(cx - (8)),(cy + (4)),cx,(cy + (14)),(cx + (8)),(cy + (4)));

break;
case "smile":
gfx.moveTo((cx - (6)),(cy + (5)));

office_life.renderer.phaser.quadratic_bezier_to_BANG_(gfx,(cx - (6)),(cy + (5)),cx,(cy + (11)),(cx + (6)),(cy + (5)));

break;
case "annoyed":
gfx.moveTo((cx - (8)),(cy + (6)));

var n__5741__auto___15588 = (4);
var i_15589 = (0);
while(true){
if((i_15589 < n__5741__auto___15588)){
gfx.lineTo(((cx - (8)) + (i_15589 * (3))),((cy + (6)) + ((cljs.core.even_QMARK_(i_15589))?(-2):(2))));

var G__15590 = (i_15589 + (1));
i_15589 = G__15590;
continue;
} else {
}
break;
}

break;
case "sad":
gfx.moveTo((cx - (6)),(cy + (8)));

office_life.renderer.phaser.quadratic_bezier_to_BANG_(gfx,(cx - (6)),(cy + (8)),cx,(cy + (2)),(cx + (6)),(cy + (8)));

break;
case "neutral":
gfx.moveTo((cx - (5)),(cy + (5)));

gfx.lineTo((cx + (5)),(cy + (5)));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15368_15586__$1))));

}

return gfx.strokePath();
});
office_life.renderer.phaser.draw_face_BANG_ = (function office_life$renderer$phaser$draw_face_BANG_(gfx,cx,cy,r,agent){
gfx.fillStyle((16769202),1.0);

gfx.fillCircle(cx,cy,r);

gfx.fillStyle((1713022),1.0);

gfx.fillCircle((cx - (5)),(cy - (4)),2.5);

gfx.fillCircle((cx + (5)),(cy - (4)),2.5);

gfx.fillStyle((16777215),0.85);

gfx.fillCircle((cx - (6)),(cy - (5)),1.0);

gfx.fillCircle((cx + (4)),(cy - (5)),1.0);

return office_life.renderer.phaser.draw_mouth_BANG_(gfx,cx,cy,office_life.renderer.phaser.mood_for(agent));
});
office_life.renderer.phaser.draw_legs_BANG_ = (function office_life$renderer$phaser$draw_legs_BANG_(gfx,cx,cy,phase){
var swing = ((6) * Math.sin((phase * (6))));
gfx.fillStyle((3622735),1.0);

gfx.fillRect((cx - (8)),(cy + (8)),(6),((10) + swing));

return gfx.fillRect((cx + (2)),(cy + (8)),(6),((10) - swing));
});
office_life.renderer.phaser.draw_arms_BANG_ = (function office_life$renderer$phaser$draw_arms_BANG_(gfx,cx,cy,phase){
var swing = ((2) * Math.sin((phase * (6))));
var aswing = (- swing);
var lx = (cx - (13));
var rx = (cx + (13));
var ly = ((cy + (2)) + aswing);
var ry = ((cy + (2)) + swing);
gfx.fillStyle((7162945),1.0);

gfx.fillEllipse(lx,ly,(6),(8));

return gfx.fillEllipse(rx,ry,(6),(8));
});
office_life.renderer.phaser.draw_needs_bars_BANG_ = (function office_life$renderer$phaser$draw_needs_bars_BANG_(gfx,cx,head_y,r,agent){
var bw = (36);
var bh = (4);
var bx = (cx - (bw / (2)));
var by = ((head_y - r) - (22));
var seq__15369 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"energy","energy",129856526),(5025616)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"stress","stress",1198669591),(16007990)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"social","social",-1560314971),(2201331)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),new cljs.core.Keyword(null,"coffee-need","coffee-need",602931628),(9268835)], null)], null));
var chunk__15370 = null;
var count__15371 = (0);
var i__15372 = (0);
while(true){
if((i__15372 < count__15371)){
var vec__15379 = chunk__15370.cljs$core$IIndexed$_nth$arity$2(null,i__15372);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15379,(0),null);
var nk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15379,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15379,(2),null);
var val_15591 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(agent,nk,(0));
var y_15592 = (by + (i * (6)));
gfx.fillStyle((0),0.5);

gfx.fillRect(bx,y_15592,bw,bh);

gfx.fillStyle(color,0.9);

gfx.fillRect(bx,y_15592,(bw * (val_15591 / (100))),bh);


var G__15593 = seq__15369;
var G__15594 = chunk__15370;
var G__15595 = count__15371;
var G__15596 = (i__15372 + (1));
seq__15369 = G__15593;
chunk__15370 = G__15594;
count__15371 = G__15595;
i__15372 = G__15596;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15369);
if(temp__5825__auto__){
var seq__15369__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15369__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15369__$1);
var G__15597 = cljs.core.chunk_rest(seq__15369__$1);
var G__15598 = c__5673__auto__;
var G__15599 = cljs.core.count(c__5673__auto__);
var G__15600 = (0);
seq__15369 = G__15597;
chunk__15370 = G__15598;
count__15371 = G__15599;
i__15372 = G__15600;
continue;
} else {
var vec__15382 = cljs.core.first(seq__15369__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15382,(0),null);
var nk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15382,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15382,(2),null);
var val_15601 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(agent,nk,(0));
var y_15602 = (by + (i * (6)));
gfx.fillStyle((0),0.5);

gfx.fillRect(bx,y_15602,bw,bh);

gfx.fillStyle(color,0.9);

gfx.fillRect(bx,y_15602,(bw * (val_15601 / (100))),bh);


var G__15603 = cljs.core.next(seq__15369__$1);
var G__15604 = null;
var G__15605 = (0);
var G__15606 = (0);
seq__15369 = G__15603;
chunk__15370 = G__15604;
count__15371 = G__15605;
i__15372 = G__15606;
continue;
}
} else {
return null;
}
}
break;
}
});
office_life.renderer.phaser.draw_agent_BANG_ = (function office_life$renderer$phaser$draw_agent_BANG_(gfx,agent,vx,vy,phase,selected_QMARK_){
var hh = ((32) / (2));
var moving = new cljs.core.Keyword(null,"moving","moving",1760797240).cljs$core$IFn$_invoke$arity$1(agent);
var bob = (cljs.core.truth_(moving)?(1.5 * Math.sin((phase * (6)))):(0));
var cx = vx;
var cy = (((vy + hh) + (2)) + bob);
var r = (16);
var head_y = (cy - (14));
if(cljs.core.truth_(moving)){
office_life.renderer.phaser.draw_legs_BANG_(gfx,cx,cy,phase);

office_life.renderer.phaser.draw_arms_BANG_(gfx,cx,cy,phase);
} else {
}

gfx.fillStyle(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(agent),0.85);

gfx.fillEllipse(cx,(cy + (6)),(26),(18));

gfx.fillStyle(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(agent),1.0);

gfx.fillCircle(cx,head_y,r);

office_life.renderer.phaser.draw_face_BANG_(gfx,cx,head_y,(r - (2)),agent);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(agent),new cljs.core.Keyword(null,"drink-coffee","drink-coffee",1654751871))){
gfx.fillStyle((16777215),1.0);

gfx.fillRect((cx - (7)),(head_y - (42)),(14),(10));

gfx.fillStyle((5125166),0.95);

gfx.fillRect((cx - (5)),(head_y - (40)),(10),(7));

gfx.lineStyle((2),(16777215),1.0);

gfx.strokeRect((cx - (7)),(head_y - (42)),(14),(10));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(agent),new cljs.core.Keyword(null,"chatting","chatting",79636451))){
office_life.renderer.phaser.draw_speech_bubble_BANG_(gfx,cx,head_y);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(agent),new cljs.core.Keyword(null,"chat-refused","chat-refused",979612404))) || ((new cljs.core.Keyword(null,"refuse-timer","refuse-timer",-1205335300).cljs$core$IFn$_invoke$arity$2(agent,(0)) > (0))))){
office_life.renderer.phaser.draw_refused_bubble_BANG_(gfx,cx,head_y);
} else {
}

if(cljs.core.truth_(selected_QMARK_)){
return office_life.renderer.phaser.draw_needs_bars_BANG_(gfx,cx,head_y,r,agent);
} else {
return null;
}
});
office_life.renderer.phaser.nearest_agent = (function office_life$renderer$phaser$nearest_agent(agents,px,py){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__15385,a){
var vec__15386 = p__15385;
var bd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(0),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(1),null);
var vec__15389 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a));
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15389,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15389,(1),null);
var dx = (px - tx);
var dy = (py - (ty + ((32) / (2))));
var d = ((dx * dx) + (dy * dy));
if((d < bd)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bd,bid], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0E9,null], null),agents);
});
/**
 * Initialisiert Tone.js nach User-Interaktion (async, nach erstem Klick)
 */
office_life.renderer.phaser.setup_tone_BANG_ = (function office_life$renderer$phaser$setup_tone_BANG_(music_synth,step_synth,file_synth){
if((cljs.core.deref(music_synth) == null)){
return module$node_modules$tone$build$esm$index.start().then((function (){
var synth = (new module$node_modules$tone$build$esm$index.PolySynth(module$node_modules$tone$build$esm$index.Synth,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"triangle"], null),new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),0.005,new cljs.core.Keyword(null,"decay","decay",1036712184),0.1,new cljs.core.Keyword(null,"sustain","sustain",1604277844),0.3,new cljs.core.Keyword(null,"release","release",-1534371381),(1)], null)], null))));
var noise = (new module$node_modules$tone$build$esm$index.NoiseSynth(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noise","noise",-994696820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"white"], null),new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),0.001,new cljs.core.Keyword(null,"decay","decay",1036712184),0.05,new cljs.core.Keyword(null,"sustain","sustain",1604277844),(0),new cljs.core.Keyword(null,"release","release",-1534371381),0.01], null)], null))));
var tap_filter = (new module$node_modules$tone$build$esm$index.Filter((1600),"bandpass"));
var file_noise = (new module$node_modules$tone$build$esm$index.NoiseSynth(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noise","noise",-994696820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"pink"], null),new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),0.01,new cljs.core.Keyword(null,"decay","decay",1036712184),0.12,new cljs.core.Keyword(null,"sustain","sustain",1604277844),(0),new cljs.core.Keyword(null,"release","release",-1534371381),0.08], null)], null))));
var file_filter = (new module$node_modules$tone$build$esm$index.Filter((800),"bandpass"));
synth.toDestination();

(noise.volume.value = (-12));

noise.connect(tap_filter);

tap_filter.toDestination();

(file_noise.volume.value = (-8));

file_noise.connect(file_filter);

file_filter.toDestination();

cljs.core.reset_BANG_(music_synth,synth);

cljs.core.reset_BANG_(step_synth,noise);

cljs.core.reset_BANG_(file_synth,file_noise);

(module$node_modules$tone$build$esm$index.getDestination().mute = true);

return (window.officeLifeToggleSound = (function (on_QMARK_){
var dest = module$node_modules$tone$build$esm$index.getDestination();
return (dest.mute = cljs.core.not(on_QMARK_));
}));
})).catch((function (e){
return console.warn("Tone.js start failed:",e);
}));
} else {
return null;
}
});
office_life.renderer.phaser.mood__GT_note = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"laugh","laugh",-239129900),"E5",new cljs.core.Keyword(null,"smile","smile",169279730),"C5",new cljs.core.Keyword(null,"neutral","neutral",-1941956087),"A4",new cljs.core.Keyword(null,"annoyed","annoyed",-629198289),"D4",new cljs.core.Keyword(null,"sad","sad",427137188),"F3"], null);
office_life.renderer.phaser.setup_input_BANG_ = (function office_life$renderer$phaser$setup_input_BANG_(scene,state_atom,selected_id,music_synth,step_synth,file_synth){
scene.input.on("pointerdown",(function (ptr){
office_life.renderer.phaser.setup_tone_BANG_(music_synth,step_synth,file_synth);

var vec__15393 = office_life.renderer.phaser.nearest_agent(new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom)),ptr.x,ptr.y);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15393,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15393,(1),null);
var hit_QMARK_ = (d < ((28) * (28)));
cljs.core.reset_BANG_(selected_id,((hit_QMARK_)?id:null));

if(cljs.core.truth_((function (){var and__5140__auto__ = hit_QMARK_;
if(and__5140__auto__){
return cljs.core.deref(music_synth);
} else {
return and__5140__auto__;
}
})())){
var agent = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15392_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15392_SHARP_),id);
}),new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))));
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$3(office_life.renderer.phaser.mood__GT_note,office_life.renderer.phaser.mood_for(agent),"C4");
return cljs.core.deref(music_synth).triggerAttackRelease(note,"8n");
} else {
return null;
}
}));

return document.addEventListener("keydown",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",e.key)){
return cljs.core.reset_BANG_(selected_id,null);
} else {
return null;
}
}));
});
office_life.renderer.phaser.update_sim_BANG_ = (function office_life$renderer$phaser$update_sim_BANG_(state_atom,acc,walk_time,dt){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(walk_time,cljs.core._PLUS_,dt);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(acc,cljs.core._PLUS_,dt);

if((cljs.core.deref(acc) > office_life.renderer.phaser.sim_step)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,office_life.core.tick,(office_life.renderer.phaser.sim_step * 1.0));

return cljs.core.reset_BANG_(acc,0.0);
} else {
return null;
}
});
office_life.renderer.phaser.update_vis_pos_BANG_ = (function office_life$renderer$phaser$update_vis_pos_BANG_(vis_pos,agents){
var seq__15396 = cljs.core.seq(agents);
var chunk__15397 = null;
var count__15398 = (0);
var i__15399 = (0);
while(true){
if((i__15399 < count__15398)){
var a = chunk__15397.cljs$core$IIndexed$_nth$arity$2(null,i__15399);
var vec__15412_15607 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a));
var tx_15608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15412_15607,(0),null);
var ty_15609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15412_15607,(1),null);
var vec__15415_15610 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(vis_pos),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_15608,ty_15609], null));
var vx_15611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415_15610,(0),null);
var vy_15612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415_15610,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vis_pos,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [office_life.renderer.phaser.lerp(vx_15611,tx_15608,0.35),office_life.renderer.phaser.lerp(vy_15612,ty_15609,0.35)], null));


var G__15613 = seq__15396;
var G__15614 = chunk__15397;
var G__15615 = count__15398;
var G__15616 = (i__15399 + (1));
seq__15396 = G__15613;
chunk__15397 = G__15614;
count__15398 = G__15615;
i__15399 = G__15616;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15396);
if(temp__5825__auto__){
var seq__15396__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15396__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15396__$1);
var G__15617 = cljs.core.chunk_rest(seq__15396__$1);
var G__15618 = c__5673__auto__;
var G__15619 = cljs.core.count(c__5673__auto__);
var G__15620 = (0);
seq__15396 = G__15617;
chunk__15397 = G__15618;
count__15398 = G__15619;
i__15399 = G__15620;
continue;
} else {
var a = cljs.core.first(seq__15396__$1);
var vec__15418_15621 = office_life.renderer.phaser.iso__GT_screen(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a));
var tx_15622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418_15621,(0),null);
var ty_15623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418_15621,(1),null);
var vec__15421_15624 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(vis_pos),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_15622,ty_15623], null));
var vx_15625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421_15624,(0),null);
var vy_15626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421_15624,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vis_pos,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [office_life.renderer.phaser.lerp(vx_15625,tx_15622,0.35),office_life.renderer.phaser.lerp(vy_15626,ty_15623,0.35)], null));


var G__15627 = cljs.core.next(seq__15396__$1);
var G__15628 = null;
var G__15629 = (0);
var G__15630 = (0);
seq__15396 = G__15627;
chunk__15397 = G__15628;
count__15398 = G__15629;
i__15399 = G__15630;
continue;
}
} else {
return null;
}
}
break;
}
});
office_life.renderer.phaser.redraw_agents_BANG_ = (function office_life$renderer$phaser$redraw_agents_BANG_(ag,vis_pos,walk_time,selected_id,agents){
ag.clear();

var seq__15425 = cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__15424_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__15424_SHARP_));
}),agents));
var chunk__15426 = null;
var count__15427 = (0);
var i__15428 = (0);
while(true){
if((i__15428 < count__15427)){
var a = chunk__15426.cljs$core$IIndexed$_nth$arity$2(null,i__15428);
var vec__15435_15631 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(vis_pos),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),office_life.renderer.phaser.iso__GT_screen(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a)));
var vx_15632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435_15631,(0),null);
var vy_15633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435_15631,(1),null);
office_life.renderer.phaser.draw_agent_BANG_(ag,a,vx_15632,vy_15633,cljs.core.deref(walk_time),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)));


var G__15634 = seq__15425;
var G__15635 = chunk__15426;
var G__15636 = count__15427;
var G__15637 = (i__15428 + (1));
seq__15425 = G__15634;
chunk__15426 = G__15635;
count__15427 = G__15636;
i__15428 = G__15637;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15425);
if(temp__5825__auto__){
var seq__15425__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15425__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15425__$1);
var G__15638 = cljs.core.chunk_rest(seq__15425__$1);
var G__15639 = c__5673__auto__;
var G__15640 = cljs.core.count(c__5673__auto__);
var G__15641 = (0);
seq__15425 = G__15638;
chunk__15426 = G__15639;
count__15427 = G__15640;
i__15428 = G__15641;
continue;
} else {
var a = cljs.core.first(seq__15425__$1);
var vec__15438_15642 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(vis_pos),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),office_life.renderer.phaser.iso__GT_screen(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a)));
var vx_15643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15438_15642,(0),null);
var vy_15644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15438_15642,(1),null);
office_life.renderer.phaser.draw_agent_BANG_(ag,a,vx_15643,vy_15644,cljs.core.deref(walk_time),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)));


var G__15645 = cljs.core.next(seq__15425__$1);
var G__15646 = null;
var G__15647 = (0);
var G__15648 = (0);
seq__15425 = G__15645;
chunk__15426 = G__15646;
count__15427 = G__15647;
i__15428 = G__15648;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Spielt Tap-Sound wenn ein Bein maximal ausgestreckt ist (Vorzeichenwechsel von sin)
 */
office_life.renderer.phaser.update_footsteps_BANG_ = (function office_life$renderer$phaser$update_footsteps_BANG_(walk_time,step_sign,step_synth,agents){
if(cljs.core.truth_(cljs.core.deref(step_synth))){
var cur_sign = Math.sign(Math.sin((cljs.core.deref(walk_time) * (6))));
var prev = cljs.core.deref(step_sign);
cljs.core.reset_BANG_(step_sign,cur_sign);

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cur_sign,prev);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,(0));
if(and__5140__auto____$1){
return cljs.core.some(new cljs.core.Keyword(null,"moving","moving",1760797240),agents);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.deref(step_synth).triggerAttackRelease("32n");
} else {
return null;
}
} else {
return null;
}
});
/**
 * Sinus-Ton der von 2000 Hz auf 200 Hz in 0,6s gleitet
 */
office_life.renderer.phaser.play_take_file_BANG_ = (function office_life$renderer$phaser$play_take_file_BANG_(){
var osc = (new module$node_modules$tone$build$esm$index.Oscillator((2000),"sine"));
var gain = (new module$node_modules$tone$build$esm$index.Gain(0.25));
osc.connect(gain);

gain.toDestination();

osc.start();

osc.frequency.rampTo((200),0.6);

return setTimeout((function (){
osc.stop();

osc.dispose();

return gain.dispose();
}),(680));
});
/**
 * Sinus-Ton der von 200 Hz auf 2000 Hz in 0,6s gleitet
 */
office_life.renderer.phaser.play_put_file_BANG_ = (function office_life$renderer$phaser$play_put_file_BANG_(){
var osc = (new module$node_modules$tone$build$esm$index.Oscillator((200),"sine"));
var gain = (new module$node_modules$tone$build$esm$index.Gain(0.25));
osc.connect(gain);

gain.toDestination();

osc.start();

osc.frequency.rampTo((2000),0.6);

return setTimeout((function (){
osc.stop();

osc.dispose();

return gain.dispose();
}),(680));
});
/**
 * Warmer Ton: kurzer 400→200 Hz Glide, suggeriert das Eingießen
 */
office_life.renderer.phaser.play_coffee_BANG_ = (function office_life$renderer$phaser$play_coffee_BANG_(){
var osc = (new module$node_modules$tone$build$esm$index.Oscillator((400),"sine"));
var gain = (new module$node_modules$tone$build$esm$index.Gain(0.18));
osc.connect(gain);

gain.toDestination();

osc.start();

osc.frequency.rampTo((200),0.9);

return setTimeout((function (){
osc.stop();

osc.dispose();

return gain.dispose();
}),(1000));
});
office_life.renderer.phaser.play_action_sound_BANG_ = (function office_life$renderer$phaser$play_action_sound_BANG_(action){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"take-file","take-file",-1457471621))){
return office_life.renderer.phaser.play_take_file_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"put-file","put-file",-1044697896))){
return office_life.renderer.phaser.play_put_file_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"drink-coffee","drink-coffee",1654751871))){
return office_life.renderer.phaser.play_coffee_BANG_();
} else {
return null;
}
}
}
});
/**
 * Spielt Geräusch beim Herausnehmen/Zurückstellen einer Akte und beim Kaffeetrinken
 */
office_life.renderer.phaser.update_file_sounds_BANG_ = (function office_life$renderer$phaser$update_file_sounds_BANG_(prev_actions,music_synth,agents){
if(cljs.core.truth_(cljs.core.deref(music_synth))){
var seq__15441 = cljs.core.seq(agents);
var chunk__15444 = null;
var count__15445 = (0);
var i__15446 = (0);
while(true){
if((i__15446 < count__15445)){
var map__15451 = chunk__15444.cljs$core$IIndexed$_nth$arity$2(null,i__15446);
var map__15451__$1 = cljs.core.__destructure_map(map__15451);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(prev_actions),id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(action,prev)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prev_actions,cljs.core.assoc,id,action);

office_life.renderer.phaser.play_action_sound_BANG_(action);


var G__15649 = seq__15441;
var G__15650 = chunk__15444;
var G__15651 = count__15445;
var G__15652 = (i__15446 + (1));
seq__15441 = G__15649;
chunk__15444 = G__15650;
count__15445 = G__15651;
i__15446 = G__15652;
continue;
} else {
var G__15653 = seq__15441;
var G__15654 = chunk__15444;
var G__15655 = count__15445;
var G__15656 = (i__15446 + (1));
seq__15441 = G__15653;
chunk__15444 = G__15654;
count__15445 = G__15655;
i__15446 = G__15656;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15441);
if(temp__5825__auto__){
var seq__15441__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15441__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15441__$1);
var G__15657 = cljs.core.chunk_rest(seq__15441__$1);
var G__15658 = c__5673__auto__;
var G__15659 = cljs.core.count(c__5673__auto__);
var G__15660 = (0);
seq__15441 = G__15657;
chunk__15444 = G__15658;
count__15445 = G__15659;
i__15446 = G__15660;
continue;
} else {
var map__15452 = cljs.core.first(seq__15441__$1);
var map__15452__$1 = cljs.core.__destructure_map(map__15452);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(prev_actions),id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(action,prev)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prev_actions,cljs.core.assoc,id,action);

office_life.renderer.phaser.play_action_sound_BANG_(action);


var G__15661 = cljs.core.next(seq__15441__$1);
var G__15662 = null;
var G__15663 = (0);
var G__15664 = (0);
seq__15441 = G__15661;
chunk__15444 = G__15662;
count__15445 = G__15663;
i__15446 = G__15664;
continue;
} else {
var G__15665 = cljs.core.next(seq__15441__$1);
var G__15666 = null;
var G__15667 = (0);
var G__15668 = (0);
seq__15441 = G__15665;
chunk__15444 = G__15666;
count__15445 = G__15667;
i__15446 = G__15668;
continue;
}
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
office_life.renderer.phaser.create_game_BANG_ = (function office_life$renderer$phaser$create_game_BANG_(state_atom){
var floor_gfx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var obj_gfx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var agent_gfx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var hud_text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var acc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var vis_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var walk_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var selected_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var music_synth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var step_sign = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var step_synth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var file_synth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var prev_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var on_create = (function (){
var scene = this;
var fg = scene.add.graphics();
var og = scene.add.graphics();
var ag = scene.add.graphics();
var txt = scene.add.text((8),(8),"",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"13px",new cljs.core.Keyword(null,"color","color",1011675173),"#aaffaa",new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"offsetX","offsetX",-2005135414),(1),new cljs.core.Keyword(null,"offsetY","offsetY",-230567873),(1),new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"blur","blur",-453500461),(2),new cljs.core.Keyword(null,"fill","fill",883462889),true], null)], null)));
cljs.core.reset_BANG_(floor_gfx,fg);

cljs.core.reset_BANG_(obj_gfx,og);

cljs.core.reset_BANG_(agent_gfx,ag);

cljs.core.reset_BANG_(hud_text,txt);

office_life.renderer.phaser.setup_input_BANG_(scene,state_atom,selected_id,music_synth,step_synth,file_synth);

var s = cljs.core.deref(state_atom);
office_life.renderer.phaser.draw_floor_BANG_(fg,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(s));

return office_life.renderer.phaser.draw_objects_BANG_(og,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(s));
});
var on_update = (function (_time,delta){
var dt = (cljs.core.min.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = delta;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (16);
}
})(),(100)) / 1000.0);
var s = cljs.core.deref(state_atom);
office_life.renderer.phaser.update_sim_BANG_(state_atom,acc,walk_time,dt);

office_life.renderer.phaser.update_vis_pos_BANG_(vis_pos,new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom)));

office_life.renderer.phaser.update_footsteps_BANG_(walk_time,step_sign,step_synth,new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom)));

office_life.renderer.phaser.update_file_sounds_BANG_(prev_actions,music_synth,new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom)));

var temp__5825__auto___15669 = cljs.core.deref(agent_gfx);
if(cljs.core.truth_(temp__5825__auto___15669)){
var ag_15670 = temp__5825__auto___15669;
office_life.renderer.phaser.redraw_agents_BANG_(ag_15670,vis_pos,walk_time,selected_id,new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom)));
} else {
}

var temp__5825__auto__ = cljs.core.deref(hud_text);
if(cljs.core.truth_(temp__5825__auto__)){
var txt = temp__5825__auto__;
return txt.setText((""+"Tick "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(s))));
} else {
return null;
}
});
(window.officeLifeInit = (function (){
return office_life.renderer.phaser.setup_tone_BANG_(music_synth,step_synth,file_synth);
}));

return (new module$node_modules$phaser$dist$phaser.Game(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),module$node_modules$phaser$dist$phaser.AUTO,new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(520),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#1a1a2e",new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create","create",-1301499256),on_create,new cljs.core.Keyword(null,"update","update",1045576396),on_update], null),new cljs.core.Keyword(null,"parent","parent",-878878779),"game-container"], null))));
});

//# sourceMappingURL=office_life.renderer.phaser.js.map
