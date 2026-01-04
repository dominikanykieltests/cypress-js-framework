import { dataTestId, getArticleTitleById, seeArticleById } from './base-page-selectors';

export const articlesFloatingBar = Object.freeze({
  FLOATING_BAR: '.navigation-bar',
  PREV_BUTTON: '#btnPrev',
  NEXT_BUTTON: '#btnNext',
  CURRENT_PAGE_NUMBER: dataTestId('current-page'),
  TOTAL_PAGES_NUMBER: dataTestId('total-pages'),
  SELECT_ITEMS: dataTestId('per-page-select'),
});

export const articlesListing = Object.freeze({
  ARTICLE_TITLE: (id) => getArticleTitleById(id),
  SEE_MORE_BUTTON: (id) => seeArticleById(id),
});

export const article = Object.freeze({
  ARTICLE_BODY: dataTestId('article-body'),
});