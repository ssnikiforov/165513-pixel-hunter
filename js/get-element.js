/**
 * Returns new DOM element created by passed string
 *
 * @param {String} elementString
 * @return {Element} div
 * **/
const getElementFromTemplate = (elementString) => {
  const div = document.createElement(`div`);
  div.innerHTML = elementString.trim();
  return div;
};

export default getElementFromTemplate;
