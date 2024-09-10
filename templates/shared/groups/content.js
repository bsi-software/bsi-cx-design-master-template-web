const { cx } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
  .withGroupId('content-JFLFHv')
  /*.withLabel('Content')*/
  .withLabel('Inhalt')
  .withContentElements(
    require('@bsi-cx/design-standard-library-web/content-elements/base/text').editor(
      require('../configs/editor/formatted-text-editor')
    ),
    require('@bsi-cx/design-standard-library-web/content-elements/base/figure'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/banner'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/button'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/card'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/accordion'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/news-snippet'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/table'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/video'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/social-media-follow'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/social-media-share'),
    require('@bsi-cx/design-standard-library-web/content-elements/advanced/webcam-image-upload'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/slot-finder'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/chart'),
    require('@bsi-cx/design-standard-library-web/content-elements/base/html')
  );
