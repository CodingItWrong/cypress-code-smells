describe('Example 8', () => {
  it('does not render element until ready to click with Redux', () => {
    cy.visit('/flickering/example8');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});
