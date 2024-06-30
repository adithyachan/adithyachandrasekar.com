import React from "react";
import Hero from "@components/Hero";

describe("Hero Component", () => {
  beforeEach(() => {
    const scrollMock = cy.stub().as("scrollMock");
    cy.mount(<Hero scroll={scrollMock} />);
  });

  it("renders the background image", () => {
    cy.get("#hero-bg-img").should("exist");
    cy.get("#hero-bg-img")
      .should("have.css", "background-image")
      .should("match", /url\(".*\/bg\.jpg"\)/);
  });

  it("renders the overlay", () => {
    cy.get("#hero-img-overlay").should("exist");
    cy.get("#hero-img-overlay").should(
      "have.css",
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.75) 70%)",
    );
  });

  it("renders the TypeAnimation component", () => {
    cy.get(".text-white.text-4xl").should("exist");
    cy.get(".text-white.text-4xl").should("contain", "Hi,");
    cy.get(".text-white.text-4xl").should("contain", "Hi, I'm Adithya.", {
      timeout: 5000,
    });
  });

  it('renders the "Let\'s get started" text', () => {
    cy.get("#hero-scroll-button-text").should("contain", "Let's get started");
  });

  it("renders the scroll button", () => {
    cy.get("#hero-scroll-button").should("exist");
    cy.get("#hero-scroll-button").find("svg").should("exist");
  });

  it("calls scroll function when button is clicked", () => {
    cy.get("#hero-scroll-button").click();
    cy.get("@scrollMock").should("have.been.called");
  });
});
