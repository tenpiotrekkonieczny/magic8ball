const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

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
	'Niemożliwy ',
]


const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musibyć akończone "?"'
        answer.textContent = ''
    } else {
        error.textContent = 'Musisz zadać pytanie!'
				answer.textContent = ''
    }
}

const generateAnswer = () => {

    const number = Math.floor(Math.random() * 20)
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
    
}

ball.addEventListener('click', checkInput)

