const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

const DEFAULT_SCREEN_INDEX = 0;
let screenIndex = DEFAULT_SCREEN_INDEX;

const mainElement = document.querySelector(`main.central`);
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

  if (evt.altKey && evt.keyCode === KeyCode.LEFT_ARROW && screenIndex - 1 >= 0) {
      switchScreen(--screenIndex);
  } else if (evt.altKey && evt.keyCode === KeyCode.RIGHT_ARROW && screenIndex + 1 < contentOfScreenTemplates.length) {
      switchScreen(++screenIndex);
  }
};

/**
 * Init app
 * **/
const init = () => {
  switchScreen(screenIndex);
  document.addEventListener(`keydown`, onKeyDown);
};

init();
