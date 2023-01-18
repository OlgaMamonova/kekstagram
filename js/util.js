// функция возвращает случайное целое число в заданном интервале включительно
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

// проверка нажатия клавиши esc

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, getRandomArrayElement, isEscapeKey};
