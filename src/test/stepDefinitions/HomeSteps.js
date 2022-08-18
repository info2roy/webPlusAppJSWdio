const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomeFunctionality = require('../../main/Functionalities/HomeFunctionality');
const LoginFunctionality = require('../../main/Functionalities/LoginFunctionality');
const DashboardFunctionality = require('../../main/Functionalities/DashboardFunctionality');
const Device = require('../../support/libraries/Device');
const Utils = require('../../support/Utils/Utils');
const envUrl = require('../../config/env');

Given(/^I am on the scripbox home page$/, async () => {
  await console.log('Given I am on the scripbox home page');
  const platform = Utils.getPlatform();
  Device.setDevice(platform);
  if (Device.isMobileWeb() || Device.isDesktop()) {
    await console.log(`Launching web app mobileweb:${Device.isMobileWeb()} desktop: ${Device.isDesktop()}`);
    await browser.url('/');
  } else if (Device.isAndroidApp()) {
    await console.log('Launching Android app');
    expect(await HomeFunctionality.androidHomePageLaunch()).to.be.true;
  }
});

When(/^I click on menu button$/, async () => {
  await console.log('When I click on menu button');
  await HomeFunctionality.clickMenuButton();
  expect(await HomeFunctionality.webHomePageLaunch()).to.be.true;
});

When(/^I click on login option$/, async () => {
  await console.log('When I click on login option');
  await HomeFunctionality.login();
  expect(await LoginFunctionality.firstLoginPageLaunched()).to.be.true;
});

When(/^I login to Scripbox in "([^"]*)?" for "([^"]*)?"$/, async (env, user) => {
  await console.log('Logging in to ' + env + ' for user ' + user);
  const platform = Utils.getPlatform();
  this.uat = Utils.getUAT(env.toString());
  console.log(`UAT = ${this.uat}`);
  Device.setDevice(platform);
  if (Device.isMobileWeb() || Device.isDesktop()) {
    switch (env.toString()) {
      case 'UAT38':
        await browser.url(envUrl.andromedaUat38);
        await HomeFunctionality.performLogin(env, user);
        break;
      case 'UAT2':
        await browser.url(envUrl.andromedaUat2);
        await HomeFunctionality.performLogin(env, user);
        break;
      case 'MYSCRIPBOX':
        await browser.url(envUrl.myScripBox);
        await HomeFunctionality.performLogin(env, user);
        break;
      case 'MYSCRIPBOX38':
        await browser.url(envUrl.myScripboxUat38);
        await HomeFunctionality.performLogin(env, user);
        break;
      case 'MYSCRIPBOX2':
        await browser.url(envUrl.myScripboxUat2);
        await HomeFunctionality.performLogin(env, user);
        break;
      case 'STAGING':
        await browser.url(envUrl.mockStaging);
        await HomeFunctionality.performLogin(env, user);
      default:
        await console.warn('Environment is not defined in URL list --> ' + env.toString());
        break;
    }
  } else if (Device.isAndroidApp()) {
    expect(await HomeFunctionality.androidHomePageLaunch()).to.be.true;
    await HomeFunctionality.performLoginApp(user);
  }
  await browser.pause(4000); // Adding this pause because we have to manually click on "retry error button" on UI
});

Then(/^I go back to the dashboard page$/, async () => {
  await console.log('Then I go back to the dashboard page');
  console.log(`this.uat = ${this.uat}`);
  await DashboardFunctionality.open(this.uat); //this.uat is coming from world.js
  await DashboardFunctionality.validate();
});
