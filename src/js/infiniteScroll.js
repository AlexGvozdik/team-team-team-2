import refs from './refs';
import { spinnerMethod } from './spinner';
import { renderTrending,renderSearchResult } from './renderGallery';
const debounce = require('lodash.debounce');

let page = 1;
let previousPage = refs.movieGallerySection.dataset.page;
const observer = new IntersectionObserver(debounce(onRender, 1000), { threshold: 0 });
observer.observe(refs.anchor);
async function onRender(entries) {
  const query = refs.searchInput.value;
  if (entries[0].isIntersecting) {
    if (refs.galleryList.children.length !== 0) {
      spinnerMethod.addSpinner();
      if (previousPage !== refs.movieGallerySection.dataset.page) {
        page = 1;
      }
      page += 1;
      switch (refs.movieGallerySection.dataset.page) {
        case 'trending':
          renderTrending(page);
          previousPage = refs.movieGallerySection.dataset.page;
          break;
        case 'searching':
          renderSearchResult(query, page);
          previousPage = refs.movieGallerySection.dataset.page;
          break;
        default:
          break;
      }
      spinnerMethod.removeSpinner();
    } else {
      spinnerMethod.removeSpinner();
      return;
    }
  }
}