describe('Example 14', () => {
  it('waits on Redux loading state', () => {
    cy.visit('/impatient/example15');

    cy.get('[data-cy=sign-out]').click();

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(1);
    cy.get('[data-cy=member-count]').contains(0);
  });
});
