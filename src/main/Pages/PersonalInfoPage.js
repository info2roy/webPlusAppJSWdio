const util = require('../../support/Utils');
const personalInfoPageObject =require('../PageObjects/PersonalInfoPageObjects');
const path = require('path');

class PersonalInfoPage  {
    clickUpdatePicture() {
        console.log("clickUpdatePicture")
        util.clickElement(personalInfoPageObject.updatePicture);
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