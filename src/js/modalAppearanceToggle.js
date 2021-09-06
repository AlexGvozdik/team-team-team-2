import refs from "./refs";
export default function modalAppearanceToggle() {
  refs.modalBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}