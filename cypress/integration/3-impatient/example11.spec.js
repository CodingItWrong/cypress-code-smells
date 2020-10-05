describe('Example 11', () => {
  it('succeeds', () => {
    cy.visit('/impatient/example11');

    cy.get('[data-cy=sign-out]').click();

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(28);
    cy.get('[data-cy=member-count]').contains(42);
  });
});
