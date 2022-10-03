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

  async updateProfileData(option, value) {
    await PersonalInfoPage.checkEditHeader(option);
    await PersonalInfoPage.enterNewData(option, value);
  }

}

module.exports = new PersonalInfoFunctionality();
