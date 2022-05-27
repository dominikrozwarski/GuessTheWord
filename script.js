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

let dotID = 0;
let letters = /^[A-Za-z]+$/;
let random;
let long;
let newDot;

const initiate = () => {
	guess.disabled = true;
	guess.style.backgroundColor = 'grey';
};

const firstCheck = () => {
	startGame.style.backgroundColor = 'grey';
	startGame.disabled = true;
	
	if (input.value.length != 1) {
		instruction.textContent = 'You must type ONE letter to input';
		instruction.style.color = 'red';
	} else {
		isItLetter();
	}
	
};

const isItLetter = () => {
	if (input.value.match(letters)) {
		console.log(input.value.match(letters));
		instruction.style.color = 'rgb(' + [74, 54, 38].join(',') + ')';
		instruction.textContent = "Type input and click 'guess' button";
	} else {
		instruction.textContent = 'It must be a LETTER';
		instruction.style.color = 'red';
	}
};

const lottery = () => {
	guess.disabled = false;
	guess.style.backgroundColor = 'rgb(' + [212, 187, 154].join(',') + ')';
	random = array[Math.floor(Math.random() * array.length)];
	long = random.length;
	instruction.textContent = "Type input and click 'guess' button";

	startGame.disabled = true;
	startGame.style.backgroundColor = 'grey';

	for (let i = 0; i < random.length; i++) {
		newDot = document.createElement('div');
		newDot.classList.add('dot');
		newDot.setAttribute('id', dotID);
		newDot.innerHTML = `<p>${random.charAt(i)}</p>`;
		dotID++;
		password.appendChild(newDot);
	}

	quessing();
};



const restartFunction = () => {
	startGame.disabled = false;
	startGame.style.backgroundColor = 'rgb(' + [212, 187, 154].join(',') + ')';
	password.innerHTML = '';
	instruction.textContent = 'Press start to initiate the game';
	instruction.style.color = 'rgb(' + [74, 54, 38].join(',') + ')';
	initiate();
};

startGame.addEventListener('click', lottery);
guess.addEventListener('click', firstCheck);
restart.addEventListener('click', restartFunction);


const quessing = () =>{
	console.log(random);
	// if(input.value)
}