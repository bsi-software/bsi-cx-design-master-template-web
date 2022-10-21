const baseProperties = require('./properties');

module.exports = {
  ...baseProperties,
  language: 'de',

  /* ------------------------- Button text ----------------------- */
  buttonText: 'Mehr erfahren',

  /* --------------------------- Poll ---------------------------- */
  pollLabelText: 'Wie wahrscheinlich ist es, dass Sie unser Produkt weiter empfehlen werden?',
  pollLabelLeftText: 'Unwahrscheinlich',
  pollLabelRightText: 'Sehr wahrscheinlich',

  /* ------------------------- Select ---------------------------- */
  selectOptionText: 'Bitte wählen',

  /* ----------------------- Error Texts ------------------------- */
  errorRequiredText: 'Bitte füllen Sie dieses Feld aus.',
  errorInvalidText: 'Der Wert, den Sie für dieses Feld eingegeben haben, ist ungültig.'
}