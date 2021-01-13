import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useQuery } from 'react-query';

import { fetchArticle } from '../../services/newsService';
import { addBookmark, removeBookmark, doesExist } from '../../services/bookmarkService';

import useStyles from './style';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import BookmarkButton from '../../components/BookmarkButton';
import Spinner from '../../components/Spinner';

/**
 * Page to render detail article news.
 */
const ArticleDetail = (props) => {
  const classes = useStyles();

  const articleId = props.match.params.articleId;
  const [skip, setSkip] = useState(false);

  const { isLoading, data: article } = useQuery(articleId, () => fetchArticle(articleId), {
    skip,
  });

  const [isBookmarked, setIsBookmarked] = useState(doesExist(articleId));

  useEffect(() => {
    // check whether data exists
    if (!isLoading && !!article) {
      setSkip(true);
    }
  }, [article, isLoading]);

  useEffect(() => {
    article && (document.title = `${article.title} | The Peaks`);
  }, [article]);

  return (
    <>
      <NavBar />
      <main className={classes.main}>
        {isLoading ? (
          <div className={classes.spinnerWrp}>
            <Spinner />
          </div>
        ) : (
          <>
            <section className={classes.intro}>
              <article>
                {isBookmarked ? (
                  <BookmarkButton label="Remove Bookmark" onClick={() => handleRemoveBookmark(article)} />
                ) : (
                  <BookmarkButton label="Add Bookmark" onClick={() => handleAddBookmark(article)} />
                )}
                <div className={classes.date}>{new Date(article.publicationDate).toUTCString()}</div>
                <h1 className={classes.title}>{article.title}</h1>
                <h2 className={classes.description} dangerouslySetInnerHTML={{ __html: article.standFirst }}></h2>
              </article>
            </section>
            {/* end of top section  */}
            <div className={classes.gridView}>
              <section>
                <article>
                  <p className={classes.newsDetails} dangerouslySetInnerHTML={{ __html: article.body }} />
                </article>
              </section>
              <aside>
                <figure>
                  <img className={classes.thumbnail} src={article.media.imageUrl} alt={article.media.altText} />
                  <figcaption className={classes.caption}>
                    {article.media.caption} {article.media.credit}
                  </figcaption>
                </figure>
              </aside>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );

  function handleAddBookmark(article) {
    addBookmark(article);
    setIsBookmarked(true);
  }

  function handleRemoveBookmark(article) {
    removeBookmark(article.id);
    setIsBookmarked(false);
  }
};

export default withRouter(ArticleDetail);
