describe('🔍 Cypress: Reference vs Value in cy.wrap()', () => {


    it(' Case 2: Passes when passed by value (copied)', () => {
    let user = { name: 'Alice' };

    cy.then(() => {
      cy.log(' Wrapping a copy (value snapshot)');
      cy.wrap({ ...user }).should('deep.equal', { name: 'Alice' }); // Passes

      cy.log(' Mutating the original object');
      user.name = 'Bob'; // This won't affect the wrapped copy
    });
  });




  it(' number example', () => {
    let count = 5;

    cy.then(() => {
      cy.log('📸 Wrapping primitive value: count = 5');
      cy.wrap(count).should('equal', 5); //  Passes

      cy.log(' Mutating count to 6');
      count = 6;

      // Still compares to the original value
      cy.wrap(count).should('equal', 6); //  Also passes
    });
  });

  it(' string example', () => {
    let message = 'Hello';

    cy.then(() => {
      cy.wrap(message).should('equal', 'Hello'); //  Passes
      message = 'Hi';
      cy.wrap(message).should('equal', 'Hi'); //  Passes
    });
  });

  it(' boolean example', () => {
    let isReady = true;

    cy.then(() => {
      cy.wrap(isReady).should('equal', true); //  Passes
      isReady = false;
      cy.wrap(isReady).should('equal', false); //  Passes
    });
  });

  it('Case 1: Fails when passed by reference', () => {
    let user = { name: 'Alice' };

    cy.then(() => {
      cy.log(' Wrapping original reference');
      cy.wrap(user).should('deep.equal', { name: 'Alice' }); // Fails later

      cy.log(' Mutating the original object');
      user.name = 'Bob'; // This affects the wrapped object!
    });
  });

});


