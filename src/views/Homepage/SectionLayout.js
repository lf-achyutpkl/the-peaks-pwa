import React, { useEffect, useState } from 'react';

import { fetchSectionNews } from '../../services/newsService';

import useStyles from './style';
import Card from '../../components/Card';
/**
 * A component that renders category section on HomePage.
 * @param sectionName section title
 * @param sectionId section id
 * @param color color to render bottom border for cards
 *
 */

const SectionLayout = (props) => {
  const classes = useStyles();

  console.log(props);
  const { sectionId, sectionName, color } = props.section;

  const [sectionNews, setSectionNews] = useState();

  useEffect(() => {
    (async function getSectionNews() {
      const news = await fetchSectionNews(sectionId);
      setSectionNews(news);
    })();
  }, []);

  return (
    <section>
      <div className={classes.headerWrp}>
        <h1 className={classes.sectionTitle}>{sectionName}</h1>
      </div>

      <div className={classes.topStoriesSecondGrid}>
        {sectionNews && sectionNews.map((news) => <Card imageUrl={news.fields.thumbnail} title={news.webTitle} />)}
      </div>
    </section>
  );
};

export default SectionLayout;
