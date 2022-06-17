const personalInfoPage = require('../Pages/PersonalInfoPage')

class PersonalInfoPage {

    async validate () {
        await personalInfoPage.validate();
    }

    async profileInfoPageLaunched() {
        return (await personalInfoPage.profileInfomationIsDisplayed());
    }

    async updateProfilePic() {

        await personalInfoPage.clickUpdatePicture()
                        .uploadFile();
    }
}
module.exports = new PersonalInfoPage();