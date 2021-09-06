import refs from './refs.js';
import { renderFromFirebaseAPI } from './renderFromFirebaseAPI.js';
import { renderTrending } from './renderGallery.js';

// /*=== Переключение страниц с использованием классов ===*/
// ---------------------------------------------------
export const controlPageHome = function () {
  refs.galleryList.innerHTML = '';
  refs.linkMyLibrary.classList.remove('current');
  refs.linkHome.classList.add('current');
  refs.header.classList.remove('header-container_library');
  refs.header.classList.add('header-container_home');
  refs.searchForm.classList.remove('visually-hidden');
  refs.headerButtons.classList.add('visually-hidden');
  refs.watchedLibrary.classList.add('active-btn');
  refs.queueLibrary.classList.remove('active-btn');
};

const controlPageLib = function (e) {
  refs.galleryList.innerHTML = '';
  refs.linkHome.classList.remove('current');
  refs.linkMyLibrary.classList.add('current');
  refs.header.classList.remove('header-container_home');
  refs.header.classList.add('header-container_library');
  refs.headerButtons.classList.remove('visually-hidden');
  refs.searchForm.classList.add('visually-hidden');
  refs.searchInput.value = '';
};

refs.headerNavigation.addEventListener('click', evt => {
  evt.preventDefault();

  if (evt.target === refs.linkMyLibrary) {
    controlPageLib();
      if (document.querySelector('.js-notification-wrapper')) {
       document.querySelector('.js-notification-wrapper').remove();
     }
     renderFromFirebaseAPI('watched', 1);
    refs.watchedLibrary.classList.add('active-btn');
    refs.queueLibrary.classList.remove('active-btn');
    return;
  } else if (evt.target === refs.linkHome) {
    controlPageHome();
      if (document.querySelector('.js-notification-wrapper')) {
   document.querySelector('.js-notification-wrapper').remove();
 }
    renderTrending();
    return;
  }
});
refs.logoHome.addEventListener('click', evt => {
  evt.preventDefault();
  controlPageHome();
  if (document.querySelector('.js-notification-wrapper')) {
   document.querySelector('.js-notification-wrapper').remove();
 }
  renderTrending();
});

// /* === перекличение кнопок в library ===*/
const buttons = document.querySelectorAll('.button_lib');
for (const button of buttons) {
  button.addEventListener('click', function () {
    buttons.forEach(i => i.classList.remove('active-btn'));
    this.classList.toggle('active-btn');
    if (document.querySelector('.js-notification-wrapper')) {
       document.querySelector('.js-notification-wrapper').remove();
     }
     renderFromFirebaseAPI(this.dataset.libtype, 1);
  });
}















// import { refs } from './refs.js';
// import { renderMovieList } from './renderFromLocalStorage.js';
// import { renderTrending } from './renderGallery.js';
// import { localStorageAPI } from './localStorageAPI.js';
// import { onHomeClickHandler, onMyLibraryClickHandler } from './filterByGenre.js';

// // /*=== Перемикання сторінок з використанням класів ===*/

// export const controlPageHome = function () {
//   refs.galleryList.innerHTML = '';
//   refs.linkMyLibrary.classList.remove('current');
//   refs.linkHome.classList.add('current');
//   refs.header.classList.remove('header-container_library');
//   refs.header.classList.add('header-container_home');
//   refs.searchForm.classList.remove('visually-hidden');
//   refs.headerButtons.classList.add('visually-hidden');
//   refs.watchedLibrary.classList.add('active-btn');
//   refs.queueLibrary.classList.remove('active-btn');
//   onHomeClickHandler();

// };
// const controlPageLib = function (e) {
//   refs.galleryList.innerHTML = '';
//   refs.linkHome.classList.remove('current');
//   refs.linkMyLibrary.classList.add('current');
//   refs.header.classList.remove('header-container_home');
//   refs.header.classList.add('header-container_library');
//   refs.headerButtons.classList.remove('visually-hidden');
//   refs.searchForm.classList.add('visually-hidden');
//   onMyLibraryClickHandler();
//   refs.searchInput.value = '';
// };

// refs.headerNavigation.addEventListener('click', evt => {
//   evt.preventDefault();

//   if (evt.target === refs.linkMyLibrary) {
//     controlPageLib();
//     if (document.querySelector('.js-notification-wrapper')) {
//       document.querySelector('.js-notification-wrapper').remove();
//     }
//     renderMovieList(localStorageAPI.KEYS.QUEUE, 1);
//     refs.watchedLibrary.classList.add('active-btn');
//     refs.queueLibrary.classList.remove('active-btn');
//     return;
//   } else if (evt.target === refs.linkHome) {
//     controlPageHome();
//     if (document.querySelector('.js-notification-wrapper')) {
//       document.querySelector('.js-notification-wrapper').remove();
//     }
//     renderTrending();
//     return;
//   }
// });
// refs.logoHome.addEventListener('click', evt => {
//   evt.preventDefault();
//   controlPageHome();
//   if (document.querySelector('.js-notification-wrapper')) {
//     document.querySelector('.js-notification-wrapper').remove();
//   }
//   renderTrending();
// });

// // /* === перемикання кнопок в library ===*/
// const buttons = document.querySelectorAll('.button_lib');
// for (const button of buttons) {
//   button.addEventListener('click', function () {
//     buttons.forEach(i => i.classList.remove('active-btn'));
//     this.classList.toggle('active-btn');
//     if (document.querySelector('.js-notification-wrapper')) {
//       document.querySelector('.js-notification-wrapper').remove();
//     }
//     renderMovieList(this.dataset.libtype, 1);
//   });
// }