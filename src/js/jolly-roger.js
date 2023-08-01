import '../scss/styles.scss';
const jollyRoger = document.getElementById('jolly');
const buttonStart = document.getElementById('button-start');
const answersElement = document.getElementById('answers');
const footerElement = document.getElementById('footer');
const buttonContinueElement = document.getElementById('button-continue');
let namesArray = [
  'zoro',
  'brook',
  'franky',
  'robin',
  'chopper',
  'luffy',
  'sanji',
  'nami',
  'jinbe',
  'usopp'
];
let userPlay;
let gameOptions = {
  id: 0,
  //gameOptions
  zoro: {
    id: 1,
    options: ['Robin', 'Luffy', 'Zoro', 'Franky', 'Nami', 'Usopp'],
    correctAnswer: 'Zoro',

    src: './assets/images/jolly/zoro.png'
  },
  brook: {
    id: 2,
    options: ['Brook', 'Chopper', 'Zoro', 'Jinbe', 'Sanji', 'Robin'],
    correctAnswer: 'Brook',

    src: './assets/images/jolly/brook.png'
  },
  franky: {
    id: 3,
    options: ['Usopp', 'Luffy', 'Zoro', 'Franky', 'Nami', 'Jinbe'],
    correctAnswer: 'Franky',

    src: './assets/images/jolly/franky.png'
  },
  robin: {
    id: 4,
    options: ['Franky', 'Nami', 'Robin', 'Sanji', 'Chopper', 'Usopp'],
    correctAnswer: 'Robin',

    src: './assets/images/jolly/robin.png'
  },
  chopper: {
    id: 5,
    options: ['Zoro', 'Franky', 'Robin', 'Chopper', 'Nami', 'Luffy'],
    correctAnswer: 'Chopper',

    src: './assets/images/jolly/chopper.png'
  },
  luffy: {
    id: 6,
    options: ['Robin', 'Luffy', 'Zoro', 'Franky', 'Jinbe', 'Usopp'],
    correctAnswer: 'Luffy',

    src: './assets/images/jolly/luffy.png'
  },
  sanji: {
    id: 7,
    options: ['Sanji', 'Jinbe', 'Zoro', 'Franky', 'Nami', 'Robin'],
    correctAnswer: 'Sanji',

    src: './assets/images/jolly/sanji.png'
  },
  nami: {
    id: 8,
    options: ['Robin', 'Brook', 'Zoro', 'Nami', 'Chopper', 'Usopp'],
    correctAnswer: 'Nami',

    src: './assets/images/jolly/nami.png'
  },
  jinbe: {
    id: 9,
    options: ['Jinbe', 'Brook', 'Zoro', 'Franky', 'Luffy', 'Robin'],
    correctAnswer: 'Jinbe',

    src: './assets/images/jolly/jinbe.png'
  },
  usopp: {
    id: 7,
    options: ['Robin', 'Brook', 'Usopp', 'Franky', 'Chopper', 'Sanji'],
    correctAnswer: 'Usopp',

    src: './assets/images/jolly/usopp.png'
  }
};
let correctAnswer;
const stopGame = () => {
  if (namesArray.length < 1) {
    console.log('No hay más');
    buttonContinueElement.classList.add('hidden');
    const newButtonStop = document.createElement('p');
    newButtonStop.classList.add('finish-message');
    newButtonStop.textContent = '¡FINISH!';
    footerElement.append(newButtonStop);
  }
};
const deletedAnswer = name => {
  delete gameOptions[name]; //para borrar un objeto del array
  //console.log(gameOptions);
  namesArray = namesArray.filter(currentName => currentName !== name);
};
const createdOptions = name => {
  answersElement.textContent = '';
  correctAnswer = gameOptions[name].correctAnswer;
  for (const option of gameOptions[name].options) {
    const newButton = document.createElement('button');
    newButton.classList.add('answer');
    newButton.textContent = option;
    newButton.dataset.answer = option;
    answersElement.append(newButton);
  }
};
const showResult = name => {
  jollyRoger.src = gameOptions[name].src;
  createdOptions(name);
  deletedAnswer(name);
};
const randomResult = () => {
  const randomNumber = Math.floor(Math.random() * namesArray.length);
  showResult(namesArray[randomNumber]);
  //esta es la opcion correcta
  //console.log(namesArray[randomNumber]);
};
const comparedAnswer = answer => {
  if (userPlay === correctAnswer) {
    answer.classList.add('green');
    buttonContinueElement.classList.remove('hidden');
    stopGame();
    console.log('Has cogido ' + userPlay + ' y has acertado');
  } else {
    answer.classList.add('red');
    console.log('Has cogido ' + userPlay + ' y has fallado');
  }
  console.log(namesArray);
};
//Hacer que cuando coja la correcta, se elimine del array hasta el último, puedo usar splice
answersElement.addEventListener('click', event => {
  userPlay = event.target.dataset.answer;
  comparedAnswer(event.target);
});
buttonStart.addEventListener('click', () => {
  buttonStart.classList.add('hidden');
  randomResult();
});
buttonContinueElement.addEventListener('click', event => {
  event.preventDefault();
  randomResult();
  buttonContinueElement.classList.add('hidden');
});
