JSGame.game = function(o) {
  JSGame.initKeyboard();

  $(document).ready(function() {

    var defaults = {
      // default options
      fps:        60,
      fullscreen: false,
      width:      800,
      height:     600,
      container: 'body'
    };

    var g = new o();

    var properties = $.extend(defaults, g.options || {});

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
    g.init();


    setInterval(function() {
      g.update();
      g.draw();
    }, (1000/properties.fps));
  });
};
