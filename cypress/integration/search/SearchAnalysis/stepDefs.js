import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given(`I open Portal Homepage`, () => {
  cy.visit('/');
});

Then(`I see {string} in the page`, title => {
  cy.contains(title);
});

Then(`I see a search box`, () => {
  cy.get('.MuiInputBase-input').should('exist');
});

When(`I type {string}`, text => {
  cy.get('.MuiInputBase-input').type(text);
});

Then(`I see {string} in the search box`, text => {
  cy.get('.MuiInputBase-input').should('have.value', text);
});

Given(`I open GeneView page`, () => {
  cy.visit('/geneView/ENSG00000141510');
});

Then(`I see {string} on the page`, text => {
  cy.contains(text);
});

Then(`I see {string} as the synonym of the gene on the page`, text => {
  cy.contains(text);
});
