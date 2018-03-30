const Keys = {
  ALT: `Alt`,
  LEFT_ARROW: `ArrowLeft`,
  RIGHT_ARROW: `ArrowRight`
};

const DEFAULT_SCREEN_INDEX = 0;
const mainElement = document.querySelector(`main.central`);

let screenIndex = DEFAULT_SCREEN_INDEX;
let map = {};

const screenTemplates = document.querySelectorAll(`template`);
const contentOfScreenTemplates = Array.from(screenTemplates).map((template) => template.content);

/**
 * Change index of screen to th new one and render screen with new index
 *
 * @param {number} newScreenIndex
 * **/
const switchScreen = (newScreenIndex) => {
  if ((newScreenIndex < 0) || (newScreenIndex >= contentOfScreenTemplates.length)) {
    return;
  }

  screenIndex = newScreenIndex;
  const screenElement = contentOfScreenTemplates[screenIndex].cloneNode(true);
  while (mainElement.hasChildNodes()) {
    mainElement.removeChild(mainElement.lastChild);
  }
  mainElement.appendChild(screenElement);
};

/**
 * Keydown event handler
 *
 * @param {KeyboardEvent} evt
 * **/
const onSwitchScreenKeydown = (evt) => {
  evt = evt || event; // to deal with IE
  if (Object.values(Keys).indexOf(evt.key) === -1) {
    return;
  }

  map[evt.key] = evt.type === `keydown`;
  if (map[Keys.ALT] && map[Keys.LEFT_ARROW]) {
    switchScreen(screenIndex - 1);
  } else if (map[Keys.ALT] && map[Keys.RIGHT_ARROW]) {
    switchScreen(screenIndex + 1);
  }

  document.addEventListener(`keyup`, onSwitchScreenKeyup);
};

/**
 * Keyup event handler
 *
 * @param {KeyboardEvent} evt
 * **/
const onSwitchScreenKeyup = (evt) => {
  evt = evt || event; // to deal with IE
  if (Object.values(Keys).indexOf(evt.key) === -1) {
    return;
  }

  map[evt.key] = evt.type === `keydown`;
};

/**
 * Init app
 * **/
const init = () => {
  switchScreen(screenIndex);
  document.addEventListener(`keydown`, onSwitchScreenKeydown);
};

init();
