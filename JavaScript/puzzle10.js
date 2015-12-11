var puzzleData = [
  {
  questionType:'tf',
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
  questionType:'multipleChoice',
  questionNum: 2,
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
{
  questionType:'text',
  questionNum: 3,
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
{
  questionType:'tf',
  questionNum: 4,
  tfStatment: "<code> typeof(new Boolean(false))</code> will return <code>'boolean'</code>.",
  correctAnswer: "The <code>new</code> keyword calls for a boolean object.",
  wrongAnswer: "Hint: The <code>new</code> keyword calls for an object.",
  answer: 'false'
},
{
questionType:'multipleChoice',
questionNum: 5,
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
{
    questionType:'text',
    questionNum: 6,
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
  {
    questionType:'tf',
    questionNum: 7,
    tfStatment: "Given <code>z</code> is <code>true</code> and <code>x || (!y &amp;&amp; z)</code> is <code>false</code>, <br />what must be the boolean value of <code>y</code>?",
    correctAnswer: "Both <code>x</code> and <code>(!y &amp;&amp; z)</code> must be <code>false</code> if <code>x || (!y &amp;&amp; z)</code> is <code>false</code>. <code>(!y &amp;&amp; z)</code> is <code>false</code> when at least one of the clauses is <code>false</code>. Since <code>z</code> is <code>true</code>, <code>!y</code> must be <code>false</code>.",
    wrongAnswer: "Both <code>x</code> and <code>(!y &amp;&amp; z)</code> must be <code>false</code> if <code>x || (!y &amp;&amp; z)</code> is <code>false</code>. <code>(!y &amp;&amp; z)</code> is <code>false</code> when at least one of the clauses is <code>false</code>. Since <code>z</code> is <code>true</code>, <code>!y</code> must be <code>false</code>.",
    answer: 'true'
  },
  {
  questionType:'multipleChoice',
  questionNum: 8,
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
},
{ questionType:'text',
  questionNum: 9,
  preCode:"function hack() {</br>" +
  "  var aOne = (3 * 3);</br>" +
  "  var x = (aOne + 3);</br>" +
  "  var aTwo = (x + aOne);</br>" +
  "  console.log(x);</br>" +
  "}</br></br>" +
  "hack();</br>"+
  "console.log(x);</br>"+
  "var x = 13;</br>",
  mcStatment: "What will the two <code>console.log</code>s read in the console? (Don't use quotes or spaces and only use lowercase letters for words )",
  textAnswerOne: '12',
  textAnswerTwo: 'undefined',
  correctAnswer: "The value of <code>x</code> is declared twice as a"+
  " variable. Once inside of a function making it a local variable, and " +
  "the second time it is declared is globally. However, the <code>console.log(x);"+
  "</code> in the global spaced is called before <code>x</code> has been declared" +
   "rendering this log <code>undefined</code>.",
  wrongAnswer: "The value of <code>x</code> is declared twice as a"+
  " variable. Once inside of a function making it a local variable, and " +
  "the second time it is declared is globally. However, the <code>console.log(x);"+
  "</code> in the global spaced is called before <code>x</code> has been declared" +
   "rendering this log <code>undefined</code>.",
  numberOfAnswers: 2
},
{
  questionType:'text',
  questionNum: 10,
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
