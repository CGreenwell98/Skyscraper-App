/// <reference types="Cypress" />

describe("workshop test", () => {
  it("visits our application", () => {
    cy.visit("/");
  });
});
