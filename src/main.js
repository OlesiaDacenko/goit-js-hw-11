import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
const searchForm = document.querySelector('.form');
const container = document.querySelector('.gallery');
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
// import css from 'file.css';
searchForm.addEventListener('submit', searchFoo);
function searchFoo(event) {
  event.preventDefault();
  const query = searchForm.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({
      message: 'Поле пошуку не може бути порожнім. Введіть запит!',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
      //   console.log(data);
      //   container.innerHTML = createMarkup(data.hits);
    })
    .catch(error => {
      iziToast.error({
        //   title: 'Помилка',
        message: 'Не вдалося завантажити зображення. Спробуйте пізніше.',
        position: 'topRight',
      });

      console.log(error.message);
    })

    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ largeImageURL, tags }) => `
//         <li class="container">
//             <img src="${largeImageURL}" alt="${tags}" width="380" class="list-icon"/>

//         </li>
//     `
//     )
//     .join('');
// }

// galery.style.display = 'flex';
// galery.style.flexWrap = 'wrap';
// galery.style.gap = '20px';
// galery.style.width = '100%';
