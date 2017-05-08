const jsxtransform = require('jsx-transform');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  const options = Object.assign(
    {},
    { factory: 'h' },
    loaderUtils.getOptions(this)
  );

  const result = jsxtransform.fromString(source, options);

  this.callback(null, result, null);
};
