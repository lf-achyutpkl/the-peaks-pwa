import useStyles from './style';
import NavLink from '../NavLink';
import SearchField from '../SearchField';
import Card from '../Card';

import { messages } from '../../lang/en';
import { NAV_LINKS as navColors } from '../../config/colors';

import Logo from '../../assets/images/logo.png';

const NavBar = (props) => {
  const classes = useStyles();

  const LINKS = [
    {
      label: messages.NEWS_TODAY,
      color: navColors.GREEN,
    },
    {
      label: messages.SPORTS,
      color: navColors.RED,
    },
    {
      label: messages.CULTURE,
      color: navColors.YELLOW,
    },
    {
      label: messages.LIFE_STYLE,
      color: navColors.BLUE,
    },
  ];

  const article = {
    imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    title: 'Coronavirus live news: poorest countries to get vaccine in weeks, says WHO; Brazil deaths pass 200,000',
    description: 'Republican senators on capitol Hill have expressed their dismay at a donald trump',
  };

  return (
    <header>
      <div className={`page-wrp ${classes.headerWrp}`}>
        <div className="page-container">
          <div className={classes.navWrp}>
            <img src={Logo} className={classes.logo} alt={messages.LOGO_ALT_TEXT}></img>

            <div className={classes.rightContainer}>
              <nav className={classes.navLinkWrp}>
                {LINKS && LINKS.map((link) => <NavLink key={link.label} label={link.label} color={link.color} />)}
              </nav>

              <div className={classes.searchFieldWrp}>
                <SearchField />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { NavBar };
