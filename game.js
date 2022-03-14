const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


// save it to a variable called questions. so let questions equal to an array now within this array and created objects
let questions = [
    {
        question: 'Which of the following elements should we target with display: inline to make the <nav> horizontal?',
        choice1: "<nav>",
        choice2: "<ul> in the <na>",
        choice3: "The <li> is in the <nav>",
        choice4: "None apply",
        answer: 3,

    },
    {
        question: "Which of the following functionalities are controlled by CSS?",
        choice1: "Developing a website that looks good on desktop, tablets, and mobile devices",
        choice2: "Retrieving information from the proper data sources",
        choice3: "Adding content to a webpage",
        choice4: "None Apply",
        answer: 1,

    },
    {
       question: "let myFirstvariable = Bart Simpson const myNextvariable = 10;",
        choice1: "The variable myFirstvariable should be written as myFirstVariable",
        choice2: "We should not use const to introduce variables with numbers",
        choice3: "The variable myNextvariable should be written as myNextvariable",
        choice4: "There should not be a semicolon after Bart Simpson.",
        answer: 3,

    },
    {
        question: "In the array below, what is the index of the term pepperoni pizza? const favoriteFoods = [ice cream, pepperoni pizza, apple pie, almond butter];",
        choice1: "Index 0",
        choice2: "Index 1",
        choice3: "Index 2",
        choice4: "Index 3",
        answer: 2,

    }
]
//constant here say constant score underscore points, it's capitalizing because I 
//know in JavaScript that um essentially if something's going to be a fixed and you're not 
//planning on changing. so it's set 100 here and then I did an arrow syntax and set the 
// question counter is starting at zero and score can be at zero.

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

//function to start the game
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

//to say if available questions.length its equal to zero or the questions counter is greater 
//than the max questioms underscore questions.
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()