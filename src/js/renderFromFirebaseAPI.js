// import { localStorageAPI } from './localStorageAPI';
import firebaseAPI from './firebaseAPI'
import  refs  from './refs';
import { render } from './renderGallery';
import { spinnerMethod } from './spinner';

export async function renderFromFirebaseAPI(key, page) {
  spinnerMethod.addSpinner()
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }
  let data;
  if (key === 'watched') {
    const result = await firebaseAPI.getAllWatchedMovies()
    console.log(result)

    data = result ? Object.values(result).reverse() :"";
  } else {
    const result = await firebaseAPI.getAllQueuedMovies()
    data = result ? Object.values(result).reverse() :"";
  }
  setTimeout(()=>  spinnerMethod.removeSpinner(),800)
  if (!data || data.length === 0) {
    if (document.querySelector('.js-notification-wrapper') === null && page === 1) {
      refs.movieGallerySection.firstElementChild.insertAdjacentHTML(
        'afterbegin',
        '<div class="js-notification-wrapper"><svg class="notification-cat-icon" width="280" height="280"><use href="./sprite.svg#icon-notificationCat"></use></svg></div>',
      );
    }
    return;
  }
  try {
    render(data);
  } catch (e) {
    spinnerMethod.removeSpinner();
  }
}
