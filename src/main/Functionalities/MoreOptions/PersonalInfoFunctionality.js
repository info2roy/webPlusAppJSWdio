const PersonalInfoPage = require('../../Pages/MoreOptions/PersonalInfoPage');

class PersonalInfoFunctionality {

  async updateProfilePicture() {
    await PersonalInfoPage.clickUpdatePicture();
    await PersonalInfoPage.clickCameraPictureAndUpdate();
    await PersonalInfoPage.uploadFile();
  }

  async updateChanges() {
    await PersonalInfoPage.clickUpdateButton();
  }

  async clickEdit(option) {
    await PersonalInfoPage.clickEditButton(option);
  }

}

module.exports = new PersonalInfoFunctionality();
