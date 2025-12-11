const {css} = require('@bsi-cx/design-build');

const primaryColor = css.color('#fe9915');
const secondaryColor = css.color('#0082a1');
const tertiaryColor = css.color('#2bb198');
const darkColor = css.color('#333333');
const lightColor = css.color('#ffffff');
const infoColor = css.color('#abb3b8');

const invalidColor = css.color('#d11928');
const validColor = css.color('#19804b');

const textColor = css.color('#282322');

module.exports = {

  /* ============================================================= */
  /*	                           Colors	                           */
  /* ============================================================= */

  primaryColor,
  secondaryColor,
  tertiaryColor,
  darkColor,
  lightColor,
  infoColor,
  invalidColor,
  validColor,
  textColor,

  /* ============================================================= */
  /*	                           Fonts	                           */
  /* ============================================================= */

  // List for web safe CSS fonts: https://www.cssfontstack.com/
  // List for choosing fallback fonts: https://help.campaignmonitor.com/email-builder-font-compatibility


  /* ============================================================= */
  /*	                      Grid breakpoint	                       */
  /* ============================================================= */

  gridBreakpointMobile: '375px', // 375px-767px
  gridBreakpointTablet: '768px', // 768px-1024px
  gridBreakpointDesktop: '1025px', // 1025px +

  /* ============================================================= */
  /* ============================================================= */
  /*              Content elements - Master Template               */
  /* ============================================================= */
  /* ============================================================= */

  

  /* ============================================================= */
  /* ============================================================= */
  /*              Content elements - Standard Library              */
  /* ============================================================= */
  /* ============================================================= */

// TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
  /* ---------------------- Regex input--------------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  // regexLabelText: '',
  // regexInfoText: '',
  // This property is a stringified JSON object which defines the available Regex patterns
  // example: JSON.stringify({ "Datum": "\\d{2}\\.\\d{2}\\.\\d{4}", "PLZ": "[0-9]{5}", "KFZ": "[A-ZÖÜÄ]{1,3} [A-ZÖÜÄ]{1,2} [1-9]{1}[0-9]{1,3}" })
  // regexPattern: JSON.stringify({ "Datum": "\\d{2}\\.\\d{2}\\.\\d{4}", "PLZ": "[0-9]{5}", "KFZ": "[A-ZÖÜÄ]{1,3} [A-ZÖÜÄ]{1,2} [1-9]{1}[0-9]{1,3}" }),
}