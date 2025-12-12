require("./styles/styles.scss");

const { cx, SchemaVersion, Locale } = require("@bsi-cx/design-build");

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle("BSI CX Master Template 2.0 - Website")
  .withAuthor("Design Team - BSI Business Systems Integration AG")
  .withDate(new Date().toLocaleString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }))
  .withPreviewImage("static/header.png")
  .withDefaultLocale(Locale.DE)
  .withLocales(Locale.DE) // TODO: Was ganu kann man hier angeben? Das sollte ja eigentlcih ein Array sein, warum ist nur eine Sprache angegeben?
  .withContentElementGroups(
    ...require('../shared/groups').websiteGroups
  )
  .withWebsite(
    cx.website
      .withMaxNavigationLevel(2)
      .withIncludes(
        require("./includes/navigation"),
        require("./includes/page"),
        require("./includes/footer")
      )
  );