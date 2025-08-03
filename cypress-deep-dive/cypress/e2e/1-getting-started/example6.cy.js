it('Test 6', () => {
    let id = null;  // id set to null

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
            id = response.body.userId  // userId value is 1
    }).then(() => {
        cy.wrap(id).should('equal', 1)  // Pass! (because id == 1)
        id = id + 1  // id set to 2
        expect(id).to.equal(2)  // Pass! (because id == 2)
    })

    cy.then(() => {
        expect(id).to.equal(2) // Pass! (because id == 2)
        cy.wrap(id).should('equal', 2) //Pass! (because id == 2)
    })
});

// This approach will encapsulate those assertions within a Cypress block, 
// allowing time for the id variable to be set by the previous commands. 
// Such a technique is a common and recommended practice in Cypress when you want to 'sync' commands with one another.