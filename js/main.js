import { getPosts } from './data.js';
import { renderThumbnails } from './render-thumbnails.js';
import './big-picture-modal.js';

window.posts = getPosts();
renderThumbnails();
