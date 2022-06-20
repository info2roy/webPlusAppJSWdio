class PersonalInfoPageObjects {

    updatePicture = "//div[text()='Update Picture']"; //update picture link
    fileUploadButton = "p.hide-on-med-and-down"; //File upload button
    inputFile = "input#file";  //File input dialog
    submitButton = "//button[text()='Submit']";


    
    //android locators
    profileInfomationHeader = "//*[@text='Profile information']" //android profile information page
    updatePicture_android = "//*[@text='Update picture']" //update picture button
    alertForAllowCameraAccess_android = "//*[@text='Allow Scripbox to take pictures and record video?']" //The dialog for "Allow Scripbox to take pictures and record video?"
    alertForAllowCameraAccess_whileUsingTheAppOption_android = "//*[@text='While using the app']" // The option "While using the app"
    alertForAllowMediaAccess_android = "//*[@text='Allow Scripbox to access photos and media on your device?']" //The dialog for "Allow Scripbox to access photos and media on your device?"
    alertForAllowMediaAccess_allowOption_android = "//*[@text='Allow']" //The option "Allow"
    clickPictureButton_android = "~Shutter" //click picture shutter button
    donePictureButton_android = "~Done" //the "Done" button for click picture
    editPhotoHeader_android = "//*[@text='Edit Photo']" //The "Edit Photo Page"
    doneCropButton_android = "~Crop" //the done Crop button

}

module.exports = new PersonalInfoPageObjects()