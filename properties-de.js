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

  /* ------------------------- Slot finder ----------------------- */
  slotFinderChooseDateText: 'Datum wählen',
  slotFinderChooseSlotText: 'Termin wählen',
  slotFinderBookSlotTex:'Termin überprüfen',
  slotFinderBookSlotButtonText: 'Termin buchen',
  slotFinderNoSlotsText: 'Keine Termine verfügbar',
  slotFinderChooseAnotherDayText: 'Bitte anderen Tag wählen',

  /* ------------------------- Webcam ---------------------------- */
	webcamImgModeAskTitleText: 'Kamerazugriff benötigt',
	webcamImgModeAskDescriptionText: 'Wir benötigen Zugriff auf ihre Kamera, um ein Bild aufzunehmen. Falls ihr Browser Sie im nächsten Schritt um die Berechtigung zur Nutzung der Kamera fragt, muss der Zugriff auf die Kamera gewährt werden.',
	webcamImgModeAskButtonCameraText: 'Zugriff erlauben',
	webcamImgModeAskButtonManualText: 'Stattdessen ein Bild hochladen',
	webcamImgModeCameSubmitButtonText: 'Bild übermitteln',
	webcamImgModeManualTitleText: 'Bild hochladen',
	webcamImgModeManualDescriptionText: 'Kein Zugriff auf die Kamera gewünscht oder möglich. Laden Sie stattdessen ein Bild hoch.',
	webcamImgModeManualUploadImageButtonText: 'Bild hochladen',

  /* ----------------------- Error Texts ------------------------- */
  errorRequiredText: 'Bitte füllen Sie dieses Feld aus.',
  errorInvalidText: 'Der Wert, den Sie für dieses Feld eingegeben haben, ist ungültig.'
}