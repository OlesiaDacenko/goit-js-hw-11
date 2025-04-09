// getImagesByQuery(query);

import axios from 'axios';

const API_KEY = '25313829-c54e0cdb371427617e83b262e'; // 🔐 Замініть на свій справжній API-ключ
const BASE_URL = 'https://pixabay.com/api/';

// getImagesByQuery(query). Ця функція повинна приймати один параметр query
// (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості
// data з отриманої відповіді.

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        // lang: 'ru',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 20,
        // order: 'latest',
      },
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
// getImagesByQuery('flower');
