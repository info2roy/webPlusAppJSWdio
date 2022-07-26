class WhatsappNotificationsObjects {
  whatsappPreferencesPageHeader = {
    web: '(//div[text()="WhatsApp Preferences"])[last()]'
  };

  whatsappPreferencesPageSummmaryHeader = {
    web: '(//div[text()="One place to track them all"])[last()]'
  };

  enableWhatsapp = {
    web: '//div[text()="WhatsApp"]'
  };

  enableWhatsappImage = {
    web: '//img[@class="toggle-icon"]'
  };
}
module.exports = new WhatsappNotificationsObjects();
