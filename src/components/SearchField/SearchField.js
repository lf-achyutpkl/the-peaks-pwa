import useStyles from './style';
import searchIcon from '../../assets/images/search-icon.png';

const SearchField = () => {
  const classes = useStyles(searchIcon);

  // const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <input
        className={`${classes.searchField} ${false ? classes.active : ''}`}
        placeholder="Search all news"
        autoComplete="off"
        spellCheck="false"
        dir="auto"
        type="text"
      />
    </div>
  );
};

export { SearchField };
