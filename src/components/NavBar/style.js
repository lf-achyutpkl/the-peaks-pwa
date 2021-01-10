import { createUseStyles } from "react-jss";

import { PRIMARY } from "../../config/colors";

const useStyles = createUseStyles({
  headerWrp: {
    backgroundColor: `${PRIMARY}`,
    paddingTop: "15px",
  },
  logo: {
    width: "133px",
    height: "52px",
  },
  navWrp: {
    width: "100%",
    backgroundColor: `${PRIMARY}`,
  },
  rightContainer: {
    display: "flex",
    paddingTop: "25px",
  },
  navLinkWrp: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  searchFieldWrp: {
    alignItems: "flex-end",
    display: "flex",
  },
});

export default useStyles;
