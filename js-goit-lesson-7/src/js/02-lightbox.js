import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector(".gallery"),
    modal: document.querySelector('.js-modal'),
    backdrop: document.querySelector('.backdrop'),
    closeModalBtn: document.querySelector('.close-modal-btn'),
}

const createItemGalleryMarkup = (galleryItems) => {
    return galleryItems.map(elem => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${elem.original}">
                <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
            </a>
        </li>`
    }).join('');
}

const renderGallery =  createItemGalleryMarkup(galleryItems);
console.log('renderGallery', renderGallery)

refs.gallery.insertAdjacentHTML('beforeend', renderGallery)



console.log(galleryItems);
