const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    hideWarnings:true,
    reportRawErrors: false,
  },
});
