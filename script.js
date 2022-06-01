const remain = document.querySelector('.remain');
const used = document.querySelector('.used');
const instruction = document.querySelector('.instruction');

const input = document.querySelector('.input');
const password = document.querySelector('.password');
const tips = document.querySelector('.tips');

const startGame = document.querySelector('.start');
const guess = document.querySelector('.guess');
const restart = document.querySelector('.restart');

const array = [
	'water',
	'earth',
	'calculator',
	'ship',
	'phone',
	'pope',
	'book',
	'phone',
	'monitor',
	'work',
];

let k = 10;
let o = 0;

//array that contain all the words that we can quessing in game

let dotID = 0;
let letters = /^[A-Za-z]+$/;
let random;

let newDot;
let pass;
let goodGuess;

const initiate = () => {
	guess.disabled = true;
	guess.style.backgroundColor = 'grey';
	//setting starting parameter of the game
};

const restartFunction = () => {
	startGame.disabled = false;
	startGame.style.backgroundColor = 'rgb(' + [212, 187, 154].join(',') + ')';
	password.innerHTML = '';
	instruction.textContent = 'Press "start" to initiate the game';
	instruction.style.color = 'rgb(' + [74, 54, 38].join(',') + ')';
	initiate();
	remain.textContent = '';
	k = 10;
	//if we press restart the starting parameter accure
};

const lottery = () => {
	guess.disabled = false;
	guess.style.backgroundColor = 'rgb(' + [212, 187, 154].join(',') + ')';
	random = array[Math.floor(Math.random() * array.length)];
	//getting random word from array

	instruction.textContent = 'Type input and click "guess" button';
	//alert message

	startGame.disabled = true;
	startGame.style.backgroundColor = 'grey';
	//disebling button start , only way to start game again is to restart

	for (let i = 0; i < random.length; i++) {
		newDot = document.createElement('div');
		newDot.classList.add('dot');
		newDot.setAttribute('id', dotID);
		newDot.innerHTML = `<p>${random.charAt(i)}</p>`;
		pass = `<p>${random.charAt(i)}</p>`;
		dotID++;
		password.appendChild(newDot);
		//setting password inside the specific dot , 1 dot = 1 letter
	}
};

const firstCheck = () => {
	startGame.style.backgroundColor = 'grey';
	startGame.disabled = true;

	if (input.value.length != 1) {
		instruction.textContent = 'You must type ONE letter to input';
		instruction.style.color = 'red';

		//checking if there is only one letter inside the input
	} else {
		isItLetter();
	}
};

const isItLetter = () => {
	if (input.value.match(letters)) {
		instruction.style.color = 'rgb(' + [74, 54, 38].join(',') + ')';
		instruction.textContent = 'Type input and click "guess" button';
		quessing();
	} else {
		instruction.textContent = 'It must be a LETTER';
		instruction.style.color = 'red';
		//checking if there is a letter inside the input
	}

	//starting function that checking is input = specific letter in dot
};

const quessing = () => {
	k--;
	remain.textContent = `${k} attempts remained`;
	if (k < 0) {
		remain.textContent = `You have lost`;
		guess.disabled = 'true';
		guess.style.backgroundColor = 'grey';
	}
	//value of attempps remaining

	if (random.indexOf(input.value) > -1) {
		dotID = 0;
		let i = 0;

		for (const element of random) {
			if (input.value == element) {
				goodGuess = document.getElementById(i);
				goodGuess.style.color = 'white';
			}
			i++;
		}
	}
};

startGame.addEventListener('click', lottery);
guess.addEventListener('click', firstCheck);
restart.addEventListener('click', restartFunction);
