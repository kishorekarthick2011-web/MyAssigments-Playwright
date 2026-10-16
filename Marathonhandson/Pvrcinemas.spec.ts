import { expect, test } from "@playwright/test";


test('Automate PVRCinemas',async({page})=>{
    
    await page.goto('https://www.pvrcinemas.com/',{waitUntil:'domcontentloaded',timeout:60000});
   
    const currenturl = page.url()
    console.log(currenturl) // to get current page url

    await page.locator("//span[text()='Cinema']").click() // to choose cinema option
   
    await page.locator("//span[text()='Select Cinema']").click() // to choose select cinema dropdown
    await page.locator("//span[text()='INOX Patel Nagar Delhi']").click() // to select the cinema from the dropdown
    await page.locator('//span[contains(text(),"Today")]').click()   //to select the date from the date dropdown
    await page.locator('//li[@class="p-dropdown-item"]/span[(text()="STREET FIGHTER")]').click() // to select the movie from the dropdown
    
    await page.getByText('08:20 PM').click() // to select the time from the dropdown
    await page.locator('//button[contains(@type,"submit")]/span[(text()="Book")]').click() // to click the book button
    await page.getByText('Accept').click() // to click the accept button
    await page.locator('//span[@id="EX.Executive|N:7"]').click() // to select the seat from the seat dropdown
    await expect(page.locator('//span[@id="EX.Executive|N:7"]')).toBeVisible() // to verify the seat is selected or not
    await expect(page.getByText('361.92')).toHaveText('361.92') // to verify the total amount is correct or not
    const pageTitle = await page.title()
    console.log(pageTitle) 
    expect(pageTitle).toBe('PVR Cinemas') // to get the page title
    await page.getByText('Proceed').click() // to click the proceed button
    await page.waitForTimeout(5000)
     

})