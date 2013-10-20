uid = (function() {
   // Unique ID generating function
   // from http://stackoverflow.com/questions/3231459/create-unique-id-with-javascript/14714979#14714979
  var id = 0;
  return function(){
    if (arguments[0] === 0) id = 0; return id++;
  }
})();
