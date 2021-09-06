import myError from './customAlert.js';
import firebase from '@firebase/app';
import '@firebase/auth';
import emailValidator from 'email-validator';
class AuthService {
  #USER_KEY = 'user-token';
  #USER_EMAIL = 'email';

  #firebaseConfig = {
    apiKey: "AIzaSyCVEGkloA4T-EiCSHB9zVCxS5GBxkQZXqg",
    authDomain: "film-proj.firebaseapp.com",
    projectId: "film-proj",
    storageBucket: "film-proj.appspot.com",
    messagingSenderId: "951464263309",
    appId: "1:951464263309:web:af2d626aec52a7e1faacc4",
  };

  constructor() {
    firebase.initializeApp(this.#firebaseConfig);
  }

  getCurrentUser() {
    return localStorage.getItem(this.#USER_KEY);
  }

  signUp(email, password) {
    if (!emailValidator.validate(email)) {
      myError(`${email ? email : 'Empty string'} is invalid email.`);
      return Promise.resolve(false);
    }

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(_ => {
                localStorage.setItem(this.#USER_EMAIL, firebase.auth().currentUser.bc.email)
        return localStorage.setItem(this.#USER_KEY, firebase.auth().currentUser.uid)
      })
      .then(_ => true)
      .catch(error => {
        myError(error.message);
        return false;
      });
  }

  signIn(email, password) {
    if (!emailValidator.validate(email)) {
      myError(`${email ? email : 'Empty string'} is invalid email.`);
      return Promise.resolve(false);
    }

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(_ => {
                  localStorage.setItem(this.#USER_EMAIL, firebase.auth().currentUser.bc.email)
          return localStorage.setItem(this.#USER_KEY, firebase.auth().currentUser.uid)
      })
      .then(_ => true)
      .catch(error => {
        myError(error.message);
        return false;
      });
  }

  logOut() {
    return firebase
      .auth()
      .signOut()
      .then(_ => {
                localStorage.removeItem(this.#USER_EMAIL)
        return localStorage.removeItem(this.#USER_KEY)
      })
      .catch(error => {
        myError(error);
      });
  }
}

export default AuthService;
