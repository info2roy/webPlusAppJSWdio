class HomePageObjects {
    loginTab = "a[data-action='menu login']"; //open login page from home page via this tab

    //Responsive UI related objects
    menuButton = "button[data-action='menu hamburger']" //three line menu button on response web UI
}

module.exports = new HomePageObjects();