import axios from 'axios';
import { AUTH_TOKEN, MAX_EL_PER_PAGE } from './common';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: AUTH_TOKEN,
  image_type: 'photo',
  per_page: MAX_EL_PER_PAGE,
  orientation: 'horizontal',
  safesearch: true,
};

/**
 * Api service
 *
 * @class ServiceApi
 * @typedef {ServiceApi}
 */
class ServiceApi {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async getPhoto() {
    const response = await axios({
      params: {
        q: this.query,
        page: this.page,
      },
    });
    if (response.status !== 200) throw new Error(response.statusText);
    return response.data;
  }

  nextPage() {
    this.page += 1;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }
  get searchQuery() {
    return this.query;
  }
  startPage() {
    this.page = 1;
  }
}

/**
 * New example of instance SErviceApi
 *
 * @type {ServiceApi}
 */
export const service = new ServiceApi();
