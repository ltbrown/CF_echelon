var multipleChoiceData = [{
  questionNum: 1,
  preCode: "var Agent = function(alias, country, killCount, completed){<br/>" +
  "  this.alias = alias;<br />" +
  "  this.country = country;<br />" +
  "  this.killCount = killCount;<br />" +
  "  this.completed = completed;<br />" +
  "  };<br />" +
  "Agent.prototype.contact = function(){<br />" +
  "  call(Agent);<br />" +
  "  };<br />" +
  "var eliminate = function(){<br />" +
  "  var target=misson;<br />"+
  "  dispose(mission);<br />"+
  "  };<br />"+
  "Agent.prototype.tracker = function(){<br />" +
  "  if(this.alias === agent0||agent1){<br />"+
  "    contact(this.alias);<br />" +
  "  };<br />}",
  mcStatment: "In the code above, <code>Agent.prototype.tracker</code> is a:",
  answerA: 'Method',
  answerB: 'Function',
  answerC: 'Property',
  answerD: 'Variable',
  correctAnswer: "The function <code> Math.floor</code> eliminates the decimal of a value " +
  "and rounds it to the lowest whole number.",
  wrongAnswer:"The function <code> Math.floor</code> eliminates the decimal of a value " +
  "and rounds it to the lowest whole number.",
  answer: 'a'
},
{questionNum: 2,
preCode: "var cinGex = ['C-N36','P-9','TOG-77','SE-4']; <br />" +
"var alGex = document.createElement('ul'); <br /> <br />" +
"for (var i = cinGex.length - 1; i >= 0; i--) { <br />" +
"  var repose = document.createElement('li'); <br />" +
"  repose.appendChild(document.createTextNode(cinGex[i])); <br />" +
"  alGex.appendChild(repose); <br />" +
"  } <br />" +
"function gexSel() { <br />" +
"  return alGex.lastChild.previousSibling.textContent; <br />" +
"  } <br /><br />",
mcStatment: "When calling the function gexSel(), which will be returned?",
answerA: 'C-N36',
answerB: 'SE-4',
answerC: 'TOG-77',
answerD: 'P-9',
correctAnswer: "The function's for-loop appends each element in the array in the reverse order."+
" The function then returns the previous sibling of the last child appended.",
wrongAnswer:"The function's for-loop appends each element in the array in the reverse order."+
" The function then returns the previous sibling of the last child appended.",
answer: 'd'
},
{questionNum: 3,
preCode: "var machina = [34, 57, 23, 74, 12, 58, 64, 83]; <br />" +
"for (var i = 0; i &lt; machina.length; i += 2) { <br />" +
"  if (machina[i] % 2 === 1) { <br />" +
"    console.log('Bond'); <br />" +
"  } else { <br />" +
"    console.log('James'); <br />" +
"  } <br />" +
"} <br /><br />",
mcStatment: "What will be logged to the console when running the code above?",
answerA: 'James<br />James<br />Bond<br />James',
answerB: 'Bond<br />James<br />James<br />Bond',
answerC: 'Bond<br />James<br />James<br />James',
answerD: 'James<br />Bond<br />James<br />James',
correctAnswer: "The for-loop iterates by two and logs <code>James</code>"+
" for even numbers and <code>Bond</code> for odd (<code>machina[i] % 2 === 1</code>).",
wrongAnswer:"The for-loop iterates by two and logs <code>James</code>"+
" for even numbers and <code>Bond</code> for odd (<code>machina[i] % 2 === 1</code>).",
answer: 'd'
}]

var NextQuestion=0;
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
  var insertTemplate = handleBarTemplate(multipleChoiceData[Num]);
  $('#question-MC-holder').append(insertTemplate);

  // Add Event Listen buttons functions:
 ansa = document.getElementById('ansa');
 ansb = document.getElementById('ansb');
 ansc = document.getElementById('ansc');
 ansd = document.getElementById('ansd');
 correct = document.getElementById('res-correct');
 wrong = document.getElementById('res-wrong');

  timerAll(90);
if(multipleChoiceData[Num].answer =='a') {
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
} else if (multipleChoiceData[Num].answer =='b') {
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
} else if (multipleChoiceData[Num].answer =='c') {
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
} else if (multipleChoiceData[Num].answer =='d') {
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

addEvent();

}

CurrentMCQuestion(NextQuestion);
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
    CurrentMCQuestion(NextQuestion);
    NextQuestion++;
  });
}
