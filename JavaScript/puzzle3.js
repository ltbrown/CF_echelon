var textQuestionData = [
  {  questionNum: 1,
    preCode: "var droid_Ai = ['emotion', 'logic', 'morals'];</br>" +
    "var disk_Nexus = ['memory', 'cpu', 'sensory'];</br></br>" +
    "var droid = [droid_Ai, disk_Nexus];",
    mcStatment: "<p>Android Subject#: CF-201</br>" +
    "Physical Build: Complete</br>" +
    "AI sequence: Incomplete</br>" +
    "Nexus Status: Incomplete</br>" +
    "Status: Inoperable</br>" +
    "Stages to be Completed:</br>" +
    "&nbsp;1: <code>droid[0][2]</code></br>" +
    "&nbsp;2: <code>droid[1][1]</code></br>" +
    "&nbsp;3: <code>droid[0][0]</code></br></br></p>" +
    "<p>Enter in the values of the stages to be completed. Don't use quotes for the string in answer.</p>",
    textAnswerOne: 'morals',
    textAnswerTwo: 'cpu',
    textAnswerThree: 'emotion',
    correctAnswer: "The variable <code>droid</code> is an array with its items being two arrays."+
    " The first index identifier selects which array we are accessing inside <code>droid</code>"+
    " and the second index selects the item inside of the nested array",
    wrongAnswer:"The variable <code>droid</code> is an array with its items being two arrays."+
    " The first index identifier selects which array we are accessing inside <code>droid</code>"+
    " and the second index selects the item inside of the nested array",
    numberOfAnswers: 3
  },
  {  questionNum: 2,
    preCode:"1    var Eclipse = function(terra, beam, xtype) {<br />" +
    "2    <span>_____</span>terra = terra;<br />" +
    "3    <span>_____</span>beam = beam;<br />" +
    "4    <span>_____</span>xtype = xtype;<br />" +
    "5    <span>_____</span>dream = function() {<br />" +
    "6      if (this.xtype === 'berg') {<br />" +
    "7        return(math.random() * this.beam);<br />" +
    "8      } else if (this.terra.length > 4) {<br />" +
    "9        return null;<br />" +
    "10     }<br />" +
    "11   };<br />" +
    "12 };<br />" +
    "13  var lumas = new Eclipse('celium', 186.72, 'droid');<br />" +
    "14  lumas.dream();<br /><br />",
    mcStatment: "What is missing from the blanks? Answer exactly with no extra spaces.",
    textAnswerOne: 'this.',
    correctAnswer: "When adding properties and methods to an object constructor, <code>this.</code> needs to be used.",
    wrongAnswer:"When adding properties and methods to an object constructor, <code>this.</code> needs to be used.",
    numberOfAnswers: 1
  },
  {  questionNum: 3,
    preCode:"var alfa = 1 + '2' + 3;<br />"+
    "var bravo = 3 - '2' + 1;<br />",
    mcStatment: "What is <code>alfa - bravo</code>?",
    textAnswerOne: '121',
    correctAnswer: "JavaScript uses weak typing and type coercion. If only"+
    " plus operators (+) are present, numbers and strings are concatenated into"+
    " a string. With the presence of a minus operator (-), strings are coerced to numbers.",
    wrongAnswer:"JavaScript uses weak typing and type coercion. If only"+
    " plus operators (+) are present, numbers and strings are concatenated into"+
    " a string. With the presence of a minus operator (-), strings are coerced to numbers.",
    numberOfAnswers: 1
  }


]

var NextQuestion = 0;
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
  var handleBarTemplate = Handlebars.compile($('#question-template').html());
  var insertTemplate = handleBarTemplate(textQuestionData[Num]);
  $('#question-Text-holder').append(insertTemplate);

	anOne = document.getElementById('aOne');
	anTwo = document.getElementById('aTwo');
	anThree = document.getElementById('aThree');
	subButton = document.getElementById('subButt');
	showCor = document.getElementById('res-correct');
	showWro = document.getElementById('res-wrong');


	timerAll(90);

if (textQuestionData[Num].numberOfAnswers == 3) {
	subButton.addEventListener('click', function(e){
		event.preventDefault();
		if (anOne.value == textQuestionData[Num].textAnswerOne && anTwo.value == textQuestionData[Num].textAnswerTwo && anThree.value == textQuestionData[Num].textAnswerThree) {
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
} else if (textQuestionData[Num].numberOfAnswers == 2) {
	subButton.addEventListener('click', function(e){
		event.preventDefault();
		if (anOne.value == textQuestionData[Num].textAnswerOne && anTwo.value == textQuestionData[Num].textAnswerTwo) {
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
} else if (textQuestionData[Num].numberOfAnswers == 1) {
	subButton.addEventListener('click', function(e){
		event.preventDefault();
		if (anOne.value == textQuestionData[Num].textAnswerOne) {
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
addEvent();
}

CurrentTextQuestion(NextQuestion);
addEvent();

function addEvent() {
	document.getElementById('cont').addEventListener('click', function(e){
    e.preventDefault();
    $('#question-Text-holder').empty();
    CurrentTextQuestion(NextQuestion);
    NextQuestion++;
	});

	document.getElementById('return-button').addEventListener('click', function(e){
		e.preventDefault();
		window.location.href = ('Fail.html');
	});
}
