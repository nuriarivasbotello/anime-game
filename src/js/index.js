// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//Poner las imágenes - div, otro div con cada imagen
//Hacer que inicie nada más entrar en la web
//setinterval cada 2 s cambie variable de css, transform translate -100 o 100%
let slider = document.querySelector('.slider-contenedor');
let sliderIndividual = document.querySelectorAll('.contenido-slider');
const menuElementOption = document.getElementById('menu');
const mainElementOption = document.getElementById('main');
const buttonLink = document.getElementById('link');
let counter = 1;
//let width = sliderIndividual[0].clientWidth;
let interval = 1800;

// const showMenu=event=>{
//   userPlay=event.target.dataset.button;
//   mainElementOption.classList.add('hidden');
//   menuElementOption.classList.remove()
// }
// buttonLink.addEventListener('click', event => {
//   userPlay = event.target.dataset.button;
//   showMenu;
// });

window.addEventListener('resize', function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, interval);

function slides() {
  slider.style.transform = 'translate(' + -width * counter + 'px)';
  slider.style.transition = 'transform .8s';
  counter++;
  if (counter == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = 'translate(0px)';
      slider.style.transition = 'transform 0s';
      counter = 1;
    }, 1500);
  }
}
