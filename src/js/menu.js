// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//Poner las imágenes - div, otro div con cada imagen
//Hacer que inicie nada más entrar en la web
//setinterval cada 2 s cambie variable de css, transform translate -100 o 100%
const menuScreen = document.getElementById('menu');
menuScreen.addEventListener('click', handleClick);
if (document.body.dataset.mode === 'menu') {
  console.log('Estás en el modo simple');
}
