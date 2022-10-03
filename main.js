const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const generateAnswer = () => {

    const number = Math.floor(Math.random() * 20)
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
    
}

ball.addEventListener('click', generateAnswer)

const answersArr = [
	'Spróbuj później',
	'Spróbuj ponownie',
	'Brak opinii',
	'To twoje przeznaczenie',
	'Kości zostały rzucone',
	'Jedna szansa z dwóch',
	'Zadaj pytanie ponownie',
	'Moim zdaniem tak',
	'Na pewno',
	'Tak, absolutnie',
	'Możesz na to liczyć',
	'Możesz na to liczyć',
	'Bardzo prawdopodobne',
	'Tak',
	'Na dobry początek',
	'To nie jest',
	'Mało prawdopodobne',
	'Nie śnij...',
	'Nie licz...',
	'Niemożliwy '
]