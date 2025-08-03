// Cypress Commands (with 2 .then()), JS Sync Code and expect() outside the last .then()
it('Test 4', () => {
    let id = null;  // id set to null

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
            id = response.body.userId  // userId value is 1
    }).then(() => {
        cy.wrap(id).should('equal', 1)  // Pass! (because id == 1)  :order 3 
        id = id + 1  // id set to 2
        expect(id).to.equal(2)  // Pass! (because id == 2)  :order 2
    })

    expect(id).to.equal(null) // Fail!!! (because id == null) run immediately : order 1
    // This expect() runs immediately, before the Cypress commands in the block are executed.
});