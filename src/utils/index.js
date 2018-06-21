const utils = {
  flatten(arr) {
    return Array.prototype.concat.apply([], arr);
  }
};

window.$$ = utils;