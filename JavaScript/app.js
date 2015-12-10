// set typing speed and wait times
// var typeWait = 1000;
// var typeGap = 1000;
// var typeSpeed = 40;

var typeWait = 0;
var typeGap = 1000;
var typeSpeed = 0;

var cursorChar = '&#9608;';

var originText;
if ($('#agent-login')) {
  originText = [$('#line1').html(), $('#line2').html()];
}
if ($('#return-button')[0]) {
  originText = [('...... ' + localStorage.getItem('AgentAlias') + $('#line1').html()), $('#line2').html()];
}

var currentTimeout;
var showCursor;

var typeWriter = function(id, order) {
  var loc = $(id);
  var fullText = originText[order];
  var letter = 0;

  // this function types one letter per call, then calls the subsequent typeLetter()
  var typeLetter = function() {
    currentTimeout = setTimeout(function() {
      loc.removeClass('hidden').addClass('visible');
      letter += 1;
      var showText = fullText.substring(0, letter);

      // stops the function from recurring when all letters are typed
      if (letter === fullText.length) {
        loc.html('&gt;&gt; ' + showText);
      } else {
        loc.html('&gt;&gt; ' + showText + '<span class="typed-cursor">' + cursorChar + '</span>');
        typeLetter();
      }
    }, typeSpeed);
  };
  typeLetter();

  // show cursor on next line
  var typeTime = fullText.length * typeSpeed + 100;
  showCursor = setTimeout(function() {
    $('#cursor-line').removeClass('hidden').addClass('visible');
  }, typeTime);
};

var typeLine1 = setTimeout(function() {
  $('#cursor-line').removeClass('visible').addClass('hiddenn');
  typeWriter('#line1', 0);
}, typeWait);

var delayTime1 = typeWait
  + originText[0].length * typeSpeed
  + 50 + typeGap;

var typeLine2 = setTimeout(function() {
  $('#cursor-line').removeClass('visible').addClass('hidden');
  typeWriter('#line2', 1);
}, delayTime1);

var delayTime2 = originText[1].length * typeSpeed + typeGap;

// specific for index.html
var showLogin;
if ($('#agent-login')) {
  showLogin = setTimeout(function() {
    $('#agent-login').removeClass('hidden').addClass('visible');
  }, delayTime1 + delayTime2);
}

// Specific for Fail.html
var showReturnButton;
if ($('#return-button')) {
  showReturnButton = setTimeout(function() {
    $('#return-button').removeClass('hidden').addClass('visible');
  }, delayTime1 + delayTime2);
}

// stops all timeouts
var skip = function() {
  clearTimeout(currentTimeout);
  clearTimeout(showCursor);
  clearTimeout(typeLine1);
  clearTimeout(typeLine2);
  clearTimeout(showLogin);
};

// rewrite text with value stored on page load
var rewriteText = function(id, order) {
  var loc = $(id);
  loc.html('&gt;&gt; ' + originText[order]);
  loc.removeClass('hidden').addClass('visible');
};

// trigger skip and rewrite on pressing enter or spacebar
$(document).keypress(function(key){
  if (key.which === 13 || key.which === 32) {
    skip();
    rewriteText('#line1', 0);
    rewriteText('#line2', 1);
    $('#cursor-line').removeClass('hidden').addClass('visible');

    // restoring element specific to page
    if ($('#agent-login')) {
      $('#agent-login').removeClass('hidden').addClass('visible');
    }
    if ($('#return-button')) {
      $('#return-button').removeClass('hidden').addClass('visible');
    }
  }
});

// keypress and click listeners for moving to the first puzzle
// $(document).keypress(function(key){
//   console.log(key.which);
//   if (key.which == 13 || key.which == 121) {
//     window.location.href = 'http://www.google.com';
//   }
// });

// Button specific to the Fail.html page redirecting to the index
$('#return-button').on('click', function(){
  window.location.href = 'index.html';
});

// For showing Alias name in Fail.html
// document.getElementById('line1').innerHTML = '......' + localStorage.getItem('AgentAlias') + ' you have proven yourself in need of more practice to reach the goal';

//Reset local storage
var currentStage;
localize(1);

//Add user name to localStorage

if ($('#user-button')) {
  var userButton = $('#user-button');
  userButton.on('click', function(e) {
    var agentName = $('#agent-name');
    var agentAlias = $('#agent-alias');
    var error = $('#input-error');
    e.preventDefault();
    if (agentName.val('') || agentAlias.val('')) {
      error.removeClass('hidden').addClass('visible');
    } else {
      tempAgentName = JSON.stringify(agentName.value);
      tempAgentAlias = JSON.stringify(agentAlias.value);
      localStorage.setItem('AgentName', tempAgentName);
      localStorage.setItem('AgentAlias', tempAgentAlias);
      agentName.value = '';
      agentAlias.value = '';
      window.location.href = 'puzzle1.html';
    }
  });
}
