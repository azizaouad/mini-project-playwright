const { test, expect } = require("@playwright/test");
// const { chromium } = require("playwright");
import { ComarTestPage } from "../pages/ComarTestPage";

{
  test, expect;
}
require("@playwright/test");

test.beforeEach(async ({ page }) => {
  const driver = new ComarTestPage(page);

  await driver.navigate("https://www.comar.tn/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("comartest", async ({ page }) => {
  const driver = new ComarTestPage(page);
  await driver.ClickOnActualitesWord("Actualités");

  const resultText = "Actualités";
  await page.waitForTimeout(3000); // Pause for 3 seconds

  expect(await driver.CheckText(resultText)).toBeTruthy();

  await driver.search("COMAR Assurances partenaire");

  const result_Text =
    "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba";
  await page.waitForTimeout(3000); // Pause for 3 seconds

  expect(await driver.CheckText(result_Text)).toBeTruthy();
});

// await page
//   .locator('input[name="searchMeta"]')
//   .type("COMAR Assurances partenaire");
// await page.locator("#edit-submit-actualites").click();

// const partenariatText =
//   "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba";
// const partenariatTextstring = partenariatText.toString();
// const link = await page.getByRole("link", {
//   name: partenariatTextstring,
// });
// await expect(link).toBeVisible();

// hard assertion : quand il aura une erreur le script s'arrete

//  url

// await expect(page).toHaveURL("https://www.comar.tn/actualites");

// // title

// await expect(page).toHaveTitle(
//   "COMAR Assurances, Compagnie d'assurance Tunisie | Assurances Particulier"
// );

// // soft assertion : meme si il y a une erreur le script continue à s'exécuter

// const pageurl = page.url();
// await expect.soft(page).toHaveURL("https://www.comar.tn/actualitesqqq");

// // check that the word ACTUALITES
// const actualitéswords = page.getByRole("heading", {
//   name: "ACTUALITÉS",
//   exact: true,
// });

// await expect.soft(actualitéswords).toBeVisible();

// // title

// await expect
//   .soft(page)
//   .toHaveTitle(
//     "COMAR Assurances, Compagnie d'assurance Tunisie | Assurances Particulier"
//   );

// await page.close();
