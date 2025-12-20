require('./styles.scss');

const contentElement = require('@bsi-cx/design-standard-library-web/content-elements/advanced/logo-with-darkmode/prototype');

module.exports = contentElement(
  require('./template.twig'),
  'logo-pm7eOT',
  'Logo',
  'logo-lm-part-image-1rKWxD',
  'Dark- & Light-Mode',
  'logo-dm-part-image-ySZsrw',
  'Logo Light mode',
  'Logo Dark mode'
).withStyleConfigs();