import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cardWrp: {
    width: '100%',
    height: '100%',
    backgroundColor: '#09357b',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailWrp: {
    lineHeight: '11px',
  },
  thumbnail: {
    objectFit: 'cover',
    width: '100%',
  },
  content: {
    color: 'WHITE',
    padding: '10px 10px 20px',
  },
  title: {
    fontSize: '1.4em',
    fontFamily: 'ui-sans-serif',
    lineHeight: '1.2em',
    fontWeight: 100,
  },
  description: {
    paddingTop: '10px',
    fontSize: '0.8em',
  },
});

export default useStyles;
