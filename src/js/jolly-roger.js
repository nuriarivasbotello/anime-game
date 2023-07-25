import '../scss/styles.scss';
const jollyRoger = document.getElementById('jolly');
const buttonStart = document.getElementById('button-start');
const answersElement = document.getElementById('answers');
const namesArray = ['zoro', 'brook', 'franky', 'robin', 'chopper'];
let userPlay;
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
//Objeto con imágenes
//Aleatorio del array de nombres
//Al hacer click, que funcione y salga el aleatorio del array
//Que se cree texto en los cuadritos
//Que la foto que se genere, aparezca el nombre en los cuadritos y sea el true
const createdOptions = name => {
  for (const option of gameOptions[name].options) {
    const newButton = document.createElement('button');
    newButton.classList.add('answer');
    newButton.textContent = option;
    answersElement.append(newButton);
  }
};
const showResult = name => {
  jollyRoger.src = gameOptions[name].src;

  //recibe el name
  //
  //console.log(name);
  createdOptions(name);
};
const randomResult = () => {
  const randomNumber = Math.floor(Math.random() * namesArray.length);
  showResult(namesArray[randomNumber]);

  console.log(namesArray[randomNumber]);
};

let counter = 0;
//Cuando la respuesta sea correcta (event target usuario) hacer el counter ++ y aplicarlo a createdOptions
//Para saber el correcto hacer un objeto de pregunta. ID fuera y question
//un contador=0 (posicion de la pregunta), event.target para saber que respuesta

buttonStart.addEventListener('click', () => {
  randomResult();
});
