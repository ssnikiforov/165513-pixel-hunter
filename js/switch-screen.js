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

const mainElement = document.querySelector(`main.central`);

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

export default switchScreen;
