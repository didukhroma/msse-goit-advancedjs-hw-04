import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const settingsSimpleLightbox = {
//   selector: '.photo',
//   srcImage: 'data-large',
//   caption: 'alt',
// };

/**
 * Description 
 *
 * @type {{ selector: string; srcImage: string; caption: string; }}
 * @param {String} selector - select all elements to collection
 * @description
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

const galleryLightBox = new SimpleLightbox(settingsSimpleLightbox.selector, {
  sourceAttr: settingsSimpleLightbox.srcImage,
  captionsData: settingsSimpleLightbox.caption,
  captionDelay: 250,
  animationSpeed: 500,
});

export { galleryLightBox };
