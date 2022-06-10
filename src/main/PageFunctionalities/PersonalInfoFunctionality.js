const personalInfoPage = require('../Pages/PersonalInfoPage')

class PersonalInfoPage {

    async validate () {
        await expect(browser).toHaveUrl('/personal-info');
    }

    async updateProfilePic() {

        await personalInfoPage.clickUpdatePicture()
                        .uploadFile();
    }
}
module.exports = new PersonalInfoPage();