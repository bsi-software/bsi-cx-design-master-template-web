require('./styles/styles.scss');


const { cx, SchemaVersion } = require('@bsi-cx/design-build');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template 2.0 - Landingpage')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate(new Date().toLocaleString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }))
  .withPreviewImage('static/header.png')
  .withContentElementGroups(
    ...require('../shared/groups').landingpageGroups,
  );