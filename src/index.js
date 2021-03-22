import './assets/scss/main.scss';
import 'jquery';
import './libs/fotorama/fotorama';
import carusel from './js/carusel';
import menu from './js/menu';


document.addEventListener('DOMContentLoaded', () => {
    menu();
    carusel();
});