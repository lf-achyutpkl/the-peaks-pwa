import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  thumbnail: {
    objectFit: 'cover',
    width: '100%',
  },
  caption: {
    fontSize: '0.75rem',
    color: '#959595',
    lineHeight: '1rem',
  },
});

export default useStyles;
