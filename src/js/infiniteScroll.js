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
      page += 1;
      spinnerMethod.addSpinner();
      if (query === '') {
        renderTrending(page);
      } else {
        renderSearchResult(query,page)
      }
      setTimeout(()=> spinnerMethod.removeSpinner(),1000)
    } else {
      spinnerMethod.removeSpinner();
      return;
    }
  }
}

