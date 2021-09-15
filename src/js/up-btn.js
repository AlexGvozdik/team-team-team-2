var scrollTopBtn = document.querySelector('.scroll-to-top');//ссылка на кнопку(хоть она и див))

window.addEventListener('scroll', () => {
  const { scrollTop, clientHeight } = document.documentElement;
  if (scrollTop > clientHeight) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});//функция для определения положения скрола и присвоения класса отображения

scrollTopBtn.addEventListener('click', scrollToTop);//прослушка нажатия на кнопку

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}//функция скрола вверх
