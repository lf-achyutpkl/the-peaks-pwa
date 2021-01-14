import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import useStyles from './style';

import TopStories from './TopStories';
import SectionLayout from './SectionLayout';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { ARTICLE_SORT_ORDER, SECTION } from '../../config/sections';
import Header from '../../components/Header';
import BookmarkButton from '../../components/BookmarkButton';
import { BOOKMARKS } from '../../config/routes';

/**
 * A view than renders home page the application.
 */
const Homepage = (props) => {
  const classes = useStyles();

  const [orderBy, setOrderBy] = useState(ARTICLE_SORT_ORDER[0]);

  useEffect(() => {
    document.title = `Top Stories | The Peaks`;
  }, []);

  const nextPath = (path) => {
    props.history.push(path);
  };

  return (
    <main className={classes.container}>
      <NavBar />
      <Header
        title="Top stories"
        orderByOptions={ARTICLE_SORT_ORDER}
        selected={orderBy}
        onChange={(selected) => setOrderBy(selected)}
      >
        <BookmarkButton label="view bookmark" onClick={() => nextPath(BOOKMARKS)} />
      </Header>
      <section className="page-container">
        <TopStories orderBy={orderBy.value} />
        <SectionLayout section={SECTION.sport} orderBy={orderBy.value} />
        <SectionLayout section={SECTION.culture} orderBy={orderBy.value} />
        <SectionLayout section={SECTION.lifeandstyle} orderBy={orderBy.value} />
      </section>
      <Footer />
    </main>
  );
};

export default withRouter(Homepage);
