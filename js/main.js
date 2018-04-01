import switchScreen from './switch-screen.js';

let screenIndex = 0;
const mainElement = document.querySelector(`main.central`);

/**
 * Adds listeners to the Greeting screen
 * **/
const addListenersToGreetingScreen = () => {
  const arrowElement = mainElement.querySelector(`.greeting__continue`);
  arrowElement.addEventListener(`click`, onArrowClick);
};

/**
 * Adds listeners to the back button
 * **/
const addListenersToBackButton = () => {
  const backButton = mainElement.querySelector(`.back`);

  const onBackButtonClick = () => {
    switchScreen(1);
    addListenersToGreetingScreen();
  };
  backButton.addEventListener(`click`, onBackButtonClick);
};

/**
 * Handles actions when user clicked on the Asterisk element on the Intro screen
 * **/
const onAsteriskClick = () => {
  switchScreen(1);
  addListenersToGreetingScreen();
};

/**
 * Handles actions when user clicked on the Arrow element on the Greeting screen
 * **/
const onArrowClick = () => {
  switchScreen(2);

  const formElement = mainElement.querySelector(`.rules__form`);
  const inputElement = formElement.querySelector(`.rules__input`);
  const buttonElement = formElement.querySelector(`.rules__button`);

  const onInputChange = (inputEvt) => {
    buttonElement.disabled = !inputEvt.target.validity.valid;
  };

  // on game-1 screen
  const onSubmitButtonClick = () => {
    switchScreen(3);
    addListenersToFirstGameScreen();
    addListenersToBackButton();
  };

  inputElement.addEventListener(`keyup`, onInputChange);
  inputElement.addEventListener(`blur`, onInputChange);
  buttonElement.addEventListener(`click`, onSubmitButtonClick);

  addListenersToBackButton();
};

/**
 * Adds listeners to the First Game  screen
 * **/
const addListenersToFirstGameScreen = () => {
  const formElement = mainElement.querySelector(`.game__content`);
  const inputs = formElement.querySelectorAll(`input`);

  const onInputChange = () => {
    const checkedInputs = Array.from(inputs).filter((input) => input.checked);
    if (checkedInputs.length > 1) {
      switchScreen(4);
      addListenersToSecondGameScreen();
      addListenersToBackButton();
    }
  };
  inputs.forEach((input) => input.addEventListener(`change`, onInputChange));
};

/**
 * Adds listeners to the Second Game  screen
 * **/
const addListenersToSecondGameScreen = () => {
  const formElement = mainElement.querySelector(`.game__content`);
  const inputs = formElement.querySelectorAll(`input`);
  const onInputChange = () => {
    switchScreen(5);
    addListenersToThirdGameScreen();
    addListenersToBackButton();
  };
  inputs.forEach((input) => input.addEventListener(`change`, onInputChange));

  addListenersToBackButton();
};

/**
 * Adds listeners to the Third Game  screen
 * **/
const addListenersToThirdGameScreen = () => {
  const formElement = mainElement.querySelector(`.game__content`);
  const options = formElement.querySelectorAll(`.game__option`);

  const onOptionClick = () => {
    switchScreen(6);
    addListenersToBackButton();
  };
  options.forEach((option) => option.addEventListener(`click`, onOptionClick));
};

/**
 * Init app
 * **/
const init = () => {
  switchScreen(screenIndex);

  const asteriskElement = mainElement.querySelector(`.intro__asterisk`);
  asteriskElement.addEventListener(`click`, onAsteriskClick);
};

init();
