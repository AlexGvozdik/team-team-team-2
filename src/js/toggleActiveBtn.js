

export function toggleActiveBtnWatched() {
 document.querySelector('.modal-btn-watched').classList.toggle('visually-hidden');
  document.querySelector('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
  
}

export function toogleActiveBtnQueued () {
  document.querySelector('.js-modal-btn-queue').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
}
 
