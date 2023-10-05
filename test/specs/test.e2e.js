import { expect } from '@wdio/globals'
import LoginPage from "./../pages/main.page.js"

describe('webdriver ', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title)
    
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });
});

