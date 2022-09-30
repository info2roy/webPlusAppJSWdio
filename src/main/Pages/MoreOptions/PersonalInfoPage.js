const path = require('path');
const { expect } = require('chai');
const Utils = require('../../../support/Utils/Utils');
const PersonalInfoObjects = require('../../Objects/MoreOptions/PersonalInfoObjects');
const Device = require('../../../support/libraries/Device');
// const faker = require('@faker-js/faker');

class PersonalInfoPage {
  async profileInfomationHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(PersonalInfoObjects.profileInfomationHeader);
  }

  async accountFamilyInfoPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(PersonalInfoObjects.accountFamilyInfoPageHeader);
  }

  async mFPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(PersonalInfoObjects.statementsAndTaxReportsHeader);
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
      const localFilePath = path.join(__dirname, '../../../config/data/images/desktop.jpg');
      await Utils.uploadFile(localFilePath, PersonalInfoObjects.fileInput, PersonalInfoObjects.submitPictureButton);
      const imageSrc = await Utils.getElementAttributeBySelector(PersonalInfoObjects.profileImage, 'src');
      expect(imageSrc).to.contain('desktop');
    }
  }

  async clickEditButton(value) {
    await console.log(`Clicking edit button for ${value.toString()}`);
    switch (value.toString()) {
      case 'user name':
        await Utils.clickElement(PersonalInfoObjects.editFullNameButton);
        break;
      case 'nominee':
        await Utils.clickElement(PersonalInfoObjects.editNomineeButton);
        break;
      case 'user email':
        await Utils.clickElement(PersonalInfoObjects.editEmailButton);
        break;
      case 'mobile number':
        await Utils.clickElement(PersonalInfoObjects.editMobileNumberButton);
        break;
      case 'bank':
        await Utils.clickElement(PersonalInfoObjects.editBankButton);
        break;
      default:
        await console.warn(`Edit info type is not valid -->${value.toString()}`);
    }
  }

  async enterNewData(option, value) {
    await console.log(`Entering ${value.toString()}`);
    if (value.toString() == 'Blank') {
      value = '';
    }
    switch (option.toString()) {
      case 'user email':
        await Utils.setInputField(value, PersonalInfoObjects.enterNewEmail);
        await Utils.setInputField(value, PersonalInfoObjects.confirmNewEmail);
        break;
      case 'mobile number':
        await Utils.setInputField(value, PersonalInfoObjects.enterNewMobileNumber);
        break;
      case 'user name':
        await Utils.setInputField(value, PersonalInfoObjects.enterFullName);
        break;
      case 'account number':
        await Utils.setInputField(value, PersonalInfoObjects.accountNumber);
        break;
      case 'account holder':
        await Utils.setInputField(value, PersonalInfoObjects.accountHolderName);
        break;
      case 'IFSC':
        await Utils.setInputField(value, PersonalInfoObjects.bankIFSCCode);
        break;
      case 'bank':
        await Utils.setInputField('12345678901', PersonalInfoObjects.accountNumber);
        await Utils.setInputField('Test Name', PersonalInfoObjects.accountHolderName);
        await Utils.setInputField('HDFC0001852', PersonalInfoObjects.bankIFSCCode);
        break;
      case 'nominee name':
        await Utils.setInputField(value, PersonalInfoObjects.enterFullName);
      case 'nominee':
        await Utils.chooseSelectOptionByVisibleText(PersonalInfoObjects.relationshipDropdown, 'Spouse');
        await Utils.setInputField('UserAB', PersonalInfoObjects.enterFullName);
        await Utils.setInputField('BEJPR4313R', PersonalInfoObjects.enterPAN);
        await Utils.setInputField('1991', PersonalInfoObjects.enterYear);
        await Utils.setInputField('BEJPE4316R', PersonalInfoObjects.enterPan);
        await Utils.setInputField('10', PersonalInfoObjects.enterMonth);
        await Utils.setInputField('11', PersonalInfoObjects.enterDate);
        await Utils.setInputField('Test address to fill', PersonalInfoObjects.enterAddress);
        break;
      default:
        await console.warn('Link type is not valid');
    }
  }

  async readUImessage(message, data) {
    if (message.toString() == 'Blank') {
      message = '';
    }
    switch (data.toString()) {
      case data.toString():
        await console.warn('Validating UI message => ' + message);
        return await Utils.isTextDisplayed(message);
      default:
        await console.warn('Validating UI message out of scope');
    }
  }

  async clickUpdateButton() {
    await console.log('Saving changes');
    await Utils.clickElement(PersonalInfoObjects.updateChangesButton);
  }

  async checkEditHeader(value) {
    await console.log(`Checking header displayed of ${value.toString()}`);
    switch (value.toString()) {
      case 'user email':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeEmailHeader);
      case 'mobile number':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeMobileHeader);
      case 'nominee':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeNomineeHeader);
      case 'bank':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeBankHeader);
      case 'user name':
        return await Utils.elementIsDisplayed(PersonalInfoObjects.changeNameHeader);
      default:
        await console.warn('Link type is not valid');
    }
    return this;
  }
}
module.exports = new PersonalInfoPage();
