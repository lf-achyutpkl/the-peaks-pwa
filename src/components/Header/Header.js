import useStyles from './style';
import Dropdown from '../Dropdown';

/**
 *
 * Gradually, it turned out not to be generic component. //TODO Need to change it's location.
 *
 */
const Header = ({ title, onChange, selected, orderByOptions, children }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.headerWrp} page-container`}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.leftGroup}>
        {children}
        <span className={classes.dropdown}>
          <Dropdown onChange={onChange} value={selected} options={orderByOptions} />
        </span>
      </div>
    </div>
  );
};

export { Header };
