import getIntroScreen from './screens/intro.js';
import {switchScreen} from './utils';

/**
 * Init app
 * **/
const init = () => {
  switchScreen(getIntroScreen());
};

init();
