import switchScreen from './switch-screen.js';

let screenIndex = 0;
const mainElement = document.querySelector(`main.central`);

const addListenersToGreetingScreen = () => {
  const arrowElement = mainElement.querySelector(`.greeting__continue`);
  arrowElement.addEventListener('click', onArrowClick);
};

const addListenersToBackButton = () => {
  const backButton = mainElement.querySelector('.back');

  const onBackButtonClick = () => {
    switchScreen(1);
    addListenersToGreetingScreen();
  };
  backButton.addEventListener('click', onBackButtonClick);
};

// on greeting screen
const onAsteriskClick = () => {
  switchScreen(1);
  addListenersToGreetingScreen();
};

// on rules screen
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

  inputElement.addEventListener('keyup', onInputChange);
  inputElement.addEventListener('blur', onInputChange);
  buttonElement.addEventListener('click', onSubmitButtonClick);

  addListenersToBackButton();
};

const addListenersToFirstGameScreen = () => {
  const formElement = mainElement.querySelector(`.game__content`);
  const inputs = formElement.querySelectorAll(`input`);
  const photoInputs = formElement.querySelectorAll(`input[value="photo"]`);
  const paintInputs = formElement.querySelectorAll(`input[value="paint"]`);

  const onInputChange = () => {
    const checkedPhotoInputs = Array.from(photoInputs).filter((photoInput) => photoInput.checked);
    const checkedPaintInputs = Array.from(paintInputs).filter((paintInput) => paintInput.checked);
    if (checkedPhotoInputs.length > 0 && checkedPaintInputs.length > 0) {
      switchScreen(4);
      addListenersToSecondGameScreen();
      addListenersToBackButton();
    }
  };
  inputs.forEach((input) => input.addEventListener('change', onInputChange));
};

const addListenersToSecondGameScreen = () => {
  const formElement = mainElement.querySelector(`.game__content`);
  const inputs = formElement.querySelectorAll(`input`);
  const onInputChange = () => {
    switchScreen(5);
    addListenersToThirdGameScreen();
    addListenersToBackButton();
  };
  inputs.forEach((input) => input.addEventListener('change', onInputChange));

  addListenersToBackButton();
};

const addListenersToThirdGameScreen = () => {
  const formElement = mainElement.querySelector(`.game__content`);
  const options = formElement.querySelectorAll('.game__option');

  const onOptionClick = () => {
    switchScreen(6);
    addListenersToBackButton();
  };
  options.forEach((option) => option.addEventListener('click', onOptionClick));
};

/**
 * Init app
 * **/
const init = () => {
  switchScreen(screenIndex);

  const asteriskElement = mainElement.querySelector(`.intro__asterisk`);
  asteriskElement.addEventListener('click', onAsteriskClick);
};

init();
