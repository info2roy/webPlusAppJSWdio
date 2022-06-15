class DashboardPageObjects {

    profileDropdown = "span.desktop-dropdown-icon"; //profile dropdown
    personalInfo = "span.test-personal-information"; //personal Information

    // Android locators
    helloUser_android = "//*[@text='HELLO']"
    withdrawButton_android = "//*[@text='Withdraw']"
    investMoreButton_android = "//*[@text='Invest more']"
    
}

module.exports = new DashboardPageObjects();