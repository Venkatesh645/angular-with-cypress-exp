/// <reference types="cypress" />

const { response1, response2, response3, response4 } = require('../../mocks/todo/create');


context('Create', () => {

  beforeEach(() => {
    // cy.intercept({
    //   method: 'GET',
    //   url: '**/todo/list',
    // }, {
    //   body: response3(),
    //   statusCode: 200,
    //   delayMs: 500
    // }).as('myRouteAlias2');
  })


  // it('Initial state should not have any todo item and field should be empty', () => {
  //   cy.visit('http://localhost:4200');
  //   cy.get('#todo-input-field')
  //     .should('have.value', '');
  //   cy.contains('No Data');
  // });


  // context('should add todo', () => {

    it('rrrr', () => {

      cy.server();
      cy.route({
        method: 'GET',
        url: '**/todo/list',
        response: {
          todoList:[]
        },
        status: 200
      }).as('first');

      cy.route({
        method: 'POST',
        url: '**/todo/add',
        response: {
          message: 'added successfully.'
        },
        status: 201
      }).as('second')

      cy.visit('http://localhost:4200');
      cy.wait('@first');

      cy.get('#todo-input-field')
        .type('new todo www', { delay: 250 })
        .should('have.value', 'new todo www')

      cy.route({
        method: 'GET',
        url: '**/todo/list',
        response: {
          todoList:[{
            id: 1,
            desc: "sss"
          }]
        },
        status: 200
      }).as('third');

      cy.get('.add-todo-button').click();

      cy.wait('@third');

      cy.get('.to-dos-list')
        .find('li')
        .should('have.length', 1)
    })

  // });

  // it('should not add empty todo', () => {

  //   cy.server();
  //   cy.intercept({
  //     method: 'GET',
  //     url: '**/todo/list',
  //   }, {
  //     body: response3(),
  //     statusCode: 200,
  //     delayMs: 500
  //   }).as('myRouteAlias2');

  //   cy.visit('http://localhost:4200');
  //   cy.wait('@myRouteAlias2');
  //   cy.get('.add-todo-button').click();
  //   cy.contains('No Data');
  // });

  // it('Should show error message on failed to add todo', () => {

  //   cy.server();
  //   cy.intercept({
  //     method: 'GET',
  //     url: '**/todo/list',
  //     response: response3(),
  //     status: 200
  //   }).as('myRouteAlias2');

  //   cy.intercept({
  //     method: 'POST',
  //     url: '**/todo/add',
  //     response: response3(),
  //     status: 500
  //   }).as('myRouteAlias1');

  //   cy.visit('http://localhost:4200');

  //   cy.get('#todo-input-field')
  //     .type('new todo', { delay: 250 })
  //     .should('have.value', 'new todo');

  //   cy.get('.add-todo-button').click();

  //   cy.wait('@myRouteAlias1');
  //   cy.contains('No Data');
  // })

});
