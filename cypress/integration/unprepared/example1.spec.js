describe('Example 1', () => {
  it('fails', () => {
    cy.visit('/unprepared/example1');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});
