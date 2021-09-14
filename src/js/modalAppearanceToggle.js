import refs from "./refs";
export default function () {
  refs.modalBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}