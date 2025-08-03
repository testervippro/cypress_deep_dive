// Only Cypress Commands
it('Test 2', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
        .its('body.userId')
        .should('eq', 1) // Pass! (because userId == 1)
        .then((id) => id + 1) // Increment id and yield value to next command
        .should('eq', 2); // Pass! (because id == 2)
});

// run correct order 1-2