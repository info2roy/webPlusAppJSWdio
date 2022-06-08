const personalInfoPage = require('../Pages/PersonalInfoPage')

class PersonalInfoPage {

    async validate () {
        await expect(browser).toHaveUrl('/personal-info');
    }

    async clickUpdatePicture() {
        await personalInfoPage.clickUpdatePicture();
        await browser.pause(2000);
    }

    async uploadFile() {
       await personalInfoPage.uploadFile();
       await browser.pause(2000);
    }
}
module.exports = new PersonalInfoPage();