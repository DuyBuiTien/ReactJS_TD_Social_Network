import Cookies from 'js-cookie';
export default function setupAxios(axios, store) {

  axios.interceptors.request.use(
    (config) => {
      var tokenApi = Cookies.get('token')
      if (!tokenApi) {
        tokenApi = process.env.REACT_APP_TOKEN
      }
      console.log(tokenApi)
      if (tokenApi) {
        config.headers.Authorization = `Bearer ${tokenApi}`;
      }

      return config;
    },
    (err) => Promise.reject(err),
  );
}
