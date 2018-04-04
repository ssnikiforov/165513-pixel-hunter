/**
 * Do callback action only when page is ready
 *
 * @param {Function} cb
 * @param {String} selector
 * **/
const addListenersWhenPageIsReady = (cb, selector) => {
  const promise = new Promise(function (resolve) {
    if (document.readyState === `complete`) {
      resolve();
    } else {
      document.addEventListener(`DOMContentLoaded`, resolve);
    }
  });
  promise.then(function whenElementIsReady() {
    const element = document.querySelector(selector);
    cb(element);
  });
};

/**
 * Returns new DOM element created by passed string
 *
 * @param {String} elementString
 * @return {Element} div
 * **/
const getElementFromTemplate = (elementString) => {
  let fragment = document.createElement(`template`);
  fragment.innerHTML = elementString.trim();
  return fragment.content;
};

/**
 * Change index of screen to the new one and render screen with new index
 *
 * @param {Element} newScreenElement
 * **/
const switchScreen = (newScreenElement) => {
  const mainElement = document.querySelector(`main.central`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(newScreenElement);
};

export {
  addListenersWhenPageIsReady,
  getElementFromTemplate,
  switchScreen
};
