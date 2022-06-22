class PersonalInfoPageObjects {
  fileInput = { web: 'input#file' }; // file input tag for uploading profile picture on web => <input type="file">

  submitPictureButton = { web: "//button[text()='Submit']" }; // The submit button for updated profile picture on web

  profileInfomationHeader = { web: "//div[text()='Personal Information']", androidapp: "//*[@text='Profile information']" }; // profile information page

  updatePictureOption = { web: "//div[text()='Update Picture']", androidapp: "//*[@text='Update picture']" }; // update picture button

  alertForAllowCameraAccess = { androidapp: "//*[@text='Allow Scripbox to take pictures and record video?']" }; // The dialog for "Allow Scripbox to take pictures and record video?"

  alertForAllowCameraAccess_whileUsingTheAppOption = { androidapp: "//*[@text='While using the app']" }; // The option "While using the app"

  alertForAllowMediaAccess = { androidapp: "//*[@text='Allow Scripbox to access photos and media on your device?']" }; // The dialog for "Allow Scripbox to access photos and media on your device?"

  alertForAllowMediaAccess_allowOption = { androidapp: "//*[@text='Allow']" }; // The option "Allow"

  clickPictureButton = { androidapp: '~Shutter' }; // click picture shutter button

  donePictureButton = { androidapp: '~Done' }; // the "Done" button for click picture

  editPhotoHeader = { androidapp: "//*[@text='Edit Photo']" }; // The "Edit Photo Page"

  doneCropButton = { androidapp: '~Crop' }; // the done Crop button
}

module.exports = new PersonalInfoPageObjects();
