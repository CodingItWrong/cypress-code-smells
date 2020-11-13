describe('Example 13', () => {
  it('fails with Redux', () => {
    cy.visit('/impatient/example13');

    cy.get('[data-cy=sign-out]').click();

    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=guest-count]').contains(1);
    cy.get('[data-cy=member-count]').contains(0);
  });
});
