/**
 * A utility method to convert json object to query params.
 * @param {Object} params
 */
export const jsonToQueryParams = (params) =>
  Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
