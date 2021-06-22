/// <reference types="Cypress" />

const building = {
  Name: "The Empire State Building",
};

describe("Add Building test", () => {
  it("tests add building button", () => {
    cy.visit("/buildings");

    cy.contains("Add Building").click();

    cy.url().should("include", "/add-building");

    cy.get(".form-container-top")
      .children("label")
      .children("input")
      .each(($el) => {
        cy.get($el).type("h");
      });

    cy.get(".submit-btn").click();
  });
});
