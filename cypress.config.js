const { defineConfig } = require("cypress");
//const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on,config){

}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      //specPattern: 'constructweek/project/*.js'
      //specPattern: 'cypress/support/constructweekproject/project/*.js'
      specPattern: 'cypress/fixtures/Integration/framework/*.js'
      // implement node event listeners here
    },
});

