const WhatsappNotificationsPage = require('../../Pages/MoreOptions/WhatsappNotificationsPage');

class WhatsappNotificationsFunctionality {
  async testToggleScenario() {
    await WhatsappNotificationsPage.whatsappNotificationsTestToggleScenario();
  }
}
module.exports = new WhatsappNotificationsFunctionality();
