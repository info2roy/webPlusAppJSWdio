class HomePageObjects {
    loginTab = "a[data-action='menu login']"; //open login page from home page via this tab
    signupTab = "a[data-action='menu signup']"; //open signup page from home page via this tab

    //Responsive UI related objects
    //menuButton = "//button[@data-action='menu hamburger']" //three line menu button on response web UI

    // Android locators

    loginButtonHomePage_android = "//*[@text='Login']"
    ScripboxCustomerBanner = "//*[@text='Login']"
    moreOptions_android = '//*[contains(@content-desc,"More")]'

    //refactored objects
    menuButton = {web: "//button[@data-action='menu hamburger']"};
    loginButton = {web: "a[data-action='menu login']", androidapp: "//*[@text='Login']"};
    signupButton = {web: "a[data-action='menu signup']"};
    moreOptions = {androidapp: '//*[contains(@content-desc,"More")]'};
    customerBanner = {androidapp: "//*[@text='Login']"};
    


}

module.exports = new HomePageObjects();