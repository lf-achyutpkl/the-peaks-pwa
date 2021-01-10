import { React } from 'react';

import useStyles from './style';

function Button(props) {
  const classes = useStyles();

  return <div className={classes.navWrp}>Button</div>;
}

export default Button;
