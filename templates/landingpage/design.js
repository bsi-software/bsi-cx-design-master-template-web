require('./styles/styles.scss');


const { cx, SchemaVersion } = require('@bsi-cx/design-build');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template 2.0 - Landingpage')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate(new Date().toLocaleString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }))
  .withPreviewImage('static/header.png')
  // TODO: build function for automatic generation of this line -> is verry comlicated, we decide to don't do it yet
  .withHtmlEditorConfigs(require("@bsi-cx/design-standard-library-web/content-elements/text-elements/body-text/editor-config.js"))
  .withContentElementGroups(
    ...require('../shared/groups').landingpageGroups,
  );