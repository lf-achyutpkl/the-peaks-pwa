import useStyles from './style';

import { truncate } from '../../utils/ellipsis';

const Card = (props) => {
  const classes = useStyles();
  return (
    <article>
      <div className={classes.cardWrp}>
        {props.imageUrl && (
          <div className={classes.thumbnailWrp}>
            <figure>
              <img className={classes.thumbnail} src={props.imageUrl} />
            </figure>
          </div>
        )}

        <div className={classes.content}>
          <h2 className={classes.title}>{props.title}</h2>
          {props.description && <p className={classes.description}>{props.description}</p>}
        </div>
      </div>
    </article>
  );
};

export { Card };
