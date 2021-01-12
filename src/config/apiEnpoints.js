export const BASE_URL = 'https://content.guardianapis.com/';

export const url = {
  search: `${BASE_URL}/search`,
  detail: `${BASE_URL}/{:id}`,
};

// https://content.guardianapis.com/search?section=(culture|sport|education)&api-key={{thepeakAPI}}
// https://open-platform.theguardian.com/explore/

const queryParams = {
  'show-editors-picks': 'show-editors-picks',
  'show-fields': ['trailText', 'thumbnail'],
  'page-size': 3,
  'order-by': '',
  section: '(culture|sport|lifeandstyle|world)',
};