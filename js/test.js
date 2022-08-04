import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryListMarkup = gallery =>
  gallery
    .map(
      ({ description, original, preview }) => `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`
    )
    .join('');

const galleryItemsList = createGalleryListMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsList);

const imageBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});