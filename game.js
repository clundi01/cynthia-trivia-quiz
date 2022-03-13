// Variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// new varibles 

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = []

let questions = [
    {
        question: "Which of the following functionalities are controlled by CSS?",
        choice1: 'Developing a website that looks good on desktop, tablets, and mobile devices',
        choice2: 'Retrieving information from the proper data sources',
        choice3: 'Adding content to a webpage',
        choice4: 'None Apply',
        answer:1,
    },
    {
        question: 'Which of the following elements should we target with display: inline to make the <nav> horizontal?',
        choice1:'<nav>',
        choice2:'<ul> in the <na>',
        choice3:'The <li> is in the <nav>',
        choice4:'None apply',
        answer:3,
    },
    {
        question: 'let myFirstvariable = "Bart Simpson;" const myNextvariable = 10;',
        choice1:'The variable myFirstvariable should be written as myFirstVariable',
        choice2:'We should not use const to introduce variables with numbers',
        choice3:'The variable myNextvariable should be written as myNextvariable',
        choice4:'There should not be a semicolon after Bart Simpson.',
        answer:3,
    },
    {  
        question: 'In the array below, what is the index of the term "pepperoni pizza"? const favoriteFoods = ["ice cream", "pepperoni pizza", "apple pie", "almond butter"];',
        choice1:'Index 0',
        choice2:'Index 1',
        choice3:'Index 2',
        choice4:'Index 3',
        answer:2,

    },
]

// Something that is not going to be fixed hence the capatialization
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

//FUNCTION TO START GAME
startGame =() => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

questionCounter++
progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

const questionIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionIndex]
question.innerText = currentQuestion.question

choice.forEach(choice => {
    const number = choice.dataset['number']
    choice.InnerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionIndex, 1)

acceptingAnswers = true

}

// event listeners
choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return
    
    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'inncorrect'
    
    if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classlist.remove(classToApply)
    
    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion ()

        },1000)
    })
})
    
incrementScore = num => {
    score+=num
    scoreText.innerText = score
}


    