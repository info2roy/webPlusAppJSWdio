class WisdomPageObjects {

    // Web locators 

    // Android locators
    wisdomButton = {androidapp:"//*[@text='Wisdom']"}
    startCheckup = {androidapp:"//*[@text='START CHECKUP' or @text='RESUME CHECKUP']"}
    newsThatMatters = {androidapp:"//*[@text='News that matters']"}
    wisdomPageBlogSection={androidapp:"//*[@text='Blogs']"}
    wisdomPageFirstBlog = {androidapp:"//*[@text='BLOG']"}
    wisdomPageBlogSubscriptionMessage = {androidapp:"//*[@text='Practical wealth creation insights for you.'']"}
    wisdomPageBlogInvestmentStrategy = {androidapp:"//*[@text='Investment Strategy']"}
    
    
    
    
}

module.exports = new WisdomPageObjects();