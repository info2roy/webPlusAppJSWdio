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

  personalInfoText = 'Personal information';

  personalInfoOption = {
    web: '//div[text()="Personal Information"]',
    desktop: 'span.test-personal-information',
    app: '//android.widget.TextView[@text="Personal information"]',
  };

  accountFamilyInformationOption = {
    web: '//div[text()="Account & Family Information"]'
  };

  statementsAndTaxReportsText = 'Statements & reports';

  accountFamilyInformationOptionText = 'Account & Family Information';

  statementsAndTaxReportsOption = {
    web: '//div[text()="Statements & Tax Reports"]',
    app: '//android.widget.TextView[@text="Statements & reports"]'
  };

  statementsAndTaxReportsOptionText = 'Statements & Tax Reports';

  notificationPreferencesOption = {
    web: '//div[text()="Notification Preferences"]'
  };

  notificationPreferencesOptionText = 'Notification Preferences';

  whatsappNotificationsOption = {
    web: '//div[text()="Whatsapp Notifications"]'
  };

  whatsAppNotificationsOptionText = 'Whatsapp Notifications';

  //Begin About Scripbox
  aboutScripboxOption = {
    web: '//div[text()="About Scripbox"]'
  };

  aboutScripboxOptionText = 'About Scripbox';

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

  aboutScripboxPageCompanyPageProperty(propertyName) {
    return {
      web: `//td[text()="${propertyName}"]/following-sibling::td`
    };
  }

  aboutScripboxCompanyDetails = {
    'Name': 'Scripbox.com India Private Limited',
    'Incorporation': 'Incorporated in India on January 10, 2012\nRegistered as a private limited company under the (Indian) Companies Act, 1956',
    'Corporate office': 'Indiqube @ The Leela Galleria 3rd Floor,\nNo. 23, Old Airport Road,\nBengaluru - 560008, India.',
    'Phone': '1800-102-1265',
    'Email': 'Press & Media: mediarelations@scripbox.com\nBusiness Enquiries: businessproposals@scripbox.com\nCustomer Support: help@scripbox.com',
    'Website': 'https://invest.scripbox.com',
    'Service Providers': 'BillDesk (IndiaIdeas.com Limited)\nExotel (Exotel Techcom Pvt. Ltd.)\nGeotrust Inc.\nGoogle Analytics (Google Inc.)\nScripbox Advisors Pvt. Ltd.\nTechProcess Payment Services Limited\nPi31 Labs Private Limited',
    'Certification': 'Registered as a corporate distributor of mutual funds with the Association of Mutual Funds in India.\nAMFI Registration Number ARN-84967',
    'Legal Compliance': 'Mr. Sanjiv Singhal ( sanjiv_singhal@scripbox.com )'
  };

  //End About Scripbox

  //Begin Refer A Friend
  referAFriendOption = {
    web: '//div[text()="Refer a Friend"]'
  };

  referAFriendOptionText = 'Refer a Friend';

  referAFriendPageHeader = {
    web: '(//div[text()="Refer a Friend"])[last()]'
  };

  referAFriendPageSummary = {
    web: '//div/h3[text()="Give your friends the gift of financial wellness."]'
  };

  referAFriendSocialMediaLabel(socialMedia) {
    return {
      web: `//span[text()="${socialMedia}"]`
    };
  }

  referAFriendSocialMediaImageLink(socialMedia) {
    return {
      web: `//span[text()="${socialMedia}"]/preceding-sibling::span[2]/img`
    };
  }

  referAFriendSocialMediaHyperlink(socialMedia) {
    return {
      web: `//span[text()="${socialMedia}"]/parent::a`
    };
  }

  //End Refer A Friend

  giveFeedbackOption = {
    web: '//div[text()="Give Feedback"]'
  };

  giveFeedbackOptionText = 'Give Feedback';

  giveFeedbackPageHeader = {
    web: '//div[text()="Feedback on the new Scripbox experience"]'
  };

  logoutOption = {
    web: '//div[text()="Logout"]',
    app: '//android.widget.TextView[@text="Logout"]'
  };

  logoutOptionText = 'Logout';

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
