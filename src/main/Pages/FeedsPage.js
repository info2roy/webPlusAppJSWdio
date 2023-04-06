const Utils = require('../../support/Utils/Utils');
const FeedsPageObjects = require('../Objects/FeedsPageObjects');
require('dotenv').config();

class UsersPage {

  async createFeedModalOpen() {
    return (await Utils.elementIsDisplayed(FeedsPageObjects.createFeedModal));
  }

  async selectClient(clientName) {
    await Utils.clickElement(FeedsPageObjects.clientUserNameDropdown);
    await Utils.clickElement(FeedsPageObjects.selectFromDropdown(clientName));
  }

  async selectProductType(productName) {
    await Utils.clickElement(FeedsPageObjects.productTypeDropdown);
    await Utils.clickElement(FeedsPageObjects.selectFromDropdown(productName));
  }

  async clickEncryptToggleButton() {
    await Utils.clickElement(FeedsPageObjects.encryptToggleButton);
  }
}

module.exports = new UsersPage();
