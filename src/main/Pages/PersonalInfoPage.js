const path = require('path');
const { expect } = require('chai');
const Utils = require('../../support/Utils/Utils');
const PersonalInfoObjects = require('../Objects/PersonalInfoObjects');
const Device = require('../../support/libraries/Device');
const faker = require('@faker-js/faker');

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

  async clickEditFullName() {
    await console.log('Starting edit full name');
    await Utils.clickElement(PersonalInfoObjects.editFullNameButton);
  }

  async enterNewData(value) {
    await console.log('Entering '+value.toString());
    switch (value.toString()) {
      case 'user email':
        await Utils.setInputField(faker.internet.email(), PersonalInfoObjects.enterFullName);
        break;
      case 'mobile number':
        await Utils.setInputField(faker.phone.phoneNumber('829#######'), PersonalInfoObjects.enterNewMobileNumber);
        break;
      case 'user name':
        await Utils.setInputField(faker.name.firstName(), PersonalInfoObjects.enterNewMobileNumber);
        break;
      default:
        await console.warn('Link type is not valid');
    }
  }

  async clickUpdateButton() {
    await console.log('Saving changes');
    await Utils.clickElement(PersonalInfoObjects.updateChangesButton);
  }

  async checkEditHeader(value) {
    await console.log('Checking header displayed of '+value.toString());
    switch (value.toString()) {
      case 'user email':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeEmailHeader);
      case 'mobile number':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeMobileHeader);
      case 'user name':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeNameHeader);
      default:
        await console.warn('Link type is not valid');
    }
    return this;
  }
}
module.exports = new PersonalInfoPage();
