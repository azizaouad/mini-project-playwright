const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");

{
  test, expect;
}
require("@playwright/test");

test("comartest", async ({ page }) => {
  await page.goto("https://www.comar.tn");

  await page.click("text=Actualités");

  const actualitésword = page.getByRole("heading", {
    name: "Actualités",
    exact: true,
  });

  await expect(actualitésword).toBeVisible();

  await page
    .locator('input[name="searchMeta"]')
    .type("COMAR Assurances partenaire");
  await page.locator("#edit-submit-actualites").click();

  const partenariatText =
    "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba";
  const partenariatTextstring = partenariatText.toString();
  const link = await page.getByRole("link", {
    name: partenariatTextstring,
  });
  await expect(link).toBeVisible();

  await page.close();

  // //  url
  // const pageurl = page.url();
  // await expect(page).toHaveURL("https://www.comar.tn/actualites");

  // // title

  // const pagetitle = page.title();
  // console.log(pagetitle);
  // await expect(page).toHaveTitle(
  //   "COMAR Assurances, Compagnie d'assurance Tunisie | Assurances Particulier"
  // );
});
