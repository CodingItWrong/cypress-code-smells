describe('Example 13', () => {
  it('waits on network request', () => {
    cy.server();

    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3001/sessions/1',
    }).as('signOut');

    cy.visit('/impatient/example13');

    cy.get('[data-cy=sign-out]').click();
    cy.wait('@signOut');

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(1);
    cy.get('[data-cy=member-count]').contains(0);
  });
});
