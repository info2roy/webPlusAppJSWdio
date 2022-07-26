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

  async updateProfileData(value) {
    await PersonalInfoPage.clickEditButton(value);
    await PersonalInfoPage.checkEditHeader(value);
    await PersonalInfoPage.enterNewData(value);
    // await PersonalInfoPage.clickUpdateButton();
  }
}

module.exports = new PersonalInfoFunctionality();
