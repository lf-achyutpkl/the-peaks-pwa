import useStyles from './style';
import defaultImage from '../../assets/images/defaultImage.png';

const Image = ({ imageUrl, altText, caption }) => {
  const classes = useStyles();
  const imageSrc = !imageUrl ? defaultImage : imageUrl;

  return (
    <figure>
      <img className={classes.thumbnail} src={imageSrc} alt={altText} />
      <figcaption className={classes.caption}>{caption}</figcaption>
    </figure>
  );
};

export { Image };
