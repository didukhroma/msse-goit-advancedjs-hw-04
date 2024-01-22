import { getPhotos } from './api';
import { ref } from './common';
import { prepareQueryForRequest, createMarkup } from './helpers';
import { successToast, warningToast, errorToast } from './iziToast';

let searchQuery = '';

ref.form.addEventListener('submit', handleSubmit);

ref.loadMore.classList.add('visually-hidden');

async function handleSubmit(e) {
  e.preventDefault();
  ref.loadMore.classList.remove('visually-hidden');

  const query = prepareQueryForRequest(
    e.currentTarget.children.searchQuery.value
  );

  if (query !== searchQuery) {
    searchQuery = query;
    ref.gallery.innerHTML = '';
  }

  let response = '';
  try {
    response = await getPhotos(query);
    if (response.status !== 200) throw new Error(response);

    console.log(response);
  } catch (error) {
    errorToast();
    console.log(error);
  }

  const { total, totalHits, hits } = response.data;

  if (!total) {
    warningToast();
    return;
  }
  const markup = createMarkup(hits);
  ref.gallery.insertAdjacentHTML('beforeend', markup);
}
