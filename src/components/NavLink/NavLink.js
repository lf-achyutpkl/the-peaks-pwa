import { Link } from 'react-router-dom';
import useStyles from './style';

const NavLink = ({ label, color, linkTo }) => {
  const classes = useStyles(color);

  return (
    <Link to={linkTo} className={classes.link}>
      {label}
    </Link>
  );
};

export { NavLink };
