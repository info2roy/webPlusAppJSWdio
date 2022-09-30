class PersonalInfoObjects {
  fileInput = { web: 'input#file' }; // file input tag for uploading profile picture on web => <input type="file">

  submitPictureButton = { web: '//button[text()="Submit"]' }; // The submit button for updated profile picture on web

  profileInfomationHeader = { web: '(//div[text()="Personal Information"])[4]',
    app: '//*[@text="Profile information"]' }; // profile information page

  accountFamilyInfoPageHeader = { web: '(//div[text()="Account & Family Information"])[4]' };

  updatePictureOption = { web: '//div[text()="Update Picture"]',
    app: '//*[@text="Update picture"]' }; // update picture button

  // The dialog for "Allow Scripbox to take pictures and record video?"
  alertForAllowCameraAccess = { app: '//*[@text="Allow Scripbox to take pictures and record video?"]' };

  // The option "While using the app"
  alertForAllowCameraAccess_whileUsingTheAppOption = { app: '//*[@text="While using the app"]' };

  // The dialog for "Allow Scripbox to access photos and media on your device?"
  alertForAllowMediaAccess = { app: '//*[@text="Allow Scripbox to access photos and media on your device?"]' };

  alertForAllowMediaAccess_allowOption = { app: '//*[@text="Allow"]' }; // The option "Allow"

  clickPictureButton = { app: '~Shutter' }; // click picture shutter button

  donePictureButton = { app: '~Done' }; // the "Done" button for click picture

  editPhotoHeader = { app: '//*[@text="Edit Photo"]' }; // The "Edit Photo Page"

  doneCropButton = { app: '~Crop' }; // the done Crop button

  editFullNameButton = { web: '//div[contains(text(),"Full Name")]//following-sibling::span' };

  editNomineeButton = { web: '//div[contains(text(),"Nominee")]//following-sibling::span' };

  editEmailButton = { web: '//div[contains(text(),"Email")]//following-sibling::span' };

  editMobileNumberButton = { web: '//div[contains(text(),"obile Number")]//following-sibling::span' };

  editBankButton = { web: '//div[contains(text(),"Bank")]//following-sibling::span' };

  enterFullName = { web: '//input[@id="name"]' };

  enterYear = {web: '//input[@name="year"]'};

  enterPan = {web: '//input[@name="pan"]'};

  enterDate = {web: '//input[@name="date"]'};

  enterMonth = {web: '//input[@name="month"]'};

  updateChangesButton = { web: '//button[contains(text(),"Update Changes")]' };

  backButton = { web: '//span[@text="Back"]' };

  enterNewEmail = { web: '//input[@id="new-email"]' };

  confirmNewEmail = { web: '//input[@id="new-email-confirmation"]' };

  enterNewMobileNumber = { web: '//input[@id="new-phone"]' };

  changeNameHeader = { web: '//*[contains(text(),"Current Full Name")]' };

  changeNomineeHeader = { web: '//*[contains(text(),"Nominee Full Name")]' };

  changeBankHeader = { web: '//*[contains(text(),"Account Type")]' };

  changeEmailHeader = { web: '//*[contains(text(),"Current Email")]' };

  changeMobileHeader = { web: '//*[contains(text(),"Current Mobile Number")]' };

  accountHolderName = { web: '//*[@id="account-holder-name"]' };

  accountNumber = { web: '#account-number' };

  bankIFSCCode = { web: '#ifsc-code' };

  returnToHome = { web: '//*[contains(text(),"Return to Home")]' };
}

module.exports = new PersonalInfoObjects();
