var mainEl = document.querySelectorAll(".main");
var scoreEl = document.querySelector("#score-section");
var quizEl = document.querySelector("#main-quiz-section");
var timeEl = document.querySelector("#time-section");
var startButton = document.querySelector("#start-button");

var highscores = [];
var score = 0;
var secondsLeft=20;

var quiz = {
    question: "Which of the following is not a JavaScript data type?",
    answers: ["Number", "Boolean", "Null", "Undefined"],
    correctAnswer: "Null"

};

// Function to start the quiz
startButton.addEventListener("click", function(event) {
    document.getElementById("start-button").setAttribute("visibility", "hidden");
    startTimer();
    for (var i=0; i<=0; i++) {
        var questionNumberEl = document.createElement("h4");
        questionNumberEl.textContent = "Question " + i+1;
        quizEl.appendChild(questionNumberEl);
        var questionEl = document.createElement("div");
        questionEl.textContent = quiz.question;
        quizEl.appendChild(questionEl);
        var answer1 = document.createElement("button");
        answer1.setAttribute("type", "radio");
        answer1.textContent = quiz.answers[0];
        quizEl.appendChild(answer1);
        var answer2 = document.createElement("button");
        answer2.textContent = quiz.answers[1];
        quizEl.appendChild(answer2);
        var answer3 = document.createElement("button");
        answer3.textContent = quiz.answers[2];
        quizEl.appendChild(answer3);
        var answer4 = document.createElement("button"); 
        answer4.textContent = quiz.answers[3];
        quizEl.appendChild(answer4);
    }
});

// Function to add answer choices
function addAnswers(choiceNumber) {

}

// Function to set the timer
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        var showTime = timeEl.querySelector("#time");
        showTime.setAttribute("visibility", "visible");
        showTime.textContent = "Time :" + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          showHighScores();
        }
    
      }, 1000);
}

// Function to display the score
function showScore() {

}


// Function to restart the Quiz
function init() {

}

// Function to submit initials and display high scores
function showHighScores() {

}

// Function to clear the high scores
function clearHighScores() {

}
