import { NAV_LINKS } from '../config/colors';

/**
 * A collection of section details used in app.
 */
export const SECTION = {
  world: {
    sectionId: 'world',
    sectionName: 'News Today',
    color: NAV_LINKS.GREEN,
    linkTo: '/',
  },
  sport: {
    sectionId: 'sport',
    sectionName: 'Sports',
    color: NAV_LINKS.RED,
    linkTo: '/section/sport',
  },
  culture: {
    sectionId: 'culture',
    sectionName: 'Culture',
    color: NAV_LINKS.YELLOW,
    linkTo: '/section/culture',
  },
  lifeandstyle: {
    sectionId: 'lifeandstyle',
    sectionName: 'Life Style',
    color: NAV_LINKS.BLUE,
    linkTo: '/section/lifeandstyle',
  },
};
