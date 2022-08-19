module.exports = {
  MYSCRIPBOX: process.env.MYSCRIPBOX_URL || process.env.MYSCRIPBOX_URL_CI || 'https://stag-myscripbox-2-feature-qa-automation.scripbox.org',
  MYSCRIPBOX_API: process.env.MYSCRIPBOX_API_URL || process.env.MYSCRIPBOX_API_URL_CI || 'https://stag-myscripboxapi-2-feature-qa-automation.scripbox.org',
  ANDROMEDA: process.env.ANDROMEDA_URL || process.env.ANDROMEDA_URL_CI || 'https://stag-andromeda-2-feature-qa-automation.scripbox.org',
  MOCKAPI: process.env.MOCKAPI_URL || process.env.MOCKAPI_URL_CI || 'https://inte-mockapi-128-master.scripbox.org',
  SELENIUM_HUB: process.env.SELENIUM_HUB_URL || process.env.SELENIUM_HUB_URL_CI,
  SLEEP_TIME_IN_MS_AFTER_EACH_STEP: process.env.SLEEP_MS_AFTER_EACH_STEP || process.env.SLEEP_MS_AFTER_EACH_STEP_CI || 0
};
