exports.isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  let data = window.localStorage.getItem('Token');

  if (data) {
    let token = JSON.parse(data).accessToken;
    return token;
  }
  return false;
};

exports.getAccessToken = () => {
  if (typeof window === 'undefined') return true;
  let token = window.localStorage.getItem('Token');

  if (token) {
    let data = JSON.parse(token).accessToken;
    return data;
  }
  return null;
};

exports.getRefreshToken = () => {
  if (typeof window === 'undefined') return true;

  let token = window.localStorage.getItem('Token');

  if (token) {
    let data = JSON.parse(token).refreshToken;
    return data;
  }

  return null;
};

exports.isTokenExpired = TokenObject => {
  const currentTimestamp = new Date().getTime();
  const {exp} = TokenObject;
  if (!exp) return false;
  return currentTimestamp >= exp;
};
