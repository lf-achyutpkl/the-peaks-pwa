import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { fetchSectionNews } from '../../services/newsService';

import useStyles from './style';
import Card from '../../components/Card';
import { cacheKey } from '../../config/cacheKey';

/**
 * A component that renders category section on HomePage only.
 * @param sectionName section title
 * @param sectionId section id
 * @param color color to render bottom border for cards
 *
 */

const SectionLayout = (props) => {
  const classes = useStyles();

  const { sectionId, sectionName, color } = props.section;
  const [skip, setSkip] = useState(false);

  const { isLoading, data: sectionNews } = useQuery(cacheKey.homepage[sectionId], () => fetchSectionNews(sectionId), {
    skip,
  });

  useEffect(() => {
    // check whether data exists
    if (!isLoading && !!sectionNews) {
      setSkip(true);
    }
  }, [sectionNews, isLoading]);

  return (
    <section>
      <div className={classes.headerWrp}>
        <h1 className={classes.sectionTitle}>{sectionName}</h1>
      </div>

      <div className={classes.topStoriesSecondGrid}>
        {sectionNews &&
          sectionNews.map((news) => (
            <Card key={news.id} id={news.id} imageUrl={news.fields.thumbnail} title={news.webTitle} />
          ))}
      </div>
    </section>
  );
};

export default SectionLayout;