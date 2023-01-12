import {getRandomArrayElement} from './util.js';
import {getRandomIntInclusive} from './util.js';

const POSTS_COUNT = 25;
const AVATARS_COUNT = 6;
const MAX_COMMENTS_COUNT = 20;

const LIKES_COUNT = {
  MIN: 15,
  MAX:200,
};
const DESCRIPTION = [
  'Это я в Ленинграде на катере катался, щас я дома уже.',
  'Велопрогулка по парку',
  '5 лет позади, наш выпускной. #MIIT2014',
  'День рождения любимой бабушки',
  'Учусь играть на гитаре, привет соседи',
  '#travelling#sea#family',
  'Первое тату, начало положено #tatoo',
  'Семейные портрет',
  'Научу писать посты, информация в шапке профиля',
  '#пицца#вкусняшки порадуй свои вкусовые сосочки',
  'Первый полет на вертолете',
  'Счастливы вместе',
  'Это я на море отдыхала, щас я дома уже. #Turkey2022',
  'Малышня, любимые детки',
  'Пусть это останется здесь',
  'Это я на ногти ходила, щас я дома уже.',
  'Котиков вам в ленту',
  'Это я в театр ходила, щас я дома уже.',
  'Новый год в кругу семьи',
  '#love#honeymoon',
  'Первые соревнования брата! ЧЕМПИОН!',
  'Это я в клубе была, щас я дома уже',
  'Жили-были',
  'Это я в парке гуляла, щас я дома уже.',
  'Я у мамы молодец!',
];

const commentSentences = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Артем', 'Ева', 'Линда', 'Вика', 'Тим', 'Александр'];

const createMessage = () => Array.from({ length: getRandomIntInclusive(1, 2)}, () => getRandomArrayElement(commentSentences)).join(' ');

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomIntInclusive(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPost = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomIntInclusive(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: Array.from({ length: getRandomIntInclusive(1, MAX_COMMENTS_COUNT)}, (_, commentIndex) => createComment(commentIndex + 1)),
});

const getPosts = () => Array.from({ length: POSTS_COUNT}, (_, postIndex) => createPost(postIndex + 1));

export {getPosts};
