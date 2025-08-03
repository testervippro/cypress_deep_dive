const getValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 500);
  });
};





//You can use await if you're working with your own Promise, but you must not await Cypress commands.

it(' Await custom async logic (not Cypress)', async () => {
  const result = await getValue(); 
  expect(result).to.equal(42);
});


const callApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!response.ok) throw new Error('API call failed');
  return await response.json();
};

it('Works by keeping async logic separate from Cypress chain', () => {
  cy.then(async () => {
    const result = await callApi();  //  JS async code inside Cypress .then()
    expect(result.id).to.equal(1);   //  Pure JS assertion
    expect(result.userId).to.equal(1);
  });
});
