import {getElementFromTemplate, switchScreen} from './../utils.js';
import getIntroScreen from './greeting.js';

export default () => {
  const introElement = getElementFromTemplate(`<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`);

  const asteriskElement = introElement.querySelector(`.intro__asterisk`);
  /**
   * Handles the click event on the asterisk element
   * **/
  const onAsteriskClick = () => {
    switchScreen(getIntroScreen());
  };
  asteriskElement.addEventListener(`click`, onAsteriskClick);

  return introElement;
};
