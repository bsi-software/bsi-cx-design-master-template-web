require('./styles/styles.scss');

const { cx, SchemaVersion, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template - Website')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate('21.01.2022')
  .withPreviewImage('static/header.png')
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN)
  .withContentElementGroups(...require('../shared/groups'))
  .withWebsite(
    cx.website
      .withMaxNavigationLevel(2)
      .withIncludes(
        require('./includes/navigation'),
        require('./includes/logo'),
        require('./includes/header'),
        require('./includes/page'),
        require('./includes/footer')
      )
  );
