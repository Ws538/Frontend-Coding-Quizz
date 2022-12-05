//startButton QuerySelector

var startButton = document.querySelector(".startButton");
var timerEl = document.querySelector(".timerCount");
var generateQuestion = document.querySelector(".generateQuestion");
var generateChoices = document.querySelectorAll("#choices");
var choicesEl = document.querySelector("#choices");
var questionIndex = 0;
var startEl = document.querySelector("#start")
var quizzEl = document.querySelector("#quizz")
var endEl = document.querySelector("#end")


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
    title: "The condition in an if/else statement is enclosed within ____",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets",
  },

  {
    title: "Arrays in JavaScript can be used to store ____",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleons",
      "all of the above",
    ],
    answer: "all of the above",
  },

  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "curly brackets",
  },

  {
    title:
      "A very useful tool used during development and debugging for priinting content to the defugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

function startQuizz() {
  isWin = false;
  startEl.classList.add("hide")
  quizzEl.classList.remove("hide")
  timerCount = 100;
  startTimer();
  renderQuestions();
}

//timer

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timer);
      winGame();
    }
  }, 1000);
}

// render questions, get element by ID,

function renderQuestions() {
  var questionsTitle = questions[questionIndex].title;

  var titleEl = document.getElementById("questions");
  titleEl.textContent = questionsTitle;

  //render question choicees
  for (i = 0; i < questions[questionIndex].choices.length; i++) {
    var buttonEl = document.getElementById("button" + (i + 1));
    buttonEl.textContent = questions[questionIndex].choices[i];
    // if clicked , next question text plus choices appears
    buttonEl.addEventListener("click", checkAnswer);
  }
}
function checkAnswer(e) {
  var userChoice = e.target.innerText;
  if (userChoice === questions[questionIndex].answer) {
    alert("correct");
  } else {
    alert("wrong");
    // , when answered incorrectly, time is subtracted 10sec
    timerCount -= 10
  }
  questionIndex = questionIndex + 1;
  if (questions.length > questionIndex) {
    renderQuestions();
  } else {
    clearInterval(timer);
    winGame();
  }
}


//when game is over, save initials and score, score = time left
function winGame() {
    var scoreEl = document.getElementById("score")
    scoreEl.textContent = timerCount
    quizzEl.classList.add("hide")
    endEl.classList.remove("hide")
    timerEl.classList.add("hide")
}

//event listener to button

startButton.addEventListener("click", startQuizz);
