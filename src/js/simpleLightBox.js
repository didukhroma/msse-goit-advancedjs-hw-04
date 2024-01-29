import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/**
 * Settings for simple light box 
 *
 * @type {{ selector: string; srcImage: string; caption: string; }}
 * @param {String} selector - select all elements to collection
 * @description Read more in https://simplelightbox.com/
 * @example const settingsSimpleLightbox = {
  selector: '.photo-card',
  srcImage: 'data-large',
  caption: 'data-text',
};
 */
const settingsSimpleLightbox = {
  selector: '.photo-card',
  srcImage: 'data-large',
  caption: 'data-text',
};

/**
 * New example of instance  SimpleLightbox
 *
 *@description Read more in https://simplelightbox.com/
 @example new SimpleLightbox(settingsSimpleLightbox.selector, {
  sourceAttr: settingsSimpleLightbox.srcImage,
  captionsData: settingsSimpleLightbox.caption,
  captionDelay: 250,
  animationSpeed: 500,
});
 */
const galleryLightBox = new SimpleLightbox(settingsSimpleLightbox.selector, {
  sourceAttr: settingsSimpleLightbox.srcImage,
  captionsData: settingsSimpleLightbox.caption,
  captionDelay: 250,
  animationSpeed: 500,
});

export { galleryLightBox };
