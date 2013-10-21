ship = function(x,y) {
  this.x = x;
  this.y = y;
  this.angle = 0;
  this.speed = 5;
  this.surf = new JSGame.Surface(x,y,40,40);
  this.surf.bindToStage();
  this.surf.image('https://www.cs.hmc.edu/trac/cs121sp2012_5/export/1/resources/images/menu%20images/spaceship.svg');
  this.rect = new JSGame.Rect(x,y,40,40);
};

ship.prototype.move = function() {
  var dx = Math.cos((this.angle-90)*(Math.PI/180))*this.speed;
  var dy = Math.sin((this.angle-90)*(Math.PI/180))*this.speed;
  
  this.surf.translate(dx, dy);

  this.x += dx;
  this.y += dy;

  this.rect = new JSGame.Rect(this.x, this.y, 40, 40);
};

ship.prototype.rotate = function(da) {
  this.surf.translate(0, 0, 0, da);
  this.angle += da;
};

ship.prototype.update = function() {

};

ship.prototype.draw = function() {
  this.surf.update();
};

var g = new JSGame.game(function() {

  var bullets = [];
  var asteroids = [];

  var player = null;

  this.options = {
    width: 640,
    height: 480,
  };

  this.init = function() {
    player = new ship(20,20);
  };

  this.update = function() {
    player.update();
    if (JSGame.keyDown(JSGame.key.left)) {
      player.rotate(-5);
    }
    if (JSGame.keyDown(JSGame.key.right)) {
      player.rotate(5);
    }
    if (JSGame.keyDown(JSGame.key.up)) {
      player.move();
    }
  };

  this.draw = function() {
    player.draw();
  };

});
