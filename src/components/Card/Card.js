import { Link } from 'react-router-dom';

import { ARTICLE_DETAIL } from '../../config/routes';
import useStyles from './style';

const Card = (props) => {
  const classes = useStyles();

  const articleRoute = ARTICLE_DETAIL.replace(':articleId', props.id);

  return (
    <article>
      <Link class={classes.link} to={articleRoute}>
        <div className={classes.cardWrp}>
          {props.imageUrl && (
            <div className={classes.thumbnailWrp}>
              <figure>
                <img className={classes.thumbnail} src={props.imageUrl} alt={props.title} />
              </figure>
            </div>
          )}

          <div className={classes.content}>
            <h2 className={classes.title}>{props.title}</h2>
            {props.description && <p className={classes.description}>{props.description}</p>}
          </div>
        </div>
      </Link>
    </article>
  );
};

export { Card };
