describe("Second Test", () => {
  it("Visit the page", () => {
    cy.visit("/");
    // cy.get(".header-menu-toggle").click();
    cy.scrollTo(0, 5200);
    cy.get("#contact").should("be.visible");
    cy.get("#contactName").type("Destiny Ross");
    cy.get("#contactEmail").type("dlr41@zips.uakron.edu");
    cy.get("#contactSubject").type("New Application Request");
    cy.get("#contactMessage").type(
      "Hello. I'd love to talk about making a new application. I can be reached at 123-456-7890"
    );
  });
});
