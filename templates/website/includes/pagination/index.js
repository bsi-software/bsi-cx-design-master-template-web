const {cx, Include} = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
  .withIdentifier('table-pagination-od2rhZ')
  .withName('Seitennummerierung')
  .withEditable(false)
  .withContentType('pre-defined')
  .withFile(require('./template.hbs'));