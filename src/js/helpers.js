/**
 * Function for trim search query and return  string with symbol '+' instead of space
 *
 * @export
 * @param {String} query - input search query
 * @returns {String}
 * @example function prepareQueryForRequest(query) { // ' Red flower '
  return query.trim().toLowerCase().replace(/\s/g, '+'); //'red+flower'
 */
export function prepareQueryForRequest(query) {
  return query.trim().toLowerCase().replace(/\s/g, '+');
}

/**
 * Function for create markup from template
 *
 * @export
 * @param {Array} data
 * @returns {String}
 */
export function createMarkup(data) {
  return data
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        largeImageURL,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card" data-text=${tags} data-large=${largeImageURL}>
    <div class="photo-wrapper" >
    <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy"  />
    </div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>${likes}
        </p>
            <p class="info-item">
        <b>Views</b>${views}
        </p>
        <p class="info-item">
            <b>Comments</b>${comments}
        </p>
        <p class="info-item">
            <b>Downloads</b>${downloads}
        </p>
    </div>
</div>`;
      }
    )
    .join('');
}
