var mainEl = document.querySelectorAll(".main");
var scoreEl = document.querySelector("#score-section");
var quizEl = document.querySelector("#main-quiz-section");
var questionEl= document.querySelector("#question-section");
var questionNumberEl = document.querySelector("#question-number");
var answerEl = document.querySelector("#answer-section");
var timeEl = document.querySelector("#time-section");
var startButton = document.querySelector("#start-button");



var score = 0;
var userInitial = "";
var secondsLeft = 5;
var currentQuestion = 0;
var highScores = { };


// Object to store questions, answer choices and correct answer
var quiz = [{
    question: "Which of the following is not a JavaScript data type?",
    answers: ["Number", "Boolean", "Null", "Undefined"],
    correctAnswer: "Null"},
    {   
    question: "How can you add CSS to a HTML document?",
    answers: ["Internal", "Inline", "External", "All of the above"],
    correctAnswer: "All of the above" 
    },
    {
    question: "In CSS, which property controls the size of the text?",
    answers: ["font-size", "font-style", "text-size", "text-style"],
    correctAnswer: "font-size"  
    },
    {
    question: "Which selector is used to specify a style for a unique element?",
    answers: ["id", "class", "text", "style"],
    correctAnswer: "id" 
    },
    {
    question: "How can you change the bottom margin of an element?",
    answers: ["margin-bottom", "bottom-margin", "margin", "marginbottom"],
    correctAnswer: "margin" 
    }
];


// Function to start the quiz
startButton.addEventListener("click", function(event) {
    
    document.getElementById("start-button").setAttribute("style", "display:none;");
    startTimer();
    addAnswers(currentQuestion);
    
});

// Function to add answer choices
function addAnswers(questionNumber) {
    
    displayElement(questionNumberEl);
    questionNumberEl.textContent = "Question " + (questionNumber+1).toString();
    var questionTextEl = document.querySelector("#question-text");
    displayElement(questionTextEl);
    questionTextEl.textContent = quiz[questionNumber].question;
    var answerEl = document.querySelectorAll(".answer-button");
    for (var i=0; i<=3; i++) {
        displayElement(answerEl[i]);
        answerEl[i].textContent = quiz[questionNumber].answers[i];
        
        
    }
    
}

function displayElement(elementName) {
    elementName.setAttribute("style", "visibility: visible;");
}



// Function to check which answer is selected
quizEl.addEventListener("click", function(event) {
    var userAnswer = event.target.textContent;
    var isCorrect;
    var answerButton = document.querySelectorAll(".answer-button");
    for(var i=0; i<answerButton.length; i++) {
        if(userAnswer===quiz[currentQuestion].correctAnswer) {
            answerEl.textContent = "Correct!";
            isCorrect=true;
        }
        else {
            answerEl.textContent = "Incorrect!";
        }
        
    }
    if (isCorrect==true) {
        score++;
    }
    showScore();
    if (currentQuestion < 4) {
        currentQuestion++;
        addAnswers(currentQuestion);
    }
    
});


// Function to set the timer for 20 seconds
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        var showTime = timeEl.querySelector("#time");
        //showTime.setAttribute("style", "visibility: visible;");
        showTime.textContent = "Time :" + secondsLeft;
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          showHighScores();
        }
    
      }, 1000);
}

// Function to display the score
function showScore() {
    scoreEl.textContent = "Current Score :" + score;
}


// Function to restart the Quiz
function init() {

}

// Function to submit initials and display high scores
function showHighScores() {
    scoreEl.setAttribute("style", "visibility: hidden;");
    questionEl.remove();
    questionNumberEl.remove();
    answerEl.remove();
    timeEl.setAttribute("style", "visibility: hidden;");
    var allDoneText = document.createElement("h2");
    allDoneText.textContent = "All Done!";
    quizEl.appendChild(allDoneText);
    var highScoreText = document.createElement("h3");
    highScoreText.textContent = "Your final score is: " + score;
    quizEl.appendChild(highScoreText);
    var labelText = document.createElement("label");
    labelText.textContent = "Enter initials";
    quizEl.appendChild(labelText);
    var inputInitial = document.createElement("input");
    inputInitial.setAttribute("style", "display: inline; width: 70px;");
    inputInitial.setAttribute("type", "text");
    quizEl.appendChild(inputInitial);
    var submitInitial = document.createElement("button");
    submitInitial.setAttribute("style", "display: inline; width: 50px;");
    submitInitial.textContent = "Submit";
    quizEl.appendChild(submitInitial);
    
    //var highScoreListEl = document.createElement("ol");
    // Function to submit initials at end of game
    submitInitial.addEventListener("click", function(event) {
        alert("Submit clicked");
        var getFromLocal = localStorage.getItem("High-Scores");
        var localHighScores = getFromLocal ? JSON.parse(getFromLocal) : [];
        console.log(localHighScores);
        userInitial = inputInitial.value;
        var newHighScore = new Object();
        newHighScore.userInitial = userInitial;
        newHighScore.userScore = score;
        localHighScores.push(newHighScore);
        console.log(newHighScore);
        localStorage.setItem("High-Scores", JSON.stringify(localHighScores));
        
                
    });

}


// Function to clear the high scores
function clearHighScores() {

}
