import { createUseStyles } from 'react-jss';
import { PRIMARY } from '../../config/colors';

const useStyles = createUseStyles({
  topStoriesFirstGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1.9rem',
    '& article:nth-of-type(1)': {
      gridColumn: '1/ span 2',
      gridRow: '1/ span 2',
    },
    // '& article:nth-of-type(2)': {
    //   gridColumn: '3',
    //   gridRow: '1',
    // },
    // '& article:nth-of-type(3)': {
    //   gridColumn: '4',
    //   gridRow: '1',
    // },
    // '& article:nth-of-type(4)': {
    //   gridColumn: '3',
    //   gridRow: '2',
    // },
    // '& article:nth-of-type(4)': {
    //   gridColumn: '4',
    //   gridRow: '2',
    // },
  },

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
