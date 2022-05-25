const {css} = require('@bsi-cx/design-build');

module.exports = {

  // Colors:
  primaryColor: css.color('#2F4E66'),
  secondaryColor: css.color('#93C120'),
  darkColor: css.color('#383e42'),
  lightColor: css.color('#ffffff'),
  infoColor: css.color('#6c757d'),

  // Chart colors:
  chartBorderColor1: css.color('#116985ff'),
  chartBorderColor2: css.color('#27aab0ff'),
  chartBorderColor3: css.color('#94e7a8ff'),
  chartBorderColor4: css.color('#c7f296ff'),
  chartBackgroundColor1: css.color('#11698566'),
  chartBackgroundColor2: css.color('#27aab066'),
  chartBackgroundColor3: css.color('#94e7a866'),
  chartBackgroundColor4: css.color('#c7f29666'),

  // Fonts:
  // List of fallback fonts: https://help.campaignmonitor.com/email-builder-font-compatibility
  primaryFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif',
  secondaryFontFamily: 'Calibri, Carlito, PT Sans, Trebuchet MS, sans‑serif',

  // Grid breakpoint
  // In the CX content editor, a content is 940px wide in desktop view. The grid breakpoint LG was adapted to this.
  gridBreakpointXS: 0,
  gridBreakpointSM: '576px',
  gridBreakpointMD: '768px',
  gridBreakpointLG: '940px',
  gridBreakpointXL: '1200px',
  gridBreakpointXXL: '1400px',

}