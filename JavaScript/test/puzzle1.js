var puzzleData = [{
  questionNum: 1,
  preCode: "var nebulaePosition = function (x,y,z) { <br />" +
  "  var locate = x * z; <br />  var rad = y + z; <br />" +
  "  var tri = Math.floor((locate - y) + (rad - x));<br />  return tri; };<br />" +
  "nebulaPosition(2.7,3.2,4.5); ",
  tfStatment: "The nebulaePosition function will return 13.95",
  correctAnswer: "The function <code> Math.floor</code> eliminates the decimal of a value " +
  "and rounds it to the lowest whole number.",
  wrongAnswer:"The function <code> Math.floor</code> eliminates the decimal of a value " +
  "and rounds it to the lowest whole number.",
  answer: 'false'
},
{
  questionNum: 2,
  tfStatment: "<code> typeof(new Boolean(false))</code> will return <code>'boolean'</code>.",
  correctAnswer: "The <code>new</code> keyword calls for a boolean object.",
  wrongAnswer: "Hint: The <code>new</code> keyword calls for an object.",
  answer: 'false'
},
{
  questionNum: 3,
  tfStatment: "Given <code>z</code> is <code>true</code> and <code>x || (!y &amp;&amp; z)</code> is <code>false</code>, <br />what must be the boolean value of <code>y</code>?",
  correctAnswer: "Both <code>x</code> and <code>(!y &amp;&amp; z)</code> must be <code>false</code> if <code>x || (!y &amp;&amp; z)</code> is <code>false</code>. <code>(!y &amp;&amp; z)</code> is <code>false</code> when at least one of the clauses is <code>false</code>. Since <code>z</code> is <code>true</code>, <code>!y</code> must be <code>false</code>.",
  wrongAnswer: "Both <code>x</code> and <code>(!y &amp;&amp; z)</code> must be <code>false</code> if <code>x || (!y &amp;&amp; z)</code> is <code>false</code>. <code>(!y &amp;&amp; z)</code> is <code>false</code> when at least one of the clauses is <code>false</code>. Since <code>z</code> is <code>true</code>, <code>!y</code> must be <code>false</code>.",
  answer: 'true'
}
]



var NextQuestion = 0;
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
    console.log('answer is true');
  } else {
    console.log('answer is false');
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



  ADDEVENT();
}
CurrentTFQuestion(NextQuestion);
ADDEVENT();



function ADDEVENT() {
  document.getElementById('return-button').addEventListener('click', function(e){
  	e.preventDefault();
    window.location = 'Fail.html';
  });

cont.addEventListener('click', function(e){
  e.preventDefault();
  $('#question-tf-holder').empty();
  CurrentTFQuestion(NextQuestion);
  NextQuestion++;
});

}
