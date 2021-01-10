import useStyles from './style';
import Card from '../../components/Card';
/**
 * A component that renders category section on HomePage.
 * @param title section title
 * @param color color to render bottom border for cards
 *
 */

const CategoryLayout = ({ title, color }) => {
  const article = {
    imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    title: 'Coronavirus live news: poorest countries to get vaccine in weeks, says WHO; Brazil deaths pass 200,000',
    description: 'Republican senators on capitol Hill have expressed their dismay at a donald trump',
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.headerWrp}>
        <h1 className={classes.title}>{title}</h1>
      </div>

      <div className={classes.topStoriesSecondGrid}>
        <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
        <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
        <Card imageUrl={article.imageUrl} title={article.title} description={article.description} />
      </div>
    </>
  );
};

export default CategoryLayout;
