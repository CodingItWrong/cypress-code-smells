describe('Example 11', () => {
  it('waits on loading state', () => {
    cy.visit('/impatient/example11');

    cy.get('[data-cy=sign-out]').click();

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(1);
    cy.get('[data-cy=member-count]').contains(0);
  });
});
