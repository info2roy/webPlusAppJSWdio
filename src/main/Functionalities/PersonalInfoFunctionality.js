const PersonalInfoPage = require('../Pages/PersonalInfoPage');

class PersonalInfoFunctionality {
  async profileInfoPageLaunched() {
    return (await PersonalInfoPage.profileInfomationHeaderIsDisplayed());
  }

  async updateProfilePicture() {
    await PersonalInfoPage.clickUpdatePicture();
    await PersonalInfoPage.clickCameraPictureAndUpdate();
    await PersonalInfoPage.uploadFile();
  }

  async updateProfileData(value) {
    if(PersonalInfoPage.checkEditHeader(value)) {
      PersonalInfoPage.enterNewData(value);
    }
  }
}
module.exports = new PersonalInfoFunctionality();
