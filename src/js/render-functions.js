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
          <span class="loader"></span>
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

  const galleryElement = document.querySelector('.gallery');
  galleryElement.insertAdjacentHTML('beforeend', markup);

  // Після рендерингу галереї ініціалізуємо завантаження зображень
  const imagesAll = document.querySelectorAll('.gallery-item img');
  images.forEach(img => {
    img.onload = () => {
      const loader = img.previousElementSibling; // Лоадер перед зображенням
      loader.classList.add('hidden'); // Ховаємо лоадер
      img.classList.remove('hidden'); // Показуємо зображення
    };
  });
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

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
