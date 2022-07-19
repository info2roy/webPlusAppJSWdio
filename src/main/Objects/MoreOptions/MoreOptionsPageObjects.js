class MoreOptionsPageObjects {

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

}
module.exports = new MoreOptionsPageObjects();
