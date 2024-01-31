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

  /* ------------------------- Slot finder ----------------------- */
  slotFinderChooseDateText: 'Choose date',
  slotFinderChooseSlotText: 'Choose time slot',
  slotFinderBookSlotTex:'Check time slot',
  slotFinderBookSlotButtonText: 'Book time slot',
  slotFinderNoSlotsText: 'No slots available',
  slotFinderChooseAnotherDayText: 'Please choose another day',

  /* ------------------------- Webcam ---------------------------- */
	webcamImgModeAskTitleText: 'Camera access required',
	webcamImgModeAskDescriptionText: 'We need access to your camera to take a picture. If your browser asks you for authorisation to use the camera in the next step, access to the camera must be granted.',
	webcamImgModeAskButtonCameraText: 'Allow access',
	webcamImgModeAskButtonManualText: 'Upload a picture instead',
	webcamImgModeCameSubmitButtonText: 'Submit picture',
	webcamImgModeManualTitleText: 'Upload picture',
	webcamImgModeManualDescriptionText: 'No access to the camera desired or possible. Upload a picture instead.',
	webcamImgModeManualUploadImageButtonText: 'Upload picture',

  /* ----------------------- Error Texts ------------------------- */
  errorRequiredText: 'Please fill out this field.',
  errorInvalidText: 'The value you entered for this field is invalid.'
}