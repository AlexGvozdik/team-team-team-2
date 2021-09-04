const refs = {
    modalFooter:document.querySelector('.modal-footer-js'),
    devLink:document.querySelector('.goit-link'),
    btnClose:document.querySelector('.button-close')
}

refs.devLink.addEventListener('click', clickOnLink);
refs.btnClose.addEventListener('click', clickOnBtnClose);
document.addEventListener('keydown', clickOnEsc)

function clickOnLink () {
    refs.modalFooter.classList.remove('is-hidden')
}

function clickOnBtnClose(){
    refs.modalFooter.classList.add('is-hidden')
}

function clickOnEsc(){
    if (refs.modalFooter.classList.contains('is-hidden')){
        return;
    } else {
        refs.modalFooter.classList.add('is-hidden')
    }
}