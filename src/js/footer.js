// const refs = {
//     showFooter:document.querySelector('.footer-js'),
//     header:document.querySelector('.js-header'),
//     library:document.querySelector('.js-lib_page'),
//     home:document.querySelector('.js-home_page'),
// }



// if (refs.header.classList.contains('header-container_home')) {
//   window.addEventListener('scroll', showFooterOnScroll);
// }

// refs.library.addEventListener('click', showFooterOnLib);
// refs.home.addEventListener('click', showFooterOnHome);

// function showFooterOnScroll() {
    
  
//   if (window.pageYOffset < document.documentElement.clientHeight) {
//     refs.showFooter.classList.remove('show-footer');
//   } else {
//     refs.showFooter.classList.add('show-footer');
//     refs.showFooter.classList.add('footer');

//   }
// }

// function showFooterOnLib() {
//   refs.showFooter.classList.remove('footer');
//   refs.showFooter.classList.add('footer-library');
// }

// function showFooterOnHome() {
//     refs.showFooter.classList.remove('footer-library');
//   }

const refs = {
  showFooter:document.querySelector('.footer-js'),
  header:document.querySelector('.js-header'),
  library:document.querySelector('.js-lib_page'),
  home:document.querySelector('.js-home_page'),
  queue:document.querySelector('js-btn_queue'),
}

const toggleSwitch = document.querySelector('.theme-switcher input[type="checkbox"]');

toggleSwitch.addEventListener('change', changeColor);

function changeColor(e) {
  if (e.target.checked) {
    changeColorFooter ()
  } else {
    changeColorFooter ()
  }
}

function changeColorFooter () {
  if(toggleSwitch.checked){
    refs.showFooter.classList.add('footer-dark')
  } else {
    refs.showFooter.classList.remove('footer-dark')
  }
}

changeColorFooter()


if (refs.header.classList.contains('header-container_home')) {
window.addEventListener('scroll', showFooterOnScroll);
}

refs.library.addEventListener('click', showFooterOnLib);
refs.home.addEventListener('click', showFooterOnHome);

function showFooterOnScroll() {
  

if (window.pageYOffset < document.documentElement.clientHeight) {
  refs.showFooter.classList.remove('show-footer');
} else {
  refs.showFooter.classList.add('show-footer');
  refs.showFooter.classList.add('footer');

}
}

function showFooterOnLib() {
refs.showFooter.classList.remove('footer');
refs.showFooter.classList.add('footer-library');
}

function showFooterOnHome() {
  refs.showFooter.classList.remove('footer-library');
}