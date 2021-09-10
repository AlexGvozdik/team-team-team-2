import fetchAPI from '../services/movies-api';
import firebaseAPI from './firebaseAPI';
import myError from './customAlert';
import refs from './refs';
import aboutMovieTemplates from '../templates/aboutMovieTemplates.hbs';
import { closeOnClick, modalKeypressEsc } from './modalClose';
import { toggleActiveBtnWatched, toogleActiveBtnQueued } from './toggleActiveBtn';

refs.galleryList.addEventListener('click', onCardClick);

async function onCardClick(eve) {
  const isCardMovie = eve.target.closest('.gallery-items');
  const checkBtn = eve.target.classList.contains('one-card_overlay');
  const token = localStorage.getItem('user-token');
  const index = isCardMovie.dataset.index;// ID фильма
  const watched = await firebaseAPI.includeWatchedById(index);
  const queued = await firebaseAPI.includeQueuedById(index);
 
 function onHandlerAdd (event) {
      if (!token) {
        myError('please SIGN IN')
        return false
      }
      event.target.classList.toggle('visually-hidden');
    event.target.nextElementSibling.classList.toggle('visually-hidden');
   fetchAPI.searchByMovieId(index).then(async movie => await firebaseAPI.addMovieWatched(movie));
      
    } // проверка логина и добавление фильма в просмотренные
 function onHandlerRemove (event) {
  event.target.classList.toggle('visually-hidden');
  event.target.previousElementSibling.classList.toggle('visually-hidden');
  const id = event.target.dataset.id;
  fetchAPI.searchByMovieId(id).then(async movie => await firebaseAPI.removeMovieWatched(movie));
 } // удаление фильма из просмотренного(по идее)
  if (!isCardMovie) {
    return;
  }// проверка места клика
  if (eve.target.tagName === 'BUTTON' || checkBtn) {
       if (watched && token) {
      toggleActiveBtnWatched();
      }// проверка логина и наличия фильма в просмотрах
      document.querySelector('.js-modal-btn-watched').addEventListener('click', onHandlerAdd);//прослушка на добавление
      document.querySelector('.js-modal-btn-remove-watched').addEventListener('click', onHandlerRemove);// прослушка на удаление
   
      if(queued){
      toogleActiveBtnQueued();
    }//проверка на наличие в очереди

    document.querySelector('.js-modal-btn-queue').addEventListener('click', onQueueAdd);//прослушка на кнопку добавление очереди
    document.querySelector('.js-modal-btn-remove-queue').addEventListener('click', onQueueRemove);//прослушка на кнопку удаления с очереди 
    return false;
  } // проверка клика на кнопки в оверлее и прослушки

    const idMovie = isCardMovie.dataset.index;//дубляж? стр15
  onOpenModal(idMovie);
}

// document
// .querySelector('.js-modal-btn-remove-watched')
// .addEventListener('click', onWatchedRemove);
// async function onWatchedRemove(event) {
// event.target.classList.toggle('visually-hidden');
// event.target.previousElementSibling.classList.toggle('visually-hidden');
// const id = event.target.dataset.id
// await firebaseAPI.removeMovieWatched(id)
// }


function onOpenModal(id) {
  document.addEventListener('keydown', modalKeypressEsc);
  refs.modalBackdrop.addEventListener('click', closeOnClick);
  
  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  
  fetchAPI.searchByMovieId(id).then(async movie => {
    console.log(movie);
    refs.cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplates({...movie, poster_path: movie.poster_path  ?  `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://iteam-by-goit.github.io/filmoteka/onerror.jpg'}));
    const result = await firebaseAPI.getAllWatchedMovies()
    if (result) {
      const movieId = Object.keys(result).reverse()[0]
      document.querySelector('.js-modal-btn-remove-watched').setAttribute('data-id', movieId)
    }
    const result2 = await firebaseAPI.getAllQueuedMovies()
    if (result2) {
      const movieId2 = Object.keys(result2).reverse()[0]
      document.querySelector('.js-modal-btn-remove-queue').setAttribute('data-id', movieId2)
    }
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
      const id = event.target.dataset.id
      await firebaseAPI.removeMovieQueued(id)
    }
  });

}