export default (selector) => {
  browser.waitUntil(() => $(selector).isDisplayed() === true, {
    timeout: 20000,
    interval: 2000,
    timeoutMsg: 'expected text to be different after 5s',
  })

  return $(selector)
}
