import moviesAPI from '../services/movies-api';

    const refs = {
        en:document.querySelector('.lang-en'),
        ua:document.querySelector('.lang-ua')
    }
    
    const language = {
        en: 'en-US',
        ua: 'ru-RU',
    }
    
    refs.ua.addEventListener('click', changeLangToUa)
    
    function changeLangToUa () {
        if (moviesAPI.language === language.en) {
            moviesAPI.language = language.ua;
            localStorage.setItem('language', moviesAPI.language);
          }
    }