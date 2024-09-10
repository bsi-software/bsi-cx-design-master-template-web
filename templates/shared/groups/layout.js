const { cx } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
  .withGroupId('layout-EhFpQ7')
  .withLabel('Layout')
  .withContentElements(
    require('@bsi-cx/design-standard-library-web/content-elements/layout/col-one'),
    require('@bsi-cx/design-standard-library-web/content-elements/layout/col-two'),
    require('@bsi-cx/design-standard-library-web/content-elements/layout/col-three'),
    require('@bsi-cx/design-standard-library-web/content-elements/layout/col-four'),
    require('@bsi-cx/design-standard-library-web/content-elements/layout/spacer')
  );
