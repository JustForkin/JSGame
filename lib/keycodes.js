/*
 *  JavaScript key bindings
 */

JSGame.prototype.key = {};

JSGame.prototype.key.left = 37;
JSGame.prototype.key.up = 38;
JSGame.prototype.key.right = 39;
JSGame.prototype.key.down = 40;
JSGame.prototype.key.insert = 45;
JSGame.prototype.key._delete = 46;
JSGame.prototype.key._0 = 48;
JSGame.prototype.key._1 = 59;
JSGame.prototype.key._2 = 50;
JSGame.prototype.key._3 = 51;
JSGame.prototype.key._4 = 52;
JSGame.prototype.key._5 = 53;
JSGame.prototype.key._6 = 54;
JSGame.prototype.key._7 = 55;
JSGame.prototype.key._8 = 56;
JSGame.prototype.key._9 = 57;
JSGame.prototype.key.b = 66;
JSGame.prototype.key.c = 67;
JSGame.prototype.key.d = 68;
JSGame.prototype.key.e = 69;
JSGame.prototype.key.f = 70;
JSGame.prototype.key.g = 71;
JSGame.prototype.key.h = 72;
JSGame.prototype.key.i = 73;
JSGame.prototype.key.j = 74;
JSGame.prototype.key.k = 75;
JSGame.prototype.key.l = 76;
JSGame.prototype.key.m = 77;
JSGame.prototype.key.n = 78;
JSGame.prototype.key.o = 79;
JSGame.prototype.key.p = 80;
JSGame.prototype.key.q = 81;
JSGame.prototype.key.r = 82;
JSGame.prototype.key.s = 83;
JSGame.prototype.key.t = 84;
JSGame.prototype.key.u = 85;
JSGame.prototype.key.v = 86;
JSGame.prototype.key.w = 87;
JSGame.prototype.key.x = 88;
JSGame.prototype.key.y = 89;
JSGame.prototype.key.z = 90;

JSGame.prototype.bindKey = function(id, callback) {
  this.keyboardBindings[id] = callback;
  console.log(this.keyboardBindings);
};

JSGame.prototype.initKeyboard = function() {
  var wrapper = this;
  $(window).keydown(function(e) {
    if (wrapper.keyboardBindings[e.which] !== undefined) {
      wrapper.keyboardBindings[e.which]();
    }
  });
};
