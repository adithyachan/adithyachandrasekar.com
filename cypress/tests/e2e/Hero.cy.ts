describe("Hero Component E2E", () => {
  beforeEach(() => {
    // Assuming the Hero component is on the home page
    cy.visit("/");
  });

  it("renders the background image", () => {
    cy.get("#hero-bg-img")
      .should("exist")
      .and("have.css", "background-image")
      .and("match", /url\(".*\/bg\.jpg"\)/);
  });

  it("renders the overlay", () => {
    cy.get("#hero-img-overlay")
      .should("exist")
      .and(
        "have.css",
        "background-image",
        "linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.75) 70%)",
      );
  });

  it("renders the TypeAnimation component and animates text", () => {
    cy.get(".text-white.text-4xl").should("exist").and("contain", "Hi,");

    cy.get(".text-white.text-4xl").should("contain", "Hi, I'm Adithya.", {
      timeout: 5000,
    });
  });

  it('renders the "Let\'s get started" text', () => {
    cy.get("#hero-scroll-button-text").should("contain", "Let's get started");
  });

  it("renders the scroll button", () => {
    cy.get("#hero-scroll-button").should("exist").find("svg").should("exist");
  });

  it("hides scroll button when scrolled down", () => {
    cy.scrollTo(0, 151);
    cy.get("#hero-scroll-button").parent().should("have.class", "opacity-0");
  });

  it("shows scroll button when not scrolled down", () => {
    cy.scrollTo(0, 0);
    cy.get("#hero-scroll-button")
      .parent()
      .should("not.have.class", "opacity-0");
  });
});
