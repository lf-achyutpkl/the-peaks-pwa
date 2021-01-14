import { createUseStyles } from 'react-jss';
import { PRIMARY } from '../../config/colors';

const useStyles = createUseStyles({
  topStoriesSecondGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '1.9rem',
    paddingTop: '30px',
  },
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
  sectionTitle: {
    fontSize: '2rem',
    fontFamily: 'Georgia',
  },
  footer: {
    backgroundColor: `${PRIMARY}`,
    width: '100%',
    height: '200px',
    marginTop: '2rem',
  },
  link: {
    '&:visited': {
      color: '#2096f3',
    },
    '&:hover': {
      color: '#2096f3',
    },
    '&:active': {
      color: '#2096f3',
    },
    '&:link': {
      color: '#2096f3',
    },
  },
});

export default useStyles;
