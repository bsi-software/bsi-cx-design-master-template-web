require("./styles/styles.scss");

const { cx, WebsiteContentType, Locale } = require("@bsi-cx/design-build");
const design = require('../shared/_design')

module.exports = design()
  .withWebsite(
    cx.website
      .withMaxNavigationLevel(2)
      .withIncludes(
        require("./includes/navigation"),
        require("./includes/logout"),
        require("./includes/logo"),
        require("./includes/header"),
        require("./includes/page"),
        require("./includes/footer")
      )
  )
  .withWebsiteContentTypes(
    WebsiteContentType.BLOG,
    WebsiteContentType.POP_UP,
    WebsiteContentType.PRESS_RELEASE,
    WebsiteContentType.EVENT);
