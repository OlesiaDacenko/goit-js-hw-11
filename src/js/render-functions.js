// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// У файлі render-functions.js створено екземпляр SimpleLightbox та є функції
// для відображення елементів інтерфейсу: createGallery(images),
//  clearGallery(),  showLoader(),  hideLoader()

// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень

export function createGallery(images) {
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
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
         <div class="info-block">
          <p clas="label" >Likes: </p>
          <p clas="value" >${likes}</p> </div>
           <div class="info-block">
          <p clas="label">Views:</p>
          <p clas="value" >${views}</p> </div>
           <div class="info-block">
          <p>Comments:</p>
          <p clas="value" >${comments}</p> </div>
           <div class="info-block">
          <p clas="label">Downloads:</p>
          <p clas="value" >${downloads}</p></div>
        </div>
      </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
  //    метод бібліотеки, який обов'язково потрібно викликати щоразу після додавання нових елементів до галереї.
}

export function clearGallery() {
  gallery.innerHTML = ' ';
}

export function showLoader() {
  document.getElementById('loader').classList.remove('is-hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('is-hidden');
}
