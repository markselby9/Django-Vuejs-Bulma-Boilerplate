import axios from 'axios'

const port = 8000;
axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + port;
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest'
// };

axios.defaults.timeout = 10000;

export default {
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error);
      });
    })
  },
  post (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error);
      });
    })
  }
};
