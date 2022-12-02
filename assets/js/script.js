//startButton QuerySelector

var startButton = document.querySelector(".startButton")

//Question Arrays

var questions = [
       
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleons', 'alerts', 'numbers'],
        answer: 'alerts',
    },

    {
        tiitle: 'The condition in an if/else statement is enclosed within ____',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'curly brackets'
    },

    {
        titles: 'Arrays in JavaScript can be used to store ____',
        choices: ['numbers and strings', 'other arrays', 'booleons', 'all of the above'],
        answer: 'all of the above'
    },

    {
        titles: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'curly brackets'
    },

    {
        titles: 'A very useful tool used during development and debugging for priinting content to the defugger is:',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    }

]


// if correct, text correct underneath 

//Timer count when start button is clicked

//when question is answered incorrectly, time is subtracted

//when game is over, save initials and score

//event listener to button

