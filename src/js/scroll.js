import { ref } from './common';

export function scroll() {
  const { height: cardHeight } =
    ref.gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
