module.exports = {
  MYSCRIPBOX: process.env.MYSCRIPBOX_URL_GITLAB || process.env.MYSCRIPBOX_URL || '',
  MYSCRIPBOX_API: process.env.MYSCRIPBOX_API_URL_GITLAB || process.env.MYSCRIPBOX_API_URL || '',
  ANDROMEDA: process.env.ANDROMEDA_URL_GITLAB || process.env.ANDROMEDA_URL || '',
  MOCKAPI: process.env.MOCKAPI_URL_GITLAB || process.env.MOCKAPI_URL || '',
  SELENIUM_HUB: process.env.SELENIUM_HUB_URL_GITLAB || process.env.SELENIUM_HUB_URL || '',
  SLEEP_TIME_IN_MS_AFTER_EACH_STEP: process.env.SLEEP_MS_AFTER_EACH_STEP_GITLAB || process.env.SLEEP_MS_AFTER_EACH_STEP || 0
};
