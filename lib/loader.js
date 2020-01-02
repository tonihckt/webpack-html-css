const _ = require('lodash');

module.exports = function (source) {
  const allLoadersButThisOne = this.loaders.filter(loader => loader.normal !== module.exports);
  // This loader shouldn't kick in if there is any other loader (unless it's explicitly enforced)
  if (allLoadersButThisOne.length > 0) {
    return source;
  }
  // Skip .js files (unless it's explicitly enforced)
  if (/\.js$/.test(this.resourcePath)) {
    return source;
  }

  // The following part renders the template with lodash as a minimalistic loader
  //
  const template = _.template(source, {
    interpolate: /<%-([\s\S]+?)%>/g,
    escape: /<%=([\s\S]+?)%>/g,
    variable: 'data',
  });
  // Use __non_webpack_require__ to enforce using the native nodejs require
  // during template execution
  return `var _ = __non_webpack_require__(${JSON.stringify(require.resolve('lodash'))});
    module.exports = function (templateParams) { with(templateParams) {
      return (${template.source})();
    }}`;
};