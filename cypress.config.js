const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    //video: true, //Enable video recording
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
