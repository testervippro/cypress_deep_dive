// cypress/e2e/order_demo.cy.js
const axios = require("axios");

describe("Prove Cypress commands run in order but axios does not", () => {
  it("should show execution order", async () => {
    cy.log("1. Cypress log before axios");

    // Axios runs immediately and logs outside the Cypress queue becuase it's not a Cypress command
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("2. 🔥 Axios response title:", response.data.title);
        //cy.log("2. 🔥 Axios response title:", response.data.title);
      });

    cy.log("3. Cypress log after axios");

    cy.visit("https://example.cypress.io"); // Just to delay the test a bit

    cy.log("4. Cypress log after visit");
  });
});
