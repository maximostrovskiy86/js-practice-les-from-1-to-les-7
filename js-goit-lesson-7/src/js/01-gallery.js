import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector('.js-modal'),
  backdrop: document.querySelector('.backdrop'),
  closeModalBtn: document.querySelector('.close-modal-btn'),
}

galleryItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.alt = item.description;

  li.append(img);

  refs.gallery.prepend(li);
});


const toggleModalWindow = () => {
  refs.backdrop.classList.toggle('is-hidden');
}

const onOpenPictureInModalWindow = (evt) => {
  const target = evt.target;

  const currentClickPicture = galleryItems.find(elem => elem.description === target.alt);

  console.log('currentClickPicture', currentClickPicture);

  let img = document.createElement('img');
  img.classList.add('modal-picture');
  img.src = currentClickPicture.original;
  img.alt = currentClickPicture.description;

  refs.modal.prepend(img);

  toggleModalWindow();
}

const onCloseModalWindow = () => {
  refs.backdrop.classList.add('is-hidden');
  refs.modal.innerHTML = '';

}
const onCloseModalEscKeyDown = (evt) => {
    if (evt.code === "Escape") {
      onCloseModalWindow();
    }
}

refs.gallery.addEventListener('click', onOpenPictureInModalWindow);
refs.closeModalBtn.addEventListener("click", onCloseModalWindow);
window.addEventListener('keydown', onCloseModalEscKeyDown);
