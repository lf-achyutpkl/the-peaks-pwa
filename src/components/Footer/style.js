import { createUseStyles } from 'react-jss';
import { PRIMARY } from '../../config/colors';

const useStyles = createUseStyles({
  footer: {
    backgroundColor: `${PRIMARY}`,
    width: '100%',
    height: '200px',
    marginTop: '2em',
  },
});

export default useStyles;
