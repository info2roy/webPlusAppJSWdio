const personalInfoPage = require('../Pages/PersonalInfoPage')

class PersonalInfoPage {

    async profileInfoPageLaunched() {
        return (await personalInfoPage.profileInfomationIsDisplayed());
    }

    async updateProfilePicture() {

        await personalInfoPage.clickUpdatePicture();
        await personalInfoPage.clickCameraPictureAndUpdate();
        await personalInfoPage.uploadFile();
    }
}
module.exports = new PersonalInfoPage();