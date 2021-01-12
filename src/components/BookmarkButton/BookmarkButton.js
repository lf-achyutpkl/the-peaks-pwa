import bookmarkIcon from '../../assets/images/bookmark.png';

import useStyles from './style';

const BookmarkButton = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <button onClick={onClick} className={classes.bookmarkButton}>
      <img src={bookmarkIcon} alt="Bookmark button" className={classes.bookmarkIcon} />
      <span className={classes.label}>{label}</span>
    </button>
  );
};

export { BookmarkButton };
