const { Then } = require('@wdio/cucumber-framework');
const WhatappNotificationsFunctionality = require('../../../main/Functionalities/MoreOptions/WhatappNotificationsFunctionality');
const { expect } = require('chai');

Then(/^I should see Whatsapp Notifications Page loaded$/, async () => {
  await console.log('Then I should see Whatsapp Notification Page loaded ');
  expect(await WhatappNotificationsFunctionality.whatsappNotificationsPageLaunched()).to.be.true;
});

Then(/^I can update whatsapp notifications control$/, async () => {
  await console.log('Then I can update whatsapp notifications control');
  await WhatappNotificationsFunctionality.testToggleScenario();
});
