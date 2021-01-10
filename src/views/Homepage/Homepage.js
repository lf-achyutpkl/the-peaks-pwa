import useStyles from './style';

import Card from '../../components/Card';
import CategoryLayout from './CategoryLayout';
import Footer from '../../components/Footer';

import {} from '../../lang/en';

const Homepage = () => {
  const article = {
    imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    title: 'Coronavirus live news: poorest countries to get vaccine in weeks, says WHO; Brazil deaths pass 200,000',
    description: 'Republican senators on capitol Hill have expressed their dismay at a donald trump',
  };

  const classes = useStyles();

  return (
    <main className={classes.container}>
      <div className={classes.headerWrp}>
        <h1 className={classes.title}>Top stories</h1>
      </div>
      <section>
        <div className={classes.topStoriesFirstGrid}>
          <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
          <Card imageUrl={article.imageUrl} title={article.title} />
          <Card imageUrl={article.imageUrl} title={article.title} />
          <Card title={article.title} />
          <Card title={article.title} />
        </div>
        <div className={classes.topStoriesSecondGrid}>
          <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
          <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
          <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
        </div>
      </section>
      <CategoryLayout title="Sports" />
      <CategoryLayout title="Culture" />
      <CategoryLayout title="Life style" />
      <Footer />
    </main>
  );
};

export { Homepage };
