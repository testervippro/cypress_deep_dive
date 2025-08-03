// Cypress Commands (with 2 .then()), JS Sync Code and should() outside the last .then()

// What if, instead of putting an expect at the end of the test, 
// I use Cypress commands to perform the assertion (using .wrap() and .should())?
it('Test 5', () => {
    let id = null;  // id set to null

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
            id = response.body.userId  // userId value is 1
    }).then(() => {
        cy.wrap(id).should('equal', 1)  // Pass! (because id == 1)
        id = id + 1  // id set to 2
        expect(id).to.equal(2)  // Pass! (because id == 2)
    })

//cy.wrap(id).should(...)	Queued immediately
    cy.wrap(id).should('equal', 2) // Will Fail!!! (because id == null)
});

// And that is exactly what happens! The Cypress assertion at the very end of the test is executed last, 
// BUT when the command .wrap() 
// is added to the Cypress queue, the variable id still holds the value null.
// Remember? JavaScript statements are executed before Cypress commands,
//  so the JavaScript timeline reaches the end of the test (with the id variable still set to null)
//   before any of the earlier Cypress commands are executed. So the test fails!