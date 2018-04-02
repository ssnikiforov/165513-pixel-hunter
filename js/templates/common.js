import switchScreen from './../switch-screen.js';

/**
 * Adds listeners to the back button
 *
 * @param {Element} element
 * **/
const addListenersToBackButton = (element) => {

  const onBackButtonClick = () => {
    switchScreen(1);
  };
  element.addEventListener(`click`, onBackButtonClick);
};

/**
 * Adds listeners to the Greeting screen
 *
 * @param {Element} element
 * **/
const addListenersToGreetingScreen = (element) => {
  /**
   * Handles click event on the right arrow element
   * **/
  const onArrowClick = () => {
    switchScreen(2);
  };
  element.addEventListener(`click`, onArrowClick);
};

export {
  addListenersToBackButton,
  addListenersToGreetingScreen,
};
