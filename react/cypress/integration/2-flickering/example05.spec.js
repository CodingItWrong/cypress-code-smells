describe('Example 5', () => {
  it('fails', () => {
    cy.visit('/flickering/example5');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(11);
  });
});
