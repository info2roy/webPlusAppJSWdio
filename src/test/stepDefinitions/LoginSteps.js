const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const LoginPage = require('../../main/Pages/LoginPage');
const { HDAY_QA, HDAY_DEV } = require('../../config/env');
const Device = require('../../support/libraries/Device');

When(/^I see Healthday logo present in login page$/, async () => {
  await console.log('I see Healthday logo present in login page');
  expect(await LoginPage.validateHealthDayLogo()).to.be.true;
});

When(/^I validate login form present$/, async () => {
  await console.log('I validate login form present');
  expect(await LoginPage.validateLoginForm()).to.be.true;
});

When(/^I validate login email text box present$/, async () => {
  await console.log('I validate login email text box present');
  expect(await LoginPage.validateEmailTextBox()).to.be.true;
});

When(/^I validate login password text box present$/, async () => {
  await console.log('I validate login password text box present');
  expect(await LoginPage.validatePasswordTextBox()).to.be.true;
});

When(/^I validate show password checkbox box present$/, async () => {
  await console.log('I validate show password checkbox box present');
  expect(await LoginPage.validateShowPasswordCheckbox()).to.be.true;
});

When(/^I validate login button present$/, async () => {
  await console.log('I validate login button present');
  expect(await LoginPage.validateloginButton()).to.be.true;
});

When(/^I launch HealthDay "([^"]*)?" environment$/, { timeout: 60000 }, async (env) => {
  switch (env.toString()) {
    case 'HDAY_QA':
      await console.log(`Launching browser url: ${HDAY_QA}`);
      await browser.url(HDAY_QA);
      break;
    case 'HDAY_DEV':
      await console.log(`Launching browser url: ${HDAY_DEV}`);
      await browser.url(HDAY_DEV);
      break;
    default:
      await console.warn(`Environment is not defined in URL list --> ${env.toString()}`);
      break;
  }
});

When(/^I login to "([^"]*)?" environment as "([^"]*)?"$/, { timeout: 60000 }, async (env, user) => {
  await console.log(`Logging in to ${env} for user ${user}`);
  if (Device.isDesktop()) {
    switch (env.toString()) {
      case 'HDAY_QA':
        await console.log(`User login to : ${HDAY_QA}`);
        break;
      case 'HDAY_DEV':
        await console.log(`User login to : ${HDAY_DEV}`);
        break;
      default:
        await console.warn(`Environment is not defined in URL list --> ${env.toString()}`);
        break;
    }
  } else {
    await console.warn(`Log in not possible. Please check environment details & credentials`);
  }
  await LoginPage.performLogin(env, user);
});
