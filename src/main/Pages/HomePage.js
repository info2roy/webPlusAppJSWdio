const util = require('../../support/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');

class HomePage {

    selectLoginTab() {
        util.clickElement(homePageObject.loginTab);
    }
}

module.exports = new HomePage();