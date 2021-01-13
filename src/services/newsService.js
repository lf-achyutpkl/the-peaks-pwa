import { get } from '../utils/httpUtils';
import { getAPIKey } from './environment';
import { url, BASE_URL } from '../config/apiEnpoints';
import { jsonToQueryParams } from '../utils/queryParamsUtils';

const fetchTopStories = async (orderBy = 'newest') => {
  const queryParamsObj = {
    'show-editors-picks': 'true',
    'show-fields': 'trailText,thumbnail',
    'api-key': getAPIKey(),
    section: '(culture|sport|lifeandstyle|world)',
    'order-by': orderBy,
  };
  const queryParamsStr = jsonToQueryParams(queryParamsObj);

  const topStoriesUrl = `${url.topStories}?${queryParamsStr}`;
  const { response } = await get(topStoriesUrl);

  return response.editorsPicks;
};

const fetchSectionNews = async (sectionId, orderBy = 'newest', pageSize = 20, page = 1) => {
  const queryParamsObj = {
    'show-fields': 'trailText,thumbnail',
    'api-key': getAPIKey(),
    'order-by': orderBy,
    'page-size': pageSize,
    page: page,
  };
  const queryParamsStr = jsonToQueryParams(queryParamsObj);

  const sectionNewsUrl = `${BASE_URL}${sectionId}?${queryParamsStr}`;
  const { response } = await get(sectionNewsUrl);

  return response.results;
};

const fetchAllNewsOfSection = async (sectionId) => {
  const url = `https://content.guardianapis.com/${sectionId}?api-key=test&show-fields=trailText,thumbnail`;

  const { response } = await get(url);
  return response.results;
};

const fetchArticle = async (articleId) => {
  const url = `https://content.guardianapis.com/${articleId}?api-key=test&show-fields=headline,standfirst,body&show-elements=image`;

  const { response } = await get(url);

  return {
    id: response.content.id,
    title: response.content.fields.headline,
    standFirst: response.content.fields.standfirst,
    publicationDate: response.content.webPublicationDate,
    body: response.content.fields.body,
    sectionId: response.content.sectionId,
    media: _getMediaObject(response),
  };
};

const _getMediaObject = (response) => {
  let imageObj = {};

  const elements = response.content.elements;
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

export { fetchTopStories, fetchSectionNews, fetchArticle, fetchAllNewsOfSection };
