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
  /*	                      Layout Styling	                       */
  /* ============================================================= */

  // this is the gap between every element.
  // If you set it to 0 there is no gap because Elements has no margin.
  gapBetweenElements: '1.5rem',
  // this ist the padding of each column
  colPadding: '1rem',
  // border-radius for column element
  columnRoundetCorner: '0.5rem',


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

}