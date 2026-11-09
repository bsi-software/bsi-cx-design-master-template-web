require('./styles/styles.scss');

const { cx, Locale } = require("@bsi-cx/design-build");
const design = require('../shared/_design')

const footerGroup = cx.contentElementGroup
  .withGroupId('footer-lJ2X2V')
  .withLabel('Footer')
  .withContentElements(
    require('./content-elements/footer'));

module.exports = design(Locale.DE, footerGroup);
