/*
 * JavaScript Game Framework
 * Matt Roelle
 * 2013
 */

JSGame = function() {
  this.version = '0.1';
  this.state = {};
  this.keyboardBindings = {};
};

JSGame.prototype.game = function(o) {

  this.initKeyboard();

  $(document).ready(function() {

    var defaults = {
      // default options
      options: {
        fps:        60,
        fullscreen: false,
        width:      800,
        height:     600,
        position: 'fixed',
        container: 'body'
      },
      init:       function() {},
      update:     function() {},
      draw:       function() {}
    };

    var properties = $.extend(defaults.options, o.options || {})
      , functions  = $.extend(defaults, o || {});

    var containerStyles = {
      // css for game container
      width: properties.width+'px',
      height: properties.height+'px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: '0',
      border: '1px solid black',
      padding: 0,
      margin: 0,
      'box-sizing': 'border-box'
    };

    // div where all drawing will occur
    $(properties.container).prepend('<div id="game-stage"></div>');
    $('#game-stage').css(containerStyles);

    // initialize function
    // only called once
    functions.init();


    return setInterval(function() {
      functions.update();
      functions.draw();
    }, (1000/properties.fps));
  });
};
