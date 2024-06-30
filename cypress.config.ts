import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_, __) {},
    baseUrl: "http://localhost:3030",
    specPattern: "cypress/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: "cypress/tests/unit/**/*.cy.{js,jsx,ts,tsx}",
  },
});
