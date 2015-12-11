
    var door = $('#door');
    var prize = $('#prize');

    var tempName = localStorage.getItem('AgentName');
    var tempAlias = localStorage.getItem('AgentAlias');
  //  console.log('tempname',tempName);
  //  console.log('tempalias',tempAlias);
    var userName = JSON.parse(tempName);
    var userAlias = JSON.parse(tempAlias);
  //  console.log('username',userName);
  //  console.log('useralias',userAlias);

    var putAlias = $('#putAlias');

    var writeAlias = function() {

    $('#slugHover').hover(function() {
        $('#center').css({ "-webkit-filter" : "brightness(190%)"});
        $('#left').css({ "-webkit-filter" : "brightness(190%)"});
        $('#right').css({ "-webkit-filter" : "brightness(190%)"});
        $('#left').css({ "-webkit-filter" : "drop-shadow(0px 0px 3px #fff)"});
        $('#right').css({ "-webkit-filter" : "drop-shadow(0px 0px 3px #fff)"});
        // $('#slugHover').css({"z-index": "3"});
    }, function() {
        $('#center').css({ "-webkit-filter" : "brightness(100%)"});
        $('#left').css({ "-webkit-filter" : "brightness(100%)"});
        $('#right').css({ "-webkit-filter" : "brightness(100%)"});
        // $('#slugHover').css({"z-index": "5"});
    });

    // filter: drop-shadow(5px 5px 10px #ccc);

    $('#slugHover').on('click', function() {
      var $center = $("#center"), degree = 0, timer;
      rotate();
      function rotate() {
        $center.css({ '-webkitTransform': 'rotate(' + degree + 'deg)'});
        $center.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            ++degree; rotate();
        },10);
      }

    setTimeout(function() {
      clearTimeout(timer);
      $('#right').animate({
          left: '+=200px'
      }, 2000);
      $('#left').animate({
          left: '-=200px'
      }, 2000);
      $('#center').animate({
          left: '+=200px'
      }, 2000);
    }, 2000);

    setTimeout(function(){
      prize.removeClass('hidden').addClass('visible');
    }, 4000);

    $('#slugHover').off('click');
    $('#slugHover').unbind('mouseenter mouseleave');

  });

}
// fills in user agent alias on success screen
putAlias.html(userAlias);
writeAlias();
