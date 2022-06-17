class PersonalInfoPageObjects {

    updatePicture = "//div[text()='Update Picture']"; //update picture link
    fileUploadButton = "p.hide-on-med-and-down"; //File upload button
    inputFile = "input#file";  //File input dialog
    submitButton = "//button[text()='Submit']";


    profileInfomationText = "//android.widget.TextView[text()='Profile information']" //android profile information page
    updatePictureAndroid = "//android.widget.TextView[text()='Update picture']" //update picture button
}

module.exports = new PersonalInfoPageObjects()