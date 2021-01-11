import useStyles from './style';

import SectionLayout from './SectionLayout';
import Footer from '../../components/Footer';
import TopStories from './TopStories';

import { SECTION } from '../../config/sections';
const Homepage = () => {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <TopStories />
      <SectionLayout section={SECTION.SPORTS} />
      <SectionLayout section={SECTION.CULTURE} />
      <SectionLayout section={SECTION.LIFESTYLE} />
      <Footer />
    </main>
  );
};

export { Homepage };
