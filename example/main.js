var g = new JSGame.game(function() {
  var surf = new Surface(20,20,100,100);

  this.options = {
    width: 640,
    height: 480
  };

  this.init = function() {
    surf.bindToStage();
    surf.colorFill(255,0,0,1);
    surf.round(100);
  };

  this.update = function() {

  };

  this.draw = function() {
    surf.update();
  };
});
