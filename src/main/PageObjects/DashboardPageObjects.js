class DashboardPageObjects {

    helloUser = {web: "//div[text()='HELLO']", androidapp: "//*[@text='HELLO']"};
    moreButton = {web: "//div[text()='More']", desktop: "span.desktop-dropdown-icon", 
        androidapp: "//android.widget.TextView[@text='More']"}
    personalInfoOption = {web: "//div[text()='Personal Information']", desktop: "span.test-personal-information",
        androidapp: "//android.widget.TextView[@text='Personal information']"}
    withdrawButton = {androidapp: "//*[@text='Withdraw']"}
    investMoreButton = {androidapp: "//*[@text='Invest more']"}
}

module.exports = new DashboardPageObjects();