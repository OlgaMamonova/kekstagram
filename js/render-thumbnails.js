const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const randomThumbnailsFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const renderThumbnails = () => {
  const posts = window.posts;
  posts.forEach(({ url, likes, comments, id }) => {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').dataset.id = id;
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent =
      comments.length - 1;
    randomThumbnailsFragment.appendChild(thumbnailElement);
  });
  pictures.appendChild(randomThumbnailsFragment);
};

export { renderThumbnails };
