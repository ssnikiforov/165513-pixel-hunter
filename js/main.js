import {switchScreen, screens} from './switch-screen.js';

let screenIndex = 0;
const mainElement = document.querySelector(`main.central`);
let backButton = mainElement.querySelector('.back');

const onBackButtonClick = () => {
  switchScreen(1);
};

// on greeting screen
const onAsteriskClick = (evt) => {
  switchScreen(1);

  const arrowElement = mainElement.querySelector(`.greeting__continue`);
  arrowElement.addEventListener('click', onArrowClick);
};

// on rules screen
const onArrowClick = (arrowEvt) => {
  switchScreen(2);

  const formElement = mainElement.querySelector(`.rules__form`);
  const inputElement = formElement.querySelector(`.rules__input`);
  const buttonElement = formElement.querySelector(`.rules__button`);

  const onInputChange = (inputEvt) => {
    buttonElement.disabled = !inputEvt.target.validity.valid;
  };

  inputElement.addEventListener('keyup', onInputChange);
  inputElement.addEventListener('blur', onInputChange);
  buttonElement.addEventListener('click', onSubmitButtonClick);

  backButton = mainElement.querySelector('.back');
  backButton.addEventListener('click', onBackButtonClick);
};

// on game-1 screen
const onSubmitButtonClick = (submitEvt) => {
  switchScreen(3);

  let formElement = mainElement.querySelector(`.game__content`);
  let inputs = formElement.querySelectorAll(`input`);
  const photoInputs = formElement.querySelectorAll(`input[value="photo"]`);
  const paintInputs = formElement.querySelectorAll(`input[value="paint"]`);

  const onInputChange = (inputEvt) => {
    const checkedPhotoInputs = Array.from(photoInputs).filter((photoInput) => photoInput.checked);
    const checkedPaintInputs = Array.from(paintInputs).filter((paintInput) => paintInput.checked);
    if (checkedPhotoInputs.length > 0 && checkedPaintInputs.length > 0) {
      switchScreen(4);

      formElement = mainElement.querySelector(`.game__content`);
      inputs = formElement.querySelectorAll(`input`);
      const onInput2Change = (input2Evt) => {
        switchScreen(5);
        formElement = mainElement.querySelector(`.game__content`);
        const options = formElement.querySelectorAll('.game__option');

        const onOptionClick = (clickEvt) => {
          switchScreen(6);
        };
        options.forEach((option) => option.addEventListener('click', onOptionClick));

        backButton = mainElement.querySelector('.back');
        backButton.addEventListener('click', onBackButtonClick);
      };
      inputs.forEach((input) => input.addEventListener('change', onInput2Change));

      backButton = mainElement.querySelector('.back');
      backButton.addEventListener('click', onBackButtonClick);
    }
  };
  inputs.forEach((input) => input.addEventListener('change', onInputChange));

  backButton = mainElement.querySelector('.back');
  backButton.addEventListener('click', onBackButtonClick);
};


const addListenersToGreetingScreen = () => {

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
