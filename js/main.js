const Keycodes = {
  ALT: 18,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

const DEFAULT_WINDOW_INDEX = 0;
const mainElement = document.querySelector(`main.central`);

let windowIndex = DEFAULT_WINDOW_INDEX;
let map = {};

const windowTemplates = [
  document.querySelector(`#greeting`).content,
  document.querySelector(`#rules`).content,
  document.querySelector(`#game-1`).content,
  document.querySelector(`#game-2`).content,
  document.querySelector(`#game-3`).content,
  document.querySelector(`#stats`).content
];

const changeWindowIndex = (newIndex) => {
  if (Math.abs(newIndex) > 1) {
    return;
  }

  if ((windowIndex + newIndex >= 0) && (windowIndex + newIndex < windowTemplates.length)) {
    windowIndex += newIndex;
  }
};

const switchWindow = (index) => {
  if (index < 0 || index >= windowTemplates.length) {
    return;
  }

  const windowElement = windowTemplates[index].cloneNode(true);
  while (mainElement.hasChildNodes()) {
    mainElement.removeChild(mainElement.lastChild);
  }
  mainElement.appendChild(windowElement);
  windowIndex = index;
};

const goPrevWindow = () => {
  changeWindowIndex(-1);
  switchWindow(windowIndex);
};

const goNextWindow = () => {
  changeWindowIndex(1);
  switchWindow(windowIndex);
};

const onSwitchWindowKeydown = (downEvt) => {
  downEvt = downEvt || event; // to deal with IE
  map[downEvt.keyCode] = downEvt.type == `keydown`;

  if (map[Keycodes.ALT] && map[Keycodes.LEFT_ARROW]) {
    goPrevWindow();
  } else if (map[Keycodes.ALT] && map[Keycodes.RIGHT_ARROW]) {
    goNextWindow();
  }

  const onSwitchWindowKeyup = (upEvt) => {
    document.removeEventListener(`keyup`, onSwitchWindowKeyup);

    upEvt = upEvt || event; // to deal with IE
    map[upEvt.keyCode] = upEvt.type == `keydown`;
  };
  document.addEventListener(`keyup`, onSwitchWindowKeyup);
};

const init = () => {
  switchWindow(windowIndex);
  document.addEventListener(`keydown`, onSwitchWindowKeydown);
};

init();
