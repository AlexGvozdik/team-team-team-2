import moviesAPI from '../services/movies-api';
import renameAll from './renameAll';
import refs from './refs.js';
import { renderTrending } from './renderGallery.js';

const language = {
  en: 'en-US',
  ru: 'ru-RU',
};

refs.switcher.addEventListener('click', changeLanguage);

(function initLanguage() {
  if (localStorage.getItem('language') === null) {
    moviesAPI.language = language.en;
    localStorage.setItem('language', moviesAPI.language);
  } else {
    moviesAPI.language = localStorage.getItem('language');
  }
  refs.switcher.checked = moviesAPI.language === language.en ? false : true;

  renameAll(moviesAPI.language);
  renderTrending();
})();

function changeLanguage() {
  let oldLanguage = localStorage.getItem('language');

  if (moviesAPI.language === language.en) {
    moviesAPI.language = language.ru;
    localStorage.setItem('language', moviesAPI.language);
    refs.body.classList.replace(oldLanguage, moviesAPI.language);
    refs.switcher.checked = true;
  } else {
    moviesAPI.language = language.en;
    localStorage.setItem('language', moviesAPI.language);
    refs.body.classList.replace(oldLanguage, moviesAPI.language);
    refs.switcher.checked = false;
  }
  renameAll(moviesAPI.language);

  if (refs.linkHome.classList.contains('current')){
    renderTrending();
  }

  
}