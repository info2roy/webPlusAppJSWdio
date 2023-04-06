const Utils = require('../../support/Utils/Utils');
const UserPageObjects = require('../Objects/UsersPageObjects');
require('dotenv').config();

class UsersPage {

  async clickAddNewUser() {
    await Utils.clickElement(UserPageObjects.addNewUserButton);
  }

  async createUserModalOpen() {
    return (await Utils.elementIsDisplayed(UserPageObjects.createUserModal));
  }

  async selectUserRole(role) {
    switch (role) {
      case 'Admin':
        await console.log('admin');
        await Utils.clickElement(UserPageObjects.userRoleAdmin);
        break;
      case 'Client':
        await console.log('client');
        await Utils.clickElement(UserPageObjects.userRoleClient);
        break;
      default:
        await console.log(`${role} Not found.`);
    }
  }

  async checkDeleteButtonForUser(user) {
    return (await Utils.elementIsDisplayed(UserPageObjects.deleteButtonForUser(user)));
  }

  async clickDeleteButtonForUser(user) {
    return (await Utils.clickElement(UserPageObjects.deleteButtonForUser(user)));
  }

  async checkDeleteDialog(user) {
    return (await Utils.elementIsDisplayed(UserPageObjects.deleteQuestionForUser(user)));
  }

}

module.exports = new UsersPage();
