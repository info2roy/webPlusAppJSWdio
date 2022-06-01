export default (selector) => {
  /**
   * Visible state of the give element
   * @type {String}
   */
  const value = $(selector);
  browser.switchToFrame(value);
};
