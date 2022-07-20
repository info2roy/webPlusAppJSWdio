class MoreOptionsPageObjects {

  scripboxImage = {
    web: '//img[@src="/images/logos/scripbox-orange.svg"]'
  };

  bellImage = {
    web: '//img[@src="/images/icons/menu/notifications-unread.svg"]'
  };

  supportImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/support.svg"]'
  };

  addAFamilyMemberButton = {
    web: '//button/div[text()="Add a family member"]'
  };

  yourProfileHeader = {
    web: '//text[text()="Your Profile"]'
  };

  yourProfileImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/account-information.svg"]'
  };

  appSettingsHeader = {
    web: '//text[text()="App Settings"]'
  };

  appSettingsImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/settings-medium.svg"]'
  };

  personalInfoText = {
    app: 'Personal information'
  };

  personalInfoOption = {
    web: '//div[text()="Personal Information"]',
    desktop: 'span.test-personal-information',
    app: '//android.widget.TextView[@text="Personal information"]',
  };

  accountFamilyInformationOption = {
    web: '//div[text()="Account & Family Information"]'
  };

  statementsAndTaxReportsOption = {
    web: '//div[text()="Statements & Tax Reports"]'
  };

  notificationPreferencesOption = {
    web: '//div[text()="Notification Preferences"]'
  };
  notificationPreferencesOptionText = {
    app: 'Notification Preferences'
  };

  whatsappNotificationsOption = {
    web: '//div[text()="Whatsapp Notifications"]'
  };

  aboutScripboxOption = {
    web: '//div[text()="About Scripbox"]'
  };

  referAFriendOption = {
    web: '//div[text()="Refer a Friend"]'
  };

  giveFeedbackOption = {
    web: '//div[text()="Give Feedback"]'
  };

  logoutOption = {
    web: '//div[text()="Logout"]'
  };

  whatsAppImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/whatsapp.svg"]'
  };

  linkedInImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/linkedin.svg"]'
  };

  facebookImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/facebook.svg"]'
  };

  twitterImage = {
    web: '//img[@src="/images/icons/interactive-utility/black/twitter.svg"]'
  };
}
module.exports = new MoreOptionsPageObjects();
