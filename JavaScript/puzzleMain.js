/***** GLOBAL VARIABLE TRACKING CURRENT QUESTION *****/
var NumberQuestion = 0;

/***** QUESTION TYPE TRUE OR FALSE LOGIC *****/
function questionTypeTF(currentQuestion) {

  var corAns;
  var wroAns;
  var showCor;
  var showWro;
  var disableButtons = function() {
    wroAns.disabled = true;
    corAns.disabled = true;
  };

  function CurrentTFQuestion(Num) {
    var handleBarTemplate = Handlebars.compile($('#question-tf-template').html());
    var insertTemplate = handleBarTemplate(puzzleData[Num]);
    $('#question-tf-holder').append(insertTemplate);
    showCor = $('#res-correct');
    showWro = $('#res-wrong');
    cont =  $('#cont');
    if (puzzleData[Num].answer == 'true') {
      corAns = $('#ans-True');
      wroAns = $('#ans-False');
  //    console.log('answer is true');
    } else {
  //    console.log('answer is false');
      wroAns = $('#ans-True');
      corAns = $('#ans-False');
    }

    timerAll(puzzleData[Num].timeAllowed);

    corAns.on('click', function(e){
      e.preventDefault();
      showCor.removeClass('hidden').addClass('visible');
    //  localize(questionNum+1);
      disableButtons();
      stopTimer();
    });

    wroAns.on('click', function(e){
      e.preventDefault();
      showWro.removeClass('hidden').addClass('visible');
      disableButtons();
      stopTimer();
    });
  }

  CurrentTFQuestion(currentQuestion);
  addEvent();

  function addEvent() {
    // If wrong answer go to fail.html
    $('#return-button').on('click', function(e){
    	e.preventDefault();
      window.location = 'Fail.html';
    });
    // If correct answer go to next question
    cont.on('click', function(e){
      e.preventDefault();
      $('#question-tf-holder').empty();
      typeOfQuestion(NumberQuestion);
    });
  }
}

/***** QUESTION TYPE MULTIPLE CHOICE LOGIC *****/
function questionTypeMC(currentQuestion) {
  var ansa;
  var ansb;
  var ansc;
  var ansd;
  var disableButtons = function () {
    ansa.disabled = true;
    ansb.disabled = true;
    ansc.disabled = true;
    ansd.disabled = true;
  };

  function CurrentMCQuestion(Num) {
    var handleBarTemplate = Handlebars.compile($('#question-MC-template').html());
    var insertTemplate = handleBarTemplate(puzzleData[Num]);
    $('#question-MC-holder').append(insertTemplate);

    // Add Event Listen buttons functions:
   ansa = $('#ansa');
   ansb = $('#ansb');
   ansc = $('#ansc');
   ansd = $('#ansd');
   correct = $('#res-correct');
   wrong = $('#res-wrong');

   timerAll(puzzleData[Num].timeAllowed);

  if(puzzleData[Num].answer =='a') {
    // Event Listeners for Answers
    ansa.on('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansb.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansc.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansd.on('click', function(e){
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });
  } else if (puzzleData[Num].answer =='b') {
    // Event Listeners for Answers
    ansb.on('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansa.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansc.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansd.on('click', function(e){
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });
  } else if (puzzleData[Num].answer =='c') {
    // Event Listeners for Answers
    ansc.on('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansa.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansb.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansd.on('click', function(e){
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });
  } else if (puzzleData[Num].answer =='d') {
    // Event Listeners for Answers
    ansd.on('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansa.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansc.on('click', function(e) {
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });

    ansb.on('click', function(e){
      e.preventDefault();
      wrong.removeClass('hidden').addClass("visible");
      disableButtons();
      stopTimer();
    });
  } else {
    console.log('no answer provided');
  }

