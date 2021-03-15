import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19750325-769cba3e08dc3fabd5e207521';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = (query, page) =>
  axios.get(`?q=${query}&page=${page}`).then(({ data }) => data);
