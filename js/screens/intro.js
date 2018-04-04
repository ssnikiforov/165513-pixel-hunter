import {addListenersWhenPageIsReady} from './../utils.js';
import {getElementFromTemplate, switchScreen} from './../utils.js';

const html = `<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`;

const introElement = getElementFromTemplate(html);
const asteriskElementSelector = `.intro__asterisk`;

/**
 * Adds listeners to the Intro Screen
 *
 * @param {Element} element
 * **/
const addListenersToIntroScreen = (element) => {
  /**
   * Handles click on asterisk element
   * **/
  const onAsteriskClick = () => {
    switchScreen(1);
  };
  element.addEventListener(`click`, onAsteriskClick);
};

/**
 * Activates screen
 * **/
const activateIntroScreen = () => {
  addListenersWhenPageIsReady(addListenersToIntroScreen, asteriskElementSelector);
};

export default introElement;
