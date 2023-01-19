import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text">{{текст комментария}}</p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentsList.append(fragment);
};

const renderBigPictureDetails = ({ url, likes, description }) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const onBigPictureCloseButtonClick = () => {
  hideBigPicture();
};

function hideBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
}

const showBigPicture = (evt) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  const id = evt.target.dataset.id;
  const posts = window.posts;
  const post = posts.find((it) => it.id === +id);

  renderComments(post.comments);
  renderBigPictureDetails(post);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);
};

pictures.addEventListener('click', showBigPicture);
