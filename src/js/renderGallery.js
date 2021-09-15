import movieItemTpl from '../templates/movieItemTpl.hbs';

import movieItemTplRu from '../templates/movieItemTplRu.hbs';
import axiosAPI from '../services/movies-api';

import myError from './customAlert';
import refs from './refs';
import { spinnerMethod } from './spinner';


document.addEventListener('DOMContentLoaded', () => {
  renderTrending(1);
});

async function renderTrending(page = 1) {
  refs.movieGallerySection.dataset.page = 'trending';
  try {
    if (page === 1) {
      refs.galleryList.innerHTML = '';
    }
    const trends = await axiosAPI.fetchTrandingMovies(page).then(data => {
      return data.results;
    });
    render(trends);
  } catch (e) {
    console.log('this is error:', e);
  }
}

async function renderSearchResult(query, page) {
  refs.movieGallerySection.dataset.page = 'searching';
  spinnerMethod.addSpinner();
  try {
    if (page === 1) {
      refs.galleryList.innerHTML = '';
    }
    const data = await axiosAPI.fetchMovie(query, page);
    const results = data.results;
    if (results.length === 0 && page === 1) {
      // myError('Unsuccessful results. Try different query!');
      setTimeout(() => {
        refs.searchInput.value = '';
        const eventInput = new Event('input');
        refs.searchInput.dispatchEvent(eventInput);
      }, 2000)
    }
    if (page > data.total_pages) {
      spinnerMethod.removeSpinner();
      return;
    }
    render(results);
  } catch (e) {
    myError('Unsuccessful results. Try again!');
  } finally {
    setTimeout(() => {
      spinnerMethod.removeSpinner()
    },400)
  }
}

async function render(data) {
  const newData = data.map(item=> ({...item, poster_path: item.poster_path  ?  `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://iteam-by-goit.github.io/filmoteka/onerror.jpg'}))
  const genres = await axiosAPI.getGenres().then(list => { return list.genres });
  const result = await renderGalleryMarkup(newData, genres);
  const cardsGallery = movieItemTpl(result);
  const cardsGalleryRu = movieItemTplRu(result);
  let currentPageLanguage = localStorage.getItem('language');
  if (currentPageLanguage === 'en-US') {
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGallery);
  } else if (currentPageLanguage === 'ru-RU') {
    refs.galleryList.insertAdjacentHTML('beforeend', cardsGalleryRu);
  }
}

function renderGalleryMarkup(data, list) {
  if (Object.keys(data[0]).includes('genres')) {
    let newData = data.map(item => {
      const id = item.genres.map(item => item.id);
      Object.assign(item, { genre_ids: id });
      delete item.genres;
      return item;
    });
    return newData.map(obj => ({
      ...obj,

      genres_short_list: createGenres(obj, list),
      release_date: createCardYear(obj),
    }));
  }
  return data.map(obj => {
    return {
    ...obj,

    genres_short_list: createGenres(obj, list),
    release_date: createCardYear(obj),
    }
  });
}

function createGenres(obj, list) {
  const movieCardGenresList = obj.genre_ids;
  const movieCardGenresArray = list.filter(item => movieCardGenresList.includes(item.id));
  const mapedGenres = movieCardGenresArray.map(({ name }) => name);

  let movieGenreArraySlice = [];
  if (mapedGenres.length < 3) {
    movieGenreArraySlice = mapedGenres;
  } else {
    movieGenreArraySlice = mapedGenres.slice(0, 2);
    movieGenreArraySlice.push('...');
  }
  return movieGenreArraySlice.join(', ');
}

function createCardYear(obj) {
  return obj.release_date ? obj.release_date.slice(0, 4) : '';
}

refs.searchForm.addEventListener('submit', onSubmitHandler);
refs.searchInput.addEventListener('input', (e) => {
    if (!e.target.value) {
        renderTrending(1);
    }
})

async function onSubmitHandler(e) {
  e.preventDefault();
  const query = refs.searchInput.value.trim();
  if (!query) {
    return;
  }
  renderSearchResult(query, 1);
}

export { renderTrending, renderSearchResult, render};
