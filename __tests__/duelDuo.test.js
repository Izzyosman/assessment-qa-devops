const { Builder, Capabilities, By } = require("selenium-webdriver");
require('chromedriver');

const chromeOptions = {
  'args': ['--headless'] // Optional: Add any Chrome options you need
};

const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set('chromeOptions', chromeOptions);

// Set the path to the Chrome binary
chromeCapabilities.set('chromeOptions', {
  'binary': '/path/to/chrome/binary',
});

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    driver.get('http://localhost:8000/')
})

afterAll(async () => {
    driver.quit()
})

describe('duel-duo tests',() => {

    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('clicking draw btn displays the bots',async() => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(3000)
        const choicesDiv = await driver.findElement(By.id('choices'))
        const displayed = await choicesDiv.isDisplayed()//return true or false
        // console.log(displayed)
        expect(displayed).toBe(true)

    })

    test('clicking add-to-duo display bot in a new div ',async() => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(4000)
        await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()
        const playerDivDuo = await driver.findElement(By.id('player-duo'))
        const displayed = await playerDivDuo.isDisplayed()
        expect(displayed).toBe(true)
    })


})