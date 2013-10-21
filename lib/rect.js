JSGame.Rect = function(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.left = x;
  this.top = y;
  this.right = x+w;
  this.bottom = y+w;
};

JSGame.Rect.prototype.intersects = function(r2) {
  return !(r2.left > this.right
    || r2.right < this.left
    || r2.top > this.bottom
    || r2.bottom < this.top);
};
