Surface = function(x, y, w, h, customClass) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.z = 0;
  
  this.rotation = 0;

  this.styles = {
    margin: 0,
    padding: 0,
    background: 'none',
    width: this.w+'px',
    height: this.h+'px',
  };

  this.transform();

  this.id = uid();
  
  if (customClass !== undefined) {
    this.domString = '<div id="jsg'+this.id+'" class="'+customClass+'"></div>';
  } else {
    this.domString = '<div id="jsg'+this.id+'"></div>';
  }

};

Surface.prototype.update = function() {
  // update the css of the object
  $('#jsg'+this.id).css(this.styles);
};

Surface.prototype.bindToStage = function() {
  // insert the dom element
  $('#game-stage').append(this.domString);
};

Surface.prototype.setPosition = function(x, y, z) {
  // change the (x, y) properties and update the css
  this.x = x;
  this.y = y;
  
  if (z !== undefined) {
    this.z = z;
    this.styles.zIndex = z;
  }
};

Surface.prototype.setRotation = function(degree) {
  // change the rotation property
  this.rotation = degree;
  this.transform();
};

Surface.prototype.translate = function(dx, dy, dz, da) {
  this.x += dx;
  this.y += dy;
  if (dz !== undefined) {
    this.z += dz;
    this.styles.zIndex = this.z;
  };

  if (da !== undefined) {
    this.rotation += da;
  };
  
  this.transform();
};

Surface.prototype.colorFill = function(r, g, b, a) {
  // fill the element with a color
  if (a !== undefined) {
   this.styles['background-color'] = 'rgba('+r+','+g+','+b+','+a+')';
  } else {
   this.styles['background-color'] = 'rgba('+r+','+g+','+b+')';
  }
};

Surface.prototype.round = function(p) {
  this.styles['border-radius'] = p+'%'
};

Surface.prototype.image = function(image) {

};

Surface.prototype.transform = function() {
  this.styles.transform = 'translate('+this.x+'px,'+this.y+'px) rotate('+this.rotation+'deg)';
};

