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

//array that contain all the words that we can quessing in game

let dotID = 0;
let letters = /^[A-Za-z]+$/;
let random;

let newDot;
let pass;

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
	} else {
		instruction.textContent = 'It must be a LETTER';
		instruction.style.color = 'red';
		//checking if there is a letter inside the input 
	}
	quessing();
	//starting function that checking is input = specific letter in dot
};

const quessing = () => {
	if (random.indexOf(input.value) > -1) {
		let i = 0;
		for (const element of random) {
			if (input.value === element) {
				let goodGuess = document.getElementById(i);
				goodGuess.style.color = 'red';
				//if the value of input appear more that once in word 
			}
			i++;
		}
	}
};

startGame.addEventListener('click', lottery);
guess.addEventListener('click', firstCheck);
restart.addEventListener('click', restartFunction);
