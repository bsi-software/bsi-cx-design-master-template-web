const {css} = require('@bsi-cx/design-build');

module.exports = {

  /* ============================================================= */
  /*	                           Colors	                           */
  /* ============================================================= */

  primaryColor: css.color('#16616d'),
  secondaryColor: css.color('#ff7d00'),
  darkColor: css.color('#383e42'),
  lightColor: css.color('#ffffff'),
  infoColor: css.color('#6c757d'),


  /* ============================================================= */
  /*	                           Fonts	                           */
  /* ============================================================= */

  // List for web safe CSS fonts: https://www.cssfontstack.com/
  // List for choosing fallback fonts: https://help.campaignmonitor.com/email-builder-font-compatibility

  // Elements using primaryFontFamily: all elements that do not explicitly have another font assigned to them
  // To change the font family of the following elements, please scroll down and adjust it there: title H1-H3, text
  primaryFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif',


  /* ============================================================= */
  /*	                      Grid breakpoint	                       */
  /* ============================================================= */

  // In the CX content editor, a content is 940px wide in desktop view. The grid breakpoint LG was adapted to this.
  gridBreakpointXS: 0,
  gridBreakpointSM: '576px',
  gridBreakpointMD: '768px',
  gridBreakpointLG: '940px',
  gridBreakpointXL: '1200px',
  gridBreakpointXXL: '1400px',


  /* ============================================================= */
  /*	                          Language	                         */
  /* ============================================================= */

  // Allowed values: de, en
  language: 'de',



  /* ============================================================= */
  /* ============================================================= */
  /*              Content elements - Master Template               */
  /* ============================================================= */
  /* ============================================================= */



  /* ============================================================= */
  /*	                            Logo   	                         */
  /* ============================================================= */

  /* ----------------------- Logo alignment ---------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Align left: 'bsi-logo-align-left'
  // Align right: 'bsi-logo-align-right'
  logoAlignment: 'bsi-logo-align-left',

  /* ------------------------- Logo width ------------------------ */
  logoWidth: '60px',


  /* ============================================================= */
  /*	                        Header image	                       */
  /* ============================================================= */

  /* -------------------- Header image height -------------------- */
  headerImageHeight: '250px',


  /* ============================================================= */
  /*	                           Footer 	                         */
  /* ============================================================= */

  /* ------------------------ Footer color ----------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Primary color: 'bg-primary'
  // Secondary color: 'bg-secondary'
  // Dark: 'bg-dark'
  // Light: 'bg-light'
  footerColor: 'bg-dark',

  /* ---------------------- Footer gradient ---------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Don`t show background gradient: 'default'
  // Show background gradient: 'bg-gradient'
  footerGradient: 'bg-gradient',


  /* ============================================================= */
  /* ============================================================= */
  /*              Content elements - Standard Library              */
  /* ============================================================= */
  /* ============================================================= */



  /* ============================================================= */
  /*	                           Button	                           */
  /* ============================================================= */

  /* ------------------------- Button text ----------------------- */
  buttonText: '',

  /* ------------------------ Button color ----------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Primary color: 'bsi-btn-color-primary'
  // Secondary color: 'bsi-btn-color-secondary'
  // Dark: 'bsi-btn-color-dark'
  // Light: 'bsi-btn-color-light'
  buttonColor: 'bsi-btn-color-primary',

  /* ----------------------- Button layout ---------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Filled: 'bsi-btn-filled'
  // Outline: 'bsi-btn-outline'
  buttonLayout: 'bsi-btn-filled',

  /* ------------------------ Button size ----------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Small: 'bsi-btn-size-sm'
  // Medium: 'bsi-btn-size-md'
  // Large: 'bsi-btn-size-lg'
  buttonSize: 'bsi-btn-size-md',

  /* ------------------------ Button width ----------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Default: 'bsi-btn-width-default'
  // Wide: 'bsi-btn-width-wide'
  buttonWidth: 'bsi-btn-width-default',

  /* -------------------- Button border radius ------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Sharp corners: 'bsi-corner-sharp'
  // Rounded corners: 'bsi-corner-rounded'
  buttonBorderRadius: 'bsi-corner-rounded',

  /* ---------------------- Button letter case ------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Default: 'bsi-btn-letter-default'
  // All uppercase: 'bsi-btn-letter-uppercase'
  buttonLetterCase: 'bsi-btn-letter-default',


  /* ============================================================= */
  /*	                       Title H1 - H3	                       */
  /* ============================================================= */

  /* ------------------------- Title text ------------------------ */
  // If no text is selected, lorem ipsum sample text is used.
  titleH1Text: '',
  titleH2Text: '',
  titleH3Text: '',

  /* --------------------- Title font family --------------------- */
  titleH1FontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif',
  titleH2FontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif',
  titleH3FontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif',

  /* ---------------------- Title font size ---------------------- */
  titleH1FontSize: '2.5rem',
  titleH2FontSize: '2rem',
  titleH3FontSize: '1.75rem',

  /* ------------------------- Title color ----------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Primary color: 'bsi-text-primary-color'
  // Secondary color: 'bsi-text-secondary-color'
  // Dark: 'bsi-text-dark'
  // Light: 'bsi-text-light'
  titleH1Color: 'bsi-text-primary-color',
  titleH2Color: 'bsi-text-primary-color',
  titleH3Color: 'bsi-text-primary-color',

  /* ------------------------- Title style ------------------------ */
  // From the following choices, select the value that you want to be preselected:
  // Regular: 'bsi-default'
  // Large: 'display-1'
  titleH1Style: 'bsi-default',
  titleH2Style: 'bsi-default',
  titleH3Style: 'bsi-default',

  /* ------------------------- Title font weight ------------------------ */
  // From the following choices, select the value that you want to be preselected:
  // Regular: 'fw-bold'
  // Bold: 'fw-light'
  // Light: 'fw-normal'
  titleH1Weight: 'fw-normal',
  titleH2Weight: 'fw-normal',
  titleH3Weight: 'fw-normal',

  /* ============================================================= */
  /*	                            Text 	                           */
  /* ============================================================= */

  /* ------------------------ Text content ----------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  textContent: '',

  /* --------------------- Text font family --------------------- */
  textFontFamily: 'Open Sans, Segoe UI, Apple SD Gothic Neo, Lucida Grande, Lucida Sans Unicode, sans‑serif',

  /* ------------------------ Text color ------------------------ */
  textColor: css.color('#383e42'),

  /* ---------------------- Text font size ---------------------- */
  textFontSize: '16px',


  /* ============================================================= */
  /*	                     Social Media Follow	                   */
  /* ============================================================= */

  /* ------------------------- Icon color ------------------------ */
  // From the following choices, select the value that you want to be preselected:
  // Primary color: 'bsi-icon-color-primary'
  // Secondary color: 'bsi-icon-color-secondary'
  // Dark: 'bsi-icon-color-dark'
  // Light: 'bsi-icon-color-light'
  followIconColor: 'bsi-icon-color-primary',

  /* ---------------------- Icon hover color --------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Primary color: 'bsi-icon-hover-color-primary'
  // Secondary color: 'bsi-icon-hover-color-secondary'
  // Dark: 'bsi-icon-hover-color-dark'
  // Light: 'bsi-icon-hover-color-light'
  followIconHoverColor: 'bsi-icon-hover-color-secondary',

  /* ------------------------- Icon size ------------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Small: 'bsi-icon-size-small'
  // Medium: 'bsi-icon-size-medium'
  // Large: 'bsi-icon-size-large'
  followIconSize: 'bsi-icon-size-medium',

  /* -------------------- Social Media URLs ---------------------- */
  followLinkedinURL: "https://www.linkedin.com/",
  followXingURL: "https://www.xing.com/",
  followTwitterURL: "https://www.twitter.com/",
  followFacebookURL: "https://www.facebook.com/",
  followYoutubeURL: "https://www.youtube.com/",
  followInstagramURL: "https://www.instagram.com/",
  followKununuURL: "https://www.kununu.com/",
  followWhatsappURL: "https://api.whatsapp.com/",
  followPinterestURL: "https://www.pinterest.com/",
  followSnapchatURL: "https://www.snapchat.com/",

  /* ------------------------- Hide icons ------------------------- */
  // Set the following 'hidden' properties to true, if you want the respective social media icons to be hidden in the preselection.
  followLinkedinHidden: false,
  followXingHidden: false,
  followTwitterHidden: false,
  followFacebookHidden: false,
  followYoutubeHidden: false,
  followInstagramHidden: false,
  followKununuHidden: false,
  followWhatsappHidden: true,
  followPinterestHidden: true,
  followSnapchatHidden: true,


  /* ============================================================= */
  /*	                           Banner 	                         */
  /* ============================================================= */

  /* ----------------------- Banner height ----------------------- */
  bannerHeight: '250px',
  
  /* -------------------- Banner Vertical Alignment --------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Top: 'bsi-vertical-align-top'
  // Center: 'bsi-vertical-align-center'
  // Bottom: 'bsi-vertical-align-bottom'
  bannerVerticalAlignment: 'bsi-vertical-align-center',

  /* -------------------- Banner Horizontal Alignment --------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Left: 'bsi-horizontal-align-left'
  // Center: 'bsi-horizontal-align-center'
  // Right: 'bsi-horizontal-align-right'
  bannerHorizontalAlignment: 'bsi-horizontal-align-center',  


  /* ============================================================= */
  /*	                           Video 	                           */
  /* ============================================================= */

  /* ------------------------- Video URL ------------------------- */
  // Only YouTube videos are supported.
  // Please enter the YouTube embed URL, e.g. https://www.youtube.com/embed/Ekc_4btc-iM, which can be copied by clicking the 'Share' button below a YouTube video.
  videoURL: 'https://www.youtube.com/embed/Ekc_4btc-iM',


  /* ============================================================= */
  /*	                           Chart 	                           */
  /* ============================================================= */

  /* ------------------------ Chart colors ----------------------- */
  chartBorderColor1: css.color('#116985ff'),
  chartBorderColor2: css.color('#27aab0ff'),
  chartBorderColor3: css.color('#94e7a8ff'),
  chartBorderColor4: css.color('#c7f296ff'),
  chartBackgroundColor1: css.color('#11698566'),
  chartBackgroundColor2: css.color('#27aab066'),
  chartBackgroundColor3: css.color('#94e7a866'),
  chartBackgroundColor4: css.color('#c7f29666'),


  /* ============================================================= */
  /*	                           Form 	                           */
  /* ============================================================= */

  /* ------------------------ Form width ------------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Wide: 'bsi-form-wide'
  // Slim: 'bsi-form-slim'
  formWidth: 'bsi-form-wide',

  /* ----------------------- Form layout ------------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Card: 'bsi-form-card-visible'
  // Plain: 'bsi-form-card-hide'
  formLayout: 'bsi-form-card-visible',

  /* -------------------- Form border radius --------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Sharp corners: 'bsi-corner-sharp'
  // Rounded corners: 'bsi-corner-rounded'
  formBorderRadius: 'bsi-corner-rounded',

  /* ------------------- Form label position --------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Top: 'bsi-form-label-top'
  // Left: 'bsi-form-label-left'
  // Floating: 'bsi-form-label-floating'
  // Hide label: 'bsi-form-label-hide'
  formLabelPosition: 'bsi-form-label-top',

  /* ----------------------- Form color -------------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Primary color: 'bsi-form-color-primary'
  // Secondary color: 'bsi-form-color-secondary'
  formColor: 'bsi-form-color-primary',

  /* ------------------- Form button layout ---------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Filled: 'bsi-form-btn-filled'
  // Outline: 'bsi-form-btn-outline'
  formButtonLayout: 'bsi-form-btn-outline',

  /* ------------------------- Checkbox -------------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  checkboxLabelText: '',
  checkboxInfoText: '',

  /* ------------------------ Form field ------------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  formFieldLabelText: '',
  formFieldInfoText: '',

  /* ------------------ Form field phone number ------------------ */
  // If no text is selected, lorem ipsum sample text is used.
  phoneLabelText: '',
  phoneInfoText: '',

  /* --------------------------- Poll ---------------------------- */
  pollLabelText: '', // see translation in DE/EN files
  pollLabelLeftText: '', // see translation in DE/EN files
  pollLabelRightText: '', // see translation in DE/EN files
  // If no text is selected, lorem ipsum sample text is used.
  pollInfoText: '',

  /* -------------------------- Radio ---------------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  radioGroupLabelText: '',
  radioLabelText: '',
  radioInfoText: '',

  /* ------------------------- Select ---------------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  selectLabelText: '',
  selectOptionText: '', // see translation in DE/EN files
  selectInfoText: '',

  /* ----------------------- Text area --------------------------- */
  // If no text is selected, lorem ipsum sample text is used.
  textAreaLabelText: '',
  textAreaInfoText: '',

  /* ----------------------- Error Texts ------------------------- */
  // This text is displayed below a form element if the field is required but has not been filled out.
  errorRequiredText: '', // see translation in DE/EN files
  // This text is displayed below a form element if the input does not match the expected format.
  errorInvalidText: '', // see translation in DE/EN files


  /* ============================================================= */
  /*	                          Columns 	                         */
  /* ============================================================= */

  /* ---------------------- Column alignment --------------------- */
  // From the following choices, select the value that you want to be preselected:
  // Align left: 'bsi-col-align-left'
  // Center: 'bsi-col-align-center'
  // Align right: 'bsi-col-align-right'
  colOneAlignment: 'bsi-col-align-left',
  colTwoAlignment: 'bsi-col-align-left',
  colThreeAlignment: 'bsi-col-align-left',
  colFourAlignment: 'bsi-col-align-left'
}