//Import
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// iziToast.addEventListener('touchstart', function handle() {}, {
//   passive: true,
// });
/**
 * Delay time for iziToast error message
 *
 * @type {Number} - time in milliseconds
 * @example const DELAY_TIME = 3000;
 */
const DELAY_TIME = 3000;

const ERROR_DEFAULT_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again';
/**
 * Settings for iziToast 
 * 
 * @type {{  timeout: number; position: string; }}
 * @example const iziToastSettings = {
  title: 'Error',
  timeout: DELAY_TIME,
  position: 'topCenter',
  message: 'Oops! Something went wrong! Try reloading the page!',
};
*
* @description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 */
// const iziToastSettings = {
//   timeout: DELAY_TIME,
//   position: 'topRight',
// };

/**
 * Show iziToast error message
 *@param {Number} totalHits  - total results
 * @export function
 * @example function errorToast() {
  iziToast.error(iziToastSettings);
}
*@description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 */

const iziToastSettings = {
  title: 'Hooray!',
  message: `We found 500 images.`,
  timeout: DELAY_TIME,
  position: 'topRight',
};
export function successToast(totalHits) {
  iziToastSettings.title = 'Hooray!';
  iziToastSettings.message = `We found ${totalHits} images.`;
  iziToast.success(iziToastSettings);
}

export function errorToast(message) {
  iziToastSettings.title = 'Error';
  iziToastSettings.message = message || ERROR_DEFAULT_MESSAGE;
  return iziToast.error(iziToastSettings);
}

export function warningToast() {
  iziToastSettings.title = 'Warning';
  iziToastSettings.message =
    "We're sorry, but you've reached the end of search results.";
  return iziToast.warning(iziToastSettings);
}
