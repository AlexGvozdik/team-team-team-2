import fetchAPI from '../services/movies-api';
import firebaseAPI from './firebaseAPI';
import myError from './customAlert';
import refs from './refs';
import aboutMovieTemplates from '../templates/aboutMovieTemplates.hbs';
import { closeOnClick, modalKeypressEsc } from './modalClose';

refs.galleryList.addEventListener('click', onCardClick);

function onCardClick(eve) {
  const isCardMovie = eve.target.closest('.gallery-items');
  if (!isCardMovie) {
    return;
  }
    const idMovie = isCardMovie.dataset.index;
  onOpenModal(idMovie);
}

function onOpenModal(id) {
  document.addEventListener('keydown', modalKeypressEsc);
  refs.modalBackdrop.addEventListener('click', closeOnClick);
  
  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  
  fetchAPI.searchByMovieId(id).then(async movie => {
    refs.cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplates(movie));
    
    const token = localStorage.getItem('user-token')
    
    const watched = await firebaseAPI.checkWatchedMovies(movie);
    const queued = await firebaseAPI.checkQueuedMovies(movie);
    
    if (watched && token) {
      document.querySelector('.js-modal-btn-watched').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
    }
    document.querySelector('.js-modal-btn-watched').addEventListener('click', onWatchedAdd);
    async function onWatchedAdd(event) {
      if (!token) {
        myError('please SIGN IN')
        return false
      }
      event.target.classList.toggle('visually-hidden');
      event.target.nextElementSibling.classList.toggle('visually-hidden');
      await firebaseAPI.addMovieWatched(movie)
      const result = await firebaseAPI.getAllWatchedMovies()
      const movieId = Object.keys(result).reverse()[0]
      event.target.nextElementSibling.setAttribute('data-id',`${movieId}`)
      
    }

    document
      .querySelector('.js-modal-btn-remove-watched')
      .addEventListener('click', onWatchedRemove);
    async function onWatchedRemove(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.previousElementSibling.classList.toggle('visually-hidden');
      const id = event.target.dataset.id
      await firebaseAPI.removeMovieWatched(id)
    }

    if (queued) {
      document.querySelector('.js-modal-btn-queue').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
    }

    document.querySelector('.js-modal-btn-queue').addEventListener('click', onQueueAdd);
    async function onQueueAdd(event) {
      const token = localStorage.getItem('user-token')
      if (!token) {
        myError('please SIGN IN')
        return false
      }
      event.target.classList.toggle('visually-hidden');
      event.target.nextElementSibling.classList.toggle('visually-hidden');
      await firebaseAPI.addMovieQueued(movie)
      const result = await firebaseAPI.getAllQueuedMovies()
    }
    
    document.querySelector('.js-modal-btn-remove-queue').addEventListener('click', onQueueRemove);
    async function onQueueRemove(event) {
      const token = localStorage.getItem('user-token')
      if (!token) {
        myError('please SIGN IN')
        return false
      }
      event.target.classList.toggle('visually-hidden');
      event.target.previousElementSibling.classList.toggle('visually-hidden');
      await firebaseAPI.removeMovieQueued(id)
    }
  });

}