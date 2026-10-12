import { test } from "@playwright/test";

test("Learn xpath", async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("//div[@id='username_container']/input[@id='username']").fill("yuvarani.sekar@testleaf.com") //parenttochild

    await page.locator("#Login").click()// Cssselector

    await page.locator("//label[text()='Password']/following-sibling::input[@id='password']").fill("TestLeaf@2028") //sibling

    await page.locator("//form[@id='login_form']/input[@id='Login']").click()

    await page.waitForTimeout(10000)




})