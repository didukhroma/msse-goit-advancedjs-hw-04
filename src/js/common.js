/**
 * Authorization token
 *
 * @type {String} API Token
 */
export const AUTH_TOKEN = '20604497-76eef09585394ebdddc8f0af4';

/**
 * Maximum value of results per page
 *
 * @type {Number}
 * @example const MAX_EL_PER_PAGE = 40;
 */
export const MAX_EL_PER_PAGE = 40;

/**
 * References links object
 *
 * @type {{ form: HTMLElement; gallery: HTMLElement; guard: HTMLElement; goTop: HTMLElement; }}
 * @param {HTMLElement} form - reference link for form element
 * @param {HTMLElement} gallery - reference link for gallery element
 * @param {HTMLElement} guard - reference link for div guard element
 * @param {HTMLElement} goTop - reference link for button goTop element
 * 
 * 
 * @example const ref = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  guard: document.querySelector('.guard'),
  goTop: document.querySelector('.js-go-top'),
};
 */
export const ref = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  guard: document.querySelector('.guard'),
  goTop: document.querySelector('.js-go-top'),
};
