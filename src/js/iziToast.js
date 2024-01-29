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

/**
 * Error default message
 *
 * @type {String} - message for toast when error
 * @example const ERROR_DEFAULT_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again';
 */
const ERROR_DEFAULT_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again';

/**
 * Warning default message
 *
 * @type {String} - message for toast when warning
 * @example const WARNING_DEFAULT_MESSAGE =
  "We're sorry, but you've reached the end of search results.";
 */
const WARNING_DEFAULT_MESSAGE =
  "We're sorry, but you've reached the end of search results.";
/**
 * Settings for iziToast 
 * 
 * @type {{  timeout: number; position: string; }}
 * @example const iziToastSettings = {
  timeout: DELAY_TIME,
  position: 'topCenter',
};
*
* @description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 */
const iziToastSettings = {
  timeout: DELAY_TIME,
  position: 'topRight',
};

/**
 * Success Toast 
 *
 * @export
 * @param {Number} totalHits - number of total results
 *  @description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 * @example function successToast(totalHits) {
  iziToastSettings.title = 'Hooray!';
  iziToastSettings.message = `We found ${totalHits} images.`;
  iziToast.success(iziToastSettings);
}
 */
export function successToast(totalHits) {
  iziToastSettings.title = 'Hooray!';
  iziToastSettings.message = `We found ${totalHits} images.`;
  iziToast.success(iziToastSettings);
}

/**
 * Error Toast 
 *
 * @export
 * @param {String} message - error message
 * 
 *  @description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 * @example function errorToast(message) {
  iziToastSettings.title = 'Error';
  iziToastSettings.message = message || ERROR_DEFAULT_MESSAGE;
  iziToast.error(iziToastSettings);
}
 */
export function errorToast(message) {
  iziToastSettings.title = 'Error';
  iziToastSettings.message = message || ERROR_DEFAULT_MESSAGE;
  iziToast.error(iziToastSettings);
}

/**
 * Warning Toast 
 *
 * @export
 * 
 *  @description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 * @example function warningToast() {
  iziToastSettings.title = 'Warning';
  iziToastSettings.message = WARNING_DEFAULT_MESSAGE;
  iziToast.warning(iziToastSettings);
}
}
 */
export function warningToast() {
  iziToastSettings.title = 'Warning';
  iziToastSettings.message = WARNING_DEFAULT_MESSAGE;
  iziToast.warning(iziToastSettings);
}
