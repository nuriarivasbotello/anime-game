import '../scss/styles.scss';
const jollyRoger = document.getElementById('jolly');
const buttonStart = document.getElementById('button-start');
const answersElement = document.getElementById('answers');
const namesArray = ['zoro', 'brook', 'franky', 'robin', 'chopper'];
let userPlay;
let counter = 0;
const gameOptions = {
  //gameOptions
  zoro: {
    options: ['Robin', 'Brook', 'Zoro', 'Franky'],
    correctAnswer: 'Zoro',
    src: './assets/images/jolly/zoro.png'
  },
  brook: {
    options: ['Brook', 'Chopper', 'Zoro', 'Franky'],
    correctAnswer: 'Brook',
    src: './assets/images/jolly/brook.png'
  },
  franky: {
    options: ['Chopper', 'Robin', 'Zoro', 'Franky'],
    correctAnswer: 'Franky',
    src: './assets/images/jolly/franky.png'
  },
  robin: {
    options: ['Franky', 'Zoro', 'Robin', 'Chopper'],
    correctAnswer: 'Robin',
    src: './assets/images/jolly/robin.png'
  },
  chopper: {
    options: ['Zoro', 'Franky', 'Robin', 'Chopper'],
    correctAnswer: 'Chopper',
    src: './assets/images/jolly/chopper.png'
  }
};
let correctAnswer;

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
};
const randomResult = () => {
  const randomNumber = Math.floor(Math.random() * namesArray.length);
  showResult(namesArray[randomNumber]);
  //esta es la opcion correcta
  console.log(namesArray[randomNumber]);
};
const comparedAnswer = answer => {
  if (userPlay === correctAnswer) {
    answer.classList.add('green');
    console.log('Has cogido ' + userPlay + ' y has acertado');
    randomResult();
  } else {
    answer.classList.add('red');
    console.log('Has cogido ' + userPlay + ' y has fallado');
  }
};

answersElement.addEventListener('click', event => {
  userPlay = event.target.dataset.answer;
  comparedAnswer(event.target);
});
buttonStart.addEventListener('click', () => {
  randomResult();
});
