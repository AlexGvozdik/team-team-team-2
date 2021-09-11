import { refs } from './refs.js';

export default function renameAll() {
    refs.searchInput.setAttribute('placeholder', 'Поиск фильмов');
    refs.linkHome.textContent = 'Главная';
    refs.linkMyLibrary.textContent = 'Избранное';
    refs.watchedLibrary.textContent = 'Просмотренное';
    refs.queueLibrary.textContent = 'Отложенные';
//   if (language === 'ru-RU') {
//     refs.searchInput.setAttribute('placeholder', 'Поиск фильмов');
//     refs.linkHome.textContent = 'Главная';
//     refs.linkMyLibrary.textContent = 'Избранное';
//     refs.watchedLibrary.textContent = 'Просмотренное';
//     refs.queueLibrary.textContent = 'Отложенные';
//   }
//   if (language === 'en-US') {
//     // refs.linkHome.textContent = 'Home';
//     // refs.linkMyLibrary.textContent = 'My library';
//     // refs.searchInput.setAttribute('placeholder', 'Search movies');
//     // refs.watchedLibrary.textContent = 'Watched';
//     // refs.queueLibrary.textContent = 'Queue';
//   }
}