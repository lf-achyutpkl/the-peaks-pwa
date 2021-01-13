import { withRouter } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import useStyles from './style';

import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';

import { SECTION } from '../../config/sections';
import { isEmpty } from '../../utils/arrayUtils';
import { fetchSectionNews } from '../../services/newsService';

const PAGE_SIZE = 9;

/**
 * Page to list down all the news for selected section from NavBar with infinite scroll enabled
 *
 * @param {*} props
 */
const SectionNewsList = (props) => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  const sectionId = props.match.params.sectionId;

  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    // Instantiate IntersetObserver and start observing loader position,
    // once loader position changes and that matches with rootMargin this will trigger handleObserver.
    // HandleObserver will update page. And when page chagnes,
    // there will be an api call which will fetch more data from updated page.
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [sectionId, sectionId]);

  useEffect(() => {
    fetchData();
  }, [page, sectionId]);

  // when user reaches to bottom section, update the page
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  const fetchData = async () => {
    const articleList = await fetchSectionNews(sectionId, 'newest', PAGE_SIZE, page);

    if (!articleList.length) {
      setIsLastPage(true);
    }

    setArticles([...articles, ...articleList]);
  };

  // handle when user changes page from nav bar
  useEffect(() => {
    sectionId && (document.title = `${SECTION[sectionId].sectionName} | The Peaks`);
    setArticles([]);
  }, [sectionId]);

  return (
    <>
      <NavBar />
      <section>
        <div className={classes.headerWrp}>
          <h1 className={classes.sectionTitle}>{SECTION[sectionId].sectionName}</h1>
        </div>
        <div className={classes.topStoriesSecondGrid}>
          {!isEmpty(articles) &&
            articles.map((article) => (
              <Card key={article.id} id={article.id} imageUrl={article.fields.thumbnail} title={article.webTitle} />
            ))}
        </div>
        <div ref={loader} className={isLastPage ? classes.hidden : ''}>
          <Spinner />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default withRouter(SectionNewsList);
