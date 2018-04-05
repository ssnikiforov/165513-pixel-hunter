/**
 * Returns new DOM element created by passed string
 *
 * @param {String} elementString
 * @return {Node} div
 * **/
const getElementFromTemplate = (elementString) => {
  const template = document.createElement(`template`);
  template.innerHTML = elementString.trim();

  return template.content.firstChild;
};

/**
 * Change index of screen to the new one and render screen with new index
 *
 * @param {Node} newScreenElement
 * **/
const switchScreen = (newScreenElement) => {
  const mainElement = document.querySelector(`main.central`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(newScreenElement);
};

export {
  getElementFromTemplate,
  switchScreen
};
