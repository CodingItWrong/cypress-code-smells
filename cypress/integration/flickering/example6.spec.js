describe('Example 6', () => {
  it('succeeds', () => {
    cy.visit('/flickering/example6');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});
