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
}
module.exports = new PersonalInfoFunctionality();
