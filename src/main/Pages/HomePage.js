const util = require('../../support/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');

class HomePage {

    selectLoginTab() {
        util.clickElement(homePageObject.loginTab);
    }

    clickMenuButton() {
        util.clickElement(homePageObject.menuButton);
    }
}

module.exports = new HomePage();