// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const happyJollyElement = document.getElementById('happy-jolly');
const sadJollyElement = document.getElementById('sad-jolly');
const mainElementOption = document.getElementById('main');
const menuElementOption = document.getElementById('menu');
const buttonLink = document.getElementById('link');
let userPlay;
const showMenu = () => {
  mainElementOption.classList.add('hidden');
  menuElementOption.classList.remove('hidden');
};
buttonLink.addEventListener('click', event => {
  userPlay = event.target.dataset.button;
  showMenu();
});
