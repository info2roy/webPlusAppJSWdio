const util = require('../../support/Utils/Utils');
const wisdomPageObject = require('../PageObjects/WisdomPageObjects')

class WisdomPage {

    async selectWisdomTab_android() {
        await util.clickElement(wisdomPageObject.wisdomButton_android);
        // return this;
    }

    checkIfWisdomPageIsDisplayed_android(){
        util.elementIsDisplayed(wisdomPageObject.newsThatMatters_android)
        return this;
    }

    async scrollToStartCheckup(){
        await util.scrollUntilTextIntoView(wisdomPageObject.startCheckup_android)
        return this;
    }

    async clickOnStartCheckup() {
        await util.clickElement(wisdomPageObject.startCheckup_android);
        return this;
    }

    async scrollToBlogs(){
        await util.scrollUntilTextIntoView(wisdomPageObject.wisdomPageFirstBlog_android)
        return this;
    }

    async clickOnFirstBlog(){
        await util.clickElement(wisdomPageObject.wisdomPageFirstBlog_android);
        return this;
    }

    async checkBlogIsOpen(){
        return util.elementIsDisplayed(wisdomPageObject.wisdomPageBlogSubscriptionMessage)
    }
    


}

module.exports = new WisdomPage();