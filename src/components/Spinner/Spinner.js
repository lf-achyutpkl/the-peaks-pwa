import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import useStyles from './style';

import { PRIMARY } from '../../config/colors';

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <Loader type="Oval" color={PRIMARY} height={50} width={50} />
    </div>
  );
};

export { Spinner };
