const { Then } = require('@wdio/cucumber-framework');
const WhatappNotificationsFunctionality = require('../../../main/Functionalities/MoreOptions/WhatappNotificationsFunctionality');

Then(/^I can update whatsapp notifications control$/, async () => {
  await console.log('Then I can update whatsapp notifications control');
  await WhatappNotificationsFunctionality.testToggleScenario();
});
