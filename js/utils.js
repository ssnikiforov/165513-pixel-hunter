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

export {addListenersWhenPageIsReady};
