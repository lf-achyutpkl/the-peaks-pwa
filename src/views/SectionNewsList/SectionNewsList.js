import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import useStyles from './style';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { SECTION } from '../../config/sections';
import { cacheKey } from '../../config/cacheKey';
import { fetchAllNewsOfSection } from '../../services/newsService';

/**
 * View to list down all the news for selected section from NavBar
 *
 * @param {*} props
 */
const SectionNewsList = (props) => {
  const classes = useStyles();

  const sectionId = props.match.params.sectionId;

  const [skip, setSkip] = useState(false);

  const { isLoading, data: sectionNews } = useQuery(
    `${cacheKey.section}${sectionId}`,
    () => fetchAllNewsOfSection(sectionId),
    {
      skip,
    }
  );

  useEffect(() => {
    // check whether data exists
    if (!isLoading && !!sectionNews) {
      setSkip(true);
    }
  }, [sectionNews, isLoading]);

  return (
    <>
      <NavBar />
      <section>
        <div className={classes.headerWrp}>
          <h1 className={classes.sectionTitle}>{SECTION[sectionId].sectionName}</h1>
        </div>

        <div className={classes.topStoriesSecondGrid}>
          {sectionNews &&
            sectionNews.map((news) => (
              <Card key={news.id} id={news.id} imageUrl={news.fields.thumbnail} title={news.webTitle} />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(SectionNewsList);
