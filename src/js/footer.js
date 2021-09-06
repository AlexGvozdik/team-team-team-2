const showFooter = document.querySelector('.footer-js');

window.addEventListener('scroll', showFooterOnScroll);

function showFooterOnScroll() {
        if (window.pageYOffset < document.documentElement.clientHeight) {
            showFooter.classList.remove('show-footer');
        } else {
            showFooter.classList.add('show-footer');
        }
}