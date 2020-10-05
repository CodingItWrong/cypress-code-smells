describe('Example 9', () => {
  it('fails', () => {
    cy.visit('/impatient/example9');

    cy.get('[data-cy=sign-out]').click();

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(28);
    cy.get('[data-cy=member-count]').contains(42);
  });
});
