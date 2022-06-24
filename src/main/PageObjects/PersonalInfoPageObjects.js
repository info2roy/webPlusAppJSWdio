class PersonalInfoPageObjects {
  fileInput = { web: 'input#file' }; // file input tag for uploading profile picture on web => <input type="file">

  submitPictureButton = { web: '//button[text()=\'Submit\']' }; // The submit button for updated profile picture on web

  profileInfomationHeader = { web: '(//div[text()=\'Personal Information\'])[4]',
    app: '//*[@text=\'Profile information\']' }; // profile information page

  updatePictureOption = { web: '//div[text()=\'Update Picture\']',
    app: '//*[@text=\'Update picture\']' }; // update picture button

  // The dialog for "Allow Scripbox to take pictures and record video?"
  alertForAllowCameraAccess = { app: '//*[@text=\'Allow Scripbox to take pictures and record video?\']' };

  // The option "While using the app"
  alertForAllowCameraAccess_whileUsingTheAppOption = { app: '//*[@text=\'While using the app\']' };

  // The dialog for "Allow Scripbox to access photos and media on your device?"
  alertForAllowMediaAccess = { app: '//*[@text=\'Allow Scripbox to access photos and media on your device?\']' };

  alertForAllowMediaAccess_allowOption = { app: '//*[@text=\'Allow\']' }; // The option "Allow"

  clickPictureButton = { app: '~Shutter' }; // click picture shutter button

  donePictureButton = { app: '~Done' }; // the "Done" button for click picture

  editPhotoHeader = { app: '//*[@text=\'Edit Photo\']' }; // The "Edit Photo Page"

  doneCropButton = { app: '~Crop' }; // the done Crop button
}

module.exports = new PersonalInfoPageObjects();
