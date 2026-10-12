import { chromium, firefox, test } from "@playwright/test";

test("Launch browser", async () => {
  // Launch Chromium browser
 const browser = await chromium.launch({channel:'chrome',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
 
});


test.only('launch browser using page fixture',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})