const util = require('../../support/Utils/Utils');
const personalInfoPageObject =require('../PageObjects/PersonalInfoPageObjects');
const path = require('path');
const device = require("../../support/libraries/Device");
const expect = require('chai').expect;

class PersonalInfoPage  {
    
    async profileInfomationIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            let url = await browser.getUrl();
            await expect(url).to.contain.oneOf(['personal-info'])
            return true
        }
        else if (device.isAndroidApp()){
            return util.elementIsDisplayed(personalInfoPageObject.profileInfomationHeader);
        }
    }

    async clickUpdatePicture() {
        await util.clickElement(personalInfoPageObject.updatePictureOption);
        if(device.isAndroidApp()) {
            console.log("Android: clickUpdatePicture");
            expect(await util.elementIsDisplayed(personalInfoPageObject.alertForAllowCameraAccess)).to.be.true;
        }
    }
    async clickCameraPictureAndUpdate() {
        if(device.isAndroidApp()) {
            await util.clickElement(personalInfoPageObject.alertForAllowCameraAccess_whileUsingTheAppOption);
            expect(await util.elementIsDisplayed(personalInfoPageObject.alertForAllowMediaAccess)).to.be.true;
            await util.clickElement(personalInfoPageObject.alertForAllowMediaAccess_allowOption);
            await util.clickElement(personalInfoPageObject.clickPictureButton);
            await util.clickElement(personalInfoPageObject.donePictureButton);
            expect(await util.elementIsDisplayed(personalInfoPageObject.editPhotoHeader)).to.be.true;
            await util.clickElement(personalInfoPageObject.doneCropButton);
        }
    }
    async uploadFile() {
        if (device.isMobileWeb() || device.isDesktop()) {
            console.log("Web: uploadFile")
            const localFilePath = path.join(__dirname, '../../test/data/desktop.jpg');
            await util.uploadFile(localFilePath, personalInfoPageObject.fileInput, personalInfoPageObject.submitPictureButton)
        }
    }

}
module.exports = new PersonalInfoPage();