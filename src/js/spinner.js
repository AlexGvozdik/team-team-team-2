import refs from "./refs";

const preloader = refs.spinnerPreloader;

document.body.onload = () => {
  setTimeout(() => {
    if (!preloader.classList.contains('preloader-js')) {
      preloader.classList.add('preloader-js');
    }
  }, 500);
};

export const spinnerMethod = {
  removeSpinner: function () {
    setTimeout(() => {
      preloader.classList.add('preloader-js')
      // refs.body.classList.remove('modal-open-preloader');
    }, 400);
  },
  addSpinner: function () {
    preloader.classList.remove('preloader-js');
    // refs.body.classList.add('modal-open-preloader');
  },
};

