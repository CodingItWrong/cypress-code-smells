describe('Example 4', () => {
  it('waits on button to be enabled', () => {
    cy.visit('/unprepared/example4');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});
