const {
  REACT_APP_IS_LIVE,
  REACT_APP_CORPORATE_APP,
  REACT_APP_PERSONAL_APP,
  REACT_APP_BASE_URL,
} = import.meta.env;

export const envConfig = {
  isLive: REACT_APP_IS_LIVE === 'live' ? true : false,
  corporateAppUrl: REACT_APP_CORPORATE_APP || 'https://business.wayabank.ng',
  personalAppUrl: REACT_APP_PERSONAL_APP || 'https://ibank.wayabank.ng',
  baseUrl: REACT_APP_BASE_URL || 'https://services.wayabank.ng',
};
