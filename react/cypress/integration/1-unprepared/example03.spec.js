describe('Example 3', () => {
  it('fails randomly with Redux', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3001/count',
      response: {count: 10},
    });

    cy.visit('/unprepared/example3');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(11);
  });
});
