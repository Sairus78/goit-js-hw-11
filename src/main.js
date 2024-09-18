import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

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
//   showLoader(); // Показуємо лоадер перед завантаженням даних
//   fetchAndRenderImages(query);
// }

// async function fetchAndRenderImages(query) {
//   try {
//     const data = await fetchImages(query, currentPage);

//     if (data.hits.length === 0) {
//       showNotification(
//         'Sorry, there are no images matching your search query. Please try again!'
//       );
//       return;
//     }

//     renderGallery(data.hits);
//     lightbox.refresh(); // Оновлюємо SimpleLightbox після рендерингу нових зображень
//   } catch (error) {
//     showNotification('Something went wrong. Please try again later.');
//   } finally {
//     hideLoader(); // Ховаємо лоадер після завантаження
//   }
// }

// function showNotification(message) {
//   iziToast.error({
//     title: 'Error',
//     message: message,
//     position: 'topRight',
//   });
// }

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

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
  // Показати індикатор завантаження
  document.getElementById('loading-indicator').classList.remove('hidden');

  try {
    const data = await fetchImages(query, currentPage);

    if (data.hits.length === 0) {
      showNotification(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    showNotification('Something went wrong. Please try again later.');
  } finally {
    // Приховати індикатор завантаження після завершення запиту
    document.getElementById('loading-indicator').classList.add('hidden');
  }
}

function showNotification(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}
