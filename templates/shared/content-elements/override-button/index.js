const button = require("@bsi-cx/design-standard-library-web/content-elements/buttons/button-filled/index.js");

module.exports = button
    .withElementId("abc-123")
    .withFile(require("./template.hbs.twig"));
;
