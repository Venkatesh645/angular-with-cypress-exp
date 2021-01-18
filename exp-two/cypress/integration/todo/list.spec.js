/// <reference types="cypress" />

const { response1, response2, response3 } = require('../../mocks/todo/list');

context('List', () => {


  it('Initial state should not have any todo item and field should be empty', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/todo/list',
      response: response1(),
      status: 200
    }).as('myRouteAlias');

    cy.visit('http://localhost:4200')
    cy.wait('@myRouteAlias');

    cy.get('#todo-input-field')
      .should('have.value', '');

    cy.contains('No Data')
  });

  it('Initial should show 5 todo(s) gets loaded from server as initial response', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/todo/list',
      response: response2(),
      status: 200
    }).as('myRouteAlias');

    cy.visit('http://localhost:4200')
    cy.wait('@myRouteAlias');

    cy.get('#todo-input-field')
      .should('have.value', '');

    cy.get('.to-dos-list')
      .find('li')
      .should('have.length', 5)

      cy.get('.data').find('.empty-todo-array')
      .should('have.length', 0);
  });

  it('Initial load with empty response from server', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/todo/list',
      response: response3(),
      status: 200
    }).as('myRouteAlias');

    cy.visit('http://localhost:4200')
    cy.wait('@myRouteAlias');

    cy.get('#todo-input-field')
      .should('have.value', '');
    cy.contains('No Data')
  });


  it('Initial load error 500 response', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/todo/list',
      response: response3(),
      status: 500
    }).as('myRouteAlias');

    cy.visit('http://localhost:4200')
    cy.wait('@myRouteAlias');

    cy.get('#todo-input-field')
      .should('have.value', '');

    cy.contains('No Data')
    cy.contains('Failed to fetch todo list')
  });



});
