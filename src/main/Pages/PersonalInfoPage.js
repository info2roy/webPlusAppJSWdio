const path = require('path');
const { expect } = require('chai');
const Utils = require('../../support/Utils/Utils');
const PersonalInfoObjects = require('../Objects/PersonalInfoObjects');
const Device = require('../../support/libraries/Device');

class PersonalInfoPage {
  async profileInfomationHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(PersonalInfoObjects.profileInfomationHeader);
  }

  async clickUpdatePicture() {
    await Utils.clickElement(PersonalInfoObjects.updatePictureOption);
    if (Device.isAndroidApp()) {
      await console.log('Android: clickUpdatePicture');
      expect(await Utils.elementIsDisplayed(PersonalInfoObjects.alertForAllowCameraAccess)).to.be.true;
    }
  }

  async clickCameraPictureAndUpdate() {
    if (Device.isAndroidApp()) {
      await Utils.clickElement(PersonalInfoObjects.alertForAllowCameraAccess_whileUsingTheAppOption);
      expect(await Utils.elementIsDisplayed(PersonalInfoObjects.alertForAllowMediaAccess)).to.be.true;
      await Utils.clickElement(PersonalInfoObjects.alertForAllowMediaAccess_allowOption);
      await Utils.clickElement(PersonalInfoObjects.clickPictureButton);
      expect(await Utils.elementIsDisplayed(PersonalInfoObjects.donePictureButton)).to.be.true;
      await Utils.clickElement(PersonalInfoObjects.donePictureButton);
      expect(await Utils.elementIsDisplayed(PersonalInfoObjects.editPhotoHeader)).to.be.true;
      await Utils.clickElement(PersonalInfoObjects.doneCropButton);
    }
  }

  async uploadFile() {
    if (Device.isMobileWeb() || Device.isDesktop()) {
      await console.log('Web: uploadFile');
      const localFilePath = path.join(__dirname, '../../test/data/images/desktop.jpg');
      await Utils.uploadFile(localFilePath, PersonalInfoObjects.fileInput, PersonalInfoObjects.submitPictureButton);
    }
  }
}
module.exports = new PersonalInfoPage();
