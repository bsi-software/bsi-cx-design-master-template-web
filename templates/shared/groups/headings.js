const { cx } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
.withGroupId('headings-J9rRcv')
/*.withLabel('Headings')*/
.withLabel('Überschriften')
.withContentElements(
  require('@bsi-cx/design-standard-library-web/content-elements/base/h1'),
  require('@bsi-cx/design-standard-library-web/content-elements/base/h2'),
  require('@bsi-cx/design-standard-library-web/content-elements/base/h3'));
