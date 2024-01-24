var startButtonEl =  document.querySelector('#startButton');

var questionEl = document.querySelector('.question');
var answer1El = document.querySelector('#answer1-label');
var answer2El = document.querySelector('#answer2-label');
var answer3El = document.querySelector('#answer3-label');
var answer4El = document.querySelector('#answer4-label');
var submitEl = document.querySelector('#submit');

var timeEl = document.querySelector('.time');

var startGameEl =  document.querySelector('.startScreen');
var quizEl =  document.querySelector('.game');

var endGameEl = document.querySelector('.endGame');
var finalScoreEL = document.querySelector('#finalScore');
var initialsEl = document.querySelector('#initials');
var endButtonEl = document.querySelector('#endButton');

var resultEl = document.querySelector('#result');

var highScoreEl = document.querySelector('.highScore');

var scoreEl = document.querySelector('#score');

var topScoreEl = document.querySelector('.topScore');

var question = 0;

var timer;

var scores;

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
			c: 'Object',
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

    {
		question: "",
		answers: {
			a: '',
			b: '',
			c: '',
            d: ''
		},
		correctAnswer: ''
	}

];

topScoreEl.addEventListener('click', function(){
    window.localStorage;
    var scores = JSON.parse(localStorage.getItem("scores"));
    scores = scores.sort((a,b)=>b.score-a.score);

    for (let i = 0; i < scores.length; i++) {      
        var scoreItem = document.createElement("div");
        scoreItem.textContent = scores[i].initials + ": " + scores[i].score;
        scoreEl.appendChild(scoreItem)
    }

    // Display high score section
    highScoreEl.classList.remove('hidden');
    quizEl.classList.add('hidden');
    endGameEl.classList.add('hidden');
    startButtonEl.classList.add('hidden');

})

// The startGame function is called when the sumbit button is clicked
function startGame() {
	timer = 120;
	setTime();
    renderQuestions();
    startGameEl.classList.add('hidden');
    quizEl.classList.remove('hidden');
};

// Attach an event listener to the start button to call the 'startGame' function on click
startButtonEl.addEventListener('click', startGame);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timeEl.textContent = timer;
  
      if(timer >= 0 && question > 9) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
        // Calls winGame function
            winGame();
      }
      else if (timer <= 0) {
          clearInterval(timerInterval);
          loseGame();
      }
  
    }, 1000);
  };



function renderQuestions() {

    // put question and answers on to the page
    questionEl.textContent = myQuestions[question].question;
    answer1El.textContent = myQuestions[question].answers.a;
    answer2El.textContent = myQuestions[question].answers.b;
    answer3El.textContent = myQuestions[question].answers.c;
    answer4El.textContent = myQuestions[question].answers.d;

   
}
    // added event listener with prevent Default that cycles through questions when the right answer is clicked
     submitEl.addEventListener('click', function(e){
        e.preventDefault();
        // check to see if checked is the same as the right answer
        var userAnswer = document.querySelector("input[name=questions]:checked").value;
        
        
        // last question stop
        if (question > 9) {
            return;
        };
    
        // if correct go to the next question
        if (myQuestions[question].correctAnswer === userAnswer) {
            
            console.log('userAnswer', userAnswer);
            console.log('question', question);
            console.log('correct answer', myQuestions[question].correctAnswer);
            question++;
            renderQuestions();
                   
        } else {
        
         //minus 10 seconds to the timer if question is wrong
        // if (myQuestions[question].correctAnswer !== userAnswer) {
            timer = timer - 10;
            console.log(timer);
        };
    });

function winGame() {

    quizEl.classList.toggle('hidden');
    endGameEl.classList.toggle('hidden');

    resultEl.textContent = "you win";

    finalScoreEL.textContent = timer;

    endButtonEl.addEventListener("click", function(e) {
        e.preventDefault();
        
        var score = {
            initials: initialsEl.value,
            score: timer,
          
        };
        var savedScores = JSON.parse(localStorage.getItem("scores"));
        if (savedScores) {
            scores = savedScores;
        }

        else {
            scores = [];
        }
        // create an array of objects
        scores.push(score);

        localStorage.setItem("scores", JSON.stringify(scores));
    
        highScore();
        });

        function highScore() {
            
            var scores = JSON.parse(localStorage.getItem("scores"));

            //sort scores
            scores = scores.sort((a,b)=>b.score-a.score);
            console.log(scores);
            
            if (scores !== null) {
                // Clear previous high scores
                scoreEl.innerHTML = "";
                
                // Iterate through all scores and append them to the scoreEl element
                for (let i = 0; i < scores.length; i++) {
                    
                    var scoreItem = document.createElement("div");
                    scoreItem.textContent = scores[i].initials + ": " + scores[i].score;
                    scoreEl.appendChild(scoreItem)
                }
        
                // Display high score section
                highScoreEl.classList.remove('hidden');
                quizEl.classList.add('hidden');
                endGameEl.classList.add('hidden');
            }
        }
}

function loseGame() {

    quizEl.classList.toggle('hidden');
    endGameEl.classList.toggle('hidden');

    endButtonEl.classList.add('hidden');
    initialsEl.classList.add('hidden');

    resultEl.textContent = "you lose";
    finalScoreEL.textContent = timer;     
}