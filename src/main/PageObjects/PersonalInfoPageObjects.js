class PersonalInfoPageObjects {

    updatePicture = "//div[contains(text(), 'Update Picture')]"; //update picture link
    fileUploadButton = "p.hide-on-med-and-down"; //File upload button
    inputFile = "input#file";  //File input dialog
    submitButton = "//button[contains(text(), 'Submit')]";
}

module.exports = new PersonalInfoPageObjects()