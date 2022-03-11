const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#question');

// new varibles 

let currentQuestions ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = []

let questions = []
    {
        question: "Which of the following functionalities are controlled by CSS?"
        choice1: 'Developing a website that looks good on desktop, tablets, and mobile devices'
        choice2: 'Retrieving information from the proper data sources'
        choice3: 'Adding content to a webpage'
        choice4: ''
        answer:1
    }
    {
        question: 'Which of the following elements should we target with display: inline to make the <nav> horizontal?'
        choice1:'<nav>'
        choice2:'<ul> in the <na>'
        choice3:'The <li> is in the <nav> '
        choice4:
        answer:3

    }
    {
        question: 'let myFirstvariable = "Bart Simpson;" const myNextvariable = 10;'
        choice1:'The variable myFirstvariable should be written as myFirstVariable'
        choice2:'We should not use const to introduce variables with numbers'
        choice3:'The variable myNextvariable should be written as myNextvariable'
        choice4:'There should not be a semicolon after Bart Simpson.'
        answer:3
    }

    {  
        question: 'In the array below, what is the index of the term "pepperoni pizza"? const favoriteFoods = ["ice cream", "pepperoni pizza", "apple pie", "almond butter"];'
        choice1:'Index 0'
        choice2:'Index 1'
        choice3:'Index 2'
        choice4:'Index 3'
        answer:2

    }
