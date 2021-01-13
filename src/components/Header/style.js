import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerWrp: {
    paddingTop: '50px',
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '3rem',
    fontFamily: 'Georgia',
  },
  leftGroup: {
    display: 'flex',
  },
  dropdown: {
    marginLeft: '20px',
  },
});

export default useStyles;
