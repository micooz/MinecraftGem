module.exports = function (obj) {
  if (typeof obj != 'object') {
    throw new TypeError('obj must be an object');
  }
  return JSON.stringify(obj).replace(/"(\w+)":/g, '$1:');
};
