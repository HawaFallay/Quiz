const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
console.log(choices)
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter;
let availabeleQuestions = []
let time = 60

let questions = [
    {
        question:'When was JavaScript invented?',
        choice1: '2001',
        choice2: '1995',
        choice3: '1985',
        choice4: '1978',
        answer: 2, 
    },
    {
        question:'Which one of these is a trendy Front-end JavaScript framework?',
        choice1: 'React',
        choice2: 'Triangualar',
        choice3: 'Venue',
        choice4: 'Marina',
        answer: 1, 
    },
    {
        question:'Statistics show that ___ of all websites use JavaScript.',
        choice1: '59%',
        choice2: '20%',
        choice3: '95%',
        choice4: '100%',
        answer: 3, 
    },
    {
        question:'JavaScript is capable of_____.',
        choice1: 'Game Development',
        choice2: 'Creating web and mobile apps',
        choice3: 'Adding interactive behavior to web pages',
        choice4: 'All of the above',
        answer: 4, 
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
setInterval(function () {
  var timerEl = document.getElementById("timer") 
  timerEl.textContent = 
}, 1000);


getNewQuestion = () => {
    if(availabeleQuestions.length === 0  || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availabeleQuestions.length)
    currentQuestion = availabeleQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
        choice.append("hello")
    })

    availabeleQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const SelectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer
    })
})
startGame()