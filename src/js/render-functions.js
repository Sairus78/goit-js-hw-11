import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryElement = document.querySelector('.gallery');

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <div class="photo-card">
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${downloads}</span>
          </div>
        </div>
      </div>`;
      }
    )
    .join('');
  //   return `
  // <div class="photo-card">
  //   <a href="${largeImageURL}" class="gallery-item">
  //     <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  //   </a>
  //   <div class="info">
  //     <p><b>Likes:</b> ${likes}</p>
  //     <p><b>Views:</b> ${views}</p>
  //     <p><b>Comments:</b> ${comments}</p>
  //     <p><b>Downloads:</b> ${downloads}</p>
  //   </div>
  // </div>`;
  //   }
  // )
  // .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function clearGallery() {
  galleryElement.innerHTML = '';
}

export function showNotification(message) {
  iziToast.error({ title: 'Error', message: message });
}

// export function showLoader() {
//   document.querySelector('.loader').classList.remove('hidden');
// }

// export function hideLoader() {
//   document.querySelector('.loader').classList.add('hidden');
// }

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
  loader.classList.add('visible');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('visible');
  loader.classList.add('hidden');
}
