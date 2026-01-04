Cypress.Commands.add('apiGetArticleId', (title) => {
  cy.request({
    method: 'GET',
    url: '/api/articles',
  }).then((res) => {
    let article = res.body.find((article) => article.title === title);
    cy.wrap(article);
  });
});