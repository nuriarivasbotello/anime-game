import '../scss/styles.scss';
const jollyRoger = document.getElementById('jolly');
const buttonStart = document.getElementById('button-start');
const allowedResults = ['zoro', 'robin', 'chopper', 'franky', 'brook'];
let userPlay;
const resultInfo = {
  zoro: {
    src: './assets/images/icon-zoro.png'
  },
  brook: {
    src: './assets/images/icon-brook.png'
  },
  franky: {
    src: './assets/images/icon-franky.png'
  },
  robin: {
    src: './assets/images/icon-robin.png'
  },
  chopper: {
    src: './assets/images/icon-chopper'
  }
};

const randomResult = () => {
  let result = '';
  const randomImage = Math.floor(Math.random() * allowedResults.length);
  for (let i = 0; i < resultInfo.length; i++) {}
};
const showResult = () => {};
const handleClick = event => {
  userPlay = event.target.dataset.button;
  randomResult();
  showResult();
};
buttonStart.addEventListener('click', handleClick);
jollyRoger.addEventListener('click', handleClick);
if (document.body.dataset.mode === 'jolly-roger') {
  console.log('Estás en el modo simple');
}
