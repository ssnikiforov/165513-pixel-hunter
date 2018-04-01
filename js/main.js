const Key = {
  ALT: `Alt`,
  LEFT_ARROW: `ArrowLeft`,
  RIGHT_ARROW: `ArrowRight`
};

const DEFAULT_SCREEN_INDEX = 0;
const mainElement = document.querySelector(`main.central`);

let screenIndex = DEFAULT_SCREEN_INDEX;
const map = {};

const screenTemplates = document.querySelectorAll(`template`);
const contentOfScreenTemplates = Array.from(screenTemplates).map((template) => template.content);

/**
 * Change index of screen to th new one and render screen with new index
 *
 * @param {number} newScreenIndex
 * **/
const switchScreen = (newScreenIndex) => {
  if (newScreenIndex < 0 || newScreenIndex >= contentOfScreenTemplates.length) {
    return;
  }

  screenIndex = newScreenIndex;
  const screenElement = contentOfScreenTemplates[screenIndex].cloneNode(true);
  mainElement.innerHTML = '';
  mainElement.appendChild(screenElement);
};

/**
 * Keydown event handler
 *
 * @param {KeyboardEvent} evt
 * **/
const onKeyDown = (evt) => {
  evt = evt || event; // to deal with IE
  if (Object.values(Key).indexOf(evt.key) === -1) {
    return;
  }

  map[evt.key] = evt.type === `keydown`;
  if (map[Key.ALT] && map[Key.LEFT_ARROW]) {
    switchScreen(screenIndex - 1);
  } else if (map[Key.ALT] && map[Key.RIGHT_ARROW]) {
    switchScreen(screenIndex + 1);
  }

  document.addEventListener(`keyup`, onKeyUp);
};

/**
 * Keyup event handler
 *
 * @param {KeyboardEvent} evt
 * **/
const onKeyUp = (evt) => {
  evt = evt || event; // to deal with IE
  if (Object.values(Key).indexOf(evt.key) === -1) {
    return;
  }

  map[evt.key] = evt.type === `keydown`;
};

/**
 * Init app
 * **/
const init = () => {
  switchScreen(screenIndex);
  document.addEventListener(`keydown`, onKeyDown);
};

init();
