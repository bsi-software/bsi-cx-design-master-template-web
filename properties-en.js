const baseProperties = require('./properties');

module.exports = {
  ...baseProperties,
  language: 'en',

  /* ------------------------- Button text ----------------------- */
  buttonText: 'Read more',

  /* --------------------------- Poll ---------------------------- */
  pollLabelText: 'How likely is it that you will recommend our product to others?',
  pollLabelLeftText: 'Unlikely',
  pollLabelRightText: 'Very likely',

  /* ------------------------- Select ---------------------------- */
  selectOptionText: 'Please select',

  /* ----------------------- Error Texts ------------------------- */
  errorRequiredText: 'Please fill out this field.',
  errorInvalidText: 'The value you entered for this field is invalid.'
}