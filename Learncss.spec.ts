import { test } from "@playwright/test";

test ("Learn Css", async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("[id='username']").fill("yuvarani.sekar@testleaf.com")

    await page.locator("#Login").click()

    await page.locator("[class='input r4 wide mb16 mt8 password']").fill("TestLeaf@2028")

    await page.locator("[type='submit']").click()

    await page.waitForTimeout(5000)


})