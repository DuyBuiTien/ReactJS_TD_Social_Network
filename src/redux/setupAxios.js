import Cookies from 'js-cookie';
export default function setupAxios(axios, store) {

  axios.interceptors.request.use(
    (config) => {
      var tokenApi = Cookies.get('token')
      if (!tokenApi) {
        tokenApi =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEwMjA5MzUsImV4cCI6MTYwMTEwNzMzNSwiaGFzaHB3ZCI6InpmQ1R5YStBUGJoT2JsL3BQUzVVWFE9PSIsImNvbnRleHQiOnsidXNlciI6eyJ1c2VyTmFtZSI6ImRlbW8xIiwiZGlzcGxheU5hbWUiOiJkZW1vMSJ9fX0.6d8YsRpGfeNF38GiBnDI1Yu8boa8tBq53GgMTVlj3i8'
      }

      if (tokenApi) {
        config.headers.Authorization = `Bearer ${tokenApi}`;
      }

      return config;
    },
    (err) => Promise.reject(err),
  );
}
