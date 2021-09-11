import moviesAPI from '../services/movies-api';
import renameAll from './renameAll';

const refs = {
  en: document.querySelector('.lang-en'),
  ru: document.querySelector('.lang-ru'),
  body: document.querySelector('body'),
};

const language = {
  en: 'en-US',
  ru: 'ru-RU',
};

refs.ru.addEventListener('click', changeLangToRu);

// function localLangInit () {
//     if (localStorage.getItem('language') === null) {
//         fetchAPI.language = language.en;
//         localStorage.setItem('language', fetchAPI.language);
//       } else {
//         fetchAPI.language = localStorage.getItem('language');
//       }
// }

// function changeLangToRu() {
//   moviesAPI.language = language.ru;
//   localStorage.setItem('language', moviesAPI.language);
//   renameAll();

//   // if (moviesAPI.language === language.en) {
//   //     moviesAPI.language = language.ru;
//   //     localStorage.setItem('language', moviesAPI.language);
//   // }
// }
