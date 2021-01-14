import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';

import Card from '../../components/Card';
import Spinner from '../../components/Spinner';

import useStyles from './style';
import { cacheKey } from '../../config/cacheKey';
import { isEmpty } from '../../utils/arrayUtils';
import { fetchTopStories } from '../../services/newsService';

/**
 * Top Stories section
 */
const TopStories = (props) => {
  const classes = useStyles();

  const [skip, setSkip] = useState(false);
  const { isLoading, data: topStories } = useQuery(
    [cacheKey.homepage.topStories, props.orderBy],
    () => fetchTopStories(props.orderBy),
    {
      skip,
    }
  );

  useEffect(() => {
    // check whether data exists
    if (!isLoading && !!topStories) {
      setSkip(true);
    }
  }, [topStories, isLoading]);

  return (
    <>
      {isLoading || isEmpty(topStories) ? (
        <Spinner />
      ) : (
        <section>
          <div className={'homepage_topStoriesFirstGrid'}>
            <Card
              id={topStories[0].id}
              imageUrl={topStories[0].fields.thumbnail}
              title={topStories[0].webTitle}
              description={topStories[0].fields.trailText}
            />
            <Card imageUrl={topStories[1].fields.thumbnail} title={topStories[1].webTitle} id={topStories[1].id} />
            <Card imageUrl={topStories[2].fields.thumbnail} title={topStories[2].webTitle} id={topStories[2].id} />
            <Card title={topStories[3].webTitle} id={topStories[3].id} isThumbnailVisible={false} />
            <Card title={topStories[4].webTitle} id={topStories[4].id} isThumbnailVisible={false} />
          </div>
          <div className={classes.topStoriesSecondGrid}>
            {topStories &&
              topStories
                .slice(5, 8)
                .map((topStory) => (
                  <Card
                    key={topStory.id}
                    id={topStory.id}
                    imageUrl={topStory.fields.thumbnail}
                    title={topStory.webTitle}
                    description={topStory.fields.trailText}
                  />
                ))}
          </div>
        </section>
      )}
    </>
  );
};

export default TopStories;
