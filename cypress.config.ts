import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: "cypress/tests/unit/**/*.cy.{js,jsx,ts,tsx}"
  },
});
