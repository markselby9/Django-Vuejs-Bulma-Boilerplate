import axios from 'axios'

const port = 8000;
axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + port;
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest'
// };

axios.defaults.timeout = 10000;

// authentication related
axios.interceptors.request.use(
  config => {
    if (sessionStorage.token) {
      config.auth = { username: sessionStorage.token, password: '' };
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default {
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error);
      });
    })
  },
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error);
      });
    })
  },
  put(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data: param
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error);
      });
    })
  },
  setHeaderToken(token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
};
