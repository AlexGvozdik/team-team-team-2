import refs from './refs';
import { spinnerMethod } from './spinner';
import { renderTrending,renderSearchResult } from './renderGallery';
import debounce from 'lodash.debounce'

let page = 1;
let previousPage = refs.movieGallerySection.dataset.page;
const observer = new IntersectionObserver(debounce(onRender, 500), { threshold: 0 });
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
      setTimeout(() => {
        spinnerMethod.removeSpinner();
          
      }, 800);
    } else {
      setTimeout(() => {
        spinnerMethod.removeSpinner();
          
      }, 800);
      return;
    }
  }
}