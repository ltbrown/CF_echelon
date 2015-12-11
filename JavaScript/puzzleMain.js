var NumberQuestion = 0;

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
    if (puzzleData[Num].answer == 'true') {
      corAns = document.getElementById('ans-True');
      wroAns = document.getElementById('ans-False');
      showCor = document.getElementById('res-correct');
      showWro = document.getElementById('res-wrong');
      cont =  document.getElementById('cont');
  //    console.log('answer is true');
    } else {
  //    console.log('answer is false');
      wroAns = document.getElementById('ans-True');
      corAns = document.getElementById('ans-False');
      showCor = document.getElementById('res-correct');
      showWro = document.getElementById('res-wrong');
      cont =  document.getElementById('cont');
    }

    timerAll(90);

    corAns.addEventListener('click', function(e){
      e.preventDefault();
      showCor.className = ('visible');
    //  localize(questionNum+1);
      disableButtons();
      stopTimer();
    });

    wroAns.addEventListener('click', function(e){
      e.preventDefault();
      showWro.className = ('visible');
      disableButtons();
      stopTimer();
    });

  //  ADDEVENT();
  }
  CurrentTFQuestion(currentQuestion);
  ADDEVENT();

  function ADDEVENT() {
    document.getElementById('return-button').addEventListener('click', function(e){
    	e.preventDefault();
      window.location = 'Fail.html';
    });

  cont.addEventListener('click', function(e){
    e.preventDefault();
    $('#question-tf-holder').empty();
    typeOfQuestion(NumberQuestion);


  });

  }

}

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
   ansa = document.getElementById('ansa');
   ansb = document.getElementById('ansb');
   ansc = document.getElementById('ansc');
   ansd = document.getElementById('ansd');
   correct = document.getElementById('res-correct');
   wrong = document.getElementById('res-wrong');

    timerAll(90);
  if(puzzleData[Num].answer =='a') {
    // Event Listeners for Answers
    ansa.addEventListener('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.className="visible";
      disableButtons();
      stopTimer();
    });

    ansb.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansc.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansd.addEventListener('click', function(e){
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });
  } else if (puzzleData[Num].answer =='b') {
    // Event Listeners for Answers
    ansb.addEventListener('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.className="visible";
      disableButtons();
      stopTimer();
    });

    ansa.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansc.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansd.addEventListener('click', function(e){
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });
  } else if (puzzleData[Num].answer =='c') {
    // Event Listeners for Answers
    ansc.addEventListener('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.className="visible";
      disableButtons();
      stopTimer();
    });

    ansa.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansb.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansd.addEventListener('click', function(e){
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });
  } else if (puzzleData[Num].answer =='d') {
    // Event Listeners for Answers
    ansd.addEventListener('click', function(e) {
      e.preventDefault();
    //  localize(3);
      correct.className="visible";
      disableButtons();
      stopTimer();
    });

    ansa.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansc.addEventListener('click', function(e) {
      e.preventDefault();
      wrong.className="visible";
      disableButtons();
      stopTimer();
    });

    ansb.addEventListener('click', function(e){
      e.preventDefault();
      wrong.className="visible";
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
    document.getElementById('return-button').addEventListener('click', function(e){
      e.preventDefault();
      window.location = 'Fail.html';
    });

    document.getElementById('cont').addEventListener('click', function(e) {
      e.preventDefault();
      $('#question-MC-holder').empty();
      typeOfQuestion(NumberQuestion);

    });
  }

}



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

  	anOne = document.getElementById('aOne');
  	anTwo = document.getElementById('aTwo');
  	anThree = document.getElementById('aThree');
  	subButton = document.getElementById('subButt');
  	showCor = document.getElementById('res-correct');
  	showWro = document.getElementById('res-wrong');


  	timerAll(90);

  if (puzzleData[Num].numberOfAnswers == 3) {
  	subButton.addEventListener('click', function(e){
  		event.preventDefault();
  		if (anOne.value == puzzleData[Num].textAnswerOne && anTwo.value == puzzleData[Num].textAnswerTwo && anThree.value == puzzleData[Num].textAnswerThree) {
  			showCor.className = ('visible');
  			// localize(4);
  			disableButtons();
  			stopTimer();
  		} else {
  			showWro.className = ('visible');
  			disableButtons();
  			stopTimer();
  		}
  	});
  } else if (puzzleData[Num].numberOfAnswers == 2) {
  	subButton.addEventListener('click', function(e){
  		event.preventDefault();
  		if (anOne.value == puzzleData[Num].textAnswerOne && anTwo.value == puzzleData[Num].textAnswerTwo) {
  			showCor.className = ('visible');
  			// localize(4);
  			disableButtons();
  			stopTimer();
  		} else {
  			showWro.className = ('visible');
  			disableButtons();
  			stopTimer();
  		}
  	});
  } else if (puzzleData[Num].numberOfAnswers == 1) {
  	subButton.addEventListener('click', function(e){
  		event.preventDefault();
  		if (anOne.value == puzzleData[Num].textAnswerOne) {
  			showCor.className = ('visible');
  			// localize(4);
  			disableButtons();
  			stopTimer();
  		} else {
  			showWro.className = ('visible');
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
  	document.getElementById('cont').addEventListener('click', function(e){
      e.preventDefault();
      $('#question-Text-holder').empty();
      typeOfQuestion(NumberQuestion);

  	});

  	document.getElementById('return-button').addEventListener('click', function(e){
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
