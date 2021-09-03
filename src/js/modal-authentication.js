import AuthService from './authService';
import axios from 'axios';
// 'https://events-ecec8-default-rtdb.firebaseio.com/'
const auth = new AuthService();
import { fetchTrandingMovies,fetchMovie,fetchMovieDetails } from '../services/movies-api';
async function log() {
   await fetchMovieDetails(616651).then(console.log);
   await fetchTrandingMovies().then(console.log);
}
log()
const refs = {
    btnOpenModalAuthentication: document.querySelector('.btn-authentication'),
    btnClose: document.querySelector('[data-modal-window-close-authentication]'),
    backdrop: document.querySelector('[data-modal-backdrop-authentication]'),
    txtEmail: document.querySelector('#txtEmail'),
    txtPassword: document.querySelector('#txtPassword'),
    btnLogin: document.querySelector('#btnLogin'),
    btnSignUp: document.querySelector('#btnSignUp'),
    btnLogout: document.querySelector('#btnLogout'),
    greeting: document.querySelector('.greeting-authentication'),
    body: document.querySelector('body'),
};

refs.btnOpenModalAuthentication.addEventListener('click', onBtnAuthenticationClick);
refs.backdrop.addEventListener('click', onClickBackdrop);
refs.btnClose.addEventListener('click', onClickBtnClose);

refs.btnLogin.addEventListener('click', onClickbtnLogin);
refs.btnSignUp.addEventListener('click', onClickbtnSignUp);
refs.btnLogout.addEventListener('click', onClicbtnLogout);

if (auth.getCurrentUser() !== null) {
    successfulLogin();
}

function onBtnAuthenticationClick() {
    refs.backdrop.classList.add('is--open');
    refs.body.classList.toggle('modal-open');
}
function onClickBackdrop(event) {
    if (event.currentTarget === event.target) {
      onClickBtnClose();
    }
}
function onClickBtnClose() {
    refs.backdrop.classList.remove('is--open');
    refs.body.classList.toggle('modal-open');
}

function onClickbtnLogin() {
    const email = txtEmail.value;
    const password = txtPassword.value;
    
    auth.signIn(email, password)
        .then(isAuthenticated => {
            if (isAuthenticated) {
                successfulLogin();
            } else {
                refs.txtEmail.value = '';
                refs.txtPassword.value = '';
            }
        });
    // auth.infoEmail(email, password)
    // .then(mail => {
    //         if (mail) {
    //             successfulLogin(mail);
    //         } else {
    //             refs.txtEmail.value = '';
    //             refs.txtPassword.value = '';
    //         }
    //     });
}

function onClickbtnSignUp() {
    const email = txtEmail.value;
    const password = txtPassword.value;
    
    auth.signUp(email, password)
        .then(isAuthenticated => {
            if (isAuthenticated) {
                successfulLogin();
            } else {
                refs.txtEmail.value = '';
                refs.txtPassword.value = '';
            }
        });
}

function onClicbtnLogout() {
    refs.greeting.textContent = '';
    refs.txtEmail.value = '';
    refs.txtPassword.value = '';
    refs.btnLogin.classList.remove('disabled-btn');
    refs.btnSignUp.classList.remove('disabled-btn');
    refs.txtEmail.classList.remove('disabled-btn');
    refs.txtPassword.classList.remove('disabled-btn');
    refs.btnOpenModalAuthentication.textContent = 'Sign UP | Log IN';
    refs.btnLogout.classList.add('disabled-btn');
    auth.logOut();
}

function successfulLogin() {
    const email = localStorage.getItem('email')
    const modifiedName = email.split('@')[0]
    console.log(modifiedName)
    refs.btnOpenModalAuthentication.textContent = `Hi ${modifiedName}`;
    refs.greeting.textContent = `Welcome ${modifiedName} , do you really wanna `;

    refs.btnLogin.classList.add('disabled-btn');
    refs.btnSignUp.classList.add('disabled-btn');
    refs.txtEmail.classList.add('disabled-btn');
    refs.txtPassword.classList.add('disabled-btn');
    refs.btnLogout.classList.remove('disabled-btn');
}