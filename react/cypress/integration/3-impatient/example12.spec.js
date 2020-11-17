describe('Example 12', () => {
  it('waits on UI element', () => {
    cy.visit('/impatient/example12');

    cy.get('[data-cy=sign-out]').click();
    cy.get('[data-cy=signed-out]').should('be.visible');

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(1);
    cy.get('[data-cy=member-count]').contains(0);
  });
});
