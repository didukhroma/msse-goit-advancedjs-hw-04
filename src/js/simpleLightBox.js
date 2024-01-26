import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const settingsSimpleLightbox = {
//   selector: '.photo',
//   srcImage: 'data-large',
//   caption: 'alt',
// };

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

// galleryLightBox.on('show.simplelightbox', e => console.log(e));
galleryLightBox.on('show.simplelightbox', function (e) {
  console.log(e);
});
// console.log(galleryLightBox.on());
export { galleryLightBox };
