import { ArticlesPage } from '../pages/articles-page-actions';

const articlesPage = new ArticlesPage();

describe('Articles section', () => {
  const title = 'The principles of agile software development';
  let articleId;
  let articleContent;

  before(() => {
    articlesPage.goTo();
  });

  it('Find and verify article properties across multiple pages', () => {
    cy.apiGetArticleId(title).then((object) => {
      articleId = object.id;
      articleContent = formattedContent(object.body);

      articlesPage.getArticleByTitle(articleId, title);
      articlesPage.clickSeeMoreButton(articleId);

      cy.url().should('include', articleId);
      articlesPage.getArticleContent().then(($element) => {
        let content = formattedContent($element.text());

        expect(content).to.equal(articleContent);
      });
    });
  });
});

let formattedContent = (text) =>
  text.replace(/\n/g, '').replace(/\s+/g, ' ').replace(/:\s*-/g, ':-').trim();