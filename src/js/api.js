import axios from 'axios';
import { AUTH_TOKEN } from './common';

/**
 *
 */
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: AUTH_TOKEN,
  image_type: 'photo',
  per_page: 10,
};

export function getPhotos(query = '', page = 1) {
  return axios({
    params: {
      q: query,
      page: page,
    },
  });
}
