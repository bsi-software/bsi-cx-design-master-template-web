const {cx, Include} = require('@bsi-cx/design-build');
require('./styles.scss')
/**
 * @type {Include}
 */
module.exports = cx.include
  .withIdentifier('logout-csd321')
  .withName('Logout')
  .withEditable(true)
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('logout-button-dropzone-4532Ads')
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('@bsi-cx/design-standard-library-web/content-elements/base/button/')
    ));