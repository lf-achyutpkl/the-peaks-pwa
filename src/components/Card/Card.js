import { Link } from 'react-router-dom';

import useStyles from './style';
import { ARTICLE_DETAIL } from '../../config/routes';
import Image from '../Image';
import { PRIMARY } from '../../config/colors';
import { SECTION } from '../../config/sections';

const Card = (props) => {
  const classes = useStyles();

  const articleRoute = ARTICLE_DETAIL.replace(':articleId', props.id);

  const bottomborderColor = props.sectionId && SECTION[props.sectionId] ? SECTION[props.sectionId].color : PRIMARY;

  return (
    <article>
      <Link className={classes.link} to={articleRoute}>
        <div className={classes.cardWrp} style={{ borderBottom: `2px solid ${bottomborderColor}` }}>
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
