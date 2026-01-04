const { defineConfig } = require('cypress');

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  experimentalMemoryManagement: true,
  screenshotOnRunFailure: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    testIsolation: true,
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
  },
});