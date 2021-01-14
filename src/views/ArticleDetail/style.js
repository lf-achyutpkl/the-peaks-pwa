import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main: {
    padding: '1rem',
    paddingTop: '5rem',
  },
  // intro: {
  //   display: 'grid',
  //   gridTemplateColumns: '1fr 0.6fr',
  //   gridGap: '2rem',
  //   '& article': {
  //     borderBottom: '1px solid #ededed',
  //     paddingBottom: '20px',
  //     marginBottom: '20px',
  //   },
  // },
  thumbnail: {
    width: '100%',
  },
  date: {
    fontSize: '0.7rem',
    color: '#2f2f2f',
    textTransform: 'uppercase',
    paddingTop: '30px',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Georgia',
    paddingTop: '15px',
    paddingBottom: '15px',
    lineHeight: '2.5rem',
    color: '#212121',
  },
  description: {
    fontSize: '1.2rem',
    color: '#212121',
    lineHeight: '1.4',
    fontFamily: 'Georgia',
  },
  newsDetails: {
    fontSize: '0.82rem',
    color: '#2f2f2f',
    lineHeight: '1.25rem',
    '& img': {
      width: '100%',
      objectFit: 'cover',
    },
  },
  caption: {
    fontSize: '0.75rem',
    color: '#959595',
    lineHeight: '1rem',
  },
  spinnerWrp: {
    height: 'calc(100vh - 462px)',
  },
});

export default useStyles;
