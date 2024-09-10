require('./styles/styles.scss');

const { cx, SchemaVersion, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template - Landingpage')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate('21.01.2022')
  .withPreviewImage('static/header.png')
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN)
  .withContentElementGroups(
    ...require('../shared/groups'),
    require('./groups/footer')
  );
