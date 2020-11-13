describe('Example 10', () => {
  it('succeeds due to instant state update', () => {
    cy.visit('/impatient/example10');

    cy.get('[data-cy=sign-out]').click();

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(1);
    cy.get('[data-cy=member-count]').contains(0);
  });
});
