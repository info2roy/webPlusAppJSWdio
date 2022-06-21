class DashboardPageObjects {

    
    profileDropdown = "span.desktop-dropdown-icon"; //profile dropdown
    personalInfo = "span.test-personal-information"; //personal Information

    moreButton = "//div[text()='More']" //more button on the dashboard page after login
    personalInfoResponsive = "//div[text()='Personal Information']" //personal information

    //helloUser = "//*[@text='HELLO']"


    // Android locators
    helloUser_android = "//*[@text='HELLO']"
    withdrawButton_android = "//*[@text='Withdraw']"
    investMoreButton_android = "//*[@text='Invest more']"
    moreButton_android = "//android.widget.TextView[@text='More']" //more button on the dashboard page after login
    personalInfo_android = "//android.widget.TextView[@text='Personal information']" //personal information

    helloUser = {web: "//*[@text='HELLO']", androidapp: "//*[@text='HELLO']"};
    
}

module.exports = new DashboardPageObjects();