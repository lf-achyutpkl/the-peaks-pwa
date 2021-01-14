import { Link } from 'react-router-dom';

import useStyles from './style';
import NavLink from '../NavLink';
import { HOME } from '../../config/routes';
import SearchField from '../SearchField';

import { messages } from '../../lang/en';

import Logo from '../../assets/images/logo.png';
import { SECTION } from '../../config/sections';

const NavBar = () => {
  const classes = useStyles();

  return (
    <header>
      <div className={`page-wrp ${classes.headerWrp}`}>
        <div className="page-container">
          <div className={classes.navWrp}>
            <Link to={HOME}>
              <img src={Logo} className={classes.logo} alt={messages.LOGO_ALT_TEXT}></img>
            </Link>

            <div className={`${classes.rightContainer} navbar-search-container`}>
              <nav className={classes.navLinkWrp}>
                {SECTION &&
                  Object.values(SECTION).map((section) => (
                    <NavLink
                      linkTo={section.linkTo}
                      key={section.sectionName}
                      label={section.sectionName}
                      color={section.color}
                    />
                  ))}
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
