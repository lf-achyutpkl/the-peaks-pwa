import { useState } from "react";

import useStyles from "./style";
import { WHITE } from "../../config/colors";

import searchIcon from "../../assets/images/search-icon.png";

const SearchField = () => {
  const classes = useStyles(searchIcon);

  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <input
        className={`${classes.searchField} ${isActive ? classes.active : ""}`}
        placeholder="Search all news"
        autocomplete="off"
        spellcheck="false"
        dir="auto"
        type="text"
      />
    </div>
  );
};

export { SearchField };
