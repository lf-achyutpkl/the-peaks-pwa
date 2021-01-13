/**
 * Return api key from environment variable
 */
const getAPIKey = () => {
  return process.env.REACT_APP_GUARDIAN_API_KEY;
};

export { getAPIKey };
