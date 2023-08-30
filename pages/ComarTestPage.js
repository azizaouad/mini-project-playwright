const { expect } = require("@playwright/test");

exports.ComarTestPage = class ComarTestPage {
  constructor(page) {
    this.page = page;
    this.searchbutton = "#edit-submit-actualites";
    this.searchtext = 'input[name="searchMeta"]';
  }

  async navigate(url) {
    await this.page.goto(url);
  }
  async ClickOnActualitesWord(linkText) {
    await this.page.click(`text=${linkText}`);
  }
  async search(text) {
    await this.page.locator(this.searchtext).fill(text);
    await this.page.locator(this.searchbutton).click();
  }
  async CheckText(resultText) {
    return await this.page.isVisible(`text=${resultText}`);
  }
};
