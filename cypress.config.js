// cypress.config.js
const { defineConfig } = require('cypress');
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Możesz dodać dodatkowe konfiguracje wtyczek tutaj
      return cloudPlugin(on, config);
    },
    supportFile: false  // Wyłącz plik wsparcia
  }
});
