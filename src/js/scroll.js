import { ref } from './common';

/**
 * Smooth scroll after adding new results
 *
 * @export
 * @example function scroll() {
  const { height: cardHeight } =
    ref.gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
 */
export function scroll() {
  const { height: cardHeight } =
    ref.gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

/**
 * Scroll page to top 
 *
 * @export function 
 * @example function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }); 
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
