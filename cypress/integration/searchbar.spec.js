/// <reference types="Cypress" />

const { createVariableDeclaration } = require("typescript");

describe("searchbar test", () => {
  it("searches a query and clicks a response", () => {
    cy.visit("/buildings");
    cy.get(".sidebar").children("input").type("The");
    cy.contains("Eiffel Tower").click();
  });
});
