it('Test 7 - Native Promise vs Cypress.Promise', () => {
  //  Native JavaScript Promise
  new Promise((resolve, reject) => {
    console.log(`[${new Date().toISOString()}]  Native Promise: started`);
    setTimeout(() => {
      resolve(' Native Promise resolved');
    }, 1000);
  }).then((result) => {
    console.log(`[${new Date().toISOString()}] ${result}`);
  });

  //  Cypress.Promise (Bluebird)
  new Cypress.Promise((resolve, reject) => {
    console.log(`[${new Date().toISOString()}] 🔵 Cypress.Promise: started`);
    setTimeout(() => {
      resolve('🔵 Cypress.Promise resolved');
    }, 1000);
  }).then((result) => {
    console.log(`[${new Date().toISOString()}] ${result}`);
  });

  //  Cypress queue
  cy.log(' Cypress command - enqueued');

  
  cy.then(() => {
    console.log(`[${new Date().toISOString()}]  cy.then() block executed`);
  });


  console.log(`[${new Date().toISOString()}]  End of test block`);
});
