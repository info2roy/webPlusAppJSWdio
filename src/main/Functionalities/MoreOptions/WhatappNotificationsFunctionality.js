const WhatsappNotificationsPage = require('../../Pages/MoreOptions/WhatsappNotificationsPage');

class WhatsappNotificationsFunctionality {
  async whatsappNotificationsPageLaunched() {
    return (await WhatsappNotificationsPage.whatsappNotificationsPageHeaderIsDisplayed()) &&
    (await WhatsappNotificationsPage.whatsappNotificationsPageBodyIsDisplayed());
  }

  async testToggleScenario() {
    await WhatsappNotificationsPage.whatsappNotificationsTestToggleScenario();
  }
}
module.exports = new WhatsappNotificationsFunctionality();
