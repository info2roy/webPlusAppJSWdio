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

  whatsAppNotificationsOptionText = {
    app: 'Whatsapp Notifications'
  };
  //Begin About Scripbox
  aboutScripboxOption = {
    web: '//div[text()="About Scripbox"]'
  };

  aboutScripboxOptionText = {
    app: 'About Scripbox'
  };

  aboutScripboxPageHeader = {
    web: '(//div[text()="About Scripbox"])[last()]'
  };

  aboutScripboxPageServiceAgreement = {
    web: '//div[text()="Service Agreement"]'
  };

  aboutScripboxPageServiceAgreementPageHeader = {
    web: '(//div[text()="Services Agreement"])[last()]'
  };

  aboutScripboxPageServiceAgreementPageAgreementName = {
    web: '//div[text()="SCRIPBOX WEALTH MANAGEMENT SERVICES AGREEMENT"]'
  };

  backButton = {
    web: '//i[text()="chevron_left"]'
  };

  aboutScripboxPageCompany = {
    web: '//div[text()="Company"]'
  };

  aboutScripboxPageCompanyPageHeader = {
    web: '(//div[text()="Company"])[last()]'
  };

  aboutScripboxPageCompanyPageNameLabel = {
    web: '//td[text()="Name"]'
  };

  aboutScripboxPageCompanyPageCompanyName = {
    web: '//td[text()="Scripbox.com India Private Limited"]'
  };
  //End About Scripbox

  //Begin Refer A Friend
  referAFriendOption = {
    web: '//div[text()="Refer a Friend"]'
  };

  referAFriendOptionText = {
    app: 'Refer a Friend'
  };

  referAFriendPageHeader = {
    web: '(//div[text()="Refer a Friend"])[last()]'
  };

  referAFriendPageSummary = {
    web: '//h3[text()="Give your friends the gift of financial wellness."]'
  };
  //End Refer A Friend

  giveFeedbackOption = {
    web: '//div[text()="Give Feedback"]'
  };

  giveFeedbackOptionText = {
    app: 'Give Feedback'
  };

  logoutOption = {
    web: '//div[text()="Logout"]'
  };

  logoutOptionText = {
    app: 'Logout'
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

  communicationsToggleScenarios = {
    '/images/icons/misc/toggle-on.svg': '/images/icons/misc/toggle-off.svg',
    '/images/icons/misc/toggle-off.svg': '/images/icons/misc/toggle-on.svg'
  };
}
module.exports = new MoreOptionsPageObjects();
