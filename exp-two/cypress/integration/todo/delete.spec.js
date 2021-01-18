/// <reference types="cypress" />

context('Delete', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Initial state should not have any todo item and field should be empty', () => {
    cy.get('#todo-input-field')
      .should('have.value', '');

    cy.get('.to-dos-list')
      .find('li')
      .should('have.length', 0)
  });


  it('should delete todo', () => {
    cy.get('#todo-input-field')
      .type('new todo', { delay: 250 })
      .should('have.value', 'new todo')

    cy.get('.add-todo-button').click();
    cy.get('.to-dos-list')
      .find('li')
      .should('have.length', 1);
    cy.get('.delete-todo-button')
      .click();
    cy.get('.to-dos-list')
      .find('li')
      .should('have.length', 0);
  });

});