//  addEvent();

  }

  CurrentMCQuestion(currentQuestion);
  addEvent();

  function addEvent() {
  //Continue and Returns buttons.
    $('#return-button').on('click', function(e){
      e.preventDefault();
      window.location = 'Fail.html';
    });

    $('#cont').on('click', function(e) {
      e.preventDefault();
      $('#question-MC-holder').empty();
      typeOfQuestion(NumberQuestion);

    });
  }

}


/***** QUESTION TYPE TEXT LOGIC *****/
function questionTypeText(currentQuestion) {
  var anOne;
  var anTwo;
  var anThree;
  var subButton;
  var showCor;
  var showWro;

  var disableButtons = function() {
    anOne.disabled = true;
    anTwo.disabled = true;
    anThree.disabled = true;
    subButton.disabled = true;
  }

  function CurrentTextQuestion(Num) {
    var handleBarTemplate = Handlebars.compile($('#question-Text-template').html());
    var insertTemplate = handleBarTemplate(puzzleData[Num]);
    $('#question-Text-holder').append(insertTemplate);

  	anOne = $('#aOne');
  	anTwo = $('#aTwo');
  	anThree = $('#aThree');
  	subButton = $('#subButt');
  	showCor = $('#res-correct');
  	showWro = $('#res-wrong');

    // CALLS FROM UNIVERSAL.JS SETS TIMER TO puzzleData[Num] SECONDS
  	timerAll(puzzleData[Num].timeAllowed);

  if (puzzleData[Num].numberOfAnswers == 3) {
  	subButton.on('click', function(e){
      console.log('submit button clicked');
  		e.preventDefault();
  		if (anOne.val() == puzzleData[Num].textAnswerOne && anTwo.val() == puzzleData[Num].textAnswerTwo && anThree.val() == puzzleData[Num].textAnswerThree) {
  			showCor.removeClass('hidden').addClass('visible');
  			// localize(4);
  			disableButtons();
  			stopTimer();
  		} else {
  			showWro.removeClass('hidden').addClass('visible');
  			disableButtons();
  			stopTimer();
  		}
  	});
  } else if (puzzleData[Num].numberOfAnswers == 2) {
  	subButton.on('click', function(e){
  		e.preventDefault();
  		if (anOne.val() == puzzleData[Num].textAnswerOne && anTwo.val() == puzzleData[Num].textAnswerTwo) {
  			showCor.removeClass('hidden').addClass('visible');
  			// localize(4);
  			disableButtons();
  			stopTimer();
  		} else {
  			showWro.removeClass('hidden').addClass('visible');
  			disableButtons();
  			stopTimer();
  		}
  	});
  } else if (puzzleData[Num].numberOfAnswers == 1) {
  	subButton.on('click', function(e){
  		e.preventDefault();
  		if (anOne.val() == puzzleData[Num].textAnswerOne) {
  			showCor.removeClass('hidden').addClass('visible');
  			// localize(4);
  			disableButtons();
  			stopTimer();
  		} else {
  			showWro.removeClass('hidden').addClass('visible');
  			disableButtons();
  			stopTimer();
  		}
  	});
  } else {
    console.log('didnt work');
  }
//  addEvent();
  }

  CurrentTextQuestion(currentQuestion);
  addEvent();

  function addEvent() {
  	$('#cont').on('click', function(e){
      e.preventDefault();
      $('#question-Text-holder').empty();
      typeOfQuestion(NumberQuestion);

  	});

  	$('#return-button').on('click', function(e){
  		e.preventDefault();
  		window.location.href = ('Fail.html');
  	});
  }

}

function typeOfQuestion(currentQ) {
  NumberQuestion++;
//  console.log('currentQ',currentQ);
  if (NumberQuestion > puzzleData.length) {

      window.location = 'success.html';

  } else if (puzzleData[currentQ].questionType == 'tf') {

      questionTypeTF(currentQ);

  } else if (puzzleData[currentQ].questionType == 'multipleChoice') {

      questionTypeMC(currentQ);

  } else if (puzzleData[currentQ].questionType == 'text') {

      questionTypeText(currentQ);

  } else {
    console.log('this type of question does not exist');
  }

}

typeOfQuestion(NumberQuestion);
