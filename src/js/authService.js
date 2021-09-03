import myError from './customAlert.js';

import firebase from '@firebase/app';
import '@firebase/auth';
import emailValidator from 'email-validator';

class AuthService {
  #USER_KEY = 'current-user';
  #USER_EMAIL = 'email';

  #firebaseConfig = {
    apiKey: "AIzaSyAKqfNKZXuNU-bCcQ-4dckbh43V7aKEKtw",
    authDomain: "filmoteka-project-59017.firebaseapp.com",
    projectId: "filmoteka-project-59017",
    storageBucket: "filmoteka-project-59017.appspot.com",
    messagingSenderId: "1059696347676",
    appId: "1:1059696347676:web:f39786f08388795b0dadd9"
  };

  constructor() {
    firebase.initializeApp(this.#firebaseConfig)
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
  // infoEmail(email, password) {
  //   if (!emailValidator.validate(email)) {
  //     myError(`${email ? email : 'Empty string'} is invalid email.`);
  //     return Promise.resolve(false);
  //   }

  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(_ => {
  //       return localStorage.setItem(this.USER_EMAIL, firebase.auth().currentUser.bc.email)
  //     })
  //     .catch(error => {
  //       myError(error.message);
  //       return false;
  //     });
  // }

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
