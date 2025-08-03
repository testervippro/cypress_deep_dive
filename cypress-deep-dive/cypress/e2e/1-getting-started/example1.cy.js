it("Test 1", () => {
  cy.request("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => {
      let id = response.body.userId; // userId value is 1 run imamediately
      // JavaScript statements will run before the Cypress commands are executed within the block.
      cy.wrap(id).should("equal", 1); // Pass! (because id == 1)
      id = id + 1; // id set to 2

      //expect(id).to.equal(2); // Pass! (because id == 2) but run this cmd fisrt then should
      // order 2,1

      // ad this will run correct order 1-2
      cy.then(() => {
        expect(id).to.equal(2); // Pass! (because id == 2)
      });
    }
  );
});
