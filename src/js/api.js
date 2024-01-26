import axios from 'axios';
import { AUTH_TOKEN, MAX_RES_PER_PAGE } from './common';

/**
 *
 */
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: AUTH_TOKEN,
  image_type: 'photo',
  per_page: MAX_RES_PER_PAGE,
};

export function fetchPhotos(query = '', page = 1) {
  return axios({
    params: {
      q: query,
      page: page,
    },
  });
}

export function checkResponseStatus(response) {
  if (response.status !== 200) throw new Error(response.statusText);
  return response.data;
}
