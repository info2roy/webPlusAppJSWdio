const util = require('../../support/Utils/Utils');
const personalInfoPageObject =require('../PageObjects/PersonalInfoPageObjects');
const path = require('path');
const device = require("../../support/libraries/Device");
const expect = require('chai').expect;

class PersonalInfoPage  {
    
    async profileInfomationIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            let url = await browser.getUrl();
            await expect(url).toContain("personal-info");
            //return util.elementIsDisplayed(personalInfoPageObject.userId);
            return true
        }
        else if (device.isAndroidApp()){
            return util.elementIsDisplayed(personalInfoPageObject.profileInfomationHeader);
        }
    }

    async clickUpdatePicture() {
        if (device.isMobileWeb() || device.isDesktop()){
            console.log("Web: clickUpdatePicture");
            await util.clickElement(personalInfoPageObject.updatePicture);
        } else if(device.isAndroidApp()) {
            console.log("Android: clickUpdatePicture");
            await util.clickElement(personalInfoPageObject.updatePicture_android);
            expect(await util.elementIsDisplayed(personalInfoPageObject.alertForAllowCameraAccess_android)).to.be.true;
        }
    }
    async clickCameraPictureAndUpdate() {
        if(device.isAndroidApp()) {
            await util.clickElement(personalInfoPageObject.alertForAllowCameraAccess_whileUsingTheAppOption_android);
            expect(await util.elementIsDisplayed(personalInfoPageObject.alertForAllowMediaAccess_android)).to.be.true;
            await util.clickElement(personalInfoPageObject.alertForAllowMediaAccess_allowOption_android);
            await util.clickElement(personalInfoPageObject.clickPictureButton_android);
            await util.clickElement(personalInfoPageObject.donePictureButton_android);
            expect(await util.elementIsDisplayed(personalInfoPageObject.editPhotoHeader_android)).to.be.true;
            await util.clickElement(personalInfoPageObject.doneCropButton_android);

        }
    }
    async uploadFile() {
        if (device.isMobileWeb() || device.isDesktop()) {
            console.log("Web: uploadFile")
            const localFilePath = path.join(__dirname, '../../test/data/desktop.jpg');
            await util.uploadFile(localFilePath, personalInfoPageObject.inputFile, personalInfoPageObject.submitButton)
        }
    }

}
module.exports = new PersonalInfoPage();