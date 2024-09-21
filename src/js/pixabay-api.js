// const API_KEY = '46003151-fdbe84ecfff9a38ce8f04bf2a';
// const BASE_URL = 'https://pixabay.com/api/';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchPhotos(query) {
  const searchParams = new URLSearchParams({
    key: '46003151-fdbe84ecfff9a38ce8f04bf2a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${searchParams.toString()}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length == 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return [];
      }
      return data.hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching the images. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    });
}
