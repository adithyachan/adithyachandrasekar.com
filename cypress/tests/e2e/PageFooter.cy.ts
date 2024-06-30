describe("PageFooter E2E", () => {
  beforeEach(() => {
    cy.visit("/"); // Adjust this to the page where your footer is visible
  });

  it("renders the footer", () => {
    cy.get("#page-footer").should("be.visible");
  });

  it("LinkedIn link works correctly", () => {
    cy.get("#linkedin-link")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/adithya-chandrasekar/",
      )
      .and("have.attr", "target", "_blank");
  });

  it("GitHub repository link works correctly", () => {
    cy.get("#github-repo-link")
      .should(
        "have.attr",
        "href",
        "https://github.com/adithyachan/adithyachandrasekar.com",
      )
      .and("have.attr", "target", "_blank");
  });

  it("displays correct copyright information", () => {
    cy.get("#copyright").should("contain", "© Adithya Chandrasekar 2023");
  });

  it("GitHub profile link works correctly", () => {
    cy.get("#github-profile-link")
      .should("have.attr", "href", "https://github.com/adithyachan")
      .and("have.attr", "target", "_blank");
  });

  it("toggles color scheme when clicked", () => {
    cy.get("body").then(($body) => {
      const initialBackgroundColor = $body.css("background-color");
      cy.get("#color-scheme-toggle").click();
      cy.get("body").should(
        "not.have.css",
        "background-color",
        initialBackgroundColor,
      );
    });
  });

  it("external links open in new tab", () => {
    cy.get("#linkedin-link").should("have.attr", "target", "_blank");
    cy.get("#github-repo-link").should("have.attr", "target", "_blank");
    cy.get("#github-profile-link").should("have.attr", "target", "_blank");
  });
});

export {};
