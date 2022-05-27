const {cx, Include} = require('@bsi-cx/design-build');

const {layoutElements} = require('@bsi-cx/design-standard-library-web/content-elements/layout/');

/**
 * @type {Include}
 */
module.exports = cx.include
  .withIdentifier('footer-nJDYZP')
  .withName('Footer')
  .withEditable(true)
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('footer-dropzone-rR98ys')
      .withAllowedElements(
        ...layoutElements));