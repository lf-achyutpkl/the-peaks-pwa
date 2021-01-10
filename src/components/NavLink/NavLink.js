import useStyles from './style';

const NavLink = ({ label, color }) => {
  const classes = useStyles(color);

  return (
    <a href="#" className={classes.link}>
      {label}
    </a>
  );
};

export { NavLink };
