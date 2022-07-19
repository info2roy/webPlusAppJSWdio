const Utils = require('../../../support/Utils/Utils');
const MoreOptionsPageObjects = require('../../Objects/MoreOptions/MoreOptionsPageObjects');
const Device = require('../../../support/libraries/Device');

class MoreOptionsPage {

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsPageObjects.personalInfoText);
    }
    await Utils.clickElement(MoreOptionsPageObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    await Utils.clickElement(MoreOptionsPageObjects.accountFamilyInformationOption);
  }

}
module.exports = new MoreOptionsPage();
