import { Link } from 'react-router-dom';

import useStyles from './style';
import { ARTICLE_DETAIL } from '../../config/routes';
import Image from '../Image';

const Card = (props) => {
  const classes = useStyles();

  const articleRoute = ARTICLE_DETAIL.replace(':articleId', props.id);

  return (
    <article>
      <Link className={classes.link} to={articleRoute}>
        <div className={classes.cardWrp}>
          <div className={classes.thumbnailWrp}>
            {props.isThumbnailVisible && <Image imageUrl={props.imageUrl} altText={props.title} />}
          </div>

          <div className={classes.content}>
            <h2 className={classes.title}>{props.title}</h2>
            {props.description && <p className={classes.description}>{props.description}</p>}
          </div>
        </div>
      </Link>
    </article>
  );
};

Card.defaultProps = {
  isThumbnailVisible: true,
};

export { Card };
