import { createUseStyles } from 'react-jss';

import { WHITE, PRIMARY } from '../../config/colors';

const useStyles = createUseStyles({
  bookmarkButton: {
    backgroundColor: PRIMARY,
    color: WHITE,
    padding: '8px',
    borderRadius: '5px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    position: 'relative',
    border: 0,
    cursor: 'pointer',
  },
  bookmarkIcon: {
    height: '14px',
    width: '18px',
    position: 'absolute',
    top: '14px',
    left: '7px',
  },
  label: {
    paddingLeft: '20px',
  },
});

export default useStyles;
