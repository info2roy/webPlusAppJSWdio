class FeedsPageObjects {

  createFeedModal = { web: '//p[text()="Create feed"]/ancestor::div[1]' };

  clientUserNameDropdown = { web: '//*[@id="select-label-Client username"]//following-sibling::div' };

  selectFromDropdown(name) {
    return {
      web: `//ul//li[text()="${name}"]`
    };
  }

  productTypeDropdown = { web: '//*[@id="productType"]/ancestor::div[@data-testid="productType"]' };

  encryptToggleButton = { web: '//p[text()="Encrypt with credentials:"]//ancestor::div[1]//following-sibling::div//input' };

}

module.exports = new FeedsPageObjects();
