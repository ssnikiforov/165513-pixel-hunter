import {introElement, activateIntroScreen} from './templates/intro.js';
import {greetingElement, activateGreetingScreen} from './templates/greeting.js';
import {rulesElement, activateRulesScreen} from './templates/rules.js';
import {firstGameElement, activateFirstGameScreen} from './templates/game-1.js';
import {secondGameElement, activateSecondGameScreen} from './templates/game-2.js';
import {thirdGameElement, activateThirdGameScreen} from './templates/game-3.js';
import {statsElement, activateStatsScreen} from './templates/stats.js';

const screens = [
  introElement,
  greetingElement,
  rulesElement,
  firstGameElement,
  secondGameElement,
  thirdGameElement,
  statsElement
];

const activations = [
  activateIntroScreen,
  activateGreetingScreen,
  activateRulesScreen,
  activateFirstGameScreen,
  activateSecondGameScreen,
  activateThirdGameScreen,
  activateStatsScreen
];

/**
 * Change index of screen to the new one and render screen with new index
 *
 * @param {number} newScreenIndex
 * **/
const switchScreen = (newScreenIndex) => {
  const screenElement = screens[newScreenIndex].cloneNode(true);

  const mainElement = document.querySelector(`main.central`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(screenElement);
  const activationFunction = activations[newScreenIndex];
  if (activationFunction) {
    activationFunction();
  }
};

export default switchScreen;
