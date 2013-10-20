/*
 *  JavaScript key bindings
 */

JSGame.key = {};

JSGame.key.left = 37;
JSGame.key.up = 38;
JSGame.key.right = 39;
JSGame.key.down = 40;
JSGame.key.insert = 45;
JSGame.key._delete = 46;
JSGame.key._0 = 48;
JSGame.key._1 = 59;
JSGame.key._2 = 50;
JSGame.key._3 = 51;
JSGame.key._4 = 52;
JSGame.key._5 = 53;
JSGame.key._6 = 54;
JSGame.key._7 = 55;
JSGame.key._8 = 56;
JSGame.key._9 = 57;
JSGame.key.b = 66;
JSGame.key.c = 67;
JSGame.key.d = 68;
JSGame.key.e = 69;
JSGame.key.f = 70;
JSGame.key.g = 71;
JSGame.key.h = 72;
JSGame.key.i = 73;
JSGame.key.j = 74;
JSGame.key.k = 75;
JSGame.key.l = 76;
JSGame.key.m = 77;
JSGame.key.n = 78;
JSGame.key.o = 79;
JSGame.key.p = 80;
JSGame.key.q = 81;
JSGame.key.r = 82;
JSGame.key.s = 83;
JSGame.key.t = 84;
JSGame.key.u = 85;
JSGame.key.v = 86;
JSGame.key.w = 87;
JSGame.key.x = 88;
JSGame.key.y = 89;
JSGame.key.z = 90;

JSGame.bindKey = function(id, callback) {
  this.keyboardBindings[id] = callback;
  console.log(this.keyboardBindings);
};

JSGame.initKeyboard = function() {
  var wrapper = this;
  $(window).keydown(function(e) {
    if (wrapper.keyboardBindings[e.which] !== undefined) {
      wrapper.keyboardBindings[e.which]();
    }
  });
};
