import React, { useState } from "react";
import PageFooter from "@components/PageFooter";
import {
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";

const Footer = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <PageFooter />
    </ColorSchemeProvider>
  );
};

describe("PageFooter Component", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it("renders the footer", () => {
    cy.get("#page-footer").should("exist");
  });

  it("contains LinkedIn link", () => {
    cy.get("#linkedin-link")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/adithya-chandrasekar/",
      )
      .and("have.attr", "target", "_blank");
  });

  it("contains GitHub repository link", () => {
    cy.get("#github-repo-link")
      .should(
        "have.attr",
        "href",
        "https://github.com/adithyachan/adithyachandrasekar.com",
      )
      .and("have.attr", "target", "_blank")
      .and("contain", "Github Repository");
  });

  it("displays copyright information", () => {
    cy.get("#copyright").should("contain", "© Adithya Chandrasekar 2023");
  });

  it("contains GitHub profile link", () => {
    cy.get("#github-profile-link")
      .should("have.attr", "href", "https://github.com/adithyachan")
      .and("have.attr", "target", "_blank");
  });

  it("contains color scheme toggle", () => {
    cy.get("#color-scheme-toggle").should("exist");
  });

  it("toggles color scheme when clicked", () => {
    cy.get("#color-scheme-toggle").should(
      "have.css",
      "color",
      "rgb(95, 61, 196)",
    );
    cy.get("#color-scheme-toggle").click();
    cy.get("#color-scheme-toggle").should(
      "have.css",
      "color",
      "rgb(250, 176, 5)",
    );
  });
});
