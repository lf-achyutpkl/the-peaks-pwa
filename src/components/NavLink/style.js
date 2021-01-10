import { createUseStyles } from 'react-jss';
import { PRIMARY } from '../../config/colors';

const useStyles = createUseStyles({
  link: (color) => ({
    color: 'white',
    width: '190px',
    height: '36px',
    fontSize: '12px',
    borderBottom: `2px solid ${color || PRIMARY}`,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      opacity: 0.75,
    },
  }),
});

export default useStyles;
