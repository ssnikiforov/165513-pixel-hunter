import introElement from './templates/intro.js';
import greetingElement from './templates/greeting.js';
import rulesElement from './templates/rules.js';
import firstGameElement from './templates/game-1.js';
import secondGameElement from './templates/game-2.js';
import thirdGameElement from './templates/game-3.js';
import statsElement from './templates/stats.js';

const screens = [
  introElement,
  greetingElement,
  rulesElement,
  firstGameElement,
  secondGameElement,
  thirdGameElement,
  statsElement
];

// const KeyCode = {
//   LEFT_ARROW: 37,
//   RIGHT_ARROW: 39
// };
// let screenIndex = 0;


const mainElement = document.querySelector(`main.central`);
// const screenTemplates = document.querySelectorAll(`template`);
// const contentOfScreenTemplates = Array.from(screenTemplates).map((template) => template.content);

/**
 * Change index of screen to the new one and render screen with new index
 *
 * @param {number} newScreenIndex
 * **/
const switchScreen = (newScreenIndex) => {
  const screenElement = screens[newScreenIndex].cloneNode(true);
  mainElement.innerHTML = ``;
  mainElement.appendChild(screenElement);
};

// /**
//  * Keydown event handler
//  *
//  * @param {KeyboardEvent} evt
//  * **/
// const onKeyDown = (evt) => {
//   if (evt.altKey && evt.keyCode === KeyCode.LEFT_ARROW && screenIndex - 1 >= 0) {
//     switchScreen(--screenIndex);
//   } else if (evt.altKey && evt.keyCode === KeyCode.RIGHT_ARROW && screenIndex + 1 < screens.length) {
//     switchScreen(++screenIndex);
//   }
// };
//
// document.addEventListener(`keydown`, onKeyDown);


export {switchScreen, screens};
