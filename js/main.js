const ALT_KEYCODE = 18;
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 37;

const introEl = document.querySelector('#main');

const greetingTemplateOriginal = document.querySelector(`#greeting`).content;
const greetingTemplate = greetingTemplateOriginal.cloneNode(true);

const rulesTemplateOriginal = document.querySelector(`#rules`).content;
const rulesTemplate = rulesTemplateOriginal.cloneNode(true);

const gameFirstOriginal = document.querySelector(`#game-1`).content;
const gameFirstTemplate = gameFirstOriginal.cloneNode(true);

const gameSecondOriginal = document.querySelector(`#game-2`).content;
const gameSecondTemplate = gameSecondOriginal.cloneNode(true);

const gameThirdOriginal = document.querySelector(`#game-3`).content;
const gameThirdTemplate = gameThirdOriginal.cloneNode(true);

const statsTemplateOriginal = document.querySelector(`#stats`).content;
const statsTemplate = statsTemplateOriginal.cloneNode(true);

const pressSwitchPageButtonHandler = (evt) => {
  console.log(evt.keyCode);
  // if (evt.keyCode === ESC_KEYCODE) {
  //   action(arg);
  // }
};
document.addEventListener('keydown', pressSwitchPageButtonHandler);
