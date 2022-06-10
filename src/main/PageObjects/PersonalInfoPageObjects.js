class PersonalInfoPageObjects {

    updatePicture = "//div[text()='Update Picture']"; //update picture link
    fileUploadButton = "p.hide-on-med-and-down"; //File upload button
    inputFile = "input#file";  //File input dialog
    submitButton = "//button[text()='Submit']";
}

module.exports = new PersonalInfoPageObjects()