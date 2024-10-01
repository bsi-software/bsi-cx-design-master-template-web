const { cx } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
  .withGroupId('forms-NjbmnQ')
  /*.withLabel('Forms')*/
  .withLabel('Formular')
  .withContentElements(
    require('@bsi-cx/design-standard-library-web/content-elements/form/form-container'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/multi-column'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/form-field'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/form-field-tel'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/text-area'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/select'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/checkbox'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/radio'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/poll'),
    require('@bsi-cx/design-standard-library-web/content-elements/form/recaptcha')
  );
