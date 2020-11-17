describe('Example 2', () => {
  it('waits on button to be enabled', () => {
    cy.visit('/unprepared/example2');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(11);
  });
});
