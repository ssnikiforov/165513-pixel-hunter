import {getElementFromTemplate, switchScreen} from './../utils';
import screenGreeting from './greeting';

const screenIntro = getElementFromTemplate(`<section class="main main--result"><div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div></section>`);

const asterisk = screenIntro.querySelector(`.intro__asterisk`);
const onAsteriskClick = () => switchScreen(screenGreeting);
asterisk.addEventListener(`click`, onAsteriskClick);

export default screenIntro;
