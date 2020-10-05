describe('Example 8', () => {
  it('succeeds', () => {
    cy.visit('/flickering/example8');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});
