import { createUseStyles } from 'react-jss';
import { WHITE } from '../../config/colors';

const useStyles = createUseStyles({
  // searchBoxWrp: {
  //   width: '95px',
  //   height: '36px',
  //   borderBottom: `2px solid ${WHITE}`,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   display: 'flex',
  //   cursor: 'pointer',
  //   '&:hover': {
  //     opacity: 0.75,
  //   },
  // },
  searchField: (searchIcon) => ({
    backgroundColor: 'transparent',
    backgroundImage: `url(${searchIcon})`,
    backgroundPosition: '40px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15px 15px',
    border: 'none',
    cursor: 'pointer',
    height: '37px',
    color: '#9baecf',
    padding: '0 0 0 95px',
    borderBottom: `2px solid ${WHITE}`,
    position: 'relative',
    '-webkit-transition': 'width 400ms ease, background 400ms ease',
    transition: 'width 400ms ease, background 400ms ease',
    width: 0,
    '&:focus': {
      backgroundColor: '#103f8c',
      padding: '0 0 0 50px',
      backgroundPosition: '10px center',
      cursor: 'text',
      outline: 0,
      width: '230px',
    },
    '&::placeholder': {
      color: '#9baecf',
    },
  }),
  active: (searchIcon) => ({
    backgroundColor: '#103f8c',
    padding: '0 0 0 50px',
    backgroundPosition: '10px center',
    cursor: 'text',
    outline: 0,
    width: '230px',
  }),
});

export default useStyles;
