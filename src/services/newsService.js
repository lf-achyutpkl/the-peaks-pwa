import { get } from '../utils/httpUtils';

const fetchTopStories = async () => {
  const url =
    'http://content.guardianapis.com/international?show-editors-picks=true&show-fields=trailText,thumbnail&api-key=test&section=(culture|sport|lifeandstyle|world)&order-by=newest';

  const { response } = await get(url);
  return response.editorsPicks;
};

const fetchSectionNews = async (sectionId = 'sport') => {
  const url = `http://content.guardianapis.com/${sectionId}?show-editors-picks=true&show-fields=trailText,thumbnail&api-key=test&section=(culture|sport|lifeandstyle|world)&order-by=newest&page-size=3`;

  const { response } = await get(url);
  return response.results;
};

export { fetchTopStories, fetchSectionNews };
