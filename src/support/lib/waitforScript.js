export default () => {
  browser.executeAsync((done) => {
    setTimeout(done, 10000);
  });
};
