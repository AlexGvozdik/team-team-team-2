import modalAppearanceToggle from './modalAppearanceToggle';
import refs from './refs';
import { renderFromFirebaseAPI } from './renderFromFirebaseAPI';

export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    refs.modalBackdrop.classList.add('is-hidden');
    refs.cardContainer.innerHTML = '';
    e.stopPropagation();
    modalAppearanceToggle();
    refs.modalBackdrop.removeEventListener('click', closeOnClick);
    if (refs.movieGallerySection.dataset.page === 'queue' || refs.movieGallerySection.dataset.page === 'watched') {
      renderFromFirebaseAPI(refs.movieGallerySection.dataset.page, 1);
    }
  }
}

export function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    refs.cardContainer.innerHTML = '';
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
    if (refs.movieGallerySection.dataset.page === 'queue' || refs.movieGallerySection.dataset.page === 'watched') {
      renderFromFirebaseAPI(refs.movieGallerySection.dataset.page, 1);
    }
  }
}
