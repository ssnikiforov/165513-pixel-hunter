/**
 * Returns new DOM element created by passed string
 *
 * @param {String} elementString
 * **/
const getElementFromTemplate = (elementString) => {
  return document.createElement(elementString);
};

export default getElementFromTemplate;
