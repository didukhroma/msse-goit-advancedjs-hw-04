//Import
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/**
 * Delay time for iziToast error message
 *
 * @type {Number} - time in milliseconds
 * @example const DELAY_TIME = 3000;
 */
const DELAY_TIME = 30000;

/**
 * Settings for iziToast 
 * 
 * @type {{ title: string; timeout: number; position: string; message: string; }}
 * @example const iziToastSettings = {
  title: 'Error',
  timeout: DELAY_TIME,
  position: 'topCenter',
  message: 'Oops! Something went wrong! Try reloading the page!',
};
*
* @description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 */
const iziToastSettings = {
  timeout: DELAY_TIME,
  position: 'topRight',
};

/**
 * Show iziToast error message
 *
 * @export function
 * @example function errorToast() {
  iziToast.error(iziToastSettings);
}
*@description Read more about iziToast settings at https://izitoast.marcelodolza.com/
 */
export function successToast(totalHits) {
  iziToastSettings.title = 'Hooray!';
  iziToastSettings.message = `We found ${totalHits} images.`;
  iziToast.success(iziToastSettings);
}

export function errorToast() {
  iziToastSettings.title = 'Error';
  iziToastSettings.message =
    'Oops! Something went wrong! Try reloading the page!';
  iziToast.error(iziToastSettings);
}

export function warningToast() {
  iziToastSettings.title = 'Warning';
  iziToastSettings.message =
    'Oops! Something went wrong! Try to change search query';
  iziToast.warning(iziToastSettings);
}
