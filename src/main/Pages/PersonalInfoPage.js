const util = require('../../support/Utils');
const personalInfoPageObject =require('../PageObjects/PersonalInfoPageObjects');
const path = require('path');

class PersonalInfoPage  {
    clickUpdatePicture() {
        console.log("clickUpdatePicture")
        util.clickElement(personalInfoPageObject.updatePicture);
    }
    uploadFile() {
        console.log("uploadFile")
        const localFilePath = path.join(__dirname, '../../test/data/desktop.jpg');
        util.uploadFile(localFilePath, personalInfoPageObject.inputFile, personalInfoPageObject.submitButton)
    }

}
module.exports = new PersonalInfoPage();