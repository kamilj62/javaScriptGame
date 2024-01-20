var questionEl = document.querySelector('.question');
var answer1El = document.querySelector('#answer1-label');
var answer2El = document.querySelector('#answer2-label');
var answer3El = document.querySelector('#answer3-label');
var answer4El = document.querySelector('#answer4-label');
var submitEl = document.querySelector('#submit');

var timeEl = document.querySelector('.time');

var question = 0;

var myQuestions = [
    {
		question: "JavaScript is a _______ oriented language.",
		answers: {
			a: 'Object-oriented',
			b: 'Object-based',
			c: 'Procedural',
            d: 'None of the above'
		},
		correctAnswer: 'a'
	},

    {
		question: "Which of the following keyword(s) is used to define a variable in javaScript?",
		answers: {
			a: 'var',
			b: 'let',
			c: 'const',
            d: 'All of the above'
		},
		correctAnswer: 'd'
	},

    {
		question: "Which of the following method(s) is used to access HTML elements using javaScript?",
		answers: {
			a: 'getElementbyId()',
			b: 'getElementsbyClassName()',
			c: 'Both a and b',
            d: 'None of the above'
		},
		correctAnswer: 'c'
	},

    {
		question: "Which of the following methods can be used to display data in some form using javaScript?",
		answers: {
			a: 'document.write()',
			b: 'console.log()',
			c: 'window.alert()',
            d: 'All of the above'
		},
		correctAnswer: 'd'
	},

    {
		question: "How can a datatype be declared to be a constant type",
		answers: {
			a: 'var',
			b: 'let',
			c: 'const',
            d: 'None of the above'
		},
		correctAnswer: 'c'
	},

    {
		question: "When an operator's value is NULL, the typeof returned by the unary operator is: ",
		answers: {
			a: 'Boolean',
			b: 'Undefined',
			c: 'Object',
            d: 'Integer'
		},
		correctAnswer: 'c'
	},

    {
		question: "Which function is used to serialize an object into a JSON string in javaScript?",
		answers: {
			a: 'stringify()',
			b: 'parse()',
			c: 'convert()',
            d: 'None of the above'
		},
		correctAnswer: 'a'
	},

    {
		question: "Which of the following are closures in javaScript?",
		answers: {
			a: 'Variables',
			b: 'Function',
			c: 'Objeft',
            d: 'All of the above'
		},
		correctAnswer: 'd'
	},

    {
		question: "How to stop an interval timer?",
		answers: {
			a: 'clearInterval',
			b: 'clearTimer',
			c: 'intervalOver',
            d: 'All of the above'
		},
		correctAnswer: 'a'
	},

    {
		question: "Which of the following keywords is used to define a variable in Javascript?",
		answers: {
			a: 'var',
			b: 'let',
			c: 'Both a and b',
            d: 'None of the above'
		},
		correctAnswer: 'c'
	},

]

// The startGame function is called when the sumbit button is clicked
function startGame() {
	timer = 60;
	setTime();
    renderQuestions();
}

// Attach an event listener to the start button to call the 'startGame' function on click
timeEl.addEventListener('click', startGame());

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timeEl.textContent = timer;
  
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
  
    }, 1000);
  }



function renderQuestions() {

        questionEl.textContent = myQuestions[question].question;
        answer1El.textContent = myQuestions[question].answers.a;
        answer2El.textContent = myQuestions[question].answers.b;
        answer3El.textContent = myQuestions[question].answers.c;
        answer4El.textContent = myQuestions[question].answers.d;

        submitEl.addEventListener('click', function(e){
            e.preventDefault();
            var userAnswer = document.querySelector("input[name=questions]:checked").value;
            console.log(userAnswer);
            console.log(myQuestions[question].correctAnswer);
            if (myQuestions[question].correctAnswer == userAnswer) {
                console.log("inside if condition")
                    question++;
                    renderQuestions();
                }
            else {
                return;
            }
                
        })
        
}
