import throttle from 'lodash.throttle';
import { scroll, scrollToTop } from './scroll';
import { service } from './api';
import { MAX_EL_PER_PAGE, ref } from './common';
import { prepareQueryForRequest, createMarkup } from './helpers';
import { successToast, warningToast, errorToast } from './iziToast';
import { galleryLightBox } from './simpleLightBox';

const input = ref.form.elements.searchQuery;

ref.form.addEventListener('submit', handleSubmit);
input.addEventListener('input', throttle(handleInput, 300)); //hide button load more when change search query
ref.goTop.addEventListener('click', handleClick); //---GO TOP
window.addEventListener('scroll', trackScroll);
window.addEventListener('load', trackScroll);

//disabled enable search btn
function handleInput() {
  const buttonSearch = ref.form.elements[1];
  if (!input.value) {
    buttonSearch.disabled = true;
    return;
  }
  if (!buttonSearch.disabled) return;
  buttonSearch.disabled = false;
}

//submit
async function handleSubmit(e) {
  e.preventDefault();

  const query = prepareQueryForRequest(
    e.currentTarget.children.searchQuery.value
  );

  if (query !== service.searchQuery) {
    observer.unobserve(ref.guard);
    service.startPage();
    service.searchQuery = query;
    ref.gallery.innerHTML = '';
  }

  try {
    const response = await service.getPhoto();
    const { totalHits, hits } = response;

    if (!totalHits) {
      throw new Error('');
    }

    if (totalHits > MAX_EL_PER_PAGE) {
      observer.observe(ref.guard);
    }

    const markup = createMarkup(hits);
    ref.gallery.insertAdjacentHTML('beforeend', markup);

    successToast(totalHits);
    galleryLightBox.refresh();
  } catch (error) {
    console.log(error);
    errorToast(error.message);
  }
}
//Infinite scroll
const options = {
  rootMargin: '400px',
};

const callback = (entries, observer) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      service.nextPage();
      try {
        const response = await service.getPhoto();
        const { totalHits, hits } = response;

        if (totalHits < MAX_EL_PER_PAGE * service.page) {
          observer.unobserve(ref.guard);
          warningToast();
        }

        const markup = createMarkup(hits);
        ref.gallery.insertAdjacentHTML('beforeend', markup);

        galleryLightBox.refresh();
        scroll();
      } catch (error) {
        console.log(error);
        errorToast(error.message);
      }
    }
  });
};
const observer = new IntersectionObserver(callback, options);
//------------------------------------------------------
//Scroll to top
function handleClick() {
  scrollToTop();
}
function trackScroll() {
  window.removeEventListener('load', trackScroll);

  const windowHeight = window.scrollY;

  if (windowHeight > 800) {
    ref.goTop.classList.remove('visually-hidden');
  } else {
    ref.goTop.classList.add('visually-hidden');
  }
}
