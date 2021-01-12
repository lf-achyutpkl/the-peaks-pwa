import { get } from '../utils/httpUtils';

const fetchTopStories = async () => {
  console.log('fetching top stories server....');
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

const fetchArticle = async (articleId) => {
  const url = `https://content.guardianapis.com/${articleId}?api-key=test&show-fields=webPublicationDate,headline,webTitle,body,thumbnail`;

  const { response } = await get(url);
  return {
    title: response.content.fields.headline,
    standFirst: response.content.fields.standFirst,
    publicationDate: response.content.webPublicationDate,
    body: response.content.fields.body,
    media: _getMediaObject(response),
  };
};

const _getMediaObject = (response) => {
  let imageObj = {};

  const elements = response.content.eleements;
  if (elements.length) {
    const assets = elements[0].assets;
    if (assets.length) {
      const firstImage = assets[0];

      imageObj = {
        imageUrl: firstImage.file,
        altText: firstImage.typeData.altText,
        caption: firstImage.typeData.caption,
        credit: firstImage.typeData.credit,
      };
    }
  }

  return imageObj;
};

export { fetchTopStories, fetchSectionNews, fetchArticle };
