const { cx } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
  .withGroupId('header-Eev4oq')
  .withLabel('Header')
  .withContentElements(
    require('../content-elements/logo'),
    require('../content-elements/header-image')
  );
