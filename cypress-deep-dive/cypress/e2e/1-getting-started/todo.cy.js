let testVariable = 'Initial Value';




it('Demonstrates JS vs Cypress execution order', () => {
  console.log(' Step 1: JavaScript runs immediately');

  cy.log(' Step 2: Cypress command is queued (cy.log)');

  console.log(' Step 3: Another JavaScript log');

  cy.get('body').then(() => {
    console.log(' Step 4: Inside cy.get().then() - runs after queue starts');
  });

  console.log(' Step 5: End of test block - before Cypress starts running queue');
});

console.log(' Step 0:'); // run first 


//The JavaScript timeline does not wait for the Cypress queue until both timelines reach the end of the block.
// it alway runs the JavaScript code first


it('demonstrates JS and Cypress timelines', () => {
  console.log('1. JS Start'); // Runs immediately

  cy.get('#button')           // Queued (not run yet)
    .click();                 // Also queued

  console.log('2. JS End');   // Runs immediately, BEFORE the above commands

  // When this function block ends, THEN Cypress runs its queue.
});



