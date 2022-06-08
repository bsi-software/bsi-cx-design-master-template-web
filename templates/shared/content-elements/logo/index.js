require('./styles.scss');

const contentElement = require('@bsi-cx/design-standard-library-web/content-elements/base/figure/prototype');

module.exports = contentElement(
  require('./template.twig'),
  'logo-pm7eOT',
  'Logo',
  'logo-part-image-1rKWxD',
  /*'Logo image',*/
  'Logo Bild',
  'logo-part-text-ySZsrw',
  /*'Logo text'*/
  'Logo Text'
).withStyleConfigs();