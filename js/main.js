const Keycodes = {
  ALT: 18,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

const DEFAULT_SCREEN_INDEX = 0;
const mainElement = document.querySelector(`main.central`);

let screenIndex = DEFAULT_SCREEN_INDEX;
let map = {};

const screenTemplates = [
  document.querySelector(`#greeting`).content,
  document.querySelector(`#rules`).content,
  document.querySelector(`#game-1`).content,
  document.querySelector(`#game-2`).content,
  document.querySelector(`#game-3`).content,
  document.querySelector(`#stats`).content
];

const changeScreenIndex = (newIndex) => {
  if (Math.abs(newIndex) > 1) {
    return;
  }

  if ((screenIndex + newIndex >= 0) && (screenIndex + newIndex < screenTemplates.length)) {
    screenIndex += newIndex;
  }
};

const switchScreen = (index) => {
  if (index < 0 || index >= screenTemplates.length) {
    return;
  }

  const screenElement = screenTemplates[index].cloneNode(true);
  while (mainElement.hasChildNodes()) {
    mainElement.removeChild(mainElement.lastChild);
  }
  mainElement.appendChild(screenElement);
  screenIndex = index;
};

const goPrevScreen = () => {
  changeScreenIndex(-1);
  switchScreen(screenIndex);
};

const goNextScreen = () => {
  changeScreenIndex(1);
  switchScreen(screenIndex);
};

const onSwitchScreenKeydown = (downEvt) => {
  downEvt = downEvt || event; // to deal with IE
  map[downEvt.keyCode] = downEvt.type === `keydown`;

  if (map[Keycodes.ALT] && map[Keycodes.LEFT_ARROW]) {
    goPrevScreen();
  } else if (map[Keycodes.ALT] && map[Keycodes.RIGHT_ARROW]) {
    goNextScreen();
  }

  const onSwitchScreenKeyup = (upEvt) => {
    document.removeEventListener(`keyup`, onSwitchScreenKeyup);

    upEvt = upEvt || event; // to deal with IE
    map[upEvt.keyCode] = upEvt.type === `keydown`;
  };
  document.addEventListener(`keyup`, onSwitchScreenKeyup);
};

const init = () => {
  switchScreen(screenIndex);
  document.addEventListener(`keydown`, onSwitchScreenKeydown);
};

init();
