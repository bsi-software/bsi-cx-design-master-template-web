const {cx, Include} = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
  .withIdentifier('logo-XeW2mK')
  .withName('Logo')
  .withEditable(true)
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('logo-dropzone-vBnV9R')
      .withMaxAllowedElements(1)
      .withAllowedElements(require('./../../../shared/content-elements/logo')));