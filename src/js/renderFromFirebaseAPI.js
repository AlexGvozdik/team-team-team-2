import firebaseAPI from './firebaseAPI'
import  refs  from './refs';
import { render } from './renderGallery';
import { spinnerMethod } from './spinner';

export async function renderFromFirebaseAPI(key, page) {
  const token = localStorage.getItem('user-token')
  spinnerMethod.addSpinner()
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }
  refs.movieGallerySection.dataset.page = key;
  let data,request;
  if (token) {
    switch (key) {
      case 'watched':
        request = await firebaseAPI.getAllWatchedMovies()
        data = request ? Object.values(request).reverse() : "";
        break;
      case 'queue':
        request = await firebaseAPI.getAllQueuedMovies()
        data = request ? Object.values(request).reverse() : "";
        break;
      default: break;
    }
  }
  // if (key === 'watched') {
  //   const result = await firebaseAPI.getAllWatchedMovies()
  //   console.log(result)

  //   data = result ? Object.values(result).reverse() :"";
  // } else {
  //   const result = await firebaseAPI.getAllQueuedMovies()
  //   data = result ? Object.values(result).reverse() :"";
  // }
  setTimeout(() => spinnerMethod.removeSpinner(), 800)
  if (!data || data.length === 0) {
    if (document.querySelector('.js-notification-wrapper') === null && page === 1) {
      refs.movieGallerySection.firstElementChild.insertAdjacentHTML(
        'afterbegin',
        '<div class="js-notification-wrapper"><svg class="notification-cat-icon" width="280" height="280"><use href="symbol-defs.4fba6ab5.svg#empty"></use></svg></div>',
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
