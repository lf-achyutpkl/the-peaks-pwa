import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  topStoriesFirstGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridGap: "1.9rem",
    "& article:nth-of-type(1)": {
      gridColumn: "1/ span 2",
      gridRow: "1/ span 2",
    },
    // '& article:nth-of-type(2)': {
    //   gridColumn: '3',
    //   gridRow: '1',
    // },
    // '& article:nth-of-type(3)': {
    //   gridColumn: '4',
    //   gridRow: '1',
    // },
    // '& article:nth-of-type(4)': {
    //   gridColumn: '3',
    //   gridRow: '2',
    // },
    // '& article:nth-of-type(4)': {
    //   gridColumn: '4',
    //   gridRow: '2',
    // },
  },

  topStoriesSecondGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gridGap: "1.9rem",
    paddingTop: "30px",
  },
  headerWrp: {
    paddingTop: "50px",
    paddingBottom: "30px",
  },
  title: {
    fontSize: "3em",
    fontFamily: "Georgia",
  },
});

export default useStyles;
