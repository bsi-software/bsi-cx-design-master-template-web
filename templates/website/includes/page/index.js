const {cx, PageInclude} = require('@bsi-cx/design-build');

/**
 * @type {PageInclude}
 */
module.exports = cx.pageInclude
  .withName('Content page template')
  .withEditable(true)
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('page-header-dropzone-TgF6e2')
      .withMaxAllowedElements(1)
      .withAllowedElements(),
    cx.dropzone
      .withDropzone('page-content-dropzone-JPzHJO')
      .withAllowedElements()
  ); // TODO: prüfen, ob es sinnvoll ist, hier alles zu erlauben