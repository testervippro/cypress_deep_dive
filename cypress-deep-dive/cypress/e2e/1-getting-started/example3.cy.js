// Cypress Commands (with 2 .then()) and JS Sync Code
it('Test 3 ', () => {
    let id = null;  // id set to null

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
            id = response.body.userId  // userId value is 1
    }).then(() => {
        cy.wrap(id).should('equal', 1)  // Pass! (because id == 1)
        //cy.wrap(id).should('equal', 1) is inside .then(), the value of id will still be 1 at that moment

        id = id + 1  // id set to 2
        expect(id).to.equal(2)  // Pass! (because id == 2)
    })
});

// run correct order 2-1

// Execution Flow
//  JS runs let id = null immediately.

//  Cypress queues cy.request(...)

//  Cypress queues .then(response => { id = response.body.userId })

//  Cypress queues another .then(...) with:

// cy.wrap(id).should('equal', 1) → Cypress queued command

// id = id + 1 → runs immediately

// expect(id).to.equal(2) → synchronous assertion