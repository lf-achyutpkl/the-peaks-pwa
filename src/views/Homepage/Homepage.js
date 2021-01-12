import { useEffect } from 'react';

import useStyles from './style';

import TopStories from './TopStories';
import SectionLayout from './SectionLayout';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { SECTION } from '../../config/sections';

/**
 * A view than renders home page the application.
 */
const Homepage = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = `Top Stories | The Peaks`;
  }, []);

  return (
    <main className={classes.container}>
      <NavBar />
      <TopStories />
      <SectionLayout section={SECTION.sport} />
      <SectionLayout section={SECTION.culture} />
      <SectionLayout section={SECTION.lifeandstyle} />
      <Footer />
    </main>
  );
};

export { Homepage };
