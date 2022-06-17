class PersonalInfoPageObjects {

    updatePicture = "//div[text()='Update Picture']"; //update picture link
    fileUploadButton = "p.hide-on-med-and-down"; //File upload button
    inputFile = "input#file";  //File input dialog
    submitButton = "//button[text()='Submit']";


    profileInfomationText = "//*[text()='Profile information']" //android profile information page
}

module.exports = new PersonalInfoPageObjects()