import { test  } from "@playwright/test";

test ("Learn Basic xpath", async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/login")

    await page.locator("//input[@name='USERNAME']").fill("democsr") //Attribute Xpath

    await page.locator("//input[@name='PASSWORD']").fill("crmsfa") 

    await page.locator("//input[contains(@class, 'Submit')]").click() //Partial atrribute Xpath

   // await page.locator("//a[text()='CRM/SFA']").click() //Textbased Xpath

   await page.locator("//a[contains(text(),'CRM')]").click() //Partial textbased Xpath

    await page.waitForTimeout(5000)

})