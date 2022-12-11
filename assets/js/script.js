var mainEl = document.querySelectorAll(".main");
var scoreEl = document.querySelector("#score-section");
var quizEl = document.querySelector("#main-quiz-section");
var questionEl= document.querySelector("#question-section");
var answerEl = document.querySelector("#answer-section");
var timeEl = document.querySelector("#time-section");
var startButton = document.querySelector("#start-button");


var highscores = [];
var score = 0;
var secondsLeft = 20;
var currentQuestion;



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
    document.getElementById("start-button").setAttribute("visibility", "hidden");
    startTimer();
    for (var i=0; i<=0; i++) {
        addAnswers(i);
        currentQuestion=0;
    }
});

// Function to add answer choices
function addAnswers(questionNumber) {
    var questionNumberEl = document.createElement("h4");
    questionNumberEl.textContent = "Question " + questionNumber+1;
    questionEl.appendChild(questionNumberEl);
    var questionTextEl = document.createElement("div");
    questionTextEl.textContent = quiz[questionNumber].question;
    questionEl.appendChild(questionTextEl);
    var answer = [];
    for (var i=0; i<=3; i++) {
        answer[i] = document.createElement("button");
        answer[i].textContent = quiz[questionNumber].answers[i];
        console.log(quiz[questionNumber].answers[i]);
        answer[i].setAttribute("class","answer-button");
        questionEl.appendChild(answer[i]);
    }
    
}



// Function to check which answer is selected
quizEl.addEventListener("click", function(event) {
    var userAnswer;
    var answerButton = document.querySelectorAll(".answer-button");
    //console.log(answerButton);
    console.log("length : "+answerButton.length)
    
    for(var i=0; i<answerButton.length; i++) {
        //userAnswer = answerButton[i].textContent;
        console.log(userAnswer);
        console.log("userAnswer : "+event.target.textContent);
        console.log("Curent Question "+currentQuestion);
        console.log("Current Answer : "+quiz[currentQuestion].correctAnswer);
        if(event.target.textContent===quiz[currentQuestion].correctAnswer) {
            answerEl.textContent = "Correct!"
        }
        else {
            answerEl.textContent = "Incorrect!"
        }
    
    }
});


// Function to set the timer for 20 seconds
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
