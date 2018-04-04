import introElement from './screens/intro.js';
import {switchScreen} from './utils';

/**
 * Init app
 * **/
const init = () => {
  switchScreen(introElement);
};

init();
