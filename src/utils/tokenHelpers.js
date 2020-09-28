import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  var tokenApi = Cookies.get('token')
  if (!tokenApi) {
    tokenApi = process.env.REACT_APP_TOKEN
  }
  return tokenApi;
};

export const getAccessToken = () => {
  if (typeof window === 'undefined') return true;
  var tokenApi = Cookies.get('token')
  if (!tokenApi) {
    tokenApi = process.env.REACT_APP_TOKEN
  }
  return tokenApi;
};

export const getRefreshToken = () => {
  if (typeof window === 'undefined') return true;

  var tokenApi = Cookies.get('token')
  if (!tokenApi) {
    tokenApi = process.env.REACT_APP_TOKEN
  }
  return tokenApi;
};

export const isTokenExpired = TokenObject => {
  const currentTimestamp = new Date().getTime();
  const {exp} = TokenObject;
  if (!exp) return false;
  return currentTimestamp >= exp;
};
