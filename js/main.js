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
  const screenElement = contentOfScreenTemplates[newScreenIndex].cloneNode(true);
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
    screenIndex = screenIndex - 1 >= 0 ? screenIndex - 1 : screenIndex;
    switchScreen(screenIndex);
  } else if (map[Key.ALT] && map[Key.RIGHT_ARROW]) {
    screenIndex = screenIndex + 1 < contentOfScreenTemplates.length ? screenIndex + 1 : screenIndex;
    switchScreen(screenIndex);
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
