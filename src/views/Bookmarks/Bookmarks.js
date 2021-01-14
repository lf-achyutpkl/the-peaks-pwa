import React, { useState } from 'react';

import useStyles from './style';
import { messages } from '../../lang/en';

import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { isEmpty } from '../../utils/arrayUtils';
import { getAllBookmarks } from '../../services/bookmarkService';

/**
 * Page to list down all the Bookmarked news.
 *
 * @param {*} props
 */
const Bookmarks = () => {
  const classes = useStyles();

  const [articlesObj] = useState(getAllBookmarks());

  const articles = Object.values(articlesObj);

  return (
    <>
      <NavBar />
      <section className="page-container">
        <div className={classes.headerWrp}>
          <h1 className={classes.sectionTitle}>{messages.ALL_BOOKMARK}</h1>
        </div>

        <div className={classes.topStoriesSecondGrid}>
          {!isEmpty(articles) ? (
            articles.map((news) => (
              <Card
                key={news.articleId}
                id={news.articleId}
                imageUrl={news.thumbnailUrl}
                title={news.title}
                sectionId={news.sectionId}
              />
            ))
          ) : (
            <p className={classes.nodata}>Sorry, bookmark list is empty.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export { Bookmarks };
