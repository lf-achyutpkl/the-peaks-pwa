import React, { useEffect, useState } from 'react';

import useStyles from './style';
import Card from '../../components/Card';

import { fetchTopStories } from '../../services/newsService';

/**
 * Top Stories section
 */
const TopStories = () => {
  const [topStories, setTopStories] = useState();

  useEffect(() => {
    (async function getTopStories() {
      const topStories = await fetchTopStories();
      setTopStories(topStories);
    })();
  }, []);

  const classes = useStyles();

  if (!topStories) {
    return 'Loading....';
  }

  return (
    <>
      <div className={classes.headerWrp}>
        <h1 className={classes.title}>Top stories</h1>
      </div>
      <section>
        <div className={classes.topStoriesFirstGrid}>
          <Card
            imageUrl={topStories[0].fields.thumbnail}
            title={topStories[0].webTitle}
            description={topStories[0].fields.trailText}
          />
          <Card imageUrl={topStories[1].fields.thumbnail} title={topStories[1].webTitle} />
          <Card imageUrl={topStories[2].fields.thumbnail} title={topStories[2].webTitle} />
          <Card title={topStories[3].webTitle} />
          <Card title={topStories[4].webTitle} />
        </div>
        <div className={classes.topStoriesSecondGrid}>
          {topStories &&
            topStories
              .slice(5, 8)
              .map((topStory) => (
                <Card
                  key={topStory.id}
                  imageUrl={topStory.fields.thumbnail}
                  title={topStory.webTitle}
                  description={topStory.fields.trailText}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default TopStories;
