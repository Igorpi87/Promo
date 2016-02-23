var myModule = (function() {

  var init = function() {
    _setUpListners();
  };

  var _setUpListners = function() {
    // прослушка событий

    $('#link_0-9').on('click', _showShops);
  };
  var myArray = [];
  myArray.push($('a.first-letter-link').attr('href').toString());
  console.log(myArray);

  var _showShops = function(e) {
    console.log('окно');
    e.preventDefault();
    
    $('#0-9').show("drop", "easeInOutCubic", 500);
  };

  return {
    init: init
  };

})();

myModule.init();