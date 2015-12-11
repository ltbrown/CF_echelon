var interval;

function stopTimer() {
  clearInterval(interval);
}

function timerAll(secsRemain){
	// var secsRemain = 1000000000000000;
    $('#timer').html(secsRemain);
    interval = setInterval(function() {
      $('#timer').html(--secsRemain);

      if (secsRemain <= 0) {
        $('#timer').html('Time is up');
        stopTimer();
        disableButtons();
        alert('You Ran Out of Time');
        window.location.href = ('Fail.html');
      }
    }, 1000);
 }

var currentStage = 0;

function localize(stageNum) {
  currentStage = stageNum;
  var tempWins = JSON.stringify(currentStage);
  localStorage.setItem("WillFerrell", tempWins);
}
function getLocal() {
  var tempWins = localStorage.getItem("WillFerrell");
  currentStage = JSON.parse(tempWins);
}


//Added by Mike- Don's code for getting names for final page.
