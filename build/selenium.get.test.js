const {
    Capability,
    Capabilities,
    Builder
} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

(async function example() {

    try {
        console.log("----------------------------------------------------");
        console.log("  STARTING SELENIUM SCRIPT ");
        console.log("----------------------------------------------------");

        console.log("\nCreating options.");
        const firefoxOptions = new firefox.Options();
        firefoxOptions.headless();
        firefoxOptions.setPreference("browser.download.folderList", 2);
        firefoxOptions.setPreference("browser.download.dir", __dirname +"/res/");
        firefoxOptions.setPreference("browser.download.manager.showWhenStarting", false);
        firefoxOptions.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/json,text/plain,application/octet-stream");
        firefoxOptions.setPreference("browser.helperApps.alwaysAsk.force", false);
        firefoxOptions.setPreference("browser.download.panel.shown", false);
        firefoxOptions.setPreference("browser.download.alwaysOpenPanel", false);
        console.log("Done.");

        console.log("\nSetting browser capabilities.");
        const capabilities = Capabilities.firefox();
        capabilities.set(Capability.UNHANDLED_PROMPT_BEHAVIOR, 'accept');
        console.log("Done.");

        console.log("\nStarting browser.");
        const driver = new Builder().forBrowser('firefox').
        withCapabilities(capabilities).
        setFirefoxOptions(firefoxOptions).
        build();
        console.log("Done.");

        try {
            console.log("\nGetting test output and logs.");
            await driver.get('http://127.0.0.1:5500/build/output.html');
            console.log("Done.");
        } finally {
            await driver.quit(); 
        }
    } catch(err) {
        throw "an Error has occurred" + err;
    }
})();