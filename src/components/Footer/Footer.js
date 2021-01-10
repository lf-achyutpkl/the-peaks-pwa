import useStyles from '../../views/Homepage/style';
/**
 * Footer component
 *
 */

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.footer} />
    </footer>
  );
};

export { Footer };
