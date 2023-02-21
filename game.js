const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availabeleQuestions = []

let questions = [
    {
        question:'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2, 
    },
    {
        question:'What is 5+5?',
        choice1: '10',
        choice2: '2',
        choice3: '21',
        choice4: '17',
        answer: 1, 
    },
    {
        question:'What is 1+1?',
        choice1: '5',
        choice2: '4',
        choice3: '2',
        choice4: '17',
        answer: 3, 
    },
    {
        question:'What is 4+4?',
        choice1: '8',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1, 
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4 

startGame = () => {
    questionCounter = 0
    score = 0 
    availabeleQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availabeleQuestions.length === 0  || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.getElementsByClassName.width = '${questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availabeleQuestions.length)
    currentQuestion = availabeleQuestions[questionsIndex]
    question.innerText = currentQuestion.question
}