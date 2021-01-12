import { getItem, setItem } from '../utils/localstorageUtils';

/**
 * Bookmarks are stored in localstorage with following structure.
 * Actually I wanted to implement immutablity library for this like Immer.js but for such small task I am not going to install huge bundle,
 * however I have not mutated the state.
 *
 * {
 *    articleId: {
 *      articleId: '',
 *      title: '',
 *      sectionId: '',
 *      thumbnailUrl: '',
 *      createdAt: '',
 *    }
 * }
 *
 *
 */

const BOOKMARK_KEY = 'thePeakBookmarks';

export const addBookmark = (article) => {
  const articleToBookmark = {
    articleId: article.id,
    title: article.title,
    sectionId: article.sectionId,
    thumbnailUrl: article.media.imageUrl,
    createdAt: new Date(),
  };
  const existingBookmarks = getAllBookmarks();

  const bookmarks = { ...existingBookmarks, [article.id]: { ...articleToBookmark } };
  setItem(BOOKMARK_KEY, bookmarks);
};

export const removeBookmark = (articleId) => {
  const existingBookmarks = { ...getAllBookmarks() };
  delete existingBookmarks[articleId];

  setItem(BOOKMARK_KEY, existingBookmarks);
};

export const getAllBookmarks = () => {
  const bookmarks = getItem(BOOKMARK_KEY);
  return bookmarks || {};
};

export const doesExist = (articleId) => {
  return getAllBookmarks().hasOwnProperty(articleId);
};
