import refs from './refs.js';

export default function renameAll(language) {    
  if (language === 'ru-RU') {
    refs.searchInput.setAttribute('placeholder', 'Поиск фильмов');
    refs.linkHome.textContent = 'Главная';
    refs.linkMyLibrary.textContent = 'Избранное';
    refs.watchedLibrary.textContent = 'Просмотренное';
    refs.queueLibrary.textContent = 'Отложенные';
    // refs.btnAuthentication.textContent = 'Регистрация | Вход';
    refs.footerRights.textContent = '2021 | Все права защищены |';
    refs.fooDev.textContent = 'Разработано с';
    refs.goItLink.textContent = 'студентами GoIT';
    refs.btnActionLogin.textContent = 'Вход';
    refs.btnSecondary.textContent = 'Регистрация';
    refs.btnLogout.textContent = 'Выйти';
    // refs.btnGalleryItemWatched.textContent = 'Просмотренно'
    // refs.modalBtnWached.textContent = 'Добавить в просмотренные';
    // refs.modalSecondaryTitle.textContent = 'Про фильм';
  } else 
  if (language === 'en-US') {
    refs.searchInput.setAttribute('placeholder', 'Search movies');
    refs.linkHome.textContent = 'Home';
    refs.linkMyLibrary.textContent = 'My library';
    refs.watchedLibrary.textContent = 'Watched';
    refs.queueLibrary.textContent = 'Queue';
    // refs.btnAuthentication.textContent = 'Sign UP | Log in';
    refs.footerRights.textContent = '2021 | All Rights Reserved |';
    refs.fooDev.textContent = 'Developed with';
    refs.goItLink.textContent = 'by GoIT Students';
    refs.btnActionLogin.textContent = 'Log in';
    refs.btnSecondary.textContent = 'Sing UP';
    refs.btnLogout.textContent = 'Logout';
    // refs.btnGalleryItemWatched.textContent = 'ADD TO WATCHED'
    // refs.modalBtnWached.textContent = 'add to watched';
    // refs.modalSecondaryTitle.textContent = 'About';
  }
}