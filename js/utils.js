const mainElement = document.querySelector(`main.central`);

const getElementFromTemplate = (elementString) => {
  const template = document.createElement(`template`);
  template.innerHTML = elementString.trim();

  return template.content.firstChild;
};

const switchScreen = (newScreenElement) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(newScreenElement);
};

export {
  getElementFromTemplate,
  switchScreen
};
