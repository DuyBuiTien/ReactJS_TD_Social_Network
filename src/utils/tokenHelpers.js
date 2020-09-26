import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  var tokenApi = Cookies.get('token')
  if (!tokenApi) {
    tokenApi =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEwMjA5MzUsImV4cCI6MTYwMTEwNzMzNSwiaGFzaHB3ZCI6InpmQ1R5YStBUGJoT2JsL3BQUzVVWFE9PSIsImNvbnRleHQiOnsidXNlciI6eyJ1c2VyTmFtZSI6ImRlbW8xIiwiZGlzcGxheU5hbWUiOiJkZW1vMSJ9fX0.6d8YsRpGfeNF38GiBnDI1Yu8boa8tBq53GgMTVlj3i8'
  }
  return tokenApi;
};

export const getAccessToken = () => {
  if (typeof window === 'undefined') return true;
  var tokenApi = Cookies.get('token')
  if (!tokenApi) {
    tokenApi =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEwMjA5MzUsImV4cCI6MTYwMTEwNzMzNSwiaGFzaHB3ZCI6InpmQ1R5YStBUGJoT2JsL3BQUzVVWFE9PSIsImNvbnRleHQiOnsidXNlciI6eyJ1c2VyTmFtZSI6ImRlbW8xIiwiZGlzcGxheU5hbWUiOiJkZW1vMSJ9fX0.6d8YsRpGfeNF38GiBnDI1Yu8boa8tBq53GgMTVlj3i8'
  }
  return tokenApi;
};

export const getRefreshToken = () => {
  if (typeof window === 'undefined') return true;

  var tokenApi = Cookies.get('token')
  if (!tokenApi) {
    tokenApi =
      ''
  }
  return tokenApi;
};

export const isTokenExpired = TokenObject => {
  const currentTimestamp = new Date().getTime();
  const {exp} = TokenObject;
  if (!exp) return false;
  return currentTimestamp >= exp;
};
