/// <reference types="Cypress" />

describe("Home Page", () => {
  it("visits our application", () => {
    cy.visit("/");
    cy.contains("homepage works!");
  });
});
