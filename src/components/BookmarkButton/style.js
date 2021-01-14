import { createUseStyles } from 'react-jss';

import { WHITE, PRIMARY } from '../../config/colors';

const useStyles = createUseStyles({
  bookmarkButton: {
    backgroundColor: PRIMARY,
    color: WHITE,
    padding: '8px 12px 8px 8px',
    borderRadius: '5px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  bookmarkIcon: {
    height: '14px',
    width: '18px',
    // position: 'absolute',
    top: '9px',
    left: '7px',
  },
  label: {
    paddingLeft: '5px',
  },
});

export default useStyles;
