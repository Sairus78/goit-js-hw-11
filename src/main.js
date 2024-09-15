// import { fetchImages } from './pixabay-api';
// import { renderGallery, clearGallery, showNotification, showLoader, hideLoader } from './render-functions';

// const form = document.querySelector('#search-form');
// const input = document.querySelector('input[name="searchQuery"]');
// let currentPage = 1;

// form.addEventListener('submit', onSearch);

// function onSearch(event) {
//   event.preventDefault();

//   const query = input.value.trim();

//   if (!query) {
//     showNotification('Please enter a search query.');
//     return;
//   }

//   clearGallery();
//   fetchAndRenderImages(query);
// }

// async function fetchAndRenderImages(query) {
//   try {
//     showLoader();

//     const data = await fetchImages(query, currentPage);

//     if (data.hits.length === 0) {
//       showNotification('Sorry, there are no images matching your search query. Please try again!');
//       return;
//     }

//     renderGallery(data.hits);
//   } catch (error) {
//     showNotification('Something went wrong. Please try again later.');
//   } finally {
//     hideLoader();
//   }
// }
//код без бібліотеки завантаження//

import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showNotification,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('input[name="searchQuery"]');
let currentPage = 1;

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    showNotification('Please enter a search query.');
    return;
  }

  clearGallery();
  fetchAndRenderImages(query);
}

async function fetchAndRenderImages(query) {
  try {
    showLoader();

    const data = await fetchImages(query, currentPage);

    if (data.hits.length === 0) {
      showNotification(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    showNotification('Something went wrong. Please try again later.');
  } finally {
    hideLoader();
  }
}
