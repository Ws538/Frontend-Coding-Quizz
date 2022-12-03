//startButton QuerySelector

var startButton = document.querySelector(".startButton");
var timerEl = document.querySelector(".timerCount");
var generateQuestion = document.querySelector(".generateQuestion")

var isWin = false;
var timer;
var timerCount;

//Question Arrays

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleons", "alerts", "numbers"],
        answer: "alerts",
    },

    {
        tiitle: "The condition in an if/else statement is enclosed within ____",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets",
    },

    {
        titles: "Arrays in JavaScript can be used to store ____",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleons",
            "all of the above",
        ],
        answer: "all of the above",
    },

    {
        titles:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "curly brackets",
    },

    {
        titles:
            "A very useful tool used during development and debugging for priinting content to the defugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
];

function startQuizz() {
    isWin = false;

    timerCount = 100;
    renderQuestions();
    startTimer();
}

//timer

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0);
        {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }

        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

// create blanks on screen

function renderQuestions() {
    questions = questions[Math.floor(Math.random() * questions.length)];
    generateQuestion.textContent = choices

}

// if correct, text correct underneath

//when question is answered incorrectly, time is subtracted

//when game is over, save initials and score
function winGame() {

}

function loseGame() {

}
//event listener to button

startButton.addEventListener("click", startQuizz);
