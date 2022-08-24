const {cx, Include} = require('@bsi-cx/design-build');

/**
 * @type {Include}
 */
module.exports = cx.include
  .withIdentifier('header-Sq8Of9')
  .withName('Header')
  .withEditable(true)
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('header-dropzone-TgF6e2')
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('./../../../shared/content-elements/header-image')));