const highscoreslist = document.querySelector('#hoghScoresLis')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highscoreslist.innerHTML = 
highScores.map(score =>{
    return ' <li calss="high-score">${sore.name} - ${score.score}</li>'
}).join('')