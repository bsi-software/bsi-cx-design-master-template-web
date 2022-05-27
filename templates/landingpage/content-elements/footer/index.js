const {cx, Icon} = require('@bsi-cx/design-build');
const {layoutElements} = require('@bsi-cx/design-standard-library-web/content-elements/layout/');

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('footer-nJDYZP')
  .withLabel('Footer')
  .withFile(require('./template.twig'))
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone('footer-dropzone-rR98ys')
      .withAllowedElements(
        ...layoutElements));