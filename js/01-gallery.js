import {
	galleryItems
} from './gallery-items.js';
const gallery = document.querySelector('.gallery');

function createGalleryLi(elements) {
	return elements.map(({
		preview,
		original,
		description
	}) => {
		return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
	}).join('')
}
const galleryList = createGalleryLi(galleryItems)
gallery.insertAdjacentHTML("beforeend", galleryList);
gallery.addEventListener('click', onOpenFullImage);


function onOpenFullImage(e) {
  let instance = null;
  
	e.preventDefault();
	const targetEl = e.target;
	const targetValue = targetEl.dataset.source;
	if(!targetValue) {
		return
	}
	instance = basicLightbox.create(`<img src="${targetValue}" width="800" height="600">`, {
		onShow: () => window.addEventListener('keydown', closedByEscape),
		onClose: () => window.removeEventListener('keydown', closedByEscape),
	});
	instance.show();
}

function closedByEscape(evt) {
	if(evt.code === 'Escape') {
		instance.close();
	}
}
console.log(galleryItems);