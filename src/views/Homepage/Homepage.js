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

  return (
    <main className={classes.container}>
      <NavBar />
      <TopStories />
      <SectionLayout section={SECTION.SPORTS} />
      <SectionLayout section={SECTION.CULTURE} />
      <SectionLayout section={SECTION.LIFESTYLE} />
      <Footer />
    </main>
  );
};

export { Homepage };
