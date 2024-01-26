import throttle from 'lodash.throttle';
import { fetchPhotos, checkResponseStatus } from './api';
import { MAX_RES_PER_PAGE, ref } from './common';
import { prepareQueryForRequest, createMarkup } from './helpers';
import { successToast, warningToast, errorToast } from './iziToast';
// import { galleryLightBox } from './simpleLightBox';

let searchQuery = '';
let page = 1;

const input = ref.form.elements.searchQuery;

ref.form.addEventListener('submit', handleSubmit);
input.addEventListener('input', throttle(handleInput, 300)); //hide button load more when change search query
// ref.loadMore.addEventListener('click', handleClick);

function handleInput() {
  const buttonSearch = ref.form.elements[1];
  if (!input.value) {
    buttonSearch.disabled = true;
    return;
  }
  if (!buttonSearch.disabled) return;
  buttonSearch.disabled = false;
}

function handleSubmit(e) {
  e.preventDefault();
  successToast();

  const query = prepareQueryForRequest(
    e.currentTarget.children.searchQuery.value
  );

  if (query !== searchQuery) {
    ref.loadMore.classList.add('visually-hidden');
    searchQuery = query;
    ref.gallery.innerHTML = '';
  }

  fetchPhotos(query, page)
    .then(checkResponseStatus)
    .then(({ total, totalHits, hits }) => {
      // if (!total) {
      //   ref.loadMore.classList.add('visually-hidden');
      //   errorToast();
      //   throw new Error('');
      // }

      // if (totalHits < MAX_RES_PER_PAGE)
      //   ref.loadMore.classList.add('visually-hidden');

      const markup = createMarkup(hits);
      ref.gallery.insertAdjacentHTML('beforeend', markup);

      // galleryLightBox.refresh();
      ref.loadMore.classList.remove('visually-hidden');
      return totalHits;
    })
    // .then(successToast)
    .catch(error => {
      ref.loadMore.classList.add('visually-hidden');
      errorToast(error.message);
      console.log(error);
    });

  //Destroys and reinitilized the lightbox, needed for eg. Ajax Calls, or after dom manipulations
}

async function handleClick() {
  page += 1;
  let response = '';

  try {
    response = await getPhotos(searchQuery, page);
    if (response.status !== 200) throw new Error(response.statusText);
  } catch (error) {
    errorToast(error);
    console.log(error);
  }

  const { total, totalHits, hits } = response.data;

  if (!total) {
    warningToast();
    return;
  }

  successToast(totalHits); //!----------------Violation
  const markup = createMarkup(hits);
  ref.gallery.insertAdjacentHTML('beforeend', markup);
}
