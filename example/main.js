var ball = function(x,y,diameter) {
  this.dx = 6;
  this.dy = 6;
  this.da = 1;
  this.diameter = diameter;

  this.surface = new Surface(x,y,diameter,diameter);
  this.surface.colorFill(255,0,0,1);
  this.surface.bindToStage();
}

ball.prototype.update = function() {
  this.surface.translate(this.dx, this.dy, 0, this.da);
  if (this.surface.x+this.diameter >= 640 || this.surface.x <= 0) {
    this.dx *= -1;
  }
  if (this.surface.y+this.diameter >= 480 || this.surface.y <= 0) {
    this.dy *= -1;
  }
};

ball.prototype.draw = function() {
  this.surface.update();
};

var g = new JSGame();

g.game({
  options: {
    width: 640,
    height: 480
  },
  init: function() {
    g.state.ball = new ball(20,20,50);
  },
  update: function() {
    g.state.ball.update();
  },
  draw: function() {
    g.state.ball.draw();
  }
});
