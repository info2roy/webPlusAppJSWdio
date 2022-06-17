const util = require('../../support/Utils/Utils');
const personalInfoPageObject =require('../PageObjects/PersonalInfoPageObjects');
const path = require('path');
const device = require("../../support/libraries/Device");

class PersonalInfoPage  {

    async validate() {
        if(device.isMobileWeb() || device.isDesktop()) {
            await expect(browser).toHaveUrl('/personal-info');
        } else if(device.isAndroidApp()) {

        }
    }
    
    async profileInfomationIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            let url = await browser.getUrl();
            await expect(url).toContain("personal-info");
            //return util.elementIsDisplayed(personalInfoPageObject.userId);
            return true
        }
        else if (device.isAndroidApp()){
            return util.elementIsDisplayed(personalInfoPageObject.profileInfomationText);
        }
    }

    clickUpdatePicture() {
        if (device.isMobileWeb() || device.isDesktop()){
            console.log("Web: clickUpdatePicture");
            util.clickElement(personalInfoPageObject.updatePicture);
        } else if(device.isAndroidApp()) {
            console.log("Android: clickUpdatePicture");
            util.clickElement(personalInfoPageObject.updatePictureAndroid);
        }
        return this;
    }
    uploadFile() {
        console.log("uploadFile")
        const localFilePath = path.join(__dirname, '../../test/data/desktop.jpg');
        util.uploadFile(localFilePath, personalInfoPageObject.inputFile, personalInfoPageObject.submitButton)
        return this;
    }

}
module.exports = new PersonalInfoPage();